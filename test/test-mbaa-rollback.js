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

const rb = new MbaaRollback({ eip: 0x40e390 }, { getBuffer: () => buffer, selfTest: true, window: 6, everyFrames: 24, publish: false });
const run = n => {
  for (let i = 0; i < n; i++) { rb.hook(0x40e390, ex); gameFrame(); }
  while (rb.phase !== 'idle') { rb.hook(0x40e390, ex); gameFrame(); }
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
for (let i = 0; i < 200; i++) { dv.setUint8(g2w(INPUTS + 0x18), i % 3); rb.hook(0x40e390, ex); gameFrame(); }
assert.strictEqual(rb.stats.fails, fails, 'changing inputs never fail the test');
assert(rb.stats.skipped > skipped, 'they skip it');

// Input bridge: the source's frame is written to both players' slots at the
// frame boundary (neutral 5 stored as 0), and the game's keyboard mapping is
// kept zeroed so physical keys cannot add to it.
{
  const SITES = [[0x41F098, [0x89, 0x06]], [0x41F0A0, [0x89, 0x46, 0x0C]], [0x4A024E, [0x89, 0x07]],
    [0x4A027F, [0x09, 0x57, 0x0C]], [0x4A0291, [0x09, 0x57, 0x0C]], [0x4A02A2, [0x09, 0x57, 0x0C]],
    [0x4A02B4, [0x09, 0x57, 0x0C]], [0x4A02E9, [0x89, 0x17]], [0x4A02F2, [0x09, 0x47, 0x0C]]];
  // Unexpected code at a site: nothing is patched and no input is written.
  const wrong = new MbaaRollback({ eip: 0x40e390 }, { getBuffer: () => buffer, publish: false,
    inputSource: () => ({ p1: { dir: 6, btn: 0x10 }, p2: { dir: 5, btn: 0 } }) });
  dv.setUint16(g2w(INPUTS + 0x18), 0, true);
  wrong.hook(0x40e390, ex);
  assert.strictEqual(dv.getUint16(g2w(INPUTS + 0x18), true), 0, 'mismatched code: no input written');
  assert(/mismatch/.test(wrong.stats.inputTakeover), 'and the mismatch is reported');
  for (const [va, bytes] of SITES) bytes.forEach((b, i) => dv.setUint8(g2w(va + i), b));
  const invalidated = [];
  ex.invalidate_code_range = (va, len) => invalidated.push([va, len]);
  for (let i = 0; i < 20; i++) dv.setUint8(g2w(0x54D2C0 + i), i + 1);
  const seen = [];
  const bridge = new MbaaRollback({ eip: 0x40e390 }, { getBuffer: () => buffer, publish: false,
    inputSource: f => { seen.push(f); return { p1: { dir: 6, btn: 0x10 | 0x400 }, p2: { dir: 5, btn: 0x20 } }; } });
  bridge.hook(0x40e390, ex);
  const u16 = a => dv.getUint16(g2w(a), true);
  assert.deepStrictEqual([u16(INPUTS + 0x18), u16(INPUTS + 0x24), u16(INPUTS + 0x2C), u16(INPUTS + 0x38)],
    [6, 0x410, 0, 0x20], 'P1/P2 direction and buttons written');
  assert(new Uint8Array(buffer, g2w(0x54D2C0), 20).every(b => b === 0), 'keyboard mapping zeroed');
  assert.deepStrictEqual(seen, [1], 'source asked once per frame with the frame number');
  for (const [va, bytes] of SITES) bytes.forEach((b, i) => assert.strictEqual(dv.getUint8(g2w(va + i)), 0x90, `0x${va.toString(16)} removed`));
  assert.strictEqual(invalidated.length, SITES.length, 'decoded copies of the patched code are discarded');
  delete ex.invalidate_code_range;
}

// A launcher-started mode cannot leave character select: cancel is dropped
// for a side still choosing its character, and kept once it has moved on.
{
  const u16 = a => dv.getUint16(g2w(a), true);
  const lock = new MbaaRollback({ eip: 0x40e390 }, { getBuffer: () => buffer, publish: false, lockCharaSelect: true,
    inputSource: () => ({ p1: { dir: 4, btn: 0x20 | 0x800 | 0x10 }, p2: { dir: 5, btn: 0x20 | 0x800 } }) });
  w32(0x54EEE8, 20); w32(0x74D8EC, 0); w32(0x74D910, 1);
  lock.hook(0x40e390, ex);
  assert.strictEqual(u16(INPUTS + 0x24), 0x10, 'P1 choosing a character: cancel dropped, A kept');
  assert.strictEqual(u16(INPUTS + 0x38), 0x820, 'P2 on moon select: cancel goes back a step');
  w32(0x54EEE8, 1);
  lock.hook(0x40e390, ex);
  assert.strictEqual(u16(INPUTS + 0x24), 0x830, 'outside character select nothing is dropped');
}

// Mode route: the first menu confirmation runs the prologue and lands on the
// chosen branch; later ones run the game's own code.
{
  const { MbaaModeRoute } = require('../lib/mbaa-rollback');
  const regs = { esp: 0x7e0000, eip: 0, eax: 0, ecx: 0x11, ebx: 0x22, edi: 0x33 };
  const rex = Object.assign({}, ex, {
    get_esp: () => regs.esp, set_esp: v => { regs.esp = v; }, set_eip: v => { regs.eip = v; },
    set_eax: v => { regs.eax = v; }, set_edi: v => { regs.edi = v; },
    get_ecx: () => regs.ecx, get_ebx: () => regs.ebx, get_edi: () => regs.edi });
  w32(0x76E6D4, 0x700000);
  const route = new MbaaModeRoute({ eip: 0x42b460 }, { mode: 'training' });
  assert.strictEqual(route.hook(0x42b460, rex), true, 'first confirmation is routed');
  assert.strictEqual(regs.eip, 0x42B499, 'to TRAINING_MOD');
  assert.strictEqual(regs.esp, 0x7e0000 - 12, 'prologue pushes three registers');
  assert.deepStrictEqual([r32(0x7e0000 - 4), r32(0x7e0000 - 8), r32(0x7e0000 - 12)], [0x11, 0x22, 0x33]);
  assert.deepStrictEqual([regs.eax, regs.edi], [0x700000, 0x700020], 'eax/edi as the prologue leaves them');
  assert.strictEqual(route.hook(0x42b460, rex), false, 'later confirmations run the game code');
}

// Controller (netplay): inputs, turbo, and a stalled frame answered with
// "still running" without simulating it.
{
  const { MbaaSfxFilter } = require('../lib/mbaa-rollback');
  const regs = { esp: 0x7e1000, eip: 0, eax: 0 };
  const cex = Object.assign({}, ex, { get_esp: () => regs.esp, set_esp: v => { regs.esp = v; },
    set_eip: v => { regs.eip = v; }, set_eax: v => { regs.eax = v; } });
  w32(0x7e1000, 0x40d355);                     // return address into the message loop
  w32(0x774A80, 3579545); w32(0x55D25C, 0);
  const calls = [];
  const ctl = {
    n: 0,
    onFrame(api) {
      this.n++;
      calls.push(this.n);
      if (this.n === 1) { api.setInputs({ p1: { dir: 4, btn: 0x10 }, p2: { dir: 6, btn: 0 } }); api.setTurbo(true); }
      if (this.n === 2) api.skip();
      if (this.n === 3) { api.setTurbo(false); api.setInputs({ p1: {}, p2: {} }); }
    },
  };
  const sfxState = { frame: -1, resim: false, from: -1, to: -1 };
  const net = new MbaaRollback({ eip: 0x40e390 }, { getBuffer: () => buffer, publish: false,
    controller: () => ctl, sfx: sfxState, inputSource: () => null });
  assert.strictEqual(net.hook(0x40e390, cex), false, 'a simulated frame runs as guest code');
  assert.strictEqual(dv.getUint16(g2w(INPUTS + 0x18), true), 4, 'controller inputs written');
  assert.strictEqual(r32(0x774A80), 1, 'turbo: limiter frequency 1');
  assert.strictEqual(r32(0x55D25C), 1, 'turbo: frame not drawn');
  w32(0x55D25C, 0);                            // the game counts it down
  assert.strictEqual(net.hook(0x40e390, cex), true, 'a stalled frame is answered');
  assert.deepStrictEqual([regs.eax, regs.eip, regs.esp], [1, 0x40d355, 0x7e1004], 'returns 1 to the loop');
  regs.esp = 0x7e1000;
  net.hook(0x40e390, cex);
  assert.strictEqual(r32(0x774A80), 3579545, 'turbo off restores the frequency');
  assert.strictEqual(net.stats.stalls, 1);

  // Sound filter: a re-run does not replay what already played in its window.
  const sfx = new MbaaSfxFilter({ eip: 0x4de200 }, { getBuffer: () => buffer, state: sfxState });
  const trig = ids => { new Uint8Array(buffer, g2w(0x76E008), 1500).fill(0); for (const i of ids) dv.setUint8(g2w(0x76E008 + i), 1); };
  const flags = () => { const a = new Uint8Array(buffer, g2w(0x76E008), 1500); return [...a.keys()].filter(i => a[i] === 1); };
  Object.assign(sfxState, { frame: 10, resim: false, from: -1, to: -1 }); trig([3, 7]);
  assert.strictEqual(sfx.hook(0x4de200, ex), false); assert.deepStrictEqual(flags(), [3, 7], 'normal frame untouched');
  Object.assign(sfxState, { frame: 11, resim: false }); trig([]); sfx.hook(0x4de200, ex);
  Object.assign(sfxState, { frame: 10, resim: true, from: 10, to: 12 }); trig([3, 9]);
  sfx.hook(0x4de200, ex);
  assert.deepStrictEqual(flags(), [9], 'already-played 3 suppressed, new 9 plays');
  Object.assign(sfxState, { frame: 11, resim: true, from: 10, to: 12 }); trig([7]);
  sfx.hook(0x4de200, ex);
  assert.deepStrictEqual(flags(), [], '7 played at frame 10 originally: not again one frame later');
}

// Cross-machine hash: pointer fields excluded, value fields included.
{
  const st = new Uint8Array(MbaaRollback.STATE_BYTES);
  for (let i = 0; i < st.length; i++) st[i] = (i * 7) & 255;
  const at = addr => { let o = 0; for (const [s, e] of MbaaRollback.RANGES) { if (addr >= s && addr < e) return o + addr - s; o += e - s; } return -1; };
  const h0 = MbaaRollback.valueHash(st);
  const ptr = st.slice();
  ptr[at(0x555330)] ^= 0xff; // heap-owned object found in live cross-machine logs
  ptr[at(0x555330 + 0xAFC)] ^= 0xff;
  ptr[at(0x55544C)] ^= 0xff;
  ptr[at(0x55544C + 0xAFC)] ^= 0xff;
  ptr[at(0x5552A7)] ^= 1;
  ptr[at(0x5552A7 + 0xAFC)] ^= 1;
  ptr[at(0x55543C)] ^= 1;
  ptr[at(0x55543C + 0xAFC)] ^= 1;
  ptr[at(0x61E170 + 8)] ^= 1;
  assert.strictEqual(MbaaRollback.valueHash(ptr), h0, 'pointers, round-transition flags and graphics slots do not count');
  const covered = (ranges, addr) => ranges.some(([s, e]) => addr >= s && addr < e);
  assert(covered(MbaaRollback.VALUE_RANGES, 0x5552A7), 'round-over byte remains in battle-start state transfer');
  assert(covered(MbaaRollback.VALUE_RANGES, 0x55543C), 'round reset words remain in battle-start state transfer');
  assert(!covered(MbaaRollback.VALUE_RANGES, 0x555330), 'heap pointer is not transferred between games');
  const hp = st.slice(); hp[at(0x5551EC + 0xAFC)] ^= 1;
  assert.notStrictEqual(MbaaRollback.valueHash(hp), h0, 'P2 health counts');
  const rng = st.slice(); rng[at(0x564070 + 100)] ^= 1;
  assert.notStrictEqual(MbaaRollback.valueHash(rng), h0, 'RNG counts');
}

console.log(`mbaa rollback PASS: ${rb.stats.passes} re-runs matched, mismatch located at ${rb.stats.firstMismatch.first}, state ${rb.stats.stateBytes} bytes`);

// Stage timer: segments between checkpoints, split by re-run and normal frames.
{
  const { MbaaStageTimer } = require('../lib/mbaa-rollback.js');
  let t = 0;
  const timer = new MbaaStageTimer(() => t);
  const cps = [0x432c50, 0x4330c0].map(eip => timer.checkpoint({ eip }));
  for (let f = 0; f < 20; f++) {
    const resim = f >= 10;
    timer.frameStart(!resim && f > 0 ? false : f > 10);   // the frame that just ended
    // Out of order on purpose: the second checkpoint arrives first.
    t += 1; cps[1].hook(0x4330c0); t += resim ? 4 : 2; cps[0].hook(0x432c50); cps[1].hook(0x4330c0); t += 3;
  }
  timer.frameStart(true);
  timer._publish();
  require('assert').deepStrictEqual(timer.stats.stages, ['start', '0x432c50', '0x4330c0']);
  require('assert').deepStrictEqual(timer.stats.normalMs, [1, 3, 2]);
  require('assert').deepStrictEqual(timer.stats.resimMs, [1, 3, 4]);
  console.log('mbaa stage timer PASS');
}

// Training reset (CCCaster's directional FN2 reset), frame by frame.
{
  const { TrainingReset } = require('../lib/mbaa-rollback.js');
  const assert = require('assert');
  const sx = a => dv.getInt32(g2w(a), true);
  const step = (tr, dir, btn) => tr.filter(ex, { dir, btn });
  const place = () => { w32(0x555238, -0x4000); w32(0x555D34, 0x4000); w32(0x74D7F8, 0); };
  // Left: dummy in the left corner, player next to it, camera left; FN2 held 10 frames.
  let tr = new TrainingReset(); place();
  assert.strictEqual(step(tr, 4, 0x200).btn & 0x200, 0x200);
  assert.strictEqual(r32(0x76E708), 0x32, 'the game reset timer is set');
  w32(0x555238, -0x4000); w32(0x555D34, 0x4000);        // the game's own reset placement
  assert.strictEqual(step(tr, 4, 0x200).btn & 0x200, 0x200);
  assert.deepStrictEqual([sx(0x555238), sx(0x555D34), sx(0x564B14)], [-0xB000, -0xF000, -0x6800]);
  step(tr, 5, 0); assert.strictEqual(tr.state, -1, 'release rearms');
  // Right and down.
  tr = new TrainingReset(); place(); step(tr, 6, 0x200); step(tr, 6, 0x200);
  assert.deepStrictEqual([sx(0x555238), sx(0x555D34), sx(0x564B14)], [0xB000, 0xF000, 0x6800]);
  tr = new TrainingReset(); place(); step(tr, 2, 0x200); step(tr, 5, 0x200);
  assert.deepStrictEqual([sx(0x555238), sx(0x555D34)], [0x4000, -0x4000], 'down: center, sides swapped');
  // Neutral: the game's reset; held past 10 frames, sides swap once.
  tr = new TrainingReset(); place(); step(tr, 5, 0x200);
  for (let i = 0; i < 11; i++) step(tr, 5, 0x200);
  assert.deepStrictEqual([sx(0x555238), sx(0x555D34)], [-0x4000, 0x4000], 'neutral keeps the game positions for 10 frames');
  step(tr, 5, 0x200);
  assert.deepStrictEqual([sx(0x555238), sx(0x555D34)], [0x4000, -0x4000], 'long neutral hold swaps sides');
  step(tr, 5, 0x200);
  assert.deepStrictEqual([sx(0x555238), sx(0x555D34)], [0x4000, -0x4000], 'once');
  // Long left hold: the player goes into the corner.
  tr = new TrainingReset(); place(); for (let i = 0; i < 13; i++) step(tr, 4, 0x200);
  assert.strictEqual(sx(0x555238), -0x10000);
  // Not while the training state says 5 / -1.
  tr = new TrainingReset(); place(); w32(0x74D7F8, 5);
  assert.strictEqual(step(tr, 4, 0x200).btn, 0x200); assert.strictEqual(tr.state, -1);
  console.log('training reset PASS');
}

// Menu block: RETURN_TITLE / EXIT_VS_GAME never match; other items run the game's test.
{
  const { MbaaMenuBlock } = require('../lib/mbaa-rollback.js');
  const assert = require('assert');
  const regs = { esp: 0x7e1000, eip: 0, eax: 7, ecx: 0 };
  const mex = Object.assign({}, ex, { get_edi: () => 0x7e2000, get_ecx: () => regs.ecx, get_esp: () => regs.esp, set_esp: v => { regs.esp = v; },
    set_eip: v => { regs.eip = v; }, set_eax: v => { regs.eax = v; }, set_ecx: v => { regs.ecx = v; } });
  w32(0x7e1000, 0x44dae2);
  const mb = new MbaaMenuBlock({ eip: 0x42bdc0 });
  regs.ecx = 0x537718;   // CHARACTER_SELECT
  assert.strictEqual(mb.hook(0x42bdc0, mex), false, 'other items: the game decides');
  regs.ecx = 0x535CE8;   // RETURN_TITLE
  assert.strictEqual(mb.hook(0x42bdc0, mex), true);
  assert.deepStrictEqual([regs.eax, regs.eip, regs.esp], [0, 0x44dae2, 0x7e1004], 'answered "no match" and returned');
  // Training's EXIT: blocked only at its pause menu's confirm, and only when
  // the chosen item (std::string in edi, inline text) is EXIT.
  const item = name => { w32(0x7e2014, name.length); w32(0x7e2018, 15); for (let i = 0; i < 16; i++) dv.setUint8(g2w(0x7e2004 + i), i < name.length ? name.charCodeAt(i) : 0); };
  item('CHARACTER_SELECT'.slice(0, 15));
  regs.esp = 0x7e1000; regs.eip = 0; w32(0x7e1000, 0x478509); regs.ecx = 0x5365A8;
  assert.strictEqual(mb.hook(0x42bdc0, mex), false, 'another item passing the EXIT compare: the game decides');
  item('EXIT');
  assert.strictEqual(mb.hook(0x42bdc0, mex), true, 'EXIT at Training\'s confirm');
  assert.deepStrictEqual([regs.eip, regs.esp], [0x4784d3, 0x7e1004], 'Training EXIT acts as CONTINUE');
  regs.esp = 0x7e1000; w32(0x7e1000, 0x431555); regs.ecx = 0x5365A8;
  assert.strictEqual(mb.hook(0x42bdc0, mex), false, 'EXIT elsewhere: the game decides');
  console.log('menu block PASS');
}
