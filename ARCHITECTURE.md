# Workbench Template - Architecture

> Generated from LLM Workbench v3.2.2.

**Last reviewed:** 2026-10-28
**Status:** active

This file names owners, routes and invariants. As a routing
artifact, never a Contract file, it binds nothing. It is revisited a few times a year,
or when an owner, lane or invariant changes. Terms are defined in
[`GLOSSARY.md`](GLOSSARY.md); the Wiki explains them.

## Bird's-Eye View

The Workbench Template is a copyable reference installation of LLM Workbench: a legible starting structure for a new project and a real installed room in which harness maintainers verify an explicit update.

The room is a Git repository with root files on top, Workbench lanes
declared by `workbench/manifest.json` underneath, and the project's own source
beside them. Every kind of truth has one maintained owner; an agent enters at
`AGENTS.md`, follows a route below to the smallest owner that answers its
question, and writes a change back to that owner.

## Codemap

Genesis and adoption draft this codemap from the project's source tree, and
grilling confirms it. Name each top-level module, directory or important type
and the job it does; name things rather than linking code, so the map stays
true as files move.

| Path | What lives there |
|---|---|
| `tour.mjs` | The room's optional one-command orientation demo: the ordered places of the tour, each with what it owns and why it is kept apart, plus the lifecycle account and upgrade route it prints. |
| `tests/` | `tour.test.mjs` keeps the tour, the manifest, the root controls and the installed receipts in agreement; `evidence-history.test.mjs` exercises the evidence-history checker. |
| `tools/` | Application-owned checks, not the managed runtime: `check-evidence-history.mjs` refuses a change that drops or rewrites existing Spec evidence or Task receipt rows. |
| `.github/workflows/verify.yml` | The required CI job that runs the full Test And Build suite on PRs to and pushes on `integration` and `main`. |
| `.agents/skills/` | The tracked skills lane: the core skills with their receipt and the optional skills this room selected; `.claude/skills` is one relative link into it. |
| `workbench/specs/` | This room's Specs and Tasks, including the retained historical Specs and upgrade records; `CATALOG.md` is their generated index. |
| Root files | `AGENTS.md`, `BLUEPRINT.md`, `GLOSSARY.md`, `ARCHITECTURE.md`, `RUNBOOK.md`, `README.md`, `TASKBOARD.md` and the `CLAUDE.md` host adapter; their jobs are in [Ownership](#ownership). `LEXICON.md` is the archived v3.2.1 vocabulary, not a current control. |
| `workbench/` | The lanes and collections the manifest declares under the support root: Specs and Tasks, landmarks, the Wiki, decision records, managed runtime tools, sessions and feedback. The skills lane is `.agents/skills/`, above. |

[Layout](workbench/docs/WORKBENCH_STRUCTURE.md); [organization](workbench/docs/ORGANIZATION.md).

## Ownership

An **artifact** is an identifiable document, structured record, source file or
output used by the Workbench. A **responsibility** is the job that needs doing.
An **artifact owner** is the maintained location of a particular kind of truth;
a **maintainer** is the person or assigned agent responsible for keeping it
current. Owning information does not grant permission to change it.

The Workbench Contract is the claim set routed through `AGENTS.md`,
with the bounded assigned Spec and, while an operation is performed, the
lane skill the Contract points to for it; it is not another document. Other root
artifacts are routed by the question they answer. The following jobs are
distinct even when one document serves several. This is an ownership map, not a
requirement to create one file, agent or workflow stage per row. Paths below use
the standard layout; the manifest resolves an installed project's actual lanes
and collections.

| Job | Definition and owned content | Agent question | Maintained owner / route |
|---|---|---|---|
| **Authority** | Establish who may authorize an action and which instructions apply. | Who can authorize this? | Current user request -> [AGENTS](AGENTS.md#dev-environment-tips); the assigned Spec delegates only its bounded capability. |
| **Boundaries** | Limit the authorized action: scope, protected resources, prohibitions, approvals, privacy and external effects. | May I change or expose this? | [AGENTS](AGENTS.md); the current request and assigned Spec may narrow the task. |
| **Destination** | Describe the desired finished product, its people, purpose, experience, outcomes, qualities and non-goals. | What are we trying to build, and why? | [Blueprint](BLUEPRINT.md). |
| **Requirements** | Define the behavior, interfaces, constraints and exclusions of one capability. | What must this capability do? | Assigned stable `SPEC.md` -> Desired Behavior, Decisions And Contracts, Non-Goals. Cross-cutting qualities stay in the Blueprint. |
| **Decisions** | Preserve an accepted choice, its rationale, alternatives, consequences and supersession. | What was decided, and why this choice? | [ADR register](workbench/docs/adr/REGISTER.md) -> active architectural decision; [DDR register](workbench/docs/ddr/REGISTER.md) -> active destination decision; capability-local choices stay in the owning Spec. |
| **Language** | Define shared terms, aliases and distinctions precisely. | What does this word mean here? | [Glossary](GLOSSARY.md) -> the term; its Wiki explanation goes deeper. Capability-only terms remain in their Spec until shared. |
| **Knowledge** | Explain durable concepts and source-backed context that help a reader understand the project. | What do I need to understand about this? | [Wiki MEMORY](workbench/wiki/MEMORY.md) -> relevant note or Design Concept article -> governing sources. |
| **Navigation** | Connect a question to its smallest relevant information owner. | Where should I look? | This file's [Routes](#routes); Wiki MEMORY routes inside the Wiki; manifest resolves locations. |
| **Work state** | Record assignment, priority, progress, dependencies, blockers, latest event and next gate. | What is happening, who owns it, and what is next? | Owning `SPEC.md` and its Tasks; [Taskboard](TASKBOARD.md) displays their generated current view. |
| **Acceptance** | Specify the observable conditions and required proof for declaring an outcome complete. | What would count as done? | Assigned Spec -> Acceptance Criteria and Verification Procedure; AGENTS owns project-wide verification and review obligations. |
| **Evidence** | Record the candidate, method, observer or producer, result, limits and source needed to assess a claim. | What was actually checked, and what does it prove? | Spec evidence log -> named test, review, report or result artifact. Evaluation records own their observations; the Spec links the proof relevant to its acceptance. |
| **Operations** | Govern how authorized work moves through selection, execution, verification, maintenance and delivery. | What operation applies, and what are its entry and exit conditions? | [AGENTS](AGENTS.md) owns lifecycle obligations; the Runbook workflow routes to the skill each operation follows, which points to where each operation's prerequisites and expected results live. |
| **Procedures** | Describe the repeatable steps, inputs, commands, failure handling and checks for a particular operation. | How do I perform this operation here? | [Runbook workflow route](RUNBOOK.md#workflows) -> the named skill's procedure and tool; a workflow's steps are its [Runbook entry](RUNBOOK.md#workflows). A linked Wiki guidebook may hold an extended procedure without copying its governing rules. |
| **Reusable behavior** | Define a method for a recurring kind of work and the posture of a stance. | Which method or stance should I apply? | [`make-it-so` Behavior selection](.agents/skills/make-it-so/SKILL.md#behavior-selection) -> resolved skill `SKILL.md`; Spec/TASK assigns the normal stance. A skill inherits scope. |
| **Execution** | Carry out the authorized operation in a concrete environment and produce an observable result. | What runs, where does it run, and what happened? | Named source/tool and actual host configuration own the mechanism; Runbook explains invocation; Spec records the resulting state and evidence. A procedure is not a run. |
| **Configuration** | Declare paths, identity, dependencies, installed components and host settings. | What is configured here? | `workbench/manifest.json`, relevant component configuration and ownership receipts; Runbook routes setup and inspection. |
| **Capability** | Establish which operations the configured environment can actually perform and under what limitations. | Can this environment do the requested operation? | [Configured-host capability checks](.agents/skills/workbench-runtime/SKILL.md#configured-host-capability-checks) -> actual host/tool and its result. A manifest declaration or installed file alone is insufficient. |
| **Evolving concept understanding** | Preserve pre-delivery understanding, its unresolved questions, changes and evidence. | What do we currently understand, and what is still open? | DQCs and landmark records hold the structured account; the Wiki's landmark synthesis pages summarize it; the generated Tracker presents their relationships. The room runtime, not this definition, establishes availability. |
| **Working context** | Preserve unfinished reasoning, corrections, source references and unresolved questions for one objective. | What would otherwise be lost with this conversation? | Relevant topic Wiki page through `jot`, with source, claim kind/status and linked corrections; new project context is shared by default and explicit private capture stays ignored. Settled requirements, definitions and decisions retain their existing owners. Old JSON notes remain readable through `notepad` compatibility. |
| **Recovery** | Restore a verified, usable state after interruption or failure and establish a safe continuation point. | What survived, and how can I resume or roll back? | [Recovery procedure](.agents/skills/implement/SKILL.md#recovery-and-rollback) -> existing root files, Spec, source, relevant Wiki context or legacy note, and any recovery receipt or backup. Recheck live state before acting. |
| **Handoff** | Communicate a delegated job, completion report or update to a specified recipient in another context, as a readable map to the context the records already hold. | What should this receiving agent do, and where is the context it needs? | Local Markdown instructions and selected context from accessible owners and relevant notes; it does not replace them. Role-based delegation follows [handoff skill](.agents/skills/handoff/SKILL.md#author-recipient-and-shared-context). |
| **Feedback** | Preserve observed failures, friction, impact, uncertainties and proposed corrections. | What went wrong, and what should be investigated? | Manifest feedback lane -> occurrence/report -> source evidence. An authorized repair and its disposition belong in the owning Spec. |
| **Evaluation** | Define comparisons and assess whether a change improves outcomes, including costs and uncertainty. | Does this Workbench help agents complete better work? | The [`improve-harness` skill's Evaluation Procedures](.agents/skills/improve-harness/SKILL.md#evaluation-procedures) -> named evaluation definitions and result ledger; the relevant Spec owns acceptance. Structural checks do not establish agent outcomes. |
| **Provenance and history** | Preserve origins, revisions, producers, corrections and superseded claims without presenting them as current. | Where did this claim or component come from? | The owning artifact's provenance/evidence, Git history, ADR history or component receipt. Retired checkpoints remain history. |
| **Delivery and release** | Establish the verified candidate, integration containment, published version and installed consumer state separately. | Is this change delivered here, or only prepared? | AGENTS owns approval/review boundaries; the [`implement` skill](.agents/skills/implement/SKILL.md#branch-completion) carries the closeout procedures; the delivery Spec owns proof linked to actual Git, release and installation records. |
| **Human orientation** | Explain what the project is, who it is for, and how a person starts using it. | How do I get started? | [README](README.md), linking operational detail to the Runbook. |

The Spec's `TASK.md` records are temporary execution structure; they are real files created and updated by the installed Spec tool. A features article may preserve a completed capability explanation, but never copies live Task state or replaces the retained Spec's dated proof. The Wiki explains; a receipt records an installation; a test exercises a seam; none independently grants authority or establishes release. This room deliberately retains its standalone Wiki, tour, historical Spec IDs and version replay; the generic source's additional project or deployment examples are not copied as room facts.

Installed versions and their sources are recorded in the [manifest](workbench/manifest.json), the component receipts, Git history and the [Version History](workbench/docs/VERSION_HISTORY.md).

The table above identifies where a question is answered. These distinctions
prevent a supporting artifact from silently taking over another job:

| Artifact | Defined job and ownership limit |
|---|---|
| **Root files** | AGENTS governs agents; Blueprint describes destination; `GLOSSARY.md` defines shared terms; `ARCHITECTURE.md` routes ownership; Runbook gives operations and procedures; README orients people. TASKBOARD projects Spec state; CLAUDE adapts entry for its host. AGENTS is the always-loaded brief of rules that apply in every session, the Runbook is the short operating manual, with linked workflows and owning skills, and the glossary and this file are the dictionary and navigation map. They are discoverable together, but do not carry equal instruction authority; root placement alone grants none. |
| **SPEC and TASK** | The Spec owns scoped delivery while it and its Tasks are needed as scaffolding. After verified delivery and reconciliation, the implementation and maintained documentation hold enduring capability knowledge. Its Tasks divide delivery into temporary slices, each held in its own `TASK.md`. Neither a dashboard nor a local task list replaces their accepted state. |
| **ADR** | An active accepted decision owns architectural Canon; rationale and rejected or superseded alternatives remain distinguishable. Operational owners are named by `canonicalized_in`. |
| **Wiki** | A directory of agent-written Markdown every agent reads and updates: summaries, entity pages, concept pages, comparisons, an overview and an evolving synthesis, in prose. Its pages are Enduring Context and its schema is Canon; it authorizes nothing. Persistent memory: [definition and upkeep](workbench/wiki/SCHEMA.md#purpose-and-ownership). |
| **Wiki article and guidebook** | An article owns an explanation or synthesis; a guidebook owns a linked detailed procedure. Both cite governing sources and cannot authorize work or become a second work tracker; Wiki `SCHEMA.md` owns their structure. |
| **Manifest, schema, configuration and receipt** | A manifest locates and declares; a schema defines valid record shape; configuration supplies operating values; a receipt records an operation's source and result. Valid shape or recorded installation alone proves neither correct behavior nor current runtime availability. |
| **Skill and host adapter** | A skill owns reusable behavior. A skill in the tracked skills lane that the Contract points to for an operation binds for that operation, as `AGENTS.md` directs; an unpointed skill, including one the room added, teaches but does not instruct. An adapter, including `CLAUDE.md`, makes the shared entry usable in a host without redefining project authority. |
| **Source, tool and test** | Source implements behavior, a tool performs an operation, and a test exercises a claim at a defined seam. Observed results establish only the behavior and environment exercised. |
| **Evidence record and feedback report** | Evidence records observations with provenance and limits. A feedback report keeps observations, diagnosis and proposed action distinct and never accepts its own recommendation. |
| **DQCs, landmarks and Tracker** | DQCs and landmarks maintain evolving concept understanding; Tracker projects it. They replace no Spec, Task, source question, ledger or durable knowledge owner. |
| **Jot, legacy notepad, handoff and recovery backup** | A jot captures source-linked knowledge and labeled intent in the existing Wiki topic. Legacy JSON notes remain readable; a handoff selects relevant context for another agent. A backup/receipt supports restoration. Their access and lifecycles remain distinct; existing information owners retain requirements, decisions and work state. |
| **Projection and index** | Taskboard, generated Landmark Tracker and ADR and DDR register/history views point to their source records. Correct the source and regenerate the view; an index owns navigation, not the indexed claim. |
| **Template** | A template owns a reusable starting shape. The filled project artifact owns local truth; placeholders never become project decisions by being copied. |

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
| Artifact jobs, information ownership, and where to ask a question | [Ownership](#ownership) above |
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

## Invariants And Boundaries

- Every kind of truth has one maintained owner. A projection or index is
  regenerated from its source, never corrected in place.
- This file binds nothing. The glossary and this file describe roles and
  boundaries; the binding behavior lives in `AGENTS.md`, cross-cutting
  architecture in `BLUEPRINT.md`, architectural rationale in the project's
  `workbench/docs/adr/` collection and destination decisions in its
  `workbench/docs/ddr/` collection.
- Add a term to `GLOSSARY.md` only after the parties agree on its meaning.
- Put project-wide definitions in `GLOSSARY.md`; keep capability-specific terms
  in the owning spec until they become shared.
- Definitions belong in `GLOSSARY.md`. Requirements and decisions remain in
  `BLUEPRINT.md` or the owning `SPEC.md`.
- Surface conflicts before changing an established definition.
- Link to detailed sources instead of copying them.
- Continuity is the result of all these owners remaining coherent and
  recoverable, not a responsibility delegated entirely to the notepad or the
  recovery folder. Likewise, the Contract is the set of applicable claims, not a
  synonym for the Blueprint. Ownership classifies information; authority and
  Governance Planes still apply to individual claims in the current operation.

Skill names have one scope. [Continuation](.agents/skills/implement/execution-authority.md) preserves sources.
