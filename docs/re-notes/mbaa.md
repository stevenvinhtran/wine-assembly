# Melty Blood Actress Again Current Code

Registry id `mbaa` (`lib/apps.js`), executable `binaries/mbaa/MBAA.exe`.
The observations below are for the local executable whose SHA-256 is
`6d1415ca9573100e86a779ac2f81e9bedd322664e3daeae0229a67d13720310a`.

## Package layout

`binaries/mbaa/.wine-assembly-browser.json` mounts `0000.p` through `0008.p`.
The large packs `0000.p`, `0001.p`, `0002.p`, `0003.p`, `0005.p`, and `0007.p`
are lazy HTTP Range files. `0004.p`, `0006.p`, and `0008.p` are required at
launch. The reported association of `0002.p` with character graphics,
`0003.p` with stages, and `0005.p` with stage music still needs a traced asset
lookup; the manifest itself does not assign content types.

The local development server's basic range contract is healthy. A request for
`bytes=1048568-1048583` of `0003.p`, crossing the 1 MiB cache boundary, returned
HTTP 206 with `Content-Range: bytes 1048568-1048583/145540941`; those 16 bytes
matched the same offset in the source file. This rules out a blanket failure to
serve ranges, but not a later request failure or cache-lifetime bug.

## Asset loader disassembly

Reproduce the relevant listings with:

```sh
node tools/disasm_fn.js binaries/mbaa/MBAA.exe \
  413e70,413fb0,414180,414242,4dbe20 90 --linear
```

- `0x413fb0` starts or resumes the loader, then waits on the worker handle at
  `0x413fe1`. `WAIT_IO_COMPLETION` (`0xc0`) and any nonzero result take the
  failure return; `WAIT_OBJECT_0` returns `1`.
- `0x414180` is the worker routine. Its `ReadFile` path starts at `0x4141d2`.
  It explicitly handles `ERROR_IO_PENDING` (`0x3e5`) before continuing and
  returns a status in EAX at `0x41428a`.
- The previous handoff claimed that `0x4dbe40` permanently wrote NULL into an
  asset hash table. The instruction there is `xor edi, edi`; it writes no
  memory. The caller later adds EDI to `[esi+0x7c]` at `0x4dbe9b` and returns
  EDI. A failed load can therefore propagate a zero byte count, but permanent
  table invalidation is not established by this function.

The cooperative lazy-read path has focused coverage in
`test/test-io-wait-threads.js`: an infinite main-thread join remains parked
while the loader's provider fill is pending, remains parked after the bytes
arrive, and completes with `WAIT_OBJECT_0` only when the loader thread exits.

## DirectSound and cooperative wake-up

MBAACC runs with `threads: false`, so its DirectSound and asset workers share
the browser thread through the cooperative scheduler. Async events previously
called `ThreadManager.onRunnable`, but the browser host installed that callback
only from the real-Worker parking path. In cooperative mode, an audio
notification, completed range fill, or worker exit could therefore leave the
host asleep until its polling deadline. `WineAssembly.run()` now installs the
wake callback for both scheduler modes, and cooperative `SetEvent` requests a
host turn without consuming an auto-reset event.

DirectSound cursor origin depends on playback shape. The host reports a
looping ring's absolute position, including the requested start offset. For a
one-shot it reports bytes played within the `start..end` tail. The WAT
`GetCurrentPosition` and `Stop` handlers now add the stored origin only for a
one-shot. Tests cover both paths against the real audio host.

## Current validation boundary

### Browser log: heap exhaustion on entering battle (2026-10-12)

The user's `Desktop/log.txt` contains 1,065 spawned loader threads. At line
3,626 it begins reporting reason-4 heap failures, followed by refused
262,248-byte allocations and eventually even 24-byte allocations. The old
reason-4 label incorrectly said `MAX_VIRTUAL_MAPS`; the call site is actually
`heap_arena_register` failing against the 1,024-entry `HEAP_ARENAS` table.

Each cooperative replacement instantiated a fresh WASM module and allocated
its TLS vector in a new private arena, abandoning the previous instance's
remaining arena capacity and free lists. On slot reuse, ThreadManager now
transfers the exited instance's low/sparse cursors, arena records and both
free lists to its replacement, before TLS allocation. Small-block bins are
flushed first and ownership is removed from the old instance. Live guest
allocations remain valid. This handoff is limited to exited cooperative
threads; it does not share allocator cursors between concurrently live threads
or change the real Worker backend.

`test-heap-arena-tail-reuse.js` exercises 1,040 replacements in each of the low
and sparse heap configurations through the real ThreadManager and compiled
WASM. It checks retained live bytes, small/large free-list transfer, bounded
arena count and a subsequent battle-sized allocation. All 13 cases pass.
Build evidence: `scratch/mbaa-heap-build.log`; test evidence:
`scratch/mbaa-heap-reuse-test.log`. The user reports substantially improved
gameplay with this change, but also new edge-case crashes; their crash log is
still needed to diagnose those separately.

### Music wake budget

`drainCooperativeWakes` previously renewed a 12 ms slice budget inside a loop
that could spend 64 million interpreter steps after input. The browser now
gives an audio-active wake drain one shared 4 ms deadline and 10,000-step
quanta. Unfinished/unvisited wake targets survive for the next turn; pending
audio provider reads no longer hold that bounded drain until network arrival.
This is a cooperative deadline checked between quanta, not a hard execution
time guarantee. Deterministic tests cover deadline sharing, retained targets,
pending I/O and eventual idle completion. Browser FPS improvement has not been
measured, and music decoding itself still consumes interpreter CPU.

### Cooperative AudioWorklet promotion (2026-10-12)

The user reports that the wake-budget change did not resolve music lag.
An additional host-side defect was reproduced in `test-audio-worklet-routing.js`:
the first looping Play starts the lazy worklet module load and falls back to
an AudioBufferSource. Once loading completes, cooperative Unlock calls never
promoted that source because the promotion branch required `ctx.liveAudioRing`,
a flag set only after a real guest Worker starts. Until another Play, every
Unlock decoded/copied the full ring and constructed a replacement source.

Promotion now uses the router's existing shared-memory, loop, capability and
opt-out checks in either scheduler. The test uses the actual audio host and a
delayed module-load stub; it fails before this change and passes afterwards.
Promotion plus 20 refreshes allocate no additional decoded PCM frames or
BufferSources, and preserve the play cursor. Notification and looping/one-shot
cursor tests also pass. Evidence is in `scratch/mbaa-audio-promotion-before.log`
and `scratch/mbaa-audio-promotion-after.log`. The connected browser initially
had no running guest; after launch it reported a suspended AudioContext and
no playing voices. A bounded 20-second sample through the existing profiling
hook recorded no audio events or guest frames and restored its settings.
Consequently this establishes removed host audio work, not a measured gameplay
FPS improvement. The user confirms the lag affects both select and battle.

The full WATX build passes, as do the focused scheduler, wait, positional-read,
DirectSound cursor, ring-wrap, and notification tests. A short headless MBAACC
run reaches only the blank 640x480 startup surface and eagerly mounts files, so
it does not reproduce browser lazy loading or scene transitions. The remaining
questions require manual browser reproduction: guest present rate with BGM,
the first battle's stage/UI assets, and character select after returning from
battle.
