# Rage of Mages demo preflight

Source: https://archive.org/details/RageofMages_1020 (item labels it Demo).
Download: https://archive.org/download/RageofMages_1020/romdemo.zip
34,080,548 bytes; SHA1 `808a0d8a0af3ec5e8b881deee666384cd2f4ed1e`.
Fetched and hash-verified on temporary bx_n9yzd3f9, 2026-10-12.
Private compatibility fixture; no public redistribution/deployment assumed.

ZIP extraction succeeds: RoMDemo.exe and RoMDemo.r00 through .r10.
The EXE is a multipart solid RAR SFX, not yet the game executable. 7-Zip23.01
reports Headers Error, Unexpected end of archive, and Unsupported Method for
rom.exe. Its output rom.exe is zero bytes and must not be launched or treated
as a valid extraction. Source archive is retained unchanged under
`/home/user/rage-of-mages-demo-preflight/` on the temporary box.

Next try a compatible RAR reader, verify extracted PE/imports and bundled
instructions, then run a bounded launch. No launch, gameplay, screenshot,
audio/FPS or registration qualification yet. This refills Oni's core lane
after its registered browser gameplay reached ops review.

unrar-free0.1.3 rejects the SFX; a separate copy with the63388-byte SFX
prefix stripped still fails (Bad RAR file). Ubuntu unrar7.0.7 also reports
rom.exe checksum error/Unexpected end of archive. No reader produced a
verified payload. Do not call this an emulator crash or conclude corruption
solely from these readers. Next inspect volume format/continuation headers
and compare an independent demo source or older compatible reader.
Exact logs/source identity: `scratch/runs/20261012T0320Z-rage-of-mages-preflight`.

## Volume audit, 2026-10-12 03:33 UTC

Fresh snapshot fork bx_5avf2969 retains the original files unchanged. All
12 volumes have valid RAR signatures (SFX offset 63388, others offset 0).
The full-sized continuation volumes vary from 2,915,138 to 2,915,171 bytes,
despite matching packed-length headers in r00 through r04. Counting newline
bytes gives 8,314–11,951 LF bytes per volume, but **zero or one CRLF pair**
in each continuation volume (two in the SFX). This is strong evidence
consistent with destructive text-mode newline conversion of compressed data;
the historical transfer mechanism remains unproven. A reader-version change
alone is unlikely to recover missing bytes. Do not insert CR before every LF:
original bare LF bytes cannot be distinguished from converted CRLF that way.

Reproduction and full counts are `audit-volumes.js` / `volume-audit.json`
in the same evidence directory. No guest execution or binary repair attempted.
The forum's romdemo.zip link points back to this same Archive item and is not
an independent source. A separate candidate is GameStar's October 1998 disc:
publisher contents https://download.gamestar.de/public/33400/33409/10_1998_cd.pdf
lists `Demos\\Rom\\Romdemo.exe`; Archive item `GSCDA1998` contains
`1998-10/GS1098.ISO`. A bounded ISO9660 HTTP-range reader is checking that
directory, without downloading the full 672 MB disc to the persistent box.
The directory is confirmed: ROMDEMO.EXE is 42,111,946 bytes at ISO sector
197989, with README.TXT, INFO.TXT and CDV.TXT alongside it. The first large
HTTP range timed out after 90 seconds; directory evidence is preserved in
`disc-fetch.log`. This is an independent candidate, not yet a verified payload.
The follow-up 1 MB chunked transfer returned HTTP 500. Retained partial bytes
are unverified and must not be extracted/launched as a complete installer.
Next resume this exact independent source when its HTTP service responds;
do not retry the damaged multipart ZIP with further readers. The temporary
box was stopped after this source-only investigation; no browser/CLI slot used.
