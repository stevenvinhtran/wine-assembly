#!/usr/bin/env node

'use strict';

const assert = require('assert');
const { bootRenderHarness } = require('./render-helper');

const extraWat = String.raw`
  (func (export "test_find_publish") (param $class i32) (param $title i32) (result i32)
    (local $hwnd i32)
    (local.set $hwnd (global.get $next_hwnd))
    (global.set $next_hwnd (i32.add (local.get $hwnd) (i32.const 1)))
    (drop (call $class_table_register (call $class_name_key (local.get $class))))
    (call $wnd_table_set (local.get $hwnd) (global.get $WNDPROC_CTRL_NATIVE))
    (call $wnd_set_class_slot_from_name (local.get $hwnd) (local.get $class))
    (drop (call $host_create_window (local.get $hwnd) (i32.const 0)
      (i32.const 0) (i32.const 0) (i32.const 100) (i32.const 100)
      (call $g2w (local.get $title)) (i32.const 0)))
    (call $host_set_window_class (local.get $hwnd) (call $g2w (local.get $class)))
    (local.get $hwnd))
  (func (export "test_find_unpublish") (param $hwnd i32)
    (call $wnd_table_remove (local.get $hwnd))
    (call $host_destroy_window (local.get $hwnd)))
  (func (export "test_find_setup")
      (param $hwnd i32) (param $parent i32)
      (param $class i32) (param $title i32) (result i32)
    (local $atom i32)
    (local.set $atom
      (call $class_table_register (call $class_name_key (local.get $class))))
    (call $wnd_table_set (local.get $hwnd) (i32.const 0x00401000))
    (call $wnd_set_parent (local.get $hwnd) (local.get $parent))
    (call $wnd_set_class_slot_from_name (local.get $hwnd) (local.get $class))
    (call $title_table_set
      (local.get $hwnd) (call $g2w (local.get $title))
      (call $lstr_len (local.get $title) (i32.const 0)))
    (local.get $atom))
  (func (export "test_find_name_atom") (param $atom i32) (param $name i32)
    (i32.store offset=44 (call $class_record_addr (call $class_find_slot (local.get $atom)))
      (local.get $name)))
  (func (export "test_find_window_a")
      (param $class i32) (param $title i32) (result i32)
    (i32.store offset=16 (global.get $reg_base) (i32.const 0x00300000))
    (call $handle_FindWindowA
      (local.get $class) (local.get $title) (i32.const 0)
      (i32.const 0) (i32.const 0) (i32.const 0))
    (i32.load offset=0 (global.get $reg_base)))
  (func (export "test_find_window_w")
      (param $class i32) (param $title i32) (result i32)
    (i32.store offset=16 (global.get $reg_base) (i32.const 0x00300000))
    (call $handle_FindWindowW
      (local.get $class) (local.get $title) (i32.const 0)
      (i32.const 0) (i32.const 0) (i32.const 0))
    (i32.load offset=0 (global.get $reg_base)))
  (func (export "test_find_window_ex_a")
      (param $parent i32) (param $after i32)
      (param $class i32) (param $title i32) (result i32)
    (i32.store offset=16 (global.get $reg_base) (i32.const 0x00300000))
    (call $handle_FindWindowExA
      (local.get $parent) (local.get $after)
      (local.get $class) (local.get $title)
      (i32.const 0) (i32.const 0))
    (i32.load offset=0 (global.get $reg_base)))
`;

(async () => {
  const { exports: e, renderer, memory, host } = await bootRenderHarness({ extraWat, fonts: 'none' });

  const strA = value => {
    const bytes = Buffer.from(value + '\0', 'latin1');
    const guest = e.guest_alloc(bytes.length) >>> 0;
    bytes.forEach((byte, index) => e.guest_write8(guest + index, byte));
    return guest;
  };
  const strW = value => {
    const guest = e.guest_alloc((value.length + 1) * 2) >>> 0;
    for (let index = 0; index < value.length; index++) {
      const ch = value.charCodeAt(index);
      e.guest_write8(guest + index * 2, ch & 0xff);
      e.guest_write8(guest + index * 2 + 1, ch >>> 8);
    }
    e.guest_write8(guest + value.length * 2, 0);
    e.guest_write8(guest + value.length * 2 + 1, 0);
    return guest;
  };

  const mainClass = strA('FableMain');
  const otherClass = strA('OtherClass');
  const paneClass = strA('Pane');
  const deepClass = strA('DeepPane');
  const top1 = 0x10001;
  const top2 = 0x10002;
  const top3 = 0x10003;
  const child1 = 0x10011;
  const child2 = 0x10012;
  const grandchild = 0x10013;
  const foreignChild = 0x10021;

  const mainAtom = e.test_find_setup(
    top1, 0, mainClass, strA('Archive Manager')) >>> 0;
  e.test_find_setup(top2, 0, otherClass, strA('Second Window'));
  e.test_find_setup(top3, 0, mainClass, strA('Archive Manager'));
  e.test_find_setup(child1, top1, paneClass, strA('Files'));
  e.test_find_setup(child2, top1, paneClass, strA('Details'));
  e.test_find_setup(grandchild, child1, deepClass, strA('Nested'));
  e.test_find_setup(foreignChild, top2, paneClass, strA('Foreign'));

  assert.strictEqual(
    e.test_find_window_a(strA('fablemain'), strA('ARCHIVE MANAGER')) >>> 0,
    top3, 'FindWindowA compares class/title case-insensitively in Z order');
  assert.strictEqual(e.get_esp() >>> 0, 0x0030000c,
    'FindWindowA pops two stdcall arguments');
  assert.strictEqual(e.test_find_window_a(0, strA('second window')) >>> 0, top2,
    'a NULL class matches by title alone');
  assert.strictEqual(e.test_find_window_a(mainAtom, 0) >>> 0, top3,
    'a registered class atom selects the same top-level class');
  assert.strictEqual(e.test_find_window_a(0, 0) >>> 0, top3,
    'two NULL filters return the highest top-level window');
  assert.strictEqual(e.test_find_window_a(strA('Missing'), 0), 0,
    'an unknown class returns NULL');

  assert.strictEqual(e.test_find_window_w(
    strW('FABLEMAIN'), strW('archive manager')) >>> 0, top3,
  'FindWindowW reads UTF-16 filters instead of treating them as ANSI');
  assert.strictEqual(e.test_find_window_w(mainAtom, strW('ARCHIVE MANAGER')) >>> 0,
    top3, 'FindWindowW also accepts a class atom');

  assert.strictEqual(e.test_find_window_ex_a(
    top1, 0, strA('pane'), 0) >>> 0, child2,
  'FindWindowExA starts at the highest direct child');
  assert.strictEqual(e.test_find_window_ex_a(
    top1, child2, paneClass, 0) >>> 0, child1,
  'hwndChildAfter resumes at the next lower matching sibling');
  assert.strictEqual(e.test_find_window_ex_a(
    top1, child1, paneClass, 0), 0,
  'the child scan stops after the final sibling');
  assert.strictEqual(e.test_find_window_ex_a(
    top1, foreignChild, 0, 0), 0,
  'an hwndChildAfter from another parent is rejected');
  assert.strictEqual(e.test_find_window_ex_a(
    top1, 0, deepClass, 0), 0,
  'FindWindowEx searches direct children rather than all descendants');
  assert.strictEqual(e.test_find_window_ex_a(
    child1, 0, deepClass, strA('nested')) >>> 0, grandchild,
  'a nested parent can search its own direct children');
  assert.strictEqual(e.test_find_window_ex_a(
    0, top3, mainClass, 0) >>> 0, top1,
  'a NULL parent searches and resumes through top-level windows');
  assert.strictEqual(e.test_find_window_ex_a(
    0, 0x7777, 0, 0), 0,
  'a stale hwndChildAfter does not restart the top-level scan');
  assert.strictEqual(e.get_esp() >>> 0, 0x00300014,
    'FindWindowExA pops four stdcall arguments');

  e.wnd_z_set_after(top1, 0); // HWND_TOP
  assert.strictEqual(e.test_find_window_a(mainClass, 0) >>> 0, top1,
    'FindWindowA observes a live top-level Z-order change');
  assert.strictEqual(e.test_find_window_ex_a(
    0, top1, mainClass, 0) >>> 0, top3,
  'FindWindowExA resumes below the reordered top-level window');

  // A foreign record has no entry in this process's WND or class tables.
  renderer.windows[0x70001] = {hwnd:0x70001, className:'IonLauncher',
    title:'Ion Launcher', processId:9999, zOrder:100, isChild:false};
  assert.strictEqual(e.test_find_window_a(strA('ionlauncher'), strA('ION LAUNCHER')) >>> 0,
    0x70001, 'ANSI guest handler finds a foreign desktop window');
  assert.strictEqual(e.test_find_window_w(strW('IonLauncher'), strW('Ion Launcher')) >>> 0,
    0x70001, 'wide guest handler finds a foreign desktop window');
  renderer.windows[0x70002] = {hwnd:0x70002, className:'Pane', title:'Child',
    parentHwnd:0x70001, isChild:true, processId:9999, zOrder:101};
  assert.strictEqual(e.test_find_window_ex_a(0x70001, 0, strA('Pane'), 0) >>> 0,
    0x70002, 'foreign direct child is found');
  assert.strictEqual(e.test_find_window_ex_a(0x70001, 0x70002, 0, 0), 0,
    'foreign after does not restart traversal');
  renderer.windows[0x70001].className = 'FableMain';
  e.test_find_name_atom(mainAtom, mainClass);
  assert.strictEqual(e.test_find_window_a(mainAtom, strA('Ion Launcher')) >>> 0,
    0x70001, 'application atom resolves to its registered name across processes');
  assert.strictEqual(e.test_find_window_w(mainAtom, strW('Ion Launcher')) >>> 0,
    0x70001, 'wide title and ANSI registered atom name retain separate encodings');
  renderer.windows[0x70002].className = 'Button';
  assert.strictEqual(e.test_find_window_ex_a(0x70001, 0, 0x80, 0) >>> 0,
    0x70002, 'USER built-in class atom resolves across processes');
  delete renderer.windows[0x70002];
  delete renderer.windows[0x70001];
  assert.strictEqual(e.test_find_window_a(strA('IonLauncher'), 0), 0,
    'destroyed foreign window cannot be rediscovered');
  const other = await bootRenderHarness({extraWat, fonts:'none'});
  assert.notStrictEqual(other.memory, renderer.wasmMemory, 'process instances have distinct memories');
  other.exports.set_process_id(2000);
  other.exports.set_hwnd_base(0x20000);
  other.hostCtx.processId = 2000;
  other.hostCtx.instance = other.instance;
  other.hostCtx.wasmMemory = other.memory;
  other.renderer.windows = renderer.windows;
  const otherText = text => {
    const bytes = Buffer.from(text + '\0', 'latin1');
    const ptr = other.exports.guest_alloc(bytes.length) >>> 0;
    bytes.forEach((b,i) => other.exports.guest_write8(ptr+i,b));
    return ptr;
  };
  const liveForeign = other.exports.test_find_publish(otherText('RealForeign'), otherText('Other Process')) >>> 0;
  assert(liveForeign, 'owner instance allocates a real HWND');
  assert.strictEqual(renderer.windows[liveForeign].processId, 2000);
  assert.strictEqual(e.test_find_window_a(strA('RealForeign'), strA('Other Process')) >>> 0,
    liveForeign, 'caller finds window published from separate instance memory');
  // Exercise the actual synchronous worker broker, with caller-memory string
  // addresses. This is a transport test, not an original-game Worker run.
  const RPC = require('../lib/guest-rpc');
  const {Worker} = require('node:worker_threads');
  const sigs = {find_window:require('../lib/host-import-sigs.generated.json').sigs.find_window};
  const broker = RPC.createMainBroker(memory, host, sigs, {});
  const classWA = e.get_staging() >>> 0;
  new Uint8Array(memory.buffer).set(Buffer.from('RealForeign\0'), classWA);
  const rpcLookup = () => new Promise((resolve, reject) => {
    let answer;
    const worker = new Worker(`
      const {parentPort,workerData:d}=require('node:worker_threads');
      const RPC=require(d.rpcPath);
      const proxy=RPC.createWorkerImports(d.memory,d.sigs,m=>parentPort.postMessage(m),{slot:1});
      const result=proxy.imports.host.find_window(0,0,d.classWA,0,0);
      parentPort.postMessage({t:'answer',result});
    `, {eval:true, workerData:{memory,sigs,classWA,rpcPath:require.resolve('../lib/guest-rpc')}});
    const timer = setTimeout(() => {worker.terminate();reject(new Error('FindWindow worker RPC timeout'));},15000);
    worker.on('message', m => {
      if (m.t === 'rpc') broker.serveRpc(m.slot);
      else if (m.t === 'calls') broker.serveCalls(m);
      else if (m.t === 'answer') answer = m.result >>> 0;
    });
    worker.on('error', reject);
    worker.on('exit', code => {clearTimeout(timer);code ? reject(new Error('worker exit '+code)) : resolve(answer);});
  });
  assert.strictEqual(await rpcLookup(), liveForeign, 'real worker RPC returns foreign HWND');
  other.exports.test_find_unpublish(liveForeign);
  assert.strictEqual(e.test_find_window_a(strA('RealForeign'), 0), 0,
    'owner-side destruction removes foreign instance from lookup');
  assert.strictEqual(await rpcLookup(), 0, 'worker RPC observes owner-side destruction');
  console.log('PASS FindWindowA/W and FindWindowExA search live USER window trees');
})().catch(error => {
  console.error(error && error.stack || error);
  process.exit(1);
});
