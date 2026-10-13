'use strict';
// lib/native-block-memo.js with D3DX's real DXT5 block encoder (d3dx9_36 VA
// 0x60c5a3), run in the emulator through the actual $native_hook path.
//
// A sequence of blocks -- random, fully transparent, quantized, repeats of
// earlier ones, dither on and off -- is encoded once with no hook and once
// with the memo hook armed. Every block's 16 bytes and EAX must be identical
// across the two runs, and the second run must have answered repeats from the
// cache. Skips when the (redistributable, not committed) DLL is absent.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');
const { NativeBlockMemo } = require('../lib/native-block-memo');

const DLL = path.join(__dirname, '..', 'binaries', 'mbaa', 'd3dx9_36.dll');
const ENCODE = 0x60c5a3;

(async () => {
  if (!fs.existsSync(DLL)) { console.log('SKIP native block memo: binaries/mbaa/d3dx9_36.dll not present'); return; }
  const dll = fs.readFileSync(DLL);
  const pe = dll.readUInt32LE(0x3c), nsec = dll.readUInt16LE(pe + 6), optSz = dll.readUInt16LE(pe + 20), opt = pe + 24;
  const imageBase = dll.readUInt32LE(opt + 28);
  const module = await WebAssembly.compile(compileSrcWasm());
  const memory = new WebAssembly.Memory({ initial: 8192, maximum: 8192, shared: true });
  const handler = new NativeBlockMemo({ eip: ENCODE }, { getBuffer: () => memory.buffer });
  let armed = false;
  const ctx = { exports: null, getMemory: () => memory.buffer,
    nativeHook: (eip, ex) => armed && handler.hook(eip, ex) };
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
  // The harness does not resolve the DLL's msvcrt imports. The encoder family
  // calls memset, floor and _CIsqrt; deterministic x86 stand-ins are enough,
  // since both runs below use the same ones.
  const crt = e.guest_alloc(128) >>> 0;
  const stubs = {
    0x401314: [0x57, 0x8b, 0x7c, 0x24, 0x08, 0x8b, 0x44, 0x24, 0x0c, 0x8b, 0x4c, 0x24, 0x10,
      0xf3, 0xaa, 0x8b, 0x44, 0x24, 0x08, 0x5f, 0xc3],                       // memset
    0x40130c: [0xd9, 0xfa, 0xc3],                                            // _CIsqrt: fsqrt; ret
    0x401278: [0x83, 0xec, 0x08, 0xd9, 0x3c, 0x24, 0x8b, 0x04, 0x24, 0x25, 0xff, 0xf3, 0x00, 0x00,
      0x0d, 0x00, 0x04, 0x00, 0x00, 0x89, 0x44, 0x24, 0x04, 0xd9, 0x6c, 0x24, 0x04, 0xdd, 0x44, 0x24,
      0x0c, 0xd9, 0xfc, 0xd9, 0x2c, 0x24, 0x83, 0xc4, 0x08, 0xc3],            // floor via frndint RC=down
  };
  let at = crt;
  for (const [slot, code] of Object.entries(stubs)) {
    bytes.set(code, wa(at));
    view.setUint32(wa(Number(slot)), at, true);
    at += (code.length + 15) & ~15;
  }
  const input = e.guest_alloc(256) >>> 0, outBuf = e.guest_alloc(16 * 200) >>> 0;
  const stack = e.guest_alloc(8192) >>> 0, stub = e.guest_alloc(64) >>> 0;
  // stub: push edi (flag); push esi (input); push ebx (out); call ENCODE; ret
  const rel = (ENCODE - (stub + 3 + 5)) >>> 0;
  bytes.set([0x57, 0x56, 0x53, 0xe8, rel & 255, (rel >>> 8) & 255, (rel >>> 16) & 255, rel >>> 24, 0xc3], wa(stub));

  let seed = 4242;
  const rnd = () => (seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) / 4294967296;
  const blocks = [];
  for (let i = 0; i < 160; i++) {
    let f;
    if (i % 7 === 3) f = new Float32Array(64);                          // transparent black
    else if (i % 5 === 1 && blocks.length > 4) f = blocks[(i * 13) % blocks.length].f;  // repeat
    else {
      f = new Float32Array(64);
      const q = i % 3 === 0;
      for (let k = 0; k < 64; k++) f[k] = q ? Math.round(rnd() * 8) / 8 : rnd();
    }
    blocks.push({ f, flag: (i >> 2) & 1 });
  }
  const runAll = () => blocks.map((b, i) => {
    new Uint8Array(memory.buffer, wa(input), 256).set(new Uint8Array(b.f.buffer));
    const out = outBuf + i * 16;
    bytes.fill(0xee, wa(out), wa(out) + 16);
    const sp = stack + 4096;
    view.setUint32(wa(sp), 0, true);
    e.set_esp(sp); e.set_ebx(out); e.set_esi(input); e.set_edi(b.flag); e.set_eip(stub);
    for (let k = 0; k < 50 && (e.get_eip() >>> 0); k++) e.run(2000000);
    assert.strictEqual(e.get_eip() >>> 0, 0, `block ${i}: returned`);
    assert.strictEqual(e.get_esp() >>> 0, sp + 4, `block ${i}: ret 0xc balanced`);
    return { eax: e.get_eax() >>> 0, out: Buffer.from(bytes.slice(wa(out), wa(out) + 16)).toString('hex') };
  });
  const plain = runAll();
  assert(plain.every(r => r.eax === 0), 'D3DX returns S_OK for every block');
  e.set_native_hook(0, ENCODE);
  armed = true;
  const memo = runAll();
  for (let i = 0; i < blocks.length; i++) {
    assert.deepStrictEqual(memo[i], plain[i], `block ${i}: memoized result identical to D3DX`);
  }
  // A second pass over the same textures is answered entirely from the cache.
  const again = runAll();
  assert.deepStrictEqual(again, plain, 'third pass identical');
  const s = handler.snapshot();
  assert(s.answered >= blocks.length - 1, `repeat pass answered from cache (${s.answered})`);
  assert.strictEqual(s.failed, 0, 'no failed encodes');
  // A fresh handler loaded from the export answers every block without D3DX.
  const restored = new NativeBlockMemo({ eip: ENCODE }, { getBuffer: () => memory.buffer });
  const packed = handler.exportNew();
  assert.strictEqual(restored.importPacked(packed), s.recorded, 'export carries every recorded block');
  assert.strictEqual(handler.exportNew().length, 0, 'export is incremental');
  for (const [k, v] of handler.cache) assert.deepStrictEqual(restored.cache.get(k), v, 'imported entry identical');
  console.log(`native block memo PASS: ${blocks.length} DXT5 blocks x 2 hooked passes identical to D3DX; ` +
    `${s.recorded} recorded, ${s.answered} answered from cache`);
})().catch(err => { console.error(err); process.exitCode = 1; });
