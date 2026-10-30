
# Approve

Use this section for approve; [workflow-reference--workflows](workflow-reference--workflows.md) provides the surrounding context.

### Approve

Defined in the [Glossary](../../../GLOSSARY.md) term **Approve**.

**Steps:** After [Verify](workflow-reference.md#verify), the owner inspects the integrated candidate
-> record the judgment with `approve S-### --candidate SHA --owner NAME`, or
a finding with `--finding TEXT`
([director](../director/SKILL.md#owner-human-qa-and-main-before-complete)).
The approval binds the same content digest as the passed Review, so
post-delivery bookkeeping keeps it current.

**Loop:** A finding returns corrective Tasks under the open Spec, and the next
candidate needs a fresh Review and approval; a destination change returns to
[Align](workflow-reference.md#align). Approval grants no delivery: main delivery requires the
owner's Ship it ([Ship](../../../GLOSSARY.md)). It is not the execution
approval that leaves [Prepare](workflow-reference.md#prepare).
