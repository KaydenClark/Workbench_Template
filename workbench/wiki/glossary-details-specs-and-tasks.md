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

# Specs and Tasks — full definitions

Read these definitions with the canonical [Glossary](../../GLOSSARY.md).

### Specs and Tasks

**Spec**:
A PRD-shaped scoped objective with its own destination, derived from Blueprint needs, active ADRs, verified Actuality and required evidence. It owns requirements, decisions, acceptance, verification, evidence and completion across implementor runs while needed for delivery.

**Task**:
One bounded assignment for a single implementor run that reaches or repairs part of its Spec's destination. TASK.md carries the run's scope, writer, blockers, stance and verification; its Worker self-checks and hands the result back for reconciliation into the Spec.
_Avoid_: ticket

**Packet**:
The bounded Task entry material: TASK.md, the active Spec acceptance lines it satisfies, cited source/test paths and the Contract. A Scoped handoff and objective notepad join only when they exist.

**Assembled-Spec review**:
Destination-level verification of the complete Task results: the Dispatcher owns whole-Spec QA and a separate Director reviews the immutable assembled candidate before integration.

**Human QA**:
The owner-led evaluation of delivered work, whose timing the owner chooses at useful milestones, accumulated work, valued Specs or escalations; failed findings remain visible until resolved.

**Retired**:
A transient staging location for reconciled Spec and Task scaffolding, removed from ordinary pickup while needed history remains reachable.

**Archive**:
Permanent storage for superseded and deprecated decision records (ADRs and DDRs), preserving their original bodies and reachable decision history.
