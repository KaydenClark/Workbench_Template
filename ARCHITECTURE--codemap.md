# Codemap

Detail for [Architecture](ARCHITECTURE.md); this page owns its codemap explanation.

## Codemap

Genesis and adoption draft this codemap from the project's source tree, and
grilling confirms it. Name each top-level module, directory or important type
and the job it does; name things rather than linking code, so the map stays
true as files move.

| Path | What lives there |
|---|---|
| `tour.mjs` | The room's optional one-command orientation demo: the ordered places of the tour, each with what it owns and why it is kept apart, plus the lifecycle account and upgrade route it prints. |
| `tests/` | `tour.test.mjs` keeps the tour, the manifest, the root controls and the installed receipts in agreement; `evidence-history.test.mjs` exercises the evidence-history checker. |
| `tools/` | Application-owned checks, not the managed runtime: `check-evidence-history.mjs` refuses a change that drops or rewrites existing Spec evidence or Task receipt rows. |
| `.github/workflows/verify.yml` | The required CI job that runs the full Test And Build suite on PRs to and pushes on `integration` and `main`. |
| `.agents/skills/` | The tracked skills lane: the core skills with their receipt and the optional skills this room selected; `.claude/skills` is one relative link into it. |
| `workbench/specs/` | This room's Specs and Tasks, including the retained historical Specs and upgrade records; `CATALOG.md` is their generated index. |
| Root files | `AGENTS.md`, `BLUEPRINT.md`, `GLOSSARY.md`, `ARCHITECTURE.md`, `RUNBOOK.md`, `README.md`, `TASKBOARD.md` and the `CLAUDE.md` host adapter; their jobs are in [Ownership](ARCHITECTURE--ownership.md#ownership). `LEXICON.md` is the archived v3.2.1 vocabulary, not a current control. |
| `workbench/` | The lanes and collections the manifest declares under the support root: Specs and Tasks, landmarks, the Wiki, decision records, managed runtime tools, sessions and feedback. The skills lane is `.agents/skills/`, above. |

[Layout](workbench/docs/WORKBENCH_STRUCTURE.md); [organization](workbench/docs/ORGANIZATION.md).
