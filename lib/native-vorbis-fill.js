// Native answer for a game's "fill N bytes of 16-bit PCM from an Ogg Vorbis
// stream" routine, reached through $native_hook_eip.
//
// Interpreting libvorbis is the single largest cost in MBAACC battles: the
// music thread used 250-600 ms of every second. The routine it runs
// (MBAACC 0x416ea0, docs/re-notes/mbaa.md) is the game's only caller of
// ov_read and ov_time_seek, and its stream reads the whole compressed song
// from guest memory. So the song is decoded once by the browser, in the
// background, and the routine is answered from that PCM:
//
//   * until the decode is ready, or whenever anything looks unfamiliar, the
//     hook declines and the guest's own libvorbis runs, exactly as before;
//   * the switch happens at the stream's own produced-bytes counter, which
//     before the first loop is the PCM position, so no audio is skipped;
//   * at the end it seeks to the stream's loop time, as ov_time_seek would.
//
// The configuration names the stream layout; nothing here is MBAACC-specific
// beyond the calling convention it describes (lib/apps.js, nativeVorbisFill):
//
//   eip            routine entry. On entry EAX = bytes wanted, [esp+4] stream,
//                  [esp+8] destination, [esp+12] loop flag; it returns the
//                  bytes produced in EAX, zero-fills the rest, `ret 0xc`.
//   closedOffset   dword that is -1 while the stream is closed
//   infoOffset     vorbis_info* (channels at +4, rate at +8)
//   sourceOffset   memory datasource {ptr, size, pos}
//   loopOffset     loop start time, seconds (double)
//   producedOffset running count of bytes produced (the routine adds to it)
//   lockAddr       CRITICAL_SECTION the routine takes; held = decline
(function (root) {
  'use strict';

  const MAX_SOURCE_BYTES = 64 * 1024 * 1024;
  const MAX_CACHED_SONGS = 3;
  const PAGE = 4096;

  // Float PCM -> interleaved little-endian int16, as ov_read(word=2, sgned=1)
  // produces it. Rounds to nearest like vorbis_ftoi; clamps like ov_read.
  async function toInt16(channelData, frames, yieldEvery) {
    const channels = channelData.length;
    const out = new Int16Array(frames * channels);
    for (let start = 0; start < frames; start += yieldEvery) {
      const end = Math.min(frames, start + yieldEvery);
      for (let c = 0; c < channels; c++) {
        const src = channelData[c];
        for (let i = start, o = start * channels + c; i < end; i++, o += channels) {
          let v = Math.round(src[i] * 32768);
          out[o] = v > 32767 ? 32767 : (v < -32768 ? -32768 : v);
        }
      }
      if (end < frames) await new Promise(resolve => setTimeout(resolve, 0));
    }
    return out;
  }

  // The browser's own Ogg Vorbis decoder. An OfflineAudioContext at the
  // file's rate decodes without resampling.
  async function browserDecodeOgg(bytes, channels, rate) {
    const Ctx = root.OfflineAudioContext || root.webkitOfflineAudioContext;
    if (!Ctx) throw new Error('no OfflineAudioContext');
    const ctx = new Ctx(channels, 1, rate);
    const audio = await ctx.decodeAudioData(bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength));
    if (audio.sampleRate !== rate || audio.numberOfChannels !== channels) {
      throw new Error(`decoded ${audio.numberOfChannels}ch@${audio.sampleRate}, stream is ${channels}ch@${rate}`);
    }
    const data = [];
    for (let c = 0; c < channels; c++) data.push(audio.getChannelData(c));
    return toInt16(data, audio.length, 1 << 18);
  }

  class NativeVorbisFill {
    constructor(config, opts) {
      opts = opts || {};
      this.cfg = Object.assign({
        closedOffset: 0, infoOffset: 0x18, sourceOffset: 0x310,
        loopOffset: 0x308, producedOffset: 0x324, lockAddr: 0,
      }, config);
      this.getBuffer = opts.getBuffer;              // () => wasm memory ArrayBuffer
      this.decodeOgg = opts.decodeOgg || browserDecodeOgg;
      this.log = opts.log || (() => {});
      this.songs = new Map();                       // key -> {fp, state, pcm, bytes}
      this.streams = new Map();                     // stream addr -> {key, fp, pos, produced}
      this.stats = { answered: 0, declined: 0, bytes: 0, decodes: 0, failures: 0 };
    }

    // Copy guest bytes out, page by page: a guest range need not be
    // contiguous in wasm memory outside the direct window.
    _readGuest(ex, addr, len) {
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

    _writeGuest(ex, addr, bytes) {
      const mem = new Uint8Array(this.getBuffer());
      for (let done = 0; done < bytes.length;) {
        const ga = (addr + done) >>> 0;
        const n = Math.min(bytes.length - done, PAGE - (ga & (PAGE - 1)));
        const wa = ex.guest_to_wasm(ga) >>> 0;
        mem.set(bytes.subarray(done, done + n), wa);
        done += n;
      }
    }

    _zeroGuest(ex, addr, len) {
      const mem = new Uint8Array(this.getBuffer());
      for (let done = 0; done < len;) {
        const ga = (addr + done) >>> 0;
        const n = Math.min(len - done, PAGE - (ga & (PAGE - 1)));
        const wa = ex.guest_to_wasm(ga) >>> 0;
        mem.fill(0, wa, wa + n);
        done += n;
      }
    }

    // A cheap identity for the compressed bytes at (src, size): the address
    // alone could be reused by the next song.
    _fingerprint(ex, src, size) {
      let h = size >>> 0;
      const sample = off => {
        for (let i = 0; i < 64 && off + i < size; i += 4) {
          h = Math.imul(h ^ (ex.guest_read32(src + off + i) >>> 0), 0x9e3779b1) >>> 0;
        }
      };
      sample(0); sample(Math.max(0, (size >>> 1) - 32)); sample(Math.max(0, size - 64));
      return h >>> 0;
    }

    _startDecode(key, fp, ex, src, size, channels, rate) {
      while (this.songs.size >= MAX_CACHED_SONGS) {
        const oldest = this.songs.keys().next().value;
        this.songs.delete(oldest);
      }
      const song = { fp, state: 'pending', pcm: null, bytes: null, channels, rate };
      this.songs.set(key, song);
      const compressed = this._readGuest(ex, src, size);
      this.stats.decodes++;
      Promise.resolve().then(() => this.decodeOgg(compressed, channels, rate)).then(pcm => {
        if (this.songs.get(key) !== song) return;
        song.pcm = pcm;
        song.bytes = new Uint8Array(pcm.buffer, pcm.byteOffset, pcm.byteLength);
        song.state = 'ready';
        this.log(`[native-vorbis] decoded ${size} bytes -> ${pcm.length / channels} frames ${channels}ch@${rate}`);
      }, err => {
        song.state = 'failed';
        this.stats.failures++;
        this.log(`[native-vorbis] browser decode failed, keeping guest libvorbis: ${err && err.message || err}`);
      });
    }

    // Returns true when the routine was answered (EIP/ESP/EAX already set).
    hook(eip, ex) {
      const c = this.cfg;
      if (!ex || (eip >>> 0) !== (c.eip >>> 0)) return false;
      try {
        if (this._answer(ex)) { this.stats.answered++; return true; }
      } catch (err) {
        this.log(`[native-vorbis] declined after error: ${err && err.message || err}`);
      }
      this.stats.declined++;
      return false;
    }

    _answer(ex) {
      const c = this.cfg;
      const esp = ex.get_esp() >>> 0;
      const ret = ex.guest_read32(esp) >>> 0;
      const stream = ex.guest_read32(esp + 4) >>> 0;
      const dst = ex.guest_read32(esp + 8) >>> 0;
      const loop = ex.guest_read32(esp + 12) | 0;
      const want = ex.get_eax() >>> 0;
      if (!ret || !stream || !dst || want > 16 * 1024 * 1024) return false;
      if ((ex.guest_read32(stream + c.closedOffset) | 0) === -1) return false;
      // The routine runs under this lock; another thread holding it may be
      // opening or closing the very stream. Before this stream is native, let
      // the guest wait on it. Once native, keep answering: declining then
      // would run the guest decoder from the position it was left at.
      const locked = !!c.lockAddr && (ex.guest_read32(c.lockAddr + 4) | 0) !== -1;
      if (locked && !this.streams.has(stream)) return false;
      const info = ex.guest_read32(stream + c.infoOffset) >>> 0;
      const src = ex.guest_read32(stream + c.sourceOffset) >>> 0;
      const size = ex.guest_read32(stream + c.sourceOffset + 4) >>> 0;
      if (!info || !src || !size || size > MAX_SOURCE_BYTES) return false;
      const channels = ex.guest_read32(info + 4) | 0;
      const rate = ex.guest_read32(info + 8) | 0;
      if (channels < 1 || channels > 2 || rate < 8000 || rate > 192000) return false;

      const key = `${src}:${size}`;
      const fp = this._fingerprint(ex, src, size);
      let song = this.songs.get(key);
      if (!song || song.fp !== fp || song.channels !== channels || song.rate !== rate) {
        this._startDecode(key, fp, ex, src, size, channels, rate);
        return false;
      }
      if (song.state !== 'ready') return false;

      const pcm = song.bytes;
      const frameBytes = channels * 2;
      const produced = ex.guest_read32(stream + c.producedOffset) >>> 0;

      // Before a song is trusted, one guest-decoded fill is compared with the
      // native PCM at the same position: it proves the browser's samples line
      // up with libvorbis's. A mismatch keeps the guest decoder for the song.
      if (!song.verified) {
        const pending = song.verify;
        if (pending && pending.stream === stream && produced > pending.produced) {
          const n = Math.min(produced - pending.produced, 65536) & ~1;
          const guest = this._readGuest(ex, pending.dst, n);
          let maxDiff = 0;
          const gv = new DataView(guest.buffer), nv = new DataView(pcm.buffer, pcm.byteOffset);
          for (let i = 0; i + 1 < n && pending.produced + i + 1 < pcm.length; i += 2) {
            const d = Math.abs(gv.getInt16(i, true) - nv.getInt16(pending.produced + i, true));
            if (d > maxDiff) maxDiff = d;
          }
          song.verify = null;
          if (n >= 2 && maxDiff <= 64) {
            song.verified = true;
            this.log(`[native-vorbis] verified against libvorbis over ${n} bytes (max diff ${maxDiff})`);
          } else {
            song.state = 'rejected';
            this.log(`[native-vorbis] rejected: differs from libvorbis by up to ${maxDiff} over ${n} bytes`);
            return false;
          }
        } else {
          if (produced + want > pcm.length) return false;
          song.verify = { stream, dst, produced };
          return false;
        }
      }
      let st = this.streams.get(stream);
      if (st && st.key === key && st.fp === fp && produced > st.produced) {
        // The guest routine ran once without us (an error path): it produced
        // that many bytes from a stale position. Stay in time with it.
        st.pos = Math.min(pcm.length, st.pos + (produced - st.produced));
        st.produced = produced;
      }
      if (!st || st.key !== key || st.fp !== fp || st.produced !== produced) {
        // First native answer for this stream, or it was reopened: take over
        // at the guest decoder's position. Past the end the guest has already
        // looped and its position is no longer the counter, so keep it.
        if (produced > pcm.length || produced % frameBytes) return false;
        st = { key, fp, pos: produced, produced };
        this.streams.set(stream, st);
      }

      let done = 0;
      while (done < want) {
        if (st.pos >= pcm.length) {
          if (!loop) break;
          const lo = ex.guest_read32(stream + c.loopOffset) >>> 0;
          const hi = ex.guest_read32(stream + c.loopOffset + 4) >>> 0;
          const dv = new DataView(new ArrayBuffer(8));
          dv.setUint32(0, lo, true); dv.setUint32(4, hi, true);
          const seconds = dv.getFloat64(0, true);
          if (!(seconds >= 0)) break;
          const pos = Math.floor(seconds * rate) * frameBytes;
          if (pos >= pcm.length) break;
          st.pos = pos;
        }
        const n = Math.min(want - done, pcm.length - st.pos);
        this._writeGuest(ex, dst + done, pcm.subarray(st.pos, st.pos + n));
        done += n;
        st.pos += n;
      }
      if (done < want) this._zeroGuest(ex, dst + done, want - done);
      st.produced = (produced + done) >>> 0;
      ex.guest_write32(stream + c.producedOffset, st.produced);
      this.stats.bytes += done;
      ex.set_eax(done);
      ex.set_esp((esp + 16) >>> 0);
      ex.set_eip(ret);
      return true;
    }
  }

  NativeVorbisFill.browserDecodeOgg = browserDecodeOgg;
  NativeVorbisFill.toInt16 = toInt16;
  if (typeof module !== 'undefined' && module.exports) module.exports = { NativeVorbisFill };
  else root.NativeVorbisFill = NativeVorbisFill;
})(typeof globalThis !== 'undefined' ? globalThis : this);
