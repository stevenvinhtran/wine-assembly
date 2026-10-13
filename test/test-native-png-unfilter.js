'use strict';
// lib/native-png-unfilter.js against libpng's png_read_filter_row in
// d3dx9_36.dll (VA 0x70ab8a), run in the emulator. The DLL prefers the
// harness's image base, so it is mapped unrelocated and called through a stub
// (stdcall, ret 0x14). Every filter type, 1..8 bytes per pixel and random rows
// must come out byte-identical to the native unfilter, with a balanced stack;
// the hook must leave invalid filter values to libpng. Skips without the DLL.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');
const { NativePngUnfilter } = require('../lib/native-png-unfilter');

const DLL = path.join(__dirname, '..', 'binaries', 'mbaa', 'd3dx9_36.dll');
const UNFILTER = 0x70ab8a;

(async () => {
  if (!fs.existsSync(DLL)) { console.log('SKIP native png unfilter: binaries/mbaa/d3dx9_36.dll not present'); return; }
  const dll = fs.readFileSync(DLL);
  const pe = dll.readUInt32LE(0x3c), nsec = dll.readUInt16LE(pe + 6), optSz = dll.readUInt16LE(pe + 20), opt = pe + 24;
  const imageBase = dll.readUInt32LE(opt + 28);
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
    const va = dll.readUInt32LE(o + 12), rawSize = dll.readUInt32LE(o + 16), raw = dll.readUInt32LE(o + 20);
    for (let off = 0; off < rawSize; off += 4096) {
      const n = Math.min(4096, rawSize - off);
      bytes.set(dll.subarray(raw + off, raw + off + n), wa(imageBase + va + off));
    }
  }
  const MAX = 3000;
  const info = e.guest_alloc(16) >>> 0, row = e.guest_alloc(MAX) >>> 0, prev = e.guest_alloc(MAX) >>> 0;
  const stack = e.guest_alloc(8192) >>> 0, stub = e.guest_alloc(64) >>> 0;
  // stub: push edi (filter); push esi (prev); push ebx (row); push ebp (info); push 0 (png_ptr); call; ret
  const rel = (UNFILTER - (stub + 6 + 5)) >>> 0;
  bytes.set([0x57, 0x56, 0x53, 0x55, 0x6a, 0x00, 0xe8, rel & 255, (rel >>> 8) & 255, (rel >>> 16) & 255, rel >>> 24, 0xc3], wa(stub));
  const handler = new NativePngUnfilter({ eip: UNFILTER }, { getBuffer: () => memory.buffer });
  let seed = 99;
  const rnd = n => (seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) % n;
  let rows = 0;
  for (let trial = 0; trial < 300; trial++) {
    const filter = trial % 5, depth = [8, 16, 24, 32, 48, 64][trial % 6], bpp = (depth + 7) >> 3;
    const rowbytes = 1 + rnd(MAX);
    const data = Uint8Array.from({ length: rowbytes }, () => rnd(256));
    const above = Uint8Array.from({ length: rowbytes }, () => rnd(256));
    for (let i = 0; i < 16; i++) bytes[wa(info) + i] = 0;
    view.setUint32(wa(info + 4), rowbytes, true);
    bytes[wa(info) + 0xb] = depth;
    bytes.set(data, wa(row)); bytes.set(above, wa(prev));
    const sp = stack + 4096;
    view.setUint32(wa(sp), 0, true);
    e.set_esp(sp); e.set_edi(filter); e.set_esi(prev); e.set_ebx(row); e.set_ebp(info); e.set_eip(stub);
    for (let i = 0; i < 50 && (e.get_eip() >>> 0); i++) e.run(1000000);
    assert.strictEqual(e.get_eip() >>> 0, 0, `trial ${trial}: returned`);
    assert.strictEqual(e.get_esp() >>> 0, sp + 4, `trial ${trial}: ret 0x14 balanced`);
    const guest = bytes.slice(wa(row), wa(row) + rowbytes);
    const native = data.slice();
    NativePngUnfilter.unfilter(native, above, bpp, filter);
    for (let i = 0; i < rowbytes; i++) {
      if (guest[i] !== native[i]) assert.fail(`trial ${trial} filter ${filter} bpp ${bpp} len ${rowbytes}: byte ${i} libpng ${guest[i]} native ${native[i]}`);
    }
    rows++;
  }
  // Through the hook itself: a Paeth row, then an invalid filter left to libpng.
  const sp = stack + 4096;
  const data = Uint8Array.from({ length: 64 }, () => rnd(256)), above = Uint8Array.from({ length: 64 }, () => rnd(256));
  view.setUint32(wa(info + 4), 64, true); bytes[wa(info) + 0xb] = 32;
  bytes.set(data, wa(row)); bytes.set(above, wa(prev));
  for (const [o, v] of [[0, 0x1234], [4, 0], [8, info], [12, row], [16, prev], [20, 4]]) view.setUint32(wa(sp + o), v, true);
  e.set_esp(sp);
  assert.strictEqual(handler.hook(UNFILTER, e), true, 'hook answers a Paeth row');
  assert.strictEqual(e.get_eip() >>> 0, 0x1234, 'returns to the caller');
  assert.strictEqual(e.get_esp() >>> 0, sp + 24, 'pops the return address and five arguments');
  const expect = data.slice(); NativePngUnfilter.unfilter(expect, above, 4, 4);
  assert.deepStrictEqual(bytes.slice(wa(row), wa(row) + 64), expect, 'hook wrote the unfiltered row');
  view.setUint32(wa(sp + 20), 7, true); e.set_esp(sp);
  assert.strictEqual(handler.hook(UNFILTER, e), false, 'invalid filter declined');
  console.log(`native png unfilter PASS: ${rows} rows identical to libpng in d3dx9_36 0x70ab8a`);
})().catch(err => { console.error(err); process.exitCode = 1; });
