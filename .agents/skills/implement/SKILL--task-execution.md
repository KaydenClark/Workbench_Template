# Full procedure

[Implement entry](SKILL.md). Use the sections relevant to the assigned operation.

## Purpose


Inherit both mandatory owner judgments under [authority and continuation](../implement/execution-authority.md): explicit confirmation before leaving Explore and explicit execution approval before leaving Prepare. Reuse their sources within scope; delegation and this skill grant neither.

Implement one eligible task from the assigned stable `SPEC.md`. Stability names its identity, not a fixed folder;
resolve its current route through the manifest and native lifecycle tools. One invocation
owns one task and one durable writer lane.

For v3 work, `workbench/manifest.json` is the support-path authority; the
manifest-aware spec tool resolves the assigned `SPEC.md`. Do not write a root
`specs/` fallback or copy the global core into a project-local skills tree.
Authorized room-local extensions follow the
[`workbench-runtime` skill](../workbench-runtime/SKILL.md#room-local-skills).

## 1. Situate the slice

Verify the repository root, branch, remote, upstream, and dirty state. Read the
nearest `AGENTS.md` and [TASKBOARD continuation](../save/taskboard-continuation.md#resume), then run:

```bash
node workbench/tools/spec-workbench.mjs doctor
node workbench/tools/spec-workbench.mjs next --json
node workbench/tools/spec-workbench.mjs show S-###
```

Continue when the explicitly assigned task is ready or resumable and the
working tree can be safely attributed. `next` supports owner-directed pickup;
it does not override an explicit assignment. Use the stance assigned in SPEC
and TASK, and investigate within that task without inventing another queue item.
Resolve the Task's `TASK.md` through the Spec and manifest; read its destination,
blockers and receipt rows. Call the Skill tool for `jot` to read relevant topic
Wiki context (and a preserved legacy note when referenced). If already in progress,
verify its owner, branch and achieved proof and resume without a second claim.
For a planned or table-backed packet, follow the native activation and
conversion route in
[Worker: selection, implementation and hand-back](#worker-selection-implementation-and-hand-back)
only under existing authorization; retain the existing
Task ID. Never manufacture a replacement Task to avoid a blocker.

Name the authorized endpoint before editing: scoped Worker handback, a draft
candidate, or reviewed integration, as the request and controls actually allow.
A ready slice must belong to this writer; claim it:

```bash
node workbench/tools/spec-workbench.mjs claim S-### --agent NAME
```

Claim refuses, before any write, a Spec whose recorded owner judgments are
missing or out of scope; recover them from their source per
[authority and continuation](execution-authority.md#continue-without-losing-authority),
never by relabeling.

The slice is situated when one eligible task, its acceptance boundary, its
public testing seam, and its single writer are explicit.

## 2. Drive the behavior

Use red/green/refactor at the agreed seam:

1. Add or change the smallest durable test that expresses the task behavior.
2. Run it and observe the expected red failure.
3. Implement the smallest change that turns it green.
4. Refactor while the focused test stays green.

Run focused project-owned verification during the loop. Select the final gate through
[Engineering and verification](#engineering-and-verification). The behavior is
driven when expected red and green results and the applicable gate are proven.

At checkpoint, handoff or yield, update existing source owners first and follow
[TASKBOARD continuation](../save/taskboard-continuation.md#reconcile). Keep one
writer per owner and serialize shared board regeneration from current sources.
Verify source freshness on resume and distinguish local, pushed and fetched
integration state. The projection grants no authority.

## 3. Document and checkpoint

Update the owning documentation named by `AGENTS.md`; keep capability state and
proof in the assigned Spec and Task; keep the Taskboard a generated projection.
Record meaningful checks while the Task is still in progress, including the
expected red failure, green result, changed documentation and remaining gaps:

```bash
node workbench/tools/spec-workbench.mjs receipt S-### --task TK-### \
  --tests "ACTUAL COMMANDS AND RESULTS" --docs "OWNERS UPDATED OR reason" \
  --remaining-gap "GAP OR none"
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
```

Call the Skill tool for `to-docs` for changed truth and call the Skill tool for [`save` publication](../save/SKILL.md#publication)
for durable PR progress and checked integration landing. Keep proof once at its
owner and link it from summaries rather than hand-copying evidence.
Create a truthful in-progress checkpoint: stage only this writer's named files,
commit and push to the assigned branch, fetch that branch, then prove
`git merge-base --is-ancestor <commit> <remote>/<branch>` against the fresh ref.
Also compare the advertised remote tip with the intended candidate when handing
off an exact head. A failed push or fetch is pending recovery, never success;
retain the local commit and prepared publication details and name the blocker.
Do not copy credentials or expand access to bypass an unavailable route.

If a command changed durable project state, append evidence to the owning spec.
For routine read-only runs, a final response note is enough.

Record the comparison base as `BASE_SHA` and the remotely verified checkpoint as
`HEAD_SHA`. This step is complete only when the remote is the recovery point for
the exact code, tests, documentation, and in-progress spec state under review.

## 4. Review at the relevant boundary

Read [4. Review at the relevant boundary](SKILL--4-review-at-the-relevant-boundary.md#4-review-at-the-relevant-boundary) when working on this topic.

## 5. Close and recover remotely

Close the task only after its scoped acceptance and required proof are met.
If the task includes integration, the merge answers above also apply, and an
assembled Spec candidate also needs its Verify review:

```bash
node workbench/tools/spec-workbench.mjs close S-### --agent NAME \
  --proof "NAMED VERIFICATION" \
  --docs "DOCS UPDATED OR Docs checked; no update needed + reason" \
  --remaining-gap "GAP OR none"
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
```

Commit the close evidence and generated projection, make the final push, and
fetch and verify containment of the local commit in the remote branch, naming
both exact SHAs. If the task remains
incomplete, its in-progress checkpoint is the handoff; closing is not truthful.

When integration is authorized, automated delivery stops at the declared
integration branch after the
repository's review gates pass. The owner controls promotion from that branch
to the release branch.

Follow the shared [workspace closeout procedure](workflow-reference.md#workspace-closeout) before completion, pause or a blocked hand-back.

Report the authorized endpoint actually reached, accounted-for worktree state,
exact candidate and recovery ref, checks, documentation, and next gate. A local
checkpoint with blocked publication remains partial; never call it remote
recovery, integration approval, installed behavior, or owner acceptance.

## Explicit Task selection for orchestration

A single durable writer coordinating multiple Tasks may use
`claim S-### --task TK-### --agent NAME` and
`close S-### --task TK-### --agent NAME --proof TEXT --docs TEXT --remaining-gap TEXT`.
The Task must belong to that Spec (or the named landmark) and pass the same
eligibility, blocker, capability, claim and Git-state checks. Never infer a
successful close for a different Task from an out-of-order Worker hand-back.
Without `--task`, the existing first-eligible claim and first-in-progress
close defaults remain. Recover a pending close before targeting another Task.

## Work selection and lifecycle

Read [Work selection and lifecycle](SKILL--work-selection-and-lifecycle.md#work-selection-and-lifecycle) when working on this topic.

## Worker: selection, implementation and hand-back

Read [Worker: selection, implementation and hand-back](SKILL--worker-selection-implementation-and-hand-back.md#worker-selection-implementation-and-hand-back) when working on this topic.

## Version-control procedures

Branching, pull requests, merge and cleanup obey the room's `AGENTS.md`
[Git Rules](../../../AGENTS.md#pr-instructions) and follow this procedure and
[Branch completion](#branch-completion) below, run with the room's own Git and
hosting commands.

For coordinated Spec delivery, the normal route is a Worker Task-branch merge
request into the Dispatcher Spec branch, then an independently reviewed Spec
merge request into integration under Director coordination. A Task merge is
containment; its Worker supplies self-check, proof and the two merge answers
(section 4), and no separate-context review applies to it. A release-specific
bootstrap exception may name a different route and its gate explicitly; read
that owner rather than silently applying the intended route to unsupported
current tooling. Accepted decisions and current progress are reconciled into
tracked owners on integration through reviewed changes; local notes and
unmerged branches must not be their only discovery route.

Before creating a branch or PR, verify the live base and preserve dirty work.
PR descriptions state what changed, why, risks, and verification. A Task PR's
description also carries its two merge answers (section 4).

## Branch completion

Read [Branch completion](SKILL--branch-completion.md#branch-completion) when working on this topic.

## Engineering and verification

Classify the whole diff and the claim before choosing checks:

- Records and wording: verify fidelity to the source decision, structure,
  links, status and preserved history. Run the relevant record validators.
- Behavior: observe a failing test at a stable seam, make it green, then run
  targeted checks. Shared controls, skills, runtime, compatibility and release
  changes pass the full applicable integration gate.
- Reuse evidence for unchanged content and dependencies; rerun affected checks
  after either changes. A receipt or projection update alone does not repeat
  the whole behavior suite or assembled review.

In this repository, `node tools/verify.mjs` runs the full suite.
`WORKBENCH_VERIFY_BASE=BASE_SHA node tools/verify-change.mjs` conservatively
selects focused record checks or the full suite; CI uses the same selector.
Unknown, mixed, governing instruction or runtime changes retain full checks.
The selector cannot judge source fidelity or authorize a merge. Other rooms
name their own commands in the Runbook's Check entry.

If tests are impractical, name the reason and run the strongest concrete manual
check. A milestone needs a demo artifact checkable in under a minute: screenshot, recording, preview URL or one-command demo. Failed checks
leave partial work in a draft PR; they do not prevent saving progress and do
not permit unchecked integration landing.

## Test coverage policy

Treat tests as the project specification, not as a comfort signal. The suite
should be strong enough that if someone accidentally deletes a meaningful line,
branch, route, data contract, workflow step, validation rule, or bug fix, at
least one test or documented manual check fails.

Coverage rules:

- Prefer red/green TDD: write or update the failing test first, confirm the
  expected failure, then implement the smallest fix.
- Run every relevant existing test before judging the suite.
- Keep tests that prove behavior a user, API consumer, operator, or future
  maintainer depends on.
- Improve tests that assert the wrong level, hide real failures, rely on stale
  fixtures, overuse snapshots, or pass without checking meaningful behavior.
- Remove tests that are stale, duplicated without adding a boundary, or pure
  bloat.
- If behavior cannot be tested in the current harness, record the exact reason
  and use the strongest concrete manual check available.

## Benchmark-driven improvement

Measure before and after when the change affects an available relevant
measure or makes an improvement claim. Record the metric, candidate, result
and limitations once in the work owner. Routine records or prose relocation
need no guardrail-score ceremony. Never weaken a criterion to raise a score,
and never treat static coverage or fewer tokens as agent-outcome evidence.
Repeated controlled trials are needed for claims of better agent performance.

## Recovery and rollback

If a change fails:

1. Identify the touched files and failing command.
2. Revert only the smallest change needed (`git checkout -- <file>` or revert
   commit), preserving unrelated work and user work.
3. Rerun the failing verification command.
4. Update the owning spec with the result and remaining gap, then render.

Do not delete data, reset databases, remove unmerged branches, rewrite history
or rotate secrets unless the owner explicitly approves that action. Merged
branch cleanup follows Git Rules and any owner instruction to defer it.

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| an intended merge-repair commit has only one parent | pending merge state was lost during checkout or branch changes | inspect `git show -s --format=%P <sha>` and the intended head/base ancestry | reconstruct the intended merge before pushing; a deliberate rebase uses ancestry and diff proof instead |
