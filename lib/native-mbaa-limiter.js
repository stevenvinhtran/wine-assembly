// MBAACC's frame limiter (MBAA.exe 0x41fd60) sleeps in fixed chunks --
// Sleep(8) or Sleep(2), at 0x41fe05 -- then re-reads the clock, and once a
// frame is due it restarts its period from "now". Any part of a chunk that
// runs past the deadline is therefore lost: the frame is that much longer.
// Measured in the browser, the average overshoot ran the game at 58.8fps.
//
// Native hook kind 'mbaa-limiter-sleep' at the Sleep call: shorten the pushed
// argument to the whole milliseconds left in this frame (period [ebp+8] minus
// elapsed [esi+0x48], both seconds), and to 0 inside the last millisecond so
// the limiter's own QPC loop (fine QPC, host.js clock spin) lands on the
// deadline. The call itself still runs as guest code (the hook declines).
(function (root) {
  'use strict';
  const f32 = new Float32Array(1), u32 = new Uint32Array(f32.buffer);
  const asFloat = bits => { u32[0] = bits >>> 0; return f32[0]; };
  const f64 = new Float64Array(1), u32d = new Uint32Array(f64.buffer);
  class NativeMbaaLimiter {
    constructor(config) { this.cfg = Object.assign({}, config); this.stats = { shortened: 0, kept: 0 }; }
    snapshot() { return Object.assign({ kind: 'mbaa-limiter-sleep' }, this.stats); }
    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      try {
        const esp = ex.get_esp() >>> 0, esi = ex.get_esi() >>> 0, ebp = ex.get_ebp() >>> 0;
        // cfg.push: the hook sits on `push imm8` (0x41fe03, which falls into
        // the call without a block boundary) and performs the push itself.
        const requested = this.cfg.push ? this.cfg.push >>> 0 : ex.guest_read32(esp) >>> 0;
        const period = asFloat(ex.guest_read32(ebp + 8)), elapsed = asFloat(ex.guest_read32(esi + 0x48));
        let ms = requested;
        if (period > 0 && period < 1 && Number.isFinite(elapsed)) {
          const leftMs = (period - elapsed) * 1000;
          ms = Math.min(requested, leftMs <= 1 ? 0 : Math.floor(leftMs));
        }
        if (ms < requested) this.stats.shortened++; else this.stats.kept++;
        if (this.cfg.push) {
          ex.guest_write32(esp - 4, ms); ex.set_esp((esp - 4) >>> 0);
          ex.set_eip((eip + 2) >>> 0);   // past `push imm8`, onto the call
          return true;
        }
        if (ms < requested) ex.guest_write32(esp, ms);
      } catch (_) { this.stats.kept++; }
      return false;
    }
  }
  // MBAACC's other limiter (the function holding 0x420098) has no Sleep at
  // all: it re-reads QPC in a loop until the period ([esp+0x20], a double) has
  // passed, storing elapsed seconds at [esi+0x44] each turn. On one shared
  // JS thread that spin is the main guest thread taking its whole slice --
  // measured ~70,000 turns and ~340ms a second while the loader thread
  // needed the time, and the page dropped to 53-56fps.
  //
  // Kind 'mbaa-spin-limiter' at the loop head 0x420098: with 2ms or more
  // left, the hook makes the guest call its own Sleep import (cfg.sleepIat)
  // for all but the last millisecond, returning to the loop head. The next
  // arrival there passes through once, so the loop re-reads the clock before
  // the hook looks at elapsed again; the last millisecond is still the
  // game's own spin, so the frame lands where it always did.
  class NativeMbaaSpinLimiter {
    constructor(config) {
      this.cfg = Object.assign({ sleepIat: 0x51b1d0 }, config);
      this.stats = { slept: 0, spun: 0 };
      this._passOnce = false;
    }
    snapshot() { return Object.assign({ kind: 'mbaa-spin-limiter' }, this.stats); }
    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      if (this._passOnce) { this._passOnce = false; return false; }
      const esp = ex.get_esp() >>> 0, esi = ex.get_esi() >>> 0;
      const lo = ex.guest_read32(esp + 0x20) >>> 0, hi = ex.guest_read32(esp + 0x24) >>> 0;
      u32d[0] = lo; u32d[1] = hi;
      const period = f64[0], elapsed = asFloat(ex.guest_read32(esi + 0x44));
      if (!(period > 0 && period < 1) || !Number.isFinite(elapsed)) { this.stats.spun++; return false; }
      const leftMs = (period - elapsed) * 1000;
      if (leftMs < 2) { this.stats.spun++; return false; }
      const sleep = ex.guest_read32(this.cfg.sleepIat >>> 0) >>> 0;
      if (!sleep) { this.stats.spun++; return false; }
      const ms = Math.floor(leftMs - 1);
      ex.guest_write32(esp - 4, ms);
      ex.guest_write32(esp - 8, eip >>> 0);
      ex.set_esp((esp - 8) >>> 0);
      ex.set_eip(sleep);
      this._passOnce = true;
      this.stats.slept++;
      return true;
    }
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeMbaaLimiter, NativeMbaaSpinLimiter };
  else { root.NativeMbaaLimiter = NativeMbaaLimiter; root.NativeMbaaSpinLimiter = NativeMbaaSpinLimiter; }
})(typeof globalThis !== 'undefined' ? globalThis : this);
