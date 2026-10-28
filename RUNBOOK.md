# Workbench Template - Runbook

> Generated from LLM Workbench v3.2.2. See the `update-harness`
> skill -> Upgrading The Harness.

Read this manual first. Keep the initial prompt in mind throughout; it determines which context you need.

<a id="orientation"></a>

## Get oriented

1. **Git status.** Run `git status --short --branch`. Identify the branch and existing changes; preserve other work.

2. **[AGENTS](AGENTS.md).** Read the governing instructions. Establish your scope, constraints, required checks and approval boundaries.

3. **RUNBOOK.** Read this flow for gathering context, choosing a procedure and reaching the authorized endpoint. [STARTUP](STARTUP.md) is this room's shared continuation view, not an authority source.

4. **[ARCHITECTURE](ARCHITECTURE.md#routes).** Follow the ownership map to the ask's information and records. Route to the Blueprint, decisions, manifest and other owners as needed.

5. **[GLOSSARY](GLOSSARY.md).** Read the relevant terms; use their established meanings when reading, discussing and changing the work.

6. **Relevant Wiki/context.** Enter through the [Wiki router](workbench/wiki/MEMORY.md) and follow articles relevant to the initial prompt. Recover prior decisions, corrections, rationale, lessons and unresolved questions.

7. **Begin the relevant work.** Identify the current workflow position and next authorized action. New project: [Genesis](.agents/skills/genesis/SKILL.md); existing project: [Adoption](.agents/skills/adoption/SKILL.md). Load the owning skill before performing it; this manual grants no authority.

## Find, claim and resume

To select or resume assigned work, start with [Situate the slice](.agents/skills/implement/SKILL.md#1-situate-the-slice). Execution follows [selection and lifecycle](.agents/skills/implement/SKILL.md#work-selection-and-lifecycle), including claim/resume gates. Check current ownership and corrections; return to the same Task on failure.

## Direct and dispatch

For coordination, follow [Director](.agents/skills/director/SKILL.md), [Dispatcher](.agents/skills/dispatcher/SKILL.md) and [landmarks](.agents/skills/director/SKILL.md#landmark-lifecycle). Return blockers to their owner; keep one shared writer.

## Preserve decisions and corrections

Before dependent output, [Jot](.agents/skills/jot/SKILL.md); [promote](.agents/skills/promote/SKILL.md) authorized decisions. Return corrections to their source with history.

## Check, review and publish

Use [verification](#test-and-build), [assembled review](.agents/skills/code-review/SKILL.md), then [publication](.agents/skills/implement/SKILL.md#branch-completion). Return failures to affected work. A pushed candidate is pending; main needs scoped authority. At Publish, pause, blocked publication, handoff and exit follow [workspace closeout](.agents/skills/implement/workflow-reference.md#workspace-closeout).

## Handoff and recover

At continuation boundaries, [handoff](.agents/skills/handoff/SKILL.md) and [reconcile](STARTUP.md#reconcile). Return through [resume](STARTUP.md#resume); stale summaries defer to current sources.

## Workflows

For one named verb, follow its [steps and loop](.agents/skills/implement/workflow-reference.md#workflows); read only the needed section. The six workflows are Explore (Idea -> Align -> Confirm), Promote (Record -> Publish), Prepare (Map -> Plan), Journey (Implement -> Check -> QA -> Submit), Judge (Review -> Verify -> Approve) and Complete (Deliver -> Cleanup). Ship it is the owner's scoped permission to deliver, not a stage. Compatibility routes follow.

### Align

[Procedure](.agents/skills/implement/workflow-reference.md#align).

### Approve

[Procedure](.agents/skills/implement/workflow-reference.md#approve).

### Check

[Procedure](.agents/skills/implement/workflow-reference.md#check).

<a id="clean-up"></a>

### Cleanup

[Procedure](.agents/skills/implement/workflow-reference.md#cleanup).

### Complete

[Procedure](.agents/skills/implement/workflow-reference.md#complete).

### Confirm

[Procedure](.agents/skills/implement/workflow-reference.md#confirm).

<a id="delivered"></a>

### Deliver

[Procedure](.agents/skills/implement/workflow-reference.md#deliver).

### Explore

[Procedure](.agents/skills/implement/workflow-reference.md#explore).

### Idea

[Procedure](.agents/skills/implement/workflow-reference.md#idea).

### Implement

[Procedure](.agents/skills/implement/workflow-reference.md#implement).

### Jot

[Procedure](.agents/skills/implement/workflow-reference.md#jot).

### Journey

[Procedure](.agents/skills/implement/workflow-reference.md#journey).

### Judge

[Procedure](.agents/skills/implement/workflow-reference.md#judge).

### Lane Sweep

[Procedure](.agents/skills/implement/workflow-reference.md#lane-sweep).

### Map

[Procedure](.agents/skills/implement/workflow-reference.md#map).

### Plan

[Procedure](.agents/skills/implement/workflow-reference.md#plan).

### Prepare

[Procedure](.agents/skills/implement/workflow-reference.md#prepare).

### Promote

[Procedure](.agents/skills/implement/workflow-reference.md#promote).

### Prototype

[Procedure](.agents/skills/implement/workflow-reference.md#prototype).

### Publish

[Procedure](.agents/skills/implement/workflow-reference.md#publish).

### QA

[Procedure](.agents/skills/implement/workflow-reference.md#qa).

### Record

[Procedure](.agents/skills/implement/workflow-reference.md#record).

### Review

[Procedure](.agents/skills/implement/workflow-reference.md#review).

### Submit

[Procedure](.agents/skills/implement/workflow-reference.md#submit).

### Verify

[Procedure](.agents/skills/implement/workflow-reference.md#verify).

## Test And Build

[Check policy](.agents/skills/implement/SKILL.md#engineering-and-verification).

```bash
node tests/tour.test.mjs
node tests/evidence-history.test.mjs
node tools/check-evidence-history.mjs <immutable-base-sha>
node --check tour.mjs
node workbench/tools/workbench-layout.mjs validate --project .
node workbench/tools/spec-workbench.mjs doctor
node workbench/tools/wiki.mjs validate
node workbench/tools/adr.mjs validate
git diff --check
```

### Test Coverage Policy

[Coverage](.agents/skills/implement/SKILL.md#test-coverage-policy).

Skill discovery uses one scope per name. For personal catalog conflict checks,
preserved cleanup and unscanned backups, follow
[Personal discovery conflicts](.agents/skills/workbench-runtime/SKILL.md#personal-discovery-conflicts).

## Organize selected research and release files

Use the [organization procedure](workbench/docs/ORGANIZATION.md) for authorized
path maps, dry runs, private recovery, migration and rollback;
[shared structure](workbench/docs/WORKBENCH_STRUCTURE.md) distinguishes optional
homes from external host worktrees.

## Template Operations

For this reference room's exact setup, upgrade, recovery and evaluation commands, follow the relevant section of [Template operations](workbench/docs/TEMPLATE_OPERATIONS.md).

## CI And Agent Review Auto-Merge

Follow [checked delivery](workbench/docs/AUTO_MERGE.md) for CI, Task merge answers, assembled-Spec review, work-branch pushes and explicit main/release approval.
