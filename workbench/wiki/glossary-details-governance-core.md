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

# Governance core — full definitions

Read these definitions with the canonical [Glossary](../../GLOSSARY.md).

### Governance core

These terms are shared by every Workbench.

**Governance Plane**:
The role of what we are handling relative to a target: **Intent** is what is wanted; **Enduring Context** is what is known, including meaning, decisions and rationale; **Grounding** is what evidence proves; **Canon** is the authoritative source of truth for the target; **Actuality** is what exists and is being worked on; **Projection** is what summaries and views make visible.

**Workbench Contract**:
The binding claim set routed through `AGENTS.md`: `AGENTS.md` itself, the explicitly assigned Spec's bounded capability requirements and, while an operation is performed, the binding requirements of the lane skill the Contract points to for it.

**Instruction authority**:
What an agent may do: the current owner request, then `AGENTS.md` with platform safety, then the explicitly assigned spec as a bounded capability delegate, then the other Contract carriers.

**State resolution**:
How a Canon claim and verified Actuality are reconciled: newer Canon is an implementation gap, newer verified Actuality is documentation drift, unclear ordering is an ambiguity to investigate.

**No-governance-tax rule**:
Ordinary owner-directed project work requires only the Workbench Contract and its verification; no coordination system, order form, flight, or external mechanism is a prerequisite.

**Diagnostic**:
A registered finding a Workbench tool emits with a stable code, a severity of `error` or `attention`, a scope, and a blocking effect of `all`, `selection`, `selected-slice`, or `none`.

**Support lane**:
One of the seven manifest-declared slots: `docs`, `specs`, `wiki`, `sessions`, `feedback` and `tools` under lowercase `workbench/`, and `skills` at `.agents/skills`.

**Skills lane**:
The `.agents/skills` lane: the real directory holding the core skills tracked inside this room, marked by a receipt naming their source release, commit and hash, and replaced only by the Workbench update. The tracked `.claude/skills` link resolves into it, so each skill name has one copy in the room.
_Avoid_: same-name personal copies, backups in scanned roots

**Collection**:
A manifest-declared, machine-used directory inside a lane, such as `docs/adr`, `wiki/design-concepts` or `sessions/notepads`.

**ADR**:
An architecture decision record in `workbench/docs/adr/`: title, decision, considered alternatives, consequences, provenance, and frontmatter naming its operational owners.

**Decision Record**:
A record of one consequential decision and why it was made: an ADR for an architectural choice and a DDR for a destination choice.

**DDR**:
A Destination Decision Record in `workbench/docs/ddr/`: one consequential choice about what the finished product must be or do, and why it was chosen over the alternatives, with the frontmatter keys `date`, `supersedes` and `canonicalized_in` and a free-prose body.

**Read words**:
The five kinds of read every record is to answer, defined once: **list** (the records that exist), **show** (one whole record; `get` is an accepted synonym), **search** (records found by a query), **history** (how a record changed) and **inspect** (part of a record, a field or a range).

**Checkpoint**:
A retained historical tracked copy in `sessions/checkpoints/`; new copy creation is retired.

**Operational recovery**:
Local rollback receipts and backups in the ignored `sessions/recovery/` collection.

**Design Concept article**:
An encyclopedic wiki article in `wiki/design-concepts/` explaining one durable cross-cutting design model or one landmark's evolving synthesis, ending with `Evidence and Sources` and carrying `History`.

**Wiki profile**:
The manifest's declared wiki shape: `project` (one room's memory router and collections) or `deployment` (adds owner, machine, and project pointer collections).

**Managed runtime tool**:
A file in `workbench/tools/` installed from the Workbench release and listed in the tools receipt with its source release, commit, and hash.

**Declared integration branch**:
The branch, named by exact case in `workbench/manifest.json` `git.integrationBranch`, which receives Task PRs after their self-check, merge answers and CI and stages assembled Spec work for its independent review; `git.defaultBranch` names the branch it is created from.
