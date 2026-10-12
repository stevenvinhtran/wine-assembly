# Urban Chaos demo

Source https://archive.org/details/urbanchaos, urbanchaos.zip26,328,920bytes,
SHA1 ba06b6ca040359ac07dd60ca75d680c9f2b5d15c verified after resumed download
2026-10-12 05:10Z. Public endpoint returned500; direct endpoint
https://ia601406.us.archive.org/34/items/urbanchaos/urbanchaos.zip resumed the
partial8.9MB file. Evidence0504Z preflight and0509Z recovery under scratch/runs/.

ZIP contains Demo.exe26,397,184bytes (WinZip SFX) and readme.rtf. 7z extracts
387files; unshield extracts752files from installer/data1.cab. Flatten the three
groups Global_Media, Local_Media_-_English, Program_Files into game/, preserving
relative paths. Also copy ALL three installer directories clumps, data, talk2.
Fallen.ex_ is already PE32, not compressed; copy as Fallen.exe without modifying
bytes. Executable SHA256 8cc73044e19b423ef0f13858d8cb3bb3025ca023114cf87ff46c57838f4b2229.
Remote assets /home/user/urban-chaos-demo-preflight on bx_44dwy4jt snapshot.

## Installer configuration is required

0512Z first run omitted clumps and config.ini, and displayed Cannot locate Urban
Chaos CD-ROM. Trace reads D:/clumps/mib.txc after LocalInstall defaults0. The
installer script explicitly writes config.ini sections Game, LocalInstall and
TextureClumps: keys language, textures, sfx, speech, movies, enable_clumps.
setup-config.log records original script offsets; enable_clumps is literal1.
For a full local extraction, reconstructed config uses LocalInstall entries1,
TextureClumps enable_clumps1, and Game language=text/lang_english.txt (use Windows
backslash in actual INI). No guest or emulator code changed, no media fabricated.

0514Z with local files/settings passes media lookup and opens graphics/audio
setup, but initial language=0 causes missing-language labels. The actual English
file is already present at text/lang_english.txt; Game.language is a path, not a
language number.0516Z corrected config renders legible settings: primary3Dcard,
16-bit colour,640x480, MicrosoftDirectSound3Dhardware by default. Screenshots
reviewed. Setup Okay is ordinary graphics/audio selection, not a licence dialog.

Module SHA256 9e835f75dfe5d2fcfb91f592641e945f91baadcd20f6751460777f4dba888cd6; remote build PASS. This is the retained test
branch build, not a claim of testing clean main. Main0304a8549 integration remains
ops-owned. ole32.dll real-file warning retained; no ordinal trap seen so far.
Readme documents arrow movement/turn, Space jump, Enter enter vehicles; further
controls and gameplay/browser/touch/audio/FPS still unverified.


0517Z-settings: ordinary click275,445 at100 accepts the displayed graphics/audio
settings and reaches the Urban Chaos Official Demo Press Any Key screen.
Reviewed640x480 capture, exit0 at40-second bound/583batches. No licence question
was displayed or answered. Ordinary menu navigation is the next test.


0518Z character-only keypress13 at200 leaves title unchanged.0519Z normal
keydown13 at200/up230 advances to mission map (Urban Chaos Demo marker/Start).
Reviewed screenshot, exit0 at40s/2441batches. This was input semantics, not a
proven emulator input bug; use held keys for this game. Next Start on mission map.


0520Z: add Enter down500/up530 to reach demo mission briefing (objective:
eliminate/arrest targets and save hostages). Reviewed image, exit0 at60s/2141batches.
No gameplay qualification yet. Next held Enter after the briefing is visible.


0521Z: add Enter down800/up830 to enter a rendered3D mission opening/camera
sequence. Reviewed rain/street/building scene with objective caption and speaker
portrait, exit0 at80s/2131batches. This is level rendering, not yet player input.
0509Z prepared-files.json records1122files/40,299,202bytes including reconstructed
config.ini, plus the original readme.rtf. Original game file bytes unchanged.


0523Z add Enter2200..2230: final2330/120seconds shows D'arci in the player scene,
radar/health/4-minute countdown HUD visible. Planned2450 screenshot and2500
movement never execute before the time bound; before.png is therefore absent,
not missing transfer evidence.0526Z earlier2250 capture is STILL cinematic;
Up2260..2290 happens before the playable HUD. Final2350/124.6seconds shows the
same starting position as0523Z, so no player movement is verified. These two
runs establish transition to the playable scene, not successful input.

Next use control-stdin or browser HUD-gated input (not another guessed early
batch), then reviewed displacement/control comparison. Registration, browser,
touch, audio/FPS remain unqualified. No known missing payload after full1122-file
layout; config is reconstructed from installer strings and successful behavior,
not a captured completed installation. No source/emulator/binary changes.
