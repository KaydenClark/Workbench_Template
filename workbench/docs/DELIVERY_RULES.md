# Template delivery rules

Governing detail linked from [AGENTS](../../AGENTS.md#pr-instructions).

## PR instructions

- Branch using `codex/`, `claude/` or `backup/`; never commit directly to main/integration. Target integration, subject to project release exceptions.
- Keep commits logical; supply [merge answers](../../.agents/skills/implement/SKILL.md#4-review-at-the-relevant-boundary), Task self-check and CI. Require independent assembled [Spec review](../../.agents/skills/code-review/SKILL.md); preserve holds. Work-branch pushes add no gates.
- Follow [checked delivery](../../RUNBOOK.md#ci-and-agent-review-auto-merge) and [branch completion](../../.agents/skills/implement/SKILL.md#branch-completion): verify containment and cleanup. Only the owner promotes scoped work to main after checks, reviews, verification and pre-PR QA, through a PR with proven containment. Exclude unrelated/failed work.
- Report changes, reasons, risks, verification, actual endpoint and unresolved review/Human QA findings.
