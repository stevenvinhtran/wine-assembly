'use strict';
// $native_hook0..3: guest function entries the host may answer.
//
// A caller loops 300 times over `push 3/2/1; mov eax,5; call F; add esi,eax`.
// F marks memory, returns 0x77 and pops its three arguments (ret 0xc). With
// the hook armed and answering, F's body must never run on any path -- cold
// decode, chained transfers, and the hot tiers the loop reaches -- while the
// caller sees the host's EAX and a balanced stack. Declining, or disarming,
// must run F exactly as before.
const assert = require('assert');
const { compileSrcWasm } = require('./compile-src');
const { createHostImports } = require('../lib/host-imports');
const regions = require('../lib/region-map.generated');

const ITER = 300;

(async () => {
  const module = await WebAssembly.compile(compileSrcWasm());
  const imageBase = 0x400000;
  const memory = new WebAssembly.Memory({ initial: 8192, maximum: 8192, shared: true });
  const hook = { calls: 0, answer: true };
  const ctx = { exports: null, getMemory: () => memory.buffer };
  ctx.nativeHook = (eip, ex) => {
    hook.calls++;
    if (!hook.answer) return false;
    const esp = ex.get_esp() >>> 0;
    const ret = ex.guest_read32(esp) >>> 0;
    const sum = ex.guest_read32(esp + 4) + ex.guest_read32(esp + 8) + ex.guest_read32(esp + 12);
    ex.set_eax(((ex.get_eax() >>> 0) + 0x100 + sum) >>> 0);
    ex.set_esp(esp + 16);
    ex.set_eip(ret);
    return true;
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
  const code = e.guest_alloc(256) >>> 0, stack = e.guest_alloc(8192) >>> 0, mark = e.guest_alloc(16) >>> 0;
  assert(code && stack && mark, 'allocations');
  const F = code + 0x80;
  const u32 = v => [v & 255, (v >>> 8) & 255, (v >>> 16) & 255, v >>> 24];
  const loopAt = 5;
  const caller = [0xb9, ...u32(ITER)];                       // mov ecx, ITER
  caller.push(0x6a, 3, 0x6a, 2, 0x6a, 1);                    // push 3; push 2; push 1
  caller.push(0xb8, ...u32(5));                              // mov eax, 5
  const callAt = code + caller.length;
  caller.push(0xe8, ...u32((F - (callAt + 5)) >>> 0));       // call F
  caller.push(0x01, 0xc6, 0x49);                             // add esi, eax; dec ecx
  caller.push(0x75, (loopAt - (caller.length + 2)) & 255);   // jnz loop
  caller.push(0xc3);                                         // ret
  const body = [0xc7, 0x05, ...u32(mark), ...u32(0xdead),    // mov dword [mark], 0xdead
    0xb8, ...u32(0x77), 0xc2, 0x0c, 0x00];                   // mov eax, 0x77; ret 0xc
  bytes.set(caller, wa(code));
  bytes.set(body, wa(F));

  const run = label => {
    view.setUint32(wa(mark), 0, true);
    const sp = stack + 4096;
    view.setUint32(wa(sp), 0, true);                         // return to 0 = halt
    e.set_esp(sp); e.set_esi(0); e.set_eip(code);
    for (let i = 0; i < 200 && (e.get_eip() >>> 0); i++) e.run(100000);
    assert.strictEqual(e.get_eip() >>> 0, 0, `${label}: caller returned`);
    assert.strictEqual(e.get_esp() >>> 0, sp + 4, `${label}: stack balanced`);
    return { esi: e.get_esi() >>> 0, marked: view.getUint32(wa(mark), true) };
  };

  // Disarmed: the guest function runs.
  let r = run('disarmed');
  assert.strictEqual(r.esi, ITER * 0x77, 'disarmed: F result');
  assert.strictEqual(r.marked, 0xdead, 'disarmed: F body ran');
  assert.strictEqual(hook.calls, 0, 'disarmed: host never asked');

  // Armed and answered: F is never entered, cold or hot.
  e.set_native_hook(2, code + 0xf0);   // another armed slot that is never reached
  e.set_native_hook(0, F);
  for (const pass of [1, 2, 3]) {
    hook.calls = 0;
    r = run(`answered pass ${pass}`);
    assert.strictEqual(hook.calls, ITER, `answered pass ${pass}: host asked every call`);
    assert.strictEqual(r.esi, ITER * (5 + 0x100 + 6), `answered pass ${pass}: host EAX`);
    assert.strictEqual(r.marked, 0, `answered pass ${pass}: F body never ran`);
  }

  // Armed but declined: the original code runs after the hook.
  hook.answer = false; hook.calls = 0;
  r = run('declined');
  assert.strictEqual(hook.calls, ITER, 'declined: host asked every call');
  assert.strictEqual(r.esi, ITER * 0x77, 'declined: F result');
  assert.strictEqual(r.marked, 0xdead, 'declined: F body ran');

  // Disarmed again after hot runs.
  hook.answer = true; e.set_native_hook(0, 0); hook.calls = 0;
  r = run('disarmed again');
  assert.strictEqual(hook.calls, 0, 'disarmed again: host not asked');
  assert.strictEqual(r.esi, ITER * 0x77, 'disarmed again: F result');

  // The highest slot (24 in all) works like the first.
  e.set_native_hook(23, F); hook.calls = 0;
  assert.strictEqual(e.get_native_hook(23) >>> 0, F, 'slot 23 armed');
  r = run('slot 23');
  assert.strictEqual(hook.calls, ITER, 'slot 23: host asked every call');
  assert.strictEqual(r.marked, 0, 'slot 23: F body never ran');
  e.set_native_hook(23, 0);

  // A cooperative guest thread inherits the hook: MBAACC's fill runs on its
  // music thread, and an unlisted setter was silently not passed on.
  const { ThreadManager } = require('../lib/thread-manager');
  e.set_native_hook(1, F);
  const tm = new ThreadManager(module, memory, { exports: e }, () => {
    const tctx = { exports: null, getMemory: () => memory.buffer, nativeHook: ctx.nativeHook };
    const ti = createHostImports(tctx);
    Object.assign(ti.host, { memory, log: () => {}, log_i32: () => {}, exit: () => {},
      wait_multiple: () => 0, terminate_thread: () => 0 });
    ti.__setInstance = inst => { tctx.exports = inst.exports; };
    return ti;
  }, {});
  tm._log = () => {};
  tm.recordInheritedWasmGlobal('set_native_hook', 1, F);
  tm.recordInheritedWasmGlobal('set_native_hook', 3, F + 0x10);
  const handle = tm.createThread(code, 0, 0x10000, 0);
  tm.spawnPending();
  const te = tm.threads.get(handle).instance.exports;
  assert.strictEqual(te.get_native_hook(1) >>> 0, F, 'spawned thread has slot 1 armed');
  assert.strictEqual(te.get_native_hook(3) >>> 0, F + 0x10, 'spawned thread has slot 3 armed');
  assert.strictEqual(te.get_native_hook(0) >>> 0, 0, 'unrecorded slot stays empty');

  console.log(`native hook PASS: ${ITER} calls x 3 answered passes, declined and disarmed paths, inherited by threads`);
})().catch(err => { console.error(err); process.exitCode = 1; });
