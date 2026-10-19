---
type: meta
status: active
sensitivity: normal
knowledge_role: canonical
provenance:
  - LLM Workbench template wiki
source_paths:
  - workbench/wiki
last_verified: 2026-10-18
---

# Example Workbench Wiki Agent Instructions

> Generated from LLM Workbench v3.2.1.

This lane is the durable, human-editable knowledge base for this project. The
root `AGENTS.md` governs how agents work; this file only bounds wiki
maintenance.

## Cold Start And Navigation

1. Read `MEMORY.md`.
2. Follow one directly relevant link.
3. For current project state, leave the wiki and read the root controls.
4. If the topic route lacks continuation context, use bounded
   `jot search --query TOPIC` and read relevant entries with sources and
   corrections. Private jots require an explicit `--include-private` opt-in
   within unchanged local access; keep their filenames out of shared routes.
5. Search the wider Wiki only when its route is incomplete or during explicit
   maintenance.

## Authority And Scope

- The wiki owns durable documentary knowledge and navigation, not a
  Governance Plane and not authorization.
- Verified runtime and the root controls outrank wiki notes; maintained active
  notes outrank `archive/` and platform auto-memory.
- Raw sources stay read-only during wiki maintenance unless the user also
  requests project or source work.
- Do not read or reproduce `restricted` context unless the task requires it.

## CRUD

- Follow `SCHEMA.md` for properties, provenance, sensitivity, and freshness.
- Update an existing owning note before creating another.
- Keep collections flat; never copy live task state.
- Jot useful discoveries and actual owner confirmations, approvals and
  corrections before the next dependent action. Keep speaker, source, scope,
  state and correction history; approval and confirmation are distinct from
  implementation proof.
- Share new project context by default through the owning topic and router.
  Explicit private jots stay ignored and untracked; private-to-tracked transfer
  requires specific exposure approval. Preserve originals.
- Create or update a Design Concept article touched by an authorized
  operation, naming it in `authorized_by` and `History`. Repair from direct
  proof or mark stale; see [Schema Create](SCHEMA.md#create).
- Capture a completed capability in [features](features/README.md) at its
  Spec's closure point; a Task record is not a substitute for that article.
- Lint touched pages and affected routes against their sources and run
  `node workbench/tools/wiki.mjs validate` after maintained-note changes.

## Documentation

When a durable change alters project, person, machine, or navigation truth,
update the owning note in the same task. Otherwise say
`Docs checked; no update needed` and name why.
