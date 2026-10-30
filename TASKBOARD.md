# Workbench Template - Hot Taskboard

> Generated from LLM Workbench v3.2.2.

**Current focus:** Verify and integrate the repaired copyable Workbench Template.
**Owner:** Kayden Clark (executive); assigned agent (execution)
**Last updated:** 2026-10-29

Read this continuation view to locate relevant work, then follow its linked
Spec/Task owners for current scope, claimant, blockers, evidence and next action.
A stale or missing row grants no authority; use current owners and the manifest.
For work outside an assigned Spec, follow RUNBOOK and the relevant Wiki context.

Before handoff or exit, update those owners and knowledge, then run
`node workbench/tools/spec-workbench.mjs render` to refresh this projection.
Keep one writer per owner and serialize shared board regeneration. Never edit
generated rows as an independent queue. An empty board means no projected work.
[Continuation and recovery](.agents/skills/save/taskboard-continuation.md) preserves
source freshness, publication state and interrupted work.

## Active Specs

<!-- hot-specs:start -->
| Spec | Current slice | Owner | Blocker | Latest meaningful event | Next gate |
|---|---|---|---|---|---|
| [S-000C](workbench/specs/S-000C-ci-agent-review-auto-merge/SPEC.md) | TK-000B: Repair work-branch delivery gates, review policy and main CI coverage (in-progress; runs 3, codex/ci-history-repair @ 0f76e95, dirty 4) | codex-auto-merge | none | TK-000B claimed by codex-ci-repair. | Close TK-000B with verification and documentation proof. |
| [S-000D](workbench/specs/S-000D-workbench-feature-catalog/SPEC.md) | Acceptance / owner gate | codex-catalog | none | TK-000C closed with proof. | Owner review and main verification remain separate; PR20 carries remote integration and fresh-clone receipts. |
| [S-000E](workbench/specs/S-000E-v3-2-2-harness-upgrade/SPEC.md) | TK-000D: Install, reconcile and exercise the pinned v3.2.2 source (in-progress) | codex-runbook-template | none within the installation; release fitness audit, independent assembled review and owner main approval are separate gates | Candidate eb3600fb622e9b013f88be6d1509e407d30173aa observed contained in origin/integration at b874814af4f58eb1d2718888ac54b53ea5f3bbb1; continuation recorded. | The bounded RUNBOOK repair is delivered. Continue remaining broader upgrade acceptance through its existing release owners, including installed authority proof and unresolved Lexicon disposition confirmation; main and release approval remain excluded from this assignment. |
| [S-001](workbench/specs/S-001-self-explaining-room/SPEC.md) | Acceptance / owner gate | Kayden Clark | none | TK-003 unblocked by owner direction and closed; the room is published and clonable. | None; every slice is closed and the capability is published. |
| [S-000F](workbench/specs/S-000F-artifact-budget-remediation/SPEC.md) | Acceptance / owner gate | codex-artifact-budget-consumer | none | Candidate 469393d4f5d7c98042d52abb2b3ac0b8d9e7648f observed contained in origin/integration at 47131f7a2ce8dff38c7df4ccfb1a2b9a3a40ad17; continuation recorded. | Owner Human QA remains separate before Spec completion; no broad harness adoption, main promotion, release or new Audit trials are authorized. |
<!-- hot-specs:end -->

Completed specs disappear from this projection immediately. Their requirements,
decisions, acceptance, proof, completion, and supersession remain in the stable
spec linked from the manifest specs lane `CATALOG.md`.

## Owner Decisions

Only decisions blocking an active spec appear here. Put options,
recommendation, cost/impact, owner, and next gate in one concise row; move the
resolved result into the owning spec.

No current owner decision. The publication decision is settled in S-001; its
historical evidence remains in the stable spec.
