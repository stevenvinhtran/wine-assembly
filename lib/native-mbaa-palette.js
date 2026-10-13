// Native answer for the tail of MBAACC's paletted-image upload (0x402eb0),
// entered at 0x402ecf, right after its LockRect helper returns. Reached
// through $native_hook0..3 (lib/apps.js nativeHooks, kind 'mbaa-palette').
//
// 0x402eb0 copies an 8-bit image into a locked texture, converting per the
// texture's format. Two of its loops dominate character-select switches and
// the battle load (docs/re-notes/mbaa.md); everything else is declined and
// runs as guest code. State at 0x402ecf:
//
//   EAX  locked bits (0 -> the guest's own "return 0" path; declined)
//   EDI  palette, 4 bytes per entry in R,G,B,flags order
//   EBP  arg1, the texture wrapper; [arg1] = surface object with
//        +0x10 D3DFORMAT, +0x28 width, +0x2c height, +0x30 pitch
//   [esp+0x00..0x0c] saved EDI, ESI, EBP, EBX   [esp+0x28] return address
//   [esp+0x30] src  [esp+0x34] src format  [esp+0x38] src width (row stride)
//   [esp+0x3c] src height. The routine reuses the arg1 and src-format slots
//   as locals, so their final values are written back the same way.
//
// Handled:
//   texture A8R8G8B8, src P8 (0x402fb2): src width x src height (unclamped),
//     B,G,R from the palette, A = index ? 0xff : 0.
//   texture A1R5G5B5, src P8 or A8 (0x403115): clamped width x height,
//     each channel c ? max(1, c >> 3) : 0 at B|G<<5|R<<10, 0x8000 if index.
// Both return 1 to a cdecl caller.
(function (root) {
  'use strict';

  const PAGE = 4096;
  const FMT_A8R8G8B8 = 21, FMT_A1R5G5B5 = 25, FMT_A8 = 28, FMT_P8 = 41;
  const MAX_DIM = 8192;

  class NativeMbaaPalette {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts.getBuffer;
      this.log = opts.log || (() => {});
      this.stats = { answered: 0, declined: 0, pixels: 0, why: {} };
    }

    snapshot() { return Object.assign({ kind: 'mbaa-palette' }, this.stats); }

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
        this.log(`[native-palette] declined after error: ${err && err.message || err}`);
      }
      this.stats.declined++;
      return false;
    }

    _answer(ex) {
      const no = reason => { this.stats.why[reason] = (this.stats.why[reason] || 0) + 1; return false; };
      const esp = ex.get_esp() >>> 0;
      const bits = ex.get_eax() >>> 0;
      const pal = ex.get_edi() >>> 0;
      const arg1 = ex.get_ebp() >>> 0;
      if (!bits || !pal || !arg1) return no('args');
      const s32 = a => ex.guest_read32(a) | 0;
      const obj = s32(arg1) >>> 0;
      if (!obj) return no('args');
      const fmt = s32(obj + 0x10), W = s32(obj + 0x28), H = s32(obj + 0x2c), pitch = s32(obj + 0x30);
      const src = s32(esp + 0x30) >>> 0, srcFmt = s32(esp + 0x34);
      const sw = s32(esp + 0x38), sh = s32(esp + 0x3c);
      let path = 0;
      if (fmt === FMT_A8R8G8B8 && srcFmt === FMT_P8) path = 1;
      else if (fmt === FMT_A1R5G5B5 && (srcFmt === FMT_P8 || srcFmt === FMT_A8)) path = 2;
      else return no('format');
      if (sw > MAX_DIM || sh > MAX_DIM || W > MAX_DIM || H > MAX_DIM) return no('size');
      const minW = W < sw ? W : sw;
      const minH = H < sh ? H : sh;
      const palette = this._read(ex, pal, 1024);

      // Locals in the caller's argument area, as the guest leaves them.
      let slot2c = minH, slot34 = srcFmt;
      if (path === 1) {
        if (sh > 0) {
          for (let r = 0; r < sh; r++) {
            if (sw <= 0) continue;
            const idx = this._read(ex, (src + Math.imul(sw, r)) >>> 0, sw);
            const row = new Uint8Array(sw * 4);
            for (let p = 0, o = 0; p < sw; p++, o += 4) {
              const e = idx[p] * 4;
              row[o] = palette[e + 2]; row[o + 1] = palette[e + 1]; row[o + 2] = palette[e];
              row[o + 3] = idx[p] ? 0xff : 0;
            }
            this._write(ex, (bits + Math.imul(pitch, r)) >>> 0, row);
          }
          slot34 = (bits + 1 + Math.imul(pitch, sh)) | 0;
          slot2c = 0;
          this.stats.pixels += Math.max(0, sw) * sh;
        }
      } else {
        slot34 = 0;
        if (minH > 0) {
          const half = (pitch - (pitch >> 31)) >> 1;     // cdq; sub; sar 1
          const c5 = c => (c ? ((c >> 3) || 1) : 0);
          for (let r = 0; r < minH; r++) {
            if (minW > 0) {
              const idx = this._read(ex, (src + Math.imul(sw, r)) >>> 0, minW);
              const row = new Uint8Array(minW * 2);
              for (let p = 0, o = 0; p < minW; p++, o += 2) {
                const e = idx[p] * 4;
                const v = c5(palette[e + 2]) | (c5(palette[e + 1]) << 5) | (c5(palette[e]) << 10) |
                  (idx[p] ? 0x8000 : 0);
                row[o] = v & 0xff; row[o + 1] = v >> 8;
              }
              this._write(ex, (bits + Math.imul(Math.imul(half, r), 2)) >>> 0, row);
            }
          }
          slot34 = minH;
          this.stats.pixels += Math.max(0, minW) * minH;
        }
      }

      ex.guest_write32(esp + 0x2c, slot2c >>> 0);
      ex.guest_write32(esp + 0x34, slot34 >>> 0);
      ex.set_edi(ex.guest_read32(esp) >>> 0);
      ex.set_esi(ex.guest_read32(esp + 4) >>> 0);
      ex.set_ebp(ex.guest_read32(esp + 8) >>> 0);
      ex.set_ebx(ex.guest_read32(esp + 12) >>> 0);
      ex.set_eax(1);
      ex.set_eip(ex.guest_read32(esp + 0x28) >>> 0);
      ex.set_esp((esp + 0x2c) >>> 0);
      return true;
    }
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeMbaaPalette };
  else root.NativeMbaaPalette = NativeMbaaPalette;
})(typeof globalThis !== 'undefined' ? globalThis : this);
