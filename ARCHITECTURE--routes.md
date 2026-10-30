# Routes

Detail for [Architecture](ARCHITECTURE.md); this page owns its routes explanation.

## Routes

Cold starts follow the [Runbook](RUNBOOK.md#get-oriented); use this map to locate relevant context.
For assigned Spec/Task work, resolve records through `workbench/manifest.json`.
Use `BLUEPRINT.md` for architecture and cross-cutting direction; use the
manifest-declared Wiki `MEMORY.md` for task-relevant durable knowledge and the
ADR `REGISTER.md` for decision rationale. Read only the relevant linked owners.
`TASKBOARD.md` is a dashboard, not a prerequisite reading archive.

These are the Context Map's entry routes. Follow the smallest applicable route:

| Need | Route to the owner |
|---|---|
| Direct and dispatch assigned work | [`director`](.agents/skills/director/SKILL.md) -> [`dispatcher`](.agents/skills/dispatcher/SKILL.md) -> [`implement`](.agents/skills/implement/SKILL.md#worker-selection-implementation-and-hand-back) |
| Write or edit agent instructions | [`writing-for-agents`](.agents/skills/writing-for-agents/SKILL.md) |
| Artifact jobs, information ownership, and where to ask a question | [Ownership](ARCHITECTURE--ownership.md#ownership) above |
| Accepted terminology | [Glossary](GLOSSARY.md) -> the term -> its Wiki explanation |
| Product destination | [Blueprint](BLUEPRINT.md) |
| Assigned work, evidence, and implementation | `workbench/manifest.json` -> assigned stable spec -> its referenced source/tests |
| Capability knowledge and retained delivery records | [Feature catalog](workbench/wiki/features/README.md) -> maintained capability article; `spec-workbench.mjs list --all` reads `workbench/specs/` and landmark homes -> retained Spec for state and dated proof |
| Landmark Tracker meaning, delivery and availability | [Glossary](GLOSSARY.md) -> Wiki explanation and accepted decision -> `spec-workbench.mjs list --all` or the owning landmark in `workbench/landmarks/` -> Runbook procedures and actual runtime checks; an accepted concept or completed Task does not prove an available operation |
| Durable knowledge and design concepts | [Wiki router](workbench/wiki/MEMORY.md) -> relevant note -> its governing sources |
| Decision rationale | [ADR register](workbench/docs/adr/REGISTER.md) -> active architectural decision -> its operational owners; [DDR register](workbench/docs/ddr/REGISTER.md) -> active destination decision -> its owners; [ADR history](workbench/docs/adr/HISTORY.md) and [DDR history](workbench/docs/ddr/HISTORY.md) remain explicit |
| Workflow altitude, review and lifecycle | [AGENTS review and closure](AGENTS.md#pr-instructions) -> the [`dispatcher` assembled review](.agents/skills/dispatcher/SKILL.md#dispatcher-and-separate-director-assembled-review); follow this room's active ADR routes |
| Operations and procedures | [Runbook workflow route](RUNBOOK.md#workflows) -> the named skill's section or a Runbook section -> named tool |
| Recovery after interruption or failure | [`implement` recovery section](.agents/skills/implement/SKILL.md#recovery-and-rollback) -> existing Spec, source and local working context |

The Wiki retains its single `MEMORY.md` router. This table connects existing
owners; it does not add a second Wiki index or copy their contents.

Design-concept routing: a question about what a product, subsystem, or
relationship *is* starts at its glossary term, then follows the term to the
articles in `workbench/wiki/design-concepts/`; the Blueprint and the assigned
spec still decide when a requirement or verified Actuality matters.
