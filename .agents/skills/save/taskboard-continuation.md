# TASKBOARD continuation and recovery

## Resume

Follow the RUNBOOK cold-start route. Read TASKBOARD to locate relevant work,
then follow its source links through the manifest to the current Spec/Task.
Recover scope, claimant, blockers, corrections, acceptance and next authorized
action from those owners. Recover both scoped owner judgments and their sources
before execution; active state, a handoff and a board row grant no authority.
Follow [authority and continuation](../implement/execution-authority.md).

For assigned implementation, start with
[Situate the slice](../implement/SKILL.md#1-situate-the-slice). Route selection
is read-only; execution follows the full applicable procedure and its
claim/resume and verification gates. Other requests load their own procedure.

The board is a generated projection, never a requirements, evidence or approval
store. Compare its rows with current owners before relying on them. A stale or
missing projection means follow current owners and report the mismatch, not old
summaries. A timestamp alone cannot establish freshness. Do not hash the board
or its own commit to establish its authority.

## Reconcile

At checkpoint, handoff or exit, the writer:

1. Completes the authorized work and required checks/review/delivery, or records
   truthful unfinished state, blocker and next action. Preserve failed checks
   and uncertainty; never turn an interruption into completion.
2. Updates the existing Spec/Task owners with claims, corrections, evidence,
   publication state and next action. Capture consequential knowledge while it
   arises and reconcile remaining knowledge into its maintained owner before
   cleanup. Do not copy private notes into a broader view.
3. Rereads affected current owners, including concurrent lanes. Keep one named
   writer per owner and serialize the shared board render. Workers submit their
   owned changes; a coordinator must not overwrite another writer's source.
4. Runs `node workbench/tools/spec-workbench.mjs render`. This regenerates
   TASKBOARD from source records; never hand-edit its generated rows or add a
   parallel Sources/fingerprint queue. Retain other lanes. Recheck changed
   sources immediately before committing; reconcile conflicts through their
   owners and rerender instead of selecting one writer's whole board.
5. Publishes source and regenerated projection together through the
   [publication procedure](SKILL.md#publication), within existing approval.
   Later source changes require another render. Preserve useful evidence and
   follow [workspace closeout](../implement/workflow-reference.md#workspace-closeout)
   before scoped cleanup; prune scaffolding only once durable owners retain it.

## Publication and interruption

Keep exact candidate identities and publication evidence in the existing work
owner, not another board table:

- `local-only`: unpublished work exists only in this checkout. Keep its recovery
  point and limit explicit; another machine cannot recover an unpushed change.
- `pushed-pending`: fetch the candidate branch, retain its URL and checked SHA,
  and prove containment. A PR alone does not prove its latest changes were pushed.
- `integrated-fetched`: fetch integration and prove
  `git merge-base --is-ancestor COMMIT REMOTE/INTEGRATION`. Record the exact
  commit, fetched ref/tip and observation date. Integration is not another
  host's fetch; each host verifies its own receipt.

A failed fetch leaves the prior integration basis explicitly stale; a local tip
is not a fetched ref. If landing succeeded but fetch failed, record the pending
proof in the owner and retain the last verified state. A parser or test cannot
certify network observations, authority, correct source selection or completeness.

## Retire a legacy continuation control during an update

Current rooms use TASKBOARD; do not create STARTUP.md. If an older room still
has it, preserve its original Git commit and a private recovery copy through
workspace closeout. Reconcile each meaningful summary, pending candidate,
correction and recovery dependency into its existing work or knowledge owner.
Retain source-qualified historical evidence. Preserve unrelated work and privacy.
Only after readback confirms those destinations, regenerate TASKBOARD and remove
the legacy file in the authorized update candidate. Check that live links and
creation instructions no longer require it. A refused or interrupted migration
keeps the original recoverable; rollback uses the recorded pre-update commit.
The producer's `tools/check-startup.mjs` supports legacy recovery inspection
only; it is not a prerequisite for current rooms or a TASKBOARD checker.
