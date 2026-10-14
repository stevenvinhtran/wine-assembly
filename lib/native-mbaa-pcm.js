// Native hook kind 'mbaa-pcm16' at MBAA.exe 0x4F4465: libvorbisfile's
// ov_read conversion of one channel's float samples to 16-bit PCM:
//   for (j = eax; j < ebx; j++) { v = fistp(float[esi + j*4] * 32768.0);
//     clamp v to [-32768, 32767]; *(int16*)edx = v; edx += edi; }
// run through the emulated x87, once per sample. In character select (voice
// lines decoded on demand) it was the hottest guest code (about 18% of block
// entries, 2026-10-14 profile).
//
// The hook converts the rest of the channel and continues at 0x4F44A6, the
// loop's exit, leaving what the loop leaves: eax = ebx, edx past the last
// sample, ecx the last clamped value, [esp+0x28] the last product (double),
// [esp+0x18] the last fistp result. Rounding is the x87 default
// (round-to-nearest-even); out-of-range products give the integer indefinite
// value, as fistp does. test/test-native-mbaa-pcm.js checks it against
// MBAA.exe.
(function (root) {
  'use strict';

  const EXIT = 0x4F44A6, SCALE = 32768;
  const f32 = new Float32Array(1), u32f = new Uint32Array(f32.buffer);

  // fistp dword, round to nearest even; NaN/out of range -> 0x80000000.
  function fistp32(x) {
    if (!(x >= -2147483648.5 && x < 2147483647.5)) {
      if (x === -2147483648.5) return -2147483648;
      return -2147483648;
    }
    let r = Math.round(x);
    if (Math.abs(x - Math.trunc(x)) === 0.5) r = 2 * Math.round(x / 2);
    return r | 0;
  }

  class NativeMbaaPcm16 {
    constructor(config, opts) {
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts && opts.getBuffer;
      this.stats = { kind: 'mbaa-pcm16', calls: 0, samples: 0 };
    }
    snapshot() { return this.stats; }
    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      const ebx = ex.get_ebx() | 0;
      let j = ex.get_eax() | 0;
      if (j >= ebx) return false;
      const esi = ex.get_esi() >>> 0, edi = ex.get_edi() | 0, esp = ex.get_esp() >>> 0;
      let edx = ex.get_edx() >>> 0;
      const dv = new DataView(this.getBuffer());
      const rd = a => dv.getUint32(ex.guest_to_wasm(a >>> 0) >>> 0, true);
      let product = 0, raw = 0, v = 0;
      for (; j < ebx; j++) {
        u32f[0] = rd(esi + j * 4);
        product = f32[0] * SCALE;              // exact: a float times a power of two
        raw = fistp32(product);
        v = raw > 32767 ? 32767 : raw < -32768 ? -32768 : raw;
        dv.setInt16(ex.guest_to_wasm(edx) >>> 0, v, true);
        edx = (edx + edi) >>> 0;
      }
      this.stats.calls++;
      this.stats.samples += ebx - (ex.get_eax() | 0);
      const w28 = ex.guest_to_wasm((esp + 0x28) >>> 0) >>> 0;
      dv.setFloat64(w28, product, true);
      ex.guest_write32((esp + 0x18) >>> 0, raw >>> 0);
      ex.set_ecx(v >>> 0);
      ex.set_eax(ebx);
      ex.set_edx(edx);
      ex.set_eip(EXIT);
      return true;
    }
  }

  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeMbaaPcm16, fistp32 };
  else root.NativeMbaaPcm16 = NativeMbaaPcm16;
})(typeof globalThis !== 'undefined' ? globalThis : this);
