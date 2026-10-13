// Native answer for zlib 1.1.x inflate() inside d3dx9_36.dll (VA 0x73ed54),
// reached through $native_hook0..15 (lib/apps.js nativeHooks, kind
// 'zlib-inflate').
//
// D3DX decodes PNGs with an embedded libpng + zlib, and MBAACC's character
// select loads a PNG portrait/sprite set on every cursor move. Interpreted,
// zlib's inflate was most of that loader thread (docs/re-notes/mbaa.md).
//
//   int inflate(z_streamp strm, int flush)      stdcall, `ret 8`
//   z_stream (32-bit): +0 next_in, +4 avail_in, +8 total_in, +12 next_out,
//   +16 avail_out, +20 total_out, +24 msg, +28 state, ...
//
// A stream is answered natively only if it was first seen with total_in == 0
// (inflateReset/inflateInit zero it); it is then answered on every later call,
// because the guest zlib's own state never advanced. One seen mid-stream is
// left to the guest for its whole life. Output is decoded as far as the input
// allows and handed out avail_out bytes at a time. Return codes follow zlib:
// Z_OK on any progress, Z_STREAM_END once the trailer is read and all output
// delivered, Z_BUF_ERROR on no progress, Z_DATA_ERROR on a corrupt stream.
(function (root) {
  'use strict';

  const PAGE = 4096;
  const Z_OK = 0, Z_STREAM_END = 1, Z_DATA_ERROR = -3, Z_BUF_ERROR = -5;
  const LBASE = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
  const LEXT = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0];
  const DBASE = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];
  const DEXT = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13];
  const CLORDER = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];

  // Canonical Huffman table: a 9-bit direct lookup (sym << 4 | len, 0 = miss)
  // plus count/symbol arrays for longer codes.
  function buildTable(lengths, n) {
    const count = new Uint16Array(16), offs = new Uint16Array(16), symbol = new Uint16Array(n);
    for (let i = 0; i < n; i++) count[lengths[i]]++;
    count[0] = 0;
    let left = 1;
    for (let len = 1; len < 16; len++) { left = (left << 1) - count[len]; if (left < 0) return null; }
    for (let len = 1; len < 15; len++) offs[len + 1] = offs[len] + count[len];
    for (let i = 0; i < n; i++) if (lengths[i]) symbol[offs[lengths[i]]++] = i;
    const fast = new Int32Array(512);
    let code = 0, first = 0, index = 0;
    for (let len = 1; len <= 9; len++) {
      const c = count[len];
      for (let k = 0; k < c; k++) {
        const sym = symbol[index + k], cd = first + k;
        // Deflate codes are sent MSB-first inside an LSB-first bit stream.
        let rev = 0;
        for (let b = 0; b < len; b++) rev |= ((cd >> b) & 1) << (len - 1 - b);
        for (let fill = rev; fill < 512; fill += 1 << len) fast[fill] = (sym << 4) | len;
      }
      index += c; first = (first + c) << 1;
    }
    return { count, symbol, fast };
  }

  let FIXED_L = null, FIXED_D = null;
  function fixedTables() {
    if (!FIXED_L) {
      const l = new Uint8Array(288);
      for (let i = 0; i < 144; i++) l[i] = 8;
      for (let i = 144; i < 256; i++) l[i] = 9;
      for (let i = 256; i < 280; i++) l[i] = 7;
      for (let i = 280; i < 288; i++) l[i] = 8;
      FIXED_L = buildTable(l, 288);
      FIXED_D = buildTable(new Uint8Array(30).fill(5), 30);
    }
    return [FIXED_L, FIXED_D];
  }

  // A resumable zlib-stream decoder. push() appends input; run() decodes as far
  // as the input allows. Every read helper returns -1 without consuming
  // anything when the input runs out, and the generator yields until more
  // input arrives, so a partial symbol is simply re-read next time.
  class Inflater {
    constructor() {
      this.inp = new Uint8Array(1 << 16); this.ilen = 0; this.ipos = 0;
      this.bitbuf = 0; this.bitcnt = 0;
      this.out = new Uint8Array(1 << 18); this.olen = 0; this.rd = 0;
      this.done = false; this.error = null;
      this.cap = Infinity;          // stop decoding once this much output is pending
      this.gen = this._decode();
    }
    push(bytes) {
      if (this.ilen + bytes.length > this.inp.length) {
        // Compact, keeping a few consumed bytes: _align() can hand buffered
        // whole bytes back by stepping ipos backwards.
        const from = Math.max(0, this.ipos - 16), keep = this.ilen - from;
        let cap = this.inp.length;
        while (cap < keep + bytes.length) cap *= 2;
        if (cap === this.inp.length) this.inp.copyWithin(0, from, this.ilen);
        else { const next = new Uint8Array(cap); next.set(this.inp.subarray(from, this.ilen)); this.inp = next; }
        this.ipos -= from; this.ilen = keep;
      }
      const start = this.ilen;
      this.inp.set(bytes, this.ilen); this.ilen += bytes.length;
      return start;
    }
    // Like zlib, keep only what was actually read: whole bytes sitting in the
    // bit buffer and every byte past it go back to the caller (who presents
    // them again next call), so the stream's input is never read ahead.
    giveBack(start) {
      // Only this call's bytes can go back; earlier ones were reported used.
      const back = Math.min(this.bitcnt >> 3, Math.max(0, this.ipos - start));
      this.ipos -= back; this.bitcnt -= back * 8;
      this.bitbuf &= (1 << this.bitcnt) - 1;
      this.ilen = Math.max(this.ipos, start);
    }
    // Drop the partial byte; return any whole buffered bytes to the input.
    _align() {
      this.ipos -= this.bitcnt >> 3;
      this.bitbuf = 0; this.bitcnt = 0;
    }
    run() {
      this.outStall = false;
      if (this.done || this.error) return;
      try { this.gen.next(); } catch (err) { this.error = String(err && err.message || err); }
    }
    // Bytes of input not consumed (only meaningful once done).
    leftover() { return this.ilen - this.ipos; }
    _need(n) {
      while (this.bitcnt < n) {
        if (this.ipos >= this.ilen) return false;
        this.bitbuf |= this.inp[this.ipos++] << this.bitcnt; this.bitcnt += 8;
      }
      return true;
    }
    _bits(n) {
      if (!this._need(n)) return -1;
      const v = this.bitbuf & ((1 << n) - 1);
      this.bitbuf >>>= n; this.bitcnt -= n;
      return v;
    }
    // Decode one symbol, or -1 (nothing consumed) if the input ends inside it.
    _sym(t) {
      const saveBuf = this.bitbuf, saveCnt = this.bitcnt, savePos = this.ipos;
      this._need(9);
      const f = t.fast[this.bitbuf & 511];
      if (f && (f & 15) <= this.bitcnt) {
        const len = f & 15; this.bitbuf >>>= len; this.bitcnt -= len; return f >> 4;
      }
      let code = 0, first = 0, index = 0;
      for (let len = 1; len < 16; len++) {
        if (!this._need(1)) { this.bitbuf = saveBuf; this.bitcnt = saveCnt; this.ipos = savePos; return -1; }
        code |= this.bitbuf & 1; this.bitbuf >>>= 1; this.bitcnt--;
        const count = t.count[len];
        if (code - count < first) return t.symbol[index + (code - first)];
        index += count; first += count; first <<= 1; code <<= 1;
      }
      throw new Error('invalid Huffman code');
    }
    _emit(b) {
      if (this.olen === this.out.length) this._grow(1);
      this.out[this.olen++] = b;
    }
    _grow(n) {
      let cap = this.out.length * 2;
      while (cap < this.olen + n) cap *= 2;
      const next = new Uint8Array(cap); next.set(this.out.subarray(0, this.olen)); this.out = next;
    }
    *_decode() {
      let v;
      while ((v = this._bits(16)) < 0) yield;
      const cmf = v & 255, flg = v >> 8;
      if ((cmf & 15) !== 8 || ((cmf << 8) | flg) % 31 || (flg & 32)) throw new Error('incorrect header check');
      let last = 0;
      while (!last) {
        while ((v = this._bits(3)) < 0) yield;
        last = v & 1;
        const type = v >> 1;
        if (type === 0) {
          this._align();                                  // to a byte boundary
          while (this.ilen - this.ipos < 4) yield;
          const p = this.ipos, len = this.inp[p] | (this.inp[p + 1] << 8);
          if ((len ^ 0xffff) !== (this.inp[p + 2] | (this.inp[p + 3] << 8))) throw new Error('invalid stored block lengths');
          this.ipos += 4;
          let left = len;
          while (left) {
            while (this.ipos >= this.ilen || this.olen - this.rd >= this.cap) { this.outStall = this.ipos < this.ilen; yield; }
            const n = Math.min(left, this.ilen - this.ipos, this.cap - (this.olen - this.rd));
            if (this.olen + n > this.out.length) this._grow(n);
            this.out.set(this.inp.subarray(this.ipos, this.ipos + n), this.olen);
            this.olen += n; this.ipos += n; left -= n;
          }
          continue;
        }
        let lt, dt;
        if (type === 1) [lt, dt] = fixedTables();
        else if (type === 2) {
          while ((v = this._bits(14)) < 0) yield;
          const nlen = (v & 31) + 257, ndist = ((v >> 5) & 31) + 1, ncode = (v >> 10) + 4;
          const cl = new Uint8Array(19);
          for (let i = 0; i < ncode; i++) { while ((v = this._bits(3)) < 0) yield; cl[CLORDER[i]] = v; }
          const ct = buildTable(cl, 19);
          if (!ct) throw new Error('invalid code lengths set');
          const lens = new Uint8Array(nlen + ndist);
          for (let i = 0; i < nlen + ndist;) {
            let sym;
            while ((sym = this._sym(ct)) < 0) yield;
            if (sym < 16) { lens[i++] = sym; continue; }
            const extra = sym === 16 ? 2 : sym === 17 ? 3 : 7;
            while ((v = this._bits(extra)) < 0) yield;
            let rep, val = 0;
            if (sym === 16) { if (!i) throw new Error('invalid bit length repeat'); val = lens[i - 1]; rep = 3 + v; }
            else rep = (sym === 17 ? 3 : 11) + v;
            if (i + rep > nlen + ndist) throw new Error('invalid bit length repeat');
            while (rep--) lens[i++] = val;
          }
          lt = buildTable(lens.subarray(0, nlen), nlen);
          dt = buildTable(lens.subarray(nlen), ndist);
          if (!lt || !dt) throw new Error('invalid literal/lengths set');
        } else throw new Error('invalid block type');
        for (;;) {
          let sym;
          while ((sym = this._sym(lt)) < 0) yield;
          if (sym < 256) { this._emit(sym); if (this.olen - this.rd >= this.cap) { this.outStall = true; yield; } continue; }
          if (sym === 256) break;
          sym -= 257;
          if (sym >= 29) throw new Error('invalid literal/length code');
          // Length extra, distance code and distance extra must all be read
          // together or not at all: save the cursor and retry from it.
          for (;;) {
            const sb = this.bitbuf, sc = this.bitcnt, sp = this.ipos;
            const le = this._bits(LEXT[sym]);
            const dsym = le < 0 ? -1 : this._sym(dt);
            const de = dsym < 0 ? -1 : this._bits(DEXT[dsym] || 0);
            if (le >= 0 && dsym >= 0 && de >= 0) {
              if (dsym >= 30) throw new Error('invalid distance code');
              const len = LBASE[sym] + le, dist = DBASE[dsym] + de;
              if (dist > this.olen) throw new Error('invalid distance too far back');
              if (this.olen + len > this.out.length) this._grow(len);
              const o = this.out;
              for (let k = 0, s = this.olen - dist; k < len; k++) o[this.olen++] = o[s + k];
              if (this.olen - this.rd >= this.cap) { this.outStall = true; yield; }
              break;
            }
            this.bitbuf = sb; this.bitcnt = sc; this.ipos = sp;
            yield;
          }
        }
      }
      this._align();                                        // adler32 is byte-aligned
      while (this.ilen - this.ipos < 4) yield;
      this.ipos += 4;
      this.done = true;
    }
  }

  class NativeInflate {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({}, config);
      this.getBuffer = opts.getBuffer;
      this.log = opts.log || (() => {});
      this.streams = new Map();          // strm guest address -> {state, inflater}
      this.stats = { answered: 0, declined: 0, streams: 0, bytesOut: 0, errors: 0 };
    }

    snapshot() { return Object.assign({ kind: 'zlib-inflate', live: this.streams.size }, this.stats); }

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
      const r32 = a => ex.guest_read32(a >>> 0) >>> 0;
      const esp = ex.get_esp() >>> 0;
      const ret = r32(esp), strm = r32(esp + 4);
      if (!ret || !strm) { this.stats.declined++; return false; }
      const nextIn = r32(strm), availIn = r32(strm + 4), totalIn = r32(strm + 8);
      const nextOut = r32(strm + 12), availOut = r32(strm + 16), totalOut = r32(strm + 20);
      const state = r32(strm + 28);
      let s = this.streams.get(strm);
      if (s && (s.state !== state || totalIn === 0)) { this.streams.delete(strm); s = null; }
      if (!s) {
        // Only a stream we have seen from its first byte can be answered.
        if (totalIn !== 0 || !state || !nextOut || (!nextIn && availIn)) { this.stats.declined++; return false; }
        s = { state, inflater: new Inflater() };
        this.streams.set(strm, s);
        this.stats.streams++;
        if (this.streams.size > 64) this.streams.delete(this.streams.keys().next().value);
      }
      const inf = s.inflater;
      try {
        const start = availIn ? inf.push(this._io(ex, nextIn, availIn, false)) : inf.ilen;
        inf.cap = Math.max(availOut, 1);
        inf.run();
        // Stopped because the output is full: unread input goes back, as zlib
        // leaves it in avail_in. Stopped for lack of input (or finished): it
        // was all used, partial symbols included.
        if (inf.outStall || inf.done) inf.giveBack(start);
        const consumed = (inf.outStall || inf.done) ? Math.max(0, inf.ipos - start) : availIn;
        const unused = availIn - consumed;
        const pending = inf.olen - inf.rd;
        const n = Math.min(pending, availOut);
        if (n) { this._io(ex, nextOut, n, true, inf.out.subarray(inf.rd, inf.rd + n)); inf.rd += n; }
        ex.guest_write32(strm, (nextIn + consumed) >>> 0);
        ex.guest_write32(strm + 4, unused);
        ex.guest_write32(strm + 8, (totalIn + consumed) >>> 0);
        ex.guest_write32(strm + 12, (nextOut + n) >>> 0);
        ex.guest_write32(strm + 16, (availOut - n) >>> 0);
        ex.guest_write32(strm + 20, (totalOut + n) >>> 0);
        this.stats.bytesOut += n;
        let rc;
        if (inf.error) { rc = Z_DATA_ERROR; this.stats.errors++; this.streams.delete(strm); }
        else if (inf.done && inf.rd === inf.olen) { rc = Z_STREAM_END; this.streams.delete(strm); }
        else rc = (consumed || n) ? Z_OK : Z_BUF_ERROR;
        // Keep memory bounded: drop output already delivered beyond the 32K window.
        if (inf.rd > (1 << 20) && inf.rd === inf.olen && !inf.done) {
          const keep = 32768, from = inf.olen - keep;
          inf.out.copyWithin(0, from, inf.olen); inf.olen = keep; inf.rd = keep;
        }
        ex.set_eax(rc >>> 0);
        ex.set_esp((esp + 12) >>> 0);
        ex.set_eip(ret);
        this.stats.answered++;
        return true;
      } catch (err) {
        // Once a stream is ours the guest zlib cannot take it back; fail it.
        this.log(`[native-inflate] stream failed: ${err && err.message || err}`);
        this.streams.delete(strm);
        this.stats.errors++;
        ex.set_eax(Z_DATA_ERROR >>> 0);
        ex.set_esp((esp + 12) >>> 0);
        ex.set_eip(ret);
        return true;
      }
    }
  }

  NativeInflate.Inflater = Inflater;
  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeInflate };
  else root.NativeInflate = NativeInflate;
})(typeof globalThis !== 'undefined' ? globalThis : this);
