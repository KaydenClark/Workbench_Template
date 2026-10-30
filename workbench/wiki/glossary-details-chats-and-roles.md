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

# Chats and roles — full definitions

Read these definitions with the canonical [Glossary](../../GLOSSARY.md).

### Chats and roles

**Chat**:
One owner-visible working context in a host, in which participants have a Conversation. A Chat works at most one Task: a Chat that works a Task completes it, cleans up and ends.

**Conversation**:
The human-agent exchange taking place in a Chat.

**Thread**:
A connected series or tree of related Chats.

**Role**:
The assigned scope of responsibility and action for an agent.

**Director**:
The role scoped to the whole project and its integration branch: it coordinates Spec-bound Dispatchers and cross-Spec work.

**Dispatcher**:
The role scoped to one assigned Spec and its branch, coordinating parallel Task work and owning assembled-Spec verification.

**Worker**:
The role scoped to one assigned Task and one attempt, producing a self-checked result and hand-back to its Dispatcher.

**Coordination hand-back**:
A point during an assigned run where the owner had to supply something that was not a preference, tradeoff, authorization, or unavailable resource under `AGENTS.md`'s governing gate: a settled decision repeated, evidence already in the project located for the agent, a routine technical finding reconciled, or an already-authorized step prompted.
