# Example Workbench - Version History

> Generated from LLM Workbench v3.1.2. This document lives in the docs lane
> because it is long-form reference, not a root control.

This repository's history replays the LLM Workbench harness one generation at
a time. Each `version/NN-...` branch points at one commit, and every commit is
the same product (a room whose `tour.mjs` explains the room) filled on one
generation of the harness contract. The commits sit on one linear history, so
the diff between any two branches is exactly how the contract moved between
those two generations, applied to a room whose product did not change.

```bash
git branch -r --list 'origin/version/*'             # every generation
git checkout version/04-v2.1                        # stand in one generation
git diff version/04-v2.1 version/05-v2.3 -- AGENTS.md   # how one rule moved
git log --first-parent --oneline version/10-v3.1.2  # the whole climb
```

## The Generations

| Branch | Generation | LLM Workbench source | Dated | Built |
|---|---|---|---|---|
| `version/00-v0-game-plan` | v0, GAME_PLAN three-doc set | `bfd06384a9dc18f4fcd0958202adb37e319e3602` | 2026-06-18 | by hand from the templates |
| `version/01-v1-roadmap` | v1, ROADMAP, first public release | `a2cdd4548d895461c3d27a6da34740d8c76ccdd5` | 2026-06-22 | by hand from the templates |
| `version/02-v1.1-anti-drift` | v1.1, anti-drift, version control, write safety | `8572dd17f8ee97603225be6cdff924c0d767521b` | 2026-06-25 | by hand from the templates |
| `version/03-v2.0-taskboard` | v2.0, TASKBOARD replaces ROADMAP, `templates/` split | `80db4a10007b2fb4617abd1bd861389ba5317a21` | 2026-07-01 | by hand from the templates |
| `version/04-v2.1` | v2.1, GENESIS, ADOPTION, feedback channel, permission file, integration branch | `dd1ed326a1d55e1f2303aa233cc4d1bf6a0a4270` | 2026-07-06 | by hand from the templates, following GENESIS |
| `version/05-v2.3` | v2.3, spec-centered progressive disclosure | `08ab78e5a59a68d2b04028fe71a2be488d5ae10e` | 2026-07-16 | by hand from the templates, following GENESIS, `spec-workbench.mjs` render and doctor |
| `version/06-v2.3-late` | v2.3 late, room brain, WORKBENCH_FEEDBACK, tracer bullets | `9e6c71b81f38d0696ac01834076a20d428207bde` | 2026-08-27 | by hand from the templates, following GENESIS, `spec-workbench.mjs` render and doctor |
| `version/07-v3.0.0` | v3.0.0, manifest-declared `workbench/` support root | `d80d14c531c4bece9e2978d11e92e5a5d7bd77a5` | 2026-08-31 | with that generation's `workbench-layout.mjs init` |
| `version/08-v3.1.0` | v3.1.0, managed runtime with receipt, ADR, diagnostics, wiki contract | `4ce74f8de1da30a3bffd9286e32c3b63e417a08b` | 2026-09-04 | with that generation's `init` and `workbench-tools.mjs install` |
| `version/09-v3.1.1` | v3.1.1, reduced entry, four stances, report format, branch completion | `09f0875edce730eebac56902fa561ec3301b0543` | 2026-09-04 | with that generation's `init` and `install` |
| `version/10-v3.1.2` | v3.1.2, the current room | `18ffc0d295722e8437a13399b3a1b67369248314` | 2026-09-06 | with that generation's `init` and `install` (the original Genesis of this repository) |

Every SHA above resolves in `KaydenClark/LLM_Workbench` (run
`git fetch --unshallow` first if the clone is shallow). Each room's README
repeats its own source commit in a provenance line.

## What Changed At Each Step

Read [What Changed At Each Step](VERSION_HISTORY--what-changed-at-each-step.md#what-changed-at-each-step) when working on this topic.

## Back-Tracking

To stand in a generation of this room:

```bash
git checkout version/05-v2.3
node tour.mjs && node tests/tour.test.mjs
```

To stand in the matching generation of the harness itself, in a clone of
`KaydenClark/LLM_Workbench`:

```bash
git fetch --unshallow 2>/dev/null; git fetch origin
git worktree add ../llm-workbench-v2.3 08ab78e
```

Each room's RUNBOOK names its harness commands with the `/PATH/TO/LLM_WORKBENCH`
convention of its own generation; point that at the worktree above.

To move a real room forward one generation, use the route the generation
itself prescribed: copying and re-stamping through v2.3, `workbench-upgrade.mjs`
for the one-time v2 to v3 migration, and `workbench-tools.mjs update
--explicit-update` plus `record-source` from v3.1.0 onward (this room's
`node tour.mjs --lifecycle` prints that route).

## How This History Was Rebuilt, And Its Limits

- Every generation was identified from the full LLM Workbench history (all
  branches, unshallowed) by the first commit that changed the copy-ready
  templates in a way that altered what a room must contain or how an agent
  must behave. Version headers were confirmed where they existed (v2.1 first
  appears on 07-01, v2.3 on 07-12, v3.0.0 on 08-31, v3.1.0 and v3.1.1 on
  09-04, v3.1.2 on 09-05).
- Each room is a fresh fill of that generation's own templates for the same
  product, following that generation's own README and GENESIS where they
  existed. The v3 rooms were created with the generation's real `init` and
  `install` tools from a clean checkout of the source commit. The pre-v3 rooms
  were filled by hand because that is all those generations offered.
- The rooms are not in-place upgrades of one another. A diff between two
  branches therefore shows the contract change plus the difference between two
  fillings, written on 2026-09-06 by different sessions from the same brief.
  The product (`tour.mjs`, `tests/tour.test.mjs`) is held constant in intent
  so that the contract is the signal.
- v2.2 has no branch, for the reason given above. Nothing in this replay is
  older than the harness's first commit or newer than its `integration` tip
  on 2026-09-06.

## v3.2.0 reference update (2026-09-08)

The replay table and historical descriptions above retain the original v3.1.2
baseline. The current `v3.2.0` branch applies the independently reviewed upstream
source `563a6e69657a6fe2594e86bda523cb60567342b7`, contained in LLM_Workbench
integration by PR80. It adds the current notepad/recovery and identity layout,
frozen checkpoint history, direct promotion, twenty-core-skill policy and optional
private transport runtime. The tour and filled controls explain these changes.

[S-003](../specs/S-003-v3-2-0-upgrade-and-project-validation/SPEC.md) owns installed
verification, fresh-project proof and the separate Example integration result.
Original genesis provenance remains v3.1.2; installed component receipts name
v3.2.0. This update does not rewrite the historical replay branches.

## Unreleased Template upgrade candidate (2026-10-18)

The historical generations and `v3.2.1` manifest label above remain the
released baseline. The current Template branch installs a later, **unreleased**
Workbench candidate without assigning it a new version or adding a replay
branch. Its managed runtime and skills receipts pin producer candidate
`0ce1750750f80767536f4d4c0bc44bf5ccabe730` (31 runtime files and 33 skills
containing 53 managed files). The native update changed one runtime file and
three skill files from the earlier installed generations; other managed payload
bytes remain as installed.
These identify installed bytes, not a final producer integration pin or a
published release. The Template also carries two generic startup-route sections
from producer candidate `aebfb970fa7f84032f0df52a6c61c5d9432b7cb3` and
reconciles room-owned controls, Wiki pages, tour and tests for this room.

The room deliberately retains its name, genesis and historical upgrade proof,
version replay table, manifest identity, and `v3.2.1` release labels in
receipts. Those facts describe the room's lineage and released baseline; they
do not override the pinned candidate source commits. The installed Wiki and
Lexicon follow current feature, Jot, privacy and Task routes while keeping this
room's existing tour, historical Spec links and standalone Wiki profile. A
final integration identity and upgrade acceptance are recorded only after the
applicable review, verification and integration steps succeed.

### Producer integration containment (2026-10-19)

The selected source `0ce1750750f80767536f4d4c0bc44bf5ccabe730` is now an
ancestor of LLM Workbench `integration` at
`c581d7510f398ef7675f7adc51a57d4c8309147b`. Its managed runtime and
skills payload is unchanged at that integration tip. The receipts continue to
pin the selected source commit so installed bytes remain identifiable; this
containment does not stamp a release or establish Template integration delivery.

### Template integration delivery (2026-10-19)

Workbench_Template PR11 merged reviewed candidate
`cd68ea759b100b94e423051a69da2264267cbaf5` into Template `integration`
as `f3d34a0f7d2bbb60b2a087afa18079aa09cf3bb8` at
`2026-10-19T05:42:21Z`. The merge and candidate share tree
`d62319c0d44f1510aed06e07b1473cf84f763d47`. This records the completed
upgrade integration.
The managed receipts still pin selected source
`0ce1750750f80767536f4d4c0bc44bf5ccabe730`, unchanged in producer
`integration` at `c581d7510f398ef7675f7adc51a57d4c8309147b`. The build
remains unreleased, and Template `main` was not promoted by this merge.

### Producer integration re-pin (2026-10-19)

A second unreleased carry re-pinned the managed runtime and skills receipts
from `0ce1750750f80767536f4d4c0bc44bf5ccabe730` to LLM Workbench source
`9734078399efb2b49b9fbca195d2c8f3c68b9722`, the producer `integration` tip when
the carry started. The `v3.2.1` release label stays on the manifest and
receipts because the source manifest still declares it; this stamps no release
and does not promote Template `main`. The carry ran the source's additive
layout migration (status `current`, no change) and the explicit native updates
of runtime tools and core skills, and every installed managed file matches the
pinned source.

Managed files that changed: runtime tools `spec-workbench.mjs` (legacy numeric
Task rows exempt from the remote-identity collision check),
`skill-inspection.mjs` and `workbench-layout.mjs` (room line-ending policy and
its `line-endings` doctor state); core skills `adoption`, `genesis` and
`update-harness`. The other 28 runtime files and 30 skills are unchanged. The
Glossary retirement (producer PR 431) was not landed at the pin and is not
carried: this room's controls are unchanged and `LEXICON.md` is still the
vocabulary control.

Room-owned change: the Template had no `.gitattributes`; it now ends with the
Workbench line-endings block (`/workbench/**` and each root control as
`text=auto eol=lf`) so a Windows checkout with `core.autocrlf=true` keeps LF and
the receipt hashes hold. The two `backups[].path` fields the updates appended
were removed from the receipts before commit because they name a local
temporary home, as the previous carry did. Component rollback from the receipt
backups is therefore not established; whole-room Git recovery to the Template
`integration` commit before this carry is the recovery route.

## v3.2.2 assessment candidate (2026-10-28)

The managed runtime, core skills and manifest now carry the **v3.2.2** label
from LLM Workbench source `a58466ad1dca4ce7d6bd1a8328f47d6a58a2ee8d`, installed
on a `claude/` branch from Template `integration`
`2f162c46afed6488862d2c3963b07bb0d905cabd` through the v3 update route
recorded in [S-000E](../specs/S-000E-v3-2-2-harness-upgrade/SPEC.md).

- The first `migrate` relocated the retired `workbench/skills` lane to the
  real tracked `.agents/skills` directory, made `.claude/skills` one relative
  link into it and appended the current line-endings block.
- `migrate` installed `GLOSSARY.md`, `ARCHITECTURE.md` and the grouped Wiki
  vocabulary articles. They are filled for this room; every Lexicon line has a
  recorded landing or disposition, and `LEXICON.md` stays as an archived file
  (see S-000E for why it is not retired). Its 69 removed-line dispositions
  await owner confirmation; do not run `retire-lexicon` before then.
- Runtime tools and core skills were updated with receipts and backups; the
  optional `diagnose-and-propose` and `grill-with-docs` skills were installed by
  explicit selection.
- Root controls, the tour and its tests now describe eight root controls and
  the six confirmed workflows.

This is an assessment candidate on integration, not a release: Template `main`
remains v3.2.1 until an owner-approved promotion of the assessed revision.
Historical genesis and layout provenance are unchanged.

The candidate was first installed from `8f08f11165c043a581c3c7130cb7c813eeec4483`
and then reinstalled on the same branch from `413e7039` and `a58466ad`, which
repair the producer defects those installs found (S-000E evidence log).

<a id="v0---game_plan-2026-06-18"></a>
<a id="v1---roadmap-2026-06-22"></a>
<a id="v11---anti-drift-and-version-control-2026-06-25"></a>
<a id="v20---taskboard-2026-07-01"></a>
<a id="v21-2026-07-01-to-2026-07-06"></a>
<a id="v22---never-committed-2026-07-10"></a>
<a id="v23---spec-centered-progressive-disclosure-2026-07-12-to-2026-07-16"></a>
<a id="v23-late---the-room-brain-2026-07-17-to-2026-08-27"></a>
<a id="v300---the-portable-workbench-root-2026-08-31"></a>
<a id="v310---managed-runtime-and-governance-core-2026-09-04"></a>
<a id="v311---boundaries-and-portable-stances-2026-09-04"></a>
<a id="v312---the-patch-from-real-adoption-2026-09-05-to-2026-09-06"></a>
