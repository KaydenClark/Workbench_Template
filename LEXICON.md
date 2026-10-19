# Workbench Template - Lexicon

> Generated from LLM Workbench v3.2.1.

**Last reviewed:** 2026-10-18
**Status:** active for installed routes; historical terms remain identified below

This is the canonical lookup table for terms whose meaning is shared across the
project. Read it when a request, spec, test, or skill uses project language that
could be ambiguous.

## Task Routing

The ordinary entry route is `AGENTS.md` -> [STARTUP](STARTUP.md#resume) -> the assigned Spec and Task resolved through `workbench/manifest.json`. Use [Runbook orientation](RUNBOOK.md#orientation) for an unfamiliar operation. Current owners and source fingerprints outrank a stale STARTUP view.
Use `BLUEPRINT.md` for architecture and cross-cutting direction; use the
manifest-declared Wiki `MEMORY.md` for task-relevant durable knowledge and the
ADR `REGISTER.md` for decision rationale. Read only the relevant linked owners.
`TASKBOARD.md` is a dashboard, not a prerequisite reading archive.

These are the Context Map's entry routes. Follow the smallest applicable route:

| Need | Route to the owner |
|---|---|
| Artifact jobs, information ownership, and where to ask a question | [Artifact Ownership Schema](#artifact-ownership-schema) |
| Accepted terminology and product direction | This Lexicon -> [Blueprint](BLUEPRINT.md) |
| Assigned work, evidence, and implementation | [Manifest](workbench/manifest.json) -> assigned stable spec -> its referenced source/tests |
| Completed capability knowledge and retained proof | [Wiki features](workbench/wiki/features/README.md) when captured; [Spec catalog](workbench/specs/CATALOG.md) -> retained stable spec and dated evidence |
| Durable knowledge and design concepts | [Wiki router](workbench/wiki/MEMORY.md) -> relevant note -> its governing sources |
| Decision rationale | [ADR register](workbench/docs/adr/REGISTER.md) -> active decision -> its operational owners; [history](workbench/docs/adr/HISTORY.md) remains explicit |
| Commands and recovery | [Runbook](RUNBOOK.md) -> relevant workflow -> named skill or tool |

The Wiki retains its single `MEMORY.md` router. This table connects existing
owners; it does not add a second Wiki index or copy their contents.

## Ownership Rules

- Add a term only after the parties agree on its meaning.
- Put project-wide definitions here; keep capability-specific terms in the
  owning spec until they become shared.
- Definitions belong here. Requirements and decisions remain in
  `BLUEPRINT.md` or the owning `SPEC.md`.
- Surface conflicts before changing an established definition.
- Link to detailed sources instead of copying them here.

## Artifact Ownership Schema

An artifact is an identifiable document, record, source file or output. Its
information owner is the maintained place for a particular kind of truth; its
maintainer is the person or assigned agent responsible for keeping that place
current. Information ownership does not grant permission to change it. Follow
the question's job to the smallest current owner, then use the manifest to
resolve installed paths. One file may serve several jobs without becoming a
new authority.

| Job or question | Maintained owner and route |
|---|---|
| Authority and boundaries: who may do what? | Current user request and [AGENTS](AGENTS.md); the assigned Spec narrows the capability. |
| Destination: what should this product become? | [Blueprint](BLUEPRINT.md). |
| Requirements and acceptance: what must this capability do, and what counts as done? | Assigned `SPEC.md` and its acceptance and verification sections. |
| Decisions and rationale: what was chosen, and why? | [ADR register](workbench/docs/adr/REGISTER.md) for architectural choices; manifest-declared `workbench/docs/ddr/` records for destination choices when present (no DDR register is installed in this room); capability-local choices remain in the Spec. |
| Language: what does a shared term mean? | This Lexicon; capability-local meanings remain in the Spec until shared. |
| Knowledge: what context explains a topic? | [Wiki MEMORY](workbench/wiki/MEMORY.md) -> relevant note and its governing sources. |
| Navigation: where should I look? | This routing table, Wiki MEMORY for Wiki pages, and the manifest for installed paths. |
| Work state: what is assigned or blocked? | Owning `SPEC.md` and its `TASK.md` records; [Taskboard](TASKBOARD.md) is their projection. |
| Evidence: what was actually checked? | Spec evidence log -> named result, observer, candidate and limits; a result does not accept itself. |
| Operations and procedures: how is work performed here? | [Runbook](RUNBOOK.md) -> relevant workflow, installed skill section and tool. |
| Reusable behavior: which method applies? | Installed `workbench/skills/` skill named by the operation; a skill inherits the request's scope. |
| Execution and capability: what ran, and can this host do it? | Actual source/tool, host configuration and observed check; configuration alone is not proof. |
| Configuration and provenance: what is installed, and from where? | [Manifest](workbench/manifest.json), component receipts and Git history; see [Version History](workbench/docs/VERSION_HISTORY.md). |
| Working context and recovery: what must survive interruption? | Source-linked [Jot](workbench/skills/jot/SKILL.md) in the relevant Wiki topic, then [implement recovery](workbench/skills/implement/SKILL.md#recovery-and-rollback) with verified live state. Legacy JSON notes remain readable. |
| Human orientation: how does someone start? | [README](README.md), linking to the Runbook for operations. |

The Spec's `TASK.md` records are temporary execution structure; they are real
files created and updated by the installed Spec tool. A features article may
preserve a completed capability explanation, but never copies live Task state
or replaces the retained Spec's dated proof. The Wiki explains; a receipt
records an installation; a test exercises a seam; none independently grants
authority or establishes release. This room deliberately retains its
standalone Wiki, tour, historical Spec IDs and version replay; the generic
source's additional project or deployment examples are not copied as room
facts.

## Workbench Terms

| Term | Definition | Distinction |
|---|---|---|
| **Design concept** | The shared understanding between the parties working on a project about what that project is. | It exists between participants. `BLUEPRINT.md` helps them reconstruct it but is not itself the design concept. |
| **Traverse, don't search** | The core Workbench navigation principle: reach task-relevant context by following links from known entry points to its owners. | Bounded search repairs missing routes or investigates the selected source area; broad rediscovery is not ordinary entry. `AGENTS.md` owns the behavior. |
| **Context Map** | The navigable relationships among Workbench concepts, controls, specs, Wiki context, and referenced source/evidence, entered through this Lexicon's Task Routing. | Existing owners hold the information; any rendered map is a source-derived Projection, not another truth store or authority. No graph service or Obsidian dependency is required. |
| **Blueprint** | The adaptable narrative of the desired finished product: destination, people, outcomes, experience, integrated design, cross-cutting qualities, lifecycle and non-goals. | It supports the design concept; it is not current status, an ADR inventory, a work queue, a glossary, or a proof archive. |
| **Lexicon** | The canonical lookup table for definitions shared across the project. | It owns meanings, not requirements, implementation decisions, or work status. |
| **Spec** | A stable capability record containing scoped intent, requirements, decisions, implementation slices, acceptance, verification, evidence, and completion. | It combines the useful product and engineering roles often split between a PRD and technical spec. |
| **Task** | A bounded executable slice within a Spec, recorded in its own `TASK.md` with state, proof, blockers and assigned stance. | It is temporary execution structure, not durable capability history. The older name **Ticket** and historical `TK-` IDs remain readable in retained records. |
| **Feature article** | A readable Wiki explanation of a completed Spec's delivered capability, captured at closure. | [Features](workbench/wiki/features/README.md) holds this knowledge; it does not replace the Spec's evidence or Task records. |
| **Coordination hand-back** | A point during an assigned run where the owner had to supply something that was not a preference, tradeoff, authorization, or unavailable resource under `AGENTS.md`'s governing gate: a settled decision repeated, evidence already in the project located for the agent, a routine technical finding reconciled, or an already-authorized step prompted. | It is a defect in a record, route, skill, or tool, recorded per occurrence with its cause and smallest correction in the assigned spec's evidence log by the `carry` skill. Answering a genuine owner decision is not one, and neither is a new framework built in response to one. `AGENTS.md` Safety And Change Control owns when an owner is asked; these four reasons restate that gate and never widen it. |

## Continuity Terms

| Term | Definition | Distinction |
|---|---|---|
| **Notepad** | A local, objective-scoped JSON working record with a compact editable current view and an append-oriented work record. Grilling records are notepads and therefore JSON. | It is not Canon or permanent history; preserve important material until reconciled. One objective may use several linked notes. |
| **Jot** | A small source-linked Wiki capture of knowledge, owner intent, observations, proposals or unresolved questions, including correction history. | Shared topic context is recoverable from the Wiki; explicit private jots stay ignored and require local opt-in. A confirmed intention is not a verified result or instruction authority. Old JSON notepads remain readable. |
| **Scoped handoff** | A separate local Markdown (`.md`) compaction authored from the relevant notepad material with plain-language, destination-specific continuation instructions. | A receiving agent can read the file or the owner can paste it into a new chat. It is requested or initiated by the owner; a pointer requires accessible, retained source data. Preservation does not grant authority. |
| **WBID** | The visible identifier comprising an artifact's type prefix and a base-62 value replacing the numeric portion. | Unique within the type and Workbench, not globally; no parallel secondary ID. Existing numeric labels and stable paths remain readable; historical numeric tickets remain spec-qualified, while new letter-bearing tickets reserve the whole Workbench inventory. |

## Stance Terms

| Term | Definition | Distinction |
|---|---|---|
| **Stance** | The method and obligations for performing one assigned task within already established authority. | It is neither an identity nor an authority grant; switching stance creates no handoff. |
| **Builder** | The stance that delivers a scoped, verified result and maintains its documentation. | Implementation includes relevant review and verification. |
| **Auditor** | The stance that checks claims against named evidence and reports a bounded verdict. | An audit does not authorize repairs or release. |
| **Reviewer** | The stance that challenges a candidate's correctness, impact and evidence. | At integration it runs in a separate context; it does not quietly repair the candidate. |
| **Reconciler** | The stance that reconciles achieved work with the state and owners needed for continuation. | It neither manufactures completion nor duplicates truth in a universal handoff. |
| **TASK** | The assigned Task within a stable SPEC, carrying its normal stance assignment in `TASK.md`. | The installed Spec tool writes Task records; Taskboard displays their derived state. Historical ticket wording remains readable. |

## Governance Core

Design-concept routing: a question about what a product, subsystem, or
relationship *is* starts here, then follows the term to the maintained
articles in `workbench/wiki/design-concepts/`; an authorized operation may
create or update one with its provenance. The Blueprint and the assigned
spec still decide when a requirement or verified Actuality matters.

Shared by every Workbench. These rows describe roles and boundaries; the
binding behavior lives in `AGENTS.md`, cross-cutting architecture in
`BLUEPRINT.md`, and rationale in the project's `workbench/docs/adr/` collection.

| Term | Definition | Distinction |
|---|---|---|
| **Governance Plane** | The role one claim plays in one operation: **Intent** (the request), **Canon** (the binding current-state rule), **Grounding** (evidence about intended truth or whether work was done correctly), **Enduring Context** (durable reference consulted), **Actuality** (the target being changed, including files, source, runtime, and verified state), and **Projection** (a source-derived report). | Planes classify claims and their use, never whole files, directories, or artifact types. One assigned spec carries Canon, Projection, Grounding, and Enduring Context claims at once. |
| **Workbench Contract** | The logical set of current claims owned by the seven root controls plus the explicitly assigned spec. | It is not a file; no `CONTRACT.md` or other coequal root control exists. |
| **Instruction authority** | What an agent may do: the current owner request, then `AGENTS.md` with platform safety, then the explicitly assigned spec as a bounded capability delegate, then the procedural controls. | An assigned spec cannot enlarge the request, platform safety, or `AGENTS.md` scope; an unassigned spec is evidence. |
| **State resolution** | How a Canon claim and verified Actuality are reconciled: newer Canon is an implementation gap, newer verified Actuality is documentation drift, unclear ordering is an ambiguity to investigate. | Neither "code always wins" nor "Canon proves implementation"; the touched owner is repaired rather than a universal precedence applied. |
| **No-governance-tax rule** | Ordinary owner-directed project work requires only the Workbench Contract and its verification; no coordination system, order form, flight, or external mechanism is a prerequisite. | Available mechanisms a change genuinely needs still apply; the line is availability, not ceremony. |
| **Diagnostic** | A registered finding a Workbench tool emits with a stable code, a severity of `error` or `attention`, a scope, and a blocking effect of `all`, `selection`, `selected-slice`, or `none`. | The consuming command enforces the effect; no artifact chooses whether its own finding blocks. |
| **Support lane** | One of the seven manifest-declared slots under lowercase `workbench/`: `docs`, `specs`, `wiki`, `sessions`, `feedback`, `tools`, `skills`. | A lane is a structural slot, not a Governance Plane; the installed skills lane holds tracked reusable behavior. |
| **Collection** | A manifest-declared, machine-used directory inside a lane, including `docs/adr`, `docs/ddr`, `wiki/design-concepts`, `wiki/features`, `wiki/guidebooks`, `wiki/archive`, the declared sessions collections and `workbench/landmarks`. | Read the actual manifest for the complete room list. Collection names are lowercase; a collection is not promoted to a lane because its contents differ. |
| **ADR** | An architecture decision record in `workbench/docs/adr/`: title, decision, considered alternatives, consequences, provenance, and frontmatter naming its operational owners. | Active accepted ADR decision claims are architectural Canon; rationale and history remain distinct; `canonicalized_in` names operational owners. |
| **Checkpoint** | A retained historical tracked copy in `sessions/checkpoints/`; new copy creation is retired. | Preserve existing bytes and citations. New claims reconcile into their durable owners; operational recovery is separate. |
| **Operational recovery** | Local rollback receipts and backups in the ignored `sessions/recovery/` collection. | Excluded from notepad discovery and durable provenance; existing historical recovery references remain valid. |
| **Design Concept article** | An encyclopedic wiki article in `wiki/design-concepts/` explaining a durable cross-cutting model or supported landmark synthesis, with sources and `History`. | It is not the Blueprint, an ADR, procedure or Task state. An agent may create or update one during an authorized operation that touched it, recording that operation. |
| **Wiki profile** | The manifest's declared wiki shape: `project` (one room's memory router and collections) or `deployment` (adds owner, machine, and project pointer collections). | A profile declares routing shape; it grants no authority and copies no live task state. |
| **Managed runtime tool** | A file in `workbench/tools/` installed from the Workbench release and listed in the tools receipt with its source release, commit, and hash. | It is updated only by explicit update with backup and rollback; an application's root `tools/` is application-owned. |
| **Declared integration branch** | The branch, named by exact case in `workbench/manifest.json` `git.integrationBranch`, into which the independent review gate merges task branches; `git.defaultBranch` names the branch it is created from. | A declaration, not a prose convention: controls resolve it from the manifest, `doctor` reports it undeclared or missing without blocking selection, and only generation, adoption, and upgrade completion fail closed on it. |

## Project Terms

| Term | Definition | Distinction / aliases to avoid |
|---|---|---|
| **Room** | One repository with the Workbench installed in it: seven root controls, a `workbench/` support root declared by a manifest, and an installed managed runtime. | A room is an installation, not the harness. `LLM_Workbench` is the harness; `Example Workbench` and `Audit Workbench` are rooms. Avoid "workbench" alone when you mean one installation. |
| **Tour** | The ordered list of places in `tour.mjs`, each naming a real path with what it owns and why it is kept apart. | The tour is data that happens to print. It is not prose about the room and not a README section; the tests read the same list the terminal does. |
| **Place** | One entry in the tour: a path, its zone, the truth it owns, and the reason that truth is not kept somewhere else. | A place is not merely a directory. A directory nobody can say a "why" for does not belong in the room. |
| **Zone** | One of the three groupings a place belongs to: `Root controls`, `The support root`, `The product`. | Zones organize the explanation. They are not lanes, and the manifest does not know about them. |
| **Drift** | The condition where the room's structure and the tour's description of it disagree. | Drift is a test failure here, not a documentation backlog item. `node tests/tour.test.mjs` is what makes that true. |
## Continuity And Evidence Boundaries

- **Workbench connection identity:** the stable namespace selected for optional
  private session transport. Clones/worktrees share it; independent rooms differ.
  It is distinct from each visible, type-scoped artifact identifier.
- **Private session transport:** explicitly configured synchronization of selected
  live working records. Private Git retention changes recoverability, not the
  record's authority or durable project ownership.
- **Direct promotion:** deliberate selected-claim reconciliation into a named
  durable owner, with privacy/validity checks and verified destination recovery
  before scoped source cleanup. It is not merely a copy or commit.
- **Configured-host capability:** an operation exercised in the actual host and
  configuration. It does not establish machine enforcement or model reliability.
- **Core compatibility:** the explicit supported range between one selected
  installed global core release and room versions; a version difference alone
  is not proof of incompatibility.
