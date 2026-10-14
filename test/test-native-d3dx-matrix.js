'use strict';
// lib/native-d3dx-matrix.js against D3DXMatrixMultiply (d3dx9_36 0x579da3)
// run in the emulator: random matrices (with 0, 1 and wide-range values) in
// every aliasing mode must produce bit-identical float32 results and the same
// return value. Skips without the DLL.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');
const { NativeD3dxMatrix } = require('../lib/native-d3dx-matrix');

const DLL = path.join(__dirname, '..', 'binaries', 'mbaa', 'd3dx9_36.dll');

(async () => {
  if (!fs.existsSync(DLL)) { console.log('SKIP native d3dx matrix: binaries/mbaa/d3dx9_36.dll not present'); return; }
  const dll = fs.readFileSync(DLL);
  const pe = dll.readUInt32LE(0x3c), nsec = dll.readUInt16LE(pe + 6), optSz = dll.readUInt16LE(pe + 20), opt = pe + 24;
  const imageBase = dll.readUInt32LE(opt + 28);
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
  const block = e.guest_alloc(16) >>> 0, out = e.guest_alloc(64 * 16 * 4) >>> 0, codec = e.guest_alloc(0x100) >>> 0;
  const surface = e.guest_alloc(64 * 4) >>> 0, stack = e.guest_alloc(8192) >>> 0;
  let seed = 31337;
  const rnd = n => (seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) % n;
  // One stub per (function, arguments): the emulator caches decoded code, so
  // a stub rewritten in place from JS would keep running its old bytes.
  const stubs = new Map();
  const run = (fn, args, ecx) => {
    const sk = fn + ':' + args.join(',');
    let stub = stubs.get(sk);
    if (!stub) { stub = e.guest_alloc(64) >>> 0; stubs.set(sk, stub); }
    // stub: push args (reversed) via immediates; call fn; ret
    const code = [];
    for (const a of args.slice().reverse()) code.push(0x68, a & 255, (a >>> 8) & 255, (a >>> 16) & 255, a >>> 24);
    const callAt = stub + code.length, rel = (fn - (callAt + 5)) >>> 0;
    code.push(0xe8, rel & 255, (rel >>> 8) & 255, (rel >>> 16) & 255, rel >>> 24, 0xc3);
    bytes.set(code, wa(stub));
    const sp = stack + 4096;
    view.setUint32(wa(sp), 0, true);
    e.set_esp(sp); e.set_ecx(ecx || 0); e.set_eip(stub);
    for (let i = 0; i < 50 && (e.get_eip() >>> 0); i++) e.run(1000000);
    assert.strictEqual(e.get_eip() >>> 0, 0, 'returned');
    assert.strictEqual(e.get_esp() >>> 0, sp + 4, 'stdcall balanced');
    return e.get_eax() >>> 0;
  };
  let checked = 0;
  const native = new NativeD3dxMatrix({ eip: 0x579da3 }, { getBuffer: () => memory.buffer });
  const mA = e.guest_alloc(64) >>> 0, mB = e.guest_alloc(64) >>> 0, mO = e.guest_alloc(64) >>> 0;
  const fv = new Float32Array(1);
  const rf = () => { const k = rnd(10); if (k === 0) return 0; if (k === 1) return 1; fv[0] = (rnd(2000001) - 1000000) / (1 + rnd(1000)); return fv[0]; };
  const fill = p => { for (let i = 0; i < 16; i++) view.setFloat32(wa(p + i * 4), rf(), true); };
  const snap = p => Buffer.from(bytes.slice(wa(p), wa(p) + 64));
  for (let t = 0; t < 300; t++) {
    const mode = t % 4; fill(mA); fill(mB);
    const A0 = snap(mA), B0 = snap(mB);
    // mode 0: out separate; 1: out == m1; 2: out == m2; 3: out == m1 == m2
    const args = mode === 0 ? [mO, mA, mB] : mode === 1 ? [mA, mA, mB] : mode === 2 ? [mB, mA, mB] : [mA, mA, mA];
    const eax = run(0x579da3, args);
    const outAddr = args[0], guest = snap(outAddr);
    assert.strictEqual(eax, outAddr, 'returns out');
    bytes.set(A0, wa(mA)); bytes.set(B0, wa(mB));
    const sp = stack + 4096;
    for (const [o, v] of [[0, 0x1234], [4, args[0]], [8, args[1]], [12, args[2]]]) view.setUint32(wa(sp + o), v, true);
    e.set_esp(sp);
    assert.strictEqual(native.hook(0x579da3, e), true);
    assert.strictEqual(e.get_eip() >>> 0, 0x1234); assert.strictEqual(e.get_esp() >>> 0, sp + 16); assert.strictEqual(e.get_eax() >>> 0, outAddr);
    assert.deepStrictEqual(snap(outAddr), guest, `matrix ${t} mode ${mode} identical`);
    checked++;
  }
  console.log(`native d3dx matrix PASS: ${checked} multiplies (all alias modes) bit-identical to d3dx9_36 0x579da3`);
})().catch(err => { console.error(err); process.exitCode = 1; });
