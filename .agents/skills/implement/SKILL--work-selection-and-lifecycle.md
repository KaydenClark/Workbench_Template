
# Work selection and lifecycle

Use this section for work selection and lifecycle; [SKILL](SKILL.md) provides the surrounding context.

## Work selection and lifecycle

Unless the user names work directly:

1. Verify root, branch, remote, upstream, and dirty state.
2. Run `node workbench/tools/spec-workbench.mjs doctor`; stop on ambiguous state.
3. Run `node workbench/tools/spec-workbench.mjs next --json`.
4. Load only the returned Spec with `show S-###` and its selected Task record;
   inspect the assigned destination, blockers and referenced source/tests.
5. Claim before editing: `claim S-### --agent NAME`. This selects one eligible Task
   in that Spec, writes its record to `in-progress` and appends the agent to
   its unique `Claimed by` list and sets `Current claimant`. It fills the Spec
   Owner only while unassigned; an assigned Owner is preserved. It takes a Spec ID (or `LMK-###` for a Task directly
   under a landmark), not a `TASK.md` path. Follow the assigned stance and single writer lane.
6. Implement that tracer-bullet Task using red/green TDD, actual behavior checks
   and owned documentation. Preserve proof and unresolved gaps as work proceeds.
7. Worker self-checks the scoped result and hands proof to the Dispatcher;
   normal Task hand-back needs no separate Task approval. Use the Task's
   acceptance and the actual branch-route exception in `AGENTS.md`
   [Git Rules](../../../AGENTS.md#pr-instructions) before landing it.
8. Dispatcher owns whole-Spec QA against the assembled Spec and its destination;
   a separate Director context reviews the immutable assembled candidate before
   integration. Follow the review, correction and closure sequence in the
   [`dispatcher`](../dispatcher/SKILL.md#assembled-review-and-corrective-return)
   and [`director`](../director/SKILL.md#owner-closure-and-reconciliation) skills.

`TASK.md` carries active state and proof for one Task; its Spec carries the
capability's requirements, acceptance, evidence and next gate. The manifest
resolves their paths. `TASKBOARD.md` projects those sources; editing the board
cannot change an assignment or satisfy a gate. Retained done rows in a
record-backed Spec are history, not an alternative active Task queue.

While a Task is in progress, record meaningful tests, documentation and gaps
with `receipt`. Commit and push the verified candidate and Receipt before
`close`, checking that the remote branch names the local SHA; close refuses a
dirty or unpushed tree unless `--git-state-reason TEXT` explicitly records why.
`--git-state-reason` writes the observed state and the reason into the Receipt
row and the Spec evidence row, where a reviewer reads what was waived. `doctor`
reports `detached-head` and `untracked-controls` (untracked control, ADR (`workbench/docs/adr`) or
Spec files) without blocking. Commit and publish the resulting close evidence
and projections as well:

```bash
node workbench/tools/spec-workbench.mjs receipt S-### --task TK-### \
  --tests "NAMED TESTS AND RESULTS" --docs "DOCS TOUCHED OR none" \
  --remaining-gap "GAP OR none"
node workbench/tools/spec-workbench.mjs close S-### --agent NAME \
  --proof "NAMED VERIFICATION" --docs "DOCS UPDATED OR no update needed + reason" \
  --remaining-gap "GAP OR none"
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
```

Record-backed `close` requires `--agent NAME`, matching the Task's `Current
claimant`. A Dispatcher closing a Worker's result uses its own `--agent` and
`--on-behalf-of CLAIMANT`; the current claimant must match that explicit name.
The Receipt keeps its nine columns and checksum chain; its final Remaining gap
cell records agent, claimant and delegation. Historical `Claimed by` lists
unique participants, not current identity. A single legacy participant is
unambiguous; multiple participants without `Current claimant` refuse before
writes. A legacy record without any claimant history still needs a closing
agent and records unknown claimant; delegated close cannot establish one.
Table-backed close is unchanged. Pending-close recovery preserves its original
proof and attribution, rejects replacement identities, and recovers version-1
markers without fabricating attribution. These flags never waive other guards.

`close` closes the first in-progress Task in that Spec, appending its final
Receipt and Spec evidence before marking the record done. It does not select
a ready Task or complete the Spec, and refuses a Spec with no in-progress Task.
One writer must ensure the claimed Task is the one being closed; do not close
unrelated work. A Receipt records live Git facts and stated checks; it is
neither review nor owner approval.

Dependencies remain explicit: plain Spec IDs require `complete` or
`superseded`, and plain Task IDs require done. `S-###:delivered` instead requires
all prerequisite Tasks done, acceptance met and a content-bound PASS whose
candidate and matching committed Spec/Task content are contained in integration;
fetch integration before relying on it, because resolution reads local refs.
`owner:<decision>` is never satisfied automatically; only an authorized resolved
decision allows that blocker to be removed. Diagnose `blocked-without-blocker`
and `unknown-blocker-qualifier` rather than bypassing selection or claim.
