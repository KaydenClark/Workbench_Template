# Workbench Template - Agent Operating System

> Generated from LLM Workbench v3.2.2.

## Dev environment tips

- Start with `git status --short --branch`, read this brief and [RUNBOOK](RUNBOOK.md#get-oriented). Follow: [ARCHITECTURE](ARCHITECTURE.md#routes) -> [GLOSSARY](GLOSSARY.md) -> relevant [Wiki/context](workbench/wiki/MEMORY.md); read [TASKBOARD](TASKBOARD.md) to recover relevant work from its current owners. Load the relevant tracked skill before performing its operation.
- Resolve assigned work through [the manifest](workbench/manifest.json). Read the assigned Spec and Task before editing; use [implement](.agents/skills/implement/SKILL.md#work-selection-and-lifecycle) to select and claim work.
- Before changing files, read back concept, scope, constraints and endpoint. Before leaving Explore, await explicit owner confirmation; no request confirms itself; intent corrections restart it. Before leaving Prepare, obtain explicit owner approval of planned execution. One response may supply both. Jot each; reuse [authority](.agents/skills/implement/execution-authority.md) within scope.
- Use the [Wiki router](workbench/wiki/MEMORY.md) for project context, [GLOSSARY](GLOSSARY.md) for meanings, [ARCHITECTURE](ARCHITECTURE.md) for ownership and routes, and [Blueprint](BLUEPRINT.md) for direction. Follow their relevant links; use a bounded search when a route fails.
- Finish the authorized endpoint. Resolve reversible decisions within scope; recover existing answers; add no other gates.
- Read source and dependencies before editing. Make the smallest correct change and preserve unrelated dirty work. Keep one writer for shared state.
- Edit only assigned root controls, `tour.mjs`, `tests/`, and `workbench/`; update `workbench/tools/` and `.agents/skills/` only through the managed route. Ask before changing another repository or adding private material.
- Ask before destructive actions, paid services or scope expansion. Never commit secrets or private data; stop and report committed credentials you discover. Use another agent provider only on the owner's specific instructions in the current request.
- Maintain changed documentation through [to-docs](.agents/skills/to-docs/SKILL.md). Before the first dependent output, including reports, [jot](.agents/skills/jot/SKILL.md) sourced owner decisions and corrections with speaker and linked history; resume from the latest confirmed state.
- [Workspace closeout](.agents/skills/implement/workflow-reference.md#workspace-closeout): inventory/recovery for Publish, pause, blocked publication, handoff, exit and main.

## Testing instructions

- Run `node workbench/tools/spec-workbench.mjs doctor` and `node tests/tour.test.mjs`.
- For behavior changes, confirm a failing test before implementing the fix. Run targeted checks, then the [full verification suite](RUNBOOK.md#test-and-build). Run it for controls, templates, tools, evals and Spec changes too.
- Check the result against the assigned acceptance criteria. Fix failures within scope; report exactly what remains unverified. Never weaken checks to get a pass or clear review findings with unrelated green tests.
- For harness changes, run the [engineering and verification procedure](.agents/skills/implement/SKILL.md#engineering-and-verification) and the room's [test suite](RUNBOOK.md#test-and-build) before and after. Update generic templates alongside root files or explain the exemption.

## PR instructions

- Branch from the current target using `codex/`, `claude/` or `backup/`. Never commit directly to `main` or `integration`; PRs default to `integration`. Follow the project's release instructions for exceptions; use [version-control procedures](.agents/skills/implement/SKILL.md#version-control-procedures).
- Keep each commit to one logical change with an imperative subject. Include the Worker's [merge-safety and completion answers](.agents/skills/implement/SKILL.md#4-review-at-the-relevant-boundary) in the PR.
- Follow [checked delivery](RUNBOOK.md#ci-and-agent-review-auto-merge): Task PRs need self-check, merge answers and CI; assembled Specs need independent [code review](.agents/skills/code-review/SKILL.md). Ordinary work-branch pushes have no delivery gates. Never bypass an existing review hold.
- When integration is authorized and its gates pass, merge, prove containment and clean up through [implement](.agents/skills/implement/SKILL.md#branch-completion). Only the owner promotes integration to `main` after required Task/Spec checks, reviews, verification and pre-PR QA; use a PR and prove containment. Never sweep unrelated or failed work into main.
- Report what changed, why, risks, verification and the endpoint reached. Preserve unresolved review and Human QA findings in their existing owners.
