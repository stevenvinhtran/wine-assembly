'use strict';
// Every guest thread builds its own host imports. host-audio registers an
// audio-tap pump for the frozen recorder, and that pump's closure reaches the
// thread's whole WASM instance. Registered per thread with no key, the
// browser recorder kept one pump -- and one dead instance -- per thread ever
// spawned (MBAACC: 1,513 instances, ~1.2GB of heap, then OOM). The pump is now
// keyed by the shared voices table, so all threads of a process collapse to one.
const assert = require('assert');
const { createHostImports } = require('../lib/host-imports');

const registry = new Map();
const register = (fn, key) => registry.set(key || fn, fn);
const sharedAudio = {};
const memory = new WebAssembly.Memory({ initial: 1, maximum: 1, shared: true });
for (let tid = 0; tid < 50; tid++) {
  createHostImports({ threadId: tid, sharedAudio, registerAudioTapPump: register,
    getMemory: () => memory.buffer, exports: null });
}
assert.strictEqual(registry.size, 1, `one pump per shared voices table (got ${registry.size})`);
console.log('audio tap pump PASS: 50 thread import sets register one recorder pump');
