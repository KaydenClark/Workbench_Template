# Workbench Template - Hot Taskboard

> Generated from LLM Workbench v3.2.2.

**Current focus:** Verify and integrate the repaired copyable Workbench Template.
**Owner:** Kayden Clark (executive); assigned agent (execution)
**Last updated:** 2026-09-09

This is an active execution projection, not a requirements store or proof
archive. Use `node workbench/tools/spec-workbench.mjs next --json` to select work and load only its linked spec.
Commands live in `RUNBOOK.md`.

## Active Specs

<!-- hot-specs:start -->
| Spec | Current slice | Owner | Blocker | Latest meaningful event | Next gate |
|---|---|---|---|---|---|
| [S-000C](workbench/specs/S-000C-ci-agent-review-auto-merge/SPEC.md) | TK-000B: Repair work-branch delivery gates, review policy and main CI coverage (in-progress; runs 3, codex/ci-history-repair @ 0f76e95, dirty 4) | codex-auto-merge | none | TK-000B claimed by codex-ci-repair. | Close TK-000B with verification and documentation proof. |
| [S-000D](workbench/specs/S-000D-workbench-feature-catalog/SPEC.md) | Acceptance / owner gate | codex-catalog | none | TK-000C closed with proof. | Owner review and main verification remain separate; PR20 carries remote integration and fresh-clone receipts. |
| [S-000E](workbench/specs/S-000E-v3-2-2-harness-upgrade/SPEC.md) | TK-000D: Install, reconcile and exercise the pinned v3.2.2 source (in-progress) | claude-s006k-tk00b7 | none within the installation; release fitness audit, independent assembled review and owner main approval are separate gates | Gate controls reinstalled from LLM_Workbench 8b914257 through update-harness; review should-fixes recorded. | Reviewed merge of the gate reinstall into Template integration, then installed agent scenarios on the merged commit (LLM_Workbench S-006J TK-00B4). |
| [S-001](workbench/specs/S-001-self-explaining-room/SPEC.md) | Acceptance / owner gate | Kayden Clark | none | TK-003 unblocked by owner direction and closed; the room is published and clonable. | None; every slice is closed and the capability is published. |
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
