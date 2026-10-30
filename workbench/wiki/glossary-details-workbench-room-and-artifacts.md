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

# Workbench, room and artifacts — full definitions

Read these definitions with the canonical [Glossary](../../GLOSSARY.md).

### Workbench, room and artifacts

**Context Map**:
The navigable relationships among Workbench concepts, root files, specs, Wiki context, and referenced source/evidence, entered through the routes in `ARCHITECTURE.md`.

**Workbench**:
An agentic management system for a project: the safe rules, progressively disclosed project truth, executable work and proof requirements that agents running in a harness such as Claude Code or Codex load, so they can align the owner's ideas and implement the owner's design concepts.

**Project**:
The product or body of work a Workbench exists to deliver.

**Owner**:
The person whose ideas the project realizes: the one who aligns, confirms, approves and unblocks, approves delivered work, and alone promotes it to main.

**Room**:
A project, seen as the place its work happens. The workbench is the table set in it; agents take what they need from the table and work on the project in the center.

**Scaffolding**:
The architecture artifacts used to reach a destination (Specs, Tasks, landmarks, handoffs and notepads), cleared away once their knowledge is kept.

**Contract artifact**:
An artifact the agent loads, and pays tokens for, on every turn of every session: today AGENTS.md, with the host adapter that loads it. It holds only lines that apply everywhere.

**Routing artifact**:
A durable artifact an agent reaches by pointer when its work needs it, and that routes to the detail: the Blueprint, `ARCHITECTURE.md`, the Runbook and the README.

**Architecture artifact**:
An artifact built to reach a destination and cleared away once its knowledge is kept: landmarks, Specs, Tasks, handoffs and notepads. Also called scaffolding, or transient.

**Control**:
A one-action tool. Agents work the workbench through controls, each one action, and open the underlying record only to verify a claim, audit, debug a control, or when a control is missing or disagrees with its record.
_Avoid_: root controls

**Portable Workbench**:
A fully packaged, deployable agentic management system. Everything an agent needs to do the work is in the project's Git repository, so any agent on any machine, or several at once in the cloud, can clone it, do the authorized work, push it, and clean up after itself.

**Host portability**:
The property that the Workbench's plain files and tools behave the same on every configured host: case-sensitive and case-insensitive filesystems, Windows and POSIX paths, symlinked invocation.

**Ownership origin model**:
The model of where an ownership assignment comes from, upstream Workbench or project-local, and of how a room's deliberate differences from upstream are classified and preserved across updates.

**Workbench self-drift check**:
A read-only check of the canonical Workbench's own current-facing artifacts before and after a Workbench update.

**Lane Sweep**:
A recurring workflow and its read-only command that classify every branch, worktree and open PR against its owning Spec and report lane drift.

**Blueprint**:
A high-level summary of the direction we want to head and the choices that got us this far, written as the four-part short page (what it is, who it serves, promised outcomes, non-goals) for every room.

**README**:
Introductory documentation accompanying a project, package or directory: an overview of its contents and purpose, the information needed to get started, and references to further documentation, support and applicable terms. It orients a human learning the project.
