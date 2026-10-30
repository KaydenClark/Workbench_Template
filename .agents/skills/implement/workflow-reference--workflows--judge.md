
# Judge

Use this section for judge; [workflow-reference--workflows](workflow-reference--workflows.md) provides the surrounding context.

### Judge

Defined in the [Glossary](../../../GLOSSARY.md) term **Judge**.

**Steps:** [Review](workflow-reference.md#review) -> [Verify](workflow-reference.md#verify) -> [Approve](workflow-reference.md#approve)
([code-review](../code-review/SKILL.md#independent-review-boundaries),
[dispatcher](../dispatcher/SKILL.md#dispatcher-and-separate-director-assembled-review),
[director](../director/SKILL.md#owner-human-qa-and-main-before-complete)).

Judge binds the frozen pre-delivery artifact. Post-delivery Tasks and
acceptance may still be open; their bookkeeping leaves the review and approval
current, while any substantive change to the Spec or a Task voids both.

**Loop:** A failed Review returns to the affected Map, Plan and Journey under
the open Spec. Owner findings stay open until resolved; a destination change
returns to Align. A passing judgment grants no main authority; [Deliver](workflow-reference.md#deliver)
needs the owner's explicit Ship it.
