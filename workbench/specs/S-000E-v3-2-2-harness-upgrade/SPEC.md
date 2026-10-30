# S-000E - v3.2.2 Harness Upgrade

**Spec ID:** S-000E
**Status:** active
**Priority:** 1
**Owner:** codex-runbook-template
**Stance:** Builder
**Updated:** 2026-10-29
**Catalog description:** Install the pinned LLM Workbench v3.2.2 source candidate into Workbench_Template integration through the supported update route, preserving the room and recording upgrade and recovery proof for the release audit.
**Blockers:** none within the installation; release fitness audit, independent assembled review and owner main approval are separate gates
**Latest event:** Candidate eb3600fb622e9b013f88be6d1509e407d30173aa observed contained in origin/integration at b874814af4f58eb1d2718888ac54b53ea5f3bbb1; continuation recorded.
**Next gate:** The bounded RUNBOOK repair is delivered. Continue remaining broader upgrade acceptance through its existing release owners, including installed authority proof and unresolved Lexicon disposition confirmation; main and release approval remain excluded from this assignment.

## Outcome

Workbench_Template, the installed reference room, consumes LLM Workbench v3.2.2
source `a58466ad1dca4ce7d6bd1a8328f47d6a58a2ee8d` on its `integration` branch:
managed runtime, core skills, the two optional skills selected for this room,
manifest stamp and receipts, filled Glossary and Architecture, the relocated
`.agents/skills` lane and the six confirmed workflows, with every room-owned
file preserved or deliberately reconciled. The result is an assessable
candidate for the v3.2.2 release audit, not a release pass.

## Bounded RUNBOOK continuation repair — 2026-10-29

The current writer owns only Kayden's approved RUNBOOK/TASKBOARD repair through
Template integration: [authority and recovery proof](proof/runbook-taskboard-2026-10-29.md).
It consumes reviewed producer `45a857f25adadeb068e0f000c09dcb3addb36a90` after
producer PR #652 landed. This updates the earlier installed generation without
rewriting its historical evidence or claiming the entire upgrade complete.
RUNBOOK teaches the complete prompt-guided startup and finish/knowledge/cleanup
flow; TASKBOARD projects current work owners and replaces STARTUP continuation.
The exact 500-word RUNBOOK cap runs in the existing required tour/CI suite.
Archived Lexicon, other artifact requirements, Audit and main remain outside this
bounded repair. The table-backed TK-000D remains in progress; no new live queue
or replacement Task is introduced.

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

<!-- workbench-record-section max=15000 -->
- [Part 1](SPEC.md.part-desired-behavior-001.b65d5c1427256b35ff2c20811666dba6ee069d12b1241a456b881dcc36724639.md)
<!-- /workbench-record-section -->

## Decisions And Contracts

<!-- workbench-record-section max=15000 -->
- [Part 1](SPEC.md.part-decisions-and-contracts-001.389f193e0aad23be5ad09660a0cd686858c55e98eba73ba36cbb00c43fb3370a.md)
<!-- /workbench-record-section -->

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

<!-- workbench-record-section max=15000 -->
- [Part 1](SPEC.md.part-upgrade-proof-and-deliberate-differences-001.81e47a601737e86867727aebaf63b980c353ee420f1cd44638d0638070833264.md)
<!-- /workbench-record-section -->

## Documentation Impact

AGENTS, RUNBOOK, README, BLUEPRINT and TASKBOARD stamps and routes;
STARTUP retirement and its preserved continuation/recovery meaning;
filled GLOSSARY and ARCHITECTURE; archived LEXICON; Wiki router and new
project-terms article; Template operations, AUTO_MERGE and Wiki SCHEMA links;
feature catalog copied from the pinned source; Version History entry;
feedback log rows; tour and its tests.

## Append-Only Evidence And Execution Log

<!-- workbench-record-section max=15000 -->
- [Part 1](SPEC.md.part-append-only-evidence-and-execution-log-001.db8ec57ed19fbc6d031053b1d2edb2c229a59f9e5e20a7bd12fae03992e4c1ef.md)
<!-- /workbench-record-section -->

## Completion Result

The bounded RUNBOOK/TASKBOARD repair is delivered through [PR #27](https://github.com/KaydenClark/Workbench_Template/pull/27):
reviewed `eb3600fb622e9b013f88be6d1509e407d30173aa` is contained in fetched
integration `b874814af4f58eb1d2718888ac54b53ea5f3bbb1`, whose hosted verify passed.
[Exact scoped proof and continuation limits](proof/runbook-taskboard-2026-10-29.md)
include fresh HTTPS-clone verification and the separate local two-context trial.
The wider S-000E/TK-000D upgrade remains in progress with its unchecked acceptance
and Lexicon confirmation; no release, Audit or main completion follows.

## Remaining Limitations Or Follow-Up Specs

Native host invocation of the installed skills was not run (it needs a model
session); filesystem discovery is verified. On the installing machine 14
personal copies in each of two provider homes shadow room skill names
(`personal-skill-shadow` attention). Main remains owner-only.

## Supersession

- Supersedes: none; follows the completed v3.2.1 Template update (S-00B).
- Superseded by: none.
