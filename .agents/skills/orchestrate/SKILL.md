---
name: orchestrate
description: "Coordinate, direct, and dispatch implementors through an authorized endpoint and review their outputs; delegate execution to subagents. Use when asked to orchestrate, act as a Director or Dispatcher, or coordinate workers across related deliverables. Do not add orchestration to a simple single-agent task or treat mentioning the skill as permission to launch work."
---

# Orchestrate

Coordinate, direct, and dispatch implementors, then review their outputs.
Delegate execution to subagents; do not implement their assignments or repair
their artifacts yourself. Use the host's available delegation tools and the
project's existing records.

In a Workbench, the Orchestrator may be a Director or a Dispatcher. A Director
may assign a Dispatcher to use this skill within its bounded assignment. Keep
the project's role and scope boundaries; this skill does not require a role
hierarchy or Workbench installation elsewhere.

## Recover the assignment

Establish the outcome, authorized scope, exclusions, acceptance checks, and
delivery endpoint from the request and current project sources. Follow project
branch, review, canon, and publication rules. Preserve settled decisions.
Ask only for an unresolved choice that materially changes the work.

Inspect available delegation and execution capabilities. Choose suitable workers
within the user's model and cost preferences; do not invent model controls.
If delegation is unavailable, say so, prepare actionable assignments, and advance
coordination that remains possible. Do not pretend workers ran or take over
implementation. Missing subagents are a resource limitation to report, not an
implementation fallback while assigned as Orchestrator.

## Assign bounded work

Use the fewest workers needed. Split by independently checkable outcomes,
dependencies, or conflicting writers. Run only independent work concurrently.
Give each shared artifact one writer; use isolated worktrees where appropriate.
Keep coordination in the existing plan, issue, or a short in-session list.
Persist a continuation point before handoff or interruption when possible.

Give each worker:

- Outcome and acceptance checks.
- Essential source pointers and current revision, relevant decisions, and context.
- Owned files or artifacts, exclusions, allowed actions, and branch or destination.
- Dependencies, available tools, and the expected return: result, exact artifact
  or commit, checks actually run, limitations, and remaining work.

Implementors execute and correct their assignments. Use the project's assigned
coordination structure: a Director can dispatch a Dispatcher using this skill,
and the Dispatcher delegates execution to implementor subagents. Do not add
management layers unless the assignment calls for them. If an already sliced
software spec fits the existing `implement-spec` skill, use that procedure for
its build stage. Respect the assigned endpoint.

## Inspect, integrate, and continue

Inspect returned artifacts and evidence; a worker's success report alone is
insufficient. Check scope, settled decisions, and acceptance. Return defects
to the responsible worker with the concrete gap; do not redo their work.

Sequence shared changes and integration. Release dependencies only after the
required result is verified and available at the revision the dependent worker
will use. Reconcile conflicts through the owning worker. Never overwrite another
writer's work or bypass branch rules to make progress look complete.

Check the assembled result against the whole outcome. Use independent review
when the project requires it or risk justifies it; a contributor's self-check
is not independent approval. Review the exact candidate, and recheck affected
work after changes. Keep checks proportionate and avoid repeated review with
no changed evidence.

Continue through the authorized endpoint. A prepared PR is not a merged change;
a merge is not deployment or adoption. Read back the actual destination before
claiming delivery. Do not infer main-branch approval from implementation approval.

## Close or preserve the blocker

Report the delivered result and link, the checks and their limits, and any
remaining blocker or owner decision. For unfinished work, preserve current
revision, completed and pending assignments, dependencies, and the next action
in the existing project record. Use the `jot` skill for lasting context when
available; it is not a prerequisite.

Escalate a specific unavailable resource, authority boundary, or tradeoff with
evidence and a recommended next step. Continue independent authorized work.
Stop when the agreed endpoint is verified or no safe work can advance.
