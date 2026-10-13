'use strict';
// lib/native-dxt5-encode.js against D3DX's own DXT5 block encoder (d3dx9_36
// VA 0x60c5a3), run in the emulator. The native compressor is independent, so
// the bytes differ; what must hold is quality: over noise, gradients, flat
// sprite-like blocks with transparency and mixed blocks, its reconstruction
// error (decoded with D3DX's own decoder, ported bit-exact) may not exceed
// D3DX's by more than 25% in aggregate for any family. The hook path must return S_OK and balance the stack. Skips
// without the (redistributable, not committed) DLL.
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');
const { NativeDxt5Encode } = require('../lib/native-dxt5-encode');
const { NativeDxtDecode } = require('../lib/native-dxt-decode');

const DLL = path.join(__dirname, '..', 'binaries', 'mbaa', 'd3dx9_36.dll');
const ENCODE = 0x60c5a3;

(async () => {
  if (!fs.existsSync(DLL)) { console.log('SKIP native block memo: binaries/mbaa/d3dx9_36.dll not present'); return; }
  const dll = fs.readFileSync(DLL);
  const pe = dll.readUInt32LE(0x3c), nsec = dll.readUInt16LE(pe + 6), optSz = dll.readUInt16LE(pe + 20), opt = pe + 24;
  const imageBase = dll.readUInt32LE(opt + 28);
  const module = await WebAssembly.compile(compileSrcWasm());
  const memory = new WebAssembly.Memory({ initial: 8192, maximum: 8192, shared: true });
  const ctx = { exports: null, getMemory: () => memory.buffer,
 };
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

  const rnd = (() => { let seed = 777; return () => (seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) / 4294967296; })();
  const kinds = {
    noise: () => Float32Array.from({ length: 64 }, () => rnd()),
    gradient: () => { const f = new Float32Array(64), a = [rnd(), rnd(), rnd()], b = [rnd(), rnd(), rnd()];
      for (let t = 0; t < 16; t++) { const u = ((t & 3) + (t >> 2)) / 6; for (let k = 0; k < 3; k++) f[t * 4 + k] = a[k] + (b[k] - a[k]) * u; f[t * 4 + 3] = 1 - u * 0.5; } return f; },
    sprite: () => { const f = new Float32Array(64), c = [rnd(), rnd(), rnd()];
      for (let t = 0; t < 16; t++) { const on = rnd() > 0.4; for (let k = 0; k < 3; k++) f[t * 4 + k] = on ? c[k] : 0; f[t * 4 + 3] = on ? 1 : 0; } return f; },
    photo: () => { const f = new Float32Array(64), c = [rnd(), rnd(), rnd()];
      for (let t = 0; t < 16; t++) { for (let k = 0; k < 3; k++) f[t * 4 + k] = Math.min(1, Math.max(0, c[k] + (rnd() - 0.5) * 0.15)); f[t * 4 + 3] = 1; } return f; },
  };
  const dec = NativeDxtDecode.decoders['d3dx-dxt5-decode'].fn;
  const err = (blk, f) => { const o = new Float32Array(64); dec(o, blk); let e = 0; for (let i = 0; i < 64; i++) e += (o[i] - f[i]) ** 2; return e; };
  const sp = stack + 4096;
  const d3dx = f => {
    new Uint8Array(memory.buffer, wa(input), 256).set(new Uint8Array(f.buffer));
    view.setUint32(wa(sp), 0, true);
    e.set_esp(sp); e.set_ebx(outBuf); e.set_esi(input); e.set_edi(0); e.set_eip(stub);
    for (let k = 0; k < 50 && (e.get_eip() >>> 0); k++) e.run(2000000);
    assert.strictEqual(e.get_eip() >>> 0, 0);
    return bytes.slice(wa(outBuf), wa(outBuf) + 16);
  };
  for (const [name, gen] of Object.entries(kinds)) {
    let ed = 0, en = 0;
    for (let i = 0; i < 150; i++) {
      const f = gen();
      const ref = d3dx(f), mine = NativeDxt5Encode.encode(f);
      const a = err(ref, f), b = err(mine, f);
      ed += a; en += b;
    }
    console.log(`  ${name}: D3DX error ${ed.toFixed(3)}, native ${en.toFixed(3)}`);
    assert(en <= ed * 1.25 + 1e-3, `${name}: native error ${en} exceeds D3DX ${ed} by more than 25%`);
  }
  // Through the hook: S_OK, 16 bytes written, ret 0xc.
  const handler = new NativeDxt5Encode({ eip: ENCODE }, { getBuffer: () => memory.buffer });
  const f = kinds.photo();
  new Uint8Array(memory.buffer, wa(input), 256).set(new Uint8Array(f.buffer));
  for (const [o, v] of [[0, 0x1234], [4, outBuf], [8, input], [12, 0]]) view.setUint32(wa(sp + o), v, true);
  e.set_esp(sp);
  assert.strictEqual(handler.hook(ENCODE, e), true);
  assert.strictEqual(e.get_eax() >>> 0, 0); assert.strictEqual(e.get_eip() >>> 0, 0x1234); assert.strictEqual(e.get_esp() >>> 0, sp + 16);
  assert.deepStrictEqual(bytes.slice(wa(outBuf), wa(outBuf) + 16), NativeDxt5Encode.encode(f));
  console.log('native dxt5 encode PASS: quality within 25% of D3DX on every block family; hook ABI');
})().catch(err => { console.error(err); process.exitCode = 1; });
