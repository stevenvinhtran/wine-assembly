# TODOS

## Coordinated migration queue — 2026-10-01

Historical sections below are preserved; they are not automatically ready work.
Coordinator: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5.
Resource and acknowledgment ledger: `ops/handoffs/orchestrator-status.md`.

**No product decision needed for current independent work.** FP comparisons and
result download are complete. REP final validation remains blocked by automated
review. Codex handoff reconciliation is
complete, including one explicitly reconstructed documentary handoff. All five Claude migration handoffs are received and local claims released.
Core migration is verified; bulk archives continue independently. Foreign remote
resources remain unverified. Existing correctness/review blockers remain.

- [x] Receive in-scope Codex handoffs and reconcile resource ownership
  id: MIG-HANDOFF
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  started: 2026-10-01T23:44:20Z
  Next: complete; eight root handoffs accepted plus one reconstructed Codex handoff. Five Claude roots deferred; preserve unverified jobs and their ownership.
  Done: all in-scope Codex custody documented without inferring process termination.
  Evidence: ops/handoffs/initial-inventory.md; ops/handoffs/orchestrator-status.md.

- [x] Review and verify released dashboard blocker workflow
  id: MIG-OPS
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  started: 2026-10-01T23:45:00Z
  Next: complete; UTF-8 regression passes. Ops owner reloaded8098 with CPU/RSS work,10/10tests and browser/live checks pass; Unicode fix active.
  Done: bounded review and relevant tests recorded, defects fixed or explicitly queued.
  Evidence: ops/handoffs/ops-dashboard.md; ops/handoffs/mig-ops-review.md.

- [x] Verify existing PCP artifact correctness
  id: MIG-FP
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  started: 2026-10-01T23:45:00Z
  Next: complete; 400 sequences/14834ops pass, 264 preserved files unchanged. Native/game gates remain.
  Done: parity result and remaining native/game gates recorded.
  Evidence: ops/handoffs/fp-next-root.md; ops/handoffs/mig-fp-parity.md.

- [x] Review remaining Serious Sam production integration
  id: MIG-SAM
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  started: 2026-10-01T23:45:00Z
  Next: complete; timer TLS/SEH isolation recommended after frozen replay, preserve mixed-file ownership.
  Done: precise next task with ownership boundaries and validation; goal remains incomplete.
  Evidence: ops/handoffs/01a0f6ff-da61-7710-a604-d9442103dbbd.md; ops/handoffs/mig-sam-review.md.

- [x] Receive NFS2 and IS3 migration handoff
  id: MIG-NFS2
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Migration custody complete; all five Claude handoffs read and local claims released. Unfinished engineering remains separately queued.
  Done: Owner handoffs received and local sessions exited; no foreign remote-service termination inferred.
  Evidence: ops/handoffs/migration-core-ready-20261003.md; ops/handoffs/claude-migration-5e92d715.md; ops/handoffs/claude-migration-wine-assembly-d0.md; ops/handoffs/claude-migration-toyvm-uop-88bbcb9f.md; ops/handoffs/claude-migration-sc2k-compare-agent.md

- [x] Verify handed-off renderer specular correction in isolated candidate
  id: MIG-RENDER
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Next: complete; fixed72 and actual shared-worker WebGL/native software pass after narrow fog correction. Broader migration remains incomplete.
  Done: unchanged analytical expected pixels pass; exact tested module/source evidence retained.
  Evidence: ops/handoffs/01a0eb29-4302-7e20-9b06-7084fb37358b.md; ops/handoffs/mig-render-validation.md.

- [x] Correct generated fixed fog/specular guard without widening guest support
  id: MIG-RENDER-FOG
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: complete; unchanged analytical fog/specular pixels pass and both mixed guest/generated negative checks reject.
  Done: existing analytical fog/specular pixels pass while unsupported guest/mixed paths remain rejected.
  Evidence: ops/handoffs/mig-render-fog-review.md; ops/handoffs/mig-render-validation.md.

- [x] Prepare coherent texture-registry validation snapshot
  id: MIG-RENDER-TEXTURES
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: complete;9/9 gates PASS,144 protected hashes unchanged,12file manifest/backups/logs downloaded and own jobs cleaned. Separate Q2 route assigned; empty-quad excluded.
  Done: registry/lowering/GL/Glide correctness checks on identified source, or concrete failing gate recorded before further migration.
  Evidence: ops/handoffs/mig-render-textures-validation.md; scratch/mig-render-textures-validation-20261002/result.json.

- [x] Validate Q2 world and movement with shared texture registry
  id: MIG-RENDER-Q2
  candidate: quake-2-demo-installer
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: complete; reviewed textured world and scripted-W framechangePASS6205colors/40457pixels. Physical traversal unproven;284source hashes stable, no budget rejection on this route. Own jobs cleaned, remote slot released.
  Done: reviewed world/movement images, registry budget behavior and exact tested identities; or concrete failure. No performance acceptance or merge.
  Evidence: ops/handoffs/mig-render-q2.md; scratch/runs/20261002T010210Z-quake-2-demo-installer-mig-render-registry/result.json.

- [x] Replay Serious Sam production TLS diagnostic artifact to intro
  id: MIG-SAM-REPLAY
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: bounded replay complete with FAILED visual criterion: near-black87000 despite quitfalse/credits0. Follow-up paired replay assigned; production TLS visual pass remains unproven.
  Done:87000 intro state and reviewed capture, or concrete failure evidence; stop only own new run.
  Evidence: ops/handoffs/mig-sam-review.md; ops/handoffs/mig-sam-replay.md.

- [x] Isolate Serious Sam near-black intro checkpoint
  id: MIG-SAM-VISUAL
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: complete; both87000/90000 images byte-identical across405db/363d, brightGODGAMES90000, hosts unchanged and both runs stopped. Earlier black frame is transition.
  Done: frame-phase versus module difference recorded with reviewed paired evidence; no unsupported TLS blame.
  Evidence: ops/handoffs/mig-sam-replay.md.

- [x] Capture matching FP native code on dedicated x64 box
  id: MIG-FP-NATIVE-X64
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: complete; six captures/30function records/121download hashes verified. Both engines retain spilled countdown; no speed claim. ARM64 remains next after local slot release.
  Done: captures downloaded and reviewed with tier/engine/hash provenance; no speed claim.
  Evidence: ops/handoffs/mig-fp-native-plan.md; ops/handoffs/mig-fp-native-x64.md.

- [x] Capture matching FP native code on local ARM64
  id: MIG-FP-NATIVE-ARM64
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: complete; six captures/30functions/input hashes verified. Countdown remains spilled; affected Ion fast frames shrink16bytes. CPU released, version differences retained; no speed claim.
  Done: actual disassembly reviewed with version/tier/module provenance; no timing conclusion.
  Evidence: ops/handoffs/mig-fp-native-plan.md; ops/handoffs/mig-fp-native-arm64.md.

- [x] Restore missing MW3 assets and verify frozen P browser baseline
  id: MIG-FP-BROWSER-BASELINE
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: complete;43assets verified, cockpit and3windows PASS;23artifacts downloaded/hash matched, source stable and own jobs cleaned. CDP SwiftShader contradicts endpointIntel string; diagnostic evidence only.
  Done: reviewed gameplay route or concrete failure with exact source/module/renderer provenance; no variant timing campaign or EPYC comparison.
  Evidence: ops/handoffs/fp-next-root.md; ops/handoffs/mig-fp-browser-baseline.md.

- [x] Prepare existing FP copied-kernel comparison recipe
  id: MIG-FP-KERNEL-PLAN
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: complete;112frozen inputs pinned and exact3pair recipe reviewed. MIG-FP-KERNEL assigned on dedicated ASCII host after quiet preflight.
  Done: concrete recipe with MIXED_CONTROL census guard and explicit mixed-kernel versus pure-path/gameplay coverage limits; no new variant/default change.
  Evidence: ops/handoffs/fp-next-root.md; ops/handoffs/mig-fp-native-arm64.md; ops/handoffs/mig-fp-native-x64.md.

- [x] Prepare matching FP native-code capture commands
  id: MIG-FP-NATIVE-PLAN
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: plan complete; local captures wait for Serious Sam CPU release, remote prerequisites need separate verification.
  Done: executable matching P/PCM/PCP V8/Ion capture plan with prerequisites explicit.
  Evidence: ops/handoffs/mig-fp-native-plan.md.

- [x] Audit incoming owner evidence and missing handoffs
  id: MIG-OWNERS
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: audit complete; nine original roots still lack durable handoffs, keep individual blockers open.
  Done: received/released/retained resource distinctions and ready candidates recorded without runtime disturbance.
  Evidence: ops/handoffs/mig-ownership-audit.md.

- [x] Receive Pirates Worker sailing handoff
  id: MIG-PIRATES
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Next: handoff accepted; preserve8159, review exact StretchRect/Worker hunks before game-path validation.
  Evidence: ops/handoffs/01a0f736-78f1-7822-8b37-159d6f8ed94d.md.
  Done: accepted handoff and safe next task.

- [x] Verify Pirates actual-game rectangular StretchRect path
  id: MIG-PIRATES-STRETCH
  candidate: pirates-2004
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: bounded route complete with INCONCLUSIVE transfer outcome; guest stopped after captain before any transfer. Root reviewed image and verified58artifact hashes;143inputs unchanged. Cause unresolved; no rerun assigned.
  Done: opcode0x30015 and ordered source readback observed with reviewed game captures, or concrete route failure. A zero-transfer sailing pass is insufficient; white terrain remains separate.
  Evidence: ops/handoffs/mig-pirates-stretch.md; scratch/mig-pirates-stretch-20261002/result.json.

- [x] Complete MMX root resource audit
  id: MIG-MMX
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Next: durable root/three-child handoff acknowledged; preserve notes/artifacts/server58114, no slower default enabled and no new optimization campaign assigned.
  Evidence: ops/handoffs/01a0eef4-21b2-76b3-8352-48b0d6ac6e7f.md.
  Done: checkpoint accepted, remaining work scoped from owner evidence.

- [x] Receive remaining Claude migration handoffs and Codex coordination history
  id: MIG-LEGACY
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Migration custody complete; all five Claude handoffs read and local claims released. Unfinished engineering remains separately queued.
  Done: Owner handoffs received and local sessions exited; no foreign remote-service termination inferred.
  Evidence: ops/handoffs/reconstructed-remaining.md; ops/ORCHESTRATOR.md.

  Evidence: ops/handoffs/migration-core-ready-20261003.md; ops/handoffs/claude-migration-5e92d715.md; ops/handoffs/claude-migration-wine-assembly-d0.md; ops/handoffs/claude-migration-toyvm-uop-88bbcb9f.md; ops/handoffs/claude-migration-sc2k-compare-agent.md

- [x] Revalidate transferred bounded wave capability writes
  id: MIG-AUDIO-CAPS
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Next: complete;920ABI/input/full isolatedbuildPASS, committedcd50cfdf only4ownedpaths; foreign timeSetEvent hunk preserved.
  Done: current920-case caps and existing input suite validated, isolated/full build identity recorded, report finished and only owned hunks integrated.
  Evidence: ops/handoffs/01a04d26-4255-7ee2-bb58-9e2cbedb68df.md; ops/handoffs/mig-audio-caps.md.

- [x] Integrate persistent multimedia timer TLS and SEH context
  id: MIG-SAM-TIMER
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: complete; new context fixture plus five regressions and static gates PASS. Narrow source additions preserved uncommitted; private diagnostic intro replay assigned.
  Done: stable FS base, separate persistent registered callback TLS, main TLS/SEH restoration, late templates/TlsFree and waveOut regressions pass; no fault/REP/launcher expansion.
  Evidence: ops/handoffs/mig-sam-timer.md; scratch/mig-sam-timer-20261002/.

- [x] Replay production timer context in private Serious Sam diagnostic module
  id: MIG-SAM-TIMER-REPLAY
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: complete; private0c5d6ab0 matches both prior modules PNG/snapshot/GL at87000/90000;250inputs unchanged and own8147 quit0. Private fault/REP transforms remain.
  Done: exact source/module/host identity and intro result, own8147 run stopped, retained8138/8146 untouched. Current-source replay is not a timer-only A/B or gameplay completion.
  Evidence: ops/handoffs/mig-sam-timer-replay.md; scratch/runs/20261002T005200Z-serious-sam-production-timer-intro/result.json.

- [x] Scope remaining Serious Sam production fault and REP restart integration
  id: MIG-SAM-FAULT-PLAN
  candidate: serious-sam-demo
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: complete; REP-specific absent-page slice proposed, separate MOVSW and raw-SEH classifier gaps identified. New fixture/fallback audit assigned without production changes.
  Done: concrete ready or blocked steps with exact source dependencies and precise-PC strategy; no broad diagnostic instrumentation shipped.
  Evidence: ops/handoffs/mig-sam-review.md; ops/handoffs/mig-sam-timer-replay.md.

- [x] Run existing FP copied projection kernel pairs
  id: MIG-FP-KERNEL
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: Complete: three pairs passed correctness/census/island gates; nine downloaded evidence hashes verified,115inputs unchanged and own jobs stopped. Timing inconclusive against biased P/P control; no default change.
  Done: source/module/work identities, parity/census/island coverage and paired spread against P/P null recorded; own jobs cleaned. Mixed workload does not validate PCP pure-path benefit or game speed.
  Evidence: ops/handoffs/mig-fp-kernel.md; scratch/mig-fp-kernel-20261002/analysis.json
  status: done

- [x] Establish decoded REP sparse-fault restart regression
  id: MIG-SAM-FAULT-FIXTURE
  candidate: serious-sam-demo
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: complete; both diagnostic baselines expose stale blockheadPC/writekind0/repeated premarker; MOVSD also stale progress. Two immutable165file snapshots/logs retained; narrow REP correction assigned.
  Done: precise fault/progress/retry baseline evidence and MOVSW/fallback coverage limits, without weakening expected behavior or promoting diagnostic shortcuts.
  Evidence: ops/handoffs/mig-sam-fault-plan.md.

- [!] Correct REP MOVS restart on absent sparse pages
  id: MIG-SAM-REP-RESTART
  candidate: serious-sam-demo
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: incomplete handoff accepted; seven file/patch hashes verified. Matrices/regressions/zero-count/block paths pass. Corrected uop log passes with2entries/1COPYdeopt, tool exit unconfirmed. ContinueSearch, direct MOVS code-write review and final static gates remain after automated review stopped the worker.
  Done: correct single fault, first absent byte, failed-element preservation and retry at REP for widths1/2/4 DF0/1, with source identities and coverage limits. No generic fault-policy/classifier/layout changes or canonical build.
  Evidence: ops/handoffs/mig-sam-rep-restart.md; scratch/mig-sam-rep-restart-20261002/evidence-summary.json.
  blocker: Worker execution stopped by automated cybersecurity-risk flag; final validation incomplete.
  waiting-on: automated review resolution
  needs: Resolve the blocked validation step before promoting or committing this change.

- [x] Review remaining Serious Sam diagnostic fault transforms
  id: MIG-SAM-FAULT-REMAINDER
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: complete;3transforms obsolete,5generic/classifier dependencies remain. Original builder is incompatible with current REP signatures; no replay or implementation assigned until REP review gates resolve.
  Done: exact redundant versus still-needed transforms and safe next validation documented.
  Evidence: ops/handoffs/mig-sam-fault-remainder.md.

---

Snapshot of remaining work, written 2026-08-16 by picking up five Claude sessions
that ran the night of 2026-08-15 and stopped mid-flight. Each item names the
session that owns it, the files it touches, and what the *next* concrete step is.

Session transcripts live in
`~/.claude/projects/-Users-vg-Documents-projects-phone-wine-assembly/<id>.jsonl`.
Coordination history is `messageboard.txt` (append-only; entries 1180-1220 cover
this stretch).

Tree state at time of writing: HEAD `209aa00`, working tree clean, build green,
corpus sweep 106 PASS / 0 FAIL.

---

## 0. Blocking question: are the 24 e2e failures real? — ANSWERED 2026-08-16

**Answer: they are real, but they are not new, and the font commits are
exonerated.** A baseline worktree at `eff03cb^` (680db80) produced a
byte-identical fail set to HEAD across all six sampled tests, so neither
`eff03cb`/`45e58ae` nor the `WNDPROC_DIALOG` move caused any of them. Against
the session-start commit `9c49b65`: `spider-messagebox`, `find-cancel`,
`solitaire-resize` and `cwordzap-render` fail identically there too — they
predate the whole night. `mspaint-options` was *worse* at `9c49b65` (the run
did not complete at all); only its margin-gray assert is left. Only
`regedit-deep` truly regressed, bisected to `88c6a72` — seeding `HKLM\System`
gives HKLM a third child, so the tree has 10 visible rows where the test pinned
9. Expectation fixed in `48379a7`; the emulator was correct.

What is left of this item is the individual failures, each of which is now a
plain bug with no shared cause. Note also that `lib/storage.js` seeds both
`HKLM\SOFTWARE` and `HKLM\Software` and key paths compare case-sensitively, so
regedit shows two keys where Windows shows one.

The original writeup follows.

**Priority: highest. Nobody owns this yet.**

`test/run-all.sh` in the shared tree at 23:58 gave **151 passed / 27 failed**:
unit 92/2, e2e 58/24, smoke 1/1. The two unit failures are known and owned
(`test-winhelp-wat-parser`, `test-gdi-public-api-status` 245-vs-244).

**All six sampled failures are now closed** (2026-08-16). Five of the six were
tests pinned to stale geometry or to the retired JS renderer's palette — the
emulator was right and the assert was wrong. Only `test-cwordzap-render` was a
genuine emulator bug. Two reusable lessons for the rest of the 24:

1. Before believing a pixel/click assert, check the *live* geometry
   (`dump-windows`) and the Win98 classic palette (the real Plus! 98 theme
   files in `test/output/wordpad-mixed-format-roundtrip/vfs/screensavers/*.the`
   settle any color question). A coordinate hardcoded months ago is the prime
   suspect.
2. `run.js` now has `close-click:TARGET` and `corner-drag:HWND:DX:DY`, which
   derive their points from the live window rect. Prefer them over magic
   screen coordinates so the next placement change doesn't silently rot the
   test into a no-op.

Also: timing-sensitive tests (`test-mspaint-options` 9s, `test-mspaint-stretch-icons`
10s `execFileSync` timeouts) go red purely from machine load. Check `uptime`
before believing them.

The original sampled table:

| Test | Assert that fails |
|---|---|
| `test-regedit-deep` | `tree displays classic folder glyphs (0 yellow px)` |
| `test-mspaint-options` | `tool-options margin stayed button-face gray` |
| ~~`test-spider-messagebox`~~ | FIXED `dcbc468` — the assert pinned the retired JS renderer's 64,64,64 outer shadow; Win98's COLOR_3DDKSHADOW is black (every Plus! 98 `.the` ships `ButtonDkShadow=0 0 0`). Emulator was correct. Also filled in the missing `GetSysColor` indices 21/23/24. 7/7. |
| ~~`test-find-cancel`~~ | FIXED `35bb495` — the test clicked (390,72), which is inside the dialog's *client* area; the close box is x 379..395, y 45..59. Emulator was correct. New `close-click:TARGET` input action derives the point from the live window rect. 11/11. |
| ~~`test-solitaire-resize`~~ | FIXED `c7efdb6` — the test pressed 19px below the window (it assumed y=20, Solitaire opens at y=0), so it grabbed nothing. Resize itself always worked. Now drags the live corner via a new `corner-drag` input action. 3/3. |
| ~~`test-cwordzap-render`~~ | FIXED `e2503be` — **a real emulator bug**, unlike the others here: `StretchDIBits` rejected BI_RLE4/BI_RLE8 outright (`$gdi_raster_desc_from_bmi` accepts only BI_RGB/BI_BITFIELDS), so the splash drew nothing. Now decoded through the existing `$gdi_bitmap_create_dibitmap` path. 7/7. |

Most plausible sources, both of which landed **without an e2e run**:

- `eff03cb` "Delete the JavaScript text path" + `45e58ae` (fonts session; it said
  outright that the e2e tier was never run against either commit)
- the `WNDPROC_DIALOG 0xFFFE0002 -> 0xFFFF0004` move (board entry 22:30), which
  fits the `find-cancel` dialog-hwnd failures

**Next step:** run `bash test/run-all.sh e2e` at the commit *before* the font-path
deletion, in a worktree, and diff the FAIL name sets against the current run.

**Do not repeat the mistake that wasted the last attempt:** the abandoned worktree
at `~/.claude/jobs/b303255f/tmp/wt5` symlinked only `test/binaries`, so it had no
fonts and failed 83+ tests including every `test-wat-gdi-*`. Its numbers are
meaningless. Delete it. A baseline worktree needs the font assets too.

---

## 1. Win16 / NE — Phase 6: three of the four are playable, one is complete

Phase 1 (`0c23c78`) loads and links NE images, Phase 2 (`84c98a1`) runs them,
Phase 3 (`ff6f45a`, `9a0f12f`, `3b18812`, `90e548a`) gives them an API layer,
Phase 4 (`919f011`, `5e8a9f3`, `e78ba7f`, `0af03d5`) adds NE DLL loading, and
Phase 5 (`d5a09f7`) gets Hearts running.

Phase 6 (`fd04a70`, `df6b6b5`, `653da1d`, `3716c6f`, `f82cc5d`, `7f464ce`,
`72b3ba8`) makes them look right rather than merely run.

**Minesweeper is complete** — Game/Help menu, red LED counters, yellow smiley,
raised minefield. **Solitaire deals a full hand, and keeps dealing** — stock,
four foundations, seven tableau columns each with its face-up top card over a
face-down fan, hand after hand. **FreeCell deals a full board out of
CARDS.DLL** — eight columns of card faces, free cells, "FreeCell Game #2574"
in the title (it opens empty by design; Game▸New Game, command 102, deals).
**Hearts creates its frame, its status bar and its buttons, runs its message
loop, initialises DDEML and puts up a real message box.** All four are in the
browser shell under "16-bit (Win16 / NE)" (`8dc244e`), covered by
`test/test-win16-web.js`, which asserts Minesweeper's colour art, that both
card games actually deal, and that Solitaire's *second* hand is as full as its
first.

Most of the bugs behind the previously-empty tables were **not** Win16-only
and are worth knowing about for 32-bit apps too:

- `$handle_AdjustWindowRectEx` ignored `dwExStyle` while
  `$defwndproc_do_nccalcsize` honours it, so any `WS_EX_CLIENTEDGE` window
  sized through it came back four pixels narrower than the app asked for.
- `$handle_PatBlt` reads its width and height back off the stack frame rather
  than from its arguments — the Win16 bridge wrote only the rop there, so
  every 16-bit `PatBlt` filled a garbage rectangle. It is the only handler in
  the bridge that reads past argument 2; the other 97 were audited.
- `GetDeviceCaps(NUMCOLORS)` answered Win32's `-1`, which a 16-bit caller
  compares as a signed word. Minesweeper's `cmp ax,2 / jle` therefore chose
  its monochrome bitmap set and drew the whole board in 1-bit art.
- `$menu_load` and `rsrc_exists` both meant "PE resource", so no 16-bit app
  had a menu bar. An NE menu is the same MENUITEMTEMPLATE with ANSI labels.
- **A DLL's exported prologue was never patched.** `push ds / pop ax / nop` is
  three bytes the linker leaves meaning "AX = the caller's DS", and the loader
  is expected to replace them with `mov ax, DGROUP`. Without it every export
  runs on its caller's data segment and reads the caller's variables as its
  own — nothing faults, it just reads the wrong memory. CARDS.DLL found
  FreeCell's data where its card-bitmap cache should be.
- **A 16-bit task never became the active window.** WM_ACTIVATEAPP,
  WM_ACTIVATE and WM_SETFOCUS are delivered from CreateWindowExA through
  32-bit continuation thunks, which a 16-bit task cannot be resumed on.
- ShowWindow's WM_SIZE arrived *after* whatever WinMain posted, rather than
  before it as on Windows, so Solitaire dealt onto a table with no layout.
- **The local heap never reused a freed block.** `LocalFree` was a no-op and
  `LocalAlloc` a bump pointer. An app that churns — Solitaire allocates a node
  per card and frees all 28 on the next deal — exhausts a 4KB heap in two
  hands. A NULL from LocalAlloc is rarely reported by the caller, so this
  reads as a feature quietly not working rather than as an error.

The address scheme, because everything else depends on it: every segment base
is 64KB aligned, so the low word of a linear address *is* the offset inside its
segment. `$esp` therefore stays a linear address with SP as its low half, and
the pre-existing 16-bit push/pop handlers needed no changes at all.

- Files: `src/05c-seg16-ops.wat` (handlers 363-387 — segmented EA, far
  transfers, segment-register moves, string ops), `src/09e-win16-api.wat` (the
  API layer, ~70 entry points), `src/07-decoder.wat` (`$code16` inverts the
  66/67 prefixes; `$decode_modrm16`), `src/08c-ne-loader.wat`,
  `src/01-header.wat`
- Tooling: `tools/ne-dump.js`, `tools/ne-exports.js`,
  `tools/gen_win16_ordinals.js` → `src/win16-ordinals.generated.json` (1,468
  names, 10 modules; all 269 ordinals the four apps import resolve).
  **`--trace-win16`** logs every call with the ten stack words nearest the top
  (BitBlt's Pascal frame is exactly ten and its destination DC is the deepest)
  and the AX/DX/EIP/ESP that came back, and decodes the 16-bit MSG behind
  `lpMsg` for the four message-pump entry points — reach for it first on
  anything here. `tools/png-probe.js --at=x,y` reads a dumped surface's alpha,
  which is how you tell "filled black" from "never drawn".
  `tools/ne-disasm.js --all` sweeps a whole segment linearly rather than
  following one function to its first `ret`, which is how you grep a module for
  every write to a struct field — none of the `find_*` tools read NE images or
  16-bit ModRM.
  Two facts worth not rediscovering: a Win16 module name is not its filename
  (SOUND ships as `mmsound.drv`), and not every import is by ordinal.

### The three things that make the layer work

**The handle map** (`$win16_h16`/`$win16_h32`). A Win16 handle is 16 bits and
ours are 32-bit values like `0x00310001`. Rather than narrow every allocator,
the two spaces are joined at the dispatch boundary and nothing on the 32-bit
side learns Win16 exists. The table lives in the one arena slot past the last
usable selector, so no far pointer can name it.

**The bridge into the 32-bit handlers** (`$win16_call32_begin`/`_end`). Most of
Win16 is Win32 with narrower arguments, so the Win16 side widens onto a scratch
stdcall frame and calls `$handle_*` directly. It refuses a handler that moved
EIP (marker `0xCA16A9F7`), because a redirect into guest code carries a 32-bit
frame a 16-bit task cannot survive — ShowWindow and CreateWindow are written
out for that reason.

**The continuation** (`$WIN16_CONT_OFFSET`). An API that must run the window
procedure before returning pushes a far return address into the thunk segment;
`$th_retf16` recognises it and `$win16_dispatch` finishes the API. This is how
CreateWindow delivers WM_CREATE *before* it returns, which matters: Solitaire
never stores the handle CreateWindow gives it, because its WM_CREATE handler
sets the global instead.

### Open

- ~~**Solitaire's deal stops part way.**~~ FIXED `72b3ba8`, and the diagnosis
  in the previous version of this item was wrong in an instructive way — the
  animation tick at `seg 4:0x13ac` is a *drag* tick, `+0x14` means "a card is
  in hand", and it is correctly zero. The deal is synchronous: the loop at
  `seg 4:0xdd3` places all 28 cards every time. What failed was drawing them.
  `$win16_LocalAlloc` was a bump pointer and `LocalFree` a no-op, as its own
  comment admitted; Solitaire allocates one 26-byte node per card and frees all
  28 on the next deal, so a 4KB heap runs dry mid-way through the second hand
  and entirely by the third. A NULL from LocalAlloc is not an error the game
  reports — the pile just declines the card — so it looked like an animation
  that stalled. The heap now has a first-fit free list.
  The two "unexplained" observations were both artifacts of the harness, worth
  writing down so nobody chases them again: `test/run.js` gives the guest a
  synthetic clock of **200ms per batch**, so a 250ms timer is due on nearly
  every pump iteration and thousands of WM_TIMER in a short run are expected
  (the browser uses real time); and `--dump` runs its address through `g2w`, so
  `--dump=0xac00` never reads TIMER_TABLE at all — that address is a raw WASM
  offset below GUEST_BASE, not a guest address.
- ~~**Menu commands crash or draw nothing.**~~ FIXED. Every menu command of
  FreeCell, Solitaire and Minesweeper now runs — `test/test-win16-menus.js`
  drives all of them from each app's own `RT_MENU` via `tools/menu-sweep.js`,
  which is worth reaching for on any app, 16- or 32-bit: "it launches" says
  nothing about the twenty-seven things its menus do. Five causes, and only two
  of them were Win16 plumbing:
  - `SetWindowPos` (USER.232) was missing. Four of FreeCell's five commands go
    through one centre-the-dialog routine that calls it.
  - `ShellAbout` was missing, and reached two different ways: Solitaire and
    Minesweeper import SHELL.22, FreeCell imports the name. A built-in module
    called by name never reached module dispatch at all — `$win16_dispatch`
    trapped first — so there is now a name path beside the ordinal one.
  - `DispatchMessage` entered any non-zero window procedure as a far pointer.
    SendMessage had always checked; nothing had posted to a window of *ours*
    until ShellAbout put one up, and then CS took 0xFFFF.
  - `SetDlgItemText`/`SetDlgItemInt`/`GetDlgItemInt` (USER.92/94/95).
  - **A 16-bit MOVSD copied two bytes and advanced four.** `$th_string16` read
    its packed element size as "byte or word", so the 0x66-prefixed forms —
    which is how a compiler copies a RECT in one instruction pair — moved half
    the data and left every other word stale. This is an execution-core bug,
    not a Win16-layer one, and it is the reason Solitaire's Deck dialog drew
    twelve unreadable smears while opening perfectly well. Also fixed: the
    DRAWITEMSTRUCT behind WM_DRAWITEM is 48 bytes in Win32 and 26 in Win16, and
    a 16-bit procedure `les`-es the pointer it is handed, so it is now rebuilt
    in the task's own DGROUP (`$win16_msg_lparam16`, scratch reserved at the
    bottom of DGROUP by the NE loader).
- ~~**Hearts goes straight to the client path and finds no dealer.**~~ FIXED,
  and it was five bugs in five different layers, none of them the DDE guess the
  previous version of this item made. Hearts now puts up its own startup dialog
  ("What is your name?" / "I want to be dealer"), OK closes it, and it goes on
  to ask for the dealer's computer name — `test/test-win16-hearts-startup.js`
  pins the whole sequence.
  - **The command line was `"\r"`, not `""`.** InitTask handed back the DOS
    command tail, carriage-return-terminated. That pointer *is* WinMain's
    lpCmdLine, which is documented null-terminated, so MFC compared the first
    byte, saw 0x0D, and concluded it had been given a command line telling it
    to join a game. One byte.
  - **Every Win16 dialog-item API read the wrong argument.** `$win16_arg16` is
    ESP-relative and `$win16_call32_begin` moves ESP to the 32-bit scratch
    stack, so an argument read after the bridge opens comes off that frame
    instead — index 0 being the zero written there as a return address. Ten
    functions did it, so GetDlgItem asked for control 0 whatever it was passed.
    `$win16_arg16` now traps if called while the bridge is open.
  - **One posted message was delivered twice.** `$handle_PostMessageA` decided
    "is this window another instance's?" with `i32.and`, which evaluates both
    operands — so the host call that queues the message on the owning instance
    ran for our own windows too, and then this side queued it again. Not a
    Win16 bug: any app posting to itself got the message twice.
  - **Creating a dialog never ran the WH_CALLWNDPROC filter.** CreateWindow
    always had; DialogBox did not. MFC attaches its C++ object to the HWND from
    inside that call, and its dialog procedure's first act is to look the object
    back up — it called a virtual through the null it got.
  - **DefDlgProc's share was missing.** MFC subclasses the dialog and passes
    IDOK down the chain expecting the dialog to close, so the procedure our
    window hands back on subclassing has to end the dialog, and the pump has to
    route to the *window* procedure once one is installed rather than to the
    DLGPROC.

  Three more things stood between that and a game, all now fixed:
  - **NDDEAPI.DLL would not load**, and Hearts greys out the whole "How do you
    want to play?" group when it cannot ask `NDdeGetWindow` whether network DDE
    is there. NDDEAPI is now a module the emulator implements, and its one
    entry point answers with a window of ours: DDEML is implemented in WAT
    rather than by a separate agent process, so that is the truthful answer
    rather than a zero. A module we implement has no export table for
    GetProcAddress to read, so the entry point gets a fixed thunk-segment slot
    the way the pumps do.
  - **Control messages are numbered per class from WM_USER in Win16** and in
    distinct ranges in Win32 — BM_, EM_, LB_, CB_, SBM_ and STM_ all start at
    0x400 — so which block a number belongs to can only be decided from the
    class of the window being addressed. `BM_GETCHECK` arriving as 0x400 meant
    every radio button answered "not me".
  - **PeekMessage cannot be bridged the ordinary way.** It is the one handler
    that ends by setting EIP from its own stack frame, so an idle PM_NOREMOVE
    loop yields; across the bridge that address is the scratch frame's zero.

  Hearts now deals: `test/test-win16-hearts-startup.js` drives name, dealer, OK
  and New Game and checks a green table with cards on it.

  **Its menu commands are covered now too** —
  `test/test-win16-hearts-menus.js`, 18 checks, every command on both menus.
  The sweep never reached them because it drives a freshly launched app, and
  Hearts at that moment is inside its modal startup dialog; answering the
  dialog first is what makes the menu bar live. Two commands were broken and
  neither fault was Hearts-specific:

  - **`ClientToScreen` and `ScreenToClient` (USER.28/29) did not exist.** MFC
    centres every dialog with GetParent/GetClientRect/ClientToScreen, so this
    was on the path of any 16-bit MFC dialog. Game > Score died there.
  - **A dialog was never seeded its own first paint.** `$win16_dlg_run` marked
    every *control* dirty and never the dialog window, which no dialog built
    only from controls can notice. Template 502 (the Score Sheet) holds one OK
    button and the task draws the whole score grid from WM_PAINT, so the sheet
    came up as an empty grey box. Painting it then wanted `GDI.56 CreateFont`,
    also missing.

  **CORRECTION to what this file used to say here:** it claimed the DDE server
  wrapper near `seg 1:0x79ec` is never reached and "only the client one ever
  runs", so something upstream had already chosen client mode. That is no
  longer true, and it stopped being true when the startup dialog started
  working. Choosing "I want to be dealer" now takes the server path: a traced
  dealer run calls `DdeInitialize`, eight `DdeCreateStringHandle`,
  `DdeNameService` and three `DdePostAdvise`, and **never** `DdeConnect`. There
  is nothing left to find upstream of the dialog.
- **DDEML conversations: established, but not yet carrying transactions.**
  `src/09f-win16-ddeml.wat` now joins two instances in one room. A registered
  service name is *kept* (it never was — a registration nobody recorded is a
  server no client can find), `DdeConnect` puts a CONNECT on the wire and
  waits, the instance holding that service answers, and both sides record who
  they are talking to. `DdeDisconnect` tells the peer rather than forgetting
  it locally, since a conversation the other side still believes in is a
  server holding a seat for a player who has gone.
  `test/test-win16-dde-room.js` is the gate: two instances, separate memories,
  separate DDE tables, on one loopback segment — 14 checks including that
  nobody answers for a service that was never registered.

  Two things worth knowing before extending it:

  - **The room is one queue with one reader.** `$vsock_pump` owns it and used
    to *discard* any frame whose magic it did not recognise, so a DDE frame was
    eaten before DDEML saw it. It now hands `DDE1` frames to
    `$win16_dde_deliver`. Leaving them queued is not an option either: nothing
    else drains, so the socket stream would stall behind them. Any third
    protocol on this wire has to be demultiplexed in the same place.
  - **`DdeConnect` parks by not returning.** A Win16 API is entered with its
    arguments still on the task's stack and nothing popped until
    `$win16_api_return`, so declining to return re-enters the same call with
    the same arguments next pass. No continuation slot, nothing to unwind.
    This is why it is native rather than bridged — across the Win16 bridge the
    frame it would park on belongs to a scratch stack about to be discarded,
    which is the same reason `PeekMessage` cannot be bridged.

  **Hearts will still not join, and it is NOT a name-matching bug.** Both
  sides were traced and their interned strings dumped out of the handle table
  at guest `0x8F9200` (that address is `WIN16_ARENA + 127*0x10000 + 0x9200`;
  `--dump` reads it directly):

  | | service | topic |
  |---|---|---|
  | dealer registers | `MSHearts` | `Hearts` |
  | client asks for | `\\DEAL\NDDE$` | `Hearts$` |

  That is NetDDE working exactly as designed. The client does not connect to
  the dealer's application at all — it connects to the **NetDDE agent** on the
  named machine (`\\COMPUTER\NDDE$`) and names a **DDE share** as the topic;
  the trailing `$` is the share marker. The agent on the far side looks that
  share up in the machine's share database, which maps `Hearts$` onto the
  local pair (`MSHearts`, `Hearts`), and makes the real connection locally on
  the client's behalf. No string the client sends will ever equal a name the
  dealer registered.

  Hearts does not create the share itself: it imports no NDDEAPI entry
  statically and only `LoadLibrary`s it for `NDdeGetWindow`. On a real Win98
  box the share is part of the *machine*, put there at install time. So the
  piece to write is a **DDE share table** — share name to (service, topic) —
  consulted when a CONNECT names `\\host\NDDE$`, modelling the share database
  a Win98 install ships with. It belongs in the emulator as a table, not as an
  `if (this is Hearts)`.

  ~~**`XTYP_CONNECT` is not offered to the server's own callback.**~~ DONE.
  A DDEML server is not a table of names, it is an application with a callback,
  and that is where it says yes or no. The drain now QUEUES the question and
  the task's own message pump asks it — the callback cannot be run from the
  drain, because `$vsock_pump` is called from inside arbitrary API handlers and
  redirecting EIP there returns into the wrong frame. The callback is entered
  with a far return onto `$WIN16_DDE_CB`, which acts on the answer and then
  finishes the interrupted `GetMessage` with an idle message, so the task's
  loop never notices the detour. A conversation stays in state 2, offered, until
  the application accepts; a refusal is silence, which is what `DdeConnect`
  against a server returning FALSE sees.
  `test/test-win16-dde-connect-callback.js` pins both answers: two instances on
  a loopback segment, both running a real 16-bit message loop, with the
  server's callback a hand-written stub whose answer the test chooses.

  ~~**`DdeClientTransaction` fails, so nothing crosses.**~~ DONE for
  `XTYP_REQUEST`, which is the one Hearts opens with (`Join`). It follows the
  same three steps: the drain queues the question against the conversation it
  arrived on, the pump asks the application, and the handle the callback
  returns is emitted as a DATA frame. The client parks on the shared
  `$win16_dde_park` and the drain turns the reply into a data handle, so
  `DdeGetData` reads it like any other. A transaction nobody answers in time
  fails with `DMLERR_DATAACKTIMEOUT` and **leaves the conversation up** —
  tearing a session down over one slow item would be wrong.

  A conversation now remembers its topic, because `XTYP_REQUEST` hands the
  callback the topic and the item and only the conversation knows the former.

  ~~**`DdePostAdvise` has no advise loops to feed.**~~ DONE, and this is the
  one Hearts actually runs on: its dealer posts an advise after each move
  rather than being polled. A client's `XTYP_ADVSTART` is offered to the
  server's application like any other transaction; if it agrees, the loop is
  recorded against that conversation. `DdePostAdvise` then turns into
  `XTYP_ADVREQ` back to the same application — "what does it say now?" — and
  the answer is pushed as `XTYP_ADVDATA` to a client that is not waiting on
  anything, so it goes straight to *that* application's callback. Asking twice
  for one item does not open two loops, and a loop dies with its conversation:
  one left pointing at a closed conversation would push into a handle that has
  since been reused. `XTYP_POKE` and `XTYP_EXECUTE` cross too.

  `XTYP_WILDCONNECT` works too: a connect naming no service asks who is out
  there, every instance with a service to offer is a candidate, and the
  application is asked what it will serve rather than whether it will serve
  this. An instance serving nothing still answers nobody. `DDE_FBUSY` is
  honoured as its own answer — "not now" is neither yes nor no, so the caller
  keeps waiting and a wait that only ever saw busy ends in `DMLERR_BUSY`
  rather than a timeout. `DdeClientTransaction` uses the caller's `dwTimeout`,
  clamped so a hopeful two milliseconds still gives the far machine a chance.

  **`XTYP_MONITOR` is refused, on purpose.** A monitor is a DDE spy that
  expects to be told about every transaction in the system, and none of that
  is delivered. An instance that registered happily and then saw nothing would
  be the worst outcome — a debugging tool silently reporting that nothing is
  happening — so `DdeInitialize` with `APPCLASS_MONITOR` fails with
  `DMLERR_DLL_USAGE`, which is what Windows uses for a class the DLL will not
  serve. Implement the delivery before accepting the registration.

  **Also fixed while checking the codes:** `DMLERR_LOW_MEMORY` is `0x4007`, not
  `0x4001` — `0x4001` is `DMLERR_BUSY`. Five sites were returning "busy" where
  they meant "out of memory", which an app retrying on busy would loop on.

  **On testing any of this:** use the in-process harness. Two instances on a
  `LoopbackSegment`, each with a real NE loaded so selectors and a message loop
  exist, is deterministic and runs in seconds. The two-process
  `test-win16-hearts-join.js` is the end-to-end shape but it is timing-bound
  and this machine is regularly at load 80–200, where the dealer needs three
  minutes merely to register; it is not in `run-all.sh` for that reason.
  Minesweeper is the host of choice for the in-process tests: Hearts needs
  CARDS.DLL staged before it runs at all, and nothing in these tests is about
  the app.
- ~~**Named resources returned 0.**~~ FIXED. A NAMEINFO id with bit 15 clear
  is not an id: it is an offset from the start of the resource table to a
  Pascal string, and the walker matched integer ids only, so every `Load*`
  handed a string failed outright. That is not a rare corner — Solitaire's
  group icon is stored as `"SOL"`, which is why it had no icon.
  `$win16_find_resource_ex` takes a name to match instead of an id, comparing
  without case the way USER does, and `$win16_res_lookup` picks between the two
  from the argument's selector. `LoadIcon` and `LoadBitmap` go through it.
  `LoadMenu` and `LoadAccelerators` deliberately do **not** yet: they bridge to
  the 32-bit `$handle_Load*A`, which take an integer id and walk the PE tree,
  so accepting a name there means teaching those handlers a second grammar.
  Nothing in the four apps needs it — Hearts' named `HEARTSMENU` arrives by
  another path — so it is left rather than half-done.
- Known execution-core gaps, all of which trap loudly and none of which the
  four apps reach: INT (including the INT 3Fh moveable-segment thunks), 16↔32
  thunking. `tools/ne-dump.js --resources` shows what a module
  actually ships, including named types and ids; `--menus` and `--dialogs`
  decode the RT_MENU and RT_DIALOG templates, which are the two resources whose
  16-bit layout shares nothing with the 32-bit one and so cannot be read with
  `tools/parse-rsrc.js`. `--menus-json=` is what `tools/menu-sweep.js` falls
  back to when the PE walker finds nothing, and `--seg-bytes=N:OFF[:LEN]` reads
  raw segment bytes, which is the only way to look at the DGROUP string a
  disassembly names as `push 0x1e8`.
- Tracing for message-queue problems, added while chasing the Hearts duplicate:
  `--trace-win16` now prints `post ->` for every message going into the posted
  queue and `task-loop ->` / `dlg-pump ->` for every one coming out, each with
  the queue depth. A message delivered twice is either pushed twice or popped
  twice, and only both halves together say which. `--input=N:dump-msgq` prints
  the queue itself, which `--dump` cannot: it lives at WASM 0x400, below
  GUEST_BASE, so that address goes through `g2w` and lands somewhere else.
- ~~**Solitaire showed an empty table, and cards could not be dragged.**~~
  FIXED, and neither was a Solitaire bug.
  - **The initial erase arrived too late.** It was left to the non-client flag,
    which GetMessage drains *after* the post queue — so it landed behind
    whatever the app had posted for itself. Solitaire posts its deal from
    WM_CREATE and draws each card as it deals rather than from WM_PAINT, so the
    erase painted the table green over a hand already laid out and nothing
    asked for it back. The cards appearing "only when you touch a menu" was the
    menu invalidating the window. `$win16_ShowWindow` now posts the erase with
    its own WM_SIZE/activation group, ahead of the app's, which is the order
    Windows gives it: there the erase happens inside ShowWindow before the
    task's message loop runs at all.
    Worth recording what did *not* work, since both look right: invalidating
    the window when the erase is delivered fixes Solitaire but costs a full
    repaint per erase per window, which timed mspaint's tool sweep out; and
    invalidating at ShowWindow is dropped on the floor, because the window has
    no size yet and the paint phase silently discards an empty update rect.
  - **PtInRect had x and y the wrong way round.** Its POINT is one argument
    passed *by value*, so a doubleword push puts x nearest the top of the stack
    — the opposite of the separate x and y of InflateRect beside it. The test
    asked whether (y, x) was in the rectangle, which is false for every card, so
    the button-down that starts a drag found nothing under the cursor. Any
    future Win16 API taking a POINT by value has the same trap: `ChildWindowFromPoint`
    and `WindowFromPoint` are the two that are not implemented yet.
  - `GDI.103 PtVisible` was missing; Solitaire asks it while drawing the stack
    it has picked up. `test/test-win16-solitaire-play.js` covers both the
    untouched deal and a drag that empties the column it came from.
- Structure width is the recurring bug class here, and it is worth stating
  plainly: **a structure that crosses the boundary is a different size in the
  two worlds.** `SystemParametersInfo(SPI_GETWORKAREA)` wrote a 32-bit RECT
  into FreeCell's 8-byte one, four bytes below its own return address, and the
  task returned to zero. A watchpoint on that slot named it in one run. The
  APIs that carry a structure now convert explicitly and stop on one they do
  not know rather than guessing at a width.
- Argument *order* is the second recurring bug class, and it bites in both
  directions: `CreateWindowEx` takes `dwExStyle` as its **first** parameter, so
  Pascal pushes it deepest and no other index shifts, while
  `AdjustWindowRectEx` takes it **last**, where every other index does shift.
- Argument *width* is the third, and it is the nastiest because it is silent
  and delayed. A Win16 `HHOOK`, `HSZ`, `HCONV` and `HDDEDATA` are all **far
  pointers**, not words. Getting one wrong pops two bytes too few, and the
  caller's frame drifts two bytes at a time until some unrelated `RETF` half a
  screen away reads a garbage CS and the trap names a function that has
  nothing to do with it. Do not guess a Win16 signature: `tools/ne-dump.js
  --relocs=N` gives the offset of every import call site and
  `tools/ne-disasm.js` shows what the app actually pushes there.

## 2. Fonts — e2e verification and the original measurement (session `ea1ba02f`)

- Files: `src/10b-gdi-font.wat`, `src/10c-truetype.wat`, `lib/host-imports.js`,
  `lib/font-substitutions.js`, `fonts/substitutions.json`,
  `tools/v86-reference/*`, `test/fixtures/font-metrics.json`,
  `test/test-wat-font-metrics-reference.js`
- Commits `eff03cb`, `45e58ae` have unit coverage and a byte-identical notepad
  render, but **no e2e run** — see item 0, which is largely this.
- Its own stated next step ("#1"): the original measurement question, now that the
  measurement infrastructure exists; item #3 on its list comes free with it.
- Still open and font-shaped: `test-winhelp-reference` fails on
  `WinHelp close glyph differs from Win98`.

## 3. Async I/O demo path (session `410075d6`)

The blocking question is **answered**: the user picked Blobby Volley directly,
so the telnet-first detour is dropped.

- **Blobby Volley single-player is done** (`bd9a56a`) — it plays, with no
  emulator change needed. See `apps/blobby-volley.md`, covered by
  `test/test-blobby-volley.js` (9 checks, e2e tier).
- **The DirectPlay lobby now runs** (`f9e2d25`). `NETZWERKSPIEL` reaches both
  end states: host → `Open` + `CreatePlayer` → "WARTE AUF EINEN GAST…", guest →
  `EnumSessions` → "GEFUNDENE SPIELE: LOCAL SESSION". Covered by
  `test/test-blobby-network.js` (10 checks, e2e tier). Two fixes: the
  `DirectPlayCreate` handler popped 20 bytes for a 3-arg function (which
  quietly killed the game thread), and it was an `E_FAIL` stub even though
  `IDirectPlay3` was already implemented behind `CoCreateInstance`.
- **Still open: traffic between two processes.** `Send` returns `DP_OK` without
  sending, `Receive` returns `DPERR_NOMESSAGES`, and `EnumSessions` fabricates
  its one session — so a host and a guest cannot meet. This is the remaining
  real async I/O, and it pairs with the virtual LAN in item 4:
  `src/09d-winsock.wat` + `lib/vlan-wire.js` already join two emulator
  processes into one room, and the guest screen offers a **Host-IP** field that
  maps straight onto `--vlan-ip`.
- **Telnet** (`apps/telnet.md`) remains available as a cheaper async-I/O proof if
  DirectPlay turns out to be a long haul: 0x0 `WS_POPUP` window, never calls
  `ShowWindow`, pumps forever; the XP console client also needs console
  rendering.

## 4. Virtual LAN / TetriNET (session `b303255f`) — mostly landed

- `ecd3a6b` + `209aa00` now carry the round-trip gate and the prop-atom fix.
  Verified: corpus 106 PASS / 0 FAIL, `test-vlan-tetrinet` 6/6.
- Files: `src/09d-winsock.wat`, `src/09a5-handlers-window.wat`,
  `test/test-vlan-tetrinet.js`, `test/test-wat-winsock-hostname.js`
- Remaining: the browser wiring for the virtual LAN (`lib/vlan-wire.js` currently
  proves loopback + cross-process; the browser side is unbuilt).

## 5. WinHelp (session `351afaf4`) — clean, one open item

- `87a9546` verified: parser 606/7, `test-help` 5/5, `winhelp-dll-macro` 6/6.
- Files: `src/09c6-winhelp-core.wat`, `src/09c7-winhelp-hlp.wat`,
  `src/09c9-winhelp-ui.wat`, `tools/hlp-wat-check.js`
- Open: the close-glyph mismatch above (font work, not parser work).

---

## Cross-cutting, carried over from earlier sessions

- ~~**`CW_USEDEFAULT` ignores only x, not y**~~ — FIXED `7d4d1af`. x and y are a
  pair, so `x=CW_USEDEFAULT` makes the system pick both and ignore the caller's
  y. Solitaire and Notepad now open in the y=20 cascade slot. The 20px shift
  fixed three e2e tests (`solitaire-maximize`, `notepad-find-next-positive`,
  `notepad-find-not-found-msgbox`) and broke exactly one, `notepad-menu`, which
  sampled a fixed desktop point for the File dropdown; its anchor is now derived
  from the live window origin. Verified with a full before/after e2e diff in a
  clean worktree, plus unit 92/2 and corpus 106 PASS / 0 FAIL.
- ~~**mspaint scrollbar travel**~~ — FIXED `2bc5c16`, and it was never an
  emulator bug. `test-mspaint-scrollbar-thumb` (3/5 → 6/6) and
  `test-mspaint-large-scroll` (2/5 → 5/5) were pinned to the geometry of a
  212x283 view; the frame's client inset is now correctly 6px, the view is
  202x274, and Paint's page/4 arrow scroll moved with it. New rot-proof input
  actions in `test/run.js`: `scroll-click`, `scroll-drag`, `dump-scrollbar`,
  `caption-click`, and `assert-standard-scroll` now takes `N%` of the bar's own
  page size. Three mspaint `execFileSync` timeouts also raised to 45s — they are
  hang ceilings, not performance budgets, and were going red on box load alone.
- **Screensaver GDI-bridge regression** — `apps/screensavers.md` Task 0, fixed
  2026-08-15 via the RLE DIB path; re-read before trusting it, since
  `test-cwordzap-render`'s RLE4 asserts are failing again in the current e2e run.
- ~~**d3rm `MeshBuilder::Load` / ProgressiveMesh**~~ — RESOLVED 2026-08-16. The
  `D3DRMERR_NOTFOUND` was correct: our DX SDK extract ships no `camera.x`, and
  the one we had was a ProgressiveMesh copied under that name in April, which a
  MeshBuilder refuses by design. Given a real plain `Mesh` file the viewer loads
  and renders — DX5 D3DIM Viewer `KNOWN_BAD_RENDER` → **PASS**, corpus 106 → 107
  PASS. Retained-mode geometry works; see `apps/screensavers.md` Task 3.
- **CITYSCAP blank screen** (Task 2, MEDIUM), **FOXTROT white silhouettes**
  (Task 1, LOW).
- **CD Player** renders frame and menu but not its transport controls — the only
  other unresolved emulator bug among the sweep WARNs.
- **External-asset WARNs** (not emulator bugs; each names its blocker in
  `test/test-all-exes.js`): Kodak Preview needs OIDIS400+OIADM400, HyperTerminal
  needs HYPERTRM.dll, Welcome98 needs `welcome.dat`, IP Config has no adapter,
  JigSawedME and Rodent2000 need the VB6 runtime, XP EOL is version-gated by
  design.

---

## Hazard worth knowing about

Something in this shared tree rewrites whole `src/` files that other agents have
dirty. A verified `$prop_key` fix was reverted from disk between a read and a
commit; `git commit <path>` then silently committed only the other file, and the
loss was visible only in the `1 file changed` stat. **Check the file count in
commit output — do not assume your hunks landed.**

## Follow-through and 3D performance — user requested 2026-10-01

- [x] Reconcile Codex handoffs and turn unfinished outcomes into tasks
  id: OPS-HANDOFF-FOLLOWTHROUGH
  status: done
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  Next: Complete: all nine original roots and child dispositions mapped to integrated, queued, blocked or deferred outcomes; six missing follow-ups added without launching backlog.
  Done: Each handoff has an explicit disposition: integrated, queued with a task ID, blocked with a concrete reason, or deferred. Update TODOS and STATUS from evidence; distinguish accepted custody from completed implementation. Preserve the automated-review block and deferred Claude ownership.
  Evidence: ops/handoffs/ops-handoff-followthrough.md
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0

- [x] Build a repair queue from failing EXE candidates
  id: EXE-FAILURE-TRIAGE
  status: done
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  Next: Complete:167result hashes checked,5failed/1harness-error deduplicated; actionable findings mapped to Zuma, Pirates route/terrain, SAM production and Q2 traversal tasks. Historical/unknown captures kept distinct.
  Done: Each actionable failure has a candidate-linked task with route, build, evidence, reproduction and done criteria. Distinguish historical/unreviewed evidence, application failures and harness errors; merge duplicates and shared root causes. Unknown or missing captures are not automatically failures. Do not launch the whole corpus concurrently.
  Evidence: ops/handoffs/exe-failure-triage.md; scratch/exe-failure-triage-20261002/run-inventory.json
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0

- [x] Reproduce and resolve Zuma startup QueueUserAPC failure
  id: EXE-ZUMA-STARTUP
  status: done
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  candidate: reflexive-zuma-deluxe
  Next: None for startup triage: reviewed title/loading reached on c474288d with no historical missing QueueUserAPC; menu/gameplay unverified and would require a separate task.
  Done: A current reviewed run either demonstrates the historical failure is resolved or reproduces and fixes its cause with a focused regression. Capture startup/menu evidence and exact build/command; do not claim gameplay from a menu alone or add a silent-success stub.
  Evidence: ops/handoffs/exe-zuma-startup.md; ops/handoffs/exe-zuma-preflight.md; scratch/runs/20261002T042949Z-reflexive-zuma-deluxe-startup/result.json
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Notes: Planned60s observation ended normally4290batches/exit0; outer90s guard unused,6084 frozen hashes unchanged. Root reviewed640x480 title/loading PNG; no hang or gameplay claim. Both earlier harness failures preserved.

- [ ] Compare NFS3 speed and correctness in Glide, D3D and original software
  id: NFS3-RENDERER-BENCH
  status: parked (d2fc4cce: 3/3 paths qualified, inconclusive on a GPU-less boat; needs a real-GPU host)
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  candidate: need-for-speed-3-demo
  Next: REVIEW 2026-10-10T02:22Z claude:90024109, commit d2fc4cce. Executed on CPU-only boat bx_why3tmc3 (main 1d573ba0, headful Chrome 151, SwiftShader explicit + CDP-verified): 3/3 original paths qualified (only requested DLL, 640x480, softtria pitch 1280, seed/scene), 18/18 timed windows in blocks glide,d3d,software,software,d3d,glide. Medians glide 14.3 swaps/s (drift 4.4%), d3d 14.1 flips/s (15.7%), software 12.8 present-requests/s (20.8%): INCONCLUSIVE by the predeclared budget. GPU process (SwiftShader) 71-86 of ~120 CPU-s/window. Bottlenecks: d3d full-frame 1.2 MB readback/Flip ~34 ms + 47 ms wait; glide render worker 90% gl.getError; software = guest compute ($uop_fast 34%). Fixed: hardware gate trusted WEBGL_debug_renderer_info, which reports a fake Intel UHD 620 on this box; now requires CDP agreement (refusal verified). Remaining for Done: a real-GPU host + per-interval frame-time p95 (tool counts per window only).
  Done: Report all three guest renderer paths on the same identified source/WASM/browser/CPU/GPU, resolution and controlled race/weather/input route. Separate original game software rendering from our software backend; verify no hidden GPU fallback or SwiftShader substitution. Save reviewed race images, repeated warmed-up FPS/frame-time median and p95, CPU profiles, draw/triangle/texture/upload/readback/fallback counters, sample counts and spread, plus same-path control. Report unavailable paths explicitly. Record bottlenecks and a predeclared performance acceptance budget; historical high-load FPS is not a current baseline.
  Evidence: ops/handoffs/nfs3-renderer-bench.md; scratch/nfs3-renderer-bench-20261002/closure-report.json; scratch/nfs3-renderer-bench-20261002/local-resource-preflight.json; ops/handoffs/nfs3-capacity-recheck.md; ops/handoffs/nfs3-software-prep.md; scratch/runs/20261010T0215Z-nfs3-renderer-bench-swiftshader (report.md)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T01:53Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Notes: Old worker released at migration. Ricochet launch proof, Collapse association review, NFS3 backend identity and Jazz visual admission remain unresolved; package preparation is not gameplay/FPS acceptance.

- [x] Audit the actual shared 3D rendering pipeline across APIs
  id: RENDER-SHARED-AUDIT
  status: done
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  Next: Complete: main/private API-backend matrices, semantic/resource gaps and proposed slices S1-S5 documented. Backlog implementation awaits scheduling; no broad private merge.
  Done: Publish an implementation-backed API/backend matrix, ownership boundaries, duplicate semantic lowering and remaining divergence, with bounded migration tasks and representative correctness/performance fixtures. Distinguish one shared worker or texture registry from a shared drawing contract. Preserve API-specific semantics at adapters and explicit fallback behavior. Do not claim the proposal is already implemented.
  Evidence: ops/handoffs/render-shared-audit.md; scratch/render-shared-audit-20261002/source-manifest.json
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0

- [x] Keep the coordinator picking up tasks and completed handoffs
  id: OPS-COORDINATOR-CONTINUITY
  status: done
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  Next: Use the durable inbox at each queue/handoff boundary under the existing active native goal; refresh truthful runtime evidence and acknowledge exact reviewed notice IDs.
  Done: New ready tasks and worker handoffs are acknowledged and reconciled without manual prompting, with deduplicated wake requests and at most one coordinator. Never send wake text into a tool approval or a busy terminal. Test idle, busy, approval, disconnect and restart cases using fixtures. Before going idle, convert unfinished outcomes into follow-ups and record why remaining work cannot proceed; do not bypass blocked review or take deferred claims.
  Evidence: ops/handoffs/coordinator-continuity.md; ops/coordinator-inbox.js; ops/coordinator-inbox.test.js; scratch/coordinator-live-scan.json; scratch/coordinator-live-ack-restart.json; scratch/coordinator-natural-handoff.json
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Notes: 10 fixture tests PASS; live busy scan51 notices,2 exact ack/restart persistence, and natural Zuma handoff change delivered with prior version retained until explicit ack.4 notices acknowledged total; remaining pending preserved. Native goal owns continuation; no wake daemon or terminal input.

- [ ] Implement the next bounded shared 3D command-contract slice
  id: RENDER-SHARED-IMPLEMENT
  status: backlog
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  depends-on: RENDER-SHARED-AUDIT
  Next: Use the audited matrix to select and record the smallest shared semantic slice, exact owned files and per-API regression cases before implementation.
  Done: The chosen slice uses one explicit drawing/resource contract with thin API adapters and GPU/software executors, removes the corresponding duplicate interpretation, and passes differential pixel/state/resource-lifetime and ordering tests for affected APIs plus representative game captures. Record unsupported semantics and remaining migration tasks; a shared worker alone is not completion.
  Evidence: docs/render-command-unification.md; ops/handoffs/mig-render-textures-validation.md

- [ ] Profile and optimize the shared 3D path with repeatable performance gates
  id: RENDER-PERF-GATE
  status: backlog
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  depends-on: NFS3-RENDERER-BENCH, RENDER-SHARED-AUDIT
  Next: Select the largest measured shared bottleneck from the renderer matrix, declare workload/metric/regression budget and compare one bounded change against an unchanged control on a quiet host.
  Done: Show repeatable improvement beyond control noise with unchanged reviewed images/state and no regression beyond the declared budgets across representative legacy D3D, D3D8/9, OpenGL and Glide GPU/software workloads. Attribute CPU emulation, translation, submission, GPU, readback and presentation costs separately. Save raw measurements/profiles/build hashes and reject changes whose gains disappear in game routes. No default switch on microbenchmark-only evidence.
  Evidence: docs/render-command-unification.md; docs/re-notes/need-for-speed.md; ops/handoffs/mig-fp-kernel.md

- [ ] Diagnose Pirates stopping before the target rendering operation
  id: PIRATES-ROUTE-FOLLOWUP
  status: blocked
  note: 2026-10-06T17:40Z parked by claude:1863d2b5: self-claimed 04:09Z, then reassigned by the orchestrator (DEUSEX-HW-RENDERER onward) without progress. Pirates runs exceed 1 GB, so under the heavy-test policy the Play->captain->StretchRect route needs a boat (REQUEST BOAT) or a BIGMEM window; free to reassign.
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  candidate: pirates-2004
  Next: Captain-route stop remains independent and unmeasured. Before claiming current-main actual rectangular/filter2 transfer, reconcile missing archived implementation under PIRATES-TRANSFER-REENTRANCY; main058b82eba still explicitly traps those shapes. Preserve historical no-transfer outcome; do not rerun old-build recipe as current-main acceptance.
  Done: Identify the route failure and either validate the actual game transfer/readback with reviewed images or record a precise blocking dependency. Link unresolved terrain defects separately; a zero-transfer run is not a rendering pass.
  Evidence: ops/handoffs/mig-pirates-stretch.md; ops/handoffs/mig-pirates-stretch-recipe.md
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256

- [x] Verify Quake II world traversal beyond a changed frame
  id: Q2-MOVEMENT-FOLLOWUP
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  candidate: quake-2-demo-installer
  Next: Complete: original ordinary forward/reverse/idle traversal independently reviewed on WebGL2534731b3 and software069662726. Runs20261007T213620Z-quake2-ordinary-traversal and20261008T000901Z-quake2-software-ordinary retain reference identities; no redundant run.
  Done: Reviewed before/after world captures and position/landmark evidence demonstrate actual traversal, with exact build, route and renderer provenance. Retain texture/resource checks and distinguish movement from animation or camera-only changes.
  Evidence: ops/handoffs/mig-render-q2.md

- [x] Recover and review screenshots and diagrams from historical runs
  id: OPS-HISTORICAL-VISUALS
  status: done
  created: 2026-10-02T04:03:23.368Z
  created-by: user-request
  Next: None for this bounded recovery/audit. Unlinked-candidate and unresolved-association searches are recorded separately as backlog; no new game runs or automatic restorations.
  Done: Publish confidently associated screenshots/diagrams as file-backed run bundles with exact original path, content hash, source timestamp basis, build/route when known and provenance. Link candidate, session and task only with evidence; unknowns stay unknown. Deduplicate by image hash, visually inspect contact sheets, classify blank/loading/error/gameplay captures and select a representative frame. Preserve failed/black-frame evidence in run details rather than deleting or calling it a pass. Review the 147 previously quarantined ambiguous bundles; restore only verified associations, never infer GeneRally from prose containing generally. Produce a coverage report listing recovered images, missing sources and unresolved associations; do not execute historical commands or rerun games to fabricate historical captures. Keep historical/unreviewed status explicit, and link failures to EXE-FAILURE-TRIAGE without claiming current compatibility.
  Evidence: ops/handoffs/ops-visual-acceptance.md; ops/handoffs/ops-quarantine-review.md; ops/handoffs/ops-visual-coverage.md; scratch/ops-visual-acceptance-20261002/final-verification.json
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Notes: Final18images/18distinct hashes and metadata verified; seven new images reviewed,522protected inputs unchanged,441quarantine files preserved.147rows reconcile9supported/5incorrect/133unresolved with rootNFS2proof. All9supported rows and separately correctedNFS3 copy published; coverage30of76,46unlinked. No current compatibility/performance claim.

## Original handoff follow-ups — reconciled 2026-10-02

- [ ] Validate FP variants in matched-work game windows
  id: FP-GAME-GATES
  status: backlog
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  depends-on: MIG-FP-KERNEL
  Next: Prepare P/P control and P/PCM/PCP game windows with FP_SHARE_CALENDAR=1, reviewed pixels/API/tier counters and exact host identities.
  Done: Matched work and meaningful timing precision/control established, or exact failed gate recorded; no default switch from microkernel evidence.
  Evidence: ops/handoffs/fp-next-root.md; ops/handoffs/mig-fp-kernel.md

- [!] Complete Serious Sam production integration and ordinary gameplay
  id: SAM-PRODUCTION-FOLLOWTHROUGH
  status: blocked
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  depends-on: MIG-SAM-REP-RESTART
  candidate: serious-sam-demo
  Next: After REP review clears, validate generic fault/classifier contracts, integrate only owned tested timer/TLS/memory slices and review diagnostic transform removal before launcher/input work.
  Done: Production build reaches menu and level with supported input, verified movement/combat and no private diagnostic shortcuts; exact source/module and focused regressions retained.
  Evidence: ops/handoffs/mig-sam-fault-remainder.md; ops/handoffs/01a0f6ff-da61-7710-a604-d9442103dbbd.md
  blocker: REP validation remains incomplete after automated review; do not retry through another channel.
  waiting-on: MIG-SAM-REP-RESTART review resolution

- [ ] Integrate tested private renderer changes without losing main work
  id: RENDER-PRIVATE-INTEGRATION
  status: backlog
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  depends-on: RENDER-SHARED-AUDIT
  Next: Use audit to select a coherent private patch, reconcile intervening main changes and create a frozen integration candidate; exclude unvalidated empty-quad optimization.
  Done: Selected changes validated on current integration base with affected API games/tests and exact identities; unvalidated changes kept separate and any merge follows explicit ownership review.
  Evidence: ops/handoffs/01a0eb29-4302-7e20-9b06-7084fb37358b.md; ops/handoffs/mig-render-textures-validation.md

- [ ] Diagnose Pirates white terrain with a controlled capture
  id: PIRATES-TERRAIN-REVIEW
  status: backlog
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  depends-on: PIRATES-ROUTE-FOLLOWUP
  candidate: pirates-2004
  Next: Separate terrain rendering from the captain-route stop and reproduce the visible defect on an identified reachable gameplay state.
  Done: Reviewed terrain evidence identifies the failing contract and focused correction or concrete dependency; no zero-transfer pass used as terrain proof.
  Evidence: ops/handoffs/01a0f736-78f1-7822-8b37-159d6f8ed94d.md

- [ ] Review nested transfer packet preservation
  id: PIRATES-TRANSFER-REENTRANCY
  status: backlog
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  candidate: pirates-2004
  Next: October8 main058b82eba audit: only whole-surface/filter0 support; archived428c9abed rectangle/filter2 packet implementation is absent from main. Isolate archived source/tests, audit nested callback deferral and per-invocation stage/packet ownership, prove negative/positive nested pixel/cleanup behavior before integration. See ops/handoffs/pirates-stretch-main-reconciliation-20261008.md.
  Done: Explicit ownership/lifetime contract and focused nested-call regression, or exact unsupported case recorded; no unchecked pooling/copy removal.
  Evidence: ops/handoffs/01a0f736-78f1-7822-8b37-159d6f8ed94d.md

- [ ] Reconcile remaining historical recovery changes against current main
  id: RECOVERY-PATCH-RETRIAGE
  status: backlog
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  Next: Perform read-only patch-equivalence audit of codex/recovery-main-20260910 and current main, separating landed, obsolete and missing runtime/overlay/save/screensaver changes.
  Done: Each remaining change has current evidence and explicit disposition/task; no stale branch bulk merge or old-build acceptance reused.
  Evidence: ops/handoffs/01a08812-a2da-7333-83fc-851ef8fff7b1.md


- [ ] Measure browser FPS for strongest local and desktop game candidates
  id: OPS-GAME-FPS-BASELINE
  status: in_progress
  candidate: jazz-jackrabbit-2-demo-installer, reflexive-collapse-crunch, reflexive-ricochet-xtreme, unreal-special-edition, gta2-demo
  done: Publish run performance metadata with guest present counts, wall duration, per-sample p95 frame time, renderer/GPU, hardware-versus-SwiftShader, scene, build hash and measurement date; review playable route before measuring. No menu, browser rAF or CLI batch timing relabelled as gameplay FPS.
  Next: Inventory exact available fixtures and released route packages, then qualify gameplay for the first ready candidate; canceled conditional launches stay canceled.
  Notes: Old worker released at migration. Ricochet launch proof, Collapse association review, NFS3 backend identity and Jazz visual admission remain unresolved; package preparation is not gameplay/FPS acceptance.
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T13:40Z after user said park TicTacDrop)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  accepted: 2026-10-02T05:21:49.472399+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Evidence: ops/handoffs/ops-game-fps-baseline.md; ops/handoffs/ops-fps-labels.md; ops/handoffs/ops-historical-fps-semantics.md; scratch/ops-gta2-fps-20261002/root-review.md; ops/handoffs/ops-unreal-fps-preparation.md; ops/handoffs/ops-jazz2-package.md; ops/handoffs/ops-collapse-v2-package.md; ops/handoffs/ops-ricochet-measurement.md

- [ ] Investigate remaining unlinked historical visuals and uncertain associations
  id: OPS-HISTORICAL-UNLINKED
  status: backlog
  created: 2026-10-02T05:58:39.995255+00:00
  created-by: orchestrator-historical-audit
  depends-on: OPS-HISTORICAL-VISUALS
  Next: Select a bounded evidence-only batch from46unlinked candidates or133 unresolved exact associations after scheduling; use existing source paths/tests/notes before any separately scoped transcript work.
  Done: Publish only confidently associated existing captures with exact hashes/provenance, update coverage and disposition deltas, preserve originals and explicit unknowns; never rerun games to fabricate historical evidence.
  Evidence: ops/handoffs/ops-visual-acceptance.md; ops/handoffs/ops-quarantine-review.md; scratch/ops-visual-acceptance-20261002/final-verification.json
  Notes: The completed18-image recovery/147-bundle audit remains accepted. This deeper search is unscheduled, not permission to take deferred Claude claims or restore incorrect associations.

## Gameplay coverage and EXE categories — requested 2026-10-03

- [~] Inventory every game and complete gameplay screenshot/FPS coverage
  id: OPS-ALL-GAMEPLAY-COVERAGE
  status: active
  reclaimed: 2026-10-07T07:42:56.312Z
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:30:54.631Z
  created-by: user via Telegram
  accepted: 2026-10-03T08:30:54.631Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Nine October9 owned records repaired to dashboard schema with original metadata retained; actual reader accepts9/9, zero matching warnings. SimCity reviewed city/budget images now exposed (2 gameplay images); failed startup, EULA hold and native-only tests remain unqualified. Continue existing FPS/audio and two-backend obligations; evidence ops/handoffs/run-metadata-schema-repair-20261009.json.
  Done: Each game has a reviewed actual-gameplay screenshot and valid scene-qualified FPS evidence, or an explicit per-game blocker with exact missing paths; menus, intros and raw Flip event rates are not gameplay FPS.
  Evidence: ops/handoffs/migration-core-ready-20261003.md

- [x] Group games into categories in dashboard EXE corpus
  id: OPS-EXE-CATEGORIES
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:30:54.631Z
  created-by: user via Telegram
  accepted: 2026-10-03T08:30:54.631Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete: live dashboard serves 241 entries in 14 categories; combined category/source/status filters verified.
  Done: Every EXE corpus game has a category, dashboard grouping/filtering works, and source/package groups remain separate from game genre.
  Evidence: ops/handoffs/corpus-categories-20261003.md; scratch/ops-preview/corpus-live-categories.png

## Per-game screenshot and FPS coverage — 2026-10-03

Exact required and missing fixture/artifact paths are recorded in each task JSON.
Categories exclude tools and graphics demos; distribution variants remain explicit.
Ready means assets are present, not gameplay or counter correctness.

- [x] Gameplay screenshot and FPS: abedemo
  id: GAMEPLAY-abedemo
  status: done (b090338bf; Right walks Abe into the next screen; 961 presents == 961 primary Unlocks; reviewed by orchestrator)
  candidate: abedemo
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (self-claim 2026-10-10T04:38Z, confirmed by orchestrator)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T05:05Z claude:90024109, notes b090338bf. CLI on main 65e67e6a9: holding Right walks Abe off the first RuptureFarms screen into the next room (Packaging / STAND HERE AND HOIST). Counter qualified: 961 slot-1 presents == 961 primary Lock/Unlock pairs through the game's lock helper (0x4994a2/0x49958c); second surface locked 2418x without presenting; no Blt/Flip/palette; 952/961 changed; ~27k guest blocks per frame; raw series 1 event per present. Not done: browser FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-abedemo.json; scratch/runs/20261003-abedemo-gameplay-restored17/result.json; scratch/runs/20261010T0500Z-abedemo-control-frames

- [x] Gameplay screenshot and FPS: aoe1
  id: GAMEPLAY-aoe1
  status: done (99d140d5; fast route to Bronze Age gameplay, priest select + move, byte-identical; frame = Blt 0x43bccc; headless rate not intrinsic (busy-poll), real FPS needs a browser real-clock count; reviewed by orchestrator)
  candidate: aoe1
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T03:59Z)
  Result: 2026-10-10T04:35Z main 5e31fc626: new fast route (200k/50ms) campaign -> gameplay by b1520; priest click selects (diamond/health/panel), right-click walks it; byte-identical runs. Frame counter = Blt to 0x08011020 ret 0x43bccc (84 / 29.85 guest-s); present-distinct 235 includes 149 palette SetEntries presents (not frames). Headless rate NOT intrinsic: falls with more budget (84/76/52 at 200k/400k/800k; AoE busy-polls), so no FPS quoted; next for a real FPS = browser real-clock count of the 0x43bccc Blt. Run scratch/runs/20261010T0430Z-aoe1-control-frames; notes 99d140d5.
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualify complete-frame measurement during actual gameplay; retain narrow input scope from reviewed batch17 evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-aoe1.json; scratch/runs/20261003-aoe1-gameplay-restored17/result.json

- [x] Gameplay screenshot and FPS: aoe2
  id: GAMEPLAY-aoe2
  status: done with explicit failure (edd9068a9: keyboard control + 1:1 FRAME counter ~2.8/s on GPU-less boat; page mouse jumps the camera into fog -> AOE2-PAGE-MOUSE-CAMERA-JUMP-20261010; reviewed by orchestrator)
  candidate: aoe2
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-10T03:28Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Result (2026-10-10T04:15Z): headful page on boat, main d8a00c63f (wasm f873b89e) + FRAME counter (edd9068a9: perf.logicalFrame 0x00444100, verifier 0x005d27e6, 1:1 with the frame Blt). Live Trial Coastal Map reached through the full menu route; keyboard control: H selects the Town Center, C queues a Villager (food 200 -> 150). FRAME 2.79 / 2.81 / 2.72 per s over three ~11 s raw samples on the untouched map (verifier 1:1), ~1.2-1.4M blocks/s, guest-CPU-bound on a GPU-less 4-vCPU boat. EXPLICIT FAILURE kept: in the page any world left-click (or the cursor at the top-left corner) moves the camera into black fog (H brings it back); the CLI selects units fine, so mouse unit control is not demonstrated in the page -- suggest a separate row (AOE2-PAGE-MOUSE-CAMERA-JUMP). Also: test-aoe2-gameplay's EULA click (104,415) is stale, Accept is (161,433). Evidence scratch/runs/20261010T0345Z-aoe2-gameplay-fps.
  Evidence: scratch/runs/20261010T0345Z-aoe2-gameplay-fps/result.json
  Next: Diagnose actual owning-Worker graphics initialization rejection. Unicode repair cleared prior DirectX6.1a failure; ordinary run now shows DirectDraw graphics error, with no gameplay/FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-aoe2.json; scratch/runs/20261003-aoe2-gameplay-restored17/result.json

- [ ] Gameplay screenshot and FPS: Arcanum: Of Steamworks & Magick Obscura Demo
  id: GAMEPLAY-arcanum-demo
  status: done (de0879bf0; ground click walks the player at the crash site; frame = 1 EndScene + 4 dirty-rect BltFast; reviewed by orchestrator)

  candidate: arcanum-demo
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (self-claimed 2026-10-10T07:16Z; ready row, no assignment after 5 min)
  worker: none (coverage worker exited0; gameplay both backends and WebGL measurement reviewed)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T08:15Z claude:90024109, notes de0879bf0. Boat bx_s7hcgbz8 at origin/main c838b916, CLI software D3D7. Fixture rebuilt from the RAR and sha256-identical to local. Control: a ground click at free roam (b26561) walks the player ~145px west while corpse, Virgil and wreck stay fixed. Counter qualified by census: each frame is 1 EndScene + exactly 4 dirty-rect BltFast to the primary (ret 0x513bed), each one dx_present, so idle 268 presents = 4 x 67 frames, ~224k guest blocks/frame. Browser software FPS is not measured (the CLI counter replaces the rejected observer-0). FAILED: an --input replay diverges (the game exits at 19467), so the ctl-stepped route is the reproducible one.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-arcanum-demo.json; scratch/runs/20261010T0810-arcanum-control-frames
  notes: Migration missing-file blocker cleared against current registered route: arcanum_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Baldur's Gate Chapters I & II
  id: GAMEPLAY-baldurs-gate-chapters-1-2-demo
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: baldurs-gate-chapters-1-2-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-baldurs-gate-chapters-1-2-demo.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-baldurs-gate-chapters-1-2-demo.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: Baldur's Gate interactive demo
  id: GAMEPLAY-baldurs-gate-interactive-demo
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: baldurs-gate-interactive-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-baldurs-gate-interactive-demo.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-baldurs-gate-interactive-demo.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [!] Gameplay screenshot and FPS: Baldur's Gate non-interactive demo
  id: GAMEPLAY-baldurs-gate-noninteractive-demo
  status: deferred
  candidate: baldurs-gate-noninteractive-demo
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Noninteractive presentation demo: retain screenshot evidence separately; gameplay FPS is not applicable.
  Done: Document noninteractive scope and preserve any reviewed presentation captures; gameplay FPS is not applicable.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-baldurs-gate-noninteractive-demo.json

- [ ] Gameplay screenshot and FPS: Best Of Moorhuhn extras
  id: GAMEPLAY-best-of-moorhuhn
  status: done (b89e08c62; training_1 miss+hit A/B hits 0->1, training_2 hit, making_of page turn; reviewed by orchestrator)
  candidate: best-of-moorhuhn
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; assigned by orchestrator 2026-10-10T08:10Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T08:55Z claude:90024109, notes b89e08c62, build de0879bf0 CLI 400000-block batches. moorhuhn_training_1: in-round miss A/B (misses 0->1) and hit (hits 0->1 on a facing bird). moorhuhn_training_2: in-round hit (hits 0->1, bird removed; deterministic pre-shot frame). Counter qualified in both: 1 GetDC + dirty-rect BitBlt + ReleaseDC per frame from one site (ret 0x40b479), 101 frames/120 batches in a live round. moorhuhn_2_making_of: a slideshow, not a game; the >> click turns the page. Explicit: a shot just after a Training-1 bird turns edge-on counts nothing. Browser FPS not measured.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-best-of-moorhuhn.json; scratch/runs/20261003-moorhuhn_training_1-gameplay-restored14/result.json; scratch/runs/20261010T0850-moorhuhn_training_1-control-frames; scratch/runs/20261010T0850-moorhuhn_training_2-control-frames; scratch/runs/20261010T0850-moorhuhn_2_making_of-control

- [ ] Gameplay screenshot and FPS: Black & White 2 Demo
  id: GAMEPLAY-black_white_2_demo
  status: in_progress
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (tr3; assigned by orchestrator 2026-10-10T19:05Z: find what the tutorial dialogue waits for, then camera control + scene-qualified frames)
  Progress 2026-10-10T19:33Z (tr3): STATIC DONE. The stuck dialogue is Land3's scripted intro (Land3.chl script Land3Intro). Its text is BW2T_SCRIPT_03FINAL_ADVISORS_NEW_INTRO_10..70 then ADVISORS_INTRO_10..70, decoded from Data/Text/bw2text.bin (ASCII id + UTF-16 text). It ends 'click on the Gold Scroll over the field', which starts Land3Tutorials, so the camera should be free from then on. All captures 2420-3500 s sit on INTRO_10 (villagers exiting the portal), so lines are not advancing. Each line is say + 'wait until read' (ScriptLibraryR tokens T_SAY/T_READ): read = the speech finished or the line was skipped; cinemas can be made interruptible (ENABLE_CINEMA_INTERRUBTIBLE / IS_CINEMA_SKIPPED natives). Speech goes through DirectSound (CoCreateInstance; WINMM is voice chat). Notifications are implemented headless on the guest audio clock (lib/host-audio.js notifyPump), so a run must show whether the lines' samples start and stop. NEXT: one boat run, scratchpad bw2-intro.sh: two arms; the diag arm traces DirectSound speech calls; skip attempts (Action click, right click, Space, Enter) during the intro; camera windows at 2800/3300 s. Waiting for a BOAT (requested 19:19Z).
  Progress 2026-10-10T20:40Z (tr3): RUN DONE (bx_m5u6ay78, run 20261010T1939Z-bw2-land3-intro-boat; re-notes de0fc8ea9). The intro is SLOW, NOT STUCK. Captures follow the script order at an estimated 2-5 min of wall time per line, with about 2.7 presents/s on software D3D9, so game time crawls; still in the intro at 3420 s. Audio is fine: one 21504 B looping DS ring, cursor at real-time rate, no notifications. Skip inputs (Action/right click, Space, Enter, Esc) do nothing; the camera is locked in the cinema. NEXT: either (a) a ~2 h boat run that waits out the intro (estimate >4000 s), clicks the Gold Scroll over the field and then runs the camera test, or (b) first make frames cheaper (each frame renders a 1280x960 target; try a lower in-game resolution) so the intro finishes inside a normal boat TTL.
  Progress 2026-10-10T21:45Z (tr3): option (b) on bx_xtbt6gc8, run 20261010T2102Z-bw2-lowres-profile-boat. Settings: c:\my documents\black & white 2 demo\settings.ini (ScreenW/H 800x600) + profiles\~player\profile.ini (Video* levels). The back buffer is 800x600 fullscreen. A planted 640x480 + all-Video-0 profile (--vfs-mount) skips the profile dialog and presents about 5.6/s vs 2.4/s in the menus (2.3x). BLOCKER: that run trapped at about 780 s after New Game. The game's own code at bw2demo+0x65b38e was overwritten (the exe has addss f3 0f 58 c3; memory held f3 0f 21 17 ...), so something writes over the image. The dialog-created default profile never crashed. NEXT boat: rerun phase 2 with --watch=0x0065b38c to name the writer (prev_eip), and A/B 640x480-only vs zeroed quality levels. Then (a).
  Progress 2026-10-11T03:30Z (tr3): (a) on bx_gk5eqsyc with the render-yield build d80eab24d (run 20261011T0212Z-bw2-gold-scroll-camera-boat), default profile. The intro moves about 1300 s earlier (portal scene at 1501 s vs ~2250 s) but is STILL running at 4501 s (town tour, both advisors, no Gold Scroll). World: ~91 draws/s (pre-fix ~56, +63%) but ~620 draws/frame = ~0.15 fps. Camera at 3661 s: Up 30 s and a left-button land drag do not move the view vs idle controls (cinema owns the camera). 0 failures. NEXT: either a ~2 h boat run (intro end estimated past 4500 s), or cut draws/frame first. The 640x480 profile does not reduce draws and crashed 2/5 (NULL vector buffer from operator new).
  Progress 2026-10-10T22:18Z (tr3): rerun on bx_n839em3q (run 20261010T2156Z-bw2-watch-rerun-boat). The overwrite did NOT recur: both arms ran 1000 s, the --watch on 0x0065b38c never fired, 0 crashes. Intermittent, not caused by the profile; keep the watch armed. 640x480 alone gives the same about 5.5/s menus (2.3x), so the resolution is the lever. Flyover with a full 640x480 frame by 961 s. NEXT: (a) with the res profile (runs/...2156Z.../profile/res-*.ini via --vfs-mount) plus --watch=0x0065b38c: wait out the intro, click the Gold Scroll over the field, camera key test. Boat ~75 min.
  Progress 2026-10-10T23:15Z (tr3): (a) on bx_e5t658rf is BLOCKED by render throughput (run 20261010T2235Z-bw2-gold-scroll-camera-boat). The world presents only about 0.08-0.13 frames/s (about 670 draws per frame); the 640x480 gain was menus-only (intro village scene at 1440 s vs about 1560 s default). Exit summary: 'render park: main waited on 6901 software D3D requests (1912453ms wall)', i.e. main is parked about 90% of wall time on the software D3D9 render worker (yield 16, about 277 ms per wait), yet the process uses only 40-70% of one core (load 0.6) with no spin parks. Main and the render worker serialize and neither side saturates a core. NEXT (blocker, likely its own row): find why the render worker is under-utilized while main waits on it (which request kinds park main; worker busy/idle split), then rerun (a). No code-overwrite this run (watch held).
  Next: Normal-route browser ended at fixed90minute deadline05:05:50Z, moving island flyover only. Final242 artifacts retained run20261009T0335Z-black-white2-staging-fix; no player-control/FPS credit. Diagnose current missing declaration binding/rendered right edge, then validate ordinary gameplay; old drive34 already ruled out SetFVF(0) for that route.

  candidate: black_white_2_demo
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: root direct; no subagent (one-worker budget)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-black_white_2_demo.json
  notes: Migration missing-file blocker cleared against current registered route: black_white_2_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Blobby Volley
  id: GAMEPLAY-blobby-volley
  status: done
  candidate: blobby-volley
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete for reviewed ordinary gameplay and instrumented logical submissions: 467 frames /15.312065s =30.4988 logical gameplay frames/s. Physical displayed FPS/p95 unknown; not a hardware-GPU baseline.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-blobby-volley.json; scratch/runs/20261003-blobby-volley-logical-gameplay/result.json; ops/handoffs/gameplay-frame-counter-20261003.md

- [x] Gameplay screenshot and FPS: Bricks
  id: GAMEPLAY-bricks
  status: done
  note: 2026-10-06T18:29Z browser drag check done: brick moves, MOVES: 1 (scratch/runs/20261006T1825Z-bricks-drag/browser-moved.png). CLI fix 291be497. Complete pending review.
  note: 2026-10-06T18:30Z fixed on the CLI by 291be497 (input hold on the guest clock); drag moves the brick, evidence scratch/runs/20261006T1825Z-bricks-drag/result.json. Still owed: one browser drag check (original report was a browser run). No frames/s: event-driven puzzle.
  note: 2026-10-06T18:19Z cause found: renderer-input takeInput held a click's button-up on the WALL clock, which the headless guest clock outruns while parked, so the title click's release and every drag event behind it never reached the game. Fix in scratch/claude-hype-wt (host input clock _inputNowMs, run.js guest peek; test-renderer-input-button-hold.js 19/19). Waiting on the CLI queue (202b4b39 -> d10ba697 -> me) for the one confirming bricks run, then push; browser drag check after.
  note: 2026-10-06T18:12Z self-claimed by claude:1863d2b5 (ready/unowned, no assignment 5 min after DONE D3DIM readback): reproduce the drag that moves no block on the CLI, fix or record the blocker, then measure.
  candidate: bricks
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Title click starts the level 1 sliding-block board. Drag (305,293) to (259,293) shows no verified block displacement. Puzzle scene reviewed; controls and completed move remain unverified. Gameplay frame measurement remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-bricks.json; scratch/runs/20261003-bricks-gameplay-restored1/result.json

- [x] Gameplay screenshot and FPS: Broken Sword Demo
  id: GAMEPLAY-broken_sword_demo
  status: done (029b09ec5; click walks George, replay identical; 2032 presents == 2032 primary Flips; reviewed by orchestrator)
  candidate: broken_sword_demo
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T04:31Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T04:42Z claude:90024109, notes 029b09ec5. CLI on main 7d8e3ee4a: walking verified (left click walks George across the cafe square, scene scrolls; replay byte-identical). Counter qualified exactly: 2032 slot-1 presents == 2032 primary Flips from one site 0x414b2e; per frame three back-buffer Lock/Unlock pairs (render, cursor composite, cursor restore) so the software cursor adds no presents; ~7.4 frames per 100k-block batch (~13.5k blocks/frame); --frame-stats double-records each Flip. Not done: browser FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-broken_sword_demo.json; scratch/runs/20261003-broken-sword-cafe-hotspot/result.json; scratch/runs/20261010T0445Z-broken-sword-control-frames

- [ ] Gameplay screenshot and FPS: Caesar III Demo
  id: GAMEPLAY-caesar3_demo
  status: backlog

  candidate: caesar3_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-caesar3_demo.json
  notes: Migration missing-file blocker cleared against current registered route: caesar3_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Cave Story
  id: GAMEPLAY-cave-story
  status: done
  candidate: cave-story
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualified one short instrumented logical-submission sample:25frames/1003.43ms=24.9145431171/s, mostly stationary opening room after movement/jump. Physical displayed FPS,p95 and sustained performance remain unknown.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-cave-story.json; scratch/runs/20261003-cave-story-logical-gameplay/qualification.json; scratch/runs/20261003-cave-story-logical-gameplay/result.json

- [ ] Gameplay screenshot and FPS: Civilization II: Multiplayer Gold Edition
  id: GAMEPLAY-civilization-2-mge-win32
  status: backlog

  candidate: civilization-2-mge-win32
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-civilization-2-mge-win32.json
  notes: Migration missing-file blocker cleared against current registered route: civ2_mge. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Sid Meier's Civilization II
  id: GAMEPLAY-civilization-2-win16
  status: backlog

  candidate: civilization-2-win16
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-civilization-2-win16.json
  notes: Migration missing-file blocker cleared against current registered route: civ2_win16. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Curse of Monkey Island Demo
  id: GAMEPLAY-curse_monkey_island_demo
  status: done (7d8e3ee4a; floor click walks Guybrush; counter = primary Unlocks, ~22.7 frames/guest-s; reviewed by orchestrator)
  candidate: curse_monkey_island_demo
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T04:26Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T04:38Z claude:90024109, notes 7d8e3ee4a. CLI on main 563759a25: floor click walks Guybrush (gate also covers chest + verb coin). Counter qualified: 1961 slot-1 presents = 1809 primary Unlocks from one site 0x444f74 (frames) + 152 IDirectDrawPalette_SetEntries from one site 0x44484b (palette cycling, not frames); ~22.7 frames/guest-s; ten 40-batch raw samples 157-188 frames. Not done: browser FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-curse_monkey_island_demo.json; scratch/runs/20261003-curse_monkey_island_demo-gameplay-restored5/result.json; scratch/runs/20261010T0440Z-cmi-control-frames

- [x] Gameplay screenshot and FPS: CWordZap
  id: GAMEPLAY-cwordzap
  status: done (06e22f71f; valid word NOW accepted; on-demand WM_PAINT counter; reviewed by orchestrator)
  candidate: cwordzap
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (self-claim 2026-10-10T06:32Z, confirmed)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T06:44Z claude:90024109, notes 06e22f71f. CLI on main a312d9f49: deterministic deal R E I W / N O M O; N,O,W + End Word submits NOW, accepted (no tip), moves to the word column; invalid OIO (test's stale HUG coords) shows Tip Number 1. Counter qualified as on-demand paints: 14 BeginPaint / StretchDIBits (one site 0x406118) / EndPaint on the main window in b60-420, coalescing 202 InvalidateRect; no frame loop, FPS not meaningful. Score 0:0 after one word - no scoring claim.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-cwordzap.json; scratch/runs/20261003-cwordzap-gameplay-restored2/result.json; scratch/runs/20261010T0710Z-cwordzap-control-paints

- [ ] Gameplay screenshot and FPS: Darkstone Demo
  id: GAMEPLAY-darkstone_demo
  status: backlog

  candidate: darkstone_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Historical controlledTown camera evidence confirmed by fresh worker; do not count as new-game lane or redo screenshots. Exact prior module identity unknown; remaining FPS/audio/current-build coverage stays unqualified. Replacement new-game lane is Tiberian Sun.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-darkstone_demo.json
  notes: Migration missing-file blocker cleared against current registered route: darkstone_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Deus Ex demo
  id: GAMEPLAY-deus-ex-demo
  status: ready
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5

  candidate: deus-ex-demo
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (queued under one-worker budget)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Registered deus_ex_demo fixture rechecked2026-10-08: 112 declared executable/DLL/asset/manifest paths exist, declared sizes match. Missing-file blocker is cleared; queue ordinary gameplay and scene-qualified FPS validation after current sole lane. Presence does not prove runtime readiness. Receipt scratch/runs/20261008T0810Z-queued-fixture-recheck/fixture-presence.json; docs ops/handoffs/queued-fixture-recheck-20261008.md.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-deus-ex-demo.json
  notes: Migration missing-file blocker cleared against current registered route: deus_ex_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Diablo Demo
  id: GAMEPLAY-diablo_demo
  status: done (66a8f8da; name entry needs WM_CHAR Enter; walk + Inventory vs idle control; 20 Hz Lock/Unlock counter; reviewed by orchestrator)
  candidate: diablo_demo
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T06:08Z)
  Result: 2026-10-10T06:25Z main e20712a7f: the old dark transition = name field ignores WM_KEYDOWN Enter; WM_CHAR 13 (keypress:13) -> Tristram. Browser already posts WM_CHAR 13 (no WM_CHAR 8 for Backspace -> can't edit name on page; noted). A/B: ground click walks + INV opens only when clicked. Frame = primary Lock/Unlock (ret 0x40d18f), 20 Hz exact at 25 ms tick (50 ms tick drops 45/400). Run scratch/runs/20261010T0625Z-diablo_demo-control-frames; notes 66a8f8da (new docs/re-notes/diablo-demo.md).
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Diagnose persistent dark transition after complete name entry; prior served-source closure rejection recorded, future helper includes all library JavaScript. No gameplay/FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/runs/20261003-diablo-demo-full-name-stall/result.json; scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-diablo_demo.json

- [ ] Gameplay screenshot and FPS: Diablo II Demo
  id: GAMEPLAY-diablo-2-demo-installer
  status: backlog

  candidate: diablo-2-demo-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-diablo-2-demo-installer.json
  notes: Migration missing-file blocker cleared against current registered route: diablo2_demo, diablo2_demo_installer, diablo2_glide_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Diablo Shareware
  id: GAMEPLAY-diablo-shareware
  status: done (6262ce22; walk + scroll Tristram, CHAR/INV panels; 1:1 Lock/Unlock counter 20.0 frames/guest-s = Diablo 20 Hz loop; reviewed by orchestrator)
  candidate: diablo-shareware
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T03:39Z)
  Result: 2026-10-10T04:00Z main a4ef0d06a, pinned test route: ground click walks + scrolls, CHAR/INV panels open; byte-identical runs. Counter qualified 1:1 vs one primary Lock/Unlock per frame: 1200 frames / 59.95 guest-s = 20.0/guest-s, unchanged at 25 ms/batch (game's 20 Hz loop). Run scratch/runs/20261010T0400Z-diablo_shareware-control-frames; notes 6262ce22.
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualify complete-frame measurement during actual gameplay; retain narrow input scope from reviewed batch17 evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-diablo-shareware.json; scratch/runs/20261003-diablo_shareware-gameplay-restored17/result.json

- [x] Gameplay screenshot and FPS: Dungeon Keeper Demo
  id: GAMEPLAY-dungeon_keeper_demo
  status: done (ae06978e page route fix; headful boat page in the dungeon, PRESENT/s 13-19.6, page 23-45 fps on GPU-less boat; reviewed by orchestrator)
  note: 2026-10-10T05:50Z DONE: page route works since ae06978e; headful FPS on boat bx_9n4ex3a5 (Chrome 151 headful, SwiftShader, no GPU): 13-20 presents/s in the Eversmile dungeon over 6x30 s windows / 3 launches (best 19.6 at low load), evidence scratch/runs/20261010T0530Z-dungeon_keeper_demo-headful-fps. Coop regression A/B for ae06978e over 10 apps: identical (scratch/runs/20261010T0545Z-ae06978e-coop-ab).
  note: 2026-10-10T07:00Z page route FIXED: ae06978e (main, ls-remote verified, full build green) -- cooperative semaphore release now goes to the parked waiter (DK's render thread starved its window thread's 5 ms cursor-lock waits; page cursor never moved). Page (headless, Threads off, lazy files): menu -> steer cursor onto Start New Game -> click -> Eversmile dungeon + tutorial panel. CLI test-dungeon-keeper-gameplay PASS. Evidence scratch/runs/20261010T0650Z-dungeon_keeper_demo-page-route; route + recipe in docs/re-notes/dungeon-keeper-demo.md. Remaining: quotable headful FPS (boat).
  note: 2026-10-10T03:00Z blocked on an orchestrator decision (board 02:43Z): the page cursor fix needs a change to timed-wait expiry in lib/thread-manager.js (DK drops every cursor move behind WaitForSingleObject(sem, 5 ms) held by the render thread across its frame; page waits expire on the real clock). RE trail in the 02:50Z note above.
  note: 2026-10-10T02:50Z claude:1863d2b5: page route BLOCKED by a page-only input defect (same as 10-03 headful). On main be3d5da3 the page reaches the main menu; the CLI route still PASSes (also with --batch-size=10000 and with a 20x slower clock). Guest RE (KEEPER95): wndproc mouse case 0x4d6a63 -> 0x4d2110 -> 0x4d2020 (delta mode, flag 0x51b674=1; last pos 0x762b70 tracks every page move) -> cursor commit 0x4d0220, which first does WaitForSingleObject(0xE0003, 5) via 0x4d7600 and returns -1 on failure; in the page cursor pos 0x761378 stays 320,240 and the clamp box 0x761360 is a sane 0,0,640,480, so the 5 ms try-lock is what fails. The render thread holds that semaphore across its frame (CLI census: Wait x2, Unlock, Lock, Release x2 per frame). Page timed waits expire on the real clock (thread-manager waitStartedAt/_waitNow) while an emulated frame takes far longer than 5 ms; CLI waits use the batch clock. Next: needs a scheduler decision (e.g. a timed wait on an object held by a runnable thread does not expire on wall time alone) + corpus A/B; then page route menu->Start New Game->dungeon and headful FPS on a boat.
  candidate: dungeon_keeper_demo
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (assigned by orchestrator 2026-10-10T01:32Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed on main (scratch/runs/20261006T0800Z-dungeon_keeper_demo-w4-gameplay, test-dungeon-keeper-gameplay PASS): Eversmile dungeon + tutorial advancing. Remaining: qualified FPS (browser).
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-dungeon_keeper_demo.json; scratch/runs/20261003-dungeon_keeper_demo-gameplay-restored5/result.json

- [x] Gameplay screenshot and FPS: DX-Ball
  id: GAMEPLAY-dxball
  status: done
  candidate: dxball
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete narrow evidence: reviewed control/gameplay images and three independent short instrumented windows,60.219 logical gameplay frames/s. Physical display FPS and sustained performance unknown; rejected attempts preserved.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-dxball.json; scratch/runs/20261003-dxball-logical-gameplay/result.json; scratch/runs/20261003-dxball-logical-gameplay/qualification.json

- [x] Gameplay screenshot and FPS: Elasto Mania
  id: GAMEPLAY-elasto-mania
  status: done (53cf4592c; Up drives the bike toward the cliff, timer runs; 921 presents == 921 primary Flips; reviewed by orchestrator)
  candidate: elasto-mania
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T05:31Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T05:42Z claude:90024109, notes 53cf4592c. CLI on main 54a1d8b14: Level 16 reached at b1050; Up held b1060-1160 (after load settles) drives the bike along and off the cliff, airborne by b1250, timer running - acceleration verified. Counter qualified: 921 slot-3 presents == 921 primary Flips from one site 0x437e38, each after one back-buffer Lock/Unlock; 100% changed; unthrottled ~54k guest blocks/frame; frame-stats doubles Flips. Not done: browser FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-elasto-mania.json; scratch/runs/20261003-elasto_mania-gameplay-restored3/result.json; scratch/runs/20261010T0600Z-elasto-mania-control-frames





- [x] Gameplay screenshot and FPS: freecell16
  id: GAMEPLAY-freecell16
  status: done (e9ba0439; ace home only with clicks; reviewed by orchestrator)
  claimed: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 self-claim 2026-10-10T06:55Z (no assignment 7 min after sol16 DONE)
  Result: 2026-10-10T06:59Z main f26b52210: F2 deals Game #28655; A/B: ace of diamonds -> home cell only in the clicking run (deal identical). Turn-based, no clock: no FPS; repaints follow input (7 idle vs 20 with move per 80 batches). Run scratch/runs/20261010T0700Z-freecell16-home-move; notes e9ba0439 (new docs/re-notes/freecell16.md).

  candidate: freecell16
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Setup and ordinary card move now pass on worker-owned input routing fix. Reviewed gameplay image saved; qualify a meaningful per-game frame measurement. Dialog clipping remains.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-freecell16.json; scratch/runs/20261003-freecell16-gameplay-worker-route/result.json; ops/handoffs/win16-dialog-worker-trap-20261003.md

- [x] Gameplay screenshot and FPS: Funtris
  id: GAMEPLAY-funtris
  status: done (a312d9f4; 3x Left moves the piece vs no-input; gravity counter 2.5 rows/guest-s at L1; reviewed by orchestrator)
  candidate: funtris
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claim 2026-10-10T06:29Z, confirmed)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Implement bounded gravity-update/input-response metrics from source plan; no proven complete-frame boundary, so gameplay FPS remains unknown. Reviewed gameplay/input saved; never relabel GDI tile blits or gravity updates as frames.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-funtris.json; scratch/runs/20261003-funtris-gameplay-restored2/result.json; ops/handoffs/funtris-frame-counter-plan-20261003.md

- [ ] Gameplay screenshot and FPS: Gallinelle XXL
  id: GAMEPLAY-gallinelle-xxl
  status: done (no-hit was aim, not a bug; hit scores 0->25; 20261010T0800Z control frames reviewed by orchestrator)
  candidate: gallinelle-xxl
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T07:08Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T07:40Z claude:90024109, notes f26b52210 + a6d9f9ddf. Frame counter qualified exactly (2030 presents == 2030 primary Flips, one site 0x4152f8). The earlier no-hit FAILURE is RESOLVED as a route error, not an emulator bug. The hit test 0x405f40 runs before the frame's mouse pump and is pixel-exact at cursor+(16,16), so hover on an opaque bird pixel for one batch, then press. Score 0->25, and the shot hit-branch counter 0x40715e = 1. Browser FPS not measured.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/runs/20261003-gallinelle-gameplay/result.json; scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gallinelle-xxl.json; scratch/runs/20261010T0800Z-gallinelle-control-frames; scratch/runs/20261010T0715-gallinelle-aim-check; scratch/runs/20261010T0735-gallinelle-hit-scored

- [ ] Gameplay screenshot and FPS: GeneRally
  id: GAMEPLAY-generally
  status: review
  candidate: generally
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (assigned by orchestrator 2026-10-10T06:08Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Run corrected post-countdown gate allowing00.00 before first movement; verify driving. Intro overlay stayed identical30sec until ordinary Enter acknowledged it. After countdown, track and car visible with no overlay/lights; timer00.00. Overly strict private gate incorrectly required nonzero timer before movement, so no driving input issued before120sec deadline. Gate corrected offline; no movement claim. FPS remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-generally.json; scratch/runs/20261003-generally-gameplay-restored4/result.json
  result: 75a021d56 (notes) + scratch/runs/20261010T0630Z-generally-control-frames-w6 (reviewed): driven race reached on main 29fbfecb0; A/B (Up held drives the car, B stays on grid, start frames byte-identical); frame counter qualified 1:1 (BltFast+Flip, 100% new pictures) but interpreter-bound, not game-paced (10.6 vs 3.6 frames/guest-s at 2 vs 4 ms tick). Old blocker was the 200ms/batch clock (~14 guest-s per frame), not input. Browser FPS not measured.

- [ ] Gameplay screenshot and FPS: Beneath a Steel Sky GOG installer
  id: GAMEPLAY-gog-free-beneath-a-steel-sky
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: gog-free-beneath-a-steel-sky
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-beneath-a-steel-sky.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-beneath-a-steel-sky.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: The Elder Scrolls: Arena GOG installer
  id: GAMEPLAY-gog-free-elder-scrolls-arena
  status: review
  candidate: gog-free-elder-scrolls-arena
  owner: unowned
  prev-owner: /root/restore_evidence — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Fresh ordinary dungeon controls reviewed (right/left, short backward/forward, stable idle); root reviewing publication107 hashes/commit57e1a949. Separate scene-qualified FPS measurement remains open; no repeat gameplay required.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-elder-scrolls-arena.json; scratch/new-games-pipeline-20261005/arena-reserve/reserve.json; scratch/new-games-pipeline-20261005/arena-reserve/README.md; commitfaa9ad73; scratch/new-games-pipeline-20261005/arena/READY.md; scratch/new-games-pipeline-20261005/arena/validation.json; commit0cc092b7; scratch/runs/20261005-arena-save-directory-setup/result.json; scratch/new-games-pipeline-20261005/arena/DIRECTORY-READY.md; scratch/new-games-pipeline-20261005/arena/directory-validation.json; scratch/runs/20261005-arena-corrected-overlay-creator/result.json; scratch/new-games-pipeline-20261005/arena/PREFIX-READY.md; scratch/new-games-pipeline-20261005/arena/prefix-validation.json; scratch/runs/20261005-arena-dungeon-controls/result.json; commit57e1a949
  blocker: Gameplay accepted narrowly; FPS counter/sample not qualified. No missing declared asset or guest fault established.
  waiting-on: Source/evidence integration and separately scheduled measurement; no runtime held or user action.

- [ ] Gameplay screenshot and FPS: The Elder Scrolls II: Daggerfall GOG installer
  id: GAMEPLAY-gog-free-elder-scrolls-daggerfall
  status: backlog
  depends-on: NEW-GAME-DAGGERFALL-20261005
  candidate: gog-free-elder-scrolls-daggerfall
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Original fixtures are available and registered; new-game attempt6 reached opening parchment, no dungeon/control. Source route7 preparation in NEW-GAME-DAGGERFALL-20261005. After reviewed player control, perform separate scene-qualified presentation/FPS measurement; creator/story screens do not satisfy this combined task.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-elder-scrolls-daggerfall.json (historical missing-path record); scratch/new-games-pipeline-20261005/daggerfall-reserve/activation.json; main67205c27; scratch/runs/20261005-daggerfall-final-review-target-close/result.json; NEW-GAME-DAGGERFALL-20261005

- [ ] Gameplay screenshot and FPS: Flight of the Amazon Queen GOG installer
  id: GAMEPLAY-gog-free-flight-of-the-amazon-queen
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: gog-free-flight-of-the-amazon-queen
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-flight-of-the-amazon-queen.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-flight-of-the-amazon-queen.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: Lure of the Temptress GOG installer
  id: GAMEPLAY-gog-free-lure-of-the-temptress
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: gog-free-lure-of-the-temptress
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-lure-of-the-temptress.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-lure-of-the-temptress.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: Shadow Warrior Classic Complete GOG installer
  id: GAMEPLAY-gog-free-shadow-warrior-classic
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: gog-free-shadow-warrior-classic
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-shadow-warrior-classic.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-shadow-warrior-classic.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [~] Gameplay screenshot and FPS: Ultima IV: Quest of the Avatar GOG installer
  id: GAMEPLAY-gog-free-ultima-iv
  status: review
  candidate: gog-free-ultima-iv
  owner: /root/restore_evidence
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Ordinary overworld gameplay accepted and four reviewed screenshots published; new-game lane refilled with Arena. FPS/presentation measurement remains outstanding: bind actual DOSBox/GDI output to a scene-qualified counter and capture raw samples. Do not treat gameplay qualification as completion of this combined screenshot/FPS task.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures. Gameplay proof complete; measurement unverified.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-ultima-iv.json; scratch/new-games-pipeline-20261005/ultima4/preparation.json; scratch/new-games-pipeline-20261005/ultima4/READY.md; scratch/new-games-pipeline-20261005/ultima4/validation.json; scratch/runs/20261005-ultima4-character-creation/result.json; scratch/new-games-pipeline-20261005/ultima4/CONTINUATION.md; commit84150da2; scratch/runs/20261005-ultima4-post-creation-save-exit/result.json; scratch/new-games-pipeline-20261005/ultima4/save-exit-findings.md; scratch/new-games-pipeline-20261005/ultima4/SAVE-DIAGNOSTIC.md; scratch/new-games-pipeline-20261005/ultima4/save-diagnostic-validation.json; commit0ef64ef7; scratch/runs/20261005-ultima4-original-save-overlay-missing/validation.json; scratch/new-games-pipeline-20261005/ultima4/SAVE-OVERLAY-READY.md; scratch/new-games-pipeline-20261005/ultima4/save-overlay-validation.json; scratch/runs/20261005-ultima4-overworld-movement/result.json; scratch/runs/20261005-ultima4-overworld-movement/validation.json


- [ ] Gameplay screenshot and FPS: Grand Theft Auto 2 demo
  id: GAMEPLAY-gta2-demo
  status: backlog

  candidate: gta2-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gta2-demo.json
  notes: Migration missing-file blocker cleared against current registered route: gta2_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Half-Life: Uplink
  id: GAMEPLAY-half-life-uplink-installer
  status: backlog

  candidate: half-life-uplink-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-half-life-uplink-installer.json
  notes: Migration missing-file blocker cleared against current registered route: halflife_uplink, halflife_uplink_installer. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Heroes of Might and Magic II demo
  id: GAMEPLAY-heroes-2-demo
  status: ready
  candidate: heroes-2-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Use verified adventure-map route and capture one isolated hero movement, then qualify complete-frame measurement.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-heroes-2-demo.json; scratch/runs/20261003-heroes2_demo-gameplay-restored15/result.json

- [x] Gameplay screenshot and FPS: Heroes of Might and Magic III demo
  id: GAMEPLAY-heroes-3-demo-installer
  status: done (563759a25; adventure map: walk to chest, gold 20500->21500, replay identical; presents on demand; reviewed by orchestrator)
  candidate: heroes-3-demo-installer
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T04:19Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T04:35Z claude:90024109, notes 563759a25. CLI on main 3fc7a885c: adventure-map control end to end (click chest plots path, second click walks Orrin, chest dialog, gold 20500 -> 21500), replay byte-identical. Counter qualified: 62 slot-1 presents == 62 primary-surface Blts from one site 0x58dd8c (presenter called at 0x58dd20), other Blts/Locks offscreen, no Flip. H3 presents on demand: idle 1 per 11-12 batches, bursts in motion, none while a dialog sits -> a screen-update count, not a fixed-rate FPS. Not done: browser FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-heroes-3-demo-installer.json; scratch/runs/20261003-heroes3_demo-gameplay-restored17/result.json; scratch/runs/20261010T0430Z-heroes3-demo-control-frames

- [ ] Gameplay screenshot and FPS: Hitman Demo 2 (Glide 3, experimental)
  id: GAMEPLAY-hitman_glide_demo
  status: backlog

  candidate: hitman_glide_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-hitman_glide_demo.json
  notes: Migration missing-file blocker cleared against current registered route: hitman_glide_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Hype Demo (Glide 3, experimental)
  id: GAMEPLAY-hype_glide_demo
  status: done (e0d32da41; Up walks the knight; frame-finish counter, 2 grBufferSwaps per frame; reviewed by orchestrator)

  candidate: hype_glide_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay screenshots/control accepted: run20261005-hype-wh-getmessage-gameplay, root reviewed4shots, ordinary Enter/Space/Up/Down, main376abd87. Remaining task is scene-qualified frame FPS only; no repeat screenshot or pending merge task.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-hype_glide_demo.json
  notes: Migration missing-file blocker cleared against current registered route: hype_glide_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Icewind Dale demo
  id: GAMEPLAY-icewind-dale-demo
  status: backlog

  candidate: icewind-dale-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-icewind-dale-demo.json
  notes: Migration missing-file blocker cleared against current registered route: icewind_dale_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Icy Tower
  id: GAMEPLAY-icy-tower
  status: done
  candidate: icy-tower
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Narrow screenshot/measurement requirement fulfilled:49.98875253 logicalsubmissions/s,50frames/1000.225ms on5ff4844e, one instrumented mostlystationary platform sample after ordinary movement/jump. Sustained performance, physical displayFPS andp95 remain unknown.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: ops/handoffs/icy-tower-logical-measurement-20261003.md; scratch/runs/20261003-icy-tower-logical-gameplay/result.json; scratch/gameplay-icy-tower-counter-20261003/attempt7/root-measurement-review.json

- [x] Gameplay screenshot and FPS: Jardinains!
  id: GAMEPLAY-jardinains
  status: done (a4ef0d06; paddle follows mouse, held click launches ball, deterministic; 1:1 Flip counter 51.9 frames/guest-s, 60 Hz cap; reviewed by orchestrator)
  candidate: jardinains
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T03:16Z)
  Result: 2026-10-10T03:45Z main 3f9c84318: deterministic CLI route (clicks held across batches) menu -> Easy -> Level 1; paddle follows mouse left/right with ball on it, held click launches ball. Frame counter qualified 1:1 vs Flip: 298 frames / 5.73 guest-s = 51.9/guest-s (60.1 second half, 60 Hz cap), byte-identical runs a/b; dx_present double-counts Flips here. Run scratch/runs/20261010T0345Z-jardinains-control-frames; notes a4ef0d06.
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: (claude:90024109 2026-10-10T03:09Z, released for orchestrator's WC3 assignment) Main had regressed: VirtualAlloc placement 85c1f7c68 put the first heap on Jardinains' .text (image 0x10000000) -> null call at batch 0; fixed bc3505ce6, test-jardinains-candidate PASS again (Level 1 brick field, score 380, ball launch 2156 px). Headless route = that test (200000-block batches, 16 ms, live 1.5 s DirectInput clicks). Remaining: qualify frame counter (--present-distinct/--frame-stats/--frame-stats-out like TA de2b37c25) and an ordinary control-response capture.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-jardinains.json; scratch/runs/20261003-jardinains-gameplay-restored12/result.json
  blocked-since: 2026-10-03T08:42:45.967Z

- [x] Gameplay screenshot and FPS: Jazz Jackrabbit 2 demo installer
  id: GAMEPLAY-jazz-jackrabbit-2-demo-installer
  status: done (e20712a7; real route past attract demo; Right+Space runs + shoots the turtle vs idle control; Blt+Flip+Unlock counter 21.9/guest-s; reviewed by orchestrator)
  candidate: jazz-jackrabbit-2-demo-installer
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T05:45Z)
  Result: 2026-10-10T06:00Z main 17b858af7: menu route to a real level (Up x5 + five Enters; the Oct 1 route stopped one Enter short and showed the attract DEMO). A/B: Right moves Jazz, Space shoots the turtle, only when pressed; captures identical before. Frame = Blt+Flip(ret 0x495e6c)+Unlock = present-distinct slot 5: 21.9/guest-s, same at 5 ms tick. Run scratch/runs/20261010T0600Z-jazz2_demo-control-frames; notes e20712a7.
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete intro/menu route with timely ordinary Escape inputs and reach a player-controlled level; previous intro-only deadline is inconclusive.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-jazz-jackrabbit-2-demo-installer.json; scratch/runs/20261003-jazz2_demo-gameplay-restored15/result.json

- [ ] Gameplay screenshot and FPS: jigssawme
  id: GAMEPLAY-jigssawme
  status: done (96a300c1; piece locks on its cell, wrong cell moves, control identical; reviewed by orchestrator; Preview label clip -> JIGSSAWME-PREVIEW-LABEL-20261010)
  candidate: jigssawme
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T07:30Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Narrow gameplay complete: root-reviewed ordinary green-piece drag, run20261005-jigssawme-clipped-puzzle-drag,37 hashes verified, evidence main0cf9ff1d/175395a9 and Telegram478/479. Remaining: full-board640x480 clipping investigation and supported scene-qualified FPS measurement; no solve/snapping claim. Ready queue; restore_evidence refilled with WinBoard.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-jigssawme.json; scratch/runs/20261003-jigssawme-custom-bmp-image-failure/result.json; scratch/new-games-pipeline-20261004/jigssawme/dialog-repair-20261005/validation-result.json; ops/handoffs/jigssawme-resume-20261005.md; scratch/new-games-pipeline-20261004/jigssawme/image-repair-20261005/main-contract-attempt2/receipt.json; scratch/new-games-pipeline-20261004/jigssawme/image-repair-20261005/commit-receipt.json; scratch/runs/20261005-jigssawme-main-vb-image-startup/validation.json; scratch/new-games-pipeline-20261004/jigssawme/com-recovery-20261005/preparation.json; scratch/runs/20261005-jigssawme-com-recovered-bmp-open-exit/validation.json; ops/handoffs/jigssawme-com-recovery-20261005.md; scratch/new-games-pipeline-20261004/jigssawme/open-exit-diagnostic-20261005/continuation/attempt1/analysis.json; commit2462d5f33f9c327da64258510646bf1a3ee75eca; scratch/new-games-pipeline-20261004/jigssawme/open-exit-diagnostic-20261005/later-phase/repair/validation.json; scratch/runs/20261005-jigssawme-directx7-tickcount-image-error/validation.json; commit516adf3918a0571e510b530526dec478faba32d7; commit07270b64a11a78cc2e17b08d6a04fd5ff75a4cf0; commitcc424fb3542fcc589cd19f23d9b165bed48701c1; scratch/new-games-pipeline-20261004/jigssawme/surface-blt-repair-20261005/attempt1/receipt.json; scratch/new-games-pipeline-20261004/jigssawme/surface-blt-repair-20261005/corrected/color-fill/color-key/blt-fast/fore-color/draw-text/terminal-slice/attempt1/validation.json; scratch/new-games-pipeline-20261004/jigssawme/directdraw34-repair-20261005/current-production-gates-attempt2/receipt.json; scratch/new-games-pipeline-20261004/jigssawme/directdraw34-repair-20261005/final-current-readiness.json; commit54fac8f7072ba56e1c7b8e7b1d0a433337f22d18; scratch/new-games-pipeline-20261004/jigssawme/directdraw34-repair-20261005/current-production-gates-attempt3/receipt.json; scratch/new-games-pipeline-20261004/jigssawme/directdraw34-repair-20261005/ordinary-browser/attempt2/validation.json; commitc2f1e6a9; main2f9bbd43 (52c86/93074/54fac/c2f1 rebased d80b454a/65dbb1ad/aa73c4f7/2f9bbd43); scratch/new-games-pipeline-20261004/jigssawme/directdraw34-repair-20261005/next-error; commitaa12c03fb684b0a5899af1dc93c9d867bd2f4247; scratch/new-games-pipeline-20261004/jigssawme/getwindowrect-repair-20261005/preparation.json; commit277a6150500a22c1e424bbdf51c86075324e9fb5; commit0b3c7f044380d611936f0f6c7f7c8fc1c8259907; scratch/new-games-pipeline-20261004/jigssawme/getwindowrect-repair-20261005/production-gates/receipt.json; commita72a32cf3dfc66d2172ea5388eb52f48d29c2ddf; scratch/runs/20261005-jigssawme-getwindowrect-open-gray/validation.json; scratch/new-games-pipeline-20261004/jigssawme/getwindowrect-repair-20261005/next-presentation-plan.json; commit36c70cec360fcdf27b71b42b76417dc1955cada4; scratch/new-games-pipeline-20261004/jigssawme/blt-clipping-repair-20261005/preparation.json; commitb9155c8cb3761bf50b1931b824e0e8a50ce75fd5; commita8bd56a01138eab7753906fcb6f1f8bd62d98c55; main5690843b; scratch/new-games-pipeline-20261004/jigssawme/blt-clipping-repair-20261005/production-gates/receipt.json; scratch/runs/20261005-jigssawme-clipped-puzzle-drag/validation.json; ops/handoffs/jig-clipped-puzzle-input-20261005.md

- [x] Gameplay screenshot and FPS: Liquid War
  id: GAMEPLAY-liquid-war
  status: done (17b858af; held Right moves the red cursor and army vs identical no-input control; Lock/Unlock counter 23.3/guest-s = game pace; reviewed by orchestrator)
  candidate: liquid-war
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T05:40Z)
  Result: 2026-10-10T06:10Z main e0d32da41: steering proven by deterministic A/B (held Right moves red cursor/army only in the run that holds it; menu/arena captures byte-identical otherwise). Frame = one Lock/Unlock of 0x08011038 (ret 0x45d7cf) = present-distinct slot 7: 186 / 7.98 guest-s = 23.3/guest-s, 23.2 at 10 ms tick (game's own pace). Run scratch/runs/20261010T0610Z-liquid_war-control-frames; notes 17b858af.
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Reviewed arena with red/yellow teams white walls and04:00 timer before ordinary cursor move. Final capture shows03:35 timer and changed team distribution; autonomous simulation also changes this, so cursor-steering response not independently verified. FPS remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-liquid-war.json; scratch/runs/20261003-liquid_war-gameplay-restored4/result.json

- [x] Gameplay screenshot and FPS: Little Fighter 2 installer
  id: GAMEPLAY-little-fighter-2-installer
  status: done (b630ee769; Right moves fighter 3 across the arena; 988 presents == 988 primary Blts; reviewed by orchestrator)
  candidate: little-fighter-2-installer
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (self-claim 2026-10-10T05:00Z, confirmed by orchestrator)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T05:38Z claude:90024109, notes b630ee769. CLI on main 9c034e15a: isolated Right-only input moves fighter 3 from x~310 past the CPU to x~710 with arena scroll, no attack (not combat-confounded). Counter qualified: 988 slot-1 presents == 988 Blts to the primary from one site 0x4394bd; frames composed on back buffer 0x08011018 (many sprite Blts); no Lock/Flip/palette; 974/988 changed; ~30k guest blocks per frame. Reduced roster retained. Not done: browser FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-little-fighter-2-installer.json; scratch/runs/20261003-little_fighter_2-gameplay-primary-repaired/result.json; scratch/runs/20261010T0530Z-lf2-control-frames
  blocked-since: 2026-10-03T08:42:45.967Z


- [ ] Gameplay screenshot and FPS: mcm
  id: GAMEPLAY-mcm
  status: backlog

  candidate: mcm
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-mcm.json
  notes: Migration missing-file blocker cleared against current registered route: mcm. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Moorhuhn 2
  id: GAMEPLAY-moorhuhn-2
  status: done
  candidate: moorhuhn-2
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Retain qualified single-sample logical measurement and substantial observer/cooperative overhead limitations; physical and normal uninstrumented FPS remain unknown.
  Done: Reviewed active-round screenshots and ordinary shot; root-qualified8 complete logical submissions/1006.26ms=7.95 per second. One heavily instrumented cooperative sample; no physical, normal or sustained FPS claim.
  Evidence: scratch/runs/20261003-moorhuhn2-logical-gameplay/result.json; scratch/runs/20261003-moorhuhn2-logical-gameplay/qualification.json; scratch/gameplay-moorhuhn2-counter-20261003/attempt6/root-evaluation.json


- [ ] Gameplay screenshot and FPS: Moorhuhn 3 Bonus Puzzles
  id: GAMEPLAY-moorhuhn-3-puzzles
  status: done (295af58a5 + 80dc6af9e + 3b268b743: drag, snap and all three puzzles solved to Gratulation; reviewed by orchestrator)
  candidate: moorhuhn-3-puzzles
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (tr3; user asked 11:38 to also test snapping and completing a puzzle)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Cover other puzzle variants and qualify complete-frame measurement; Fisch piece drag reviewed only.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-moorhuhn-3-puzzles.json; scratch/runs/20261003-moorhuhn_3_puzzle_fisch-gameplay-restored14/result.json


- [x] Gameplay screenshot and FPS: Moorhuhn Winter-Edition
  id: GAMEPLAY-moorhuhn-winter
  status: done
  candidate: moorhuhn-winter
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Retain qualified single-sample logical measurement and explicit cooperative/instrumentation limits; physical display FPS remains unknown.
  Done: Reviewed active-round screenshots and ordinary shot; root-qualified37 complete logical submissions/1017.45ms=36.37 per second. One instrumented cooperative sample; no physical or sustained FPS claim.
  Evidence: scratch/runs/20261003-moorhuhn-winter-logical-gameplay/result.json; ops/handoffs/moorhuhn-winter-frame-counter-plan-20261003.md

- [ ] Gameplay screenshot and FPS: Morrowind (retail, own ISO)
  id: GAMEPLAY-morrowind
  status: backlog

  candidate: morrowind
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-morrowind.json
  notes: Migration missing-file blocker cleared against current registered route: morrowind. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Hearts
  id: GAMEPLAY-mshearts16
  status: done (64060f7a3; pass, accept, play 2C, trick completes, deterministic; on-demand paint counter; reviewed by orchestrator)

  candidate: mshearts16
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Dealer selection, ordinary setup, offline hand and three-card pass now reviewed. Qualify game-specific frame measurement; clipping tracked separately under WIN16-DIALOG-GEOMETRY.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-mshearts16.json; scratch/win16-dialog-worker-diagnostic-20261003/hearts-group/; ops/handoffs/win16-dialog-worker-trap-20261003.md

- [ ] Gameplay screenshot and FPS: mw3
  id: GAMEPLAY-mw3
  status: done (4200abf30 + 526b1bb43: perf.logicalFrame step, ~5 GAME/s CPU-bound on a GPU-less headful boat; gameplay reviewed earlier; accepted by orchestrator)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T21:40Z)

  candidate: mw3
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T21:40Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay/cockpit and ordinary Up-arrow throttle verified in WebGL run20261010T2110Z-mw3-webgl-cockpit-w5 (main2ae6dd315); paired screenshots reviewed by Codex too. Retain that route and collect scene-qualified logical FPS with raw samples/counter proof; do not redo fixture restoration.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-mw3.json; scratch/runs/20261010T2110Z-mw3-webgl-cockpit-w5/result.json
  notes: Migration missing-file blocker cleared against current registered route: mw3. Historical missing-path report is superseded for this route; gameplay evidence now retained; FPS is not measured in this run.


- [ ] Gameplay screenshot and FPS: Need for Speed II (retail CD)
  id: GAMEPLAY-need-for-speed-2-full
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: need-for-speed-2-full
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-need-for-speed-2-full.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-need-for-speed-2-full.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: Need for Speed II SE (retail CD)
  id: GAMEPLAY-need-for-speed-2-se-full
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: need-for-speed-2-se-full
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-need-for-speed-2-se-full.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-need-for-speed-2-se-full.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [!] Gameplay screenshot and FPS: Need for Speed III: Hot Pursuit Demo
  id: GAMEPLAY-need-for-speed-3-demo
  status: blocked
  candidate: need-for-speed-3-demo
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Declared assets are present; complete the existing review gate before gameplay or FPS work.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-need-for-speed-3-demo.json
  blocker: Renderer identity qualification previously failed; review ops/handoffs/nfs3-backend-review.md before new runtime/timing.
  waiting-on: coordinator source/evidence review; no user decision

- [x] Gameplay screenshot and FPS: NetHack for Windows
  id: GAMEPLAY-nethack-win32
  status: done (889e6a90b; number_pad digits walk the Ranger T:1->T:4, whistle picked up; turn-based on-demand paint counter; reviewed by orchestrator)
  candidate: nethack-win32
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T06:36Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T06:52Z claude:90024109, notes 889e6a90b. CLI on main 06e22f71f: number_pad is ON (letters are commands - 'l' = loot), so digits move: '6' x3 walks the Ranger east, picks up a whistle, T:1 -> T:4; deterministic replay. Counter qualified as on-demand child-window paints: 11 BeginPaint/EndPaint over 3 turns (map x6, status x4, message x1), 38 StretchBlt + 14 masked BitBlt; turn-based, no frame loop - FPS not meaningful. The gate's arrow-key check only proves cursor pixels, not a turn.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-nethack-win32.json; scratch/runs/20261003-nethack_win32-gameplay-restored11/result.json; scratch/runs/20261010T0720Z-nethack-control-paints

- [ ] Gameplay screenshot and FPS: Need for Speed II SE Demo
  id: GAMEPLAY-nfs2se_glide_demo
  status: backlog

  candidate: nfs2se_glide_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-nfs2se_glide_demo.json
  notes: Migration missing-file blocker cleared against current registered route: nfs2se_glide_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Pinball
  id: GAMEPLAY-pinball
  status: done (ba18eb28; held-Space launch, flippers Z//, score 7250-8250, identical runs; GetDC/StretchDIBits frame counter, uncapped loop so no FPS quoted; reviewed by orchestrator)
  claimed: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 self-claim 2026-10-10T05:34Z (no assignment 5 min after Crimsonland DONE)
  Result: 2026-10-10T05:55Z main 53cf4592c: 2-guest-s plunger launches the ball (score 8250); Z / '/' each move only their own flipper (704/0, 0/728 px); byte-identical runs. Frame = GetDC ret 0x1003454 (+ dirty-rect StretchDIBits + ReleaseDC), 1831 per 6 guest-s; budget-independent but follows batch-clock granularity (uncapped loop) -> no FPS quoted. Run scratch/runs/20261010T0555Z-pinball-control-frames; notes ba18eb28.
  candidate: pinball
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claim 2026-10-10T05:33Z, confirmed by orchestrator)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Reviewed Space Cadet table with BALL 1 and score 0 after F2. Space held 1200ms and Z held 300ms; captures show changing table lights but no verified ball movement or flipper response. Gameplay scene only, no successful launch/control claim. Gameplay frame measurement remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-pinball.json; scratch/runs/20261003-pinball-gameplay-restored1/result.json

- [x] Gameplay screenshot and FPS: pinball_plus95
  id: GAMEPLAY-pinball_plus95
  status: done (61baca9f7; plunger A/B, flush frame counter; reviewed by orchestrator)
  candidate: pinball_plus95
  owner: claude:d44753dd (w6; self-claimed 2026-10-10 after 5 min idle)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-pinball_plus95.json; scratch/runs/20261003-pinball_plus95-gameplay-restored10/result.json
  result: 61baca9f7 (notes) + scratch/runs/20261010T0705Z-pinball_plus95-control-frames-w6 (reviewed): plunger A/B on main 6a5b06e5d (ball deployed vs still Awaiting Deployment at the same batch; start frames byte-identical); frame counter = per-frame flush landing 0x415b17 (253 frames vs 340 StretchDIBits), interpreter-bound (84 vs 39 frames/guest-s at 5 vs 10 ms tick for the same work; 62 in play). Browser FPS not measured.

- [ ] Gameplay screenshot and FPS: Sid Meier's Pirates! (2004)
  id: GAMEPLAY-pirates-2004
  status: backlog

  candidate: pirates-2004
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-pirates-2004.json
  notes: Migration missing-file blocker cleared against current registered route: pirates_2004. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Pyramid
  id: GAMEPLAY-pyramid
  status: done (c9bfb6e8; QD+AS pair removed only with clicks, score -168->-156; turn-based repaint counter; reviewed by orchestrator)
  claimed: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 self-claim 2026-10-10T06:41Z (no assignment 7 min after funtris DONE)
  Result: 2026-10-10T06:43Z main 889e6a90b: completed legal move by A/B (Q+A pair removed, ace to discard, score -168 -> -156, only when clicked). Turn-based, no FPS: idle 1 Hz clock repaint (BeginPaint ret 0x410dd1 via InvalidateRect 0x403f35, same at 100/200 ms ticks) + 2 repaints per move. Run scratch/runs/20261010T0650Z-pyramid-pair-removal; notes c9bfb6e8 (new docs/re-notes/pyramid.md).
  candidate: pyramid
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claim 2026-10-10T06:40Z, confirmed)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: After Start and real Game > New menu clicks, bottom-row second card (2 hearts) visibly inverts after ordinary click. Selection only, no pair removal/completed deal. Gameplay frame measurement remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-pyramid.json; scratch/runs/20261003-pyramid-gameplay-restored2/result.json


- [x] Gameplay screenshot and FPS: QBob
  id: GAMEPLAY-qbob
  status: done (54a1d8b14 mmioDescend/Ascend on memory files; New Game + hops, score 10->30; GdiFlush frame counter; reviewed by orchestrator)
  candidate: qbob
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (self-claim 2026-10-10T05:23Z, confirmed by orchestrator)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T05:47Z claude:90024109, fix 54a1d8b14. New Game was blocked: mmioDescend/mmioAscend crashed for memory files (QBob's WAVE resources) -> implemented memory-file RIFF walk + test-wat-mmio case (fails on old code). Now Game>New>1 Player shows the pyramid and PgDn hops QBob down-right twice, lighting cubes, score 10->30 (replay reproduces). Frame boundary: one GdiFlush per frame on game thread T1 (303 in b240-600, ~2.3 BitBlt each) matching 304 host surface uploads; ~30k guest blocks/frame. Not done: browser FPS; T1 short-form trace has no BitBlt args.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-qbob.json; scratch/runs/20261003-qbob-gameplay-restored11/result.json; scratch/runs/20261010T0545Z-qbob-control-frames

- [ ] Gameplay screenshot and FPS: Quake II Demo
  id: GAMEPLAY-quake-2-demo-installer
  status: backlog

  candidate: quake-2-demo-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-quake-2-demo-installer.json
  notes: Migration missing-file blocker cleared against current registered route: quake2_demo, quake2_demo_installer. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: RollerCoaster Tycoon
  id: GAMEPLAY-rct
  status: done (3fc7a885c; toolbar control in live park; per-frame counter == RCT FPS readout ~35/guest-s, deterministic x3; reviewed by orchestrator)
  candidate: rct
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T03:37Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T04:18Z claude:90024109, notes 3fc7a885c. CLI (main 5529f896f): live Forest Frontiers park, toolbar zoom-out x2 widens view, Path Construction panel opens, sim live. Frame counter qualified: per-frame fn 0x438248 == sim update 0x436234 (7080:7080 over b4500-5500) and matches RCT's own FPS figure 0x560124 (35-36 vs 35.4 frames/guest-s); 10 per-100-batch raw samples; deterministic x3. dx_present is 1.58x frames - not an FPS counter for RCT. Open: initial camera at map corner (map-window clicks do not bring the entrance into view); browser FPS not measured.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-rct.json; scratch/runs/20261003-rct-gameplay-restored17/result.json; scratch/runs/20261010T0410Z-rct-control-frames

- [ ] Gameplay screenshot and FPS: Alien Shooter
  id: GAMEPLAY-reflexive-alien-shooter
  status: backlog

  candidate: reflexive-alien-shooter
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-reflexive-alien-shooter.json
  notes: Migration missing-file blocker cleared against current registered route: alien_shooter. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [!] Gameplay screenshot and FPS: Collapse! Crunch
  id: GAMEPLAY-reflexive-collapse-crunch
  status: blocked
  candidate: reflexive-collapse-crunch
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Declared assets are present; complete the existing review gate before gameplay or FPS work.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-reflexive-collapse-crunch.json
  blocker: Association integration and completed-frame semantics remain unaccepted; review ops/handoffs/serious-review-migration-freeze.md before runtime.
  waiting-on: coordinator source/evidence review; no user decision

- [x] Gameplay screenshot and FPS: Crimsonland
  id: GAMEPLAY-reflexive-crimsonland
  status: done (be1f5140; Survival on CLI + page: W move, aim, fire; page 26.3 presents/s, audio running; caveat: CLI gameplay frames diverge under the software render worker; reviewed by orchestrator)
  candidate: reflexive-crimsonland
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T04:29Z)
  Result: 2026-10-10T05:30Z Survival gameplay on current main, CLI (software D3D, 200k/20ms) + page (boat headful WebGL): W moves, relative aim + held fire. Frame = Present at 0x5e2da9; page 26.3 presents/s over 24 s (HUD 28-30), audio 44.1 kHz running. CLI gameplay not deterministic under software render worker (noted). Run scratch/runs/20261010T0515Z-crimsonland-cli-frames; notes be1f5140.
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Localize observed early ExitProcess0 after launcher Play using saved guest/loader evidence, then repair and requalify gameplay.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-reflexive-crimsonland.json; scratch/runs/20261003-crimsonland-gameplay-restored16/result.json

- [ ] Gameplay screenshot and FPS: Ricochet Xtreme
  id: GAMEPLAY-reflexive-ricochet-xtreme
  status: backlog

  candidate: reflexive-ricochet-xtreme
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-reflexive-ricochet-xtreme.json
  notes: Migration missing-file blocker cleared against current registered route: ricochet_xtreme. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Zuma Deluxe
  id: GAMEPLAY-reflexive-zuma-deluxe
  status: done (1a68c8953; aimed greens pop +40 vs B 0; reviewed by orchestrator)
  candidate: reflexive-zuma-deluxe
  owner: claude:d44753dd (w6; self-claimed 2026-10-10 after 5 min idle)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Diagnose loading-screen progress on actual owning threads; BASS startup failure cleared, fallback MSVCRT present. No active gameplay/FPS yet.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/runs/20261003-zuma-nested-loader-qualification/result.json; scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-reflexive-zuma-deluxe.json
  result: 1a68c8953 (notes) + scratch/runs/20261010T0710Z-zuma_deluxe-control-frames-w6 (reviewed): Level 1-1 via ordinary menus on main 75a021d56; A/B (aimed greens pop +40 vs score 0 at the same batch; start frames byte-identical); fire needs press-gap-release; frame counter qualified 1:1 (Blt+Flip, 100% new), interpreter-bound (20 frames/2920 batches at both 200 and 20 ms ticks). Browser FPS not measured.



- [ ] Gameplay screenshot and FPS: Runenlegen
  id: GAMEPLAY-runenlegen
  status: done (da75a3cbc min/max fix; rune placement on 12x8 board, event-driven paints; reviewed by orchestrator)
  candidate: runenlegen
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Full12x8 Beginner board and ordinary placement already verified on14aadaac; geometry fixce4f60b2 is in main640b85a4/current main. Do not repeat screenshot/integration work. Remaining task is scene-qualified FPS measurement with valid counter and exact current build identity.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-runenlegen.json; scratch/runs/20261003-runenlegen-gameplay-restored13/result.json; scratch/new-games-pipeline-20261004/runenlegen-preparation/frame-qualification/root-review.json; main ce4f60b2
  result: da75a3cbc (fix + test + notes; build green on rebased HEAD) + scratch/runs/20261010T0730Z-runenlegen-minmax-fix-frames-w6 (reviewed): DefWindowProc min/max now raises max<min to the minimum (Wine) -- CLI window had collapsed to 8x45 (also on ce4f60b2). Full 12x8 Beginner board via File/New/Beginner/OK; one click places a rune (A/B vs identical idle run); frame counter event-driven: 0 paint cycles idle, 3 (14 BitBlt) per placement.

- [x] Gameplay screenshot and FPS: ScummVM + Flight of the Amazon Queen
  id: GAMEPLAY-scummvm-fotaq
  status: done (56b47167f; floor click walks Joe, replay identical; 4098 presents == 4098 SDL primary Blts; reviewed by orchestrator)
  candidate: scummvm-fotaq
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T05:42Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T06:22Z claude:90024109, notes 56b47167f. CLI (registered SDL1 build, main e0d32da41): hotel room by b9027, held floor click walks Joe x~178 -> x~555, replay byte-identical. Counter qualified: 4098 slot-6 presents == 4098 primary Blts from one SDL.dll site (sdl+0x100181db) = one per ScummVM updateScreen; only 243 (5.9%) change the picture (engine pushes every loop) -> present count = engine update rate, changed count = animation rate. Not done: browser FPS; no full-game claim.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-scummvm-fotaq.json; scratch/runs/20261003-scummvm_fotaq-gameplay-restored13/result.json; scratch/runs/20261010T0640Z-fotaq-control-frames

- [ ] Gameplay screenshot and FPS: Serious Sam: The First Encounter Demo
  id: GAMEPLAY-serious-sam-demo
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: serious-sam-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-serious-sam-demo.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-serious-sam-demo.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [x] Gameplay screenshot and FPS: SimCity 2000 Demo
  id: GAMEPLAY-simcity2000_demo
  status: done (922c5e07 revision accepted: palette-index control rotate 37.4% vs 0 animation-only; hit-counter clock 5.63/game-s; reviewed by orchestrator)
  note: 2026-10-10T06:45Z REVISED 922c5e07 (main, ls-remote verified, full build green, test re-run on rebased main PASS): the earlier 0% null band was a same-phase capture coincidence -- SC2K's map palette-animates on screen (16.8% RGB change in 3 batches; 23% of the main window's 8-bit surface uses animated indices). Test now judges by palette indices: animation frames change 0 indices, rotate-left changes 37.4%. Animation clock via --count hit counter at 0x4489ac: 90 AnimatePalette calls / 16 guest-s = 5.63/guest-s, deterministic. Caveat closed. Evidence scratch/runs/20261010T0615Z-simcity2000_demo-control-animation (refreshed).
  note: 2026-10-10T06:20Z 42e14a04 (main, ls-remote verified, full build green): test/test-simcity2000-gameplay.js -- route fixed (Load Demo City now (315,148); 20000-block/16 ms batches), control response rotate-left 35.6% map change vs 0.00% null band, animation clock = AnimatePalette from one site 0x4489ac: 81 ticks / 16 guest-s = 5.06 per guest-second, identical across two runs. SC2K has no frame loop (full-map BitBlt ~0.25/guest-s). Open caveat: on-screen pixel change from the palette ticks not yet shown. Evidence scratch/runs/20261010T0615Z-simcity2000_demo-control-animation.
  candidate: simcity2000_demo
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (assigned by orchestrator 2026-10-10T05:49Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a complete-frame measurement.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-simcity2000_demo.json; scratch/runs/20261003-simcity2000_demo-gameplay-restored11/result.json

- [ ] Gameplay screenshot and FPS: SimCity 2000 Network Edition
  id: GAMEPLAY-simcity2000_net
  status: done (fdf9d11f; 14/14 three-process PASS; Mayor rotate 79.9% vs 0.0% idle; Buy Land claim corrected; reviewed by orchestrator)
  note: 2026-10-10T08:25Z fdf9d11f (main, ls-remote verified, full build green): test-simcity2000-net-vlan-gameplay now 14 checks, 14/14 PASS end to end on boat bx_f79j7yte -- existing 6 + Mayor control response (toolbar rotate-left 142,56: 79.9% map change vs 0.0% idle, view holds, zoom-in 78.0%) + animation clock (AnimatePalette 0x46d08d/0x46d107 via --count == API census; 760 calls / 320 guest-s, 4.2/guest-s in the late window). Buy Land did not reproduce (re-notes corrected). Evidence scratch/runs/20261010T0715Z-simcity2000_net-boat + scratch/runs/20261010T0800Z-simcity2000_net-rotate. Boat-only test.
  note: 2026-10-10T08:00Z boat bx_f79j7yte granted; subagent running the Mayor-client rotate control + merged test diff (rotate check + palette counter).
  note: 2026-10-10T07:56Z blocked on a boat (requested 07:52Z): the control-response run (client toolbar rotate 142,56) needs the 3-process route, which is boat-only. Everything else is in the 07:55Z note.
  note: 2026-10-10T07:55Z boat run: existing net test PASS 6/6 on 922c5e07; Buy Land control does NOT reproduce (clicks arrive and dispatch, no visible change; the 09-28 'confirmed' note is an uncommitted local edit, not on main); client animation clock AnimatePalette 0x46d08d/0x46d107 = 4.2/guest-s over batches 305000-320000 (route ~6% nondeterministic). Next: control response via the client toolbar rotate (142,56) on a new boat; Buy Land kept as an open lead. Evidence scratch/runs/20261010T0715Z-simcity2000_net-boat.
  candidate: simcity2000_net
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (assigned by orchestrator 2026-10-10T06:30Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Prepare and review ordinary local virtual-peer browser route per ops/handoffs/gameplay-network-preparation-20261003.md, then capture actual gameplay; all declared files present.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-simcity2000_net.json

- [ ] Gameplay screenshot and FPS: Sid Meier's SimGolf Demo
  id: GAMEPLAY-simgolf-demo-installer
  status: backlog

  candidate: simgolf-demo-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-simgolf-demo-installer.json
  notes: Migration missing-file blocker cleared against current registered route: simgolf_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Rattler
  id: GAMEPLAY-snake
  status: done (87335f1b; Left steers clear of the bar vs no-input death; 16.7 steps/guest-s PatBlt counter; reviewed by orchestrator)
  candidate: snake
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claim 2026-10-10T06:19Z, confirmed)
  Result: 2026-10-10T06:30Z main 18e036475: steering proven by A/B (one Left at b420 turns the snake away from the bar and it lives; no-input run dies on the bar, life lost). GDI game: step counter = tail-erase PatBlt ret 0x1002a18, 16.7 steps/guest-s at both 20 and 10 ms ticks (BitBlt/GetDC are redraws, vary). Run scratch/runs/20261010T0630Z-snake-control-steps; notes 87335f1b (new docs/re-notes/rattler-race.md).
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Early route now captures living upward movement without life loss; steering remains unverified. Qualify ordinary steering and source-backed frame timing; prior failed run retained.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-snake.json; scratch/runs/20261003-snake-gameplay-early-route/result.json

- [x] Gameplay screenshot and FPS: Snood
  id: GAMEPLAY-snood
  status: done
  note: 2026-10-06T19:15Z fixed 97aae839: phone desktop min 1024x768 + no auto-maximize for Snood; board fully drawn at 375x667 and 667x375 (scratch/runs/20261006T1850Z-snood-board/result.json).
  note: 2026-10-06T18:38Z claude:1863d2b5: no defect found on CLI or in the page (scratch/runs/20261006T1835Z-snood-survey/result.json): dialogs, title, New Game, aiming/shots, score, Snoods Used, danger gauge + ceiling drop, menus, Big Window, DirectSound. Two leads ruled out (menu-bar click mid-game = ClipCursor-faithful; no radio bullets = Snood never calls CheckMenuRadioItem at startup). Blocked on the user's description of the bug (screen / action / browser+device); orchestrator asked 18:32Z.
  candidate: snood
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (assigned by orchestrator 2026-10-06T18:30Z; user reported a Snood bug, details not received)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restored fixtures and ordinary frozenCLI mouse gameplay verified84075; root-reviewed board/shot4623changedpixels. Scene-qualified FPS remains unmeasured; collect meaningful real-time frame evidence when performance slot available.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/runs/20261005-snood-restored-gameplay/result.json; mainbc6c8f37 restoration receipt; Telegram460


- [x] Gameplay screenshot and FPS: sol16
  id: GAMEPLAY-sol16
  status: done (6a5b06e5; 6H onto 7C only with drag; timer tick-loss finding filed; reviewed by orchestrator)
  Result: 2026-10-10T06:47Z main c9bfb6e8e: tableau drag 6H->7C proven by A/B (deal identical); old blank-caption defect does not reproduce. Turn-based, no FPS (repaint per pointer step while dragging). FINDING: headless 1 s WM_TIMER loses ticks at coarse batches (Time 13/18/22 after 20 guest-s at 200/100/50 ms; 22 correct) -- use <=50 ms. Run scratch/runs/20261010T0655Z-sol16-move-timer; notes 6a5b06e5 (new docs/re-notes/sol16.md).
  candidate: sol16
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T06:46Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Reviewed limited gameplay input and screenshots saved; qualify a game-specific frame counter before publishing FPS. Initial seven-column tableau visible, but caption area is blank gray. Ordinary stock click exposes three waste cards. Limited stock draw works; caption defect remains, no complete-game or FPS claim.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-sol16.json; scratch/runs/20261003-sol16-gameplay-ready2/result.json


- [x] Gameplay screenshot and FPS: StarCraft Shareware
  id: GAMEPLAY-starcraft-shareware
  status: done (headful page: Marine select + right-click move; GAME 17.6-17.9 steps/s = Fast pace, 1:1 verifier; scratch/runs/20261010T0325Z-starcraft_shareware-gameplay-fps; reviewed by orchestrator)
  candidate: starcraft-shareware
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-10T03:20Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Result (2026-10-10T03:30Z): headful browser on boat, main 3f9c84318 (wasm f873b89e), registered cooperative ophelia terran1 route -> Terran base. Control: left-click selects a Marine, right-click at (300,330) moves it there. Frame measurement: StarCraft's own game-step counter (perf.logicalFrame 0x004b29f0 + verifier 0x004411f7, 1:1 at every read) 17.6 / 17.9 / 17.7 steps/s over three ~6 s samples (107/107/115 steps), i.e. the game's own 'Fast' pace; presents 69-71/s; page ~31 fps on a GPU-less boat. Raw counter reads in samples-raw.jsonl. Evidence scratch/runs/20261010T0325Z-starcraft_shareware-gameplay-fps. Probe gains rdown/rup (d8a00c63f).
  Evidence: scratch/runs/20261010T0325Z-starcraft_shareware-gameplay-fps/result.json
  Next: Reviewed gameplay and limited input response; qualify complete-frame measurement. No full-game compatibility claim.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-starcraft-shareware.json; scratch/runs/20261003-starcraft_shareware-gameplay-restored13/result.json
  blocked-since: 2026-10-03T08:42:45.967Z

- [x] Gameplay screenshot and FPS: Taipei
  id: GAMEPLAY-taipei
  status: done (d0fa07dcf; manual pair removed, Autoplay continues; reviewed by orchestrator)
  candidate: taipei
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T06:44Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T07:02Z claude:90024109, notes d0fa07dcf (new docs/re-notes/taipei.md). CLI on main 64060f7a3: Game #17344, clicking the two free West winds removes the pair (replay byte-identical); Game>Autoplay removes ~23 more. Counter qualified as on-demand paints: 48 InvalidateRect (2 per removed pair) -> 23 BeginPaint/EndPaint, each ~21 StretchBlt (491); no frame loop, FPS not meaningful.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-taipei.json; scratch/runs/20261003-taipei-gameplay-ready/result.json; scratch/runs/20261010T0745Z-taipei-control-paints

- [ ] Gameplay screenshot and FPS: tetravex
  id: GAMEPLAY-tetravex
  status: done (1b3b8955e drag fix + 062aca41b vacated repaint; drop into grid and empty source slot viewed by orchestrator)
  candidate: tetravex
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T07:30Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay board and clean ordinary tile-drag response reviewed. Define a meaningful complete-frame counter or document event-driven rendering limits; FPS remains unknown.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-tetravex.json; scratch/runs/20261003-tetravex-gameplay-drag-restored/result.json
  result: 1b3b8955e (window props keyed by global atom; build green on rebased HEAD) + scratch/runs/20261010T0740Z-tetravex-prop-atom-drag-w6 (reviewed, outcome partial): VB drag subclass lookup GetPropA(tile,0xC000) now finds SetPropA(string) -> dragged tile follows and drops into the grid (A/B vs identical idle run); painting event-driven (0 calls idle). Explicit failure kept: vacated supply slot not repainted -> CHILD-MOVE-VACATED-REPAINT-20261010.

- [ ] Moving a child window leaves its old pixels: invalidate the uncovered area
  id: CHILD-MOVE-VACATED-REPAINT-20261010
  status: done (062aca41b; vacated rect invalidated+erased; unit test; Tetravex supply slot empty after drop; reviewed by orchestrator)
  owner: claude:d44753dd (w6; finder; assigned by orchestrator 2026-10-10T07:42Z)
  created: 2026-10-10T07:39:16.678Z
  Next: When SetWindowPos/MoveWindow moves a child, USER invalidates the uncovered rectangle of the parent and of siblings beneath it; we do not, so Tetravex's vacated supply slot keeps its tile pixels after a drag (scratch/runs/20261010T0740Z-tetravex-prop-atom-drag-w6, 04). A 2026-10-03 repair existed only in Codex's uncommitted tree (archive/codex-shared-tree-20261006). Fix in the move path + regression test; recheck Tetravex drag and mid-drag frames.
  Done: vacated area repainted on child move, test on main, Tetravex frame reviewed.
  result: 062aca41b (build green on rebased HEAD): visible child move/resize invalidates its old rect in the parent WITH erase ($windowpos_expose_vacated; InvalidateRect body -> $invalidate_rect_core); NOREDRAW/bRepaint FALSE/no-change skipped. Unit test discriminates (fails without the fix at the erase assertion). Tetravex: vacated supply slot empty after the drop (A/B). Evidence scratch/runs/20261010T0800Z-tetravex-vacated-repaint-w6 (reviewed).

- [ ] Gameplay screenshot and FPS: TetriNET
  id: GAMEPLAY-tetrinet
  status: done (f5fa852b6 focus fix + ab512bbe6 two-seat Left/Space A/B; reviewed by orchestrator; browser check requested by user)
  note: 2026-10-10T10:37Z claude:1863d2b5 DONE, pending review. Root cause of the failed A/B: renderer _findWatEditTarget called WAT edit_command_target(), which set_focus'es the first visible EDIT anywhere, so every key left the Playing Fields form. Fix f5fa852b6 (+ test-wat-edit-target-focus.js). ab512bbe6: test-vlan-tetrinet A/B via VLAN_AB_VK, run.js B:hit-counts, docs/re-notes/tetrinet.md. Boat bx_evj8bmv6, 2 rounds identical: none col 5 stays, Left x6 col 5->0, Space x6 stacks pieces. Counter pinned to batches 5300145..5300445 (60 guest-s): StretchBlt cell blits 4.40/4.33/7.57 per guest-s (none/Left/Space); draw-on-change, not a fixed fps. Evidence scratch/runs/20261010T1035Z-tetrinet-focus-ab (reviewed). No physical/browser FPS claim.
  note: 2026-10-10T09:35Z boat run (bx_4urhz2ah, stopped): unchanged test-vlan-tetrinet PASS 13/13 (but the client's match has already ended in its screenshots -- the test proves a game starts, not that it stays live). Input A/B FAILS: on the host ('bob') six Left and six Space presses leave the falling piece exactly where the no-key run has it (cols 5-7), because every key is routed to hwnd 0x10043, the partyline chat edit: raising or clicking the Playing Fields form never moves keyboard focus there (Delphi form, KeyPreview). Frame counter: field drawn by per-cell StretchBlt (ret 0x419f7b), ~7.2 calls/guest-s, input- and peer-dependent. Next: fix focus hand-off when a Delphi form is shown/activated, then rerun the A/B. Evidence scratch/runs/20261010T0900Z-tetrinet-boat (notes.txt).
  note: 2026-10-10T08:52Z boat bx_4urhz2ah granted; subagent running the 2-seat route + input A/B (Left/Space) + frame counter.
  note: 2026-10-10T08:46Z blocked on a boat (requested 08:42Z): the two-seat route is 2 processes x up to 300 s, too heavy for this box.
  note: 2026-10-10T09:10Z claude:1863d2b5: route = test-vlan-tetrinet (2 processes, boat); plan input A/B on the host + frame counter; boat requested.
  candidate: tetrinet
  owner: claude:1863d2b5 (launch-ux; assigned by orchestrator 2026-10-10T08:35Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualify complete gameplay frame measurement. Local two-seat join and limited host Left/Space response reviewed; no external network, sustained-play or physical FPS claim.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-tetrinet.json; scratch/runs/20261003-tetrinet-local-gameplay/result.json


- [x] Gameplay screenshot and FPS: Total Annihilation Demo
  id: GAMEPLAY-total_annihilation_demo
  status: done (de2b37c25: select + click-to-move route, qualified frame counter; reviewed by orchestrator)
  candidate: total_annihilation_demo
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T02:36Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T02:55Z claude:90024109, commit de2b37c25. Control route (CLI, 20000-block/16 ms candidate settings): left-click Stumpy selects it (orders panel), left-click ground orders a move, tank drives there and reports Standby; economy ticks. The old frozen test's 1000/200 ms settings starved TA (no motion, no economy; its 'pointer response' was the cursor) - test now uses candidate settings and asserts panel/leave/arrive (PASS). Frame counter qualified: TA never flips; one primary Lock(0x47c211)/Unlock(0x47c34a) per frame == dx_present slot 1 (321:321). 14.3 frames per guest-second over 22.3 guest-s, interval p50 4 / p99 10 batches, deterministic over two runs (arrived frames byte-identical); raw samples via new run.js --frame-stats-out. Not done: browser/player FPS (guest-clock rate and CLI throughput 121-127 frames/wall-s only).
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-total_annihilation_demo.json; scratch/runs/20261003-total_annihilation_demo-gameplay-restored5/result.json; scratch/runs/20261010T0250Z-total_annihilation_demo-control-frames

- [x] Gameplay screenshot and FPS: Tile World
  id: GAMEPLAY-tworld
  status: done (Right walks Chip, chips 6->3; SDL_UpdateRects counter; notes committed 6cfff2748; reviewed by orchestrator)
  candidate: tworld
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T05:51Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T06:32Z claude:90024109 (no commit: docs/re-notes/tile-world.md is untracked in the main checkout; findings appended there + evidence). CLI on main 56b47167f at 100000-block batches (1000-block default starves during SDL RLE encoding of tiles): intro-ms Level 1, Right walks Chip, chips 6->3, timer runs; replay byte-identical. Counter qualified: SDL windib GDI; frames = SDL_UpdateRects calls (91 in b245-600 == host surface uploads; ~7.8 BitBlt each; SDL_Flip 0); on-demand redraw: clock 200->137 = ~63 1/s redraws + moves. Not done: browser FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/runs/20261005-tworld-main6a-callback-gameplay; ops/handoffs/tworld-wave-callback-integration-20261005.md; main9a996fc1; root-scene-review.json; scratch/runs/20261010T0700Z-tworld-cli-frames

- [ ] Gameplay screenshot and FPS: Unreal Special Edition OEM demo
  id: GAMEPLAY-unreal-special-edition
  status: backlog

  candidate: unreal-special-edition
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-special-edition.json
  notes: Migration missing-file blocker cleared against current registered route: unreal_special_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Unreal Tournament 2003 demo
  id: GAMEPLAY-unreal-tournament-2003-demo
  status: backlog

  candidate: unreal-tournament-2003-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-2003-demo.json
  notes: Migration missing-file blocker cleared against current registered route: ut2003_demo, ut2003_demo_server. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Unreal Tournament 2004 demo
  id: GAMEPLAY-unreal-tournament-2004-demo
  status: backlog

  candidate: unreal-tournament-2004-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-2004-demo.json
  notes: Migration missing-file blocker cleared against current registered route: ut2004_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Unreal Tournament 3 demo installer
  id: GAMEPLAY-unreal-tournament-3-demo-installer
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: unreal-tournament-3-demo-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-3-demo-installer.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-3-demo-installer.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: Unreal Tournament demo
  id: GAMEPLAY-unreal-tournament-demo-348
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: unreal-tournament-demo-348
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-demo-348.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-demo-348.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [x] Gameplay screenshot and FPS: Warcraft III: Reign of Chaos Demo
  id: GAMEPLAY-warcraft3-demo
  status: done (5529f896f; Prologue: Thrall select + 3 move orders, deterministic x3; 54 presents == 54 gpuPresent; reviewed by orchestrator)
  candidate: warcraft3-demo
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T03:11Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: REVIEW 2026-10-10T03:36Z claude:90024109, notes 5529f896f. CLI (boat bx_mxx786zy, main bc3505ce6, software GL): wc3g replay reaches Prologue gameplay; Thrall selected (portrait/stats/command card) and three right-click move orders obeyed; HUD + end frames byte-identical over 3 runs. Counter qualified: 54 GL presents == 54 gpuPresent (one context) over b19170-21530; ~860k guest blocks per frame (p50 43 batches x 20000), 2.9-3.4 frames per wall-s on boat CLI; guest-second rate is a 200 ms-tick artifact. Profile-screen stall in the old Next is not reproduced on this route. Not done: browser FPS. Fresh boats cannot extract the demo (7z exit 2) - ship local tree + dlls.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-warcraft3-demo.json; scratch/runs/20261003-warcraft3-profile-stall/result.json; scratch/runs/20261010T0330Z-warcraft3-demo-control-frames




- [ ] Gameplay screenshot and FPS: wep16_cruel
  id: GAMEPLAY-wep16_cruel
  status: done (b5684b431: moves to foundations + deal A/B; reviewed by orchestrator)
  candidate: wep16_cruel
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claim 2026-10-10T08:28Z, no assignment 5+ min after wep16_jigsawed DONE(review))
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_cruel.json; scratch/runs/20261003-wep16_cruel-gameplay-restored7/result.json

- [ ] Gameplay screenshot and FPS: wep16_freecell
  id: GAMEPLAY-wep16_freecell
  status: done (d81f506d6: corrupt WEP2 CARDS.DLL replaced with the clean build; select/move works; reviewed by orchestrator)
  candidate: wep16_freecell
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T12:31Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_freecell.json; scratch/runs/20261003-wep16_freecell-gameplay-restored10/result.json





- [ ] Gameplay screenshot and FPS: wep16_jigsawed
  id: GAMEPLAY-wep16_jigsawed
  status: done (f4f937b3f + a00df147f + fb7d05787; picture load restored, child clip fixed, piece drag A/B; reviewed by orchestrator)
  candidate: wep16_jigsawed
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claim 2026-10-10T07:52Z, no assignment 5+ min after jigssawme DONE(review))
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Capture originating instruction/stack for RuntimeError after About creation; ordinary capture does not prove close-click causality. All declared/import DLLs present; no missing guest path established.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_jigsawed.json; scratch/runs/20261003-wep16_jigsawed-gameplay-restored9/result.json; scratch/batch9-blocker-count-audit-20261003.json

- [ ] Gameplay screenshot and FPS: wep16_klotski
  id: GAMEPLAY-wep16_klotski
  status: done (9866f4875 + fb0443c6a; one-column pick is the game own rounding, not an emulator bug; reviewed by orchestrator)
  candidate: wep16_klotski
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T08:42Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Reviewed active Daisy puzzle and one ordinary tile-move response on5ff4844e; qualify frame measurement separately, retain setup clipping and picking-offset caveats.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_klotski.json; scratch/runs/20261003-wep16_klotski-gameplay-modal-repaired/result.json

- [ ] Gameplay screenshot and FPS: wep16_maxwell
  id: GAMEPLAY-wep16_maxwell
  status: done (c301ec9ab: click slides the gate, ball passes vs no-click; timer-paced frames; reviewed by orchestrator)
  note: 2026-10-10T12:10Z claude:1863d2b5 DONE, pending review. c301ec9ab: test-win16-wep4-gameplay Maxwell case is now an input A/B (20 ms/batch, arms identical at 420; click at 430 slides the gate, at 520 a ball passes the opened gate into the left chamber, no-click arm it bounces back) + docs/re-notes/wep16-maxwell.md. Frame counter: one frame per WM_TIMER (GETDC..4 BITBLT..RELEASEDC, Win16 trace 300..400): 20/17/5 per guest-s at 5/20/200 ms/batch, timer-paced ~18 Hz. Evidence scratch/runs/20261010T1205Z-wep16_maxwell-gate-ab (reviewed). Headless CLI; no browser/physical FPS claim.
  candidate: wep16_maxwell
  owner: claude:1863d2b5 (assigned by orchestrator 2026-10-10T10:46Z, after the TetriNET browser check)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_maxwell.json; scratch/runs/20261003-wep16_maxwell-gameplay-restored6/result.json



- [ ] Gameplay screenshot and FPS: wep16_rattler
  id: GAMEPLAY-wep16_rattler
  status: done (91ae7bf58: arrow keys steer, steered vs control differ in lives; old vacuous key test fixed; reviewed by orchestrator)
  candidate: wep16_rattler
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T09:03Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_rattler.json; scratch/runs/20261003-wep16_rattler-gameplay-restored8/result.json

- [ ] Gameplay screenshot and FPS: Rodent's Revenge
  id: GAMEPLAY-wep16_rodent
  status: done (7b0931167 + c2dab13cf: RIGHT pushes a block row vs control; vacuous test fixed; reviewed by orchestrator)
  candidate: wep16_rodent
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claimed 10:03Z, confirmed by orchestrator)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_rodent.json; scratch/runs/20261003-wep16_rodent-gameplay-restored8/result.json

- [ ] Gameplay screenshot and FPS: wep16_ski
  id: GAMEPLAY-wep16_ski
  status: done (5994821ec; Down-arrow skis 986 m vs idle; HUD time-zero question -> SKIFREE16-HUD-TIME-ZERO-20261010; reviewed by orchestrator)
  candidate: wep16_ski
  owner: claude:d44753dd (w6; self-claimed 2026-10-10 after 5 min idle)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_ski.json; scratch/runs/20261003-wep16_ski-gameplay-restored9/result.json
  result: 5994821ec (notes) + scratch/runs/20261010T0920Z-wep16_ski-control-frames-w6 (reviewed): Down-arrow A/B (skier skis 986 m vs identical idle run at the start); frame counter = one GetTickCount per frame (qualified vs 4-line HUD redraw, both arms); interpreter-bound (23 frames/100 batches at 200 and 20 ms ticks). HUD clock runs only on a course (not a bug). Browser FPS not measured.



- [ ] Gameplay screenshot and FPS: wep16_tetris
  id: GAMEPLAY-wep16_tetris
  status: done (e82eaec16 + 3d843d1aa: DialogBox foreground fix, Down hard-drops vs control; reviewed by orchestrator)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claimed 10:18Z, confirmed by orchestrator)
  parked: 2026-10-10T07:35Z by claude:d10ba697 (self-claim released when orchestrator assigned GAMEPLAY-jigssawme). Found: test-win16-wep1-gameplay's 'Tetris caption must remain visible but inactive behind modal About' fails on main c838b9162 -- at batch 25 the owner caption is painted ACTIVE blue while the modal About is up (Win98: inactive gray). Suspects: the 2026-09-20 activation/modal-focus series (4506e7257, 168ecb6d5, 967c831ab, b9ce89321, ...). Next: bisect from the test's own commit 70dcb3be0 (assumed good) with a 30-batch --app=wep16_tetris capture (--batch-size=20000 --tick-ms-per-batch=20 --repaint-every=10, png at 25) counting caption pixels y3-18 x4-573: blue = bad. A first checker attempt at 70dcb3be0 failed to build/run that old tree (node error) -- an old commit may need --no-build with its own compile.
  candidate: wep16_tetris
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (re-claimed 2026-10-10T10:18Z, no assignment 5+ min; includes the test-win16-wep1-gameplay modal-caption failure)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay/Left response and open-menu Escape repair reviewed. Qualify complete-frame measurement; separate TASKBAR-RESTORE-INPUT remains unproven.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_tetris.json; scratch/runs/20261003-wep16_tetris-gameplay-menu-escape-repaired/result.json


- [ ] Gameplay screenshot and FPS: wep16_tictacdp
  id: GAMEPLAY-wep16_tictacdp
  status: done (218fb34a2 + 1d3f4c304: one-player and two-player both play; reviewed by orchestrator)
  candidate: wep16_tictacdp
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T11:25Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Trace the preserved Sub or Function not defined error after ordinary piece drag; identify the guest call before another input qualification. Keep reviewed startup board scene, FPS unknown.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_tictacdp.json; scratch/runs/20261003-wep16_tictacdp-gameplay-restored9/result.json; scratch/batch9-blocker-count-audit-20261003.json



- [ ] Gameplay screenshot and FPS: wep16_tutstomb
  id: GAMEPLAY-wep16_tutstomb
  status: done (605757a32 + e53a7f3e2: Win16 first WM_SIZE delivered, pyramid on screen, King to discard A/B; reviewed by orchestrator)
  candidate: wep16_tutstomb
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_tutstomb.json; scratch/runs/20261003-wep16_tutstomb-gameplay-restored8/result.json



- [ ] Gameplay screenshot and FPS: winarc
  id: GAMEPLAY-winarc
  status: done (adc5ecee9: Life F5 steps gen 0->2 vs idle; Queens not A/Bd; reviewed by orchestrator)
  candidate: winarc
  owner: claude:d44753dd (w6; self-claimed 10:02Z, confirmed by orchestrator)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Cover remaining playable Winarc subgames and qualify complete-frame measurement; Memory single-card reveal reviewed only.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-winarc.json; scratch/runs/20261003-winarc-gameplay-restored16/result.json

- [~] Gameplay screenshot and FPS: WinBoard installer
  id: GAMEPLAY-winboard-installer
  status: blocked
  candidate: winboard-installer
  owner: /root/restore_evidence
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Blocked on PROCESS-PIPE-STDIO-WINBOARD: real CreatePipe and inherited child standard-handle transport; no visible board or engine reply. Preserve original engine route; resume ordinary gameplay after genuine process/pipe contracts pass.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-winboard-installer.json; scratch/new-games-pipeline-20261005/winboard/selection.json; scratch/new-games-pipeline-20261005/winboard/payload-receipt.json; scratch/new-games-pipeline-20261005/winboard/browser/preparation-receipt.json; commit9fc73eb347d03f3e5c1d1d3df2fa092468980f9c; scratch/runs/20261005-winboard-engine-startup/result.json; scratch/new-games-pipeline-20261005/winboard/startup-finding.md
  notes: All27 original installed assets are present. Session10947 guest CreatePipe trap0x4496a0; harness cleanup successful. CreateProcessA inheritance and pipe endpoint semantics also missing by source audit.
  blocked-since: 2026-10-05T17:41:32.387Z





- [x] Diagnose Win16 setup-dialog Worker trap in FreeCell and Hearts
  id: WIN16-DIALOG-WORKER-TRAP
  status: done
  candidate: freecell16, mshearts16
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:55:51.777Z
  accepted: 2026-10-03T08:55:51.777Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete: worker-owned controls use their owning queue, GROUPBOX is transparent, modeless return requires pending handle. FreeCell setup/card move and Hearts setup/card pass reviewed; tests/build pass. Dialog clipping remains a separate backlog task.
  Done: Both ordinary FreeCell Select Game and Hearts name/dealer setup complete without trap, with focused regression and reviewed gameplay input screenshots.
  Evidence: ops/handoffs/win16-dialog-worker-trap-20261003.md; scratch/win16-dialog-worker-diagnostic-20261003/
  Notes: FreeCell EIP0x12ff40 prev0x103393, Hearts EIP0x13ff40 prev0x109ccb. Both offsets match WIN16_DLG_PUMP0xFF40; this localizes the crash but does not prove its cause. Existing REP review block remains preserved; this task does not authorize retrying blocked REP validation.

## Shared fixture restoration dependency

- [ ] Restore and verify missing game fixture sets
  id: MIG-FIXTURE-RESTORE
  status: ready
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  accepted: 2026-10-03T09:34:17.069Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Queued selective recovery: latest owner audit has218 complete declared routes,5 missing-file entries/156 exact paths and18 unregistered entries. Reconcile exact gaps in scratch/local-owner-restore-final/report.json; no active transfer claimed.
  Done: Owner receipts verified and each dependent game either ready with all assets or carries exact remaining missing paths. Presence alone does not establish gameplay or FPS.
  Evidence: scratch/selective-fixture-wave3-20261003/install-receipt.json; scratch/gameplay-coverage-20261003/tasks/; scratch/migration-transfer.json
  Notes: Migration-owner bulk transfer complete with verified receipt. Coordinator now owns selective missing-fixture recovery and per-task reconciliation; exact absent archive members remain documented, no foreign services/jobs claimed.

## Remaining visual correctness work

- [x] Correct clipped Win16 setup-dialog geometry
  id: WIN16-DIALOG-GEOMETRY
  status: done
  candidate: freecell16, mshearts16
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Shared owner geometry fix qualified by actual full About credits/visible OK and ordinary dismissal. Separate Escape host/shared visibility divergence remains WIN16-MENU-VISIBILITY; existing one-pixel NC/default-base-unit limitations documented.
  Done: Setup dialog controls render within correct bounds and ordinary controls work without relying on a narrow visible edge; screenshot review and targeted geometry regression.
  Evidence: scratch/win16-dialog-worker-diagnostic-20261003/hearts-group/controls-before.json; ops/handoffs/win16-dialog-worker-trap-20261003.md; scratch/klotski-qualification-20261003/attempt1/step-05-after.json; scratch/wep16-dialog-geometry-20261003/evidence.json; ops/handoffs/wep16-dialog-geometry-20261003.md; scratch/wep16-dialog-geometry-20261003/root-review.json; scratch/runs/20261003-wep16_tetris-dialog-dismissal-diagnostic/result.json

## Restored-title runtime gaps

- [x] Implement and validate TrackMouseEvent for Tetravex
  id: WIN32-TRACKMOUSEEVENT
  status: done
  candidate: tetravex
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete narrow client-LEAVE repair: shared owner tracking/query/cancel, physical hit, queue retry and lifecycle regressions pass; canonical build and Tetravex New Game succeed. HOVER/NONCLIENT remain unsupported; drag rendering tracked separately.
  Done: Ordinary New Game reaches numbered puzzle, mouse input works, requested tracking behavior is covered by regression and gameplay image review.
  Evidence: ops/handoffs/tetravex-trackmouseevent-20261003.md; scratch/runs/20261003-tetravex-gameplay-trackmouseevent/result.json; scratch/track-mouse-event-20261003/build-completion.log

- [x] Repair Tetravex tile-drag visual trails
  id: TETRAVEX-DRAG-TRAILS
  status: done
  candidate: tetravex
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete. Reviewed ordinary drag on canonical939943d4 moves one tile cleanly, restores vacated path and preserves eight supply tiles. Pixel regression, before-source negative control and independent geometry review pass.
  Done: Ordinary tile drag places one tile and restores the traversed background correctly; original degraded evidence preserved.
  Evidence: ops/handoffs/tetravex-drag-trails-20261003.md; scratch/runs/20261003-tetravex-gameplay-drag-restored/result.json; scratch/tetravex-drag-repair-20261003/validation.json

- [x] Implement RIFF chunk navigation for memory-backed MMIO streams
  id: MMIO-MEMORY-RIFF
  status: done
  candidate: qbob
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete. Bounded memory RIFF/LIST traversal passes sparse/padding/malformed/ABI tests and independent review; canonical gates pass. Ordinary QBob reaches active pyramid past the recorded audio trap.
  Done: Memory RIFF/WAVE nested chunk search/read/ascend, word padding, parent limits and malformed lengths pass meaningful regressions; ordinary QBob route advances past the recorded audio trap.
  Evidence: ops/handoffs/mmio-memory-riff-20261003.md; scratch/runs/20261003-qbob-gameplay-mmio-riff/result.json; scratch/mmio-memory-riff-20261003/validation.json

- [x] Preserve first-hit debugger stops when retargeting breakpoints
  id: DEBUG-BREAKPOINT-RETARGET
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete. Changed-address/clear latch semantics fixed; real cold/warm-chain/marker tests pass on canonical2c22cb7d, old source fails first-hit assertion, all canonical build gates pass.
  Done: Changed breakpoint stops on its first hit; unchanged breakpoint resumes once; clear/rearm has no stale skip. Private negative control detects old bug; canonical gates pass.
  Evidence: ops/handoffs/debug-breakpoint-retarget-20261003.md; scratch/debug-breakpoint-retarget-20261003/validation.json

- [x] Diagnose ordinary input delivery to Win16 modal MessageBox
  id: WIN16-MODAL-QUEUE
  status: done
  candidate: wep16_klotski
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete separate Klotski gameplay route beyond puzzle selection/name prompt; input repair itself qualified by ordinary visible Welcome OK on canonical5ff4844e, full build and real two-instance tests.
  Done: Ordinary visible OK dismisses Welcome through the owning modal instance with preserved input ordering and meaningful regression; or exact alternative route defect is proved and separately tracked.
  Evidence: ops/handoffs/wep16-klotski-tetris-startup-20261003.md; scratch/wep16-modal-repair-20261003/validation.json; scratch/klotski-qualification-20261003/attempt1/commands.jsonl; scratch/klotski-qualification-20261003/attempt1/after-observation.png

- [x] Diagnose Win16 menu Escape hiding the host window
  id: WIN16-MENU-VISIBILITY
  status: done
  candidate: wep16_tetris
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete: focused real-instance tests, negative control, keyboard regressions and browser38746 verify menu Escape closes popup with active board retained. Separate menu-closed Escape intentionally minimizes. Taskbar restore observation tracked independently.
  Done: Ordinary Game-menu Escape dismisses menu without unintended host/shared visibility divergence; preserve unrelated state and verify active-game input.
  Evidence: scratch/runs/20261003-wep16_tetris-gameplay-menu-escape-repaired/result.json; scratch/menu-escape-repair-20261003/validation.json; ops/handoffs/wep16-dialog-geometry-20261003.md

- [x] Diagnose clipped Little Fighter 2 windowed gameplay
  id: DDRAW-WINDOWED-PRIMARY-SIZE
  status: done
  candidate: little-fighter-2-installer
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete: full arena personally reviewed on f76ee66e; actual primary1024x740/source794x550 and current mode recorded. Focused edge/scaling/retained-mode regressions and full build pass. Reduced roster and no FPS remain separate limitations.
  Done: Correct windowed primary size and complete LF2 gameplay viewport, with preserved explicit fullscreen mode/thread semantics and meaningful regression; retain reduced-roster limitation.
  Evidence: ops/handoffs/lf2-primary-sizing-20261003.md; ops/handoffs/lf2-primary-diagnostic-result-20261003.md; scratch/lf2-primary-sizing-20261003/root-review.json; scratch/lf2-repaired-qualification-20261003/attempt1

- [x] Investigate taskbar restore click after Tetris minimization
  id: TASKBAR-RESTORE-INPUT
  status: done (805a4b9f6 keyed task buttons; page proof scratch/runs/20261010T0240Z-wep16_tetris-taskbar-held-click; reviewed by orchestrator)
  candidate: wep16_tetris
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-10T02:18Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  Result (2026-10-10T02:50Z): CAUSE FOUND + FIXED, main 805a4b9f6 (+ a9596c00a probe step). renderer.updateTaskbar emptied #task-buttons and rebuilt every button on each repaint; a repaint during a held press detached the pressed button, so Chrome sent the click to the container and no SC_RESTORE was queued. Buttons now persist per hwnd. Page proof on boat (scratch/runs/20261010T0240Z-wep16_tetris-taskbar-held-click): old renderer, 1000 ms held press -> stays minimized 2/2; fix -> restores at 1000 ms and 150 ms (log shows msg=0x112 wParam=0xf120). Regression test/test-renderer-taskbar-buttons.js fails on the old renderer.
  Next: Reproduce non-restoration before proposing a repair. Current actual physical click restores with stable DOM target and observed SC_RESTORE; historical cause remains unknown. No longer blocks independent coverage.
  Done: Ordinary taskbar click restores the minimized game via owning guest command, with exact cause and meaningful regression, or documented input-target explanation.
  Evidence: ops/handoffs/taskbar-restore-input-20261003.md; scratch/runs/20261003-wep16_tetris-taskbar-restore-diagnostic/result.json

- [x] Implement bounded Unicode DirectPlay4 support
  id: DPLAY4W-UNICODE
  status: done
  candidate: aoe2
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T16:45:43.583Z
  Next: Completed bounded Unicode semantics and nine canonical regression suites; ordinary AoE2 clears previous DirectX rejection. Separate graphics initialization failure tracked under AOE2-GRAPHICS-INIT.
  Done: Exact IID530 has meaningful tested Unicode semantics with stable shared COM identity, preserved ANSI behavior, correct byte sizes/callback ownership, explicit unsupported scope and no silent ANSI alias; accepted full build and game startup requalification.
  Evidence: ops/handoffs/aoe2-directplay4w-private-draft-20261003.md; scratch/aoe2-directplay4w-private-20261003/canonical-build-receipt.json; scratch/aoe2-directplay4w-private-20261003/canonical-suites-receipt.json; scratch/aoe2-unicode-qualification-20261003/attempt1/root-review.json

- [x] Preserve process ownership for queued keyboard input
  id: INPUT-PROCESS-OWNERSHIP
  status: done
  candidate: tetrinet
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T16:57:01.457Z
  Next: Completed: regression and ordinary two-seat typing pass; network join remains separate under GAMEPLAY-tetrinet.
  Done: Foreign process cannot consume selected-owner key/char/up events with deferred HWND0 focus, same-process guest threads and legacy input remain correct, relevant regressions and ordinary two-seat browser qualification pass.
  Evidence: scratch/tetrinet-keyboard-owner-20261003/integration-receipt.json; test/test-keyboard-process-owner.js; scratch/gameplay-network-preparation-20261003/tetrinet/attempt3/root-review.json; scratch/runs/20261003-tetrinet-local-typing-diagnostic/result.json

- [x] Configure the main guest Worker with its preselected LAN address
  id: VLAN-MAIN-WORKER-IP
  status: done
  candidate: tetrinet
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T17:40:15.511Z
  Next: Completed: actual owning workers acknowledge distinct .1/.2 addresses; ordinary local join and host gameplay pass. Late room joins remain outside this repair.
  Done: Main Worker acknowledges selected LAN address before init completes; future guest threads inherit it, cooperative/default/failure regressions pass, actual two-seat network route requalified or separate blocker identified.
  Evidence: scratch/tetrinet-main-worker-ip-20261003/integration-receipt.json; test/test-browser-worker-vlan-address.js; scratch/runs/20261003-tetrinet-local-gameplay/result.json
- [x] Diagnose Age of Empires II graphics initialization failure
  id: AOE2-GRAPHICS-INIT
  status: done
  candidate: aoe2
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T18:00:26.667Z
  Next: Resolved 2026-10-06: the failure was missing Data\*.drs (bare manifest URLs mount at C:\<basename>, game opens data\*.drs); fixed in a87fced6. Main menu and gameplay reached headless.
  Done: Exact rejection established, meaningful regression and reviewed fix if appropriate, ordinary startup requalified. Gameplay and FPS remain separate requirements.
  Evidence: scratch/runs/20261006T034500Z-aoe2-dplay4w-cursor; commit a87fced6


- [x] Preserve nested LoadLibrary during Worker DLL initialization
  id: WORKER-NESTED-DLL-INIT
  status: done
  candidate: zuma-deluxe
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T18:09:52.406Z
  Next: Completed bounded repair: same owner resumes nested initializer, focused regressions pass, ordinary Zuma advances to loading. Remaining loading-screen diagnosis tracked separately; no gameplay/FPS claim.
  Done: Same owning instance finishes bounded nested initialization without deadlock/reentrant corruption, meaningful owner/failure/cleanup regressions pass, ordinary Zuma startup requalified.
  Evidence: scratch/zuma-startup-exit-20261003/repair/integration-receipt.json; scratch/runs/20261003-zuma-nested-loader-qualification/result.json

- [x] Show unreleased games and release readiness in EXE corpus
  id: OPS-RELEASE-READINESS
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T20:34:08.368Z
  Next: Complete: live EXE corpus filters show103 confirmed unreleased game entries,60 reviewed-gameplay entries and0 complete release approvals. Continue individual release gates; no games deployed.
  Done: Dashboard separates already-production/unreleased/unknown membership, exposes ready and remaining blockers with evidence, tests pass and serving behavior verified.
  Evidence: ops/release-readiness.json; scratch/production-desktop-review-20261003/ui-validation.json; scratch/production-desktop-review-20261003/live-validation.json; ops/handoffs/release-readiness-audit-20261003.md

- [x] Launch registered games directly from EXE corpus
  id: OPS-CORPUS-LAUNCH
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T21:14:43.753Z
  Next: Complete: prominent Launchable now filter shows127 exact available cards. Broken Sword sibling-manifest paths fixed. Public Puppeteer desktop/mobile/card-to-Solitaire runtime PASS;60ops tests PASS.
  Done: Installed corpus entries open real emulator app in new tab; missing/unregistered route explicit; authenticated gateway preserved.

- [x] Push all safe source changes to GitHub
  id: OPS-GITHUB-CHECKPOINT
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T21:14:43.754Z
  Next: Complete: checkpoint/migrated-source-dashboard-20261003 pushed via installed repository deploy key; remote4a3bc78e verified. Private artifacts/fixtures/logs excluded; inherited review gates retained.
  Done: Remote checkpoint commit contains reviewed explicit safe source manifest; push verified, unresolved runtime review gates preserved.
  Evidence: ops/handoffs/github-source-checkpoint-20261003.md; scratch/github-publication-audit-20261003/checkpoint.json

- [ ] Diagnose Monkey Island demo audio issues
  id: COMI-AUDIO-DIAG
  candidate: curse_monkey_island_demo
  status: review
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T22:38:28.752Z
  Next: Current-default f5b222ee/module1a343c5f ordinary ship-hold capture completed:12.0047s attributed audio,7–8 queued sources and no sampled clock rebase. Await user listening review of Telegram470; no sound-quality-fixed claim, new player-control qualification or FPS. No redundant app-option patch or repeat capture without concrete symptom.
  Done: Concrete audio issue diagnosed, meaningful regression/fix if supported, ordinary playback requalified with honest limits.
  Evidence: scratch/runs/20261005-comi-current-default-audio; ops/handoffs/comi-current-default-audio-20261005.md; ops/release-evidence/comi-current-default-audio-20261005; scratch/comi-audio-investigation-20261003/matched-main/comparison.json

- [ ] Restore missing files for existing EXE corpus routes
  id: CORPUS-MISSING-RESTORE
  status: blocked
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T22:48:41.992Z
  Next: Restored67of156 paths including all55Chapters files; live dashboard route available, no runtime qualification. Remaining89all Baldur interactive: pinnedISO source403/noarchivefilelisting and alternateMediaFire404. Need an accessible originalsource or matching localISO SHA1 3796defce51a3e867aa216bc27f0be0689fdadf0, then normal extraction. Exact paths/HTTP receipts: scratch/corpus-path-repair-20261005/. Maind2e458c7.
  Done: Existing registered fixture closures restored and launch availability checked; gameplay qualification remains separate.
  Evidence: ops/handoffs/corpus-restoration-20261004.md; scratch/local-owner-restore-final/report.json; scratch/local-owner-restore-final/missing-files.txt

- [ ] Investigate ScummVM fullscreen and missing sound
  id: SCUMMVM-AV-DIAG
  candidate: scummvm-fotaq
  status: review
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T22:59:25.111Z
  Next: GetCaps fix integrated main5b7c3912; ordinary Alt+Enter accepted with live advancing640x480 exclusive full-page intro, run20261005-scummvm-getcaps-fullscreen. Browser fullscreen consent unclicked; no new gameplay/FPS. Later-intro audio Telegram477 remains quality-unqualified pending listening; do not repeat clip or claim music fixed.
  Done: Explain intended behavior and demonstrate any supported fix with real browser evidence.
  Evidence: scratch/runs/20261005-scummvm-getcaps-fullscreen; ops/handoffs/scummvm-getcaps-ordinary-fullscreen-20261005.md; docs/re-notes/scummvm-fotaq.md; scratch/scummvm-av-20261003/

- [x] Show Git commits in dashboard activity with source filter
  id: OPS-ACTIVITY-COMMITS
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T23:16:31.625Z
  Next: Complete: live mixed activity and All/Commits/Messages filter,150 unique local-ref commits;28 tests and public Puppeteer desktop/mobile/search/pagination/refresh PASS.
  Done: Live activity shows recent unique commits with date/author/hash/link; filters and search work on desktop/mobile.


## Claude launch experience

- [x] Implement approved Windows-style launch dialog with 500 ms reveal delay
  id: CLAUDE-LAUNCH-UX
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  accepted: 2026-10-03T23:32:35.471Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-03T23:32:35.471Z
  created-by: user
  next: Complete: coordinator review corrections accepted;50browser checks and authenticated dashboard Solitaire route pass,28controller and6host cases pass. Pushed5a381fd2 to checkpoint/migrated-source-dashboard-20261003. No public game deployment. Existing fullscreen rotation issue remains separate.
  done: After user approves design, direct app URLs show no desktop flash or desktop startup work, fetch only selected-app assets plus required shared runtime, and show responsive loading feedback; desktop/multi-app mode uses the same loading dialog without disrupting other apps; the dialog appears only if the launch is still pending 500ms after launch initiation (one deadline, never shown or flashed for faster launches, stale timers cannot reopen it, closes on readiness with no minimum time). Validate cache, slow network, errors, cancellation, 500ms boundary/race cases, repeated launches, mobile portrait and landscape, and asset request scope.
  notes: User explicitly approved implementation via Telegram: "let's go with this UX looks good". User correction 2026-10-03 adds "only displays if load takes more than 0.5 s" (handoff section 3D, text-only, no resend). Known-size progress examples require every required file size known (coordinator review). Busy cursor alone is insufficient. Show honest download/preparation/startup states; no fabricated progress. Images must be labelled design mockups. Codex retains shared coordination; Claude owns this task.
  evidence: ops/handoffs/claude-launch-ux-design-20261003.md; scratch/claude-launch-ux/{ascii.txt,single-app.png,desktop.png} (labelled proposal mockups); Telegram receipt scratch/claude-launch-ux/telegram-delivery.json msgs 284-287 at 2026-10-03T23:36:35Z (revision 1, superseded by user correction "more like windows file downloading dialog"); revision 2 scratch/claude-launch-ux/revision-2/{ascii.txt,single-app.png,desktop.png} (labelled proposal mockups), receipt scratch/claude-launch-ux/revision-2/telegram-delivery.json msgs 291-294 at 2026-10-03T23:45:48Z; IMPLEMENTATION 2026-10-04: scratch/claude-launch-ux/implementation/evidence/ (pins.txt with source sha256s + served wasm f40d4ca3, diffs/ vs pre-task snapshot, browser-receipt.json, screens/*.png inspected, logs/ incl. BASELINE runs); node test/test-launch-progress.js exit 0 (23 cases); node test/test-web-direct-launch.js exit 0 (42/42, headless Chrome 151 on loopback); cache-version, test-manifest, host-import-sigs, js-copies gates OK; launch-related web/unit regressions pass except pre-existing test-web-page-fullscreen (baseline fails identically) and one flaky double-tap run; ops/handoffs/launch-ux-coordinator-review-20261004.md; scratch/claude-launch-ux/implementation/{review-final-pins.json,review-final-browser-receipt.json,private-route-review.json,publication.json}; MAIN RECEIPT verified 2026-10-04 by claude:1863d2b5: origin/main eb6d4d61 contains 2ba2673d (cherry-pick of 5a381fd2, merged at c9977df0); lib/launch-progress.js, lib/browser-shell.js and the three launch tests on main are byte-identical to the reviewed working-tree versions; ops/handoffs/claude-launch-ux-design-20261003.md identical on main

- [x] Match Telegram blockers command to dashboard
  id: OPS-TELEGRAM-BLOCKERS
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T23:38:00.490Z
  Next: Complete: /blockers registered live, shared web grouping and read-only snapshot;52tests plus browser/live formatter parity and getMyCommands verification PASS.
  Done: /blockers reads same dashboard task/approval snapshot; help/menu expose it and access controls remain intact.


## Standing game pipeline

- [~] Keep two new games moving toward playable gameplay with screenshots
  id: NEW-GAMES-PIPELINE
  status: active
  reclaimed: 2026-10-07T07:42:56.312Z
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  accepted: 2026-10-04T02:11:10.446Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Active lanes CMR3 (real FreeLibraryAndExitThread/shared DLL lifetime correctness; draft46673836f held) and Deus Ex Invisible War (original game executable plus816 entries verified; runtime initialization diagnostic on boat). Aranna EULA text fixed cedee9b54 but licence acceptance unprovided, so not an active new-game slot. BGE ordinary control qualified/corpus0a690ad31. Root sole worker, browsers/builds serialized; no public deployment.
  done: Recurring user priority, not complete after two games; each child task needs a working launch route, visible player-controlled gameplay, ordinary input response and a reviewed screenshot linked to its run and source.
  notes: Known freeware/shareware/demo titles first; public NFS/Diablo/StarCraft variants do not count as new games. Serialize browser and benchmark ownership; preserve review gates. Standing policy in ops/ORCHESTRATOR.md.

- [x] New-game lane: Zuma Deluxe
  id: NEW-GAME-ZUMA-20261004
  status: done
  candidate: reflexive-zuma-deluxe
  owner: /root/coverage_audit
  created: 2026-10-04T02:14:45.168Z
  accepted: 2026-10-04T02:14:45.168Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  next: Complete: root reviewed Level1-1 aim/fire projectile, green destruction +40 and score170 COMBOx2. Run 20261004-zuma-adventure-gameplay; source/input evidence preserved. FPS unmeasured; no public release approval. Refilled with Runenlegen.
  done: Working registered launch, ordinary player input visibly changes actual gameplay, coordinator-reviewed gameplay screenshot and exact run/source identity. Menu, intro, installer or black frame does not qualify. FPS and public release approval remain separate.
  evidence: scratch/new-games-pipeline-20261004/selection.json; scratch/new-games-pipeline-20261004/public-desktop.json; GAMEPLAY-reflexive-zuma-deluxe

- [x] New-game lane: Crimsonland
  id: NEW-GAME-CRIMSONLAND-20261004
  status: done
  candidate: reflexive-crimsonland
  owner: /root/corpus_categories
  created: 2026-10-04T02:14:45.168Z
  accepted: 2026-10-04T02:14:45.168Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  next: Root reviewed tutorial movement-before/after/down on private production candidatefa783563; ordinary arrows advance tutorial and scroll terrain. Narrow gameplay criterion met; pointer alignment, full combat, FPS and integration remain separate follow-up. Refilled Tile World.
  done: Working registered launch, ordinary player input visibly changes actual gameplay, coordinator-reviewed gameplay screenshot and exact run/source identity. Menu, intro, installer or black frame does not qualify. FPS and public release approval remain separate.
  evidence: scratch/new-games-pipeline-20261004/selection.json; scratch/new-games-pipeline-20261004/public-desktop.json; GAMEPLAY-reflexive-crimsonland

- [x] New-game lane: Runenlegen
  id: NEW-GAME-RUNENLEGEN-20261004
  status: done
  candidate: runenlegen
  owner: /root/restore_evidence
  created: 2026-10-04T02:35:20.505Z
  next: Complete narrow full-board Beginner gameplay and ordinary rune placement, root-reviewed14aadaac. Original3ad7ab07 integrated asce4f60b2 within main640b85a4; current origin/main ancestry verified2026-10-05. Owner reported full build/geometry checks pass. Lane refilled Jig. FPS remains separate; no public release claim.
  done: Working launch, actual player-controlled gameplay and coordinator-reviewed screenshot linked to exact run/source. Autoplay or cropped ambiguous board cannot qualify.
  evidence: scratch/new-games-pipeline-20261004/runenlegen-preparation/frame-qualification/root-review.json; scratch/new-games-pipeline-20261004/runenlegen-preparation/child-layout/frame-fix/publication.json; main ce4f60b21fae161919df7cbdbb341f1c003fa219; ops/handoffs/main-integration-20261005.md

- [x] New-game lane: Tile World
  id: NEW-GAME-TWORLD-20261004
  status: done
  candidate: tworld
  owner: /root/coverage_audit
  created: 2026-10-04T06:06:46.406Z
  next: Done: root-reviewed latest-main private gameplay and callback repair merged remote main9a996fc1 (f2367f0c+9a996fc1); FPS remains in separate gameplay performance task.
  done: Working launch, player-controlled gameplay, root-reviewed screenshot and exact run/source identity.
  evidence: scratch/runs/20261005-tworld-main6a-callback-gameplay; scratch/new-game-tworld-20261004/repair/main6a-validation/final-receipt.json; ops/handoffs/tworld-wave-callback-integration-20261005.md; remote main9a996fc1

- [x] Claude subagent: diagnose Heroes II slowness and improvement options
  id: CLAUDE-HEROES2-PERFORMANCE
  status: done (diagnosis delivered; fix is laptop-owned CLAUDE-HEROES2-TIMING-FIX)
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:40:00.181Z
  next: Diagnosis delivered; user approved fix tracked in CLAUDE-HEROES2-TIMING-FIX. Findings commit3ae042a7 pushed on sanitized Claude handoffs branch; main receipt pending.
  done: Evidence-backed bottleneck diagnosis, exact scene/source/module identity, ranked ideas and concrete validation plan; unknowns explicit. No unsupported speedup/FPS claim.
  subagent: claude-subagent of claude:1863d2b5 (launched 2026-10-04T10:45Z)
  evidence: scratch/claude-heroes2-performance-20261004/assignment.txt; docs/re-notes/heroes2-performance-20261004.md (pending); runtime ledger 516.7s/600; commit 3ae042a7

- [~] Claude coordinator: reconcile previous handoffs and drive ready work
  id: CLAUDE-HANDOFF-ORCHESTRATOR
  status: done
  note: 2026-10-06T17:35Z superseded: claude:80aa9e95 is the active orchestrator; claude:1863d2b5 no longer dispatches.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:46:53.669Z
  next: State 2026-10-06T02:07Z: watchdog not paused (control.json has no paused flag); Heroes II excluded (laptop-owned). Done since last update: TOYVM-DOS-CORPUS-DASHBOARD integrated (550d7d4a), MYTH-3DFX reviewed DONE (8cd80d5a, b7acece2, 9466f23d). New-game lane 1: NEW-GAME-BLOOD2-DEMO-20261006 in review (main 8d70691a+1cb3a7ea; evidence scratch/runs/20261006T015805Z-blood2-demo-app-route). Warned claude:202b4b39 that api id 4100 is taken (StringFromIID) before its GetProcessHeaps push. TOYVM-REGION-JIT-BRW: engagement run 300s still queued, not granted. TOYVM-SMC-SAME-BLOCK-FORWARD-PATCH diagnostic only; CLAUDE-TOYVM-LONGRUN-BG blocked. Pre-existing main failure reported: test-directinput-device-com.js:125 (Device7A QI). Runtime serialized via board claims; no public deploy, no approvals answered.
  done: Recurring coordination: current five-lane inventory, concrete next actions and evidence, reviewed worker results; preserve source/resource ownership and main integration boundary.
  evidence: scratch/claude-orchestrator-20261004/assignment.txt; ops/handoffs/claude-orchestrator-status.md; handoff commit bdfd3c71 (branch claude/handoffs-20261004-v2, awaiting ops-dashboard integration)

- [x] Toyvm region JIT: BRW checksum disagreement under continuous mode
  id: TOYVM-REGION-JIT-BRW
  status: done
  note: 2026-10-06T17:42Z claude:1863d2b5: the fix stack (Fix J/v4/SMC + IF-enable v2) landed via TOYVM-BRW-BENCH-MERGE as 0ce7fbc9+0501c1a1, reviewed DONE by claude:80aa9e95 at 10:39Z (30/30 correctness, perf neutral). Nothing left in progress here; close or reopen with a specific gap.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  next: State 2026-10-05T21:10Z: IF-enable candidate v2 ee8265ba (unpromoted). MERGED in main: readiness/helper tooling ff4c20f2; combined correctness run e6b09f57 + qualified diagnosis 2eb59bc6 (13/15 same, tree-fold/uop 60 s timeouts); tree-fold/uop replay a1bb5034 + duration wording 3a51afa3 -> all 15 default tests PASS in both trees, no REGRESSION/FIXED; engagement gate staging 64349121 (from eeae1755) + hardened run-fixture.js supervisor 658eb73a (from a4a82b84; root reran 6/6 wrapper tests, 10/10 parser checks). Base 2683a6e3 + pinned stack; 69c1371b separate. NEXT: engagement run (ops/handoffs/claude-toyvm-brw-20261005/if-enable/engage/ENGAGEMENT-READY.md: run-fixture.js --plan=cand,stack --total=300) source-reviewed and queued, NOT granted (Daggerfall 900 s queued next; may be inserted only with an explicit release/grant). Later gates: native V8+SpiderMonkey disassembly, fixed-work bench. Open: STI;MOV SS unconfirmed, IRQ at a boundary inside compiled code unshown, bundle regeneration, corpus A/B. No promotion.
  done: Root cause of BRW 500918117/2fa3dd95 vs L1 500918116/a066bf27 under --region-jit-continuous and the only-naive off-by-one, with a failing then passing test in test/test-toyvm-*.js; fix reviewed. Native V8+SpiderMonkey captures required before any new region optimization.
  evidence: main ff4c20f2 (IF readiness tooling), e6b09f57+2eb59bc6 (combined correctness result), a1bb5034+3a51afa3 (tree-fold/uop replay), 64349121+658eb73a (engagement gate staging + hardened supervisor, if-enable/engage/ENGAGEMENT-READY.md) under ops/handoffs/claude-toyvm-brw-20261005/if-enable/; branch claude/toyvm-brw-phase5-20261005 (latest a4a82b84): ops/handoffs/claude-toyvm-brw-20261005/wav-validate/SLICE-DIAG-RESULT-20261005.md; ops/handoffs/claude-toyvm-brw-20261005/recommendation-20261005.md; ops/handoffs/claude-toyvm-brw-20261005/wav-validate/{RESULT-20261005.md,BLIQ-DIVERGENCE-20261005.md,PLAN.md}; ops/handoffs/claude-toyvm-brw-20261005/v2-review/corpus-plan.md; scratch/claude-toyvm-brw-v2-review-20261005/full-stages-20261005.md; ops/handoffs/claude-migration-toyvm-uop-88bbcb9f.md; ops/handoffs/claude-orchestrator-status.md; original logs on bx_xegf6upd /home/user/sepc30.* (not on this box)

- [ ] Toyvm: a store into a later instruction of the SAME compiled block runs the stale byte
  id: TOYVM-SMC-SAME-BLOCK-FORWARD-PATCH
  status: blocked
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T14:35:00Z
  next: State 2026-10-05T18:40Z: reproduced on HEAD in every mode: a DS store into an instruction later in the SAME compiled block runs the old byte ($smc acts at the next block transfer). The same-block test stays FAILING. The accurate CPU contract is UNRESOLVED: primary SDM guarantees only store+jump / store+serialize (Vol. 3A 11.1.3), the 486 "could" run old prefetched bytes and the 386 is not described (14.6); window sizes unconfirmed. Alternatives A-D in ops/handoffs/claude-toyvm-brw-20261005/smc-contract/SMC-SAME-BLOCK-ALTERNATIVES.md (eda4a311). Root chose D as a DIAGNOSTIC INVESTIGATION ONLY: static decode-time same-block store census + runtime SMC-break overlap (smc-contract/diag-counter/DESIGN.md), source-only prep; a corpus sweep needs a later grant and is evidence, not a verdict (a zero count proves neither A == 386 prefetch nor arm parity). Blockers: the contract itself; arm parity of the stale window; performance + corpus A/B for any behaviour change.
  done: The same-block form passes on the interpreter and region arms, with a corpus A/B showing no regressions.
  evidence: ops/handoffs/claude-toyvm-brw-20261005/jmp-syn-j/repro2-20261005/summary.md; scratch/claude-toyvm-jmpsyn-j-20261005/smc-cpu-contract-20261005.md; ops/handoffs/claude-toyvm-brw-20261005/smc-contract/SMC-SAME-BLOCK-ALTERNATIVES.md

- [ ] Uop retry ladder ec2bf87c: correctness gate before any A/B
  id: UOP-RETRY-LADDER
  status: backlog
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  next: When a build slot is coordinated with root: isolated worktree at origin/worktree-agent-aaa481e5bbddec58a, run test/test-uop-compiler.js cases movsd-nfs-record-loop and nobump-mark (ladder mask 7) against base. A/B only on a quiet bench box with V8+SpiderMonkey disassembly. No merge (ops-dashboard integrates).
  done: Unit gate result on base vs ladder recorded; if clean, a planned A/B (uop / uop+ladder / icall / icall+ladder x h3, rodent, sc, c3, diablo) with native captures.
  evidence: ops/handoffs/claude-migration-wine-assembly-d0.md; memory project_uop_retry_ladder_wip.md

- [ ] Verify NFS II SE browser install shows the installed-game icon; re-derive IS3 copy-dialog repro
  id: NFS2SE-INSTALL-ICON-VERIFY
  status: blocked
  note: 2026-10-10T03:00Z claude:1863d2b5: not runnable as written on this box: the browser half imports a 592 MB retail ISO and runs a full install (box MemAvailable 0.8-1.4 GB, browser floor 1.2 GB), and the CLI half is a ~400k-batch long route (standing rule: no multi-minute heavy runs locally). Boat needs the retail ISO shipped (exec-only base64 chunks; ~9,500 chunks) -- asked the orchestrator how to run it.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  next: After the runtime window frees: one bounded local browser session, media-import test/binaries/candidates/need-for-speed-2-se-full/sources/NFS2SE.ISO (present, 592 MB), finish setup, screenshot the desktop icon/label; then a headless repro of the IS3 copy dialog vanishing near batch 360-420k (original stage2.sh lost with the Mac scratchpad). Retail CD: never deploy.
  done: Screenshot evidence of the icon and label from dd530167, and a saved repro command for the copy-dialog disappearance (or evidence it no longer happens).
  evidence: ops/handoffs/claude-migration-5e92d715.md; ops/handoffs/claude-orchestrator-status.md

- [x] Current pass/fail for test-sysmon-perfstats
  id: SYSMON-PERFSTATS-TRIAGE
  status: done (eaf4028b stale test coordinates; 16/16; reviewed by orchestrator)
  note: 2026-10-10T07:15Z eaf4028b (main, ls-remote verified, full build green): the failure was a stale test, not the emulator -- the Item list is a sorted listbox ('Allocated memory' = cUsedMemory is row 1; the clicked row 6 is 'Page faults') and the OK click at (336,137) missed the button. Clicks fixed; all 16 checks PASS and the chart shows Memory Manager: Allocated memory with a live reading (test/output/sysmon-perfstats/allocated-memory.png).
  note: 2026-10-10T07:00Z current result: FAILS on main ae06978e and identically on the pre-change thread-manager (A/B), at 'the guest heap is charted at all -- no cUsedMemory reads -- the item was never added'; the 10 checks before it pass (startup, PERF driver, window/menu, StatData opened, category selection/provider/item list). Log scratch/runs/../sysmon (scratchpad). Next: read-only root cause of why the Item list's add never queries cUsedMemory.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  next: After the runtime window frees: timeout 60 node test/test-sysmon-perfstats.js; if it still fails "the guest heap is charted at all", root-cause read-only and propose an owner. SOURCE TRIAGE 2026-10-05T11:58Z (no runtime): the assertion needs a `[reg] query ...StatData\VMM\cUsedMemory -> N` line. lib/storage.js:1339 prints exactly that for any query (live value via _perfStatsLive, storage.js:848, exports get_heap_ptr/get_heap_base exist in 13-exports.wat:684/695; a missing export would still print -> 0 and pass). So "charted at all" fails only when cUsedMemory is never QUERIED: the click sequence (1005:click:60:177 Memory Manager, 1100:click:200:220 sixth Item row, 1200:click:336:137 OK) is not selecting it, i.e. UI geometry or list-order drift, not the counter provider. Next (runtime, ~2-3 min, requested from root): run the test, look at its pick/chart PNGs and --trace-ctrl for the Add Item dialog, and fix the click coordinates or list order in the test only if the dialog is right.
  done: Current result with log; failure triaged to an owner or closed.
  evidence: ops/handoffs/claude-migration-5e92d715.md

- [x] User decision: should kept (OPFS) media record installer shortcuts?
  id: USER-DECISION-OPFS-SHORTCUTS
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  decision: User explicitly approved2026-10-04: installed-game desktop icons should survive reload when files are saved.
  next: Decision resolved; implement via OPFS-PERSIST-INSTALLED-SHORTCUTS with owned files, regression and remote-main receipt.
  evidence: ops/handoffs/claude-migration-5e92d715.md

- [ ] SimCity 2000 UI differences seen in the v86 comparison (not requested)
  id: SC2K-UI-DIFFS-OPTIONAL
  status: deferred
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  next: Not authorized work. Needs a user or coordinator yes before anyone fixes: city menu bar File/Help only, budget dialog placement/sunken fields, Video Warning missing a line.
  evidence: ops/handoffs/claude-migration-sc2k-compare-agent.md

- [!] Reconcile remote leftovers from Claude lanes
  id: RESOURCE-RECONCILE-REMOTE
  status: blocked
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  blocker: bx_xegf6upd ~/toyvm-ab (detached at deddbe2b, holds the only BRW sepc30/sep30 logs) and a possible fast-near-9tb-1 uop-ladder* dir are not in the ledger; host key was pinned only on the Mac
  waiting-on: root
  needs: Root says whether these hosts are reachable from here and who owns them; copy /home/user/sepc30.* and sep30.* into scratch/claude-orchestrator-20261004/ if reachable
  next: Re-checked 2026-10-05T12:01Z: ssh to bx_xegf6upd (caped-eyrir-iroko.on.ascii.dev) is refused (Permission denied (publickey)) from this box, and the boat CLI is signed out (401), so the remote leftovers still cannot be listed or removed from here; needs a key or `boat login` (user) or root on the Mac. Urgency dropped: BRW now reproduces locally (notes on claude/toyvm-brw-phase5-20261005), so the remote sepc30/sep30 logs are archival only.
  evidence: ops/handoffs/claude-migration-toyvm-uop-88bbcb9f.md; ops/handoffs/claude-migration-wine-assembly-d0.md

- [x] Claude review: dashboard UX and emulator/GitHub integration
  id: CLAUDE-OPS-DASHBOARD-UX-REVIEW
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:48:03.445Z
  accepted: 2026-10-04T10:50:43.055Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Done 2026-10-05T12:00Z: review handoff on origin/main as 112620b1 (ops/handoffs/claude-dashboard-ux-review-20261004.md); compact layout implemented and merged as c003b59f (ancestor of main).
  done: Evidence-backed UX review, screenshots/wireframes, concrete navigation/integration design and phased backlog. Proposals only until implementation scope is authorized.
  evidence: scratch/claude-dashboard-ux-review-20261004/assignment.txt; ops/handoffs/claude-dashboard-ux-review-20261004.md

- [x] Claude design: required, lazy and background game-file loading
  id: CLAUDE-PROGRESSIVE-GAME-LOADING-DESIGN
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:50:06.074Z
  accepted: 2026-10-04T10:50:43.055Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Done 2026-10-05T12:00Z: design on origin/main as 7068034d (ops/handoffs/claude-progressive-game-loading-design-20261004.md); the Diablo pilot evidence lives in the merged CLAUDE-DIABLO-LAZY-LOADING-PILOT commits.
  done: Reviewable architecture/schema, wait-state UX sketches, rollout/pilot and validation plan; no full-file preload requirement by default, no fake missing files or unexplained hangs. Design proposal only.
  evidence: scratch/claude-progressive-game-loading-20261004/assignment.txt; ops/handoffs/claude-progressive-game-loading-design-20261004.md; commit bd46d620

- [x] Hype: menu input and New Game progression reported stuck
  id: HYPE-MENU-GAMEPLAY-20261004
  status: done
  owner: /root/coverage_audit
  created: 2026-10-04T10:52:34.559Z
  next: Complete: ordinary Enter starts New Game, visible instructions request Space, knight moves forward/back and world remains stable. Root reviewed4 gameplay screenshots; run20261005-hype-wh-getmessage-gameplay, source6604fb90/module2638, integrated remote main376abd87. Fullbuild+16hook groups+legacy keyboard/CBT pass. FPS/audio remain separate.
  done: Verified user-facing New Game controls and working gameplay progression or exact diagnosed blocker with screenshots/input/build identity; fix if concrete and reviewable.
  evidence: docs/re-notes/hype.md; scratch/runs/20261005-hype-ordinary-control-interleaving; scratch/hype-route-prep-20261005/ui-pass-semantics.md; main d4dd56a4; historical zero-scale evidence retained.

- [x] Display subagent summaries on parent dashboard cards
  id: OPS-AGENT-SUBAGENT-SUMMARIES
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  next: Already integrated as7db978dd in main640b85a4 and live compact UI c003b59f; no implementation remaining.
  done: Claude/Codex parent lineage, child task/status/latest summary, child detail links on cards and parent details; no inferred progress from activity.
  evidence: scratch/ops-subagent-summaries-20261004/publication.json

- [~] Integrate completed task commits into main and verify receipts
  id: OPS-INTEGRATE-COMPLETED-TASKS
  status: ready
  owner: ops-dashboard
  created: 2026-10-04T10:58:44.360Z
  next: Subagent summaries already integrated (63a248a patch-equivalent7db978dd). User main-integration policy now published7e288793. Reconcile new scoped results as they finish; current source work includes typed Dredmor presentation metric and TetriNET metadata repair. Preserve ops-dashboard ownership and no public deploy.
  done: Each completed change has tested scoped commit and verified remote-main integration receipt. Pending changes remain review, not done.
  evidence: scratch/ops-subagent-summaries-20261004/publication.json; ops/ORCHESTRATOR.md; scratch/ops-subagent-summaries-20261004/integration-reconciliation-20261005.json

- [x] Diablo II Glide: frozen menu animation and looping audio
  id: DIABLO2-GLIDE-MENU-FREEZE-20261004
  status: done
  candidate: diablo2_glide_demo
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  prev-owner: /root/coverage_audit — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-04T11:24:08.494Z
  Next: Done (coop): browser recording shows the menu theme playing continuously (scratch/runs/20261006T1300Z-diablo2_glide_demo-w4-browser-audio); fixes 1b4d12a1 b766dfdf. Open: Threads-ON recording.
  done: Reproduce reported freeze, identify causal blocker and implement/review scoped fix where established, capture animation/input/audio validation and commit integrated into remote main.
  evidence: scratch/runs/20261006T1300Z-diablo2_glide_demo-w4-browser-audio (result.json, audio.opus, f02/f06); scratch/runs/20261006T1005Z-diablo2_glide_demo-w4-audio (CLI, menu-5fps.mp4); docs/re-notes/diablo2-demo.md
  blocked-by: none (13:11 d10ba697: the Threads 28 s ring-gap finding was a probe artifact). Open question for review: a Threads-ON browser recording of the menu audio was not taken; my clean arm used record-probe's default page.

- [x] Preserve installed-game shortcuts for saved media across reload
  id: OPFS-PERSIST-INSTALLED-SHORTCUTS
  status: done (2026-10-10, claude:1863d2b5; reviewed by orchestrator)
  note: 2026-10-10T01:40Z already integrated: main carries it as 728c6495 (same change as branch commit c9b563b2; a cherry-pick onto main conflicts only as add/add with identical content). Retested on main dcbc6080: test-installed-shortcuts 12/12 PASS, test-web-installed-shortcuts 8/8 PASS (headless Chrome). Branch claude/opfs-installed-shortcuts is superseded, nothing left to merge.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T11:30:34.781Z
  accepted: 2026-10-04T11:51:42.826Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Implemented and tested; commit c9b563b2 on local branch claude/opfs-installed-shortcuts (parent origin/main eb6d4d61; no push credentials) awaits ops-dashboard review + main integration, then verify the main receipt and mark done. Not yet verified with a real installer end-to-end (NFS2SE-INSTALL-ICON-VERIFY covers that).
  done: Installed-game icons survive reload with saved files, launch correctly, do not duplicate or falsely imply deleted media exists; verified remote-main commit.
  evidence: USER-DECISION-OPFS-SHORTCUTS; commit c9b563b2 (lib/installed-shortcuts.js new, lib/media-library.js setShortcuts, lib/media-import-ui.js restore/persist/remove, lib/browser-shell.js publishGuestShortcuts+attachDynamicOverlay, index.html script list); node test/test-installed-shortcuts.js exit 0 (12 cases); node test/test-web-installed-shortcuts.js exit 0 twice (7 checks: saved on row, kept badge, unsaved not kept, reload restores exactly one kept icon, missing target pruned, restored entry launches installed exe from kept media, media removal removes icon now and after reload); check-browser-cache-versions + check-test-manifest OK; test-web-media-import fails identically on clean origin/main at its headless CD-audio clock assertion (pre-existing)

- [x] Implement progressive loading with Diablo pilot
  id: CLAUDE-DIABLO-LAZY-LOADING-PILOT
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T11:33:02.069Z
  accepted: 2026-10-04T11:33:53.932Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Done 2026-10-05T12:00Z: all 6 claude/diablo-lazy-s0 commits are on origin/main as f46c76ed, 23c39d82, 27bbba3b, d04aed13, e22fbfd3, aeb9c2a7 (verified by subject match).
  done: Actual Diablo launch/gameplay with safe on-demand reads, honest wait/progress/retry/cancel and cold/warm/failure validation; scoped reviewed/tested commits verified on remote main.
  evidence: Remote branch claude/diablo-lazy-s0 verified b4aaab7ce663a0073d93266a9443ddf90bad6aac (root pushed); scratch/claude-progressive-game-loading-20261004/diablo-pilot-approval.txt; ops/handoffs/claude-progressive-game-loading-design-20261004.md; runs scratch/claude-progressive-game-loading-20261004/runs/ (s1-eager, s2-lazy-nopreload broken menu, s4-cold/warm/fail8/delay1500/threads receipts); trace: 2302 reads of spawn.mpq on menu->Tristram, 77 dialog-time reads (0.61 MB) cannot park; preload 8 ranges 4.6 MB; cold browser fetched 16.5 of 50.3 MB by gameplay; no speed claim

- [~] Remove excluded marketing material from GitHub and historical copies
  id: OPS-REMOVE-MARKETING-20261004
  status: review
  owner: ops-dashboard
  next: Integrate ops/remove-marketing-20261004 removal commit and sanitized Claude handoff; audit historical Git refs and restored archives for dedicated marketing content. Coordinate any history rewrite with integration owner; do not erase shared technical transcripts blindly.
  done: Excluded marketing files/proposals absent from live checkout and GitHub with explicit historical-copy disposition; marketing stays deferred.
  evidence: scratch/marketing-removal-20261004/publication.json

- [~] Implement Heroes II short-clock-wait timing fix
  id: CLAUDE-HEROES2-TIMING-FIX
  status: deferred
  owner: claude:5e92d715-laptop
  created: 2026-10-04T16:28:37.592Z
  accepted: 2026-10-04T17:38:02.623Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Box work stopped by user ownership directive. Laptop owns timing/music and pushed97718c18+6a92c113. Preserve its work; no box retry or user-answer gate. Prior39d4bb09 revert was integrator deferral pending idle anomaly, not an unexplained user revert.
  done: Measured walking improvement with preserved idle/input/timing correctness, focused regressions and DiabloII check; scoped commit reviewed and verified on remote main.
  evidence: docs/re-notes/heroes2-performance-20261004.md; scratch/claude-heroes2-timing-fix-20261004/assignment.txt; matrix scratch/claude-heroes2-timing-fix-20261004/matrix-heroes-table.txt + runs/2026-10-04T19-*; 1426 s runtime, released 19:30:18Z

- [~] Claude: independent review of the Heroes II fix, idle-check design and detector latch expiry
  id: CLAUDE-HEROES2-LATCH-REVIEW
  status: deferred
  owner: claude:5e92d715-laptop
  created: 2026-10-05T04:41:30.725Z
  accepted: 2026-10-05T04:41:30.725Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  dependencies: CLAUDE-HEROES2-TIMING-FIX
  next: Box work stopped by user ownership directive. Laptop owns timing/music and pushed97718c18+6a92c113. Preserve its work; no box retry or user-answer gate. Prior39d4bb09 revert was integrator deferral pending idle anomaly, not an unexplained user revert.
  done: ops/handoffs/claude-heroes2-latch-review-20261005.md reviewed by coordinator.
  evidence: ops/handoffs/claude-heroes2-latch-review-20261005.md delivered

- [x] Claude: performance ideas for Diablo II, Heroes III and Warcraft III demos + latest ToyVM review
  id: CLAUDE-THREE-GAME-PERFORMANCE-REVIEW
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T19:05:30.470Z
  accepted: 2026-10-04T19:05:30.470Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Done: handoff on remote main (identical to origin/main aba6a08d, verified 2026-10-05). Its experiments are separate future tasks.
  done: Reviewable handoff ops/handoffs/claude-three-game-performance-review-20261004.md with ranked, evidence-labelled ideas and concrete next experiments; committed for ops-dashboard integration.
  evidence: ops/handoffs/claude-three-game-performance-review-20261004.md commit 174ec244

- [x] Claude: ToyVM longer runs and background-Worker JIT
  id: CLAUDE-TOYVM-LONGRUN-BG
  status: done (2026-10-10, claude:1863d2b5; reviewed by orchestrator)
  note: 2026-10-10T01:45Z confirmed: handoff ops/handoffs/claude-toyvm-longrun-bg-20261005.md is on main with the measured BRW smoke (section 3), break-even analysis (4.1: needs marginal ratio m<1; BRW m>=1, DREAM decides it) and the worker-JIT experiment plan; region-JIT commits b0f38372 + deddbe2b are on main. Raw scratch runs dir was pruned in a disk cleanup; numbers live in the handoff. No performance claim made.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T00:46:55.161Z
  accepted: 2026-10-05T00:46:55.161Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Delivered by subagent of claude:1863d2b5 (81 s local BRW smoke, released). BRW: jit-sep ~1% slower than L1 after its install, so no run length breaks even there (BRW ends itself at 657.2M; region covers 4.3%); continuous arms worsen with length; jit-sepw moves pick/gate/build to the Worker, saving at most ~0.3 s per install while making install timing wall-clock dependent and adding CPU; Node v20 does not report worker CPU back, so arm-bench's build/run split is wrong for worker arms. Proposed next: equivalent-L1-work experiment on a quiet bench box (DREAM/DRAGON/ADDY_II/CONTAGIO + BRW parity; arms l1 x2, jit-sep, jit-sepw; 30/120 s ~37 min first, 300 s +84 min) — needs a budget grant. Handoff now in commit 68dedca3 on pushed branch claude/docs-20261005 (base origin/main aba6a08d); main push to be serialized with root. WORKER 2026-10-05T10:35Z: longrun-worker subagent of claude:1863d2b5 builds a pinned (HEAD) harness in scratch/claude-toyvm-longrun-bg-20261005/bench-*/ and runs the ~37 min experiment on a temporary boat worker box if provisioning works (deleted after); runtime host recorded per result. Main box: no runtime. HARNESS READY 2026-10-05T10:50Z: scratch/claude-toyvm-longrun-bg-20261005/bench-20261005/ (panel/probe/run-bench/analyze/stage.sh/box-run.sh), pinned to 2683a6e3 via git archive (committed dos-loop.js, not the IRQ fix), hashes in pins/. Not run. BLOCKED: no worker box (boat CLI 401 signed out; ASCII_TOKEN login also 401; bench box bx_xegf6upd ssh publickey denied). Needs user `boat login` (or bench-box key), then ~37 min box time: stage.sh HEAD -> box-run.sh (smoke flags in README of the dir).
  done: Reviewed long-run/background-JIT analysis with measured smoke and an approved experiment plan; no performance claim without equivalent-work runs.
  evidence: ops/handoffs/claude-toyvm-longrun-bg-20261005.md; scratch/claude-toyvm-longrun-bg-20261005/runs/

- [x] Independent Claude and Codex performance review for three demo priorities
  id: PERF-THREE-GAMES-TOYVM-20261004
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete independent review publication: Claude report already main2c94e0f1; missing Codex report and dated reconciliation now main142d9252, remote verified7e288793. Both exact historical reports preserved. No new benchmark or performance promotion; ongoing private correctness work tracked separately.
  Done: reviewable findings name exact result/build/engine identities, transferable evidence, correctness risks, missing measurements and bounded experiments; scoped findings commit handed to ops-dashboard for main integration.
  Evidence: ops/handoffs/codex-three-game-performance-review-20261004.md; ops/handoffs/claude-three-game-performance-review-20261004.md; ops/handoffs/three-game-performance-reconciliation-20261005.md; scratch/perf-three-games-reconcile-20261005/audit.json; main142d9252

- [ ] Investigate ToyVM longer runs and background compilation
  id: TOYVM-LONGRUN-BG-20261005
  status: review
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  Next: Source audit now main5a7648c4; existing Worker overlap confirmed, final separate-module compilation/install foreground and lifecycle/accounting gaps identified. Larger matched-work duration sweep has NOT run: isolated worker provisioning blocked by boat401/bench SSH publickey denial (CLAUDE-TOYVM-LONGRUN-BG). BRW diagnostic P5/P6 are complete, not a live grant: recommendation records P5 parity and P6 no stable differences; original P4 failure remains. IF candidate broader correctness queued separately after Arena/Ski, no promotion.
  Done: exact tested arms, duration/CPU/wall and correctness receipts; explain break-even evidence and a concrete next change or negative result. Preserve L1 and BRW correctness blocker.
  Evidence: ops/handoffs/claude-toyvm-longrun-bg-20261005.md; ops/handoffs/toyvm-background-worker-audit-20261005.md main5a7648c4; ops/handoffs/claude-toyvm-brw-20261005/recommendation-20261005.md; CLAUDE-TOYVM-LONGRUN-BG exact external-resource blocker.

- [x] Implement user-requested dashboard gaps with Claude
  id: CLAUDE-DASHBOARD-GAPS-20261005
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  Next: Done: merged to main and live (c003b59f).
  Done: actual missing features implemented with honest unknowns, meaningful tests and browser review; scoped commits integrated by ops-dashboard with verified remote-main receipt.
  Evidence: ops/handoffs/claude-dashboard-gaps-20261005.md (assigned); messageboard pickup pending.; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: single full-width agent column, two lines per agent/subagent, honest stale/idle
  id: DASH-GAPS-AGENTS-2LINE
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit a3eba543 (on cherry-pick 255aeab6 of 63a248a6); MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: Ready-for-desktop view for unreleased games (reviewed shot, FPS or unknown, sound/input evidence, exact blockers)
  id: DASH-GAPS-READY-DESKTOP
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit c78d985f; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: Play into exact corpus game/build with build identity and truthful unavailable reasons
  id: DASH-GAPS-PLAY-BUILD
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit 2996f415; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: blockers split user-input vs agent-resolvable with Telegram /blockers parity
  id: DASH-GAPS-BLOCKERS-SPLIT
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit 5585d09c; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: tested/committed/pushed/merged/deployed status with GitHub/evidence links
  id: DASH-GAPS-CODE-STATE
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit 246e9b83; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: before/after performance only when scene and build identity match
  id: DASH-GAPS-PERF-COMPARE
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit 4816ec7b; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Add both Dungeons of Dredmor variants to local EXE corpus
  id: CORPUS-DREDMOR-20261005
  status: done
  owner: ops-dashboard
  Next: Registrations a3d88870/a1c72638 verified in main; missing acquisition handoffs now published/reconciled maina33a8d61. Release lazy loading/retry and ordinary dungeon controls validated separately; beta gameplay remains unqualified. No public deployment.
  Done: Verified fixtures, source/hash provenance and scoped registration integrated to remote main; no untested gameplay claim.
  Evidence: ops/handoffs/dungeons-of-dredmor-both-variants-20261005.md maina33a8d61; CORPUS-DREDMOR-RELEASE-20261005 acquisition folded into this two-variant record.

- [x] Batch straightforward screenshot tasks with one worker
  id: SCREENSHOT-BATCH-EASY-20261005
  status: done
  owner: ops-dashboard
  Next: Script/receipts integrated as f9503127, present on remote main d12143bd.44-record live queue consolidated; FPS obligations remain in performance aggregate.
  Done: Reviewed evidence and reusable script integrated to remote main; original task IDs and remaining performance criteria preserved.
  Evidence: ops/handoffs/screenshot-batch-easy-20261005.md; ops/screenshot-reviews-20261005.json; commit fbdf0e57. Review hash and serial mock-harness tests passed; real browser capture mode not yet qualified.

- [ ] Measure gameplay performance for 44 scene-reviewed games
  id: GAMEPLAY-PERFORMANCE-BATCH-20261005
  status: done (20 of 32 samples qualified, w6 review addressed, re-measured in play; follow-ups marbles/rodent2000/fallout/moorhuhn_3/moorhuhn_tennis/pawn stay listed on the row; accepted by orchestrator; follow-ups 2026-10-10 23:25Z: marbles ~20, rodent2000 ~1, moorhuhn_3 26-36, fallout_demo 29-37 GAME/s headful on bx_kqx28rrm, scene-checked (scratch/runs/20261010T2300Z-perf-followups-boat-d10ba697); HUD counter-clear bug fixed b3e21aa8b; still open: moorhuhn_tennis (Flash step unproven), pawn (needs GPU))
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T13:28Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  Next: SkiFree shared-HUD backing proven with actual native/host producer and strict live preflight; attempt5 accepted72/5.00329sec=14.390531 presentations/s, but personally reviewed sample was stopped/crash-recovery at925m/0m/s, not continuous downhill FPS. Publish exact scene-qualified raw result; prepare normal-input downhill sample with movement review. Hype guarded exclusive-layer sample ready, Jig DirectDraw obligation remains; preserve all44 criteria.
  Done: Every archived ID retains its original screenshot and scene-qualified measurement criteria, raw samples, counter proof and build identity. Consolidation completes none of these FPS obligations; semantic limitations must be explicit.
  Evidence: ops/screenshot-batch-consolidation-20261005.json contains all 44 original unchecked task blocks, IDs and evidence. Active investigations and blockers remain separate.

- [x] Load corpus manifest assets on demand, verify Dredmor startup
  id: CORPUS-MANIFEST-LAZY-DREDMOR
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete: real lazy ranges, natural Loading, failed read/error feedback, ordinary Retry150ms and exact same-range206 recovery to menu verified. Gameplay/FPS remain separate; Quit button not clicked.
  Done: Generic manifest path avoids eagerly fetching all assets; required startup files are available, on-demand waits show existing UX, errors/retries are honest, Dredmor real launch recorded and scoped tests/commit on main. Gameplay remains separate.
  Evidence: ops/handoffs/dredmor-wide-path-apis-20261005.md; docs/manifest-loading.md; scratch/runs/20261005-dredmor-lazy-retry-recovery; source45e3f361/module40cc; root reviewed all screenshots and target3x503→2066563bytes.

- [x] Reach player-controlled Dredmor release dungeon through ordinary setup
  id: GAMEPLAY-dungeons-of-dredmor-release
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete narrow gameplay/control: pristine14222 Level1 before/down/up ordinary150ms heldkeys show south movement and north reversal. Published20261005-dredmor-release-controlled-gameplay; root reviewed. FPS/audio/long-route/publicrelease remain unqualified and separate.
  Done: Actual player-controlled dungeon scene with ordinary input and reviewed gameplay screenshot, exact loaded identities; menus/setup never qualify. FPS separate unsupported until proven counter.
  Evidence: scratch/runs/20261005-dredmor-release-controlled-gameplay/result.json; before-movement.png/after-down.png/after-up.png; exact45e3/40cc and97servedpins; release-review-proposal.json retains remaining gates.

- [ ] New-game lane: Black & White 2 demo ordinary controlled gameplay
  id: NEW-GAME-BW2-20261005
  status: deferred
  candidate: black_white_2_demo
  owner: /root/coverage_audit
  created: 2026-10-05T15:03:56.451Z
  accepted: 2026-10-05T15:03:56.451Z
  accepted-by: /root/coverage_audit
  Next: Selection invalidated: docs/re-notes/black-white-2.md:7583 already records controlled tutorial gameplay. Do not count as a new-game lane or rerun for pipeline credit.
  Done: Personally and independently reviewed player-controlled gameplay screenshots with original ordinary inputs, exact source/run/fixture identity and cleanup; otherwise actionable source-backed blocker. No menu/flyover-as-gameplay or FPS inference.
  Evidence: scratch/hype-refill-reserve-20261005/selection.json; scratch/hype-refill-reserve-20261005/public-desktop.json; docs/re-notes/black-white-2.md

- [x] New-game lane: Morrowind ordinary player-controlled gameplay
  id: NEW-GAME-MORROWIND-20261005
  status: done
  candidate: morrowind
  owner: /root/coverage_audit
  created: 2026-10-05T15:06:33.828Z
  accepted: 2026-10-05T15:06:33.828Z
  accepted-by: /root/coverage_audit
  Next: Narrow prison first-person W/S movement accepted by root; immutable run20261005-morrowind-prison-movement,328hashes verified; docs main80c6be42. Typing fidelity, further progression and FPS remain separate; no fullgame claim.
  Done: Reviewed actual player-controlled gameplay beyond character-generation-only evidence, original inputs, exact source/run/fixture identity and clean shutdown; otherwise actionable source-backed blocker. FPS separate.
  Evidence: scratch/hype-refill-reserve-20261005/morrowind-selection.json; scratch/hype-refill-reserve-20261005/public-desktop.json; docs/re-notes/morrowind.md

- [x] Real subprocess inherited standard handles and anonymous pipes
  id: PROCESS-PIPE-STDIO-WINBOARD
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da
  Next: Done (CLI): WinBoard 1.e4 vs real GNUChess 1...c5, coop + --threads; commits 1b54be50 46cf2193 f1902bbc d9174bf9 4eaa29e3 372b36e0; test-winboard-gnuchess-pipes.js. Follow-ups: browser process_spawn, phase 3 process object, --threads e2 repaint artifact.
  Done: Actual parent/child ordered I/O, duplicate/close/EOF/error semantics and ordinary GNUChess reply pass without protocol simulation.
  Evidence: scratch/new-games-pipeline-20261005/winboard/startup-finding.md; scratch/runs/20261005-winboard-engine-startup/result.json


- [x] New-game lane: original Daggerfall ordinary player-controlled dungeon
  id: NEW-GAME-DAGGERFALL-20261005
  status: done
  reclaimed: 2026-10-07T07:42:56.312Z
  candidate: gog-free-elder-scrolls-daggerfall
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: /root/coverage_audit
  prev-owner: /root/coverage_audit — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-05T18:27:59.455Z
  accepted: 2026-10-05T18:27:59.455Z
  accepted-by: /root/coverage_audit
  Next: Qualified narrow ordinary dungeon movement on October7; documentation integrated remote main 724637d9, save repair fe7cfb95. Root reviewed forward/reverse/idle wall geometry in scratch/runs/20261007-daggerfall-dungeon-controls/result.json (708 artifact hashes). Runtime source3b8189/module8eb; optional bundle403 and driver exit1 preserved, clean process closure. No FPS, audio or sustained-play claim; worker refills lane.
  Done: Reviewed actual first-person dungeon and finite ordinary movement response, exact source/fixture/input receipts and cleanup; character-review screens do not count.
  Evidence: scratch/new-games-pipeline-20261005/daggerfall-reserve/activation.json; docs/re-notes/daggerfall-gog.md; tools/run-daggerfall-gameplay.js


- [x] Correct ToyVM install accounting when a prepared region is declined
  id: TOYVM-INSTALL-DECLINE-ACCOUNTING
  status: done
  owner: /root/coverage_audit
  created: 2026-10-05T20:07:32.599Z
  Next: Complete: exactfalse fix main69c1371b plus regenerated browser bundles main44313238 pushed. Permanent actual-module regression and1639-file tier gate pass; bundle freshness passes; isolated browser-shaped VM smoke ran real program and printed HI (449ms exit0/groupclear). Successful undefined return and continuous rewindow preserved. No public deployment.
  Done: Real regression fails before and passes after a minimal fix, correct successful install accounting retained; scoped reviewed commit integrated into main after applicable checks. No optimization or benchmark claim.
  Evidence: test/test-toyvm-install-decline.js; scratch/toyvm-phantom-install-20261005/permanent-validation.json; browser-bundle-smoke.json/log in same directory; source69c1371b/generated44313238 on remote main.

- [x] New-game lane: Myth: The Fallen Lords (demo first, then retail ISO)
  id: NEW-GAME-MYTH-20261005
  status: done
  candidate: myth-the-fallen-lords
  owner: claude:d10ba697
  created: 2026-10-05T21:45:51.269Z
  Next: Done: retail ISO gameplay (c1d22ecf), browser route (f4855415), network modules (ba4a740d), in-level audio (df6de866), Progman DDE (e7c970ef), BYO-ISO e2e (9db9370a), 3dfx default (MYTH-3DFX-20261006). FPS ~30 PRESENT/s headless only.
  Done: Working launch route, personally reviewed real battle gameplay with ordinary unit-command response, screenshot/run/source identities and scoped changes on main. FPS and public deployment separate.
  Evidence: scratch/new-game-myth-20261005; test/candidate-corpus/manifest.json myth-the-fallen-lords.

- [x] New-game lane: original Tomb Raider III Windows Jungle demo
  id: NEW-GAME-TOMB-RAIDER3-20261005
  status: done
  candidate: tomb-raider-3-demo
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (reassigned 2026-10-05T21:45Z by claude:80aa9e95; prior /root/corpus_categories gone)
  created: 2026-10-05T21:17:17.001Z
  Next: Done 2026-10-05T22:40Z: idle vs VK_UP Jungle frames reviewed by claude:80aa9e95 (Lara stands vs runs down the path); c0081348+1a90c1c3 fast-forwarded to origin/main. Open follow-ups: MS-ADPCM audio, passport texture, loading-picture fade, browser, FPS.
  Done: Working original-game launch, personally reviewed real Jungle gameplay with ordinary player movement response, screenshot/run/source identities and scoped changes on main. FPS and public deployment separate.
  Evidence: scratch/runs/20261005T222900Z-tomb-raider-3-demo-claude202b4b39-jungle-c0081348; docs/re-notes/tomb-raider-3-demo.md; main 1a90c1c3.

- [x] Myth: switchable 3dfx (Glide) renderer, default for myth_tfl
  id: MYTH-3DFX-20261006
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-06T00:54:28.676Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 8cd80d5a + b7acece2 + 9466f23d on main; orchestrator reviewed browser Threads-ON 3dfx frame (scratch/runs/20261006T010423Z-myth-3dfx-web-threads-fixed/w143.png); 3dfx default + Software switch verified in browser; BYO test PASS on 3dfx. Not tested: renderer choice across reload, real GPU/WebKit.
  Done: Myth in-level on 3dfx in the browser (WebGL), 3dfx default and Preferences>Graphics>Rendering: Software switch documented in re-notes; reviewed screenshot; commit on main.
  Evidence: main 8cd80d5a; scratch/runs/20261006T003007Z-myth-3dfx-inlevel-final; scratch/runs/20261006T003437Z-myth-3dfx-switch-software2; docs/re-notes/myth-tfl.md

- [x] New-game lane: Tomb Raider II Venice demo
  id: NEW-GAME-TOMB-RAIDER2-DEMO
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T00:54:28.676Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle vs run frames reviewed by orchestrator; fd170ee0+999bb9c5 on main. Open: audio, FPS, browser.
  Done: Working launch, reviewed player-controlled gameplay, commit on main.
  Evidence: scratch/runs/20261005T224500Z-tomb-raider-2-demo-claude202b4b39-venice-fcf8f2f1; docs/re-notes/tomb-raider-2-demo.md

- [x] New-game lane: Unreal Tournament 348 demo
  id: NEW-GAME-UT348-DEMO
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T00:54:28.676Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: DM-Morpheus walk + mouse-look reviewed; f729c34d on main. Open: blank wizard button labels, relative mouse ~46% scale, FPS, browser.
  Done: Working launch, reviewed player-controlled gameplay, commit on main.
  Evidence: scratch/runs/20261006T001500Z-ut348-demo-claude202b4b39-dm-morpheus; docs/re-notes/unreal-family-demos.md

- [x] New-game lane: Command & Conquer Red Alert 95 demo
  id: NEW-GAME-RED-ALERT-95-DEMO
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T00:54:28.676Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: Allied mission 1 idle vs order arms reviewed by orchestrator (Ranger drives to click); 457b98a3/7b2d34f2/8718fa0b on main. Open: audio, FPS, browser.
  Done: Working launch, reviewed player-controlled gameplay (units respond to orders), screenshot + run/source identity, commit on main.
  Evidence: scratch/runs/20261006T005200Z-red-alert-95-demo-claude202b4b39-mission1; docs/re-notes/red-alert-95-demo.md; main 8718fa0b.

- [x] NFS III demo on Direct3D draws a thin black horizontal line across the race view
  id: NFS3-D3D-HORIZON-LINE-20261006
  status: done
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T00:58:16.457Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: ce4256db (software top-left rule) + e273d87c (WebGL -1/16 px bias), browser-verified clean (scratch/runs/20261006-nfs3-d3d-horizon-line/after-webgl.png reviewed by orchestrator). nfs3_demo may go back to D3D if desired.
  Done: D3D race view has no line (reviewed screenshot vs Glide), regression test, commit on main; nfs3_demo may then go back to D3D.
  Evidence: scratch/nfs3-d3d-line/nfs3d3d-race.png (line), scratch/nfs3-d3d-line/g4.png (Glide clean)

- [ ] GL/Direct3D corpus: every 3D app works on software and WebGL
  id: GLD3D-CORPUS-27-20261006
  status: active
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  prev-owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (fleet stopped)
  created: 2026-10-06T02:09:48.337Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Current-main appendix a34947703 folds in w4 1930Z: AVP marine/alien and Colin WebGL gameplay verified; CMR2 GPU glyph blocks, TDR CLI loader stall, BG2 current DirectDraw route (GL unverified). w4 still owns Driver Glide and Descent3 in-flight followups and requests boat. Sweep w6 14/14 bounded runs no longer crash, but Kodak missing fixture OIDIS400/OIADM400 and UT2004 blank/loading remain functional gaps, not gameplay qualification. BW2 dialogue/ordinary camera stays Claude202b4b39 (live run ends about20:37). Root lanes IW setup render fixed61a, keyboard control investigation; CMR3 staging and module-row concurrency before real unload-and-exit. Preserve Pirates/MilkDrop/falling-leaves/backend FPS/audio gaps; Morrowind paused, HeroesII laptop-owned.
  Done: Status table for the full GL/D3D set in docs (software + WebGL per app, with run ids), and each fixed app has a reviewed in-game screenshot and commit on main.
  Evidence: memory project_gl_d3d_corpus_goal (27-app set, 2026-09-22); tools/gfx-app-census.js; tools/gl-name-census.js

- [x] VFS serves an unrelated same-named file when a path's drive/dir is missing
  id: VFS-WRONG-FILE-FALLBACK-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T06:08:40.537Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: a499c27f exact VFS lookups (PATH vs FILE not found); census of 242 apps first, only abedemo/darkstone/ricochet hit a fallback and stay identical; AoE campaign mounted explicitly.
  Done: Exact path semantics with a regression test; no registered app regresses (census before/after); trace-fs shows the miss.
  Evidence: board 2026-10-06T06:07 claude:202b4b39; scratch/runs/20261006T061500Z-colin-mcrae-rally-demo-gameplay/before-cdpath-wrong-strings.png

- [x] VFS unit tests failing on clean main: test-vfs-legacy-hfile, test-vfs-overlay-installer, test-vfs-seed
  id: VFS-PREEXISTING-TEST-FAILURES-20261006
  status: done
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  created: 2026-10-06T06:21:44.600Z
  Next: Done: bdb8ac4b (stale legacy-hfile + seed) and 448d6e71 (overlay-installer batch cap, bisected to b545745e); no product regressions.
  Done: All three pass on main or are documented stale with the bisected commit.
  Evidence: board 2026-10-06T06:21:12

- [x] Pre-existing unit test failures on clean main (non-VFS)
  id: MAIN-TEST-FAILURES-20261006
  status: done
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  created: 2026-10-06T06:34:40.253Z
  Next: Done: 20468f96 + c0fdf560, all bisected to deliberate changes (test-side updates, no product regressions); ps_1_4 remains an unimplemented feature.
  Done: Each listed test passes on main or is documented stale with the bisected commit.
  Evidence: board 2026-10-06T03:51, 05:00, 06:34

- [x] USER BUG: Blood II demo traps in the browser with Threads ON
  id: BLOOD2-THREADS-TRAP-20261006
  status: done
  Result: FIXED 2497c3a0 (2026-10-06 11:15 claude:202b4b39): the Worker-main LoadLibrary path mapped only the named DLL; it now maps the DLL's static imports first (process-boot loadLibraryDependencies, host.js resolves bytes, guest-worker maps + DllMains in order). Chrome --threads: main menu, 5 guest threads, no trap. Evidence scratch/runs/20261006T111500Z-blood2-threads-fixed. Not retested on Safari (the user's browser); no unit test for the worker message yet.
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (reassigned 2026-10-06T10:15Z; prev claude:1863d2b5 died 04:32)
  created: 2026-10-06T09:23:48.159Z
  requested-by: user via Telegram (pasted browser log, likely Safari/WebKit: "evaluating 'ex.run(msg.steps | 0)'")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 2497c3a0 Worker-main LoadLibrary maps static imports first; Chrome --threads reaches the main menu, 5 guest threads, no trap (scratch/runs/20261006T111500Z-blood2-threads-fixed). Live on the user build.
  Done: blood2_demo reaches the menu/gameplay in the browser with Threads ON (and OFF), regression test where possible, commit on main.
  Evidence: user Telegram log 2026-10-06

- [x] USER: lazy-loading redesign — make read paths parkable, drop the small-file rule, bundle what must stay eager
  id: LAZY-SMALL-FILES-20261006
  status: done (all parts on main: b94d2862, 5c781a27, d8a7a548 + earlier; 4-game numbers reviewed; Pirates measurement dropped as infeasible -- see 17:5x board)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (after AoE II / Blood II browser checks)
  created: 2026-10-06T10:24:19.568Z
  requested-by: user via Telegram ("carmagedon seems to be eager load?")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: STATUS 15:20 (claude:202b4b39), all on main: (1) parkable now: PlaySound/sndPlaySound, BASS_SampleLoad, LoadImage+ImageList_LoadImage from file, mmioDescend (+ earlier ReadFile/_lread/mmio/AVI); MCI materializes streamed files (b94d2862, d8a7a548). Still eager by class, documented in lib/app-files.js: exe/dll family (loader), ini/cfg/inf/reg (synchronous profile reads), ttf/fon/fnt (font registry scans c:\windows\fonts inside GDI calls), hlp/cnt/chm, rtf; Win16 apps all-eager (bridge cannot park). Writable/COW mappings not done. (2) audio+image classes dropped: registry eager 1420 -> 1375 MB; colin 24.0 -> 2.0 MB. (3) one-fetch bundle: GET __bundle (5c781a27), colin fetches before first frame 106 -> 14, ut348 71 -> 17. (4) browser bytes/fetches before first frame for the 4 games: scratch/runs/20261006T144500Z-lazy-launch-bytes-4games; routes pass (colin stage, carma2 race, dark_colony + little_fighter_2 lazy == eager pixels). (5) Diablo intro parks 17 -> 5 with 1 MB chunks + prefetch (scratch/runs/20261006T152000Z-lazy-chunk-prefetch-diablo). Pirates needs a boat. ORIGINAL: User agreed the extension/size heuristics are wrong (Telegram 2026-10-06). (1) Make more consumers park on a lazy miss instead of needing bytes in the same turn: _lread/_hread (Win16 too), resource/bitmap-from-file (LoadImage LR_LOADFROMFILE), font files, PlaySound/sndPlaySound/MCI file reads, writable/copy-on-write mappings where possible — each with a test. (2) Drop SMALL_FILE_BYTES and shrink EAGER_EXTENSIONS to what still cannot park (exe + statically imported DLLs at minimum). (3) Fetch whatever stays eager as ONE bundle request instead of N. (4) Measure census + browser bytes/requests before first frame for carmageddon2_demo, colin_mcrae_rally_demo, atlantis_demo, heroes3_demo; all gameplay routes keep passing. (5) USER 2026-10-06: streamed reads must not stall per small chunk — switch lazy range fetches to ~1 MB chunks and add background sequential read-ahead (when a read continues the previous one, fetch the next chunk(s) before the guest asks; cancel/limit on random access; keep the cache bound sane). Measure stalls/parks per second and bytes over-fetched on a streaming-heavy game (Pirates audio, Myth, Atlantis movies) before/after.
  Done: Eager set = exe + startup DLLs (+ anything still provably non-parkable, documented); one bundled eager fetch; before/after numbers for the 4 games; routes pass; commits on main.
  Evidence: tools/app-bytes-census.js output 2026-10-06

- [x] USER: Deus Ex demo is very slow even in the menu — use hardware acceleration
  id: DEUSEX-HW-RENDERER-20261006
  status: done
  Result: Fullscreen now default (4f4eeb22) -- that was the real slowness (windowed SoftDrv menu 5.1 PRESENT/s -> fullscreen 10.2). D3DDrv made to work (85cb9388 Device7::Load + CANRENDERWINDOWED, 4ed42731 desktop-sized windowed primary) and measured fullscreen: menu Soft 10.2 / D3D 11.2, Training Soft 10.3 / D3D 5.8 PRESENT/s, D3D darker (no gamma ramp) -> default stays SoftDrv (d714295d), renderer one constant away via new registry iniSet (e66a167d). GlideDrv: 6 Glide2 entry points + triple-buffer FXFALSE (12900028), renders on CLI, exits in the page (open). OpenGlDrv: 263 unresolved GL names (open). Mouse: pointer-lock counts 1:1 for all relativeMouse apps (cc69ac8e). Evidence scratch/runs/20261006T1115Z-deusex-renderer-bench, 20261006T1215Z-deusex-fullscreen-bench; re-note d151f8f3. Proposed follow-ups: GlideDrv page exit, OpenGlDrv GL1.1 surface, D3D gamma ramp + WebGL readback cost.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (in parallel with the ToyVM bench running on bx_jezptxk4)
  created: 2026-10-06T10:26:04.341Z
  requested-by: user via Telegram ("deus ex seems to be very slow even in the menu. why? can we use hardware acceleration?")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: fullscreen (4f4eeb22), pointer-lock 1:1 counts for all relativeMouse apps (cc69ac8e), default stays SoftDrv fullscreen (faster in play). Table PRESENT/s/page fps: menu Soft 10.2/39, D3D 11.2/52; Training Soft 10.3/29, D3D 5.8/44. Slow menu was windowed presentation (5.1). Follow-ups below.
  Done: Deus Ex menu + Training render correctly on the hardware path in the browser, measured faster than SoftDrv (numbers), default switched; commit on main.
  Evidence: docs/re-notes/deus-ex-demo.md

- [x] Deus Ex GlideDrv exits to desktop in the page (renders intro on CLI)
  id: DEUSEX-GLIDE-PAGE-EXIT-20261006
  status: done
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (assigned by orchestrator 2026-10-06T17:57Z; work on boat bx_2u9hyvds with its own Chrome)
  created: 2026-10-06T12:52:18.257Z
  Result 2026-10-06T18:17Z: page showed Critical Error "Assertion failed: RenDev" (WinViewport.cpp:345), also with ?glide-renderer=software; lib/apps.js mounted GlideDrv.int but not GlideDrv.dll (CLI finds it on host disk). 7229c754 mounts Glide/OpenGl/MeTaL/SGL driver DLLs + test/test-unreal-renderer-dll-mounts.js; page plays the 3D intro on WebGL Glide; SoftDrv default unaffected. e229314b notes.
  Evidence: scratch/runs/20261006T1815Z-deusex-glide-page-w6 (before/after page captures on boat bx_2u9hyvds Chrome)

- [x] UE1 OpenGlDrv: 263 GL entry points unresolved
  id: OPENGLDRV-GL11-SURFACE-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (self-claimed 2026-10-06T14:31Z)
  created: 2026-10-06T12:52:18.257Z
  Next: DONE(review) 2026-10-06T15:10Z, commits 5f17bb07 (+ notes 476effd1, 0f4671c1). UE1 OpenGlDrv binds: 263 GL 1.1/WGL names are APIs (w4 WIP, api 4209-4471, fail-fast), wglGetCurrentContext/DC real; glMultMatrixf (GL op 109) and glClearDepth (op 110) implemented in WebGL + software backends + matrix mirror, with tests. Deus Ex on OpenGlDrv plays its 3D intro on --gl-renderer=software (run 20261006T1440Z-opengldrv-deusex). FOLLOW-UP: Escape out of the intro on OpenGlDrv jumps into zeros inside UE1's lazy loader (engine+0x1030cb70, Tell/Seek/serialize during a texture upload; suspect a package-file read); SoftDrv is fine. See docs/re-notes/unreal-family-demos.md.
  Evidence: scratch/runs/20261006T1215Z-deusex-fullscreen-bench/result.json

- [x] Deus Ex on OpenGlDrv: ESI clobbered across ULinkerLoad::Tell after Escape (jump into zeros)
  id: DEUSEX-OPENGLDRV-ESI-CLOBBER-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (follow-up of OPENGLDRV-GL11-SURFACE; needs a boat)
  created: 2026-10-06T17:50:00.000Z
  Next: DONE(review) 2026-10-06T21:30Z, commit 3b8189f5. Root cause: $DIB_PAGE_COUNT (16384 = 64MB) exceeded $DIB_GUEST_CAPACITY (63MB), so once OpenGlDrv's texture uploads after Escape filled the DIB arena past 63MB, new surfaces translated to the NULL sentinel and the software-GL texel store wrote from wasm 0xF0 through the guest image -- overwriting deusex.exe's reader vtable slot with magenta. Fix: page count 16128 + test/test-dib-arena-translates.js (fails on 16384). Boat bx_k5x5vqk5: Escape now reaches the Deus Ex main menu and runs past 216000 batches; evidence scratch/runs/20261006T2125Z-deusex-opengldrv-escape-fixed. Earlier Galaxy-mixer attribution corrected in the re-notes.
  Done: Escape out of the Deus Ex intro on OpenGlDrv reaches the menu; root cause fixed with a unit test; commit on main.
  Evidence: docs/re-notes/unreal-family-demos.md (Boat runs 2026-10-06)

- [x] Deus Ex demo cannot be installed on a fresh boat (fetch-candidate-corpus --id=deus-ex-demo)
  id: DEUSEX-DEMO-FRESH-INSTALL-20261006
  status: done
  owner: claude:90024109 (assigned by orchestrator 2026-10-06T17:00Z; filed by claude:90024109 2026-10-06T17:00Z; blocks OPENGLDRV-GL11-SURFACE follow-up and any Deus Ex run on a boat)
  created: 2026-10-06T17:00:00.000Z
  Next: DONE(review) 2026-10-06T17:10Z, commit 99e861e6. SFX budget 2000 -> 30000 (extract reaches Setup.exe at batch 11,243); local install-deus-ex-demo.js --capture then PASSes and writes the full 224 MB tree (identical to the checked-in installed/ except post-install INIs). The NULL CreateBitmap was NOT a GDI bug: locally the same Setup.exe call returns 0x410010 (gdi_surface_create => TRUE); on the boat the host's gdi_surface_create failed, the only host-dependent step, most likely _createOffscreen (canvas) under that boat's node_modules from the older 2683a6e3 checkout -- not reproducible here, so _createOffscreen now logs its error once instead of returning NULL silently. Not yet shown: a fresh-boat fetch end to end with this commit (needs a boat with a current checkout + node_modules).
  Done: fetch-candidate-corpus.js --id=deus-ex-demo installs the demo on a fresh boat; root cause of the NULL CreateBitmap fixed with a test; commit on main.
  Evidence: board 2026-10-06T16:48Z..17:00Z (claude:90024109)

- [x] D3DIM: gamma ramp missing (Deus Ex D3D darker) and WebGL readback blocks ~19%
  id: D3DIM-GAMMA-RAMP-READBACK-20261006
  status: done
  note: 2026-10-06T18:05Z both halves on main: gamma 69572fd7 (ramp live in D3DDrv, scene visibly brighter; scratch/runs/20261006T1710Z-deusex-d3d-readback) + async WebGL2 Flip fcfa4989 (Deus Ex D3DDrv PRESENT/s 6.6 -> 14.2; scratch/runs/20261006T1815Z-deusex-d3d-async-flip/result.json).
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (after BOAT-BINARIES-FEED)
  created: 2026-10-06T12:52:18.257Z
  Next: Gamma half done (69572fd7: ramp applied on present, DDCAPS2_PRIMARYGAMMA). Readback half (orchestrator 16:53): measure the per-frame fence/readback/upload split on Deus Ex D3DDrv in the browser (2nd in queue; headless WebGL is unavailable on this box), then build (A) async PBO readback at Flip, present one frame late; (B) GPU-direct present only if the copy itself dominates.
  Evidence: scratch/runs/20261006T1215Z-deusex-fullscreen-bench/result.json

- [x] Hype Glide demo traps under run.js --threads (CLI only)
  id: HYPE-THREADS-CLI-TRAP-20261006
  status: done
  note: 2026-10-06T17:55Z fixed in e4145fe2 (run.js worker slice = max(BATCH_SIZE,1000), the page's parity); evidence scratch/runs/20261006T1715Z-threads-slice-parity/result.json
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-06T16:55:00Z
  Next: Reviewed complete: maine4145fe2 restores main/worker slice parity; retained44-app rerun reports Hype menu, no added crashes/exits/audio loss. result.json and raw rerun retained under20261006T1715Z-threads-slice-parity. Do not reimplement from pre-fix sweep.
  Evidence: scratch/runs/20261006T1425Z-dual-mode-full/result.json; docs/crash-sweep-dual-mode-20261006.md (Follow-up section)

- [x] Threads-mode picture splits: page check of six apps
  id: THREADS-PICTURE-SPLITS-20261006
  status: done
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (assigned by orchestrator 2026-10-06T18:18Z; page check on a boat browser)
  created: 2026-10-06T16:55:00Z
  Result 2026-10-06T18:50Z: no emulator bug. Threads-blank (icy, deus, dredmor_release) are byte-identical across modes at equal --max-batches: sweep arms get equal wall seconds, --threads retires ~2.5x fewer batches. nfs2 threads reaches its menu (nondeterministic workers). Coop no-capture (tworld, dredmor): 2.9 GB PCM per 15s (batch clock) filled the disk before the PNG. Page (boat, Worker backend confirmed) renders all five checked; dredmor_release not page-checked (261 MB). Fixes e5dd0201 (--audio-out-max, crash-sweep cap + batch counts) and f25d2208 (web-input-probe byte ranges).
  Evidence: scratch/runs/20261006T1850Z-threads-picture-splits-w6

- [x] USER BUG: Dark Colony demo has no visible mouse cursor
  id: DARK-COLONY-CURSOR-20261006
  status: done
  result: 2026-10-06T16:50Z -- fix f70f7d22 on main; BROWSER CONFIRMED: shipping shell, headless Chrome, the green crosshair cursor draws on the main menu and moves with the mouse (scratch/runs/20261006T1650Z-dark_colony_demo-browser-cursor/01-menu.png, 02-menu-moved.png). Mars map cursor verified CLI-only (scratch/runs/20261006-dark-colony-cursor-cli). Needs the user to confirm on their device after deploy.
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T10:45:00.869Z
  requested-by: user via Telegram ("dark colony lacks mouse cursor")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: 2026-10-06T16:40Z -- still only the browser confirmation; browser board is free but box memory is 1.3 GB available (<1.8 GB floor), so waiting for a grant + memory. 2026-10-06T11:15Z -- FIXED on main f70f7d22: LoadImageA(IMAGE_BITMAP) returned a blank 32x32 stand-in for a missing resource, so Dark Colony's DDLoadBitmap-style loader never fell back to LR_LOADFROMFILE and all 28 cursor frames were empty; now NULL + ERROR_RESOURCE_NAME_NOT_FOUND. Cursor visible headless on menu/briefing/map/debrief (scratch/runs/20261006-dark-colony-cursor-cli), test-loadimage-dibsection +2 checks. ONLY browser confirmation left (slot requested 11:05). Earlier: Next: Find how dark_colony_demo draws its cursor (software cursor on the DirectDraw surface like AoE's GetClipper case 71845fe9, SetCursor/LoadCursorFromFile, ShowCursor count, or a DirectInput-driven sprite), reproduce headless (--png with the mouse moved) and in the browser, fix for real with a test, commit on main.
  Done: Cursor visible in menu and in the Mars map in the browser (reviewed screenshot), regression test, commit on main.
  Evidence: scratch/runs/20261006T014500Z-dark-colony-demo-build-scroll

- [ ] USER: every multiplayer-capable demo must actually work over the network
  id: MULTIPLAYER-DEMOS-NETWORK-20261006
  status: done (civ2_mge, mcm 3cd30c5e, jazz2 1509721b work; TetriNET/LW/AoE1 fixed; mw3 demo-locked; reviewed by orchestrator)
  Next: 11:30Z jazz2 WORKS 3/3 on current main (test 1509721b; runs/20261010T1135Z-jazz2-vlan-ctf-w4, both seats in one Diamondus Warzone CTF level). Today: civ2_mge (9cdf1a19/e2b842b9 + da6a67bd), mcm (3cd30c5e), jazz2 (1509721b), TetriNET/LW (ed72bc2f), STOPASYNC (211f8040), AoE1 regression (dc1e4eb4); mw3 demo-locked. 2026-10-10T04:00Z (w4) -- TetriNET/LW FIXED ed72bc2f (vsock connect deadline on the wall clock; loopback 5/5, tetrinet 3/3, match 3/3 on boat; REVIEWED). civ2_mge: da6a67bd (native controls expose kind via GWL_WNDPROC; regression A/B 16 apps byte-identical, posted) -> guest Net Name types and reaches the Multiplayer Games list; 11:13Z mcm WORKS (3cd30c5e: DirectPlay state shared across guest threads, only the activating thread pumps; test-mcm-vlan-gameplay checks join + both rosters; runs/20261010T1115Z-mcm-vlan-rosters-w4). Remaining open on this row: jazz2 flake (branch claude/w4-jazz2-vlan-wip) -- likely the same per-thread-state class, worth re-testing on main now. 09:40Z mcm: guest now JOINS (the blocker was the click -- MCM re-enables JoinBut every frame while sessions are listed, so only a single-frame press+release becomes a Join event; wire carries JOIN_REQ/ACK/PLAYER_ADD + DATA, guest in race lobby; branch claude/w4-mcm-vlan-wip dae98bcb; runs/20261010T0940Z-mcm-vlan-join-w4). Next: rosters list only the local rider. 10:25Z: MCM Receives on its own thread, and DirectPlay's 24 mutable globals are per-instance (that instance has no message table). Moving them to a shared region ($DP_SHARED, branch claude/w4-mcm-vlan-wip2 4f9d7e98, build PASS) made the guest stall on the session list after JOIN_ACK -- one instance must own the vlan wire/dpn_poll (the thread instance likely consumes the join reply the main thread's parked Open waits on). Design that ownership, then re-test rosters. AoE1 regression closed (dc1e4eb4). 07:46Z mw3 = demo LOCKS multiplayer ("Only Available In Full Version"; runs/20261010T0745Z-mw3-multiplayer-locked-w4). STOPASYNC fixed 211f8040. Remaining open on this row: mcm Join (branch claude/w4-mcm-vlan-wip) and jazz2 flake (branch claude/w4-jazz2-vlan-wip); status table current. 06:50Z mcm PARTIAL (boat bx_vhqyn3kh): route found (MP Event 540,95 -> TCP/IP LAN Next 338,442 -> Host 80,173 + name + OK 318,189 -> race lobby); guest DISCOVERS the session ("Ann" listed, ENUM both ways) but its Join click never reaches MCM's join fn 0x49ba80 (IDirectPlay3::Open, 0 hits); suspects: MCM UI list-selection state or a session-desc field (max/current players, flags) making it unjoinable. Draft test on branch claude/w4-mcm-vlan-wip (cede7f6e). Also fix: 09d4 dpn_enum_sessions tests STOPASYNC as 0x4, real DPENUMSESSIONS_STOPASYNC is 0x20 (needs aoe1/aoe2/blobby vlan re-run on a boat). Then mw3. 06:20Z civ2_mge DONE: join + SHARED GAME (host Romans / guest "Babylonian Map (Roman Moves)", 4000 B.C.) -- 9cdf1a19 + e2b842b9, evidence scratch/runs/20261010T0550Z-civ2_mge-vlan-join-w4 and 20261010T0620Z-civ2_mge-vlan-shared-game-w4; status table updated. Next: mcm, then mw3. (05:55Z: the "host never answers" below was the host stuck at an empty Net Name dialog, a route bug, not the emulator.) [superseded:] NOW BLOCKED on host never answering the guest's UDP 4994 discovery. 05:08Z root cause narrowed (boat bx_f47h3669, re-notes e470f163): the host never calls the net pump 0x460379 (0 hits), so the queued guest messages are never processed and nothing is sent; the host lobby runs Civ2's generic dialog runner 0x54bad5 -> plain modal loop 0x565ce0 with no idle hook, and none of the sites that install the network idle callback (setter 0x407d70; 0x542893 / 0x4a0bf0, gated [0x5da722]>=3, value 3) run. Next (boat requested 05:08): count which mechanism the GUEST's games list uses (lobby fn 0x4a1936 / 0x4a0bf0) vs the host, then find why the host route skips its equivalent. Test draft test/test-civ2-mge-vlan-gameplay.js uncommitted (CIV2_DIR/CIV2_CD_EXE, CIV2_VLAN_{HOST,GUEST}_EXTRA). jazz2 parked on branch claude/w4-jazz2-vlan-wip (client main thread spins its TCP pump, never answers server's first UDP; ~1/2 pass). Then mcm/mw3. Evidence scratch/runs/20261010T0348Z-civ2_mge-gwl-wndproc-kind-w4. Earlier: 2026-10-06T21:20Z WIND-DOWN (w4) -- all work pushed, nothing uncommitted. Done today: simcity2000_net 3678b0b1, aoe2 904b5e50, aoe1 036a6334, diablo IPX 16a04a54+70f498f2, Winsock d4b8fe00 (TCP/UDP port spaces + WSAAsyncSelect table shared across thread instances); table scratch/runs/20261006-multiplayer-census-w4/status.md. OPEN (orchestrator priority): test-vlan-tetrinet / test-vlan-match fail on main. Bisect (boat, 27c290df good..main): connect step first broke at 37ff2f8d (input release hold), repaired by 291be497 + d4b8fe00. Still failing later and flaky: TetriNET server's first recv on the accepted socket returns WSAECONNRESET 10054 (srv trace: accept -> getpeername -> FD_READ -> recv=-1/10054 -> closesocket) in some runs, "answer the login" in others (27c290df fails there too). Look at who sets the reset flag (VSock flags bit2) on the server's child -- RST/peer-gone path in 09d-winsock $vsock_deliver while the client's connect is still in flight. Liquid War: client never connects (server hits its 3M-batch cap) -- re-check after the TetriNET cause. Then jazz2_demo (joins ~1/3-1/2 of runs; test draft test/test-jazz2-vlan-gameplay.js lives only in w4 scratch, not committed), then mcm/mw3/civ2_mge. Earlier status:
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (assigned by orchestrator 2026-10-10T01:35Z, Claude track RESUME)
  created: 2026-10-06T10:52:04.494Z
  requested-by: user via Telegram ("for all multiplayer capable demos make sure that network actually works")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: 2026-10-06T18:00Z -- status table scratch/runs/20261006-multiplayer-census-w4/status.md. Fixed today: simcity2000_net 3678b0b1, aoe2 904b5e50, aoe1 036a6334, diablo_shareware IPX 16a04a54+70f498f2 (all with two-instance tests + reviewed evidence). Blocked: ut2004_demo (needs boat binaries feed). Next candidates (unconfirmed demo MP): civ2_mge, jazz2_demo, mcm, mw3 — need a boat per policy. Earlier: 2026-10-06T14:55Z -- WORKS: simcity2000_net (3678b0b1, Winsock TCP, server+2 clients; scratch/runs/20261006T1340Z-simcity2000_net-w4-vlan), aoe2 (904b5e50, DirectPlay4W: both lobbies list Host+Guest by name; test-aoe2-vlan-gameplay.js 3/3 on boat; scratch/runs/20261006T1450Z-aoe2-w4-vlan), aoe1 (036a6334, DirectPlay3A + new PLAYER_DATA frame; test-aoe1-vlan-gameplay.js 2/2; scratch/runs/20261006T1525Z-aoe1-w4-vlan). Now: diablo_shareware IPX, ut2004_demo (526 MB, needs a binaries feed on the boat). Earlier: (1) Census DONE: scratch/runs/20261006-multiplayer-census-w4/census.md (~40 MP games; vlan tests exist for 7: mshearts16, blobby, liquid_war, tetrinet, atomic_bomberman, quake2, ut2003(candidate); transports: Winsock TCP/UDP/IPX yes, DirectPlay TCP/IP only, NetBIOS/modem no; locked in demo: heroes2, total_annihilation, diablo2, likely starcraft). (2) Next targets: simcity2000_net (test drafted in claude-w4-wt: test/test-simcity2000-net-vlan-gameplay.js, uncommitted until it passes), ut2004_demo, aoe2/aoe1 DirectPlay TCP, diablo_shareware IPX (black Select Connection UI). BLOCKED on a boat: two/three-instance pairs are HEAVY by policy -- REQUEST BOAT posted 11:48, reminded 12:54.
  Done: Table of every multiplayer demo with transport and status (works / fixed / blocked-with-reason), two-instance evidence (screenshots of both sides) for each working one, tests, commits on main.
  Evidence: scratch/runs/20261006-multiplayer-census-w4/; memory project_vlan_room_seats; src/09d-winsock.wat, src/09d4-dplay-net.wat

- [x] USER BUG: Die by the Sword demo goes to a black screen in the browser (user suspects Threads)
  id: DBTS-WEB-BLACK-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (right after PROD-TOP5-FPS; before The Movies)
  created: 2026-10-06T10:54:57.750Z
  requested-by: user via Telegram ("Die by the Sword Demo - gets to black screen for me, maybe problem with threads?")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 366febec grLfbLock accepts an uninitialised GrLfbInfo_t.size (retail glide2x behaviour); cause was the setup default 3Dfx Voodoo path, not Threads/lazy. Live on the user build.
  Done: dbts_demo reaches Quest gameplay in the browser (Threads on and off), reviewed screenshot, commit on main.
  Evidence: scratch/runs/20261006T040000Z-die-by-the-sword-demo-quest-walk; docs/re-notes/die-by-the-sword-demo.md

- [x] Threads mode: the x86 LOCK prefix is ignored, so lock inc/xadd/cmpxchg are not atomic across Workers
  id: LOCK-PREFIX-ATOMIC-20261006
  status: done
  result: 2026-10-06T15:00Z -- DONE 2805fe86 (main): $try_emit_locked + handler 499 $th_lock_rmw (CAS on the containing aligned qword, split-lock mutex), $LOCK_MODE set by host.js Worker backend + run.js --threads, coop encoding unchanged. test-lock-prefix-atomic 445/445, test-lock-prefix-workers 2x300k exact (mode-0 control wedges). Not covered: BTS/BTR/BTC, CMPXCHG8B. Evidence scratch/runs/20261006T1500Z-heroes3_demo-threads-lazy-audio-{before,after}.
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (with LAZY-PARK-AUDIO-LOOP — may be the Threads stuck-loop cause)
  created: 2026-10-06T14:28:33.694Z
  Next: Done: 2805fe86 atomic LOCK RMW + memory XCHG in Worker threads (coop encoding unchanged); test-lock-prefix-atomic 445/445, workers 2x300k exact.
  Done: LOCK-prefixed RMW are atomic across Workers (contention test passes), coop path byte-identical/perf-neutral, heroes3 Threads stuck-loop re-evaluated; commit on main.
  Evidence: board 2026-10-06T14:26:51

- [x] USER: Heroes III sound repeats while the game waits on a lazy file read
  id: LAZY-PARK-AUDIO-LOOP-20261006
  status: done
  result: 2026-10-06T15:00Z -- coop: 537fa2a6 park no longer holds the step (verified, rings refreshed through a 460ms park). Threads: the loop was the ignored LOCK prefix (Smacker/Miles locks across Workers), fixed in 2805fe86; heroes3_demo Threads +150ms Range latency STUCK-LOOP 5/5 before -> OK after (tools/audio-loop-check.js on record-probe --threads films). Evidence scratch/runs/20261006T1500Z-heroes3_demo-threads-lazy-audio-{before,after}.
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (after DARK-COLONY-CURSOR)
  created: 2026-10-06T11:02:38.069Z
  requested-by: user via Telegram ("in Heroes 3 sound seems to be stuck on repeat when waiting to load files. is this because we not running threads when blocked on file read?")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: coop park fixed (537fa2a6/e909298e); Threads stuck loop was the missing LOCK atomicity (2805fe86): heroes3 Threads +150ms latency STUCK-LOOP 5/5 -> 0/36, reaches menu. Tools: audio-loop-check.js, record-probe --threads/--coop (79d82607).
  Done: During a lazy-read wait the music/sfx keeps playing correctly in heroes3_demo (Threads off and on), regression test (parked reader + running sound thread), commit on main.
  Evidence: user Telegram 2026-10-06

- [x] USER: every game must work correctly in BOTH cooperative and Threads mode
  id: DUAL-MODE-CORRECTNESS-20261006
  status: done
  Result: tools/crash-sweep.js --modes=coop,threads + frame/audio signals + --compare/--gate + --stuck-after (2b777440, cedede26); CLAUDE.md entry + docs/crash-sweep-dual-mode-20261006.md (e5f9a65a). Top-38 pass (scratch/runs/20261006T1325Z-dual-mode-top38): 3 disagree. Fixed diablo_shareware threads trap (cedede26, ThreadManager nested waits under worker backend). Open: diablo_shareware threads menu without art (nested sync wait inside WM_INITDIALOG cannot block under workers; browser same), hype_glide_demo threads trap (MFC thread exits via EIP 0). Full 268-app pass blocked: boat forks lack test/binaries; needs a reverse-forwarded file feed. Proposed follow-ups: WORKER-NESTED-SYNC-WAIT, HYPE-THREADS-MFC-EXIT, BOAT-BINARIES-FEED.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (after DEUSEX-HW-RENDERER)
  created: 2026-10-06T11:04:56.124Z
  requested-by: user via Telegram ("we need to make sure both cooperative and threads mode work correctly")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: sweep gate (2b777440, cedede26, docs e5f9a65a); top-38 coop vs threads: 35 agree. Remaining divergences moved to THREADS-DIVERGENCES-3-20261006. Full 267-app sweep still needs a binaries feed for boats.
  Done: Table of all games x {coop, threads} status with run ids; top divergences fixed; sweep command documented in CLAUDE.md; commits on main.
  Evidence: tools/crash-sweep.js; docs/crash-sweep-20261006.md; memory project_threads_default_sweep

- [x] Threads-mode divergences left by the dual-mode sweep
  id: THREADS-DIVERGENCES-3-20261006
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-06T13:51:23.133Z
  Next: Done: none are product bugs — in the page with Threads on, diablo_shareware and hype_glide_demo render correctly; red_alert threads == coop 3/3. CLI --threads keeps main in-process, so nested waits differ (harness limit).
  Done: all three agree coop vs threads; gate green; commits on main.
  Evidence: scratch/runs/20261006T1325Z-dual-mode-top38; docs/crash-sweep-dual-mode-20261006.md

- [ ] Private game-binaries feed for boat forks (+ CLI --threads main-in-worker parity)
  id: BOAT-BINARIES-FEED-20261006
  status: done
  note: 2026-10-06T17:35Z reviewed DONE by claude:80aa9e95 (16:53): feed 84b28e9e, --min-free-mb 7b6a8cc0, full 271-app sweep results 678c83d7.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-06T14:14:59.591Z
  Next: Boat forks lack the gitignored test/binaries (30 GB). Build a private feed: a static server here over test/binaries + 'boat forward <id> --reverse' (never 'host'), and a run.js/crash-sweep option to mount apps from that URL (lazy ranges already exist). Document the recipe in CLAUDE.md. Then run the full 267-app dual-mode sweep on a boat. Optional follow-up: make run.js --threads run the guest main thread in a worker like the page, so CLI dual-mode results match the browser.
  Done: a fork runs any registered app via the feed; full dual-mode sweep table committed; recipe documented.
  Evidence: board 2026-10-06T13:18 (fork had no binaries)

- [x] USER BUG: Dungeons of Dredmor "Next" button does not work
  id: DREDMOR-NEXT-BUTTON-20261006
  status: done
  result: 2026-10-06T15:25Z -- DONE 37ff2f8d (main): quick clicks were lost by state-polling SDL GUIs -- renderer.takeInput now never hands a release over in the same pump as its press (one empty poll + 30ms). Browser A/B (Threads on, instant click on New Game): hold off stays on the menu, hold on opens Choose Your Difficulty. test-renderer-input-button-hold.js. Evidence scratch/runs/20261006T1520Z-dungeons_of_dredmor_release-quick-click. Needs the user to confirm on their device after deploy (the story-page Next is the same button class).
  blocker: 2026-10-06T12:00Z -- no "Next" button exists anywhere in the game on dungeons_of_dredmor_release (launcher, Mod Loader, New Game -> Difficulty/Skills/Name "Done", in-game and tutorial dialogs "OK" -- all advance headless; beta launcher identical; no Next label in the XML). Need the user's exact screen/build/device (asked on the board 11:58); possibly one of our browser dialogs.
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (after LAZY-PARK-AUDIO-LOOP)
  created: 2026-10-06T11:17:03.754Z
  requested-by: user via Telegram ("how about dredmore next button?")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 37ff2f8d — a mouse release is never delivered in the same pump as its press (SDL GetMouseState polling missed fast taps/clicks). Live on the user build; benefits every polling-input game.
  Done: Next advances to the following screen in the browser, reviewed screenshot, regression test, commit on main.
  Evidence: user Telegram 2026-10-06

- [x] USER: browser FPS for the top-5 production desktop candidates
  id: PROD-TOP5-FPS-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (before The Movies)
  created: 2026-10-06T10:22:34.828Z
  requested-by: user via Telegram ("next top 5 candidates to be added to desktop on prod. send screenshots and fps info")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: browser gameplay PRESENT/s / page fps (Threads off, lazy on, load 6-9 = floors): aoe1 3.9/21, tomb_raider_2 21.8/41, heroes3 5.2/27 (idle), red_alert_95 29.1/41, carmageddon2 8.1/40. result.json per game.
  Done: Table of 5 games x {reaches gameplay in browser, PRESENT/s, page fps, machine load}; result.json per game; reviewed gameplay screenshot from the same run.
  Evidence: CLAUDE.md "Measuring jank in the browser"; tools/profile-web-frames.js

- [x] USER BUG: Unreal Tournament crashes in the browser with an unhandled C++ exception (Threads mode)
  id: UT-WEB-CXX-THROW-20261006
  status: done
  Result: fixed on main (dd0d6dc8, 10004c19, 61686c8e, 867f35a3, re-note d989a433). Root cause: the software SEH dispatch kept its walk state in globals, and a rethrow from a catch block (UE1 unguard) clobbered them, so every engine error went unhandled, in both thread modes. Also fixed: the wizard probe child had no DLLs; UpdateWindow paint abandoned after 64 Sleep rounds; Threads-on dialog clicks went to the idle shadow instance. Browser: wizard -> DM-MorpheusDEMO match with Threads ON and OFF. Evidence scratch/runs/20261006T141000Z-ut348-web-cxx-throw-fixed. Not retested on Safari.
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (before Populous)
  created: 2026-10-06T11:26:18.281Z
  requested-by: user via Telegram ("resolve issue with ut" + browser console)
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 867f35a3 SEH nested dispatch (root cause), dd0d6dc8+10004c19 probe child DLLs, 61686c8e Threads-ON dialog clicks; browser-verified wizard -> DM-MorpheusDEMO match Threads on and off (scratch/runs/20261006T141000Z-ut348-web-cxx-throw-fixed). Safari not retested.
  Done: UT reaches the menu and a match in the browser with Threads on and off, regression test for the throw/rethrow path, commit on main.
  Evidence: user Telegram 2026-10-06

- [x] New-game lane: Populous: The Beginning demo (Bullfrog 1998) — user request
  id: NEW-GAME-POPULOUS-TB-DEMO-20261006
  status: done
  Result: e13dae03 (Unicode DirectPlay lobby, DI SetCooperativeLevel NULL HWND, timeGetSystemTime) + 0bb009e5 (populous_tb_demo registered: apps.js LOCAL_CANDIDATE, corpus-categories strategy, index.html, candidate-corpus populous-the-beginning-demo, docs/re-notes/populous-the-beginning-demo.md). Reviewed headless gameplay: menu -> New Game -> Journey Begins -> flyby -> shaman selected and walked to a clicked point, arrow keys rotate world. Evidence scratch/runs/20261006T1210Z-populous_tb_demo-gameplay-w6. Not checked: browser, audio, D3DPopTBDemo.exe.
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (new worker w6, pane %11; prev claude:202b4b39 paused it for UT)
  created: 2026-10-06T11:21:31.990Z
  requested-by: user via Telegram (tweet about Populous: The Beginning; "get this game into corpus, search archive.org for demo/shareware/trial")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 08 shaman-selected vs 10 shaman-arrived reviewed by orchestrator; e13dae03+0bb009e5 on main, live on the user build. Open: browser, audio, D3D exe.
  Done: Reviewed player-controlled gameplay screenshot + run identity, registered on main.
  Evidence: https://archive.org/details/POPULOUS (alternates: Populous_The_Beginning_Demo_Disc_-_Win95_Eng 86 MB, Nova_PopulousTheBeginningDemo_USA)

- [x] USER: install the real Windows Installer 2.0 redistributable in the emulator so MSI setups work
  id: WINDOWS-INSTALLER-REDIST-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (after the profile-web-frames fix + DBTS-WEB-BLACK; before resuming The Movies)
  created: 2026-10-06T11:28:03.186Z
  requested-by: user via Telegram ("seems like windows installer we should be able to just install? add its redist package into corpus")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: DONE(review) 2026-10-06T14:17Z, commits 8c02125a + 7b50a0d2. Windows Installer 2.0 installs cleanly in one CLI run (--app=windows_installer_20, spawnProcesses): instmsi->msiinst->msiexec x3 and custom-action grandchildren all exit 0, msi.dll/msiexec.exe in C:\WINDOWS\SYSTEM (runs 20261006T1415Z-instmsi-boat-single-run, 20261006T1340Z-instmsi-msiexec). Needed real child processes for CreateProcess (run.js --spawn-processes; browser host.js child instances + VirtualFS.mergeChildFrom) and GetLongPathNameA (msi had no fallback -> 1619). OPEN: browser msiexec /i stops on msi error 2761 (run 20261006T1410Z-instmsi-web); installed msiexec /? reads 'Err' (no FormatMessage FROM_SYSTEM table); no MSI-based corpus installer tried yet. docs/re-notes/windows-installer-2.0.md.
  Done: instmsi.exe installs cleanly in the emulator; an MSI-based setup (The Movies demo) completes; corpus entry + docs; commits on main.
  Evidence: https://archive.org/details/instmsi_win9x

- [x] Windows Installer in the browser: msiexec /i ends on msi error 2761
  id: INSTMSI-WEB-2761-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (follow-up of WINDOWS-INSTALLER-REDIST, self-filed 2026-10-06T15:40Z)
  created: 2026-10-06T15:40:00.000Z
  Next: DONE(review) 2026-10-06T16:35Z, commit 9beb3d4c. Root cause: readSyncObjectName (lib/mem-utils.js) rejected a SharedArrayBuffer in a page without the SharedArrayBuffer global (not cross-origin isolated), so every named mutex/event/semaphore there was anonymous and msi could not reopen _MSIExecute (2761). Browser now: InstallFinalize Return value 1, 'Windows Installer Setup completed successfully.', 7 msi files in the msiexec child's C:\WINDOWS\SYSTEM. Not shown: merge back to the top-level C:\ (harness click did not reach the child's OK box). Follow-up INSTMSI-WEB-1722-20261006 (Info 1722 on /D,/Y custom actions; child-dialog click).
  Done: msiexec /i completes in the browser (Threads off), installed files in C:\WINDOWS\SYSTEM, reviewed screenshot, commit on main.
  Evidence: scratch/runs/20261006T1410Z-instmsi-web; docs/re-notes/windows-installer-2.0.md

- [x] Windows Installer in the browser: custom-action EXEs report Info 1722; OK in a child instance's box
  id: INSTMSI-WEB-1722-20261006
  status: done (be3d5da3; browser verified scratch/runs/20261010T0150Z-instmsi-web-1722-fixed; reviewed by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (assigned by orchestrator 2026-10-10T01:35Z, Claude track RESUME)
  created: 2026-10-06T16:35:00.000Z
  Next: DONE 2026-10-10T01:52Z (be3d5da3 + notes 1d573ba0). MsgWait idle INFINITE now a message wake. Browser: msi.log 0x 1722, RegExtension/RegDllServer Return value 1 in order, /D exits before /Y; child box OK via WM_COMMAND 3001 into the child instance; child merges 18 files, msiinst 36 into top level, all exit 0 (top-level SYSTEM not listed directly: instances had exited). /Y exits 0x80040200, continue-on-error action. Open: why the CLI never showed 1722.
  Done: no 1722 in msi's page log (RegExtension/RegDllServer exit 0 in order), OK dismisses the child's box, and the top-level C:\WINDOWS\SYSTEM holds msi.dll etc.; reviewed evidence + commit on main.
  Evidence: scratch/runs/20261010T0150Z-instmsi-web-1722-fixed; scratch/runs/20261006T1630Z-instmsi-web-2761-fixed

- [ ] New-game lane: The Movies demo (Lionhead 2005) — user request
  id: NEW-GAME-THE-MOVIES-DEMO-20261006
  status: deferred
  owner: unowned (deferred by user 2026-10-06 until better Windows XP support)
  created: 2026-10-06T10:10:27.245Z
  requested-by: user via Telegram (tweet about The Movies; "do the demo only for now")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: DEFERRED (user): revisit once XP-level support exists. Known blockers: InstallShield 9 + MSI setup (WINDOWS-INSTALLER-REDIST-20261006 covers MSI), WMVCore/Windows Media Format runtime (WMF 9 for 98SE not yet found; WMF 11 is XP-only), XP-era APIs, D3D9 shaders up to vs/ps 3.0. Evidence scratch/runs/20261006T1120Z-the_movies_demo-boot2; installer at test/binaries/candidates/the-movies-demo/sources.
  Done: Reviewed player-controlled gameplay screenshot + run/source identity, registered on main; or a precise blocker list (shader model, APIs) if it cannot render yet.
  Evidence: https://archive.org/details/TheMoviesDemo

- [x] USER: benchmark the ToyVM region-JIT branch on a separate box and merge it
  id: TOYVM-BRW-BENCH-MERGE-20261006
  status: done
  Result: merged as 0ce7fbc9 + 0501c1a1 (ls-remote verified). 30/30 toyvm tests pass in main/stack/cand on bx_jezptxk4; CPU-time A/B at 200M dispatches: Fix J/v4/SMC 0.992 geomean (9 comparable), IF-enable 1.012 (10 comparable) = neutral within the 3-6% run-to-run band. Evidence scratch/runs/20261006T1040Z-toyvm-brw-bench. Fork left for the orchestrator to delete.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-06T10:13:38.380Z
  requested-by: user via Telegram ("bechmark toyvm branch on separate box and merge")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 0ce7fbc9 + 0501c1a1 on main; on fork bx_jezptxk4 (stopped): correctness 30/30 toyvm tests in all trees; perf neutral (main->stack 200M geomean 0.992, stack->cand 1.012, 20M ~1.00). Evidence scratch/runs/20261006T1040Z-toyvm-brw-bench.
  Done: Benchmark numbers vs main from the separate box posted; branch merged on main (or a precise reason not to); fork released.
  Evidence: board TOYVM-REGION-JIT-BRW history; scratch/claude-toyvm-brw-v2-review-20261005

- [x] Zuma Deluxe: clicking "CLICK HERE TO PLAY" freezes the frame
  id: ZUMA-CLICK-TO-PLAY-20261006
  status: done
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  created: 2026-10-06T07:53:40.334Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 22558d86 SPI screen-saver answers; Level 1-1 chain advancing + frog firing reviewed by orchestrator (scratch/runs/20261006T0958Z-zuma_deluxe-w4-spi). Browser re-run pending.
  Done: Zuma's first level is playable after the click (ball chain moves, frog fires) with reviewed screenshots; commit on main.
  Evidence: docs/re-notes/reflexive.md; commit 22558d86; scratch/runs/20261006T0958Z-zuma_deluxe-w4-spi (l1/l3-fired/l5.png Level 1-1)

- [x] Heroes III demo gameplay test fails on main ("batch 4000 still resembles the sky main menu")
  id: H3-GAMEPLAY-TEST-FAIL-20261006
  status: done
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  created: 2026-10-06T09:24:15.140Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: b0bc9fd2 — stale capture timing (objective dialog now appears between batch 4000 and 4050), not a product regression.
  Done: test-heroes3-demo-gameplay.js passes on main with the cause named.
  Evidence: commit b0bc9fd2; docs/re-notes/heroes3-demo.md; scratch/runs/20261006T0930Z-heroes3_demo-w4-testfail (result.json, t4000/t4050, bisect.log)

- [x] WinBoard --threads repaint artifact (e2 pawn not erased after 1.e4)
  id: WINBOARD-THREADS-REPAINT-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da
  created: 2026-10-06T09:06:02.167Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: DONE(review) 2026-10-06T14:25Z, commit 2dab96f8. A Worker thread's SendMessage to main is held until main is at a message point (GetMessage/PeekMessage/Wait*), as Windows delivers it; WinBoard's board no longer repaints mid-draw under threads. Verified CLI --threads (test/test-winboard-threads-repaint.js) and browser Threads ON (run 20261006T1420Z-winboard-web-threads: 1.e4, GNUChess 1...e6, e2 clean).
  Done: --threads and browser Threads show a clean board after moves; regression test; commit on main.
  Evidence: board 2026-10-06T09:00:29

- [x] Child processes in the browser: process_spawn for WinBoard/GNUChess
  id: BROWSER-PROCESS-SPAWN-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da
  created: 2026-10-06T08:18:23.936Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 83f0a302 + fe279617; WinBoard 1.e4 e6 vs GNUChess in the browser reviewed by orchestrator (scratch/runs/20261006T0840Z-winboard-browser2).
  Done: WinBoard human move + GNUChess reply in the browser with reviewed screenshots; process wait/exit tests; commits on main.
  Evidence: docs/design-anonymous-pipes.md; scratch/runs/20261006T0820Z-winboard-move2

- [x] Lazy loading for ALL games (part A: generator-built manifests — win98-games-a-d + gen-tree-manifest apps)
  id: LAZY-LOAD-NEW-GAMES-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T08:05:35.418Z
  requested-by: user via Telegram ("how about lazy loading", then "let's use it for all games")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 62a8c906 lazy companion files by default (lib/app-files.js in browser-shell + run.js; eager under 16 MB, Win16, app.lazyFiles:false); 3a8efa43 wide-read fix; live on the user build. Open: browser bytes-before-first-frame numbers.
  Done: Each new game's manifest uses lazy files; browser launch downloads far fewer bytes before the first frame (numbers per game); gameplay routes still pass; commits on main.
  Evidence: lib/apps.js (onDemand/httpRange examples), docs/lazy-sync-*.md, Diablo/Dredmor lazy commits

- [x] Lazy loading for ALL games (part B: hand-written registry entries)
  id: LAZY-LOAD-ALL-GAMES-B-20261006
  status: done
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T08:06:28.548Z
  requested-by: user via Telegram ("let's use it for all games")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: 2026-10-06T17:02Z -- LAST ITEM DONE: browser bytes before first guest frame, caesar3_demo, 4.92 MB lazy vs 43.65 MB ?eager-files (8.9x less); 24.3 MB vs 43.6 MB after 40s (scratch/runs/20261006T1700Z-caesar3_demo-lazy-launch-bytes). Nothing open; ready for review. 2026-10-06T16:50Z -- BLOCKED on box memory: the one open item (browser bytes-before-first-frame, default vs ?eager-files, tools/page-probes/arm/read-launch-bytes.js via profile-web-frames + dev-server) needs 2 headless Chrome runs; browser was granted 16:44 but MemAvailable sits ~0.9-1.0 GB (< 1.8 GB floor). Re-request when memory allows, or run on a boat. 2026-10-06T10:15Z -- after 8bcc3055 (unsized = eager) the hand-written entries stopped streaming; 16758325 restores it: lib/app-file-sizes.generated.js (tools/gen-app-file-sizes.js) stamped onto inline files[] by lib/apps.js, and tools/stamp-manifest-sizes.js for the unsized candidate manifests (run on every serving checkout -- stamped here, 38 manifests). Part B: 1.70 GB eager of 9.22 GB; aoe2 7.1 of 71.2 MB; caesar3 test + arcanum menu re-verified lazily. Still only the browser bytes-before-first-frame measurement open (slot). Earlier: 2026-10-06T09:30Z -- default SHIPPED (62a8c906, claude:202b4b39). Since: e9a6190b page probes arm/read-launch-bytes (unvalidated in a browser), d16c4164 census reports the shipped policy (hand-written top 20: 5.55 GB total, 1.17 GB eager), e7f73003 diablo_demo MPQ streams (56.8 MB -> 971 KB eager). Lazy routes re-validated on main: diablo2 gameplay test, arcanum menu; with 02e4d05f: caesar3, quake2, alien_shooter, simgolf, ut348 (scratch/runs/20261006-lazy-default-*, -lazy-diablo_demo-stream). Exception audit done: civ2_win16 Win16, little_fighter_2 .bmp via LoadImageA(LR_LOADFROMFILE), simgolf small files, installers = exe -- all correctly eager. ONLY REMAINING: browser bytes-before-first-frame ?eager-files vs default for the top 3 (icewind_dale_demo, baldurs_gate_chapters_1_2_demo, arcanum_demo), served by tools/dev-server.js (Range) -- waiting for a browser slot (queue: blood2 user bug, claude:202b4b39 measurement, w5). Earlier note: 2026-10-06T08:44Z -- user refinement: lazy is the DEFAULT via one normalizer (lib/app-files.js, claude:202b4b39, local 15c1a813, pushes after rebase + browser smoke); my part = audit hand-written entries for exceptions + verify the biggest. On main: tools/app-bytes-census.js (25b9ca26/cf624bdb: top-30 hand-written apps 6.95 GB eager -> ~0.8 GB under the default), run.js --lazy-ranges mounts loadMode files (25b9ca26), WINE_RUN_EXTRA_ARGS (22a0ccdb) + --tee (7f013433) to rerun gameplay tests lazily, and 3a8efa43 (a ReadFile wider than the 4 MB sized cache faulted silently -- Caesar III's 9.2 MB c3.555 -- now completes piecewise). Audit so far: 0 non-parkable reads on caesar3/heroes3/iwd/simgolf/quake2 routes; exceptions fed into the normalizer (audio eager only with PlaySound/MCI imports; avi lazy; Win16 fully eager -> civ2_win16 357 MB stays eager). Remaining: after 15c1a813 lands, rerun routes in scratch/lazy-load-b-20261006/routes.md under --lazy-ranges=5; validate tools/page-probes/arm-launch-bytes.js and measure browser bytes-before-first-frame (eager via ?eager-files vs lazy) for the top 3 runnable (icewind_dale_demo, baldurs_gate_chapters_1_2_demo, arcanum_demo/deus_ex_demo; pirates_2004 needs BIGMEM) -- browser slot requested 08:14. Known pre-existing test failures (not lazy): test-heroes3-demo-gameplay, test-icewind-dale-demo, test-baldurs-gate-demos (compile-wat unknown global).
  Done: Every hand-written game entry lazy where it helps; before/after bytes for the biggest; no route regressions; commits on main.
  Evidence: lib/apps.js; docs/lazy-sync-*.md

- [x] DirectAnimation for the CORBIS-family screensavers (scr_corbis, fashion, horror, wotravel)
  id: GLD3D-DIRECTANIMATION-20261006
  status: done
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  created: 2026-10-06T06:08:40.537Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: all four CORBIS-family savers render on software and in the browser (runs 20261006T0620Z/0640Z-<app>-w4); blocker was the missing skia-canvas prebuilt.
  Done: The four savers render their photo/scene on software and WebGL with reviewed screenshots; commits on main.
  Evidence: docs/gl-d3d-corpus-status.md; memory project_corbis_directanimation

- [x] GL/D3D goal slice: Direct3D Immediate Mode (d3dim) family on software + WebGL
  id: GLD3D-D3DIM-SLICE-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da
  created: 2026-10-06T05:08:35.710Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: all d3dim rows have software + WebGL status (board 05:57-07:21); 90b58434 thread stack reserve (Zuma loads). Follow-up: Zuma click-to-play.
  Done: Every d3dim-family app has software + WebGL status with run ids; fixed apps have reviewed screenshots and commits on main.
  Evidence: docs/gl-d3d-corpus-status.md; tools/gfx-app-census.js --family=d3dim

- [x] GL/D3D goal slice: Direct3D 8 family on software + WebGL
  id: GLD3D-D3D8-SLICE-20261006
  status: done
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  created: 2026-10-06T04:51:38.031Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: d699e4df heap fix -> alien_shooter gameplay; crimsonland gameplay; wc3 D3D8 path menu sw+WebGL; generally not d3d8. Rows posted to claude:1863d2b5.
  Done: Every d3d8-family app has software + WebGL status with run ids; fixed apps have reviewed screenshots and commits on main.
  Evidence: docs/gl-d3d-corpus-status.md; tools/gfx-app-census.js --family=d3d8

- [x] GL/D3D goal slice: OpenGL family on software + WebGL
  id: GLD3D-OPENGL-SLICE-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da
  created: 2026-10-06T04:08:08.120Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: warcraft3_demo, quake2_demo, halflife_uplink, ptct, simgolf_demo render on software and WebGL (run ids on the board 04:20/04:58/05:05); no correctness blocker in the GL family.
  Done: Every gl-family app has software + WebGL status with run ids in the shared table; fixed apps have reviewed screenshots and commits on main.
  Evidence: docs/gl-d3d-corpus-status.md; tools/gfx-app-census.js --family=gl

- [x] New game: Aliens versus Predator Marine demo (Rebellion 1999, Direct3D) to gameplay
  id: NEW-GAME-AVP-MARINE-DEMO-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T07:31:00.000Z
  Next: Done: before-fire vs firing-muzzle-flash reviewed by orchestrator; ca4c57e9+2bb0c1bd on main. Open: browser, audio, FPS.
  Done: Registered app reaches the level with the marine moved by input; reviewed evidence with candidateId = app id; commits on main.
  Evidence: scratch/runs/20261006T073600Z-avp-marine-demo-gameplay (reviewed)

- [x] New game: Alien vs Predator Alien demo (Rebellion 1999, Direct3D) to gameplay
  id: NEW-GAME-AVP-ALIEN-DEMO-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T06:22:21.062Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done narrowly: no-input vs turned-left reviewed by orchestrator; ec58524f+14989d87+dc6c198b on main. OPEN: holding Up 30+ batches turns the 3D view black (open-black-after-forward.png) — follow-up needed; browser, audio, FPS.
  Done: Registered app reaches the level with the alien moved by input; reviewed evidence with candidateId = app id; commits on main.
  Evidence: scratch/runs/20261006T065000Z-avp-alien-demo-gameplay (reviewed)

- [x] New game: Colin McRae Rally demo (Codemasters 1998, Direct3D) to gameplay
  id: NEW-GAME-COLIN-MCRAE-RALLY-DEMO-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T05:54:06.190Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: no-input-control vs throttle-held reviewed by orchestrator; 801d94f2+3b488478 on main. Open: browser, audio, FPS.
  Done: Registered app reaches a stage with the car moving under input; reviewed evidence with candidateId = app id; commits on main.
  Evidence: scratch/runs/20261006T061500Z-colin-mcrae-rally-demo-gameplay (reviewed)

- [x] New game: Dark Reign demo (Activision 1997 RTS) to gameplay
  id: NEW-GAME-DARK-REIGN-DEMO-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T04:51:25.486Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: no-order-control vs rig-moved reviewed by orchestrator; c8b9005e..8f361e50 on main. Open: browser, audio, FPS.
  Done: Registered app reaches a mission with a unit moved by input; reviewed evidence with candidateId = app id; commits on main.
  Evidence: scratch/runs/20261006T052600Z-dark-reign-demo-gameplay (reviewed)

- [x] New game: Atlantis: The Lost Tales demo (Cryo 1997) to gameplay
  id: NEW-GAME-ATLANTIS-DEMO-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T04:09:00.281Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: scene-before vs scene-turned-left reviewed by orchestrator; 4fa1f20b+49e250ad+1c9b1267 on main. Open: browser, audio, FPS.
  Done: Registered app reaches the first playable scene with input moving the view/character; reviewed evidence with candidateId = app id; commits on main.
  Evidence: scratch/runs/20261006T045000Z-atlantis-demo-gameplay (reviewed)

- [x] New game: Atomic Bomberman demo (Interplay 1997, DirectDraw) to gameplay
  id: NEW-GAME-ATOMIC-BOMBERMAN-DEMO-20261006
  status: dropped
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T04:05:32.774Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: DROPPED 2026-10-06 04:2x as a near-duplicate of the registered atomic_bomberman_june_demo (BM95DEMO.EXE, June 1997). This folder is the earlier 'Alpha Release Demo' (_BOMB.EXE, Apr 1997, 301,056 bytes). It needs no emulator fixes: CLI with --vfs-include='*,DATA/**/*' --batch-size=50000 and Enter every 2000 batches goes through the Interplay/Hudson logos, main menu, input selection, options and a match; the arrow keys move the white bomber (A/B against a no-key control: only its rect differs). Not registered.
  Done: Registered app reaches a match with a bomber moved by input; reviewed evidence with candidateId = app id; commits on main.
  Evidence: scratchpad captures only (no result.json; not registered)

- [x] nfs3_glide_demo / diablo2_glide_demo trap: Glide draws/clears before grSstWinOpen
  id: GLIDE-DRAW-BEFORE-OPEN-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T03:46:35.217Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: cfdf0368+b007cf57 — CLI-only cause (run.js gave the WebGL Glide bridge no canvas); nfs3_glide_demo reaches the race and diablo2_glide_demo the main menu headless. Browser path unchanged.
  Done: nfs3_glide_demo and diablo2_glide_demo no longer trap in the crash sweep; regression test; NFS III Glide race + Diablo II menu screenshots reviewed.
  Evidence: docs/crash-sweep-20261006.md; src/09a8h-glide.wat

- [x] D3D9 unit tests failing on clean main (adapter parent retain, color-surfaces, constants, fixed-cache, psize, shader-objects, shader-retention-oom, ...)
  id: D3D9-PREEXISTING-TEST-FAILURES-20261006
  status: done
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  created: 2026-10-06T03:46:35.217Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 10/12 fixed (regressions 1b5f2208, 5a1d9430; stale tests a81b6c42, e4fd56e5); left: software ps_1_4 (never implemented) and typed-gpu (browser test). 77/78 d3d suites pass.
  Done: All test-d3d9-*.js pass on main or each remaining failure is documented as stale with reason.
  Evidence: board 2026-10-06T03:46:02 claude:1863d2b5

- [x] GL/D3D goal slice: the Direct3D Retained Mode cluster (scr_* screensavers + DX SDK d3drm samples)
  id: GLD3D-D3DRM-CLUSTER-20261006
  status: done
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  created: 2026-10-06T02:14:12.830Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: all 7 Plus!98 savers + DX SDK d3drm samples have software + WebGL rows (a0e96e5d and board 04:12).
  Done: Every d3drm-family app has a recorded software + WebGL status with run ids; fixed apps have reviewed screenshots and commits on main.
  Evidence: tools/gfx-app-census.js; docs/re-notes/dx-sdk-d3drm-samples.md; GLD3D-CORPUS-27-20261006

- [x] Ops dashboard redesign: fun dark theme, solid UX, laptop + phone
  id: OPS-DASHBOARD-REDESIGN-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da
  created: 2026-10-06T03:06:47.828Z
  requested-by: user via Telegram ("Lets do more fun dark theme just with solid UX")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: f38937a6 + 1bc629a9 (cyberpunk HUD) + 406f5227 (display names) live on wine-ops; orchestrator reviewed laptop/phone shots scratch/runs/20261006T0335Z-ops-cyberpunk-shots; sent to user.
  Done: New design live on the dashboard at 1440x900 and 390x844 with screenshots reviewed by the orchestrator; ops *.test.js no new failures; no horizontal scroll on phone.
  Evidence: scratch/runs/20261006T0335Z-ops-cyberpunk-shots (laptop 1440x900 + phone 390x844, overflowX=0); scratch/runs/20261006T0321Z-ops-redesign-shots (first pass); ops non-browser tests 240/240; scratch/ops-design-review-20261006/REVIEW.md

- [x] Registry-wide headless crash sweep and fixes
  id: SWEEP-CRASHES-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da
  created: 2026-10-06T02:14:12.830Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Completed dated startup crash table/fixes. WinBoard CreatePipe blocker was subsequently resolved with real pipe/child support and reviewed engine reply, including Threads-on browser2dab96f8. Documentation reconciled October7; later full271-app dual-mode sweep and picture-split follow-ups remain dated startup evidence, not universal gameplay proof.
  Done: Ranked crash table committed under docs/ with run ids; top crashers fixed with tests and commits on main; remaining crashes listed with the blocking API/trap.
  Evidence: lib/apps.js; tools/startup-modal-sweep.js; tools/block-exec-sweep.js

- [x] New-game lane: Die by the Sword demo
  id: NEW-GAME-DIE-BY-THE-SWORD-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T00:58:16.457Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle vs W-walk frames reviewed by orchestrator; 526e376c on main (no emulator change). Open: 3D hardware (Glide) path, audio, FPS, browser.
  Done: Working launch, reviewed player-controlled gameplay, screenshot + run/source identity, commit on main.
  Evidence: scratch/runs/20261006T040000Z-die-by-the-sword-demo-quest-walk; docs/re-notes/die-by-the-sword-demo.md; main 526e376c.

- [x] AOE cursor invisible
  id: AOE-CURSOR-INVISIBLE-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T02:51:01.101Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 71845fe9 (DDERR_NOCLIPPERATTACHED) + aoe2 91bbc717/a87fced6; orchestrator reviewed aoe1 + aoe2 cursor frames; browser re-check queued.
  Done: Cursor visible in the browser for aoe1 (and aoe2 if same), reviewed screenshot, fix + test on main.
  Evidence: scratch/runs/20261006T033000Z-aoe1-cursor-getclipper (before/after primary), scratch/runs/20261006T034500Z-aoe2-dplay4w-cursor; commits 71845fe9 (GetClipper DDERR_NOCLIPPERATTACHED), 91bbc717 (Unicode IDirectPlay4), a87fced6 (aoe2 manifest), c99527a8 (re-notes)

- [x] New-game lane: Delta Force demo
  id: NEW-GAME-DELTA-FORCE-DEMO-20261006
  status: done (15e69c5dd registered; mission 1 mouse-look + walk past CP ALPHA vs control; reviewed by orchestrator)
  candidate: win98-games-a-d/Delta Force-demo-SWonly (InstallShield 5 SETUP.EXE + data1.cab; NovaLogic 1998, software renderer)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T02:36:35.055Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Result (2026-10-10T03:15Z): GAMEPLAY reached and input proven; registered delta_force_demo on main 15e69c5dd (+ re-notes delta-force-demo.md). Route: Accept Soldier (318,438) at 400k, Single Player (320,162) at 600k, mission 1 by ~750k; tick-ms:5 at 650k. Input arm (mouse-look down + Up/W) passes CP ALPHA -> CP BRAVO and is shot by 860k; control stays on the sky at CP ALPHA (75% pixels differ). The 10-06 spin-park stall no longer reproduces (both arms reach the menu); the in-game freeze at 200 ms/batch is a fixed-timestep catch-up spiral under the headless clock, not an emulator bug. Evidence scratch/runs/20261010T0310Z-delta-force-demo-gameplay. WIP branch claude/deltaforce-20261006 not needed. FPS/audio/browser separate.
  Evidence: scratch/runs/20261010T0310Z-delta-force-demo-gameplay/result.json
  Next: PARKED again 2026-10-06 03:58 — the spin_work_max fix does NOT hold: Delta Force's logo/loader loop still parks 659x/1500 batches at any work threshold (1..64 blocks, and with $page_ft fall-throughs added), so between its 8 consecutive empty peeks the main thread really runs <=1 block, yet with --no-spin-park the same loop shows ~13 peeks/batch with ~1500 blocks each (1275 PeekMessage + 20 GetTickCount + 20 Lock/Unlock per 100 batches, time-paced logo fade). The guest's loop shape differs once parked; next step is to trace the main loop body (0x416461 / pump 0x47a2bc and its callers) in both arms, not to tune the threshold. Fix commits stay local only (branch claude/deltaforce-20261006 in scratch/claude-dbts-wt, NOT on main). Installed tree + menu route as recorded above.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: (pending)

- [x] New-game lane: Disciples demo
  id: NEW-GAME-DISCIPLES-DEMO-20261006
  status: done
  candidate: win98-games-a-d/Disciples demo SW (DisciplesDemo.exe, 37MB, likely a self-extracting installer)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T01:51:49.941Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle map vs city-screen frames reviewed by orchestrator; 203a2fb0+b7d99d22 on main. Open: browser exeGuestPath check, audio, FPS.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/runs/20261006T030000Z-disciples-demo-city (reviewed; installed by its own setup in the emulator; double-click capital opens city management vs idle map), commits 203a2fb0 (fixes + tests) and b7d99d22 (registry + exeGuestPath) on main, docs/re-notes/disciples-demo.md

- [x] New-game lane: Daytona USA Deluxe demo
  id: NEW-GAME-DAYTONA-USA-DELUXE-20261006
  status: done
  candidate: win98-games-a-d/DaytonaUSA Deluxe-SWonly/GAME (DAYTONA USA Deluxe Demo WWW.exe, unpacked, DDraw/DInput/DSound, ddse.dll/dpctrl.dll)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T01:24:11.695Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle 0 mph vs gas 163 mph race frames reviewed by orchestrator; 94d6875e+58b6d9c8 on main. Open: audio, FPS, browser.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/runs/20261006T015500Z-daytona-usa-deluxe-demo-race (reviewed; X=gas reaches 163 mph vs idle 0 mph on the grid), commits 94d6875e (4 fixes + tests) and 58b6d9c8 (registry) on main, docs/re-notes/daytona-usa-deluxe-demo.md

- [x] New-game lane: Dark Colony demo
  id: NEW-GAME-DARK-COLONY-20261006
  status: done
  candidate: win98-games-a-d/DarkColony-MagDemo-SW (dc.exe, unpacked, DDraw/DInput/DSound)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T01:10:49.689Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle vs Build (Trooper exits base) and scroll frames reviewed by orchestrator; 08605900 on main. Open: audio, FPS, browser.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/runs/20261006T014500Z-dark-colony-demo-build-scroll (reviewed; Space builds a Trooper out of the base, Right arrow scrolls the map, vs idle arm), commit 08605900 on main, docs/re-notes/dark-colony-demo.md

- [x] New-game lane: Die by the Sword demo
  id: NEW-GAME-DIE-BY-THE-SWORD-20261006
  status: done
  candidate: win98-games-a-d/Die by the sword demo-SW+Glide (dbts_demo.exe)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T00:58:00Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: none (FPS, audio, browser, Glide renderer are separate).
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/runs/20261006T040000Z-die-by-the-sword-demo-quest-walk (reviewed; software renderer, W walks Enric across the Quest hut vs idle control), commit 526e376c on main, docs/re-notes/die-by-the-sword-demo.md

- [x] New-game lane: original Arena dungeon controls
  id: NEW-GAME-ARENA-20261005
  status: done
  candidate: gog-free-elder-scrolls-arena
  owner: /root/restore_evidence
  Next: Qualified dungeon/right/left/idle with ordinary input,107hashes independentlyverified; findings57e1a949 integrated/pushed9df4dc30. Refilled with Tomb Raider III. Generic GAMEPLAY-gog-free-elder-scrolls-arena retains FPS criterion in review; no full-game/audio/reload-persistence claim.
  Done: Working original launch, actual player-controlled dungeon and reviewed screenshot/run identity on main.
  Evidence: scratch/runs/20261005-arena-dungeon-controls; docs/re-notes/elder-scrolls-arena-gog.md; main9df4dc30; Telegram490.

- [x] Separate DOS/ToyVM corpus with polished main-dashboard integration
  id: TOYVM-DOS-CORPUS-DASHBOARD-20261005
  status: done
  owner: claude:1863d2b5
  created: 2026-10-05T21:19:06.823Z
  requested-by: user via Telegram; explicitly assigned to Claude
  Next: Done: integrated by claude:1863d2b5 as main 550d7d4a after browser-verify 18/18 PASS (scratch/runs/20261005T223531Z-toyvm-dos-corpus-browser); Ultima IV ToyVM probe reached the title screen.
  Done: Separate original DOS corpus visible and linked in main web dashboard; supported links launch correct ToyVM route, unsupported states give concrete reasons. Required/lazy asset behavior and usable delayed loading/error/retry UX verified at desktop/mobile with keyboard access; meaningful tests and scoped commits integrated to remote main. Registration alone is not gameplay qualification. No public deployment.
  Evidence: User Telegram instruction; Claude pane%4/session1863d2b5; forthcoming scoped implementation and browser receipts.

- [x] New-game lane 1: Blood 2 demo (LithTech, D3D)
  id: NEW-GAME-BLOOD2-DEMO-20261006
  status: done
  candidate: win98-games-a-d/Blood2-demoD3D (InstallShield setup + Game/ payload; Monolith LithTech 1998, D3D)
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-06T01:26:44.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle/turn/fire strip reviewed by orchestrator (ammo 50->46); 8d70691a+1cb3a7ea on main. Open: audio, FPS, browser.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: main 8d70691a (LoadLibrary maps static imports first; DirectInput custom data formats; StringFromIID) + 1cb3a7ea (blood2_demo registration, docs/re-notes/blood2-demo.md); runs scratch/runs/20261006T015805Z-blood2-demo-app-route (reviewed: menu->level, turn, fire ammo 50->46) and scratch/runs/20261006T015102Z-blood2-demo-walk (walk out, enemy fire to death)

- [x] New-game lane: Commandos: Behind Enemy Lines demo (Pyro 1998, software 2D RTS)
  id: NEW-GAME-COMMANDOS-DEMO-20261006
  status: done
  candidate: win98-games-a-d/commandos-demo-SWonly.exe (WinZip self-extractor; local, no download)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T02:54:16.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 06-selected vs 07-after-move-order reviewed by orchestrator (commando walked to click); audio OK at data level. Open: browser route check, FPS.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: main 840f0eed (commandos_demo registration, manifest generator entry, corpus-categories strategy row, docs/re-notes/commandos-demo.md) + 9534375f (dropdown option); run scratch/runs/20261006-commandos-demo-move (reviewed: welcome, menu, briefing, mission, portrait select, move order with footprints).

- [x] New-game lane: Age of Wonders demo (Triumph 1999, software 2D turn-based strategy)
  id: NEW-GAME-AGE-OF-WONDERS-DEMO-20261006
  status: done
  candidate: win98-games-a-d/Age Of Wonder I demo-SW.EXE (InstallShield self-extractor; local, no download)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T03:29:25.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 08-party-selected vs 10-party-moved reviewed by orchestrator; 44b311d2+f04fcc5e on main. Open: audio, FPS, browser.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: main 44b311d2 (OFT-less Borland imports bind to loaded DLLs; OBM_CHECKBOXES) + f04fcc5e (virtualAllocTop knob, age_of_wonders_demo registration, docs/re-notes/age-of-wonders-demo.md); run scratch/runs/20261006-aow-demo-move (reviewed).

- [x] GLD3D WebGL column: browser spot checks of the GL/D3D set
  id: GLD3D-WEBGL-COLUMN-20261006
  status: done
  note: 2026-10-06T20:20Z WebGL column measured in the page at the current build for every confirmed GL/D3D row (or an explicit reason): 73c86d62 + 213c1475, evidence scratch/runs/20261006T1840Z-gld3d-webgl/ and 20261006T1935Z-gld3d-webgl-recheck/. Follow-ups split out: HL-UPLINK-WEBGL-BLACK-20261006, TR3-PAGE-ENTER-20261006, D3DIM-ASYNC-PBO-WARN-20261006.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-06T04:07:45.000Z
  blocker: needs a browser grant (--headless-gl unavailable on this box: no @node-3d deps, no DISPLAY)
  Next: Completed October6 spot-check table73c86d62/213c1475; later TR3 route48ffb5e5 and Uplink5f4bac8c reconciled October7. Removed browser-grant blocker is historical. PBO warning and aggregate gameplay gaps remain separate tasks.
  Done: WebGL column of docs/gl-d3d-corpus-status.md measured at a current build for every confirmed GL/D3D app (or an explicit reason per row), reviewed screenshots, result.json per run.
  Evidence: docs/gl-d3d-corpus-status.md; board 2026-10-06T04:06:12 request

- [x] Half-Life Uplink is black in the page at 60 s (WebGL column regression)
  id: HL-UPLINK-WEBGL-BLACK-20261006
  status: done
  note: 2026-10-06T21:00Z fixed 5f4bac8c: MCI lazy park now IO wait; subclassed WAT dialog buttons get queued mouse. Page+lazy+WebGL reaches gameplay. Evidence scratch/runs/20261006T2100Z-hl-uplink-lazy-mci.
  note: 2026-10-06T20:27Z assigned to claude:1863d2b5 by the orchestrator (before the PBO warnings).
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (assigned by orchestrator 2026-10-06T20:19Z)
  created: 2026-10-06T20:20:00Z
  Next: Complete on main5f4bac8c: MCI lazy IO park and subclassed-button delivery repaired. Retained4-gameplay-webgl-lazy.png shows corridor/HUD; browser smoke PASS. Root reviewed image October7; no repeat black-screen investigation.
  Evidence: scratch/runs/20261006T1935Z-gld3d-webgl-recheck/c/hl-60s.png, hl-1.console

- [x] Tomb Raider III never leaves its title in the page although Enter reaches the guest
  id: TR3-PAGE-ENTER-20261006
  status: duplicate (of TR3-WEB-TITLE-INPUT-20261006, owner claude:202b4b39)
  owner: unowned
  created: 2026-10-06T20:20:00Z
  Next: Duplicate resolved by TR3-WEB-TITLE-INPUT-20261006 and main48ffb5e5. Actual page Jungle plus ordinary movement captured; prior title-only probe was route timing. Root re-reviewed before/after images October7; no input fix needed.
  Evidence: scratch/runs/20261006T1840Z-gld3d-webgl/tomb_raider_3_demo-b.png, tomb_raider_3_demo.console

- [x] D3DIM async-flip PBO trips Chrome "READ-usage buffer written again before being read back"
  id: D3DIM-ASYNC-PBO-WARN-20261006
  status: done (2026-10-10, claude:1863d2b5; reviewed by orchestrator)
  note: 2026-10-10T01:55Z closed: Chrome-side, not ours. Receipt bb46d016 (ops/handoffs/pbo-chrome151-reproduction-20261007.json): a standalone 4x4 WebGL2 page in Chrome 151 warns with correctly ordered readPixels->fence->getBufferSubData and correct pixels/GL_NO_ERROR. Attribution: 6 warnings over two 4-frame cases = one per buffer REUSE (3+3), including the case that clientWaitSync'd SIGNALED before reading -- so no ordering or fence-wait change in lib/d3dim-gpu.js removes it. Emulator trace: 216 writes/215 reads, zero overwrite violations. Only workaround would be a fresh PBO per readback (unmeasured benefit); not done. Recheck on a later Chrome.
  note: 2026-10-06T21:25Z parked at WIND-DOWN, not started. Next: page probe on MW3 menu wrapping the D3DIM executor's readPixels/fenceSync/getBufferSubData (lib/d3dim-gpu.js asyncFlip path) to find which PBO is written again before its readback; likely reuse of one PIXEL_PACK_BUFFER across flips while an earlier read is inflight -> ring of PBOs or wait on the fence before reuse.
  note: 2026-10-06T20:25Z claude:1863d2b5 claimed: code read finds no write-before-read path; next a page probe wrapping readPixels/fenceSync/getBufferSubData on MW3's live context (browser queue).
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (assigned by orchestrator 2026-10-10T01:35Z, Claude track RESUME)
  prev-owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (my change, fcfa4989) (fleet stopped)
  created: 2026-10-06T20:20:00Z
  Next: Warning isolated outside emulator: Chrome151 standalone4x4 WebGL2 yields six identical warnings despite8 correct pixel readbacks/GL_NO_ERROR. Matching browser source retains readback shadow allocation in GetBufferSubDataCHROMIUM path. Emulator trace216writes215reads has zero overwrite violations; one pending at capture end. No speculative renderer fix. Browser warning remains; no user input required. Recheck after browser-side correction; performance impact unmeasured. Receipt ops/handoffs/pbo-chrome151-reproduction-20261007.json.
  Evidence: scratch/runs/20261006T1935Z-gld3d-webgl-recheck/c/mw3-2.console

- [x] New-game lane: Atlantis: The Lost Tales demo (Cryo 1997, software 3D adventure) -- DUPLICATE, superseded
  id: NEW-GAME-ATLANTIS-DEMO-20261006
  status: superseded
  candidate: win98-games-a-d/ATLANTIS demo SW/ATLANTIS.EXE (unpacked; local, no download)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T04:23:28.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: None. Duplicate of the same-id record owned by claude:202b4b39 (status done: 4fa1f20b+49e250ad+1c9b1267 on main, evidence scratch/runs/20261006T045000Z-atlantis-demo-gameplay). claude:d10ba697 dropped this pick on the board at 2026-10-06T04:43:23 (OVERLAP line) when the overlap was found; no work of its own to merge.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: see the claude:202b4b39 record of this id

- [x]DOS

## Coordinated migration queue — 2026-10-01

Historical sections below are preserved; they are not automatically ready work.
Coordinator: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5.
Resource and acknowledgment ledger: `ops/handoffs/orchestrator-status.md`.

**No product decision needed for current independent work.** FP comparisons and
result download are complete. REP final validation remains blocked by automated
review. Codex handoff reconciliation is
complete, including one explicitly reconstructed documentary handoff. All five Claude migration handoffs are received and local claims released.
Core migration is verified; bulk archives continue independently. Foreign remote
resources remain unverified. Existing correctness/review blockers remain.

- [x] Receive in-scope Codex handoffs and reconcile resource ownership
  id: MIG-HANDOFF
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  started: 2026-10-01T23:44:20Z
  Next: complete; eight root handoffs accepted plus one reconstructed Codex handoff. Five Claude roots deferred; preserve unverified jobs and their ownership.
  Done: all in-scope Codex custody documented without inferring process termination.
  Evidence: ops/handoffs/initial-inventory.md; ops/handoffs/orchestrator-status.md.

- [x] Review and verify released dashboard blocker workflow
  id: MIG-OPS
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  started: 2026-10-01T23:45:00Z
  Next: complete; UTF-8 regression passes. Ops owner reloaded8098 with CPU/RSS work,10/10tests and browser/live checks pass; Unicode fix active.
  Done: bounded review and relevant tests recorded, defects fixed or explicitly queued.
  Evidence: ops/handoffs/ops-dashboard.md; ops/handoffs/mig-ops-review.md.

- [x] Verify existing PCP artifact correctness
  id: MIG-FP
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  started: 2026-10-01T23:45:00Z
  Next: complete; 400 sequences/14834ops pass, 264 preserved files unchanged. Native/game gates remain.
  Done: parity result and remaining native/game gates recorded.
  Evidence: ops/handoffs/fp-next-root.md; ops/handoffs/mig-fp-parity.md.

- [x] Review remaining Serious Sam production integration
  id: MIG-SAM
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  started: 2026-10-01T23:45:00Z
  Next: complete; timer TLS/SEH isolation recommended after frozen replay, preserve mixed-file ownership.
  Done: precise next task with ownership boundaries and validation; goal remains incomplete.
  Evidence: ops/handoffs/01a0f6ff-da61-7710-a604-d9442103dbbd.md; ops/handoffs/mig-sam-review.md.

- [x] Receive NFS2 and IS3 migration handoff
  id: MIG-NFS2
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Migration custody complete; all five Claude handoffs read and local claims released. Unfinished engineering remains separately queued.
  Done: Owner handoffs received and local sessions exited; no foreign remote-service termination inferred.
  Evidence: ops/handoffs/migration-core-ready-20261003.md; ops/handoffs/claude-migration-5e92d715.md; ops/handoffs/claude-migration-wine-assembly-d0.md; ops/handoffs/claude-migration-toyvm-uop-88bbcb9f.md; ops/handoffs/claude-migration-sc2k-compare-agent.md

- [x] Verify handed-off renderer specular correction in isolated candidate
  id: MIG-RENDER
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Next: complete; fixed72 and actual shared-worker WebGL/native software pass after narrow fog correction. Broader migration remains incomplete.
  Done: unchanged analytical expected pixels pass; exact tested module/source evidence retained.
  Evidence: ops/handoffs/01a0eb29-4302-7e20-9b06-7084fb37358b.md; ops/handoffs/mig-render-validation.md.

- [x] Correct generated fixed fog/specular guard without widening guest support
  id: MIG-RENDER-FOG
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: complete; unchanged analytical fog/specular pixels pass and both mixed guest/generated negative checks reject.
  Done: existing analytical fog/specular pixels pass while unsupported guest/mixed paths remain rejected.
  Evidence: ops/handoffs/mig-render-fog-review.md; ops/handoffs/mig-render-validation.md.

- [x] Prepare coherent texture-registry validation snapshot
  id: MIG-RENDER-TEXTURES
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: complete;9/9 gates PASS,144 protected hashes unchanged,12file manifest/backups/logs downloaded and own jobs cleaned. Separate Q2 route assigned; empty-quad excluded.
  Done: registry/lowering/GL/Glide correctness checks on identified source, or concrete failing gate recorded before further migration.
  Evidence: ops/handoffs/mig-render-textures-validation.md; scratch/mig-render-textures-validation-20261002/result.json.

- [x] Validate Q2 world and movement with shared texture registry
  id: MIG-RENDER-Q2
  candidate: quake-2-demo-installer
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: complete; reviewed textured world and scripted-W framechangePASS6205colors/40457pixels. Physical traversal unproven;284source hashes stable, no budget rejection on this route. Own jobs cleaned, remote slot released.
  Done: reviewed world/movement images, registry budget behavior and exact tested identities; or concrete failure. No performance acceptance or merge.
  Evidence: ops/handoffs/mig-render-q2.md; scratch/runs/20261002T010210Z-quake-2-demo-installer-mig-render-registry/result.json.

- [x] Replay Serious Sam production TLS diagnostic artifact to intro
  id: MIG-SAM-REPLAY
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: bounded replay complete with FAILED visual criterion: near-black87000 despite quitfalse/credits0. Follow-up paired replay assigned; production TLS visual pass remains unproven.
  Done:87000 intro state and reviewed capture, or concrete failure evidence; stop only own new run.
  Evidence: ops/handoffs/mig-sam-review.md; ops/handoffs/mig-sam-replay.md.

- [x] Isolate Serious Sam near-black intro checkpoint
  id: MIG-SAM-VISUAL
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: complete; both87000/90000 images byte-identical across405db/363d, brightGODGAMES90000, hosts unchanged and both runs stopped. Earlier black frame is transition.
  Done: frame-phase versus module difference recorded with reviewed paired evidence; no unsupported TLS blame.
  Evidence: ops/handoffs/mig-sam-replay.md.

- [x] Capture matching FP native code on dedicated x64 box
  id: MIG-FP-NATIVE-X64
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: complete; six captures/30function records/121download hashes verified. Both engines retain spilled countdown; no speed claim. ARM64 remains next after local slot release.
  Done: captures downloaded and reviewed with tier/engine/hash provenance; no speed claim.
  Evidence: ops/handoffs/mig-fp-native-plan.md; ops/handoffs/mig-fp-native-x64.md.

- [x] Capture matching FP native code on local ARM64
  id: MIG-FP-NATIVE-ARM64
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: complete; six captures/30functions/input hashes verified. Countdown remains spilled; affected Ion fast frames shrink16bytes. CPU released, version differences retained; no speed claim.
  Done: actual disassembly reviewed with version/tier/module provenance; no timing conclusion.
  Evidence: ops/handoffs/mig-fp-native-plan.md; ops/handoffs/mig-fp-native-arm64.md.

- [x] Restore missing MW3 assets and verify frozen P browser baseline
  id: MIG-FP-BROWSER-BASELINE
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: complete;43assets verified, cockpit and3windows PASS;23artifacts downloaded/hash matched, source stable and own jobs cleaned. CDP SwiftShader contradicts endpointIntel string; diagnostic evidence only.
  Done: reviewed gameplay route or concrete failure with exact source/module/renderer provenance; no variant timing campaign or EPYC comparison.
  Evidence: ops/handoffs/fp-next-root.md; ops/handoffs/mig-fp-browser-baseline.md.

- [x] Prepare existing FP copied-kernel comparison recipe
  id: MIG-FP-KERNEL-PLAN
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: complete;112frozen inputs pinned and exact3pair recipe reviewed. MIG-FP-KERNEL assigned on dedicated ASCII host after quiet preflight.
  Done: concrete recipe with MIXED_CONTROL census guard and explicit mixed-kernel versus pure-path/gameplay coverage limits; no new variant/default change.
  Evidence: ops/handoffs/fp-next-root.md; ops/handoffs/mig-fp-native-arm64.md; ops/handoffs/mig-fp-native-x64.md.

- [x] Prepare matching FP native-code capture commands
  id: MIG-FP-NATIVE-PLAN
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: plan complete; local captures wait for Serious Sam CPU release, remote prerequisites need separate verification.
  Done: executable matching P/PCM/PCP V8/Ion capture plan with prerequisites explicit.
  Evidence: ops/handoffs/mig-fp-native-plan.md.

- [x] Audit incoming owner evidence and missing handoffs
  id: MIG-OWNERS
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: audit complete; nine original roots still lack durable handoffs, keep individual blockers open.
  Done: received/released/retained resource distinctions and ready candidates recorded without runtime disturbance.
  Evidence: ops/handoffs/mig-ownership-audit.md.

- [x] Receive Pirates Worker sailing handoff
  id: MIG-PIRATES
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Next: handoff accepted; preserve8159, review exact StretchRect/Worker hunks before game-path validation.
  Evidence: ops/handoffs/01a0f736-78f1-7822-8b37-159d6f8ed94d.md.
  Done: accepted handoff and safe next task.

- [x] Verify Pirates actual-game rectangular StretchRect path
  id: MIG-PIRATES-STRETCH
  candidate: pirates-2004
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: bounded route complete with INCONCLUSIVE transfer outcome; guest stopped after captain before any transfer. Root reviewed image and verified58artifact hashes;143inputs unchanged. Cause unresolved; no rerun assigned.
  Done: opcode0x30015 and ordered source readback observed with reviewed game captures, or concrete route failure. A zero-transfer sailing pass is insufficient; white terrain remains separate.
  Evidence: ops/handoffs/mig-pirates-stretch.md; scratch/mig-pirates-stretch-20261002/result.json.

- [x] Complete MMX root resource audit
  id: MIG-MMX
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Next: durable root/three-child handoff acknowledged; preserve notes/artifacts/server58114, no slower default enabled and no new optimization campaign assigned.
  Evidence: ops/handoffs/01a0eef4-21b2-76b3-8352-48b0d6ac6e7f.md.
  Done: checkpoint accepted, remaining work scoped from owner evidence.

- [x] Receive remaining Claude migration handoffs and Codex coordination history
  id: MIG-LEGACY
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Migration custody complete; all five Claude handoffs read and local claims released. Unfinished engineering remains separately queued.
  Done: Owner handoffs received and local sessions exited; no foreign remote-service termination inferred.
  Evidence: ops/handoffs/reconstructed-remaining.md; ops/ORCHESTRATOR.md.

  Evidence: ops/handoffs/migration-core-ready-20261003.md; ops/handoffs/claude-migration-5e92d715.md; ops/handoffs/claude-migration-wine-assembly-d0.md; ops/handoffs/claude-migration-toyvm-uop-88bbcb9f.md; ops/handoffs/claude-migration-sc2k-compare-agent.md

- [x] Revalidate transferred bounded wave capability writes
  id: MIG-AUDIO-CAPS
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Next: complete;920ABI/input/full isolatedbuildPASS, committedcd50cfdf only4ownedpaths; foreign timeSetEvent hunk preserved.
  Done: current920-case caps and existing input suite validated, isolated/full build identity recorded, report finished and only owned hunks integrated.
  Evidence: ops/handoffs/01a04d26-4255-7ee2-bb58-9e2cbedb68df.md; ops/handoffs/mig-audio-caps.md.

- [x] Integrate persistent multimedia timer TLS and SEH context
  id: MIG-SAM-TIMER
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: complete; new context fixture plus five regressions and static gates PASS. Narrow source additions preserved uncommitted; private diagnostic intro replay assigned.
  Done: stable FS base, separate persistent registered callback TLS, main TLS/SEH restoration, late templates/TlsFree and waveOut regressions pass; no fault/REP/launcher expansion.
  Evidence: ops/handoffs/mig-sam-timer.md; scratch/mig-sam-timer-20261002/.

- [x] Replay production timer context in private Serious Sam diagnostic module
  id: MIG-SAM-TIMER-REPLAY
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: complete; private0c5d6ab0 matches both prior modules PNG/snapshot/GL at87000/90000;250inputs unchanged and own8147 quit0. Private fault/REP transforms remain.
  Done: exact source/module/host identity and intro result, own8147 run stopped, retained8138/8146 untouched. Current-source replay is not a timer-only A/B or gameplay completion.
  Evidence: ops/handoffs/mig-sam-timer-replay.md; scratch/runs/20261002T005200Z-serious-sam-production-timer-intro/result.json.

- [x] Scope remaining Serious Sam production fault and REP restart integration
  id: MIG-SAM-FAULT-PLAN
  candidate: serious-sam-demo
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: complete; REP-specific absent-page slice proposed, separate MOVSW and raw-SEH classifier gaps identified. New fixture/fallback audit assigned without production changes.
  Done: concrete ready or blocked steps with exact source dependencies and precise-PC strategy; no broad diagnostic instrumentation shipped.
  Evidence: ops/handoffs/mig-sam-review.md; ops/handoffs/mig-sam-timer-replay.md.

- [x] Run existing FP copied projection kernel pairs
  id: MIG-FP-KERNEL
  owner: codex:01a0f9db-07f4-71d2-9fe8-42d5efc7f642
  Next: Complete: three pairs passed correctness/census/island gates; nine downloaded evidence hashes verified,115inputs unchanged and own jobs stopped. Timing inconclusive against biased P/P control; no default change.
  Done: source/module/work identities, parity/census/island coverage and paired spread against P/P null recorded; own jobs cleaned. Mixed workload does not validate PCP pure-path benefit or game speed.
  Evidence: ops/handoffs/mig-fp-kernel.md; scratch/mig-fp-kernel-20261002/analysis.json
  status: done

- [x] Establish decoded REP sparse-fault restart regression
  id: MIG-SAM-FAULT-FIXTURE
  candidate: serious-sam-demo
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Next: complete; both diagnostic baselines expose stale blockheadPC/writekind0/repeated premarker; MOVSD also stale progress. Two immutable165file snapshots/logs retained; narrow REP correction assigned.
  Done: precise fault/progress/retry baseline evidence and MOVSW/fallback coverage limits, without weakening expected behavior or promoting diagnostic shortcuts.
  Evidence: ops/handoffs/mig-sam-fault-plan.md.

- [!] Correct REP MOVS restart on absent sparse pages
  id: MIG-SAM-REP-RESTART
  candidate: serious-sam-demo
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: incomplete handoff accepted; seven file/patch hashes verified. Matrices/regressions/zero-count/block paths pass. Corrected uop log passes with2entries/1COPYdeopt, tool exit unconfirmed. ContinueSearch, direct MOVS code-write review and final static gates remain after automated review stopped the worker.
  Done: correct single fault, first absent byte, failed-element preservation and retry at REP for widths1/2/4 DF0/1, with source identities and coverage limits. No generic fault-policy/classifier/layout changes or canonical build.
  Evidence: ops/handoffs/mig-sam-rep-restart.md; scratch/mig-sam-rep-restart-20261002/evidence-summary.json.
  blocker: Worker execution stopped by automated cybersecurity-risk flag; final validation incomplete.
  waiting-on: automated review resolution
  needs: Resolve the blocked validation step before promoting or committing this change.

- [x] Review remaining Serious Sam diagnostic fault transforms
  id: MIG-SAM-FAULT-REMAINDER
  candidate: serious-sam-demo
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Next: complete;3transforms obsolete,5generic/classifier dependencies remain. Original builder is incompatible with current REP signatures; no replay or implementation assigned until REP review gates resolve.
  Done: exact redundant versus still-needed transforms and safe next validation documented.
  Evidence: ops/handoffs/mig-sam-fault-remainder.md.

---

Snapshot of remaining work, written 2026-08-16 by picking up five Claude sessions
that ran the night of 2026-08-15 and stopped mid-flight. Each item names the
session that owns it, the files it touches, and what the *next* concrete step is.

Session transcripts live in
`~/.claude/projects/-Users-vg-Documents-projects-phone-wine-assembly/<id>.jsonl`.
Coordination history is `messageboard.txt` (append-only; entries 1180-1220 cover
this stretch).

Tree state at time of writing: HEAD `209aa00`, working tree clean, build green,
corpus sweep 106 PASS / 0 FAIL.

---

## 0. Blocking question: are the 24 e2e failures real? — ANSWERED 2026-08-16

**Answer: they are real, but they are not new, and the font commits are
exonerated.** A baseline worktree at `eff03cb^` (680db80) produced a
byte-identical fail set to HEAD across all six sampled tests, so neither
`eff03cb`/`45e58ae` nor the `WNDPROC_DIALOG` move caused any of them. Against
the session-start commit `9c49b65`: `spider-messagebox`, `find-cancel`,
`solitaire-resize` and `cwordzap-render` fail identically there too — they
predate the whole night. `mspaint-options` was *worse* at `9c49b65` (the run
did not complete at all); only its margin-gray assert is left. Only
`regedit-deep` truly regressed, bisected to `88c6a72` — seeding `HKLM\System`
gives HKLM a third child, so the tree has 10 visible rows where the test pinned
9. Expectation fixed in `48379a7`; the emulator was correct.

What is left of this item is the individual failures, each of which is now a
plain bug with no shared cause. Note also that `lib/storage.js` seeds both
`HKLM\SOFTWARE` and `HKLM\Software` and key paths compare case-sensitively, so
regedit shows two keys where Windows shows one.

The original writeup follows.

**Priority: highest. Nobody owns this yet.**

`test/run-all.sh` in the shared tree at 23:58 gave **151 passed / 27 failed**:
unit 92/2, e2e 58/24, smoke 1/1. The two unit failures are known and owned
(`test-winhelp-wat-parser`, `test-gdi-public-api-status` 245-vs-244).

**All six sampled failures are now closed** (2026-08-16). Five of the six were
tests pinned to stale geometry or to the retired JS renderer's palette — the
emulator was right and the assert was wrong. Only `test-cwordzap-render` was a
genuine emulator bug. Two reusable lessons for the rest of the 24:

1. Before believing a pixel/click assert, check the *live* geometry
   (`dump-windows`) and the Win98 classic palette (the real Plus! 98 theme
   files in `test/output/wordpad-mixed-format-roundtrip/vfs/screensavers/*.the`
   settle any color question). A coordinate hardcoded months ago is the prime
   suspect.
2. `run.js` now has `close-click:TARGET` and `corner-drag:HWND:DX:DY`, which
   derive their points from the live window rect. Prefer them over magic
   screen coordinates so the next placement change doesn't silently rot the
   test into a no-op.

Also: timing-sensitive tests (`test-mspaint-options` 9s, `test-mspaint-stretch-icons`
10s `execFileSync` timeouts) go red purely from machine load. Check `uptime`
before believing them.

The original sampled table:

| Test | Assert that fails |
|---|---|
| `test-regedit-deep` | `tree displays classic folder glyphs (0 yellow px)` |
| `test-mspaint-options` | `tool-options margin stayed button-face gray` |
| ~~`test-spider-messagebox`~~ | FIXED `dcbc468` — the assert pinned the retired JS renderer's 64,64,64 outer shadow; Win98's COLOR_3DDKSHADOW is black (every Plus! 98 `.the` ships `ButtonDkShadow=0 0 0`). Emulator was correct. Also filled in the missing `GetSysColor` indices 21/23/24. 7/7. |
| ~~`test-find-cancel`~~ | FIXED `35bb495` — the test clicked (390,72), which is inside the dialog's *client* area; the close box is x 379..395, y 45..59. Emulator was correct. New `close-click:TARGET` input action derives the point from the live window rect. 11/11. |
| ~~`test-solitaire-resize`~~ | FIXED `c7efdb6` — the test pressed 19px below the window (it assumed y=20, Solitaire opens at y=0), so it grabbed nothing. Resize itself always worked. Now drags the live corner via a new `corner-drag` input action. 3/3. |
| ~~`test-cwordzap-render`~~ | FIXED `e2503be` — **a real emulator bug**, unlike the others here: `StretchDIBits` rejected BI_RLE4/BI_RLE8 outright (`$gdi_raster_desc_from_bmi` accepts only BI_RGB/BI_BITFIELDS), so the splash drew nothing. Now decoded through the existing `$gdi_bitmap_create_dibitmap` path. 7/7. |

Most plausible sources, both of which landed **without an e2e run**:

- `eff03cb` "Delete the JavaScript text path" + `45e58ae` (fonts session; it said
  outright that the e2e tier was never run against either commit)
- the `WNDPROC_DIALOG 0xFFFE0002 -> 0xFFFF0004` move (board entry 22:30), which
  fits the `find-cancel` dialog-hwnd failures

**Next step:** run `bash test/run-all.sh e2e` at the commit *before* the font-path
deletion, in a worktree, and diff the FAIL name sets against the current run.

**Do not repeat the mistake that wasted the last attempt:** the abandoned worktree
at `~/.claude/jobs/b303255f/tmp/wt5` symlinked only `test/binaries`, so it had no
fonts and failed 83+ tests including every `test-wat-gdi-*`. Its numbers are
meaningless. Delete it. A baseline worktree needs the font assets too.

---

## 1. Win16 / NE — Phase 6: three of the four are playable, one is complete

Phase 1 (`0c23c78`) loads and links NE images, Phase 2 (`84c98a1`) runs them,
Phase 3 (`ff6f45a`, `9a0f12f`, `3b18812`, `90e548a`) gives them an API layer,
Phase 4 (`919f011`, `5e8a9f3`, `e78ba7f`, `0af03d5`) adds NE DLL loading, and
Phase 5 (`d5a09f7`) gets Hearts running.

Phase 6 (`fd04a70`, `df6b6b5`, `653da1d`, `3716c6f`, `f82cc5d`, `7f464ce`,
`72b3ba8`) makes them look right rather than merely run.

**Minesweeper is complete** — Game/Help menu, red LED counters, yellow smiley,
raised minefield. **Solitaire deals a full hand, and keeps dealing** — stock,
four foundations, seven tableau columns each with its face-up top card over a
face-down fan, hand after hand. **FreeCell deals a full board out of
CARDS.DLL** — eight columns of card faces, free cells, "FreeCell Game #2574"
in the title (it opens empty by design; Game▸New Game, command 102, deals).
**Hearts creates its frame, its status bar and its buttons, runs its message
loop, initialises DDEML and puts up a real message box.** All four are in the
browser shell under "16-bit (Win16 / NE)" (`8dc244e`), covered by
`test/test-win16-web.js`, which asserts Minesweeper's colour art, that both
card games actually deal, and that Solitaire's *second* hand is as full as its
first.

Most of the bugs behind the previously-empty tables were **not** Win16-only
and are worth knowing about for 32-bit apps too:

- `$handle_AdjustWindowRectEx` ignored `dwExStyle` while
  `$defwndproc_do_nccalcsize` honours it, so any `WS_EX_CLIENTEDGE` window
  sized through it came back four pixels narrower than the app asked for.
- `$handle_PatBlt` reads its width and height back off the stack frame rather
  than from its arguments — the Win16 bridge wrote only the rop there, so
  every 16-bit `PatBlt` filled a garbage rectangle. It is the only handler in
  the bridge that reads past argument 2; the other 97 were audited.
- `GetDeviceCaps(NUMCOLORS)` answered Win32's `-1`, which a 16-bit caller
  compares as a signed word. Minesweeper's `cmp ax,2 / jle` therefore chose
  its monochrome bitmap set and drew the whole board in 1-bit art.
- `$menu_load` and `rsrc_exists` both meant "PE resource", so no 16-bit app
  had a menu bar. An NE menu is the same MENUITEMTEMPLATE with ANSI labels.
- **A DLL's exported prologue was never patched.** `push ds / pop ax / nop` is
  three bytes the linker leaves meaning "AX = the caller's DS", and the loader
  is expected to replace them with `mov ax, DGROUP`. Without it every export
  runs on its caller's data segment and reads the caller's variables as its
  own — nothing faults, it just reads the wrong memory. CARDS.DLL found
  FreeCell's data where its card-bitmap cache should be.
- **A 16-bit task never became the active window.** WM_ACTIVATEAPP,
  WM_ACTIVATE and WM_SETFOCUS are delivered from CreateWindowExA through
  32-bit continuation thunks, which a 16-bit task cannot be resumed on.
- ShowWindow's WM_SIZE arrived *after* whatever WinMain posted, rather than
  before it as on Windows, so Solitaire dealt onto a table with no layout.
- **The local heap never reused a freed block.** `LocalFree` was a no-op and
  `LocalAlloc` a bump pointer. An app that churns — Solitaire allocates a node
  per card and frees all 28 on the next deal — exhausts a 4KB heap in two
  hands. A NULL from LocalAlloc is rarely reported by the caller, so this
  reads as a feature quietly not working rather than as an error.

The address scheme, because everything else depends on it: every segment base
is 64KB aligned, so the low word of a linear address *is* the offset inside its
segment. `$esp` therefore stays a linear address with SP as its low half, and
the pre-existing 16-bit push/pop handlers needed no changes at all.

- Files: `src/05c-seg16-ops.wat` (handlers 363-387 — segmented EA, far
  transfers, segment-register moves, string ops), `src/09e-win16-api.wat` (the
  API layer, ~70 entry points), `src/07-decoder.wat` (`$code16` inverts the
  66/67 prefixes; `$decode_modrm16`), `src/08c-ne-loader.wat`,
  `src/01-header.wat`
- Tooling: `tools/ne-dump.js`, `tools/ne-exports.js`,
  `tools/gen_win16_ordinals.js` → `src/win16-ordinals.generated.json` (1,468
  names, 10 modules; all 269 ordinals the four apps import resolve).
  **`--trace-win16`** logs every call with the ten stack words nearest the top
  (BitBlt's Pascal frame is exactly ten and its destination DC is the deepest)
  and the AX/DX/EIP/ESP that came back, and decodes the 16-bit MSG behind
  `lpMsg` for the four message-pump entry points — reach for it first on
  anything here. `tools/png-probe.js --at=x,y` reads a dumped surface's alpha,
  which is how you tell "filled black" from "never drawn".
  `tools/ne-disasm.js --all` sweeps a whole segment linearly rather than
  following one function to its first `ret`, which is how you grep a module for
  every write to a struct field — none of the `find_*` tools read NE images or
  16-bit ModRM.
  Two facts worth not rediscovering: a Win16 module name is not its filename
  (SOUND ships as `mmsound.drv`), and not every import is by ordinal.

### The three things that make the layer work

**The handle map** (`$win16_h16`/`$win16_h32`). A Win16 handle is 16 bits and
ours are 32-bit values like `0x00310001`. Rather than narrow every allocator,
the two spaces are joined at the dispatch boundary and nothing on the 32-bit
side learns Win16 exists. The table lives in the one arena slot past the last
usable selector, so no far pointer can name it.

**The bridge into the 32-bit handlers** (`$win16_call32_begin`/`_end`). Most of
Win16 is Win32 with narrower arguments, so the Win16 side widens onto a scratch
stdcall frame and calls `$handle_*` directly. It refuses a handler that moved
EIP (marker `0xCA16A9F7`), because a redirect into guest code carries a 32-bit
frame a 16-bit task cannot survive — ShowWindow and CreateWindow are written
out for that reason.

**The continuation** (`$WIN16_CONT_OFFSET`). An API that must run the window
procedure before returning pushes a far return address into the thunk segment;
`$th_retf16` recognises it and `$win16_dispatch` finishes the API. This is how
CreateWindow delivers WM_CREATE *before* it returns, which matters: Solitaire
never stores the handle CreateWindow gives it, because its WM_CREATE handler
sets the global instead.

### Open

- ~~**Solitaire's deal stops part way.**~~ FIXED `72b3ba8`, and the diagnosis
  in the previous version of this item was wrong in an instructive way — the
  animation tick at `seg 4:0x13ac` is a *drag* tick, `+0x14` means "a card is
  in hand", and it is correctly zero. The deal is synchronous: the loop at
  `seg 4:0xdd3` places all 28 cards every time. What failed was drawing them.
  `$win16_LocalAlloc` was a bump pointer and `LocalFree` a no-op, as its own
  comment admitted; Solitaire allocates one 26-byte node per card and frees all
  28 on the next deal, so a 4KB heap runs dry mid-way through the second hand
  and entirely by the third. A NULL from LocalAlloc is not an error the game
  reports — the pile just declines the card — so it looked like an animation
  that stalled. The heap now has a first-fit free list.
  The two "unexplained" observations were both artifacts of the harness, worth
  writing down so nobody chases them again: `test/run.js` gives the guest a
  synthetic clock of **200ms per batch**, so a 250ms timer is due on nearly
  every pump iteration and thousands of WM_TIMER in a short run are expected
  (the browser uses real time); and `--dump` runs its address through `g2w`, so
  `--dump=0xac00` never reads TIMER_TABLE at all — that address is a raw WASM
  offset below GUEST_BASE, not a guest address.
- ~~**Menu commands crash or draw nothing.**~~ FIXED. Every menu command of
  FreeCell, Solitaire and Minesweeper now runs — `test/test-win16-menus.js`
  drives all of them from each app's own `RT_MENU` via `tools/menu-sweep.js`,
  which is worth reaching for on any app, 16- or 32-bit: "it launches" says
  nothing about the twenty-seven things its menus do. Five causes, and only two
  of them were Win16 plumbing:
  - `SetWindowPos` (USER.232) was missing. Four of FreeCell's five commands go
    through one centre-the-dialog routine that calls it.
  - `ShellAbout` was missing, and reached two different ways: Solitaire and
    Minesweeper import SHELL.22, FreeCell imports the name. A built-in module
    called by name never reached module dispatch at all — `$win16_dispatch`
    trapped first — so there is now a name path beside the ordinal one.
  - `DispatchMessage` entered any non-zero window procedure as a far pointer.
    SendMessage had always checked; nothing had posted to a window of *ours*
    until ShellAbout put one up, and then CS took 0xFFFF.
  - `SetDlgItemText`/`SetDlgItemInt`/`GetDlgItemInt` (USER.92/94/95).
  - **A 16-bit MOVSD copied two bytes and advanced four.** `$th_string16` read
    its packed element size as "byte or word", so the 0x66-prefixed forms —
    which is how a compiler copies a RECT in one instruction pair — moved half
    the data and left every other word stale. This is an execution-core bug,
    not a Win16-layer one, and it is the reason Solitaire's Deck dialog drew
    twelve unreadable smears while opening perfectly well. Also fixed: the
    DRAWITEMSTRUCT behind WM_DRAWITEM is 48 bytes in Win32 and 26 in Win16, and
    a 16-bit procedure `les`-es the pointer it is handed, so it is now rebuilt
    in the task's own DGROUP (`$win16_msg_lparam16`, scratch reserved at the
    bottom of DGROUP by the NE loader).
- ~~**Hearts goes straight to the client path and finds no dealer.**~~ FIXED,
  and it was five bugs in five different layers, none of them the DDE guess the
  previous version of this item made. Hearts now puts up its own startup dialog
  ("What is your name?" / "I want to be dealer"), OK closes it, and it goes on
  to ask for the dealer's computer name — `test/test-win16-hearts-startup.js`
  pins the whole sequence.
  - **The command line was `"\r"`, not `""`.** InitTask handed back the DOS
    command tail, carriage-return-terminated. That pointer *is* WinMain's
    lpCmdLine, which is documented null-terminated, so MFC compared the first
    byte, saw 0x0D, and concluded it had been given a command line telling it
    to join a game. One byte.
  - **Every Win16 dialog-item API read the wrong argument.** `$win16_arg16` is
    ESP-relative and `$win16_call32_begin` moves ESP to the 32-bit scratch
    stack, so an argument read after the bridge opens comes off that frame
    instead — index 0 being the zero written there as a return address. Ten
    functions did it, so GetDlgItem asked for control 0 whatever it was passed.
    `$win16_arg16` now traps if called while the bridge is open.
  - **One posted message was delivered twice.** `$handle_PostMessageA` decided
    "is this window another instance's?" with `i32.and`, which evaluates both
    operands — so the host call that queues the message on the owning instance
    ran for our own windows too, and then this side queued it again. Not a
    Win16 bug: any app posting to itself got the message twice.
  - **Creating a dialog never ran the WH_CALLWNDPROC filter.** CreateWindow
    always had; DialogBox did not. MFC attaches its C++ object to the HWND from
    inside that call, and its dialog procedure's first act is to look the object
    back up — it called a virtual through the null it got.
  - **DefDlgProc's share was missing.** MFC subclasses the dialog and passes
    IDOK down the chain expecting the dialog to close, so the procedure our
    window hands back on subclassing has to end the dialog, and the pump has to
    route to the *window* procedure once one is installed rather than to the
    DLGPROC.

  Three more things stood between that and a game, all now fixed:
  - **NDDEAPI.DLL would not load**, and Hearts greys out the whole "How do you
    want to play?" group when it cannot ask `NDdeGetWindow` whether network DDE
    is there. NDDEAPI is now a module the emulator implements, and its one
    entry point answers with a window of ours: DDEML is implemented in WAT
    rather than by a separate agent process, so that is the truthful answer
    rather than a zero. A module we implement has no export table for
    GetProcAddress to read, so the entry point gets a fixed thunk-segment slot
    the way the pumps do.
  - **Control messages are numbered per class from WM_USER in Win16** and in
    distinct ranges in Win32 — BM_, EM_, LB_, CB_, SBM_ and STM_ all start at
    0x400 — so which block a number belongs to can only be decided from the
    class of the window being addressed. `BM_GETCHECK` arriving as 0x400 meant
    every radio button answered "not me".
  - **PeekMessage cannot be bridged the ordinary way.** It is the one handler
    that ends by setting EIP from its own stack frame, so an idle PM_NOREMOVE
    loop yields; across the bridge that address is the scratch frame's zero.

  Hearts now deals: `test/test-win16-hearts-startup.js` drives name, dealer, OK
  and New Game and checks a green table with cards on it.

  **Its menu commands are covered now too** —
  `test/test-win16-hearts-menus.js`, 18 checks, every command on both menus.
  The sweep never reached them because it drives a freshly launched app, and
  Hearts at that moment is inside its modal startup dialog; answering the
  dialog first is what makes the menu bar live. Two commands were broken and
  neither fault was Hearts-specific:

  - **`ClientToScreen` and `ScreenToClient` (USER.28/29) did not exist.** MFC
    centres every dialog with GetParent/GetClientRect/ClientToScreen, so this
    was on the path of any 16-bit MFC dialog. Game > Score died there.
  - **A dialog was never seeded its own first paint.** `$win16_dlg_run` marked
    every *control* dirty and never the dialog window, which no dialog built
    only from controls can notice. Template 502 (the Score Sheet) holds one OK
    button and the task draws the whole score grid from WM_PAINT, so the sheet
    came up as an empty grey box. Painting it then wanted `GDI.56 CreateFont`,
    also missing.

  **CORRECTION to what this file used to say here:** it claimed the DDE server
  wrapper near `seg 1:0x79ec` is never reached and "only the client one ever
  runs", so something upstream had already chosen client mode. That is no
  longer true, and it stopped being true when the startup dialog started
  working. Choosing "I want to be dealer" now takes the server path: a traced
  dealer run calls `DdeInitialize`, eight `DdeCreateStringHandle`,
  `DdeNameService` and three `DdePostAdvise`, and **never** `DdeConnect`. There
  is nothing left to find upstream of the dialog.
- **DDEML conversations: established, but not yet carrying transactions.**
  `src/09f-win16-ddeml.wat` now joins two instances in one room. A registered
  service name is *kept* (it never was — a registration nobody recorded is a
  server no client can find), `DdeConnect` puts a CONNECT on the wire and
  waits, the instance holding that service answers, and both sides record who
  they are talking to. `DdeDisconnect` tells the peer rather than forgetting
  it locally, since a conversation the other side still believes in is a
  server holding a seat for a player who has gone.
  `test/test-win16-dde-room.js` is the gate: two instances, separate memories,
  separate DDE tables, on one loopback segment — 14 checks including that
  nobody answers for a service that was never registered.

  Two things worth knowing before extending it:

  - **The room is one queue with one reader.** `$vsock_pump` owns it and used
    to *discard* any frame whose magic it did not recognise, so a DDE frame was
    eaten before DDEML saw it. It now hands `DDE1` frames to
    `$win16_dde_deliver`. Leaving them queued is not an option either: nothing
    else drains, so the socket stream would stall behind them. Any third
    protocol on this wire has to be demultiplexed in the same place.
  - **`DdeConnect` parks by not returning.** A Win16 API is entered with its
    arguments still on the task's stack and nothing popped until
    `$win16_api_return`, so declining to return re-enters the same call with
    the same arguments next pass. No continuation slot, nothing to unwind.
    This is why it is native rather than bridged — across the Win16 bridge the
    frame it would park on belongs to a scratch stack about to be discarded,
    which is the same reason `PeekMessage` cannot be bridged.

  **Hearts will still not join, and it is NOT a name-matching bug.** Both
  sides were traced and their interned strings dumped out of the handle table
  at guest `0x8F9200` (that address is `WIN16_ARENA + 127*0x10000 + 0x9200`;
  `--dump` reads it directly):

  | | service | topic |
  |---|---|---|
  | dealer registers | `MSHearts` | `Hearts` |
  | client asks for | `\\DEAL\NDDE$` | `Hearts$` |

  That is NetDDE working exactly as designed. The client does not connect to
  the dealer's application at all — it connects to the **NetDDE agent** on the
  named machine (`\\COMPUTER\NDDE$`) and names a **DDE share** as the topic;
  the trailing `$` is the share marker. The agent on the far side looks that
  share up in the machine's share database, which maps `Hearts$` onto the
  local pair (`MSHearts`, `Hearts`), and makes the real connection locally on
  the client's behalf. No string the client sends will ever equal a name the
  dealer registered.

  Hearts does not create the share itself: it imports no NDDEAPI entry
  statically and only `LoadLibrary`s it for `NDdeGetWindow`. On a real Win98
  box the share is part of the *machine*, put there at install time. So the
  piece to write is a **DDE share table** — share name to (service, topic) —
  consulted when a CONNECT names `\\host\NDDE$`, modelling the share database
  a Win98 install ships with. It belongs in the emulator as a table, not as an
  `if (this is Hearts)`.

  ~~**`XTYP_CONNECT` is not offered to the server's own callback.**~~ DONE.
  A DDEML server is not a table of names, it is an application with a callback,
  and that is where it says yes or no. The drain now QUEUES the question and
  the task's own message pump asks it — the callback cannot be run from the
  drain, because `$vsock_pump` is called from inside arbitrary API handlers and
  redirecting EIP there returns into the wrong frame. The callback is entered
  with a far return onto `$WIN16_DDE_CB`, which acts on the answer and then
  finishes the interrupted `GetMessage` with an idle message, so the task's
  loop never notices the detour. A conversation stays in state 2, offered, until
  the application accepts; a refusal is silence, which is what `DdeConnect`
  against a server returning FALSE sees.
  `test/test-win16-dde-connect-callback.js` pins both answers: two instances on
  a loopback segment, both running a real 16-bit message loop, with the
  server's callback a hand-written stub whose answer the test chooses.

  ~~**`DdeClientTransaction` fails, so nothing crosses.**~~ DONE for
  `XTYP_REQUEST`, which is the one Hearts opens with (`Join`). It follows the
  same three steps: the drain queues the question against the conversation it
  arrived on, the pump asks the application, and the handle the callback
  returns is emitted as a DATA frame. The client parks on the shared
  `$win16_dde_park` and the drain turns the reply into a data handle, so
  `DdeGetData` reads it like any other. A transaction nobody answers in time
  fails with `DMLERR_DATAACKTIMEOUT` and **leaves the conversation up** —
  tearing a session down over one slow item would be wrong.

  A conversation now remembers its topic, because `XTYP_REQUEST` hands the
  callback the topic and the item and only the conversation knows the former.

  ~~**`DdePostAdvise` has no advise loops to feed.**~~ DONE, and this is the
  one Hearts actually runs on: its dealer posts an advise after each move
  rather than being polled. A client's `XTYP_ADVSTART` is offered to the
  server's application like any other transaction; if it agrees, the loop is
  recorded against that conversation. `DdePostAdvise` then turns into
  `XTYP_ADVREQ` back to the same application — "what does it say now?" — and
  the answer is pushed as `XTYP_ADVDATA` to a client that is not waiting on
  anything, so it goes straight to *that* application's callback. Asking twice
  for one item does not open two loops, and a loop dies with its conversation:
  one left pointing at a closed conversation would push into a handle that has
  since been reused. `XTYP_POKE` and `XTYP_EXECUTE` cross too.

  `XTYP_WILDCONNECT` works too: a connect naming no service asks who is out
  there, every instance with a service to offer is a candidate, and the
  application is asked what it will serve rather than whether it will serve
  this. An instance serving nothing still answers nobody. `DDE_FBUSY` is
  honoured as its own answer — "not now" is neither yes nor no, so the caller
  keeps waiting and a wait that only ever saw busy ends in `DMLERR_BUSY`
  rather than a timeout. `DdeClientTransaction` uses the caller's `dwTimeout`,
  clamped so a hopeful two milliseconds still gives the far machine a chance.

  **`XTYP_MONITOR` is refused, on purpose.** A monitor is a DDE spy that
  expects to be told about every transaction in the system, and none of that
  is delivered. An instance that registered happily and then saw nothing would
  be the worst outcome — a debugging tool silently reporting that nothing is
  happening — so `DdeInitialize` with `APPCLASS_MONITOR` fails with
  `DMLERR_DLL_USAGE`, which is what Windows uses for a class the DLL will not
  serve. Implement the delivery before accepting the registration.

  **Also fixed while checking the codes:** `DMLERR_LOW_MEMORY` is `0x4007`, not
  `0x4001` — `0x4001` is `DMLERR_BUSY`. Five sites were returning "busy" where
  they meant "out of memory", which an app retrying on busy would loop on.

  **On testing any of this:** use the in-process harness. Two instances on a
  `LoopbackSegment`, each with a real NE loaded so selectors and a message loop
  exist, is deterministic and runs in seconds. The two-process
  `test-win16-hearts-join.js` is the end-to-end shape but it is timing-bound
  and this machine is regularly at load 80–200, where the dealer needs three
  minutes merely to register; it is not in `run-all.sh` for that reason.
  Minesweeper is the host of choice for the in-process tests: Hearts needs
  CARDS.DLL staged before it runs at all, and nothing in these tests is about
  the app.
- ~~**Named resources returned 0.**~~ FIXED. A NAMEINFO id with bit 15 clear
  is not an id: it is an offset from the start of the resource table to a
  Pascal string, and the walker matched integer ids only, so every `Load*`
  handed a string failed outright. That is not a rare corner — Solitaire's
  group icon is stored as `"SOL"`, which is why it had no icon.
  `$win16_find_resource_ex` takes a name to match instead of an id, comparing
  without case the way USER does, and `$win16_res_lookup` picks between the two
  from the argument's selector. `LoadIcon` and `LoadBitmap` go through it.
  `LoadMenu` and `LoadAccelerators` deliberately do **not** yet: they bridge to
  the 32-bit `$handle_Load*A`, which take an integer id and walk the PE tree,
  so accepting a name there means teaching those handlers a second grammar.
  Nothing in the four apps needs it — Hearts' named `HEARTSMENU` arrives by
  another path — so it is left rather than half-done.
- Known execution-core gaps, all of which trap loudly and none of which the
  four apps reach: INT (including the INT 3Fh moveable-segment thunks), 16↔32
  thunking. `tools/ne-dump.js --resources` shows what a module
  actually ships, including named types and ids; `--menus` and `--dialogs`
  decode the RT_MENU and RT_DIALOG templates, which are the two resources whose
  16-bit layout shares nothing with the 32-bit one and so cannot be read with
  `tools/parse-rsrc.js`. `--menus-json=` is what `tools/menu-sweep.js` falls
  back to when the PE walker finds nothing, and `--seg-bytes=N:OFF[:LEN]` reads
  raw segment bytes, which is the only way to look at the DGROUP string a
  disassembly names as `push 0x1e8`.
- Tracing for message-queue problems, added while chasing the Hearts duplicate:
  `--trace-win16` now prints `post ->` for every message going into the posted
  queue and `task-loop ->` / `dlg-pump ->` for every one coming out, each with
  the queue depth. A message delivered twice is either pushed twice or popped
  twice, and only both halves together say which. `--input=N:dump-msgq` prints
  the queue itself, which `--dump` cannot: it lives at WASM 0x400, below
  GUEST_BASE, so that address goes through `g2w` and lands somewhere else.
- ~~**Solitaire showed an empty table, and cards could not be dragged.**~~
  FIXED, and neither was a Solitaire bug.
  - **The initial erase arrived too late.** It was left to the non-client flag,
    which GetMessage drains *after* the post queue — so it landed behind
    whatever the app had posted for itself. Solitaire posts its deal from
    WM_CREATE and draws each card as it deals rather than from WM_PAINT, so the
    erase painted the table green over a hand already laid out and nothing
    asked for it back. The cards appearing "only when you touch a menu" was the
    menu invalidating the window. `$win16_ShowWindow` now posts the erase with
    its own WM_SIZE/activation group, ahead of the app's, which is the order
    Windows gives it: there the erase happens inside ShowWindow before the
    task's message loop runs at all.
    Worth recording what did *not* work, since both look right: invalidating
    the window when the erase is delivered fixes Solitaire but costs a full
    repaint per erase per window, which timed mspaint's tool sweep out; and
    invalidating at ShowWindow is dropped on the floor, because the window has
    no size yet and the paint phase silently discards an empty update rect.
  - **PtInRect had x and y the wrong way round.** Its POINT is one argument
    passed *by value*, so a doubleword push puts x nearest the top of the stack
    — the opposite of the separate x and y of InflateRect beside it. The test
    asked whether (y, x) was in the rectangle, which is false for every card, so
    the button-down that starts a drag found nothing under the cursor. Any
    future Win16 API taking a POINT by value has the same trap: `ChildWindowFromPoint`
    and `WindowFromPoint` are the two that are not implemented yet.
  - `GDI.103 PtVisible` was missing; Solitaire asks it while drawing the stack
    it has picked up. `test/test-win16-solitaire-play.js` covers both the
    untouched deal and a drag that empties the column it came from.
- Structure width is the recurring bug class here, and it is worth stating
  plainly: **a structure that crosses the boundary is a different size in the
  two worlds.** `SystemParametersInfo(SPI_GETWORKAREA)` wrote a 32-bit RECT
  into FreeCell's 8-byte one, four bytes below its own return address, and the
  task returned to zero. A watchpoint on that slot named it in one run. The
  APIs that carry a structure now convert explicitly and stop on one they do
  not know rather than guessing at a width.
- Argument *order* is the second recurring bug class, and it bites in both
  directions: `CreateWindowEx` takes `dwExStyle` as its **first** parameter, so
  Pascal pushes it deepest and no other index shifts, while
  `AdjustWindowRectEx` takes it **last**, where every other index does shift.
- Argument *width* is the third, and it is the nastiest because it is silent
  and delayed. A Win16 `HHOOK`, `HSZ`, `HCONV` and `HDDEDATA` are all **far
  pointers**, not words. Getting one wrong pops two bytes too few, and the
  caller's frame drifts two bytes at a time until some unrelated `RETF` half a
  screen away reads a garbage CS and the trap names a function that has
  nothing to do with it. Do not guess a Win16 signature: `tools/ne-dump.js
  --relocs=N` gives the offset of every import call site and
  `tools/ne-disasm.js` shows what the app actually pushes there.

## 2. Fonts — e2e verification and the original measurement (session `ea1ba02f`)

- Files: `src/10b-gdi-font.wat`, `src/10c-truetype.wat`, `lib/host-imports.js`,
  `lib/font-substitutions.js`, `fonts/substitutions.json`,
  `tools/v86-reference/*`, `test/fixtures/font-metrics.json`,
  `test/test-wat-font-metrics-reference.js`
- Commits `eff03cb`, `45e58ae` have unit coverage and a byte-identical notepad
  render, but **no e2e run** — see item 0, which is largely this.
- Its own stated next step ("#1"): the original measurement question, now that the
  measurement infrastructure exists; item #3 on its list comes free with it.
- Still open and font-shaped: `test-winhelp-reference` fails on
  `WinHelp close glyph differs from Win98`.

## 3. Async I/O demo path (session `410075d6`)

The blocking question is **answered**: the user picked Blobby Volley directly,
so the telnet-first detour is dropped.

- **Blobby Volley single-player is done** (`bd9a56a`) — it plays, with no
  emulator change needed. See `apps/blobby-volley.md`, covered by
  `test/test-blobby-volley.js` (9 checks, e2e tier).
- **The DirectPlay lobby now runs** (`f9e2d25`). `NETZWERKSPIEL` reaches both
  end states: host → `Open` + `CreatePlayer` → "WARTE AUF EINEN GAST…", guest →
  `EnumSessions` → "GEFUNDENE SPIELE: LOCAL SESSION". Covered by
  `test/test-blobby-network.js` (10 checks, e2e tier). Two fixes: the
  `DirectPlayCreate` handler popped 20 bytes for a 3-arg function (which
  quietly killed the game thread), and it was an `E_FAIL` stub even though
  `IDirectPlay3` was already implemented behind `CoCreateInstance`.
- **Still open: traffic between two processes.** `Send` returns `DP_OK` without
  sending, `Receive` returns `DPERR_NOMESSAGES`, and `EnumSessions` fabricates
  its one session — so a host and a guest cannot meet. This is the remaining
  real async I/O, and it pairs with the virtual LAN in item 4:
  `src/09d-winsock.wat` + `lib/vlan-wire.js` already join two emulator
  processes into one room, and the guest screen offers a **Host-IP** field that
  maps straight onto `--vlan-ip`.
- **Telnet** (`apps/telnet.md`) remains available as a cheaper async-I/O proof if
  DirectPlay turns out to be a long haul: 0x0 `WS_POPUP` window, never calls
  `ShowWindow`, pumps forever; the XP console client also needs console
  rendering.

## 4. Virtual LAN / TetriNET (session `b303255f`) — mostly landed

- `ecd3a6b` + `209aa00` now carry the round-trip gate and the prop-atom fix.
  Verified: corpus 106 PASS / 0 FAIL, `test-vlan-tetrinet` 6/6.
- Files: `src/09d-winsock.wat`, `src/09a5-handlers-window.wat`,
  `test/test-vlan-tetrinet.js`, `test/test-wat-winsock-hostname.js`
- Remaining: the browser wiring for the virtual LAN (`lib/vlan-wire.js` currently
  proves loopback + cross-process; the browser side is unbuilt).

## 5. WinHelp (session `351afaf4`) — clean, one open item

- `87a9546` verified: parser 606/7, `test-help` 5/5, `winhelp-dll-macro` 6/6.
- Files: `src/09c6-winhelp-core.wat`, `src/09c7-winhelp-hlp.wat`,
  `src/09c9-winhelp-ui.wat`, `tools/hlp-wat-check.js`
- Open: the close-glyph mismatch above (font work, not parser work).

---

## Cross-cutting, carried over from earlier sessions

- ~~**`CW_USEDEFAULT` ignores only x, not y**~~ — FIXED `7d4d1af`. x and y are a
  pair, so `x=CW_USEDEFAULT` makes the system pick both and ignore the caller's
  y. Solitaire and Notepad now open in the y=20 cascade slot. The 20px shift
  fixed three e2e tests (`solitaire-maximize`, `notepad-find-next-positive`,
  `notepad-find-not-found-msgbox`) and broke exactly one, `notepad-menu`, which
  sampled a fixed desktop point for the File dropdown; its anchor is now derived
  from the live window origin. Verified with a full before/after e2e diff in a
  clean worktree, plus unit 92/2 and corpus 106 PASS / 0 FAIL.
- ~~**mspaint scrollbar travel**~~ — FIXED `2bc5c16`, and it was never an
  emulator bug. `test-mspaint-scrollbar-thumb` (3/5 → 6/6) and
  `test-mspaint-large-scroll` (2/5 → 5/5) were pinned to the geometry of a
  212x283 view; the frame's client inset is now correctly 6px, the view is
  202x274, and Paint's page/4 arrow scroll moved with it. New rot-proof input
  actions in `test/run.js`: `scroll-click`, `scroll-drag`, `dump-scrollbar`,
  `caption-click`, and `assert-standard-scroll` now takes `N%` of the bar's own
  page size. Three mspaint `execFileSync` timeouts also raised to 45s — they are
  hang ceilings, not performance budgets, and were going red on box load alone.
- **Screensaver GDI-bridge regression** — `apps/screensavers.md` Task 0, fixed
  2026-08-15 via the RLE DIB path; re-read before trusting it, since
  `test-cwordzap-render`'s RLE4 asserts are failing again in the current e2e run.
- ~~**d3rm `MeshBuilder::Load` / ProgressiveMesh**~~ — RESOLVED 2026-08-16. The
  `D3DRMERR_NOTFOUND` was correct: our DX SDK extract ships no `camera.x`, and
  the one we had was a ProgressiveMesh copied under that name in April, which a
  MeshBuilder refuses by design. Given a real plain `Mesh` file the viewer loads
  and renders — DX5 D3DIM Viewer `KNOWN_BAD_RENDER` → **PASS**, corpus 106 → 107
  PASS. Retained-mode geometry works; see `apps/screensavers.md` Task 3.
- **CITYSCAP blank screen** (Task 2, MEDIUM), **FOXTROT white silhouettes**
  (Task 1, LOW).
- **CD Player** renders frame and menu but not its transport controls — the only
  other unresolved emulator bug among the sweep WARNs.
- **External-asset WARNs** (not emulator bugs; each names its blocker in
  `test/test-all-exes.js`): Kodak Preview needs OIDIS400+OIADM400, HyperTerminal
  needs HYPERTRM.dll, Welcome98 needs `welcome.dat`, IP Config has no adapter,
  JigSawedME and Rodent2000 need the VB6 runtime, XP EOL is version-gated by
  design.

---

## Hazard worth knowing about

Something in this shared tree rewrites whole `src/` files that other agents have
dirty. A verified `$prop_key` fix was reverted from disk between a read and a
commit; `git commit <path>` then silently committed only the other file, and the
loss was visible only in the `1 file changed` stat. **Check the file count in
commit output — do not assume your hunks landed.**

## Follow-through and 3D performance — user requested 2026-10-01

- [x] Reconcile Codex handoffs and turn unfinished outcomes into tasks
  id: OPS-HANDOFF-FOLLOWTHROUGH
  status: done
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  Next: Complete: all nine original roots and child dispositions mapped to integrated, queued, blocked or deferred outcomes; six missing follow-ups added without launching backlog.
  Done: Each handoff has an explicit disposition: integrated, queued with a task ID, blocked with a concrete reason, or deferred. Update TODOS and STATUS from evidence; distinguish accepted custody from completed implementation. Preserve the automated-review block and deferred Claude ownership.
  Evidence: ops/handoffs/ops-handoff-followthrough.md
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0

- [x] Build a repair queue from failing EXE candidates
  id: EXE-FAILURE-TRIAGE
  status: done
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  Next: Complete:167result hashes checked,5failed/1harness-error deduplicated; actionable findings mapped to Zuma, Pirates route/terrain, SAM production and Q2 traversal tasks. Historical/unknown captures kept distinct.
  Done: Each actionable failure has a candidate-linked task with route, build, evidence, reproduction and done criteria. Distinguish historical/unreviewed evidence, application failures and harness errors; merge duplicates and shared root causes. Unknown or missing captures are not automatically failures. Do not launch the whole corpus concurrently.
  Evidence: ops/handoffs/exe-failure-triage.md; scratch/exe-failure-triage-20261002/run-inventory.json
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0

- [x] Reproduce and resolve Zuma startup QueueUserAPC failure
  id: EXE-ZUMA-STARTUP
  status: done
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  candidate: reflexive-zuma-deluxe
  Next: None for startup triage: reviewed title/loading reached on c474288d with no historical missing QueueUserAPC; menu/gameplay unverified and would require a separate task.
  Done: A current reviewed run either demonstrates the historical failure is resolved or reproduces and fixes its cause with a focused regression. Capture startup/menu evidence and exact build/command; do not claim gameplay from a menu alone or add a silent-success stub.
  Evidence: ops/handoffs/exe-zuma-startup.md; ops/handoffs/exe-zuma-preflight.md; scratch/runs/20261002T042949Z-reflexive-zuma-deluxe-startup/result.json
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  owner: codex:01a0f9db-89c0-73b3-b528-fe8bf239e061
  Notes: Planned60s observation ended normally4290batches/exit0; outer90s guard unused,6084 frozen hashes unchanged. Root reviewed640x480 title/loading PNG; no hang or gameplay claim. Both earlier harness failures preserved.

- [ ] Compare NFS3 speed and correctness in Glide, D3D and original software
  id: NFS3-RENDERER-BENCH
  status: parked (d2fc4cce: 3/3 paths qualified, inconclusive on a GPU-less boat; needs a real-GPU host) [duplicate row: status copied from its primary, 2026-10-10]
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  candidate: need-for-speed-3-demo
  Next: Verify available backend-review evidence and exact missing package paths; preserve failed renderer-identity gate before any new qualification.
  Done: Report all three guest renderer paths on the same identified source/WASM/browser/CPU/GPU, resolution and controlled race/weather/input route. Separate original game software rendering from our software backend; verify no hidden GPU fallback or SwiftShader substitution. Save reviewed race images, repeated warmed-up FPS/frame-time median and p95, CPU profiles, draw/triangle/texture/upload/readback/fallback counters, sample counts and spread, plus same-path control. Report unavailable paths explicitly. Record bottlenecks and a predeclared performance acceptance budget; historical high-load FPS is not a current baseline.
  Evidence: ops/handoffs/nfs3-renderer-bench.md; scratch/nfs3-renderer-bench-20261002/closure-report.json; scratch/nfs3-renderer-bench-20261002/local-resource-preflight.json; ops/handoffs/nfs3-capacity-recheck.md; ops/handoffs/nfs3-software-prep.md
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Notes: Old worker released at migration. Ricochet launch proof, Collapse association review, NFS3 backend identity and Jazz visual admission remain unresolved; package preparation is not gameplay/FPS acceptance.

- [x] Audit the actual shared 3D rendering pipeline across APIs
  id: RENDER-SHARED-AUDIT
  status: done
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  Next: Complete: main/private API-backend matrices, semantic/resource gaps and proposed slices S1-S5 documented. Backlog implementation awaits scheduling; no broad private merge.
  Done: Publish an implementation-backed API/backend matrix, ownership boundaries, duplicate semantic lowering and remaining divergence, with bounded migration tasks and representative correctness/performance fixtures. Distinguish one shared worker or texture registry from a shared drawing contract. Preserve API-specific semantics at adapters and explicit fallback behavior. Do not claim the proposal is already implemented.
  Evidence: ops/handoffs/render-shared-audit.md; scratch/render-shared-audit-20261002/source-manifest.json
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0

- [x] Keep the coordinator picking up tasks and completed handoffs
  id: OPS-COORDINATOR-CONTINUITY
  status: done
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  Next: Use the durable inbox at each queue/handoff boundary under the existing active native goal; refresh truthful runtime evidence and acknowledge exact reviewed notice IDs.
  Done: New ready tasks and worker handoffs are acknowledged and reconciled without manual prompting, with deduplicated wake requests and at most one coordinator. Never send wake text into a tool approval or a busy terminal. Test idle, busy, approval, disconnect and restart cases using fixtures. Before going idle, convert unfinished outcomes into follow-ups and record why remaining work cannot proceed; do not bypass blocked review or take deferred claims.
  Evidence: ops/handoffs/coordinator-continuity.md; ops/coordinator-inbox.js; ops/coordinator-inbox.test.js; scratch/coordinator-live-scan.json; scratch/coordinator-live-ack-restart.json; scratch/coordinator-natural-handoff.json
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  owner: codex:01a0f9db-4a5d-7733-ade9-8b71d8e3f05f
  Notes: 10 fixture tests PASS; live busy scan51 notices,2 exact ack/restart persistence, and natural Zuma handoff change delivered with prior version retained until explicit ack.4 notices acknowledged total; remaining pending preserved. Native goal owns continuation; no wake daemon or terminal input.

- [ ] Implement the next bounded shared 3D command-contract slice
  id: RENDER-SHARED-IMPLEMENT
  status: backlog
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  depends-on: RENDER-SHARED-AUDIT
  Next: Use the audited matrix to select and record the smallest shared semantic slice, exact owned files and per-API regression cases before implementation.
  Done: The chosen slice uses one explicit drawing/resource contract with thin API adapters and GPU/software executors, removes the corresponding duplicate interpretation, and passes differential pixel/state/resource-lifetime and ordering tests for affected APIs plus representative game captures. Record unsupported semantics and remaining migration tasks; a shared worker alone is not completion.
  Evidence: docs/render-command-unification.md; ops/handoffs/mig-render-textures-validation.md

- [ ] Profile and optimize the shared 3D path with repeatable performance gates
  id: RENDER-PERF-GATE
  status: backlog
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  depends-on: NFS3-RENDERER-BENCH, RENDER-SHARED-AUDIT
  Next: Select the largest measured shared bottleneck from the renderer matrix, declare workload/metric/regression budget and compare one bounded change against an unchanged control on a quiet host.
  Done: Show repeatable improvement beyond control noise with unchanged reviewed images/state and no regression beyond the declared budgets across representative legacy D3D, D3D8/9, OpenGL and Glide GPU/software workloads. Attribute CPU emulation, translation, submission, GPU, readback and presentation costs separately. Save raw measurements/profiles/build hashes and reject changes whose gains disappear in game routes. No default switch on microbenchmark-only evidence.
  Evidence: docs/render-command-unification.md; docs/re-notes/need-for-speed.md; ops/handoffs/mig-fp-kernel.md

- [ ] Diagnose Pirates stopping before the target rendering operation
  id: PIRATES-ROUTE-FOLLOWUP
  status: blocked
  note: 2026-10-06T17:40Z parked by claude:1863d2b5: self-claimed 04:09Z, then reassigned by the orchestrator (DEUSEX-HW-RENDERER onward) without progress. Pirates runs exceed 1 GB, so under the heavy-test policy the Play->captain->StretchRect route needs a boat (REQUEST BOAT) or a BIGMEM window; free to reassign.
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  candidate: pirates-2004
  Next: 2026-10-06T04:09Z self-claimed (no assignment 2 min after DONE GLD3D). Start from today's fixes (ba161dfb, 12408feb, d7f5a429: Pirates now reaches its D3D9 main menu on the CLI software arm, docs/re-notes/pirates-2004.md); read ops/handoffs/mig-pirates-stretch*.md, then drive Play -> captain route to the StretchRect operation on the CLI.
  Done: Identify the route failure and either validate the actual game transfer/readback with reviewed images or record a precise blocking dependency. Link unresolved terrain defects separately; a zero-transfer run is not a rendering pass.
  Evidence: ops/handoffs/mig-pirates-stretch.md; ops/handoffs/mig-pirates-stretch-recipe.md
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256

- [x] Verify Quake II world traversal beyond a changed frame
  id: Q2-MOVEMENT-FOLLOWUP
  status: done (duplicate of the reviewed row at line 980; was "active")
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-02T04:00:31.545Z
  created-by: user-request via ops-dashboard
  candidate: quake-2-demo-installer
  Next: Source preparation behind Antara/Arx runtime queue. October2 world/weapon-change and October6 +map demo1 software60sec runs do not prove physical traversal. Prepare finite forward/reverse/idle ordinary keys with reviewed fixed world landmarks, exact source/module/renderer provenance. No redundant menu capture or performance claim.
  Done: Reviewed before/after world captures and position/landmark evidence demonstrate actual traversal, with exact build, route and renderer provenance. Retain texture/resource checks and distinguish movement from animation or camera-only changes.
  Evidence: ops/handoffs/mig-render-q2.md

- [x] Recover and review screenshots and diagrams from historical runs
  id: OPS-HISTORICAL-VISUALS
  status: done
  created: 2026-10-02T04:03:23.368Z
  created-by: user-request
  Next: None for this bounded recovery/audit. Unlinked-candidate and unresolved-association searches are recorded separately as backlog; no new game runs or automatic restorations.
  Done: Publish confidently associated screenshots/diagrams as file-backed run bundles with exact original path, content hash, source timestamp basis, build/route when known and provenance. Link candidate, session and task only with evidence; unknowns stay unknown. Deduplicate by image hash, visually inspect contact sheets, classify blank/loading/error/gameplay captures and select a representative frame. Preserve failed/black-frame evidence in run details rather than deleting or calling it a pass. Review the 147 previously quarantined ambiguous bundles; restore only verified associations, never infer GeneRally from prose containing generally. Produce a coverage report listing recovered images, missing sources and unresolved associations; do not execute historical commands or rerun games to fabricate historical captures. Keep historical/unreviewed status explicit, and link failures to EXE-FAILURE-TRIAGE without claiming current compatibility.
  Evidence: ops/handoffs/ops-visual-acceptance.md; ops/handoffs/ops-quarantine-review.md; ops/handoffs/ops-visual-coverage.md; scratch/ops-visual-acceptance-20261002/final-verification.json
  accepted: 2026-10-02T04:11:37.233064+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  owner: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Notes: Final18images/18distinct hashes and metadata verified; seven new images reviewed,522protected inputs unchanged,441quarantine files preserved.147rows reconcile9supported/5incorrect/133unresolved with rootNFS2proof. All9supported rows and separately correctedNFS3 copy published; coverage30of76,46unlinked. No current compatibility/performance claim.

## Original handoff follow-ups — reconciled 2026-10-02

- [ ] Validate FP variants in matched-work game windows
  id: FP-GAME-GATES
  status: backlog
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  depends-on: MIG-FP-KERNEL
  Next: Prepare P/P control and P/PCM/PCP game windows with FP_SHARE_CALENDAR=1, reviewed pixels/API/tier counters and exact host identities.
  Done: Matched work and meaningful timing precision/control established, or exact failed gate recorded; no default switch from microkernel evidence.
  Evidence: ops/handoffs/fp-next-root.md; ops/handoffs/mig-fp-kernel.md

- [!] Complete Serious Sam production integration and ordinary gameplay
  id: SAM-PRODUCTION-FOLLOWTHROUGH
  status: blocked
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  depends-on: MIG-SAM-REP-RESTART
  candidate: serious-sam-demo
  Next: After REP review clears, validate generic fault/classifier contracts, integrate only owned tested timer/TLS/memory slices and review diagnostic transform removal before launcher/input work.
  Done: Production build reaches menu and level with supported input, verified movement/combat and no private diagnostic shortcuts; exact source/module and focused regressions retained.
  Evidence: ops/handoffs/mig-sam-fault-remainder.md; ops/handoffs/01a0f6ff-da61-7710-a604-d9442103dbbd.md
  blocker: REP validation remains incomplete after automated review; do not retry through another channel.
  waiting-on: MIG-SAM-REP-RESTART review resolution

- [ ] Integrate tested private renderer changes without losing main work
  id: RENDER-PRIVATE-INTEGRATION
  status: backlog
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  depends-on: RENDER-SHARED-AUDIT
  Next: Use audit to select a coherent private patch, reconcile intervening main changes and create a frozen integration candidate; exclude unvalidated empty-quad optimization.
  Done: Selected changes validated on current integration base with affected API games/tests and exact identities; unvalidated changes kept separate and any merge follows explicit ownership review.
  Evidence: ops/handoffs/01a0eb29-4302-7e20-9b06-7084fb37358b.md; ops/handoffs/mig-render-textures-validation.md

- [ ] Diagnose Pirates white terrain with a controlled capture
  id: PIRATES-TERRAIN-REVIEW
  status: backlog
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  depends-on: PIRATES-ROUTE-FOLLOWUP
  candidate: pirates-2004
  Next: Separate terrain rendering from the captain-route stop and reproduce the visible defect on an identified reachable gameplay state.
  Done: Reviewed terrain evidence identifies the failing contract and focused correction or concrete dependency; no zero-transfer pass used as terrain proof.
  Evidence: ops/handoffs/01a0f736-78f1-7822-8b37-159d6f8ed94d.md

- [ ] Review nested transfer packet preservation
  id: PIRATES-TRANSFER-REENTRANCY
  status: backlog
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  candidate: pirates-2004
  Next: Audit per-instance StretchRect packet/stage state across nested same-thread callbacks and existing render-token snapshots before claiming reentrancy.
  Done: Explicit ownership/lifetime contract and focused nested-call regression, or exact unsupported case recorded; no unchecked pooling/copy removal.
  Evidence: ops/handoffs/01a0f736-78f1-7822-8b37-159d6f8ed94d.md

- [ ] Reconcile remaining historical recovery changes against current main
  id: RECOVERY-PATCH-RETRIAGE
  status: backlog
  created: 2026-10-02T04:16:51.185761+00:00
  created-by: orchestrator-handoff-audit
  Next: Perform read-only patch-equivalence audit of codex/recovery-main-20260910 and current main, separating landed, obsolete and missing runtime/overlay/save/screensaver changes.
  Done: Each remaining change has current evidence and explicit disposition/task; no stale branch bulk merge or old-build acceptance reused.
  Evidence: ops/handoffs/01a08812-a2da-7333-83fc-851ef8fff7b1.md


- [ ] Measure browser FPS for strongest local and desktop game candidates
  id: OPS-GAME-FPS-BASELINE
  status: in_progress [duplicate row: status copied from its primary, 2026-10-10]
  candidate: jazz-jackrabbit-2-demo-installer, reflexive-collapse-crunch, reflexive-ricochet-xtreme, unreal-special-edition, gta2-demo
  done: Publish run performance metadata with guest present counts, wall duration, per-sample p95 frame time, renderer/GPU, hardware-versus-SwiftShader, scene, build hash and measurement date; review playable route before measuring. No menu, browser rAF or CLI batch timing relabelled as gameplay FPS.
  Next: Inventory exact available fixtures and released route packages, then qualify gameplay for the first ready candidate; canceled conditional launches stay canceled.
  Notes: Old worker released at migration. Ricochet launch proof, Collapse association review, NFS3 backend identity and Jazz visual admission remain unresolved; package preparation is not gameplay/FPS acceptance.
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T13:40Z after user said park TicTacDrop)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  accepted: 2026-10-02T05:21:49.472399+00:00
  accepted-by: codex:01a0f9d8-c0cd-73b3-a357-fb3ff1c784c0
  Evidence: ops/handoffs/ops-game-fps-baseline.md; ops/handoffs/ops-fps-labels.md; ops/handoffs/ops-historical-fps-semantics.md; scratch/ops-gta2-fps-20261002/root-review.md; ops/handoffs/ops-unreal-fps-preparation.md; ops/handoffs/ops-jazz2-package.md; ops/handoffs/ops-collapse-v2-package.md; ops/handoffs/ops-ricochet-measurement.md

- [ ] Investigate remaining unlinked historical visuals and uncertain associations
  id: OPS-HISTORICAL-UNLINKED
  status: backlog
  created: 2026-10-02T05:58:39.995255+00:00
  created-by: orchestrator-historical-audit
  depends-on: OPS-HISTORICAL-VISUALS
  Next: Select a bounded evidence-only batch from46unlinked candidates or133 unresolved exact associations after scheduling; use existing source paths/tests/notes before any separately scoped transcript work.
  Done: Publish only confidently associated existing captures with exact hashes/provenance, update coverage and disposition deltas, preserve originals and explicit unknowns; never rerun games to fabricate historical evidence.
  Evidence: ops/handoffs/ops-visual-acceptance.md; ops/handoffs/ops-quarantine-review.md; scratch/ops-visual-acceptance-20261002/final-verification.json
  Notes: The completed18-image recovery/147-bundle audit remains accepted. This deeper search is unscheduled, not permission to take deferred Claude claims or restore incorrect associations.

## Gameplay coverage and EXE categories — requested 2026-10-03

- [x] Group games into categories in dashboard EXE corpus
  id: OPS-EXE-CATEGORIES
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:30:54.631Z
  created-by: user via Telegram
  accepted: 2026-10-03T08:30:54.631Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete: live dashboard serves 241 entries in 14 categories; combined category/source/status filters verified.
  Done: Every EXE corpus game has a category, dashboard grouping/filtering works, and source/package groups remain separate from game genre.
  Evidence: ops/handoffs/corpus-categories-20261003.md; scratch/ops-preview/corpus-live-categories.png

## Per-game screenshot and FPS coverage — 2026-10-03

Exact required and missing fixture/artifact paths are recorded in each task JSON.
Categories exclude tools and graphics demos; distribution variants remain explicit.
Ready means assets are present, not gameplay or counter correctness.

- [x] Gameplay screenshot and FPS: abedemo
  id: GAMEPLAY-abedemo
  status: done (duplicate of the reviewed row at line 1127; was "ready")
  candidate: abedemo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualify complete-frame measurement during actual gameplay; retain narrow input scope from reviewed batch17 evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-abedemo.json; scratch/runs/20261003-abedemo-gameplay-restored17/result.json

- [x] Gameplay screenshot and FPS: aoe1
  id: GAMEPLAY-aoe1
  status: done (duplicate of the row at line 1140, which holds the review)
  candidate: aoe1
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualify complete-frame measurement during actual gameplay; retain narrow input scope from reviewed batch17 evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-aoe1.json; scratch/runs/20261003-aoe1-gameplay-restored17/result.json

- [x] Gameplay screenshot and FPS: aoe2
  id: GAMEPLAY-aoe2
  status: done (duplicate of the reviewed row at line 1154; was "review")
  candidate: aoe2
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Result (2026-10-10T04:15Z): headful page on boat, main d8a00c63f (wasm f873b89e) + FRAME counter (edd9068a9: perf.logicalFrame 0x00444100, verifier 0x005d27e6, 1:1 with the frame Blt). Live Trial Coastal Map reached through the full menu route; keyboard control: H selects the Town Center, C queues a Villager (food 200 -> 150). FRAME 2.79 / 2.81 / 2.72 per s over three ~11 s raw samples on the untouched map (verifier 1:1), ~1.2-1.4M blocks/s, guest-CPU-bound on a GPU-less 4-vCPU boat. EXPLICIT FAILURE kept: in the page any world left-click (or the cursor at the top-left corner) moves the camera into black fog (H brings it back); the CLI selects units fine, so mouse unit control is not demonstrated in the page -- suggest a separate row (AOE2-PAGE-MOUSE-CAMERA-JUMP). Also: test-aoe2-gameplay's EULA click (104,415) is stale, Accept is (161,433). Evidence scratch/runs/20261010T0345Z-aoe2-gameplay-fps.
  Evidence: scratch/runs/20261010T0345Z-aoe2-gameplay-fps/result.json
  Next: Diagnose actual owning-Worker graphics initialization rejection. Unicode repair cleared prior DirectX6.1a failure; ordinary run now shows DirectDraw graphics error, with no gameplay/FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-aoe2.json; scratch/runs/20261003-aoe2-gameplay-restored17/result.json

- [x] Gameplay screenshot and FPS: Arcanum: Of Steamworks & Magick Obscura Demo
  id: GAMEPLAY-arcanum-demo
  status: done (duplicate of the reviewed row at line 1169; was "ready")

  candidate: arcanum-demo
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (queued under one-worker budget)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Registered arcanum_demo fixture rechecked2026-10-08: 37 declared executable/DLL/asset/manifest paths exist, declared sizes match. Missing-file blocker is cleared; queue ordinary gameplay and scene-qualified FPS validation after current sole lane. Presence does not prove runtime readiness. Receipt scratch/runs/20261008T0810Z-queued-fixture-recheck/fixture-presence.json; docs ops/handoffs/queued-fixture-recheck-20261008.md.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-arcanum-demo.json
  notes: Migration missing-file blocker cleared against current registered route: arcanum_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Baldur's Gate Chapters I & II
  id: GAMEPLAY-baldurs-gate-chapters-1-2-demo
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: baldurs-gate-chapters-1-2-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-baldurs-gate-chapters-1-2-demo.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-baldurs-gate-chapters-1-2-demo.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: Baldur's Gate interactive demo
  id: GAMEPLAY-baldurs-gate-interactive-demo
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: baldurs-gate-interactive-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-baldurs-gate-interactive-demo.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-baldurs-gate-interactive-demo.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [!] Gameplay screenshot and FPS: Baldur's Gate non-interactive demo
  id: GAMEPLAY-baldurs-gate-noninteractive-demo
  status: deferred
  candidate: baldurs-gate-noninteractive-demo
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Noninteractive presentation demo: retain screenshot evidence separately; gameplay FPS is not applicable.
  Done: Document noninteractive scope and preserve any reviewed presentation captures; gameplay FPS is not applicable.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-baldurs-gate-noninteractive-demo.json

- [x] Gameplay screenshot and FPS: Best Of Moorhuhn extras
  id: GAMEPLAY-best-of-moorhuhn
  status: done (duplicate of the reviewed row at line 1232; was "ready")
  candidate: best-of-moorhuhn
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Confirm in-round Training1 action, cover other playable package variants, then qualify complete-frame measurements.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-best-of-moorhuhn.json; scratch/runs/20261003-moorhuhn_training_1-gameplay-restored14/result.json

- [ ] Gameplay screenshot and FPS: Black & White 2 Demo
  id: GAMEPLAY-black_white_2_demo
  status: in_progress [duplicate row: status copied from its primary, 2026-10-10]
  Next: Normal-route browser ended at fixed90minute deadline05:05:50Z, moving island flyover only. Final242 artifacts retained run20261009T0335Z-black-white2-staging-fix; no player-control/FPS credit. Diagnose current missing declaration binding/rendered right edge, then validate ordinary gameplay; old drive34 already ruled out SetFVF(0) for that route.

  candidate: black_white_2_demo
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (tr3; assigned by orchestrator 2026-10-10T19:05Z: find what the tutorial dialogue waits for, then camera control + scene-qualified frames)
  worker: root direct; no subagent (one-worker budget)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-black_white_2_demo.json
  notes: Migration missing-file blocker cleared against current registered route: black_white_2_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Blobby Volley
  id: GAMEPLAY-blobby-volley
  status: done
  candidate: blobby-volley
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete for reviewed ordinary gameplay and instrumented logical submissions: 467 frames /15.312065s =30.4988 logical gameplay frames/s. Physical displayed FPS/p95 unknown; not a hardware-GPU baseline.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-blobby-volley.json; scratch/runs/20261003-blobby-volley-logical-gameplay/result.json; ops/handoffs/gameplay-frame-counter-20261003.md

- [x] Gameplay screenshot and FPS: Bricks
  id: GAMEPLAY-bricks
  status: done (reconciled 2026-10-10 by orchestrator: on main, reviewed)
  note: 2026-10-06T18:29Z browser drag check done: brick moves, MOVES: 1 (scratch/runs/20261006T1825Z-bricks-drag/browser-moved.png). CLI fix 291be497. Complete pending review.
  note: 2026-10-06T18:30Z fixed on the CLI by 291be497 (input hold on the guest clock); drag moves the brick, evidence scratch/runs/20261006T1825Z-bricks-drag/result.json. Still owed: one browser drag check (original report was a browser run). No frames/s: event-driven puzzle.
  note: 2026-10-06T18:19Z cause found: renderer-input takeInput held a click's button-up on the WALL clock, which the headless guest clock outruns while parked, so the title click's release and every drag event behind it never reached the game. Fix in scratch/claude-hype-wt (host input clock _inputNowMs, run.js guest peek; test-renderer-input-button-hold.js 19/19). Waiting on the CLI queue (202b4b39 -> d10ba697 -> me) for the one confirming bricks run, then push; browser drag check after.
  note: 2026-10-06T18:12Z self-claimed by claude:1863d2b5 (ready/unowned, no assignment 5 min after DONE D3DIM readback): reproduce the drag that moves no block on the CLI, fix or record the blocker, then measure.
  candidate: bricks
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Title click starts the level 1 sliding-block board. Drag (305,293) to (259,293) shows no verified block displacement. Puzzle scene reviewed; controls and completed move remain unverified. Gameplay frame measurement remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-bricks.json; scratch/runs/20261003-bricks-gameplay-restored1/result.json

- [x] Gameplay screenshot and FPS: Broken Sword Demo
  id: GAMEPLAY-broken_sword_demo
  status: done (duplicate of the reviewed row at line 1291; was "ready")
  candidate: broken_sword_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualify complete-frame measurement; reviewed response is hotspot cursor only, walking unverified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-broken_sword_demo.json; scratch/runs/20261003-broken-sword-cafe-hotspot/result.json

- [ ] Gameplay screenshot and FPS: Caesar III Demo
  id: GAMEPLAY-caesar3_demo
  status: backlog

  candidate: caesar3_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-caesar3_demo.json
  notes: Migration missing-file blocker cleared against current registered route: caesar3_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Cave Story
  id: GAMEPLAY-cave-story
  status: done
  candidate: cave-story
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualified one short instrumented logical-submission sample:25frames/1003.43ms=24.9145431171/s, mostly stationary opening room after movement/jump. Physical displayed FPS,p95 and sustained performance remain unknown.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-cave-story.json; scratch/runs/20261003-cave-story-logical-gameplay/qualification.json; scratch/runs/20261003-cave-story-logical-gameplay/result.json

- [ ] Gameplay screenshot and FPS: Civilization II: Multiplayer Gold Edition
  id: GAMEPLAY-civilization-2-mge-win32
  status: backlog

  candidate: civilization-2-mge-win32
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-civilization-2-mge-win32.json
  notes: Migration missing-file blocker cleared against current registered route: civ2_mge. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Sid Meier's Civilization II
  id: GAMEPLAY-civilization-2-win16
  status: backlog

  candidate: civilization-2-win16
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-civilization-2-win16.json
  notes: Migration missing-file blocker cleared against current registered route: civ2_win16. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Curse of Monkey Island Demo
  id: GAMEPLAY-curse_monkey_island_demo
  status: done (duplicate of the reviewed row at line 1364; was "ready")
  candidate: curse_monkey_island_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene and limited input response reviewed. Derive and independently qualify a complete gameplay-frame counter before reporting FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-curse_monkey_island_demo.json; scratch/runs/20261003-curse_monkey_island_demo-gameplay-restored5/result.json

- [x] Gameplay screenshot and FPS: CWordZap
  id: GAMEPLAY-cwordzap
  status: done (duplicate of the reviewed row at line 1377; was "ready")
  candidate: cwordzap
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Ordinary Ready click starts letter board; selecting S O T places letters into word row and End Word displays SOT. Score remains0:0; no accepted-word/scoring claim. Gameplay frame measurement remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-cwordzap.json; scratch/runs/20261003-cwordzap-gameplay-restored2/result.json

- [ ] Gameplay screenshot and FPS: Darkstone Demo
  id: GAMEPLAY-darkstone_demo
  status: backlog

  candidate: darkstone_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Historical controlledTown camera evidence confirmed by fresh worker; do not count as new-game lane or redo screenshots. Exact prior module identity unknown; remaining FPS/audio/current-build coverage stays unqualified. Replacement new-game lane is Tiberian Sun.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-darkstone_demo.json
  notes: Migration missing-file blocker cleared against current registered route: darkstone_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Deus Ex demo
  id: GAMEPLAY-deus-ex-demo
  status: ready

  candidate: deus-ex-demo
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (queued under one-worker budget)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Registered deus_ex_demo fixture rechecked2026-10-08: 112 declared executable/DLL/asset/manifest paths exist, declared sizes match. Missing-file blocker is cleared; queue ordinary gameplay and scene-qualified FPS validation after current sole lane. Presence does not prove runtime readiness. Receipt scratch/runs/20261008T0810Z-queued-fixture-recheck/fixture-presence.json; docs ops/handoffs/queued-fixture-recheck-20261008.md.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-deus-ex-demo.json
  notes: Migration missing-file blocker cleared against current registered route: deus_ex_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Diablo Demo
  id: GAMEPLAY-diablo_demo
  status: done (duplicate of the row at line 1423, which holds the review)
  candidate: diablo_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Diagnose persistent dark transition after complete name entry; prior served-source closure rejection recorded, future helper includes all library JavaScript. No gameplay/FPS.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/runs/20261003-diablo-demo-full-name-stall/result.json; scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-diablo_demo.json

- [ ] Gameplay screenshot and FPS: Diablo II Demo
  id: GAMEPLAY-diablo-2-demo-installer
  status: backlog

  candidate: diablo-2-demo-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-diablo-2-demo-installer.json
  notes: Migration missing-file blocker cleared against current registered route: diablo2_demo, diablo2_demo_installer, diablo2_glide_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Diablo Shareware
  id: GAMEPLAY-diablo-shareware
  status: done (duplicate of the row at line 1453, which holds the review)
  candidate: diablo-shareware
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualify complete-frame measurement during actual gameplay; retain narrow input scope from reviewed batch17 evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-diablo-shareware.json; scratch/runs/20261003-diablo_shareware-gameplay-restored17/result.json

- [x] Gameplay screenshot and FPS: Dungeon Keeper Demo
  id: GAMEPLAY-dungeon_keeper_demo
  status: done (ae06978e page route fix; headful boat page in the dungeon, PRESENT/s 13-19.6, page 23-45 fps on GPU-less boat; reviewed by orchestrator)
  note: 2026-10-10T05:50Z DONE: page route works since ae06978e; headful FPS on boat bx_9n4ex3a5 (Chrome 151 headful, SwiftShader, no GPU): 13-20 presents/s in the Eversmile dungeon over 6x30 s windows / 3 launches (best 19.6 at low load), evidence scratch/runs/20261010T0530Z-dungeon_keeper_demo-headful-fps. Coop regression A/B for ae06978e over 10 apps: identical (scratch/runs/20261010T0545Z-ae06978e-coop-ab).
  note: 2026-10-10T07:00Z page route FIXED: ae06978e (main, ls-remote verified, full build green) -- cooperative semaphore release now goes to the parked waiter (DK's render thread starved its window thread's 5 ms cursor-lock waits; page cursor never moved). Page (headless, Threads off, lazy files): menu -> steer cursor onto Start New Game -> click -> Eversmile dungeon + tutorial panel. CLI test-dungeon-keeper-gameplay PASS. Evidence scratch/runs/20261010T0650Z-dungeon_keeper_demo-page-route; route + recipe in docs/re-notes/dungeon-keeper-demo.md. Remaining: quotable headful FPS (boat).
  note: 2026-10-10T03:00Z blocked on an orchestrator decision (board 02:43Z): the page cursor fix needs a change to timed-wait expiry in lib/thread-manager.js (DK drops every cursor move behind WaitForSingleObject(sem, 5 ms) held by the render thread across its frame; page waits expire on the real clock). RE trail in the 02:50Z note above.
  note: 2026-10-10T02:50Z claude:1863d2b5: page route BLOCKED by a page-only input defect (same as 10-03 headful). On main be3d5da3 the page reaches the main menu; the CLI route still PASSes (also with --batch-size=10000 and with a 20x slower clock). Guest RE (KEEPER95): wndproc mouse case 0x4d6a63 -> 0x4d2110 -> 0x4d2020 (delta mode, flag 0x51b674=1; last pos 0x762b70 tracks every page move) -> cursor commit 0x4d0220, which first does WaitForSingleObject(0xE0003, 5) via 0x4d7600 and returns -1 on failure; in the page cursor pos 0x761378 stays 320,240 and the clamp box 0x761360 is a sane 0,0,640,480, so the 5 ms try-lock is what fails. The render thread holds that semaphore across its frame (CLI census: Wait x2, Unlock, Lock, Release x2 per frame). Page timed waits expire on the real clock (thread-manager waitStartedAt/_waitNow) while an emulated frame takes far longer than 5 ms; CLI waits use the batch clock. Next: needs a scheduler decision (e.g. a timed wait on an object held by a runnable thread does not expire on wall time alone) + corpus A/B; then page route menu->Start New Game->dungeon and headful FPS on a boat.
  candidate: dungeon_keeper_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete ordinary menu-to-gameplay input route with exact failed-request logging; no active scene or specific compatibility fault established.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-dungeon_keeper_demo.json; scratch/runs/20261003-dungeon_keeper_demo-gameplay-restored5/result.json

- [x] Gameplay screenshot and FPS: DX-Ball
  id: GAMEPLAY-dxball
  status: done
  candidate: dxball
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete narrow evidence: reviewed control/gameplay images and three independent short instrumented windows,60.219 logical gameplay frames/s. Physical display FPS and sustained performance unknown; rejected attempts preserved.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-dxball.json; scratch/runs/20261003-dxball-logical-gameplay/result.json; scratch/runs/20261003-dxball-logical-gameplay/qualification.json

- [x] Gameplay screenshot and FPS: Elasto Mania
  id: GAMEPLAY-elasto-mania
  status: done (duplicate of the reviewed row at line 1496; was "ready")
  candidate: elasto-mania
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Ordinary Enter progression reaches Level16 NewWave motorcycle field. Up held1200ms overlaps loading, and only one final field capture is available; acceleration/control response is unverified. Gameplay frame measurement remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-elasto-mania.json; scratch/runs/20261003-elasto_mania-gameplay-restored3/result.json





- [x] Gameplay screenshot and FPS: freecell16
  id: GAMEPLAY-freecell16
  status: done (duplicate of the row at line 1513, which holds the review)
  claimed: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 self-claim 2026-10-10T06:55Z (no assignment 7 min after sol16 DONE)
  Result: 2026-10-10T06:59Z main f26b52210: F2 deals Game #28655; A/B: ace of diamonds -> home cell only in the clicking run (deal identical). Turn-based, no clock: no FPS; repaints follow input (7 idle vs 20 with move per 80 batches). Run scratch/runs/20261010T0700Z-freecell16-home-move; notes e9ba0439 (new docs/re-notes/freecell16.md).

  candidate: freecell16
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Setup and ordinary card move now pass on worker-owned input routing fix. Reviewed gameplay image saved; qualify a meaningful per-game frame measurement. Dialog clipping remains.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-freecell16.json; scratch/runs/20261003-freecell16-gameplay-worker-route/result.json; ops/handoffs/win16-dialog-worker-trap-20261003.md

- [x] Gameplay screenshot and FPS: Funtris
  id: GAMEPLAY-funtris
  status: done (duplicate of the row above; a312d9f4 reviewed by orchestrator 2026-10-10T06:33Z)
  candidate: funtris
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claimed 2026-10-10T06:30Z, no assignment 5+ min after snake DONE)
  Result: 2026-10-10T06:32Z main e309cb142: input A/B (3x Left moves the falling piece 3 columns only when pressed; identical before, same height). Gravity counter (not frames): one GetDC ret 0x416048 + 2 BitBlt per row, 2.5 rows/guest-s at Level 1, same at 10 ms tick. Run scratch/runs/20261010T0640Z-funtris-control-gravity; notes a312d9f4.
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Implement bounded gravity-update/input-response metrics from source plan; no proven complete-frame boundary, so gameplay FPS remains unknown. Reviewed gameplay/input saved; never relabel GDI tile blits or gravity updates as frames.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-funtris.json; scratch/runs/20261003-funtris-gameplay-restored2/result.json; ops/handoffs/funtris-frame-counter-plan-20261003.md

- [x] Gameplay screenshot and FPS: Gallinelle XXL
  id: GAMEPLAY-gallinelle-xxl
  status: done (duplicate of the reviewed row at line 1542; was "ready")
  candidate: gallinelle-xxl
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualify complete gameplay frame measurement; active hunting scene and ammo decrement reviewed, no hit or sustained-play claim.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/runs/20261003-gallinelle-gameplay/result.json; scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gallinelle-xxl.json

- [ ] Gameplay screenshot and FPS: GeneRally
  id: GAMEPLAY-generally
  status: review [duplicate row: status copied from its primary, 2026-10-10]
  candidate: generally
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (assigned by orchestrator 2026-10-10T06:08Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Run corrected post-countdown gate allowing00.00 before first movement; verify driving. Intro overlay stayed identical30sec until ordinary Enter acknowledged it. After countdown, track and car visible with no overlay/lights; timer00.00. Overly strict private gate incorrectly required nonzero timer before movement, so no driving input issued before120sec deadline. Gate corrected offline; no movement claim. FPS remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-generally.json; scratch/runs/20261003-generally-gameplay-restored4/result.json

- [ ] Gameplay screenshot and FPS: Beneath a Steel Sky GOG installer
  id: GAMEPLAY-gog-free-beneath-a-steel-sky
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: gog-free-beneath-a-steel-sky
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-beneath-a-steel-sky.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-beneath-a-steel-sky.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: The Elder Scrolls: Arena GOG installer
  id: GAMEPLAY-gog-free-elder-scrolls-arena
  status: review
  candidate: gog-free-elder-scrolls-arena
  owner: unowned
  prev-owner: /root/restore_evidence — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Fresh ordinary dungeon controls reviewed (right/left, short backward/forward, stable idle); root reviewing publication107 hashes/commit57e1a949. Separate scene-qualified FPS measurement remains open; no repeat gameplay required.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-elder-scrolls-arena.json; scratch/new-games-pipeline-20261005/arena-reserve/reserve.json; scratch/new-games-pipeline-20261005/arena-reserve/README.md; commitfaa9ad73; scratch/new-games-pipeline-20261005/arena/READY.md; scratch/new-games-pipeline-20261005/arena/validation.json; commit0cc092b7; scratch/runs/20261005-arena-save-directory-setup/result.json; scratch/new-games-pipeline-20261005/arena/DIRECTORY-READY.md; scratch/new-games-pipeline-20261005/arena/directory-validation.json; scratch/runs/20261005-arena-corrected-overlay-creator/result.json; scratch/new-games-pipeline-20261005/arena/PREFIX-READY.md; scratch/new-games-pipeline-20261005/arena/prefix-validation.json; scratch/runs/20261005-arena-dungeon-controls/result.json; commit57e1a949
  blocker: Gameplay accepted narrowly; FPS counter/sample not qualified. No missing declared asset or guest fault established.
  waiting-on: Source/evidence integration and separately scheduled measurement; no runtime held or user action.

- [ ] Gameplay screenshot and FPS: The Elder Scrolls II: Daggerfall GOG installer
  id: GAMEPLAY-gog-free-elder-scrolls-daggerfall
  status: backlog
  depends-on: NEW-GAME-DAGGERFALL-20261005
  candidate: gog-free-elder-scrolls-daggerfall
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Original fixtures are available and registered; new-game attempt6 reached opening parchment, no dungeon/control. Source route7 preparation in NEW-GAME-DAGGERFALL-20261005. After reviewed player control, perform separate scene-qualified presentation/FPS measurement; creator/story screens do not satisfy this combined task.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-elder-scrolls-daggerfall.json (historical missing-path record); scratch/new-games-pipeline-20261005/daggerfall-reserve/activation.json; main67205c27; scratch/runs/20261005-daggerfall-final-review-target-close/result.json; NEW-GAME-DAGGERFALL-20261005

- [ ] Gameplay screenshot and FPS: Flight of the Amazon Queen GOG installer
  id: GAMEPLAY-gog-free-flight-of-the-amazon-queen
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: gog-free-flight-of-the-amazon-queen
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-flight-of-the-amazon-queen.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-flight-of-the-amazon-queen.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: Lure of the Temptress GOG installer
  id: GAMEPLAY-gog-free-lure-of-the-temptress
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: gog-free-lure-of-the-temptress
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-lure-of-the-temptress.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-lure-of-the-temptress.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: Shadow Warrior Classic Complete GOG installer
  id: GAMEPLAY-gog-free-shadow-warrior-classic
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: gog-free-shadow-warrior-classic
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-shadow-warrior-classic.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-shadow-warrior-classic.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [~] Gameplay screenshot and FPS: Ultima IV: Quest of the Avatar GOG installer
  id: GAMEPLAY-gog-free-ultima-iv
  status: review
  candidate: gog-free-ultima-iv
  owner: /root/restore_evidence
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Ordinary overworld gameplay accepted and four reviewed screenshots published; new-game lane refilled with Arena. FPS/presentation measurement remains outstanding: bind actual DOSBox/GDI output to a scene-qualified counter and capture raw samples. Do not treat gameplay qualification as completion of this combined screenshot/FPS task.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures. Gameplay proof complete; measurement unverified.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gog-free-ultima-iv.json; scratch/new-games-pipeline-20261005/ultima4/preparation.json; scratch/new-games-pipeline-20261005/ultima4/READY.md; scratch/new-games-pipeline-20261005/ultima4/validation.json; scratch/runs/20261005-ultima4-character-creation/result.json; scratch/new-games-pipeline-20261005/ultima4/CONTINUATION.md; commit84150da2; scratch/runs/20261005-ultima4-post-creation-save-exit/result.json; scratch/new-games-pipeline-20261005/ultima4/save-exit-findings.md; scratch/new-games-pipeline-20261005/ultima4/SAVE-DIAGNOSTIC.md; scratch/new-games-pipeline-20261005/ultima4/save-diagnostic-validation.json; commit0ef64ef7; scratch/runs/20261005-ultima4-original-save-overlay-missing/validation.json; scratch/new-games-pipeline-20261005/ultima4/SAVE-OVERLAY-READY.md; scratch/new-games-pipeline-20261005/ultima4/save-overlay-validation.json; scratch/runs/20261005-ultima4-overworld-movement/result.json; scratch/runs/20261005-ultima4-overworld-movement/validation.json


- [ ] Gameplay screenshot and FPS: Grand Theft Auto 2 demo
  id: GAMEPLAY-gta2-demo
  status: backlog

  candidate: gta2-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-gta2-demo.json
  notes: Migration missing-file blocker cleared against current registered route: gta2_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Half-Life: Uplink
  id: GAMEPLAY-half-life-uplink-installer
  status: backlog

  candidate: half-life-uplink-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-half-life-uplink-installer.json
  notes: Migration missing-file blocker cleared against current registered route: halflife_uplink, halflife_uplink_installer. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Heroes of Might and Magic II demo
  id: GAMEPLAY-heroes-2-demo
  status: ready
  candidate: heroes-2-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Use verified adventure-map route and capture one isolated hero movement, then qualify complete-frame measurement.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-heroes-2-demo.json; scratch/runs/20261003-heroes2_demo-gameplay-restored15/result.json

- [x] Gameplay screenshot and FPS: Heroes of Might and Magic III demo
  id: GAMEPLAY-heroes-3-demo-installer
  status: done (duplicate of the reviewed row at line 1724; was "ready")
  candidate: heroes-3-demo-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualify complete-frame measurement during actual gameplay; retain narrow input scope from reviewed batch17 evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-heroes-3-demo-installer.json; scratch/runs/20261003-heroes3_demo-gameplay-restored17/result.json

- [ ] Gameplay screenshot and FPS: Hitman Demo 2 (Glide 3, experimental)
  id: GAMEPLAY-hitman_glide_demo
  status: backlog

  candidate: hitman_glide_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-hitman_glide_demo.json
  notes: Migration missing-file blocker cleared against current registered route: hitman_glide_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Hype Demo (Glide 3, experimental)
  id: GAMEPLAY-hype_glide_demo
  status: done (duplicate of the reviewed row at line 1753; was "ready")

  candidate: hype_glide_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay screenshots/control accepted: run20261005-hype-wh-getmessage-gameplay, root reviewed4shots, ordinary Enter/Space/Up/Down, main376abd87. Remaining task is scene-qualified frame FPS only; no repeat screenshot or pending merge task.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-hype_glide_demo.json
  notes: Migration missing-file blocker cleared against current registered route: hype_glide_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Icewind Dale demo
  id: GAMEPLAY-icewind-dale-demo
  status: backlog

  candidate: icewind-dale-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-icewind-dale-demo.json
  notes: Migration missing-file blocker cleared against current registered route: icewind_dale_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Icy Tower
  id: GAMEPLAY-icy-tower
  status: done
  candidate: icy-tower
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Narrow screenshot/measurement requirement fulfilled:49.98875253 logicalsubmissions/s,50frames/1000.225ms on5ff4844e, one instrumented mostlystationary platform sample after ordinary movement/jump. Sustained performance, physical displayFPS andp95 remain unknown.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: ops/handoffs/icy-tower-logical-measurement-20261003.md; scratch/runs/20261003-icy-tower-logical-gameplay/result.json; scratch/gameplay-icy-tower-counter-20261003/attempt7/root-measurement-review.json

- [x] Gameplay screenshot and FPS: Jardinains!
  id: GAMEPLAY-jardinains
  status: done (duplicate of the row at line 1797, which holds the review)
  candidate: jardinains
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete ordinary menu-to-gameplay route; preserve menu-only evidence and unknown input mapping.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-jardinains.json; scratch/runs/20261003-jardinains-gameplay-restored12/result.json
  blocked-since: 2026-10-03T08:42:45.967Z

- [x] Gameplay screenshot and FPS: Jazz Jackrabbit 2 demo installer
  id: GAMEPLAY-jazz-jackrabbit-2-demo-installer
  status: done (duplicate of the row at line 1812, which holds the review)
  candidate: jazz-jackrabbit-2-demo-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete intro/menu route with timely ordinary Escape inputs and reach a player-controlled level; previous intro-only deadline is inconclusive.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-jazz-jackrabbit-2-demo-installer.json; scratch/runs/20261003-jazz2_demo-gameplay-restored15/result.json

- [x] Gameplay screenshot and FPS: jigssawme
  id: GAMEPLAY-jigssawme
  status: done (duplicate of the row above; 96a300c1 reviewed+closed by orchestrator 2026-10-10T08:05Z, scratch/runs/20261010-jigssawme-piece-lock-ab)
  candidate: jigssawme
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Narrow gameplay complete: root-reviewed ordinary green-piece drag, run20261005-jigssawme-clipped-puzzle-drag,37 hashes verified, evidence main0cf9ff1d/175395a9 and Telegram478/479. Remaining: full-board640x480 clipping investigation and supported scene-qualified FPS measurement; no solve/snapping claim. Ready queue; restore_evidence refilled with WinBoard.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-jigssawme.json; scratch/runs/20261003-jigssawme-custom-bmp-image-failure/result.json; scratch/new-games-pipeline-20261004/jigssawme/dialog-repair-20261005/validation-result.json; ops/handoffs/jigssawme-resume-20261005.md; scratch/new-games-pipeline-20261004/jigssawme/image-repair-20261005/main-contract-attempt2/receipt.json; scratch/new-games-pipeline-20261004/jigssawme/image-repair-20261005/commit-receipt.json; scratch/runs/20261005-jigssawme-main-vb-image-startup/validation.json; scratch/new-games-pipeline-20261004/jigssawme/com-recovery-20261005/preparation.json; scratch/runs/20261005-jigssawme-com-recovered-bmp-open-exit/validation.json; ops/handoffs/jigssawme-com-recovery-20261005.md; scratch/new-games-pipeline-20261004/jigssawme/open-exit-diagnostic-20261005/continuation/attempt1/analysis.json; commit2462d5f33f9c327da64258510646bf1a3ee75eca; scratch/new-games-pipeline-20261004/jigssawme/open-exit-diagnostic-20261005/later-phase/repair/validation.json; scratch/runs/20261005-jigssawme-directx7-tickcount-image-error/validation.json; commit516adf3918a0571e510b530526dec478faba32d7; commit07270b64a11a78cc2e17b08d6a04fd5ff75a4cf0; commitcc424fb3542fcc589cd19f23d9b165bed48701c1; scratch/new-games-pipeline-20261004/jigssawme/surface-blt-repair-20261005/attempt1/receipt.json; scratch/new-games-pipeline-20261004/jigssawme/surface-blt-repair-20261005/corrected/color-fill/color-key/blt-fast/fore-color/draw-text/terminal-slice/attempt1/validation.json; scratch/new-games-pipeline-20261004/jigssawme/directdraw34-repair-20261005/current-production-gates-attempt2/receipt.json; scratch/new-games-pipeline-20261004/jigssawme/directdraw34-repair-20261005/final-current-readiness.json; commit54fac8f7072ba56e1c7b8e7b1d0a433337f22d18; scratch/new-games-pipeline-20261004/jigssawme/directdraw34-repair-20261005/current-production-gates-attempt3/receipt.json; scratch/new-games-pipeline-20261004/jigssawme/directdraw34-repair-20261005/ordinary-browser/attempt2/validation.json; commitc2f1e6a9; main2f9bbd43 (52c86/93074/54fac/c2f1 rebased d80b454a/65dbb1ad/aa73c4f7/2f9bbd43); scratch/new-games-pipeline-20261004/jigssawme/directdraw34-repair-20261005/next-error; commitaa12c03fb684b0a5899af1dc93c9d867bd2f4247; scratch/new-games-pipeline-20261004/jigssawme/getwindowrect-repair-20261005/preparation.json; commit277a6150500a22c1e424bbdf51c86075324e9fb5; commit0b3c7f044380d611936f0f6c7f7c8fc1c8259907; scratch/new-games-pipeline-20261004/jigssawme/getwindowrect-repair-20261005/production-gates/receipt.json; commita72a32cf3dfc66d2172ea5388eb52f48d29c2ddf; scratch/runs/20261005-jigssawme-getwindowrect-open-gray/validation.json; scratch/new-games-pipeline-20261004/jigssawme/getwindowrect-repair-20261005/next-presentation-plan.json; commit36c70cec360fcdf27b71b42b76417dc1955cada4; scratch/new-games-pipeline-20261004/jigssawme/blt-clipping-repair-20261005/preparation.json; commitb9155c8cb3761bf50b1931b824e0e8a50ce75fd5; commita8bd56a01138eab7753906fcb6f1f8bd62d98c55; main5690843b; scratch/new-games-pipeline-20261004/jigssawme/blt-clipping-repair-20261005/production-gates/receipt.json; scratch/runs/20261005-jigssawme-clipped-puzzle-drag/validation.json; ops/handoffs/jig-clipped-puzzle-input-20261005.md

- [x] Gameplay screenshot and FPS: Liquid War
  id: GAMEPLAY-liquid-war
  status: done (duplicate of the row at line 1839, which holds the review)
  candidate: liquid-war
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Reviewed arena with red/yellow teams white walls and04:00 timer before ordinary cursor move. Final capture shows03:35 timer and changed team distribution; autonomous simulation also changes this, so cursor-steering response not independently verified. FPS remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-liquid-war.json; scratch/runs/20261003-liquid_war-gameplay-restored4/result.json

- [x] Gameplay screenshot and FPS: Little Fighter 2 installer
  id: GAMEPLAY-little-fighter-2-installer
  status: done (duplicate of the reviewed row at line 1853; was "ready")
  candidate: little-fighter-2-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete arena rendering reviewed after primary-size repair; qualify full-frame measurement. Retain reduced-roster limitation and earlier limited movement response; latest control observation is combat-confounded.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-little-fighter-2-installer.json; scratch/runs/20261003-little_fighter_2-gameplay-primary-repaired/result.json
  blocked-since: 2026-10-03T08:42:45.967Z


- [ ] Gameplay screenshot and FPS: mcm
  id: GAMEPLAY-mcm
  status: backlog

  candidate: mcm
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-mcm.json
  notes: Migration missing-file blocker cleared against current registered route: mcm. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Moorhuhn 2
  id: GAMEPLAY-moorhuhn-2
  status: done
  candidate: moorhuhn-2
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Retain qualified single-sample logical measurement and substantial observer/cooperative overhead limitations; physical and normal uninstrumented FPS remain unknown.
  Done: Reviewed active-round screenshots and ordinary shot; root-qualified8 complete logical submissions/1006.26ms=7.95 per second. One heavily instrumented cooperative sample; no physical, normal or sustained FPS claim.
  Evidence: scratch/runs/20261003-moorhuhn2-logical-gameplay/result.json; scratch/runs/20261003-moorhuhn2-logical-gameplay/qualification.json; scratch/gameplay-moorhuhn2-counter-20261003/attempt6/root-evaluation.json


- [ ] Gameplay screenshot and FPS: Moorhuhn 3 Bonus Puzzles
  id: GAMEPLAY-moorhuhn-3-puzzles
  status: duplicate (see primary row above, owner claude:202b4b39)
  candidate: moorhuhn-3-puzzles
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Cover other puzzle variants and qualify complete-frame measurement; Fisch piece drag reviewed only.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-moorhuhn-3-puzzles.json; scratch/runs/20261003-moorhuhn_3_puzzle_fisch-gameplay-restored14/result.json


- [x] Gameplay screenshot and FPS: Moorhuhn Winter-Edition
  id: GAMEPLAY-moorhuhn-winter
  status: done
  candidate: moorhuhn-winter
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Retain qualified single-sample logical measurement and explicit cooperative/instrumentation limits; physical display FPS remains unknown.
  Done: Reviewed active-round screenshots and ordinary shot; root-qualified37 complete logical submissions/1017.45ms=36.37 per second. One instrumented cooperative sample; no physical or sustained FPS claim.
  Evidence: scratch/runs/20261003-moorhuhn-winter-logical-gameplay/result.json; ops/handoffs/moorhuhn-winter-frame-counter-plan-20261003.md

- [ ] Gameplay screenshot and FPS: Morrowind (retail, own ISO)
  id: GAMEPLAY-morrowind
  status: backlog

  candidate: morrowind
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-morrowind.json
  notes: Migration missing-file blocker cleared against current registered route: morrowind. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Hearts
  id: GAMEPLAY-mshearts16
  status: done (duplicate of the reviewed row at line 1939; was "ready")

  candidate: mshearts16
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Dealer selection, ordinary setup, offline hand and three-card pass now reviewed. Qualify game-specific frame measurement; clipping tracked separately under WIN16-DIALOG-GEOMETRY.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-mshearts16.json; scratch/win16-dialog-worker-diagnostic-20261003/hearts-group/; ops/handoffs/win16-dialog-worker-trap-20261003.md

- [ ] Gameplay screenshot and FPS: mw3
  id: GAMEPLAY-mw3
  status: done (4200abf30 + 526b1bb43: perf.logicalFrame step, ~5 GAME/s CPU-bound on a GPU-less headful boat; gameplay reviewed earlier; accepted by orchestrator)

  candidate: mw3
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T21:40Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-mw3.json
  notes: Migration missing-file blocker cleared against current registered route: mw3. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Need for Speed II (retail CD)
  id: GAMEPLAY-need-for-speed-2-full
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: need-for-speed-2-full
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-need-for-speed-2-full.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-need-for-speed-2-full.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: Need for Speed II SE (retail CD)
  id: GAMEPLAY-need-for-speed-2-se-full
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: need-for-speed-2-se-full
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-need-for-speed-2-se-full.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-need-for-speed-2-se-full.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [!] Gameplay screenshot and FPS: Need for Speed III: Hot Pursuit Demo
  id: GAMEPLAY-need-for-speed-3-demo
  status: blocked
  candidate: need-for-speed-3-demo
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Declared assets are present; complete the existing review gate before gameplay or FPS work.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-need-for-speed-3-demo.json
  blocker: Renderer identity qualification previously failed; review ops/handoffs/nfs3-backend-review.md before new runtime/timing.
  waiting-on: coordinator source/evidence review; no user decision

- [x] Gameplay screenshot and FPS: NetHack for Windows
  id: GAMEPLAY-nethack-win32
  status: done (duplicate of the reviewed row at line 2017; was "ready")
  candidate: nethack-win32
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a complete-frame measurement.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-nethack-win32.json; scratch/runs/20261003-nethack_win32-gameplay-restored11/result.json

- [ ] Gameplay screenshot and FPS: Need for Speed II SE Demo
  id: GAMEPLAY-nfs2se_glide_demo
  status: backlog

  candidate: nfs2se_glide_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-nfs2se_glide_demo.json
  notes: Migration missing-file blocker cleared against current registered route: nfs2se_glide_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Pinball
  id: GAMEPLAY-pinball
  status: done (duplicate of the row at line 2046, which holds the review)
  claimed: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 self-claim 2026-10-10T05:34Z (no assignment 5 min after Crimsonland DONE)
  Result: 2026-10-10T05:55Z main 53cf4592c: 2-guest-s plunger launches the ball (score 8250); Z / '/' each move only their own flipper (704/0, 0/728 px); byte-identical runs. Frame = GetDC ret 0x1003454 (+ dirty-rect StretchDIBits + ReleaseDC), 1831 per 6 guest-s; budget-independent but follows batch-clock granularity (uncapped loop) -> no FPS quoted. Run scratch/runs/20261010T0555Z-pinball-control-frames; notes ba18eb28.
  candidate: pinball
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Reviewed Space Cadet table with BALL 1 and score 0 after F2. Space held 1200ms and Z held 300ms; captures show changing table lights but no verified ball movement or flipper response. Gameplay scene only, no successful launch/control claim. Gameplay frame measurement remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-pinball.json; scratch/runs/20261003-pinball-gameplay-restored1/result.json

- [x] Gameplay screenshot and FPS: pinball_plus95
  id: GAMEPLAY-pinball_plus95
  status: done (duplicate of the reviewed row at line 2061; was "ready")
  candidate: pinball_plus95
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-pinball_plus95.json; scratch/runs/20261003-pinball_plus95-gameplay-restored10/result.json

- [ ] Gameplay screenshot and FPS: Sid Meier's Pirates! (2004)
  id: GAMEPLAY-pirates-2004
  status: backlog

  candidate: pirates-2004
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-pirates-2004.json
  notes: Migration missing-file blocker cleared against current registered route: pirates_2004. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Pyramid
  id: GAMEPLAY-pyramid
  status: done (duplicate of the row at line 2091, which holds the review)
  claimed: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 self-claim 2026-10-10T06:41Z (no assignment 7 min after funtris DONE)
  Result: 2026-10-10T06:43Z main 889e6a90b: completed legal move by A/B (Q+A pair removed, ace to discard, score -168 -> -156, only when clicked). Turn-based, no FPS: idle 1 Hz clock repaint (BeginPaint ret 0x410dd1 via InvalidateRect 0x403f35, same at 100/200 ms ticks) + 2 repaints per move. Run scratch/runs/20261010T0650Z-pyramid-pair-removal; notes c9bfb6e8 (new docs/re-notes/pyramid.md).
  candidate: pyramid
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: After Start and real Game > New menu clicks, bottom-row second card (2 hearts) visibly inverts after ordinary click. Selection only, no pair removal/completed deal. Gameplay frame measurement remains unqualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-pyramid.json; scratch/runs/20261003-pyramid-gameplay-restored2/result.json


- [x] Gameplay screenshot and FPS: QBob
  id: GAMEPLAY-qbob
  status: done (duplicate of the reviewed row at line 2107; was "ready")
  candidate: qbob
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a complete-frame measurement.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-qbob.json; scratch/runs/20261003-qbob-gameplay-restored11/result.json

- [ ] Gameplay screenshot and FPS: Quake II Demo
  id: GAMEPLAY-quake-2-demo-installer
  status: backlog

  candidate: quake-2-demo-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-quake-2-demo-installer.json
  notes: Migration missing-file blocker cleared against current registered route: quake2_demo, quake2_demo_installer. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: RollerCoaster Tycoon
  id: GAMEPLAY-rct
  status: done (duplicate of the reviewed row at line 2136; was "ready")
  candidate: rct
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualify complete-frame measurement during actual gameplay; retain narrow input scope from reviewed batch17 evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-rct.json; scratch/runs/20261003-rct-gameplay-restored17/result.json

- [ ] Gameplay screenshot and FPS: Alien Shooter
  id: GAMEPLAY-reflexive-alien-shooter
  status: backlog

  candidate: reflexive-alien-shooter
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-reflexive-alien-shooter.json
  notes: Migration missing-file blocker cleared against current registered route: alien_shooter. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [!] Gameplay screenshot and FPS: Collapse! Crunch
  id: GAMEPLAY-reflexive-collapse-crunch
  status: blocked
  candidate: reflexive-collapse-crunch
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Declared assets are present; complete the existing review gate before gameplay or FPS work.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-reflexive-collapse-crunch.json
  blocker: Association integration and completed-frame semantics remain unaccepted; review ops/handoffs/serious-review-migration-freeze.md before runtime.
  waiting-on: coordinator source/evidence review; no user decision

- [x] Gameplay screenshot and FPS: Crimsonland
  id: GAMEPLAY-reflexive-crimsonland
  status: done (duplicate of the row at line 2179, which holds the review)
  candidate: reflexive-crimsonland
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Localize observed early ExitProcess0 after launcher Play using saved guest/loader evidence, then repair and requalify gameplay.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-reflexive-crimsonland.json; scratch/runs/20261003-crimsonland-gameplay-restored16/result.json

- [ ] Gameplay screenshot and FPS: Ricochet Xtreme
  id: GAMEPLAY-reflexive-ricochet-xtreme
  status: backlog

  candidate: reflexive-ricochet-xtreme
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-reflexive-ricochet-xtreme.json
  notes: Migration missing-file blocker cleared against current registered route: ricochet_xtreme. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Zuma Deluxe
  id: GAMEPLAY-reflexive-zuma-deluxe
  status: done (duplicate of the reviewed row at line 2209; was "ready")
  candidate: reflexive-zuma-deluxe
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Diagnose loading-screen progress on actual owning threads; BASS startup failure cleared, fallback MSVCRT present. No active gameplay/FPS yet.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/runs/20261003-zuma-nested-loader-qualification/result.json; scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-reflexive-zuma-deluxe.json



- [x] Gameplay screenshot and FPS: Runenlegen
  id: GAMEPLAY-runenlegen
  status: done (duplicate of the reviewed row at line 2225; was "ready")
  candidate: runenlegen
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Full12x8 Beginner board and ordinary placement already verified on14aadaac; geometry fixce4f60b2 is in main640b85a4/current main. Do not repeat screenshot/integration work. Remaining task is scene-qualified FPS measurement with valid counter and exact current build identity.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-runenlegen.json; scratch/runs/20261003-runenlegen-gameplay-restored13/result.json; scratch/new-games-pipeline-20261004/runenlegen-preparation/frame-qualification/root-review.json; main ce4f60b2

- [x] Gameplay screenshot and FPS: ScummVM + Flight of the Amazon Queen
  id: GAMEPLAY-scummvm-fotaq
  status: done (duplicate of the reviewed row at line 2239; was "ready")
  candidate: scummvm-fotaq
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Reviewed gameplay and limited input response; qualify complete-frame measurement. No full-game compatibility claim.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-scummvm-fotaq.json; scratch/runs/20261003-scummvm_fotaq-gameplay-restored13/result.json

- [ ] Gameplay screenshot and FPS: Serious Sam: The First Encounter Demo
  id: GAMEPLAY-serious-sam-demo
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: serious-sam-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-serious-sam-demo.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-serious-sam-demo.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [x] Gameplay screenshot and FPS: SimCity 2000 Demo
  id: GAMEPLAY-simcity2000_demo
  status: done (duplicate of the reviewed row at line 2269; was "review")
  note: 2026-10-10T06:45Z REVISED 922c5e07 (main, ls-remote verified, full build green, test re-run on rebased main PASS): the earlier 0% null band was a same-phase capture coincidence -- SC2K's map palette-animates on screen (16.8% RGB change in 3 batches; 23% of the main window's 8-bit surface uses animated indices). Test now judges by palette indices: animation frames change 0 indices, rotate-left changes 37.4%. Animation clock via --count hit counter at 0x4489ac: 90 AnimatePalette calls / 16 guest-s = 5.63/guest-s, deterministic. Caveat closed. Evidence scratch/runs/20261010T0615Z-simcity2000_demo-control-animation (refreshed).
  note: 2026-10-10T06:20Z 42e14a04 (main, ls-remote verified, full build green): test/test-simcity2000-gameplay.js -- route fixed (Load Demo City now (315,148); 20000-block/16 ms batches), control response rotate-left 35.6% map change vs 0.00% null band, animation clock = AnimatePalette from one site 0x4489ac: 81 ticks / 16 guest-s = 5.06 per guest-second, identical across two runs. SC2K has no frame loop (full-map BitBlt ~0.25/guest-s). Open caveat: on-screen pixel change from the palette ticks not yet shown. Evidence scratch/runs/20261010T0615Z-simcity2000_demo-control-animation.
  candidate: simcity2000_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a complete-frame measurement.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-simcity2000_demo.json; scratch/runs/20261003-simcity2000_demo-gameplay-restored11/result.json

- [x] Gameplay screenshot and FPS: SimCity 2000 Network Edition
  id: GAMEPLAY-simcity2000_net
  status: done (duplicate of the reviewed row at line 2284; was "review")
  note: 2026-10-10T08:25Z fdf9d11f (main, ls-remote verified, full build green): test-simcity2000-net-vlan-gameplay now 14 checks, 14/14 PASS end to end on boat bx_f79j7yte -- existing 6 + Mayor control response (toolbar rotate-left 142,56: 79.9% map change vs 0.0% idle, view holds, zoom-in 78.0%) + animation clock (AnimatePalette 0x46d08d/0x46d107 via --count == API census; 760 calls / 320 guest-s, 4.2/guest-s in the late window). Buy Land did not reproduce (re-notes corrected). Evidence scratch/runs/20261010T0715Z-simcity2000_net-boat + scratch/runs/20261010T0800Z-simcity2000_net-rotate. Boat-only test.
  note: 2026-10-10T08:00Z boat bx_f79j7yte granted; subagent running the Mayor-client rotate control + merged test diff (rotate check + palette counter).
  note: 2026-10-10T07:56Z blocked on a boat (requested 07:52Z): the control-response run (client toolbar rotate 142,56) needs the 3-process route, which is boat-only. Everything else is in the 07:55Z note.
  note: 2026-10-10T07:55Z boat run: existing net test PASS 6/6 on 922c5e07; Buy Land control does NOT reproduce (clicks arrive and dispatch, no visible change; the 09-28 'confirmed' note is an uncommitted local edit, not on main); client animation clock AnimatePalette 0x46d08d/0x46d107 = 4.2/guest-s over batches 305000-320000 (route ~6% nondeterministic). Next: control response via the client toolbar rotate (142,56) on a new boat; Buy Land kept as an open lead. Evidence scratch/runs/20261010T0715Z-simcity2000_net-boat.
  candidate: simcity2000_net
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Prepare and review ordinary local virtual-peer browser route per ops/handoffs/gameplay-network-preparation-20261003.md, then capture actual gameplay; all declared files present.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-simcity2000_net.json

- [ ] Gameplay screenshot and FPS: Sid Meier's SimGolf Demo
  id: GAMEPLAY-simgolf-demo-installer
  status: backlog

  candidate: simgolf-demo-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-simgolf-demo-installer.json
  notes: Migration missing-file blocker cleared against current registered route: simgolf_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [x] Gameplay screenshot and FPS: Rattler
  id: GAMEPLAY-snake
  status: done (duplicate of the row above; 87335f1b reviewed by orchestrator 2026-10-10T06:30Z)
  candidate: snake
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claimed 2026-10-10T06:20Z, no assignment 8 min after Diablo demo DONE)
  Result: 2026-10-10T06:30Z main 18e036475: steering proven by A/B (one Left at b420 turns the snake away from the bar and it lives; no-input run dies on the bar, life lost). GDI game: step counter = tail-erase PatBlt ret 0x1002a18, 16.7 steps/guest-s at both 20 and 10 ms ticks (BitBlt/GetDC are redraws, vary). Run scratch/runs/20261010T0630Z-snake-control-steps; notes 87335f1b (new docs/re-notes/rattler-race.md).
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Early route now captures living upward movement without life loss; steering remains unverified. Qualify ordinary steering and source-backed frame timing; prior failed run retained.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-snake.json; scratch/runs/20261003-snake-gameplay-early-route/result.json

- [x] Gameplay screenshot and FPS: Snood
  id: GAMEPLAY-snood
  status: done (reconciled 2026-10-10 by orchestrator: on main, reviewed)
  note: 2026-10-06T19:15Z fixed 97aae839: phone desktop min 1024x768 + no auto-maximize for Snood; board fully drawn at 375x667 and 667x375 (scratch/runs/20261006T1850Z-snood-board/result.json).
  note: 2026-10-06T18:38Z claude:1863d2b5: no defect found on CLI or in the page (scratch/runs/20261006T1835Z-snood-survey/result.json): dialogs, title, New Game, aiming/shots, score, Snoods Used, danger gauge + ceiling drop, menus, Big Window, DirectSound. Two leads ruled out (menu-bar click mid-game = ClipCursor-faithful; no radio bullets = Snood never calls CheckMenuRadioItem at startup). Blocked on the user's description of the bug (screen / action / browser+device); orchestrator asked 18:32Z.
  candidate: snood
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restored fixtures and ordinary frozenCLI mouse gameplay verified84075; root-reviewed board/shot4623changedpixels. Scene-qualified FPS remains unmeasured; collect meaningful real-time frame evidence when performance slot available.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/runs/20261005-snood-restored-gameplay/result.json; mainbc6c8f37 restoration receipt; Telegram460


- [x] Gameplay screenshot and FPS: sol16
  id: GAMEPLAY-sol16
  status: done (duplicate of the row at line 2347, which holds the review)
  candidate: sol16
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Reviewed limited gameplay input and screenshots saved; qualify a game-specific frame counter before publishing FPS. Initial seven-column tableau visible, but caption area is blank gray. Ordinary stock click exposes three waste cards. Limited stock draw works; caption defect remains, no complete-game or FPS claim.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-sol16.json; scratch/runs/20261003-sol16-gameplay-ready2/result.json


- [x] Gameplay screenshot and FPS: StarCraft Shareware
  id: GAMEPLAY-starcraft-shareware
  status: done (duplicate of the reviewed row at line 2362; was "review")
  candidate: starcraft-shareware
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Result (2026-10-10T03:30Z): headful browser on boat, main 3f9c84318 (wasm f873b89e), registered cooperative ophelia terran1 route -> Terran base. Control: left-click selects a Marine, right-click at (300,330) moves it there. Frame measurement: StarCraft's own game-step counter (perf.logicalFrame 0x004b29f0 + verifier 0x004411f7, 1:1 at every read) 17.6 / 17.9 / 17.7 steps/s over three ~6 s samples (107/107/115 steps), i.e. the game's own 'Fast' pace; presents 69-71/s; page ~31 fps on a GPU-less boat. Raw counter reads in samples-raw.jsonl. Evidence scratch/runs/20261010T0325Z-starcraft_shareware-gameplay-fps. Probe gains rdown/rup (d8a00c63f).
  Evidence: scratch/runs/20261010T0325Z-starcraft_shareware-gameplay-fps/result.json
  Next: Reviewed gameplay and limited input response; qualify complete-frame measurement. No full-game compatibility claim.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-starcraft-shareware.json; scratch/runs/20261003-starcraft_shareware-gameplay-restored13/result.json
  blocked-since: 2026-10-03T08:42:45.967Z

- [x] Gameplay screenshot and FPS: Taipei
  id: GAMEPLAY-taipei
  status: done (duplicate of the reviewed row at line 2378; was "ready")
  candidate: taipei
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Reviewed limited gameplay input and screenshots saved; qualify a game-specific frame counter before publishing FPS. Personally reviewed title, populated Game #28753 board and ordinary click: top-left tile changes to magenta selection highlight. No matching pair removal or completed game is claimed; no FPS measurement.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-taipei.json; scratch/runs/20261003-taipei-gameplay-ready/result.json

- [ ] Gameplay screenshot and FPS: tetravex
  id: GAMEPLAY-tetravex
  status: superseded
  candidate: tetravex
  owner: unowned
  superseded-by: the earlier GAMEPLAY-tetravex row (done by claude:d44753dd 2026-10-10, 1b3b8955e; duplicate row)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay board and clean ordinary tile-drag response reviewed. Define a meaningful complete-frame counter or document event-driven rendering limits; FPS remains unknown.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-tetravex.json; scratch/runs/20261003-tetravex-gameplay-drag-restored/result.json

- [x] Gameplay screenshot and FPS: TetriNET
  id: GAMEPLAY-tetrinet
  status: done (duplicate of the reviewed row at line 2415; was "review")
  note: 2026-10-10T10:37Z claude:1863d2b5 DONE, pending review. Root cause of the failed A/B: renderer _findWatEditTarget called WAT edit_command_target(), which set_focus'es the first visible EDIT anywhere, so every key left the Playing Fields form. Fix f5fa852b6 (+ test-wat-edit-target-focus.js). ab512bbe6: test-vlan-tetrinet A/B via VLAN_AB_VK, run.js B:hit-counts, docs/re-notes/tetrinet.md. Boat bx_evj8bmv6, 2 rounds identical: none col 5 stays, Left x6 col 5->0, Space x6 stacks pieces. Counter pinned to batches 5300145..5300445 (60 guest-s): StretchBlt cell blits 4.40/4.33/7.57 per guest-s (none/Left/Space); draw-on-change, not a fixed fps. Evidence scratch/runs/20261010T1035Z-tetrinet-focus-ab (reviewed). No physical/browser FPS claim.
  note: 2026-10-10T09:35Z boat run (bx_4urhz2ah, stopped): unchanged test-vlan-tetrinet PASS 13/13 (but the client's match has already ended in its screenshots -- the test proves a game starts, not that it stays live). Input A/B FAILS: on the host ('bob') six Left and six Space presses leave the falling piece exactly where the no-key run has it (cols 5-7), because every key is routed to hwnd 0x10043, the partyline chat edit: raising or clicking the Playing Fields form never moves keyboard focus there (Delphi form, KeyPreview). Frame counter: field drawn by per-cell StretchBlt (ret 0x419f7b), ~7.2 calls/guest-s, input- and peer-dependent. Next: fix focus hand-off when a Delphi form is shown/activated, then rerun the A/B. Evidence scratch/runs/20261010T0900Z-tetrinet-boat (notes.txt).
  note: 2026-10-10T08:52Z boat bx_4urhz2ah granted; subagent running the 2-seat route + input A/B (Left/Space) + frame counter.
  note: 2026-10-10T08:46Z blocked on a boat (requested 08:42Z): the two-seat route is 2 processes x up to 300 s, too heavy for this box.
  note: 2026-10-10T09:10Z claude:1863d2b5: route = test-vlan-tetrinet (2 processes, boat); plan input A/B on the host + frame counter; boat requested.
  candidate: tetrinet
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Qualify complete gameplay frame measurement. Local two-seat join and limited host Left/Space response reviewed; no external network, sustained-play or physical FPS claim.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-tetrinet.json; scratch/runs/20261003-tetrinet-local-gameplay/result.json


- [x] Gameplay screenshot and FPS: Total Annihilation Demo
  id: GAMEPLAY-total_annihilation_demo
  status: done (duplicate of the reviewed row at line 2429; was "ready")
  candidate: total_annihilation_demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-total_annihilation_demo.json; scratch/runs/20261003-total_annihilation_demo-gameplay-restored5/result.json

- [x] Gameplay screenshot and FPS: Tile World
  id: GAMEPLAY-tworld
  status: done (duplicate of the reviewed row at line 2442; was "ready")
  candidate: tworld
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Reviewed Level1 ordinary chip collection6→3 is complete; callback repair9a996fc1 is in current main. Do not repeat screenshot, rebase or integration work. Remaining task is scene-qualified FPS with source-backed counter and exact runtime identity.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/runs/20261005-tworld-main6a-callback-gameplay; ops/handoffs/tworld-wave-callback-integration-20261005.md; main9a996fc1; root-scene-review.json

- [ ] Gameplay screenshot and FPS: Unreal Special Edition OEM demo
  id: GAMEPLAY-unreal-special-edition
  status: backlog

  candidate: unreal-special-edition
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-special-edition.json
  notes: Migration missing-file blocker cleared against current registered route: unreal_special_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Unreal Tournament 2003 demo
  id: GAMEPLAY-unreal-tournament-2003-demo
  status: backlog

  candidate: unreal-tournament-2003-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-2003-demo.json
  notes: Migration missing-file blocker cleared against current registered route: ut2003_demo, ut2003_demo_server. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Unreal Tournament 2004 demo
  id: GAMEPLAY-unreal-tournament-2004-demo
  status: backlog

  candidate: unreal-tournament-2004-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-2004-demo.json
  notes: Migration missing-file blocker cleared against current registered route: ut2004_demo. Historical missing-path report is superseded for this route; gameplay remains unverified.


- [ ] Gameplay screenshot and FPS: Unreal Tournament 3 demo installer
  id: GAMEPLAY-unreal-tournament-3-demo-installer
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: unreal-tournament-3-demo-installer
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-3-demo-installer.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-3-demo-installer.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [ ] Gameplay screenshot and FPS: Unreal Tournament demo
  id: GAMEPLAY-unreal-tournament-demo-348
  status: backlog
  depends-on: MIG-FIXTURE-RESTORE
  candidate: unreal-tournament-demo-348
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Restore the exact missing fixture paths in the task evidence, then qualify the ordinary gameplay route.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-demo-348.json
  blocker: Required fixture files unavailable; exact paths and unknown manifest dependencies are listed in scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-unreal-tournament-demo-348.json.
  waiting-on: MIG-FIXTURE-RESTORE verification receipt; shared transfer dependency, no user decision
  blocked-since: 2026-10-03T08:42:45.967Z

- [x] Gameplay screenshot and FPS: Warcraft III: Reign of Chaos Demo
  id: GAMEPLAY-warcraft3-demo
  status: done (duplicate of the reviewed row at line 2537; was "ready")
  candidate: warcraft3-demo
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Diagnose profile-screen guest wait using saved owning-thread state; no gameplay or FPS qualified.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-warcraft3-demo.json; scratch/runs/20261003-warcraft3-profile-stall/result.json




- [x] Gameplay screenshot and FPS: wep16_cruel
  id: GAMEPLAY-wep16_cruel
  status: done (duplicate of the reviewed row at line 2556; was "review (b5684b431 Win16 SW_MAXIMIZE invalidates the maximize")
  candidate: wep16_cruel
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claim 2026-10-10T08:28Z, no assignment 5+ min after wep16_jigsawed DONE(review))
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_cruel.json; scratch/runs/20261003-wep16_cruel-gameplay-restored7/result.json

- [ ] Gameplay screenshot and FPS: wep16_freecell
  id: GAMEPLAY-wep16_freecell
  status: done (d81f506d6: corrupt WEP2 CARDS.DLL replaced with the clean build; select/move works; reviewed by orchestrator)
  candidate: wep16_freecell
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claim 2026-10-10T12:19Z, no assignment 5+ min after outline-cascade DONE(review))
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_freecell.json; scratch/runs/20261003-wep16_freecell-gameplay-restored10/result.json





- [x] Gameplay screenshot and FPS: wep16_jigsawed
  id: GAMEPLAY-wep16_jigsawed
  status: done (duplicate of the reviewed row at line 2583; was "review (f4f937b3f Thunder OK WM_COMMAND + Win16 USER.59 SetA")
  candidate: wep16_jigsawed
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claim 2026-10-10T07:52Z, no assignment 5+ min after jigssawme DONE(review))
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Capture originating instruction/stack for RuntimeError after About creation; ordinary capture does not prove close-click causality. All declared/import DLLs present; no missing guest path established.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_jigsawed.json; scratch/runs/20261003-wep16_jigsawed-gameplay-restored9/result.json; scratch/batch9-blocker-count-audit-20261003.json

- [x] Gameplay screenshot and FPS: wep16_klotski
  id: GAMEPLAY-wep16_klotski
  status: done (duplicate of the reviewed row at line 2599; was "review, partial (9866f4875 + fb0443c6a re-notes; scratch/run")
  candidate: wep16_klotski
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T08:42Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Reviewed active Daisy puzzle and one ordinary tile-move response on5ff4844e; qualify frame measurement separately, retain setup clipping and picking-offset caveats.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_klotski.json; scratch/runs/20261003-wep16_klotski-gameplay-modal-repaired/result.json

- [ ] Gameplay screenshot and FPS: wep16_maxwell
  id: GAMEPLAY-wep16_maxwell
  status: done (duplicate row; see primary)
  candidate: wep16_maxwell
  owner: claude:1863d2b5
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_maxwell.json; scratch/runs/20261003-wep16_maxwell-gameplay-restored6/result.json



- [x] Gameplay screenshot and FPS: wep16_rattler
  id: GAMEPLAY-wep16_rattler
  status: done (duplicate of the reviewed row at line 2627; was "review (91ae7bf58: test-win16-vb-gameplay Rattler case is no")
  candidate: wep16_rattler
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T09:03Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_rattler.json; scratch/runs/20261003-wep16_rattler-gameplay-restored8/result.json

- [x] Gameplay screenshot and FPS: Rodent's Revenge
  id: GAMEPLAY-wep16_rodent
  status: done (duplicate of the reviewed row at line 2640; was "review (7b0931167 test-win16-vb-gameplay Rodent case is now ")
  candidate: wep16_rodent
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claim 2026-10-10T10:04Z, no assignment 5+ min after rattler DONE(review))
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_rodent.json; scratch/runs/20261003-wep16_rodent-gameplay-restored8/result.json

- [x] Gameplay screenshot and FPS: wep16_ski
  id: GAMEPLAY-wep16_ski
  status: done (duplicate of the reviewed row at line 2653; was "ready")
  candidate: wep16_ski
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_ski.json; scratch/runs/20261003-wep16_ski-gameplay-restored9/result.json



- [x] Gameplay screenshot and FPS: wep16_tetris
  id: GAMEPLAY-wep16_tetris
  status: done (duplicate of the reviewed row at line 2671; was "review (e82eaec16 Win16 DialogBox publishes the modal dialog")
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (re-claimed 2026-10-10T10:18Z, no assignment 5+ min; includes the test-win16-wep1-gameplay modal-caption failure)
  parked: 2026-10-10T07:35Z by claude:d10ba697 (self-claim released when orchestrator assigned GAMEPLAY-jigssawme). Found: test-win16-wep1-gameplay's 'Tetris caption must remain visible but inactive behind modal About' fails on main c838b9162 -- at batch 25 the owner caption is painted ACTIVE blue while the modal About is up (Win98: inactive gray). Suspects: the 2026-09-20 activation/modal-focus series (4506e7257, 168ecb6d5, 967c831ab, b9ce89321, ...). Next: bisect from the test's own commit 70dcb3be0 (assumed good) with a 30-batch --app=wep16_tetris capture (--batch-size=20000 --tick-ms-per-batch=20 --repaint-every=10, png at 25) counting caption pixels y3-18 x4-573: blue = bad. A first checker attempt at 70dcb3be0 failed to build/run that old tree (node error) -- an old commit may need --no-build with its own compile.
  candidate: wep16_tetris
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (re-claimed 2026-10-10T10:18Z, no assignment 5+ min; includes the test-win16-wep1-gameplay modal-caption failure)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay/Left response and open-menu Escape repair reviewed. Qualify complete-frame measurement; separate TASKBAR-RESTORE-INPUT remains unproven.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_tetris.json; scratch/runs/20261003-wep16_tetris-gameplay-menu-escape-repaired/result.json


- [ ] Gameplay screenshot and FPS: wep16_tictacdp
  id: GAMEPLAY-wep16_tictacdp
  status: duplicate (stale copy of the GAMEPLAY-wep16_tictacdp entry above: done-partial 218fb34a2; the computer-turn stall is TICTACDP-COMPUTER-TURN-20261010)
  candidate: wep16_tictacdp
  owner: unowned (w5 claimed this copy 17:42Z by mistake and released it 18:08Z; reconfirmation run scratch/runs/20261010T1803Z-wep16_tictacdp-player-move matches docs/re-notes/wep16-tictacdp.md, nothing new)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Trace the preserved Sub or Function not defined error after ordinary piece drag; identify the guest call before another input qualification. Keep reviewed startup board scene, FPS unknown.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_tictacdp.json; scratch/runs/20261003-wep16_tictacdp-gameplay-restored9/result.json; scratch/batch9-blocker-count-audit-20261003.json



- [x] Gameplay screenshot and FPS: wep16_tutstomb
  id: GAMEPLAY-wep16_tutstomb
  status: done (605757a32 + e53a7f3e2: Win16 first WM_SIZE delivered, pyramid on screen, King to discard A/B; reviewed by orchestrator) [duplicate row: status copied from its primary, 2026-10-10]
  candidate: wep16_tutstomb
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Gameplay scene reviewed; complete ordinary control-response route and qualify a frame counter; retain scene-only evidence.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-wep16_tutstomb.json; scratch/runs/20261003-wep16_tutstomb-gameplay-restored8/result.json



- [x] Gameplay screenshot and FPS: winarc
  id: GAMEPLAY-winarc
  status: done (duplicate of the reviewed row at line 2715; was "ready")
  candidate: winarc
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Cover remaining playable Winarc subgames and qualify complete-frame measurement; Memory single-card reveal reviewed only.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-winarc.json; scratch/runs/20261003-winarc-gameplay-restored16/result.json

- [~] Gameplay screenshot and FPS: WinBoard installer
  id: GAMEPLAY-winboard-installer
  status: blocked
  candidate: winboard-installer
  owner: /root/restore_evidence
  created: 2026-10-03T08:42:45.967Z
  accepted: 2026-10-03T08:42:45.967Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Blocked on PROCESS-PIPE-STDIO-WINBOARD: real CreatePipe and inherited child standard-handle transport; no visible board or engine reply. Preserve original engine route; resume ordinary gameplay after genuine process/pipe contracts pass.
  Done: Reviewed gameplay screenshot and scene-qualified frame measurement with raw samples, counter proof and tested build identity; retain explicit failures.
  Evidence: scratch/gameplay-coverage-20261003/tasks/GAMEPLAY-winboard-installer.json; scratch/new-games-pipeline-20261005/winboard/selection.json; scratch/new-games-pipeline-20261005/winboard/payload-receipt.json; scratch/new-games-pipeline-20261005/winboard/browser/preparation-receipt.json; commit9fc73eb347d03f3e5c1d1d3df2fa092468980f9c; scratch/runs/20261005-winboard-engine-startup/result.json; scratch/new-games-pipeline-20261005/winboard/startup-finding.md
  notes: All27 original installed assets are present. Session10947 guest CreatePipe trap0x4496a0; harness cleanup successful. CreateProcessA inheritance and pipe endpoint semantics also missing by source audit.
  blocked-since: 2026-10-05T17:41:32.387Z





- [x] Diagnose Win16 setup-dialog Worker trap in FreeCell and Hearts
  id: WIN16-DIALOG-WORKER-TRAP
  status: done
  candidate: freecell16, mshearts16
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T08:55:51.777Z
  accepted: 2026-10-03T08:55:51.777Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete: worker-owned controls use their owning queue, GROUPBOX is transparent, modeless return requires pending handle. FreeCell setup/card move and Hearts setup/card pass reviewed; tests/build pass. Dialog clipping remains a separate backlog task.
  Done: Both ordinary FreeCell Select Game and Hearts name/dealer setup complete without trap, with focused regression and reviewed gameplay input screenshots.
  Evidence: ops/handoffs/win16-dialog-worker-trap-20261003.md; scratch/win16-dialog-worker-diagnostic-20261003/
  Notes: FreeCell EIP0x12ff40 prev0x103393, Hearts EIP0x13ff40 prev0x109ccb. Both offsets match WIN16_DLG_PUMP0xFF40; this localizes the crash but does not prove its cause. Existing REP review block remains preserved; this task does not authorize retrying blocked REP validation.

## Shared fixture restoration dependency

- [ ] Restore and verify missing game fixture sets
  id: MIG-FIXTURE-RESTORE
  status: ready
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  accepted: 2026-10-03T09:34:17.069Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Queued selective recovery: latest owner audit has218 complete declared routes,5 missing-file entries/156 exact paths and18 unregistered entries. Reconcile exact gaps in scratch/local-owner-restore-final/report.json; no active transfer claimed.
  Done: Owner receipts verified and each dependent game either ready with all assets or carries exact remaining missing paths. Presence alone does not establish gameplay or FPS.
  Evidence: scratch/selective-fixture-wave3-20261003/install-receipt.json; scratch/gameplay-coverage-20261003/tasks/; scratch/migration-transfer.json
  Notes: Migration-owner bulk transfer complete with verified receipt. Coordinator now owns selective missing-fixture recovery and per-task reconciliation; exact absent archive members remain documented, no foreign services/jobs claimed.

## Remaining visual correctness work

- [x] Correct clipped Win16 setup-dialog geometry
  id: WIN16-DIALOG-GEOMETRY
  status: done
  candidate: freecell16, mshearts16
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Shared owner geometry fix qualified by actual full About credits/visible OK and ordinary dismissal. Separate Escape host/shared visibility divergence remains WIN16-MENU-VISIBILITY; existing one-pixel NC/default-base-unit limitations documented.
  Done: Setup dialog controls render within correct bounds and ordinary controls work without relying on a narrow visible edge; screenshot review and targeted geometry regression.
  Evidence: scratch/win16-dialog-worker-diagnostic-20261003/hearts-group/controls-before.json; ops/handoffs/win16-dialog-worker-trap-20261003.md; scratch/klotski-qualification-20261003/attempt1/step-05-after.json; scratch/wep16-dialog-geometry-20261003/evidence.json; ops/handoffs/wep16-dialog-geometry-20261003.md; scratch/wep16-dialog-geometry-20261003/root-review.json; scratch/runs/20261003-wep16_tetris-dialog-dismissal-diagnostic/result.json

## Restored-title runtime gaps

- [x] Implement and validate TrackMouseEvent for Tetravex
  id: WIN32-TRACKMOUSEEVENT
  status: done
  candidate: tetravex
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete narrow client-LEAVE repair: shared owner tracking/query/cancel, physical hit, queue retry and lifecycle regressions pass; canonical build and Tetravex New Game succeed. HOVER/NONCLIENT remain unsupported; drag rendering tracked separately.
  Done: Ordinary New Game reaches numbered puzzle, mouse input works, requested tracking behavior is covered by regression and gameplay image review.
  Evidence: ops/handoffs/tetravex-trackmouseevent-20261003.md; scratch/runs/20261003-tetravex-gameplay-trackmouseevent/result.json; scratch/track-mouse-event-20261003/build-completion.log

- [x] Repair Tetravex tile-drag visual trails
  id: TETRAVEX-DRAG-TRAILS
  status: done
  candidate: tetravex
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete. Reviewed ordinary drag on canonical939943d4 moves one tile cleanly, restores vacated path and preserves eight supply tiles. Pixel regression, before-source negative control and independent geometry review pass.
  Done: Ordinary tile drag places one tile and restores the traversed background correctly; original degraded evidence preserved.
  Evidence: ops/handoffs/tetravex-drag-trails-20261003.md; scratch/runs/20261003-tetravex-gameplay-drag-restored/result.json; scratch/tetravex-drag-repair-20261003/validation.json

- [x] Implement RIFF chunk navigation for memory-backed MMIO streams
  id: MMIO-MEMORY-RIFF
  status: done
  candidate: qbob
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete. Bounded memory RIFF/LIST traversal passes sparse/padding/malformed/ABI tests and independent review; canonical gates pass. Ordinary QBob reaches active pyramid past the recorded audio trap.
  Done: Memory RIFF/WAVE nested chunk search/read/ascend, word padding, parent limits and malformed lengths pass meaningful regressions; ordinary QBob route advances past the recorded audio trap.
  Evidence: ops/handoffs/mmio-memory-riff-20261003.md; scratch/runs/20261003-qbob-gameplay-mmio-riff/result.json; scratch/mmio-memory-riff-20261003/validation.json

- [x] Preserve first-hit debugger stops when retargeting breakpoints
  id: DEBUG-BREAKPOINT-RETARGET
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete. Changed-address/clear latch semantics fixed; real cold/warm-chain/marker tests pass on canonical2c22cb7d, old source fails first-hit assertion, all canonical build gates pass.
  Done: Changed breakpoint stops on its first hit; unchanged breakpoint resumes once; clear/rearm has no stale skip. Private negative control detects old bug; canonical gates pass.
  Evidence: ops/handoffs/debug-breakpoint-retarget-20261003.md; scratch/debug-breakpoint-retarget-20261003/validation.json

- [x] Diagnose ordinary input delivery to Win16 modal MessageBox
  id: WIN16-MODAL-QUEUE
  status: done
  candidate: wep16_klotski
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete separate Klotski gameplay route beyond puzzle selection/name prompt; input repair itself qualified by ordinary visible Welcome OK on canonical5ff4844e, full build and real two-instance tests.
  Done: Ordinary visible OK dismisses Welcome through the owning modal instance with preserved input ordering and meaningful regression; or exact alternative route defect is proved and separately tracked.
  Evidence: ops/handoffs/wep16-klotski-tetris-startup-20261003.md; scratch/wep16-modal-repair-20261003/validation.json; scratch/klotski-qualification-20261003/attempt1/commands.jsonl; scratch/klotski-qualification-20261003/attempt1/after-observation.png

- [x] Diagnose Win16 menu Escape hiding the host window
  id: WIN16-MENU-VISIBILITY
  status: done
  candidate: wep16_tetris
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete: focused real-instance tests, negative control, keyboard regressions and browser38746 verify menu Escape closes popup with active board retained. Separate menu-closed Escape intentionally minimizes. Taskbar restore observation tracked independently.
  Done: Ordinary Game-menu Escape dismisses menu without unintended host/shared visibility divergence; preserve unrelated state and verify active-game input.
  Evidence: scratch/runs/20261003-wep16_tetris-gameplay-menu-escape-repaired/result.json; scratch/menu-escape-repair-20261003/validation.json; ops/handoffs/wep16-dialog-geometry-20261003.md

- [x] Diagnose clipped Little Fighter 2 windowed gameplay
  id: DDRAW-WINDOWED-PRIMARY-SIZE
  status: done
  candidate: little-fighter-2-installer
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete: full arena personally reviewed on f76ee66e; actual primary1024x740/source794x550 and current mode recorded. Focused edge/scaling/retained-mode regressions and full build pass. Reduced roster and no FPS remain separate limitations.
  Done: Correct windowed primary size and complete LF2 gameplay viewport, with preserved explicit fullscreen mode/thread semantics and meaningful regression; retain reduced-roster limitation.
  Evidence: ops/handoffs/lf2-primary-sizing-20261003.md; ops/handoffs/lf2-primary-diagnostic-result-20261003.md; scratch/lf2-primary-sizing-20261003/root-review.json; scratch/lf2-repaired-qualification-20261003/attempt1

- [x] Investigate taskbar restore click after Tetris minimization
  id: TASKBAR-RESTORE-INPUT
  status: done (duplicate of the reviewed row at line 2844; was "review")
  candidate: wep16_tetris
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  Result (2026-10-10T02:50Z): CAUSE FOUND + FIXED, main 805a4b9f6 (+ a9596c00a probe step). renderer.updateTaskbar emptied #task-buttons and rebuilt every button on each repaint; a repaint during a held press detached the pressed button, so Chrome sent the click to the container and no SC_RESTORE was queued. Buttons now persist per hwnd. Page proof on boat (scratch/runs/20261010T0240Z-wep16_tetris-taskbar-held-click): old renderer, 1000 ms held press -> stays minimized 2/2; fix -> restores at 1000 ms and 150 ms (log shows msg=0x112 wParam=0xf120). Regression test/test-renderer-taskbar-buttons.js fails on the old renderer.
  Next: Reproduce non-restoration before proposing a repair. Current actual physical click restores with stable DOM target and observed SC_RESTORE; historical cause remains unknown. No longer blocks independent coverage.
  Done: Ordinary taskbar click restores the minimized game via owning guest command, with exact cause and meaningful regression, or documented input-target explanation.
  Evidence: ops/handoffs/taskbar-restore-input-20261003.md; scratch/runs/20261003-wep16_tetris-taskbar-restore-diagnostic/result.json

- [x] Implement bounded Unicode DirectPlay4 support
  id: DPLAY4W-UNICODE
  status: done
  candidate: aoe2
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T16:45:43.583Z
  Next: Completed bounded Unicode semantics and nine canonical regression suites; ordinary AoE2 clears previous DirectX rejection. Separate graphics initialization failure tracked under AOE2-GRAPHICS-INIT.
  Done: Exact IID530 has meaningful tested Unicode semantics with stable shared COM identity, preserved ANSI behavior, correct byte sizes/callback ownership, explicit unsupported scope and no silent ANSI alias; accepted full build and game startup requalification.
  Evidence: ops/handoffs/aoe2-directplay4w-private-draft-20261003.md; scratch/aoe2-directplay4w-private-20261003/canonical-build-receipt.json; scratch/aoe2-directplay4w-private-20261003/canonical-suites-receipt.json; scratch/aoe2-unicode-qualification-20261003/attempt1/root-review.json

- [x] Preserve process ownership for queued keyboard input
  id: INPUT-PROCESS-OWNERSHIP
  status: done
  candidate: tetrinet
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T16:57:01.457Z
  Next: Completed: regression and ordinary two-seat typing pass; network join remains separate under GAMEPLAY-tetrinet.
  Done: Foreign process cannot consume selected-owner key/char/up events with deferred HWND0 focus, same-process guest threads and legacy input remain correct, relevant regressions and ordinary two-seat browser qualification pass.
  Evidence: scratch/tetrinet-keyboard-owner-20261003/integration-receipt.json; test/test-keyboard-process-owner.js; scratch/gameplay-network-preparation-20261003/tetrinet/attempt3/root-review.json; scratch/runs/20261003-tetrinet-local-typing-diagnostic/result.json

- [x] Configure the main guest Worker with its preselected LAN address
  id: VLAN-MAIN-WORKER-IP
  status: done
  candidate: tetrinet
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T17:40:15.511Z
  Next: Completed: actual owning workers acknowledge distinct .1/.2 addresses; ordinary local join and host gameplay pass. Late room joins remain outside this repair.
  Done: Main Worker acknowledges selected LAN address before init completes; future guest threads inherit it, cooperative/default/failure regressions pass, actual two-seat network route requalified or separate blocker identified.
  Evidence: scratch/tetrinet-main-worker-ip-20261003/integration-receipt.json; test/test-browser-worker-vlan-address.js; scratch/runs/20261003-tetrinet-local-gameplay/result.json
- [x] Diagnose Age of Empires II graphics initialization failure
  id: AOE2-GRAPHICS-INIT
  status: done
  candidate: aoe2
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T18:00:26.667Z
  Next: Resolved 2026-10-06: the failure was missing Data\*.drs (bare manifest URLs mount at C:\<basename>, game opens data\*.drs); fixed in a87fced6. Main menu and gameplay reached headless.
  Done: Exact rejection established, meaningful regression and reviewed fix if appropriate, ordinary startup requalified. Gameplay and FPS remain separate requirements.
  Evidence: scratch/runs/20261006T034500Z-aoe2-dplay4w-cursor; commit a87fced6


- [x] Preserve nested LoadLibrary during Worker DLL initialization
  id: WORKER-NESTED-DLL-INIT
  status: done
  candidate: zuma-deluxe
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T18:09:52.406Z
  Next: Completed bounded repair: same owner resumes nested initializer, focused regressions pass, ordinary Zuma advances to loading. Remaining loading-screen diagnosis tracked separately; no gameplay/FPS claim.
  Done: Same owning instance finishes bounded nested initialization without deadlock/reentrant corruption, meaningful owner/failure/cleanup regressions pass, ordinary Zuma startup requalified.
  Evidence: scratch/zuma-startup-exit-20261003/repair/integration-receipt.json; scratch/runs/20261003-zuma-nested-loader-qualification/result.json

- [x] Show unreleased games and release readiness in EXE corpus
  id: OPS-RELEASE-READINESS
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T20:34:08.368Z
  Next: Complete: live EXE corpus filters show103 confirmed unreleased game entries,60 reviewed-gameplay entries and0 complete release approvals. Continue individual release gates; no games deployed.
  Done: Dashboard separates already-production/unreleased/unknown membership, exposes ready and remaining blockers with evidence, tests pass and serving behavior verified.
  Evidence: ops/release-readiness.json; scratch/production-desktop-review-20261003/ui-validation.json; scratch/production-desktop-review-20261003/live-validation.json; ops/handoffs/release-readiness-audit-20261003.md

- [x] Launch registered games directly from EXE corpus
  id: OPS-CORPUS-LAUNCH
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T21:14:43.753Z
  Next: Complete: prominent Launchable now filter shows127 exact available cards. Broken Sword sibling-manifest paths fixed. Public Puppeteer desktop/mobile/card-to-Solitaire runtime PASS;60ops tests PASS.
  Done: Installed corpus entries open real emulator app in new tab; missing/unregistered route explicit; authenticated gateway preserved.

- [x] Push all safe source changes to GitHub
  id: OPS-GITHUB-CHECKPOINT
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T21:14:43.754Z
  Next: Complete: checkpoint/migrated-source-dashboard-20261003 pushed via installed repository deploy key; remote4a3bc78e verified. Private artifacts/fixtures/logs excluded; inherited review gates retained.
  Done: Remote checkpoint commit contains reviewed explicit safe source manifest; push verified, unresolved runtime review gates preserved.
  Evidence: ops/handoffs/github-source-checkpoint-20261003.md; scratch/github-publication-audit-20261003/checkpoint.json

- [ ] Diagnose Monkey Island demo audio issues
  id: COMI-AUDIO-DIAG
  candidate: curse_monkey_island_demo
  status: review
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T22:38:28.752Z
  Next: Current-default f5b222ee/module1a343c5f ordinary ship-hold capture completed:12.0047s attributed audio,7–8 queued sources and no sampled clock rebase. Await user listening review of Telegram470; no sound-quality-fixed claim, new player-control qualification or FPS. No redundant app-option patch or repeat capture without concrete symptom.
  Done: Concrete audio issue diagnosed, meaningful regression/fix if supported, ordinary playback requalified with honest limits.
  Evidence: scratch/runs/20261005-comi-current-default-audio; ops/handoffs/comi-current-default-audio-20261005.md; ops/release-evidence/comi-current-default-audio-20261005; scratch/comi-audio-investigation-20261003/matched-main/comparison.json

- [ ] Restore missing files for existing EXE corpus routes
  id: CORPUS-MISSING-RESTORE
  status: blocked
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T22:48:41.992Z
  Next: Restored67of156 paths including all55Chapters files; live dashboard route available, no runtime qualification. Remaining89all Baldur interactive: pinnedISO source403/noarchivefilelisting and alternateMediaFire404. Need an accessible originalsource or matching localISO SHA1 3796defce51a3e867aa216bc27f0be0689fdadf0, then normal extraction. Exact paths/HTTP receipts: scratch/corpus-path-repair-20261005/. Maind2e458c7.
  Done: Existing registered fixture closures restored and launch availability checked; gameplay qualification remains separate.
  Evidence: ops/handoffs/corpus-restoration-20261004.md; scratch/local-owner-restore-final/report.json; scratch/local-owner-restore-final/missing-files.txt

- [ ] Investigate ScummVM fullscreen and missing sound
  id: SCUMMVM-AV-DIAG
  candidate: scummvm-fotaq
  status: review
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-03T22:59:25.111Z
  Next: GetCaps fix integrated main5b7c3912; ordinary Alt+Enter accepted with live advancing640x480 exclusive full-page intro, run20261005-scummvm-getcaps-fullscreen. Browser fullscreen consent unclicked; no new gameplay/FPS. Later-intro audio Telegram477 remains quality-unqualified pending listening; do not repeat clip or claim music fixed.
  Done: Explain intended behavior and demonstrate any supported fix with real browser evidence.
  Evidence: scratch/runs/20261005-scummvm-getcaps-fullscreen; ops/handoffs/scummvm-getcaps-ordinary-fullscreen-20261005.md; docs/re-notes/scummvm-fotaq.md; scratch/scummvm-av-20261003/

- [x] Show Git commits in dashboard activity with source filter
  id: OPS-ACTIVITY-COMMITS
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T23:16:31.625Z
  Next: Complete: live mixed activity and All/Commits/Messages filter,150 unique local-ref commits;28 tests and public Puppeteer desktop/mobile/search/pagination/refresh PASS.
  Done: Live activity shows recent unique commits with date/author/hash/link; filters and search work on desktop/mobile.


## Claude launch experience

- [x] Implement approved Windows-style launch dialog with 500 ms reveal delay
  id: CLAUDE-LAUNCH-UX
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  accepted: 2026-10-03T23:32:35.471Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-03T23:32:35.471Z
  created-by: user
  next: Complete: coordinator review corrections accepted;50browser checks and authenticated dashboard Solitaire route pass,28controller and6host cases pass. Pushed5a381fd2 to checkpoint/migrated-source-dashboard-20261003. No public game deployment. Existing fullscreen rotation issue remains separate.
  done: After user approves design, direct app URLs show no desktop flash or desktop startup work, fetch only selected-app assets plus required shared runtime, and show responsive loading feedback; desktop/multi-app mode uses the same loading dialog without disrupting other apps; the dialog appears only if the launch is still pending 500ms after launch initiation (one deadline, never shown or flashed for faster launches, stale timers cannot reopen it, closes on readiness with no minimum time). Validate cache, slow network, errors, cancellation, 500ms boundary/race cases, repeated launches, mobile portrait and landscape, and asset request scope.
  notes: User explicitly approved implementation via Telegram: "let's go with this UX looks good". User correction 2026-10-03 adds "only displays if load takes more than 0.5 s" (handoff section 3D, text-only, no resend). Known-size progress examples require every required file size known (coordinator review). Busy cursor alone is insufficient. Show honest download/preparation/startup states; no fabricated progress. Images must be labelled design mockups. Codex retains shared coordination; Claude owns this task.
  evidence: ops/handoffs/claude-launch-ux-design-20261003.md; scratch/claude-launch-ux/{ascii.txt,single-app.png,desktop.png} (labelled proposal mockups); Telegram receipt scratch/claude-launch-ux/telegram-delivery.json msgs 284-287 at 2026-10-03T23:36:35Z (revision 1, superseded by user correction "more like windows file downloading dialog"); revision 2 scratch/claude-launch-ux/revision-2/{ascii.txt,single-app.png,desktop.png} (labelled proposal mockups), receipt scratch/claude-launch-ux/revision-2/telegram-delivery.json msgs 291-294 at 2026-10-03T23:45:48Z; IMPLEMENTATION 2026-10-04: scratch/claude-launch-ux/implementation/evidence/ (pins.txt with source sha256s + served wasm f40d4ca3, diffs/ vs pre-task snapshot, browser-receipt.json, screens/*.png inspected, logs/ incl. BASELINE runs); node test/test-launch-progress.js exit 0 (23 cases); node test/test-web-direct-launch.js exit 0 (42/42, headless Chrome 151 on loopback); cache-version, test-manifest, host-import-sigs, js-copies gates OK; launch-related web/unit regressions pass except pre-existing test-web-page-fullscreen (baseline fails identically) and one flaky double-tap run; ops/handoffs/launch-ux-coordinator-review-20261004.md; scratch/claude-launch-ux/implementation/{review-final-pins.json,review-final-browser-receipt.json,private-route-review.json,publication.json}; MAIN RECEIPT verified 2026-10-04 by claude:1863d2b5: origin/main eb6d4d61 contains 2ba2673d (cherry-pick of 5a381fd2, merged at c9977df0); lib/launch-progress.js, lib/browser-shell.js and the three launch tests on main are byte-identical to the reviewed working-tree versions; ops/handoffs/claude-launch-ux-design-20261003.md identical on main

- [x] Match Telegram blockers command to dashboard
  id: OPS-TELEGRAM-BLOCKERS
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-03T23:38:00.490Z
  Next: Complete: /blockers registered live, shared web grouping and read-only snapshot;52tests plus browser/live formatter parity and getMyCommands verification PASS.
  Done: /blockers reads same dashboard task/approval snapshot; help/menu expose it and access controls remain intact.


## Standing game pipeline

- [x] New-game lane: Zuma Deluxe
  id: NEW-GAME-ZUMA-20261004
  status: done
  candidate: reflexive-zuma-deluxe
  owner: /root/coverage_audit
  created: 2026-10-04T02:14:45.168Z
  accepted: 2026-10-04T02:14:45.168Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  next: Complete: root reviewed Level1-1 aim/fire projectile, green destruction +40 and score170 COMBOx2. Run 20261004-zuma-adventure-gameplay; source/input evidence preserved. FPS unmeasured; no public release approval. Refilled with Runenlegen.
  done: Working registered launch, ordinary player input visibly changes actual gameplay, coordinator-reviewed gameplay screenshot and exact run/source identity. Menu, intro, installer or black frame does not qualify. FPS and public release approval remain separate.
  evidence: scratch/new-games-pipeline-20261004/selection.json; scratch/new-games-pipeline-20261004/public-desktop.json; GAMEPLAY-reflexive-zuma-deluxe

- [x] New-game lane: Crimsonland
  id: NEW-GAME-CRIMSONLAND-20261004
  status: done
  candidate: reflexive-crimsonland
  owner: /root/corpus_categories
  created: 2026-10-04T02:14:45.168Z
  accepted: 2026-10-04T02:14:45.168Z
  accepted-by: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  next: Root reviewed tutorial movement-before/after/down on private production candidatefa783563; ordinary arrows advance tutorial and scroll terrain. Narrow gameplay criterion met; pointer alignment, full combat, FPS and integration remain separate follow-up. Refilled Tile World.
  done: Working registered launch, ordinary player input visibly changes actual gameplay, coordinator-reviewed gameplay screenshot and exact run/source identity. Menu, intro, installer or black frame does not qualify. FPS and public release approval remain separate.
  evidence: scratch/new-games-pipeline-20261004/selection.json; scratch/new-games-pipeline-20261004/public-desktop.json; GAMEPLAY-reflexive-crimsonland

- [x] New-game lane: Runenlegen
  id: NEW-GAME-RUNENLEGEN-20261004
  status: done
  candidate: runenlegen
  owner: /root/restore_evidence
  created: 2026-10-04T02:35:20.505Z
  next: Complete narrow full-board Beginner gameplay and ordinary rune placement, root-reviewed14aadaac. Original3ad7ab07 integrated asce4f60b2 within main640b85a4; current origin/main ancestry verified2026-10-05. Owner reported full build/geometry checks pass. Lane refilled Jig. FPS remains separate; no public release claim.
  done: Working launch, actual player-controlled gameplay and coordinator-reviewed screenshot linked to exact run/source. Autoplay or cropped ambiguous board cannot qualify.
  evidence: scratch/new-games-pipeline-20261004/runenlegen-preparation/frame-qualification/root-review.json; scratch/new-games-pipeline-20261004/runenlegen-preparation/child-layout/frame-fix/publication.json; main ce4f60b21fae161919df7cbdbb341f1c003fa219; ops/handoffs/main-integration-20261005.md

- [x] New-game lane: Tile World
  id: NEW-GAME-TWORLD-20261004
  status: done
  candidate: tworld
  owner: /root/coverage_audit
  created: 2026-10-04T06:06:46.406Z
  next: Done: root-reviewed latest-main private gameplay and callback repair merged remote main9a996fc1 (f2367f0c+9a996fc1); FPS remains in separate gameplay performance task.
  done: Working launch, player-controlled gameplay, root-reviewed screenshot and exact run/source identity.
  evidence: scratch/runs/20261005-tworld-main6a-callback-gameplay; scratch/new-game-tworld-20261004/repair/main6a-validation/final-receipt.json; ops/handoffs/tworld-wave-callback-integration-20261005.md; remote main9a996fc1

- [x] Claude subagent: diagnose Heroes II slowness and improvement options
  id: CLAUDE-HEROES2-PERFORMANCE
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:40:00.181Z
  next: Diagnosis delivered; user approved fix tracked in CLAUDE-HEROES2-TIMING-FIX. Findings commit3ae042a7 pushed on sanitized Claude handoffs branch; main receipt pending.
  done: Evidence-backed bottleneck diagnosis, exact scene/source/module identity, ranked ideas and concrete validation plan; unknowns explicit. No unsupported speedup/FPS claim.
  subagent: claude-subagent of claude:1863d2b5 (launched 2026-10-04T10:45Z)
  evidence: scratch/claude-heroes2-performance-20261004/assignment.txt; docs/re-notes/heroes2-performance-20261004.md (pending); runtime ledger 516.7s/600; commit 3ae042a7

- [~] Claude coordinator: reconcile previous handoffs and drive ready work
  id: CLAUDE-HANDOFF-ORCHESTRATOR
  status: done
  note: 2026-10-06T17:35Z superseded: claude:80aa9e95 is the active orchestrator; claude:1863d2b5 no longer dispatches.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:46:53.669Z
  next: State 2026-10-06T02:07Z: watchdog not paused (control.json has no paused flag); Heroes II excluded (laptop-owned). Done since last update: TOYVM-DOS-CORPUS-DASHBOARD integrated (550d7d4a), MYTH-3DFX reviewed DONE (8cd80d5a, b7acece2, 9466f23d). New-game lane 1: NEW-GAME-BLOOD2-DEMO-20261006 in review (main 8d70691a+1cb3a7ea; evidence scratch/runs/20261006T015805Z-blood2-demo-app-route). Warned claude:202b4b39 that api id 4100 is taken (StringFromIID) before its GetProcessHeaps push. TOYVM-REGION-JIT-BRW: engagement run 300s still queued, not granted. TOYVM-SMC-SAME-BLOCK-FORWARD-PATCH diagnostic only; CLAUDE-TOYVM-LONGRUN-BG blocked. Pre-existing main failure reported: test-directinput-device-com.js:125 (Device7A QI). Runtime serialized via board claims; no public deploy, no approvals answered.
  done: Recurring coordination: current five-lane inventory, concrete next actions and evidence, reviewed worker results; preserve source/resource ownership and main integration boundary.
  evidence: scratch/claude-orchestrator-20261004/assignment.txt; ops/handoffs/claude-orchestrator-status.md; handoff commit bdfd3c71 (branch claude/handoffs-20261004-v2, awaiting ops-dashboard integration)

- [x] Toyvm region JIT: BRW checksum disagreement under continuous mode
  id: TOYVM-REGION-JIT-BRW
  status: done
  note: 2026-10-06T17:42Z claude:1863d2b5: the fix stack (Fix J/v4/SMC + IF-enable v2) landed via TOYVM-BRW-BENCH-MERGE as 0ce7fbc9+0501c1a1, reviewed DONE by claude:80aa9e95 at 10:39Z (30/30 correctness, perf neutral). Nothing left in progress here; close or reopen with a specific gap.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  next: State 2026-10-05T21:10Z: IF-enable candidate v2 ee8265ba (unpromoted). MERGED in main: readiness/helper tooling ff4c20f2; combined correctness run e6b09f57 + qualified diagnosis 2eb59bc6 (13/15 same, tree-fold/uop 60 s timeouts); tree-fold/uop replay a1bb5034 + duration wording 3a51afa3 -> all 15 default tests PASS in both trees, no REGRESSION/FIXED; engagement gate staging 64349121 (from eeae1755) + hardened run-fixture.js supervisor 658eb73a (from a4a82b84; root reran 6/6 wrapper tests, 10/10 parser checks). Base 2683a6e3 + pinned stack; 69c1371b separate. NEXT: engagement run (ops/handoffs/claude-toyvm-brw-20261005/if-enable/engage/ENGAGEMENT-READY.md: run-fixture.js --plan=cand,stack --total=300) source-reviewed and queued, NOT granted (Daggerfall 900 s queued next; may be inserted only with an explicit release/grant). Later gates: native V8+SpiderMonkey disassembly, fixed-work bench. Open: STI;MOV SS unconfirmed, IRQ at a boundary inside compiled code unshown, bundle regeneration, corpus A/B. No promotion.
  done: Root cause of BRW 500918117/2fa3dd95 vs L1 500918116/a066bf27 under --region-jit-continuous and the only-naive off-by-one, with a failing then passing test in test/test-toyvm-*.js; fix reviewed. Native V8+SpiderMonkey captures required before any new region optimization.
  evidence: main ff4c20f2 (IF readiness tooling), e6b09f57+2eb59bc6 (combined correctness result), a1bb5034+3a51afa3 (tree-fold/uop replay), 64349121+658eb73a (engagement gate staging + hardened supervisor, if-enable/engage/ENGAGEMENT-READY.md) under ops/handoffs/claude-toyvm-brw-20261005/if-enable/; branch claude/toyvm-brw-phase5-20261005 (latest a4a82b84): ops/handoffs/claude-toyvm-brw-20261005/wav-validate/SLICE-DIAG-RESULT-20261005.md; ops/handoffs/claude-toyvm-brw-20261005/recommendation-20261005.md; ops/handoffs/claude-toyvm-brw-20261005/wav-validate/{RESULT-20261005.md,BLIQ-DIVERGENCE-20261005.md,PLAN.md}; ops/handoffs/claude-toyvm-brw-20261005/v2-review/corpus-plan.md; scratch/claude-toyvm-brw-v2-review-20261005/full-stages-20261005.md; ops/handoffs/claude-migration-toyvm-uop-88bbcb9f.md; ops/handoffs/claude-orchestrator-status.md; original logs on bx_xegf6upd /home/user/sepc30.* (not on this box)

- [ ] Toyvm: a store into a later instruction of the SAME compiled block runs the stale byte
  id: TOYVM-SMC-SAME-BLOCK-FORWARD-PATCH
  status: blocked
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T14:35:00Z
  next: State 2026-10-05T18:40Z: reproduced on HEAD in every mode: a DS store into an instruction later in the SAME compiled block runs the old byte ($smc acts at the next block transfer). The same-block test stays FAILING. The accurate CPU contract is UNRESOLVED: primary SDM guarantees only store+jump / store+serialize (Vol. 3A 11.1.3), the 486 "could" run old prefetched bytes and the 386 is not described (14.6); window sizes unconfirmed. Alternatives A-D in ops/handoffs/claude-toyvm-brw-20261005/smc-contract/SMC-SAME-BLOCK-ALTERNATIVES.md (eda4a311). Root chose D as a DIAGNOSTIC INVESTIGATION ONLY: static decode-time same-block store census + runtime SMC-break overlap (smc-contract/diag-counter/DESIGN.md), source-only prep; a corpus sweep needs a later grant and is evidence, not a verdict (a zero count proves neither A == 386 prefetch nor arm parity). Blockers: the contract itself; arm parity of the stale window; performance + corpus A/B for any behaviour change.
  done: The same-block form passes on the interpreter and region arms, with a corpus A/B showing no regressions.
  evidence: ops/handoffs/claude-toyvm-brw-20261005/jmp-syn-j/repro2-20261005/summary.md; scratch/claude-toyvm-jmpsyn-j-20261005/smc-cpu-contract-20261005.md; ops/handoffs/claude-toyvm-brw-20261005/smc-contract/SMC-SAME-BLOCK-ALTERNATIVES.md

- [ ] Uop retry ladder ec2bf87c: correctness gate before any A/B
  id: UOP-RETRY-LADDER
  status: backlog
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  next: When a build slot is coordinated with root: isolated worktree at origin/worktree-agent-aaa481e5bbddec58a, run test/test-uop-compiler.js cases movsd-nfs-record-loop and nobump-mark (ladder mask 7) against base. A/B only on a quiet bench box with V8+SpiderMonkey disassembly. No merge (ops-dashboard integrates).
  done: Unit gate result on base vs ladder recorded; if clean, a planned A/B (uop / uop+ladder / icall / icall+ladder x h3, rodent, sc, c3, diablo) with native captures.
  evidence: ops/handoffs/claude-migration-wine-assembly-d0.md; memory project_uop_retry_ladder_wip.md

- [ ] Verify NFS II SE browser install shows the installed-game icon; re-derive IS3 copy-dialog repro
  id: NFS2SE-INSTALL-ICON-VERIFY
  status: blocked
  note: 2026-10-10T03:00Z claude:1863d2b5: not runnable as written on this box: the browser half imports a 592 MB retail ISO and runs a full install (box MemAvailable 0.8-1.4 GB, browser floor 1.2 GB), and the CLI half is a ~400k-batch long route (standing rule: no multi-minute heavy runs locally). Boat needs the retail ISO shipped (exec-only base64 chunks; ~9,500 chunks) -- asked the orchestrator how to run it.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  next: After the runtime window frees: one bounded local browser session, media-import test/binaries/candidates/need-for-speed-2-se-full/sources/NFS2SE.ISO (present, 592 MB), finish setup, screenshot the desktop icon/label; then a headless repro of the IS3 copy dialog vanishing near batch 360-420k (original stage2.sh lost with the Mac scratchpad). Retail CD: never deploy.
  done: Screenshot evidence of the icon and label from dd530167, and a saved repro command for the copy-dialog disappearance (or evidence it no longer happens).
  evidence: ops/handoffs/claude-migration-5e92d715.md; ops/handoffs/claude-orchestrator-status.md

- [x] Current pass/fail for test-sysmon-perfstats
  id: SYSMON-PERFSTATS-TRIAGE
  status: done (eaf4028b stale test coordinates; 16/16; reviewed by orchestrator)
  note: 2026-10-10T07:15Z eaf4028b (main, ls-remote verified, full build green): the failure was a stale test, not the emulator -- the Item list is a sorted listbox ('Allocated memory' = cUsedMemory is row 1; the clicked row 6 is 'Page faults') and the OK click at (336,137) missed the button. Clicks fixed; all 16 checks PASS and the chart shows Memory Manager: Allocated memory with a live reading (test/output/sysmon-perfstats/allocated-memory.png).
  note: 2026-10-10T07:00Z current result: FAILS on main ae06978e and identically on the pre-change thread-manager (A/B), at 'the guest heap is charted at all -- no cUsedMemory reads -- the item was never added'; the 10 checks before it pass (startup, PERF driver, window/menu, StatData opened, category selection/provider/item list). Log scratch/runs/../sysmon (scratchpad). Next: read-only root cause of why the Item list's add never queries cUsedMemory.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  next: After the runtime window frees: timeout 60 node test/test-sysmon-perfstats.js; if it still fails "the guest heap is charted at all", root-cause read-only and propose an owner. SOURCE TRIAGE 2026-10-05T11:58Z (no runtime): the assertion needs a `[reg] query ...StatData\VMM\cUsedMemory -> N` line. lib/storage.js:1339 prints exactly that for any query (live value via _perfStatsLive, storage.js:848, exports get_heap_ptr/get_heap_base exist in 13-exports.wat:684/695; a missing export would still print -> 0 and pass). So "charted at all" fails only when cUsedMemory is never QUERIED: the click sequence (1005:click:60:177 Memory Manager, 1100:click:200:220 sixth Item row, 1200:click:336:137 OK) is not selecting it, i.e. UI geometry or list-order drift, not the counter provider. Next (runtime, ~2-3 min, requested from root): run the test, look at its pick/chart PNGs and --trace-ctrl for the Add Item dialog, and fix the click coordinates or list order in the test only if the dialog is right.
  done: Current result with log; failure triaged to an owner or closed.
  evidence: ops/handoffs/claude-migration-5e92d715.md

- [x] User decision: should kept (OPFS) media record installer shortcuts?
  id: USER-DECISION-OPFS-SHORTCUTS
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  decision: User explicitly approved2026-10-04: installed-game desktop icons should survive reload when files are saved.
  next: Decision resolved; implement via OPFS-PERSIST-INSTALLED-SHORTCUTS with owned files, regression and remote-main receipt.
  evidence: ops/handoffs/claude-migration-5e92d715.md

- [ ] SimCity 2000 UI differences seen in the v86 comparison (not requested)
  id: SC2K-UI-DIFFS-OPTIONAL
  status: deferred
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  next: Not authorized work. Needs a user or coordinator yes before anyone fixes: city menu bar File/Help only, budget dialog placement/sunken fields, Video Warning missing a line.
  evidence: ops/handoffs/claude-migration-sc2k-compare-agent.md

- [!] Reconcile remote leftovers from Claude lanes
  id: RESOURCE-RECONCILE-REMOTE
  status: blocked
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:49:00Z
  blocker: bx_xegf6upd ~/toyvm-ab (detached at deddbe2b, holds the only BRW sepc30/sep30 logs) and a possible fast-near-9tb-1 uop-ladder* dir are not in the ledger; host key was pinned only on the Mac
  waiting-on: root
  needs: Root says whether these hosts are reachable from here and who owns them; copy /home/user/sepc30.* and sep30.* into scratch/claude-orchestrator-20261004/ if reachable
  next: Re-checked 2026-10-05T12:01Z: ssh to bx_xegf6upd (caped-eyrir-iroko.on.ascii.dev) is refused (Permission denied (publickey)) from this box, and the boat CLI is signed out (401), so the remote leftovers still cannot be listed or removed from here; needs a key or `boat login` (user) or root on the Mac. Urgency dropped: BRW now reproduces locally (notes on claude/toyvm-brw-phase5-20261005), so the remote sepc30/sep30 logs are archival only.
  evidence: ops/handoffs/claude-migration-toyvm-uop-88bbcb9f.md; ops/handoffs/claude-migration-wine-assembly-d0.md

- [x] Claude review: dashboard UX and emulator/GitHub integration
  id: CLAUDE-OPS-DASHBOARD-UX-REVIEW
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:48:03.445Z
  accepted: 2026-10-04T10:50:43.055Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Done 2026-10-05T12:00Z: review handoff on origin/main as 112620b1 (ops/handoffs/claude-dashboard-ux-review-20261004.md); compact layout implemented and merged as c003b59f (ancestor of main).
  done: Evidence-backed UX review, screenshots/wireframes, concrete navigation/integration design and phased backlog. Proposals only until implementation scope is authorized.
  evidence: scratch/claude-dashboard-ux-review-20261004/assignment.txt; ops/handoffs/claude-dashboard-ux-review-20261004.md

- [x] Claude design: required, lazy and background game-file loading
  id: CLAUDE-PROGRESSIVE-GAME-LOADING-DESIGN
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T10:50:06.074Z
  accepted: 2026-10-04T10:50:43.055Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Done 2026-10-05T12:00Z: design on origin/main as 7068034d (ops/handoffs/claude-progressive-game-loading-design-20261004.md); the Diablo pilot evidence lives in the merged CLAUDE-DIABLO-LAZY-LOADING-PILOT commits.
  done: Reviewable architecture/schema, wait-state UX sketches, rollout/pilot and validation plan; no full-file preload requirement by default, no fake missing files or unexplained hangs. Design proposal only.
  evidence: scratch/claude-progressive-game-loading-20261004/assignment.txt; ops/handoffs/claude-progressive-game-loading-design-20261004.md; commit bd46d620

- [x] Hype: menu input and New Game progression reported stuck
  id: HYPE-MENU-GAMEPLAY-20261004
  status: done
  owner: /root/coverage_audit
  created: 2026-10-04T10:52:34.559Z
  next: Complete: ordinary Enter starts New Game, visible instructions request Space, knight moves forward/back and world remains stable. Root reviewed4 gameplay screenshots; run20261005-hype-wh-getmessage-gameplay, source6604fb90/module2638, integrated remote main376abd87. Fullbuild+16hook groups+legacy keyboard/CBT pass. FPS/audio remain separate.
  done: Verified user-facing New Game controls and working gameplay progression or exact diagnosed blocker with screenshots/input/build identity; fix if concrete and reviewable.
  evidence: docs/re-notes/hype.md; scratch/runs/20261005-hype-ordinary-control-interleaving; scratch/hype-route-prep-20261005/ui-pass-semantics.md; main d4dd56a4; historical zero-scale evidence retained.

- [x] Display subagent summaries on parent dashboard cards
  id: OPS-AGENT-SUBAGENT-SUMMARIES
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  next: Already integrated as7db978dd in main640b85a4 and live compact UI c003b59f; no implementation remaining.
  done: Claude/Codex parent lineage, child task/status/latest summary, child detail links on cards and parent details; no inferred progress from activity.
  evidence: scratch/ops-subagent-summaries-20261004/publication.json

- [~] Integrate completed task commits into main and verify receipts
  id: OPS-INTEGRATE-COMPLETED-TASKS
  status: ready
  owner: ops-dashboard
  created: 2026-10-04T10:58:44.360Z
  next: Subagent summaries already integrated (63a248a patch-equivalent7db978dd). User main-integration policy now published7e288793. Reconcile new scoped results as they finish; current source work includes typed Dredmor presentation metric and TetriNET metadata repair. Preserve ops-dashboard ownership and no public deploy.
  done: Each completed change has tested scoped commit and verified remote-main integration receipt. Pending changes remain review, not done.
  evidence: scratch/ops-subagent-summaries-20261004/publication.json; ops/ORCHESTRATOR.md; scratch/ops-subagent-summaries-20261004/integration-reconciliation-20261005.json

- [x] Diablo II Glide: frozen menu animation and looping audio
  id: DIABLO2-GLIDE-MENU-FREEZE-20261004
  status: done (duplicate of the reviewed row at line 3199; was "review")
  candidate: diablo2_glide_demo
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  prev-owner: /root/coverage_audit — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  created: 2026-10-04T11:24:08.494Z
  next: Review: freeze not reproduced on main; menu AUDIO checked 2026-10-06: menu theme streams via Storm DDA and plays continuously in the browser with no stuck loop (record-probe 180 s, self-similarity 0.1-0.6). Fixed on the way: 1b4d12a1 DSCAPS offsets (d2sound had disabled 3D sound), b766dfdf recorder joins a pre-started ring; notes f706d44e. The 10-04 'sound loops' = audio face of the then-frozen menu; Threads-ON lazy-read park variant is LAZY-PARK-AUDIO-LOOP-20261006.
  done: Reproduce reported freeze, identify causal blocker and implement/review scoped fix where established, capture animation/input/audio validation and commit integrated into remote main.
  evidence: scratch/runs/20261006T1300Z-diablo2_glide_demo-w4-browser-audio (result.json, audio.opus, f02/f06); scratch/runs/20261006T1005Z-diablo2_glide_demo-w4-audio (CLI, menu-5fps.mp4); docs/re-notes/diablo2-demo.md
  blocked-by: none (13:11 d10ba697: the Threads 28 s ring-gap finding was a probe artifact). Open question for review: a Threads-ON browser recording of the menu audio was not taken; my clean arm used record-probe's default page.

- [x] Preserve installed-game shortcuts for saved media across reload
  id: OPFS-PERSIST-INSTALLED-SHORTCUTS
  status: done (2026-10-10, claude:1863d2b5; reviewed by orchestrator)
  note: 2026-10-10T01:40Z already integrated: main carries it as 728c6495 (same change as branch commit c9b563b2; a cherry-pick onto main conflicts only as add/add with identical content). Retested on main dcbc6080: test-installed-shortcuts 12/12 PASS, test-web-installed-shortcuts 8/8 PASS (headless Chrome). Branch claude/opfs-installed-shortcuts is superseded, nothing left to merge.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T11:30:34.781Z
  accepted: 2026-10-04T11:51:42.826Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Implemented and tested; commit c9b563b2 on local branch claude/opfs-installed-shortcuts (parent origin/main eb6d4d61; no push credentials) awaits ops-dashboard review + main integration, then verify the main receipt and mark done. Not yet verified with a real installer end-to-end (NFS2SE-INSTALL-ICON-VERIFY covers that).
  done: Installed-game icons survive reload with saved files, launch correctly, do not duplicate or falsely imply deleted media exists; verified remote-main commit.
  evidence: USER-DECISION-OPFS-SHORTCUTS; commit c9b563b2 (lib/installed-shortcuts.js new, lib/media-library.js setShortcuts, lib/media-import-ui.js restore/persist/remove, lib/browser-shell.js publishGuestShortcuts+attachDynamicOverlay, index.html script list); node test/test-installed-shortcuts.js exit 0 (12 cases); node test/test-web-installed-shortcuts.js exit 0 twice (7 checks: saved on row, kept badge, unsaved not kept, reload restores exactly one kept icon, missing target pruned, restored entry launches installed exe from kept media, media removal removes icon now and after reload); check-browser-cache-versions + check-test-manifest OK; test-web-media-import fails identically on clean origin/main at its headless CD-audio clock assertion (pre-existing)

- [x] Implement progressive loading with Diablo pilot
  id: CLAUDE-DIABLO-LAZY-LOADING-PILOT
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T11:33:02.069Z
  accepted: 2026-10-04T11:33:53.932Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Done 2026-10-05T12:00Z: all 6 claude/diablo-lazy-s0 commits are on origin/main as f46c76ed, 23c39d82, 27bbba3b, d04aed13, e22fbfd3, aeb9c2a7 (verified by subject match).
  done: Actual Diablo launch/gameplay with safe on-demand reads, honest wait/progress/retry/cancel and cold/warm/failure validation; scoped reviewed/tested commits verified on remote main.
  evidence: Remote branch claude/diablo-lazy-s0 verified b4aaab7ce663a0073d93266a9443ddf90bad6aac (root pushed); scratch/claude-progressive-game-loading-20261004/diablo-pilot-approval.txt; ops/handoffs/claude-progressive-game-loading-design-20261004.md; runs scratch/claude-progressive-game-loading-20261004/runs/ (s1-eager, s2-lazy-nopreload broken menu, s4-cold/warm/fail8/delay1500/threads receipts); trace: 2302 reads of spawn.mpq on menu->Tristram, 77 dialog-time reads (0.61 MB) cannot park; preload 8 ranges 4.6 MB; cold browser fetched 16.5 of 50.3 MB by gameplay; no speed claim

- [~] Remove excluded marketing material from GitHub and historical copies
  id: OPS-REMOVE-MARKETING-20261004
  status: review
  owner: ops-dashboard
  next: Integrate ops/remove-marketing-20261004 removal commit and sanitized Claude handoff; audit historical Git refs and restored archives for dedicated marketing content. Coordinate any history rewrite with integration owner; do not erase shared technical transcripts blindly.
  done: Excluded marketing files/proposals absent from live checkout and GitHub with explicit historical-copy disposition; marketing stays deferred.
  evidence: scratch/marketing-removal-20261004/publication.json

- [~] Implement Heroes II short-clock-wait timing fix
  id: CLAUDE-HEROES2-TIMING-FIX
  status: deferred
  owner: claude:5e92d715-laptop
  created: 2026-10-04T16:28:37.592Z
  accepted: 2026-10-04T17:38:02.623Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Box work stopped by user ownership directive. Laptop owns timing/music and pushed97718c18+6a92c113. Preserve its work; no box retry or user-answer gate. Prior39d4bb09 revert was integrator deferral pending idle anomaly, not an unexplained user revert.
  done: Measured walking improvement with preserved idle/input/timing correctness, focused regressions and DiabloII check; scoped commit reviewed and verified on remote main.
  evidence: docs/re-notes/heroes2-performance-20261004.md; scratch/claude-heroes2-timing-fix-20261004/assignment.txt; matrix scratch/claude-heroes2-timing-fix-20261004/matrix-heroes-table.txt + runs/2026-10-04T19-*; 1426 s runtime, released 19:30:18Z

- [~] Claude: independent review of the Heroes II fix, idle-check design and detector latch expiry
  id: CLAUDE-HEROES2-LATCH-REVIEW
  status: deferred
  owner: claude:5e92d715-laptop
  created: 2026-10-05T04:41:30.725Z
  accepted: 2026-10-05T04:41:30.725Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  dependencies: CLAUDE-HEROES2-TIMING-FIX
  next: Box work stopped by user ownership directive. Laptop owns timing/music and pushed97718c18+6a92c113. Preserve its work; no box retry or user-answer gate. Prior39d4bb09 revert was integrator deferral pending idle anomaly, not an unexplained user revert.
  done: ops/handoffs/claude-heroes2-latch-review-20261005.md reviewed by coordinator.
  evidence: ops/handoffs/claude-heroes2-latch-review-20261005.md delivered

- [x] Claude: performance ideas for Diablo II, Heroes III and Warcraft III demos + latest ToyVM review
  id: CLAUDE-THREE-GAME-PERFORMANCE-REVIEW
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-04T19:05:30.470Z
  accepted: 2026-10-04T19:05:30.470Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Done: handoff on remote main (identical to origin/main aba6a08d, verified 2026-10-05). Its experiments are separate future tasks.
  done: Reviewable handoff ops/handoffs/claude-three-game-performance-review-20261004.md with ranked, evidence-labelled ideas and concrete next experiments; committed for ops-dashboard integration.
  evidence: ops/handoffs/claude-three-game-performance-review-20261004.md commit 174ec244

- [x] Claude: ToyVM longer runs and background-Worker JIT
  id: CLAUDE-TOYVM-LONGRUN-BG
  status: done (2026-10-10, claude:1863d2b5; reviewed by orchestrator)
  note: 2026-10-10T01:45Z confirmed: handoff ops/handoffs/claude-toyvm-longrun-bg-20261005.md is on main with the measured BRW smoke (section 3), break-even analysis (4.1: needs marginal ratio m<1; BRW m>=1, DREAM decides it) and the worker-JIT experiment plan; region-JIT commits b0f38372 + deddbe2b are on main. Raw scratch runs dir was pruned in a disk cleanup; numbers live in the handoff. No performance claim made.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T00:46:55.161Z
  accepted: 2026-10-05T00:46:55.161Z
  accepted-by: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  next: Delivered by subagent of claude:1863d2b5 (81 s local BRW smoke, released). BRW: jit-sep ~1% slower than L1 after its install, so no run length breaks even there (BRW ends itself at 657.2M; region covers 4.3%); continuous arms worsen with length; jit-sepw moves pick/gate/build to the Worker, saving at most ~0.3 s per install while making install timing wall-clock dependent and adding CPU; Node v20 does not report worker CPU back, so arm-bench's build/run split is wrong for worker arms. Proposed next: equivalent-L1-work experiment on a quiet bench box (DREAM/DRAGON/ADDY_II/CONTAGIO + BRW parity; arms l1 x2, jit-sep, jit-sepw; 30/120 s ~37 min first, 300 s +84 min) — needs a budget grant. Handoff now in commit 68dedca3 on pushed branch claude/docs-20261005 (base origin/main aba6a08d); main push to be serialized with root. WORKER 2026-10-05T10:35Z: longrun-worker subagent of claude:1863d2b5 builds a pinned (HEAD) harness in scratch/claude-toyvm-longrun-bg-20261005/bench-*/ and runs the ~37 min experiment on a temporary boat worker box if provisioning works (deleted after); runtime host recorded per result. Main box: no runtime. HARNESS READY 2026-10-05T10:50Z: scratch/claude-toyvm-longrun-bg-20261005/bench-20261005/ (panel/probe/run-bench/analyze/stage.sh/box-run.sh), pinned to 2683a6e3 via git archive (committed dos-loop.js, not the IRQ fix), hashes in pins/. Not run. BLOCKED: no worker box (boat CLI 401 signed out; ASCII_TOKEN login also 401; bench box bx_xegf6upd ssh publickey denied). Needs user `boat login` (or bench-box key), then ~37 min box time: stage.sh HEAD -> box-run.sh (smoke flags in README of the dir).
  done: Reviewed long-run/background-JIT analysis with measured smoke and an approved experiment plan; no performance claim without equivalent-work runs.
  evidence: ops/handoffs/claude-toyvm-longrun-bg-20261005.md; scratch/claude-toyvm-longrun-bg-20261005/runs/

- [x] Independent Claude and Codex performance review for three demo priorities
  id: PERF-THREE-GAMES-TOYVM-20261004
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete independent review publication: Claude report already main2c94e0f1; missing Codex report and dated reconciliation now main142d9252, remote verified7e288793. Both exact historical reports preserved. No new benchmark or performance promotion; ongoing private correctness work tracked separately.
  Done: reviewable findings name exact result/build/engine identities, transferable evidence, correctness risks, missing measurements and bounded experiments; scoped findings commit handed to ops-dashboard for main integration.
  Evidence: ops/handoffs/codex-three-game-performance-review-20261004.md; ops/handoffs/claude-three-game-performance-review-20261004.md; ops/handoffs/three-game-performance-reconciliation-20261005.md; scratch/perf-three-games-reconcile-20261005/audit.json; main142d9252

- [ ] Investigate ToyVM longer runs and background compilation
  id: TOYVM-LONGRUN-BG-20261005
  status: review
  owner: unowned
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  Next: Source audit now main5a7648c4; existing Worker overlap confirmed, final separate-module compilation/install foreground and lifecycle/accounting gaps identified. Larger matched-work duration sweep has NOT run: isolated worker provisioning blocked by boat401/bench SSH publickey denial (CLAUDE-TOYVM-LONGRUN-BG). BRW diagnostic P5/P6 are complete, not a live grant: recommendation records P5 parity and P6 no stable differences; original P4 failure remains. IF candidate broader correctness queued separately after Arena/Ski, no promotion.
  Done: exact tested arms, duration/CPU/wall and correctness receipts; explain break-even evidence and a concrete next change or negative result. Preserve L1 and BRW correctness blocker.
  Evidence: ops/handoffs/claude-toyvm-longrun-bg-20261005.md; ops/handoffs/toyvm-background-worker-audit-20261005.md main5a7648c4; ops/handoffs/claude-toyvm-brw-20261005/recommendation-20261005.md; CLAUDE-TOYVM-LONGRUN-BG exact external-resource blocker.

- [x] Implement user-requested dashboard gaps with Claude
  id: CLAUDE-DASHBOARD-GAPS-20261005
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  Next: Done: merged to main and live (c003b59f).
  Done: actual missing features implemented with honest unknowns, meaningful tests and browser review; scoped commits integrated by ops-dashboard with verified remote-main receipt.
  Evidence: ops/handoffs/claude-dashboard-gaps-20261005.md (assigned); messageboard pickup pending.; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: single full-width agent column, two lines per agent/subagent, honest stale/idle
  id: DASH-GAPS-AGENTS-2LINE
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit a3eba543 (on cherry-pick 255aeab6 of 63a248a6); MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: Ready-for-desktop view for unreleased games (reviewed shot, FPS or unknown, sound/input evidence, exact blockers)
  id: DASH-GAPS-READY-DESKTOP
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit c78d985f; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: Play into exact corpus game/build with build identity and truthful unavailable reasons
  id: DASH-GAPS-PLAY-BUILD
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit 2996f415; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: blockers split user-input vs agent-resolvable with Telegram /blockers parity
  id: DASH-GAPS-BLOCKERS-SPLIT
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit 5585d09c; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: tested/committed/pushed/merged/deployed status with GitHub/evidence links
  id: DASH-GAPS-CODE-STATE
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit 246e9b83; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Dashboard: before/after performance only when scene and build identity match
  id: DASH-GAPS-PERF-COMPARE
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-05T01:16:58.714Z
  dependencies: CLAUDE-DASHBOARD-GAPS-20261005
  next: Done: merged to main and live (c003b59f).
  done: Scoped commit with ops tests passing, browser-reviewed when a slot is granted, integrated to remote main by ops-dashboard.
  evidence: ops/handoffs/claude-dashboard-gaps-20261005.md commit 4816ec7b; MAIN RECEIPT verified 2026-10-05 by claude:1863d2b5: origin/main = c003b59f contains fa678484, 313a69ae, c12a662d, 625c25bc, dcd9578c, d9bd42c0, c003b59f; root verified the live browser release view and single-column agents

  Integration: c003b59f; scratch/ops-ui-live-20261005.json; live release and agents screenshots, no page errors.

- [x] Add both Dungeons of Dredmor variants to local EXE corpus
  id: CORPUS-DREDMOR-20261005
  status: done
  owner: ops-dashboard
  Next: Registrations a3d88870/a1c72638 verified in main; missing acquisition handoffs now published/reconciled maina33a8d61. Release lazy loading/retry and ordinary dungeon controls validated separately; beta gameplay remains unqualified. No public deployment.
  Done: Verified fixtures, source/hash provenance and scoped registration integrated to remote main; no untested gameplay claim.
  Evidence: ops/handoffs/dungeons-of-dredmor-both-variants-20261005.md maina33a8d61; CORPUS-DREDMOR-RELEASE-20261005 acquisition folded into this two-variant record.

- [x] Batch straightforward screenshot tasks with one worker
  id: SCREENSHOT-BATCH-EASY-20261005
  status: done
  owner: ops-dashboard
  Next: Script/receipts integrated as f9503127, present on remote main d12143bd.44-record live queue consolidated; FPS obligations remain in performance aggregate.
  Done: Reviewed evidence and reusable script integrated to remote main; original task IDs and remaining performance criteria preserved.
  Evidence: ops/handoffs/screenshot-batch-easy-20261005.md; ops/screenshot-reviews-20261005.json; commit fbdf0e57. Review hash and serial mock-harness tests passed; real browser capture mode not yet qualified.

- [ ] Measure gameplay performance for 44 scene-reviewed games
  id: GAMEPLAY-PERFORMANCE-BATCH-20261005
  status: done (20 of 32 samples qualified, w6 review addressed, re-measured in play; follow-ups marbles/rodent2000/fallout/moorhuhn_3/moorhuhn_tennis/pawn stay listed on the row; accepted by orchestrator; follow-ups 2026-10-10 23:25Z: marbles ~20, rodent2000 ~1, moorhuhn_3 26-36, fallout_demo 29-37 GAME/s headful on bx_kqx28rrm, scene-checked (scratch/runs/20261010T2300Z-perf-followups-boat-d10ba697); HUD counter-clear bug fixed b3e21aa8b; still open: moorhuhn_tennis (Flash step unproven), pawn (needs GPU))
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T13:28Z)
  prev-owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5 — Codex out of credits until 2026-10-12; its uncommitted shared-tree work is preserved on archive/codex-shared-tree-20261006 (see ops/handoffs/codex-release-review-20261006.md)
  Next: SkiFree shared-HUD backing proven with actual native/host producer and strict live preflight; attempt5 accepted72/5.00329sec=14.390531 presentations/s, but personally reviewed sample was stopped/crash-recovery at925m/0m/s, not continuous downhill FPS. Publish exact scene-qualified raw result; prepare normal-input downhill sample with movement review. Hype guarded exclusive-layer sample ready, Jig DirectDraw obligation remains; preserve all44 criteria.
  Done: Every archived ID retains its original screenshot and scene-qualified measurement criteria, raw samples, counter proof and build identity. Consolidation completes none of these FPS obligations; semantic limitations must be explicit.
  Evidence: ops/screenshot-batch-consolidation-20261005.json contains all 44 original unchecked task blocks, IDs and evidence. Active investigations and blockers remain separate.

- [x] Load corpus manifest assets on demand, verify Dredmor startup
  id: CORPUS-MANIFEST-LAZY-DREDMOR
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete: real lazy ranges, natural Loading, failed read/error feedback, ordinary Retry150ms and exact same-range206 recovery to menu verified. Gameplay/FPS remain separate; Quit button not clicked.
  Done: Generic manifest path avoids eagerly fetching all assets; required startup files are available, on-demand waits show existing UX, errors/retries are honest, Dredmor real launch recorded and scoped tests/commit on main. Gameplay remains separate.
  Evidence: ops/handoffs/dredmor-wide-path-apis-20261005.md; docs/manifest-loading.md; scratch/runs/20261005-dredmor-lazy-retry-recovery; source45e3f361/module40cc; root reviewed all screenshots and target3x503→2066563bytes.

- [x] Reach player-controlled Dredmor release dungeon through ordinary setup
  id: GAMEPLAY-dungeons-of-dredmor-release
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete narrow gameplay/control: pristine14222 Level1 before/down/up ordinary150ms heldkeys show south movement and north reversal. Published20261005-dredmor-release-controlled-gameplay; root reviewed. FPS/audio/long-route/publicrelease remain unqualified and separate.
  Done: Actual player-controlled dungeon scene with ordinary input and reviewed gameplay screenshot, exact loaded identities; menus/setup never qualify. FPS separate unsupported until proven counter.
  Evidence: scratch/runs/20261005-dredmor-release-controlled-gameplay/result.json; before-movement.png/after-down.png/after-up.png; exact45e3/40cc and97servedpins; release-review-proposal.json retains remaining gates.

- [ ] New-game lane: Black & White 2 demo ordinary controlled gameplay
  id: NEW-GAME-BW2-20261005
  status: deferred
  candidate: black_white_2_demo
  owner: /root/coverage_audit
  created: 2026-10-05T15:03:56.451Z
  accepted: 2026-10-05T15:03:56.451Z
  accepted-by: /root/coverage_audit
  Next: Selection invalidated: docs/re-notes/black-white-2.md:7583 already records controlled tutorial gameplay. Do not count as a new-game lane or rerun for pipeline credit.
  Done: Personally and independently reviewed player-controlled gameplay screenshots with original ordinary inputs, exact source/run/fixture identity and cleanup; otherwise actionable source-backed blocker. No menu/flyover-as-gameplay or FPS inference.
  Evidence: scratch/hype-refill-reserve-20261005/selection.json; scratch/hype-refill-reserve-20261005/public-desktop.json; docs/re-notes/black-white-2.md

- [x] New-game lane: Morrowind ordinary player-controlled gameplay
  id: NEW-GAME-MORROWIND-20261005
  status: done
  candidate: morrowind
  owner: /root/coverage_audit
  created: 2026-10-05T15:06:33.828Z
  accepted: 2026-10-05T15:06:33.828Z
  accepted-by: /root/coverage_audit
  Next: Narrow prison first-person W/S movement accepted by root; immutable run20261005-morrowind-prison-movement,328hashes verified; docs main80c6be42. Typing fidelity, further progression and FPS remain separate; no fullgame claim.
  Done: Reviewed actual player-controlled gameplay beyond character-generation-only evidence, original inputs, exact source/run/fixture identity and clean shutdown; otherwise actionable source-backed blocker. FPS separate.
  Evidence: scratch/hype-refill-reserve-20261005/morrowind-selection.json; scratch/hype-refill-reserve-20261005/public-desktop.json; docs/re-notes/morrowind.md

- [x] Real subprocess inherited standard handles and anonymous pipes
  id: PROCESS-PIPE-STDIO-WINBOARD
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da
  Next: Reconciled 2026-10-06T15:36Z by claude:90024109: duplicate of the primary entry above (status done there; GL slice: warcraft3/quake2/halflife_uplink/ptct/simgolf render on software+WebGL; WinBoard pipes: phases 1-3 + browser + threads repaint, commits 1b54be50..2dab96f8).
  Done: Actual parent/child ordered I/O, duplicate/close/EOF/error semantics and ordinary GNUChess reply pass without protocol simulation.
  Evidence: scratch/new-games-pipeline-20261005/winboard/startup-finding.md; scratch/runs/20261005-winboard-engine-startup/result.json


- [x] Correct ToyVM install accounting when a prepared region is declined
  id: TOYVM-INSTALL-DECLINE-ACCOUNTING
  status: done
  owner: /root/coverage_audit
  created: 2026-10-05T20:07:32.599Z
  Next: Complete: exactfalse fix main69c1371b plus regenerated browser bundles main44313238 pushed. Permanent actual-module regression and1639-file tier gate pass; bundle freshness passes; isolated browser-shaped VM smoke ran real program and printed HI (449ms exit0/groupclear). Successful undefined return and continuous rewindow preserved. No public deployment.
  Done: Real regression fails before and passes after a minimal fix, correct successful install accounting retained; scoped reviewed commit integrated into main after applicable checks. No optimization or benchmark claim.
  Evidence: test/test-toyvm-install-decline.js; scratch/toyvm-phantom-install-20261005/permanent-validation.json; browser-bundle-smoke.json/log in same directory; source69c1371b/generated44313238 on remote main.

- [x] New-game lane: Myth: The Fallen Lords (demo first, then retail ISO)
  id: NEW-GAME-MYTH-20261005
  status: done
  candidate: myth-the-fallen-lords
  owner: claude:d10ba697
  created: 2026-10-05T21:45:51.269Z
  Next: Done: retail ISO gameplay (c1d22ecf), browser route (f4855415), network modules (ba4a740d), in-level audio (df6de866), Progman DDE (e7c970ef), BYO-ISO e2e (9db9370a), 3dfx default (MYTH-3DFX-20261006). FPS ~30 PRESENT/s headless only.
  Done: Working launch route, personally reviewed real battle gameplay with ordinary unit-command response, screenshot/run/source identities and scoped changes on main. FPS and public deployment separate.
  Evidence: scratch/new-game-myth-20261005; test/candidate-corpus/manifest.json myth-the-fallen-lords.

- [x] New-game lane: original Tomb Raider III Windows Jungle demo
  id: NEW-GAME-TOMB-RAIDER3-20261005
  status: done
  candidate: tomb-raider-3-demo
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (reassigned 2026-10-05T21:45Z by claude:80aa9e95; prior /root/corpus_categories gone)
  created: 2026-10-05T21:17:17.001Z
  Next: Done 2026-10-05T22:40Z: idle vs VK_UP Jungle frames reviewed by claude:80aa9e95 (Lara stands vs runs down the path); c0081348+1a90c1c3 fast-forwarded to origin/main. Open follow-ups: MS-ADPCM audio, passport texture, loading-picture fade, browser, FPS.
  Done: Working original-game launch, personally reviewed real Jungle gameplay with ordinary player movement response, screenshot/run/source identities and scoped changes on main. FPS and public deployment separate.
  Evidence: scratch/runs/20261005T222900Z-tomb-raider-3-demo-claude202b4b39-jungle-c0081348; docs/re-notes/tomb-raider-3-demo.md; main 1a90c1c3.

- [x] Myth: switchable 3dfx (Glide) renderer, default for myth_tfl
  id: MYTH-3DFX-20261006
  status: done
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-06T00:54:28.676Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 8cd80d5a + b7acece2 + 9466f23d on main; orchestrator reviewed browser Threads-ON 3dfx frame (scratch/runs/20261006T010423Z-myth-3dfx-web-threads-fixed/w143.png); 3dfx default + Software switch verified in browser; BYO test PASS on 3dfx. Not tested: renderer choice across reload, real GPU/WebKit.
  Done: Myth in-level on 3dfx in the browser (WebGL), 3dfx default and Preferences>Graphics>Rendering: Software switch documented in re-notes; reviewed screenshot; commit on main.
  Evidence: main 8cd80d5a; scratch/runs/20261006T003007Z-myth-3dfx-inlevel-final; scratch/runs/20261006T003437Z-myth-3dfx-switch-software2; docs/re-notes/myth-tfl.md

- [x] New-game lane: Tomb Raider II Venice demo
  id: NEW-GAME-TOMB-RAIDER2-DEMO
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T00:54:28.676Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle vs run frames reviewed by orchestrator; fd170ee0+999bb9c5 on main. Open: audio, FPS, browser.
  Done: Working launch, reviewed player-controlled gameplay, commit on main.
  Evidence: scratch/runs/20261005T224500Z-tomb-raider-2-demo-claude202b4b39-venice-fcf8f2f1; docs/re-notes/tomb-raider-2-demo.md

- [x] New-game lane: Unreal Tournament 348 demo
  id: NEW-GAME-UT348-DEMO
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T00:54:28.676Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: DM-Morpheus walk + mouse-look reviewed; f729c34d on main. Open: blank wizard button labels, relative mouse ~46% scale, FPS, browser.
  Done: Working launch, reviewed player-controlled gameplay, commit on main.
  Evidence: scratch/runs/20261006T001500Z-ut348-demo-claude202b4b39-dm-morpheus; docs/re-notes/unreal-family-demos.md

- [x] New-game lane: Command & Conquer Red Alert 95 demo
  id: NEW-GAME-RED-ALERT-95-DEMO
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T00:54:28.676Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: Allied mission 1 idle vs order arms reviewed by orchestrator (Ranger drives to click); 457b98a3/7b2d34f2/8718fa0b on main. Open: audio, FPS, browser.
  Done: Working launch, reviewed player-controlled gameplay (units respond to orders), screenshot + run/source identity, commit on main.
  Evidence: scratch/runs/20261006T005200Z-red-alert-95-demo-claude202b4b39-mission1; docs/re-notes/red-alert-95-demo.md; main 8718fa0b.

- [x] NFS III demo on Direct3D draws a thin black horizontal line across the race view
  id: NFS3-D3D-HORIZON-LINE-20261006
  status: done
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T00:58:16.457Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: ce4256db (software top-left rule) + e273d87c (WebGL -1/16 px bias), browser-verified clean (scratch/runs/20261006-nfs3-d3d-horizon-line/after-webgl.png reviewed by orchestrator). nfs3_demo may go back to D3D if desired.
  Done: D3D race view has no line (reviewed screenshot vs Glide), regression test, commit on main; nfs3_demo may then go back to D3D.
  Evidence: scratch/nfs3-d3d-line/nfs3d3d-race.png (line), scratch/nfs3-d3d-line/g4.png (Glide clean)

- [ ] GL/Direct3D corpus: every 3D app works on software and WebGL
  id: GLD3D-CORPUS-27-20261006
  status: active
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  prev-owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (fleet stopped)
  created: 2026-10-06T02:09:48.337Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Current-main appendix a34947703 folds in w4 1930Z: AVP marine/alien and Colin WebGL gameplay verified; CMR2 GPU glyph blocks, TDR CLI loader stall, BG2 current DirectDraw route (GL unverified). w4 still owns Driver Glide and Descent3 in-flight followups and requests boat. Sweep w6 14/14 bounded runs no longer crash, but Kodak missing fixture OIDIS400/OIADM400 and UT2004 blank/loading remain functional gaps, not gameplay qualification. BW2 dialogue/ordinary camera stays Claude202b4b39 (live run ends about20:37). Root lanes IW setup render fixed61a, keyboard control investigation; CMR3 staging and module-row concurrency before real unload-and-exit. Preserve Pirates/MilkDrop/falling-leaves/backend FPS/audio gaps; Morrowind paused, HeroesII laptop-owned.
  Done: Status table for the full GL/D3D set in docs (software + WebGL per app, with run ids), and each fixed app has a reviewed in-game screenshot and commit on main.
  Evidence: memory project_gl_d3d_corpus_goal (27-app set, 2026-09-22); tools/gfx-app-census.js; tools/gl-name-census.js

- [x] GL/D3D goal slice: OpenGL family on software + WebGL
  id: GLD3D-OPENGL-SLICE-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da
  created: 2026-10-06T04:08:08.120Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Reconciled 2026-10-06T15:36Z by claude:90024109: duplicate of the primary entry above (status done there; GL slice: warcraft3/quake2/halflife_uplink/ptct/simgolf render on software+WebGL; WinBoard pipes: phases 1-3 + browser + threads repaint, commits 1b54be50..2dab96f8).
  Done: Every gl-family app has software + WebGL status with run ids in the shared table; fixed apps have reviewed screenshots and commits on main.
  Evidence: docs/gl-d3d-corpus-status.md; tools/gfx-app-census.js --family=gl

- [x] New game: Atlantis: The Lost Tales demo (Cryo 1997) to gameplay
  id: NEW-GAME-ATLANTIS-DEMO-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T04:09:00.281Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done (duplicate of the done record above, reconciled 2026-10-06T07:40Z): registered 49e250ad, re-notes 1c9b1267, orchestrator REVIEWED 04:46.
  Done: Registered app reaches the first playable scene with input moving the view/character; reviewed evidence with candidateId = app id; commits on main.
  Evidence: scratch/runs/20261006T045000Z-atlantis-demo-gameplay (reviewed)

- [x] New game: Atomic Bomberman demo (Interplay 1997, DirectDraw) to gameplay
  id: NEW-GAME-ATOMIC-BOMBERMAN-DEMO-20261006
  status: dropped
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T04:05:32.774Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: DROPPED 2026-10-06 04:2x as a near-duplicate of the registered atomic_bomberman_june_demo (BM95DEMO.EXE, June 1997). This folder is the earlier 'Alpha Release Demo' (_BOMB.EXE, Apr 1997, 301,056 bytes). It needs no emulator fixes: CLI with --vfs-include='*,DATA/**/*' --batch-size=50000 and Enter every 2000 batches goes through the Interplay/Hudson logos, main menu, input selection, options and a match; the arrow keys move the white bomber (A/B against a no-key control: only its rect differs). Not registered.
  Done: Registered app reaches a match with a bomber moved by input; reviewed evidence with candidateId = app id; commits on main.
  Evidence: scratchpad captures only (no result.json; not registered)

- [x] nfs3_glide_demo / diablo2_glide_demo trap: Glide draws/clears before grSstWinOpen
  id: GLIDE-DRAW-BEFORE-OPEN-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T03:46:35.217Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: cfdf0368+b007cf57 — CLI-only cause (run.js gave the WebGL Glide bridge no canvas); nfs3_glide_demo reaches the race and diablo2_glide_demo the main menu headless. Browser path unchanged.
  Done: nfs3_glide_demo and diablo2_glide_demo no longer trap in the crash sweep; regression test; NFS III Glide race + Diablo II menu screenshots reviewed.
  Evidence: docs/crash-sweep-20261006.md; src/09a8h-glide.wat

- [ ] D3D9 unit tests failing on clean main (adapter parent retain, color-surfaces, constants, fixed-cache, psize, shader-objects, shader-retention-oom, ...)
  id: D3D9-PREEXISTING-TEST-FAILURES-20261006
  status: done
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  created: 2026-10-06T03:46:35.217Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Duplicate of the earlier record with this id (closed done by claude:80aa9e95): 10/12 fixed (1b5f2208, 5a1d9430, a81b6c42, e4fd56e5); software-backend ps_1_4 is an unimplemented feature (fails at its own commit); typed-gpu is a browser test.
  Done: All test-d3d9-*.js pass on main or each remaining failure is documented as stale with reason.
  Evidence: board 2026-10-06T03:46:02 claude:1863d2b5

- [x] GL/D3D goal slice: the Direct3D Retained Mode cluster (scr_* screensavers + DX SDK d3drm samples)
  id: GLD3D-D3DRM-CLUSTER-20261006
  status: done
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983
  created: 2026-10-06T02:14:12.830Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: all 7 Plus!98 savers + DX SDK d3drm samples have software + WebGL rows (a0e96e5d and board 04:12).
  Done: Every d3drm-family app has a recorded software + WebGL status with run ids; fixed apps have reviewed screenshots and commits on main.
  Evidence: tools/gfx-app-census.js; docs/re-notes/dx-sdk-d3drm-samples.md; GLD3D-CORPUS-27-20261006

- [x] Ops dashboard redesign: fun dark theme, solid UX, laptop + phone
  id: OPS-DASHBOARD-REDESIGN-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da
  created: 2026-10-06T03:06:47.828Z
  requested-by: user via Telegram ("Lets do more fun dark theme just with solid UX")
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: f38937a6 + 1bc629a9 (cyberpunk HUD) + 406f5227 (display names) live on wine-ops; orchestrator reviewed laptop/phone shots scratch/runs/20261006T0335Z-ops-cyberpunk-shots; sent to user.
  Done: New design live on the dashboard at 1440x900 and 390x844 with screenshots reviewed by the orchestrator; ops *.test.js no new failures; no horizontal scroll on phone.
  Evidence: scratch/runs/20261006T0335Z-ops-cyberpunk-shots (laptop 1440x900 + phone 390x844, overflowX=0); scratch/runs/20261006T0321Z-ops-redesign-shots (first pass); ops non-browser tests 240/240; scratch/ops-design-review-20261006/REVIEW.md

- [x] Registry-wide headless crash sweep and fixes
  id: SWEEP-CRASHES-20261006
  status: done
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da
  created: 2026-10-06T02:14:12.830Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Completed dated startup crash table/fixes. WinBoard CreatePipe blocker was subsequently resolved with real pipe/child support and reviewed engine reply, including Threads-on browser2dab96f8. Documentation reconciled October7; later full271-app dual-mode sweep and picture-split follow-ups remain dated startup evidence, not universal gameplay proof.
  Done: Ranked crash table committed under docs/ with run ids; top crashers fixed with tests and commits on main; remaining crashes listed with the blocking API/trap.
  Evidence: lib/apps.js; tools/startup-modal-sweep.js; tools/block-exec-sweep.js

- [x] New-game lane: Die by the Sword demo
  id: NEW-GAME-DIE-BY-THE-SWORD-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T00:58:16.457Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle vs W-walk frames reviewed by orchestrator; 526e376c on main (no emulator change). Open: 3D hardware (Glide) path, audio, FPS, browser.
  Done: Working launch, reviewed player-controlled gameplay, screenshot + run/source identity, commit on main.
  Evidence: scratch/runs/20261006T040000Z-die-by-the-sword-demo-quest-walk; docs/re-notes/die-by-the-sword-demo.md; main 526e376c.

- [x] AOE cursor invisible
  id: AOE-CURSOR-INVISIBLE-20261006
  status: done
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T02:51:01.101Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 71845fe9 (DDERR_NOCLIPPERATTACHED) + aoe2 91bbc717/a87fced6; orchestrator reviewed aoe1 + aoe2 cursor frames; browser re-check queued.
  Done: Cursor visible in the browser for aoe1 (and aoe2 if same), reviewed screenshot, fix + test on main.
  Evidence: scratch/runs/20261006T033000Z-aoe1-cursor-getclipper (before/after primary), scratch/runs/20261006T034500Z-aoe2-dplay4w-cursor; commits 71845fe9 (GetClipper DDERR_NOCLIPPERATTACHED), 91bbc717 (Unicode IDirectPlay4), a87fced6 (aoe2 manifest), c99527a8 (re-notes)

- [x] New-game lane: Delta Force demo
  id: NEW-GAME-DELTA-FORCE-DEMO-20261006
  status: done (duplicate of the reviewed row at line 4110; was "review")
  candidate: win98-games-a-d/Delta Force-demo-SWonly (InstallShield 5 SETUP.EXE + data1.cab; NovaLogic 1998, software renderer)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T02:36:35.055Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Result (2026-10-10T03:15Z): GAMEPLAY reached and input proven; registered delta_force_demo on main 15e69c5dd (+ re-notes delta-force-demo.md). Route: Accept Soldier (318,438) at 400k, Single Player (320,162) at 600k, mission 1 by ~750k; tick-ms:5 at 650k. Input arm (mouse-look down + Up/W) passes CP ALPHA -> CP BRAVO and is shot by 860k; control stays on the sky at CP ALPHA (75% pixels differ). The 10-06 spin-park stall no longer reproduces (both arms reach the menu); the in-game freeze at 200 ms/batch is a fixed-timestep catch-up spiral under the headless clock, not an emulator bug. Evidence scratch/runs/20261010T0310Z-delta-force-demo-gameplay. WIP branch claude/deltaforce-20261006 not needed. FPS/audio/browser separate.
  Evidence: scratch/runs/20261010T0310Z-delta-force-demo-gameplay/result.json
  Next: PARKED again 2026-10-06 03:58 — the spin_work_max fix does NOT hold: Delta Force's logo/loader loop still parks 659x/1500 batches at any work threshold (1..64 blocks, and with $page_ft fall-throughs added), so between its 8 consecutive empty peeks the main thread really runs <=1 block, yet with --no-spin-park the same loop shows ~13 peeks/batch with ~1500 blocks each (1275 PeekMessage + 20 GetTickCount + 20 Lock/Unlock per 100 batches, time-paced logo fade). The guest's loop shape differs once parked; next step is to trace the main loop body (0x416461 / pump 0x47a2bc and its callers) in both arms, not to tune the threshold. Fix commits stay local only (branch claude/deltaforce-20261006 in scratch/claude-dbts-wt, NOT on main). Installed tree + menu route as recorded above.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: (pending)

- [x] New-game lane: Disciples demo
  id: NEW-GAME-DISCIPLES-DEMO-20261006
  status: done
  candidate: win98-games-a-d/Disciples demo SW (DisciplesDemo.exe, 37MB, likely a self-extracting installer)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T01:51:49.941Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle map vs city-screen frames reviewed by orchestrator; 203a2fb0+b7d99d22 on main. Open: browser exeGuestPath check, audio, FPS.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/runs/20261006T030000Z-disciples-demo-city (reviewed; installed by its own setup in the emulator; double-click capital opens city management vs idle map), commits 203a2fb0 (fixes + tests) and b7d99d22 (registry + exeGuestPath) on main, docs/re-notes/disciples-demo.md

- [x] New-game lane: Daytona USA Deluxe demo
  id: NEW-GAME-DAYTONA-USA-DELUXE-20261006
  status: done
  candidate: win98-games-a-d/DaytonaUSA Deluxe-SWonly/GAME (DAYTONA USA Deluxe Demo WWW.exe, unpacked, DDraw/DInput/DSound, ddse.dll/dpctrl.dll)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T01:24:11.695Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle 0 mph vs gas 163 mph race frames reviewed by orchestrator; 94d6875e+58b6d9c8 on main. Open: audio, FPS, browser.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/runs/20261006T015500Z-daytona-usa-deluxe-demo-race (reviewed; X=gas reaches 163 mph vs idle 0 mph on the grid), commits 94d6875e (4 fixes + tests) and 58b6d9c8 (registry) on main, docs/re-notes/daytona-usa-deluxe-demo.md

- [x] New-game lane: Dark Colony demo
  id: NEW-GAME-DARK-COLONY-20261006
  status: done
  candidate: win98-games-a-d/DarkColony-MagDemo-SW (dc.exe, unpacked, DDraw/DInput/DSound)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T01:10:49.689Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle vs Build (Trooper exits base) and scroll frames reviewed by orchestrator; 08605900 on main. Open: audio, FPS, browser.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/runs/20261006T014500Z-dark-colony-demo-build-scroll (reviewed; Space builds a Trooper out of the base, Right arrow scrolls the map, vs idle arm), commit 08605900 on main, docs/re-notes/dark-colony-demo.md

- [x] New-game lane: Die by the Sword demo
  id: NEW-GAME-DIE-BY-THE-SWORD-20261006
  status: done
  candidate: win98-games-a-d/Die by the sword demo-SW+Glide (dbts_demo.exe)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T00:58:00Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: none (FPS, audio, browser, Glide renderer are separate).
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/runs/20261006T040000Z-die-by-the-sword-demo-quest-walk (reviewed; software renderer, W walks Enric across the Quest hut vs idle control), commit 526e376c on main, docs/re-notes/die-by-the-sword-demo.md

- [x] New-game lane: original Arena dungeon controls
  id: NEW-GAME-ARENA-20261005
  status: done
  candidate: gog-free-elder-scrolls-arena
  owner: /root/restore_evidence
  Next: Qualified dungeon/right/left/idle with ordinary input,107hashes independentlyverified; findings57e1a949 integrated/pushed9df4dc30. Refilled with Tomb Raider III. Generic GAMEPLAY-gog-free-elder-scrolls-arena retains FPS criterion in review; no full-game/audio/reload-persistence claim.
  Done: Working original launch, actual player-controlled dungeon and reviewed screenshot/run identity on main.
  Evidence: scratch/runs/20261005-arena-dungeon-controls; docs/re-notes/elder-scrolls-arena-gog.md; main9df4dc30; Telegram490.

- [x] Separate DOS/ToyVM corpus with polished main-dashboard integration
  id: TOYVM-DOS-CORPUS-DASHBOARD-20261005
  status: done
  owner: claude:1863d2b5
  created: 2026-10-05T21:19:06.823Z
  requested-by: user via Telegram; explicitly assigned to Claude
  Next: Done: integrated by claude:1863d2b5 as main 550d7d4a after browser-verify 18/18 PASS (scratch/runs/20261005T223531Z-toyvm-dos-corpus-browser); Ultima IV ToyVM probe reached the title screen.
  Done: Separate original DOS corpus visible and linked in main web dashboard; supported links launch correct ToyVM route, unsupported states give concrete reasons. Required/lazy asset behavior and usable delayed loading/error/retry UX verified at desktop/mobile with keyboard access; meaningful tests and scoped commits integrated to remote main. Registration alone is not gameplay qualification. No public deployment.
  Evidence: User Telegram instruction; Claude pane%4/session1863d2b5; forthcoming scoped implementation and browser receipts.

- [x] New-game lane 1: Blood 2 demo (LithTech, D3D)
  id: NEW-GAME-BLOOD2-DEMO-20261006
  status: done
  candidate: win98-games-a-d/Blood2-demoD3D (InstallShield setup + Game/ payload; Monolith LithTech 1998, D3D)
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-06T01:26:44.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle/turn/fire strip reviewed by orchestrator (ammo 50->46); 8d70691a+1cb3a7ea on main. Open: audio, FPS, browser.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: main 8d70691a (LoadLibrary maps static imports first; DirectInput custom data formats; StringFromIID) + 1cb3a7ea (blood2_demo registration, docs/re-notes/blood2-demo.md); runs scratch/runs/20261006T015805Z-blood2-demo-app-route (reviewed: menu->level, turn, fire ammo 50->46) and scratch/runs/20261006T015102Z-blood2-demo-walk (walk out, enemy fire to death)

- [x] New-game lane: Commandos: Behind Enemy Lines demo (Pyro 1998, software 2D RTS)
  id: NEW-GAME-COMMANDOS-DEMO-20261006
  status: done
  candidate: win98-games-a-d/commandos-demo-SWonly.exe (WinZip self-extractor; local, no download)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T02:54:16.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 06-selected vs 07-after-move-order reviewed by orchestrator (commando walked to click); audio OK at data level. Open: browser route check, FPS.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: main 840f0eed (commandos_demo registration, manifest generator entry, corpus-categories strategy row, docs/re-notes/commandos-demo.md) + 9534375f (dropdown option); run scratch/runs/20261006-commandos-demo-move (reviewed: welcome, menu, briefing, mission, portrait select, move order with footprints).

- [x] New-game lane: Age of Wonders demo (Triumph 1999, software 2D turn-based strategy)
  id: NEW-GAME-AGE-OF-WONDERS-DEMO-20261006
  status: done
  candidate: win98-games-a-d/Age Of Wonder I demo-SW.EXE (InstallShield self-extractor; local, no download)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T03:29:25.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 08-party-selected vs 10-party-moved reviewed by orchestrator; 44b311d2+f04fcc5e on main. Open: audio, FPS, browser.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: main 44b311d2 (OFT-less Borland imports bind to loaded DLLs; OBM_CHECKBOXES) + f04fcc5e (virtualAllocTop knob, age_of_wonders_demo registration, docs/re-notes/age-of-wonders-demo.md); run scratch/runs/20261006-aow-demo-move (reviewed).

- [x] GLD3D WebGL column: browser spot checks of the GL/D3D set
  id: GLD3D-WEBGL-COLUMN-20261006
  status: done
  note: 2026-10-06T20:20Z WebGL column measured in the page at the current build for every confirmed GL/D3D row (or an explicit reason): 73c86d62 + 213c1475, evidence scratch/runs/20261006T1840Z-gld3d-webgl/ and 20261006T1935Z-gld3d-webgl-recheck/. Follow-ups split out: HL-UPLINK-WEBGL-BLACK-20261006, TR3-PAGE-ENTER-20261006, D3DIM-ASYNC-PBO-WARN-20261006.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256
  created: 2026-10-06T04:07:45.000Z
  blocker: needs a browser grant (--headless-gl unavailable on this box: no @node-3d deps, no DISPLAY)
  Next: Completed October6 spot-check table73c86d62/213c1475; later TR3 route48ffb5e5 and Uplink5f4bac8c reconciled October7. Removed browser-grant blocker is historical. PBO warning and aggregate gameplay gaps remain separate tasks.
  Done: WebGL column of docs/gl-d3d-corpus-status.md measured at a current build for every confirmed GL/D3D app (or an explicit reason per row), reviewed screenshots, result.json per run.
  Evidence: docs/gl-d3d-corpus-status.md; board 2026-10-06T04:06:12 request

- [ ] New-game lane: Atlantis: The Lost Tales demo (Cryo 1997, software 3D adventure)
  id: NEW-GAME-ATLANTIS-DEMO-20261006
  status: superseded
  candidate: win98-games-a-d/ATLANTIS demo SW/ATLANTIS.EXE (unpacked; local, no download)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T04:23:28.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: None. Stale duplicate (reconciled 2026-10-06T16:40Z): Atlantis is done under claude:202b4b39 (4fa1f20b+49e250ad+1c9b1267 on main, orchestrator REVIEWED 04:46).
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/new-game-atlantis-20261006 (work), scratch/runs/<id> (reviewed captures)

- [x] New-game lane: Sid Meier's Alpha Centauri demo (Firaxis 1999, software 2D TBS)
  id: NEW-GAME-ALPHA-CENTAURI-DEMO-20261006
  status: done
  candidate: win98-games-a-d/Alpha Centauri demo-SW/smacdemo.exe (WinZip self-extractor; local, no download)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T04:43:56.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: Quick Start -> base founded -> scout moved (reviewed run scratch/runs/20261006-smac-demo-move); registration 95e04dd8 on main, no emulator change. Open: audio, FPS, browser.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: main 95e04dd8; run scratch/runs/20261006-smac-demo-move (reviewed).

- [~] New-game lane: Betrayal in Antara demo (Sierra 1997, SCI32 RPG)
  id: NEW-GAME-BETRAYAL-ANTARA-DEMO-20261006
  status: blocked
  candidate: win98-games-a-d/Betrayl-a-Antara-DEMO-SW (16-bit Sierra SETUP.EXE installs the game; local, no download)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (automatic security rejection; exited1)
  created: 2026-10-06T04:51:54.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Hold rejected crash diagnostic; no retry/rephrase. WIP preserved, remote bx_fugmje42 authoritatively stopped after expiry, full cleanup/evidence retrieval incomplete. See ops/handoffs/antara-security-hold-20261008.md. No installation/gameplay qualification.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/new-game-antara-20261006 (work), scratch/runs/<id> (reviewed captures)

- [ ] New-game lane: Comanche Gold demo (NovaLogic 1998, software voxel helicopter sim)
  id: NEW-GAME-COMANCHE-GOLD-DEMO-20261006
  status: done (d4006e932 startupClock + 089b110f8; page reaches live cockpit, collective climbs ALT 500; reviewed by orchestrator)
  candidate: win98-games-a-d/Commanche Gold-DEMO-SW.EXE (InstallShield self-extractor; local, no download)
  Progress 2026-10-10T09:45Z (claude:202b4b39): implemented, not yet run against the game. lib/startup-clock.js (piecewise-linear raw->guest map: raw*factor until end, then raw+offset; continuous, monotonic, maxMs bound) + test/test-startup-clock.js; lib/apps.js comanche_gold_demo registered (install dir c:\program files\novalogic\comanche gold demo, startupClock {factor 0.1, maxMs 30000, endOn firstTopLevelShow}) + ops/corpus-categories sports-simulation; CLI run.js wraps the batch clock's getTicks/batchTicks (and the --real-ticks wall reading) through it, --startup-clock=F[:MAX] / --no-startup-clock; page host.js maps every now-wallStartMs through _startupElapsed (inverse on unfreeze), browser-shell configureStartupClock; end event fired from lib/host-window.js show_window for a visible top-level. Build green. Worktree scratch/claude-cg-wt. Next (boat requested): check the end event really comes after the mixer patch (--count=0x401ace vs the [startup-clock] ended line), tune factor, then route to gameplay + page check.
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T05:11:49.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: PARKED 2026-10-06 06:0x by claude:202b4b39 with the ROOT CAUSE (re-notes 2232aba2): not a stack/SMC bug. The timer thread's first mix (4th 33ms tick) runs the generated mixer before exe+0x40c74c has filled its patch immediates (placeholder 0x7fff -> head ff 7f, invalid). On a Pentium main gets there first; we lose because main's pre-init work is ~2.76M blocks, half of it a CGOLD.PFF directory scan of ~95k static _stricmp calls (0x4d8650 -> 0x4e0be0). CLI with --tick-ms-per-batch=1 survives to the briefing (then the briefing's unthrottled StretchDIBits redraw makes the CLI crawl); --real-ticks / --no-uop still lose by a hair. Fix options: (a) decode-time fold for the byte-compare stricmp SELFEXIT loop (perf change, branch + benchmark); (b) per-app guest-clock dilation. Browser untried (real-time clock, expected to lose like --real-ticks). Waiting on an orchestrator decision.
  Update 2026-10-06T17:50Z (claude:202b4b39): the _stricmp fold (branch claude/crt-stricmp-fold 051a901e: exact, 18x per call, ping-pong-free) does NOT win the race -- main needs ~3x less pre-init work before T1's 4th tick (T1 dead at batch 5 vs patch at 14 with 100k slices; real-ticks survives only at time-scale <=0.5). Details + CLI mount recipe in re-notes caa0d009. Remaining fix is a design call: per-app startup clock dilation, or start the winmm timer's clock lazily. Fold branch awaits a merge decision (general CRT speedup, 513 PEs carry the loop). DECIDED 2026-10-10 (user: merge or drop; claude:202b4b39 dropped it): no measured app-level win, its one motivating case is solved by the startup clock, and merging would need a whole-app A/B + V8/SM disassembly for 578 lines. Archived as origin archive/claude-crt-stricmp-fold-20261006 (051a901e5); claude/crt-stricmp-fold deleted locally and on origin.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/new-game-comanche-20261006 (work), scratch/runs/<id> (reviewed captures)

- [ ] New game: Command & Conquer: Tiberian Sun demo (Westwood 1999) to gameplay
  id: NEW-GAME-TIBERIAN-SUN-DEMO-20261006
  worker: none (bad-transfer worker exited1 at2026-10-08T13:02:23.732Z after automatic cybersecurity rejection)
  status: blocked
  Progress 16:00 (claude:202b4b39): no API flood on today's build -- main menu by ~45000 batches (~830 API calls/batch = the menu redraw loop). New Campaign click DOES reach the game: WM_COMMAND id 0x617 = 1559 = New Campaign (menu template is LANGUAGE.DLL dialog 226). Two open bugs: (a) after it the menu panel turns into a plain grey 299x202 rectangle -- the campaign-select screen is not drawn; (b) control captions are shifted by one against ids (hwnd 0x10004 has id 1559 but GetWindowText "Exit Game"; 0x10003 = "Options" = the last item's text) -- check our CreateDialogIndirectParamA item parsing against the game's in-memory template (built at 0xc5e050). Boat-only: runs reach ~1 GB RSS.
  candidate: win98-games-a-d/CnC-TiberianSUn-ts_demo-SW.exe (44 MB self-extractor, 7-Zip readable; local, no download)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  created: 2026-10-06T08:00:13.000Z
  Next: Parent10002 DirectDraw repaint loop and registered COM shadow-CPU activation repaired, including AddRef ULONG edge correction; root11182 hashes and real owner/paint regressions passed. Ordinary campaign loading now reaches first OleRun, then owning trap atEIP00d88176/ESP00d88168 in heap frame data. Next capture first bad control-flow producer, including activation continuation integrity; do not assume an independent guest defect or redo cleared menu/COM causes. Final AddRef edge tested/build-only d8d4096 differs from actual browser ff3281; gameplay still unqualified.
  Done: Registered app reaches a mission with input visibly commanding units; reviewed evidence with candidateId = app id; scoped fixes + tests on main.
  Evidence: (pending)
  Blocker: Diagnostic preparation was rejected automatically for possible cybersecurity risk. No retry, rephrasing, or delegation of rejected operation. Existing work preserved; no new gameplay evidence.

- [x] New game: Carmageddon 2 demo (SCi / Stainless 1998) to gameplay
  id: NEW-GAME-CARMAGEDDON2-DEMO-20261006
  status: done
  candidate: win98-games-a-d/Carmageddon2Demo-D3D-Glide (InstallShield 3 media, data.z; local, no download)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8
  created: 2026-10-06T07:39:02.000Z
  Next: Done: no-input-control vs driving reviewed by orchestrator; 5e42bda1+a70ecce9+57087ffb on main. Open: carma2.exe launcher Invalid Option, browser, audio, FPS.
  Done: Registered app reaches a race with input visibly driving; reviewed evidence with candidateId = app id; scoped fixes + tests on main.
  Evidence: scratch/runs/20261006T075600Z-carmageddon2-demo-gameplay (reviewed)

- [x] New-game lane: Croc 2 demo (Fox Interactive / Argonaut 1999, software 3D platformer)
  id: NEW-GAME-CROC2-DEMO-20261006
  status: done
  reparked: 2026-10-06T16:20Z -- second look (e37aa7c6 re-notes): D3DDevice/DisplayDevice seeds select a hardware D3D record but the game stays on its software renderer (no CreateDevice); Demo Mode at ~8 presents/s with defaults; at tick 10 the picture freezes ~120k with main computing and T2 in InterlockedExchange+CS. Not a clock artifact alone. Next: what main waits on (T2 handshake).
  resumed: 2026-10-06T16:00Z by claude:d10ba697 -- testing whether the black front end after Enter is the headless 200ms/batch clock (menu idle timeout) rather than a render bug.
  candidate: win98-games-a-d/Croc2DemoSW-D3D.exe (local, no download)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: /root/coverage_audit
  prev-owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (fleet stopped)
  created: 2026-10-06T05:27:48.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Completed narrow ordinary Jungle movement/reversal/settled idle, personally reviewed by root; main20bdd9c6 registration and600be49b findings. Evidence scratch/runs/20261007-croc2-jungle-controls/result.json, 500 artifact hashes, exit0/clean closure. No FPS/audio/sustained-play claim. Refill lane with Antara source investigation.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/new-game-croc2-20261006 (work), scratch/runs/<id> (reviewed captures)

- [x] New-game lane: Descent: FreeSpace demo (Volition 1998, software/Glide space sim)
  id: NEW-GAME-FREESPACE-DEMO-20261006
  status: done
  candidate: win98-games-a-d/Descent-Freespace-sdemo10-SW-Glide.exe (WinZip SFX around an IS5 Disk1; local, no download)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T06:08:29.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 08 vs 09 (T targets instructor) reviewed by orchestrator; bc86ea02+64355808+0bf7f395 on main. Open: MS-ADPCM audio, FPS, browser.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: main bc86ea02 (acmGetVersion) + 64355808 (process-wide monotonic QPC) + 0bf7f395 (registration, docs/re-notes/freespace-demo.md); run scratch/runs/20261006-freespace-demo-target.

- [x] New-game lane: Dark Earth demo (Kalisto 1997, software 3D action-adventure)
  id: NEW-GAME-DARK-EARTH-DEMO-20261006
  status: done
  candidate: win98-games-a-d/Dark_Earth_demo-NeedMountedCD-SW (local, no download; wants its CD mounted)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T06:29:34.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: 06 bedroom vs 07 walked to hall reviewed by orchestrator; 54b72963+9f9f680d on main. Open: browser, audio, FPS.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: main 54b72963 (ValidateRgn) + 9f9f680d (registration, CD via cdAudio, docs/re-notes/dark-earth-demo.md); run scratch/runs/20261006-dark-earth-demo-walk.

- [x] New-game lane: Asghan: The Dragon Slayer demo (Silmarils 1998, software/D3D/Glide 3D action)
  id: NEW-GAME-ASGHAN-DEMO-20261006
  status: done (636ffe63 + 59c7a3dc on main; pier level, Up runs vs control)
  candidate: win98-games-a-d/Asghan-demo-SW-D3D-Glide.exe (local, no download)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-06T20:21Z from claude:d10ba697, who keeps Die Hard)
  created: 2026-10-06T06:51:25.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done(review): unpack host-side, in-emulator install+setup, VFS 16-bit handle alias (636ffe63), registration (59c7a3dc). Open: D3D/Glide exes, audio, FPS, browser.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/runs/20261006T2110Z-asghan-demo-gameplay (result.json, ctl/walk + --app PNGs); re-notes docs/re-notes/asghan-demo.md

- [x] New-game lane: Daikatana demo (Ion Storm 2000, Quake II engine, software/OpenGL)
  id: NEW-GAME-DAIKATANA-DEMO-20261006
  status: done (4cf9420e + 3d05c13a on main; in-world + input walks)
  candidate: win98-games-a-d/Daikatana-demo-OpenGL-SW.exe (local, no download)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-06T17:53Z; parked notes by claude:d10ba697)
  created: 2026-10-06T06:56:02.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done(review): DLL table 64 (physics.dll was the 33rd DLL) + registration; CLI in-world e1m1a at --tick-ms-per-batch=5, Up walks + picks up a weapon vs no-input control. Open: browser, FPS, audio.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/runs/20261006T1830Z-daikatana-demo-gameplay (result.json, ctl/walk PNGs); re-notes docs/re-notes/daikatana-demo.md

- [x] New-game lane: Drakan: Order of the Flame demo (Surreal/Psygnosis 1999, Direct3D action-adventure)
  id: NEW-GAME-DRAKAN-DEMO-20261006
  status: done
  result: 2026-10-06T16:00Z -- DONE 69f2c5e6 (main): registered drakan_demo (InstallShield 5 installed headlessly, startupRegistry Settings100, manifest via node tools/gen-win98-games-a-d-manifests.js). Registered launch -> D3D intro -> menu -> New Game -> Normal -> level 1 on Arokh; DirectInput Left yaws, Up flies forward vs a still idle control. No emulator fixes needed. Evidence scratch/runs/20261006T1600Z-drakan_demo-gameplay (reviewed). Re-notes docs/re-notes/drakan-demo.md. FPS/audio/browser not claimed.
  candidate: win98-games-a-d/DrakanOrderOfTheFlameDemoD3D (InstallShield 5 data1.cab, local, no download)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T15:30:00.173Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: idle vs up/left frames reviewed by orchestrator (riding Arokh, level 1); 69f2c5e6 on main. Open: browser, audio, FPS.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/new-game-drakan-20261006 (work), scratch/runs/<id> (reviewed captures)

- [x] New-game lane: Braveheart demo (Red Lemon/Eidos 1999, real-time tactics, software renderer)
  id: NEW-GAME-BRAVEHEART-DEMO-20261006
  status: done
  result: 2026-10-06T16:20Z -- DONE 255c9197 (main): registered braveheart_demo (bhsoft.exe; InstallShield 5 installed headlessly; winplay/winstr/dec130/edec/winsdec/mss32 as real PEs; manifest via node tools/gen-win98-games-a-d-manifests.js). Intro movies -> Mission Brief -> Take the Field -> battle. DirectInput cursor follows relmousemove, left click selects a unit (portrait/orders/health bar appear), right click moves the camera onto Wallace. At the default 200ms/batch the battle freezes in a headless clock spiral (8-frame delta window -> 180,176 fixed 16ms steps/frame); 1ms/batch converges (docs/re-notes/braveheart-demo.md). No emulator fixes needed. Evidence scratch/runs/20261006T1640Z-braveheart_demo-gameplay.
  candidate: win98-games-a-d/braveheart-demo-Glide (InstallShield 5 Disk1, local, no download)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735
  created: 2026-10-06T16:00:00.000Z
  Next: Done narrowly: 03 cursor vs 04 unit selected (portrait + orders) reviewed by orchestrator; 255c9197 on main. Open: unit move order, browser, audio, FPS, Glide renderer.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/new-game-braveheart-20261006 (work), scratch/runs/20261006T1640Z-braveheart_demo-gameplay (reviewed captures)

- [x] New-game lane: Anachronox demo (Ion Storm/Eidos 2001, Quake II-engine RPG, OpenGL only)
  id: NEW-GAME-ANACHRONOX-DEMO-20261006
  status: done
  result: 2026-10-06T16:35Z -- PARTIAL 1ff5982e (main): glColor3ub added as GL op 111 (WAT encoder + JS reference, parity-tested); anachronox_demo registered (InstallShield 6 cabinets unpacked with tools/is-cab.js into C:\AnoxDemo; manifest via node tools/gen-win98-games-a-d-manifests.js). With --gl-renderer=software: title logo, main menu (pointer-lock cursor, hover tooltips), New Universe -> Whitendon load -> opening scene with Fatima. Evidence scratch/runs/20261006T1720Z-anachronox_demo-menu-to-world (outcome partial).
  candidate: win98-games-a-d/Anachronox-Demo-SW-OpenGL (InstallShield 6, local, no download)
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (assigned by orchestrator 2026-10-06T18:51Z, fresh eyes; parked notes by claude:d10ba697)
  created: 2026-10-06T16:18:00.000Z
  Result 2026-10-06T19:40Z: not an emulator bug. Dialogue lines advance only on a mouse click with the game virtual cursor inside the dialogue box (ui.dll focus picker 0x10005e90 hit-tests it); Space/selectforward is inert in dialogue context 64; run.js mousedown:X:Y off the 320,240 recentre point threw the cursor out of the box. Route: relmousemove into the box, click at 320,240 per line -> Fatima intro, snow cinematic, John, free play; held forward walks Boots vs idle control. Notes 20e8fa1a.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/runs/20261006T1940Z-anachronox_demo-gameplay-w6 (10 reviewed captures, player-control A/B)

- [x] New-game lane: Crusaders of Might and Magic demo (3DO 1999, Direct3D action-RPG)
  id: NEW-GAME-CRUSADERS-MM-DEMO-20261006
  status: done (29fbfecb0 landed; sweep 84/84 clean; NOTE overlapped codex DLL-lifetime files, codex notified; reviewed by orchestrator)
  candidate: win98-games-a-d/CrusaderOfMightAndMagicD3D.exe (local, no download)
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (assigned by orchestrator 2026-10-10T01:35Z, Claude track RESUME)
  created: 2026-10-06T07:29:41.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: PROTOTYPE PLAYS (2026-10-10, w6): four fixed pools, not three (also 0x29040 committed at 0x05000000, 0x450fc0). As direct-window holes (prototype.patch: 4 derived regions + THREAD_CACHE pinned in a tail carved from VIRTUAL_BACKING 316->288MB + VirtualAlloc fixed-in-hole) the game reaches the level and turns/walks under input. Evidence scratch/runs/20261010T0145Z-crusaders_mm_demo-prototype-w6 (reviewed). SAFETY SWEEP DONE 2026-10-10 05:48Z: 42 apps x coop/threads, control vs prototype 84/84 ok each, 0 crash/stop/audio diffs, 2 nondeterministic threads frame diffs (scratch/runs/20261010T0155Z-crusaders-pool-sweep-w6, reviewed). Codex ownership blocker cleared: 00-regions.wat released01:47:14Z, reverified05:50Z (no current diff/claim). Await existing orchestrator technical review; app-scoped alternative costed on the board (mutable g2w-fast bound: global load in every translation + Crusaders heap/stack via slow path). Then: register app, fix test-virtual-alloc-fixed-low-reserve + test-wat-gdi-window-surface raw 0x07E10000 scratch, re-notes.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/new-game-crusaders-20261006 (work), scratch/runs/<id> (reviewed captures)
  result: LANDED 29fbfecb0 (ls-remote verified, full build green): 4 $GUEST_FIXED_POOL_* direct-window holes + THREAD_CACHE pinned at 0x1A000000 (sparse pool 316->288MB), VirtualAlloc fixed-in-hole, crusaders_mm_demo registered (desktop + role-playing), tests fixed, re-notes/CLAUDE.md/memory-map updated. Gameplay evidence scratch/runs/20261010T0145Z-crusaders_mm_demo-prototype-w6 (reviewed); safety scratch/runs/20261010T0155Z-crusaders-pool-sweep-w6 (reviewed). Follow-up: gen-win98-games-a-d-manifests entry once disk >= 2 GiB (generator's floor).

- [ ] D3D7 lighting fix 9d35dc49: check every other Device7 app it reaches
  id: D3D7-LIGHTING-IMPACT-20261006
  status: superseded
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (w6)
  created: 2026-10-06T17:15:57.113Z
  accepted-by: self-claimed follow-up of CMR2-BLACK-CAR-20261006 (CLI-only; orchestrator may reassign)
  Superseded by D3D7-LIGHTING-SWEEP-20261006 (orchestrator assignment 17:16, same scope).
  Done: affected-app list with A/B captures reviewed; regressions fixed or none found; notes + evidence on main.
  Evidence: (pending)

- [x] CMR2 demo: player car body renders solid black in a stage (D3D7)
  id: CMR2-BLACK-CAR-20261006
  status: done
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (w6)
  created: 2026-10-06T16:48:55.739Z
  accepted-by: self-claimed follow-up of NEW-GAME-COLIN-MCRAE-RALLY2-DEMO-20261006 (CLI-only; orchestrator may reassign)
  Result 2026-10-06T17:16Z: Device7 lights/material/AMBIENT were stored but never applied; FVF XYZ|NORMAL|DIFFUSE|SPECULAR was packed pre-lit with a zero diffuse dword. 9d35dc49 lights Device7 FVF draws (LIGHTING=TRUE and Device7 SetLight/SetMaterial used) + test/test-d3d7-fvf-lighting.js; 80 D3DIM/D3D7/DirectDraw unit tests pass. be1fb71c notes.
  Done: car body shades and textures in a stage capture (same route), scoped fix + test on main, reviewed evidence.
  Evidence: scratch/runs/20261006T1715Z-cmr2_demo-car-lighting-w6 (before/after at the same batches; car lit in livery, frame otherwise identical).

- [x] New-game lane: Colin McRae Rally 2.0 demo (Codemasters 2000, rally; D3D)
  id: NEW-GAME-COLIN-MCRAE-RALLY2-DEMO-20261006
  status: done (reconciled 2026-10-10 by orchestrator: on main, reviewed)
  candidate: win98-games-a-d/Colin-Mcrae-Rally2-demo-D3D (InstallShield 6: Setup.exe, ikernel.ex_, setup.inx, data1/data2.cab; local, no download)
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (w6)
  created: 2026-10-06T15:24:40.751Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c (standing "PICK another new game", 13:15)
  Progress 2026-10-06T16:31Z: 1817ff91 DirectDraw DXT1-5 decompress on Blt (all CMR2 textures were noise) + tools/is-cab.js (host-side IS6 extraction, 221 files MD5-verified; the in-emulator IS6 install needs an out-of-process ikernel COM server). c1e68466 registers cmr2_demo (localhost): language screen -> Enter -> D3D attract demos render correctly (cars solid black).
  Resolved 2026-10-06T16:50Z: the menus time out into the attract demo within ~200 batches at 200 ms/batch; with tick-ms:5 from batch 29000 the route reaches main menu -> rally hub -> Race -> Australia stage 5, and holding Up drives the car off the line (no-input arm stays on the line). 9a539d30 documents the route.
  Done: Registered app reaches gameplay with player input visibly changing it; reviewed evidence with candidateId = app id; scoped fixes + tests on main.
  Evidence: scratch/runs/20261006T1650Z-cmr2_demo-gameplay-w6 (12 reviewed captures, A/B player control); commits 1817ff91, c1e68466, 0b0ab4cf, 9c524b1e, 9a539d30.

- [x] New-game lane: Driver demo (Reflections/GT Interactive 1999, driving; D3D/Glide)
  id: NEW-GAME-DRIVER-DEMO-20261006
  status: done
  Result: 3bbc7155 (GetMessage consumes WM_QUIT, grSstControl MOVE/RESIZE TRUE, guDrawTriangleWithClip) + 131223cf (driver_demo registered: installed tree + config.dat, LOCAL_CANDIDATE, racing category, index.html, generator + test row, docs/re-notes/driver-demo.md). Reviewed on boat: 'Lose the tail!' chase; with input the car drives to the garage exit alive at 01:02, without input GAME OVER at 01:04.48. Evidence scratch/runs/20261006T1520Z-driver_demo-gameplay-w6. Not checked: browser, audio, D3D renderer.
  Blocked (14:30): needs a boat for the multi-minute software-Glide ctl route (REQUEST BOAT 14:12, ungranted); local CLI is held by claude:1863d2b5's serialized --jobs=1 sweep. Transfer pre-chunked (scratchpad drvship/, 222 x 64 KB + reg.patch); exec-chunk method works without ssh.
  Note (D3D option, side issue, 14:25): config.exe DOES add our HAL as device record 0 (--count: EnumDevices cb 0x4050ad accepts it, builder 0x4051ed adds one at 0x40524c; Glide lister 0x40108c runs after), yet the dropdown fill at 0x401825 shows only Glide -- the record is lost between 0x4098e2 and the CB_ADDSTRING loop (types at [0x942fe0+i*0x4c]: 1=D3D). Not blocking: Glide works.
  candidate: win98-games-a-d/Driver-Demo-Glide-D3D (InstallShield 5 SETUP.EXE + data1.cab; local, no download)
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (w6)
  created: 2026-10-06T13:32:50.702Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c (13:15 standing "PICK another new game")
  Next: Done: no-input static vs input drove to garage exit reviewed by orchestrator; 3bbc7155+131223cf on main. Open: browser, audio, FPS.
  Done: Registered app reaches gameplay with player input visibly changing it; reviewed evidence with candidateId = app id; scoped fixes + tests on main.
  Evidence: (pending)

- [x] New-game lane: Anno 1602 demo (Max Design/Sunflowers 1998, economic strategy, software)
  id: NEW-GAME-ANNO1602-DEMO-20261006
  status: done
  Result: 4deb0cb1 registers anno1602_demo (no emulator change needed). Reviewed headless gameplay: menu -> A New Country -> sea map; selected ship sails to a clicked point. Evidence scratch/runs/20261006T1340Z-anno1602_demo-gameplay-w6. Not checked: browser, audio, building on land.
  candidate: win98-games-a-d/Anno1602Demo-SWonly.exe (19.6 MB RAR self-extractor; local, no download)
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (w6)
  created: 2026-10-06T13:17:05.526Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c (13:15 "PICK another new game")
  Next: Done: ship selected -> sails to click reviewed by orchestrator; 4deb0cb1 on main. Open: browser, audio, FPS.
  Done: Registered app reaches gameplay with player input visibly changing it; reviewed evidence with candidateId = app id; scoped fixes + tests on main.
  Evidence: scratch/runs/20261006T1340Z-anno1602_demo-gameplay-w6

- [x] New-game lane: Descent 3 demo (Outrage/Interplay 1999, 6DOF shooter; Glide/OpenGL/D3D)
  id: NEW-GAME-DESCENT3-DEMO-20261006
  status: done
  Result: 763e5722 registers descent3_demo (soar.dll fix found by claude:d10ba697; LOCAL_CANDIDATE, shooters category, index.html, generator + test row, docs/re-notes/descent3-demo.md). Reviewed in-flight gameplay on boat bx_mgr87fj2: TELcom briefing -> POWER -> cockpit; Left yaws, Ctrl fires (energy 100->099). Evidence scratch/runs/20261006T1320Z-descent3_demo-gameplay-w6. Not checked: browser, audio, Glide/D3D.
  candidate: win98-games-a-d/Descent3demo10-OpenGL-D3D-Glide.exe (local, no download)
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (w6; taken over from claude:d10ba697 who paused it 10:47)
  created: 2026-10-06T08:08:00.000Z
  accepted-by: claude:80aa9e95-435b-4acb-aeea-8ae3d860613c
  Next: Done: in-flight yaw + laser fire reviewed by orchestrator; 763e5722 on main. Open: browser, audio, FPS.
  Done: Working registered launch, ordinary player input visibly changes actual gameplay, reviewed gameplay screenshot with run/source identity, scoped fixes + tests on main. FPS, audio and browser separate.
  Evidence: scratch/new-game-descent3-20261006 (work), scratch/runs/<id> (reviewed captures)

- [x] URGENT regression: Deus Ex demo dies at browser startup on built-in MSVCRT stubs (own msvcrt.dll not loaded)
  id: DEUSEX-WEB-MSVCRT-REGRESSION-20261006
  status: done (not a regression: served scratch tree lacked dlls)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-06T17:10Z; author of the lazy-file commits b94d2862/5c781a27/d8a7a548)
  created: 2026-10-06T17:10:00.000Z
  Next: Reported by claude:1863d2b5 17:08Z. On current main, profile-web-frames --app=deus_ex_demo --query='?no-threads&perf' dies with 'unimplemented: wcschr' (EIP 0x10bed9c0, core.dll), then '_vsnwprintf' -- calls fall through to our MSVCRT thunks instead of the game's own System\msvcrt.dll. Same route reached Training at 12:15Z. Log: 'File policy: lazy; 5 eager, 88 on demand ... Loading 14 DLL(s)'. Suspects since 12:15: 5c781a27 (eager __bundle), d8a7a548, b94d2862. First check ?eager-files; bisect in the browser only if needed. Log: scratch/runs/20261006T1710Z-deusex-d3d-readback/run.log.
  Done: Deus Ex demo boots to its menu in the browser in both ?no-threads and Threads modes on main, with its own msvcrt.dll loaded; a test that fails on the regression; commit on main; user build refreshed.
  Evidence: board 2026-10-06T17:08:42Z (claude:1863d2b5)

- [x] D3D7 lighting change: check every Device7 app still draws right (and which now shade)
  id: D3D7-LIGHTING-SWEEP-20261006
  status: done
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (assigned by orchestrator 2026-10-06T17:17Z)
  created: 2026-10-06T17:17:00.000Z
  Result 2026-10-06T17:55Z: census --iid=7 (387c3d56) -> 13 Device7-capable apps. Only cmr2_demo reaches the new path. zuma_deluxe draws XYZRHW only (pre vs post byte-identical); Deus Ex/UT348 D3DDrv never call Device7 lighting slots; the other 9 issue no Device7 draws in a 45s boot. No regression.
  Done: table of Device7 apps x before/after frame verdict in scratch/runs/<id>/result.json; any regression fixed on main.
  Evidence: scratch/runs/20261006T1755Z-d3d7-lighting-sweep-w6

- [x] A DLL fetch that 404s in the browser must fail loudly, not silently fall back to built-in stubs
  id: DLL-404-LOUD-20261006
  status: done (2b91452e + f5a4cecf on main)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-06T17:17Z)
  created: 2026-10-06T17:17:00.000Z
  Next: resolveDllGraph drops a 404'd DLL with console.error only, so a missing msvcrt.dll looked like an emulator regression (DEUSEX-WEB-MSVCRT-REGRESSION, 17:08-17:15Z). Make a missing app-declared DLL a visible launch error (and a run.js error) naming the file and URL; keep genuinely optional DLLs optional.
  Done: unit/browser test that a missing declared DLL produces the named error; commit on main.
  Evidence: commits 2b91452e (import-walk DLL named in page log) + f5a4cecf (declared DLL fails the launch: page ERROR + run.js exit 1); test/test-shell-execute-launch.js; board 17:17Z/17:2xZ (claude:202b4b39)

- [x] MSVC CRT _stricmp fold: native disasm + app-level A/B before merge
  id: CRT-STRICMP-FOLD-MERGE-20261006
  status: done (not merged: neutral with uop tier on) (measured; recommendation: do not merge)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-06T17:40Z)
  created: 2026-10-06T17:40:00.000Z
  Next: Branch claude/crt-stricmp-fold 051a901e. Comanche Gold pre-init on boat bx_xzdx4xhj, identical guest work, 9 alternating reps: uop ON (default) neutral (0.238 vs 0.226 s median, paired +0.003 s), uop OFF -18%. $next identical vs control in Ion and TurboFan. Orchestrator decides merge.
  Done: native disasm V8+SM vs control, one fixed-work app A/B on a boat, numbers + hashes posted.
  Evidence: scratch/runs/20261006T1800Z-crt-stricmp-fold-ab (result.json, boat-ab.txt, disasm listings); board 2026-10-06T17:46Z

- [x] test/test-local-proprietary-demo-dropdown.js fails on origin/main (expects '-windowed' arg, gets undefined)
  id: TEST-DEMO-DROPDOWN-WINDOWED-20261006
  status: done
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (assigned by orchestrator 2026-10-06T18:18Z)
  created: 2026-10-06T18:18:00.000Z
  Next: Pre-existing failure reported by w6 18:16Z. Find which registry change dropped the '-windowed' arg (lib/apps.js history) and decide whether the test or the registry is right; fix it.
  Done: the test passes on main for the right reason; commit.
  Evidence: 5dcb1fd0 (test now asserts fullscreen iniSet + 14 DLLs, per 4f4eeb22; passes on main; test-only change, build passes)

- [x] Daikatana demo in the browser: launch, gameplay, audio, FPS
  id: DAIKATANA-WEB-20261006
  status: done (page gameplay + audio + FPS measured on boat bx_a2achcw6)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-06T18:27Z)
  created: 2026-10-06T18:27:00.000Z
  Next: CLI reaches e1m1a gameplay (3d05c13a, 4cf9420e). Check the shipping page (user build at ~/wine-assembly-web serves it): launch from the desktop icon, reach e1m1a, walk, confirm audio, note PRESENT/s and game FPS. Browser on a boat preferred; local only on grant and MemAvailable >= 1.2 GB.
  Done: page gameplay screenshot + FPS + audio verdict in scratch/runs/<id>/result.json (candidateId daikatana_demo); any page-only bug fixed on main.
  Evidence: scratch/runs/20261006T1910Z-daikatana-demo-web (result.json; menu, loading, before/after walk, headful); board 2026-10-06T19:13Z (claude:202b4b39)

- [x] test/test-renderer-mouse-drag-mask.js fails on main ('queued delayed click should deliver WM_LBUTTONUP second')
  id: TEST-MOUSE-DRAG-MASK-STALE-20261006
  status: done (reconciled 2026-10-10 by orchestrator: on main, reviewed)
  note: 2026-10-06T18:29Z fixed in f36ac09f by claude:1863d2b5.
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (assigned by orchestrator 2026-10-06T18:28Z; next after the bricks browser check)
  created: 2026-10-06T18:28:00.000Z
  Next: Reported by 1863d2b5 18:26Z: stale since 37ff2f8d's release hold (Dredmor Next click). Decide whether the test's expectation or the hold is right now that 291be497 moved the hold onto the guest clock; fix whichever is wrong without regressing Dredmor or bricks.
  Done: the test passes on main for the right reason; Dredmor Next and bricks drag still work; commit.
  Evidence: board 2026-10-06T18:26:23Z (claude:1863d2b5)

- [x] New-game lane: Die Hard: Nakatomi Plaza demo (Piranha/Fox 2002, LithTech, Direct3D)
  id: NEW-GAME-DIEHARD-NAKATOMI-DEMO-20261006
  status: done (dcbc6080a in-level control; CLI+web reviewed by orchestrator 2026-10-10)
  reclaimed: 2026-10-07T07:42:56.312Z
  Result: 2026-10-10T02:30Z current-main confirmation -- dcbc6080a (wasm 527004d9) CLI menu -> New Game -> Easy -> loading -> intro -> in-level control; Up/W walks to the elevator cage, mouse turns the view, HUD live. Run scratch/runs/20261010T0230Z-diehard_nakatomi_demo-gameplay (result.json reviewed). Re-notes bd2b5caf. Black-menu fixes: 611837ab (16-bit image surfaces) + 8cbd797c (Codex, 1555 texture admission); level load: Codex ThreadManager zero-timeout fix. Not qualified: FPS, audio, browser route.
  Next: Narrow ordinary player-control qualified and root accepted2026-10-07. No further gameplay retry required; FPS/audio/sustained-level remain separate coverage obligations. Refill lane Arx Fatalis source preparation.
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T01:35Z, Claude track RESUME)
  worker: /root/restore_evidence
  created: 2026-10-06T18:40:00.000Z
  candidate: test/binaries/win98-games-a-d/Diehard nacatomi demoD3D.exe (local, no download)
  Earlier: 2026-10-06T20:00Z -- installs headless (03e2f5f3 LoadLibrary system path); boots past every emulator blocker so far: 33e4ff16 (_EH_prolog EBP), b15fa588 (__p___argv/argc), 0dbe4ab6 (D3D8 16-bit mode + back-buffer view, Reset, CopyRects, A1R5G5B5/X1R5G5B5 textures; A/B on other D3D8 apps clean). lithtech.exe initializes D3D8 at 640x480x16, presents, and is on its loading screen decompressing rez data at 1.8M batches (~7 min). Notes 16191cf9 docs/re-notes/diehard-nakatomi-demo.md. Waiting on orchestrator: long local run vs boat. Then registration (apps.js + corpus-categories + manifest) and gameplay input.
  Done: registered app, reviewed gameplay screenshot with input evidence, result.json (candidateId = app id), commit on main, manifest generator command posted.
  Evidence: main236e8be9 thread-zero-poll fix; localregistration mainfea60cb9; scratch/runs/20261007-diehard-nakatomi-player-control (34hashes, four reviewed gameplay images); docs0be37005 pending root publication.

- [x] Phone sweep: which desktop games draw only part of their screen at phone size (Snood class)
  id: PHONE-PARTIAL-BOARD-SWEEP-20261006
  status: done (c89244a6 on main; 3 apps fixed, 37 clean)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-06T19:15Z)
  created: 2026-10-06T19:15:00.000Z
  Next: 97aae839 fixed Snood: it sized its back buffer from the small startup phone desktop (400x711 / 667x375), so everything past it stayed black. Run tools/mobile-app-sweep.js (portrait + landscape) over DESKTOP_APPS on a boat browser, look for black right/bottom regions or windows larger than the screen, and apply the same registry fix (singleAppMinDesktop / singleAppMaximize:false) or a general one if many need it.
  Done: contact sheets reviewed, list of affected apps with verdicts in scratch/runs/<id>/result.json, fixes on main.
  Evidence: scratch/runs/20261006T2010Z-phone-partial-board-sweep (result.json, contact sheets, before/after); board 2026-10-06T20:1xZ

- [x] Anachronox demo in the browser: real mouse advances dialogue, free play, audio, FPS
  id: ANACHRONOX-WEB-20261006
  status: done (reconciled 2026-10-10 by orchestrator: on main, reviewed)
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (assigned by orchestrator 2026-10-06T19:43Z)
  created: 2026-10-06T19:43:00.000Z
  Result 2026-10-06T20:32Z: page works on WebGL after d00f2623 (unpack-aligned texture uploads; was a black page) + 168a5ede (relativeMouse; cursor was pinned). Ordinary page click advances the dialogue; free play reached; held Up walks Boots; headless PRESENT ~22/s; menu audio running with nonzero RMS.
  Done: page screenshots through the opening into free play + audio/FPS verdict in scratch/runs/<id>/result.json (candidateId anachronox_demo); any page-only input bug fixed on main.
  Evidence: scratch/runs/20261006T2030Z-anachronox_demo-web-w6

- [x] Tomb Raider III demo never leaves its title screen in the page (Enter reaches the guest)
  id: TR3-WEB-TITLE-INPUT-20261006
  status: done (not a bug: route timing; re-notes 48ffb5e5) (route timing, no code bug; page reaches Jungle, re-notes 48ffb5e5)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-06T20:08Z; found by claude:1863d2b5 in 73c86d62's WebGL pass)
  created: 2026-10-06T20:08:00.000Z
  Next: Complete: main48ffb5e5 documents actual page title/passport/Jungle route and ordinary movement. Root reviewed retained e-before/e-after October7; no new run or FPS claim.
  Done: page route title -> Jungle gameplay with movement, screenshots in scratch/runs/<id>/result.json (candidateId = TR3 app id), fix + test on main.
  Evidence: scratch/runs/20261006T2030Z-tr3-web-title-input (result.json, title/passport/jungle/before/after walk)

- [x] WinRAR SFX dialog: a click on Extract routes to the dialog, not the child button
  id: SFX-DIALOG-BUTTON-HITTEST-20261006
  status: done (not a bug: budget; re-notes abb9745e) (not a bug: click works, extraction needs ~310k batches; re-notes abb9745e)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-06T20:44Z)
  created: 2026-10-06T20:22:00.000Z
  Next: Asghan demo's WinRAR SFX (test/binaries/win98-games-a-d/Asghan-demo-SW-D3D-Glide.exe): held click at (241,270) on Extract logs '[input-route] down candidates: 0x10002 dlg' -- the child button is not hit-tested, so in-emulator extraction cannot be driven. Repro command in docs/re-notes/asghan-demo.md and board 2026-10-06T20:19:42Z (claude:d10ba697). Real installers must work in the emulator (host-side unrar is only a workaround).
  Done: the click reaches the Extract button, SFX extracts in the emulator; unit test for the hit-test case; commit on main.
  Evidence: scratch/runs/20261006T2055Z-sfx-extract-click (result.json)

- [x] USER ASK: audit of default mouse/controls mode per game and how we autodetect it (ASCII table tl;dr)
  id: MOUSE-MODE-AUDIT-20261006
  status: done
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (assigned by orchestrator 2026-10-06T20:33Z)
  created: 2026-10-06T20:33:00.000Z
  Result 2026-10-06T20:52Z: 241286a9 -- docs/mouse-model-audit.md (tl;dr + table + autodetect proposal), tools/mouse-model-census.js (270 apps), Blood II relativeMouse+trackpad with in-level mouse-look A/B. Follow-ups in the doc: MOUSE-AUTODETECT (latch from exclusive DI mouse / SetCursorPos recentring), MOUSE-DYNAMIC-CENSUS (boat), MOUSE-FLAG-FPS (descent3, drakan, daikatana, avp x2, die_by_the_sword, freespace, mw3, hype).
  Done: ASCII table (game | mouse model | evidence | current default | should be | autodetect signal) + short tl;dr in docs/ and scratch/runs/<id>/result.json; Blood II playable with mouse capture by default; follow-up rows for the rest.
  Evidence: scratch/runs/20261006T2050Z-mouse-model-audit-w6

- [x] USER ASK: autodetect captured-mouse games at runtime (DI exclusive mouse / SetCursorPos recentring latch)
  id: MOUSE-AUTODETECT-20261006
  status: done
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (assigned by orchestrator 2026-10-06T20:52Z)
  created: 2026-10-06T20:52:00.000Z
  Result 2026-10-06T21:0xZ: 7df6dad6 -- apps without relativeMouse follow the guest during exclusive presentation: SetCursorPos recentring loop (3 warps to one point within 500 ms, armed 2 s) or a DirectInput mouse acquired DISCL_EXCLUSIVE (WAT get_mouse_capture_hint over the shared DX table, polled <=250 ms). Registry true/false stay overrides; browser-shell keeps absent as undefined. test-relative-mouse-autodetect.js (JS + compiled WAT through real Acquire/Unacquire). Not yet: a real-browser check, and Threads mode only has the recentring signal.
  Done: unit tests for both signals and the clear path; captured games (Quake II, Blood II, Unreal/UT, Anachronox, Descent 3, Drakan, AvP) capture without a flag and absolute games (Diablo, StarCraft, Moorhuhn, cards, Solitaire drag) stay absolute -- verified by CLI A/B and a page check on a boat; commit on main.
  Evidence: commit 7df6dad6 + test/test-relative-mouse-autodetect.js

- [x] test/test-opengl-command-stream.js failed on main (glBatch protocol gained softwareFront; stale test fixed 9f2f56fd)
  id: OPENGL-COMMAND-STREAM-TEST-20261006
  status: done (reconciled 2026-10-10: 9f2f56fd on main)
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (w6; assigned by orchestrator 2026-10-06T20:3xZ as the follow-up after ANACHRONOX-WEB)
  created: 2026-10-06T20:49:27.793Z
  Next: queued behind MOUSE-AUTODETECT (orchestrator 20:5x). Repro: gpu_gl_call at test line 409 -> guest-rpc waitForResponse "host import glBatch threw on the main thread"; fails on origin/main independent of d00f2623.
  Done: test passes on main; root cause stated; commit pushed.
  Evidence: (pending)
result: 9f2f56fd — stale test, not a code bug. 55bd4b1c added softwareFront/softwareConfig to the glBatch message and broker batch; the test's two-field deepStrictEqual threw inside gpu_gl_batch. Expectations updated; test passes, build passes.
  browser-verified: 2026-10-06T21:15Z boat bx_nf2k92qm headful Chrome, descent3_demo (relativeMouse unset): recentring latch armed (2153 warps), wantsRelativeMouse auto=true, click took Pointer Lock (#screen), locked moves steer the game cursor relatively. Evidence scratch/runs/20261006T2115Z-descent3_demo-mouse-autodetect-w6.



- [x] USER REPORT: Drakan demo crashes in the browser (Threads on): 'render endpoint is closed' + fs_read_file_result threw in notifyGuestWrite
  id: DRAKAN-WEB-THREADS-LAZY-CRASH-20261006
  status: done
  reclaimed: 2026-10-07T07:42:56.312Z
  note: 2026-10-06T21:25Z d3ec2640: invalidate_code_range runs with d3dim_lazy_bypass -- the page shadow no longer traps materializing a lazy D3DIM surface after a Worker ReadFile; Drakan reaches its main menu in the page with Threads on (scratch/runs/20261006T2120Z-drakan-threads-lazy). Next: fence the destination of host writes (ReadFile etc.) in the guest BEFORE the host writes so a later readback cannot overwrite file bytes read into an armed surface; regression test for that; Threads-off page check. Also: headless probe clicks/Enter do not dismiss the beta MessageBox in guest-Worker mode (renderer handleMouseDown via evalfile does) -- probe issue, pre-existing.
  note: 2026-10-06T21:00Z claude:1863d2b5 taking it.
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: /root/corpus_categories
  created: 2026-10-06T20:57:00.000Z
  Next: Completed October7: owner-side host-write fence maina1710870, actual-WASM/VFS negative control and candidate + Worker regression/full gates PASS; actual browser level personally reviewed with Threads on and off, clean process/server closure. Acceptance doc/hashes integrated mainea63ceed; ops/handoffs/drakan-threads-acceptance-20261007.json. No new movement, FPS, sound quality or PBO-warning-resolution claim.
  Done: Drakan reaches its level in the page with Threads on and off; regression test for the lazy read completion in Worker mode; commit on main.
  Evidence: user Telegram 2026-10-06T20:5xZ (log pasted in the orchestrator session)

- [x] PERF (user-approved): MMX predecoded island -- register bindings and forwarding decided once at decode time
  id: MMX-PREDECODED-ISLAND-20261006
  status: done (EMMS uop lowering merged 1de11330f: Collapse particles -30.2% user CPU, others neutral, PNG/API identical; --uop-mmx-fwd not merged, inside null band; reviewed by orchestrator)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-10T01:35Z, Claude track RESUME)
  created: 2026-10-06T20:57:00.000Z
  Result (2026-10-10T02:05Z): boat A/B done, evidence scratch/runs/20261010T0200Z-mmx-emms-fwd-ab. MERGED 1de11330f: uop-tier EMMS lowering (op 86) -- Collapse's particle loop had never entered the uop tier (emms declined the head); particles 7.746 -> 5.408 s user CPU (-30.2%, main's spread 13%), normal board and Unreal flyby neutral, PNG/API identical in all 72 runs. NOT merged: --uop-mmx-fwd (branch claude/mmx-predecoded-fwd b497683b) -- on top of EMMS, Collapse -2.2% and Unreal -4.7%, both inside the null band; Ion keeps $q on the stack and spills pc per MMX arm (V8 keeps it in r9). Notes 432a4ad3d (docs/re-notes/reflexive.md).
  Next: (parked at wind-down 2026-10-06T21:16Z) Step 1 DONE: a8a243fb on main (reflexive.md Collapse/MMX-island notes). Step 2 WIP on branch claude/mmx-predecoded-fwd 2bea3821 (pushed, NOT merged): off-by-default --uop-mmx-fwd -- 07e $uc_mmx_fwd decides at encode time which MXOP/MXSHI/MXTO32 operands come from 07d's $q (ops 86-90), dead stores -> cell 9, mm,mem -> fused MXOPM (91); plus EMMS lowered (op 92), without which Collapse's particle loop (0x4287b0, ends in emms) never enters the uop tier at all (boat smoke: only 9 forwarded operands route-wide). test-uop-compiler passes all MMX cases +F, incl. blend and a page-straddling MXOPM. Remaining: (1) boat A/B, 3 arms -- B=main a8a243fb, O=branch flag off (EMMS coverage alone), F=branch --uop-mmx-fwd -- Collapse route (see reflexive.md: --app=collapse_crunch --no-threads --screen=1000x750 --tick-ms-per-batch=1 --batch-size=20000 --max-batches=36057 clicks 6000..15000, --cpu-window=20000:25000,35000:36056) and Unreal flyby (--app=unreal_special_demo --branch-clock --wall-clock-ms=1790673326000, window 900..1200); B O F F O B x2, PNG md5 + API-count parity; (2) V8+SM native diff of $uop_fast (base/fwd captures in claude:202b4b39 scratchpad mmxnative/, not yet read; Ion 10111->10679 B, TurboFan 11328->11584 B); (3) merge only with a win beyond the null band. Boat setup notes: fork lacks test/binaries + dlls + node_modules (npm ci works there); fixtures tgz 129 MB ships in <1 min via pship.
  Was: Step 1: merge the MMX section of docs/re-notes/reflexive.md from commit fe92af9a (branch origin/checkpoint/local-before-box-sync-20261005, ~lines 780-980; main lacks it) into main's reflexive.md (docs commit on main). Step 2: on a perf branch, prototype an MMX island whose register bindings and forwarding are decided once at decode time (not per op). Target: Collapse! Crunch particle scene (the only route with a whole-game gain, ~4%); regression check: Unreal flyby (regressed 9.2% with the runtime-cache island). Identical PNG/API parity required. Native disassembly V8+SpiderMonkey per CLAUDE.md. Benchmark ONLY on a separate box (boat), never this one.
  Done: branch with numbers vs control on Collapse particles and Unreal flyby (fixed work, user CPU, alternating reps, null band), disasm notes; merge only with a whole-game win beyond the null band.
  Evidence: laptop agent request (user-approved) 2026-10-06T20:5xZ

- [x] Regression: test-vlan-tetrinet and test-vlan-match fail on main (client never connects)
  id: VLAN-TETRINET-MATCH-REGRESSION-20261006
  status: done (ed72bc2f; tetrinet 3/3, match 3/3 on boat; reviewed by orchestrator)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; assigned by orchestrator 2026-10-06T19:45Z, row filed 21:03Z)
  created: 2026-10-06T21:03:00.000Z
  Next: Found by w4 on boat bx_5hy6jxcq (19:42Z): both fail on plain main (tetrinet 'timed out waiting for the client to connect'; match 'server exited before ... accept'); the client never connects, suspect keyboard-owner routing ec3b56bd/9fd56fd0 (2026-10-03) since both clients type the address. git bisect 27c290df (good) .. main running on boat bx_sxkhvrkr.
  Done: first bad commit named, fix + both tests passing on main, TetriNET and Liquid War two-process play re-checked.
  Evidence: board 2026-10-06T19:42Z, 19:52Z (w4)

- [x] test/test-active-window.js fails on main ('even an eaten down retains its queued release')
  id: TEST-ACTIVE-WINDOW-EATEN-DOWN-20261006
  status: done
  owner: claude:d44753dd (w6)
  created: 2026-10-06T21:01:00.000Z
  Next: Reported by claude:1863d2b5 (21:00Z): fails at HEAD with and without 5f4bac8c. Likely the same release-hold family as f36ac09f/291be497 (input hold on the guest clock). Decide whether the expectation or the code is stale; fix without regressing Dredmor Next, bricks drag or Uplink New Game.
  Done: test passes on main for the right reason; commit.
  Evidence: board 2026-10-06T20:59:06Z
  result: 4a628474 — stale test. 37ff2f8d's release hold (wait for an empty poll + 30 ms) was never modelled; it failed for every MA_* answer, not just eaten ones. Test now makes the empty poll and steps renderer._inputNowMs 30 ms (as f36ac09f). No renderer code changed, so Dredmor/bricks/Uplink unaffected. test-active-window, button-hold (19/19), drag-mask PASS; build PASS.

- [~] Run DOSBox-packaged games directly in ToyVM for the dedicated DOS production route
  id: TOYVM-DOS-NATIVE-GAMEPLAY-20261007
  status: active
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: /root
  created: 2026-10-07T09:08:16.475Z
  requested-by: user via Telegram, dedicated DOS VM preferred over DOSBox inside Win98
  Next: Reviewed CALL gate/RETF and hidden segment cache repair integrated4f1e083b/fcd391dd, fallback tests/bundlesc2cded63.36 targeted cases,16 real/VM86 cases, four existingCPU suites, full backend-install and bundle checks PASS;92 integrated source pins match tested tree. Recheck original Daggerfall extender next with bounded correctness run; paging/earlier invalid stack remain unresolved, ArenaCD/U4world still open. No native gameplay qualification.
  Done: Every DOSBox-packaged corpus title has a direct dedicated-DOS/ToyVM launch route with ordinary player-controlled gameplay, reviewed native screenshot and source/run identity, sound/input/save validation and honest FPS evidence or explicit remaining per-title blockers. Implement compatibility gaps rather than substituting DOSBox wrapper evidence. Main dashboard clearly distinguishes native and Win98+DOSBox results, routes to the native player when supported, and exposes required/lazy loading and actionable errors. Scoped fixes/tests integrated to main; no public deployment.
  Evidence: test/toyvm-dos-corpus/manifest.json; test/toyvm-dos-corpus/titles.json; ops/dos-corpus.json; tools/toyvm-dos-corpus.js; user instruction2026-10-07. Daggerfall/Arena DOSBox gameplay does not establish native compatibility.

- [ ] New-game lane: Arx Fatalis demo (original local MSI/CAB media)
  id: NEW-GAME-ARX-FATALIS-DEMO-20261007
  status: blocked
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none; arx-fault exited1
  candidate: test/binaries/win98-games-a-d/Arx_Fatalis-demo-D3D-Glide
  Next: Automated possible-cybersecurity-risk rejection stopped diagnostic; no retry/rephrase. Root cleaned remote and preserved scratch/runs/20261007-arx-diagnostic-interrupted. Prior introAV unresolved; Darkstone refills lane.
  Done: Original asset closure registered locally, ordinary reviewed player scene and control evidence, scoped tested fixes integrated on main; no FPS claim without separate measurement.
  Evidence: scratch/wt-diehard-20261007/scratch/refill-after-diehard/shortlist.json; original ARX.exe SHAebd3e2b3; no currentmain registration or historical qualified run found.

- [x] Additional game lane: Carmageddon TDR2000 demo
  id: NEW-GAME-TDR2000-DEMO-20261007
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: fresh CLI tdr (scratch/fresh-workers-20261007)
  candidate: test/binaries/win98-games-a-d/Carmageddon TDR2000 demo-D3D
  requested-by: user Telegram two more games in parallel, 2026-10-07
  Next: Completed mainb7cdb5fd: durable local-only registry/manifest, exact2963rows (148required/2815lazy), focused tests and fail-closed diskguard. Ordinary actualrace forward/reverse/brake screenshots reviewed; evidence1124777f, sentTelegram851/852. FPS/audio unmeasured; no public deployment.
  Done: Faithful registered launch, ordinary player-controlled gameplay, reviewed screenshot with source/run identity and scoped tested changes on main; audio/FPS claims require separate evidence.

- [~] Additional game lane: Comanche 3 demo
  id: NEW-GAME-COMANCHE3-DEMO-20261007
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (comanche-catalog exited0; root integration review passed)
  candidate: test/binaries/win98-games-a-d/Commanche3-demo-SW
  requested-by: user Telegram two more games in parallel, 2026-10-07
  depends-on: TOYVM-386-PAGING-20261007
  Next: Complete scoped original controlled flight plus normal registered ToyVM dashboard launch. Root verified245 flight and21 startup artifact hashes, reviewed startup image, and passed29 ops/launcher plus22 generator cases. Eleven originals remain gitignored; no private route required. No public deployment or current live8098 claim; FPS/audio/combat/mission completion remain unqualified.
  Done: Faithful registered launch, ordinary player-controlled gameplay, reviewed screenshot with source/run identity and scoped tested changes on main; audio/FPS claims require separate evidence.

- [ ] Quake II WebGL ordinary world movement validation
  id: GLD3D-QUAKE2-TRAVERSAL-20261007
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (fresh q2-gl-validation completed)
  Next: Completed main2534731b3: fb1be916 ordinary Game/Easy/W/S/idle worldtranslation personally reviewed byroot. Sixscreens/38artifacts contained and present; Telegramphotos860/861 sent. Actualbrowser/driver cleanclosure,16ancillaryVLANAPIrefusals retained; FPS/audio/network unqualified.
  Done: Current source/host/run identity, reviewed actual gameplay and input movement, scoped corpus table update on main; FPS/audio separate.

- [x] Implement generic 386 paging for original DOS extenders
  id: TOYVM-386-PAGING-20261007
  handoff: ops/handoffs/toyvm-paging-implementation-20261007.md
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (fresh toyvm-paging-integrate completed)
  Next: Complete main72e306790 with foundation4b0955e79. All47 correctness groups passed; root verified1495 artifacts and integrated source pins. Original authenticated16KiB copy maps correctly and preservesIVT, progresses Loading Install for75s without CPU faults; installation/gameplay remain separate.
  Evidence: docs/re-notes/comanche3-later-execution-20261007.md; scratch/runs/20261007-comanche3-paging-diagnostic/evidence-index.json; source emit.js dropsCR3 and maskslinear24bits.
  Done: Generic paging correctness reviewed with fault semantics and original Comanche startup progressing beyond paged copy; no gameplay claim without ordinary control evidence.

- [~] Diagnose original Winamp MilkDrop exception and validate visualization
  id: GLD3D-WINAMP-EXCEPTION-20261007
  status: blocked
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (worker exited1 after automated rejection)
  Next: HELD: automated cybersecurity-risk rejection terminated Winamp diagnostic worker at23:52:06. No retry/rephrasing/delegation of rejected diagnostic. Root recovered14 existing outputs and verified driver/browser exited; no exception cause or visualization qualification.
  Done: Demonstrated generic cause repaired with regression and ordinary original visualization reviewed; FPS/audio separate.
  Evidence: scratch/runs/20261007-winamp-milkdrop-complete-closure; ops/handoffs/winamp-milkdrop-ordinary-20261007.md

- [x] Validate original Quake II OpenGL workload on emulator software backend
  id: GLD3D-QUAKE2-SOFTWARE-20261007
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (q2-software exited0)
  Next: Done scoped software forward/reverse/idle gameplay, reviewed original ref_gl and owning renderer software proof; main069662726. Exact reference096889e/fb1be916, not current-main build validation. FPS/audio/network unqualified.
  Done: Reviewed ordinary gameplay/input evidence, exact backend/source/module/original identity, scoped GL table update on main; FPS/audio separate.
  Evidence: scratch/runs/20261008T000901Z-quake2-software-ordinary; ops/handoffs/quake2-software-ordinary-20261008.md

- [x] Validate Crimsonland Tutorial control on WebGL
  id: GLD3D-CRIMSONLAND-WEBGL-20261008
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (crimsonland-relative-input exited0)
  Next: Done scoped WebGL Tutorial movement and relative aiming; root reviewed3images and100contained hashes. Integrated6f4f74b19. Original referencef62/module4dc5; no engine patch. FPS/audio/combat/long-session qualification remain separate.
  Done: Reviewed ordinary gameplay/input with actual WebGL backend and original source/module/media identity; GL table and scoped changes on main.
  Evidence: scratch/runs/20261008T0105Z-crimsonland-relative-input; ops/handoffs/crimsonland-relative-input-20261008.md; Telegram879.

- [~] Validate Alien Shooter Mission 01 control on WebGL
  id: GLD3D-ALIEN-SHOOTER-WEBGL-20261008
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: completed; actual exit0 2026-10-08T01:26:18Z
  Next: Complete scoped WebGL Mission01 movement/aiming acceptance; root reviewed images/backend and all109 contained hashes. Findings integrated bf8d2e134; run20261008T0114Z-alien-shooter-webgl. No FPS/audio/combat-completion or current-main runtime claim.
  Done: Reviewed actual Mission01 ordinary player movement and aim on owning WebGL backend, source/module/originalmedia identities, scoped commits and GL table on main.
  Evidence: historical software scratch/runs/20261006T0612Z-alien_shooter-w4-gameplay2; reviewed WebGL scratch/runs/20261008T0114Z-alien-shooter-webgl.

- [x] Warcraft III original Prologue ordinary WebGL gameplay
  id: GLD3D-WARCRAFT3-PROLOGUE-20261008
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (exited0; coordinator review passed)
  Next: Complete scoped WebGL Prologue gameplay validation: root reviewed Thrall selection and two opposing ordinary right-click moves against fixed terrain; 675 contained artifact hashes pass. Run20261008T0156Z-warcraft3-campaign-world-runtime, referencef62/module4dc5. No FPS/audio/combat/campaign-completion claim.
  Done: Reviewed original Prologue ordinary unit selection/move evidence with exact source/backend, scoped fixes tested and pushed; FPS/audio separate.

- [x] Warcraft III original Prologue software-backend gameplay
  id: GLD3D-WARCRAFT3-SOFTWARE-20261008
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (worker exited0; root review PASS)
  Next: Complete: root reviewed software Thrall selection/two opposing moves with matching host/owning OpenGL software backend;666 contained hashes and helper negative/review contracts PASS. Integrated0d9515322; run0400 referencef62/module4dc5. FPS/audio/combat/campaigncompletion/current-main runtime remain unverified.
  Done: Reviewed software gameplay/control images and owning backend/module/source evidence, scoped fixes/tests if needed, pushed main.

- [x] Expose real held keyboard controls in ToyVM web sessions
  id: TOYVM-HELD-KEY-WEB-20261008
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (fresh toyvm-held-key-web exited0 07:08:27)
  Next: Complete on main d87b54eca. Root180 contained evidence hashes and held/released/mission-menu captures verified; actual Machine/LiveRun tests and bundle reproducibility pass. Browser initial lifecycle closure proves ordinary holds, release, repeat, blur and Stop. Final keypad/code mapping and modifier-wait corrections unit/full-build tested but not original-media browser rerun. No production deployment or Comanche cockpit/gameplay qualification.
  Evidence: tools/toyvm/dos.js pushKey; tools/toyvm/live.js key; ops/toyvm-live/live.js canvas keydown; tools/toyvm/site.js generated canvas handler; native Comanche roster response with held input.
  Done: Meaningful key press/release and focus-loss tests plus reviewed browser held-input game response; scoped source/bundles/site changes pushed to main.

- [x] New-game lane: Age of Wonders II demo
  id: NEW-GAME-AGE-OF-WONDERS2-DEMO-20261008
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none; browser41887 exited0; bx_2sdgzsm6 stopped03:11:23.355Z
  candidate: test/binaries/win98-games-a-d/Age of Wonders2 demo-SW.exe
  Next: Initial ordinary gameplay verified: select party and click destination twice, army moves and movement20->13. Generic FVF RESERVED1 fix plus control-failing/candidate-passing native tests integrated with this task update. Evidence run20261009T0306Z-age-of-wonders2-gameplay,67 hashes. Rendering overlap/FPS/audio tracked separately; no release claim.
  Evidence: Original installer SHA256 1244f0114965d011d1e28b97e207db15c902d124ebb25af8a6c97748beb73dc0. Runs20261008T1518Z-age-of-wonders2-demo-before and-after retain crash/menu evidence, original payload identities and runtime inputs. No gameplay qualification yet; held Scenario click eventual outcome unknown.
  Done: Normal registered launch, actual player-controlled gameplay, reviewed screenshot with original/source/build identity and tested changes pushed main. FPS/audio require separately valid measurements.

- [ ] New-game lane: Dungeon Siege demo
  id: NEW-GAME-DUNGEON-SIEGE-DEMO-20261008
  status: blocked
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none; browser56868 exited0, bx_f8a9afpr stopped2026-10-09T01:31:52Z
  candidate: test/binaries/win98-games-a-d/DungeonSiege-demo-D3D.exe
  Next: Await user decision on accepting demo EULA under the instruction not to answer approvals. Generic lazy RTF fix main b493bc3b9 passes; original EULA window renders, screenshot Telegram947. Evidence scratch/runs/20261009T0125Z-dungeon-siege-eula (36 hashes). No gameplay/FPS/audio qualification.
  Evidence: Local original installer 192188416 bytes, SHA256 a501306cad88c0fc41f986d92109343d68ac79fc11aaa6611724d84be628f3f8. Experimental local registration and checked CAB extraction integrated ef51b4f59; registration is not gameplay qualification.
  Done: Normal registered launch, actual player-controlled gameplay, reviewed screenshot with original/source/build identity and tested changes pushed main. FPS/audio require separately valid measurements.

- [x] Restore registered local candidates missing from the launch picker
  id: OPS-PICKER-MISSING-CANDIDATES-20261008
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Result: Added20 missing LOCAL_CANDIDATE_APPS options to the existing Local Candidates group in index.html. Dynamic picker derives its catalog from this select; existing eligibility filters remain unchanged. No public deployment or gameplay qualification.
  Validation: Existing test/test-app-selector-options.js failed before on20missing entries and passes after for all173apps across3lists, including duplicate/list-disjointness checks. No browser run required for this static option correction. Receipt scratch/picker-completeness-20261008/receipt.json.

- [x] Implement missing ANSI resource enumeration callback chain
  id: WIN32-ENUM-RESOURCE-ANSI-20261008
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: none (coordinator implemented and validated directly)
  Result: Implemented, validated and pushed main77cca122f; fresh original Dungeon Siege progressed beyond old resource trap to next missing API VerLanguageNameA. No gameplay claim.
  Evidence: ops/handoffs/resource-enumeration-ansi-20261008.md; scratch/runs/20261008T2343Z-resource-enum-ansi/result.json. Unchanged-main control fails nested callback assertion; candidate passes full hash/thunk chain, actual LANGIDs, CP1252, nested/early-stop/error/DLL contracts and ESP restoration; canonical build and thread-resource-sync pass.
  Done: Generic contract and nesting tests pass, original runtime limitation is accurately updated, reviewed changes pushed main; no silent-success stub.

- [x] Real 256-color display mode and SimCity verification
  id: SIMCITY-256-COLOR-20261009
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: coordinator direct, isolated wt-simcity-256-20261009
  Result: Real indexed desktop and palette-preserving copies verified on original SimCity2000: warning absent, demo city simulation advances, ordinary centering click changes viewport, water palette animation restored. Before: scratch/runs/20261009T0010Z-simcity-truecolor-before; after: scratch/runs/20261009T0048Z-simcity-indexed-desktop. Canonical build and indexed/palette/window regressions pass. FPS/audio not measured.
  Done: Contract regressions, browser before/after and ordinary gameplay evidence reviewed; explicit-path commit pushed main.

- [x] Implement version-resource language descriptions
  id: WIN32-VERLANGUAGE-20261009
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Result: VerLanguageNameA/W lookup, bounded copying and generated API dispatch implemented; canonical build plus language/locale/version regressions pass on temporary box.
  Evidence: scratch/runs/20261009T0105Z-version-language; ops/handoffs/version-language-20261009.md.
  Limitation: Original Dungeon Siege startup validation remains separate; no gameplay/FPS/audio qualification.

- [x] Park lazy RTF opens without losing formatting or handles
  id: VFS-LAZY-RTF-OPEN-20261009
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: coordinator direct; one-worker budget
  Result: Original Dungeon Siege now renders its EULA without the lazy-file trap. Native A/W thread/stack/retry, canonical build,45 VFS and50 lazy tests pass. Evidence scratch/runs/20261009T0122Z-lazy-rtf-open; browser proof scratch/runs/20261009T0125Z-dungeon-siege-eula (36 hashes), HTTP206 EULA bytes0-6531. Pushed main b493bc3b9. Accept untouched pending user decision.
  Scope: Thread-owned IO_WAIT for CreateFileA/W RTF expansion, preserving ordinary lazy opens and delayed loading UX. No blanket eager manifest or formatting bypass.

- [x] Keep ordinary Worker slices out of suspended send callbacks
  id: WORKER-SEND-SLICE-OWNERSHIP-20261009
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Evidence: main28a104092; run20261009T0203Z-age-of-wonders2-send-ownership. Actual boundary trace shows nested EIP0 sentinel consumed by normal slice; real Worker control regression fails, candidate12checks/timing/scheduler/build pass. Original AoWII advances to scenario setup; later Start exit remains separate work.


- [ ] New-game lane: Disciples II demo
  id: NEW-GAME-DISCIPLES2-DEMO-20261009
  status: active
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: root; native and browser movement verified, input/FPS/audio follow-up ready; all runtimes terminal
  candidate: test/binaries/win98-games-a-d/Discipless2_demo-D3D.exe
  Next: Registered native and browser gameplay verified: ordinary leader move20/20->16/20 and camera follow, reviewed run20261009T0728Z-disciples2-browser-gameplay, photo967. Registration fd5aa4a35 on main. Browser50788/50800 clean stop07:28:27Z. Menu repeat-click issue remains despite1000ms holds and both down/up reaching renderer/input log; inspect guest consumption/activation.30.10599s presentation sample2432 events/1649 uploads is80.7813/54.7732 per second, not logical FPS. Qualify gameplay counter and audio separately. No public promotion. Alice real GL implementation is next unblocked implementation lane.
  Evidence: scratch/disciples2-preflight-20261009/preflight.json
  Done: Registered normal launch, actual gameplay control, reviewed screenshot, fixes/tests pushed main.

- [ ] AoWII rendering overlap and gameplay measurement
  id: AOW2-RENDERING-COVERAGE-20261009
  status: done (9a438f1b9 + 201de22d9: D3DIM draws clip to the device viewport; browser WebGL+software verified, army move; reviewed by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; reassigned by orchestrator 2026-10-10T09:05Z, Codex reported it ready/not active 08:58Z)
  Next: REVIEW 2026-10-10T12:00Z claude:90024109. FIXED in 9a438f1b9 (notes 201de22d9): D3DIM draws now clip to the device viewport (software spans/rects + WebGL scissor via describe fields 34-38). Root cause: the game redraws only the map viewport over a persistent UI panel, and both rasterizers clipped to the whole target. Browser-verified on the boat with WebGL and Software (Threads): clean panel, army move 13/20. New test-d3dim-viewport-clip.js; the D3DIM/D3D7 suites pass. NOT done here: gameplay FPS and audio measurement (separate), and the follow-up bugs listed in the re-notes (CLI coop Start never loads the world; --screen=1024x768 drops the Start click; ?no-lazy-sync not applied at load; browser trace-api zero args in Threads).
  Evidence: scratch/runs/20261009T0306Z-age-of-wonders2-gameplay/result.json; scratch/runs/20261010T1045-aow2-overlap-ab; scratch/runs/20261010T1145-aow2-viewport-clip-fix

- [ ] New-game lane: American McGee's Alice demo
  id: NEW-GAME-ALICE-DEMO-20261009
  status: held (DLL concurrency correctness work; not counted as an active new-game lane)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: root direct; gameplay proven on held candidate, lifecycle correctness review before main
  candidate: test/binaries/win98-games-a-d/american McGees-alice_demo-OpenGL.exe
  Next: Held runtime d5a47f240 pushed codex/alice-dll-lifetime-20261009, NOT main. Full build and seven loader suites pass, including unrooted cycles, cross-cycle detach callbacks, actual Worker unload, and automatic dependency references in native/Worker routes; module862681ea, run20261009T2330Z-dll-cycle-worker-review. Concurrent two-Worker control still fails: shared PE_STAGING content and DLL table slot are overwritten; serialize staging/publication and graph mutation before integration. Then rerun original Alice and browser. Earlier native movement2151 remains separate build evidence; local candidate media missing.
  Done: Original demo launches with ordinary input, player-controlled gameplay independently reviewed, exact build/media and screenshots retained; menus do not qualify.
  Evidence: scratch/alice-preflight-20261009/preflight.json; scratch/alice-preflight-20261009/import-audit.json; scratch/alice-preflight-20261009/transfer.json; docs/re-notes/alice-demo.md


- [ ] Sizeless virtual decommit corrupts neighboring allocation
  id: VIRTUAL-DECOMMIT-NEIGHBOR-20261009
  status: ready (2026-10-11 01:47Z claude:d10ba697: fixed by w6's origin/w6/decommit-unmaps 1c286d4f1 (size-0 bounded to the record at lpAddress). test-virtual-decommit-zero: FAILS on origin/main beb684d3d, PASSES on 1c286d4f1. Close as done when w6 lands that branch; codex is out of credits)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: test-virtual-decommit-zero fails neighboring allocation page0 untouched with unchanged HEAD helpers and prefix candidate. Static cause: virtual_map_decommit_zero chooses each scanned record end when size0, so all higher allocations are zeroed. Bound once to the owning reservation before scanning; handle invalid/interior bases and split mappings with tests. Do not attribute this baseline failure to prefix patch. Native tests only on temporary boat, serialize with game lanes.
  Evidence: scratch/runs/20261009T0608Z-virtual-prefix-initial/result.json

- [x] New-game lane: Baldurs Gate II demo
  id: NEW-GAME-BALDURS-GATE2-DEMO-20261009
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  candidate: baldurs-gate2-demo
  Next: Gameplay qualification complete on main5aafa6658; current-main moduleb84324ed revalidates dialogue and floor movement. Apparent pointer mismatch was diagnostic Puppeteer.connect default viewport mutation; preserved viewport fixes mapping without runtime changes. Audio/FPS remain coverage follow-ups.
  Done: Registered working launch, ordinary player input changes visible gameplay, reviewed screenshot linked to exact run/source. No installer/menu credit or public deployment.

- [ ] User priority: Return Fire demo
  id: NEW-GAME-RETURN-FIRE-DEMO-20261009
  status: active
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  candidate: return-fire-demo
  priority: user-first
  Next: Correct windowed depth/palette and ordinary H/W gameplay verified in native run20261009T2046Z-return-fire-realized-native and browser run20261009T2050Z-return-fire-realized-browser. Build/focused display suites pass run20261009T2045Z-return-fire-realized-build. Audio output presence now observed in run20261009T2052Z-return-fire-browser-audio (99/100 non-silent windows, running44100Hz clock); recording retained, sound quality/sync and logical FPS still unverified. Registered local-only, no public deploy.
  Done: Registered launch, ordinary input visibly changes gameplay, reviewed screenshot with original source/build evidence; FPS/audio separate.

- [ ] Serialize shared DLL mapping and lifetime mutation
  id: DLL-CONCURRENT-MAPPING-20261009
  status: ready
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Shared-count072a merged and tested. Mapping-only draft preserved at scratch/cmr3-mapping-queue-20261010/held-with-sync-propagation.patch; runtime WT excludes it. Negative/positive message protocol and COM regression passed run2003Z. Held: CLI local main and nested DllMain paths bypass queue; cover every mapper and real competing-worker mapping before merge. Shared checkout also contains unmerged nested-loader code, so read own HEAD/origin/main for authoritative integration work. Staging/lifetime work remains for CMR3.
  Done: Concurrent load/free/import tests preserve exact images and module ownership, callback execution stays live without deadlock, normal Alice gameplay/browser revalidated.

- [x] New-game lane: Aliens versus Predator 2 single-player demo
  id: NEW-GAME-AVP2-DEMO-20261010
  status: done (launch and ordinary gameplay control; rendering follow-up remains)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: root direct, serialized after BG2 evidence collection
  candidate: test/binaries/win98-games-a-d/alien vs predator 2-sp demo-D3D.exe
  Next: Completed narrow launch/control requirement: paired original Marine mission idle/W replay, pre-input identical and156225/307200 changed pixels after input. Reviewed run20261010T0344Z-avp2-main-paired-input. Runtime020a96ced integrated main b600f22f8; findings1b2b97735 integrated/pushed5e31fc626, remote verified. Severe stored-texture corruption tracked separately; no release/audio/FPS claim. Pipeline refilled with Dungeon Lords and Age of Empires III.
  Done: Original demo launch, ordinary player input visibly changes gameplay, reviewed screenshot with exact source/build/run evidence.

- [x] Die Hard: Nakatomi Plaza demo in the browser: launch, gameplay, audio, FPS
  id: DIEHARD-WEB-20261010
  status: done (boat headful page: menu->level, walk, pointer-lock mouse-look, fire; audio plays; PRESENT/s 12-18 on CPU-only boat; reviewed by orchestrator)
  Result: 2026-10-10T03:15Z boat headful Chrome 151, WebGL, a9596c00a: page menu -> New Game -> Easy -> level; W walks, in-level click takes pointer lock (fires MP5), mouse turns both ways. Audio running 22050 Hz, 2295/2668 non-silent samples. In-level PRESENT/s 12-18 (2 Presents/scene, logical ~half), WinePerf guestFps 15.9/18.2 per session. No page-only bug. Run scratch/runs/20261010T0315Z-diehard_nakatomi_demo-web.
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T02:36Z)
  created: 2026-10-10T02:36:00.000Z
  Next: CLI reaches in-level control (bd2b5caf, scratch/runs/20261010T0230Z-diehard_nakatomi_demo-gameplay). Check the page (D3D8 16-bit view, software D3D9 vs WebGL), audio, PRESENT/s; boat browser (headful) for anything quoted.
  Done: page screenshots menu -> level with movement, audio verdict, FPS, result.json (verification reviewed + gameplayScreenshots); any page-only bug fixed on main.
  Evidence: board 2026-10-10T02:27:17Z

- [ ] tools/fetch-candidate-corpus.js fails on a fresh boat fork (7z exit 2, unar unavailable)
  id: BOAT-FETCH-CANDIDATE-EXTRACT-20261010
  status: done (d33c29ba7 RAR via unar + 98c523ae3 warcraft3 PE+MPQ install step; accepted by orchestrator)
  owner: unowned
  created: 2026-10-10T03:28:00.000Z
  Next: Reported by claude:90024109 03:23Z: --id=warcraft3-demo downloads W3Demo.exe but archive extraction fails 4/4 on a bx_69aem736 fork (7z exit 2; unar missing). Either install the needed extractor in the fork recipe or make the tool use a JS extractor it already depends on (node-unrar-js worked for Asghan), and say clearly which archives it can open.
  Done: fetch-candidate-corpus --prepare works on a fresh fork for warcraft3-demo and one RAR candidate; documented in the boat recipe.
  Evidence: board 2026-10-10T03:23:16Z

- [x] New-game lane: Dungeon Lords demo
  id: NEW-GAME-DUNGEON-LORDS-DEMO-20261010
  status: done (ordinary gameplay qualified; separate performance/release work)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: root direct, single-worker budget; runtime serialized with other lane
  candidate: test/binaries/win98-games-a-d/Dungeon Lords-Demo1.5-Win98-D3Dprobably.exe
  Next: Paired mainc838b9162 runs0723/0730 prove W gameplay: identical before,276290 changed after pixels with running/world change. Reviewed screenshot1008. Renderer fix64e0e6a95 and final findings94771f699 on main3172df39c, push/ls-remote verified. CLI0.0732presents/s; browser performance remains unqualified and no release approval. Pipeline refilled Conan.
  Done: Ordinary original launch reaches player-controlled gameplay with reviewed screenshot and run/build identity; tested fixes on main.

- [~] New-game lane: Age of Empires III trial
  id: NEW-GAME-AOE3-DEMO-20261010
  status: held (license agreement; not an active new-game lane)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: root direct, single-worker budget; runtime serialized with other lane
  candidate: test/binaries/win98-games-a-d/Age-of-empire-3trial-Win98-SW.exe
  Next: Original reaches EULA with InterlockedExchangeAdd candidate, XP profile, native MSXML4 and its resource DLL. Screenshot991 sent; no button answered. Evidence scratch/runs/20261010T0430Z-aoe3-eula. Await user review before gameplay; pipeline refilled Beyond Good and Evil.
  Done: Ordinary original launch reaches player-controlled gameplay with reviewed screenshot and run/build identity; tested fixes on main.

- [~] AVP2 demo: repair corrupted world/model textures
  id: AVP2-TEXTURE-CORRUPTION-20261010
  status: active (menu upload route investigation; no guest running)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Trace330686/330693 terminal0 at03:58:48Z on bx_hx8msa33 /home/user/avp2-texture-formats-20261010. Zero TexLoad events through1282 batches despite Lock/Unlock/Blt/texture traffic: compressed Texture::Load hypothesis unproven and not shown as menu route. Inspect Lock/Blt source bytes/formats next; stored menu textures remain striped. Do not redo completed launch/control proof.
  Done: Source/destination pixel evidence identifies cause, tested fix on main, ordinary mission screenshots show correct textures; no public deployment.

- [ ] USER-VISIBLE: Age of Empires II in the browser -- a world left-click (or the cursor at the top-left) jumps the camera into fog; main view goes black
  id: AOE2-PAGE-MOUSE-CAMERA-JUMP-20261010
  status: done (e84e3bd23 no spin park inside a synchronous send; confirmed in page 3/3, edge scroll works; notes 098195fbf; reviewed by orchestrator)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (assigned by orchestrator 2026-10-10T04:12Z)
  created: 2026-10-10T04:12:00.000Z
  Progress (2026-10-10T05:00Z, claude:202b4b39, boat bx_nchbp3ep): reproduced headless in the page (click on empty sand -> camera in the fog, H restores). Ruled out: guest cursor (601,478 live and event-scoped), event stream/lParam, window geometry, ClipCursor, stuck keys, uop tier (?no-uop reproduces). CLI does not reproduce (villager click, H/C, long hold). Separate defect found: GetCursorPos reads (0,0) until the first in-game pointer move (a move during loading is lost). Evidence scratch/runs/20261010T0450Z-aoe2-page-camera-jump (probes arm-mouse-trace.js / arm-all-input.js). Next: find AoE II's camera position (CLI --watch while pressing H) and read it from the page with guest_read32 around the click to get the writer's EIP; then compare the writer's inputs (time deltas?) page vs CLI; --real-ticks CLI needs a time-based route.
  Progress 2 (2026-10-10T05:45Z, boats bx_guvdvjpc + bx_crcrvebz): ROOT CHAIN. At game start AoE II (0x5ad931 / 0x5ada30: if !IsIconic(hwnd)) calls 0x48ad90, which centres the cursor: SetCursorPos(([obj+0x2c])/2, ([obj+0x30])/2) via the branch at 0x48addf (ret 0x48adf9) -- the same branch in both arms. CLI: SetCursorPos(512,384). Page: SetCursorPos(0,0), so those two fields (the draw system's screen width/height) are still 0 when the page reaches that call; the cursor then sits in the top-left edge-scroll corner and the next input event scrolls the camera into the fog (CLI reproduces it with an explicit mousemove 0:0 + click). Ruled out: GetWindowRect (renderer record is 940x734 / 800x600 / 1024x768, never 0), guest cursor, lParam, ClipCursor, keys, uop. Next: CLI --watch on that object's +0x2c to find its writer and when it runs relative to the centring call, then find why the page reaches the centring first (likely real-time ordering of the display-mode change / activation); fix the emulator side, not the game.
  Progress 3 (2026-10-10T06:22Z, boat bx_qg3s8q29): narrowed to one instruction run. 0x48addf..0x48adf3 is pure arithmetic, SetCursorPos(obj[+0x2c]/2, obj[+0x30]/2), obj = [[[screen 0x08630020 +0x1e8]+4]] = 0x08643a20 in BOTH arms; CLI pushes 512,384, the page pushes 0,0 (trace raw args; renderer cursor becomes 0,0) although the page's field sampler (guest_read32, every 20 ms) shows obj w/h = 1024/768 from just before the call, and the page chain reads the same obj. Page path is identical (hit counts: 0x48ad90 x1, branch 0x48addf x1, caller 0x5ada0d). Not uop (?no-uop), not the x87 fold (?no-x87-fold&no-uop), not GetWindowRect, not ClipCursor. Next: read the guest registers at 0x48adf1 in the page -- add a debug export that snapshots EAX/ECX/ESI at the first hit of count slot 0 (the page has no trace-at), then compare with the CLI; suspects are a page-only memory/translation view of 0x08643a4c at that instant or the page reaching the call while the fields still hold 0 (sampler granularity). Fixing the cursor value removes the camera jump (CLI proves the chain).
  Progress 4 (2026-10-10T07:50Z, boats bx_ex9p5cgk + bx_rcf8qc4m, debug export get_hit0_reg 18e036475): CAUSE NARROWED. In the page ESI=0 at the centring 0x48addf: the draw-system pointer [0x086e2698+4] is still NULL. The mode switch 0x421d60 suspends the draw system (0x489e60 from 0x421da7: [obj+4]=0, [obj+0x13c]=1), then the game loads temp1.tmp (GetTempFileName/CreateFile/WriteFile/OpenFile/_lread/_hread/DeleteFileA). In the CLI the pointer is restored right after that DeleteFileA (watch, batch 1408) and the centring at 1539 gets 512,384. In the page the same temp1 sequence runs, then music1.mid is opened through MCI while it is still a lazy, unfetched file ([MCI] open ... notes=0, then late-attach notes=2958), None.SLP fails as in the CLI, and the centring runs with the pointer still NULL -> SetCursorPos(0,0). Page counts: release 1 / create 1 / centre 1 / mode switch 2, same as the CLI; only main thread. Next: (1) find the exact resume writer in the CLI (break after the DeleteFileA return and trace-at forward; watchpoint attribution is only per block) and what it depends on; (2) test the lazy-MIDI suspicion: page run with sound\midi\music1.mid mounted eager (lib/apps.js aoe2 file entry without lazy/httpRange) -- if the centring then gets 512,384, the fix is in the MCI sequencer open of a not-yet-fetched file (it must block like a file read, not attach late).
  Progress 5 (2026-10-10T08:25Z, boat bx_dkxfbfr7 + CLI): MIDI RULED OUT -- page run with music1.mid eager ({eager:true}; open reports notes=2958) still centres to (0,0). Page order (count probe arm-aoe2-resume.js): resume-pending flag set 0x421dd5 -> centring 0x48addf -> only then resume 0x489ec0 (main loop check 0x4208f2 does not move in between). CLI stack scans (--trace-stack-scan) put SetDisplayMode and SetCursorPos under one call of game start 0x5ad7f0 in BOTH arms; in the CLI the resume runs INSIDE it: right after the mode switch game start calls InvalidateRect(main, NULL, TRUE) (0x5ad83d) + UpdateWindow (0x5ad845 -> 0x41f640), the synchronous WM_PAINT reaches wndproc 0x41f860 -> vtbl[0xec] = paint handler 0x420690, which is AoE II's frame and runs the resume. No message-pump call in between (API trace). So the page's UpdateWindow either sends no WM_PAINT (no damage / not visible in $update_window_prepare; InvalidateRect(NULL) sizes from host get_window_client_size) or the handler takes its early exit ([esi+0x1d8]==1 -> ValidateRect, return). Probe ready: scratchpad arm-aoe2-paint.js (counts 0x41f64a, 0x420690, 0x4206ac, 0x4206ca). Evidence scratch/runs/20261010T0450Z-aoe2-page-camera-jump/page-*.txt. Next: one page run with that probe (boat requested), then fix the emulator side.
  Progress 6 (2026-10-10T09:00Z, boat bx_xhz9hmde + CLI): ROOT CAUSE + FIX e84e3bd23 (main). Page probe arm-aoe2-paint2.js: in game start's UpdateWindow paint the frame's once-a-second branch calls [eax+0x140] and that call never returns (landing 0x4208e2 not reached), yet UpdateWindow returns to game start (0x5ad84a) and the centring runs -> (0,0); the frame's resume runs a frame later. Mechanism: the clock spin detector parked (yield 14) inside $wnd_send_message's nested $run, where no host takes the yield, so after 64 rounds the paint was abandoned. run.js --lazy-ranges reproduces the "[sync] ABANDONED wndproc ... msg=0xf ... yield_reason=14" line right before the centring. Fix: neither spin detector parks while $sync_msg_depth>0 ($spin_park_reaches_host); the abandon is gone at equal CPU (2.9 s user both arms), centring 512,384. test-sync-send-spin-park.js fails old/passes new; clock/QPC/thread spin-park, sync-send sleep/loadlibrary, paint-order, beginpaint-erase, exclusive-paint-pump suites pass. Next: page verification on a boat (SetCursorPos 512,384, map click keeps the camera, screenshots), re-notes aoe2-trial.md, stale EULA click in test-aoe2-gameplay.
  Next: Found in GAMEPLAY-aoe2 (edd9068a9, scratch/runs/20261010T0345Z-aoe2-gameplay-fps r-mv*.png): page only, CLI fine; H restores the view. Suspects: page mouse coordinates vs AoE2's edge-scroll/minimap hit test (a stray (0,0) or a pointer position outside the client area reaching the guest), or the cursor clip. Compare the guest-visible GetCursorPos/WM_MOUSEMOVE stream page vs CLI with --trace-input; fix; also fix the stale EULA click in test-aoe2-gameplay (104,415 -> 161,433).
  Done: in the page, left-click selects/moves villagers and the camera stays put; screenshots + regression test; commit on main.
  Evidence: board 2026-10-10T04:10:36Z

- [~] New-game lane: Beyond Good and Evil demo
  id: NEW-GAME-BEYOND-GOOD-EVIL-DEMO-20261010
  status: done (ordinary gameplay/control reviewed; local-only corpus identity integrated)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  candidate: test/binaries/win98-games-a-d/BeyondGood&Evil-DX9-D3D/EnglishOfficialDemoBGE_WIN.exe
  Next: Complete narrow launch/control requirement: run1432Z Q food/health response and Up movement reviewed with guest-consumer trace; result.json published,2 gameplay images accepted by reader. Registration/category/notes0a690ad31 pushed main. Local installed game/BGE.exe missing, so dashboard launch, audio/FPS and release remain separate. Refilled with Legends of Aranna.
  Done: Ordinary launch and player-controlled gameplay with reviewed screenshot and tested fixes on main.

- [ ] Preserve CreateProcess application and command-line separately in launch handoff
  id: CREATEPROCESS-CHILD-ARGS-20261010
  status: review
  note: 2026-10-10T09:05Z c9e5cad1 (main, ls-remote verified, full build green): CreateProcessA/W pass lpApplicationName as the file and the lpCommandLine tail after its program token (CRT argv0 rules: quoted to next quote, unquoted to first space/tab, leading whitespace = empty token) as params; NULL app name keeps the old whole-line handoff. test/test-createprocess-args.js (A+W, 6 cases each) fails on the old handler. Not re-run end to end on BGE/Dungeon Lords (heavy installers); expected effect: their child setup now gets '-deleter ' without the manual replay.
  note: 2026-10-10T08:40Z self-claimed by claude:1863d2b5 (no assignment 25+ min).
  owner: unowned
  Next: src/09a0b-handlers-base-late.wat handle_CreateProcessA sends arg0 as file and zero params, dropping arg1 when application name is non-null. BGE requests child setup.exe with command line " -deleter "; capture records empty args. Implement real separate application/command-line semantics with Win32 token rules and test A/W paths; do not simply duplicate argv0 or treat full command line as shell parameters. Explicit child replay gets both BGE/Dungeon Lords to extraction.
  Evidence: scratch/runs/20261010T0439Z-installshield-child and original BGE 0x406ad5 call, 0x41251c command format.

- [x] Implement mouse_event input injection for Dungeon Lords startup
  id: MOUSE-EVENT-DUNGEON-LORDS-20261010
  status: done (ce4d3fb9c integrated main9c034e15a)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Result: Implemented synchronous mouse synthesis; focused WAT/host input + keyboard +18 cursor checks and canonical build pass. Actual game passes fallback into PlayTheGame, then missing maps/parchment192.bmp (original Files9/Parchment192.bmp exists). Evidence scratch/runs/20261010T0454Z-mouse-event-fix. No gameplay claim.
  Evidence: scratch/runs/20261010T0448Z-game-startup-blockers

- [ ] Headless WM_TIMER loses ticks at coarse batch clocks (sol16 Time 13/18/22 after 20 guest-s at 200/100/50 ms ticks)
  id: WM-TIMER-TICK-LOSS-20261010
  status: done (6e4d29e8 + notes 0e6a7529; build green; accepted by orchestrator)
  Result: 2026-10-10 COMMIT 6e4d29e8 (+ notes 0e6a7529): $timer_check_due now advances last_tick by whole intervals ($timer_consume_due_tick, twin of the mm-timer one) instead of restarting from late delivery; missed periods still coalesce. sol16 Time reads 22 after 20 guest-s at 200, 100 AND 50 ms (was 13/18/22). New test-wm-timer-phase.js (fails on old code: 16 ticks at 200 ms; passes: 20 at all three); test-next-timer-due.js updated (late-delivery deadline = remaining period). Regression: win16 wep4 gameplay, Rodent2000, Diablo shareware gameplay PASS; win16 wep1 fails its Tetris modal-caption assertion identically on baseline (pre-existing, not timer-related). StarCraft not re-run (heavy; uses mm/QPC timing, not WM_TIMER).
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T07:08Z; finder)
  created: 2026-10-10T07:08:00.000Z
  Next: Found in GAMEPLAY-sol16 (6a5b06e5, scratch/runs/20261010T0655Z-sol16-move-timer): a 1 s WM_TIMER is delivered 1-2 batches late and rescheduled from delivery, so ticks drift/lose at coarse batches (22 correct at 50 ms). Real Windows schedules the next tick from the due time, not from delivery. Fix in the timer table walk (Win32 and Win16), with a unit test at 200/100/50 ms ticks; check it does not change timer-paced games (Chip's Challenge, Diablo, StarCraft) beyond the intended correction.
  Done: sol16 Time reads 20+-1 after 20 guest-s at all three tick sizes; unit test; commit on main.
  Evidence: board 2026-10-10T06:47:31Z

- [ ] DirectPlay STOPASYNC flag tested as 0x4 in 09d4 (real DPENUMSESSIONS_STOPASYNC is 0x20)
  id: DPLAY-STOPASYNC-FLAG-20261010
  status: done (211f8040; unit test fails old/passes new; aoe2 8/8 + blobby 11/11 two-seat PASS; aoe1 failure pre-existing -> AOE1-VLAN-CONNECT-SCREEN-20261010)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (assigned by orchestrator 2026-10-10T07:08Z; finder)
  created: 2026-10-10T07:08:00.000Z
  Next: dpn_enum_sessions in src/09d4-dplay-net.wat tests STOPASYNC as 0x4; the DirectPlay constant is 0x20 (0x4 is DPENUMSESSIONS_ASYNC... verify against the SDK header). Fix + unit test, then re-run the DirectPlay two-seat tests (aoe1, aoe2, blobby) on a boat to confirm no regression.
  Done: correct flag value, unit test, the three two-seat tests pass; commit on main.
  Evidence: board 2026-10-10T06:51:13Z (w4)

- [ ] AoE1 two-seat vlan route: host never reaches the connection screen
  id: AOE1-VLAN-CONNECT-SCREEN-20261010
  status: done (dc1e4eb4: overlay cover only by unclipped presents; bisected to f2522c231; aoe1+aoe2 vlan pass on boat; accepted by orchestrator)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; self-claimed 07:50Z, confirmed by orchestrator; boat bx_pbtb8fjr)
  created: 2026-10-10T07:42:00.000Z
  Next: test/test-aoe1-vlan-gameplay.js fails 'host never reached the connection screen' on main both with and without 211f8040 (w4, bx_pbtb8fjr). Pre-existing route regression: bisect against the last passing commit, then fix the cause (route or emulator). Run on a boat.
  Done: test-aoe1-vlan-gameplay passes on main; cause named; commit on main.
  Evidence: board 2026-10-10T07:36:52Z (w4)

- [~] New-game lane: Conan 2004 demo
  id: NEW-GAME-CONAN-DEMO-20261010
  status: blocked (license acceptance unanswered)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  worker: root direct, single-worker budget; runtime serialized with BGE
  candidate: test/binaries/win98-games-a-d/Conan cauldron-DX9-D3D/ConanPC-Demo.exe
  Next: Original staged and SHA verified on bx_hx8msa33. Ordinary language/welcome/destination inputs reach EULA with I Reject selected, run20261010T0803Z-conan-destination. Do not answer acceptance. No installer process running; extracted game not yet available. Refill actionable new-game slot while this remains held.
  Done: Original launch, player-controlled gameplay, reviewed screenshot and tested fixes on main; no public deployment.

- [ ] JigSawMe: Preview label drawn clipped ("Previe")
  id: JIGSSAWME-PREVIEW-LABEL-20261010
  status: done (4a2f098cb: not an emulator bug; accepted by orchestrator)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T08:05Z)
  created: 2026-10-10T08:05:00.000Z
  Next: In scratch/runs/20261010-jigssawme-piece-lock-ab (both 640x480 and 1024x768) the top-left Preview label reads "Previe" on a black box narrower than the text. Find whether the label control is sized from our text metrics (GetTextExtent/DrawText) or clipped by a wrong rect; fix the cause with a unit test.
  Done: label fully drawn in a rerun; unit test; commit on main.
  Evidence: board 2026-10-10T07:42:25Z (d10ba697)
  result: NOT AN EMULATOR BUG (4a2f098cb notes only). The box behind 'Preview' is the preview-thumbnail area, sized image/3 by the game (0x42aad9: [0x43b0f8] / byte[obj+0x64]); the 128x128 JIGTEST.BMP fixture makes it 42 px, narrower than the word. A 384x288 picture gives a ~128 px box and the full label. Evidence scratch/runs/20261010T0845Z-jigssawme-preview-label-w6 (reviewed).

- [~] New-game lane: Colin McRae Rally 3 demo
  id: NEW-GAME-CMR3-DEMO-20261010
  status: active (graphics validated; sound interface blocker)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  candidate: test/binaries/win98-games-a-d/ColinMcRay-Rally3-pcdemo-D3D.exe
  Next: Graphics/DirectShow setup advanced; corrected baseline browser avoids early MLANG exit but quartz thread explicitly traps on unimplemented FreeLibraryAndExitThread (run1431Z). Implement genuine unload-and-thread-exit after DLL lifetime/concurrency correctness; no silent ExitThread-only substitute. Nested initializer candidate held unmerged; CMR3-POST-SPLASH-NULL tracks remaining work.
  Done: Original launch, player-controlled gameplay and reviewed screenshot with tested identity.
  Evidence: scratch/cmr3-demo-20261010/selection.json

- [ ] WEP16 SkiFree HUD Time stays 0:00:00.00 (and Speed 00m/s) while skiing
  id: SKIFREE16-HUD-TIME-ZERO-20261010
  status: done (68f253309: game behaviour, slalom course timer starts at the start gate; reviewed by orchestrator)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T09:25Z)
  created: 2026-10-10T09:25:00.000Z
  Next: scratch/runs/20261010T0920Z-wep16_ski-control-frames-w6/03 shows Dist 986m but Time 0:00:00.00 and Speed 00m/s. Real SkiFree counts time from the first move. Find which clock it reads (GetTickCount/timeGetTime/GetCurrentTime/WM_TIMER) and why it does not advance; fix with a unit test, or prove it is the game.
  Done: HUD time advances while skiing in a rerun, cause named; commit on main.
  Evidence: board 2026-10-10T09:16:59Z (w6)
  result: GAME BEHAVIOUR, not an emulator defect (68f253309 notes). HUD Time = slalom course timer: DS:0xbb4 = GetTickCount - start, runs only while DS:0xbc6 is set; seg1:0x1d60 sets it only when the start-line crossing X is in [-576,-320]. Runtime: crossing X 0 / -311 -> Time 0; -331 -> Time runs (0:00:36.86). Evidence scratch/runs/20261010T1000Z-skifree16-hud-time-w6 (reviewed).

- [ ] WEP16 Klotski Level-1 selector thumbnails blank
  id: KLOTSKI-SELECTOR-BLANK-20261010
  status: done (111b73e8e: Win16 BeginPaint erase no longer queued through the dialog marker; thumbnails viewed by orchestrator)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T10:28Z)
  created: 2026-10-10T09:25:00.000Z
  Next: lead from claude:d10ba697 board 2026-10-10T09:01:30Z: dialog surface created 405x544, MoveWindow(110,130,420,280) recreates it 420x280, yet the WM_PAINT BitBlt uploads land at surface y 357-370, beyond the 280 height, so thumbnails never show. Find what keeps the stale 544-high geometry.
  Done: thumbnails visible; unit test; commit on main.
  Evidence: board 2026-10-10T09:01:30Z

- [x] Implement DirectSound playback notifications exposed by CMR3
  id: DSOUND-NOTIFY-CMR3-20261010
  status: done (main pushed5bbf6e956; no public deployment)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Done: Implementation1e409f8f5 integrated with current main/AoW2. Canonical merged build/native notification COM/host blocked-waiter/viewport tests PASS; Chrome9 real worklet checks PASS. Original CMR3 advances through notification setup to reviewed demo splash, then separate NULL interface.
  Evidence: runs20261010T1128Z-cmr3-dsnotify-tests,1143Z-dsnotify-chrome,1149Z-dsnotify-merged-final; notes colin-mcrae-rally-3-demo.md. Legacy loop-refresh fails identically on baseline; separate contract follow-up.


- [ ] Reconcile existing PS1.4 shader regression with declared compiler support
  id: D3D9-PS14-TEST-CONTRACT-20261010
  status: done (5ca601743: public contract PS1.1 advertised / 1.1-1.3 accepted / 1.4 refused, test asserts it; accepted by orchestrator)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (tr3; assigned by orchestrator 2026-10-10T12:36Z)
  Next: test/test-d3d9-software-backend.js line262 expects PS1.4 sampler5; native compile accepts PS1.1-1.3 and returns version error2. Baseline e90bd5668 reproduces unchanged; determine intended public support and implement/test it or correct unsupported fixture with documented scope. Do not hide unrelated RGB565 regressions.
  Evidence: scratch/runs/20261010T1010Z-cmr3-rgb565-tests/baseline-software.log
  Done: Canonical software-backend test runs through all cases with truthful shader capability contract.

- [ ] Open the public ps_1_4 profile (D3D9/D3D8) once it is conformant
  id: D3D9-PUBLIC-PS14-20261010
  status: done (03923630e; B&W2 refusals 72->68 at startup, land picker identical, no failed renders; picker refusals + gameplay follow-up on a boat per user; accepted by orchestrator). REGRESSION found on boat 2026-10-10T15:05Z and fixed in 65e5905e8: Aligned_Vines ps_1_4 coissue into r3/r2 was refused by the VM at draw and latched the queue (frames frozen from the flyover on); refusals after the land build 131 -> 125. Evidence scratch/runs/20261010T1445Z-bw2-land-gameplay-boat. Re-verified on boat bx_m6vzd3ud: 65e5905e8 exposed a second ps_1_4 latch on the same draw ('programmed pixel fog requires PS1.1-1.3'), fixed in 229fffacf. With both fixes the run has 0 failed commands through the flyover into tutorial gameplay (refusals 125), until the separate raster-budget latch at about 2214 s (BW2-RASTER-BUDGET-LATCH, w6). Evidence scratch/runs/20261010T1608Z-bw2-65e5905e8-fog-boat; re-notes 4ab65a5b9.
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (tr3; user-directed 2026-10-10T13:01Z)
  created: 2026-10-10T13:05:00.000Z
  Next: Filed by claude:202b4b39 from D3D9-PS14-TEST-CONTRACT. The private PS1.4 validator -> SIMD -> six-stage raster path exists and passes test-d3d9-ps14-stage-linkage.js, but the public gate ($d3d_shader_ir_compile_mode accepts 0xffff0101..0103; CreatePixelShader) and D3DCAPS9.PixelShaderVersion (0xffff0101, 09ad +204) stay at 1.1. Black & White 2 submits 13 ps_1_4 shaders that are refused at its land picker (09ad comment). Work: ps_1_4 conformance (phase, texcrd/texld, bem, cnd, six samplers) with tests in both the software and GPU backends, then raise the caps to 1.4 and accept 1.4 publicly; re-enable the PS1.4 sampler5 queue case in test-d3d9-software-backend.js.
  Done: B&W2's ps_1_4 shaders compile and draw on both backends; caps advertise 1.4; tests cover the profile.

- [ ] D3D9: shader accepted at create but refused at draw latches the whole render queue
  id: D3D9-CREATE-DRAW-SHADER-AGREEMENT-20261010
  status: done (eaf7d0316: create-time VM compile returns INVALIDCALL on refusal; ps_1_4 pair rule fixed; accepted by orchestrator)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T15:50Z; user: take the next ready task)
  created: 2026-10-10T15:30:00.000Z
  Next: Filed by claude:202b4b39 from the B&W2 boat A/B. CreatePixelShader/CreateVertexShader run only d3d_shader_ir_compile, but the software backend's program() also runs d3d_shader_vm_compile. A shader that passes the first and fails the second raises at draw time, and lib/d3d-command-stream.js keeps its first error forever, so every later frame fails. 65e5905e8 fixed the one known case (ps_1_4 coissue destinations). Make the two agree structurally, e.g. run the VM validation at create time when the software backend is active and return D3DERR_INVALIDCALL, or a test that every IR-accepted shape VM-compiles. Also: grass.sdv +0x5f84 ps_1_4 is still refused by scan14 error 18 (a coissue pair reading four distinct temps). Find D3D's actual ps_1_4 read-port rule (per instruction or per pair) before relaxing 09af ~345.
  Done: no IR-accepted shader can fail VM compile at draw; the grass pair rule has a cited source and a test.

- [ ] B&W2 software D3D9: "native raster allocation budget exceeded" latches the queue in tutorial gameplay
  id: BW2-RASTER-BUDGET-LATCH-20261010
  status: done-partial (3a908f97b: 3300 s, 0 failed commands, no latch; camera control not established -> tr3 re-run after the tutorial dialogue, user-directed)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T16:07Z; coordinate with tr3 B&W2 re-run)
  created: 2026-10-10T15:32:00.000Z
  Next: Fix3a908f97b already on main; w6 run20261010T1638Z-bw2-raster-budget-boat-w6 completed3300s with0failed/659samples and132334draws, versus tr3 control latch~2214s. Camera claim retracted: scripted dialogue moves view equally without input. Only~37min post-flyover, below45min criterion. User-directed tr3 follow-up acknowledged boat bx_wn9q2edy at17:52:27Z; collect that owner result for after-dialogue equal-length idle/key comparison and sufficient gameplay duration. Old w6 boat released; do not rerun implemented fix independently.
  Done: B&W2 runs 45 min of gameplay on the software backend with zero failed commands, and the camera key test moves the view.

- [ ] Pre-existing test failures on main (not caused by the change that reported them)
  id: PREEXISTING-TEST-FAILS-20261010
  status: done-partial (5/6 pass: b80181966 6b44310c5 dadb2bc5c 3edd40c4a 42aa578cd 84d34b579; jigsawed-menus -> WIN16-CHECKMENUITEM-JIGSAWED-20261010; accepted by orchestrator)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claimed 10:34Z, confirmed by orchestrator)
  created: 2026-10-10T10:28:00.000Z
  Next: Reported failing identically with and without workers' changes on 2026-10-10: test-debug-2d-scaling ('screen backing dimensions should use one uniform width/height scale'), test-win16-entertainment-manifests (TypeError: path must be string, got Object), test-win16-hearts-menus, test-solitaire-play, test-win16-jigsawed-menus, test-notepad-typing-scroll. Bisect each to its first bad commit and fix the cause; one commit per cause.
  Done: each listed test passes on main or has a named cause and its own row.
  Evidence: board 2026-10-10T08:19:31Z, 10:10:11Z, 10:24:57Z

- [x] Fix JezzBall crash and add desktop shortcut
  id: JEZZBALL-DESKTOP-20261010
  status: done (main pushed; not publicly deployed)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Done: 88d8a917f integrated/pushed main dbb1658a3, ls-remote verified. EXE exported prologues, modal activation and nested DLGPROC routing fixed. Complete packaged JezzBall added to desktop.
  Validation: canonical build; 2945 loader checks; gameplay/high-scores/game-over/name submission/dismissal and Win16 focus/modal regressions PASS. NoSAB browser desktop launch and trusted gameplay reached score840/21% area, errors[].
  Evidence: scratch/runs/20261010T1114Z-jezzball-desktop-final and scratch/runs/20261010T1118Z-jezzball-merged; docs/re-notes/jezzball.md. Old production62918bb02 exact build not replayed. No missing paths.

- [ ] Win16 CheckMenuItem does not reach JigSawed's drawn Options menu
  id: WIN16-CHECKMENUITEM-JIGSAWED-20261010
  status: done (27cdcd81b + 42f524298: attached menu blobs rebuilt on dynamic mutators; accepted by orchestrator)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T11:22Z)
  created: 2026-10-10T11:05:00.000Z
  Next: test-win16-jigsawed-menus fails at 'id=4556 flags=0x4 "&Fast Move"'. Route reaches the loaded picture (About click now 205, 443753bf6). Clicking Options > Fast Move dispatches; the VB1 game calls USER.154 CheckMenuItem(hMenu=0x14d, 4556, MF_CHECKED=8) which returns AX=0 (found, was unchecked), yet menu-dump for hwnd 0x10002 still shows flags=0x0 for 4556 (and the other five toggles keep their initial state). So the check lands in a menu representation other than the window's drawn MENU_DATA blob. Next: in $handle_CheckMenuItem (09c5-menu.wat) see which branch 0x14d's h32 takes (dynamic_menu_state_w / menu_hwnd_from_handle / menu_check_item_global) and why that branch does not refresh hwnd 0x10002's blob. Repro: run.js --app=wep16_jigsawed --input=205:dlg-click:1,215:click:20:31,240:click:80:52,300:click:150:150,330:click:475:180,600:click:75:31,620:click:120:92,680:click:75:31,690:menu-dump:x
  Done: test-win16-jigsawed-menus passes.
  Evidence: board 2026-10-10T11:05Z (claude:d10ba697)

- [ ] JigSawed Options > Outline cascade clears the board
  id: JIGSAWED-OUTLINE-CASCADE-CLEARS-BOARD-20261010
  status: done (aea7b5afd: not an emulator bug, captures were mid-redraw; test timing fixed; accepted by orchestrator)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T11:39Z)
  created: 2026-10-10T11:50:00.000Z
  Next: test-win16-jigsawed-menus now reaches its Outline/Shape cascade section (after 27cdcd81b) and fails 'the white outline should visibly differ from the black outline': right after Options > Outline > Black (click 280,253 at batch 640) every puzzle piece is gone from the board; only the black field and white frame remain. Identical with and without 27cdcd81b (frame md5 3740b3bb both builds), so pre-existing. Next: --trace-win16 around batch 640 to see what the game draws on the outline command (it should redraw every piece with the new outline colour). Repro: run.js --app=wep16_jigsawed --input=205:dlg-click:1,215:click:20:31,240:click:80:52,300:click:150:150,330:click:475:180,590:png:/tmp/a.png,600:click:75:31,620:mousemove:170:253,640:click:280:253,700:png:/tmp/b.png
  Done: test-win16-jigsawed-menus passes.
  Evidence: board 2026-10-10T11:50Z (claude:d10ba697)

- [ ] Multiplayer census, round 2: the untried MP demos
  id: MULTIPLAYER-DEMOS-ROUND2-20261010
  status: done (works: pocket_tanks, little_fighter_2, darkstone_demo; demo-locked: worms2, gta2, icewind_dale, baldurs_gate ch1-2; reviewed by orchestrator)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; user-directed 2026-10-10T11:38Z)
  created: 2026-10-10T11:42:00.000Z
  Next: 18:45Z (w4) DONE so far: pocket_tanks, little_fighter_2, darkstone_demo WORK (darkstone: 0ca54779e test, 47aafe16e SendEx, a7e5f4f75 spin fix by 202b4b39; runs/20261010T1825Z-darkstone-vlan-town-w4); worms2/gta2 LOCKED. Remaining: icewind_dale_demo, baldurs_gate_chapters_1_2_demo (both DPLAYX). History: 14:20Z worms2_demo + gta2_demo LOCKED (readmes). pocket_tanks WORKS: two seats create/list/join/Start Game -> synced Weapon Shop (runs/20261010T1415Z-pocket-tanks-lan-match-w4); fixes on main 6264f8f2 (WS2_32 ordinals 10-12, WSASendTo/WSARecvFrom, FindFirstFileExA, test-pocket-tanks-vlan-gameplay.js) + 99b99048 (winver win2k registered); vlan regressions passed. The two-seat stall was headless mouse mapping (needs --repaint-every in exclusive mode), not focus. 14:35Z little_fighter_2 WORKS with no emulator change: TCP 12345 by typed address, lockstep menus, identical character selection, shared VS fight (test-lf2-vlan-gameplay.js a43978ee; runs/20261010T1445Z-lf2-vlan-fight-w4). 14:45Z triage: darkstone_demo readme offers LAN MP (IPX recommended / TCP/IP; menu ids MCONNECTTCP/IPX, transport likely DirectPlay via ole32; WSOCK32 only for hostname) -- 15:13Z probe (bx_ucr3zqss, runs/20261010T1500Z-darkstone-mp-probe-w4): New Game -> Multiplayer -> champion -> Available Services (IPX/TCP/IP via IDirectPlay3::EnumConnections) -> TCP/IP -> Session menu work; Create a session STALLS (640x480, frozen frame, clock-spin park, no crash). 15:23Z trace (bx_nh26gmgp, runs/20261010T1520Z-darkstone-mp-trace-w4): DirectPlay is NOT the blocker -- InitializeConnection/Open(CREATE)/CreatePlayer succeed, DPID stored, success flag set; sim thread ticks loading "Town", surfaces keep being written, presented 640x480 frame stays white. 16:05Z ROOT CAUSE (bx_c4nvuuuz, runs/20261010T1600Z-darkstone-vlan-join-w4): clock-spin detector parks the host main thread's per-object GetTickCount loop once per object ($spin_work_max=64 gate doesn't exclude it); --no-spin-park -> host in Town as HOST. Two seats (test-darkstone-vlan-gameplay.js draft, uncommitted): guest types 10.0.0.1, lists HOST, Open(JOIN)+CreatePlayer+EnumPlayers succeed, host gets PLAYER_ADD; guest stays on the list. 16:45Z (bx_rvwqu6ag, runs/20261010T1630Z-darkstone-sendex-w4): spin A/B -- host loop parked at spin_work_max 64/32/16/8, released at 4 (5-8 blocks between reads), posted for the detector owner. DirectPlay bug: Darkstone sends everything via IDirectPlay4::SendEx(GUARANTEED|ASYNC|NOSENDCOMPLETEMSG=0x601), which we refused as E_NOTIMPL -> no game message left either seat. Fix drafted (deliver now, return E_PENDING 0x8000000A + msg id; test-directplay4.js case), uncommitted in scratch/claude-w4-wt with test-darkstone-vlan-gameplay.js. Also landed 5eea418f6 (5 DP unit tests broken since 3cd30c5e). 17:25Z (bx_8asycnxk, stopped mid-run): with the SendEx fix game data flows (host tx 94 / guest rx 54, was 18/18). Handshake decoded: guest sends type 0x6c, host pings type 0x7f every 1s until its +0x6720 set, guest's 0x7f handler (0x40d857) SetEvents [0x647ee0] that its main waits on (WaitForSingleObject 10s x3 at 0x416e4b) -- main never wakes NOR times out although its network thread processes messages. 18:00Z LANDED 47aafe16e (SendEx ASYNC|NOSENDCOMPLETEMSG -> E_PENDING; aoe2 8/8, mcm 4/4, blobby 11/11 on bx_fy7vv953; runs/20261010T1750Z-darkstone-sendex-fix-w4). Join protocol decoded: host announces a block transfer (type 0x6d, 16 B), sends 536-B type-0x6f blocks each acked by the guest's 0x6e, guest then sends 0x7e and 0x40e1a0 sets +0x6720 + SetEvent -> main continues. Host does send 0x6d and 0x6f, but the guest never acks -- its network thread doesn't get the app messages. Next boat: probe guest $DP_SHARED owner vs player entity owner/event (probe in uncommitted test edit; test now runs WITHOUT --no-spin-park since 202b4b39's a7e5f4f75 fixed the per-object clock-spin false positive; DARKSTONE_VLAN_NO_SPIN_PARK=1 for A/B). Note: run.js pumps a non-blocking seat's wire only every 64 batches. icewind_dale_demo (Recommended install = "required for multiplayer") and baldurs_gate_chapters_1_2_demo both import DPLAYX; IDirectPlay4A (the old IWD blocker in re-notes) is now served by $dplay_query_interface_wa. Order: darkstone, IWD, BG. Original: icewind_dale_demo, baldurs_gate_chapters_1_2_demo, gta2_demo, darkstone_demo, worms2_demo, pocket_tanks, little_fighter_2 (ut2004 only when a binaries feed exists). For each: find its MP route, then two seats over the vlan on a boat; works / demo-locked / bug with a row. Same status table as MULTIPLAYER-DEMOS-NETWORK.
  Done: every listed demo classified with evidence; bugs filed or fixed.
  Evidence: board 2026-10-10T11:32:15Z (w4)

- [ ] Diagnose CMR3 null interface after demo splash
  id: CMR3-POST-SPLASH-NULL-20261010
  status: active (DLL lifetime and concurrent mapping correctness; no runtime live)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Serialized two-worker e24a8bcfb control1912Z confirms independent module-row loss: correct A/B payloads but both dllCount1, B overwrites row0. Together with1736Z staging-corruption control, requires process-owned module registry/count plus serialized mapping; update normal/COM/bootstrap and stale-count replay without locking across reentrant DllMain. Held46673836f remains branch-only, real unload-and-exit still required. Evidence scratch/runs/20261010T1912Z-cmr3-serialized-loader. No runtime live.
  Evidence: scratch/runs/20261010T1129Z-cmr3-dsnotify-original and1130Z-cmr3-post-notify-trace.
  Done: Original reaches ordinary controlled gameplay and reviewed capture.

- [x] Reconcile obsolete DirectSound loop-refresh test contract
  id: DSOUND-LOOP-REFRESH-CONTRACT-20261010
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Complete:77bc44d60 pushed main. Fake AudioContext now acquires sample snapshots; regression verifies replacement content, splice offset/boundary, preserved guest cursor/clock and retired onended isolation. Candidate PASS; deliberate phase-at-refresh mutant fails the intended assertion. Test-only; audible browser output not measured.
  Evidence: scratch/runs/20261010T1343Z-dsound-refresh-contract (candidate and negative timing mutant).
  Done: Regression validates real refresh semantics and passes.

- [ ] WEP16 TicTacDrop: the computer never takes its turn
  id: TICTACDP-COMPUTER-TURN-20261010
  status: done (1d3f4c304: Win16 CreateWindow sends WM_NCCREATE to far wndprocs; VB ThunderTimer default Enabled; computer replies; reviewed by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; unparked by orchestrator 2026-10-10T18:12Z: the park line was a fabricated suggestion, original plan was resume after VB3-PCODE-DECODER-TOOL)
  created: 2026-10-10T11:58:00.000Z
  Next: after the player's drop the status reads Computer's turn but Timer1/2/3 are never enabled (0 SetTimer after a move, while VBRUN100 SetTimer works for Rattler). Cause is in TicTacDrop's VB p-code between the label updates and the timer enable (notes bd9fc667c).
  Progress: 2026-10-10T18:40Z w5 — Picture1_MouseUp traced dynamically (re-notes c50336dcc): MouseUp = p-code seg 0x52f; G398 = NUMOFPLAYERS (1, correct); the accepted above-board drop sets local L838=True, which skips the final guard; forcing that guard true does NOT start the computer. 2026-10-10T19:20Z (re-notes c76e1462c): that array lead was wrong (cell flag +18 = "free", set True on purpose); over-board releases fail the picture-bounds test at 52f:0x5de. Found WIN87EM __fpmath BX=6 (VB Int/Fix rounding) is a no-op; a fix exists (scratch/runs/20261010T1915Z-win87em-fpmath-round, unit test included) but it does not start the computer and regresses JigSawed Solve-after-Hint, so it is NOT landed. Next: find the p-code call site of the AI (xRndCol/NextRColChk) and the event that owns it.
  Done: computer drops a blue ball after the player; A/B; commit on main.
  Evidence: scratch/runs/20261010T1200Z-wep16_tictacdp-sound-byname-w6; board 2026-10-10T11:50:40Z; scratch/runs/20261010T1803Z-wep16_tictacdp-player-move

- [ ] TetriNET page: two copies joining in one tab
  id: TETRINET-PAGE-TWO-COPY-JOIN-20261010
  status: done (4b26dd7f7 join + 4c36bf78f re-enabling FD_READ; page 3/3 PASS; reviewed by orchestrator; vlan sweep follow-up per user)
  note: 2026-10-10T15:05Z claude:1863d2b5 DONE, pending review. Two bugs, both fixed on main: 4b26dd7f7 (has_pending_message pumps the vlan wire so a WSAAsyncSelect server parked in GetMessage wakes; pre-fix the SYN sat pending forever) and 4c36bf78f (FD_READ is re-enabling, one post until recv; per-frame posts made Delphi ScktComp read its uninitialized buffer, TetriNET parsed '\xC83f 1 ...' and hung up mid-match). test/test-web-tetrinet-lan.js (two copies join+play, 13 checks) 3/3 PASS on a boat, test-vlan-getmessage-wake.js covers both (fails without), CLI test-vlan-tetrinet PASS. Keys: test-web-tetrinet-keys.js (8730c79dc). Evidence scratch/runs/20261010T1335Z-tetrinet-page-lan-join (join A/B + drop diagnosis) and scratch/runs/20261010T1500Z-tetrinet-page-lan-play (fixed play). Not run: the heavy VLAN gameplay suites (Jazz2, SC2K Net, AoE...) against the FD_READ change -- worth a boat sweep.
  owner: claude:1863d2b5 (user-directed 2026-10-10T12:12Z)
  created: 2026-10-10T12:15:00.000Z
  Next: user asked to fix the two-copy TetriNET join in one browser tab (the page harness test-web-tetrinet-lan.js stacks two copies on one desktop). Find why the client copy does not join the server copy on the page segment and fix it; then the real keydown Left/Space check from the focus fix.
  Done: two copies in one tab join and play; keys move pieces; test; commit on main.
  Evidence: board 2026-10-10T11:36:51Z

- [ ] Age of Wonders 2: CLI cooperative mode never starts the world after Start
  id: AOW2-CLI-COOP-START-20261010
  status: done (918f25772: coop cross-thread send continues a vblank park; world loads in coop CLI; reviewed by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; user-directed 2026-10-10T12:12Z)
  created: 2026-10-10T12:15:00.000Z
  Next: REVIEW 2026-10-10T15:35Z claude:90024109. FIXED in 918f25772 (lib/thread-manager.js). A vblank park (yield 13) inside a cooperative cross-thread SendMessage dispatch is now continued instead of abandoned. AoW2 runs its 1024x768 switch inside TThread.Synchronize; the dispatch was cut at WaitForVerticalBlank, so the Direct3D device was never re-created and Start called through NULL. Verified: the coop CLI route reaches the world (scratch/runs/20261010T1530-aow2-coop-start-fix). test-cross-thread-send-vblank.js fails before and passes after; the render-wait and cross-thread-send tests pass.
  Done: CLI coop run reaches the world map; A/B; commit on main.
  Evidence: board 2026-10-10T10:00:22Z (w5)

- [ ] tools/: VB3/VBRUN p-code decoder for Win16 Visual Basic games
  id: VB3-PCODE-DECODER-TOOL-20261010
  status: done (f7576dd2e + f3592ec3b + b396aa9b3: tools/vb-pcode.js, test, docs; TicTacDrop handler decoded; accepted by orchestrator)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T12:47Z)
  created: 2026-10-10T12:47:00.000Z
  Next: Several Win16 games are Visual Basic (TicTacDrop, Tetravex, Rodent, Rattler, JigSawed) and their logic is p-code VBRUN interprets, invisible to tools/disasm*.js. Build tools/vb-pcode.js: locate forms/procedures in the EXE, decode p-code ops to readable listings (at least control flow, calls, property sets like Timer.Enabled), with a unit test on a corpus EXE. First use: find the condition in TicTacDrop that keeps Timer.Enabled False (TICTACDP-COMPUTER-TURN-20261010).
  Done: tool + test + docs/tools.md entry; TicTacDrop cause named.
  Evidence: board 2026-10-10T12:41:24Z (w6)

- [x] Implement shell registry deletion for native codec registration
  id: SHDELETEKEY-CODEC-20261010
  status: done (main pushed)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Done: 72e9d1834; real recursive case-insensitive A/W deletion, NULL/empty subkey preserves open key.
  Evidence: scratch/runs/20261010T1301Z-shdelete-registry; baseline fails2!=0, canonical build/storage/snapshot PASS, native WMP9 registration677->770keys.

- [ ] Implement atomic module release and thread exit for native quartz
  id: FREELIBRARY-EXITTHREAD-CMR3-20261010
  status: ready (requires DLL lifetime/concurrency work; no stub substitution)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: CMR browser run1431Z logs UNIMPLEMENTED API FreeLibraryAndExitThread; quartz IAT1104, call RVA5cb5c, runtime EIP0207eb55. Current FreeLibrary on main is a remembered-handle stub, so merely calling ExitThread is not correct. Reconcile held Alice real module-lifetime implementation and DLL-CONCURRENT-MAPPING-20261009, then implement no-return atomic unload/exit with shared module ownership and tests.
  Done: Native quartz cleanup completes without trap, unload callbacks and thread exit correct under concurrent loads, original CMR progression reviewed.

- [~] New-game lane: Dungeon Siege Legends of Aranna demo
  id: NEW-GAME-ARANNA-DEMO-20261010
  status: blocked (user licence decision; text rendering fixed)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  candidate: test/binaries/win98-games-a-d/DungeonSiegelegendsofaranna_demo-D3D.exe
  Next: Generic RTF fix cedee9b54 now shows readable original EULA; before1504Z/after1523Z browser evidence reviewed. No acceptance provided and no input sent. Payload /home/user/aranna-game-20261010 remains on bx_hx8msa33; no gameplay/FPS/audio qualification. Active slot refilled Invisible War.
  Done: Original launch, ordinary player-controlled gameplay and reviewed screenshot with source/build identity; fixes committed on main.

- [~] New-game lane: Deus Ex Invisible War demo
  id: NEW-GAME-DEUSEX-IW-DEMO-20261010
  status: active (setup rendering fixed; ordinary gameplay route pending)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  candidate: test/binaries/win98-games-a-d/DeusEx Invisible War-D3D
  Next: Original072a reaches level loading then exits waiting for Ion Launcher. API capture proves ShellExecuteExA mask0x440 and actual launcher command. Tracked launch candidate passes build/regressions; original browser run PID874891 started20:33:32Z on bx_hx8msa33, bounded420s. Review launcher handoff, then next actual blocker. Follow SHELLEXECUTEEX-REAL-LAUNCH-20261010. No gameplay qualification.
  Done: Original launch, ordinary player-controlled gameplay and reviewed screenshot; scoped fixes tested and integrated to main.

- [x] Render Aranna licence RTF without font-table data leaking into text
  id: RTF-ARANNA-FONTTABLE-20261010
  status: done
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Result: cedee9b54 pushed and ls-remote verified. Preserve outer ignored RTF group, grow callback stream to EOF instead of silent64KiB truncation, discard failing callback data. Negative controls reproduce each defect; final and merged10/10 focused checks/full build gates PASS. Original browser EULA body reviewed in run20261010T1523Z-aranna-rtf-complete; no input/acceptance. Notes updated on main.
  Done: Generic RTF fix with regression reproducing original data, before/after browser text review, main integration; no claim of licence acceptance or gameplay.

- [x] Jazz2 two-seat vlan join is flaky in every arm
  id: JAZZ2-VLAN-FLAKY-JOIN-20261010
  status: done (38c329897 pacing models the Nagle/delayed-ACK the client parser depends on: 6/6 paced vs 1/2 unpaced; client cause documented 507ea812e; accepted by orchestrator)
  note: 2026-10-10T18:22Z claude:1863d2b5 boat bx_4svqp975: per-app pacing gives 3/4 joins (both the coalescing and the per-record hold), up from 1/5 -- not a fix. In the failing run the server's guest sends both join records in one 38-byte send(), so no sender pacing can split them; the client stalls whenever both records arrive together. A real fix needs the client-side cause (why Jazz2's client cannot take the two records in one read) -- next step if the user wants to continue. Patch: scratch/runs/20261010T1640Z-jazz2-join-timing/perapp/perapp-records.patch. Nothing pushed.
  note: 2026-10-10T18:12Z claude:1863d2b5 option 1 (per-app pacing) implemented UNCOMMITTED in worktree scratch/claude-jzp-wt: $vsock_nagle_ms global (0 = off), set_vlan_nagle_ms export, lib/apps.js jazz2_demo vlanNagleMs: 200, plumbed through run.js (--vlan-nagle-ms override), host.js/browser-shell, thread-manager (coop + worker spawn), guest-worker; test/test-vlan-nagle-pacing.js. Build green, 12 related unit tests pass. The 'go with option 1' prompt was an orchestrator-submitted suggestion (board 18:09 CORRECTION): no push until the user answers. Boat validation (Jazz2 x4 + LF2/SC2K unchanged) still to run.
  note: 2026-10-10T17:45Z claude:1863d2b5 root cause found, not fixed, nothing committed. The server's 36 B + 2 B TCP join records reach the client in one pump; real stacks space them (Nagle + delayed ACK). Relay-gap diagnostic: 5/5 joins vs 1/5 stock. WAT Nagle pacing: fixed 200 ms hold -> Jazz2 4/4 but LF2 + SC2K Net regress (both pass on main under the same load); ACK-released hold -> Jazz2 2/4, LF2/SC2K still fail. Options put to the user: (1) per-app pacing flag for Jazz2 only, (2) faithful ACK/delayed-ACK timing model for every wire socket (bigger, riskier), (3) leave it (fails only under load; 3/3 on a quiet boat). Patch + evidence: scratch/runs/20261010T1640Z-jazz2-join-timing.
  owner: claude:1863d2b5 (38c329897 partial pacing on main; client-side cause next; assigned by orchestrator 2026-10-10T19:38Z)
  created: 2026-10-10T15:50:00.000Z
  Next: test-jazz2-vlan-gameplay is flaky regardless of the FD_READ and join fixes (1863d2b5 sweep 15:38; w4 saw 3/3 at 11:28 on another build). Find the race (client main thread spins while another thread reads the packets) and fix it; run the test several times on a boat.
  Done: jazz2 two-seat passes repeatedly; cause named; commit on main.
  Evidence: board 2026-10-10T15:38:14Z

- [ ] AoW2: CLI --screen=1024x768 drops the Start click
  id: AOW2-SCREEN-CLICK-DROP-20261010
  status: done (b6e18c196: input transform refreshed before mapping; Start at 1024x768 loads the world; reviewed by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; user-directed 2026-10-10T15:47Z)
  created: 2026-10-10T15:50:00.000Z
  Next: 2026-10-10T17:35Z claude:90024109. Pushed b6e18c196. Boat bx_2dc39nx3 e2e: --screen=1024x768 Single 371,99 -> guest 289,77, Start delivered at 896,697 after the mode switch, world loads (scratch/runs/20261010T1731Z-aow2-screen-click-drop, world.png reviewed). Build + 7 renderer/presentation tests pass on the new base. Needs orchestrator review. Earlier: Root cause: headless input mapping used the presentation transform computed only at repaint, and the CLI repaints lazily (png only), so --screen=1024x768 clicks reached AoW2's stretched 800x600 mode unscaled. Single missed, so there was no mode switch and Start was dropped. Fix written, uncommitted (worktree scratch/claude-w5-scr): renderer refreshInputPresentation via a side-effect-free _presentationStack/_presentationTransform split of _repaintOnce, called from _mapExclusiveInputPoint, opted into by run.js (lazyPresentation); browser unchanged. 14 renderer/input unit tests pass. BLOCKED on the e2e verify: the local memory reaper killed it twice; a boat was requested.
  Done: Start click works at --screen=1024x768; unit test; commit on main.
  Evidence: board 2026-10-10T10:00:22Z (w5)

- [ ] Clock-spin detector parks legit per-object GetTickCount loops (Darkstone host, D2)
  id: CLOCK-SPIN-PER-OBJECT-FALSE-POSITIVE-20261010
  status: done (a7e5f4f75 + 21d65184c: register-match check; Darkstone host in Town, D2 town parks 106->0, busy-waits still park; reviewed by orchestrator)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (tr3; claimed 17:09Z, confirmed by orchestrator)
  created: 2026-10-10T16:40:00.000Z
  Next: w4 measured Darkstone host per-object GetTickCount loop: parked at spin_work_max 64/32/16/8, released at 4 (5-8 blocks between reads). Same class as the D2 4fps->41fps false positive. Teach $clock_spin_step to tell a per-object read (work between reads, different call sites/objects) from a true busy-wait, with unit tests and an A/B on D2 + Darkstone.
  Done: Darkstone host enters Town and D2 keeps its fps with the detector on; busy-wait apps still parked; commit on main.
  Evidence: board 2026-10-10T16:02:09Z, 16:35:57Z (w4)

- [ ] Ops dashboard: already-sent pane input reappears in agent prompts
  id: OPS-DASHBOARD-DRAFT-REINJECT-20261010
  status: done (841a0036e ops/pane-input.js: the re-typer was the orchestrator pane scan reading Claude dim suggestions; accepted by orchestrator)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T17:55Z)
  created: 2026-10-10T17:35:00.000Z
  Next: User lines typed into worker panes from the dashboard come back into the prompt after the agent has handled them ('check the trace output' in %13 at least 6 times; 'take the next ready task' and 'check back when the run finishes' in %15, which w6 handled at 17:33 and then reappeared). Find which path re-types them (terminal-server draft restore, work-watchdog nudge, or the browser terminal resending) and fix it; unsubmitted drafts also often need Enter vs C-m. Unit test.
  Done: a sent line never reappears; test; commit on main.
  Evidence: orchestrator observations 2026-10-10 11:00-17:35Z

- [x] GL/D3D corpus goal: current status table of the 27-app target set (software + WebGL)
  id: GL-D3D-CORPUS-STATUS-20261010
  status: done (f85b81306: 90-app current-main table appended; MCM race on both backends; 2 rows filed; w4 finishing the 6-app split; accepted by orchestrator)
  owner: claude:1863d2b5 (assigned by orchestrator 2026-10-10T18:30Z)
  created: 2026-10-10T18:30:00.000Z
  Next: User goal (2026-09-22): every OpenGL/Direct3D app in the corpus works on both the software and WebGL backends. Run node tools/gfx-app-census.js --family=gl,d3drm,d3dim,d3d8,d3d9 --list on current main, then for each app record which renderer the route takes (--gl-census / trace), whether it reaches gameplay on software and on WebGL (existing reviewed evidence counts; cite run ids), and the first blocker. Short CLI probes locally only for small apps; heavy ones on boats. Output: docs/gl-d3d-corpus-status.md + one TODOS row per real blocker.
  Done: table committed; every app has a status and evidence or a blocker row.

- [ ] scr_fallingl: some leaves draw as solid black silhouettes on both D3DRM arms
  id: SCR-FALLINGL-BLACK-LEAVES-20261010
  status: done (b1eb6ac07: lit vertex alpha = material diffuse alpha; d3drm shadows translucent; cluster A/B; reviewed by orchestrator)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T19:38Z)
  created: 2026-10-10T19:15:00.000Z
  created-by: claude:1863d2b5 (GL-D3D-CORPUS-STATUS-20261010)
  Next: Same wrong picture on software and WebGL (runs 20261006T0250Z-scr_fallingl-w4-software / 20261006T0405Z-...-webgl), so the cause is upstream of the rasterizers: texture transparency / colour key or material state in the D3DRM path. Dump the leaf textures and the render state around a black-leaf draw (--dump-dx-surfaces, --trace-dx RState) and compare with a correctly drawn leaf. Notes: docs/re-notes/plus98-dx-screensavers.md.
  Done: leaves draw with their texture on both arms; reviewed captures; unit test for the state that was wrong.

- [x] test-headless-gl: resize assertion fails on llvmpipe ("right edge stale")
  id: HEADLESS-GL-RESIZE-STALE-20261010
  status: done (636e0c8b7: swap once after resize, test-headless-gl passes on a boat; accepted by orchestrator)
  owner: claude:1863d2b5 (finder; assigned by orchestrator 2026-10-10T19:15Z: test-headless-gl red on main)
  created: 2026-10-10T19:15:00.000Z
  created-by: claude:1863d2b5 (GL-D3D-CORPUS-STATUS-20261010)
  Next: On a boat with @node-3d/webgl (llvmpipe, Xorg :0) test/test-headless-gl.js fails "right edge stale: drawing buffer was not resized" (0 !== 255), with and without f85b81306 (control: scratch/runs/20261010T1850Z-gld3d-current-main-probes/logs/fix/ctl.log). Locally the test SKIPs (no native deps), so nothing gates it. Decide whether the headless canvas really keeps a stale drawing buffer after resize (a real --headless-gl bug: wrong right edge on mode switches) or the test's expectation is wrong for this binding.
  Done: test green on a headless-GL boat; fix or corrected expectation explained.

- [ ] GL/D3D split items 1-6 (w4 half of the GL-D3D-CORPUS-STATUS open list)
  id: GLD3D-W4-SPLIT-20261010
  status: done (pending review) 20:32Z -- descent3 WebGL IN-FLIGHT (runs/20261010T2030Z-descent3-webgl-flight-w4: yaw + laser, 4.07M GL calls, 664k draws); orchestrator moved tdr2000 -> w6, driver + cmr2 glyphs -> d10ba697
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; assigned by orchestrator 2026-10-10T19:15Z)
  created: 2026-10-10T19:40:00.000Z
  Next: 19:40Z (bx_847qythy, runs/20261010T1930Z-*-w4): WebGL GAMEPLAY avp_alien (in-game corridor), avp_marine, colin_mcrae (in-race); cmr2 WebGL BLOCKED by text glyphs drawn as solid blocks (software fine) + route drift; bg2 = DirectDraw under current registration (0 GL calls), GL path unverified; tdr2000 software BLOCKED on CLI "is loading" splash (both thread modes). Next boat: driver_demo Glide WebGL arm (item 4, not yet run), descent3 WebGL past pilot screen (1.8M-batch ctl route), cmr2 glyph-block diagnosis (suspect lib/d3dim-gpu.js:745 stage mapping drops TFACTOR/ALPHAREPLICATE args), tdr2000 loader stall.
  Done: each item has gameplay on the named arm or a named first blocker with evidence.

- [ ] Re-run the block-exec sweep CRASH apps on current main
  id: SWEEP-CRASH-REVISIT-20261010
  status: done (14/14 of the 2026-09-15 CRASH rows no longer crash on current main; ut2004 exits 0 at 3000 batches; accepted by orchestrator)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T18:30Z)
  created: 2026-10-10T18:30:00.000Z
  Next: docs/block-executor-design/sweep-2026-09-15.md lists 14 CRASH rows that crash with the executor off too (pre-existing). Re-run each on current main (its repro line, bounded --max-seconds, on a boat for heavy ones), classify fixed / same crash / new crash, and file one row per remaining crash with the crash line and first cause guess. No fixes required in this task.
  Done: table of the 14 with current status; rows filed.

- [ ] test-win16-hearts-vlan red on main (8 FAILs, never exits)
  id: HEARTS16-VLAN-TEST-RED-20261010
  status: done (41823445b: vlan-wire names DDE frames, test counts them, dealer-held 2C deadlock fixed; 5/5 runs 31/31 on a boat; accepted by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; assigned by orchestrator 2026-10-10T19:22Z)
  created: 2026-10-10T19:22:00.000Z
  Next: w5 saw test-win16-hearts-vlan fail on unpatched main (8 FAILs vs 1-2 earlier); w6 noted it never exits even when checks pass. Bisect to the first bad commit (today had many vlan/winsock/Win16 changes: FD_READ re-enable 4c36bf78f, GetMessage wake 4b26dd7f7, WM_NCCREATE 1d3f4c304, DialogBox foreground e82eaec16), fix the cause, and make the test exit. Two-process: boat.
  Done: hearts-vlan passes and exits on main; cause named; commit.
  Evidence: board 2026-10-10T19:16:41Z (w5), 18:31 (w6)

- [ ] CMR2 demo on WebGL: every menu text glyph renders as a solid grey block
  id: CMR2-WEBGL-GLYPH-BLOCKS-20261010
  status: done (8918a13de: EnumTextureFormats offers ARGB8888; text readable on software and WebGL; test fails on old handler; accepted by orchestrator)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T19:55Z)
  created: 2026-10-10T19:55:00.000Z
  Next: w4 runs/20261010T1930Z-cmr2-webgl-w4: on WebGL (--headless-gl --d3dim-gpu) every cmr2 menu glyph is a solid grey block; the software renderer draws text correctly; 157,709 GPU draws, 0 fallbacks. Likely a WebGL alpha/colour-key or texture-format path for the font texture. Find the draw state that differs from software, fix it, add a pixel test. GL/D3D goal.
  Done: cmr2 menus readable on WebGL; test; commit.
  Evidence: board 2026-10-10T19:38:19Z (w4)

- [ ] test-d3dim-viewport-lights fails to compile on main (WATX string pool 5648 > 5632)
  id: D3DIM-VIEWPORT-LIGHTS-STRINGPOOL-20261010
  status: done (3a88a27ec + 72e2f048e: 3 tests stop interning WAT strings, resource-aliases updated to the D3D8 handle contract; accepted by orchestrator)
  owner: claude:d44753dd (w6; finder; assigned by orchestrator 2026-10-10T20:12Z)
  created: 2026-10-10T20:12:00.000Z
  Next: the test injects extraWat whose strings overflow the 4 KB-ish WATX string pool (5648 > 5632); the pool cannot grow (shaken layout, see memory reference_watx_string_pool_limits). Shrink or move the test strings, or free pool space in main WAT, without changing behaviour.
  Done: test-d3dim-viewport-lights compiles and passes on main; commit.

- [x] Win16 WIN87EM: VB1 Int()/Fix() unrounded (BX=6 round of ST0 is a no-op)
  id: WIN87EM-INT-FIX-ROUNDING-20261010
  status: done (e05305962: BX=6 rounds ST0 by AX RC via $fpu_round_by + w5's unit test. The jigsawed-menus "stall" was route timing: correct Fix picks hint piece 4, whose glide outlasts the 1070 Solve click; the game ignores Solve mid-hint. Forced 3/6 work, forced 4 stalls; the route moved to 1150; all VB/WEP16 tests pass. Evidence scratch/runs/20261010T2040Z-win87em-round-jigsawed)
  owner: claude:1863d2b5 (assigned by orchestrator 2026-10-10T20:12Z)
  created: 2026-10-10T20:12:00.000Z
  Next: w5 found VBRUN100 implements Int()/Fix() via WIN87EM __fpmath BX=6 (round ST0 by AX&0x0C00) and our __fpmath is a no-op. Patch + unit test in scratch/runs/20261010T1915Z-win87em-fpmath-round, NOT landed because it regresses test-win16-jigsawed-menus (Solve-after-Hint stalls). Find why the correct rounding stalls JigSawed (likely another WIN87EM function or control-word handling it now exposes), fix both, land.
  Done: rounding fix on main and jigsawed-menus passes; commit.

- [~] Replace ShellExecuteEx A/W success stubs with real launch behavior
  id: SHELLEXECUTEEX-REAL-LAUNCH-20261010
  status: active (launch chain observed; child arguments empty; refined tests running)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Branch1274e1a9a refined full build/five regressions PASS at20:44:05Z. Original handoff launches child but loops to menu: CLI control receives args intact; browser child arguments and actual event acquisitions require diagnosis. Continue CROSS-PROCESS-NAMED-SYNC-20261010; collect refined test evidence and integrate only with honest remaining limits.
  Done: Correct requested launch semantics and tests, original game launcher handoff reviewed, fixes integrated to main.

- [ ] GL/D3D: Carmageddon TDR2000 demo stalls on its loader splash (software)
  id: TDR2000-LOADER-STALL-20261010
  status: done (6576860a1: not a hang, the loader needs a larger --batch-size; software arm races; route in re-notes; accepted by orchestrator)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T20:30Z)
  created: 2026-10-10T20:30:00.000Z
  Next: w4 runs/20261010T1930Z-tdr2000-software-w4: CLI stays on 'TDR 2000 Alpha Test Demo is loading. Please wait...' in both thread modes, mostly idle after a FindNextFileA/CS loop. Find what it waits for and fix it.
  Done: TDR2000 reaches its menu/race; commit.

- [ ] GL/D3D: Driver demo on WebGL (Glide path never run)
  id: DRIVER-GLIDE-WEBGL-20261010
  status: done (627264e4c: Driver Glide reaches gameplay on WebGL, input A/B vs game over; accepted by orchestrator)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T20:30Z)
  created: 2026-10-10T20:30:00.000Z
  Next: driver_demo renders via Glide; its WebGL arm was never run (1863d2b5 split item 4). Run it to gameplay on the WebGL path on a boat with Xorg, or name the first blocker.
  Done: Driver WebGL row in docs/gl-d3d-corpus-status.md has evidence; blocker rows filed.

- [ ] GL/D3D: complete software/WebGL gameplay pairs for rows that only prove menus
  id: GL-D3D-PAIRS-20261010
  status: done (all split rows have both arms or a blocker row; doc updated by 1863d2b5; accepted by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5) + claude:1863d2b5 (co-owner from 2026-10-10T20:45Z; 1863d2b5 posts the split and keeps the doc)
  created: 2026-10-10T20:30:00.000Z
  Next: docs/gl-d3d-corpus-status.md ranked blocker 4: several rows prove only menus/rendering, pairs incomplete. Pick rows that lack one arm (not Pirates/BGE/CMR3, which are Codex lanes), one app at a time, and run the missing arm to gameplay with reviewed frames, on boats. Post one evidence line per app for 1863d2b5 to fold into the doc.
  Done: each picked row has both arms with evidence or a blocker row.

- [x] --headless-gl presents D3D8 frames at the window origin, input maps to the client origin
  id: HEADLESS-GL-CLIENT-OFFSET-20261010
  status: done (e0016261c: GPU frame layers at the client origin; UT2003 clicks at drawn positions join DM-Antalus; accepted by orchestrator)
  owner: claude:1863d2b5 (finder; assigned by orchestrator 2026-10-10T21:25Z)
  created: 2026-10-10T21:25:00.000Z
  created-by: claude:1863d2b5 (GL-D3D-PAIRS ut2003/ut2004)
  Next: UT2003 and UT2004 on CLI --headless-gl draw the game frame at the window rect origin (20,20) over the caption, while input and the software arm use the client origin (24,44). Clicks must be offset (+4,+24) from what is drawn (scratch/runs/20261010T2050Z-ut-family-both-arms: i2003-gpu_a7-hover vs i2003-sw_a2). Find where the GPU present blits (window rect vs client rect) in the headless D3D9 bridge; check whether the browser page has the same offset.
  Done: GPU-arm frame aligns with the client origin; a test asserting the presented rectangle; UT2003 route clicks at the drawn positions.

- [ ] UT2004 software arm: menu clicks land late and ~40 px off, so Instant Action stalls before a match
  id: UT2004-SW-MENU-INPUT-20261010
  status: done (fc0d7bf10: control-server step timeout re-arms while progressing; UT2004 software reaches DM-Rankin, Up walks; accepted by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; assigned by orchestrator 2026-10-10T21:25Z)
  created: 2026-10-10T21:25:00.000Z
  created-by: claude:1863d2b5 (GL-D3D-PAIRS ut2004)
  Next: On --d3d9-renderer=software (frozen control session, batch-size 200000), UT2004's DirectInput-relative cursor ends ~40 px above the absolute target, and hover/clicks register hundreds of batches late (the route's sync (24,44)->(300,300)->target opened Settings). Keyboard Down works in the game-type list; Up and Enter did not reliably. The GPU arm follows the documented route. Compare the DI relative deltas delivered on the two arms (slow software presents change how many DI polls happen between moves), then reach DM-Rankin on software. Evidence scratch/runs/20261010T2050Z-ut-family-both-arms (i2004-sw_*).
  Done: UT2004 software spawn with control on current main, reviewed frames.

- [ ] Unreal-family --app launches crash on a fresh candidate fetch
  id: UNREAL-APP-FRESH-FETCH-20261010
  status: duplicate (of UT2004-FRESH-FETCH-MANIFEST-20261010, filed by the orchestrator a minute earlier; w5 owns that one and covers ut2003/unreal special there)
  owner: unowned (filed by claude:90024109 w5)
  created: 2026-10-10T22:52:00.000Z
  Next: tools/fetch-candidate-corpus.js writes .wine-assembly-browser.json at the candidate ROOT (urls 'installed/...', exe omitted), but lib/apps.js unreal_special / ut2003_demo / ut2004_demo read installed/.wine-assembly-browser.json (since 441a459d2), so a fresh fetch gives --app no file list; the exe then mounts at C:\<exe> with cwd C:\ and UT2004 throws at batch 14 (MiniDumpWriteDump). Existing boats only worked from older hand-prepared trees. Fix: point those entries at the candidate-root manifest (and check the CLI/browser place the exe under c:\system with cwd c:\system, as tools/install-unreal-demo.js's boot form does: --vfs-tree --cwd=c:\system), then verify each on a FRESH fetch boat.
  Done: --app=ut2004_demo (and ut2003_demo, unreal special) boot to the main menu on a fresh-fetch boat; commit.
  Evidence: scratch/runs/20261010T2240Z-ut2004-sw-menu-input-w5 (result.json side finding); board 2026-10-10T22:38:57Z

- [~] Share named synchronization objects between emulated processes
  id: CROSS-PROCESS-NAMED-SYNC-20261010
  status: active (browser tests pass; original IW still loops to menu; acquisition diagnostic running)
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Run886471 finished21:08:50Z, browser errors empty; reviewed final screenshot is second DX2 menu, original exits -1. Shared events visible but handoff still fails. Diagnostic891873 finished21:15:14Z: launcher opens both existing events, error0 and clients2. Broad trace893891 terminal21:20:15Z missed timed route (inconclusive). Isolated launcher control895608 terminal21:21:21Z reaches RegisterClassExA then EnumDisplayMonitors, restarts before CreateWindowExA. Producer decoded: monitor field is empty, dummy is THIRD field. D3D8 GetAdapterMonitor returns NULL, making GetMonitorInfoA fail. Candidate repairs adapter0 handle in D3D8/9; real-WAT negative control failed as expected. Full build +4 tests PASS21:26:56Z. Fix c271af214 and test8f1d3f980 pushed on codex/bge-corpus-20261010 only. Original899039 terminal21:35:07Z: correct monitor args and launcher window now work, then repeated FindWindowA at4027ba until parent exits-1. Next desktop-wide lookup (local WAT table cannot find child-process launcher). No gameplay qualification. Source pre-open path correctly sets183, so suspected CreateEvent source bug ruled out. CLI child transport remains missing; branch0ee85820c not integrated.
  Done: Cross-process create/open/set/reset/wait/close tests and original launcher handoff pass, source reviewed and integrated.

- [ ] ctl png in frozen mode is black on the WebGL Glide path
  id: CTL-FROZEN-PNG-GLIDE-WEBGL-20261010
  status: done (not a bug: Driver rebuilds palette tables for ~75k batches after Escape; docs corrected f1d3bb05b; accepted by orchestrator)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claimed 2026-10-10T21:16Z)
  owner:
  created: 2026-10-10T21:08:00.000Z
  Next: driver_demo --headless-gl --control: after 'ctl frozen on' + 'ctl step N', every 'ctl png' is the same all-black 2061-byte PNG, while unfrozen pngs show the scene (scratch/runs/20261010T2200Z-driver_demo-glide-webgl-d10ba697/11-frozen-mode-png-black.png vs 01-08). Likely the frozen step repaint does not read back the Glide WebGL canvas (lib/glide-backend.js). Boat with Xorg needed (headless GL). Found by claude:d10ba697 on DRIVER-GLIDE-WEBGL.
  Done: frozen ctl png on --headless-gl Glide shows the same frame an unfrozen png would; a test covers it.

- [ ] Registry-wide launch/crash sweep on current main
  id: REGISTRY-CRASH-SWEEP-20261010
  status: done (67594f1bc: 280 ids, 264 OK, 14 FIXED, 2 no fixture, 0 new crashes; tools/registry-crash-sweep.js; accepted by orchestrator)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T21:20Z)
  created: 2026-10-10T21:20:00.000Z
  Next: Today landed many emulator changes (WM_NCCREATE, FD_READ, GetMessage wake, clock-spin regs check, ARGB8888 enum, WIN87EM rounding, lit alpha, DirectPlay shared state). Run a bounded launch check of every lib/apps.js app on current main on a boat (e.g. tools/block-exec-sweep.js --control off-arm only, or run.js --app=ID --max-seconds=N with crash detection), classify crash / hang / ok, and file one row per new crash with the crash line and the likely commit.
  Done: sweep table committed under scratch/runs + rows for each new crash.

- [ ] New game: qualify one unregistered candidate from the corpus
  id: NEW-GAME-CLAUDE-W6-20261010
  status: done (serious_sam_demo 4cbde5326 + f6c58213a; gameplay reviewed by orchestrator 05:35Z: v4-074k-afterW.png Karnak courtyard, health 95)
  owner: claude:d44753dd (w6; assigned by orchestrator 2026-10-10T21:40Z)
  created: 2026-10-10T21:40:00.000Z
  Progress: 027c12a54 (DLL static TLS slot + template; Engine.dll read MSVCRT's slot 0) and c7c234629 (--fault-null=reserved: SEH for MEM_RESERVE'd uncommitted misses, so CTStream commits stream pages; registry flag reservedPageFaults) on main. Then ce3aeaad5 + 32b9526ec: the nested SEH run kept neither $ip nor the $cur_page_* registers, so zlib inflate_fast ran from the live stack through the thunk zone (the batch-1798/2804 crashes); b672cf4b0 censuses lost reserved accesses. Boat run scratch/runs/20261010T2330Z-serious-sam-boat-w6 (reviewed): splash -> first-run Information box -> Enter -> "Cannot set display mode" (no headless GL). Open: default winmm timer thread + WAT modal MessageBox => main registers byte-rotated, crash at b5025 (--no-mm-timer-thread stable). Decode: every crash register = (reg>>8)|(next_reg<<24) in REGFILE order incl. ESP (ESP 0x88074ffe = 0x074ffe60, the MessageBox-call ESP, >>8 | EBP_lo 0x88<<24), i.e. main's register file read/copied one byte off; $reg_base is only set in init_thread (tid*64, aligned) and Engine imports no Get/SetThreadContext, so look for an off-by-one regfile copy on the modal/timer-thread path (needs a boat probe). 2026-10-11: bc110628c (OPENGL32.DLL system-file stub; SearchPathA before LoadLibrary) + 8ed49c3dc (glGetTexLevelParameteriv/fv) => --headless-gl renders and keyboard-navigates MAIN MENU -> SINGLE PLAYER -> NEW GAME (scratch/runs/20261011T0005Z-serious-sam-gl-w6, reviewed; --no-mm-timer-thread; timer-thread bug is d10ba697's SAM-MMTIMER-MODAL-REGFILE). Blocker now: NEW GAME/NORMAL -> console "Cannot start game: Chunk ID validation failed. Expected ID "BRAR" but found """, back to the menu; reserved-access census empty. Lead: VirtualAlloc/VirtualFree bookkeeping for adjacent reservations (GRO streams reserve/release at 0x08d00000 right after the live .wld window 0x084f0000+0x810000) or a committed-but-unloaded page. Then gameplay A/B, register (lib/apps.js + ops/corpus-categories.js, reservedPageFaults: true, mmTimerThread per d10ba697's fix).
  Next (original): Pick a candidate from the candidate corpus (tools/fetch-candidate-corpus.js list / scratch new-games-pipeline notes) that is not in lib/apps.js and not claimed by Codex (its NEW-GAME-* rows: Conan, CMR3, Dungeon Lords, BGE). Prefer shareware/demos. Register it (lib/apps.js + ops/corpus-categories.js same commit), route to gameplay, reviewed frames + input A/B. Post the pick on the board first.
  Done: registered, gameplay evidence reviewed, commit on main.

- [~] Find real windows across emulated processes for launcher handoff
  id: CROSS-PROCESS-FINDWINDOW-IW-20261010
  status: active
  owner: codex:01a0ff91-cf9d-7f42-ba93-f9e7616b35a5
  Next: Original IW monitor-fixed run899039 creates Ion Launcher window then spins FindWindowA(class/title pointer904728), caller4027ba, until120s timeout. Current find_window_core scans local WAT tables. Implement shared desktop lookup respecting parent/after/class/title semantics and cross-process HWND lifetime, then two-process tests and original gameplay route. Evidence runs/20261010T2128Z-deusex-iw-monitor-fix.
  Done: Existing window is found across processes without fabricated handles; local/foreign filters and destruction tests pass; actual launcher handoff advances.

- [ ] UT2003 demo server: default CLI run spawns 200+ threads and dies of TLS OOM
  id: UT2003-SERVER-DEFAULT-CLI-OOM-20261010
  status: done (83b83ed2d + 2866ab706: per-app d3d9WithoutGpu software; server reaches DM-Antalus with 7 threads, client 0 errors; accepted by orchestrator)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; finder; assigned by orchestrator 2026-10-10T22:12Z)
  created: 2026-10-10T22:12:00.000Z
  Next: runs/20261010T2140Z-ut2003-server-sw-w4: without --d3d9-renderer=software the CLI spams 'D3D9 requires a GPU window', spawns 200+ threads and dies 'Unable to allocate thread TLS vector'. 22:20Z (w4) CAUSE: test/run.js defaults ctx.d3d9Backend to 'webgl' even without --headless-gl, so every CreateDevice throws; the game retries with a new thread (1 MB alloc each) until heap OOM. A global software default was REJECTED: it regresses test-generally-candidate (941 vs 5495 changed px), which relies on the no-GPU CreateDevice failure to take GeneRally's own fallback. Current draft (scratch/claude-w4-wt, uncommitted): per-app lib/apps.js `d3d9WithoutGpu: 'software'` read by run.js only without --headless-gl, set on ut2003_demo_server; GeneRally passes again (7821 px). Next: boat run of ut2003_demo_server default CLI (+ check ut2003_demo) then commit (REQUESTED 22:13Z). Either the default should pick the software renderer on the CLI or the failure path must not leak threads; fix the cause.
  Done: default CLI run reaches gameplay or fails cleanly; commit.

- [x] Arcanum on WebGL (CLI): in-game menu Continue click not taken; first world frame green
  id: ARCANUM-WEBGL-CONTINUE-20261010
  status: done (not an emulator bug: Continue was clicked while the world loaded; documented timeline reaches WebGL free roam + walk; accepted by orchestrator)
  owner: claude:1863d2b5 (assigned by orchestrator 2026-10-10T22:12Z)
  created: 2026-10-10T22:12:00.000Z
  Next: w4 runs/20261010T2140Z-arcanum-webgl-w4: menus/char pick/intro OK on the D3DIM GPU arm, first world frame green with 2 tiles, Continue click on the in-game menu not taken. Possibly the client-origin input issue fixed in e0016261c (check first), else find the cause.
  Done: Arcanum free roam on WebGL CLI with reviewed frames; commit if a fix.

- [ ] MW3 Instant Action: pilot/enemy names render as odd glyphs
  id: MW3-INSTANT-ACTION-GLYPHS-20261010
  status: done (e027a9ca8: FormatMessage Arguments is a va_list* unless ARGUMENT_ARRAY; names correct; accepted by orchestrator)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T22:12Z)
  created: 2026-10-10T22:12:00.000Z
  Next: noted during the mw3 FPS run (scratch/runs/20261010T2215Z-mw3-game-fps-boat-d10ba697). Same family as the cmr2 glyph-block bug? Find the font path and fix.
  Done: names readable; test; commit.

- [ ] --app=ut2004_demo broken on a fresh fetch (manifest path + exe mount)
  id: UT2004-FRESH-FETCH-MANIFEST-20261010
  status: done (eb349d0a7 + bfcf5b3f3: Unreal entries read the root manifest, exe/cwd c:\\system, DLLs beside exeGuestPath; fresh fetch reaches the menu; accepted by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; finder; assigned by orchestrator 2026-10-10T22:50Z)
  created: 2026-10-10T22:50:00.000Z
  Next: fetch-candidate-corpus writes .wine-assembly-browser.json at the candidate root ('installed/...' urls) but lib/apps.js ut2004_demo reads installed/.wine-assembly-browser.json; the exe mounts at C:\ut2004.exe with cwd C:\ -> C++ throw at batch 14 + MiniDumpWriteDump crash. The installer tool's boot form (--vfs-tree --cwd=c:\system --dll-seed) works. Make --app=ut2004_demo work from a fresh fetch (and check the other Unreal-family entries).
  Done: fresh fetch + --app=ut2004_demo reaches the menu on a boat; commit.

- [ ] UT2003 demo from a fresh fetch asserts in the OpenGL renderer (fetched INI selects OpenGLDrv)
  id: UT2003-FRESH-FETCH-OPENGL-INI-20261010
  status: done (5fa84bdae: installer keeps Setup D3DDrv; ut2003 + ut2004 fresh fetch reach the menu; accepted by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; finder; assigned by orchestrator 2026-10-10T23:38Z)
  created: 2026-10-10T23:35:00.000Z
  Cause (static, 23:37Z): tools/install-unreal-demo.js configureLocalRenderer() rewrites the authentic Setup's RenderDevice=D3DDrv.D3DRenderDevice to OpenGLDrv in ut2003.ini/default.ini (UT2004 too). Fix: keep D3DDrv; verify on a boat.
  Next: after eb349d0a7, fresh fetch + --app=ut2003_demo (software arm) boots and loads files, then IDC_CrashBox 'Assertion failed: hRC [OpenGLRenderDevice.cpp] (Line: 539)' from UWindowsViewport::TryRenderDevice (6 C++ throws; scratch/runs/20261010T2335Z-ut2004-fresh-fetch-app-w5/c2003-menu-3500.png). The fetched installed/system/ut2003.ini and default.ini have RenderDevice=OpenGLDrv.OpenGLRenderDevice, and -d3d does not override it. Decide whether to seed a D3D RenderDevice INI (as earlier hand-made trees did) or make the OpenGL path get an hRC on the software arm. Read docs/re-notes/unreal-family-demos.md first. Boat (fresh fetch ~1 GB).
  Done: fresh fetch + --app=ut2003_demo reaches the main menu without a crash box.

- [x] test-control-stdin-cli fails on main: child exit does not reject every pending control request
  id: CONTROL-STDIN-CHILD-EXIT-TEST-20261010
  status: done (4eab17277: control-session names each unanswered request on child exit again; 8/8 pass; accepted by orchestrator)
  owner: claude:1863d2b5 (assigned by orchestrator 2026-10-10T22:50Z)
  created: 2026-10-10T22:50:00.000Z
  Next: w5 found test-control-stdin-cli.js 'child exit rejects every pending control request' failing on unpatched main (pre-existing, 2026-10-10 22:38). Find whether the test or lib/control-server.js / run.js is wrong and fix; mind w5's fc0d7bf10 step-timeout change.
  Done: test passes on main; commit.

- [ ] test-pawn-directinput7-gameplay fails on main: white pieces missing (0 px)
  id: PAWN-DI7-TEST-RED-20261010
  status: done (ac248bd08: frame-layer offset measured against the composite window origin; Pawn passes both arms on a boat; accepted by orchestrator)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; finder; assigned by orchestrator 2026-10-10T22:55Z)
  created: 2026-10-10T22:55:00.000Z
  Next: on a boat, with and without 83b83ed2d, test-pawn-directinput7-gameplay reports 'white pieces are missing (0 px)'. Bisect (today's D3D changes: ARGB8888 enum 8918a13de, lit alpha b1eb6ac07, ps_1_4 03923630e/65e5905e8, create-time VM compile eaf7d0316, client-origin e0016261c are suspects) and fix the cause. w4 23:10Z: software arm passes locally (8756 white px) -> WebGL-only. Cause (static): e0016261c _frameLayerOffset = clientRect(absolute) - win.x/y (parent-relative for children) shifted Pawn's static-child GPU layer ~(354,142) out of the client. FIX ac248bd08 (measure from _windowOriginForComposite; unit case in test-gpu-layer-client-origin). Remaining: confirm PAWN_BACKEND=webgl test-pawn-directinput7-gameplay on a boat (API down; request queued).
  Done: test passes on main; commit.

- [x] test-winamp-visualizers: 6 FAILs (vis_w / vis_avs worker-thread load) on main
  id: WINAMP-VIS-TEST-RED-20261010
  status: done (9d6684329: worker trace contexts use translateGuest; plug-ins were fine; test passes; accepted by orchestrator)
  owner: claude:1863d2b5 (assigned by orchestrator 2026-10-10T22:57Z)
  created: 2026-10-10T22:55:00.000Z
  Next: w4 saw 6 FAILs with and without its change on a boat (2026-10-10 22:49). Bisect and fix; vis plugins load in a worker thread.
  Done: test passes on main; commit.

- [ ] B&W2 software D3D9: cut the per-frame draw cost (intro/world ~620 draws/frame, ~0.15 fps)
  id: BW2-DRAW-COST-20261011
  status: done (514b36f38 texld 4-channel sample + per-packet cache; boat A/B 779d6fbdb vs 514b36f38 in-world 1100-1500 s: draws/min and presents/min +44.5%, 0 failed; runs/20261011T0510Z-bw2-texld4-ab-boat; accepted by orchestrator 05:52Z)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (tr3; orchestrator decision 2026-10-11T03:3xZ, option 2 before any long intro boat)
  created: 2026-10-11T03:35:00.000Z
  Next: Profile an in-world/intro frame on the software D3D9 path: what the ~620 draws are (primitive counts, textures, shaders, coverage) and where the render worker spends ~11 ms per draw. Then cut the dominant cost and measure before/after in-world. The render worker is CPU-bound since be5a7234f (99.9%), so the win must be raster/setup work per draw, not scheduling. Evidence so far: runs/20261011T0212Z-bw2-gold-scroll-camera-boat (~91 draws/s, ~620 draws/frame).
  Done: B&W2 intro/world frame rate measurably higher on software D3D9 (before/after on one boat), merged to main; then GAMEPLAY-black_white_2_demo (a) resumes.
  Progress 2026-10-11T03:49Z (tr3): plan ready (scratchpad bw2-prof.sh). A 1700 s run under NODE_OPTIONS=--cpu-prof (worker threads inherit it; render workers are created without execArgv), analyzed boat-side with tools/wasm-phase-profile.js --window=1100000:1700000 --funcs over the render worker's profile. No frame-capture route exists (resident textures go by key), so it profiles in place. BLOCKED on a BOAT (requested 03:45Z, ~45 min).
  Progress 2026-10-11T04:29Z (tr3): PROFILED on bx_du7bbmn3 (runs/20261011T0358Z-bw2-draw-cost-profile-boat). The render worker is 94% busy in-world (1100-1700 s). Self time: $d3d_software_step 20.7%, $d3d_shader_vm_sample_face_lod 19.5%, $d3d_shader_vm_component 14.3%, log2 5.1%, heap_free/heap_alloc 6.2%, texel 4.7%, run 4.1%, JS command copy 2.2%. Main is 91% idle. CAUSE: a texld packet called the scalar sampler once per component per lane, so a quad paid 16 filtered fetches, 16 mip/level decodes and 4 quad-LOD computations.
  Progress 2026-10-11T04:43Z (tr3): COMMIT 514b36f38 (main, ls-remote verified, full build green). New 4-channel v128 texel4/sample4/sample_lod4 twins, plus a packet-keyed cache in $d3d_shader_vm_component: each lane is sampled once and the packet's other component calls read the transposed result. The context grows 74108 -> 74176 bytes; cube sampling is unchanged.
  - Bit-exact differential in test-d3d-shader-vm against the scalar sampler, at the VM's own quad LOD. It fails when the per-execution key clear is removed.
  - Local bench-raster, base -> fix, 2 interleaved reps: point 70.9 -> 46.6 ms (-34%), bilinear 88.5 -> 51.3 ms (-42%), trilinear 89.5 -> 51.4 ms (-43%).
  - Native disasm (SM 158.0b4 Ion + V8 15.7.57 TurboFan, x86-64): TurboFan inlines every callee of sample4 and sample_lod4; Ion texel4 uses one divps for RGBA.
  - Tests pass: shader-vm/vs20/call/record-budget/address/loop/temp-span, software backend/pipeline/mips/slices/bridge/worker, ps14 linkage + ps14-web + shader-web, fixed-cascade, large-draw.
  - test-d3d-software-compaction and test-d3d9-software-cli also fail on unmodified f54d8df3d; they predate this change.
  - Evidence: runs/20261011T0440Z-bw2-texld4-cache-local.
  DONE (pending review) 2026-10-11T05:36Z (tr3): in-world A/B on bx_s2cdex2f (runs/20261011T0510Z-bw2-texld4-ab-boat). Base 779d6fbdb vs fix 514b36f38 ran in parallel with the same inputs; six one-minute intervals each over 1100-1500 s:
  - draws/min 2950 (2724-3421) -> 4262 (4020-4705), +44.5%;
  - presents/min 245.6 (227-285) -> 354.8 (335-392), +44.5%;
  - draws/present 12.0 in both arms (same scene);
  - render worker 99.8% CPU in both; 0 failed commands.
  Caveat: this is a light scene, like the yield A/B; the ~620-draw intro frames were not separately timed.
  Follow-up for a new row: on the render worker heap_free_impl is 4.9% self. Every free scans up to 64 free-list or bin entries for a double free, with a $heap_arena_find and a g2w per step (src/10-helpers.wat). That is a shared-allocator change, so it needs its own A/B.

- [ ] B&W2 software D3D9: main thread parked ~90% on the render worker (world ~0.1 fps)
  id: BW2-SOFTWARE-RENDER-PARK-UTILIZATION-20261010
  status: done (be5a7234f: setImmediate/MessageChannel yield; in-world draws and presents/min +32.7%, worker CPU 76.8% -> 99.9%; accepted by orchestrator)
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (tr3; finder; assigned by orchestrator 2026-10-10T23:20Z)
  created: 2026-10-10T23:20:00.000Z
  Next: runs/20261010T2235Z-bw2-gold-scroll-camera-boat: world presents ~0.1 fps (~670 draws/frame); run.js 'render park: main waited on 6901 software D3D requests (1912453 ms wall)', ~277 ms/wait; process uses 40-70% of one core, no spin parks: main and the render worker serialize. Measure which requests park main and the worker busy/idle split, then pipeline (let main run ahead where the API allows). Perf work: benchmark before/after on the same boat, V8+SM disasm per the standing rule if WAT changes.
  Done: B&W2 world >= several fps on software, or a measured explanation; then GAMEPLAY-black_white_2_demo (a) resumes.
  Progress 2026-10-10T23:23Z (tr3): static. Main parks (yield 16) whenever lib/d3d9-host.js returns a pending token. DRAW/CLEAR defer up to maxDeferred=32 in flight but stop deferring once queue.bytes > capacityBytes/4 (_deferrable; the B&W2 8 MB-texture watermark), and Present is pipelined one deep. Unchanged textures go by resident key (seq + fingerprint). Prepared (scratchpad bw2-rp.sh + rp/hook.js, sample.js, patch.js): one boat run that at about 1100 s in the world counts parks by opcode and fence reason, plus top -H per-thread CPU, then live-patches the watermark to 3/4 and the cap to 128 for an in-run before/after on presents+draws/min. BLOCKED on a BOAT (requested 23:19Z).
  Progress 2026-10-11T00:15Z (tr3): bx_6dv457ty run crashed at about 826 s, before the hook (run 20261010T2339Z-bw2-render-park-boat), with the same registers as the 2102Z code-overwrite crash. DIAGNOSED: bw2demo 0x65b880 (vector<16B>::reserve) stores operator new(count<<4) without a NULL check, and 0x65b380 writes buffer+i*16. The buffer was NULL (EDX = ECX*16, i = 0x65b3a), so the game wrote from guest 0 upward until it overwrote its own code. Only with the planted 640x480 profile (2/4 vs 0/3). NEXT boat, two arms: (A) default profile + the render-park hook/patch (this row); (B) 640x480 + --fault-null, with the full run.log kept, to see whether our heap refused the allocation ('[heap] OOM') or the guest's own allocator did.
  Progress 2026-10-11T01:07Z (tr3): bx_p5nv9jat run 20261011T0030Z-bw2-render-park-ab-boat. (B) 640x480 + --fault-null=stop: 1100 s clean, 0 faults, 0 OOM (crash still intermittent, 2/5). (A) MEASURED: main parks on DRAWS when the 32-draw in-flight window is full (~130 parks/min = ~58 s/min). The render WorkerThread is only 40.6% CPU (top -H), main 2.4%. Raising the cap to 128 killed the worker ('render worker exited'). CAUSE: d3d9-software-backend drawAsync reschedules every ~4 ms slice, and each draw's first, with setTimeout(cb,0) (>=1 ms Node, 4 ms clamped in browsers). FIX ready (worktree scratch/claude-rpfix-wt, uncommitted): yieldTask = setImmediate/MessageChannel for drawAsync's default and both render workers. Local microbench 7.3-7.5 -> 4.8-5.2 ms/draw (1.45x); unit + web tests pass. NEXT: in-world base-vs-fix A/B on one boat (scratchpad bw2-yield-ab.sh, bw2-setup14.sh, rp/yield.patch), then commit/push. BOAT requested 01:03Z.
  DONE (pending review) 2026-10-11T01:56Z (tr3): COMMIT be5a7234f (main, ls-remote verified, full build green). A/B on bx_n7xe6cpt (run 20261011T0127Z-bw2-render-yield-ab-boat), base 924d12fe5 vs fix, in parallel with the same inputs, B&W2 1100-1500 s, six one-minute samples each:
  - draws/min 2771 (2714-2834) -> 3678 (3637-3735), +32.7%;
  - presents/min 230.7 -> 306.2, +32.7%;
  - render WorkerThread CPU 76.8% -> 99.9%; main 5.6% -> 6.6%;
  - 0 failed commands in both.
  The worker is now CPU-bound. Caveat: that window ran about 12 draws/present (a lighter scene than the ~670-draw intro frames). Local microbench 7.3-7.5 -> 4.8-5.2 ms/draw. Tests: software-backend (new yieldTask check fails on old code), render worker/park/large-draw/setup-async, shared-render-worker/ps14/shader web.

- [x] Pre-existing test failures batch 2 (main)
  id: PREEXISTING-TEST-FAILS-2-20261010
  status: done (36d170ed8 + earlier: all three pass on main; reviewed by w4; accepted by orchestrator)
  owner: claude:1863d2b5 (assigned by orchestrator 2026-10-10T23:20Z)
  created: 2026-10-10T23:20:00.000Z
  Next: failing on unpatched main per today's workers: test-renderer-multi-app-modal (takeInput null; w4), test-debug-dropdown-manifests (mw3 vfsPath TypeError; w5), test-app-selector-options (LOCAL_CANDIDATE_APPS missing options; w5). One cause per commit.
  Done: all three pass on main.

- [ ] New games: source and qualify new Win9x shareware/demo titles (not yet in the corpus)
  id: NEW-GAME-SOURCE-20261010
  status: done (quake3_demo 2bef70a62 (w4) + re_volt_demo b46601e50/57d8f7de5 (1863d2b5), both localOnly with quoted licence text; gameplay reviewed by orchestrator)
  owner: claude:1863d2b5 + claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4) (assigned by orchestrator 2026-10-10T23:35Z)
  created: 2026-10-10T23:35:00.000Z
  Next: The candidate corpus is exhausted except Serious Sam (w6). Each worker: pick ONE freely redistributable Win95/98 shareware or demo game (archive.org etc.) not in lib/apps.js, not in Codex's NEW-GAME rows (Conan, CMR3, Dungeon Lords, BGE), post the pick + source URL + license basis on the board first (no overlap between the two of you). Download/install ON A BOAT only (ops box disk ~1 GB), add it to the candidate corpus with tools/fetch-candidate-corpus conventions, register (lib/apps.js + ops/corpus-categories.js same commit), route to gameplay, reviewed frames + input A/B. Prefer titles likely to stress new areas (GL/D3D, networking).
  Done: one new game each registered with reviewed gameplay evidence; commit on main.
  1863d2b5 00:56Z DONE (pending review): re_volt_demo (Re-Volt demo) registered localOnly (legal screen forbids redistribution; quoted in manifest) -- b46601e50 real IDirectPlayLobby3 RegisterApplication (was E_NOTIMPL, fatal to the game) + 57d8f7de5 registration (apps.js, corpus-categories, index.html, re-notes). Reviewed race: runs/20261011T0038Z-re_volt_demo-race-claude1863 (Toys in the Hood 1, Up drives the buggy 5->20 mph, race timer 02:04). Not done: audio, WebGL arm, browser; open rainbow edge-speckle on software D3DIM; headless route ~16 min.
  w4 01:22Z QUAKE3-LAN-20261011 DONE (pending review): 7d00757b2 (test 5/5 + run.js --vlan-pump-every; runs/20261011T0120Z-quake3-vlan-w4), 924d12fe5 (53 icons + manifest). Remaining red: test-app-icon-assets on baldurs_gate_interactive_demo.png -- BG demo ISO source now HTTP 403. Earlier note: test/test-quake3-vlan-gameplay.js drafted (uncommitted, scratch/claude-w4-wt; listen server +map q3dm1 / client +connect, software GL, checks getchallenge stops + both-way stream + client lit frame). Icon manifest regenerated locally (52 missing PNGs, manifest +66 lines) but --check still needs BGDemo.exe and quake3.exe, which this box lacks (disk 853 MB free; BG interactive demo is an archive.org ISO) -- fetch on the boat and copy the two exes back. Boat REQUESTED 00:12Z.
  w4 00:10Z DONE (pending review): quake3_demo, 2bef70a62 -- EULA read in installer (local candidate), gameplay with move/turn/fire on WebGL + software GL; runs/20261011T0005Z-quake3_demo-gameplay-w4. Not done: LAN two-seat, browser.

- [ ] TODOS hygiene: sync stale ready duplicates of done/review/parked rows
  id: TODOS-STALE-DUPLICATES-20261010
  status: done (5 stale duplicates synced, sync-dups.js re-runnable; accepted by orchestrator)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T23:32Z)
  created: 2026-10-10T23:38:00.000Z
  Next: d10ba697 (23:29) found 'ready' copies of GAMEPLAY-wep16_tutstomb, GAMEPLAY-generally, NFS3-RENDERER-BENCH, OPS-GAME-FPS-BASELINE etc. that duplicate done/review/parked/in-progress rows and mislead the watchdog. Mark each duplicate with the primary row's status (under the lock, never delete rows); post the list.
  Done: no ready row duplicates a non-ready primary.

- [ ] Serious Sam: with the winmm timer thread, main registers go byte-rotated inside the WAT modal MessageBox
  id: SAM-MMTIMER-MODAL-REGFILE-20261010
  status: done (429e97fbc + spill fixes; timer-ON gameplay verified by w6 on bx_y86nfpv4; accepted 05:35Z)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-10T23:55Z)
  created: 2026-10-10T23:55:00.000Z
  Next: w6 runs/20261010T2330Z-serious-sam-boat-w6: ~3000 batches into the WAT modal MessageBox the main thread's registers come back byte-rotated (ESP 0x88074ffe = 0x074ffe60>>8 | EBP_lo<<24, i.e. read at reg_base+1) and it crashes (b5025); --no-mm-timer-thread is stable. A regfile read/write at a misaligned base while the mm-timer callback runs nested in the modal pump. Find and fix; coordinate with w6 (owns the game).
  Done: Serious Sam survives the modal with the default timer thread; unit test; commit.

- [ ] Quake III demo: two-seat LAN match + stale app-icon manifest
  id: QUAKE3-LAN-20261011
  status: done (924d12fe5 + 7d00757b2: test-quake3-vlan-gameplay 5/5 on q3dm1, --vlan-pump-every; 53 icons + manifest; accepted by orchestrator)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; assigned by orchestrator 2026-10-11T00:12Z)
  created: 2026-10-11T00:12:00.000Z
  Next: quake3_demo registered (2bef70a62) with single-player gameplay on both GL arms. Run a two-seat vlan match (UDP; host + client join, both see each other) on a boat, add a heavy test like the other vlan games. Also regenerate lib/app-icon-manifest.json (test-app-icon-assets reports STALE on main).
  Done: Q3 LAN works or a named blocker row; icon test passes; commits on main.

- [ ] Unreal special edition demo: fetch source URL is dead (archive.org 7z 404)
  id: UNREAL-SPECIAL-DEMO-SOURCE-20261011
  status: done (d6ce142e9: renamed file + fetch falls back to the item servers from /metadata, SHA-1 gate kept; fresh fetch reaches the intro; accepted by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; finder; assigned by orchestrator 2026-10-11T00:28Z)
  created: 2026-10-11T00:28:00.000Z
  Next: fetch-candidate-corpus URL for unreal_special_demo returns HTTP 404 (w5, 2026-10-10 23:33). Find a working official/archive mirror of the same demo (same file hashes if a SHA is pinned, else record the new SHA with provenance), update the fetch entry, verify --app reaches gameplay from a fresh fetch on a boat.
  Done: fresh fetch works; commit.

- [ ] Re-Volt demo on software D3DIM: rainbow speckle on textured edges
  id: REVOLT-SW-EDGE-SPECKLE-20261011
  status: done (58f9d1aad: GDI honours 16bpp DirectDraw surface formats (1555/555/4444); Re-Volt colours correct on both arms; reviewed by orchestrator)
  owner: claude:1863d2b5 (finder; assigned by orchestrator 2026-10-11T01:03Z)
  created: 2026-10-11T01:03:00.000Z
  Next: noted in scratch/runs/20261011T0038Z-re_volt_demo-race-claude1863: rainbow speckle on textured edges on the software D3DIM rasterizer (WebGL arm unchecked). Compare with WebGL, find the sampler/edge cause, fix with a pixel test.
  Done: speckle gone on software; WebGL arm checked; commit.
  1863d2b5 02:40Z DONE (pending review): 58f9d1aad - GDI on 16bpp DirectDraw surfaces was hard-wired to RGB565 ($gdi_dx_dc_bind host masks + $gdi_raster_channel_mask); Re-Volt's A1R5G5B5 texture pages filled via GetDC+StretchBlt got 565 texels decoded as 1555 on BOTH arms. Now per-surface layout ($gdi_dx_channel_mask), host GdiSurface rebuilt on mask change, run.js --trace-dx CreateSurface decoder fixed/extended, new test-directdraw-gdi-16bpp-layout (fails on main, passes). Evidence runs/20261011T0150Z-re_volt_demo-edge-speckle-claude1863: before/after sw+WebGL race/menu/track-select vs the game's BMPs. Not mip aliasing (mips still unimplemented on both arms, separate). One concurrent-run WebGL b312 frame kept old colours; not reproduced solo.
  1863d2b5 01:46Z BLOCKED on a fresh boat (re-requested 01:43Z; bx_fvu3dps9 had a faulty node/host and was stopped). Evidence so far: software vs WebGL menu frames pixel-identical incl. logo fringes (not a sampler bug); zoomed race frame = smooth wrong-hued texels, so the lead is now a shared 16-bit texel-format mismatch, not mip aliasing. Next on boat: decode the game's own levels/nhood1 BMP page holding the manhole and compare colours; CreateSurface pixel formats via the extended run.js DDSD decoder (uncommitted, scratch/claude-rv2-wt).
  1863d2b5 01:10Z BLOCKED on boat (requested 01:00Z). Local reading: neither D3DIM arm mip-maps - software span sampler ($viewport_draw_textured_span / $d3dim_texture_sample_prepared, 09ab) always samples level 0 and ignores the stored mip-filter stage state (type 18); the GPU arm sets sampler mip:0 (lib/d3dim-gpu.js:640). Chains exist ($dx_create_mip_chain links level N+1 via DxObject.misc0). Hypothesis: minification aliasing, so WebGL likely shows it too. Boat to confirm: Re-Volt's DDSCAPS_MIPMAP/MIPFILTER use + same-frame WebGL capture. Planned fix if confirmed: per-triangle LOD (texel/screen area ratio) choosing the misc0 level, honouring MIPFILTER, on both arms + pixel test.

- [ ] Serious Sam: 'Chunk ID validation failed. Expected ID BRAR' when starting a level
  id: SAM-BRAR-CHUNK-VALIDATION-20261011
  status: done (5529ce4aa + 13da5a055 + f6c58213a; level loads and plays with timer ON; accepted 05:35Z)
  owner: claude:d44753dd (w6; 5529ce4aa + 13da5a055 landed; level-load verify with --no-mm-timer-thread in progress)
  created: 2026-10-11T01:05:00.000Z
  Next: w6 runs/20261011T0005Z-serious-sam-gl-w6: New Game -> NORMAL fails 'Chunk ID validation failed. Expected ID BRAR but found ""' and returns to the menu. w6's lead: VirtualAlloc/VirtualFree bookkeeping for adjacent reservations (GRO streams reserve/release at 0x08d00000 right after the live .wld window 0x084f0000+0x810000) or a committed-but-unloaded page. Static first, then a boat; coordinate with w6.
  Done: Serious Sam loads a level; unit test for the VirtualAlloc case; commit.

- [ ] test-virtual-reserve-gap fails on main: 'the placed range commits'
  id: VIRTUAL-RESERVE-GAP-TEST-RED-20261011
  status: done (beb684d3d: test boots at bigMemory 16384 pages after the 29fbfecb0 pool cut; accepted by orchestrator)
  owner:
  created: 2026-10-11T01:31:00.000Z
  Next: Fails identically on origin/main 7d00757b2 and on 924d12fe5 (base of w6/decommit-unmaps), so not caused by that branch. AssertionError 'the placed range commits' (actual 0). Bisect to the first bad commit and fix; found by claude:d10ba697 while reviewing SAM-BRAR.
  Done: test-virtual-reserve-gap passes on main; cause named in the commit.

- [ ] Baldur's Gate interactive demo: candidate source archive.org BG Demo.iso returns 403
  id: BG1-DEMO-SOURCE-20261011
  status: done (d9708d802: Silver Edition demo CD source, 15 case-mapped copies, BGDemo.exe hash = pinned, fresh fetch reaches the menu; accepted by orchestrator)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; finder; assigned by orchestrator 2026-10-11T01:38Z)
  created: 2026-10-11T01:38:00.000Z
  Next: archive.org/download/bg-demo/BG Demo.iso now HTTP 403, so BGDemo.exe is on no box and test-app-icon-assets stays red for baldurs_gate_interactive_demo. Find a working source (same item's servers via /metadata like d6ce142e9, or another mirror with the same hash), fix the fetch entry, verify on a boat. (BG1 interactive demo only; BG2 is Codex's lane.) w4 01:43Z: bg-demo item is DARK (is_dark, 0 files; item servers also 403) -> /metadata fallback impossible. Replacement: item 20230723_20230723_0858 'Forgotten Realms Archives - Silver Edition (USA) (Baldur's Gate Demo).zip' (518 MB, sha1 df6c2f77..., Redump raw .bin+.cue). Manifest entry rewritten by hand (zip + extractRawMode1Cd into cd/, existing steps under cd/), uncommitted in scratch/claude-w4-wt. Next: boat fetch, check BGDemo.exe sha256 ed7f1efd... (and old ISO sha1 3796defc...), fix dir-name case, icon test, commit. Boat REQUESTED 01:38Z. 02:30Z (bx_put6e78e): fresh fetch from the Silver Edition zip WORKS (needs `unshield` on the boat: sudo apt-get install unshield); BGDEMO.EXE sha256 == pinned ed7f1efd (same 1.0.0 demo); icon byte-identical to tracked PNG; ISO stream differs (9bbd56ce vs 3796defc, different dump). Launch failed on 15 files: disc is uppercase ISO9660 (CD1/DATA/*.BIF, CD1/MOVIES, OVERRIDE/*.BMP) vs registry mixed case -> replaced the CD1/OVERRIDE copyTree steps with 15 explicit copyFile steps. Worktree removed for the disk emergency; full change saved as scratchpad bg1-manifest.patch (apply to a fresh worktree). Next: boat to verify fresh fetch + launch, then commit + add baldurs_gate_interactive_demo back to lib/app-icon-manifest.json (regen with BGDemo.exe present). Boat REQUESTED 02:28Z.
  Done: fresh fetch works; icon test passes; commit.

- [ ] Tests crash on object-form files entries (path.basename / endsWith TypeError)
  id: TEST-FILES-OBJECT-ENTRIES-20261011
  status: done (960180ba5 + aeedc00f0 + d80eab24d: tests read size-stamped entries; Unreal Special menu labels fixed via detached LoadMenu alias; accepted by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; finder; assigned by orchestrator 2026-10-11T01:38Z)
  created: 2026-10-11T01:38:00.000Z
  Next: test-far-manager-candidate (farApp.files entries are objects: path.basename TypeError) and test-debug-game-apps (jazz2_demo.files entries not strings: file.endsWith) fail on main. Make the tests (or a shared helper) accept {url, vfsPath, size} entries like the registry now uses; check other tests for the same pattern. Also look at Unreal Special showing raw ID_FileMenu/ID_ViewMenu menu labels (separate commit or row).
  Done: both tests pass; commit.

- [ ] Serious Sam timer-on: 512 KB nested-run spill slot fills (trap 0xCA00F11F) in inflate_fast
  id: SAM-SPILL-SLOT-FULL-20261011
  status: done (2026-10-11 03:31Z: 26aba0e61 spill recycle + d81e4b7e8 depth-0 desk + 212959d8d SEH-walk $ip. w6 verified on bx_k3mmfns4: timer-ON runs 250000 batches with no 0xCA00F11F (was trap+crash at b1865, then b5395). Evidence runs/20261011T0300Z-serious-sam-timeron2-w6. The LOADING ENTITIES 0% stall is a separate entity-stream bug, w6's. Optional follow-up: recycle could drop only spill-resident pages)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-11T01:55Z)
  created: 2026-10-11T01:55:00.000Z
  Next: w6 boat bx_atwt5mhq (runs/20261011T0120Z-serious-sam-timeron-w6): with the timer thread on, 429e97fbc's guard traps at batch 1865 in inflate_fast (EIP 0x67105e): thread_alloc=THREAD_END, sync_msg_depth=1, spill_active=1, the 512 KB spill slot filled inside the nested fault-filter run. The guard works; now size or recycle the spill (e.g. reset the spill when it fills, since nothing outside the nested run references spill decodes, or grow THREAD_SPILL), with a unit test.
  Done: Serious Sam with the timer thread on gets past batch 1865 without the trap; commit.

- [ ] test-d3dim-viewer-open-web fails on main: Renderer->Wireframe never sets the menu check
  id: D3DIM-VIEWER-OPEN-WEB-RED-20261011
  status: done (720079df9; accepted by orchestrator 05:10Z, web test passes coop + threads after 779d6fbdb)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-11T02:12Z)
  created: 2026-10-11T01:56:00.000Z
  Next: filed for claude:laptop-ops (board 2026-10-11T01:44:42Z): fails on main f613866fb in headless Chrome, cooperative mode: Open dialog + file pick pass, then Renderer->Wireframe click (clickGuest 110,51 then 150,132) never sets menu_child_flags(viewer,2,3)&4 within 30 s (test line 230). Not from the PR merge (same on bfcf5b3f3); other three D3DIM smokes pass. First confirm on a boat with real binaries (static-server 403s out-of-root symlinks), then root-cause.
  Done: test passes on main; commit.

- [ ] Pre-existing test failures batch 3 (main)
  id: PREEXISTING-TEST-FAILS-3-20261011
  status: done (ab329477b fd04ed8e6 52f9c1f51 ed330822f 8290cf946 225fbfc32: five pass; real fixes for a deploy leak and resource-menu MF_SEPARATOR; accepted by orchestrator)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; assigned by orchestrator 2026-10-11T02:12Z)
  created: 2026-10-11T02:12:00.000Z
  Next: failing on unpatched main per workers 2026-10-11: test-mspaint-magnifier-menu, test-notepad-file-menu, test-wordpad-toolbar-color-menu (w5); test-deploy-simcity2000-demo-assets ('deploy ships local-only Croc2 manifest'; w5); test-vbdd-surface-blt ('640 !== 37'; 1863d2b5). One cause per commit; mind today's menu changes (aeedc00f0) and the DDraw GDI 16bpp work in flight (1863d2b5).
  Done: all pass on main.

- [ ] MSPaint drawing/selection/dialog tests fail on main
  id: MSPAINT-DRAWING-TESTS-RED-20261011
  status: done-partial (5/8 pass on main e7b9a5477; remaining 3 in MSPAINT-REMAINING-3-20261011; accepted by orchestrator 03:44Z)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; finder; assigned by orchestrator 2026-10-11T02:42Z)
  created: 2026-10-11T02:50:00.000Z
  Next: found by w5 while verifying 225fbfc32; all eight fail identically on unpatched main (baseline build of d80eab24d + PREEXISTING-TEST-FAILS-3 commits minus the menu change): test-mspaint-attributes ('no active title bar, 0 caption pixels'), test-mspaint-berrry-video ('document did not fill the maximized work area, 0 white px'), test-mspaint-clipboard ('source line was drawn: 1 dark px'), test-mspaint-file-roundtrip ('New cleared the saved drawing: 1 px changed'), test-mspaint-image-edit ('Invert Colors 47362/47760'), test-mspaint-opaque-selection ('transparent selection erased its red target'), test-mspaint-selection-move ('0 red destination pixels'), test-mspaint-tools ('rectangle drew its boundary: 1 px'). Common theme: Paint draws almost nothing on its canvas (1 px lines/rects). Bisect from a known-green commit; local CLI.
  Done: the eight pass on main; one cause per commit.

- [ ] MSPaint: three tests still red after MSPAINT-DRAWING-TESTS-RED (opaque-selection, berrry-video, clipboard)
  id: MSPAINT-REMAINING-3-20261011
  status: done (64fdf6993 dc3503c39 b76f55681 4608642ee 03692d7af; all 3 pass, 100-test input sample no regressions; accepted by orchestrator 05:35Z)
  Result: five causes, one commit each. 64fdf6993 run.js resumed a parked GetMessage only in checkMainYield() after run() -> scripted input ran a batch late (opaque-selection; not a 7065931da hunk, that commit only exposed it). dc3503c39 berrry size-handle press 1px off after ef2f968c7's faithful client-edge change. b76f55681 combo dropdown popup answered WM_MOUSEACTIVATE with activate (since 8c36d476a's mouse-activation query) -> MFC frame deactivation closed the font-size list. 4608642ee ShowWindow posted WM_SIZE on every show (3c2cd7e96/441a459d2) -> Paint text box hide/show loop (real bug, not needed for the test). 03692d7af CF_DIB rendered for the OLE clipboard object lacked GlobalAlloc provenance (GlobalLock strict since bf45d4a68) -> Paste error; test's CountClipboardFormats==1 was stale since 92929dbb7. Regression: 87-test input sample identical fail set (run.js), 100-test sample no new failures (WAT), 21 clipboard tests pass. Seen, not investigated: Fonts palette client ~10px tall (combos clipped); crown lower band unfilled in berrry.
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; assigned by orchestrator 2026-10-11T03:44Z)
  owner:
  created: 2026-10-11T03:45:00.000Z
  Next: bisect results from w5 (local CLI, bisect helper: build + one test). (1) test-mspaint-opaque-selection: good f06762d4f/ef2f968c7, first bad 7065931da (2026-09-07 "Fix Alpha Centauri gameplay and cooperative workers", a mixed commit: filtered-PeekMessage skipped-event re-post, MSG.time tails, loop-match fold, SetEvent preemption). Symptom on main: a scripted click at batch N is first dispatched in batch N+1, beside batch N+1's press; GetMessage (hardware before posted) then delivers Paint's tool-button PostMessage'd toolbox WM_LBUTTONUP after the canvas press, and the toolbox's SetCapture/ReleaseCapture steals the selection drag (trace: --trace-input-dispatch --trace-api=PostMessageA,SetCapture,ReleaseCapture). Before 7065931da the click was handled in batch N. Revert hunks of 7065931da one at a time to find which adds the batch of latency. (2) test-mspaint-berrry-video ('document did not fill the maximized work area, 0 white px'): good f06762d4f (08-20), bad ef2f968c7~1; culprit is one of 14 consecutive unbuildable commits f3340995d..e4ab4d385 (likeliest a06eda3f3 "Keep never-painted window surfaces out of the desktop"); test that candidate on top of a buildable neighbour. (3) test-mspaint-clipboard ('Paste restored the selected line 0 dark px', 'CF_DIB remained available'): already red at f06762d4f (08-20) - find an older green commit first (test last changed 147cbbc10, 08-14).
  Done: the three pass on main; one cause per commit.

- [ ] D3D viewer threads mode: 3D viewport presented over the modal Open dialog
  id: D3DIM-VIEWER-THREADS-DIALOG-OCCLUDED-20261011
  status: done (779d6fbdb; accepted by orchestrator 05:10Z: occl-web.log PASS cooperative + threads)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (self-claimed; own find)
  owner:
  created: 2026-10-11T02:40:00.000Z
  Next: test-d3dim-viewer-open-web.js threads mode (Worker guest, GPU WebGL, headless Chrome on boat bx_z7hscjyp): the Open dialog's back canvas is correct (buttonFace 31557, listWhiteRatio 0.98) but only 4% of it matches the presented screen; screenshot shows the viewer's D3D viewport drawn over the dialog's client area. Cooperative mode is fine. Suspects: GPU frame-layer compositing order vs GDI child/popup windows in the Worker route (ac248bd08, e0016261c). Evidence: scratch/runs/20261011T0215Z-d3dim-viewer-open-sorted-list-d10ba697/boat-threads-open-dialog.png.
  Done: threads mode of test-d3dim-viewer-open-web.js passes on a boat; commit.

- [ ] New games round 2: source and qualify one more new Win9x demo
  id: NEW-GAME-SOURCE-2-20261011
  status: done (midtown_madness_trial 60da73854 + eb6720ac5, localOnly; EULA allows non-commercial redistribution, deploy is the user's call; gameplay reviewed by orchestrator 03:44Z: 06-driving-checkpoint1.png race HUD, place 6/6, check 1/10, minimap, textured city)
  owner: claude:1863d2b5 (assigned by orchestrator 2026-10-11T02:42Z)
  created: 2026-10-11T02:42:00.000Z
  Next: same rules as NEW-GAME-SOURCE-20261010: one Win95/98 demo/shareware not in the corpus/registry, not Codex lanes, licence read and recorded (localOnly unless redistributable), post the pick first, boat only (ops disk tight), register (apps.js + corpus-categories + index.html option), reviewed gameplay + input A/B.
  Done: registered with reviewed gameplay; commit.
  1863d2b5 03:40Z DONE (pending review): pick switched Powerslide -> Midtown Madness Trial (Powerslide's bundled licence is a confidential-evaluation notice; MM's Microsoft trial EULA allows non-commercial redistribution). 60da73854 emulator fixes (D3D EnumDevices Windows names; DIPROP_AXISMODE absolute mice; CreateDevice unknown GUID -> DIERR_DEVICENOTREG; Acquire without SetCooperativeLevel) + eb6720ac5 registration (localOnly pending deployment decision). Reviewed race: runs/20261011T0300Z-midtown_madness_trial-race-claude1863 (mouse throttle, checkpoint 1, crash damage). Not done: audio, WebGL arm, browser.
  1863d2b5 02:43Z BLOCKED on a boat (requested 02:40Z); nothing fetched locally (boats-only rule).
  1863d2b5 02:45Z PICK posted: Powerslide demo (archive.org PowerslideDemo, sha1 e8ed56d5...); boat requested.

- [ ] test-directinput-device-com red on main + ops-box icon fixture links
  id: DI-DEVICE-COM-TEST-RED-20261011
  status: done (0f32a660f + 4615bfac9; accepted by orchestrator 03:44Z)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; assigned by orchestrator 2026-10-11T03:28Z)
  created: 2026-10-11T03:28:00.000Z
  Next: (1) test-directinput-device-com fails on main ('IDirectInputDevice7A without a Device7 tail returns E_NOINTERFACE'; seen by 1863d2b5 on d81e4b7e8): find whether the test or QueryInterface is wrong and fix. (2) test-app-icon-assets is red only on the ops box: BG1 fixture is a dangling symlink to a laptop path and re_volt_demo has no local exe; make the test skip/handle localOnly candidates without a local exe (or fix the link) so the ops box is green.
  Done: both green on main and on the ops box; commit.

- title: New game source 3: one more Win95/98 demo/shareware
  id: NEW-GAME-SOURCE-3-20261011
  status: done (monster_truck_madness2_trial registered localOnly 16668e502/8de759fae/63c537ffc + f54d8df3d dialog WM_CREATE, 058a8d830 LoadLibrary missing dep, e51182ad3/ad1b472f5/815765e64 DISPDIB; EULA permits non-commercial redistribution, deploy is the user's call; gameplay reviewed by orchestrator 06:12Z: 04-race-driving-b3150.png in-cab race, gear 2, place 4/4)
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (launch-ux; assigned by orchestrator 2026-10-11T03:44Z)
  created: 2026-10-11T03:44:00.000Z
  Next: same rules as NEW-GAME-SOURCE-2-20261011 (not in corpus/registry, not Codex lanes: Return Fire, Alice, BG2, Dungeon Lords/BGE, Conan, CMR3, JezzBall, Deus Ex, Pirates; not Heroes II). Licence read and recorded, localOnly unless redistributable, post the pick first, boat only, register (apps.js + corpus-categories + index.html), reviewed gameplay frames in scratch/runs.
  Done: registered with reviewed gameplay; commit.
  2026-10-11 claude:1863d2b5 DONE: Monster Truck Madness 2 Trial registered localOnly (8de759fae); plays in software (DISPDIB mode 13h ad1b472f5, return codes e51182ad3), shell palette fixed (16668e502 GetObject palette count), LoadLibrary missing-dependency 058a8d830, dialog WM_CREATE f54d8df3d. Reviewed gameplay: scratch/runs/20261011T0625Z-monster_truck_madness2_trial-gameplay-claude1863. Open: Before You Begin device-name static blank.
  2026-10-11 claude:1863d2b5: MTM2 race renders in software (DISPDIB mode 13h, ad1b472f5; return codes e51182ad3; LoadLibrary missing-dependency 058a8d830; dialog WM_CREATE f54d8df3d). Open: truck does not respond to controls - no input API polled in the race, empty control device in Before You Begin (docs/re-notes/monster-truck-madness2-trial.md). Evidence scratch/runs/20261011T0535Z-monster_truck_madness2_trial-dispdib-race-claude1863. Not registered yet.
  1863d2b5 04:33Z ROOT CAUSE FIXED + MERGED f54d8df3d: our CreateDialog CBT path skipped WM_CREATE to the subclassed dialog, so MFC CFormView::OnCreate->AddView never ran (document with no views -> IsKindOf(NULL)). MTM2 now reaches its shell UI and race loading. Re-notes 1441fed03. NEXT BLOCKERS (not started): (1) software renderer needs Win98's system 'DisplayDibWindow' class (DDM_SETFMT/DRAW/BEGIN/END/CLOSE) - 'Unable to start DisplayDIB Mode'; (2) Options>Graphics probes Trirend.dll whose redline.dll is missing - LoadLibrary should fail (ERROR_MOD_NOT_FOUND) instead of binding fail-fast stubs (crash VL_OpenVerite). Registration patch (rebased) kept in runs/20261011T0400Z-monster_truck_madness2_trial-startup-claude1863/registration.patch; not committed until gameplay.
  1863d2b5 04:04Z BLOCKED: MTM2 trial licence OK (Microsoft trial EULA, non-commercial redistribution) but the game crashes at startup after its 256-colour warning: MFC CObject::IsKindOf on NULL (0x5d7a12 from 0x545080) because the CDocTemplate at app+0xc0 has no open document after the second MDI child (0x1000b + CFormView 0x1000c) is created. Ruled out: WM_MDICREATE context, MFC CBT hook subclassing, window destruction. Evidence + uncommitted registration patch: scratch/runs/20261011T0400Z-monster_truck_madness2_trial-startup-claude1863. Nothing committed. Options: keep digging (MFC doc-template open path) on a new boat, or switch pick.
  1863d2b5 03:44Z PICK posted: Monster Truck Madness 2 Trial (archive.org MonsterTruckMadness2_1020, MtM2trial.zip sha1 d12c783a...); boat requested.

- title: New game source 4: one more Win95/98 demo/shareware (GL/D3D preferred)
  id: NEW-GAME-SOURCE-4-20261011
  status: done (forsaken_demo 9cd96bd61 + D3DIM EB cache fix d2d3a79d1, localOnly; gameplay reviewed by orchestrator 04:50Z: ingame-fire.png Volcano room, pulsar fire, full HUD)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; assigned by orchestrator 2026-10-11T03:56Z)
  created: 2026-10-11T03:56:00.000Z
  Next: same rules as NEW-GAME-SOURCE-3-20261011; prefer a Direct3D/OpenGL title (GL/D3D corpus goal). Not Monster Truck Madness 2 (1863d2b5), not Codex lanes (Return Fire, Alice, BG2, Dungeon Lords/BGE, Conan, CMR3, JezzBall, Deus Ex, Pirates), not Heroes II. Licence recorded, localOnly unless redistributable, post pick first, boat only, register + reviewed gameplay frames.
  Done: registered with reviewed gameplay; commit.

- title: New game source 5: one more Win95/98 demo/shareware (GL/D3D preferred)
  id: NEW-GAME-SOURCE-5-20261011
  status: done (rollcage_demo f2075e99d + bcafd5b34 + spawnVfsChild DLL-seed inheritance, localOnly; gameplay reviewed by orchestrator 07:15Z: race-lap1-349kph.png)
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; assigned by orchestrator 2026-10-11T04:50Z)
  created: 2026-10-11T04:50:00.000Z
  Next: same rules as NEW-GAME-SOURCE-4-20261011. Candidates checked unregistered by 1863d2b5: Outwars, Starlancer demo (archive.org sldemo), Rollcage demo. Not MTM2, Forsaken, Codex lanes or Heroes II. Post pick first, REQUEST BOAT.
  Done: registered with reviewed gameplay; commit.

- title: New game source 6: one more Win95/98 demo/shareware (GL/D3D preferred)
  id: NEW-GAME-SOURCE-6-20261011
  status: in_progress (02ba950a8 MessageBoxExA + starlancer_demo registered localOnly; reaches D3D7 menus, briefing, loadout hangar. Next: launch input + in-flight frame; boat bx_c9fvka8b 07:25Z)
  owner: claude:d10ba697-f69c-4855-aeff-e6a61b6e2735 (assigned by orchestrator 2026-10-11T05:10Z)
  created: 2026-10-11T05:10:00.000Z
  Next: same rules as NEW-GAME-SOURCE-4-20261011. Candidates: Outwars, Starlancer demo (archive.org sldemo). Not Rollcage (w5), MTM2 (1863d2b5), Forsaken, Codex lanes or Heroes II. Post pick first, REQUEST BOAT.
  Done: registered with reviewed gameplay; commit.

- title: GL/D3D corpus matrix refresh: both backends, file per-app failures
  id: GFX-CORPUS-MATRIX-20261011
  status: done (818bf1ab3 matrix, 41 apps x 2 backends, no regressions; 3 rows filed; accepted by orchestrator 06:40Z)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; assigned by orchestrator 2026-10-11T05:35Z)
  created: 2026-10-11T05:35:00.000Z
  Next: on a boat, node tools/gfx-app-census.js --family=gl,d3drm,d3dim,d3d8,d3d9 --list against current lib/apps.js (incl. today: quake3, re_volt, midtown, forsaken, serious_sam); run each through software and WebGL/headless-GL routes at a short fixed budget; record reached-scene + frame per backend in scratch/runs. File one ready row per distinct failure (skip Codex lanes, Heroes II). Then take the top one.
  Done: matrix table committed to docs (or re-notes) + rows filed.
  Result 06:15Z: 41 apps x 2 arms on main 4cbde5326 (bx_az67mx8t, 35 s each, runs/20261011T0600Z-gfx-corpus-matrix-w4); section appended to docs/gl-d3d-corpus-status.md. No regressions vs 10-10; 3 rows filed below; taking FORSAKEN-HEAP-EXHAUSTION-20261011.

- title: Forsaken demo: unattended run exhausts the guest heap and dies at CreateThread (TLS vector)
  id: FORSAKEN-HEAP-EXHAUSTION-20261011
  status: done (84d87de7a DirectSoundBuffer final Release frees sample copy; accepted by orchestrator 06:40Z)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4)
  created: 2026-10-11T06:15:00.000Z
  created-by: claude:65967384 (GFX-CORPUS-MATRIX-20261011)
  Next: test/run.js --app=forsaken_demo (default batch size, no input, 35 s) on both arms: repeated [heap] OOM from malloc at 0x4dadc6 (callers 0x42c37e <- 0x42c81e <- 0x49dc8a ...; 0.03-1 MB requests, 'sparse arena: reserved range could not be committed'), threads created up to handle 0xe1018, then 'Error: Unable to allocate thread TLS vector' (lib/thread-manager.js spawnPending). w5's routed command (--batch-size=200000, 700 batches) runs clean, so it grows with guest time / attract loops. Find what is allocated and never freed (guest leak that Windows tolerates, or ours: execute buffers, surfaces, thread stacks of exited threads), fix the cause. Logs: runs/20261011T0600Z-gfx-corpus-matrix-w4/logs/gxm2-forsaken_demo-*.log.
  Done: an unattended 2-minute run on both arms neither OOMs nor crashes; cause named; test; commit.

- title: quake3_demo fixture is not reproducible: fetch-candidate-corpus yields only Q3ADemo.exe
  id: QUAKE3-FIXTURE-INSTALL-STEP-20261011
  status: done (d3024f583 tools/install-quake3-demo.js + installQuake3Demo fetcher step, verified on fresh boat bx_uxfp3qgp; accepted by orchestrator 07:25Z)
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (w6; assigned by orchestrator 2026-10-11T06:40Z)
  owner:
  created: 2026-10-11T06:15:00.000Z
  created-by: claude:65967384 (GFX-CORPUS-MATRIX-20261011)
  Next: the registry mounts test/binaries/candidates/quake-3-arena-demo-installer/installed/ (quake3.exe + demoq3/pak0.pk3 ...), which w4 produced by running the Installer VISE setup inside the emulator (scratchpad q3-install.js: frozen control session, Next/Yes/Next/Next at (452,393), ~55k batches at --batch-size=10000, export the c:\q3ademo VFS tree). The candidate manifest has only the package download, so a fresh box (boat) gets no installed tree, and the ops box copy has since lost everything but quake3.exe. Add a reproducible install step (fetcher step that runs the installer route, or a pinned extraction of the VISE archive), restore the fixture, rerun quake3 on both arms.
  Done: node tools/fetch-candidate-corpus.js --id=quake-3-arena-demo-installer on a clean box produces the installed tree; quake3_demo reaches its menu on both arms.

- title: D3DRM screensavers scr_scifi / scr_oasaver show a uniform frame for minutes on the default CLI clock
  id: D3DRM-SCR-DEFAULT-CLOCK-UNIFORM-20261011
  status: done (0fd7bcddf: cause is the CLI batch clock, not an emulator fault; probe/docs set the clock with a reason; accepted by orchestrator 07:15Z)
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; assigned by orchestrator 2026-10-11T06:40Z)
  owner:
  created: 2026-10-11T06:15:00.000Z
  created-by: claude:65967384 (GFX-CORPUS-MATRIX-20261011)
  Next: with the default 200 ms/batch guest clock both savers capture a uniform 2,060-byte frame at 100k/200k/400k batches (120 s, 2.9M batches; guest-ms 80M at b400k) on software and GPU; with --tick-ms-per-batch=2 --dx-surfaces (the 10-06 flags) scr_scifi renders (237,900-byte frame). scr_architec is white until >20k batches and then renders. Decide whether the savers legitimately stall on a clock that runs ~40x faster than their work (time-based scene transitions), or whether a timer/time API misbehaves at large guest time; fix or document the required clock. Evidence: runs/20261011T0600Z-gfx-corpus-matrix-w4/series, gxm5 logs.
  Done: cause named; either fixed (renders on the default clock) or the probe/docs set the needed clock with a reason.

- title: New game source 7: Outwars (or another Win95/98 demo)
  id: NEW-GAME-SOURCE-7-20261011
  status: done (outwars_trial dcbdf0521 + 36dfe2bb3 DirectDraw per-interface refcounts; Sam no-console 7bd6737ab; gameplay reviewed by orchestrator 06:40Z: owapp-70500-afterUp.png in-level with full HUD)
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (w6; assigned by orchestrator 2026-10-11T05:35Z)
  created: 2026-10-11T05:35:00.000Z
  Next: first, on the boat, confirm Sam movement works WITHOUT the console inp_iKeyboardReadingMethod override (default hook 3 path) and fix re-notes. Then same rules as NEW-GAME-SOURCE-4: Outwars (Microsoft 1998 D3D) preferred; not Starlancer (d10ba697), Rollcage (w5), MTM2, Codex lanes, Heroes II. Post pick first.
  Done: registered with reviewed gameplay; commit.

- title: New game source 8: one more Win95/98 demo/shareware (GL/D3D preferred)
  id: NEW-GAME-SOURCE-8-20261011
  status: done (heretic2_demo 274f69e21 + 00001ebc6, localOnly never-deployed (Activision personal-use EULA), is5-extract tool; gameplay reviewed by orchestrator 06:50Z: 04-turned-hall-gl.png)
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (launch-ux; assigned by orchestrator 2026-10-11T06:12Z)
  created: 2026-10-11T06:12:00.000Z
  Next: same rules as NEW-GAME-SOURCE-4-20261011; your own pick, grep apps.js/corpus/TODOS/board first. Not Starlancer (d10ba697), Rollcage (w5), Outwars (w6), MTM2, Forsaken, Codex lanes, Heroes II. Post pick first, REQUEST BOAT.
  Done: registered with reviewed gameplay; commit.
  2026-10-11 claude:1863d2b5 DONE: Heretic II demo registered localOnly (274f69e21; OpenGL via opengl32, wallClock for its time bomb, new tools/is5-extract.js + is5Extract fetch step). Reviewed gameplay: scratch/runs/20261011T0645Z-heretic2_demo-gameplay-claude1863. Re-notes docs/re-notes/heretic2-demo.md. Browser not checked.

- title: New game source 9: Hellbender trial (or another Win95/98 demo)
  id: NEW-GAME-SOURCE-9-20261011
  status: done (hellbender_trial 0b50d6ea1 + 109162075, localOnly; gameplay reviewed by orchestrator 07:10Z: 05-banked-left-turn.png cockpit flight. Open: Quick Configuration magenta corners/undrawn art)
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (launch-ux; assigned by orchestrator 2026-10-11T06:50Z)
  created: 2026-10-11T06:50:00.000Z
  Next: same rules as NEW-GAME-SOURCE-4-20261011; Hellbender trial (Microsoft 1996 D3D) was your fallback pick. Not Starlancer/Rollcage/Outwars/MTM2/Forsaken/Heretic II/Codex lanes/Heroes II. Post pick first; reuse bx_hfdsjp8c if alive, else REQUEST BOAT.
  Done: registered with reviewed gameplay; commit.
  2026-10-11 claude:1863d2b5 DONE: Hellbender trial registered localOnly (0b50d6ea1), plays in software (cockpit flight, steering). Reviewed gameplay: scratch/runs/20261011T0715Z-hellbender_trial-gameplay-claude1863. Re-notes docs/re-notes/hellbender-trial.md (open: Quick Configuration dialog art/magenta, idle repaint flood). Browser and D3D not checked.

- title: ACM MS-ADPCM + IMA-ADPCM decode so QMixer/Outwars audio plays and TR3 finds MS-ADPCM
  id: ACM-ADPCM-DECODE-20261011
  status: done (dc7e8454d codecs + streams + test-acm-adpcm; 237db7412 re-notes; review requested) -- Outwars (boat bx_3jdbp4vt, main 8373af6cd): no ACM box, mission reached, QMixer opens/converts ADPCM streams into DirectSound (18 converts, 3 Play, ~20k Lock to the menu), first decoded block is real signal (RMS 21388). TR3 finds + opens MS-ADPCM; no stream use seen on the passport route. Evidence scratch/runs/20261011T0740Z-outwars-acm-adpcm-w4.
  owner: claude:65967384-f1a3-4c67-9257-ecc5f4c71983 (w4; assigned by orchestrator 2026-10-11T07:15Z)
  created: 2026-10-11T07:15:00.000Z
  created-by: claude:d44753dd (w6 suggestion 06:33Z, filed by orchestrator)
  Next: acmDriverEnum lists MS-ADPCM (0x0002) and IMA-ADPCM (0x0011); acmFormatSuggest / acmStreamOpen / acmStreamSize / acmStreamPrepareHeader / acmStreamConvert decode ADPCM->PCM in WAT, real state, no silent stubs. Unit tests against known ADPCM vectors. Then Outwars "ACM not installed" box gone and QMixer audio plays (boat run).
  Done: decode tests pass; Outwars run without the ACM box; commit.

- title: New game source 10: one more Win95/98 demo/shareware (GL/D3D preferred)
  id: NEW-GAME-SOURCE-10-20261011
  status: done (kingpin_demo 8373af6cd + 46186ce41, localOnly never-deployed (personal-use EULA); gameplay reviewed by orchestrator 07:52Z: 06-turned-shed.png GL first person)
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (launch-ux; assigned by orchestrator 2026-10-11T07:10Z)
  created: 2026-10-11T07:10:00.000Z
  Next: same rules as NEW-GAME-SOURCE-4-20261011, your pick; grep apps.js/manifest/corpus/TODOS/board first. Not Starlancer (d10ba697) or anything registered today, Codex lanes, Heroes II. Post pick first.
  Done: registered with reviewed gameplay; commit.
  2026-10-11 claude:1863d2b5 DONE: Kingpin demo registered localOnly (8373af6cd), OpenGL, first-person gameplay. Reviewed: scratch/runs/20261011T0800Z-kingpin_demo-gameplay-claude1863. Re-notes docs/re-notes/kingpin-demo.md (slow level load needs cl_timeout/timeout raised; worth profiling). Browser not checked.

- title: USER ASK - get Pharaoh (Impressions 1999) working
  id: USER-PHARAOH-20261011
  status: review
  owner: claude:d44753dd-b6da-4c7f-ada5-48d4d72fccd5 (w6; assigned by orchestrator 2026-10-11T07:25Z)
  created: 2026-10-11T07:25:00.000Z
  created-by: user via Telegram #9 (2026-10-11T07:13Z, x.com/exQUIZitely post about Pharaoh 1999)
  Next: Pharaoh (Impressions/Sierra 1999, Caesar III engine successor). Prefer the official Pharaoh demo (archive.org); record its licence, localOnly unless redistributable. Read docs/re-notes on Caesar III first (same engine: draw paths, folds, known fixes). Boat only. Register (apps.js + corpus-categories + index.html), reach a city-building gameplay frame (place housing/roads, walkers moving), screenshots in scratch/runs. Post progress on the board; the orchestrator relays to the user.
  Done: pharaoh registered with reviewed gameplay; commit.
  Result (2026-10-11T07:52Z, w6): Pharaoh demo (archive.org PharaohDemo.zip, unshield group Executable, localOnly under the Sierra demo EULA) registered as pharaoh_demo in 6aa67a749. No emulator change needed; it requires --batch-size=100000 headless (the title is at about batch 2000). Boat bx_92q8v8g2, fresh candidate fetch then --app=pharaoh_demo: road and housing placed in Nubt, immigrants settle, Pop 39 (Apr) -> 60 (Jun 3500 BC). Evidence scratch/runs/20261011T0730Z-pharaoh-w6 (reg-6600.png, reg-8990.png); route and sidebar map in docs/re-notes/pharaoh-demo.md. Not checked: browser, audio, Bink intro.

- title: New game source 11: one more Win95/98 demo/shareware (GL/D3D preferred)
  id: NEW-GAME-SOURCE-11-20261011
  status: review
  owner: claude:90024109-c92c-41c8-8c1a-fd5ae13f85da (w5; assigned by orchestrator 2026-10-11T07:25Z)
  created: 2026-10-11T07:25:00.000Z
  Next: same rules as NEW-GAME-SOURCE-4-20261011, your pick; not Kingpin/Hexen II (launch-ux), Pharaoh (w6), Starlancer, anything registered today, Codex lanes, Heroes II. Post pick first.
  Done: registered with reviewed gameplay; commit.
  Result (2026-10-11T07:50Z, w5): Dethkarz demo (Direct3D) registered localOnly in 087f9301d. 1002ce0da makes ShowWindow skip WM_SHOWWINDOW and the WM_MOVE/WM_SIZE pair when nothing changes; without it the WM_SIZE(SIZE_MAXIMIZED) -> ShowWindow loop starved the driver dialog and Direct3D could not be picked. Race at 111/219/233 km/h in scratch/runs/20261011T0750Z-dethkarz_demo-race-w5. Open: the Glide default crashes in unimplemented grTexDetailControl (re-notes dethkarz-demo.md).

- title: USER REPORT - Drakan demo exits right after CreateWindow "Riot Engine" in the browser (Threads on), ExitProcess code 6972398 (0x6A63EE)
  id: USER-DRAKAN-EXIT-20261011
  status: in_progress
  owner: claude:202b4b39-6838-4802-a2d9-03dd6d3cd1d8 (tr3; assigned by orchestrator 2026-10-11T07:30Z)
  created: 2026-10-11T07:30:00.000Z
  created-by: user via Telegram #10 (2026-10-11T07:16Z); full pasted log in scratch/telegram/user-report-10-drakan.txt
  Next: REGRESSION - DRAKAN-WEB-THREADS-LAZY-CRASH-20261006 had Drakan reaching its level in the page with Threads on and off (Oct 7). Now: beta MessageBox, CreateWindow 'Riot Engine', then ExitProcess(0x6A63EE - looks like an address, i.e. an error path). Log also says 'DLL ole32.dll: not found ... built-in stubs'. Reproduce with the browser Worker-main route (web-input-probe --threads / dev-server --isolate) on a boat, and the CLI; bisect against the Oct 7 acceptance (ops/handoffs/drakan-threads-acceptance-20261007.json). Fix on main, regression test.
  Done: Drakan reaches its level in the page with Threads on again; regression test; commit.

- title: New game source 12: Hexen II demo (or another Win95/98 demo)
  id: NEW-GAME-SOURCE-12-20261011
  status: in_progress
  owner: claude:1863d2b5-bc58-4c0b-9c15-00fc951f0256 (launch-ux; assigned by orchestrator 2026-10-11T07:52Z)
  created: 2026-10-11T07:52:00.000Z
  Next: same rules as NEW-GAME-SOURCE-4-20261011; Hexen II demo (Raven 1997 OpenGL) was your fallback. Not Dethkarz (w5), Pharaoh (w6), Starlancer, anything registered today, Codex lanes, Heroes II. Post pick first.
  Done: registered with reviewed gameplay; commit.
