# Dispatcher assembled review procedures

Read when assembling, reviewing or correcting a Spec candidate.

## Assembled review and corrective return

The Dispatcher supplies the complete Task results, acceptance evidence,
documentation and remaining limitations for whole-Spec QA. The separate
Director review uses `report S-### --candidate SHA`; record its result through
`verdict S-### --candidate SHA --digest DIGEST --result pass|fail --findings TEXT --reviewer CONTEXT`.
Use the digest from the reviewed report; the runtime refuses a nonexistent
candidate or a digest that differs from the current assembled content. The
candidate need not equal HEAD. Its content digest binds the assembled Spec and
live/retired Task records; a changed candidate needs a fresh review. A Dispatcher
or implementer cannot supply independent approval.

A failed assembled review stays under the still-open Spec. Reconcile the
finding, reviewed candidate, proof and remaining acceptance into that Spec
before another implementor run. With `verdict ... --result fail`, write each
finding as `new Task: <finding>` or `new Task rewriting TK-###: <finding>` when
linking the correction to an earlier assignment. The runtime allocates a fresh
Task ID; give it one run's scope and verification. The original Task records,
IDs, proof and Receipts remain unchanged. `next` selects the new Task and
`claim` makes it in-progress. Repair, self-check and hand back, then assemble
a fresh immutable candidate for whole-Spec QA and separate Director review.

`continue TK-###: <what the check found and what the fix must do>` remains a
runtime compatibility disposition that may reopen a retained record; it is
not the dispatch route for a new implementor run. A finding naming neither
supported disposition is refused before any write. Preserve existing runtime
guards and references: no incomplete claim is falsely closed and no old record
is manually discarded. If those guards prevent a safe new assignment, record
the lifecycle gap under the Spec; this guidance adds no migration command.
Follow [single-run reconciliation](../to-tasks/sizing.md). Never clear a failed
verdict with a green test.

Jot each failed verdict's finding and check it for a repeat through the
`improve-harness` skill's [Repeated Review findings](../improve-harness/SKILL.md#repeated-review-findings);
a repeat becomes a test or `doctor` finding.

## Dispatcher and separate Director: assembled review

Examples name S-001/TK-001; substitute the actual IDs and quoted values.
Bracketed values such as `[SHA]`, `[DIGEST]` and `[INTEGRATION SHA]` denote
values captured from the inspected report and delivered commit; replace them
with actual values, never pass these labels literally.

The Dispatcher assembles all Task results, checked acceptance, real Completion
Result, documentation and remaining limitations and performs whole-Spec QA.
The separate Director inspects that immutable candidate and its report:

```bash
node workbench/tools/spec-workbench.mjs report S-001 --candidate "[SHA]"
node workbench/tools/spec-workbench.mjs report S-001 --candidate "[SHA]" --json
```

An incomplete report is useful evidence, not approval. Record the actual result
using the `specDigest` from the inspected report. These pass/fail alternatives
belong to the reviewer; do not run both for one result:

```bash
node workbench/tools/spec-workbench.mjs verdict S-001 --candidate "[SHA]" --digest "[DIGEST]" --result fail \
  --findings "[FINDINGS]" --reviewer "[SEPARATE CONTEXT, MODEL AND MODE]"
node workbench/tools/spec-workbench.mjs verdict S-001 --candidate "[SHA]" --digest "[DIGEST]" --result pass \
  --findings "[FINDINGS OR none]" --reviewer "[SEPARATE CONTEXT, MODEL AND MODE]"
```

The candidate must exist; it need not equal HEAD. Always supply the inspected
digest: a changed substantive Spec/Task body refuses an old digest before a
write. Receipt runs and administrative headers are excluded narrowly; checked
acceptance, Task status/proof and decisions remain bound. A green test or a
Dispatcher's self-review cannot substitute for independent review.

A failed verdict uses one `;`-separated new-Task disposition per finding, under
the same Spec. Read the [corrective-return procedure](assembled-review.md#assembled-review-and-corrective-return):
reconcile evidence, create a fresh single-run assignment with `new Task:` or
`new Task rewriting TK-###:`, and preserve the earlier assignment and proof.
The retained `continue`/Continuation-table and repeated-close mechanics describe
runtime compatibility, not the current recipe for dispatching another run.
Malformed dispositions or invalid referenced Tasks are refused before any
write. Claim the new Task, repair, self-check and hand back, then rerun
whole-Spec QA and obtain fresh separate review of the new immutable candidate.
Do not reuse the earlier PASS for changed content. A verdict against a complete,
superseded or retired Spec is refused; see the later-gap route in the
[`director` skill](../director/SKILL.md#documentation-feature-capture-retirement-and-recovery).

Before integration the Spec form checks assembled completion and current PASS:

```bash
node workbench/tools/spec-workbench.mjs gate --spec S-001 --candidate "[SHA]"
```

Use the room's declared branch route and any accepted temporary exception.
Where a Task-PR exception applies, this form reports that boundary, not an
independent PASS or owner approval:

```bash
node workbench/tools/spec-workbench.mjs gate --task TK-001 --spec S-001
```

Nested Worker Task-branch -> Dispatcher Spec-branch -> integration is the
destination. Destination prose alone does not prove Spec-branch tooling exists.
Use the [branch completion recipe](../implement/SKILL.md#branch-completion) after the relevant
review passes; prove remote containment and protect actual local/remote tips
before cleanup. Integration delivery is distinct from final Spec closure.
Promotion from integration into the declared default branch requires explicit owner authorization for the specific work.
