// Memoized answers for D3DX 9's DXT5 block encoder (d3dx9_36 VA 0x60c5a3),
// reached through $native_hook0..7 (lib/apps.js nativeHooks, kind
// 'd3dx-dxt5-memo').
//
// MBAACC asks D3DX for DXT5 textures at load time, and D3DX compresses each
// 4x4 block with an x87 endpoint search -- interpreted, most of the battle
// load (docs/re-notes/mbaa.md). The encoder is a pure stdcall function:
//
//   HRESULT encode(BYTE out[16], const D3DXVECTOR4 in[16], BOOL dither)
//
// so its result is a function of the 256 input bytes and the flag alone.
// Sprite sheets repeat blocks heavily (every fully transparent block is the
// same), and the same characters and stages are loaded again and again. This
// hook answers a block it has already seen with the bytes D3DX produced for
// it; anything new runs as guest code and its output is recorded:
//
//   * before letting D3DX encode a new block, the alpha half of `out` is set
//     to a random sentinel; at the thread's next call the block is cached only
//     if D3DX overwrote it (its failure path returns before writing alpha);
//   * every cached value is a real D3DX output, so answers are exact. Keys are
//     96 bits of hash over the input and flag.
//   * exportNew()/importPacked() move entries in a compact form (12-byte key,
//     16-byte block) so a host can keep the cache across sessions.
(function (root) {
  'use strict';

  const IN_BYTES = 256, OUT_BYTES = 16, MAX_ENTRIES = 1 << 20;
  const PAGE = 4096;

  // Three independent 32-bit hashes of the input words and the flag.
  function keyOf(words, flag) {
    let a = 0x811c9dc5 ^ flag, b = 0x9e3779b9 ^ (flag * 0x85ebca6b), c = 0xc2b2ae35;
    for (let i = 0; i < words.length; i++) {
      const w = words[i];
      a = Math.imul(a ^ w, 0x01000193);
      b = Math.imul((b ^ w) >>> 0, 0x85ebca6b) ^ (b >>> 13);
      c = (Math.imul(c + w, 0xcc9e2d51) ^ (c >>> 15)) >>> 0;
    }
    return `${a >>> 0}:${b >>> 0}:${c >>> 0}`;
  }
  const ENTRY_BYTES = 12 + OUT_BYTES;

  class NativeBlockMemo {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts.getBuffer;
      this.log = opts.log || (() => {});
      this.cache = new Map();
      this.fresh = [];                 // keys recorded since the last exportNew()
      this.pending = new Map();        // exports -> {key, out, sentinel}
      this.stats = { answered: 0, declined: 0, recorded: 0, failed: 0, entries: 0, why: {} };
    }

    snapshot() { return Object.assign({ kind: 'd3dx-dxt5-memo' }, this.stats, { entries: this.cache.size }); }

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

    // The block D3DX was left to encode at this thread's previous call.
    _settle(ex) {
      const job = this.pending.get(ex);
      if (!job) return;
      this.pending.delete(ex);
      const block = this._read(ex, job.out, OUT_BYTES);
      let alphaWritten = false;
      for (let i = 0; i < 8; i++) if (block[i] !== job.sentinel[i]) { alphaWritten = true; break; }
      if (!alphaWritten) { this.stats.failed++; return; }
      if (this.cache.size >= MAX_ENTRIES) this.cache.clear();
      this.cache.set(job.key, block);
      this.fresh.push(job.key);
      this.stats.recorded++;
    }

    // Entries recorded since the last call, packed for storage.
    exportNew() {
      const keys = this.fresh.filter(k => this.cache.has(k));
      this.fresh = [];
      const out = new Uint8Array(keys.length * ENTRY_BYTES);
      const dv = new DataView(out.buffer);
      keys.forEach((k, i) => {
        const o = i * ENTRY_BYTES, [a, b, c] = k.split(':');
        dv.setUint32(o, +a, true); dv.setUint32(o + 4, +b, true); dv.setUint32(o + 8, +c, true);
        out.set(this.cache.get(k), o + 12);
      });
      return out;
    }

    importPacked(bytes) {
      const u8 = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
      const dv = new DataView(u8.buffer, u8.byteOffset, u8.byteLength);
      let n = 0;
      for (let o = 0; o + ENTRY_BYTES <= u8.length && this.cache.size < MAX_ENTRIES; o += ENTRY_BYTES, n++) {
        const key = `${dv.getUint32(o, true)}:${dv.getUint32(o + 4, true)}:${dv.getUint32(o + 8, true)}`;
        if (!this.cache.has(key)) this.cache.set(key, u8.slice(o + 12, o + ENTRY_BYTES));
      }
      this.stats.imported = (this.stats.imported || 0) + n;
      return n;
    }

    hook(eip, ex) {
      if (!ex || (eip >>> 0) !== (this.cfg.eip >>> 0)) return false;
      try {
        this._settle(ex);
        if (this._answer(ex)) { this.stats.answered++; return true; }
      } catch (err) {
        this.log(`[native-dxt5-memo] declined after error: ${err && err.message || err}`);
      }
      this.stats.declined++;
      return false;
    }

    _answer(ex) {
      const no = reason => { this.stats.why[reason] = (this.stats.why[reason] || 0) + 1; return false; };
      const esp = ex.get_esp() >>> 0;
      const r32 = a => ex.guest_read32(a) >>> 0;
      const ret = r32(esp), out = r32(esp + 4), input = r32(esp + 8), flag = r32(esp + 12);
      if (!ret || !out || !input) return no('args');
      const bytes = this._read(ex, input, IN_BYTES);
      const key = keyOf(new Uint32Array(bytes.buffer), flag);
      const hit = this.cache.get(key);
      if (hit) {
        this._write(ex, out, hit);
        ex.set_eax(0);
        ex.set_esp((esp + 16) >>> 0);
        ex.set_eip(ret);
        return true;
      }
      const sentinel = new Uint8Array(8);
      for (let i = 0; i < 8; i++) sentinel[i] = (Math.random() * 256) | 0;
      this._write(ex, out, sentinel);
      this.pending.set(ex, { key, out, sentinel });
      return no('miss');
    }
  }

  NativeBlockMemo.keyOf = keyOf;
  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeBlockMemo };
  else root.NativeBlockMemo = NativeBlockMemo;
})(typeof globalThis !== 'undefined' ? globalThis : this);
