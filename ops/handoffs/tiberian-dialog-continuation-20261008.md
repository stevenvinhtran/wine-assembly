# Generic CallWindowProc dialog continuation

Base ac8c4c8ff; isolated reused worktree
`/home/user/wt-darkstone-refill-20261007`, fresh branch
`findings/tiberian-dialog-continuation-20261008`. Prior branch preserved.
Coordinator integrates/pushes explicit source/test/docs/handoff paths.

Actual negative control: x86 subclass → CallWindowProcA(native dialog marker)
→ stored x86 DLGPROC → real DialogBoxIndirectParamA opens a nested modal dialog.
The baseline resumes the subclass before that dialog closes (seen+8 == 1,
expected 0). Fix contracts the five-argument frame into DefDlgProc's four-argument
frame by copying its return address up one dword and advancing ESP four bytes.
Delegate to the existing DefDlgProc implementation for modal tail dispatch and
synchronous default handling, avoiding a new message policy.

Corrected A/W regression proves actual nested WM_INITDIALOG, suspension until
EndDialog, result 99 reaching the stored callback, subclass resumption, caller
resumption, exact stack cleanup. Synchronous handled WM_INITDIALOG returns BOOL1;
handled WM_ERASEBKGND returns DWL_MSGRESULT77; no-proc WM_NULL returns0; each
consumes the original 24-byte frame. Custom dispatch, IDOK handled, null-proc
erase and actual nested EndDialog lifecycle regressions pass. Full canonical
build passes all gates. Tests use a symlink to the existing calc fixture and
NODE_PATH to shared dependencies, no fixture duplication.

Evidence: `/home/user/wine-assembly/scratch/runs/20261008-tiberian-dialog-continuation`.
Contains control/fixed source, initial/final test, exact baseline failure,
A/W final logs, four relevant regression logs, complete canonical build log,
source build closure, patch, both built modules and SHA index. Result published
last. Original game not run; no remote/browser/performance jobs. Game cause
remains unproven and gameplay false. Existing ordinary callback evidence remains
in the previous release handoff; missing UP/BN_CLICKED were already ruled out.

Next authorized phase needs coordinator review/integration and a separate game
runtime grant. Retained module is available for that phase. Measure the original
stored DLGPROC's entry/return and selector write before asserting actual game
cause, and require actual campaign/mission/player movement for qualification.
