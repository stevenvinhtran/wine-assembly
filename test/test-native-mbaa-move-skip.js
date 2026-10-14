'use strict';
// lib/native-mbaa-move-skip.js against MBAACC's own code, run in the emulator.
//
// usable() must give 0x46D430's answer for every random move table, move,
// character and battle state where it does not answer "unknown" (a
// requirement entry for the move, evaluated by the game). Then the whole
// loop 0x46D510 runs twice over tables where no move can match -- once as
// guest code, once with the hook armed at 0x46D530 -- and must return the
// same result with the same callee-saved registers and stack.
// Skips when the game executable is absent (it is never committed).
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');
const { NativeMbaaMoveSkip, usable } = require('../lib/native-mbaa-move-skip');

const EXE = path.join(__dirname, '..', 'binaries', 'mbaa', 'MBAA.exe');

(async () => {
  if (!fs.existsSync(EXE)) { console.log('SKIP native mbaa move-skip: binaries/mbaa/MBAA.exe not present'); return; }
  const exe = fs.readFileSync(EXE);
  const pe = exe.readUInt32LE(0x3c), nsec = exe.readUInt16LE(pe + 6), optSz = exe.readUInt16LE(pe + 20), opt = pe + 24;
  const imageBase = exe.readUInt32LE(opt + 28);
  const module = await WebAssembly.compile(compileSrcWasm());
  const memory = new WebAssembly.Memory({ initial: 8192, maximum: 8192, shared: true });
  const ctx = { exports: null, getMemory: () => memory.buffer, nativeHook: null };
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
  const w32 = (a, v) => view.setUint32(wa(a), v >>> 0, true);
  const w8 = (a, v) => { bytes[wa(a)] = v & 0xFF; };

  const MOVES = 48, STRIDE = 0x40;
  const obj = e.guest_alloc(0x400) >>> 0, tbl = e.guest_alloc(0x80) >>> 0, hdr = e.guest_alloc(0x20) >>> 0;
  const movesArr = e.guest_alloc(MOVES * STRIDE) >>> 0, ptrs = e.guest_alloc(MOVES * 4) >>> 0;
  const reqs = e.guest_alloc(16 * 0x1C) >>> 0, stack = e.guest_alloc(8192) >>> 0;
  let seed = 11;
  const rnd = n => (seed = (Math.imul(seed, 1103515245) + 12345) >>> 0) % n;

  // A random character, move table and battle state.
  function world({ allUnusable } = {}) {
    w32(obj + 0x33C, rnd(20) ? tbl : 0);
    w32(tbl, rnd(20) ? hdr : 0);
    const pointerTable = rnd(2);
    w32(hdr, pointerTable ? 1 : 0);
    w32(hdr + 4, pointerTable ? ptrs : movesArr);
    w32(hdr + 8, STRIDE);
    w32(hdr + 0xC, MOVES - rnd(8));
    for (let m = 0; m < MOVES; m++) {
      const p = movesArr + m * STRIDE;
      w32(ptrs + m * 4, rnd(10) ? p : 0);
      w32(p + 0x28, (rnd(4) ? 0 : 0x20) | (rnd(2) ? 0x400 : 0) | rnd(256) << 8 & ~0x420);
      w8(p + 0x24, rnd(4));
      w8(p + 0x25, rnd(3) ? 0 : rnd(40));
    }
    const nreq = allUnusable ? 0 : rnd(4);
    w32(tbl + 0x60, nreq);
    w32(tbl + 0x64, reqs);
    for (let k = 0; k < 16; k++) w32(reqs + k * 0x1C, rnd(MOVES));
    w32(0x562A74, rnd(3) ? 0 : 0x100 << rnd(2));
    w8(0x55D20B, rnd(3));
    const side = rnd(2);
    w8(obj + 0x2F4, side);
    w32(0x557DC4 + side * 0x20C, rnd(3));
    for (let k = 0; k < 4; k++) w8(obj + 0x1B8 + k, rnd(256));
    if (allUnusable) for (let m = 0; m < MOVES; m++) w32(movesArr + m * STRIDE + 0x28, 0x20);   // flag 0x20: never usable
  }
  const runGuest = (entry, regs) => {
    const sp = stack + 4096;
    w32(sp, 0);                              // return to 0: halt
    e.set_esp(sp); e.set_eip(entry);
    for (const [k, v] of Object.entries(regs)) e['set_' + k](v);
    for (let n = 0; n < 200 && (e.get_eip() >>> 0); n++) e.run(100000);
    assert.strictEqual(e.get_eip() >>> 0, 0, 'guest returned');
    return e.get_eax() >>> 0;
  };

  // usable() == 0x46D430.
  let compared = 0, unknown = 0;
  for (let t = 0; t < 400; t++) {
    world();
    for (let i = 0; i < MOVES + 2; i++) {
      const js = usable(e, obj, i);
      if (js === null) { unknown++; continue; }
      const guest = runGuest(0x46D430, { eax: obj, ecx: i, ebx: 0x1234, esi: 0x5678 });
      assert.strictEqual(js, guest, `world ${t} move ${i}: JS ${js}, MBAA.exe ${guest}`);
      compared++;
    }
  }
  assert(compared > 10000 && unknown > 0);

  // The loop with and without the hook: no move matches, same exit.
  const hook = new NativeMbaaMoveSkip({ eip: 0x46D530 });
  let skipped = 0;
  for (let t = 0; t < 30; t++) {
    const s0 = seed;
    world({ allUnusable: true });
    w32(obj + 0x33C, tbl); w32(tbl, hdr);
    const regs = { eax: obj, ebx: 0xB0B0, esi: 0x5151, edi: 0xD1D1, ebp: 0xEBEB };
    ctx.nativeHook = null; e.set_native_hook(0, 0);
    const plain = runGuest(0x46D510, regs);
    const plainRegs = [e.get_ebx(), e.get_esi(), e.get_edi(), e.get_ebp(), e.get_esp()].map(v => v >>> 0);
    seed = s0;
    world({ allUnusable: true });
    w32(obj + 0x33C, tbl); w32(tbl, hdr);
    ctx.nativeHook = (eip, ex) => hook.hook(eip, ex);
    e.set_native_hook(0, 0x46D530);
    const before = hook.stats.skipped;
    const hooked = runGuest(0x46D510, regs);
    skipped += hook.stats.skipped - before;
    assert.strictEqual(hooked, plain, `loop ${t}: same result`);
    assert.deepStrictEqual([e.get_ebx(), e.get_esi(), e.get_edi(), e.get_ebp(), e.get_esp()].map(v => v >>> 0), plainRegs, `loop ${t}: registers`);
  }
  e.set_native_hook(0, 0);
  assert(skipped > 30 * 30, `the hook skipped moves (${skipped})`);
  console.log(`native mbaa move-skip PASS: ${compared} answers identical to MBAA.exe 0x46d430 (${unknown} left to the game), loop identical with ${skipped} iterations skipped`);
})().catch(err => { console.error(err); process.exitCode = 1; });
