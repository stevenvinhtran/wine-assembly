// Native hook kind 'mbaa-lookup-skip' at MBAA.exe 0x4DC990: the loop in
// 0x4DC8B0 that finds a resource by name. It hashes the name, then walks a
// vector of 0x2C-byte entries (begin [ebp+0x6C], end [ebp+0x70]) from index
// ebx, comparing each entry's hash at +0x1C; on equal hashes it compares the
// group (+0x20) and the name. Every iteration also bounds-checks the index
// twice (a division by 44 done as a multiply). During loads and in character
// select this scan was the hottest guest code (about 44% of block entries
// while loading a battle, 2026-10-14 profile).
//
// The hook advances ebx -- and [esp+0x14], the loop's ebx*0x2C -- past
// entries whose hash differs, stopping at the first equal hash or at the end,
// and leaves esi on the last skipped entry, as those iterations would.
// The guest then runs that iteration, the comparisons and the loop's exits
// itself. A skipped iteration changes only those two values and scratch
// registers. test/test-native-mbaa-lookup-skip.js checks it against MBAA.exe.
(function (root) {
  'use strict';

  const ENTRY = 0x2C, HASH = 0x1C, BEGIN = 0x6C, END = 0x70, HASH_SLOT = 0x1C, OFFSET_SLOT = 0x14;

  class NativeMbaaLookupSkip {
    constructor(config, opts) {
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts && opts.getBuffer;
      this.stats = { kind: 'mbaa-lookup-skip', calls: 0, skipped: 0 };
    }
    snapshot() { return this.stats; }
    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      this.stats.calls++;
      const ebp = ex.get_ebp() >>> 0, esp = ex.get_esp() >>> 0;
      const begin = ex.guest_read32(ebp + BEGIN) >>> 0;
      if (!begin) return false;
      const end = ex.guest_read32(ebp + END) >>> 0;
      const span = (end - begin) | 0;
      if (span <= 0 || span % ENTRY) return false;
      const size = span / ENTRY;
      let i = ex.get_ebx() >>> 0;
      if (i >= size) return false;
      const hash = ex.guest_read32(esp + HASH_SLOT) >>> 0;
      const dv = new DataView(this.getBuffer());
      // Entries are read through the guest-to-wasm map one page at a time
      // (a vector is contiguous in guest memory, not necessarily in ours).
      let page = -1, wbase = 0;
      const start = i;
      for (; i < size; i++) {
        const a = (begin + i * ENTRY + HASH) >>> 0;
        if ((a & ~0xFFF) !== page || ((a & 0xFFF) > 0xFFC)) {
          if ((a & 0xFFF) > 0xFFC) { if ((ex.guest_read32(a) >>> 0) === hash) break; page = -1; continue; }
          page = a & ~0xFFF; wbase = (ex.guest_to_wasm(page) >>> 0) - page;
        }
        if (dv.getUint32((a + wbase) >>> 0, true) === hash) break;
      }
      if (i === start) return false;
      ex.set_ebx(i);
      // As the last skipped iteration leaves it (the entry it looked at).
      ex.set_esi((begin + (i - 1) * ENTRY) >>> 0);
      ex.guest_write32(esp + OFFSET_SLOT, (i * ENTRY) >>> 0);
      this.stats.skipped += i - start;
      return false;
    }
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeMbaaLookupSkip };
  else root.NativeMbaaLookupSkip = NativeMbaaLookupSkip;
})(typeof globalThis !== 'undefined' ? globalThis : this);
