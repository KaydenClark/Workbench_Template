# S-000D - Workbench Feature Catalog

**Spec ID:** S-000D
**Status:** active
**Priority:** 1
**Owner:** codex-catalog
**Stance:** Builder
**Updated:** 2026-10-24
**Catalog description:** Install the complete upstream Workbench capability reference and route it from the Wiki as the first v3.2.2 documentation contribution.
**Blockers:** none
**Latest event:** TK-000C closed with proof.
**Next gate:** Owner review and main verification remain separate; PR20 carries remote integration and fresh-clone receipts.

## Outcome

A reader can find what the Workbench offers, why, introduction-version evidence,
availability and limitations from this room's existing Wiki router.

## Why It Matters

The tour explains this reference room; it does not catalog the upstream product.

## Current Verified State

Live integration basis on 2026-10-24: `62db588443e04ad99a52b0d2bcdc0a2ec99b9dd1`.
The initial tracking ref was stale because generic fetch selected main. The
explicit integration refspec revealed newer controls and installed capabilities.
This candidate preserves that live tree and adds a current-source supplement.
The following initial observations are historical setup evidence, not current
installed-state assertions.

Inspected main `bcd0747ad2a40e3a3b27a2193b48612d30dce936`; delivery baseline
integration `fc0fc18c2c1752c8c98a4fed20304e803c71f53c`: installed v3.2.1,
21 passing tour tests, syntax/layout/doctor pass with 44 existing attention
findings. No flat capability reference. The older Wiki schema supports meta
notes, not the source's newer feature type.

## Desired Behavior

Install the same portable curated meta reference as the upstream source and
reusable Wiki template, with a summarized route and public Wiki entry link.

## Decisions And Contracts

- The owner assigned this catalog slice to v3.2.2. It does not stamp or publish
  a full release or establish that newer source capabilities are installed here.
- Preserve all product/runtime/skills/manifest/history bytes. One branch holds
  this entire contribution; main promotion stays owner-only.
- Source owns catalog content and pinned capability evidence under Workbench
  Feature Catalog (S-006L); this Spec owns installed copy and local checks.

## Non-Goals

Managed runtime or skill upgrade, false installed-version claims, new collections,
rewriting completed records or publishing main.

## Dependencies And Blockers

Source catalog candidate; no unrelated project work.

## Vertical Implementation Slices

The live reconciliation Task below owns remaining execution. Earlier slice
records in this section and the evidence log are historical, bounded to the
initial candidate and stale tracking baseline.

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Install and verify the complete upstream capability reference | done | none | 21/21 tour tests; syntax, layout, Wiki validation and doctor pass; pinned source path/commit and byte-equality audit; independent content review PASS at41266a9 |

## Acceptance Criteria

- [x] Installed reference matches the reviewed upstream catalog and has a summarized MEMORY route.
- [x] Existing Template suite and Wiki validation pass; runtime, skills, manifest and product bytes remain unchanged.
- [x] Immutable independent review and remote integration containment recorded.

## Testing Seams

Documentation comparison, Wiki validator, pinned upstream links and existing tests.

## Verification Procedure

Run `node tests/tour.test.mjs`, `node --check tour.mjs`, layout validation,
doctor, Wiki validation, `git diff --check` and exact source-copy comparison.

## Documentation Impact

Wiki reference, router, public README link, this Spec and generated projections.

## Append-Only Evidence And Execution Log

| Date | Ticket | Event | Verification | Docs | Remaining gap |
|---|---|---|---|---|---|
| 2026-10-24 | spec | Owner assigned reference catalog as a v3.2.2 contribution | Baseline suite green; current version and schema checked | Scope recorded | Copy, verification and review pending |
| 2026-10-24 | TK-001 | Ticket closed | 21/21 tour tests; syntax, layout, Wiki validation and doctor pass; pinned source path/commit and byte-equality audit; independent content review PASS at41266a9 | Installed portable capability catalog, summarized MEMORY route, README and Lexicon entry routes | Independent review of final work-record closeout, reviewed integration and fresh remote clone receipt; owner main promotion and full release upgrade remain separate |
| 2026-10-24 | TK-000C | Task closed | Current Template suite passes:21 tour+14 history tests,8 preserved sections,syntax,layout,doctor,Wiki,ADR,diff; hosted verify40091641714 success on e4087a2; content and preservation review PASS; installed state unchanged | Current capability reference, MEMORY/README routes and sourced scope | Final metadata review and CI, integration and fresh-clone receipts; main and full release remain separate; close attribution: {"agent":"codex-catalog","claimant":"codex-catalog","onBehalfOf":null} |
| 2026-10-24 | TK-000C | Post-close final Template verification | Full current suite passed:21 tour tests,14 history tests,8 protected sections against62db588,syntax,layout,doctor,Wiki,ADR,diff; hosted verify40091641714 SUCCESS at e4087a2 | Complete catalog and sourced routes verified | Final metadata review/CI and staged delivery; main and full release remain separate |
| 2026-10-24 | review | Review verdict: pass at f4ba03c1d04d9c6b7a3a2a18228e164579c49885 [762d7c935bfa] #1 | Independent exact-candidate review PASS; current nine-command suite and preservation checked. Required hosted CI, integration receipt and fresh-clone readback remain delivery checks; no main/release approval. | codex-independent-catalog-review | 3 |
| 2026-10-24 | TK-000C | Reconciled actual remote delivery receipts and source identity correction | PR20 merge6aea5aaa contains reviewed525bf41; PRCI40092077881 and landedCI40092198491 SUCCESS. Fresh remote clone passed the full current9-command suite and catalog byte equality. Source PR595 reissued its collided work record asS-006L using full remote inventory; catalog bytes unchanged | Source owner reference corrected; original evidence preserved | Owner/main and complete versioned package remain separate |
| 2026-10-24 | review | Review verdict: pass at 9e4c3f64287bea7f220577ad9a281483215f0ebe [4f04264d8da5] #2 | Independent follow-up review PASS: source owner correction, actual delivery/fresh-clone receipts, protected evidence preserved; catalog and installed state unchanged. Exact-head hosted CI remains required before this receipt reconciliation merges. | codex-independent-catalog-review | 2 |

## Completion Result

Catalog delivered to integration through [PR20](https://github.com/KaydenClark/Workbench_Template/pull/20), merge `6aea5aaaf0fa9d3e6f2f485eef71a0ffde39d981`, containing reviewed head `525bf417218a51e9e44b5d23b05a4ee9c320fd78`. Final-head and landed CI passed. A fresh remote clone passed the complete current suite and catalog byte comparison.

The [source catalog contribution](https://github.com/KaydenClark/LLM_Workbench/pull/595) is now owned by Workbench Feature Catalog (S-006L); the old candidate identity collided with retained remote work and is not an alias. This record preserves the original append-only evidence and corrects only its live source route. No further catalog implementation is pending here. Owner/main verification and the complete v3.2.2 package remain separate; this Spec stays active for that boundary.

## Remaining Limitations Or Follow-Up Specs

This room remains installed v3.2.1 until an explicit managed upgrade proves a new version.

## Supersession

- Supersedes: none
- Superseded by: none
