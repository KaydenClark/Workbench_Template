# TK-000B - Repair delivery gates and main CI coverage

**Task ID:** TK-000B
**Spec ID:** S-000C
**Slice:** Repair work-branch delivery gates, review policy and main CI coverage
**Status:** in-progress
**Blockers:** none
**Destination:** spec-acceptance: S-000C Acceptance Criteria
**Claimed by:** codex-ci-repair
**Current claimant:** codex-ci-repair

## Receipt

| Run | Branch | HEAD SHA | Upstream | Dirty | Tests | Docs touched | Remaining gap | Checksum |
|---|---|---|---|---|---|---|---|---|
| 1 | codex/ci-policy-repair | 99f8cc09e10c398a69dc46444c27e9f45b1836f6 | ahead 0 behind 0 | 8 | Expected red trigger assertion confirmed main lacked CI. Green main/integration trigger assertion, tour 21/21, syntax, layout, doctor, Wiki and ADR validators passed. | AGENTS, RUNBOOK, AUTO_MERGE.md, Wiki correction and Spec. | Hosted checks, narrow main bootstrap, independent assembled review, rule repair and containment pending. | 83c89ade0088198ce033722288c6e04db23b570e6ea556cf6943d007c92da210 |
| 2 | codex/ci-history-repair | 3a0a82cd2222aabfbc4c83b8f95692574577468a | ahead 1 behind 0 | 1 | History fixtures9/9 and tour21/21 pass on integration and main baselines. Syntax, layout, doctor, Wiki and ADR validation pass. Integration base history check preserves8 evidence sections at56e7f707d339af1d35c15fd2c30551d9bd96a89f. Main CI-only candidate checked separately. | RUNBOOK full checks, AUTO_MERGE evidence preservation, Spec and Task receipts. | Hosted proof, independent review, history delivery and explicit concrete main bootstrap approval pending; no release qualification. | 3135a450ed58eb99a1eeab86800482328e849eda3acdb22d3579bdbfd2425b9c |
| 3 | codex/ci-history-repair | 0f76e95815a27c0d5b96d2b88431b1f9ea03c1cc | none | 4 | Corrected history fixtures: 14 passed on both integration and main; tour: 21 passed on both. Syntax, layout, doctor, Wiki and ADR validators passed. Scope-preserving retirement and follow-on edit/deletion refusal covered. | AUTO_MERGE governed move boundary, Spec and Task correction evidence. | Fresh hosted proof, independent review, integration delivery and explicit concrete main bootstrap approval pending. | e3f3256b1da962199107db2f1e4c19ab6523059d7f2b68fd3c0b805319d39e08 |
