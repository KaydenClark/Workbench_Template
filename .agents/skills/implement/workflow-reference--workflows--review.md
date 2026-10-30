
# Review

Use this section for review; [workflow-reference--workflows](workflow-reference--workflows.md) provides the surrounding context.

### Review

Defined in the [Glossary](../../../GLOSSARY.md) term **Review**.

**Steps:** pin the immutable assembled candidate
([code-review](../code-review/SKILL.md#1-pin-the-review)) ->
`report S-### --candidate SHA` -> a fresh context that built none of it judges
the Spec against its Map
([code-review](../code-review/SKILL.md#independent-review-boundaries))
-> record `verdict S-### --candidate SHA --digest DIGEST --result pass|fail`
([dispatcher](../dispatcher/SKILL.md#dispatcher-and-separate-director-assembled-review)).

`report` names missing evidence for a checked standard closing named-verification/
limitations line or an explicit Full-suite acceptance line. After the latest
Task-close row (including a continued run), a Verification cell must name a
full 40-hex candidate and an applicable check with an explicit result. Focused
checks satisfy the standard line, but not a Full-suite promise. Row order,
not dates, decides which evidence is later. Fresh and reused evidence retain
their stated provenance; text alone does not prove execution. A new `pass`
on this gap refuses before any verdict write; failed verdicts and unrelated
report gaps keep their existing behavior. With no Task close, this check adds
no gap and imposes no new per-Task Full-suite requirement.

**Loop:** a fail sends each finding back as `continue TK-###:` or `new Task:`
through [Map](workflow-reference.md#map) and [Plan](workflow-reference.md#plan) under the still-open Spec, and the next
candidate gets a fresh Review
([corrective return](../dispatcher/SKILL.md#assembled-review-and-corrective-return));
a pass merges to integration for [Verify](workflow-reference.md#verify). Post-delivery Tasks may
still be open when Review passes. The same Review failure
twice, or three attempts with no real progress, blocks and escalates.
