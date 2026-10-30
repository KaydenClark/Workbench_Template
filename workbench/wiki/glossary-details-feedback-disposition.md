---
type: meta
status: active
sensitivity: normal
knowledge_role: curated
provenance:
  - Owner-approved artifact budget pruning; original definitions retained
source_paths:
  - GLOSSARY.md
last_verified: 2026-10-29
---

# Feedback disposition — full definitions

Read these definitions with the canonical [Glossary](../../GLOSSARY.md).

### Feedback disposition

**Feedback disposition**:
The one outcome, from a closed set, that every feedback finding has recorded in its owning Spec.

**`diagnostic`**:
The finding became a registered doctor code with mandatory remediation text.

**`test`**:
The finding became a check added at a stable testing seam.

**`repaired`**:
The finding got a direct code, configuration or documentation fix, named by its commit, that did not become a registered diagnostic or stable-seam test.

**`declined`**:
The finding was not pursued, with the reason recorded.

**`accepted-open`**:
The finding is real and accepted but not scheduled, naming the owning Spec; if no owner is established, report that gap explicitly.
