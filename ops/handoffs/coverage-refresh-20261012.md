# Gameplay coverage refresh — 2026-10-12

Registry and corpus manifest inspected at main 0304a8549. The shared reader
and its file hashes are recorded separately; this is not a clean-main runtime test.
Evidence: scratch/runs/20261012T0059Z-coverage-refresh/coverage.json and provenance.json.

- 325 inventory entries; 161 have associated scene-reviewed gameplay images.
- 13 have counter records. These are not newly qualified gameplay FPS.
- 20 have no registered route; 21 have every route missing or unresolved in
  /home/user/wine-assembly-web. Per-entry exact paths are in coverage.json.
- 58 runs are unassociated; 558 reader warnings are retained in the report.

The previous inventory had 310 entries, 159 image associations and 7 entries
with missing served routes. Added registry entries explain some growth;
these numbers do not establish a regression or current-build compatibility.
For example the served System Shock 2 route lacks
/home/user/wine-assembly-web/test/binaries/candidates/system-shock2-demo/installed/shock/shock2.exe
and its .wine-assembly-browser.json. Its reviewed historical image does not
supply the missing asset. Remote boat fixtures are outside this audit.

Next: reconcile recent run candidate IDs and evidence metadata before new
screenshot runs; restore served fixtures only through their owners and within
disk limits. Do not mark menus, flyovers or raw presentation counts as qualified
player-controlled gameplay/FPS. No public deployment performed.
