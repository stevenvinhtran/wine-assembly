'use strict';
// Large heap blocks freed on one guest thread are reusable by every other.
//
// MBAACC creates its textures on loader threads (each its own WASM instance)
// and releases them on the main thread. The freed-large-block list used to be
// a per-instance global, so the main thread's frees were reusable only by the
// main thread: every load on a loader thread reserved fresh address space and
// a fresh arena record, the 1,024-record table filled within a few battles,
// assets stopped loading and operator new finally threw std::bad_alloc.
//
// Here a "loader" instance allocates 2 MB blocks and the "main" instance frees
// them, 3,000 times -- far past the old table -- and every allocation must
// succeed, land on the freed block, and leave the arena count flat. A block
// freed twice must still be refused.
const assert = require('assert');
const { compileSrcWasm } = require('./compile-src');
const sigs = require('../lib/host-import-sigs.generated.json').sigs;
const regions = require('../lib/region-map.generated');

(async () => {
  const module = await WebAssembly.compile(compileSrcWasm());
  const imageBase = 0x400000;
  const memory = new WebAssembly.Memory({ initial: 8192, maximum: 8192, shared: true });
  const host = { memory };
  for (const [n, s] of Object.entries(sigs)) host[n] = s.results?.length ? () => 0 : () => {};
  const main = (await WebAssembly.instantiate(module, { host })).exports;
  const loader = (await WebAssembly.instantiate(module, { host })).exports;
  const other = (await WebAssembly.instantiate(module, { host })).exports;
  main.init_thread(0, imageBase, 0, 0, 0, 0, 0);
  main.heap_init(regions.BASE.GUEST_HEAP_BASE - regions.GUEST_BASE + imageBase);
  loader.init_thread(1, imageBase, 0, 0, 0, 0, 0);
  other.init_thread(2, imageBase, 0, 0, 0, 0, 0);
  const arenas = () => new DataView(memory.buffer).getUint32(regions.BASE.HEAP_ARENAS, true);

  const SIZE = 2 * 1024 * 1024;
  const first = loader.guest_alloc(SIZE) >>> 0;
  assert(first, 'first large block');
  loader.guest_write32(first, 0x11223344);
  assert.strictEqual(main.guest_read32(first) >>> 0, 0x11223344, 'main sees the loader block');
  main.guest_free(first);
  const baseline = arenas();
  let block = 0;
  for (let i = 0; i < 3000; i++) {
    const who = i & 1 ? other : loader;
    block = who.guest_alloc(SIZE) >>> 0;
    assert(block, `large allocation ${i} after cross-thread frees`);
    assert.strictEqual(block, first, `allocation ${i} reuses the block another thread freed`);
    assert.strictEqual(who.guest_read32(block + 64) >>> 0, 0, 'reused large block is zeroed');
    who.guest_write32(block + 64, i + 1);
    main.guest_free(block);
  }
  assert(arenas() <= baseline + 1, `arena records stay flat (was ${baseline}, now ${arenas()})`);
  // Double free: the second is refused, so the block is never on the list twice.
  const a = loader.guest_alloc(SIZE) >>> 0, b = loader.guest_alloc(SIZE) >>> 0;
  assert(a && b && a !== b);
  main.guest_free(a);
  main.guest_free(a);
  const x = other.guest_alloc(SIZE) >>> 0, y = other.guest_alloc(SIZE) >>> 0;
  assert(x && y && x !== y, 'a double-freed block is handed out once');
  console.log(`heap large cross-instance PASS: 3000 loader allocations freed by main, arenas ${baseline} -> ${arenas()}`);
})().catch(err => { console.error(err); process.exitCode = 1; });
