'use strict';
// CreateThread with every decoded-cache slot busy queues the thread instead
// of returning NULL. MBAACC starts one loader thread per asset; a NULL in a
// load burst was that asset never loading. With the slot cap lowered to 2,
// five threads are created at once: all five get real handles, the queued
// ones wait (WaitForSingleObject times out, GetExitCodeThread is
// STILL_ACTIVE), and each runs to completion once a slot frees -- in
// creation order, every one of them exactly once.
const assert = require('assert');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const { ThreadManager } = require('../lib/thread-manager');
const regions = require('../lib/region-map.generated');

(async () => {
  const module = await WebAssembly.compile(compileSrcWasm());
  const imageBase = 0x400000;
  const memory = new WebAssembly.Memory({ initial: 8192, maximum: 8192, shared: true });
  const mk = () => {
    const ctx = { exports: null, getMemory: () => memory.buffer };
    const imports = createHostImports(ctx);
    Object.assign(imports.host, { memory, log: () => {}, log_i32: () => {}, exit: () => {},
      wait_multiple: () => 0, terminate_thread: () => 0 });
    imports.__setInstance = inst => { ctx.exports = inst.exports; };
    return { ctx, imports };
  };
  const m = mk();
  const e = (await WebAssembly.instantiate(module, m.imports)).exports;
  m.ctx.exports = e;
  e.init_thread(0, imageBase, 0, 0, 0, 0, 0);
  e.heap_init(regions.BASE.GUEST_HEAP_BASE - regions.GUEST_BASE + imageBase);
  const bytes = new Uint8Array(memory.buffer), view = new DataView(memory.buffer);
  const wa = g => e.guest_to_wasm(g) >>> 0;

  // Thread proc: [log + 4*param] = param + 1; return param.
  const code = e.guest_alloc(64) >>> 0, log = e.guest_alloc(64) >>> 0;
  const u32 = v => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, v >>> 24];
  bytes.set([0x8b, 0x44, 0x24, 0x04,                    // mov eax, [esp+4]
    0x8d, 0x48, 0x01,                                   // lea ecx, [eax+1]
    0x89, 0x0c, 0x85, ...u32(log),                      // mov [log + eax*4], ecx
    0xc2, 0x04, 0x00], wa(code));                       // ret 4

  const tm = new ThreadManager(module, memory, { exports: e }, () => mk().imports, {});
  tm._log = () => {};
  tm._maxWorkerThreads = 2;
  const N = 5;
  const handles = [];
  for (let i = 0; i < N; i++) handles.push(tm.createThread(code, i, 0x10000, 0, 0, 1));
  assert(handles.every(h => h), 'every CreateThread returned a handle');
  assert.strictEqual(new Set(handles).size, N, 'handles are distinct');
  assert.strictEqual(tm.slotDeferrals, N - 2, 'three threads were queued, not refused');
  assert.strictEqual(tm.waitSingle(handles[4], 0), 0x102, 'a queued thread is not signaled');
  assert.strictEqual(tm.getExitCodeThread(handles[4]) >>> 0, 0x103, 'a queued thread is STILL_ACTIVE');

  for (let round = 0; round < 50; round++) {
    tm.spawnPending();
    if (!tm.hasActiveThreads() && !tm._pendingThreads.length) break;
    tm.runSlice(100000);
  }
  assert.strictEqual(tm._pendingThreads.length, 0, 'queue drained');
  for (let i = 0; i < N; i++) {
    assert.strictEqual(view.getUint32(wa(log + i * 4), true), i + 1, `thread ${i} ran`);
    assert.strictEqual(tm.waitSingle(handles[i], 0) === 0 || !tm._resolveThreadHandle(handles[i]), true, `thread ${i} signaled once done`);
  }
  console.log(`thread slot queue PASS: ${N} threads on 2 slots, ${N - 2} queued then run`);
})().catch(err => { console.error(err); process.exitCode = 1; });
