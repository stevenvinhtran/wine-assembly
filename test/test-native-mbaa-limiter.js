'use strict';
// lib/native-mbaa-limiter.js on a fake guest: MBAACC's limiter Sleep chunk is
// cut to the time left in the frame (whole ms; 0 inside the last ms), on both
// the `push 2` path (hook performs the push) and the Sleep(8) call path.
const assert = require('assert');
const { NativeMbaaLimiter, NativeMbaaSpinLimiter } = require('../lib/native-mbaa-limiter');
const mem = new DataView(new ArrayBuffer(4096));
const ex = { r: { esp: 2048, esi: 512, ebp: 1024, eip: 0 },
  get_esp() { return this.r.esp; }, set_esp(v) { this.r.esp = v; }, get_esi() { return this.r.esi; },
  get_ebp() { return this.r.ebp; }, set_eip(v) { this.r.eip = v; },
  guest_read32: a => mem.getUint32(a, true), guest_write32: (a, v) => mem.setUint32(a, v >>> 0, true) };
const setF = (a, v) => mem.setFloat32(a, v, true);
setF(1024 + 8, 1 / 60);
const call = new NativeMbaaLimiter({ eip: 0x41fe05 }), push = new NativeMbaaLimiter({ eip: 0x41fe03, push: 2 });
// 16.667ms frame, 12ms elapsed: Sleep(8) -> Sleep(4).
setF(512 + 0x48, 0.012); mem.setUint32(2048, 8, true);
assert.strictEqual(call.hook(0x41fe05, ex), false, 'call path declines (guest runs Sleep)');
assert.strictEqual(mem.getUint32(2048, true), 4);
// 16.2ms elapsed: inside the last ms -> Sleep(0).
setF(512 + 0x48, 0.0162); mem.setUint32(2048, 8, true); call.hook(0x41fe05, ex);
assert.strictEqual(mem.getUint32(2048, true), 0);
// Far from the deadline the request is kept.
setF(512 + 0x48, 0.002); mem.setUint32(2048, 8, true); call.hook(0x41fe05, ex);
assert.strictEqual(mem.getUint32(2048, true), 8);
// push path: performs `push ms` and continues at the call.
setF(512 + 0x48, 0.0155); ex.r.esp = 2048;
assert.strictEqual(push.hook(0x41fe03, ex), true);
assert.strictEqual(ex.r.esp, 2044); assert.strictEqual(mem.getUint32(2044, true), 1); assert.strictEqual(ex.r.eip, 0x41fe05);
// Spin limiter (0x420098): period double at [esp+0x20], elapsed float at
// [esi+0x44], Sleep import at the IAT slot.
const spin = new NativeMbaaSpinLimiter({ eip: 0x420098, sleepIat: 256 });
mem.setUint32(256, 0x7500100, true);
ex.r.esp = 2048; mem.setFloat64(2048 + 0x20, 1 / 60, true);
setF(512 + 0x44, 0.005);
assert.strictEqual(spin.hook(0x420098, ex), true, 'far from the deadline: sleeps');
assert.strictEqual(ex.r.eip, 0x7500100, 'enters the Sleep import');
assert.strictEqual(ex.r.esp, 2040);
assert.strictEqual(mem.getUint32(2040, true), 0x420098, 'returns to the loop head');
assert.strictEqual(mem.getUint32(2044, true), 10, 'all but the last ms (11.67ms left -> 10)');
// Back at the loop head after Sleep: pass through once so the clock is re-read.
ex.r.esp = 2048;
assert.strictEqual(spin.hook(0x420098, ex), false, 'first arrival after Sleep passes through');
assert.strictEqual(spin.hook(0x420098, ex), true, 'fresh elapsed still far: sleeps again');
spin.hook(0x420098, ex); ex.r.esp = 2048;
setF(512 + 0x44, 0.0155);
assert.strictEqual(spin.hook(0x420098, ex), false, 'inside the last 2ms the game spins');
mem.setFloat64(2048 + 0x20, 0, true); setF(512 + 0x44, 0);
assert.strictEqual(spin.hook(0x420098, ex), false, 'nonsense period: declines');
console.log('native mbaa limiter PASS: Sleep chunk cut to the frame deadline on both paths; spin limiter sleeps all but the last ms');
