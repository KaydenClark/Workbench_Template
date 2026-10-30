# Workbench Template - Detailed Operations

> Generated from LLM Workbench v3.2.2. See Upgrading The Harness
> below.

**Last reviewed:** 2026-09-08
**Blueprint reviewed:** 2026-09-09
**Runtime owner:** Kayden Clark (owner); any agent may run every command here.
**Environment:** local only

This file explains how to operate, verify, recover, and evaluate the project. It
should be boring, exact, and executable.

## Ordinary Entry

Read [Ordinary Entry](TEMPLATE_OPERATIONS--ordinary-entry.md#ordinary-entry) when working on this topic.

## Prerequisites

Required tools:

- Node.js 20 or newer (`node --version`). Nothing else.

Required accounts/services:

- None. The room runs entirely offline.

Required local files:

- None. Everything the room needs is committed.

## Environment Configuration

None. This room reads no environment variables and holds no configuration
outside the files committed to it. That is deliberate: the smallest room that
demonstrates the structure should not also demonstrate secret handling.

The rules still bind if that ever changes:

- Do not commit real credential files, tokens, local databases, logs, or
  private data.
- Keep secrets local-only.
- Prefer a visible degraded state over fake data when a source is unavailable.

## Install

```bash
node --version   # v20 or newer. The room has no dependencies.
```

Expected result:

- `node --version` prints v20 or newer. There is no install step to succeed or fail.

## Run Locally

```bash
node tour.mjs              # the annotated map: every place, what it owns, why
node tour.mjs --lifecycle  # how this room came to exist, and how it reaches a newer version
node tour.mjs --json       # both, as data
```

Open:

- Nothing to open. The output is the product.

Expected result:

- The annotated map prints: three zones, every root control, every declared lane and collection, and the product.

## Test And Build

Fast check:

```bash
node tests/tour.test.mjs
```

Full verification:

```bash
node tests/tour.test.mjs
node tests/evidence-history.test.mjs
node tools/check-evidence-history.mjs <immutable-base-sha>
node --check tour.mjs
node workbench/tools/workbench-layout.mjs validate --project .
node workbench/tools/spec-workbench.mjs doctor
node workbench/tools/wiki.mjs validate
node workbench/tools/adr.mjs validate
git diff --check
```

The immutable base is the fetched integration commit selected before editing.
The tour suite enforces the whole-file RUNBOOK maximum of 500 whitespace-delimited
words, including comments and fenced commands; its writing target is 150–250.
The existing required hosted `verify` runs that suite for integration/main PRs
and landed commits.

Expected result:

- `tests/tour.test.mjs` passes with zero failures, `validate` reports `valid`,
  and `doctor` exits 0.

### Test Coverage Policy

Treat tests as the project specification, not as a comfort signal. The suite
should be strong enough that if someone accidentally deletes a meaningful line,
branch, route, data contract, workflow step, validation rule, or bug fix, at
least one test or documented manual check fails.

Coverage rules:

- Prefer red/green TDD: write or update the failing test first, confirm the
  expected failure, then implement the smallest fix.
- Run every relevant existing test before judging the suite.
- Keep tests that prove behavior a user, API consumer, operator, or future
  maintainer depends on.
- Improve tests that assert the wrong level, hide real failures, rely on stale
  fixtures, overuse snapshots, or pass without checking meaningful behavior.
- Remove tests that are stale, duplicated without adding a boundary, or pure
  bloat.
- If behavior cannot be tested in the current harness, record the exact reason
  and use the strongest concrete manual check available.

## Workbench Lifecycle, Diagnostics, And Decision Records

Read [Workbench Lifecycle, Diagnostics, And Decision Records](TEMPLATE_OPERATIONS--workbench-lifecycle-diagnostics-and-decision-records.md#workbench-lifecycle-diagnostics-and-decision-records) when working on this topic.

## Evaluation And Benchmarking

Read [Evaluation And Benchmarking](TEMPLATE_OPERATIONS--evaluation-and-benchmarking.md#evaluation-and-benchmarking) when working on this topic.

## Data Operations

The reference has no application data or application database migrations.
Workbench support state has declared seeding, migration and recovery operations;
use the matched managed-runtime procedures above. Its application-level
persistent state is the files in the repository.

## Deployment Or Startup

None. There is nothing to deploy and no long-running process. The room is read
where it sits and run with `node tour.mjs`.

## Version-Control Procedures

Git authority and review boundaries are in [AGENTS PR instructions](../../AGENTS.md#pr-instructions).
Use the installed [`implement` version-control procedure](../../.agents/skills/implement/SKILL.md#version-control-procedures)
for a Task or assembled Spec branch. Inspect the target integration ref and
preserve unrelated dirty work before branching. This room declares
`integration` in its manifest; a PR's actual base and reviewed head must be
read back, not assumed from an example branch name.

At closeout, follow the installed guarded
[`implement` branch-completion procedure](../../.agents/skills/implement/SKILL.md#branch-completion)
with this room's Git and hosting commands. Pin the immutable reviewed head,
refuse an advanced PR head, prove fresh integration containment and inspect the
actual source-branch tips before cleanup. Remote deletion requires the owning
procedure's atomic expected-tip guard; a plain `git push origin --delete` is
not sufficient. Preserve a changed or unmerged branch and report its exact
state. Never merge while review is pending, infer main permission from an
integration merge, or delete a branch just because a local tracking ref looks
contained. A pushed candidate is a recovery point, not delivery.

## Upgrading The Harness

Read [Upgrading The Harness](TEMPLATE_OPERATIONS--upgrading-the-harness.md#upgrading-the-harness) when working on this topic.

## Manual Harness Feedback Reports

Run this workflow after a setup-only Round One check succeeds. It assesses the
assigned target; it never authorizes a repair or invokes automated repair.

1. Resolve `lanes.feedback`, `lanes.specs` and the relevant collections through
   `workbench/manifest.json`. Pin the target revision and the assigned question.
2. Inspect only relevant controls, source and named proof. Test consequential
   claims, distinguish observation from inference, and disclose evidence limits.
3. Write `REPORT-topic-date.md` in the declared feedback lane using its
   `REPORT_FORMAT.md`. Include Target And Scope, Evidence And Limitations,
   Findings, Challenged Or Rejected Findings, Next Action And Open Questions,
   and Review Boundary. No findings is valid. Reports never live loose or in
   the Wiki. If the format is absent in an older installation, these sections
   are sufficient; explicit upgrades may copy it from the source templates.
4. Put accepted follow-up work in its existing linked spec; proposed repairs
   remain pending owner authorization. A report is not a work assignment.
5. At a meaningful continuation boundary, a fresh session should find the report,
   its linked spec, and the next executable action or owner gate using repository
   state only. No universal handoff or new self-created task is required.
6. Before integration, the candidate's separate-context review challenges the
   report's consequential claims and recommendations along with the change.

## Troubleshooting

| Symptom | Likely cause | Check | Fix |
|---|---|---|---|
| `node tour.mjs` prints nothing | Node older than v20 (no top-level ESM support in the shipped form) | `node --version` | Install Node 20+ |
| `every lane the manifest declares is explained` fails | A lane or collection was added to `workbench/manifest.json` and never described | `node tests/tour.test.mjs` | Add the place to `PLACES` in `tour.mjs`, with what it owns and why |
| `the tools lane holds only what the receipt accounts for` fails | A file was added to `workbench/tools/`, which the managed runtime does not ship | `ls workbench/tools/` | Move it out of the lane. Leaving it there makes `next` and `claim` refuse with exit 1 |
| `doctor` reports `unverified-provenance` | The manifest's recorded source release no longer matches its version stamp | `node workbench/tools/spec-workbench.mjs doctor` | Re-stamp with `workbench-layout.mjs record-source` from a clean release checkout |
| `validate` reports `upgrade-required` | The manifest is schema 1 (a v3.0 five-lane room) | `node workbench/tools/workbench-layout.mjs validate --project .` | Run `workbench-layout.mjs migrate --project .` once |

## Recovery And Rollback

If a change fails:

1. Identify the touched files and failing command.
2. Revert only the smallest change needed, preserving user work.
3. Rerun the failing verification command.
4. Update the owning spec with the result and remaining gap, then render.

Do not delete data, reset databases, rewrite history, or rotate secrets unless
the user explicitly approves that action.

## Operational Proof

If a command changed durable project state, append evidence to the owning spec.
For routine read-only runs, a final response note is enough.

## Evidence And Continuation Practices

Read [Evidence And Continuation Practices](TEMPLATE_OPERATIONS--evidence-and-continuation-practices.md#evidence-and-continuation-practices) when working on this topic.

## Template Ownership

This installed reference is the Workbench Template. Its repository name and
historical genesis/proof records remain unchanged. The optional tour explains
the manifest; the manifest owns paths, root controls own operation and stable
specs own scoped work. Actual project personalization remains a separate task.

## Handoff Retention

An owner-requested handoff is separately authored as a Markdown file in
`sessions/handoffs/`, using the installed `handoff` skill and its bundled `assets/HANDOFF.md` as the copy-ready shape.
It names the retained source, when any, in prose and must carry enough context
for a receiver without local access. Before trimming or deleting source context,
the author verifies that the receiver's needed material is durable or otherwise
retained; Markdown handoffs are intentionally readable rather than tool-managed
JSON records. Existing JSON handoffs remain legacy local sources and are not
newly created.

For a legacy JSON retaining destination, reconcile it before releasing retention: set its status to
`RECONCILED`, clear unresolved items with `--unresolved ""`, and clear its next
action with `--next-action ""`. Source cleanup remains a separate decision.
Whole `delete` requires the source to be reconciled with no entries, unresolved
items, next action, or active declared retainer. Unreadable live records block
cleanup with named paths because retention cannot be established; repair or
reconcile them without discarding their source bytes. This does not block other
work or grant the tool authority to choose what is important. Writes and cleanup
assume one writer per note; revision checks are not simultaneous-writer locks.

## Independent Review Boundaries

The Worker self-checks a Task and supplies its proof and merge answers; no
separate-context Task review runs. A fresh independent context reviews the
assembled Spec candidate for integration, with its immutable head, comparison
base, expected integration tip and named verification. Follow the installed
[`implement` review boundary](../../.agents/skills/implement/SKILL.md#4-review-at-the-relevant-boundary)
and [code-review procedure](../../.agents/skills/code-review/SKILL.md). Inspect scope,
behavior, recovery, documentation, installed identities and consequential
report claims. If the candidate changes, review the resulting assembled
candidate as required; an earlier PASS does not cover changed content.

Whole-Workbench main-readiness review is separately requested, review-only work.
It checks the combined product for drift, open gates, coherent skill composition,
installed acceptance and semantic ownership. For the Blueprint, require all
applicable destination sections, no status/version/evidence/catalog material,
only materially relevant active ADR links, lossless removed-claim disposition,
and root/template agreement. Record an explicit semantic pass/fail verdict;
structure and link checks alone are insufficient. Only the owner approves/merges main.

For incident claims inspect original call/result pairs, including failed,
rejected and interrupted calls. Record coverage and missing/truncated evidence.
Distinguish not attempted, rejected before execution, executed and failed,
local success and remote acceptance with read-back. A summary's omission is
not proof of non-occurrence. Behavioral acceptance separately records actual
provider/version/model, prompt, source/installed hashes and observed skill use;
explicit-path fixtures do not establish ordinary-prompt discovery. Unavailable
checks remain unverified. Repeated controlled trials are needed for reliability.


## Reference Upgrade Acceptance

This repository is [Workbench_Template](https://github.com/KaydenClark/Workbench_Template),
formerly Example_Workbench. It is the installed reference used to test every
LLM Workbench version update. Upgrade completion requires the full room suite,
matching manifest/control/runtime versions, exact managed-byte verification,
preservation inventory and recovery evidence, followed by independent review,
remote integration containment and checks in a fresh remote clone. The producer
release gate consumes the owning upgrade spec's proof. Main remains owner-only.

The runtime (since v3.2.1) also provides `workbench/tools/project-evidence.mjs prepare`.
Its request names source evidence and open questions; it creates a local grilling
note without inventing owner decisions. The full tour test suite exercises the
installed command in a disposable room and verifies the source hash. Fresh-room
Genesis derivation remains a producer command; this installation does not ship
`tools/genesis-from-decisions.mjs`.

<a id="behavior-selection"></a>
<a id="visible-identifiers"></a>
<a id="json-notepads"></a>
<a id="frozen-history-and-operational-recovery"></a>
<a id="optional-private-session-transport"></a>
<a id="portable-save-promote-and-room-local-skills"></a>
<a id="direct-owner-promotion"></a>
<a id="benchmark-driven-improvement"></a>
<a id="claims-to-test"></a>
<a id="evaluation-design"></a>
<a id="workbench-evaluation-commands"></a>
<a id="harness-feedback-loop"></a>
<a id="workbench-connection-identity"></a>
<a id="configured-host-capability-checks"></a>
