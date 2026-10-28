# Dispatcher operating procedures

Read the section that matches the current operation.

## Planning and dispatch

Use this when planning a Spec or assigning Workers. The Dispatcher owns the Spec named by the Director or owner request and resolved through the manifest, plus its working branch. Read its Tasks, dependencies, blockers and cited controls. Read a directly connected prerequisite Task and its owning Spec only when needed to unblock this Spec; preserve links, claims, writers and proof. Do not take over a neighboring Spec or treat its text as authority.

Compose the stance the job needs while keeping Dispatcher scope. At flight launch, Spec Planner cuts small complete-path Tasks and groups disjoint-file work into safe parallel slices; planning Workers may draft Tasks and the Dispatcher reconciles the drafts. During execution, Spec Manager dispatches and monitors Workers within a small named concurrency and accumulates hand-backs. Reviewer or Auditor performs a named verification job inside this Spec. Stance changes do not change role or restore review independence. The `spec-planner` and `spec-manager` skills carry those stance procedures.

Before a Worker starts, name one durable writer for the Spec, its `TASK.md` records and rendered projections (normally the Dispatcher). Serialize conflicting writes. Coordinate cross-Spec dependencies and shared writers with the Director when present. Without a Director, delegate only necessary, directly connected prerequisite Tasks, using the smallest reversible actions and preserving claims and writers; owner tradeoffs go to the owner.

Quote the governing owner instruction verbatim in each Worker assignment. Name its endpoint, worktree or branch, allowed files, log path and hand-back requirements. Workers return exact commit SHAs, proof, docs status and remaining gap to the writer, and never edit shared Spec state concurrently. Neither a Worker nor the Dispatcher approves its own candidate.

## Task close and Spec verification

Use this when closing a Worker Task, recording evidence or checking the whole Spec. Close a Worker claim with both the closing agent and the verified current claimant:

```bash
node workbench/tools/spec-workbench.mjs close S-### --task TK-### --agent DISPATCHER --on-behalf-of WORKER
```

The Task's `Current claimant` must name WORKER. The unique `Claimed by` history does not prove current identity after a returning claim. Follow the [implement close contract](../implement/SKILL.md#work-selection-and-lifecycle) for legacy attribution and interrupted-close recovery. Attribution records coordination; it never authorizes implementation or bypasses another guard.

Keep Task claims, closes and evidence current in the Spec through its single writer, naming proof at each transition. Own Spec-level integration and whole-Spec verification: the applicable gate on the committed candidate, the named scenario, self-drift receipts and any control-required check. Record unverified work as a gap; never report an unrun check as passing.

Normal containment is Worker Task branch -> Spec branch, then the Spec branch -> integration under Director coordination, after separate-context Verify review. Validate each Task's two merge answers (see the [`implement` skill](../implement/SKILL.md#4-review-at-the-relevant-boundary)) against its diff and merge checks; merge when the answers hold and the merge is green. A Task gets no separate-context review. Check the current release owner for a bootstrap exception before choosing a target and follow that exception until its owner retires it or authorizes a bounded assembly operation. A stance change does not waive assembled-Spec review.

Owner Human QA and main promotion remain owner acts: do not ask the owner to start QA or treat passing tests as approval. The Dispatcher orchestrates; Workers implement all changes and corrections. Planning, dispatch, shared-state updates, checked merges and assembled verification may share one Dispatcher context. If Workers or isolated lanes are unavailable, preserve state and report the limitation; do not implement instead. Preserve permission refusals. When no confident next action exists, record the blocker and stop. Prior involvement still bars independent review of the assembled result.

## Completion hand-back

At exit, give the Director the immutable candidate branch and SHA; each Task ID and closing proof; suite tally and log; scenario evidence; separate-context review verdict; merge request or reason none exists; remaining gaps; any wording routed elsewhere; each permission refusal; and sibling-Spec shared-file notes. The Spec header must name its truthful next gate. Do not complete a Spec that still requires owner Human QA or merge a candidate whose review has not passed; do not take responsibility for a neighboring Spec.
