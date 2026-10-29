# S-000E - v3.2.2 Harness Upgrade

**Spec ID:** S-000E
**Status:** active
**Priority:** 1
**Owner:** claude-s006k-tk00b7
**Stance:** Builder
**Updated:** 2026-10-28
**Catalog description:** Install the pinned LLM Workbench v3.2.2 source candidate into Workbench_Template integration through the supported update route, preserving the room and recording upgrade and recovery proof for the release audit.
**Blockers:** none within the installation; release fitness audit, independent assembled review and owner main approval are separate gates
**Latest event:** S-006J capped gate fix reinstalled from LLM_Workbench 95023de5 through update-harness.
**Next gate:** Reviewed merge into Template integration, then the full installed scenario set on the merged commit (LLM_Workbench S-006J TK-00B4).

## Outcome

Workbench_Template, the installed reference room, consumes LLM Workbench v3.2.2
source `a58466ad1dca4ce7d6bd1a8328f47d6a58a2ee8d` on its `integration` branch:
managed runtime, core skills, the two optional skills selected for this room,
manifest stamp and receipts, filled Glossary and Architecture, the relocated
`.agents/skills` lane and the six confirmed workflows, with every room-owned
file preserved or deliberately reconciled. The result is an assessable
candidate for the v3.2.2 release audit, not a release pass.

## Why It Matters

The producer release gate requires each version to be exercised in this named
installation. Source tests do not prove that an existing room upgrades,
preserves its history and still works.

## Current Verified State

Baseline: Template integration `2f162c46afed6488862d2c3963b07bb0d905cabd`
(v3.2.1, skills lane `workbench/skills`, `LEXICON.md` vocabulary control). Its
full documented suite passed before any write: tour 21/21, evidence-history
14/14, history check (10 sections against `0eb388fb`), syntax, layout
`valid`, doctor (no blocking finding; 4 attention), Wiki and ADR validation
and `git diff --check`. No ignored files existed under `workbench/`.

## Desired Behavior

1. The installed runtime and core-skill receipts and every managed byte match
   the pinned source; the manifest, applicable control stamps and receipts name
   v3.2.2 and the consumed commit, while genesis and layout provenance stay
   historical.
2. `GLOSSARY.md` and `ARCHITECTURE.md` describe this room; every Lexicon line
   is landed or carries a recorded disposition, and no current control routes
   through the Lexicon.
3. Workflow definitions and routes match Explore, Promote, Prepare, Journey,
   Judge and Complete as the release defines them, including the mandatory
   Explore confirmation and Prepare approval.
4. Room identity, product files, completed Specs, ADR, Wiki and append-only
   evidence survive; the before/after inventory accounts for each change.
5. Backups and rollback/reapply are exercised in a disposable copy, and their
   limits are stated.

## Decisions And Contracts

- Authority: Kayden's whole-Spec approval for the producer's S-006K release
  ([JOT-771257d8](https://github.com/KaydenClark/LLM_Workbench/blob/integration/workbench/wiki/context-selective-main-delivery.md#jot-771257d8-929b-48ac-a912-8a21cba8d677))
  covers this Template integration installation. It lives in the producer
  Wiki, not this room, so this Spec records it in prose and does not claim it
  as this room's own **Confirmation**/**Execution approval** fields; this Spec
  is table-backed and is not claimed through this room's native `claim`.
- Template `main`, tags, release audits and paid services are outside this
  Spec. Main stays owner-only under [AGENTS](../../../AGENTS.md#pr-instructions).
- The room keeps its stricter main rule rather than the template's newer
  "agent may promote after a user-approved delivery concept" line.
- The shared Glossary **Room** entry is kept; this room's installation reading
  moved to [the project-terms article](../../wiki/vocabulary-project-terms.md#room).
  Owner review of that merged meaning is open.
- `LEXICON.md` is archived, not retired: `retire-lexicon` would delete it, and
  the completed S-00A Blueprint inventory names `LEXICON.md` as a claim owner
  that its tour test opens. The archived state was reached by removing 69
  unlanded lines on the installing agent's judgment (68 superseded, 1 moved).
  Those dispositions are pending owner confirmation, so **do not run
  `retire-lexicon` before the owner confirms them**; deletion is a separate
  owner step after that.
- The four Wiki contract files `workbench/wiki/SCHEMA.md`, `workbench/wiki/AGENTS.md`,
  `workbench/wiki/design-concepts/README.md` and `workbench/wiki/features/README.md`
  are room-customized (31-198 lines differ from the template). Only their
  broken skill links and Lexicon route were corrected; they keep their v3.2.1
  stamps as pending reconciliation (`stale-stamp` attention).
- The notepad `handoff.example.json` seed is retained from v3.2.0 (`stale-seed`
  attention); v3.2.2 no longer seeds it. `REPORT_FORMAT.md` is retained as
  room-adjusted.

## Non-Goals

Template main, a release tag, the release fitness audit, provider-home skills,
personal catalog publication, other rooms and claims of agent reliability.

## Dependencies And Blockers

Producer S-006K TK-00B7 owns this installation; S-006K TK-00B8 audits the
merged integration revision. S-006J TK-00B4 may consume this exact candidate.

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-000D | Install, reconcile and exercise the pinned v3.2.2 source | in-progress | none | Evidence log below; reviewed integration merge pending |

## Acceptance Criteria

- [ ] Installed receipts and every managed byte match pinned source `a58466ad`; manifest, stamps and receipts agree on v3.2.2.
- [ ] Glossary and Architecture are filled for this room and every Lexicon line has a recorded landing or disposition.
- [ ] Workflow routes and definitions match the six confirmed workflows, with the Explore and Prepare gates installed and exercised.
- [ ] Before/after inventory accounts for every change and preserves identity, provenance, product, Specs, ADR, Wiki and evidence.
- [ ] Backup and rollback/reapply were exercised in a disposable copy, with limits stated.
- [ ] Required CI passes and the reviewed candidate is contained in Template integration.

## Testing Seams

Tour and evidence-history tests, the layout/doctor/Wiki/ADR validators, the
pinned source's `workbench-tools.mjs verify` and `workbench-skills.mjs verify`,
the installed authority gate, Jot read/search and glossary validation.

## Verification Procedure

Run the [Runbook Test And Build](../../../RUNBOOK.md#test-and-build) suite,
both `verify` commands from the pinned source checkout, the control fidelity
report and the scenario commands recorded in the evidence log.

## Upgrade Proof And Deliberate Differences

[Preservation inventory](preservation.json) lists every baseline and
candidate tracked path with its before/after hash and decision.
[Lexicon disposition](lexicon-disposition.json) records the 69 Lexicon lines
the pinned `413e7039` tool reported unlanded after the successors were filled,
and where each one's meaning now lives (the first `8f08f111` run reported 78;
the repaired joined-line check verifies the moved paragraph at lines 73-81).

Reinstall from `413e7039` (commit `6f04d01`): the repaired source changed 6
runtime tools and the `implement` and `update-harness` skills; inventory deltas
are listed under `reinstall_changed` in the preservation inventory.

Inventory: 165 baseline and 195 candidate tracked paths at installation commit
`1bf6d2a`; 72 kept byte-for-byte, 20 moved unchanged and 35 moved and updated
by the lane relocation and skills update, 16 other managed updates plus 4
managed manifest/attribute/link/seed changes, 35 additions (installed
successors, vocabulary articles, seeded documents, 4 new runtime tools, 2
optional skills, DDR projection and this Spec), and the reconciled controls,
product and docs listed with a decision each. No room-owned file was deleted;
`workbenchId` and genesis/layout provenance are unchanged.

Managed bytes (rechecked against `a58466ad`): from the pinned source, `workbench-tools.mjs verify` and
`workbench-skills.mjs verify` both report `valid` with no update available;
all 35 runtime files and all 33 core skill trees equal the source bytes; the
optional skills equal `workbench/optional-skills/diagnose-and-propose`
(content hash `36d49dad...febf`) and `.agents/skills/grill-with-docs`
(`df30d301...ec88`) at the source and are reported `roomLocal`.

Control fidelity (pinned source report): AGENTS keeps 10 room-worded lines and
replaces two newer template lines with room equivalents (its own edit scope and
its checked-delivery review line); the template's agent main-promotion line is
deliberately not adopted. GLOSSARY and ARCHITECTURE differ from the template
only by filled room content.

Recovery: the whole-room recovery point is the baseline commit `2f162c46`.
The current managed backups come from the `a58466ad` reinstall, run with
`--home /private/tmp/tk00b7-home3`, and the receipts record them as
`~/.workbench-tools-backup-dDE7Ac` and `~/.workbench-skills-backup-ELYoF6`.
That home is a volatile temporary directory on the installing machine, so
component rollback from a fresh clone or another machine is not available.
Earlier installs left their own backup entries (absolute paths under
`/private/tmp/tk00b7-home` and `~/` paths under `/private/tmp/tk00b7-home2`),
which are equally volatile. In a disposable `git clone --no-hardlinks` copy,
`workbench-tools.mjs rollback` and `workbench-skills.mjs rollback` with the
receipts' `~/NAME` form and `--home /private/tmp/tk00b7-home3` restored the
previous candidate's bytes. Reapplying both updates returned every file to the
candidate bytes, with only receipt backup metadata differing, and both
`verify` runs report `valid`. Managed rollback leaves the optional skills,
controls, Glossary/Architecture and lane relocation in place, so backups alone
are not whole-room recovery. In a separate copy (first install),
`skills-lane-rollback` returned the lane to `workbench/skills`, and a rerun
`migrate` relocated it again to a tree identical to the candidate.

Gate reinstall from `8b914257` (LLM_Workbench PR #642, S-006J TK-00BR;
2026-10-29): baseline suite green at Template integration `b995aecb`. From the
merged source, `migrate` reported `current`. The `workbench-tools` and
`workbench-skills` updates and both optional-skill installs reported
`current`, and both `verify` runs reported `valid`. The source changed no
managed byte since `a58466ad`, so the receipts keep `a58466ad`. The only
template changes since `a58466ad` are the AGENTS gate and autonomy lines, the
`.claude/settings.json` `UserPromptSubmit` gate-reminder hook and its
`.claude/README.md` paragraph. Each was reconciled by hand into the room
copy, following update-harness section 3.

- The AGENTS gate line now matches the template.
- The room's own autonomy line ("Do not add approval gates or treat a question
  as authorization") is deliberately replaced by the template line ("add no
  other gates"): it contradicted the two gates.
- The room README names the hook's consistency test as the producer's test.

Control fidelity: AGENTS moves from 15 to 17 unchanged lines (changed 11 to 9).
`.claude/settings.json` goes from 5 dropped lines to fully unchanged (60
unchanged). Other controls are unchanged from the earlier reconciliation.

Corrections and decisions after review of the gate reinstall (2026-10-28 local
time; the evidence row above dated 2026-10-29 used UTC):

- The settings count above is wrong. At base `b995aecb`, the pinned-source
  report counts 12 dropped `.claude/settings.json` lines: 7 trivial brace or
  bracket lines and 5 labelled newer-template. The labelled five are
  `"hooks": {`, `"UserPromptSubmit": [`, `"hooks": [`, `"type": "command",`
  and the command line. The report's summary prints this as "dropped 5 (7
  trivial)". `--previous-templates` set to the templates at `a58466ad` gives
  the same numbers. After the reinstall, nothing is dropped and all 60 lines are
  unchanged. Reproduce with `node tools/control-fidelity.mjs report --project
  ROOM --control .claude/settings.json` from the `8b914257` checkout; add
  `--previous-templates TEMPLATES_AT_a58466ad`, or read `counts` in the JSON
  output. AGENTS counts at base are unchanged 15, changed 11, dropped 3; after
  the reinstall they are unchanged 17, changed 9, dropped 3.
- Decision on the dropped clause "or treat a question as authorization" (from
  the room's own autonomy line). The producer template dropped its
  counterpart, "questions grant no authority", in LLM_Workbench S-006J TK-00BR.
  Two reasons: the entry brief's 500-word budget, and the new gate line, which
  requires an explicit owner confirmation of a readback before any file change.
  No room line now states the clause directly. It is covered only by
  implication:
  - "no request confirms itself", together with the requirement to confirm a
    readback explicitly before changing files, means a question cannot
    authorize a change;
  - the Claude Code hook says approval wording inside a request is not
    confirmation.

  Neither says in words that a question is not authorization. Installed
  scenario 9a (a "What would that involve?" question) made no edits under the
  new wording. The room accepts this coverage by implication and does not
  restore the clause.
- `.claude/README.md` no longer claims a producer test keeps the room's hook
  consistent. Nothing in this room checks the installed hook against the
  `AGENTS.md` gate line, so the two are kept in step by hand.

Capped gate fix reinstall from `95023de5` (LLM_Workbench PR #646, S-006J
TK-00B4 fix round under owner direction JOT-c6b4d000; 2026-10-28 local time):

- Baseline at Template integration `38085384`: the suite passed (9 commands,
  all exit 0) and 196 paths were inventoried. There are no ignored files
  under `workbench/`.
- From the release checkout: `migrate` reported `current` and
  `workbench-tools update` reported `current`, so the tools receipt stays at
  `a58466ad` with unchanged bytes. `workbench-skills update` changed only
  `update-harness` (it gained the bullet on carrying a changed `hooks` block
  into the room's settings). The skills receipt now names `95023de5` and
  records the backup as `~/.workbench-skills-backup-BEGXhy` under the volatile
  install home `/private/tmp/tk00b4-fix/home-t2`. Both optional skills report
  `current`; tools and skills `verify` report `valid`.
- Reconciled by hand under update-harness section 3:
  - The `.claude/settings.json` hook command now matches the template, and
    the room's permissions are kept. The hook asks for the two judgments
    separately, ends a request only to map or plan at prepared work, and
    keeps an ordinary in-scope fix approved.
  - `.claude/README.md` now says right after its title paragraph that it only
    explains `.claude/settings.json`, and that notes, history and rationale
    go in the Wiki (owner instruction JOT-0601d3aa). The installed-trials
    sentence is removed, and the hook paragraph matches the template. Its one
    remaining difference from the template is the room's earlier
    authorship-lanes wording.
  - AGENTS already matched the template gate and autonomy lines; it is
    unchanged.
- Control fidelity from `95023de5`: settings has 60 unchanged lines (the hook
  command was 1 changed line before reconciliation); AGENTS counts are
  unchanged at 17 unchanged, 9 changed, 3 dropped.

## Documentation Impact

AGENTS, RUNBOOK, README, BLUEPRINT, STARTUP and TASKBOARD stamps and routes;
filled GLOSSARY and ARCHITECTURE; archived LEXICON; Wiki router and new
project-terms article; Template operations, AUTO_MERGE and Wiki SCHEMA links;
feature catalog copied from the pinned source; Version History entry;
feedback log rows; tour and its tests.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-10-28 | TK-000D | Baseline recovered and suite run before writes | Template integration 2f162c46; tour 21/21, evidence-history 14/14, history check, syntax, layout valid, doctor no blocker, Wiki and ADR valid, diff check; 165 tracked paths hashed | none | Installation pending |
| 2026-10-28 | TK-000D | Pinned v3.2.2 installed through the v3 route | migrate relocated workbench/skills to .agents/skills (one move commit), installed GLOSSARY/ARCHITECTURE and 12 vocabulary articles; stamp and skillPolicy set; seed-documents seeded 2 documents and retained REPORT_FORMAT.md; tools update changed 19 files (35 managed), skills update changed 31 of 33; optional diagnose-and-propose and grill-with-docs installed; migrate reports current and Lexicon archived | Controls, Wiki, tour and tests reconciled | Inventory commit, rollback exercise, CI and review pending |
| 2026-10-28 | TK-000D | Inventory, managed-byte, rollback and scenario evidence | Candidate suite: diff check, evidence-history 14/14, history check (10 sections vs 2f162c46), tour 22/22, syntax, layout valid, doctor no blocker, Wiki and ADR valid. Pinned-source verify valid for tools and skills. Rollback/reapply and skills-lane-rollback/migrate exercised in disposable copies. Installed gate in a disposable copy: claim refused before any write with no authority fields, with an unresolved Jot, with a superseded Jot and with a Jot naming another Spec; one current confirmed owner-intent Jot cited in both fields allowed the claim. Real S-000C shows missing Confirmation and Execution approval and has no ready Task. Jot read/search in a fresh clone returned the current entry with its correction context; a confirmed term written to GLOSSARY.md validated, and a malformed entry was refused. Evaluator diagnostic 52.6/113 before, 65.5/113 after (structural only) | preservation.json, Upgrade Proof | CI, independent review and integration containment pending |
| 2026-10-28 | TK-000D | Reinstalled from repaired pinned source 413e7039 (LLM_Workbench PR #637) | migrate current, Lexicon archived with 69 dispositions (9 lines now tool-landed), no retired-lane links; the source's line-ending policy step rewrote .gitattributes to one managed block; tools update changed 6 files and skills update changed implement and update-harness with backups recorded as `~/` descriptors; optional reinstall refused with skill-collision over identical bytes (no write). Pinned-source verify valid for tools and skills; all 35 runtime files, 33 core skill trees and both optional skills equal 413e7039. Doctor: no retired-skills-lane-link; positive control with one stale `../skills/` link reports it. Fresh relocation from 2f162c46 reports 74 retired-lane links and writes one block. Disposable copy: tools and skills rollback (backup directory plus --home) restored the 857a196 bytes, both verify valid, reapply returned candidate bytes with only receipt metadata differing, tour 22/22 | preservation.json reinstall deltas, lexicon-disposition.json, controls | CI, independent review and integration containment pending |
| 2026-10-28 | TK-000D | Reinstalled from repaired pinned source a58466ad (LLM_Workbench PR #638) | tools update changed workspace-closeout.mjs and skills update changed implement and update-harness, with `~/` backups; optional skills report current; migrate current, Lexicon archived. Pinned-source verify valid; all 35 runtime files, 33 core skill trees and both optional skills equal a58466ad. Disposable copy: rollback with the receipts' `~/NAME` form plus --home restored the 421094e bytes, both verify valid, reapply returned candidate bytes, tour 22/22. Closeout: this room's table-backed S-000E cannot host a snapshot (`unknown-task`); in a disposable GitHub clone with a record-backed fixture Task, an inherited stash, an untracked file and local-only commits, `check` exited 1 with retained-stash-not-remote, retained-bytes-not-remote, retained-ref-not-remote and unaccounted findings, and remoteRecoverable false | preservation.json, Spec header | CI, independent review and integration containment pending |
| 2026-10-28 | TK-000D | Independent review of 934c9348 (APPROVE, non-blocking findings) repaired on the room side | Glossary **Declared integration branch** corrected to the AGENTS meaning, and Lexicon line 162 given its own note; 69 Lexicon dispositions marked pending owner confirmation, with a retire-lexicon gate in LEXICON.md status, this Spec and Version History; archive tidied (2 separator rows, empty Continuity Terms table, 4 landed fragments) with migrate still archived and 0 unlanded (genericHomesMissing now lists GLOSSARY.md and ARCHITECTURE.md because the room changed template lines); Upgrade Proof records a58466ad and the volatile `--home /private/tmp/tk00b7-home3`; Template operations points the v3.2.1 policy to revision 2f162c46; Blueprint entry route, Architecture codemap and README/tour root-file statements made truthful (tour test red first: module export missing and blurb claim, then 23/23); `/LEXICON.md text=auto eol=lf` added as a room-owned line outside the managed block, `git check-attr eol LEXICON.md` reports lf, and the policy step keeps it. Suite: evidence-history 14/14, history check, tour 23/23, syntax, layout, doctor no blocker, Wiki, ADR, diff check, 0 broken links; pinned-source verify valid | GLOSSARY, LEXICON, ARCHITECTURE, BLUEPRINT, README, tour and test, .gitattributes, Template operations, Version History, Spec, disposition | CI, owner Lexicon confirmation and integration containment pending |
| 2026-10-29 | TK-000D | Gate reinstall from LLM_Workbench 8b914257 (PR #642, S-006J TK-00BR) through the update-harness route | Baseline suite green at b995aecb; migrate, tools, skills and optional-skill updates current; both verify valid; AGENTS gate and autonomy lines, settings hook and .claude README reconciled by hand; fidelity AGENTS unchanged 15 to 17, settings fully unchanged; candidate suite below | AGENTS, .claude/settings.json, .claude/README.md, this Spec | Reviewed merge into integration; installed agent scenarios on the merged commit (LLM_Workbench TK-00B4) |
| 2026-10-28 | TK-000D | Gate reinstall candidate suite and review corrections | Candidate suite on the README fix 523ac287 (room content of the final head): tour 23/23, evidence-history 14/14, check-evidence-history 11 sections against b995aecb, node --check tour.mjs, layout valid, doctor no blocking finding, Wiki and ADR valid, diff check, all exit 0. Fidelity from 8b914257: settings 12 dropped at base (7 trivial, 5 newer-template), 0 dropped and 60 unchanged after; AGENTS unchanged 15 to 17, changed 11 to 9, dropped 3 | .claude/README.md wording; this Spec: settings-count correction and question-clause decision | Reviewed merge into integration; installed agent scenarios on the merged commit (LLM_Workbench TK-00B4) |
| 2026-10-28 | TK-000D | S-006J capped gate fix reinstalled from LLM_Workbench 95023de5 (PR #646) through update-harness | Baseline suite green at 38085384; migrate and tools update current; skills update changed update-harness (receipt 95023de5); optional skills current; verify valid; hook command and .claude/README.md reconciled by hand; settings fidelity 60 unchanged; candidate suite recorded in the PR | .claude/settings.json, .claude/README.md, .agents/skills/update-harness, skills receipt, this Spec | Reviewed merge into integration; full installed scenario set on the merged commit (LLM_Workbench TK-00B4) |

## Completion Result

Pending: required CI, reviewed integration merge and containment.

## Remaining Limitations Or Follow-Up Specs

Native host invocation of the installed skills was not run (it needs a model
session); filesystem discovery is verified. On the installing machine 14
personal copies in each of two provider homes shadow room skill names
(`personal-skill-shadow` attention). Main remains owner-only.

## Supersession

- Supersedes: none; follows the completed v3.2.1 Template update (S-00B).
- Superseded by: none.
