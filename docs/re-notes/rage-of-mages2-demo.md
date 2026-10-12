# Rage of Mages II: Necromancer demo

New, nonpublic candidate selected2026-10-12 after Rage I core gameplay reached
review. No existing candidate/app/task match found before selection.

Original source https://archive.org/details/RageofMagesIINecromancer_1020,
rom2demo.zip40,427,687bytes SHA1
`6657c4937e2be41497ce8f944ad15d86b71ad7ce`, downloaded and verified remotely.
Outer ZIP extracts successfully to rom2demo.exe40,551,863bytes. Nested ZIP SFX
fails 7-Zip with headers/data errors; only partial main.res/world.res result.
Do not launch or reuse those partial files. Byte audit counts150,021LF but
only4CRLF pairs, strongly consistent with destructive text conversion in
compressed data, without proving the historical cause. No emulator run yet.

Independent source https://archive.org/details/gsscda1999,
`1999-09/GS0999.iso`662,108,160bytes. Archive metadata SHA1
`74d2f13d0ccb0e0a4091606b0771bb07ddf7bc44` is not a locally verified whole-disc
hash. Direct range source:
https://ia801500.us.archive.org/4/items/gsscda1999/1999-09/GS0999.iso
ISO9660 directory `DEMOS/RAGE2` contains already unpacked game assets,
ROM2.EXE2,116,608bytes at sector190545, SCENARIO.DLL and SMACKW32.DLL,
resources, README and EULA. Recover these exact extents into a separate
`independent` directory; preserve originals. No installer execution needed.

Evidence `scratch/runs/20261012T0406Z-rage-of-mages2-preflight` includes
source identity, extraction failures, byte audit and directory-reader source/
output. Remote fixture `/home/user/rage-of-mages2-demo-preflight` on temporary
bx_yuwwama5. Next verify recovered PE/imports and bundled instructions, then
bounded launch with complete companion-file mounting. Do not assert gameplay,
audio/FPS, registration or public distribution rights from source acquisition.

Recovery completed04:12Z:17 selected game/data/readme/EULA files downloaded
in1MB ranges with exact length checks, per-file SHA256 recorded in
`independent-files.json` (complete:true). Installer support files were not
needed for this directly runnable payload. README identifies demo15May99,
Win95/98/DirectX5, and warns against dots in the install directory name.
It explicitly lists no sound until the mission starts as a known behavior;
do not report silent menus alone as a new audio bug. Ordinary keys include
M move, A attack, E select mercenaries, Esc menu, F2 save/F3 load and Space
inventory/spellbook. First runtime launch remains untested. Use ROM2.EXE with
all companion files and both SCENARIO.DLL/SMACKW32.DLL available.
