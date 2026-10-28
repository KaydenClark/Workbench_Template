---
name: writing-for-agents
description: Write concise agent artifacts. Use when creating or editing skills, AGENTS.md, CLAUDE.md or another host adapter, BLUEPRINT.md, RUNBOOK.md, or linked agent references.
---

# Write concise agent artifacts

Make the needed action predictable with the fewest words and routes. Keep authority and accepted requirements intact. Use the [full writing reference](REFERENCE.md) for definitions, examples, and pruning guidance; when authoring a skill, use [skill mechanics](SKILL-MECHANICS.md) for frontmatter and invocation.

For cross-skill calls, follow the [explicit invocation convention and host fallback](INVOCATION.md).

## Set a word budget

- `AGENTS.md`: at most 500 words. `BLUEPRINT.md`: budget 250–400 words when complete; shorter is fine.
- `RUNBOOK.md`: under 450 words; follow accepted workflow semantics and chosen structure, placing task-specific procedural detail behind on-demand links.
- Skill entrypoints: at most 400 words; disclose branch-specific detail in linked references.

Treat these as ceilings. Do not pad an adequate shorter entry. Keep required controls and routes; reduce repetition or disclose reference before cutting a requirement.

## Place information

Inline only what every run needs. Keep ordered actions as steps and consulted rules as reference. Put branch-only material behind a named link whose wording says what it contains and exactly when to read it. Sharpen a weak pointer before moving its target inline. Front-load its leading word, name one trigger per branch, and omit identity repeated in the target. Keep each concept, its rules, and caveats together.

## Make work finishable

End each step with a completion condition that is both observable and exhaustive. State what evidence closes it. If completion still feels vague and the agent rushes ahead, split only across a real handoff boundary; an inline call does not hide later steps.

## Prune

Give each meaning one authoritative home; link consumers. Let files, config, and `--help` own facts they expose. Remove stale or irrelevant lines and sentence-level no-ops that do not change behavior. Prefer a familiar leading word to repeated explanation. State the desired action positively; keep prohibitions only for hard guardrails and pair them with the safe action.

## Check

Confirm every required branch reaches its material, every step has a completion condition, links resolve, and budgets hold. Shorter text alone does not prove better behavior; compare representative fresh-context use before claiming an outcome improvement.
