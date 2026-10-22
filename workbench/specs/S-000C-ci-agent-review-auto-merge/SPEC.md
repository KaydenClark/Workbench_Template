# S-000C - CI and agent review auto-merge

**Spec ID:** S-000C
**Status:** active
**Priority:** 1
**Owner:** codex-auto-merge
**Stance:** Builder
**Updated:** 2026-10-22
**Catalog description:** Merge approved candidates automatically after CI while retaining owner authority for main.
**Blockers:** none
**Latest event:** TK-001 closed with proof.
**Next gate:** Setup delivered; retain owner QA and explicit main approval as separate gates. No further implementation is assigned.

## Outcome

PRs into integration and Spec/Task work branches can auto-merge after CI and separate-agent review. Main requires explicit owner approval.

## Why It Matters

Agents should not wait for a human to review their work or manually merge a checked candidate.

## Current Verified State

Before this setup, GitHub auto-merge was disabled. Main has a PR rule with zero required human approvals. LLM_Workbench alone has a verify workflow on integration; the other two rooms have no workflow there.

## Desired Behavior

Require verify from GitHub Actions and independent-agent-review. Scope automated delivery to integration, codex/** and claude/** targets. Do not infer literal implementation/ or feature/ prefixes. Retain zero required human reviewers. Record separate-context review against the exact merge candidate, with new evidence after head or base changes. Require explicit-owner-approval for main. Never infer that approval from tests or agent review.

## Decisions And Contracts

The owner is the only person working on these repositories. Agents share the GitHub account. Required statuses enforce recorded gates, but cannot prove separate agent identity or human intent cryptographically. New branch creation remains allowed; updates to gated destinations need passing checks. Auto-merge is armed per reviewed PR; no blanket approval of existing PRs.

## Non-Goals

Main promotion, another GitHub account, managed runtime changes, recovery/version branch protection, unrelated repairs, or automatic approval of old PRs.

## Dependencies And Blockers

- none

## Vertical Implementation Slices

| Task | Slice | Status | Blockers | Proof |
|---|---|---|---|---|

### TK-001 - Configure checked auto-merge

**Stance:** Builder

Own .github/workflows, RUNBOOK.md, AGENTS.md, this Spec and its records, and repository settings. Verify native rules by API readback and hosted CI on the setup PR. Preserve unrelated shared checkouts.

## Acceptance Criteria

- [x] CI runs for PRs to integration and Spec/Task branches.
- [x] Required CI and separate-agent review statuses gate automatic merges without human review requirements.
- [x] Main requires explicit owner approval and is excluded from the automated delivery procedure.
- [x] Settings and hosted checks are read back; incomplete gates remain visible.

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

## Completion Result

Setup delivered through [PR #15](https://github.com/KaydenClark/Workbench_Template/pull/15); native Task closure recorded below. Spec acceptance is not owner QA or main approval.

## Remaining Limitations Or Follow-Up Specs

Shared credentials cannot distinguish agents from the owner. Review is a recorded process gate.

## Supersession

- Supersedes: none
- Superseded by: none
