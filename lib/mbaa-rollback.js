// MBAACC rollback groundwork (melty-web docs/ROLLBACK_REQUIREMENTS.md, Stage 4).
//
// Native hook kind 'mbaa-rollback-frame' at the game's main-loop start
// (MBAA.exe 0x40D330): one call per game frame. It never answers the hook --
// the loop runs as guest code -- it only observes and, during a self-test,
// saves/restores state.
//
// What it provides:
//   - a game-frame counter (R1);
//   - capture/restore/hash of the battle state: fixed ranges in the game image
//     plus the effect slots' pointer chains into the heap (R3);
//   - with ?rollback-test, an automatic restore/re-simulate self-test during
//     battle (R5) that also times re-simulation with rendering skipped and the
//     frame limiter disabled (R6). Results are published on
//     globalThis.__mbaaRollback for the perf stream.
//
// The address facts come from studying the game (and desktop CCCaster's public
// notes on the same 1.4.0 build); the layout below is ours.
(function (root) {
  'use strict';

  const GAME_MODE = 0x54EEE8, MODE_IN_GAME = 1;
  const WORLD_TIMER = 0x55D1D4;
  const PAUSE_FLAG = 0x55D203, TRAINING_PAUSE = 0x562A64, VERSUS_PAUSE = 0x564B30;
  const SKIP_FRAMES = 0x55D25C;           // >0: the frame is simulated, not rendered
  const PERF_FREQ = 0x774A80;             // u64 the limiter divides QPC by
  const INPUT_PTR = 0x76E6AC;             // -> P1 dir +0x18, btn +0x24; P2 +0x2C, +0x38
  const SFX_ARRAY = 0x76E008, SFX_LEN = 1500;

  const PLAYER_STRUCT = 0xAFC, PLAYER_COUNT = 4;
  // Per-player ranges, relative to player 1 (0x555130..0x555C2C).
  const PLAYER_RANGES = [[0x555130, 0x555C2C]];
  const EFFECTS = 0x67BDE8, EFFECT_SIZE = 0x33C, EFFECT_COUNT = 1000;

  // [start, end) guest ranges outside the player structs and effects.
  const MISC_RANGES = [
    [0x562A3C, 0x562A44],  // round timer, real timer
    [0x55D1D4, 0x55D1D8],  // world timer
    [0x562A6C, 0x562A70],  // slow-timer init, input state
    [0x55D208, 0x55D20C],  // slow timer, intro state
    [0x74D99C, 0x74D9A0],  // skippable flag
    [0x563778, 0x563780],  // RNG 0-1
    [0x564068, 0x56406C],  // RNG 2
    [0x564070, 0x56414C],  // RNG 3 (220 bytes)
    [0x563864, 0x563868], [0x56414C, 0x564150],
    [0x61E170, 0x61E170 + 4000 * 0x60],  // graphics array
    [0x67BD78, 0x67BD7C],  // graphics counter
    [0x5595B4, 0x5595B8], [0x562A48, 0x562A4C],  // super flash pause/timer
    [0x558608, 0x558608 + 5 * 0x30C],  // super state array
    [0x557DB8, 0x557DB8 + 0x20C], [0x557FC4, 0x557FC4 + 0x20C],  // player extra structs
    [0x559546, 0x559554], [0x559580, 0x559584],  // game point flags, wins
    [0x7717D8, 0x7717DC], [0x5641A4, 0x5641A8], [0x564200, 0x564204],  // meter anim, spell circles
    [0x563580, 0x563580 + 0x60], [0x5635F4, 0x5635F4 + 0x60],  // status messages
    [0x74D9D0, 0x74D9D4], [0x74E4E4, 0x74E4EC],
    [0x74D598, 0x74D59C], [0x74E5B0, 0x74E5B4], [0x74E768, 0x74E76C],
    [0x74E770, 0x74E784], [0x74E78C, 0x74E798], [0x74E79C, 0x74E7A8], [0x74E7AC, 0x74E7C0],
    [0x74E7C8, 0x74E7D8], [0x74E7DC, 0x74E7E0], [0x74E7E4, 0x74E7F4], [0x74E7F8, 0x74E808],
    [0x74E80C, 0x74E810], [0x74E814, 0x74E828], [0x74E82C, 0x74E834], [0x74E838, 0x74E84C],
    [0x74E850, 0x74E858], [0x74E85C, 0x74E86C],
    [0x76E780, 0x76E78C],
    [0x555124, 0x55512C],  // camera
    [0x5585E8, 0x5585F4], [0x55DEC4, 0x55DED0], [0x55DEDC, 0x55DEEC],
    [0x564AF8, 0x564AFC], [0x564B00, 0x564B02], [0x564B0C, 0x564B20], [0x564B24, 0x564B28],
    [0x563750, 0x563754], [0x557DAC, 0x557DB8], [0x557D2B, 0x557D2C],
    [0x76E6F4, 0x76E700], [0x7B1D2C, 0x7B1D30],
    [0x55D204, 0x55D208], [0x56357C, 0x563580],
    [0x54EB70, 0x54EB7C],  // camera scale
  ];

  function mergedRanges() {
    const all = MISC_RANGES.slice();
    for (let p = 0; p < PLAYER_COUNT; p++) {
      for (const [s, e] of PLAYER_RANGES) all.push([s + p * PLAYER_STRUCT, e + p * PLAYER_STRUCT]);
    }
    for (let i = 0; i < EFFECT_COUNT; i++) all.push([EFFECTS + i * EFFECT_SIZE, EFFECTS + (i + 1) * EFFECT_SIZE]);
    all.sort((a, b) => a[0] - b[0]);
    const out = [];
    for (const [s, e] of all) {
      const last = out[out.length - 1];
      if (last && s <= last[1]) last[1] = Math.max(last[1], e);
      else out.push([s, e]);
    }
    return out;
  }

  const RANGES = mergedRanges();
  const STATIC_BYTES = RANGES.reduce((n, [s, e]) => n + (e - s), 0);
  // Per effect: the 4-byte value at (*(slot+0x320))+0x38, then *(that), then
  // *(*(that)): three dependent dwords, each 0 when its parent pointer is null.
  const CHAIN_BYTES = EFFECT_COUNT * 12;
  const STATE_BYTES = STATIC_BYTES + CHAIN_BYTES;

  function fnv1a(bytes) {
    let h = 0x811c9dc5;
    for (let i = 0; i < bytes.length; i++) { h ^= bytes[i]; h = Math.imul(h, 0x01000193); }
    return h >>> 0;
  }

  class MbaaRollback {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts.getBuffer;
      this.log = opts.log || (() => {});
      this.now = opts.now || (() => (typeof performance !== 'undefined' ? performance.now() : Date.now()));
      this.selfTest = !!opts.selfTest;
      this.frame = 0;
      this.window = Math.max(1, (opts.window | 0) || 8);
      this.everyFrames = Math.max(this.window * 4, (opts.everyFrames | 0) || 120);
      this.phase = 'idle';
      this.stats = {
        kind: 'mbaa-rollback-frame', frames: 0, stateBytes: STATE_BYTES, tests: 0, passes: 0,
        fails: 0, skipped: 0, firstMismatch: null, captureMs: 0, restoreMs: 0,
        resimMsPerFrame: [], lastResult: null,
      };
      if (opts.publish !== false) root.__mbaaRollback = this.stats;
    }

    snapshot() { return this.stats; }

    // ---- guest memory -------------------------------------------------------
    _u8(ex) { return new Uint8Array(this.getBuffer()); }
    _r32(ex, a) { return ex.guest_read32(a >>> 0) >>> 0; }

    capture(ex, out) {
      const t0 = this.now();
      const mem = this._u8(ex);
      const state = out || new Uint8Array(STATE_BYTES);
      let o = 0;
      for (const [s, e] of RANGES) {
        const w = ex.guest_to_wasm(s) >>> 0, n = e - s;
        state.set(mem.subarray(w, w + n), o);
        o += n;
      }
      const dv = new DataView(state.buffer, state.byteOffset);
      for (let i = 0; i < EFFECT_COUNT; i++, o += 12) {
        let p = this._r32(ex, EFFECTS + i * EFFECT_SIZE + 0x320);
        let a = p ? p + 0x38 : 0;
        const v0 = a ? this._r32(ex, a) : 0;
        const v1 = v0 ? this._r32(ex, v0) : 0;
        const v2 = v1 ? this._r32(ex, v1) : 0;
        dv.setUint32(o, v0, true); dv.setUint32(o + 4, v1, true); dv.setUint32(o + 8, v2, true);
      }
      this.stats.captureMs = this.now() - t0;
      return state;
    }

    // Static ranges first: the pointer chains are re-derived from the restored
    // effect slots, as a native restore would.
    restore(ex, state) {
      const t0 = this.now();
      const mem = this._u8(ex);
      let o = 0;
      for (const [s, e] of RANGES) {
        const w = ex.guest_to_wasm(s) >>> 0, n = e - s;
        mem.set(state.subarray(o, o + n), w);
        o += n;
      }
      const dv = new DataView(state.buffer, state.byteOffset);
      for (let i = 0; i < EFFECT_COUNT; i++, o += 12) {
        const p = this._r32(ex, EFFECTS + i * EFFECT_SIZE + 0x320);
        if (!p) continue;
        const v0 = dv.getUint32(o, true), v1 = dv.getUint32(o + 4, true), v2 = dv.getUint32(o + 8, true);
        ex.guest_write32(p + 0x38, v0);
        if (v0) { ex.guest_write32(v0, v1); if (v1) ex.guest_write32(v1, v2); }
      }
      this.stats.restoreMs = this.now() - t0;
    }

    hash(state) { return fnv1a(state); }

    // First differing guest address between two captures, and how many bytes
    // differ: names the state a re-run failed to reproduce.
    diff(a, b) {
      let o = 0, first = -1, count = 0;
      for (const [s, e] of RANGES) {
        for (let x = s; x < e; x++, o++) {
          if (a[o] !== b[o]) { count++; if (first < 0) first = x; }
        }
      }
      for (; o < a.length; o++) if (a[o] !== b[o]) { count++; if (first < 0) first = 0xC0000000 + (o - STATIC_BYTES); }
      return { first: first >= 0 ? '0x' + (first >>> 0).toString(16) : null, bytes: count };
    }

    _buf(i) {
      const pool = this._pool || (this._pool = []);
      return pool[i] || (pool[i] = new Uint8Array(STATE_BYTES));
    }

    // ---- frame hook ---------------------------------------------------------
    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      this.frame++;
      this.stats.frames = this.frame;
      if (this.selfTest) {
        try { this._selfTestStep(ex); } catch (err) {
          this._abort(ex, `error: ${err && err.message || err}`);
        }
      }
      return false;   // observe only: the loop always runs as guest code
    }

    _inputs(ex) {
      const base = this._r32(ex, INPUT_PTR);
      if (!base) return null;
      const m = this._u8(ex), w = ex.guest_to_wasm(base) >>> 0;
      return Array.from(m.subarray(w + 0x18, w + 0x3C)).join(',');
    }

    _inBattle(ex) {
      const mem = this._u8(ex);
      const r8 = a => mem[ex.guest_to_wasm(a) >>> 0];
      return this._r32(ex, GAME_MODE) === MODE_IN_GAME && !r8(PAUSE_FLAG) &&
        this._r32(ex, TRAINING_PAUSE) !== 1 && this._r32(ex, VERSUS_PAUSE) !== 0xFFFFFFFF;
    }

    _sfxQuiet(ex) {
      const mem = this._u8(ex), w = ex.guest_to_wasm(SFX_ARRAY) >>> 0;
      for (let i = 0; i < SFX_LEN; i++) if (mem[w + i]) return false;
      return true;
    }

    _setTurbo(ex, on) {
      const mem = this._u8(ex);
      const fw = ex.guest_to_wasm(PERF_FREQ) >>> 0;
      if (on) {
        this._savedFreq = mem.slice(fw, fw + 8);
        const one = new Uint8Array(8); one[0] = 1;
        mem.set(one, fw);
        ex.guest_write32(SKIP_FRAMES, 1);
      } else {
        if (this._savedFreq) mem.set(this._savedFreq, fw);
        this._savedFreq = null;
        ex.guest_write32(SKIP_FRAMES, 0);
      }
    }

    _abort(ex, why) {
      if (this.phase === 'rerun') {
        this._setTurbo(ex, false);
        if (this._end) this.restore(ex, this._end);
      }
      this.phase = 'idle';
      this.stats.skipped++;
      this.stats.lastResult = why;
    }

    _selfTestStep(ex) {
      if (this.phase === 'idle') {
        if (this.frame < (this._nextAt || 0) || !this._inBattle(ex)) return;
        this._nextAt = this.frame + this.everyFrames;
        this.phase = 'record';
        this._input = this._inputs(ex);
        this._start = this.capture(ex, this._buf(0));
        this._startFrame = this.frame;
        this._world = this._r32(ex, WORLD_TIMER);
        this._states = [this._start];
        return;
      }
      if (this.phase === 'record') {
        if (!this._inBattle(ex) || this._inputs(ex) !== this._input || !this._sfxQuiet(ex)) {
          return this._abort(ex, 'inputs or sound changed in the window');
        }
        if (this._r32(ex, WORLD_TIMER) !== ((this._world + this._states.length) >>> 0)) {
          return this._abort(ex, 'world timer did not step once per hooked frame');
        }
        const s = this.capture(ex, this._buf(this._states.length));
        this._states.push(s);
        if (this._states.length <= this.window) return;
        // Window recorded. Keep the present, rewind, re-run the same frames.
        this._end = s;
        this.restore(ex, this._start);
        const check = this.capture(ex, this._buf(this.window + 1));
        if (this.hash(check) !== this.hash(this._start)) {
          return this._abort(ex, 'restore did not reproduce the saved state');
        }
        this.phase = 'rerun';
        this._rerunIndex = 0;
        this._rerunStart = this.now();
        this._setTurbo(ex, true);
        return;
      }
      if (this.phase === 'rerun') {
        this._rerunIndex++;
        if (this._inputs(ex) !== this._input) return this._abort(ex, 'inputs changed during re-run');
        const now = this.capture(ex, this._buf(this.window + 1));
        const want = this._states[this._rerunIndex];
        if (this.hash(now) !== this.hash(want)) {
          this.stats.tests++; this.stats.fails++;
          this.stats.firstMismatch = Object.assign({ offset: this._rerunIndex, window: this.window, at: this._startFrame },
            this.diff(want, now));
          this.stats.lastResult = `mismatch at +${this._rerunIndex}`;
          this.log(`[mbaa-rollback] re-run diverged at frame +${this._rerunIndex} of ${this.window}`);
          this._setTurbo(ex, false);
          this.restore(ex, this._end);   // put the player back where they were
          this.phase = 'idle';
          return;
        }
        if (this._rerunIndex < this.window) { ex.guest_write32(SKIP_FRAMES, 1); return; }
        const ms = (this.now() - this._rerunStart) / this.window;
        this._setTurbo(ex, false);
        this.stats.tests++; this.stats.passes++;
        this.stats.resimMsPerFrame.push(Math.round(ms * 100) / 100);
        if (this.stats.resimMsPerFrame.length > 32) this.stats.resimMsPerFrame.shift();
        this.stats.lastResult = `pass (${ms.toFixed(2)} ms/frame)`;
        this.phase = 'idle';
        this._end = null;
      }
    }
  }

  MbaaRollback.STATE_BYTES = STATE_BYTES;
  MbaaRollback.RANGES = RANGES;
  MbaaRollback.fnv1a = fnv1a;
  if (typeof module !== 'undefined' && module.exports) module.exports = { MbaaRollback };
  else root.MbaaRollback = MbaaRollback;
})(typeof globalThis !== 'undefined' ? globalThis : this);
