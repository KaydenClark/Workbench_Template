# Invariants And Boundaries

Detail for [Architecture](ARCHITECTURE.md); this page owns its invariants and boundaries explanation.

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
