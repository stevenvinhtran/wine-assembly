'use strict';
// lib/native-mbaa-lookup-skip.js against MBAACC's own loop, run in the
// emulator. The guest starts at the loop head 0x4DC990 over random resource
// tables and stops where the scan decides: an entry with the same hash and
// group (0x4DC9F8, where the name comparison starts), an equal hash in
// another group (0x4DCA74, not found) or the end of the table (0x4DCA74).
// With and without the hook it must stop at the same place with the same
// index, entry pointer and stack slots.
// Skips when the game executable is absent (it is never committed).
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');
const { NativeMbaaLookupSkip } = require('../lib/native-mbaa-lookup-skip');

const EXE = path.join(__dirname, '..', 'binaries', 'mbaa', 'MBAA.exe');
const LOOP = 0x4DC990, STOPS = [0x4DC9F8, 0x4DCA74, 0x4DCA56];

(async () => {
  if (!fs.existsSync(EXE)) { console.log('SKIP native mbaa lookup-skip: binaries/mbaa/MBAA.exe not present'); return; }
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
  const w32 = (a, v) => view.setUint32(wa(a), v >>> 0, true), r32 = a => view.getUint32(wa(a), true);
  const MAX = 3000;
  const table = e.guest_alloc(0x100) >>> 0, entries = e.guest_alloc(MAX * 0x2C + 64) >>> 0, stack = e.guest_alloc(8192) >>> 0;
  let seed = 5;
  const rnd = n => (seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) % n;
  const hook = new NativeMbaaLookupSkip({ eip: LOOP }, { getBuffer: () => memory.buffer });
  let stopped = null;
  const setup = c => {
    w32(table + 0x6C, entries); w32(table + 0x70, entries + c.n * 0x2C);
    for (let i = 0; i < c.n; i++) {
      const p = entries + i * 0x2C;
      w32(p + 0x1C, c.hashes[i]); w32(p + 0x20, c.groups[i]);
    }
    const sp = stack + 2048;
    w32(sp + 0x14, c.start * 0x2C); w32(sp + 0x18, c.group); w32(sp + 0x1C, c.hash);
    e.set_esp(sp); e.set_ebp(table); e.set_ebx(c.start); e.set_esi(0x1111); e.set_edi(0x2222); e.set_eip(LOOP);
    return sp;
  };
  const run = (c, withHook) => {
    const sp = setup(c);
    stopped = null;
    ctx.nativeHook = (eip, ex) => {
      if (STOPS.includes(eip)) { stopped = { at: eip, ebx: ex.get_ebx() >>> 0, esi: ex.get_esi() >>> 0, edi: ex.get_edi() >>> 0, ebp: ex.get_ebp() >>> 0 }; ex.set_eip(0); return true; }
      return withHook ? hook.hook(eip, ex) : false;
    };
    STOPS.forEach((s, i) => e.set_native_hook(i + 1, s));
    e.set_native_hook(0, withHook ? LOOP : 0);
    for (let n = 0; n < 500 && (e.get_eip() >>> 0); n++) e.run(200000);
    assert(stopped, 'the scan reached a decision');
    return Object.assign(stopped, { slot14: r32(sp + 0x14), esp: e.get_esp() >>> 0 });
  };
  let cases = 0;
  for (let t = 0; t < 120; t++) {
    const n = 1 + rnd(MAX);
    const hash = rnd(0xFFFFFFF), group = rnd(4);
    const hashes = [], groups = [];
    for (let i = 0; i < n; i++) { hashes.push(rnd(50) ? rnd(0xFFFFFFF) : hash); groups.push(rnd(4)); }
    if (t % 5 === 0) for (let i = 0; i < n; i++) if (hashes[i] === hash) hashes[i] ^= 1;   // no match at all
    const c = { n, hash, group, hashes, groups, start: rnd(n) };
    assert.deepStrictEqual(run(c, true), run(c, false), `case ${t} (${n} entries from ${c.start})`);
    cases++;
  }
  e.set_native_hook(0, 0);
  assert(hook.stats.skipped > 10000, `skipped ${hook.stats.skipped}`);
  console.log(`native mbaa lookup-skip PASS: ${cases} scans identical to MBAA.exe 0x4dc990, ${hook.stats.skipped} iterations skipped`);
})().catch(err => { console.error(err); process.exitCode = 1; });
