// Native answer for libpng's png_read_filter_row inside d3dx9_36.dll
// (VA 0x70ab8a), reached through $native_hook0..3 (lib/apps.js nativeHooks,
// kind 'png-unfilter'). MBAACC's character portraits are PNGs decoded by
// D3DX; un-filtering every row, interpreted, is a large part of the hitch when
// the character-select cursor moves (docs/re-notes/mbaa.md).
//
// stdcall (png_ptr, row_info, row, prev_row, filter), `ret 0x14`, no return
// value. row_info +4 = rowbytes, +0xb = pixel_depth (bits); bpp is
// (pixel_depth + 7) >> 3. Filters 0..4 are None, Sub, Up, Average and Paeth
// with libpng 1.2's predictor and tie order (a, then b, then c). Any other
// filter value is declined: libpng warns and clears the row itself.
(function (root) {
  'use strict';

  const PAGE = 4096;

  function unfilter(row, prev, bpp, filter) {
    const n = row.length;
    if (filter === 1) {
      for (let i = bpp; i < n; i++) row[i] = (row[i] + row[i - bpp]) & 0xff;
    } else if (filter === 2) {
      for (let i = 0; i < n; i++) row[i] = (row[i] + prev[i]) & 0xff;
    } else if (filter === 3) {
      for (let i = 0; i < bpp && i < n; i++) row[i] = (row[i] + (prev[i] >> 1)) & 0xff;
      for (let i = bpp; i < n; i++) row[i] = (row[i] + ((row[i - bpp] + prev[i]) >> 1)) & 0xff;
    } else if (filter === 4) {
      for (let i = 0; i < bpp && i < n; i++) row[i] = (row[i] + prev[i]) & 0xff;
      for (let i = bpp; i < n; i++) {
        const a = row[i - bpp], b = prev[i], c = prev[i - bpp];
        const p = b - c, pc0 = a - c;
        const pa = Math.abs(p), pb = Math.abs(pc0), pc = Math.abs(p + pc0);
        const pred = (pa <= pb && pa <= pc) ? a : (pb <= pc ? b : c);
        row[i] = (row[i] + pred) & 0xff;
      }
    }
  }

  class NativePngUnfilter {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts.getBuffer;
      this.log = opts.log || (() => {});
      this.stats = { answered: 0, declined: 0, bytes: 0, why: {} };
    }

    snapshot() { return Object.assign({ kind: 'png-unfilter' }, this.stats); }

    _read(ex, addr, len) {
      const out = new Uint8Array(len);
      const mem = new Uint8Array(this.getBuffer());
      for (let done = 0; done < len;) {
        const ga = (addr + done) >>> 0;
        const n = Math.min(len - done, PAGE - (ga & (PAGE - 1)));
        const wa = ex.guest_to_wasm(ga) >>> 0;
        out.set(mem.subarray(wa, wa + n), done);
        done += n;
      }
      return out;
    }

    _write(ex, addr, bytes) {
      const mem = new Uint8Array(this.getBuffer());
      for (let done = 0; done < bytes.length;) {
        const ga = (addr + done) >>> 0;
        const n = Math.min(bytes.length - done, PAGE - (ga & (PAGE - 1)));
        const wa = ex.guest_to_wasm(ga) >>> 0;
        mem.set(bytes.subarray(done, done + n), wa);
        done += n;
      }
    }

    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      try {
        if (this._answer(ex)) { this.stats.answered++; return true; }
      } catch (err) {
        this.log(`[native-png] declined after error: ${err && err.message || err}`);
      }
      this.stats.declined++;
      return false;
    }

    _answer(ex) {
      const no = reason => { this.stats.why[reason] = (this.stats.why[reason] || 0) + 1; return false; };
      const esp = ex.get_esp() >>> 0;
      const r32 = a => ex.guest_read32(a) >>> 0;
      const ret = r32(esp), info = r32(esp + 8), rowAddr = r32(esp + 12), prevAddr = r32(esp + 16);
      const filter = r32(esp + 20);
      if (!ret || !info || filter > 4) return no('args');
      const rowbytes = r32(info + 4);
      const depth = (r32(info + 8) >>> 24) & 0xff;      // byte at +0xb
      const bpp = (depth + 7) >> 3;
      if (rowbytes > 1 << 20 || (filter && !rowAddr) || ((filter >= 2) && !prevAddr)) return no('shape');
      if (filter) {
        const row = this._read(ex, rowAddr, rowbytes);
        const prev = filter >= 2 ? this._read(ex, prevAddr, rowbytes) : null;
        unfilter(row, prev, bpp, filter);
        this._write(ex, rowAddr, row);
        this.stats.bytes += rowbytes;
      }
      ex.set_esp((esp + 24) >>> 0);
      ex.set_eip(ret);
      return true;
    }
  }

  NativePngUnfilter.unfilter = unfilter;
  if (typeof module !== 'undefined' && module.exports) module.exports = { NativePngUnfilter };
  else root.NativePngUnfilter = NativePngUnfilter;
})(typeof globalThis !== 'undefined' ? globalThis : this);
