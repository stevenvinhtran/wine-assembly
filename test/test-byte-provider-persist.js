'use strict';
// HttpRangeProvider's persistent range cache: a range is fetched once, then
// served from Cache Storage (here an in-memory stand-in) by every later
// provider of the same file; a bad cached entry falls back to the network.
const assert = require('assert');
const store = new Map();
global.caches = { open: async () => ({
  match: async key => store.has(key) ? { arrayBuffer: async () => store.get(key).buffer.slice(0) } : undefined,
  put: async (key, res) => { store.set(key, new Uint8Array(await res.arrayBuffer())); },
}) };
global.Response = class { constructor(body) { this.body = body; } async arrayBuffer() { return this.body.buffer.slice(this.body.byteOffset, this.body.byteOffset + this.body.byteLength); } };
const { HttpRangeProvider, rangeCacheKey } = require('../lib/byte-provider');
const file = new Uint8Array(4096).map((_, i) => i * 7);
let fetches = 0;
const fetch = async (url, init) => {
  fetches++;
  const [, a, b] = init.headers.Range.match(/bytes=(\d+)-(\d+)/);
  return { status: 206, headers: { get: () => null }, arrayBuffer: async () => file.slice(+a, +b + 1).buffer };
};
(async () => {
  const p1 = new HttpRangeProvider('https://site/game.p', 4096, { persist: true, fetch });
  assert.deepStrictEqual(await p1.readRange(1024, 1024), file.slice(1024, 2048));
  await new Promise(r => setTimeout(r, 10));
  assert.strictEqual(fetches, 1);
  const p2 = new HttpRangeProvider('https://site/game.p', 4096, { persist: true, fetch });
  assert.deepStrictEqual(await p2.readRange(1024, 1024), file.slice(1024, 2048));
  assert.strictEqual(fetches, 1, 'second session: served from disk');
  store.set(rangeCacheKey('https://site/game.p', 0, 512, 4096), new Uint8Array(3));   // damaged entry
  assert.deepStrictEqual(await p2.readRange(0, 512), file.slice(0, 512));
  assert.strictEqual(fetches, 2, 'a damaged entry is refetched');
  const plain = new HttpRangeProvider('https://site/game.p', 4096, { fetch });
  await plain.readRange(1024, 1024);
  assert.strictEqual(fetches, 3, 'without persist: always the network');
  console.log('byte provider persist PASS');
})().catch(e => { console.error(e); process.exitCode = 1; });
