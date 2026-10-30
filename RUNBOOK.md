# Workbench Template - Runbook

> Generated from LLM Workbench v3.2.2. See the `update-harness`
> skill -> Upgrading The Harness.

Keep the initial prompt in mind throughout: it determines which context you need.

<a id="orientation"></a>

## Get oriented

1. **Git status.** Run `git status --short --branch`; preserve other work.
2. **[AGENTS](AGENTS.md).** Establish scope, constraints, checks and authority.
3. **RUNBOOK.** Read this operating flow.
4. **[ARCHITECTURE](ARCHITECTURE.md#routes).** Locate information owners.
5. **[GLOSSARY](GLOSSARY.md).** Read relevant terms.
6. **Relevant Wiki/context.** Read [articles relevant to the initial prompt](workbench/wiki/MEMORY.md); recover decisions and corrections.
7. **Begin the relevant work.** Read [TASKBOARD](TASKBOARD.md); follow linked owners for assignment, claimant, blockers and next action. Identify current workflow position and next authorized action. Reuse existing records and settled answers. Load the owning skill before performing it.

<a id="find-claim-and-resume"></a>

## Orchestrate or implement

[Coordinate](.agents/skills/dispatcher/SKILL.md) bounded assignments and writers, or [implement](.agents/skills/implement/SKILL.md#work-selection-and-lifecycle) the assigned Spec/Task under existing approval.

<a id="use-and-maintain-the-wiki"></a>

## Preserve knowledge as it happens

[Capture](.agents/skills/jot/SKILL.md) consequential knowledge before dependent work; [update its owner](.agents/skills/to-docs/SKILL.md).

## Finish at the requested endpoint

Complete relevant work through required checks, review and authorized delivery. Update knowledge and work owners, regenerate TASKBOARD, then clean up relevant work through [workspace closeout](.agents/skills/implement/workflow-reference.md#workspace-closeout). Preserve useful knowledge and evidence before cleanup. For unfinished work, leave current state, blockers and the next action recoverable through [continuation](.agents/skills/save/taskboard-continuation.md).

## Workflows

<a id="lane-sweep"></a>

[Steps and loops](.agents/skills/implement/workflow-reference.md#workflows); [organization](workbench/docs/ORGANIZATION.md); [structure](workbench/docs/WORKBENCH_STRUCTURE.md); [skill discovery](.agents/skills/workbench-runtime/SKILL.md#personal-discovery-conflicts).

## Test And Build

Run `node tools/check-artifact-budgets.mjs`; [character policy](workbench/docs/artifact-budgets.md).

[Check policy](.agents/skills/implement/SKILL.md#engineering-and-verification).

```bash
node tests/tour.test.mjs
```

<a id="ci-and-agent-review-auto-merge"></a>

[Full checks](workbench/docs/TEMPLATE_OPERATIONS.md#test-and-build); [CI](workbench/docs/AUTO_MERGE.md).

### Test Coverage Policy

[Coverage](.agents/skills/implement/SKILL.md#test-coverage-policy).
