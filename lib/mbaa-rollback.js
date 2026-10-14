// MBAACC rollback groundwork (melty-web docs/ROLLBACK_REQUIREMENTS.md, Stage 4).
//
// Native hook kind 'mbaa-rollback-frame' at the game's frame function
// (MBAA.exe 0x40E390, which the message loop at 0x40D330 calls whenever no
// window message is pending): one call per game frame. The loop start itself
// is not a frame boundary -- message iterations run between frames. It never answers the hook --
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

  const GAME_MODE = 0x54EEE8, MODE_IN_GAME = 1, MODE_CHARA_SELECT = 20;
  // Character select: each side's selector stage (0 character, 1 moon,
  // 2 color; desktop CCCaster's CC_P1/P2_SELECTOR_MODE_ADDR). Cancel at
  // stage 0 leaves for the main menu.
  const SELECTOR_MODE = [0x74D8EC, 0x74D910], CANCEL_BITS = 0x20 | 0x800;
  const WORLD_TIMER = 0x55D1D4;
  const PAUSE_FLAG = 0x55D203, TRAINING_PAUSE = 0x562A64, VERSUS_PAUSE = 0x564B30;
  const SKIP_FRAMES = 0x55D25C;           // >0: the frame is simulated, not rendered
  const PERF_FREQ = 0x774A80;             // u64 the limiter divides QPC by
  const INPUT_PTR = 0x76E6AC;             // -> P1 dir +0x18, btn +0x24; P2 +0x2C, +0x38
  const SFX_ARRAY = 0x76E008, SFX_LEN = 1500;
  // The game's keyboard mapping (20 bytes). Zeroed while the input bridge
  // owns input, so physical keys reach the game only through the bridge.
  const KEYBOARD_CONFIG = 0x54D2C0, KEYBOARD_CONFIG_LEN = 20;
  // The game's per-frame input poll (0x41F090) zeroes each player's record --
  // direction at +0x18/+0x2C and buttons at +0x24/+0x38 of the input block --
  // and refills it from the devices; the joystick reader (0x4A02xx) stores
  // into the same fields. These stores are what would erase injected input
  // every frame, so the input bridge removes exactly them (the same nine
  // instructions desktop CCCaster disables), after checking each one's
  // original bytes. A mismatch patches nothing and is reported.
  const INPUT_TAKEOVER_SITES = [
    [0x41F098, [0x89, 0x06]], [0x41F0A0, [0x89, 0x46, 0x0C]],
    [0x4A024E, [0x89, 0x07]], [0x4A027F, [0x09, 0x57, 0x0C]], [0x4A0291, [0x09, 0x57, 0x0C]],
    [0x4A02A2, [0x09, 0x57, 0x0C]], [0x4A02B4, [0x09, 0x57, 0x0C]], [0x4A02E9, [0x89, 0x17]],
    [0x4A02F2, [0x09, 0x47, 0x0C]],
  ];

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

  // Cross-machine desync hash: value fields only. The state holds pointers
  // into the game heap, and two machines' loader threads need not lay the
  // heap out alike, so pointer fields would differ between peers that agree
  // completely. Player structs minus the pointer dwords CCCaster marks,
  // plus RNG, timers, camera and HUD values; graphics and effect slots
  // (which carry pointers throughout) are left out.
  const PLAYER_POINTER_DWORDS = [0x55532C, 0x5553CC, 0x5553EC, 0x5553F0, 0x5553FC, 0x555400,
    0x55544C, 0x555450, 0x555454, 0x555458, 0x555460, 0x55546C];
  const VALUE_RANGES = (() => {
    const out = [];
    for (let p = 0; p < PLAYER_COUNT; p++) {
      const base = p * PLAYER_STRUCT;
      let at = 0x555130 + base;
      for (const ptr of PLAYER_POINTER_DWORDS) {
        const a = ptr + base;
        if (a > at) out.push([at, a]);
        at = a + 4;
      }
      out.push([at, 0x555C2C + base]);
    }
    for (const [s, e] of MISC_RANGES) {
      if (s === 0x61E170) continue;              // graphics array
      out.push([s, e]);
    }
    return out;
  })();
  // Where each value range sits in a captured state.
  const VALUE_OFFSETS = (() => {
    const out = [];
    for (const [vs, ve] of VALUE_RANGES) {
      let o = 0;
      for (const [s, e] of RANGES) {
        if (vs >= s && ve <= e) { out.push([o + (vs - s), ve - vs]); break; }
        o += e - s;
      }
    }
    return out;
  })();
  const STATIC_BYTES = RANGES.reduce((n, [s, e]) => n + (e - s), 0);
  // Per effect: the 4-byte value at (*(slot+0x320))+0x38, then *(that), then
  // *(*(that)): three dependent dwords, each 0 when its parent pointer is null.
  const CHAIN_BYTES = EFFECT_COUNT * 12;
  const STATE_BYTES = STATIC_BYTES + CHAIN_BYTES;

  // State hash for desync checks: 32-bit words, two multiplies per word, so
  // hashing the whole 1.24 MB costs well under a millisecond.
  function stateHash(bytes) {
    const words = bytes.length >>> 2;
    const w = new Uint32Array(bytes.buffer, bytes.byteOffset, words);
    let a = 0x811c9dc5, b = 0x2545f491;
    for (let i = 0; i < words; i++) {
      const v = w[i];
      a = Math.imul(a ^ v, 0x01000193);
      b = Math.imul(b + v, 0x5bd1e995) ^ (b >>> 15);
    }
    for (let i = words << 2; i < bytes.length; i++) a = Math.imul(a ^ bytes[i], 0x01000193);
    return (a ^ Math.imul(b, 0x9e3779b1)) >>> 0;
  }

  function valueHash(state) {
    let h = 0x811c9dc5;
    for (const [o, n] of VALUE_OFFSETS) {
      for (let i = 0; i < n; i++) { h ^= state[o + i]; h = Math.imul(h, 0x01000193); }
    }
    return h >>> 0;
  }

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
      // Input bridge: () => { p1: {dir, btn}, p2: {dir, btn} } | null, read at
      // every frame boundary (the launcher's per-frame input; later the
      // rollback input stream). Directions are numpad 1-9, buttons the
      // game's bitmask (A 0x10, B 0x20, C 0x08, D 0x04, E 0x80, AB 0x40,
      // Start 0x01, FN1 0x100, FN2 0x200, confirm 0x400, cancel 0x800).
      this.inputSource = typeof opts.inputSource === 'function' ? opts.inputSource : null;
      // Launcher mode entry: press through the opening, title and main menu
      // (by game mode, not by timing) until the route hook has fired.
      this.route = opts.route || null;   // MbaaModeRoute, shared with its hook
      // A mode the launcher started directly (or netplay) has no main menu to
      // go back to: cancel is dropped while a side is choosing its character.
      this.lockCharaSelect = !!opts.lockCharaSelect;
      this.guestMs = typeof opts.guestMs === 'function' ? opts.guestMs : () => 0;
      // Netplay: () => controller | null. A controller (melty-web's
      // RollbackCore) decides every frame what to restore, which inputs to
      // write, and whether to simulate the frame at all.
      this.controller = typeof opts.controller === 'function' ? opts.controller : null;
      this.sfx = opts.sfx || null;       // MbaaSfxFilter's shared state
      this.stages = opts.stages || null; // MbaaStageTimer (diagnostics)
      this._turbo = false;
      this.hostSteps = typeof opts.hostSteps === 'function' ? opts.hostSteps : () => 0;
      this._navFrames = 0;
      this.frame = 0;
      this.window = Math.max(1, (opts.window | 0) || 8);
      this.everyFrames = Math.max(this.window * 4, (opts.everyFrames | 0) || 120);
      // Every other passing re-run is profiled instead of timed: block-entry
      // counts on this (the main) guest thread only, merged across tests and
      // published as stats.resimProfile = { frames, blocks: [[eip, count]...] }.
      // Counting slows the run, so profiled runs never enter the timings.
      this.profile = opts.profile !== false;
      this._profileCounts = new Map();
      this._profileFrames = 0;
      this.phase = 'idle';
      this.stats = {
        kind: 'mbaa-rollback-frame', frames: 0, stateBytes: STATE_BYTES, tests: 0, passes: 0,
        fails: 0, skipped: 0, firstMismatch: null, captureMs: 0, restoreMs: 0,
        resimMsPerFrame: [], resimGuestMsPerFrame: [], resimStepsPerFrame: [], lastResult: null, stalls: 0,
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
      // The frame that just ended was a re-run if turbo was on for it.
      const stages = typeof this.stages === 'function' ? this.stages() : this.stages;
      // (Profiled re-runs are slowed by counting; they are not timed.)
      if (stages) { stages.frameStart(this._turbo || (this.phase === 'rerun' && !this._profiling)); this.stats.stages = stages.stats; }
      this.frame++;
      this.stats.frames = this.frame;
      this.stats.gameMode = this._r32(ex, GAME_MODE);
      this.stats.routed = !!(this.route && this.route.fired);
      const ctl = this.controller ? this.controller() : null;
      if (ctl) {
        try { return this._controlled(ex, ctl, eip); } catch (err) {
          this.stats.controllerError = String(err && err.message || err);
          return false;
        }
      }
      if (this.inputSource) {
        try { this._writeInputs(ex); } catch (err) { this.stats.inputError = String(err && err.message || err); }
      }
      if (this.selfTest) {
        try { this._selfTestStep(ex); } catch (err) {
          this._abort(ex, `error: ${err && err.message || err}`);
        }
      }
      return false;   // observe only: the loop always runs as guest code
    }

    // Inputs that walk the menus to the launcher's mode: confirm pulses on the
    // opening/title/main-menu states, one frame down, nine up. Bounded: after
    // a minute it gives up and hands input back.
    _navInputs(ex) {
      const route = this.route;
      if (!route || route.fired || route.gaveUp) return null;
      const mode = this._r32(ex, GAME_MODE);
      if (++this._navFrames > 3600) { route.gaveUp = true; this.stats.navResult = 'gave up'; return null; }
      // Held for three game frames, released for nine: a press the game's
      // edge detection sees, and a release before the next one.
      const press = (this._navFrames % 12) < 3;
      let btn = 0;
      if (mode === 3 || mode === 2 || mode === 13 || mode === 11 || mode === 0xFFFF) btn = press ? 0x01 | 0x10 | 0x400 : 0;
      else if (mode === 25) btn = press ? 0x10 | 0x400 : 0;
      this.stats.navMode = mode;
      return { p1: { dir: 0, btn }, p2: { dir: 0, btn: 0 } };
    }

    // Remove the stores that erase injected input (see INPUT_TAKEOVER_SITES).
    // Once; verified byte for byte; decoded copies of the code are discarded.
    // One frame under a controller. Returning true answers the frame
    // function without running it (a stall): it returns 1, "still running",
    // and the message loop comes round to ask again.
    _controlled(ex, ctl, eip) {
      if (!this._takeOverInput(ex)) return false;
      let skip = false;
      const api = {
        capture: into => this.capture(ex, into && into.length === STATE_BYTES ? into : undefined),
        restore: state => this.restore(ex, state),
        hash: stateHash,
        // Between machines: pointer-free fields only (see VALUE_RANGES).
        valueHash,
        gameMode: () => this._r32(ex, GAME_MODE),
        setInputs: frame => this._writeFrame(ex, frame),
        setTurbo: on => { on = !!on; if (on !== this._turbo) { this._turbo = on; this._setTurbo(ex, on); } },
        skip: () => { skip = true; },
        localInput: () => {
          const f = this.inputSource ? this.inputSource(this.frame) : null;
          return (f && f.p1) || { dir: 5, btn: 0 };
        },
        markFrame: (frame, resim, from, to) => {
          if (this.sfx) { this.sfx.frame = frame; this.sfx.resim = !!resim; this.sfx.from = from; this.sfx.to = to; }
        },
      };
      ctl.onFrame(api);
      if (skip) {
        const esp = ex.get_esp() >>> 0;
        const ret = ex.guest_read32(esp) >>> 0;
        ex.set_eax(1);
        ex.set_esp((esp + 4) >>> 0);
        ex.set_eip(ret);
        this.stats.stalls++;
        return true;
      }
      // The game counts the skip down; a re-run frame must not be drawn.
      if (this._turbo) ex.guest_write32(SKIP_FRAMES, 1);
      return false;
    }

    _takeOverInput(ex) {
      if (this._takeover) return this._takeover === 'ok';
      const mem = this._u8(ex);
      for (const [va, bytes] of INPUT_TAKEOVER_SITES) {
        const w = ex.guest_to_wasm(va) >>> 0;
        const same = bytes.every((b, i) => mem[w + i] === b) || bytes.every((b, i) => mem[w + i] === 0x90);
        if (!same) {
          this._takeover = 'mismatch';
          this.stats.inputTakeover = `mismatch at 0x${va.toString(16)}`;
          this.log(`[mbaa-input] unexpected code at 0x${va.toString(16)}; input bridge disabled`);
          return false;
        }
      }
      for (const [va, bytes] of INPUT_TAKEOVER_SITES) {
        const w = ex.guest_to_wasm(va) >>> 0;
        mem.fill(0x90, w, w + bytes.length);
        if (typeof ex.invalidate_code_range === 'function') ex.invalidate_code_range(va, bytes.length);
      }
      this._takeover = 'ok';
      this.stats.inputTakeover = 'ok';
      return true;
    }

    _writeInputs(ex) {
      if (!this._takeOverInput(ex)) return;
      // No frame from the source (not attached yet): neutral, never a stale
      // press left over from the menu navigation.
      const frame = this._navInputs(ex) || this.inputSource(this.frame) || { p1: {}, p2: {} };
      this._writeFrame(ex, frame);
    }

    _writeFrame(ex, frame) {
      const mem = this._u8(ex);
      const kw = ex.guest_to_wasm(KEYBOARD_CONFIG) >>> 0;
      for (let i = 0; i < KEYBOARD_CONFIG_LEN; i++) if (mem[kw + i]) { mem.fill(0, kw, kw + KEYBOARD_CONFIG_LEN); break; }
      const base = this._r32(ex, INPUT_PTR);
      if (!base) return;
      const w = ex.guest_to_wasm(base) >>> 0;
      const dv = new DataView(mem.buffer);
      const put = (off, v) => dv.setUint16(w + off, v & 0xFFFF, true);
      const dir = d => { d = d | 0; return d >= 1 && d <= 9 && d !== 5 ? d : 0; };
      const p1 = frame.p1 || {}, p2 = frame.p2 || {};
      let b1 = p1.btn | 0, b2 = p2.btn | 0;
      if (this.lockCharaSelect && this._r32(ex, GAME_MODE) === MODE_CHARA_SELECT) {
        if (this._r32(ex, SELECTOR_MODE[0]) === 0) b1 &= ~CANCEL_BITS;
        if (this._r32(ex, SELECTOR_MODE[1]) === 0) b2 &= ~CANCEL_BITS;
      }
      put(0x18, dir(p1.dir)); put(0x24, b1);
      put(0x2C, dir(p2.dir)); put(0x38, b2);
      this.stats.inputFrames = (this.stats.inputFrames | 0) + 1;
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

    // ---- re-run profile ---------------------------------------------------------
    _profileStart(ex) {
      if (typeof ex.set_handler_hist_enabled !== 'function' || typeof ex.get_hot_block_hist_base !== 'function') return false;
      const base = ex.get_hot_block_hist_base() >>> 0, count = ex.get_hot_block_hist_count() >>> 0;
      // A snapshot, not a reset: the perf HUD may be reading the same table.
      this._profileBase = base;
      this._profileBefore = new Uint32Array(this.getBuffer(), base, count * 2).slice();
      ex.set_handler_hist_enabled(1);
      return true;
    }

    _profileStop(ex, keep) {
      this._profiling = false;
      try { ex.set_handler_hist_enabled(0); } catch (_) {}
      const before = this._profileBefore;
      this._profileBefore = null;
      if (!keep || !before) return;
      const now = new Uint32Array(this.getBuffer(), this._profileBase, before.length);
      for (let i = 0; i < now.length; i += 2) {
        const eip = now[i];
        if (!eip) continue;
        const delta = (now[i + 1] - (before[i] === eip ? before[i + 1] : 0)) >>> 0;
        if (delta) this._profileCounts.set(eip, (this._profileCounts.get(eip) || 0) + delta);
      }
      this._profileFrames += this.window;
      const blocks = [...this._profileCounts].sort((a, b) => b[1] - a[1]).slice(0, 1500);
      this.stats.resimProfile = { frames: this._profileFrames, distinct: this._profileCounts.size, blocks };
    }

    _abort(ex, why) {
      if (this._profiling) this._profileStop(ex, false);
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
        this._rerunGuest = this.guestMs();
        this._rerunSteps = this.hostSteps();
        this._profiling = this.profile && (this.stats.tests & 1) === 1 && this._profileStart(ex);
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
          if (this._profiling) this._profileStop(ex, false);
          this._setTurbo(ex, false);
          this.restore(ex, this._end);   // put the player back where they were
          this.phase = 'idle';
          return;
        }
        if (this._rerunIndex < this.window) { ex.guest_write32(SKIP_FRAMES, 1); return; }
        const ms = (this.now() - this._rerunStart) / this.window;
        // Guest time stops at the last completed slice, so it can lag the
        // wall clock by the slice in progress; it is a lower bound.
        const guest = (this.guestMs() - this._rerunGuest) / this.window;
        const steps = (this.hostSteps() - this._rerunSteps) / this.window;
        this._setTurbo(ex, false);
        this.stats.tests++; this.stats.passes++;
        if (this._profiling) {
          this._profileStop(ex, true);
          this.stats.lastResult = `pass (profiled, ${this._profileFrames} frames so far)`;
          this.phase = 'idle';
          this._end = null;
          return;
        }
        const keep = (arr, v) => { arr.push(Math.round(v * 100) / 100); if (arr.length > 32) arr.shift(); };
        keep(this.stats.resimMsPerFrame, ms);
        keep(this.stats.resimGuestMsPerFrame, guest);
        keep(this.stats.resimStepsPerFrame, steps);
        this.stats.lastResult = `pass (${ms.toFixed(2)} ms/frame wall, ${guest.toFixed(2)} guest, ${steps.toFixed(1)} steps)`;
        this.phase = 'idle';
        this._end = null;
      }
    }
  }

  // Native hook kind 'mbaa-mode-route' at 0x42B460, the main menu's "an item
  // was confirmed" function. It compares the item's name (ARCADE_MODE,
  // TRAINING_MOD, VS_PLAYER, VS_CPU, ...) and calls that mode's entry from
  // the matching branch. Armed with a target, the first call runs the
  // function's own prologue (push ecx/ebx/edi; edi = [0x76E6D4] + 0x20) and
  // continues at the target branch (ARCADE_MODE 0x42B479, TRAINING_MOD
  // 0x42B499, VS_PLAYER 0x42B4B6, VS_CPU 0x42B4D3), whose shared epilogue
  // returns normally; then it disarms itself, so going back to the main menu
  // later behaves as the game does. The entry is a call target, so the hook
  // is reliably at a block start; no guest code is patched.
  const ROUTE_TARGETS = { arcade: 0x42B479, training: 0x42B499, versus: 0x42B4B6, vscpu: 0x42B4D3 };
  class MbaaModeRoute {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({}, config);
      this.target = ROUTE_TARGETS[opts.mode] || 0;
      this.fired = !this.target;
      this.gaveUp = false;
      this.stats = { kind: 'mbaa-mode-route', mode: opts.mode || null, fired: 0 };
    }
    snapshot() { return this.stats; }
    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0) || this.fired) return false;
      this.fired = true;
      this.stats.fired++;
      const esp = ex.get_esp() >>> 0;
      ex.guest_write32(esp - 4, ex.get_ecx() >>> 0);
      ex.guest_write32(esp - 8, ex.get_ebx() >>> 0);
      ex.guest_write32(esp - 12, ex.get_edi() >>> 0);
      ex.set_esp((esp - 12) >>> 0);
      const eax = ex.guest_read32(0x76E6D4) >>> 0;
      ex.set_eax(eax);
      ex.set_edi((eax + 0x20) >>> 0);
      ex.set_eip(this.target);
      return true;
    }
  }
  MbaaModeRoute.TARGETS = ROUTE_TARGETS;

  // Diagnostics: where a frame's time goes, stage by stage. The frame
  // function 0x40E390 calls its stages; a checkpoint hook at each stage's
  // entry records when it is first reached, and the frame hook closes the
  // frame. Each checkpoint's time runs from its arrival to the next arrival
  // in time order (the frame start's until the first checkpoint, the last
  // one's until the next frame start); a checkpoint not reached counts 0.
  // Medians of the last 240 frames, separately for re-run (turbo) and
  // normal frames.
  class MbaaStageTimer {
    constructor(now) {
      this.now = now || (() => performance.now());
      this.points = [];               // checkpoint vas, in frame order
      this.marks = [];                // time at each checkpoint this frame
      this.start = -1;
      this.samples = { resim: [], normal: [] };
      this.stats = { stages: ['start'], resimMs: [], normalMs: [], resimFrames: 0, normalFrames: 0 };
    }
    checkpoint(cfg) {
      const index = this.points.length;
      this.points.push(cfg.eip >>> 0);
      this.stats.stages.push('0x' + (cfg.eip >>> 0).toString(16));
      return {
        cfg, stats: { kind: 'mbaa-frame-stage', va: cfg.eip >>> 0 },
        snapshot() { return this.stats; },
        hook: (eip) => {
          // First arrival only: a stage function may also be called elsewhere.
          if (this.start >= 0 && this.marks[index] === undefined) this.marks[index] = this.now();
          return false;
        },
      };
    }
    frameStart(resim) {
      const t = this.now();
      if (this.start >= 0) {
        const arrivals = [[0, this.start]];
        for (let i = 0; i < this.points.length; i++) if (this.marks[i] !== undefined) arrivals.push([i + 1, this.marks[i]]);
        arrivals.sort((a, b) => a[1] - b[1]);
        const segs = new Array(this.points.length + 1).fill(0);
        arrivals.forEach(([k, at], j) => { segs[k] = (j + 1 < arrivals.length ? arrivals[j + 1][1] : t) - at; });
        const list = this.samples[resim ? 'resim' : 'normal'];
        list.push(segs);
        if (list.length > 240) list.shift();
        if ((resim ? ++this.stats.resimFrames : ++this.stats.normalFrames) % 8 === 0) this._publish();
      }
      this.start = t;
      this.marks = [];
    }
    _publish() {
      const med = list => {
        if (!list.length) return [];
        return list[0].map((_, i) => {
          const v = list.map(s => s[i]).sort((a, b) => a - b);
          return Math.round(v[v.length >> 1] * 1000) / 1000;
        });
      };
      this.stats.resimMs = med(this.samples.resim);
      this.stats.normalMs = med(this.samples.normal);
    }
  }

  // Native hook kind 'mbaa-sfx-filter' at 0x4DE200, the game's once-a-frame
  // sound effect flush: it plays every effect whose trigger byte (1,500 at
  // 0x76E008) is 1, then clears them. Under netplay the frame hook tells it
  // which frame is running and whether it is a re-run (shared `state`).
  // Normal frames: remember what played. Re-run frames: an effect that
  // already played anywhere in the re-run window is not played again; one
  // the corrected timeline adds plays. The hook never answers -- the game's
  // own flush runs on the edited triggers.
  class MbaaSfxFilter {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts.getBuffer;
      this.state = opts.state || { frame: -1, resim: false, from: -1, to: -1 };
      this.history = new Map();   // frame -> array of effect ids played
      this.stats = { kind: 'mbaa-sfx-filter', recorded: 0, suppressed: 0, played: 0 };
    }
    snapshot() { return this.stats; }
    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      const st = this.state;
      if (st.frame < 0) return false;
      const mem = new Uint8Array(this.getBuffer());
      const w = ex.guest_to_wasm(SFX_ARRAY) >>> 0;
      const ids = [];
      for (let i = 0; i < SFX_LEN; i++) if (mem[w + i] === 1) ids.push(i);
      if (st.resim && st.from >= 0) {
        // What the player has already heard: everything the original
        // timeline played in the re-run window, taken once when the re-run
        // starts (frames get rewritten as it goes), plus what this re-run
        // has played since.
        if (!this._already || this._windowFrom !== st.from || this._windowTo !== st.to) {
          // A rollback inside a re-run keeps what was heard so far.
          this._already = this._already || new Set();
          for (let f = st.from; f < st.to; f++) for (const id of this.history.get(f) || []) this._already.add(id);
          this._windowFrom = st.from; this._windowTo = st.to;
        }
        for (const id of ids) {
          if (this._already.has(id)) { mem[w + id] = 0; this.stats.suppressed++; }
          else { this.stats.played++; this._already.add(id); }
        }
      } else {
        this._already = null;
        this.stats.recorded += ids.length;
      }
      // What this frame plays in the timeline as it now stands.
      this.history.set(st.frame, ids);
      if ((st.frame & 63) === 0) for (const f of this.history.keys()) if (f < st.frame - 128) this.history.delete(f);
      return false;
    }
  }

  MbaaRollback.STATE_BYTES = STATE_BYTES;
  MbaaRollback.RANGES = RANGES;
  MbaaRollback.fnv1a = fnv1a;
  MbaaRollback.stateHash = stateHash;
  MbaaRollback.valueHash = valueHash;
  MbaaRollback.VALUE_RANGES = VALUE_RANGES;
  MbaaRollback.VALUE_OFFSETS = VALUE_OFFSETS;
  if (typeof module !== 'undefined' && module.exports) module.exports = { MbaaRollback, MbaaModeRoute, MbaaSfxFilter, MbaaStageTimer };
  else { root.MbaaRollback = MbaaRollback; root.MbaaModeRoute = MbaaModeRoute; root.MbaaSfxFilter = MbaaSfxFilter; root.MbaaStageTimer = MbaaStageTimer; }
})(typeof globalThis !== 'undefined' ? globalThis : this);
