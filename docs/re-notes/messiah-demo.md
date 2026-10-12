# Messiah demo

Archive source https://archive.org/details/messiahdemo, messiahdemo.exe
104,219,648 bytes SHA1 4b03de968e89c68ed2f34f856cc2190a63f9836b verified
2026-10-12 05:57Z. Evidence scratch/runs/20261012T0556Z-messiah-preflight.
7z extracts WinZip SFX20files (413 trailing bytes warning); unshield data1.cab
extracts300files, all in Program_Executable_Files. Copy that group contents to
game/ preserving pc/ layout. Prepared151,451,108bytes, per-file SHA256 receipt.
Remote /home/user/messiah-demo-preflight/game on bx_bhbvhvcc.

MessiahD3D.exe1,105,920bytes SHA256
1f622eca30b2554b61a41aa2ef33f07d42a1fd10493b754fbfc51ded5e4500a3.
MessiahGlide3x.exe1,052,672bytes SHA256
568b1df24ae601349dcc9a6de54ae51b974bb91b998451944fcea80ca351b1cd.
D3D imports DINPUT/DDRAW/WINMM/KERNEL32/USER32/GDI32/ADVAPI32/ole32.
Original safe-mode batch invokes MessiahD3D.exe -s -i -v -o +! -p; start with
ordinary unmodified D3D executable before changing launch switches.

Included readme: arrows move/turn, Ctrl jump/flap, Space combat/shoot, Backspace
depossess. No launch, gameplay, browser, touch, audio or FPS qualification yet.
No runtime/binary patch, no public deployment or approval accepted.


## First launch and initialization diagnosis (06:07Z–06:11Z)

0607Z plain launch stops at informational Error opening MCI Device; harness
reports idle modal and exits0, not a successful game.0608Z trace: mciSendCommandA
MCI_OPEN0x803 flags0x2000 at caller4015dd, type string7fd030=cdaudio.
0609Z documented -s (disable sound) still executes this open and fails; host
mci_open returns0 with no mounted disc. No absent demo file identified. MCI
empty-device behavior remains a separate compatibility issue; no fake media added.

0610Z ordinary click118,139 batch5 dismisses the error and advances to Messiah
window, then Unknown Error -2147483643 (0x80000005).0611Z API trace narrows this
to two IDirect3D7_EnumZBufferFormats calls. Guest callback40b590 rejects any
format with nonzero DWORD+16, then matches requested depth at+12. Caller40e0ea
returns0x80000005 if no format accepted after16-bit fallback. Our Z16 enumeration
writes0xFFFF at+16, but DDPIXELFORMAT+16 is dwStencilBitDepth; dwZBitMask is+20.
Microsoft struct reference: https://learn.microsoft.com/en-us/windows/win32/api/ddraw/ns-ddraw-ddpixelformat

Correction prepared in separate codex/zbuffer-format-mask branch off0304a8549.
Regression test for both D3D3/D3D7 callbacks fails old code65535!=0 as expected.
Game replay and final validation are recorded below when available. No source
change for the MCI warning, no public deployment.

Z16 fix committed/pushed3a4fcf883 on codex/zbuffer-format-mask off0304a8549.
Focused regression RED on original65535 stencil depth; GREEN on correction:
six enumeration front doors,36 nested pairs,120 allocation-balanced cycles/ABI.
Remote build gates PASS.0614Z replay after acknowledging MCI advances beyond the
Z-format error into rendering; first capture is largely white/logo fragments,
not gameplay. That replay hit default200 batches; longer0615Z run follows.
Corrected module SHA256 e246f5efe1dfc3e61515b94600f201e66000ef4ff89b42b8ae43b50cd22ded0d.
Runtime replay uses retained test source plus this correction, not clean main.

0615Z longer replay:4778 batches/60.013s,400840 API calls, exit0 at wall limit.
Reviewed final image remains white; no menu/gameplay qualification. Z-format
error no longer appears after ordinary dismissal of MCI warning. Next test the
documented -i (skip intro logos) and inspect render/assets if white persists;
keep MCI empty-CD behavior separate. No known missing extracted payload.
