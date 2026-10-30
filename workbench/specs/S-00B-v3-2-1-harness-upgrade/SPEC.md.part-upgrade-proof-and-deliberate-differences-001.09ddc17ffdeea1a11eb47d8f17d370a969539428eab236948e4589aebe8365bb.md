# Upgrade Proof And Deliberate Differences (part 1)

[Record](SPEC.md#upgrade-proof-and-deliberate-differences)

<!-- workbench-record-body:start context=0 format=2 -->

[Preservation inventory](preservation.json) accounts for every tracked baseline
file and all sixteen installed runtime hashes against source385218a.
[Control fidelity](control-fidelity.json) retains every line occurrence:
AGENTS has zero dropped or changed template lines. Project-specific scope,
verification commands and the optional tour remain. Source root release policy
is producer-only; the Template Runbook records its role without imposing another
repository dependency on projects copied from it. No generic control template
changed between the installed v3.2.0 repair and source385218a, so root control
changes are version stamps, current repository identity and upgrade instructions.
The Blueprint, tour.mjs, original completed specs, ADR and VERSION_HISTORY stay
byte-identical. No controls require retirement or folding into a different owner.

Recovery was exercised before the final installation. The managed rollback
restored the replaced layout module byte-for-byte and restored the old receipt
with rollback metadata; it left newly added project-evidence.mjs. It is component
recovery, not a complete old-room restore. The rehearsal's own new file/receipt
were returned to the pinned baseline before the final update. Whole-room recovery
uses the preserved original Git commit4010003; the final backup is named in the
managed receipt. Neither temporary backup availability nor a receipt implies
cross-device recovery.

Observed friction: an already-current schema2 layout migration returned current
without changing workbenchVersion; the explicit version reconciliation is now
stated in the Runbook. A missing caller-supplied backup directory refused update
before writes; creating it permitted the final update. Seed refresh retained the
room-owned report format rather than overwriting it. The historical handoff
example and historical provenance remain deliberately unchanged. Doctor passes
with attention for preserved provenance, retained seeds and installed personal
v3.2.0 skills outside their declared room compatibility; this assignment does not
claim that those global skills were updated or validated for v3.2.1.

Baseline and after guardrail are58.3/100 (unchanged). Remaining recommendations
are producer-oriented static/version surfaces and benchmark ledger, held-out
coverage, repeated real outcomes, control/prior comparisons, recency and
uncertainty. No criteria were changed and no reliability improvement is claimed.

<!-- workbench-record-body:end -->
