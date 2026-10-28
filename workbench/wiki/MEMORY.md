---
type: memory
status: active
sensitivity: normal
knowledge_role: canonical
provenance:
  - Genesis or Adoption of this room
source_paths:
  - workbench/wiki
last_verified: 2026-10-28
---

# Example Workbench Memory

> Generated from LLM Workbench v3.2.2. This is the room brain: the
> canonical, human-editable memory router for this project, kept at
> `workbench/wiki/MEMORY.md`. Start here and follow the smallest relevant
> link instead of browsing folders or searching.

This router holds durable room memory only: context, decision-history
pointers, source-linked Jot context and routing. It never duplicates live Task
state; it routes to it. Private jots remain outside shared routes.

## Workbench Feature Catalog

- [Workbench features and capabilities](workbench-capabilities.md) - capabilities, purpose, introduction evidence, source availability and limits.
- [Catalog scope](context-workbench-feature-catalog.md) - the sourced owner intent and local delivery boundary.

## Source Precedence

1. Verified runtime and this room's live controls: `AGENTS.md`, `BLUEPRINT.md`,
   `GLOSSARY.md`, `ARCHITECTURE.md`, the assigned stable spec, `TASKBOARD.md`,
   and `RUNBOOK.md`.
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
| [BLUEPRINT.md](../../BLUEPRINT.md) | Product map, architecture, and the spec catalog |
| [GLOSSARY.md](../../GLOSSARY.md) | Shared terms, the Governance Core and this room's project terms |
| [ARCHITECTURE.md](../../ARCHITECTURE.md) | Ownership, routes, invariants and design-concept routing |
| [TASKBOARD.md](../../TASKBOARD.md) | Current execution state |
| `workbench/specs/` | Stable capability records, acceptance, evidence, and proof |
| [RUNBOOK.md](../../RUNBOOK.md) | Exact operating and verification commands |
| [SCHEMA.md](SCHEMA.md) | Wiki CRUD, metadata, sensitivity, and freshness rules |
| [design-concepts/](design-concepts/README.md) | Articles explaining durable design models and any landmark synthesis supported by this room |
| [features/](features/README.md) | Readable capability articles captured when Specs complete |
| [guidebooks/](guidebooks/) | Ordered procedures that outgrew the Runbook |

## Vocabulary

The root `GLOSSARY.md` defines the project's shared words. These articles
explain them, one article per glossary grouping, each word a section linking
its definition, plus one reference page for general AI coding words. They
ship with the room; add a section or a page when a word of this project needs
more than its glossary entry.

- [Destination and direction](vocabulary-destination-and-direction.md) - where the project is going: destinations, maps, question cards and the frontier of ready work
- [Workflow verbs](vocabulary-workflow-verbs.md) - the actions every workflow is built from, from Idea to Clean Up
- [Workbench, room and artifacts](vocabulary-workbench-room-and-artifacts.md) - the Workbench, the project and the kinds of artifact agents meet
- [Specs and Tasks](vocabulary-specs-and-tasks.md) - the units of planned work, their reviews, where their records go and the Priority and Value table
- [Chats and roles](vocabulary-chats-and-roles.md) - the working contexts agents run in and the scopes they are assigned
- [Feedback disposition](vocabulary-feedback-disposition.md) - the closed set of outcomes every feedback finding ends with
- [Workbench meanings of AI coding terms](vocabulary-workbench-meanings-of-ai-coding-terms.md) - the two AI coding words with a distinct Workbench meaning
- [Continuity terms](vocabulary-continuity-terms.md) - notepads, scoped handoffs and the identifiers that name artifacts
- [Stance terms](vocabulary-stance-terms.md) - the job each stance does inside an assigned role
- [Governance core](vocabulary-governance-core.md) - claim roles, authority, lanes, collections and decision records shared by every Workbench
- [Continuity and evidence boundaries](vocabulary-continuity-and-evidence-boundaries.md) - what transport, promotion, host checks and compatibility do and do not establish
- [Project terms](vocabulary-project-terms.md) - this reference room's own words: tour, place, zone, drift and how it reads Room
- [AI coding reference](ai-coding-reference.md) - general AI coding words restated in Workbench words, with attribution

## Routing

| Question | Read first |
|---|---|
| What did the owner authorize for auto-merge? | [Auto-merge intent](context-auto-merge.md), then [the delivery procedure](../../RUNBOOK.md#ci-and-agent-review-auto-merge) |
| What is a workbench, and what goes in each place? | `node tour.mjs`, then [S-001](../specs/S-001-self-explaining-room/SPEC.md) |
| Where did this room come from? | `provenance` in [manifest.json](../manifest.json) - genesis from LLM Workbench v3.1.2 at `18ffc0d` |
| How do I know the explanation is still true? | `node tests/tour.test.mjs` - drift is a test failure, not a backlog item |
| How did the harness get here, and how do I stand in an earlier generation? | [VERSION_HISTORY.md](../docs/VERSION_HISTORY.md), then `git checkout version/NN-...`; recorded by [S-002](../specs/S-002-version-history-replay/SPEC.md) |
| Where is a delivered capability explained? | [features/](features/README.md) for captured articles; [Spec catalog](../specs/CATALOG.md) for retained records and dated proof |
| Where did an owner correction or useful finding go? | The relevant shared topic page recorded through [Jot](../../.agents/skills/jot/SKILL.md); follow its source and correction links |

This reference room has no general flat topic notes yet. The rows above route
to live controls, captured capability articles when present, and the room's
executable description. Add a topic route when a durable shared jot or note
actually exists; never route ignored private pages.

Add a row only when a durable note exists to route to. A young room may have an
empty table; that is fine. Grow flat notes beside this router and inside the
declared collections; only `archive/` may nest.

## Up-Link

Standalone room; no deployment wiki.
