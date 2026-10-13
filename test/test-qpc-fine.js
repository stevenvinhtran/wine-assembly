#!/usr/bin/env node

'use strict';

// Fine QueryPerformanceCounter ($qpc_fine).
//
// MBAACC's limiter (0x41ffd0) polls QPC until 1/60 s has passed since the
// reading that ended the previous wait, then restarts from the current
// reading. With QPC built from whole milliseconds and the clock-spin park
// waking on the next millisecond, it saw 16 ms (early) and then 17 ms, every
// frame: 58.15 presents/s in the browser.
//
// This drives that limiter shape against the real handler on a synthetic
// microsecond clock. Each park wakes at the deadline the module names, plus a
// little host latency. Coarse mode must keep its old behaviour; fine mode must
// learn the period and bring the frame time to within a poll of 16.667 ms.

const path = require('path');
const fs = require('fs');

const IMAGE_BASE = 0x400000;
const WASM = path.join(__dirname, '..', 'build', 'wine-assembly.wasm');
const PARKED = 1, RETURNED = 16;
const PERIOD_US = 16667, WORK_US = 2000, POLL_US = 20, WAKE_LATENCY_US = 60;

let pass = 0, fail = 0;
const check = (name, ok, detail) => {
  if (ok) { pass++; console.log(`  ok   ${name}`); }
  else { fail++; console.log(`  FAIL ${name}${detail ? '  ' + detail : ''}`); }
};

async function boot() {
  const { createHostImports } = require('../lib/host-imports');
  const memory = new WebAssembly.Memory({ initial: 8192, maximum: 8192, shared: true });
  const clock = { us: 5000000 };
  const ctx = {
    getMemory: () => memory.buffer,
    resourceJson: { menus: {}, dialogs: {}, strings: {}, bitmaps: {} },
    onExit: () => {},
    guestNowMs: () => Math.floor(clock.us / 1000),
    guestNowUs: () => clock.us,
  };
  const base = createHostImports(ctx);
  base.host.memory = memory;
  for (const stub of ['create_thread', 'exit_thread', 'terminate_thread', 'create_event',
    'set_event', 'reset_event', 'wait_single', 'wait_multiple']) base.host[stub] = () => 0;
  const { instance } = await WebAssembly.instantiate(fs.readFileSync(WASM), base);
  ctx.exports = instance.exports;
  instance.exports.init_thread(1, IMAGE_BASE, 0, 0, 0, 0, 0);
  return { e: instance.exports, clock, memory };
}

// Run `frames` limiter frames; returns the trigger-to-trigger periods in µs.
function runLimiter(e, clock, memory, frames) {
  const RegionMap = require('../lib/region-map.generated');
  const COUNT = IMAGE_BASE + 0x3000;
  const countAt = RegionMap.g2w(COUNT, IMAGE_BASE);
  const read = () => {
    const v = new DataView(memory.buffer, countAt, 8);
    return v.getUint32(0, true) + v.getUint32(4, true) * 2 ** 32;
  };
  const periods = [];
  let start = -1;
  for (let f = 0; f < frames; f++) {
    e.test_spin_other_call();           // the frame's own API work
    clock.us += WORK_US;
    for (let guard = 0; guard < 100000; guard++) {
      const bits = e.test_qpc_spin_once(COUNT) >>> 0;
      if (bits & PARKED) {
        // The host sleeps to the named millisecond, then re-enters the call.
        clock.us = Math.max(clock.us, e.get_spin_deadline_ms() * 1000) + WAKE_LATENCY_US;
        continue;
      }
      if (!(bits & RETURNED)) throw new Error('QPC neither parked nor returned');
      const now = read();
      if (start < 0) { start = now; break; }
      if (now - start >= PERIOD_US) { periods.push(now - start); start = now; break; }
      clock.us += POLL_US;
    }
  }
  return periods;
}

const mean = a => a.reduce((s, v) => s + v, 0) / a.length;

async function main() {
  const { e, clock, memory } = await boot();
  check('fine QPC is off unless an app opts in', (e.get_qpc_fine_unparked() >>> 0) === 0);

  // ---- coarse: the old millisecond behaviour, unchanged ----------------
  e.test_spin_reset();
  e.set_qpc_fine(0);
  const coarse = runLimiter(e, clock, memory, 60).slice(20);
  const coarseMean = mean(coarse);
  console.log(`  coarse mean ${coarseMean.toFixed(1)} µs`);
  check('coarse QPC still quantises the 1/60 s limiter to >= 17 ms frames',
    coarseMean >= 17000, `mean ${coarseMean.toFixed(0)} µs`);
  check('coarse QPC never answers inside a learned window',
    (e.get_qpc_fine_unparked() >>> 0) === 0);

  // ---- fine: learns the period and stops parking just before it --------
  e.test_spin_reset();
  e.set_qpc_fine(1);
  const all = runLimiter(e, clock, memory, 60);
  const fine = all.slice(20);
  const fineMean = mean(fine);
  console.log(`  fine mean ${fineMean.toFixed(1)} µs`);
  check('fine QPC brings the limiter to within a poll of 16.667 ms',
    fineMean >= PERIOD_US && fineMean < PERIOD_US + 3 * POLL_US,
    `mean ${fineMean.toFixed(1)} µs`);
  check('every settled frame is within a poll of the period',
    fine.every(p => p >= PERIOD_US && p < PERIOD_US + 2 * POLL_US),
    `range ${Math.min(...fine)}..${Math.max(...fine)}`);
  const learned = e.get_qpc_fine_period_us() >>> 0;
  check('the learned period is the limiter period', Math.abs(learned - PERIOD_US) < 3 * POLL_US,
    `learned ${learned}`);
  check('the window is narrow: most of each wait still parks',
    (e.get_clock_spin_parks() >>> 0) > 60 * 5, `parks ${e.get_clock_spin_parks() >>> 0}`);
  const unparked = e.get_qpc_fine_unparked() >>> 0;
  check('reads answered inside the window stay near one millisecond of polling per frame',
    unparked > 0 && unparked <= 60 * Math.ceil(1000 / POLL_US) + 60,
    `unparked ${unparked}`);

  // ---- the QPC count is microseconds, monotonic -------------------------
  const RegionMap = require('../lib/region-map.generated');
  const COUNT = IMAGE_BASE + 0x3000;
  const countAt = RegionMap.g2w(COUNT, IMAGE_BASE);
  e.test_spin_reset();
  clock.us += 123;
  e.test_spin_other_call();
  e.test_qpc_spin_once(COUNT);
  const v = new DataView(memory.buffer, countAt, 8);
  const got = v.getUint32(0, true) + v.getUint32(4, true) * 2 ** 32;
  check('a fine read returns the microsecond clock', got >= clock.us && got < clock.us + 100,
    `got ${got} clock ${clock.us}`);

  e.set_qpc_fine(0);
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
}

main().catch(err => { console.error(err); process.exit(1); });
