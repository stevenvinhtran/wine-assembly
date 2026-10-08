'use strict';
const assert = require('assert');
const fs = require('fs');
const { bootRenderHarness } = require('./render-helper');
const extraWat = String.raw`
  (func (export "test_thunk") (param $id i32) (result i32)
    (local $addr i32)
    (local.set $addr (i32.add (global.get $THUNK_BASE) (i32.mul (global.get $num_thunks) (i32.const 8))))
    (i32.store (local.get $addr) (i32.const 0))
    (i32.store offset=4 (local.get $addr) (local.get $id))
    (global.set $num_thunks (i32.add (global.get $num_thunks) (i32.const 1)))
    (call $update_thunk_end)
    (i32.add (i32.sub (local.get $addr) (global.get $GUEST_BASE)) (global.get $image_base)))
  (func (export "test_start") (param $hwnd i32) (param $sub i32) (param $proc i32) (param $stack i32) (param $done i32)
    (call $wnd_table_set (local.get $hwnd) (local.get $sub))
    (drop (call $dialog_proc_set (local.get $hwnd) (local.get $proc)))
    (i32.store offset=16 (global.get $reg_base) (local.get $stack))
    (call $gs32 (local.get $stack) (local.get $done))
    (call $gs32 (i32.add (local.get $stack) (i32.const 4)) (local.get $hwnd))
    (call $gs32 (i32.add (local.get $stack) (i32.const 8)) (i32.const 0x111))
    (call $gs32 (i32.add (local.get $stack) (i32.const 12)) (i32.const 1559))
    (call $gs32 (i32.add (local.get $stack) (i32.const 16)) (i32.const 0x10004))
    (global.set $eip (local.get $sub)))
  (func (export "test_close") (param $hwnd i32)
    (local $esp i32)
    (local.set $esp (i32.load offset=16 (global.get $reg_base)))
    (call $handle_EndDialog (local.get $hwnd) (i32.const 99) (i32.const 0) (i32.const 0) (i32.const 0) (i32.const 0))
    (i32.store offset=16 (global.get $reg_base) (local.get $esp)))
  (func (export "test_default") (param $proc i32) (param $stack i32) (param $msg i32)
    (call $wnd_table_set (i32.const 0x10024) (global.get $WNDPROC_DIALOG))
    (drop (call $dialog_proc_set (i32.const 0x10024) (local.get $proc)))
    (call $dialog_extra_set (i32.const 0x10024) (i32.const 0) (i32.const 77))
    (i32.store offset=16 (global.get $reg_base) (local.get $stack))
    (call $gs32 (local.get $stack) (i32.const 0x401234))
    (call $handle_CallWindowProcA (global.get $WNDPROC_DIALOG)
      (i32.const 0x10024) (local.get $msg) (i32.const 0) (i32.const 0) (i32.const 0)))
`;
const u32 = n => [n, n >>> 8, n >>> 16, n >>> 24].map(x => x & 255);
(async () => {
  const { exports: e, memory } = await bootRenderHarness({extraWat});
  const pe = fs.readFileSync(require('path').join(__dirname, 'binaries/calc.exe'));
  new Uint8Array(memory.buffer).set(pe, e.get_staging());
  assert(e.load_pe(pe.length));
  const bytes = new Uint8Array(memory.buffer), view = new DataView(memory.buffer);
  const addr = p => p - e.get_image_base() + e.get_guest_base();
  const alloc = n => e.guest_alloc(n) >>> 0;
  const thunk = name => e.test_thunk(require('../src/api_table.json').find(x => x.name === name).id);
  const seen = alloc(16), template = alloc(64), nested = alloc(64), proc = alloc(128), sub = alloc(128), done = alloc(16);
  bytes.fill(0, addr(template), addr(template) + 64);
  view.setUint32(addr(template), 0x80000000, true);
  view.setUint16(addr(template) + 14, 80, true); view.setUint16(addr(template) + 16, 40, true);
  // The nested dialog remains open until the harness supplies EndDialog.
  bytes.set([0x81,0x7c,0x24,8,...u32(0x110),0x75,9,0x8b,0x44,0x24,4,0xa3,...u32(seen),0x31,0xc0,0xc2,16,0], addr(nested));
  bytes.set([0x6a,0,0x68,...u32(nested),0x6a,0,0x68,...u32(template),0x6a,0,0xb8,...u32(thunk('DialogBoxIndirectParamA')),0xff,0xd0,0xa3,...u32(seen+4),0x31,0xc0,0xc2,16,0],addr(proc));
  // Subclass forwards its original four arguments and the native dialog marker.
  const forward = [0xff,0x74,0x24,16];
  bytes.set([...forward,...forward,...forward,...forward,0x68,...u32(0xffff0004),0xb8,...u32(thunk(process.env.DIALOG_CALL_VARIANT || 'CallWindowProcA')),0xff,0xd0,0xc7,0x05,...u32(seen+8),...u32(1),0xc2,16,0],addr(sub));
  bytes.set([0xeb,0xfe],addr(done));
  const stack = alloc(8192)+4096;
  e.test_start(0x10020,sub,proc,stack,done);
  for(let i=0;i<8 && !view.getUint32(addr(seen),true);i++) e.run(100000);
  const hwnd = view.getUint32(addr(seen),true);
  assert(hwnd,'real nested WM_INITDIALOG ran');
  assert.strictEqual(view.getUint32(addr(seen+8),true),0,'subclass must remain suspended while nested dialog is open');
  e.test_close(hwnd); e.clear_yield(); for(let i=0;i<8;i++) e.run(100000);
  assert.strictEqual(view.getUint32(addr(seen+4),true),99,'modal result reaches original DLGPROC');
  assert.strictEqual(view.getUint32(addr(seen+8),true),1,'original subclass resumes after modal completion');
  assert.strictEqual(e.get_esp()>>>0,stack+20,'both stdcall frames unwind exactly');
  assert.strictEqual(e.get_eip()>>>0,done,'original dispatcher caller resumes');
  const handled = alloc(16);
  bytes.set([0xb8,1,0,0,0,0xc2,16,0],addr(handled));
  for(const [msg,result] of [[0x110,1],[0x14,77]]) {
    e.test_default(handled,stack,msg);
    assert.strictEqual(e.get_eax(),result,'default processing retains BOOL / DWL_MSGRESULT semantics');
    assert.strictEqual(e.get_esp()>>>0,stack+24,'synchronous default consumes the original five-argument frame');
  }
  e.test_default(0,stack,0);
  assert.strictEqual(e.get_eax(),0,'dialog without a DLGPROC retains default WM_NULL result');
  assert.strictEqual(e.get_esp()>>>0,stack+24,'no-DLGPROC default consumes all five arguments');
  console.log('PASS subclass CallWindowProc dialog nested modal continuation');
})().catch(err=>{console.error(err);process.exit(1);});
