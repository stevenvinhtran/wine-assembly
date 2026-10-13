// Native DXT5 block compressor answering D3DX 9's encoder (d3dx9_36 VA
// 0x60c5a3), reached through $native_hook0..15 (lib/apps.js nativeHooks,
// kind 'd3dx-dxt5-encode').
//
// MBAACC asks D3DX for DXT5 textures at load time, and D3DX's x87 endpoint
// search, interpreted, was most of the battle load (docs/re-notes/mbaa.md).
// This is an independent compressor -- the bytes are not Microsoft's -- of
// comparable quality (test-native-dxt5-encode measures it against D3DX's own
// output on the same blocks).
//
//   HRESULT encode(BYTE out[16], const D3DXVECTOR4 in[16], BOOL dither)
//   stdcall, `ret 0xc`, returns S_OK.
//
// Alpha: 8-value mode between the block's min and max, nearest index.
// Colour: endpoints from the principal axis of the RGB cloud, refined twice by
// least squares, 565-quantized with c0 > c1 (four-colour mode, which DXT2-5
// require and D3DX's own decoder expects); nearest-colour indices. A
// single-colour block is c0 == c1 with every index 0. The dither flag is not
// reproduced.
(function (root) {
  'use strict';

  const PAGE = 4096;
  const clamp255 = v => (v >= 1 ? 255 : (v > 0 ? Math.round(v * 255) : 0));

  function to565(r, g, b) {
    return ((Math.round(r * 31 / 255) & 31) << 11) | ((Math.round(g * 63 / 255) & 63) << 5) | (Math.round(b * 31 / 255) & 31);
  }
  function from565(c) {
    const r = (c >> 11) & 31, g = (c >> 5) & 63, b = c & 31;
    return [(r << 3) | (r >> 2), (g << 2) | (g >> 4), (b << 3) | (b >> 2)];
  }

  function alphaBlock(a, out) {
    let lo = 255, hi = 0;
    for (const v of a) { if (v < lo) lo = v; if (v > hi) hi = v; }
    out[0] = hi; out[1] = lo;
    const pal = [hi, lo];
    for (let i = 1; i <= 6; i++) pal.push(((7 - i) * hi + i * lo) / 7);
    let w0 = 0, w1 = 0;
    for (let t = 0; t < 16; t++) {
      let best = 0, bestErr = Infinity;
      if (hi !== lo) {
        for (let k = 0; k < 8; k++) { const d = Math.abs(a[t] - pal[k]); if (d < bestErr) { bestErr = d; best = k; } }
      }
      if (t < 8) w0 |= best << (3 * t); else w1 |= best << (3 * (t - 8));
    }
    out[2] = w0 & 255; out[3] = (w0 >> 8) & 255; out[4] = (w0 >> 16) & 255;
    out[5] = w1 & 255; out[6] = (w1 >> 8) & 255; out[7] = (w1 >> 16) & 255;
  }

  function indicesFor(px, c0, c1) {
    const p0 = from565(c0), p1 = from565(c1);
    const pal = [p0, p1, [0, 1, 2].map(k => (2 * p0[k] + p1[k]) / 3), [0, 1, 2].map(k => (p0[k] + 2 * p1[k]) / 3)];
    let bits = 0, err = 0;
    for (let t = 0; t < 16; t++) {
      let best = 0, bestErr = Infinity;
      for (let k = 0; k < 4; k++) {
        const dr = px[t][0] - pal[k][0], dg = px[t][1] - pal[k][1], db = px[t][2] - pal[k][2];
        const e = dr * dr + dg * dg + db * db;
        if (e < bestErr) { bestErr = e; best = k; }
      }
      bits |= best << (2 * t);
      err += bestErr;
    }
    return { bits: bits >>> 0, err };
  }

  // Least-squares endpoints for fixed indices (weights 1, 0, 2/3, 1/3).
  function refine(px, bits) {
    const w = [1, 0, 2 / 3, 1 / 3];
    let aa = 0, bb = 0, ab = 0;
    const ax = [0, 0, 0], bx = [0, 0, 0];
    for (let t = 0; t < 16; t++) {
      const wa = w[(bits >>> (2 * t)) & 3], wb = 1 - wa;
      aa += wa * wa; bb += wb * wb; ab += wa * wb;
      for (let k = 0; k < 3; k++) { ax[k] += wa * px[t][k]; bx[k] += wb * px[t][k]; }
    }
    const det = aa * bb - ab * ab;
    if (Math.abs(det) < 1e-9) return null;
    const e0 = [0, 1, 2].map(k => Math.min(255, Math.max(0, (ax[k] * bb - bx[k] * ab) / det)));
    const e1 = [0, 1, 2].map(k => Math.min(255, Math.max(0, (bx[k] * aa - ax[k] * ab) / det)));
    return [e0, e1];
  }

  function colorBlock(px, out) {
    const mean = [0, 0, 0];
    for (const p of px) for (let k = 0; k < 3; k++) mean[k] += p[k] / 16;
    const cov = [0, 0, 0, 0, 0, 0];
    for (const p of px) {
      const r = p[0] - mean[0], g = p[1] - mean[1], b = p[2] - mean[2];
      cov[0] += r * r; cov[1] += r * g; cov[2] += r * b; cov[3] += g * g; cov[4] += g * b; cov[5] += b * b;
    }
    let v = [0.9, 1, 0.7];
    for (let i = 0; i < 8; i++) {
      const n = [cov[0] * v[0] + cov[1] * v[1] + cov[2] * v[2],
        cov[1] * v[0] + cov[3] * v[1] + cov[4] * v[2],
        cov[2] * v[0] + cov[4] * v[1] + cov[5] * v[2]];
      const len = Math.hypot(n[0], n[1], n[2]);
      if (len < 1e-9) break;
      v = n.map(x => x / len);
    }
    let lo = Infinity, hi = -Infinity, pLo = px[0], pHi = px[0];
    for (const p of px) {
      const d = p[0] * v[0] + p[1] * v[1] + p[2] * v[2];
      if (d < lo) { lo = d; pLo = p; }
      if (d > hi) { hi = d; pHi = p; }
    }
    let c0 = to565(pHi[0], pHi[1], pHi[2]), c1 = to565(pLo[0], pLo[1], pLo[2]);
    let best = null;
    for (let iter = 0; iter < 3; iter++) {
      if (c0 < c1) { const t = c0; c0 = c1; c1 = t; }
      const res = c0 === c1 ? { bits: 0, err: indicesFor(px, c0, c0).err } : indicesFor(px, c0, c1);
      if (!best || res.err < best.err) best = { c0, c1, bits: res.bits, err: res.err };
      if (c0 === c1) break;
      const r = refine(px, res.bits);
      if (!r) break;
      c0 = to565(r[0][0], r[0][1], r[0][2]); c1 = to565(r[1][0], r[1][1], r[1][2]);
    }
    let { c0: f0, c1: f1, bits } = best;
    if (f0 === f1) bits = 0;
    out[8] = f0 & 255; out[9] = f0 >> 8; out[10] = f1 & 255; out[11] = f1 >> 8;
    out[12] = bits & 255; out[13] = (bits >>> 8) & 255; out[14] = (bits >>> 16) & 255; out[15] = bits >>> 24;
  }

  // floats: Float32Array(64) of r,g,b,a in 0..1. Returns a 16-byte DXT5 block.
  function encodeDxt5(floats) {
    const out = new Uint8Array(16);
    const px = [], a = [];
    for (let t = 0; t < 16; t++) {
      px.push([clamp255(floats[t * 4]), clamp255(floats[t * 4 + 1]), clamp255(floats[t * 4 + 2])]);
      a.push(clamp255(floats[t * 4 + 3]));
    }
    alphaBlock(a, out);
    colorBlock(px, out);
    return out;
  }

  class NativeDxt5Encode {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts.getBuffer;
      this.log = opts.log || (() => {});
      this.stats = { answered: 0, declined: 0 };
    }

    snapshot() { return Object.assign({ kind: 'd3dx-dxt5-encode' }, this.stats); }

    _io(ex, addr, len, write, bytes) {
      const mem = new Uint8Array(this.getBuffer());
      const out = write ? null : new Uint8Array(len);
      for (let done = 0; done < len;) {
        const ga = (addr + done) >>> 0;
        const n = Math.min(len - done, PAGE - (ga & (PAGE - 1)));
        const wa = ex.guest_to_wasm(ga) >>> 0;
        if (write) mem.set(bytes.subarray(done, done + n), wa);
        else out.set(mem.subarray(wa, wa + n), done);
        done += n;
      }
      return out;
    }

    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      try {
        const esp = ex.get_esp() >>> 0;
        const ret = ex.guest_read32(esp) >>> 0, out = ex.guest_read32(esp + 4) >>> 0, input = ex.guest_read32(esp + 8) >>> 0;
        if (!ret || !out || !input) { this.stats.declined++; return false; }
        const floats = new Float32Array(this._io(ex, input, 256, false).buffer);
        this._io(ex, out, 16, true, encodeDxt5(floats));
        ex.set_eax(0);
        ex.set_esp((esp + 16) >>> 0);
        ex.set_eip(ret);
        this.stats.answered++;
        return true;
      } catch (err) {
        this.log(`[native-dxt5] declined after error: ${err && err.message || err}`);
        this.stats.declined++;
        return false;
      }
    }
  }

  NativeDxt5Encode.encode = encodeDxt5;
  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeDxt5Encode };
  else root.NativeDxt5Encode = NativeDxt5Encode;
})(typeof globalThis !== 'undefined' ? globalThis : this);
