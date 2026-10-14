// Native answer for D3DXMatrixMultiply in d3dx9_36.dll (VA 0x579da3), kind
// 'd3dx-matrix-multiply' in lib/apps.js nativeHooks. MBAACC calls it ~10k
// times a second (character select, match start, pause), interpreted x87.
//
//   D3DXMATRIX* WINAPI D3DXMatrixMultiply(out, m1, m2)   stdcall, `ret 0xc`
//
// All three of the DLL's paths (no alias, out == m2, out == m1 == m2) sum the
// four products in the same order, (p0 + p2) + (p1 + p3), with one float32
// store per element; the emulator's x87 keeps intermediates in f64, which JS
// doubles reproduce exactly (test-native-d3dx-matrix).
(function (root) {
  'use strict';
  const f32 = Math.fround;
  const a = new Float32Array(16), b = new Float32Array(16), o = new Float32Array(16);
  const ab = new Uint8Array(a.buffer), bb = new Uint8Array(b.buffer), ob = new Uint8Array(o.buffer);

  function multiply(out, m1, m2) {
    for (let i = 0; i < 4; i++) {
      const a0 = m1[i * 4], a1 = m1[i * 4 + 1], a2 = m1[i * 4 + 2], a3 = m1[i * 4 + 3];
      for (let j = 0; j < 4; j++) {
        out[i * 4 + j] = f32((a0 * m2[j] + a2 * m2[8 + j]) + (a1 * m2[4 + j] + a3 * m2[12 + j]));
      }
    }
  }

  class NativeD3dxMatrix {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts.getBuffer;
      this.stats = { answered: 0, declined: 0 };
    }
    snapshot() { return Object.assign({ kind: 'd3dx-matrix-multiply' }, this.stats); }
    _copy(ex, addr, bytes, write) {
      const mem = new Uint8Array(this.getBuffer());
      for (let done = 0; done < 64;) {
        const ga = (addr + done) >>> 0, n = Math.min(64 - done, 4096 - (ga & 4095)), wa = ex.guest_to_wasm(ga) >>> 0;
        if (write) mem.set(bytes.subarray(done, done + n), wa); else bytes.set(mem.subarray(wa, wa + n), done);
        done += n;
      }
    }
    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      const esp = ex.get_esp() >>> 0, r32 = x => ex.guest_read32(x) >>> 0;
      const ret = r32(esp), out = r32(esp + 4), m1 = r32(esp + 8), m2 = r32(esp + 12);
      if (!ret || !out || !m1 || !m2) { this.stats.declined++; return false; }
      this._copy(ex, m1, ab, false); this._copy(ex, m2, bb, false);
      multiply(o, a, b);
      this._copy(ex, out, ob, true);
      ex.set_eax(out);
      ex.set_esp((esp + 16) >>> 0);
      ex.set_eip(ret);
      this.stats.answered++;
      return true;
    }
  }
  NativeD3dxMatrix.multiply = multiply;
  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeD3dxMatrix };
  else root.NativeD3dxMatrix = NativeD3dxMatrix;
})(typeof globalThis !== 'undefined' ? globalThis : this);
