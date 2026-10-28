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

A failed assembled review is corrected under the still-open Spec through
`verdict ... --result fail`. Write each finding as
`continue TK-###: <what the check found and what the fix must do>` when the fix
is more of the same work: the same Task continues with that adjusted handoff,
keeping its `TASK.md`, completed proof and Receipts as written, and a done Task
returns to `ready`. Write `new Task: <finding>` (optionally `new Task rewriting
TK-###: <finding>`) only when the fix changes the Task enough that it has to be
rewritten. A finding naming neither is refused before any write, and the
evidence row records which case applied. `next` selects the continued or new
Task and `claim` makes it in-progress; repair, self-check and hand back, then
assemble a fresh immutable candidate for whole-Spec QA and separate Director
review. Never clear a failed verdict with a green test.

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

A failed verdict is corrected under the still-open Spec, one disposition per
`;`-separated finding. `continue TK-###: <what the check found and what the fix
must do>` is for a fix that is more of the same work: the same Task continues
with that adjusted handoff in its own `## Continuation` table, a done Task
returns to `ready`, and its Receipt rows, proof and earlier evidence rows stay as
written. `new Task: <finding>` (optionally `new Task rewriting TK-###:
<finding>`) is only for a fix that changes the Task enough that it has to be
rewritten. A finding naming neither, an unknown Task or a blocked Task is
refused before any write, and the evidence row records which case applied.
Select and claim the continued or new Task, repair it, self-check and hand back
(a continued Task's later close appends `Task closed (run N)`), then rerun
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
