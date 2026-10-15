---
type: memory
status: active
sensitivity: normal
knowledge_role: canonical
provenance:
  - Genesis or Adoption of this room
source_paths:
  - workbench/wiki
last_verified: 2026-09-08
---

# Workbench Template Memory

> Generated from LLM Workbench v3.2.1. This is the room brain: the
> canonical, human-editable memory router for this project, kept at
> `workbench/wiki/MEMORY.md`. Start here and follow the smallest relevant
> link instead of browsing folders or searching.

This router holds durable room memory only: context, decision-history
pointers, and routing. It never duplicates live task state; it routes to it.

## Source Precedence

1. Verified runtime and this room's live controls: `AGENTS.md`, `BLUEPRINT.md`,
   the assigned stable spec, `TASKBOARD.md`, and `RUNBOOK.md`.
2. Maintained notes routed from this file.
3. `archive/` and generated material.

When sources disagree, verify the higher-authority source and repair the stale
note (`AGENTS.md` -> State Resolution). The wiki is a map, not a Governance
Plane: it routes to Canon, Grounding, and verified Actuality and authorizes
nothing.

## Leaving The Wiki

| Go to | For |
|---|---|
| [AGENTS.md](../../AGENTS.md) | Authority, scope, safety, and the work loop |
| [BLUEPRINT.md](../../BLUEPRINT.md) | Short direction summary: what it is, who it serves, promised outcomes and non-goals |
| [LEXICON.md](../../LEXICON.md) | Shared terms, the Governance Core, and design-concept routing |
| [TASKBOARD.md](../../TASKBOARD.md) | Current execution state |
| `workbench/specs/` | Stable capability records, acceptance, evidence, and proof |
| [RUNBOOK.md](../../RUNBOOK.md) | Exact operating and verification commands |
| [SCHEMA.md](SCHEMA.md) | Wiki CRUD, metadata, sensitivity, and freshness rules |
| [design-concepts/](design-concepts/README.md) | Owner-directed articles explaining durable design models |
| [guidebooks/](guidebooks/) | Ordered procedures that outgrew the Runbook |

## Routing

| Question | Read first |
|---|---|
| What is a workbench, and what goes in each place? | `node tour.mjs`, then [S-001](../specs/S-001-self-explaining-room/SPEC.md) |
| Where did this room come from? | `provenance` in [manifest.json](../manifest.json) - genesis from LLM Workbench v3.1.2 at `18ffc0d` |
| How do I know the explanation is still true? | `node tests/tour.test.mjs` - drift is a test failure, not a backlog item |
| What detail supports the short Blueprint? | [Template direction detail](#template-direction-detail) |
| How did the harness get here, and how do I stand in an earlier generation? | [VERSION_HISTORY.md](../docs/VERSION_HISTORY.md), then `git checkout version/NN-...`; recorded by [S-002](../specs/S-002-version-history-replay/SPEC.md) |

This room is deliberately small. The rows above route to live controls and the
room's executable description. The supporting direction below retains the
detail moved from the Blueprint; it does not add another control or work queue.

Add a row only when a durable note exists to route to. A young room may have an
empty table; that is fine. Grow flat notes beside this router and inside the
declared collections; only `archive/` may nest.

## Template direction detail

These passages moved from the eight-section Blueprint read at
`fc0fc18c2c1752c8c98a4fed20304e803c71f53c:BLUEPRINT.md` during the
owner-directed Servitor artifact reconciliation of 2026-10-15. They preserve
its substantive commitments without making the summary a procedure or proof
archive. Their accepted design does not establish current installed behavior.
The [Runbook](../../RUNBOOK.md) owns executable procedures and
[AGENTS](../../AGENTS.md) owns authority and verification.

### Desired Experience And Behavior

One local command explains the room. The tour is an orientation aid checked
against the manifest, not a second authority or an application to impose on every
future project. Agents enter through the Runbook and Lexicon, preserve the scope
of ordinary requests and keep significant working context in JSON while they work.
A requested handoff is readable Markdown; decisions and corrections survive it.
A specification-only request produces specification work only.

### Integrated System Design

Seven root controls separate behavior, destination, vocabulary, procedures, work
projection and human orientation. The manifest declares installed support paths.
Stable specs retain scoped requirements and evidence; accepted active ADRs retain
architectural decisions, with explicit history views for retired decisions. The
Lexicon routes to the complete spec catalog and the room Wiki. The installed
runtime operates locally, while global core skills share one upstream-owned
implementation through provider discovery adapters.

[Template ownership and continuity](../docs/adr/0001-template-ownership-and-continuity.md)
preserves the cross-cutting decisions behind these boundaries.

The optional tour enumerates the actual manifest lanes and collections; its tests
check those names and ownership descriptions. Node.js 20 or newer and built-in
`node:test` keep that orientation runnable without installing dependencies.

### Cross-Cutting Qualities And Constraints

The template carries no application data or secrets. It does have tracked and ignored support state: generic schema examples and durable records are tracked;
live notes, handoffs and recovery material remain ignored. Supported lifecycle
operations may seed, migrate, back up or privately synchronize only authorized
state. No secret or personal content belongs in a copyable starter.

The manifest is the path authority. Source and tests establish verified behavior;
controls and assigned owners establish accepted intent. The tour must explain
every manifest lane and collection. Managed runtime changes use explicit updates
with receipts and recovery. Historical provenance remains distinct from installed
source identity; file presence and a successful structural check cannot establish
native behavior, remote delivery or improved agent reliability.

### Desired Lifecycle

The reference can be read and run in place. A named update compares its controls
with the exact reviewed upstream template, preserves deliberate differences and
original evidence, verifies installed tools and ordinary workflows, and obtains
independent review before integration. Publication to main remains owner-controlled.
The reference's prior version history remains accessible through its owning records.

Future product-specific adaptation requires explicit product intent and its own
verification. Updating this reference proves that update only; it does not prove
automated personalization, Genesis or an end-to-end fresh-project workflow.

## Drift review recorded 2026-10-15

Source: owner-directed Servitor artifact reconciliation, compared with Template
integration `fc0fc18c2c1752c8c98a4fed20304e803c71f53c` and producer integration
`7e0d1196fe416a65177eada69a6cf03b0eff0be6`.

Confirmed correction: the former eight-section Blueprint conflicted with the
producer's [four-part short-page decision](https://github.com/KaydenClark/LLM_Workbench/blob/7e0d1196fe416a65177eada69a6cf03b0eff0be6/workbench/docs/ddr/000N-every-room-s-blueprint-is-the-four-part-short-page.md)
and [summary boundary](https://github.com/KaydenClark/LLM_Workbench/blob/7e0d1196fe416a65177eada69a6cf03b0eff0be6/workbench/docs/ddr/000O-the-blueprint-is-a-high-level-summary-of-the-direction-and-makes-us-ask-questions.md).
The Blueprint, Lexicon definition, README description and tour now use four
parts. The former detailed sections remain above; completed Specs, ADRs,
managed tools, receipts and historical proof remain intact. The owner-endorsed
250–400-word Blueprint target guides this summary, not AGENTS or Spec limits.

Unresolved: the old installed room and newer producer differ in skill layout,
terminology and continuity guidance. Doctor also reports mixed global skill
generations, compatibility attention, an old seed and historical provenance.
Those findings do not establish which local differences are intentional or
prove the PC's Blueprint ancestry. Missing evidence: a separately scoped
installed-update comparison, component ownership and owner acceptance. Next
review: compare exact installed receipts with an approved producer release;
use the explicit managed update if assigned. This artifact correction installs
no runtime or skills and claims no release, Spec or landmark acceptance.

The router's earlier `last_verified` date still scopes its untouched historical
context; only the additions and changed routes above were checked in this
operation.

## Up-Link

Standalone room; no deployment wiki.
