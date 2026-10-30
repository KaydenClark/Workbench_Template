
# Cleanup

Use this section for cleanup; [workflow-reference--workflows](workflow-reference--workflows.md) provides the surrounding context.

### Cleanup

The last step of [Complete](workflow-reference.md#complete) in the [workflow map](workflow-reference.md#workflows),
performing the Glossary's **Clean Up** after [Deliver](workflow-reference.md#deliver).

**Steps:** Remove the delivery's attributable temporary branches and worktrees
with expected-tip guards, then close the post-delivery cleanup Task with that
proof -> `complete S-###` -> update and validate the capability's Wiki feature
article and reconcile surviving claims into their owners
([director](../director/SKILL.md#documentation-feature-capture-retirement-and-recovery))
-> `retire-spec S-### --wiki PATH` -> once the retired directory is on main,
`discard S-###` when nothing still references it.

**Loop:** `complete` refuses, leaving state untouched, while any post-delivery
Task or acceptance line is unfinished. A missing, invalid or unrouted feature
article blocks `retire-spec` and `discard`; a current reference or a directory
not yet on main blocks `discard`. A later gap against delivered work is a new
Spec, never a revived one.
