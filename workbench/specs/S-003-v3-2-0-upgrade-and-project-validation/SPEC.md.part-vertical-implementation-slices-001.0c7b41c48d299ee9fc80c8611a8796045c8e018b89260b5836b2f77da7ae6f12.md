# Vertical Implementation Slices (part 1)

[Record](SPEC.md#vertical-implementation-slices)

<!-- workbench-record-body:start context=0 format=2 -->

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Preserve refreshed baseline and pin the tested v3.2.0 source | done | none | Refreshed Example baseline12 tests and layout pass; upstream563a6e6 full42/42 and independent PASS, merged PR80 integrationc6e476c exact reviewed tree |
| TK-002 | Upgrade managed installation and reconcile the tour and controls | done | TK-001 | New tour/route regressions RED then15GREEN; exact15 runtime hashes and20 isolated core markers match563a6e6; syntax/layout/doctor pass; AGENTS fidelity zero dropped/changed |
| TK-003 | Generate and customize a useful independent project with saved-note continuation | done | TK-002 | New b17 v3.2 Genesis readiness80af beforeclaim;15RED16GREEN; native context recovered correction and saved note6to8; parent16 tests/source preservation and local remote36abf1c confirmed |
| TK-004 | Review merge and read back actual Example integration | done | TK-003 | 8c97556 final exact-head review PASS; PR3 merged as integrationc848ca8; remote containment zero tree delta; fresh integration clone passed17 tests twice, syntax, layout and doctor |

### TK-001 - Source and baseline

**Stance:** Builder

Run full Example tests/layout/doctor and baseline guardrail. Record exact source
preflight and upstream required-suite/review evidence before closing this slice.
No dirty/uncommitted/symlinked source can count as the pinned release.

### TK-002 - Installed behavior

**Stance:** Builder

Use explicit upgrade with backup and rollback; reconcile product-specific controls
and real tour via red/green tests. Verify source/manifest/receipt/tool and core
skill identities, version match, control fidelity and all room checks.

### TK-003 - Useful fresh project

**Stance:** Builder

Use an isolated home and fresh pinned sources. Demonstrate a small concrete CLI
project generated through supported Genesis, not a hand-copied tree. Create and
run a useful function and regression test, save a finding/correction/next action,
and have a fresh context resume it. Prove new identity, no copied live state,
no runtime paths into developer source, and independently repeat from clone.
Name host/model/OS, command, output, exact commits and saved boundary. A single
trial proves this workflow only, not generalized model reliability.

### TK-004 - Integration proof

**Stance:** Builder

Separate-context review checks exact candidate and consequential claims. Repair
in scope, rerun affected/full checks, re-review changed candidate. PR and merge
only after PASS. Verify actual remote integration contains reviewed candidate
and test resulting checkout; preserve branch and send receipts to upstream S-050.

<!-- workbench-record-body:end -->
