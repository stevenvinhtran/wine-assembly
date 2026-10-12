const assert = require('assert');
const { VirtualFS, createFilesystemImports } = require('../lib/filesystem.js');
const { BytesProvider } = require('../lib/byte-provider.js');

async function testPositionalReads() {
  const vfs = new VirtualFS();
  
  // Create a 4 MB test payload
  const testData = new Uint8Array(4 * 1024 * 1024);
  for (let i = 0; i < testData.length; i++) {
    testData[i] = (i ^ (i >> 8) ^ (i >> 16)) & 0xFF;
  }

  const provider = {
    size: testData.length,
    readRange: (off, len) => Promise.resolve(testData.subarray(off, off + len)),
  };
  vfs.setProviderFile('C:\\0002.p', { provider, length: testData.length });

  const hFile = vfs.createFile('C:\\0002.p', 0x80000000, 3); // GENERIC_READ, OPEN_EXISTING
  assert(hFile > 0, 'File open failed');
  const fh = vfs.getOpenFile(hFile);
  assert(fh, 'Open file handle lookup failed');

  // Initial pos should be 0
  assert.strictEqual(fh.pos, 0, 'Initial fh.pos must be 0');

  // Test 1: readFileAt does not modify fh.pos on cache miss or cache hit
  const buf = new Uint8Array(4096);
  const offset1 = 0x10000; // in chunk 0
  
  const r1 = vfs.readFileAt(hFile, buf, 4096, offset1, 2); // thread 2
  assert(!r1.ok && r1.pending, 'Should be pending cache fill');
  assert.strictEqual(r1.pending.isPositional, true, 'Must be marked isPositional');
  assert.strictEqual(r1.pending.pos, offset1, 'Pending pos must match requested offset');
  assert.strictEqual(fh.pos, 0, 'fh.pos must remain untouched after pending positional read');

  // Fill pending read
  const filled = await vfs.fillPendingRead(r1.pending);
  assert(filled, 'fillPendingRead must succeed');
  assert.strictEqual(fh.pos, 0, 'fh.pos must remain untouched after fillPendingRead');

  // Retry positional read
  const r2 = vfs.readFileAt(hFile, buf, 4096, offset1, 2);
  assert(r2.ok, 'Positional read must succeed on retry');
  assert.strictEqual(r2.bytesRead, 4096, 'Must read 4096 bytes');
  assert.strictEqual(fh.pos, 0, 'fh.pos must NEVER be modified by readFileAt');

  // Verify byte content
  for (let i = 0; i < 4096; i++) {
    assert.strictEqual(buf[i], testData[offset1 + i], `Byte mismatch at index ${i}`);
  }

  // Test 2: Interleaved positional reads across different offsets and threads
  const offset2 = 0x120000; // in chunk 1 (1.125 MB)
  const buf2 = new Uint8Array(2048);
  const r3 = vfs.readFileAt(hFile, buf2, 2048, offset2, 3); // thread 3
  assert(!r3.ok && r3.pending, 'Should be pending for thread 3');
  assert.strictEqual(r3.pending.pos, offset2);

  // While thread 3 is pending, thread 2 reads another cached region from offset1
  const buf1_again = new Uint8Array(1024);
  const r4 = vfs.readFileAt(hFile, buf1_again, 1024, offset1 + 500, 2);
  assert(r4.ok, 'Thread 2 read from cached chunk must succeed');
  assert.strictEqual(fh.pos, 0, 'fh.pos still untouched');

  // Fill thread 3 pending read
  await vfs.fillPendingRead(r3.pending);
  const r5 = vfs.readFileAt(hFile, buf2, 2048, offset2, 3);
  assert(r5.ok, 'Thread 3 retry must succeed');
  assert.strictEqual(r5.bytesRead, 2048);
  assert.strictEqual(fh.pos, 0, 'fh.pos still untouched');

  for (let i = 0; i < 2048; i++) {
    assert.strictEqual(buf2[i], testData[offset2 + i], `Thread 3 byte mismatch at ${i}`);
  }

  // Test 3: fs_read_file_at host import integration
  const RegionMap = require('../lib/region-map.generated');
  const memory = new WebAssembly.Memory({ initial: 8192 });
  const ptes = new Uint32Array(memory.buffer, RegionMap.BASE.GUEST_PAGE_TABLE,
    RegionMap.SIZE.GUEST_PAGE_TABLE >>> 2);
  const page = 0x30000000;
  const backing = RegionMap.BASE.VIRTUAL_BACKING_BASE;
  ptes[page >>> 12] = backing | 0x800;
  ptes[(page >>> 12) + 1] = (backing + 0x1000) | 0x800;
  ptes[(page >>> 12) + 2] = (backing + 0x2000) | 0x800;
  const memBytes = new Uint8Array(memory.buffer);
  const memI32 = new Int32Array(memory.buffer);

  const ctx = {
    getMemory: () => memory.buffer,
    exports: {
      get_image_base: () => 0x400000,
      guest_write32: (addr, val) => {
        // write via page table or backing
        const pte = ptes[addr >>> 12];
        const phys = (pte & ~0xFFF) + (addr & 0xFFF);
        new Int32Array(memory.buffer, phys, 1)[0] = val;
      },
    },
  };
  const imports = createFilesystemImports({ vfs, getMemory: () => memory.buffer, exports: ctx.exports });

  const guestBufGA = page;
  const nReadGA = page + 0x2800;
  const offset3 = 0x350000; // in chunk 3 (3.3125 MB)
  const count = 8192;

  // First call: cache miss -> returns 997
  const err1 = imports.fs_read_file_at(hFile, guestBufGA, count, nReadGA, offset3 & 0xFFFFFFFF, (offset3 / 0x100000000) >>> 0, 2);
  assert.strictEqual(err1, 997, 'Must return 997 (ERROR_IO_PENDING)');
  assert.strictEqual(fh.pos, 0, 'fh.pos must not be mutated by fs_read_file_at');

  const pending3 = vfs.getPendingRead(2);
  assert(pending3, 'Pending read must be registered on thread 2');
  assert.strictEqual(pending3.isPositional, true);

  await vfs.fillPendingRead(pending3);

  // Second call: retry -> succeeds with 0
  const err2 = imports.fs_read_file_at(hFile, guestBufGA, count, nReadGA, offset3 & 0xFFFFFFFF, (offset3 / 0x100000000) >>> 0, 2);
  assert.strictEqual(err2, 0, 'Must return 0 (SUCCESS)');
  const nReadActual = new Int32Array(memory.buffer, backing + 0x2800, 1)[0];
  assert.strictEqual(nReadActual, 8192, 'Bytes read dword must be 8192');
  assert.strictEqual(fh.pos, 0, 'fh.pos must remain 0');

  // Verify memory contents in guest buffer
  for (let i = 0; i < 8192; i++) {
    assert.strictEqual(memBytes[backing + i], testData[offset3 + i], `Guest memory mismatch at ${i}`);
  }

  // Test 4: EOF behavior
  const eofOffset = testData.length + 100;
  const errEOF = imports.fs_read_file_at(hFile, guestBufGA, 100, nReadGA, eofOffset & 0xFFFFFFFF, 0, 2);
  assert.strictEqual(errEOF, 38, 'Must return 38 (ERROR_HANDLE_EOF) when reading at/past EOF');

  console.log('ALL POSITIONAL READ TESTS PASSED!');
}

testPositionalReads().catch(err => {
  console.error('TEST FAILED:', err);
  process.exit(1);
});
