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
```

### Test Coverage Policy

[Coverage](workbench/skills/implement/SKILL.md#test-coverage-policy).

## Template Operations

For this reference room's exact setup, upgrade, recovery and evaluation commands, follow the relevant section of [Template operations](workbench/docs/TEMPLATE_OPERATIONS.md).

## CI And Agent Review Auto-Merge

This repository allows automatic delivery into `integration` and the `codex/**`
and `claude/**` branches used for Spec and Task work. Implementation and feature
are descriptions of that work, not additional branch prefixes. Recovery and
version-history branches are excluded. This instance configuration does not
change the generic Workbench templates or managed skills.

Required checks are `verify` from GitHub Actions and `independent-agent-review`.
There is no required human GitHub approval. The independent reviewer is an agent
in a separate context from the implementer. This owner-requested delivery gate
also applies to PRs targeting work branches. It does not record owner QA or
complete a Spec. Existing review holds remain binding.

Native required-check rules also constrain direct updates to matching branches.
New branches can be created, but an unchecked update to a protected work branch
can be refused. Use a child PR to update an assembled work branch; do not bypass
the checks or force-push. Older branches must receive the CI workflow before
their PR checks can pass. Missing checks block rather than count as green.

### Review And Queue

1. Read the open PR and pin its repository, number, head SHA, base ref, base SHA,
   and GitHub test merge SHA (`merge_commit_sha`). Resolve conflicts first.
2. A separate agent reviews that exact assembled candidate against its controls,
   assigned scope, verification and open findings. Retain the review as durable
   evidence with those identifiers, the implementer/reviewer context identities,
   verdict, findings and limits. A new head or base needs fresh review. Never
   infer a pass from CI or publish a review status for your own implementation.
3. Re-read the PR and compare its pinned head, base and target. Only after a PASS
   publish `independent-agent-review` on the **head SHA**. GitHub can regenerate
   the test merge SHA even with unchanged parents, so do not attach the gate to
   that temporary commit. Strict up-to-date checks require the head to contain
   the current target; a new head requires a new review status. A retargeted PR
   needs fresh review even if its head did not change. Link the durable review
   in `target_url`. For a failed review,
   publish `failure` and return the work for repair. If evidence is unavailable,
   leave the gate pending.
4. Confirm the target is `integration`, `codex/*` or `claude/*`, then arm native
   auto-merge with the exact reviewed head. GitHub waits for required CI and the
   review status. Never use `--admin`; never queue `main` through this procedure.
5. Read back `autoMergeRequest` or the merged result. After a merge, fetch the
   target and prove containment before reporting delivery or cleaning branches.

Commands below use the identifiers verified above; they do not perform a review:

```bash
gh api "repos/$REPO/pulls/$PR" --jq '{state, draft, head: .head.sha, base_ref: .base.ref, base: .base.sha, merge: .merge_commit_sha, mergeable}'
# Only the independent reviewer may record this PASS after the fresh comparison.
gh api --method POST "repos/$REPO/statuses/$HEAD_SHA"   -f state=success -f context=independent-agent-review   -f description='Separate-agent review passed for this merge candidate'   -f target_url="$REVIEW_URL"
gh pr merge "$PR" --repo "$REPO" --auto --merge --match-head-commit "$HEAD_SHA"
gh pr view "$PR" --repo "$REPO" --json state,autoMergeRequest,mergeCommit
```

Do not manufacture an evidence URL, reuse a pass for another candidate, or mark
failed/missing CI successful. Auto-merge is enabled per reviewed PR; the repository
setting alone does not queue every open PR. Existing PRs still need their own review.

### Main Remains Owner-Controlled

`main` has a separate required `explicit-owner-approval` status. Only a specific,
current owner instruction approving that exact promotion permits an agent to
record it against the approved head SHA, with a durable approval reference.
Strict up-to-date checks also apply to main.
CI and agent review never supply that status. Do not arm auto-merge for `main`;
perform the scoped promotion only after the owner's explicit approval. This setup
request is not approval of any main content, commit, push or merge.

Agents and the owner share a GitHub account. GitHub enforces status presence and
head binding; it cannot prove agent-context independence or distinguish an
owner instruction from an agent assertion. Those remain explicit process rules.
No extra person, GitHub account or paid review service is required.
