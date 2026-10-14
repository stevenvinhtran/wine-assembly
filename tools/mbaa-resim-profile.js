#!/usr/bin/env node
// Where MBAACC's rollback re-simulation spends its time.
//
//   node tools/mbaa-resim-profile.js <perf.ndjson> [session] [--top=40]
//
// Reads the newest `rollback.resimProfile` (block-entry counts on the main
// guest thread during profiled self-test re-runs, lib/mbaa-rollback.js) from
// a perf stream, weights each block by its instruction count, and reports
//   - instructions per re-run frame;
//   - the hottest functions (exclusive), entry found by a recursive-descent
//     walk of the game's direct calls from the frame function 0x40E390;
//   - the frame function's stages (its direct callees) with the inclusive
//     share of every function reachable from each, so the stage to attack
//     is visible.
// A function reachable from several stages is credited to the first.
'use strict';
const fs = require('fs');
const path = require('path');
const { readPE } = require(path.join(__dirname, '..', 'lib', 'pe.js'));
const { disasmAt } = require('./disasm');

const args = process.argv.slice(2);
const file = args.find(a => !a.startsWith('--'));
const session = args.filter(a => !a.startsWith('--'))[1] || null;
const top = +((args.find(a => a.startsWith('--top=')) || '--top=40').slice(6));
const exePath = path.join(__dirname, '..', 'binaries', 'mbaa', 'MBAA.exe');
const FRAME_FN = 0x40E390;

if (!file) { console.error('usage: mbaa-resim-profile.js <perf.ndjson> [session] [--top=N]'); process.exit(1); }

// ---- newest profile (the stream can be hundreds of MB: read from the end) ----
function newestProfile() {
  const fd = fs.openSync(file, 'r');
  const size = fs.fstatSync(fd).size;
  const chunk = 8 << 20;
  let end = size, tail = '';
  while (end > 0) {
    const start = Math.max(0, end - chunk);
    const buf = Buffer.alloc(end - start);
    fs.readSync(fd, buf, 0, buf.length, start);
    const lines = (buf.toString('utf8') + tail).split('\n');
    tail = start > 0 ? lines.shift() : '';
    for (let i = lines.length - 1; i >= 0; i--) {
      const line = lines[i];
      if (!line.includes('"resimProfile"')) continue;
      let d; try { d = JSON.parse(line); } catch (_) { continue; }
      if (session && d.session !== session) continue;
      const p = d.rollback && d.rollback.resimProfile;
      if (p && p.blocks && p.blocks.length) { fs.closeSync(fd); return { d, p }; }
    }
    end = start;
  }
  fs.closeSync(fd);
  return null;
}

// ---- the executable --------------------------------------------------------------
const buf = fs.readFileSync(exePath);
const pe = readPE(buf);
const text = pe.sections.find(s => s.name.startsWith('.text'));
const lo = text.va, hi = lo + text.rawSize;   // readPE gives absolute VAs
const inExe = va => va >= lo && va < hi;
const off = va => va - lo + text.rawOff;

const insnCache = new Map();
function insn(va) {
  if (insnCache.has(va)) return insnCache.get(va);
  let r = null;
  if (inExe(va)) {
    const line = disasmAt(buf, off(va), va, 2)[0] || '';
    const m = line.match(/^([0-9a-f]{8})\s+((?:[0-9a-f]{2} )+)\s*(\S+)\s*(.*)$/);
    if (m) {
      const len = m[2].trim().split(' ').length;
      const op = m[3], arg = m[4];
      const t = arg.match(/^(?:short )?0x([0-9a-f]+)$/);
      r = { va, len, op, target: t ? parseInt(t[1], 16) : null };
    }
  }
  insnCache.set(va, r);
  return r;
}
const isJcc = op => /^j(?!mp)/.test(op);
const isEnd = op => op === 'ret' || op === 'retn' || op === 'jmp' || op === 'hlt' || op === 'int3';

// Instructions from a block entry to its first control transfer.
function blockLength(va) {
  let n = 0;
  for (let p = va; n < 400; ) {
    const i = insn(p);
    if (!i) return Math.max(1, n);
    n++;
    if (isEnd(i.op) || isJcc(i.op) || i.op === 'call') return n;
    p += i.len;
  }
  return n;
}

// Recursive descent: the instructions a function owns and its direct calls.
const fnCache = new Map();
function walk(entry) {
  if (fnCache.has(entry)) return fnCache.get(entry);
  const owned = new Set(), calls = new Set();
  const work = [entry];
  while (work.length && owned.size < 20000) {
    let p = work.pop();
    while (!owned.has(p)) {
      const i = insn(p);
      if (!i) break;
      owned.add(p);
      if (i.op === 'call' && i.target) calls.add(i.target);
      if (isJcc(i.op) && i.target) work.push(i.target);
      if (i.op === 'jmp') {
        if (i.target && Math.abs(i.target - entry) < 0x4000) work.push(i.target);
        else if (i.target) calls.add(i.target);   // tail call
        break;
      }
      if (i.op === 'ret' || i.op === 'retn' || i.op === 'int3') break;
      p += i.len;
    }
  }
  const fn = { entry, owned, calls: [...calls] };
  fnCache.set(entry, fn);
  return fn;
}

// ---- main ----------------------------------------------------------------------
const found = newestProfile();
if (!found) { console.error('no rollback.resimProfile in that stream (run Training with ?perf-stream&rollback-test)'); process.exit(1); }
const { d, p } = found;
const frames = p.frames;

// Every function reachable from the frame function, and its stage.
const stages = walk(FRAME_FN).calls.filter(inExe);
const stageOf = new Map();          // function entry -> stage entry
const owner = new Map();            // instruction va -> function entry
for (const s of [FRAME_FN, ...stages]) {
  const queue = [s];
  while (queue.length) {
    const f = queue.shift();
    if (stageOf.has(f) || !inExe(f)) continue;
    stageOf.set(f, s === FRAME_FN ? FRAME_FN : s);
    const fn = walk(f);
    for (const va of fn.owned) if (!owner.has(va)) owner.set(va, f);
    if (f !== FRAME_FN || s === FRAME_FN) for (const c of fn.calls) if (!(s === FRAME_FN && stages.includes(c))) queue.push(c);
  }
}

let total = 0, outside = 0, unowned = 0;
const byFn = new Map(), byStage = new Map();
for (const [eip, count] of p.blocks) {
  const w = inExe(eip) ? blockLength(eip) * count : count;   // other modules: 1 per block
  total += w;
  if (!inExe(eip)) { outside += w; continue; }
  const f = owner.get(eip);
  if (f === undefined) { unowned += w; byFn.set(`?${eip.toString(16)}`, (byFn.get(`?${eip.toString(16)}`) || 0) + w); continue; }
  byFn.set(f, (byFn.get(f) || 0) + w);
  const s = stageOf.get(f);
  byStage.set(s, (byStage.get(s) || 0) + w);
}
const pct = v => (100 * v / total).toFixed(1).padStart(5) + '%';
const hex = v => typeof v === 'number' ? '0x' + v.toString(16) : v;

console.log(`session ${d.session}: ${frames} profiled re-run frames, ${p.distinct} distinct blocks`);
console.log(`~${Math.round(total / frames).toLocaleString()} instructions per re-run frame` +
  ` (outside MBAA.exe ${pct(outside)}, not reached from 0x40e390 ${pct(unowned)})`);
const timing = d.rollback.resimGuestMsPerFrame || [];
if (timing.length) console.log(`timed re-runs: guest ${timing.slice(-5).join(', ')} ms/frame`);
console.log('\nFrame stages (inclusive):');
for (const [s, w] of [...byStage].sort((a, b) => b[1] - a[1])) console.log(`  ${hex(s).padEnd(10)} ${pct(w)}`);
console.log(`\nHottest functions (exclusive, top ${top}):`);
for (const [f, w] of [...byFn].sort((a, b) => b[1] - a[1]).slice(0, top)) {
  console.log(`  ${hex(f).padEnd(10)} ${pct(w)}  stage ${hex(stageOf.get(f) || '?')}`);
}

// Stage timings from the checkpoint hooks (medians, ms).
const st = d.rollback.stages;
if (st && st.stages) {
  console.log(`\nStage times, median ms (re-run ${st.resimFrames} frames, normal ${st.normalFrames}):`);
  st.stages.forEach((name, i) => {
    const r = st.resimMs[i], n = st.normalMs[i];
    console.log(`  ${String(name).padEnd(10)} re-run ${r == null ? '-' : r.toFixed(3).padStart(7)}   normal ${n == null ? '-' : n.toFixed(3).padStart(7)}`);
  });
}
