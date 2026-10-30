# Carry in a Workbench

[Carry](SKILL.md) is the default ownership behavior for an authorized objective.
Its source is the owner's supplied personal Carry, unchanged. This adapter connects
that behavior to the Workbench's existing records and procedures; it adds no authority.

## Recover and continue

Follow [authority and continuation](../implement/execution-authority.md). Recover
confirmation, execution approval, constraints and the endpoint from their actual
sources, reusing them within scope. Analysis, preparation, implementation and
publication remain distinct endpoints. A question or a skill mention grants none.
When a supported lifecycle seam requires a Spec ID in the approval capture,
record the owner's actual words and scope separately from the agent's mapping to
the existing Spec. A faithful objective-to-Spec mapping reuses permission; it
must not claim the owner spoke an ID they did not, widen scope or request the
same approval again. Ambiguous scope still blocks its dependent action.

Resolve the supplied objective through the manifest, TASKBOARD and linked owners.
When a Spec or Task exists, read its SPEC.md, TASK.md, receipt rows, relevant Wiki
corrections and verified working state. A missing identifier in the user's request
is not a blocker: recover the matching assignment instead of asking the owner to
name it. Create missing records only when the authorized work requires them;
never choose unrelated work or manufacture an assignment to evade a blocker.

Load the manifest-resolved Carry source and this adapter directly. When personal
and room skills share a name, do not rely on host precedence or a name-only call.
Use the [invocation fallback](../writing-for-agents/INVOCATION.md) with the exact
linked source. Package installation and personal discovery remain distinct;
copying the same source does not prove every host selects it correctly.

## Behavior selection

Compose the smallest behavior within the authorized endpoint, without requiring
a special phrase or another skill invocation from the owner. Load the linked
skill's source and follow it; each helper inherits the caller's narrower scope.

| Authorized work | Behavior and endpoint |
|---|---|
| Decide or stress-test an idea | [grill-me](../grill-me/SKILL.md), composing grilling and jot |
| Recover or preserve context | [jot](../jot/SKILL.md); source-linked corrections and current state |
| Reconcile supported claims | [promote](../promote/SKILL.md), [to-docs](../to-docs/SKILL.md), [save](../save/SKILL.md) |
| Prepare specifications or Tasks | [to-spec](../to-spec/SKILL.md), then [to-tasks](../to-tasks/SKILL.md) only for authorized planning |
| Coordinate execution | [orchestrate](../orchestrate/SKILL.md), within the assigned Director or Dispatcher role; delegate implementation and review outputs |
| Implement a Worker assignment | [implement](../implement/SKILL.md), including checks, self-QA and the assigned hand-back |
| Independently review a candidate | [code-review](../code-review/SKILL.md); no self-approval or implied implementation |
| Transfer the objective | [handoff](../handoff/SKILL.md); preserve scope, source, state and next action |

Carry retains responsibility for the combined result. A worker's return is an
input to review, not completion of the parent objective. Return incomplete work
to its implementor with the observed defect; continue authorized independent work.
Directors may instruct Dispatchers to use Orchestrate. Neither role implements
its delegated changes or repairs itself. Unavailable workers are a specific
resource blocker, not permission to bypass the role or an approval boundary.

## Preserve work through long sessions

Preserve unrelated tracked changes, untracked work and prior evidence. Inspect
current state before resuming, integrating or cleaning up. Time spent, failed
checks and repeated retries never authorize reset, deletion, force-push, wider
scope, main promotion or bypassing a permission refusal. Follow the existing
[recovery](../implement/SKILL.md#recovery-and-rollback) and
[workspace closeout](../implement/workflow-reference.md#workspace-closeout)
procedures; preserve a verified recovery point before any authorized cleanup.

Before a lifecycle mutation, inspect its documented side effects against the
requested persistence endpoint. [Claim](../implement/SKILL.md#work-selection-and-lifecycle)
can commit and push automatically; use its supported `--local` mode when
publication is not authorized. Resume a verified in-progress assignment without
claiming again. Never treat a lifecycle command as local merely because it is
called from a local checkout; if no supported mode fits, state that blocker.

Record implementation receipts while work is in progress. Before a handoff or
voluntary stop, update the existing work owner with actual results, remaining
gaps, approval sources and next action; render TASKBOARD from those owners.
Use [save](../save/SKILL.md) for the authorized persistence endpoint and verify the
actual destination. A checkpoint is not delivery, a failed push is not remote
recovery, and a green test is not independent review or owner acceptance.

Inspect the actual failed operation before declaring a blocker. Record routine
coordination hand-backs with their cause and smallest correction in the existing
Spec evidence or conversation. Ask only for the genuine missing decision or
resource; stop on an explicit owner stop. No scheduler or automatic session
restart is provided by these instructions. Native continuation and preservation
must be exercised separately from source-text checks.
