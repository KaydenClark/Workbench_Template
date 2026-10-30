
# Lane Sweep

Use this section for lane sweep; [workflow-reference--workflows](workflow-reference--workflows.md) provides the surrounding context.

### Lane Sweep

Defined in the [Glossary](../../../GLOSSARY.md) term **Lane Sweep**.

Run it at boundaries that already exist: the start of a Director or Dispatcher
session, before and after a Workbench update, before a Spec's assembly, and
on owner request. It is never required: it is no precondition of `next`,
`claim` or `close`, and the Workbench ships no scheduler or background process
for it. An owner may schedule it on their own host.

**Steps:** run `node workbench/tools/lane-sweep.mjs` from a checkout at
integration
([workbench-runtime](../workbench-runtime/SKILL.md#lane-sweep))
-> read each finding -> route it to its owning Spec, where correcting the
record stays that owner's ordinary work -> jot an observation made mid-sweep
on that Spec's Wiki page ([jot](../jot/SKILL.md#capture)).

**Loop:** a finding is a report row and changes nothing by itself, so a lane
its owner has not corrected reports again on the next sweep. When open PRs show
`unavailable`, branches and worktrees are still reported; read the
Limitations and sweep again once `gh` works.
