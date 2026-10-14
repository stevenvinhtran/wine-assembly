// Native hook kind 'mbaa-move-skip' at MBAA.exe 0x46D530: the head of the
// loop in 0x46D510 that, every frame and for each character, walks the
// character's move table looking for the first move whose command was just
// entered. Each iteration first asks 0x46D430 whether move i is usable at
// all; most moves are not, and those iterations (call, checks, return, loop
// tail) were about a quarter of a battle frame's guest instructions after
// mbaa-gfx-skip (rollback re-simulation profile, 2026-10-14).
//
// usable() is 0x46D430 (with 0x46D3D0's requirement scan) in JS. Where the
// game would evaluate a requirement entry (0x46D080), it answers "unknown".
// The hook advances ebx past moves that are certainly not usable, stopping
// at the first usable-or-unknown one and never passing the last index, so
// every move that can match, and the loop's exit, stay guest code. A skipped
// iteration's only lasting effects are ebx and the scratch registers
// (eax/ecx/edx/flags), which the next iteration or the exit rewrites.
// test/test-native-mbaa-move-skip.js checks usable() against MBAA.exe.
(function (root) {
  'use strict';

  const BATTLE_FLAGS = 0x562A74, MODE_BYTE = 0x55D20B, SIDE_TABLE = 0x557DC4, SIDE_STRIDE = 0x20C;

  // 1 usable, 0 not, null: needs the game's requirement evaluator.
  function usable(ex, obj, i) {
    const r32 = a => ex.guest_read32(a >>> 0) >>> 0;
    const r8 = a => (r32(a & ~3) >>> ((a & 3) * 8)) & 0xFF;
    const tbl = r32(obj + 0x33C);
    if (!tbl) return 0;
    const hdr = r32(tbl);
    if (!hdr) return 0;
    if (r32(hdr + 0xC) <= (i >>> 0)) return 0;
    const move = r32(hdr) === 0 ? (Math.imul(r32(hdr + 8), i) + r32(hdr + 4)) >>> 0 : r32((r32(hdr + 4) + i * 4) >>> 0);
    if (!move) return 0;
    // 0x46D3D0: a requirement entry for this move is evaluated by 0x46D080.
    const reqCount = r32(tbl + 0x60) | 0;
    if (reqCount > 0) {
      let e = r32(tbl + 0x64);
      for (let k = 0; k < reqCount; k++, e = (e + 0x1C) >>> 0) if (r32(e) === (i >>> 0)) return null;
    }
    const flags = r32(move + 0x28);
    if (flags & 0x20) return 0;
    const kind = r8(move + 0x24);
    if (r32(BATTLE_FLAGS) & 0x300) {
      if (kind === 1) return 0;
    } else {
      const side = r32(SIDE_TABLE + r8(obj + 0x2F4) * SIDE_STRIDE);
      if (kind === 1 && side === 0) return 0;
      if (kind === 2 && side === 1) return 0;
    }
    const mode = r8(MODE_BYTE);
    if (mode === 2) return 0;
    if (mode === 1 && !(flags & 0x400)) return 0;
    const cost = r8(move + 0x25);
    if (!cost) return 1;
    const have = (r8(obj + 0x1B8 + Math.floor(cost / 10)) << 24) >> 24;
    return (cost % 10) <= have ? 0 : 1;
  }

  class NativeMbaaMoveSkip {
    constructor(config) {
      this.cfg = Object.assign({}, config);
      this.stats = { kind: 'mbaa-move-skip', calls: 0, skipped: 0, unknown: 0 };
    }
    snapshot() { return this.stats; }
    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      this.stats.calls++;
      const obj = ex.get_esi() >>> 0, i = ex.get_ebx() >>> 0;
      const tbl = ex.guest_read32(obj + 0x33C) >>> 0;
      const hdr = tbl ? ex.guest_read32(tbl) >>> 0 : 0;
      if (!hdr) return false;
      const count = ex.guest_read32(hdr + 0xC) >>> 0;
      let j = i;
      while (j + 1 < count) {
        const u = usable(ex, obj, j);
        if (u !== 0) { if (u === null) this.stats.unknown++; break; }
        j++;
      }
      if (j !== i) { ex.set_ebx(j); this.stats.skipped += j - i; }
      return false;
    }
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeMbaaMoveSkip, usable };
  else root.NativeMbaaMoveSkip = NativeMbaaMoveSkip;
})(typeof globalThis !== 'undefined' ? globalThis : this);
