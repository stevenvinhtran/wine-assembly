// Native answer for D3DX 9's float -> A8R8G8B8 row encoder, reached through
// $native_hook0..3 (lib/apps.js nativeHooks, kind 'd3dx-encode-a8r8g8b8').
//
// d3dx9_36.dll converts every surface it loads through a float pipeline:
// the source format's codec decodes a row into D3DXVECTOR4s and the
// destination's codec encodes them. MBAACC asks D3DXCreateTextureFromFile-
// InMemoryEx for A8R8G8B8 from DXT data, so boot and the battle load spend
// most of their time in this one encoder, interpreted (docs/re-notes/mbaa.md).
//
// The routine (d3dx9_36 VA 0x5f6f98, the encode slot of the codec vtable at
// 0x407ca0) is a thiscall: ECX = codec, [esp+4] = y, [esp+8] = z,
// [esp+12] = D3DXVECTOR4 row, `ret 0xc`. Codec fields used:
//
//   +0x10 / +0x54  optional pre-passes on the row       -> decline if set
//   +0x5c          error-diffusion state                -> decline if set
//   +0x20          surface base      +0x60 row pitch     +0x64 slice pitch
//   +0x68          pixels per row    +0x34 4x8 ordered-dither table (floats)
//   +0x7c          receives the caller's x87 control word (also returned)
//
// Per pixel and channel the guest computes, under round-toward-zero for the
// integer store: a = f32((v + 0) * 255); b = f32(a + dither); n = trunc(b);
// clamp n to 0..255 (an out-of-range or NaN store is 0x80000000, which the
// clamp turns into 0). Rows run serpentine: odd rows scan right to left, and
// the dither column follows the scan index. Output is (a<<24)|(r<<16)|(g<<8)|b.
//
// The emulator's x87 is f64 with round-to-nearest for arithmetic and float
// stores, and honours rounding control only for integer stores
// (src/06-fpu.wat); this mirrors that. Before answering anything it lets the
// guest encode `verifyRows` rows and compares them byte for byte with what it
// would have written; one mismatch disables it for the session.
(function (root) {
  'use strict';

  const PAGE = 4096;
  const MAX_ROW = 16384;
  const f32 = Math.fround;

  function encodeChannel(v, d) {
    const a = f32(v * 255);
    const b = f32(a + d);
    if (!(b < 2147483648 && b >= -2147483648)) return 0;   // NaN / out of range -> 0x80000000 -> 0
    const n = Math.trunc(b);
    return n >= 255 ? 255 : (n <= 0 ? 0 : n);
  }

  // src: Float32Array of count*4 (r,g,b,a per pixel), dither: 4 floats for this
  // row, parity: y & 1. Returns the row as bytes in memory order.
  function encodeRow(src, count, dither, parity) {
    const out = new Uint8Array(count * 4);
    for (let p = 0; p < count; p++) {
      const i = parity ? count - 1 - p : p;
      const d = dither[i & 3];
      const s = p * 4, o = p * 4;
      out[o] = encodeChannel(src[s + 2], d);       // B
      out[o + 1] = encodeChannel(src[s + 1], d);   // G
      out[o + 2] = encodeChannel(src[s], d);       // R
      out[o + 3] = encodeChannel(src[s + 3], d);   // A
    }
    return out;
  }

  class NativeD3DXEncode {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({ verifyRows: 64 }, config);
      this.getBuffer = opts.getBuffer;
      this.log = opts.log || (() => {});
      this.state = 'verifying';          // -> 'native' | 'disabled'
      this.pending = new Map();          // exports -> {dst, bytes}
      this.stats = { answered: 0, declined: 0, verifiedRows: 0, pixels: 0, why: {} };
    }

    snapshot() {
      return Object.assign({ kind: 'd3dx-encode-a8r8g8b8', state: this.state }, this.stats);
    }

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

    // The guest finished the row it was left to encode: compare it.
    _settle(ex) {
      const job = this.pending.get(ex);
      if (!job) return;
      this.pending.delete(ex);
      const guest = this._read(ex, job.dst, job.bytes.length);
      for (let i = 0; i < guest.length; i++) {
        if (guest[i] !== job.bytes[i]) {
          this.state = 'disabled';
          this.log(`[native-d3dx] disabled: byte ${i} of a ${job.bytes.length / 4}-pixel row is ` +
            `${guest[i]} in D3DX, ${job.bytes[i]} natively (after ${this.stats.verifiedRows} matching rows)`);
          return;
        }
      }
      if (++this.stats.verifiedRows >= this.cfg.verifyRows && this.state === 'verifying') {
        this.state = 'native';
        this.log(`[native-d3dx] ${this.stats.verifiedRows} rows matched D3DX byte for byte; encoding natively`);
      }
    }

    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      try {
        if (this.state !== 'disabled') this._settle(ex);
        if (this.state !== 'disabled' && this._answer(ex)) { this.stats.answered++; return true; }
      } catch (err) {
        this.log(`[native-d3dx] declined after error: ${err && err.message || err}`);
      }
      this.stats.declined++;
      return false;
    }

    _answer(ex) {
      const no = reason => { this.stats.why[reason] = (this.stats.why[reason] || 0) + 1; return false; };
      const esp = ex.get_esp() >>> 0;
      const ret = ex.guest_read32(esp) >>> 0;
      const y = ex.guest_read32(esp + 4) >>> 0;
      const z = ex.guest_read32(esp + 8) >>> 0;
      const src = ex.guest_read32(esp + 12) >>> 0;
      const codec = ex.get_ecx() >>> 0;
      if (!ret || !codec || !src) return no('args');
      const r32 = off => ex.guest_read32(codec + off) >>> 0;
      if (r32(0x10) || r32(0x54)) return no('prepass');
      if (r32(0x5c)) return no('diffusion');
      const count = r32(0x68);
      const table = r32(0x34);
      if (!count || count > MAX_ROW || !table) return no('shape');
      const dst = (r32(0x20) + Math.imul(r32(0x60), y) + Math.imul(r32(0x64), z)) >>> 0;

      const srcBytes = this._read(ex, src, count * 16);
      const row = new Float32Array(srcBytes.buffer, 0, count * 4);
      const ditherBytes = this._read(ex, (table + ((z & 3) + (y & 3) * 8) * 4) >>> 0, 16);
      const dither = new Float32Array(ditherBytes.buffer, 0, 4);
      const bytes = encodeRow(row, count, dither, y & 1);

      if (this.state === 'verifying') {
        this.pending.set(ex, { dst, bytes });
        return no('verifying');
      }
      this._write(ex, dst, bytes);
      const cw = ex.get_fpu_cw() >>> 0;
      ex.guest_write32(codec + 0x7c, cw);
      ex.set_eax(cw);
      ex.set_esp((esp + 16) >>> 0);
      ex.set_eip(ret);
      this.stats.pixels += count;
      return true;
    }
  }

  NativeD3DXEncode.encodeRow = encodeRow;
  NativeD3DXEncode.encodeChannel = encodeChannel;
  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeD3DXEncode };
  else root.NativeD3DXEncode = NativeD3DXEncode;
})(typeof globalThis !== 'undefined' ? globalThis : this);
