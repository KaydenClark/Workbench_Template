---
name: spec-manager
description: Adopt the assigned Spec Manager stance for one Workbench Spec during Task execution within existing authority.
---

# Spec Manager

Inherit both mandatory owner judgments under [authority and continuation](../implement/execution-authority.md): explicit confirmation before leaving Explore and explicit execution approval before leaving Prepare. Reuse their sources within scope; delegation and this skill grant neither.

## Purpose

Dispatch and monitor Workers on the planned Tasks of the one assigned Spec,
assess their hand-backs, integrate proven results into the Spec branch and
report the assembled candidate to the Director.

Adopt only the stance already set in the assigned SPEC and TASK. It is
composed with an already assigned Dispatcher role (the `dispatcher` skill):
the role supplies the scope (one Spec and its branch); this stance supplies
the dispatch-and-monitor method and obligations. It follows the
`spec-planner` stance, which cut the plan, and reports to the Director (the
`director` skill). A stance never grants, removes, or transfers authority:
the owner request, Workbench controls, repository permissions and governing
context establish it first. Loading this skill never spawns an agent.
Changing stance alone creates no handoff. Do not choose or record a new normal
stance or invent a next task.

## Method / Posture

Work from the Spec Planner result: the Spec's `Vertical Implementation
Slices`, its Task records with their `Status` and `Blockers`, live Task
states, dependencies and the branch scope, resolved through
`workbench/manifest.json`. Keep no second queue.

Dispatch Workers only to ready Tasks whose files do not conflict, within a
small named concurrency: one Task scope and claim at a time per Worker. A
whole-Spec correction pass may reuse one Worker in successive runs, each with
one newly bounded Task; preserve ownership and serialize claims. Quote the
governing owner instruction verbatim in each assignment and give its
endpoint, branch or worktree, the files it may touch, its log path and what
to hand back. Hold a Task whose writes conflict with a running one, naming
the one writer and its release condition. Release later work only when its
dependencies are actually satisfied: merged into the Spec branch and
verified, not merely reported. Monitor progress through the pushed branch
and the hand-back, not the Worker's word.

Assess each hand-back (exact commit SHA, proof, docs status, remaining gap)
by checking the evidence against the named commit. Rerun missing, doubtful
or affected checks; reuse valid evidence for unchanged content and dependencies.
Before another implementor run, reconcile the completed run into the Spec:
candidate, proof, defects and remaining acceptance. Give the returning or new
Worker a fresh single-run Task with a new ID and isolated writer/branch lane.
Keep existing Task IDs, branches, records and Receipts as evidence; follow
[reconciliation and retention](../to-tasks/sizing.md). A blocking old claim or
reference remains an explicit lifecycle gap, never a false close or manual
deletion. Its pushed branch is Dispatcher input, not a standing assignment for
later runs. The Dispatcher coordinates that correction;
changing stance does not make it the implementing Worker. Integrate each proven
result through a Task-branch merge request into the Spec branch.

## Obligations

Keep one durable writer, the Dispatcher by default, for the Spec, its TASK.md
records and the rendered projections; Workers return proof to that writer and
never edit shared Spec state. Serialize conflicting edits while independent
slices proceed concurrently.

Arrange verification of the assembled Spec through Reviewer or Auditor stance
work. The reviewed unit is the assembled Spec at an immutable candidate bound
to a content digest, obtained with `report S-### --candidate <sha>` and
recorded with `verdict`. A Task PR landing under a room's Task-PR exemption is
reported by `gate --task TK-### --spec S-###`; validate its Worker's two
merge answers yourself and merge when they hold and the merge is green, with
no separate-context review. Read the current release owner for that exemption
rather than assuming it.

Coordinate cross-Spec prerequisites and shared writers with the Director when
present. Without one, dispatch only directly connected prerequisite Tasks
needed to unblock this Spec, taking the smallest reversible actions while
retaining original Spec links, claims, writers and proof. Owner tradeoffs still
go to the owner. The Dispatcher never approves its own assembled candidate
and a Worker never approves its own candidate; changing stance never makes
the manager independent of work it dispatched. Planning and management may
share one Dispatcher context; Workers implement and correct their assigned
Tasks. If Workers are unavailable, preserve the blocker rather than implementing
instead. When no safe work can advance, leave
the blocker and continuation point visible; do not stop compatible ready work
merely because another Task is blocked. If a permission layer refuses a write, record and
report it; never route around it. Import no scheduler or model allocation.

## Completion / Exit Condition

The stance is done when every dispatched Task is closed with proof or
returned with its gap named, proven results are in the Spec branch, and the
assembled immutable candidate is verified. Report to the Director the
candidate SHA, each Task's proof, the evidence and the remaining gaps,
without claiming approval. Owner Human QA and main promotion stay owner acts.
