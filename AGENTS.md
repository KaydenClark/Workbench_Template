# Workbench Template

> Generated from LLM Workbench v3.2.2.

## Dev environment tips

- Run `git status --short --branch`; read this brief and [RUNBOOK](RUNBOOK.md#get-oriented), then [Architecture](ARCHITECTURE.md#routes), [Glossary](GLOSSARY.md), relevant [Wiki](workbench/wiki/MEMORY.md) and [TASKBOARD](TASKBOARD.md) owners. Load the tracked skill; consult [Blueprint](BLUEPRINT.md).
- Resolve assigned Spec/Task through [the manifest](workbench/manifest.json); read both before editing. Follow [implementation](.agents/skills/implement/SKILL.md#work-selection-and-lifecycle) for claims.
- Read back concept, scope, constraints and endpoint. Before changes, obtain explicit confirmation to leave Explore and execution approval to leave Prepare; a request never confirms itself. One answer may supply both. Corrections restart Explore. Jot each; reuse [authority](.agents/skills/implement/execution-authority.md).
- Finish the authorized endpoint; recover answers, resolve reversible choices within scope and add no gates. Read source/dependencies; make the smallest correct change. Preserve unrelated work and one shared writer.
- Edit only assigned root controls, `tour.mjs`, `tests/` and `workbench/`; managed tools/skills change only through their update route. Ask before another repository, private material, destructive actions, paid services, scope expansion or another agent provider. Never commit secrets/private data; report committed credentials.
- Before dependent output, [Jot](.agents/skills/jot/SKILL.md) sourced owner decisions/corrections with speaker/history; maintain changed owners through [to-docs](.agents/skills/to-docs/SKILL.md). Follow [workspace closeout](.agents/skills/implement/workflow-reference.md#workspace-closeout) at Publish, pause, blocked publication, handoff and exit.

## Testing instructions

- Run `node workbench/tools/spec-workbench.mjs doctor`, `node tests/tour.test.mjs`, focused checks and [full verification](RUNBOOK.md#test-and-build).
- Confirm failing tests before behavior fixes. Check acceptance; fix in-scope failures, report unverified gaps and preserve findings without weakening checks.
- For harness changes use [engineering verification](.agents/skills/implement/SKILL.md#engineering-and-verification) before/after; update generic templates or explain exemptions.

## PR instructions

- Branch using `codex/`, `claude/` or `backup/`; target integration and never commit directly to main/integration. Follow project release exceptions.
- Follow [delivery rules](workbench/docs/DELIVERY_RULES.md) for logical commits, merge answers, self-check/CI, independent assembled review, holds, containment and cleanup. These rules bind here; work-branch pushes add no gates.
- Only the owner promotes scope to main after required checks, reviews, verification and pre-PR QA, through a PR with proven containment. Exclude unrelated/failed work.
- Report changes, reasons, risks, verification, endpoint and unresolved review/Human QA findings.
