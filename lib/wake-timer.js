// Timers that keep their requested delay on a hidden page.
//
// A hidden tab clamps main-thread setTimeout to about once a second and stops
// requestAnimationFrame outright. A guest that has to keep its own clock --
// boot, a game's frame limiter, a match whose peer never stopped -- would then
// crawl or freeze the moment its window is not in front. A dedicated worker's
// timers are not throttled that way, and its postMessage to the page is an
// ordinary task, so the worker keeps the delay and the page only receives the
// wake. Where there is no Worker (Node tests, a vm context) this is setTimeout.
//
// Measured (Chrome, macOS, hidden tab with no audio): the OS coalesces the
// whole background renderer's timers, a worker's and Atomics.wait included --
// an 8ms timer took 76-180ms. A running AudioContext lifts that (back to
// ~9ms), and an AudioWorklet's render callback is never throttled at all, so
// attachAudio() adds the audio clock as a second wake source: while the page
// is hidden and a deadline is pending, every render quantum (~3ms) checks it.
(function (root) {
  'use strict';
  const SOURCE = 'const t=new Map();onmessage=e=>{const[id,ms]=e.data;'
    + 'if(ms<0){clearTimeout(t.get(id));t.delete(id);return;}'
    + 't.set(id,setTimeout(()=>{t.delete(id);postMessage(id);},ms));};';
  let worker;
  let nextId = 1;
  const callbacks = new Map();
  const deadlines = new Map();
  let audioPort = null, audioTicking = false, audioCtx = null;

  function now() {
    return typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
  }

  function fire(id) {
    const fn = callbacks.get(id);
    callbacks.delete(id);
    deadlines.delete(id);
    if (fn) fn();
  }

  function audioTick() {
    const t = now();
    for (const [id, at] of deadlines) if (at <= t) fire(id);
    if (!deadlines.size && audioTicking) { audioTicking = false; audioPort.postMessage(0); }
  }

  const WORKLET = "registerProcessor('wa-wake-tick',class extends AudioWorkletProcessor{"
    + 'constructor(){super();this.on=0;this.port.onmessage=e=>{this.on=e.data};}'
    + 'process(){if(this.on)this.port.postMessage(0);return true}})';

  // Idempotent per context. The node renders silence into the destination
  // (it has to be pulled to run at all).
  function attachAudio(ac) {
    if (!ac || ac === audioCtx || !ac.audioWorklet || typeof AudioWorkletNode !== 'function') return;
    audioCtx = ac;
    try {
      const url = URL.createObjectURL(new Blob([WORKLET], { type: 'text/javascript' }));
      ac.audioWorklet.addModule(url).then(() => {
        URL.revokeObjectURL(url);
        if (audioCtx !== ac || ac.state === 'closed') return;
        const node = new AudioWorkletNode(ac, 'wa-wake-tick', { numberOfInputs: 0, outputChannelCount: [1] });
        node.connect(ac.destination);
        if (audioPort) { audioPort.onmessage = null; audioPort.postMessage(0); }
        audioPort = node.port;
        audioTicking = false;
        audioPort.onmessage = audioTick;
      }, () => { if (audioCtx === ac) audioCtx = null; });
    } catch (_) {
      audioCtx = null;
    }
  }

  function ensureWorker() {
    if (worker !== undefined) return worker;
    worker = null;
    try {
      if (typeof Worker !== 'function' || typeof Blob !== 'function' || typeof URL === 'undefined') return null;
      const url = URL.createObjectURL(new Blob([SOURCE], { type: 'text/javascript' }));
      worker = new Worker(url);
      URL.revokeObjectURL(url);
      worker.onmessage = e => fire(e.data);
    } catch (_) {
      worker = null;
    }
    return worker;
  }

  const fallback = new Map();

  // Returns an id for clear().
  function set(fn, ms) {
    const w = ensureWorker();
    const id = nextId++;
    if (!w) {
      fallback.set(id, setTimeout(() => { fallback.delete(id); fn(); }, ms));
      return id;
    }
    const delay = Math.max(0, +ms || 0);
    callbacks.set(id, fn);
    w.postMessage([id, delay]);
    if (audioPort && hidden()) {
      deadlines.set(id, now() + delay);
      if (!audioTicking) { audioTicking = true; audioPort.postMessage(1); }
    }
    return id;
  }

  function clear(id) {
    if (!id) return;
    if (fallback.has(id)) { clearTimeout(fallback.get(id)); fallback.delete(id); return; }
    deadlines.delete(id);
    if (!callbacks.delete(id)) return;
    if (worker) worker.postMessage([id, -1]);
  }

  function hidden() {
    return typeof document !== 'undefined' && !!document.hidden;
  }

  const api = { set, clear, hidden, attachAudio };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  root.WaWakeTimer = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
