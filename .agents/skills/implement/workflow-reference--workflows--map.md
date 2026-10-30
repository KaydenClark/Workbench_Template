
# Map

Use this section for map; [workflow-reference--workflows](workflow-reference--workflows.md) provides the surrounding context.

### Map

Defined in the [Glossary](../../../GLOSSARY.md) term **Map**.

**Steps:** read the published decision owners and live Actuality -> reuse the
owning Spec, or take a new ID from `next-id --prefix S --json` -> write the
Spec at `planned`, with no Task and an empty tracked `tasks/`
([to-spec](../to-spec/SKILL.md); a landmark-size destination:
[Landmark Lifecycle](../director/SKILL.md#landmark-lifecycle)) -> `render` and `doctor` ->
state `Map counts: N Specs, M Tasks, K empty tasks/` in the Map record (its PR
body) -> `git fetch origin`, then `doctor --map RECORD` passes on the committed
final tree before publishing.

**Loop:** an unresolved owner choice becomes a Spec blocker, never an invented
answer. A failed [Review](workflow-reference.md#review) comes back here under the still-open Spec
before Plan and Journey run again.
