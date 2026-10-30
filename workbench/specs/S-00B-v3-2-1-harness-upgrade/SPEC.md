# S-00B - v3.2.1 Harness Upgrade

**Spec ID:** S-00B
**Status:** complete
**Priority:** 1
**Owner:** codex
**Stance:** Builder
**Updated:** 2026-09-10
**Catalog description:** Upgrade Workbench_Template from v3.2.0 to the exact reviewed v3.2.1 source through the public managed update route, preserving the existing room and proving the installed result.
**Blockers:** none
**Latest event:** Spec completed and removed from the hot board.
**Next gate:** none

## Outcome

Upgrade Workbench_Template from v3.2.0 to the exact reviewed v3.2.1 source through the public managed update route, preserving the existing room and proving the installed result.

## Why It Matters

The owner uses the example Workbench Template to test updating an existing
Workbench. Source-template tests and a newly generated project do not prove that
this installed reference was updated.

## Current Verified State

Target integration 4010003 passes all 19 tour tests, syntax, layout validation and doctor (historical provenance attention only). Source integration 385218a supplies v3.2.1 and sixteen runtime tools.

## Desired Behavior

1. Installed runtime receipt and every managed file match pinned v3.2.1 source 385218a; control stamps and manifest agree.

2. Room identity, historical genesis/layout provenance, completed specs, ADR and product tour bytes survive; all intentional document changes have an owning decision.

3. Full room suite, installed project-evidence CLI smoke, layout, doctor and source byte comparison pass; recovery limits and complete file inventory are recorded.

4. Independent review and remote integration containment pass, followed by full verification from a fresh remote clone.

## Decisions And Contracts

- The target is https://github.com/KaydenClark/Workbench_Template, formerly
  Example_Workbench. Repository identity must be resolved live; a local folder
  name or upstream template directory is not the acceptance target.
- This owner request authorizes this named update and the release gate, including
  reviewed integration. Main promotion remains owner-only in both repositories.
- Use the already-v3 update route: additive layout check, explicit managed tool
  update with backup, and minimal control/seed reconciliation. Preserve personal
  skills; this assignment does not replace the global core bundle.
- The source remains v3.2.1: the release gate is producer policy and this change
  does not change the stamped core bundle or runtime bytes.

## Non-Goals

Other rooms, personal skill updates, rewriting completed proof, main publication,
new release automation, and claims of repeated agent reliability.

## Dependencies And Blockers

None within the named assignment. Unavailable native environments are separate
capability limits, not a reason to skip the Template update.

## Vertical Implementation Slices

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Deliver the named upgrade and its acceptance record | done | none | Independent PASS8ff9dfe; PR8 integration7125c8f exact containment; fresh remote clone21tests/syntax/layout/doctor and16 runtime hashes pass |

### TK-001 - Deliver the named upgrade and its acceptance record

**Stance:** Builder

Preserve the baseline inventory, exercise the public update, verify actual
installed behavior and preservation, reconcile owned documentation, and obtain
independent review before integration.

## Acceptance Criteria

- [x] Installed runtime receipt and every managed file match pinned v3.2.1 source 385218a; control stamps and manifest agree.
- [x] Room identity, historical genesis/layout provenance, completed specs, ADR and product tour bytes survive; all intentional document changes have an owning decision.
- [x] Full room suite, installed project-evidence CLI smoke, layout, doctor and source byte comparison pass; recovery limits and complete file inventory are recorded.
- [x] Independent review and remote integration containment pass, followed by full verification from a fresh remote clone.

## Testing Seams

Installed receipt hashes and public CLI, root control contract, full documented
suites, preservation inventory, and remote reviewed-commit containment.

## Verification Procedure

Run the full local AGENTS/RUNBOOK suite, source byte verification and guardrail
comparison. The Template also exercises the installed project-evidence command
and full tests in a fresh remote clone. Preserve all command failures and limits.

## Upgrade Proof And Deliberate Differences

<!-- workbench-record-section max=15000 -->
- [Part 1](SPEC.md.part-upgrade-proof-and-deliberate-differences-001.09ddc17ffdeea1a11eb47d8f17d370a969539428eab236948e4589aebe8365bb.md)
<!-- /workbench-record-section -->

## Documentation Impact

Version-bearing root controls, current Wiki stamps, managed seed records and this spec. Historical specs, ADRs and version-history records remain unchanged; the Blueprint remains a destination without a version stamp.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-09-10 | spec | Owner explicitly assigned the v3.2.1 Template upgrade and recurring release condition | Live GitHub identity, both integration tips and green 19-test Template baseline verified; isolated worktrees preserve unrelated work | This new owner preserves completed prior upgrade evidence | Update, verification and reviewed integration pending |

| 2026-09-10 | TK-001 | Installed pinned v3.2.1 through managed update after a component recovery rehearsal | Added CLI regression failed on missing project-evidence; after update21/21 tests pass, syntax/layout and exact16 receipt/source hashes pass; all existing product/history bytes preserved | Current stamps, repository name and upgrade procedure reconciled; complete preservation and fidelity inventories attached | Independent review, integration containment and fresh remote clone pending |

| 2026-09-10 | TK-001 | Separate-context reviewer PASS on8ff9dfe against4010003; PR8 delivered integration7125c8f | Reviewer verified69 baseline inventory entries and16 managed hashes; post-merge ancestry and identical tree confirmed; fresh remote clone21tests/syntax/layout/doctor and exact runtime verify pass | This closeout records the actual delivered result and remaining global-skill limits | Main promotion remains owner-only; zero owner coordination hand-backs during execution |
| 2026-09-10 | TK-001 | Ticket closed | Independent PASS8ff9dfe; PR8 integration7125c8f exact containment; fresh remote clone21tests/syntax/layout/doctor and16 runtime hashes pass | Stamps, upgrade procedure, complete preservation/fidelity and delivered result recorded | none for installed update; main and personal skills remain separate |
| 2026-09-10 | spec | Spec completed | Acceptance gates satisfied | Documentation impact recorded above | none |

## Completion Result

Reviewed candidate8ff9dfe77b37ad0a4e97db1635a5b3c8b91fea11 was merged by
[PR8](https://github.com/KaydenClark/Workbench_Template/pull/8) into remote
integration7125c8f5b9d5517b9f1f8ff309bcd6c80d3c446a with identical tree and
verified ancestry. A fresh clone from that remote passes21/21 tests, syntax,
layout and doctor; source verification confirms all16 exact managed hashes and
no available runtime update. This closes the installed v3.2.1 upgrade only.
Main remains at e4e1985e4bcd8072a8c78cb3828abc3be9d2cc10. Personal global
skills remain unchanged; their declared incompatibility is visible as attention.


## Remaining Limitations Or Follow-Up Specs

Main remains owner-only; optional cross-device transport and global skills are
outside this update. Guardrail scores do not establish agent reliability.

## Supersession

- Supersedes: none; follows the completed v3.2.0 Template update.
- Superseded by: none.
