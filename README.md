# Workbench Template

> Generated from LLM Workbench v3.2.2.

A copyable reference installation of LLM Workbench. It provides a legible
starting structure and an installed target for reviewed harness updates.
The repository is Workbench_Template (formerly Example_Workbench).

```bash
node tour.mjs
node tour.mjs --lifecycle
node tests/tour.test.mjs
```

The tour is an optional orientation aid. A future project needs its own product
intent, controls and verification; this update does not demonstrate automated
personalization or a fresh-project Genesis workflow. Historical specs and version
replay are retained as reference history, not new project assignments. Live
notes, handoffs and recovery data must stay out of copies.

The manifest declares every managed support path. Application code belongs to
the project that adopts the structure; the harness runtime remains under
workbench/tools and changes only through an explicit managed update.

Read the [Workbench feature catalog](workbench/wiki/workbench-capabilities.md)
for capabilities, purpose, version evidence and availability.

## How This Project Is Run

Start with [AGENTS](AGENTS.md) -> [Runbook orientation](RUNBOOK.md#get-oriented) -> the assigned Spec and Task; [STARTUP](STARTUP.md) is the shared continuation view. Read other owners when the operation needs them:

- [`AGENTS.md`](AGENTS.md) - how agents behave here: authority order, read/edit
  scope, the task-selection loop, documentation ownership, and proof rules.
- [`BLUEPRINT.md`](BLUEPRINT.md) - desired product destination, integrated design, constraints and lifecycle. The
  complete capability catalog is linked from the Wiki router.
- [`GLOSSARY.md`](GLOSSARY.md) - accepted project-wide terms and definitions;
  consult it when shared language could be ambiguous.
- [`ARCHITECTURE.md`](ARCHITECTURE.md) - which owner holds each kind of truth,
  the routes to it and the invariants that keep owners apart.
- [`TASKBOARD.md`](TASKBOARD.md) - active spec projection: current slice, owner,
  blocker, latest event, and next gate.
- [assigned `SPEC.md`](workbench/specs/CATALOG.md) - on-demand capability truth,
  acceptance, decisions, verification, append-only evidence, and completion.
- [`RUNBOOK.md`](RUNBOOK.md) - the short workflow manual; [Template operations](workbench/docs/TEMPLATE_OPERATIONS.md) keeps this room's exact setup, recovery and upgrade commands.
- [`workbench/wiki/MEMORY.md`](workbench/wiki/MEMORY.md) - the room brain:
  canonical, human-editable durable memory for this project. It routes to the
  live controls above, to flat memory notes and to the maintained
  `design-concepts/` and `features/` collections; it never duplicates live
  Task state.

- [`workbench/feedback/WORKBENCH_FEEDBACK.md`](workbench/feedback/WORKBENCH_FEEDBACK.md) -
  Workbench Feedback, the return channel to the reusable harness these docs
  came from: log where the harness rules themselves are unclear, wrong, or slow
  the work down, so they can be improved upstream. It lives in the feedback
  lane so the root keeps exactly eight controls.
- [`workbench/docs/VERSION_HISTORY.md`](workbench/docs/VERSION_HISTORY.md) -
  how the harness got here. This repository's history replays every LLM
  Workbench generation as one commit and one `version/` branch each, from the
  three-file GAME_PLAN room through the v3.1.2 baseline, so any generation can be
  checked out, run, and diffed against its neighbours.

For a new project, follow the installed [Genesis skill](.agents/skills/genesis/SKILL.md). For a repository with code, follow [Adoption](.agents/skills/adoption/SKILL.md). Both recover verified release source before their release-side setup procedure. Solo or team scopes remain in the room's own authority records.

## Getting Started

```bash
# nothing to install - Node.js 20+ is the only requirement      # e.g. npm install / pip install -e . / make setup
node tour.mjs          # e.g. npm run dev / python -m app
node tests/tour.test.mjs         # e.g. npm test / pytest
```

Full setup, environment, and troubleshooting steps live in
[`RUNBOOK.md`](RUNBOOK.md).

## Working With Agents

The control docs are intentionally plain Markdown so they work with Codex,
Claude, or any other agent that reads repository instructions - no framework or
preprocessing required.

For **Claude Code**, keep the one-line `CLAUDE.md` containing exactly
`@AGENTS.md` so the rules load automatically; the Genesis readiness gate
(`validate --genesis`) rejects any other bridge, so do not replace it with a
generated `/init` file. Other agents should be pointed at `AGENTS.md` as their
entry point.

Ordinary continuation follows AGENTS -> Runbook orientation -> assigned Spec and Task, with STARTUP as the shared continuation view; consult only the needed Runbook operation.

Every completed Task must leave proof in its final response and owning Spec's
append-only evidence log. Milestone specs additionally require a short demo
artifact (screenshot, recording, preview URL, or one-command demo) so work is
accepted on product truth, not passing tests alone.

## Project Status

See [`TASKBOARD.md`](TASKBOARD.md) for active execution state and
[`workbench/specs/CATALOG.md`](workbench/specs/CATALOG.md) for the complete durable spec catalog.

## License

Same license as the LLM Workbench harness it was generated from. This room is
meant to be copied, read, and discarded.

The manifest and managed receipts carry the **v3.2.2 release label** from
LLM Workbench source `8f08f11165c043a581c3c7130cb7c813eeec4483`, installed on
Template `integration` through the update route recorded in
[S-000E](workbench/specs/S-000E-v3-2-2-harness-upgrade/SPEC.md). It is an
assessment candidate: release fitness is assessed on integration before any
owner-approved promotion, and Template `main` still carries v3.2.1. The earlier
unreleased v3.2.1 candidate and its re-pinned receipts are retained in
[Version History](workbench/docs/VERSION_HISTORY.md#unreleased-template-upgrade-candidate-2026-10-18).
Run `node tour.mjs` for this room's current map.

Earlier verified upgrades remain in their original owners:
[S-003](workbench/specs/S-003-v3-2-0-upgrade-and-project-validation/SPEC.md),
[S-00B](workbench/specs/S-00B-v3-2-1-harness-upgrade/SPEC.md) and the earlier v3.2.1 candidate carry. Historical
replay branches retain their original versions. Every new upgrade still follows
[reference upgrade acceptance](workbench/docs/TEMPLATE_OPERATIONS.md#reference-upgrade-acceptance).
