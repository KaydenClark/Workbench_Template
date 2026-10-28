# Example Workbench - Workbench Feedback

> Generated from LLM Workbench v3.1.2. Lives at
> `workbench/feedback/WORKBENCH_FEEDBACK.md`; see `RUNBOOK.md` -> Upgrading
> The Harness.

This is the return channel from this project back to the LLM Workbench harness.
When the control docs themselves (`AGENTS.md`, `BLUEPRINT.md`, `LEXICON.md`,
`TASKBOARD.md`, `RUNBOOK.md`, `GENESIS.md`) are unclear, wrong, missing guidance, or actively
slow the work down, record it here instead of silently working around it. The
owner carries these lessons back to LLM Workbench, where a change is validated
against `evals/` before it ships as "better".

This log is append-only. Do not edit or delete prior rows; add a new one.

## How To Log

Add a row whenever the harness (not this project's own code or docs) caused
friction or could be improved. Keep it concrete: name the doc and section, say
what happened, and propose a change if you have one.

| Date | Doc / section | What happened | Impact | Proposed change | Status |
|---|---|---|---|---|---|
| 2026-09-06 | templates/GENESIS.md -> Phase 6 | Genesis names `templates/wiki/MEMORY.project.md` as the room brain source but the readiness gate checks `workbench/wiki/MEMORY.md`; the rename is only implied by the sentence "copy ... to `workbench/wiki/MEMORY.md`". It is correct, just easy to miss when skimming the phase for commands. | low - cost one re-read, no wrong output | Consider showing the copy as a literal `cp` line beside the two `node` commands already shown in that phase. | new |
| 2026-09-06 | workbench-layout.mjs -> validate --genesis | Re-running the readiness gate after the first ticket closed returns `invalid` with `at least one ticket must be ready with blockers none`. The gate is correct - it scores an actionable first packet and `GENESIS.md` says run it once - but its failure message reads like a room defect, and an agent arriving later is likely to "fix" a healthy room to satisfy it. | medium - invites a wrong repair to a correct room | Have the gate say it is a one-time bootstrap check when it fails this predicate, and name `validate --project PATH` plus `doctor` as the steady-state checks. | new |
| 2026-10-19 | workbench-layout.mjs -> migrate (route defect 1, S-006F) | From LLM_Workbench integration `6cddd3a6`, `migrate` refuses this room, which is genuinely stamped v3.2.1, with `invalid-skill-policy`. The frozen v3.2.1 row is built from `currentCoreSkills`, and that list renamed `to-tickets` to `to-tasks` after this room was stamped, so the frozen label was redefined. | high - every real v3.2.1 room is refused by the upgrade route | Freeze the v3.2.1 row as a literal with `to-tickets`, keeping `to-tasks` as a transition cohort. A refused migrate already exits 1; the earlier "exits 0" report came from piping the output. This candidate renamed the entry in `skillPolicy` as its own commit to get through. | new |
| 2026-10-19 | workbench-tools.mjs / workbench-skills.mjs -> receipt `source.release` (route defect 2) | Both receipts record integration `6cddd3a6` as release `v3.2.1`, the label the source manifest still declares, although those bytes are unreleased v4 work. The tools accept only a `vX.Y.Z` label read from the source manifest, so a candidate cannot be labeled as one. | medium - read alone, the receipts claim v3.2.1 bytes the room does not hold | Let the source declare a pre-release or candidate identity the receipts can carry. Until then, the source commit is the candidate's identity. | new |
| 2026-10-19 | workbench-tools.mjs -> update receipt `backups[].path` (route defect 3) | `update` appends the absolute backup-home path of the machine that ran it, which can include a user name, to a tracked receipt. Earlier runs had left three temporary-directory paths. This candidate removed every `path` field and `verify` stayed `valid`. `rollback` looks a backup up by path, so these entries no longer support an in-room rollback. Every one pointed at a temporary directory anyway. | medium - publishes machine-local paths in a public room | Record backups outside the tracked receipt, or store a path relative to the backup home. | new |
| 2026-10-19 | core skills `tracer-bullet` and `workbench-runtime` (route defects 4 and 5) | The managed `tracer-bullet` skill names the owner personally (line 43). The managed `workbench-runtime` skill carries a sentence fragment naming the producer's private workspace root (line 136). The same text already appears in this room's RUNBOOK, so the candidate adds no new exposure, but a generic skill should name neither. Managed bytes cannot be edited in the room. | low - product voice and public-safety hygiene | Say "the owner" in `tracer-bullet`, and finish or remove the fragment in `workbench-runtime`, at the source. | new |
| 2026-10-19 | workbench-layout.mjs -> migrate passes | A v3.2.1 room needs two `migrate` runs: the first adds `lanes.skills` only, and the second adds `features`, `ddr` and `landmarks`. Each run reports `migrated` with no hint that another pass is due. | low - a single run looks complete | Apply every additive step in one run, or report `next: rerun migrate` until `current`. | new |
| 2026-10-28 | workbench-layout.mjs -> migrate skills relocation (S-006K TK-00B7) | Relocating `workbench/skills` to `.agents/skills` left 14 room-owned relative links (`../skills/...` in `workbench/docs/TEMPLATE_OPERATIONS.md`, `workbench/docs/AUTO_MERGE.md` and `workbench/wiki/SCHEMA.md`) pointing at the retired lane. `wiki.mjs validate`, `doctor` and the layout report all stayed green, so only a hand-run link check found them. | medium - an upgraded room silently carries dead skill routes | Have `migrate` report (not rewrite) room-owned Markdown links into the retired lane after relocation, or have `doctor`/`wiki validate` check relative links into `lanes.skills`. | new |
| 2026-10-28 | workbench-layout.mjs -> Lexicon landing of wrapped prose | Each wrapped Lexicon prose line is checked as its own claim, and a wrapped fragment can never equal a complete sentence or paragraph in a successor. Every room-wrapped paragraph therefore reports unlanded even after its sentences moved verbatim into ARCHITECTURE.md, and the only route to `archived` is removing the lines by hand. | medium - forces a manual disposition for content that did land | Compare a Lexicon paragraph (joined wrapped lines) as one claim before falling back to lines. | new |
| 2026-10-28 | GLOSSARY template -> **Room** versus a room's own Lexicon project term | The v3.2.2 Glossary defines **Room** as a project seen as the place work happens; this room's Lexicon defined Room as one installation (repository plus support root and runtime). The glossary format allows one entry per name, so the room's meaning moved to a Wiki explanation rather than a second entry. | low - meaning preserved, but a shared definition silently narrowed a room term | Note in the update guidance that a room project term colliding with a new shared entry needs an explicit owner reading. | new |
| 2026-10-28 | workbench-layout.mjs -> line-endings block | A room whose block predated the skills lane received a second complete managed block after the first instead of an updated one. Last-rule-wins keeps behavior correct, but the file now carries two marker pairs and a stale `/LEXICON.md` rule. | low - cosmetic, can confuse a reader | Replace the earlier managed block in place when its markers are intact. | new |

Status values: `new` (just logged) -> `sent` (carried back to LLM Workbench) ->
`landed` (a harness change shipped) or `declined` (kept as-is, with a reason).

## What Belongs Here vs. TASKBOARD

- This project's own work, bugs, and tasks -> `TASKBOARD.md`.
- Problems with the *harness rules themselves* -> here.

If a harness problem is also blocking this project right now, log it here **and**
open a `TASKBOARD.md` task for the local workaround, linking the two.
