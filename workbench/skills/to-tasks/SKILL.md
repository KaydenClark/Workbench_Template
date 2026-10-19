---
name: to-tasks
description: Prepare the smallest coherent Task plan for an assigned Workbench Spec; activate only with implementation approval.
---

# To Tasks

Plan the assigned Spec from current Actuality. Preparation and implementation
are distinct: a planned Spec may hold ready Task records, but selection and
claim refuse them until explicit activation. Confirmation alone activates
nothing. Use the request's existing approval; do not ask for it again.

## Process

1. Resolve the assigned `SPEC.md` through `workbench/manifest.json`. Read its
   accepted outcome, current evidence and relevant source/tests. Reuse the
   existing work owner and preserve completed evidence.
2. Prefer one coherent Task. Split only for independently checkable outcomes,
   real dependencies, separate writers or manageable context. Each Task
   reaches the relevant layers of its outcome; a file or workflow verb is not
   automatically a Task. Keep every requested requirement in acceptance or
   an explicit dependency. A different owner is not grounds to drop it.
3. With preparation authority, write the plan; otherwise present it without
   changing durable work state. Necessary repairs within the approved outcome
   continue in the same Task. A new outcome requires scope authority, not an
   agent-created queue item. Record unanswered owner choices in the Spec.
4. For a legacy slice table, run `convert-tasks S-###` to preserve unfinished
   slices as records without starting work; completed rows stay history. For
   record-backed Specs, allocate each ID with `next-id S-### --prefix TK --json`,
   then save it before allocating another. Write one
   `tasks/TK-###/TASK.md` per slice, with its title and required fields:

   ```markdown
   # TK-0AB - Reject a negative amount at the CLI

   **Task ID:** TK-0AB
   **Spec ID:** S-0XY
   **Slice:** Reject a negative amount at the CLI
   **Status:** ready
   **Stance:** Builder
   **Blockers:** none
   **Destination:** spec-acceptance: The CLI rejects a negative amount with a named error.
   **Planned verification:** Failing CLI test for -5, then green; applicable integration checks.
   ```

   `Blockers` contains Spec/Task IDs, never an unanswered decision disguised
   as prose. `Destination` references Spec acceptance, or `wiki-claim:` only
   when producing that page is the actual outcome; a corrective Task never
   takes a Wiki claim as its destination. Preserve existing IDs and
   use lifecycle moves rather than renaming records by hand.
5. Run `render` and `doctor`, then preserve the result through
   [`publication`](../save/SKILL.md#publication). Planning is done when each
   Task names its outcome, evidence, dependencies and writer. TASKBOARD is a
   generated view, not a second authoring store.
6. Only with implementation approval, run `convert-tasks S-### --activate`
   once to start the Spec. This validates the prepared records; it does not
   claim a Task. Keep Latest event and Next gate truthful. A prepared plan
   without that approval stays `planned` and unclaimable.

## Sizing a Task

Size for a fresh context to recover inputs and complete one useful outcome
with named verification. There is no universal token, byte or PR threshold.
Use [`tracer-bullet`](../tracer-bullet/SKILL.md) where it helps cut complete
paths; do not manufacture slices to satisfy a stage or staffing convention.
