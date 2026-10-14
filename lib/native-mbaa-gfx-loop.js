// Native hook kind 'mbaa-gfx-skip' at MBAA.exe 0x458EE6: the head of the
// per-frame loop over the 4000-slot graphics array (0x61E170, 0x60 bytes per
// slot) in 0x458E80. Every iteration pushes seven x87 constants and tests the
// slot's first byte; an empty slot pops the seven again (0x45C9F3) and
// increments the counter at [esp+0xFC]. Its only lasting effects are the
// counter and eax/ebp/flags, which the next iteration rewrites. Nearly every
// slot is empty, and those iterations were ~60% of a battle frame's guest
// instructions (rollback re-simulation profile, 2026-10-14).
//
// The hook advances the counter past empty slots, to the next occupied one
// but never beyond the last slot (3999): the guest then runs that iteration
// itself, so occupied slots and the loop's exit (eax, ebp, flags) are the
// game's own code. Nothing is skipped that changes state.
(function (root) {
  'use strict';

  const ARRAY = 0x61E170, STRIDE = 0x60, COUNT = 4000, COUNTER = 0xFC;

  class NativeMbaaGfxSkip {
    constructor(config, opts) {
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts && opts.getBuffer;
      this.stats = { kind: 'mbaa-gfx-skip', calls: 0, skipped: 0 };
    }
    snapshot() { return this.stats; }
    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      this.stats.calls++;
      const at = (ex.get_esp() + COUNTER) >>> 0;
      const i = ex.guest_read32(at) | 0;
      if (i < 0 || i >= COUNT - 1) return false;
      const mem = new Uint8Array(this.getBuffer());
      const base = ex.guest_to_wasm(ARRAY) >>> 0;
      let j = i;
      while (j < COUNT - 1 && mem[base + j * STRIDE] === 0) j++;
      if (j !== i) {
        ex.guest_write32(at, j);
        this.stats.skipped += j - i;
      }
      return false;
    }
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeMbaaGfxSkip };
  else root.NativeMbaaGfxSkip = NativeMbaaGfxSkip;
})(typeof globalThis !== 'undefined' ? globalThis : this);
