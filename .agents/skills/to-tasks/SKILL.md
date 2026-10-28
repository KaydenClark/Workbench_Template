---
name: to-tasks
description: Write single-run implementor assignments for an assigned Spec; activate only with implementation approval.
---

# To Tasks

Inherit both mandatory owner judgments under [authority and continuation](../implement/execution-authority.md): explicit confirmation before leaving Explore and explicit execution approval before leaving Prepare. Reuse their sources within scope; delegation and this skill grant neither.

Plan the assigned `SPEC.md` from current Actuality. A Task is one implementor
run; the Spec owns the continuing outcome. Preparation is distinct: a planned Spec may hold ready Task records,
but selection and claim refuse them until explicit activation. Confirmation alone activates nothing. Use the request's existing approval; do not ask for it again.

## Process

1. Resolve the Spec through `workbench/manifest.json`. Read acceptance,
   current evidence and relevant source/tests. Preserve completed proof.
2. Size each assignment for one run, including verification and hand-back.
   Write a smaller Task when the outcome exceeds that run; multi-run work
   belongs in the Spec. Give independent Tasks isolated writers/lanes for
   parallel dispatch; serialize shared writes.
3. With preparation authority, write the plan. Record unanswered owner choices in the Spec.
   Repairs stay in the assignment during its run; at run end reconcile result,
   evidence and remaining gaps into the Spec before planning the next run.
   Follow [reconciliation and retention](sizing.md) before replacing records.
4. For legacy tables, `convert-tasks S-###` preserves unfinished slices as records;
   completed rows stay history. For record-backed Specs, allocate with
   `next-id S-### --prefix TK --json`, save, then allocate again.
   Write `tasks/TK-###/TASK.md` with a checkable run outcome:

   ```markdown
   # TK-0AB - Reject a negative amount at the CLI

   **Task ID:** TK-0AB
   **Spec ID:** S-0XY
   **Slice:** Reject a negative amount at the CLI
   **Status:** ready
   **Stance:** Builder
   **Blockers:** none
   **Destination:** spec-acceptance: Reject -5 with a named CLI error.
   **Planned verification:** Red CLI test, green, applicable checks.
   ```

   `Blockers` contains Spec/Task IDs. Preserve IDs. Use lifecycle moves, not
   manual renames. A Task that delivers or cleans up after Judge adds
   `**Phase:** post-delivery`, and its acceptance goes under
   `### Post-delivery acceptance` in the Spec. The Spec gate, Review and the
   owner's approval then bind the pre-delivery work while it is pending; its
   claim waits for both, and `complete` waits for it
   ([Complete](../implement/workflow-reference.md#complete)). Keep every requested requirement in Spec acceptance or an
   explicit dependency. A new outcome needs scope authority.
   A `wiki-claim:` destination serves only writing that page;
   a corrective Task never takes a Wiki claim as its destination.
5. Run `render` and `doctor`; call the Skill tool for
   [`save`](../save/SKILL.md#publication) to publish. TASKBOARD is a
   generated view. Each assignment names its writer, inputs, outcome and proof.
6. Only with implementation approval, cite it and the confirmation on the
   Spec ([authority](../implement/execution-authority.md#continue-without-losing-authority));
   `convert-tasks S-### --activate` then validates the prepared records and
   starts the Spec; it claims nothing.
   Work without that approval stays `planned` and unclaimable.

## Sizing a Task

Recover inputs, implement, verify and hand back in one run. Call the Skill tool
for [`tracer-bullet`](../tracer-bullet/SKILL.md) when cutting a complete path.
