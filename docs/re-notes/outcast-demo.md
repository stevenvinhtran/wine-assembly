# Outcast demo source preflight

Selected2026-10-12 to refill Rage of Mages II's qualified core lane. No
existing Outcast task or registered candidate/app match found. Source:
https://archive.org/details/gsscda1999, `1999-09/GS0999.iso`, directory
`DEMOS/OUTCAST`. The ISO is662,108,160bytes; Archive metadata SHA1
`74d2f13d0ccb0e0a4091606b0771bb07ddf7bc44` is not a verified whole-disc hash.
Direct range endpoint:
https://ia801500.us.archive.org/4/items/gsscda1999/1999-09/GS0999.iso

ISO9660 directory reads confirm an unpacked EXE/PAK/README layout beside
InstallShield setup files. EXE contains LOADER.EXE1,253,376bytes and
OC1.EXE6,664,192, OC2.EXE6,631,424, OC3.EXE6,647,808. Do not guess which
variant is the intended launcher; inspect bundled guidance and runtime
behavior. README includes OUTCAST_DEMO.EXE360,508bytes plus a27-byte README,
so that small EXE must not be mistaken for the actual game.

Evidence `scratch/runs/20261012T0430Z-outcast-preflight` preserves range-reader
scripts, directory output and complete extents for EXE/PAK/README children.
Remote metadata `/home/user/outcast-demo-preflight/disc-source.json` on
bx_f7mupqaw. No game payload downloaded or runtime launched yet. Next recover
the named executable/asset tree on a temporary box, record per-file hashes,
read guidance/imports and attempt a bounded launcher route. No source edit,
gameplay/audio/FPS/registration/public-distribution qualification claimed.
