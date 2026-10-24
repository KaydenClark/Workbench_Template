# S-000D - Workbench Feature Catalog

**Spec ID:** S-000D
**Status:** active
**Priority:** 1
**Owner:** codex-catalog
**Stance:** Builder
**Updated:** 2026-10-24
**Catalog description:** Install the complete upstream Workbench capability reference and route it from the Wiki as the first v3.2.2 documentation contribution.
**Blockers:** none
**Latest event:** TK-000C claimed by codex-catalog.
**Next gate:** Close TK-000C with verification and documentation proof.

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
  Feature Catalog (S-005X); this Spec owns installed copy and local checks.

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
- [ ] Immutable independent review and remote integration containment recorded.

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

## Completion Result

The catalog is installed and verified against the pinned upstream content.
Independent content review passed on `41266a9b7936a99c7bf06d7ccd97e0997163b52e`.
The delivery PR supplies the remote integration and fresh-clone receipts.
This Spec remains active for owner Human QA and main verification; no owner
approval, complete release upgrade or main promotion is claimed.

## Remaining Limitations Or Follow-Up Specs

This room remains installed v3.2.1 until an explicit managed upgrade proves a new version.

## Supersession

- Supersedes: none
- Superseded by: none
