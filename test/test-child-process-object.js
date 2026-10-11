#!/usr/bin/env node
'use strict';

// The process object of a child CreateProcess started (phase 3 of
// docs/design-anonymous-pipes.md). hProcess used to be the constant 0xE3001:
// a wait on it returned at once, GetExitCodeProcess said 0 while the child
// ran, and TerminateProcess(hChild) called host_exit on the CALLER. Now the
// handle names the child (0x00E40000 | pid) and every answer comes from the
// host that started it (process_ctl), here a stub holding one child.

const assert = require('assert');
const { ThreadManager } = require('../lib/thread-manager');
const { bootRenderHarness } = require('./render-helper');

const extraWat = String.raw`
  (func (export "test_last_error") (result i32) (global.get $last_error))
  (func (export "t_GetExitCodeProcess") (param $h i32) (param $out i32) (result i32)
    (call $handle_GetExitCodeProcess (local.get $h) (local.get $out) (i32.const 0) (i32.const 0) (i32.const 0) (i32.const 0))
    (i32.load offset=0 (global.get $reg_base)))
  (func (export "t_TerminateProcess") (param $h i32) (param $code i32) (result i32)
    (call $handle_TerminateProcess (local.get $h) (local.get $code) (i32.const 0) (i32.const 0) (i32.const 0) (i32.const 0))
    (i32.load offset=0 (global.get $reg_base)))
  (func (export "t_child_handle") (param $pid i32) (result i32)
    (call $pipe_child_process_handle (local.get $pid)))
  (func (export "t_CloseHandle") (param $h i32) (result i32)
    (call $handle_CloseHandle (local.get $h) (i32.const 0) (i32.const 0) (i32.const 0) (i32.const 0) (i32.const 0))
    (i32.load (global.get $reg_base)))
  (func (export "t_DuplicateHandle") (param $src i32) (param $h i32) (param $dst i32) (param $out i32) (param $access i32) (result i32)
    (call $handle_DuplicateHandle (local.get $src) (local.get $h) (local.get $dst) (local.get $out) (local.get $access) (i32.const 0))
    (i32.load (global.get $reg_base)))
`;

(async () => {
  const children = new Map([[0x4004, { exitCode: 259 }]]);
  const ctlCalls = [];
  let hostExitCode = null;
  let processCtl = (op, pid, arg) => {
    ctlCalls.push([op, pid, arg]);
    const c = children.get(pid & 0xFFFF);
    if (!c) return -1;
    if (op === 2) return 1;
    if (op === 0) return c.exitCode >>> 0;
    if (op === 1) { if (c.exitCode === 259) c.exitCode = arg >>> 0; return 1; }
    return -1;
  };
  const harness = await bootRenderHarness({
    extraWat, fonts: 'none',
    extraHostOverrides: { process_ctl: (...a) => processCtl(...a), exit: code => { hostExitCode = code; } },
  });
  const e = harness.exports;
  const out = e.guest_alloc(16) >>> 0;
  const stack = e.guest_alloc(256) >>> 0;
  const call = (name, ...a) => { e.set_esp(stack + 128); return e[name](...a) >>> 0; };

  const h = e.t_child_handle(0x4004) >>> 0;
  assert.strictEqual(h, 0x00E44004, 'a child hProcess is 0x00E40000 | pid');

  // --- running child ---
  assert.strictEqual(call('t_GetExitCodeProcess', h, out), 1);
  assert.strictEqual(e.guest_read32(out) >>> 0, 259, 'a running child reports STILL_ACTIVE');
  assert.strictEqual(e.get_esp() >>> 0, stack + 128 + 12, 'GetExitCodeProcess pops two arguments');

  const tm = new ThreadManager(null, harness.memory, harness.instance, () => ({ host: {} }), {});
  tm._log = () => {};
  tm.processCtl = processCtl;
  assert.strictEqual(tm.waitSingle(h, 0), 0x102, 'polling a running child is WAIT_TIMEOUT');
  assert.strictEqual(tm.waitSingle(h, 0xFFFFFFFF), 0xFFFF, 'an infinite wait blocks');

  // --- TerminateProcess(child) stops the child, not the caller ---
  assert.strictEqual(call('t_TerminateProcess', h, 7), 1, 'TerminateProcess(hChild) succeeds');
  assert.strictEqual(hostExitCode, null, 'and does not end the calling process');
  assert.deepStrictEqual(ctlCalls[ctlCalls.length - 1], [1, 0x4004, 7], 'the host is asked to stop that child');
  assert.strictEqual(e.get_esp() >>> 0, stack + 128 + 12, 'TerminateProcess pops two arguments');

  // --- exited child ---
  assert.strictEqual(call('t_GetExitCodeProcess', h, out), 1);
  assert.strictEqual(e.guest_read32(out) >>> 0, 7, "the exit code is the terminate code");
  assert.strictEqual(tm.waitSingle(h, 0xFFFFFFFF), 0, 'a wait on an exited child is WAIT_OBJECT_0');

  // --- unknown child handle ---
  children.get(0x4004).exitCode = 0xFFFFFFFF;
  assert.strictEqual(call('t_GetExitCodeProcess', h, out), 1,
    'exit code 0xffffffff is not an invalid-handle sentinel');
  assert.strictEqual(e.guest_read32(out) >>> 0, 0xFFFFFFFF,
    'the full DWORD exit code is preserved');
  assert.strictEqual(tm.waitSingle(h, 0), 0, 'that process is still signaled');

  const ghost = e.t_child_handle(0x4100) >>> 0;
  assert.strictEqual(call('t_GetExitCodeProcess', ghost, out), 0, 'an unknown child handle fails');
  assert.strictEqual(e.test_last_error() >>> 0, 6, 'with ERROR_INVALID_HANDLE');
  assert.strictEqual(call('t_TerminateProcess', ghost, 1), 0);

  // --- the caller's own handle still ends the caller ---
  call('t_TerminateProcess', 0xFFFFFFFF, 3);
  assert.strictEqual(hostExitCode, 3, 'TerminateProcess(GetCurrentProcess()) still exits this process');

  // Real browser host records plus two distinct WASM memories. The alias is
  // allocated in the recipient, while its value is written in the caller.
  const fs = require('fs'), path = require('path'), vm = require('vm');
  let launch;
  const context = { console, URLSearchParams, setTimeout: () => 1, clearTimeout() {},
    window: { wineShell: { launchVfsExe(file, parent, dir, args, options) { launch = options; return true; } } },
    createHostImports: () => ({ host: {}, gdi: {} }) };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'host.js'), 'utf8') +
    '\n;globalThis.WineAssembly = WineAssembly;', context);
  const parent = new context.WineAssembly(), child = new context.WineAssembly();
  parent.memory = harness.memory;
  parent.readString = () => 'launcher.exe';
  const ph = parent.getImports().host, ch = child.getImports().host;
  processCtl = ph.process_ctl;
  const childHarness = await bootRenderHarness({ extraWat, fonts: 'none', extraHostOverrides: { process_ctl: ch.process_ctl } });
  child.memory = childHarness.memory;
  const ce = childHarness.exports, cs = ce.guest_alloc(256) >>> 0, co = ce.guest_alloc(16) >>> 0;
  const cc = (name, ...args) => { ce.set_esp(cs + 128); return ce[name](...args) >>> 0; };
  const childPid = ph.process_spawn(1, 0, 0, 0, 0, 1, 1);
  await launch.beforeRun(child);
  const dup = (ex, sp, src, handle, dst, output, access = 0, options = 2) => {
    ex.set_esp(sp);
    [src, handle, dst, output, access, 0, options].forEach((v, i) => ex.guest_write32(sp + 4 + i * 4, v));
    return ex.t_DuplicateHandle(src, handle, dst, output, access) >>> 0;
  };
  assert.strictEqual(dup(e, stack + 128, -1, -1, 0xE40000 | childPid, out), 1);
  const alias = e.guest_read32(out) >>> 0;
  assert.strictEqual(alias & 0xFFFF0000, 0xE60000, 'a real process alias, not pseudo -1');
  assert.strictEqual(parent._processAliases.size, 0, 'target owns the handle');
  assert.strictEqual(child._processAliases.size, 1);
  // The real synchronous Worker RPC transports the caller's stack address;
  // allocation still occurs in the launcher's host-side handle table.
  const RPC = require('../lib/guest-rpc'), {Worker} = require('node:worker_threads');
  const sigs = {process_ctl: require('../lib/host-import-sigs.generated.json').sigs.process_ctl};
  const broker = RPC.createMainBroker(harness.memory, ph, sigs, {});
  const rpcAlias = await new Promise((resolve, reject) => {
    let answer;
    const worker = new Worker(`
      const {parentPort,workerData:d}=require('node:worker_threads');
      const RPC=require(d.rpcPath);
      const proxy=RPC.createWorkerImports(d.memory,d.sigs,m=>parentPort.postMessage(m),{slot:1});
      parentPort.postMessage({t:'answer',result:proxy.imports.host.process_ctl(3,d.stackWa,0)});
    `, {eval:true, workerData:{memory:harness.memory,sigs,stackWa:e.guest_to_wasm(stack+128),rpcPath:require.resolve('../lib/guest-rpc')}});
    const timer = setTimeout(() => {worker.terminate();reject(new Error('process alias RPC timeout'));},15000);
    worker.on('message', m => {
      if (m.t === 'rpc') broker.serveRpc(m.slot);
      else if (m.t === 'calls') broker.serveCalls(m);
      else if (m.t === 'answer') answer=m.result>>>0;
    });
    worker.on('error', reject);
    worker.on('exit', code => {clearTimeout(timer);code?reject(new Error('worker exit '+code)):resolve(answer);});
  });
  assert.notStrictEqual(rpcAlias, alias);
  assert.strictEqual(cc('t_GetExitCodeProcess', rpcAlias, co), 1);
  assert.strictEqual(cc('t_CloseHandle', rpcAlias), 1);
  assert.strictEqual(cc('t_GetExitCodeProcess', alias, co), 1);
  assert.strictEqual(ce.guest_read32(co), 259);
  const ctm = new ThreadManager(null, childHarness.memory, childHarness.instance, () => ({host:{}}), {});
  ctm._log = () => {};
  ctm.processCtl = ch.process_ctl;
  assert.strictEqual(ctm.waitSingle(alias, 0), 0x102);
  assert.strictEqual(ctm.waitSingle(alias, 0xFFFFFFFF), 0xFFFF);
  ce.guest_write32(co, alias);
  assert.strictEqual(ctm.waitMultiple(1, ce.guest_to_wasm(co), 1, 0), 0x102, 'wait-all does not signal a running process');
  assert.strictEqual(ctm.waitMultiple(1, ce.guest_to_wasm(co), 0, 0), 0x102);
  assert.strictEqual(dup(ce, cs + 128, -1, alias, -1, co, 0x400, 0), 1);
  const queryOnly = ce.guest_read32(co) >>> 0;
  assert.strictEqual(cc('t_TerminateProcess', queryOnly, 42), 0);
  assert.strictEqual(ce.test_last_error(), 5, 'rights are enforced');
  assert.strictEqual(ctm.waitSingle(queryOnly, 0), 0xFFFFFFFF);
  assert.strictEqual(cc('t_TerminateProcess', alias, 0xFFFFFFFF), 1);
  assert.strictEqual(parent._processObject.wine, null, 'exited object releases its host/memory reference');
  assert.strictEqual(ctm.waitSingle(alias, 0), 0);
  ce.guest_write32(co, alias);
  assert.strictEqual(ctm.waitMultiple(1, ce.guest_to_wasm(co), 1, 0), 0);
  assert.strictEqual(ctm.waitMultiple(1, ce.guest_to_wasm(co), 0, 0), 0);
  assert.strictEqual(cc('t_GetExitCodeProcess', queryOnly, co), 1);
  assert.strictEqual(ce.guest_read32(co) >>> 0, 0xFFFFFFFF, 'all aliases observe the full exit DWORD');
  assert.strictEqual(cc('t_CloseHandle', alias), 1);
  assert.strictEqual(cc('t_CloseHandle', alias), 0);
  assert.strictEqual(ctm.waitSingle(alias, 0), 0xFFFFFFFF, 'closed handle is WAIT_FAILED');
  ce.guest_write32(co, alias);
  assert.strictEqual(ctm.waitMultiple(1, ce.guest_to_wasm(co), 1, 0), 0xFFFFFFFF);
  assert.strictEqual(ctm.waitMultiple(1, ce.guest_to_wasm(co), 0, 0), 0xFFFFFFFF);
  assert.strictEqual(cc('t_GetExitCodeProcess', alias, co), 0);
  assert.strictEqual(cc('t_GetExitCodeProcess', queryOnly, co), 1, 'closing one alias preserves another');
  assert.strictEqual(dup(ce, cs + 128, -1, queryOnly, 0x123456, co, 0, 3), 0);
  assert.strictEqual(cc('t_GetExitCodeProcess', queryOnly, co), 0, 'CLOSE_SOURCE also applies on failure');
  const parent259 = new context.WineAssembly();
  parent259.memory = harness.memory;
  parent259.readString = () => 'launcher.exe';
  const p259 = parent259.getImports().host;
  processCtl = p259.process_ctl;
  const pid259 = p259.process_spawn(1, 0, 0, 0, 0, 1, 1);
  await launch.beforeRun(child);
  assert.strictEqual(dup(e, stack + 128, -1, -1, 0xE40000 | pid259, out), 1);
  const exited259 = e.guest_read32(out) >>> 0;
  parent259._exitCode = 259;
  parent259.stop({repaint:false});
  assert.strictEqual(ctm.waitSingle(exited259, 0), 0, 'signaled state is independent of exit code STILL_ACTIVE');
  assert.strictEqual(cc('t_GetExitCodeProcess', exited259, co), 1);
  assert.strictEqual(ce.guest_read32(co), 259);
  child.stop({ repaint: false });
  assert.strictEqual(child._processAliases.size, 0, 'process teardown closes owned handles');

  console.log('PASS test-child-process-object');
})().catch(err => { console.error(err); process.exit(1); });
