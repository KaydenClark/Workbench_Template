# Bounded RUNBOOK and TASKBOARD installation — 2026-10-29

## Scope and identities

Kayden confirmed and approved this repair through producer and Template integration,
with main excluded: [source-linked owner intent](../../../wiki/context-runbook-continuation.md).
This proof covers the bounded RUNBOOK/TASKBOARD repair, not completion of the
whole v3.2.2 upgrade, release acceptance, archived Lexicon dispositions or Audit.

- Original Template integration: `276d3107874dbf0c84f1f81bab4818daf9ec3ab8`.
- Test-only local recovery commit: `f62b5424084a69c8bc5c8452183fa86f03280e44`.
- Main observed before work: `25e51bc17bf34e6022a45452d509839b6a2cfac3`.
- Reviewed producer generation: `45a857f25adadeb068e0f000c09dcb3addb36a90`,
  contained in producer integration `cafd61599539a9e7717581184e6b9d248b84c792`
  through [PR #652](https://github.com/KaydenClark/LLM_Workbench/pull/652).

## Baseline and RED

The original target passed its complete documented suite: tour 23/23,
evidence-history 14/14, history checker 11 sections against the original
integration, syntax, layout, doctor, Wiki, ADR and whitespace. Doctor reported
36 informational findings and no blocker; four old Wiki stamps remain attention.

Three target regression tests then failed for the expected reasons: RUNBOOK
contained 611 whole-file whitespace-delimited words, had no direct TASKBOARD
route, and STARTUP still existed. The existing 23 tour tests remained green.
The actual target test file is already executed by the required hosted `verify`.
No new external branch settings or additional artifact caps are introduced.

## Preservation and STARTUP disposition

The original STARTUP was an unreconciled scaffold: writer unassigned, fetched
basis unknown and Sources table empty. It contained no active work summary or
candidate requiring another queue. Before removal its exact bytes were retained
in the original Git commit and an independent private recovery copy. The 196-file
starting inventory includes its SHA-256 and filesystem mode.

| Original meaning | Current maintained destination |
|---|---|
| Resume through current scope, claimant, blockers, corrections and acceptance; read-only selection grants no execution authority | `save/taskboard-continuation.md` Resume, linked from RUNBOOK and TASKBOARD; existing work owners retain authority and evidence |
| One writer reconciles concurrent lanes from current source owners at checkpoint/handoff/exit | Same procedure Reconcile; writers update owners and serialize native board render |
| Preserve privacy and use local-only, pushed-pending and integrated-fetched honestly | Same procedure Publication and interruption; exact identities/proof stay in owning work records |
| Failed fetch or stale summary cannot establish current state | Same procedure Resume and Publication and interruption; current source owners take precedence |
| Retain recovery before retiring a legacy control | Same procedure Retire a legacy continuation control during an update; original Git commit and private copy retained |

The board remains the native generated projection between `hot-specs` markers;
no second queue, Sources table or fingerprint store is added. Only after reading
back these destinations is root STARTUP removed. Historical evidence and immutable
links are retained.

## Supported installation and provenance

The reviewed producer's layout migration reported `current`. The tools updater
reported `current`: all 35 runtime files already matched the reviewed generation,
so its authentic historical receipt remains at `a58466ad`. No receipt was hand
edited or artificial drift introduced. The skills updater changed only `implement`,
`update-harness`, `save` and `handoff`, recorded producer `45a857f2`, and retained
a component backup. Its new continuation procedure replaces the old STARTUP
reconciliation file. Optional room-local skills are preserved unchanged.

Both updates used the supported `--explicit-update` route with a private backup
home. The pre-update Git commits remain the portable whole-room recovery points;
component backup availability is local to this installation host. Disposable
rollback/reapply and final managed-byte verification are recorded below.

Native workspace-closeout snapshot refused `unknown-task` because the existing
S-000E/TK-000D owner is table-backed. The refusal is preserved; no successful
native snapshot is claimed. An actual pre-edit 196-path inventory was recorded
instead (SHA-256 `c84988840fbc16e406410dc2a9c3250dde46aafb388c48eae6e41ca1bb83222b`).

## Candidate verification and remaining gates

At product checkpoint `ee3855b`, all 26 tour tests pass and the complete target
suite passes: 14 evidence-history tests, 11 preserved evidence sections against
`276d3107`, syntax, layout, doctor, Wiki, ADR and whitespace. The committed
candidate suite is rerun before publication. Nine changed entry/operations files
pass the producer's link/anchor check; RUNBOOK is 244 whole-file words.

The same installed tour test, reading the actual RUNBOOK file in a disposable
copy of the candidate, passes at exactly 500 words and fails at 501. Its added
payload sits inside comments and a fenced block, proving those tokens count.
The original candidate bytes remain unchanged. The existing required `verify`
already runs this portable target test; no producer file path or external rules
change is required to enforce the cap.

All 35 runtime files and 56 files across 33 core skills equal reviewed producer
`45a857f2`; both managed verifiers report valid and no updates. Optional skills,
archived Lexicon, manifest identity and provenance are unchanged. Only AGENTS
startup-route line 7 differs from the original target; every other room rule,
including its stricter owner-only main rule, is byte-identical. The control
fidelity diagnostic retains AGENTS counts 17 unchanged, 9 changed and 3 dropped,
which were already deliberate room differences.

In a separate committed clone, the recorded skills backup restored all 56 old
core-skill files exactly to baseline `276d3107`. Supported reapply restored all
56 current files, both verifiers reported valid with no updates, and tour 26/26
passed. The original candidate stayed clean. Unchanged runtime files needed no
new rollback backup. [Machine-readable verification](runbook-verification.json)
and [per-path preservation](runbook-preservation.json) retain the exact scope and
limits. No observed friction within this repair requires an additional feedback
assignment; the native table-backed closeout limitation remains explicit above.

Independent review, two-context installed continuation, hosted checks and
integration containment remain pending. The broader upgrade Task stays in
progress; main remains untouched.
