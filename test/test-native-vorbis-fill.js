'use strict';
// lib/native-vorbis-fill.js against a fake guest: the MBAACC 0x416ea0
// contract (EAX = bytes wanted; [esp+4] stream, [esp+8] dst, [esp+12] loop;
// returns produced bytes, zero-fills the rest, adds to the produced counter,
// ret 0xc), with a stub decoder standing in for the browser's.
const assert = require('assert');
const { NativeVorbisFill } = require('../lib/native-vorbis-fill');

const FRAMES = 1000, CH = 2, RATE = 44100, FRAME_BYTES = CH * 2, TOTAL = FRAMES * FRAME_BYTES;
const STREAM = 0x1000, INFO = 0x2000, SRC = 0x3000, SRC_SIZE = 0x800, LOCK = 0x4000;
const ESP = 0x7000, RET = 0x5555, DST = 0x8000;

function makeGuest() {
  const buffer = new ArrayBuffer(0x40000);
  const dv = new DataView(buffer);
  const regs = { eax: 0, esp: 0, eip: 0 };
  const ex = {
    guest_to_wasm: a => a >>> 0,
    guest_read32: a => dv.getUint32(a, true) | 0,
    guest_write32: (a, v) => dv.setUint32(a, v >>> 0, true),
    get_esp: () => regs.esp, set_esp: v => { regs.esp = v >>> 0; },
    get_eax: () => regs.eax, set_eax: v => { regs.eax = v >>> 0; },
    set_eip: v => { regs.eip = v >>> 0; },
  };
  dv.setUint32(STREAM, 1, true);
  dv.setUint32(STREAM + 0x18, INFO, true);
  dv.setUint32(INFO + 4, CH, true);
  dv.setUint32(INFO + 8, RATE, true);
  dv.setUint32(STREAM + 0x310, SRC, true);
  dv.setUint32(STREAM + 0x314, SRC_SIZE, true);
  dv.setFloat64(STREAM + 0x308, 100 / RATE, true);        // loop at frame 100
  dv.setUint32(LOCK + 4, 0xffffffff, true);                // LockCount -1: free
  for (let i = 0; i < SRC_SIZE; i++) dv.setUint8(SRC + i, (i * 13 + 7) & 255);
  return { buffer, dv, regs, ex };
}

// Sample value of frame f, channel c: unique, so positions are checkable.
const sample = (f, c) => ((f * 2 + c) * 1237) & 0x7fff;
const expectBytes = (fromByte, n) => {
  const out = new Uint8Array(n), dv = new DataView(out.buffer);
  for (let i = 0; i < n; i += 2) {
    const s = (fromByte + i) / 2, f = Math.floor(s / CH), c = s % CH;
    dv.setInt16(i, sample(f, c), true);
  }
  return out;
};

(async () => {
  const g = makeGuest();
  let decodes = 0, release;
  const gate = new Promise(r => { release = r; });
  const fill = new NativeVorbisFill(
    { eip: 0x416ea0, lockAddr: LOCK },
    {
      getBuffer: () => g.buffer,
      decodeOgg: async (bytes, channels, rate) => {
        decodes++;
        assert.strictEqual(bytes.length, SRC_SIZE, 'decoder gets the whole compressed song');
        assert.strictEqual(bytes[1], (13 + 7) & 255, 'decoder gets the guest bytes');
        assert.deepStrictEqual([channels, rate], [CH, RATE]);
        await gate;
        const pcm = new Int16Array(FRAMES * CH);
        for (let f = 0; f < FRAMES; f++) for (let c = 0; c < CH; c++) pcm[f * CH + c] = sample(f, c);
        return pcm;
      },
    });

  const call = (want, loop, to = DST) => {
    g.dv.setUint32(ESP, RET, true);
    g.dv.setUint32(ESP + 4, STREAM, true);
    g.dv.setUint32(ESP + 8, to, true);
    g.dv.setUint32(ESP + 12, loop ? 1 : 0, true);
    g.regs.esp = ESP; g.regs.eax = want; g.regs.eip = 0x416ea0;
    new Uint8Array(g.buffer, DST, 0x8000).fill(0xa5);
    return fill.hook(0x416ea0, g.ex);
  };
  const dst = n => new Uint8Array(g.buffer, DST, n);
  const produced = () => g.dv.getUint32(STREAM + 0x324, true);
  const flush = () => new Promise(r => setImmediate(r));

  // Not ready: the guest's libvorbis runs, and one decode starts.
  assert.strictEqual(call(800, 1), false, 'declines before the decode is ready');
  assert.strictEqual(call(800, 1), false, 'still declines while pending');
  await flush();
  assert.strictEqual(decodes, 1, 'exactly one decode per song');
  // Meanwhile the guest decoder produced 100 frames.
  g.dv.setUint32(STREAM + 0x324, 100 * FRAME_BYTES, true);
  release(); await flush(); await flush();

  // Ready: first one guest-decoded fill is compared with the native PCM.
  const SEG = DST + 0x10000;                                         // another ring segment
  assert.strictEqual(call(400, 1, SEG), false, 'declines one fill to verify against libvorbis');
  new Uint8Array(g.buffer, SEG, 400).set(expectBytes(400, 400));   // what the guest decoder wrote
  g.dv.setUint32(STREAM + 0x324, 200 * FRAME_BYTES, true);

  // Verified: hand off at the guest's position.
  assert.strictEqual(call(800, 1), true, 'answers once verified');
  assert(fill.songs.get(`${SRC}:${SRC_SIZE}`).verified, 'song marked verified');
  assert.deepStrictEqual(dst(800), expectBytes(800, 800), 'continues from the guest decoder position');
  assert.strictEqual(g.regs.eax, 800, 'EAX = bytes produced');
  assert.strictEqual(g.regs.esp, ESP + 16, 'ret 0xc pops the return address and three arguments');
  assert.strictEqual(g.regs.eip, RET, 'returns to the caller');
  assert.strictEqual(produced(), 1600, 'produced counter advanced');

  // Crossing the end with loop set: seek to the loop time and keep filling.
  assert.strictEqual(call(4000, 1), true);
  const tail = TOTAL - 1600;
  assert.deepStrictEqual(dst(tail), expectBytes(1600, tail), 'plays to the end');
  assert.deepStrictEqual(dst(4000).subarray(tail), expectBytes(400, 4000 - tail), 'loops to the loop frame');
  assert.strictEqual(g.regs.eax, 4000, 'a looped fill is complete');
  assert.strictEqual(produced(), 5600, 'counter keeps counting through the loop');

  // Another thread holds the lock: a native stream keeps being answered.
  g.dv.setUint32(LOCK + 4, 0, true);
  assert.strictEqual(call(40, 1), true, 'native stream is answered under a held lock');
  g.dv.setUint32(LOCK + 4, 0xffffffff, true);

  // The guest routine ran once on its own: stay in time with it.
  const posBefore = fill.streams.get(STREAM).pos;
  g.dv.setUint32(STREAM + 0x324, produced() + 80, true);
  assert.strictEqual(call(40, 1), true);
  assert.deepStrictEqual(dst(40), expectBytes(posBefore + 80, 40), 'skips ahead by what the guest produced');

  // Reopened from the start, no loop: play out, then zero-fill.
  g.dv.setUint32(STREAM + 0x324, 0, true);
  assert.strictEqual(call(TOTAL + 100, 0), true, 'reopened stream is answered from 0');
  assert.deepStrictEqual(dst(TOTAL), expectBytes(0, TOTAL), 'plays the whole song');
  assert(dst(TOTAL + 100).subarray(TOTAL).every(b => b === 0), 'zero-fills past the end');
  assert.strictEqual(g.regs.eax, TOTAL, 'EAX excludes the zero fill');

  // Closed stream: the guest decides.
  g.dv.setInt32(STREAM, -1, true);
  assert.strictEqual(call(40, 1), false, 'closed stream is declined');
  g.dv.setInt32(STREAM, 1, true);

  // A different song at the same address: decode it, decline meanwhile.
  g.dv.setUint8(SRC + 3, 0x99);
  assert.strictEqual(call(40, 1), false, 'new song content is declined while it decodes');
  await flush(); await flush();
  assert.strictEqual(decodes, 2, 'new song decoded');
  // Its verification fill does not match the native PCM: never answer it.
  g.dv.setUint32(STREAM + 0x324, 0, true);
  assert.strictEqual(call(400, 1, SEG), false, 'declines to verify the new song');
  new Uint8Array(g.buffer, SEG, 400).set(expectBytes(4, 400));      // one sample off
  g.dv.setUint32(STREAM + 0x324, 400, true);
  assert.strictEqual(call(400, 1), false, 'misaligned song is rejected');
  assert.strictEqual(fill.songs.get(`${SRC}:${SRC_SIZE}`).state, 'rejected');
  assert.strictEqual(call(400, 1), false, 'and stays with the guest decoder');

  // Not native yet and the lock is held: let the guest wait for it.
  const fresh = new NativeVorbisFill({ eip: 0x416ea0, lockAddr: LOCK }, { getBuffer: () => g.buffer, decodeOgg: async () => new Int16Array(0) });
  g.dv.setUint32(LOCK + 4, 0, true);
  g.dv.setUint32(ESP, RET, true); g.dv.setUint32(ESP + 4, STREAM, true); g.dv.setUint32(ESP + 8, DST, true);
  g.regs.esp = ESP; g.regs.eax = 40;
  assert.strictEqual(fresh.hook(0x416ea0, g.ex), false, 'held lock before takeover: declined');
  assert.strictEqual(fresh.stats.decodes, 0, 'and nothing is read under the lock');

  console.log(`native vorbis fill PASS (answered ${fill.stats.answered}, declined ${fill.stats.declined})`);
})().catch(err => { console.error(err); process.exitCode = 1; });
