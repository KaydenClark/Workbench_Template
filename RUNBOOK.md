# Workbench Template - Runbook

> Generated from LLM Workbench v3.2.1. See the `update-harness`
> skill -> Upgrading The Harness.

## Orientation

Start with [STARTUP](STARTUP.md), then assigned Spec/Task. New project: [Genesis](workbench/skills/genesis/SKILL.md); existing project: [Adoption](workbench/skills/adoption/SKILL.md). Return to the assignment; this manual grants no authority.

## Find, claim and resume

To select or resume assigned work, start with [Situate the slice](workbench/skills/implement/SKILL.md#1-situate-the-slice). Execution follows [selection and lifecycle](workbench/skills/implement/SKILL.md#work-selection-and-lifecycle), including claim/resume gates. Check current ownership and corrections; return to the same Task on failure.

## Direct and dispatch

For coordination, follow [Director](workbench/skills/director/SKILL.md), [Dispatcher](workbench/skills/dispatcher/SKILL.md) and [landmarks](workbench/skills/director/SKILL.md#landmark-lifecycle). Return blockers to their owner; keep one shared writer.

## Preserve decisions and corrections

Before dependent output, [Jot](workbench/skills/jot/SKILL.md); [promote](workbench/skills/promote/SKILL.md) authorized decisions. Return corrections to their source with history.

## Check, review and publish

Use [verification](#test-and-build), [assembled review](workbench/skills/code-review/SKILL.md), then [publication](workbench/skills/implement/SKILL.md#branch-completion). Return failures to affected work. A pushed candidate is pending; main needs scoped authority.

## Handoff and recover

At continuation boundaries, [handoff](workbench/skills/handoff/SKILL.md) and [reconcile](STARTUP.md#reconcile). Return through [resume](STARTUP.md#resume); stale summaries defer to current sources.

## Workflows

For one named verb, follow its [steps and loop](workbench/skills/implement/workflow-reference.md#workflows); read only the needed section. Compatibility routes follow.

### Align

[Procedure](workbench/skills/implement/workflow-reference.md#align).

### Approve

[Procedure](workbench/skills/implement/workflow-reference.md#approve).

### Check

[Procedure](workbench/skills/implement/workflow-reference.md#check).

### Clean Up

[Procedure](workbench/skills/implement/workflow-reference.md#clean-up).

### Complete

[Procedure](workbench/skills/implement/workflow-reference.md#complete).

### Confirm

[Procedure](workbench/skills/implement/workflow-reference.md#confirm).

### Delivered

[Procedure](workbench/skills/implement/workflow-reference.md#delivered).

### Explore

[Procedure](workbench/skills/implement/workflow-reference.md#explore).

### Idea

[Procedure](workbench/skills/implement/workflow-reference.md#idea).

### Implement

[Procedure](workbench/skills/implement/workflow-reference.md#implement).

### Jot

[Procedure](workbench/skills/implement/workflow-reference.md#jot).

### Journey

[Procedure](workbench/skills/implement/workflow-reference.md#journey).

### Judge

[Procedure](workbench/skills/implement/workflow-reference.md#judge).

### Lane Sweep

[Procedure](workbench/skills/implement/workflow-reference.md#lane-sweep).

### Map

[Procedure](workbench/skills/implement/workflow-reference.md#map).

### Plan

[Procedure](workbench/skills/implement/workflow-reference.md#plan).

### Prepare

[Procedure](workbench/skills/implement/workflow-reference.md#prepare).

### Promote

[Procedure](workbench/skills/implement/workflow-reference.md#promote).

### Prototype

[Procedure](workbench/skills/implement/workflow-reference.md#prototype).

### Publish

[Procedure](workbench/skills/implement/workflow-reference.md#publish).

### QA

[Procedure](workbench/skills/implement/workflow-reference.md#qa).

### Record

[Procedure](workbench/skills/implement/workflow-reference.md#record).

### Review

[Procedure](workbench/skills/implement/workflow-reference.md#review).

### Ship

[Procedure](workbench/skills/implement/workflow-reference.md#ship).

### Submit

[Procedure](workbench/skills/implement/workflow-reference.md#submit).

### Verify

[Procedure](workbench/skills/implement/workflow-reference.md#verify).

## Test And Build

[Check policy](workbench/skills/implement/SKILL.md#engineering-and-verification).

```bash
node tests/tour.test.mjs
node --check tour.mjs
node workbench/tools/workbench-layout.mjs validate --project .
node workbench/tools/spec-workbench.mjs doctor
node workbench/tools/wiki.mjs validate
node workbench/tools/adr.mjs validate
git diff --check
```

### Test Coverage Policy

[Coverage](workbench/skills/implement/SKILL.md#test-coverage-policy).

## Template Operations

For this reference room's exact setup, upgrade, recovery and evaluation commands, follow the relevant section of [Template operations](workbench/docs/TEMPLATE_OPERATIONS.md).

## CI And Agent Review Auto-Merge

Follow [checked delivery](workbench/docs/AUTO_MERGE.md) for CI, Task merge answers, assembled-Spec review, work-branch pushes and explicit main/release approval.
