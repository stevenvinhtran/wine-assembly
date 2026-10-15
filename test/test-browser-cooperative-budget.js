#!/usr/bin/env node
'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const context = { console, URLSearchParams, performance: { now: () => 0 } };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'host.js'), 'utf8') +
  '\n;globalThis.WineAssembly = WineAssembly;', context);

function fixture({ cost = 0.02, halt = 1, yieldReason = 0, frozen = false,
  retired = n => n } = {}) {
  let now = 0, last = 0;
  const calls = [];
  const wine = Object.create(context.WineAssembly.prototype);
  wine._frozen = frozen;
  wine._audioSchedulerNow = () => now;
  wine.instance = { exports: {
    run(n) { calls.push(n); last = retired(n); now += cost * n; },
    get_last_run_blocks: () => last,
    get_last_run_halt: () => halt,
    get_yield_reason: () => yieldReason,
    get_eip: () => 0x401000,
  } };
  return { wine, calls };
}

{
  const { wine, calls } = fixture();
  const result = wine._runCooperativeSlice(500000);
  assert(result.hitDeadline);
  assert(result.elapsedMs >= 8 && result.elapsedMs < 10);
  assert(result.blocks < 500000);
  assert(calls.length > 1);
  assert.strictEqual(result.blocks, calls.reduce((a, b) => a + b, 0));
}
for (const options of [{ halt: 3 }, { halt: 5 }, { yieldReason: 1 },
  { retired: () => 0 }]) {
  const { wine, calls } = fixture(options);
  const result = wine._runCooperativeSlice(500000);
  assert.strictEqual(calls.length, 1, 'yield/debug/zero-work must return to host');
  assert.strictEqual(result.hitDeadline, false);
}
{
  const { wine, calls } = fixture({ cost: 1 });
  const first = wine._runCooperativeSlice(500000);
  assert.strictEqual(calls.length, 1, 'one expensive native call cannot be preempted');
  assert(first.hitDeadline && first.elapsedMs > 8, 'the deadline is a between-call bound');
  assert.strictEqual(wine._cooperativeQuantumBlocks, 1, 'adapt down after an expensive phase');
  const next = wine._runCooperativeSlice(500000);
  assert(next.hitDeadline && next.elapsedMs === 8);
}
{
  const { wine, calls } = fixture({ cost: 0 });
  const result = wine._runCooperativeSlice(300);
  assert.deepStrictEqual(calls, [128, 128, 44]);
  assert.strictEqual(result.blocks, 300);
  assert.strictEqual(result.hitDeadline, false);
}
{
  const { wine, calls } = fixture({ frozen: true });
  const result = wine._runCooperativeSlice(10000);
  assert.deepStrictEqual(calls, [10000], 'frozen stepping keeps deterministic budget');
  assert.strictEqual(result.blocks, 10000);
  assert.strictEqual(result.hitDeadline, false);
}
{
  const { wine, calls } = fixture({ retired: () => 7, halt: 3 });
  assert.strictEqual(wine._runCooperativeSlice(10000).blocks, 7,
    'account retired blocks, never the requested budget');
  assert.strictEqual(calls.length, 1);
}

// A controller park is a deadline, not a per-scheduler-turn delay. Worker
// threads may keep turns flowing while the game frame remains parked.
{
  let now = 100;
  context.WineAssembly._wallNow = () => now;
  const wine = Object.create(context.WineAssembly.prototype);
  assert.strictEqual(wine._mbaaFrameParkDelay(16), 16);
  now = 110;
  assert.strictEqual(wine._mbaaFrameParkDelay(16), 6, 'a retry keeps the original deadline');
  now = 116;
  assert.strictEqual(wine._mbaaFrameParkDelay(16), 0, 'the deadline expires once');
  assert.strictEqual(wine._mbaaFrameParkDelay(80), 50, 'new parks are bounded by the scheduler cap');
}
console.log('PASS cooperative wall budget, actual work, yields, and frozen stepping');
