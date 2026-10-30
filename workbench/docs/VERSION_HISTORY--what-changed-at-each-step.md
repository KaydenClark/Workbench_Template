
# What Changed At Each Step

Use this section for what changed at each step; [VERSION_HISTORY](VERSION_HISTORY.md) provides the surrounding context.

## What Changed At Each Step

The dates are when the change landed in LLM Workbench. "Defining commits" are
the ones to read if you want the rationale in the author's own words.

### v0 - GAME_PLAN (2026-06-18)

Three documents and a division of labor. AGENTS says the user owns direction
and the agent owns implementation. BLUEPRINT is the slow target. GAME_PLAN is
the phased build plan with acceptance criteria per phase. TDD is already
required. Nothing is versioned, nothing is scoped, and there is no Git rule.
Blank-project and existing-project variants of each file exist side by side,
which is the seed of the later GENESIS versus ADOPTION split.

Defining commit: `bfd0638`.

### v1 - ROADMAP (2026-06-22)

GAME_PLAN becomes ROADMAP (current state, next work, blockers, backlog,
verification log). RUNBOOK arrives to own commands, VISUAL_DESIGN arrives for UI
work, and `team templates/` (MANAGER, SUBAGENT, TASKBOARD) appears as optional
multi-agent coordination. The repository is prepared for public release under
MIT. Documentation is declared part of the task owner's work: no task is done
while the docs describe the old state.

Defining commits: `6192df4`, `a2cdd45`.

### v1.1 - anti-drift and version control (2026-06-25)

The first rules about agents failing over time rather than at once. AGENTS
gains a "Staying On Track" protocol (re-anchor on ROADMAP after compaction) and
a "When To Ask, Proceed, Or Stop" rule (stop after two failed verifications).
ROADMAP's next tasks become checkboxes so progress survives context
summarization. RUNBOOK gains a Version Control section for the first time.
Team templates close the concurrent-append race: subagents write proof to the
shared board only, the manager is the single durable writer. The same week
added `tools/evaluate-workbench.mjs` (a static rubric scorer) and the `evals/`
and `outcomes/` trial frameworks, which is where the harness started measuring
itself.

Defining commits: `fb406e1`, `062f074`, `615c6da`, `bb0a739`.

### v2.0 - TASKBOARD (2026-07-01)

The "Workbench_v2" refactor. ROADMAP and EVALUATION are removed; stable
direction goes to BLUEPRINT and executable next work goes to TASKBOARD, which
now has queue, blocked and deferred lanes, a current handoff, and a proof log.
The same day the repository started dogfooding itself: real filled controls at
the root, blank copies in `templates/`, and a root `CLAUDE.md` bridge for
Claude Code. This is the first generation whose root looks like a room.

Defining commits: `7de5f03`, `9bdddc9`.

### v2.1 (2026-07-01 to 2026-07-06)

Nine task branches in one week, consolidated onto a new `integration` bridge
and promoted to `main` on 07-06:

- `GENESIS.md`, the one-prompt bootstrap protocol (T-002).
- Executive interface on the Taskboard: a five-line brief and a
  pending-decision queue with options, recommendation and cost (T-003).
- Product-truth acceptance: every milestone needs a demo artifact checkable in
  under a minute (T-004).
- Lifecycle hardening: stale-claim reclaim, proof-log archival past about
  thirty rows, and the `Generated from LLM Workbench v2.1` stamp on every
  template plus an "Upgrading The Harness" Runbook section. This is the first
  version number the harness ever carried (T-005).
- `.claude/settings.json` so the AGENTS edit scope is enforced mechanically,
  not only by prose (T-007).
- `HARNESS_FEEDBACK.md`, the append-only return channel from a project back to
  the harness (T-008).
- A blank product `README.md` template (T-009).
- `ADOPTION.md`, the existing-project migration protocol (T-012).
- The branch rule: PR into `integration`, only the owner merges to `main`
  (T-013).

Defining commits: `585831b`, `00e7149`, `0b1ef75`, `12a5233`, `0a3c8b4`,
`813e7ac`, `37be0eb`, `5f3d11c`, `5f85d45`, `dd1ed32`.

### v2.2 - never committed (2026-07-10)

There is no v2.2 branch here because no commit in LLM Workbench ever carried
the v2.2 header. It existed as a local candidate on the owner's machine: the
100-point guardrail drift audit (`tools/audit-guardrails.mjs`, T-016) and the
intake of the July 8 Mac harness review (T-014), scored 70/100. That work was
folded into the v2.3 commit, and its Taskboard was frozen as
`benchmarks/TASKBOARD_V2_2_ARCHIVE.md` in LLM Workbench, which is the only
record of the version.

### v2.3 - spec-centered progressive disclosure (2026-07-12 to 2026-07-16)

The largest single contract change. One commit rewrote every control around
the idea that agents should load a small always-on surface and pull detail on
demand:

- `specs/S-###-slug/SPEC.md` becomes the unit of work: a durable capability
  record owning requirements, decisions, acceptance, append-only evidence and
  completion. Tickets become temporary slices inside a spec.
- TASKBOARD shrinks to a generated hot projection of active specs only.
  BLUEPRINT shrinks to a compact product map with a generated spec catalog.
- `LEXICON.md` arrives to own shared vocabulary.
- `tools/spec-workbench.mjs` arrives: `render`, `doctor`, `next`, `claim`,
  `show`. Work selection is now a command, not a reading.
- The Taskboard proved copied external state could drift (a merged PR was
  still called a blocker), which is why projections are generated from specs.

Between 07-13 and 07-16 the audited promotion to `main` added the curated
`skills/` catalog with provenance, the Genesis and Adoption skill entrypoints,
automated harness feedback gates, and the S-014 exact-head release audit.

Defining commits: `ec94022`, `47649ec`, `6943c10`, `5b60ab5`, `08ab78e`.

### v2.3 late - the room brain (2026-07-17 to 2026-08-27)

Still stamped v2.3, but the contract kept growing on `integration` without a
version bump, which is the gap this history exists to make visible:

- `templates/Wiki/` ships the room brain: `MEMORY.md` router variants for a
  project room and a deployment root, with link conventions. GENESIS and
  ADOPTION gain a "seed the brain" step (S-008).
- `HARNESS_FEEDBACK.md` becomes `WORKBENCH_FEEDBACK.md`.
- The tracer-bullet vertical-slicing skill and slice quality rules (S-011).
- The grilling skill family (grilling, notepad, make-it-so, brainstorm,
  checkpoint) and spec-native team coordination (S-020).
- CLI entries made safe to run through symlinked paths.

Defining commits: `51d321f`, `7ae70b9`, `5c269de`, `bc2b419`, `dc8bd23`,
`9e6c71b`.

### v3.0.0 - the portable workbench root (2026-08-31)

One day of work, planned as S-021, that moved every durable support record
behind `workbench/manifest.json`: declared lanes for specs, wiki, grilling,
handoffs and feedback, initialized by `tools/workbench-layout.mjs init` rather
than by copying. Genesis creates v3 directly; Adoption and `update-harness`
migrate a v2 root once. A core-skill installer supplies a required skill only
when it is missing from user-scoped discovery. `specs/` at the root moves to
`workbench/specs/`. v3.0.0 was completed but never released; it is the
baseline v3.1 stands on.

Defining commits: `ee683f3`, `26c34e9`, `6de1529`, `9ffe8c5`, `cc01c92`,
`6d5beef`, `13578a9`.

### v3.1.0 - managed runtime and governance core (2026-09-04)

The first public v3 release, from four linked specs:

- Manifest schema 2: six lowercase lanes (`docs`, `specs`, `wiki`, `sessions`,
  `feedback`, `tools`) and seven collections; lossless schema 1 migration;
  Workbench-managed runtime tools installed into `workbench/tools/` by
  `workbench-tools.mjs install` with a receipt naming release, commit and a
  hash per file. Session records are untracked by default with tracked
  checkpoints that pass a privacy check on promotion (S-023).
- The Governance Core: planes classify claims not files, instruction authority
  is separate from state resolution, and diagnostics carry registered blocking
  effects that only `doctor`, `next` and `claim` enforce. `adr.mjs` and a
  first-class ADR collection with a derived register (S-024).
- The portable wiki contract: `SCHEMA.md`, a wiki `AGENTS.md`, an explicit
  profile, and the mandatory owner-directed `design-concepts/` collection
  (S-025).
- Twelve skills and feedback discovery routed through the manifest, and a
  mechanical planning-to-resume round trip proven with a cross-provider cold
  resume (S-026).

Defining commits: `dfd4c9e`, `3f0b560`, `85a6edd`, `114a14c`, `cf1cd53`,
`4ce74f8`.

### v3.1.1 - boundaries and portable stances (2026-09-04)

S-027, from a locked sixteen-question grilling. Ordinary entry is reduced to
AGENTS then RUNBOOK then LEXICON, then only the owners relevant to the assigned
task. Builder, Auditor, Reviewer and Reconciler become portable stance skills
assigned by the spec and ticket, never self-selected, and never a transfer of
authority. Every required step must name its immediate delivery value
(ADR-0034). A separate-context review is required once, at integration, rather
than per ticket (ADR-0037). `templates/feedback/REPORT_FORMAT.md` defines the
feedback report, branch completion and merged-branch cleanup are defined, and
the closeout becomes worktree-safe.

Defining commits: `bfae8c0`, `5ef5b15`, `7994d67`, `4e53c8c`, `09f0875`.

### v3.1.2 - the patch from real adoption (2026-09-05 to 2026-09-06)

Every item came from the fix list that three real rooms (Cashflow Calculator,
Command Information Center, OpenBrain) sent back through the feedback channel:

- The integration branch is a manifest-declared fact (`git.integrationBranch`)
  that doctor and the Genesis gate check (S-029).
- The template permission file grants `Edit` on the authorship lanes and doctor
  reports a lane the permission file withholds (S-030).
- Managed skill markers record release and commit; doctor names stale or
  unknown installed skills (S-031).
- One working upgrade route for already-adopted v2 rooms, and the layout tool
  never writes `unrecorded` as a source commit (S-032).
- Doctor covers an unrouted room brain and stale wiki stamps; checkpoint
  promotion reads only inside the repository (S-033).
- A control fidelity report of which template lines a room changed (S-034).
- The stamp, with the disposition of all twelve upstream items recorded
  (S-035), then five rounds of separate-context review corrections (S-036
  through S-045), including the citation-anchor rule that every cited line
  says which commit it reads at.

Defining commits: `1f677c2`, `83e3cb3`, `ac1b220`, `9844f25`, `cf47feb`,
`fbc7724`, `dce85a2`, `8081694`, `8e9c06f`.
