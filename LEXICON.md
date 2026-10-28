# Workbench Template - Lexicon

> Generated from LLM Workbench v3.2.1.

**Last reviewed:** 2026-10-18
**Status:** archived; superseded by GLOSSARY.md and ARCHITECTURE.md in the v3.2.2 update. Retirement is gated: do not run `retire-lexicon` until the owner confirms the 69 pending dispositions in workbench/specs/S-000E-v3-2-2-harness-upgrade/lexicon-disposition.json (the S-00A Blueprint inventory also opens this file).

This is the canonical lookup table for terms whose meaning is shared across the
project. Read it when a request, spec, test, or skill uses project language that
could be ambiguous.


## Task Routing

Use `BLUEPRINT.md` for architecture and cross-cutting direction; use the
manifest-declared Wiki `MEMORY.md` for task-relevant durable knowledge and the
ADR `REGISTER.md` for decision rationale. Read only the relevant linked owners.
`TASKBOARD.md` is a dashboard, not a prerequisite reading archive.

These are the Context Map's entry routes. Follow the smallest applicable route:

| Need | Route to the owner |
|---|---|
| Artifact jobs, information ownership, and where to ask a question | [Artifact Ownership Schema](#artifact-ownership-schema) |
| Assigned work, evidence, and implementation | [Manifest](workbench/manifest.json) -> assigned stable spec -> its referenced source/tests |
| Durable knowledge and design concepts | [Wiki router](workbench/wiki/MEMORY.md) -> relevant note -> its governing sources |

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
| **Lexicon** | The canonical lookup table for definitions shared across the project. | It owns meanings, not requirements, implementation decisions, or work status. |
| **Feature article** | A readable Wiki explanation of a completed Spec's delivered capability, captured at closure. | [Features](workbench/wiki/features/README.md) holds this knowledge; it does not replace the Spec's evidence or Task records. |
| **Coordination hand-back** | A point during an assigned run where the owner had to supply something that was not a preference, tradeoff, authorization, or unavailable resource under `AGENTS.md`'s governing gate: a settled decision repeated, evidence already in the project located for the agent, a routine technical finding reconciled, or an already-authorized step prompted. | It is a defect in a record, route, skill, or tool, recorded per occurrence with its cause and smallest correction in the assigned spec's evidence log by the `carry` skill. Answering a genuine owner decision is not one, and neither is a new framework built in response to one. `AGENTS.md` Safety And Change Control owns when an owner is asked; these four reasons restate that gate and never widen it. |

## Stance Terms

| Term | Definition | Distinction |
|---|---|---|
| **Builder** | The stance that delivers a scoped, verified result and maintains its documentation. | Implementation includes relevant review and verification. |
| **Auditor** | The stance that checks claims against named evidence and reports a bounded verdict. | An audit does not authorize repairs or release. |
| **Reconciler** | The stance that reconciles achieved work with the state and owners needed for continuation. | It neither manufactures completion nor duplicates truth in a universal handoff. |

## Governance Core

| Term | Definition | Distinction |
|---|---|---|
| **State resolution** | How a Canon claim and verified Actuality are reconciled: newer Canon is an implementation gap, newer verified Actuality is documentation drift, unclear ordering is an ambiguity to investigate. | Neither "code always wins" nor "Canon proves implementation"; the touched owner is repaired rather than a universal precedence applied. |
| **No-governance-tax rule** | Ordinary owner-directed project work requires only the Workbench Contract and its verification; no coordination system, order form, flight, or external mechanism is a prerequisite. | Available mechanisms a change genuinely needs still apply; the line is availability, not ceremony. |
| **Diagnostic** | A registered finding a Workbench tool emits with a stable code, a severity of `error` or `attention`, a scope, and a blocking effect of `all`, `selection`, `selected-slice`, or `none`. | The consuming command enforces the effect; no artifact chooses whether its own finding blocks. |
| **ADR** | An architecture decision record in `workbench/docs/adr/`: title, decision, considered alternatives, consequences, provenance, and frontmatter naming its operational owners. | Active accepted ADR decision claims are architectural Canon; rationale and history remain distinct; `canonicalized_in` names operational owners. |
| **Checkpoint** | A retained historical tracked copy in `sessions/checkpoints/`; new copy creation is retired. | Preserve existing bytes and citations. New claims reconcile into their durable owners; operational recovery is separate. |
| **Operational recovery** | Local rollback receipts and backups in the ignored `sessions/recovery/` collection. | Excluded from notepad discovery and durable provenance; existing historical recovery references remain valid. |
| **Wiki profile** | The manifest's declared wiki shape: `project` (one room's memory router and collections) or `deployment` (adds owner, machine, and project pointer collections). | A profile declares routing shape; it grants no authority and copies no live task state. |
| **Managed runtime tool** | A file in `workbench/tools/` installed from the Workbench release and listed in the tools receipt with its source release, commit, and hash. | It is updated only by explicit update with backup and rollback; an application's root `tools/` is application-owned. |

## Project Terms

| Term | Definition | Distinction / aliases to avoid |
|---|---|---|
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
