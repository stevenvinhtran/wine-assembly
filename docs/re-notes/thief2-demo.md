# Thief II: The Metal Age demo

Source: https://archive.org/details/ThiefIiTheMetalAgeDemo
Metadata artifact thief2.exe,136880529 bytes, SHA1
e812b6d8a41c7755f87e1e17bf8e7ef11a57de5a. Metadata identifies Looking Glass
Studios/Eidos demo,2000; listing contains a1999 demo payload. Private local
compatibility fixture only, no redistribution/deployment authorized.
Not in current corpus/public registry or existing task list when selected.

## Source preflight 2026-10-12 07:06Z

Evidence scratch/runs/20261012T0706Z-thief2-preflight/. Standard endpoint
initially appeared stalled. The original completed at07:10:51Z after the last status check. An unchecked
mirror retry started at07:11:03Z and overwrote that full file with partial bytes. Original download.json and
listing.txt record the earlier complete download, not current payload validity.
Current-payload.json is authoritative:59440936 bytes, SHA1
0ea8dbb7247fa7c4a022eb846dc06cee4e72d660, NOT the required complete hash.
It was renamed /home/user/thief2-demo-preflight/thief2.exe.part on bx_gqubeuhs
before stop. Check the final snapshot; a pre-rename snapshot may retain it as
thief2.exe. Rehash either file before using it. Next resume the partial from
https://ia801501.us.archive.org/21/items/ThiefIiTheMetalAgeDemo/thief2.exe
with a unique destination and no overlapping download, then verify full hash.
Use curl -C - with a sufficiently long bounded timeout after checking range
support. Never extract or qualify the partial file.

Complete-download listing shows61 files/168447241 expanded bytes, including
thf2demo/MOVIES, mission miss11.mis, readme.wri and installer components.
Next extract verified payload with7z, inspect original executable/imports and
readme, then bounded remote-only launch. No game executable extracted or
launch/input/browser/audio/FPS qualification yet. Exact missing prepared
path: /home/user/thief2-demo-preflight/game/ (not created).
