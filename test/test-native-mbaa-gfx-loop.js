'use strict';
// lib/native-mbaa-gfx-loop.js on a fake guest: the graphics-array loop's
// counter skips empty slots, stops at the next occupied slot, and never
// passes the last slot, so the guest still runs the loop's exit itself.
const assert = require('assert');
const { NativeMbaaGfxSkip } = require('../lib/native-mbaa-gfx-loop');
const ARRAY = 0x61E170, STRIDE = 0x60, COUNT = 4000;
const buf = new ArrayBuffer(0x100000 + COUNT * STRIDE);
const dv = new DataView(buf), u8 = new Uint8Array(buf);
const base = 0x100000, stack = 0x1000;
const ex = {
  get_esp: () => stack,
  guest_to_wasm: a => (a === ARRAY ? base : a),
  guest_read32: a => dv.getUint32(a, true),
  guest_write32: (a, v) => dv.setUint32(a, v >>> 0, true),
};
const hook = new NativeMbaaGfxSkip({ eip: 0x458ee6 }, { getBuffer: () => buf });
const counter = () => dv.getUint32(stack + 0xFC, true);
const setCounter = v => dv.setUint32(stack + 0xFC, v, true);
for (const slot of [5, 6, 1200]) u8[base + slot * STRIDE] = 1;

setCounter(0);
assert.strictEqual(hook.hook(0x458ee6, ex), false, 'never answers: the guest runs the iteration');
assert.strictEqual(counter(), 5, 'skips to the first occupied slot');
assert.strictEqual(hook.hook(0x458ee6, ex), false);
assert.strictEqual(counter(), 5, 'an occupied slot is left alone');
setCounter(6); hook.hook(0x458ee6, ex);
assert.strictEqual(counter(), 6);
setCounter(7); hook.hook(0x458ee6, ex);
assert.strictEqual(counter(), 1200, 'over a long empty run');
setCounter(1201); hook.hook(0x458ee6, ex);
assert.strictEqual(counter(), COUNT - 1, 'stops at the last slot: its iteration and the exit run as guest code');
setCounter(COUNT - 1); hook.hook(0x458ee6, ex);
assert.strictEqual(counter(), COUNT - 1);
assert.strictEqual(hook.hook(0x401000, ex), false, 'other addresses ignored');
assert.strictEqual(hook.stats.skipped, 5 + 1193 + (COUNT - 1 - 1201));
console.log('native mbaa gfx-skip PASS');
