'use strict';
// lib/native-dxt-decode.js against D3DX's own decoders (d3dx9_36.dll), run in
// the emulator: the DXT colour (0x60c026), DXT3 (0x60c156) and DXT5
// (0x60c1e0) block decoders and the A8R8G8B8 row decoder (0x5fd525). Random
// blocks and rows -- with both colour modes, both DXT5 alpha modes and equal
// endpoints -- must decode to bit-identical floats. Skips without the DLL.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');
const { NativeDxtDecode, NativeArgbDecode } = require('../lib/native-dxt-decode');

const DLL = path.join(__dirname, '..', 'binaries', 'mbaa', 'd3dx9_36.dll');

(async () => {
  if (!fs.existsSync(DLL)) { console.log('SKIP native dxt decode: binaries/mbaa/d3dx9_36.dll not present'); return; }
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
  for (const [kind, va, n] of [['d3dx-dxt-color-decode', 0x60c026, 8], ['d3dx-dxt3-decode', 0x60c156, 16], ['d3dx-dxt5-decode', 0x60c1e0, 16]]) {
    const native = new NativeDxtDecode({ kind, eip: va }, { getBuffer: () => memory.buffer });
    for (let t = 0; t < 400; t++) {
      const blk = Uint8Array.from({ length: n }, () => rnd(256));
      if (t % 4 === 1) { blk[n - 8] = blk[n - 6]; blk[n - 7] = blk[n - 5]; }          // equal colour endpoints
      if (n === 16 && t % 3 === 0) { const a = blk[0]; blk[0] = blk[1]; blk[1] = a; } // flip alpha mode
      bytes.set(blk, wa(block));
      bytes.fill(0xcd, wa(out), wa(out) + 256);
      const eax = run(va, [out, block]);
      assert.strictEqual(eax, 0, `${kind}: S_OK`);
      const guest = bytes.slice(wa(out), wa(out) + 256);
      const mine = new Float32Array(64);
      native.dec.fn(mine, blk);
      const nb = new Uint8Array(mine.buffer);
      for (let i = 0; i < 256; i++) if (guest[i] !== nb[i]) {
        assert.fail(`${kind} block ${Buffer.from(blk).toString('hex')}: byte ${i} (texel ${i >> 4} ch ${(i >> 2) & 3}) D3DX ${new DataView(guest.buffer).getFloat32(i & ~3, true)} native ${mine[i >> 2]}`);
      }
      checked++;
    }
  }
  // A8R8G8B8 row decode through the hook path itself.
  const argb = new NativeArgbDecode({ eip: 0x5fd525 }, { getBuffer: () => memory.buffer });
  for (let t = 0; t < 100; t++) {
    const count = 1 + rnd(64), y = rnd(4);
    for (let o = 0; o < 0x100; o += 4) view.setUint32(wa(codec + o), 0, true);
    view.setUint32(wa(codec + 0x20), surface - y * 0, true);
    view.setUint32(wa(codec + 0x60), 0, true);
    view.setUint32(wa(codec + 0x68), count, true);
    for (let i = 0; i < count * 4; i++) bytes[wa(surface) + i] = rnd(256);
    bytes.fill(0xcd, wa(out), wa(out) + count * 16);
    const eax = run(0x5fd525, [y, 0, out], codec);
    const guest = bytes.slice(wa(out), wa(out) + count * 16);
    bytes.fill(0xcd, wa(out), wa(out) + count * 16);
    const sp = stack + 4096;
    for (const [o, v] of [[0, 0x1234], [4, y], [8, 0], [12, out]]) view.setUint32(wa(sp + o), v, true);
    e.set_esp(sp); e.set_ecx(codec);
    assert.strictEqual(argb.hook(0x5fd525, e), true, 'argb hook answers');
    assert.strictEqual(e.get_eip() >>> 0, 0x1234); assert.strictEqual(e.get_esp() >>> 0, sp + 16);
    assert.strictEqual(e.get_eax() >>> 0, eax, 'argb EAX matches D3DX');
    assert.deepStrictEqual(bytes.slice(wa(out), wa(out) + count * 16), guest, `argb row ${t} identical`);
    checked++;
  }
  console.log(`native dxt decode PASS: ${checked} blocks/rows bit-identical to d3dx9_36 decoders`);
})().catch(err => { console.error(err); process.exitCode = 1; });
