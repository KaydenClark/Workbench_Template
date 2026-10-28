---
type: memory
status: active
sensitivity: normal
knowledge_role: curated
provenance:
  - Workbench Template LEXICON.md Project Terms rows at integration 2f162c46afed6488862d2c3963b07bb0d905cabd, landed in the v3.2.2 update (S-000E)
source_paths:
  - GLOSSARY.md
  - tour.mjs
  - tests/tour.test.mjs
last_verified: 2026-10-28
---

# Project terms: the vocabulary explained

These are the words this reference room uses to explain itself. Each section says how one term differs from its neighbours.

The [glossary](../../GLOSSARY.md#project-terms) owns each definition; this article explains the distinctions. It authorizes nothing.

## Room

The shared glossary entry **Room** reads a project as the place its work happens. In this reference room the word names one installation: one repository with the Workbench installed in it, with its root controls, a support root declared by `workbench/manifest.json` and an installed managed runtime. A room is an installation, not the harness. `LLM_Workbench` is the harness; `Example Workbench` and `Audit Workbench` are rooms. Avoid "workbench" alone when you mean one installation.

Definition: [GLOSSARY.md, Workbench, room and artifacts](../../GLOSSARY.md#workbench-room-and-artifacts).

## Feature article

[Features](features/README.md) holds this knowledge; it does not replace the Spec's evidence or Task records.

Definition: [GLOSSARY.md, Project terms](../../GLOSSARY.md#project-terms).

## Tour

The tour is data that happens to print. It is not prose about the room and not a README section; the tests read the same list the terminal does.

Definition: [GLOSSARY.md, Project terms](../../GLOSSARY.md#project-terms).

## Place

A place is not merely a directory. A directory nobody can say a "why" for does not belong in the room.

Definition: [GLOSSARY.md, Project terms](../../GLOSSARY.md#project-terms).

## Zone

Zones organize the explanation. They are not lanes, and the manifest does not know about them.

Definition: [GLOSSARY.md, Project terms](../../GLOSSARY.md#project-terms).

## Drift

Drift is a test failure here, not a documentation backlog item. `node tests/tour.test.mjs` is what makes that true.

Definition: [GLOSSARY.md, Project terms](../../GLOSSARY.md#project-terms).

## History

- 2026-10-28: Created from the retired Lexicon's Project Terms rows during the v3.2.2 update; the shared **Room** entry is kept and this room's installation reading moved here.
