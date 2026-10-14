'use strict';
// $native_ftol_eip: a statically linked MSVC _ftol2/_ftol entry answered in
// WAT. A caller loops over float inputs doing `fld dword [esi]; call F` and
// stores EDX:EAX. F is the classic MSVC _ftol body (fnstcw / or ah,0xc /
// fldcw / fistp qword / fldcw). Armed, every result -- in range, negative,
// fractional, beyond 32 bits, out of range -- must equal the guest body's
// bit for bit, F must never run, and the FPU stack and control word must be
// left as the body leaves them. Cold, chained and hot passes all go through
// the same entry check.
const assert = require('assert');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');

const VALUES = [0, -0, 0.25, 0.5, 0.75, 1, 1.5, 2.5, -0.5, -1.5, -2.5, -0.99, 7.9999, -7.9999,
  123456.78, -123456.78, 2147483520, -2147483648, 3e9, -3e9, 1e10, -1e10, 2 ** 40 + 0.5,
  9.2e18, -9.2e18, 1e19, -1e19, 1e30, -1e30, Infinity, -Infinity, NaN, 1e-30, 65535.5, -65536.5];
const PASSES = 4;

(async () => {
  const module = await WebAssembly.compile(compileSrcWasm());
  const imageBase = 0x400000;
  const memory = new WebAssembly.Memory({ initial: 8192, maximum: 8192, shared: true });
  const ctx = { exports: null, getMemory: () => memory.buffer, nativeHook: () => false };
  const imports = createHostImports(ctx);
  Object.assign(imports.host, { memory, log: () => {}, log_i32: () => {}, exit: () => {},
    wait_multiple: () => 0, terminate_thread: () => 0 });
  const e = (await WebAssembly.instantiate(module, imports)).exports;
  ctx.exports = e;
  e.init_thread(0, imageBase, 0, 0, 0, 0, 0);
  e.heap_init(regions.BASE.GUEST_HEAP_BASE - regions.GUEST_BASE + imageBase);

  const bytes = new Uint8Array(memory.buffer), view = new DataView(memory.buffer);
  const wa = g => e.guest_to_wasm(g) >>> 0;
  const n = VALUES.length;
  const code = e.guest_alloc(256) >>> 0, stack = e.guest_alloc(8192) >>> 0;
  const src = e.guest_alloc(n * 4) >>> 0, dst = e.guest_alloc(n * 8) >>> 0;
  assert(code && stack && src && dst, 'allocations');
  const F = code + 0x80;
  const u32 = v => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, v >>> 24];
  const caller = [0xb9, ...u32(n), 0xbe, ...u32(src), 0xbf, ...u32(dst)];
  const loopAt = caller.length;
  caller.push(0xd9, 0x06, 0x51);                             // fld dword [esi]; push ecx
  const callAt = code + caller.length;
  caller.push(0xe8, ...u32((F - (callAt + 5)) >>> 0));       // call F
  caller.push(0x59, 0x89, 0x07, 0x89, 0x57, 0x04,            // pop ecx; mov [edi],eax; mov [edi+4],edx
    0x83, 0xc6, 0x04, 0x83, 0xc7, 0x08, 0x49);               // add esi,4; add edi,8; dec ecx
  caller.push(0x75, (loopAt - (caller.length + 2)) & 255);   // jnz loop
  caller.push(0xc3);
  const body = [0x55, 0x8b, 0xec, 0x83, 0xc4, 0xf4, 0x9b,    // push ebp; mov ebp,esp; add esp,-0xc; wait
    0xd9, 0x7d, 0xfe, 0x66, 0x8b, 0x45, 0xfe, 0x80, 0xcc, 0x0c, // fnstcw [ebp-2]; mov ax,[ebp-2]; or ah,0xc
    0x66, 0x89, 0x45, 0xfc, 0xd9, 0x6d, 0xfc, 0xdf, 0x7d, 0xf4, // mov [ebp-4],ax; fldcw [ebp-4]; fistp qword [ebp-0xc]
    0xd9, 0x6d, 0xfe, 0x8b, 0x45, 0xf4, 0x8b, 0x55, 0xf8,       // fldcw [ebp-2]; mov eax,[ebp-0xc]; mov edx,[ebp-8]
    0xc9, 0xc3];                                             // leave; ret
  bytes.set(caller, wa(code));
  bytes.set(body, wa(F));
  VALUES.forEach((v, i) => view.setFloat32(wa(src + i * 4), v, true));

  const run = label => {
    for (let i = 0; i < n * 8; i += 4) view.setUint32(wa(dst + i), 0xcccccccc, true);
    const sp = stack + 4096;
    view.setUint32(wa(sp), 0, true);
    e.set_esp(sp); e.set_eip(code);
    for (let i = 0; i < 200 && (e.get_eip() >>> 0); i++) e.run(100000);
    assert.strictEqual(e.get_eip() >>> 0, 0, `${label}: caller returned`);
    assert.strictEqual(e.get_esp() >>> 0, sp + 4, `${label}: stack balanced`);
    const out = [];
    for (let i = 0; i < n; i++) out.push(view.getBigInt64(wa(dst + i * 8), true));
    return { out, top: e.get_fpu_top() >>> 0, cw: e.get_fpu_cw() >>> 0 };
  };

  const ref = run('guest body');
  for (let pass = 1; pass <= PASSES; pass++) {
    const before = e.get_native_ftol_count() >>> 0;
    e.set_native_ftol(F);
    const got = run(`native pass ${pass}`);
    assert.strictEqual((e.get_native_ftol_count() >>> 0) - before, n, `native pass ${pass}: every call answered in WAT`);
    VALUES.forEach((v, i) => assert.strictEqual(got.out[i], ref.out[i], `native pass ${pass}: ${v}`));
    assert.strictEqual(got.top, ref.top, `native pass ${pass}: FPU stack top`);
    assert.strictEqual(got.cw, ref.cw, `native pass ${pass}: control word restored`);
  }
  e.set_native_ftol(0);
  const before = e.get_native_ftol_count() >>> 0;
  const off = run('disarmed');
  assert.strictEqual(e.get_native_ftol_count() >>> 0, before, 'disarmed: never answered');
  VALUES.forEach((v, i) => assert.strictEqual(off.out[i], ref.out[i], `disarmed: ${v}`));

  // MBAACC's own _ftol2 (0x4f49f0, x87 path: fistp under the caller's
  // rounding, then a carry fix-up to truncation), placed at its original
  // address with the SSE2 flag [0x7b1d2c] clear, when the binary is present.
  let mbaa = '';
  const fs = require('fs'), path = require('path');
  const exe = path.join(__dirname, '..', 'binaries', 'mbaa', 'MBAA.exe');
  if (fs.existsSync(exe)) {
    const pe = fs.readFileSync(exe);
    const peOff = pe.readUInt32LE(0x3c), nsec = pe.readUInt16LE(peOff + 6);
    const optSize = pe.readUInt16LE(peOff + 20), base = pe.readUInt32LE(peOff + 24 + 28);
    let fileOff = -1;
    for (let k = 0; k < nsec; k++) {
      const sh = peOff + 24 + optSize + k * 40;
      const va = pe.readUInt32LE(sh + 12), size = pe.readUInt32LE(sh + 16), raw = pe.readUInt32LE(sh + 20);
      if (0x4f49f0 - base >= va && 0x4f49f0 - base < va + size) fileOff = raw + (0x4f49f0 - base - va);
    }
    assert(fileOff > 0, 'MBAA _ftol2 located');
    const G = 0x4f49f0;
    bytes.set(pe.subarray(fileOff, fileOff + 0xab), wa(G));
    view.setUint32(wa(0x7b1d2c), 0, true);
    const rel = (G - (callAt + 5)) >>> 0;
    bytes.set(u32(rel), wa(callAt + 1));
    e.set_native_ftol(0);
    const mref = run('MBAA _ftol2 body');
    VALUES.forEach((v, i) => assert.strictEqual(mref.out[i], ref.out[i], `MBAA body agrees with MSVC _ftol: ${v}`));
    for (let pass = 1; pass <= PASSES; pass++) {
      e.set_native_ftol(G);
      const got = run(`MBAA native pass ${pass}`);
      VALUES.forEach((v, i) => assert.strictEqual(got.out[i], mref.out[i], `MBAA native pass ${pass}: ${v}`));
      assert.strictEqual(got.top, mref.top, 'MBAA native: FPU stack top');
      assert.strictEqual(got.cw, mref.cw, 'MBAA native: control word');
    }
    e.set_native_ftol(0);
    mbaa = ', and with MBAACC\'s _ftol2';
  }

  console.log(`native ftol2 PASS: ${n} values x ${PASSES} passes bit-exact with the MSVC body${mbaa}, FPU state intact`);
})().catch(err => { console.error(err); process.exitCode = 1; });
