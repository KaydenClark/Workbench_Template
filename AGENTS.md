# Workbench Template - Agent Operating System

> Generated from LLM Workbench v3.2.1.

## Dev environment tips

- Start with `git status --short --branch` and the [STARTUP](STARTUP.md). Load the relevant tracked skill before performing its operation.
- Resolve assigned work through [the manifest](workbench/manifest.json). Read the assigned Spec and Task before editing; use [implement](workbench/skills/implement/SKILL.md#work-selection-and-lifecycle) to select and claim work.
- Use the [Wiki router](workbench/wiki/MEMORY.md) for project context, [Lexicon](LEXICON.md#task-routing) for meanings and ownership, and [Blueprint](BLUEPRINT.md) for architecture. Follow their relevant links; use a bounded search when a route fails.
- Finish the user's requested endpoint. Resolve reversible decisions within scope and recover existing answers before asking. Do not add approval gates or treat a question as authorization.
- Read source and dependencies before editing. Make the smallest correct change and preserve unrelated dirty work. Keep one writer for shared state.
- Edit only assigned root controls, `tour.mjs`, `tests/`, and `workbench/`; update `workbench/tools/` only through the managed route. Ask before changing another repository or adding private material.
- Ask before destructive actions, paid services or scope expansion. Never commit secrets or private data; stop and report committed credentials you discover. Use another agent provider only on the owner's specific instructions in the current request.
- Maintain changed documentation through [to-docs](workbench/skills/to-docs/SKILL.md). Before the first dependent output, including reports, [jot](workbench/skills/jot/SKILL.md) sourced owner decisions and corrections with speaker and linked history; resume from the latest confirmed state.

## Testing instructions

- Run `node workbench/tools/spec-workbench.mjs doctor` and `node tests/tour.test.mjs`.
- For behavior changes, confirm a failing test before implementing the fix. Run targeted checks, then the [full verification suite](RUNBOOK.md#test-and-build). Run it for controls, templates, tools, evals and Spec changes too.
- Check the result against the assigned acceptance criteria. Fix failures within scope; report exactly what remains unverified. Never weaken checks to get a pass or clear review findings with unrelated green tests.
- For harness changes, run the [engineering and verification procedure](workbench/skills/implement/SKILL.md#engineering-and-verification) and the room's [test suite](RUNBOOK.md#test-and-build) before and after. Update generic templates alongside root files or explain the exemption.

## PR instructions

- Branch from the current target using `codex/`, `claude/` or `backup/`. Never commit directly to `main` or `integration`; PRs default to `integration`. Follow the project's release instructions for exceptions; use [version-control procedures](workbench/skills/implement/SKILL.md#version-control-procedures).
- Keep each commit to one logical change with an imperative subject. Include the Worker's [merge-safety and completion answers](workbench/skills/implement/SKILL.md#4-review-at-the-relevant-boundary) in the PR.
- Follow [code-review](workbench/skills/code-review/SKILL.md) at the required review boundary. Do not request separate-context review for a Task or merge while required review is pending.
- When integration is authorized and its gates pass, merge, prove containment and clean up through [implement](workbench/skills/implement/SKILL.md#branch-completion). Only the owner promotes integration to `main` after required Task/Spec checks, reviews, verification and pre-PR QA; use a PR and prove containment. Never sweep unrelated or failed work into main.
- Report what changed, why, risks, verification and the endpoint reached. Preserve unresolved review and Human QA findings in their existing owners.
