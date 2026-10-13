// Native answers for D3DX 9's DXT block decoders (d3dx9_36.dll), reached
// through $native_hook0..15 (lib/apps.js nativeHooks, kinds
// 'd3dx-dxt-color-decode', 'd3dx-dxt3-decode', 'd3dx-dxt5-decode').
//
// MBAACC's textures are DXT files that it loads as A8R8G8B8, so D3DX decodes
// every block to 16 D3DXVECTOR4s -- interpreted, most of boot and part of
// each load (docs/re-notes/mbaa.md). All three are stdcall (out, block),
// return 0, `ret 8`:
//
//   0x60c026  colour block (8 bytes): two 565 endpoints, four-colour mode if
//             c0 > c1 (1/3, 2/3 blends) else three colours + transparent black
//   0x60c156  DXT2/3: explicit 4-bit alpha (block+0), colour at block+8
//   0x60c1e0  DXT4/5: interpolated alpha (block+0), colour at block+8
//
// and kind 'd3dx-argb-decode': the A8R8G8B8 codec's row decode (0x5fd525),
// thiscall (y, z, out) on the codec (+0x20 base, +0x60/+0x64 pitches, +0x68
// pixels), each byte * (1/255) into R,G,B,A. Its optional post-passes
// (+0x18, +0x10) are left to the guest.
//
// The arithmetic mirrors the guest's x87 sequence under the emulator's x87
// (f64 operations, float32 rounding on every store), with D3DX's own
// constants (float32 values held as doubles), so results are bit-identical.
(function (root) {
  'use strict';

  const f32 = Math.fround;
  const K31 = 0.032258063554763794, K63 = 0.01587301678955555, K255 = 0.003921568859368563;
  const K15 = 0.06666667014360428, HALF = 0.5, THIRD = 0.3333333432674408, TWO_THIRDS = 0.6666666865348816;
  const K7 = 0.1428571492433548, K5 = 0.20000000298023224;
  const PAGE = 4096;

  function rgb565(c) {
    return [f32((c >>> 11) * K31), f32(((c >>> 5) & 63) * K63), f32((c & 31) * K31), 1];
  }

  // out: Float32Array(64), block: 8 bytes.
  function decodeColor(out, block) {
    const c0 = block[0] | (block[1] << 8), c1 = block[2] | (block[3] << 8);
    const p0 = rgb565(c0), p1 = rgb565(c1);
    const pal = [p0, p1, null, null];
    if (c0 > c1) {
      const p2 = [], p3 = [];
      for (let k = 0; k < 4; k++) {
        const d = p1[k] - p0[k];
        p2.push(f32(d * THIRD + p0[k]));
        p3.push(f32(d * TWO_THIRDS + p0[k]));
      }
      pal[2] = p2; pal[3] = p3;
    } else {
      const p2 = [];
      for (let k = 0; k < 4; k++) p2.push(f32((p1[k] - p0[k]) * HALF + p0[k]));
      pal[2] = p2; pal[3] = [0, 0, 0, 0];
    }
    let bits = (block[4] | (block[5] << 8) | (block[6] << 16) | (block[7] << 24)) >>> 0;
    for (let i = 0; i < 16; i++, bits >>>= 2) {
      const p = pal[bits & 3];
      out[i * 4] = p[0]; out[i * 4 + 1] = p[1]; out[i * 4 + 2] = p[2]; out[i * 4 + 3] = p[3];
    }
  }

  function decodeDxt3(out, block) {
    decodeColor(out, block.subarray(8, 16));
    for (let half = 0; half < 2; half++) {
      let w = (block[half * 4] | (block[half * 4 + 1] << 8) | (block[half * 4 + 2] << 16) | (block[half * 4 + 3] << 24)) >>> 0;
      for (let i = 0; i < 8; i++, w >>>= 4) out[(half * 8 + i) * 4 + 3] = f32((w & 15) * K15);
    }
  }

  function decodeDxt5(out, block) {
    decodeColor(out, block.subarray(8, 16));
    const a0 = block[0], a1 = block[1];
    const A = new Array(8);
    A[0] = f32(a0 * K255); A[1] = f32(K255 * a1);
    if (a0 > a1) {
      for (let i = 1; i <= 6; i++) A[i + 1] = f32(((7 - i) * A[0] + i * A[1]) * K7);
    } else {
      for (let i = 1; i <= 4; i++) A[i + 1] = f32(((5 - i) * A[0] + i * A[1]) * K5);
      A[6] = 0; A[7] = 1;
    }
    for (let half = 0; half < 2; half++) {
      let w = block[2 + half * 3] | (block[3 + half * 3] << 8) | (block[4 + half * 3] << 16);
      for (let i = 0; i < 8; i++, w >>>= 3) out[(half * 8 + i) * 4 + 3] = A[w & 7];
    }
  }

  const DECODERS = {
    'd3dx-dxt-color-decode': { fn: decodeColor, bytes: 8 },
    'd3dx-dxt3-decode': { fn: decodeDxt3, bytes: 16 },
    'd3dx-dxt5-decode': { fn: decodeDxt5, bytes: 16 },
  };

  class NativeArgbDecode {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts.getBuffer;
      this.log = opts.log || (() => {});
      this.stats = { answered: 0, declined: 0 };
    }
    snapshot() { return Object.assign({ kind: 'd3dx-argb-decode' }, this.stats); }
    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      try {
        const esp = ex.get_esp() >>> 0, codec = ex.get_ecx() >>> 0;
        const r32 = a => ex.guest_read32(a) >>> 0;
        const ret = r32(esp), y = r32(esp + 4), z = r32(esp + 8), out = r32(esp + 12);
        if (!ret || !codec || !out || r32(codec + 0x18) || r32(codec + 0x10)) { this.stats.declined++; return false; }
        const count = r32(codec + 0x68);
        if (count > 16384) { this.stats.declined++; return false; }
        const src = (r32(codec + 0x20) + Math.imul(r32(codec + 0x60), y) + Math.imul(r32(codec + 0x64), z)) >>> 0;
        const io = NativeDxtDecode.prototype._io;
        const px = io.call(this, ex, src, count * 4, false);
        const f = new Float32Array(count * 4);
        for (let i = 0; i < count; i++) {
          f[i * 4] = f32(px[i * 4 + 2] * K255); f[i * 4 + 1] = f32(px[i * 4 + 1] * K255);
          f[i * 4 + 2] = f32(px[i * 4] * K255); f[i * 4 + 3] = f32(px[i * 4 + 3] * K255);
        }
        io.call(this, ex, out, count * 16, true, new Uint8Array(f.buffer));
        ex.set_eax((src + count * 4) >>> 0);
        ex.set_esp((esp + 16) >>> 0);
        ex.set_eip(ret);
        this.stats.answered++;
        return true;
      } catch (err) {
        this.log(`[native-argb] declined after error: ${err && err.message || err}`);
        this.stats.declined++;
        return false;
      }
    }
  }

  class NativeDxtDecode {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({}, config);
      this.dec = DECODERS[this.cfg.kind];
      if (!this.dec) throw new Error(`unknown DXT decoder kind ${this.cfg.kind}`);
      this.getBuffer = opts.getBuffer;
      this.log = opts.log || (() => {});
      this.stats = { answered: 0, declined: 0 };
      this._out = new Float32Array(64);
      this._outBytes = new Uint8Array(this._out.buffer);
    }

    snapshot() { return Object.assign({ kind: this.cfg.kind }, this.stats); }

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
        const ret = ex.guest_read32(esp) >>> 0, out = ex.guest_read32(esp + 4) >>> 0, block = ex.guest_read32(esp + 8) >>> 0;
        if (!ret || !out || !block) { this.stats.declined++; return false; }
        this.dec.fn(this._out, this._io(ex, block, this.dec.bytes, false));
        this._io(ex, out, 256, true, this._outBytes);
        ex.set_eax(0);
        ex.set_esp((esp + 12) >>> 0);
        ex.set_eip(ret);
        this.stats.answered++;
        return true;
      } catch (err) {
        this.log(`[native-dxt] declined after error: ${err && err.message || err}`);
        this.stats.declined++;
        return false;
      }
    }
  }

  NativeDxtDecode.decoders = DECODERS;
  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeDxtDecode, NativeArgbDecode };
  else { root.NativeDxtDecode = NativeDxtDecode; root.NativeArgbDecode = NativeArgbDecode; }
})(typeof globalThis !== 'undefined' ? globalThis : this);
