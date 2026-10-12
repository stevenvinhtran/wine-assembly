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

The full WATX build passes, as do the focused scheduler, wait, positional-read,
DirectSound cursor, ring-wrap, and notification tests. A short headless MBAACC
run reaches only the blank 640x480 startup surface and eagerly mounts files, so
it does not reproduce browser lazy loading or scene transitions. The remaining
questions require manual browser reproduction: guest present rate with BGM,
the first battle's stage/UI assets, and character select after returning from
battle.
