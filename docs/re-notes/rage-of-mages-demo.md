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
