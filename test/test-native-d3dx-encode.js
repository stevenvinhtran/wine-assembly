'use strict';
// lib/native-d3dx-encode.js against the real D3DX encoder, run in the emulator.
//
// d3dx9_36.dll prefers 0x400000, the image base this harness maps, so its
// sections are copied to their VAs unrelocated and its float -> A8R8G8B8 row
// encoder (VA 0x5f6f98, thiscall, ret 0xc) is called on a fabricated codec.
// Every row must match the native encodeRow byte for byte: random colours,
// exact channel boundaries, out-of-range and NaN values, both row parities,
// all four dither rows. Skips when the (redistributable, not committed) DLL
// is absent.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');
const { NativeD3DXEncode } = require('../lib/native-d3dx-encode');

const DLL = path.join(__dirname, '..', 'binaries', 'mbaa', 'd3dx9_36.dll');
const ENCODE = 0x5f6f98;

(async () => {
  if (!fs.existsSync(DLL)) { console.log('SKIP native d3dx encode: binaries/mbaa/d3dx9_36.dll not present'); return; }
  const dll = fs.readFileSync(DLL);
  const pe = dll.readUInt32LE(0x3c), nsec = dll.readUInt16LE(pe + 6), optSz = dll.readUInt16LE(pe + 20), opt = pe + 24;
  const imageBase = dll.readUInt32LE(opt + 28);
  assert.strictEqual(imageBase, 0x400000, 'harness maps the DLL at its preferred base');

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

  const MAX = 64;
  const codec = e.guest_alloc(0x100) >>> 0, src = e.guest_alloc(MAX * 16) >>> 0;
  const table = e.guest_alloc(4 * 32) >>> 0, surface = e.guest_alloc(4 * MAX * 8) >>> 0;
  const stack = e.guest_alloc(8192) >>> 0, stub = e.guest_alloc(64) >>> 0;
  assert(codec && src && table && surface && stack && stub);
  // stub: push esi (src); push edi (z); push ebx (y); call ENCODE; ret
  const rel = (ENCODE - (stub + 3 + 5)) >>> 0;
  bytes.set([0x56, 0x57, 0x53, 0xe8, rel & 255, (rel >>> 8) & 255, (rel >>> 16) & 255, rel >>> 24, 0xc3], wa(stub));

  // The ordered-dither table D3DX would hold: 4 rows of 8 floats, values in [0,1).
  let seed = 12345;
  const rnd = () => ((seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) / 4294967296);
  for (let i = 0; i < 32; i++) view.setFloat32(wa(table + i * 4), Math.fround(rnd()), true);

  const special = [0, 1, -0.5, 1.5, 0.5, 254.5 / 255, 1 / 255, 128 / 255, 255 / 255 - 1e-7, NaN, Infinity, -Infinity, 1e30];
  let rows = 0;
  for (let trial = 0; trial < 400; trial++) {
    const count = 1 + (trial % MAX), y = trial % 8, z = (trial >> 3) % 4;
    const pitch = MAX * 4;
    for (let o = 0; o < 0x100; o += 4) view.setUint32(wa(codec + o), 0, true);
    view.setUint32(wa(codec + 0x20), surface, true);
    view.setUint32(wa(codec + 0x60), pitch, true);
    view.setUint32(wa(codec + 0x64), 0, true);
    view.setUint32(wa(codec + 0x68), count, true);
    view.setUint32(wa(codec + 0x34), table, true);
    const floats = new Float32Array(count * 4);
    for (let i = 0; i < floats.length; i++) {
      floats[i] = trial % 5 === 0 ? special[(i + trial) % special.length]
        : (trial % 5 === 1 ? Math.round(rnd() * 255) / 255 : rnd() * 1.2 - 0.1);
      view.setFloat32(wa(src + i * 4), floats[i], true);
    }
    bytes.fill(0xcd, wa(surface), wa(surface) + pitch * 8);
    const sp = stack + 4096;
    view.setUint32(wa(sp), 0, true);                       // the stub returns to 0: halt
    e.set_esp(sp); e.set_ecx(codec); e.set_esi(src); e.set_edi(z); e.set_ebx(y); e.set_eip(stub);
    for (let i = 0; i < 100 && (e.get_eip() >>> 0); i++) e.run(100000);
    assert.strictEqual(e.get_eip() >>> 0, 0, `trial ${trial}: encoder returned`);
    assert.strictEqual(e.get_esp() >>> 0, sp + 4, `trial ${trial}: ret 0xc balanced the stack`);
    const dst = surface + pitch * y;
    const guest = bytes.slice(wa(dst), wa(dst) + count * 4);
    const dither = new Float32Array(4);
    for (let i = 0; i < 4; i++) dither[i] = view.getFloat32(wa(table + ((z & 3) + (y & 3) * 8) * 4 + i * 4), true);
    const native = NativeD3DXEncode.encodeRow(floats, count, dither, y & 1);
    for (let i = 0; i < native.length; i++) {
      if (guest[i] !== native[i]) {
        const p = i >> 2;
        assert.fail(`trial ${trial} y=${y} z=${z} count=${count}: byte ${i} (pixel ${p}) D3DX ${guest[i]} native ${native[i]}` +
          ` input ${Array.from(floats.slice(p * 4, p * 4 + 4)).join(',')}`);
      }
    }
    rows++;
  }
  console.log(`native d3dx encode PASS: ${rows} rows identical to d3dx9_36 0x5f6f98`);
})().catch(err => { console.error(err); process.exitCode = 1; });
