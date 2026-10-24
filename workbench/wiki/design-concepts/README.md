---
type: meta
status: active
sensitivity: normal
knowledge_role: canonical
provenance:
  - LLM Workbench template wiki
source_paths:
  - workbench/wiki/design-concepts
last_verified: 2026-10-18
---

# Design Concepts

> Generated from LLM Workbench v3.2.1.

This collection holds Design Concept articles: complete, navlinked,
encyclopedic explanations of one durable, reusable, cross-cutting design model
each, written so the owner can understand how the project works. Where an
installed landmark operation supplies question cards, this collection also
holds that landmark's evolving synthesis. The collection may be empty.

## What Qualifies

A durable model that spans artifacts and operations: a product or deployment
relationship, a composition principle, a governance model, a lifecycle, a
navigation model; or a sourced synthesis of one landmark. A single delivered
capability belongs in [features](../features/README.md), not here. This is not
a one-off procedure, status update, single requirement, Task or copied source.
Discovery starts from the root [Lexicon](../../../LEXICON.md), which routes here.

## Ownership

- Any agent creates or updates an article touched by its authorized operation;
  no separate per-article approval is needed. Record the authorizing operation
  in `authorized_by` and `History`.
- Repair an existing article from the operation's direct proof and record the
  evolution in `History`. Without proof, or with contradicting proof, mark it
  `status: stale` and explain why rather than reconciling by inference.
  Staleness is visible and nonblocking.
- A parent Workbench owns concepts its children share. A child Workbench owns
  only concepts unique to it and routes upward for the rest; `parent` in the
  frontmatter names that route or `none`.

## Landmark Synthesis Pages

If this room has an actual landmark record and question cards, keep one
`landmark-<title>.md` synthesis page here, routed from `MEMORY.md` with a
one-line summary. It links its source landmark and cards by title, keeps
confirmed answers distinct from inference and unresolved questions, and names
the authorizing operation and source paths. The manifest's collection alone
does not prove that a landmark or question-card operation has run in this room.

## Article Shape

```markdown
---
type: design-concept
status: active
sensitivity: normal
knowledge_role: curated
provenance:
  - the authorizing operation, YYYY-MM-DD
source_paths:
  - BLUEPRINT.md
parent: none
authorized_by: the authorizing operation or owner
last_verified: YYYY-MM-DD
---

# [Concept Name]

[Complete explanation of the model, navlinked to every relevant source.]

## Evidence and Sources

- [Governing source: control, spec, or ADR that decides]
- [Evidentiary source: verified Actuality, test, or record]

## History

- YYYY-MM-DD: created by the named operation.
```

An article is non-authoritative. When a decision, requirement, or verified
Actuality matters, its sources govern; when a concept becomes a binding
choice, the rule is canonicalized in the Blueprint or a spec and, if
consequential, recorded as an ADR.
