'use strict';
// lib/mbaa-rollback.js on a fake guest whose "game loop" is a deterministic
// update of the real state addresses (world timer, RNG, a player struct, an
// effect slot with its pointer chain into the heap):
//   - capture/restore round-trips the state exactly, pointer chain included;
//   - the self-test records a window, rewinds, re-runs it with rendering
//     skipped and the limiter's frequency forced to 1, and passes;
//   - a byte that changes outside the deterministic update (a nondeterministic
//     game) fails the test at the first affected frame and names the address;
//   - changing inputs or a sound trigger in the window skips the test instead.
const assert = require('assert');
const { MbaaRollback } = require('../lib/mbaa-rollback');

const MEM = 0x800000;  // guest 0x400000.. maps to wasm 0.. (direct window)
const buffer = new ArrayBuffer(MEM);
const dv = new DataView(buffer);
const g2w = a => (a >>> 0) - 0x400000;
const ex = {
  guest_to_wasm: g2w,
  guest_read32: a => dv.getUint32(g2w(a), true),
  guest_write32: (a, v) => dv.setUint32(g2w(a), v >>> 0, true),
};
const r32 = a => dv.getUint32(g2w(a), true), w32 = (a, v) => dv.setUint32(g2w(a), v >>> 0, true);

const HEAP = 0x7c0000, INPUTS = 0x7d0000;
w32(0x54EEE8, 1);                     // in game
w32(0x76E6AC, INPUTS);                // input block
w32(0x774A80, 3579545);               // perf freq
// Effect slot 0 -> heap chain.
w32(0x67BDE8 + 0x320, HEAP);
w32(HEAP + 0x38, HEAP + 0x100);
w32(HEAP + 0x100, HEAP + 0x200);
w32(HEAP + 0x200, 0x1234);

let noise = false, sawSkip = 0, sawTurbo = 0, outside = 0;
// One game frame: everything derives from the previous state and the inputs.
function gameFrame() {
  w32(0x55D1D4, r32(0x55D1D4) + 1);
  const rng = (Math.imul(r32(0x563778), 1103515245) + 12345) >>> 0;
  w32(0x563778, rng);
  w32(0x555238, r32(0x555238) + (rng & 7) + dv.getUint8(g2w(INPUTS + 0x18)));
  w32(HEAP + 0x200, (r32(HEAP + 0x200) + rng) >>> 0);
  // A value from outside the game state (say, a wall clock): not reproducible.
  if (noise) w32(0x61E170 + 0x40, ++outside);
  if (r32(0x55D25C)) sawSkip++;
  if (r32(0x774A80) === 1) sawTurbo++;
}

const rb = new MbaaRollback({ eip: 0x40d330 }, { getBuffer: () => buffer, selfTest: true, window: 6, everyFrames: 24, publish: false });
const run = n => {
  for (let i = 0; i < n; i++) { rb.hook(0x40d330, ex); gameFrame(); }
  while (rb.phase !== 'idle') { rb.hook(0x40d330, ex); gameFrame(); }
};

// Round trip.
const a = rb.capture(ex);
run(3);
assert.notStrictEqual(rb.hash(rb.capture(ex)), rb.hash(a), 'frames changed the state');
rb.restore(ex, a);
assert.strictEqual(rb.hash(rb.capture(ex)), rb.hash(a), 'restore reproduces the capture');
assert.strictEqual(r32(HEAP + 0x200), new DataView(a.buffer).getUint32(a.length - 12 * 1000 + 8, true), 'pointer chain restored');

// Deterministic game: passes, with rendering skipped and the limiter off.
run(200);
assert(rb.stats.passes >= 3, `self-test passes (passes=${rb.stats.passes}, last=${rb.stats.lastResult})`);
assert.strictEqual(rb.stats.fails, 0);
assert(sawSkip > 0 && sawTurbo > 0, 're-run frames skip rendering with the limiter off');
assert.strictEqual(r32(0x55D25C), 0, 'rendering restored after the test');
assert.strictEqual(r32(0x774A80), 3579545, 'perf frequency restored after the test');

// Nondeterministic byte: caught, located, and the present state is put back.
noise = true;
run(200);
assert(rb.stats.fails >= 1, 'nondeterminism is detected');
assert.strictEqual(rb.stats.firstMismatch.first, '0x61e1b0', 'and the differing address is named');
noise = false;

// Changing inputs during the window: skipped, not failed.
const fails = rb.stats.fails, skipped = rb.stats.skipped;
for (let i = 0; i < 200; i++) { dv.setUint8(g2w(INPUTS + 0x18), i % 3); rb.hook(0x40d330, ex); gameFrame(); }
assert.strictEqual(rb.stats.fails, fails, 'changing inputs never fail the test');
assert(rb.stats.skipped > skipped, 'they skip it');

console.log(`mbaa rollback PASS: ${rb.stats.passes} re-runs matched, mismatch located at ${rb.stats.firstMismatch.first}, state ${rb.stats.stateBytes} bytes`);
