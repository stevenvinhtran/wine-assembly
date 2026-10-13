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

### Visible-browser CPU comparison (2026-10-12)

Run evidence: `scratch/runs/mbaa-lag-20261012/browser-profile.json`, collected
from the existing local browser on engine `a6ce9c300` using the built-in host
and thread profiling hooks and `WinePerf`. No screenshot establishes which
exact scene was displayed; the user was asked to remain on a laggy screen.
The first sample counted 10 visible seconds. The comparison then counted
5 visible seconds normally, 5 with only the worker whose entry is `0x40faf0`
suspended, and 5 after restoring its original suspend count. A 60-second
timeout also restored the worker. Reported rates are guest presentations,
not a separately verified game simulation/frame counter.

| Sample | Guest presentations/sec | Step p90 |
| --- | ---: | ---: |
| Normal playback | 17.94 | 22.16 ms |
| Music worker temporarily suspended | 31.00 | 9.64 ms |
| Worker restored | 15.56 | 17.65 ms |

The restored phase includes decoder catch-up after the pause; it is not an
independent steady-state benchmark. Some mouse movement occurred during the
suspended phase, so the comparison is evidence of a large decoder cost, not
a precise speedup guarantee across all scenes.

During the initial 10-second sample, worker `0x40faf0` used 4,190.5 ms across
1,789 slices, while worker `0x489b80` used only 4.4 ms. Decoder samples fall in
`0x4fxxxx`–`0x512xxx`; disassembly includes floating-point PCM conversion at
`0x4f4465`. Main-thread samples remain concentrated in the game's resource/
scene routines around `0x4bdfxx`, `0x4be3xx`, `0x4c03xx`, and `0x4c1bxx`, plus
its timing routine at `0x41fexx`. End-of-slice locations are directional
evidence, not exact per-function CPU attribution. The low compositor timing
does not rule out graphics work performed inside guest execution.

The output-only silent trial could not exclude decoder overhead. The worker
pause improves throughput but does not reach 60, so neither muting nor the
worklet promotion alone resolves the remaining lag. Further optimization needs
to address both guest decoder and main-thread execution costs; no additional
unmeasured scheduler changes were made for this comparison.

Music was restored and verified: the persistent suppression key was removed,
`suppressLoopingOutput` is false, music-thread suspend count is zero, and the
active looping voice is on AudioWorklet. All temporary profiling hooks and the
main-slice wrapper restored themselves.

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

For the user's requested music-off comparison, browser localStorage key
`mbaa.disableMusicOutput=1` now suppresses looping DirectSound output at MBAACC
launch. Unlike the earlier temporary page monkey-patch, it survives reloads.
It preserves simulated playback/cursor state and notifications, and permits
one-shot effects. This isolates host looping output, not guest music decoding;
it must not be described as disabling all music CPU work. Remove the key and
relaunch to restore normal output. The routing suite covers silent looping
Play/Unlock, advancing cursor, Stop and an audible one-shot (44 checks pass).

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

### Browser frame-rate profile after the color-target fix (2026-10-13)

Evidence: `scratch/runs/mbaa-fps-claude-20261012/` (`perf.ndjson` from
`?perf-stream`, a DevTools trace summary, and a `probe` session recorded with
`window.__waProfileThreadRun` plus per-present timestamps). All on the
cooperative backend; the user drove the UI.

- A DevTools trace attributed 26% of all main-thread time to `gl.getError`
  inside `GpuBackend.bindColorResource`: every draw into the game's explicit
  color target saved and reloaded it. Fixed in `41644a0eb`; menus went from
  ~34 to ~58 presents/s and guest execution fell to ~30% of wall time.
- Music decode bursts (every ~2 s) are spread by `audioThreadStepMs: 1.5`
  (`63e786a08`). Before the color fix the same cap made no visible difference
  because the page was CPU-bound.
- `?force-threads` froze entering a training-mode battle. The chunk cache does
  not thrash: a character-select session made 30 range requests, none repeated.

Remaining costs, with addresses:

- **58.15 presents/s ceiling.** Present intervals on idle menus are
  17.1-17.3 ms. `QueryPerformanceCounter` is built from millisecond ticks
  (`$handle_QueryPerformanceCounter`), and the limiter (`0x41fd60` ->
  `0x41feb0`, period `1/60` at `0x53de08`/`0x53d680`, `Sleep(8)` or
  `Sleep(2)` while early) cannot see 16.67 ms, only 16 then 17.
- **Battle music.** Thread entry `0x40faf0` used 250-560 ms per second in
  battle. A third of it ends in the libVorbis float-to-int16 loop
  `0x4f4465`-`0x4f44a4` (`fld`, `fmul m64`, `fstp m64`, `fld m64`, `fistp`,
  clamp, strided 16-bit store); the rest in `0x4f9xxx`, `0x500xxx`,
  `0x505c90`, `0x512820`.
- **Battle load.** Thread entry `0x49ee00` spent ~8.3 s of CPU, mostly in the
  8bpp-to-BGRA palette expansion loops `0x402fe0` (alpha = index != 0) and
  `0x403060` (alpha from the palette), plus guest memcpy `0x4e6400`.
- **Character-select cursor.** Thread entry `0x489b80` used up to ~300 ms per
  second, mostly in relocated `d3dx9_36.dll` code (`0xbbfcxx`, `0xbf8070`)
  and `0x4031xx`.
- The asset loader `0x414180` reads in `[esi+0x50]`-byte chunks with
  `Sleep([esi+0x54])` between them, while `0x413fb0` blocks the main thread
  on the loader with `WaitForSingleObjectEx(INFINITE)`.

### Heap leak: one retained WASM instance per guest thread (2026-10-13)

A DevTools heap snapshot after character select -> battle -> character select
held 1,513 live `WasmTrustedInstanceData` (about 3.2M exported-function
wrappers, roughly 450 MB of V8 heap). The 120 major GCs in the matching trace
took about 200 ms each, which was half of all main-thread time, and the page
later crashed. Retainer path: `WineRecorder._pumps` (Set) -> `_pumpAudioTap`
-> host-audio closure -> the thread's host imports -> `workerInstance`. Every
cooperative thread registered a recorder pump and nothing removed it, and MBAA
spawns a loader thread per asset. The pumps are now keyed by the shared voices
table (`host.js` `registerPump(fn, key)`), and
`test-audio-tap-pump-leak.js` guards it. The 2.1 GB ArrayBuffer in the snapshot
is guest memory; the other ArrayBuffers are about 0.45 GB, mostly D3D9
texture snapshots.

Character select after the fix is still one core: the scroll loader thread runs
5-12M blocks/s while the main thread is parked 50-75% of the time (perf-stream
`counters`). Real parallelism needs the Worker backend, whose
`GuestThreadHost.spawnThread` boots a fresh Worker per thread and never reuses
slots, the probable cause of the `?force-threads` freeze entering battle.
