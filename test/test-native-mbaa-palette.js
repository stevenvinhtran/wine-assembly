'use strict';
// lib/native-mbaa-palette.js against MBAACC's own loops, run in the emulator.
//
// MBAA.exe is mapped at its preferred base (the harness's image base) and the
// guest is started at 0x402ecf -- right after the LockRect helper -- with the
// register and stack state that point has. The guest result (texture bytes,
// restored registers, ESP/EIP/EAX, the reused argument slots) must equal the
// native one, for both handled paths over random palettes and indices,
// clamping in both directions, and odd sizes. Unhandled formats must decline.
// Skips when the game executable is absent (it is never committed).
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');
const { NativeMbaaPalette } = require('../lib/native-mbaa-palette');

const EXE = path.join(__dirname, '..', 'binaries', 'mbaa', 'MBAA.exe');
const ENTRY = 0x402ecf;

(async () => {
  if (!fs.existsSync(EXE)) { console.log('SKIP native mbaa palette: binaries/mbaa/MBAA.exe not present'); return; }
  const exe = fs.readFileSync(EXE);
  const pe = exe.readUInt32LE(0x3c), nsec = exe.readUInt16LE(pe + 6), optSz = exe.readUInt16LE(pe + 20), opt = pe + 24;
  const imageBase = exe.readUInt32LE(opt + 28);
  assert.strictEqual(imageBase, 0x400000);

  const module = await WebAssembly.compile(compileSrcWasm());
  const memory = new WebAssembly.Memory({ initial: 8192, maximum: 8192, shared: true });
  const ctx = { exports: null, getMemory: () => memory.buffer };
  const imports = createHostImports(ctx);
  Object.assign(imports.host, { memory, log: () => {}, log_i32: () => {}, exit: () => {},
    wait_multiple: () => 0, terminate_thread: () => 0 });
  const e = (await WebAssembly.instantiate(module, imports)).exports;
  ctx.exports = e;
  e.init_thread(0, imageBase, 0, 0, 0, 0, 0);
  e.heap_init(regions.BASE.GUEST_HEAP_BASE - regions.GUEST_BASE + imageBase);
  const bytes = new Uint8Array(memory.buffer), view = new DataView(memory.buffer);
  const wa = g => e.guest_to_wasm(g) >>> 0;
  for (let i = 0; i < nsec; i++) {
    const o = opt + optSz + i * 40;
    const va = exe.readUInt32LE(o + 12), rawSize = exe.readUInt32LE(o + 16), raw = exe.readUInt32LE(o + 20);
    for (let off = 0; off < rawSize; off += 4096) {
      const n = Math.min(4096, rawSize - off);
      bytes.set(exe.subarray(raw + off, raw + off + n), wa(imageBase + va + off));
    }
  }

  const SURF = 160 * 80 * 4 + 4096;
  const surface = e.guest_alloc(SURF) >>> 0, srcBuf = e.guest_alloc(200 * 100) >>> 0;
  const pal = e.guest_alloc(1024) >>> 0, wrapper = e.guest_alloc(16) >>> 0, obj = e.guest_alloc(0x80) >>> 0;
  const stack = e.guest_alloc(8192) >>> 0;
  assert(surface && srcBuf && pal && wrapper && obj && stack);
  let seed = 7;
  const rnd = n => (seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) % n;
  const handler = new NativeMbaaPalette({ eip: ENTRY }, { getBuffer: () => memory.buffer });

  const SAVED = [0x11111111, 0x22222222, 0x33333333, 0x44444444];
  const setup = c => {
    for (let i = 0; i < 1024; i++) bytes[wa(pal) + i] = c.palZero && i < 4 ? 0 : rnd(256);
    for (let i = 0; i < 200 * 100; i++) bytes[wa(srcBuf) + i] = rnd(4) === 0 ? 0 : rnd(256);
    for (let i = 0; i < SURF; i += 4096) bytes.fill(0xcd, wa(surface + i), wa(surface + i) + Math.min(4096, SURF - i));
    view.setUint32(wa(wrapper), obj, true);
    view.setUint32(wa(obj + 0x10), c.fmt, true);
    view.setUint32(wa(obj + 0x28), c.W, true);
    view.setUint32(wa(obj + 0x2c), c.H, true);
    view.setUint32(wa(obj + 0x30), c.pitch, true);
    const sp = stack + 2048;
    SAVED.forEach((v, i) => view.setUint32(wa(sp + i * 4), v, true));
    view.setUint32(wa(sp + 0x28), 0, true);                // return to 0: halt
    view.setUint32(wa(sp + 0x2c), wrapper, true);          // arg1
    view.setUint32(wa(sp + 0x30), srcBuf, true);
    view.setUint32(wa(sp + 0x34), c.srcFmt, true);
    view.setUint32(wa(sp + 0x38), c.sw, true);
    view.setUint32(wa(sp + 0x3c), c.sh, true);
    e.set_esp(sp); e.set_eax(surface); e.set_edi(pal); e.set_ebp(wrapper);
    e.set_esi(obj); e.set_ebx(0); e.set_eip(ENTRY);
    return sp;
  };
  const capture = sp => ({
    surface: Buffer.from(bytes.slice(wa(surface), wa(surface) + SURF)).toString('base64'),
    regs: [e.get_eax(), e.get_ebx(), e.get_esi(), e.get_edi(), e.get_ebp(), e.get_esp(), e.get_eip()].map(v => v >>> 0),
    slots: [0x2c, 0x30, 0x34, 0x38, 0x3c].map(o => view.getUint32(wa(sp + o), true)),
  });

  const cases = [];
  for (const fmt of [21, 25]) for (const srcFmt of fmt === 21 ? [41] : [41, 28]) {
    for (const [W, H, sw, sh] of [[64, 32, 64, 32], [64, 32, 40, 20], [40, 20, 64, 32], [33, 17, 31, 19], [1, 1, 1, 1], [16, 16, 0, 8], [16, 16, 8, 0]]) {
      const pitch = fmt === 21 ? W * 4 + (W % 3) * 4 : W * 2 + (W % 3) * 2;
      cases.push({ fmt, srcFmt, W, H, pitch, sw, sh, palZero: (W & 1) === 1 });
    }
  }
  let answered = 0;
  for (const c of cases) {
    const label = JSON.stringify(c);
    const s0 = seed;
    let sp = setup(c);
    for (let i = 0; i < 50 && (e.get_eip() >>> 0); i++) e.run(1000000);
    assert.strictEqual(e.get_eip() >>> 0, 0, `${label}: guest returned`);
    const guest = capture(sp);
    seed = s0;
    sp = setup(c);
    assert.strictEqual(handler.hook(ENTRY, e), true, `${label}: native answered`);
    answered++;
    const native = capture(sp);
    assert.deepStrictEqual(native.regs, guest.regs, `${label}: registers`);
    assert.deepStrictEqual(native.slots, guest.slots, `${label}: argument slots`);
    assert.strictEqual(native.surface, guest.surface, `${label}: texture bytes`);
  }
  // Formats it does not own run as guest code.
  for (const [fmt, srcFmt] of [[21, 21], [21, 40], [26, 41], [41, 41], [28, 28]]) {
    setup({ fmt, srcFmt, W: 8, H: 8, pitch: 32, sw: 8, sh: 8 });
    assert.strictEqual(handler.hook(ENTRY, e), false, `declines texture ${fmt} from ${srcFmt}`);
  }
  setup({ fmt: 21, srcFmt: 41, W: 8, H: 8, pitch: 32, sw: 8, sh: 8 });
  e.set_eax(0);
  assert.strictEqual(handler.hook(ENTRY, e), false, 'declines a failed lock');
  console.log(`native mbaa palette PASS: ${answered} cases identical to MBAA.exe 0x402ecf, 6 declines`);
})().catch(err => { console.error(err); process.exitCode = 1; });
