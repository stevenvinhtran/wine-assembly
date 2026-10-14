'use strict';
// lib/native-mbaa-pcm.js against MBAACC's own ov_read conversion loop, run in
// the emulator: random channels (normal audio, clipping, exact .5 products,
// huge values, NaN/Inf), random strides. The guest starts at the loop head
// 0x4F4465 and is stopped at its exit 0x4F44A6; with and without the hook the
// output samples, the stack slots it leaves and the registers must agree.
// Skips when the game executable is absent (it is never committed).
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');
const { NativeMbaaPcm16 } = require('../lib/native-mbaa-pcm');

const EXE = path.join(__dirname, '..', 'binaries', 'mbaa', 'MBAA.exe');
const LOOP = 0x4F4465, EXIT = 0x4F44A6;

(async () => {
  if (!fs.existsSync(EXE)) { console.log('SKIP native mbaa pcm16: binaries/mbaa/MBAA.exe not present'); return; }
  const exe = fs.readFileSync(EXE);
  const pe = exe.readUInt32LE(0x3c), nsec = exe.readUInt16LE(pe + 6), optSz = exe.readUInt16LE(pe + 20), opt = pe + 24;
  const imageBase = exe.readUInt32LE(opt + 28);
  const module = await WebAssembly.compile(compileSrcWasm());
  const memory = new WebAssembly.Memory({ initial: 8192, maximum: 8192, shared: true });
  const ctx = { exports: null, getMemory: () => memory.buffer, nativeHook: null };
  const imports = createHostImports(ctx);
  Object.assign(imports.host, { memory, log: () => {}, log_i32: () => {}, exit: () => {}, wait_multiple: () => 0, terminate_thread: () => 0 });
  const e = (await WebAssembly.instantiate(module, imports)).exports;
  ctx.exports = e;
  e.init_thread(0, imageBase, 0, 0, 0, 0, 0);
  e.heap_init(regions.BASE.GUEST_HEAP_BASE - regions.GUEST_BASE + imageBase);
  const bytes = new Uint8Array(memory.buffer), view = new DataView(memory.buffer);
  const wa = g => e.guest_to_wasm(g) >>> 0;
  for (let i = 0; i < nsec; i++) {
    const o = opt + optSz + i * 40;
    const va = exe.readUInt32LE(o + 12), rawSize = exe.readUInt32LE(o + 16), raw = exe.readUInt32LE(o + 20);
    for (let off = 0; off < rawSize; off += 4096) bytes.set(exe.subarray(raw + off, raw + off + Math.min(4096, rawSize - off)), wa(imageBase + va + off));
  }
  const N = 2048;
  const src = e.guest_alloc(N * 4) >>> 0, dst = e.guest_alloc(N * 8 + 16) >>> 0, stack = e.guest_alloc(4096) >>> 0;
  let seed = 9;
  const rnd = () => (seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) / 4294967296;
  const hook = new NativeMbaaPcm16({ eip: LOOP }, { getBuffer: () => memory.buffer });
  const special = [0, -0, 0.5 / 32768, 1.5 / 32768, -2.5 / 32768, 1, -1, 1.0001, 70000, -1e12, NaN, Infinity, -Infinity, 65535.5 / 32768];
  const make = t => {
    const n = 1 + Math.floor(rnd() * N);
    const vals = [];
    for (let i = 0; i < n; i++) vals.push(rnd() < 0.1 ? special[Math.floor(rnd() * special.length)] : (rnd() * 2.4 - 1.2));
    return { n, vals, start: Math.floor(rnd() * Math.min(n, 5)), stride: 1 + Math.floor(rnd() * 4) };
  };
  const run = (c, withHook) => {
    for (let i = 0; i < c.n; i++) view.setFloat32(wa(src + i * 4), c.vals[i], true);
    bytes.fill(0xEE, wa(dst), wa(dst) + N * 8 + 16);
    const sp = stack + 1024;
    for (let i = 0; i < 0x40; i += 4) view.setUint32(wa(sp + i), 0xA5A5A5A5, true);
    e.set_esp(sp); e.set_esi(src); e.set_eax(c.start); e.set_ebx(c.n); e.set_edx(dst); e.set_edi(c.stride * 2); e.set_ecx(0x77);
    e.set_eip(LOOP);
    let done = null;
    ctx.nativeHook = (eip, ex) => {
      if (eip === EXIT) { done = { eax: ex.get_eax() >>> 0, ecx: ex.get_ecx() >>> 0, edx: ex.get_edx() >>> 0 }; ex.set_eip(0); return true; }
      return withHook ? hook.hook(eip, ex) : false;
    };
    e.set_native_hook(1, EXIT);
    e.set_native_hook(0, withHook ? LOOP : 0);
    for (let k = 0; k < 200 && (e.get_eip() >>> 0); k++) e.run(500000);
    assert(done, 'reached the loop exit');
    return Object.assign(done, {
      out: Buffer.from(bytes.slice(wa(dst), wa(dst) + c.n * c.stride * 2 + 8)).toString('hex'),
      slots: Buffer.from(bytes.slice(wa(sp + 0x18), wa(sp + 0x30))).toString('hex'),
    });
  };
  let cases = 0;
  for (let t = 0; t < 150; t++) {
    const c = make(t);
    assert.deepStrictEqual(run(c, true), run(c, false), `case ${t} (${c.n} samples from ${c.start}, stride ${c.stride})`);
    cases++;
  }
  e.set_native_hook(0, 0);
  assert(hook.stats.samples > 20000);
  console.log(`native mbaa pcm16 PASS: ${cases} channels identical to MBAA.exe 0x4f4465, ${hook.stats.samples} samples converted natively`);
})().catch(err => { console.error(err); process.exitCode = 1; });
