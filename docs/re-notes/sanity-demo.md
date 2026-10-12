# Sanity: Aiken's Artifact demo

Source: https://archive.org/details/sanitydemosetup
Archive metadata identifies Monolith Productions/Fox Interactive,2000.
Original sanitydemosetup.exe:64250880bytes,
SHA1 000cd1c36262a1a883fd6d6b67d6629e732d5b9d.
Absent current app registry/corpus/TODOS when selected as ThiefII refill.
Private compatibility fixture; no public redistribution or deployment.

## Source preflight 2026-10-12

Metadata/search receipts: scratch/runs/20261012T0748Z-next-source/.
Remote bx_vujsz54x destination /home/user/sanity-demo-preflight/.
Initial ia800507 mirror times out160s with22036462bytes,
SHA1 a01607ef7282a9b6ee02a8730e21f6ef29179570 (NOT complete).
No extraction/launch performed on that partial. Single resume from ia600507
with curl -C - and280s guard is in progress; require full hash before7z.
Missing game executable/prepared game/ path until extraction is verified.

Final receipt0759Z-sanity-final-resume:08:01:50Z full64250880 bytes matches
required SHA1; 7z extraction exit0. All source bytes now verified.
Game/ contains29 files including Game/LITHTECH/Sanity.exe1028096bytes,
SHA256 d93f5b187d9e7eba07fa5cbcda7ae07f7c28311c85a37beb347a81e905be5e64,
client.dll/server.dll/d3d.ren/Miles/Bink and original config. Additional Data/
directory exists beside Game/; inspect its contents and original readme/setup
layout before composing the VFS. Preserve original paths until established.
Custom source root survives forks; test/binaries does not.
No guest launch yet. Next restore/fork bx_vujsz54x, inspect readme and Data/,
prepare local game layout, bounded original launch, then registration/input.
Boat API transport failed while resume kept running; checked actual process
and receipts, never launched concurrent writers. All transfers named evidence
files only; no source assets copied onto disk-constrained coordinator.

## First launch and exact blocker 2026-10-12 08:15Z

Remote bx_kd2gte5j rebuilt main0304+Z16+existing pending Winsock; build PASS,
module SHA256 6b6d56337acd65b64de5c2192efed64df64562f3865e602ccbb809a44be18ab1.
Game tree mounted at C:\, Data/SANITY.REZ at C:\SANITY.REZ, cwd C:\LITHTECH.
0812Z-sanity-first reviewed launcher; 0813Z-sanity-launch reviewed detail chooser.
Ordinary clicks (305,47), then Medium (212,256), produce ShellExecute file
CLIENT.DLL with -windowtitle Sanity -rez ..\sanity.rez -rez ..\sounds.rez
-rez ..\talents.rez -rez ..\custom -rez ..\sanityl.rez ++globaldetail 1
++Lightmap 1 ++GroupOffset0 1. Parent then exits with EIP0; child not launched
by this CLI route. client.dll is an executable PE (characteristics0x10f,
entryRVA0x7af4f), so direct launch with the observed arguments is legitimate.
0814Z-sanity-client loads cshell/cres from REZ, d3d.ren, Miles and input, then
reports 'Could not create the Interface Manager object'. No gameplay.
0815Z-sanity-files bounds tracing to80batches: last CreateFileA FontData.fnt
returns INVALID_HANDLE immediately before that error. Original extracted tree
contains no loose font file. Labeled follow-up corrects an ambiguous combined
strings output: SETUP.INS has NO FontData string; SANITY.REZ contains it at
offset1494536 among embedded font-manager code. A failed optional file open
is not proof of the error cause. Next trace font initialization and its first
failing return (font metrics/surfaces/file fallback), without assuming a
missing installer-generated file.
Do not invent font bytes or patch around failure. Also missing system shell32/
comctl32 fixture warnings, but neither trapped before this observed failure.
All five run directories retain commands, module identity, logs and captures
under scratch/runs/20261012T08{12,13,14,15}Z-sanity-*; no result.json until a
corpus ID exists. No registration, browser gameplay, audio or FPS claim.

## Font pixel mismatch isolated, 2026-10-12 08:28Z

Same module6b6d5633, remote bx_sbqrfe79 rebuilt successfully.
0821Z-sanity-font API trace shows optional FontData.fnt open failure followed
by hundreds of surface reads; 0823Z-sanity-surface shows slot527 populated
(first nonzero word0xf81f). Thus missing cache is not sufficient diagnosis.
Saved generated cshell.dll/cres.dll remotely in /home/user/sanity-vfs/windows/temp.
cshell original base10000000 maps to runtime00b50000. Font cache reader
10096990 returns false on absent file; glyph-boundary fallback10096b10 calls
10096d50 to read pixels. Exact dynamic evidence0827Z-sanity-glyph-va at
00be6c99 returns597 (full font width), with caller00be6e66 (scan exhaustion).
0828Z-sanity-pixel at00be6db7 captures object01a1b4fc: font14PIXELANTI,
width597 height14, expected background00ff00ff. Pixel at(3,0) returns00fe00fe
in output074ff554. At(7,0), pixel0. No guest memory patches were used.

client.dll GetPixel0040c920 decodes565 into a5-bit expansion lookup at0049836c.
0829Z/0830Z dumps confirm lookup[31]=254, not255. Constructor0040cc70 executes
FILD i64(index); FMUL f32[0048b7cc]=255; FMUL f32[0048b7e4]=0.032258063554763794;
_ftol00478a64. Numerical comparison with original constants: f64 gives
254.9999924004078 -> trunc254; staged f32 gives255. Current06-fpu.wat explicitly
ignores x87 precision-control. This is a strong precision lead, NOT yet a
validated emulator fix: establish guest CW during table creation and compare
matching native x87 before changing arithmetic (including optimized paths).
Do not patch the font bitmap/table or supply fabricated FontData.fnt.

Diagnostic limits:0824Z breakpoint did not fire;0825Z/0826Z module-relative
probes supplied RVAs where resolver expects original VA, so those negative
results prove nothing. Absolute return-site probes0827Z/0828Z worked.
0829Z inside optimized _ftol did not fire;0830Z return-site probe hit8 of32
iterations, so its overwritten stack is NOT a trustworthy CW observation.
Numerical JSON, relevant client disassembly and pixel receipts are named
artifacts in0828Z-sanity-pixel. All captures remain investigation-only until
a corpus registration exists. No new gameplay, audio or FPS claim.
