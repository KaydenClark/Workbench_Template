# Append-Only Evidence And Execution Log (part 1)

[Record](SPEC.md#append-only-evidence-and-execution-log)

<!-- workbench-record-body:start context=0 format=2 -->

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-06 | TK-001 | Generations identified from the unshallowed upstream history, all branches | 382 commits scanned; the templates tree hash changed at 90 commits, of which 11 changed what a room must contain or how an agent behaves; `Harness version` headers confirmed: v2.1 first at `12a5233` (07-01), v2.3 at `ec94022` (07-12), v3.0.0 at `6d5beef` (08-31), v3.1.0 at `dfd4c9e`, v3.1.1 at `bfae8c0` (09-04), v3.1.2 at `8d9f0e2` (09-05); v2.2 found only inside `ec94022` as a frozen Taskboard archive | `VERSION_HISTORY.md` drafted | Rooms not yet built |
| 2026-09-07 | TK-002 | Rooms built, one per generation, from a read-only worktree of each source commit | See the per-branch verification rows appended below by TK-003 | Each room's README carries its provenance line | Assembly |
| 2026-09-07 | TK-003 | Linear history assembled and branches created | Eleven commits on one first-parent line from `4f1dd4c`; every `version/` branch checked out in turn: `node tour.mjs` exit 0 and `node tests/tour.test.mjs` 0 failures on all eleven; that generation's `doctor` green on v2.3, v2.3 late, v3.0.0, v3.1.0, v3.1.1 and this tip; `validate --genesis` valid on v3.0.0, v3.1.0, v3.1.1; this tip: `tests/tour.test.mjs` 12/12, `validate --project .` valid, `render` and `doctor` exit 0 | `README.md`, `MEMORY.md`, catalog and projection updated | None |

<!-- workbench-record-body:end -->
