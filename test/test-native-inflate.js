'use strict';
// lib/native-inflate.js through the hook ABI (zlib inflate(strm, flush),
// stdcall `ret 8`) on a fake guest: Node's zlib produces stored, fixed and
// dynamic-Huffman streams at several levels over image-like and random data;
// the hook is fed random input slices and drained into random output sizes the
// way libpng reads rows. Output must equal the original bytes, the stream must
// end with Z_STREAM_END and leave trailing input bytes unconsumed.
const assert = require('assert');
const zlib = require('zlib');
const { NativeInflate } = require('../lib/native-inflate');

const MEM = 64 << 20, buf = new ArrayBuffer(MEM), u8 = new Uint8Array(buf), dv = new DataView(buf);
const ex = {
  regs: { eax: 0, esp: 0, eip: 0 },
  guest_to_wasm: a => a, guest_read32: a => dv.getUint32(a, true), guest_write32: (a, v) => dv.setUint32(a, v >>> 0, true),
  get_esp() { return this.regs.esp; }, set_esp(v) { this.regs.esp = v >>> 0; },
  set_eax(v) { this.regs.eax = v | 0; }, set_eip(v) { this.regs.eip = v >>> 0; },
};
const EIP = 0x73ed54, STRM = 0x1000, STACK = 0x2000, IN = 0x100000, OUT = 0x2000000;
let seed = 7;
const rnd = n => (seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) % n;

function payloads() {
  const out = [];
  const img = new Uint8Array(300 * 1201);                  // filtered-row-like
  for (let y = 0; y < 300; y++) { img[y * 1201] = y % 5; for (let x = 1; x < 1201; x++) img[y * 1201 + x] = (x * 3 + y + (x >> 4)) & 255; }
  out.push(img);
  const sprite = new Uint8Array(256 * 1025);               // mostly transparent
  for (let i = 0; i < sprite.length; i++) sprite[i] = rnd(40) ? 0 : rnd(256);
  out.push(sprite);
  out.push(Uint8Array.from({ length: 70000 }, () => rnd(256)));   // incompressible
  out.push(new Uint8Array(0));
  out.push(Uint8Array.from({ length: 5 }, () => rnd(256)));
  return out;
}

const hook = new NativeInflate({ eip: EIP }, { getBuffer: () => buf });
let streams = 0, calls = 0;
for (const data of payloads()) {
  for (const opts of [{ level: 0 }, { level: 1 }, { level: 6 }, { level: 9 }, { level: 6, strategy: zlib.constants.Z_FIXED },
    { level: 9, strategy: zlib.constants.Z_HUFFMAN_ONLY }, { level: 6, strategy: zlib.constants.Z_RLE }]) {
    const comp = zlib.deflateSync(Buffer.from(data), opts);
    const trailing = rnd(3);                              // bytes after the stream
    const src = new Uint8Array(comp.length + trailing); src.set(comp); src.fill(0xAB, comp.length);
    u8.set(src, IN);
    for (let i = 0; i < 56; i += 4) dv.setUint32(STRM + i, 0, true);
    dv.setUint32(STRM + 28, 0xBEEF0000 + streams, true);   // state pointer
    let fed = 0, produced = 0, rc = 0, guard = 0;
    while (rc !== 1) {
      if (++guard > 1e6) assert.fail('no progress');
      if (dv.getUint32(STRM + 4, true) === 0 && fed < src.length) {
        const n = Math.min(src.length - fed, 1 + rnd(9000));
        dv.setUint32(STRM, IN + fed, true); dv.setUint32(STRM + 4, n, true); fed += n;
      }
      const room = 1 + rnd(5000);
      dv.setUint32(STRM + 12, OUT + produced, true); dv.setUint32(STRM + 16, room, true);
      ex.regs.esp = STACK; dv.setUint32(STACK, 0x1234, true); dv.setUint32(STACK + 4, STRM, true); dv.setUint32(STACK + 8, 1, true);
      assert.strictEqual(hook.hook(EIP, ex), true, 'hook answers');
      assert.strictEqual(ex.regs.eip, 0x1234); assert.strictEqual(ex.regs.esp, STACK + 12, 'ret 8');
      rc = ex.regs.eax; calls++;
      const got = room - dv.getUint32(STRM + 16, true);
      produced += got;
      assert(rc === 0 || rc === 1 || (rc === -5 && fed >= src.length && dv.getUint32(STRM + 4, true) === 0 && got === 0 && false),
        `rc ${rc}`);
      assert.strictEqual(dv.getUint32(STRM + 20, true), produced, 'total_out');
    }
    assert.strictEqual(produced, data.length, `length (level ${opts.level} strategy ${opts.strategy})`);
    assert.deepStrictEqual(u8.subarray(OUT, OUT + produced), data, 'bytes');
    const leftIn = dv.getUint32(STRM + 4, true) + (src.length - fed);
    assert.strictEqual(leftIn, trailing, 'trailing input left unconsumed');
    assert.strictEqual(dv.getUint32(STRM + 8, true), comp.length, 'total_in');
    streams++;
  }
}
// libpng's progressive reader (png_process_IDAT_data) calls inflate only
// while avail_in > 0, handing it one row buffer at a time. A decoder that
// swallows all input up front strands every row after the first (this broke
// MBAACC's textures and text), so the whole image must still come out.
for (const data of payloads().slice(0, 3)) for (const level of [1, 9]) {
  const row = 1201, comp = zlib.deflateSync(Buffer.from(data), { level });
  u8.set(comp, IN);
  for (let i = 0; i < 56; i += 4) dv.setUint32(STRM + i, 0, true);
  dv.setUint32(STRM + 28, 0xF00D0000 + streams, true);
  let produced = 0, fin = false, fed = 0;
  dv.setUint32(STRM + 16, 0, true);
  while (fed < comp.length && !fin) {
    const n = Math.min(comp.length - fed, 1 + rnd(9000));
    dv.setUint32(STRM, IN + fed, true); dv.setUint32(STRM + 4, n, true); fed += n;
    while (dv.getUint32(STRM + 4, true) > 0 && !fin) {
      if (dv.getUint32(STRM + 16, true) === 0) { dv.setUint32(STRM + 12, OUT + produced, true); dv.setUint32(STRM + 16, row, true); }
      const room = dv.getUint32(STRM + 16, true);
      ex.regs.esp = STACK; dv.setUint32(STACK, 0x1234, true); dv.setUint32(STACK + 4, STRM, true); dv.setUint32(STACK + 8, 2, true);
      assert.strictEqual(hook.hook(EIP, ex), true);
      const rc = ex.regs.eax;
      assert(rc === 0 || rc === 1, `progressive rc ${rc}`);
      produced += room - dv.getUint32(STRM + 16, true);
      if (rc === 1) fin = true;
    }
  }
  assert(fin, 'progressive stream finished');
  assert.strictEqual(produced, data.length, 'progressive: every row delivered');
  assert.deepStrictEqual(u8.subarray(OUT, OUT + produced), data, 'progressive bytes');
  streams++;
}
// A stream first seen mid-way is left to the guest.
dv.setUint32(STRM + 8, 100, true); dv.setUint32(STRM + 28, 0xCAFE, true);
ex.regs.esp = STACK; assert.strictEqual(hook.hook(EIP, ex), false, 'mid-stream declined');
// Corrupt data fails the stream with Z_DATA_ERROR.
for (let i = 0; i < 56; i += 4) dv.setUint32(STRM + i, 0, true);
dv.setUint32(STRM + 28, 0xD00D, true); u8.set([0x78, 0x9c, 0xff, 0xff, 0xff], IN);
dv.setUint32(STRM, IN, true); dv.setUint32(STRM + 4, 5, true); dv.setUint32(STRM + 12, OUT, true); dv.setUint32(STRM + 16, 100, true);
ex.regs.esp = STACK; dv.setUint32(STACK, 0x1234, true); dv.setUint32(STACK + 4, STRM, true);
assert.strictEqual(hook.hook(EIP, ex), true); assert.strictEqual(ex.regs.eax, -3, 'Z_DATA_ERROR');
console.log(`native inflate PASS: ${streams} streams, ${calls} calls, chunked in/out, trailing bytes preserved`);
