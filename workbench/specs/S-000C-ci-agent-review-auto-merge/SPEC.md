# S-000C - CI and agent review auto-merge

**Spec ID:** S-000C
**Status:** active
**Priority:** 1
**Owner:** codex-auto-merge
**Stance:** Builder
**Updated:** 2026-10-22
**Catalog description:** Merge approved candidates automatically after CI while retaining owner authority for main.
**Blockers:** none
**Latest event:** TK-000B claimed by codex-ci-repair.
**Next gate:** Close TK-000B with verification and documentation proof.

## Outcome

Ordinary work branches accept development pushes. Integration and main receive current automated proof through PRs; assembled Specs receive independent review and main promotion requires one explicit owner decision.

## Why It Matters

Agents should not wait for a human to review their work or manually merge a checked candidate.

## Current Verified State

Before this setup, GitHub auto-merge was disabled. Main has a PR rule with zero required human approvals. LLM_Workbench alone has a verify workflow on integration; the other two rooms have no workflow there.

## Desired Behavior

Require verify from GitHub Actions, strict up-to-date PRs, and force-push/deletion protection only on integration and main. Run the full Template suite for both PR targets and their landed commits. Remove hand-posted review/approval statuses and ordinary work-branch push gates. Task self-check and merge answers precede integration; independent review occurs at assembled-Spec acceptance. Main promotion and release remain explicit owner decisions, not statuses.

## Decisions And Contracts

The owner is the only person working on these repositories. Agents share the GitHub account, so independent review and owner intent remain process obligations. The owner approved this repair and its narrow main CI bootstrap; no pending integration product content or versioned release is authorized. Auto-merge is armed per eligible integration PR.

## Non-Goals

Pending product promotion, actual versioned release or installed-upgrade qualification, another GitHub account, managed runtime changes, recovery/version branch protection, unrelated repairs, or automatic approval of old PRs.

## Dependencies And Blockers

- none

## Vertical Implementation Slices

| Task | Slice | Status | Blockers | Proof |
|---|---|---|---|---|

### TK-001 - Configure checked auto-merge

**Stance:** Builder

Own .github/workflows, RUNBOOK.md, AGENTS.md, this Spec and its records, and repository settings. Verify native rules by API readback and hosted CI on the setup PR. Preserve unrelated shared checkouts.

## Acceptance Criteria

- [ ] Ordinary work branches accept normal update pushes.
- [ ] Integration and main require current verify, PRs, and force-push/deletion protection.
- [ ] CI runs the full Template suite for integration/main PRs and landed commits.
- [ ] Task merge answers, assembled-Spec review and one owner promotion/release decision replace hand-posted statuses.
- [ ] A minimal main CI bootstrap carries no pending integration product work.

## Testing Seams

Workflow trigger configuration, real hosted CI checks, native rule readback, and fixed-candidate separate-context review.

## Verification Procedure

Run the room's Test And Build commands, inspect the workflow, review the exact diff, and read GitHub rules and CI results. No passing claim from an unrun workflow.

## Documentation Impact

RUNBOOK owns the commands and limits. AGENTS routes delivery to that procedure. Generic upstream templates are unchanged because this is configuration of three named repositories, not a harness release.

## Append-Only Evidence And Execution Log

| Date | Task | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-10-22 | TK-001 | Owner requested auto-merge, clarified separate-agent review and generic work-branch meaning. | Live GitHub settings and workflow inventory read. | This Spec. | Implementation, tests, independent review and settings readback. |

| 2026-10-22 | TK-001 | Live GitHub regenerated test merge SHAs on merge attempts with unchanged head and base; original status binding failed closed. | API readback showed the new test merge had no review status. Corrected procedure uses head SHA plus strict up-to-date checks; retargeting requires fresh review. | RUNBOOK. | Corrected candidate CI, independent review and actual merge. |

| 2026-10-22 | TK-001 | GitHub required CI and independent-agent-review accepted; setup PR #15 merged to integration. | Hosted verify passed; fresh integration 58ca2665b4e343ffb40ddf17eef63d2122cd3a30 contains reviewed head 822e3ad0dc4ffb95996b5227ebb14cd48be4b311. Branch-effective rules require verify from Actions and separate-agent status; main requires explicit-owner-approval and remains unchanged. | AGENTS and RUNBOOK delivered. | No owner QA or main promotion authorized. |
| 2026-10-22 | TK-001 | Task closed | PR 15 hosted CI passed, independent agent review passed, native gate merged without bypass, and fetched integration containment passed. | AGENTS, RUNBOOK and Spec. | No setup gap; owner QA and main promotion not authorized. Git state at close: dirty-tree (2 files: workbench/specs/S-000C-ci-agent-review-auto-merge/SPEC.md, workbench/specs/S-000C-ci-agent-review-auto-merge/tasks/TK-001/TASK.md); recorded reason: Record-only closure of setup already verified on remote integration; these receipts are being published through their own checked PR.; close attribution: {"agent":"codex-auto-merge","claimant":"codex-auto-merge","onBehalfOf":null} |

| 2026-10-22 | TK-000B | Owner approved the repair proposal for all three repositories after the blanket work-branch rule blocked a correction push. | Baseline main lacked CI; a trigger assertion failed as expected. Changed workflow covers PRs and pushes to integration/main. Local tour tests 21/21, syntax, layout, doctor, Wiki and ADR validation passed. | AGENTS, RUNBOOK, AUTO_MERGE.md and sourced Wiki correction. | CI-only main bootstrap, hosted checks, independent assembled review, live rule replacement and containment. |

| 2026-10-22 | TK-000B | Added common evidence-history checks after policy PR #17 landed at 56e7f707d339af1d35c15fd2c30551d9bd96a89f. Main bootstrap remains separate. | Exact shared Audit checker and nine fixtures copied; 9/9 fixtures and 21/21 tour tests pass on both Template baselines. Syntax, layout, doctor, Wiki and ADR validators pass. Integration history check preserves 8 evidence sections against the fetched base. | RUNBOOK test commands and AUTO_MERGE common-check scope updated. | Hosted checks, independent review, history-check integration delivery and explicit approval of the concrete main bootstrap remain pending. No owner QA or release qualification claimed. |

| 2026-10-22 | TK-000B | Corrected the shared history checker before delivery: a rename outside governed filenames could evade later runs. Prior candidates remained unmerged. | Updated exact Audit source from a5357d50a54ac165aae6d68bef1b0c0271e50f73. All 14 fixtures pass on integration and main, including later-commit edits/deletions after retirement and refused lane/kind escapes. Tour tests remain 21/21; all room validators pass. | AUTO_MERGE now states the governed move boundary. | Fresh hosted proof, independent review, integration delivery and explicit concrete main bootstrap approval remain pending. |

## Completion Result

The original setup below is superseded by TK-000B; repair delivery and live settings readback remain pending.

Setup delivered through [PR #15](https://github.com/KaydenClark/Workbench_Template/pull/15); native Task closure recorded below. Spec acceptance is not owner QA or main approval.

## Remaining Limitations Or Follow-Up Specs

Shared credentials cannot distinguish agents from the owner. Review is a recorded process gate.

## Supersession

- Supersedes: none
- Superseded by: none
