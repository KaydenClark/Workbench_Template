---
type: meta
status: active
sensitivity: normal
knowledge_role: curated
provenance:
  - Owner-requested Workbench feature catalog, 2026-10-24; prepared for v3.2.2
  - Current source audit at LLM_Workbench integration d4ff0fbcbed68af69082c4b71e70691510d8da0f
  - Retained feature-capture and historical-version audit at main afc68e62b1f58174a20c354034e141a766ace89d
source_paths:
  - workbench/wiki
last_verified: 2026-10-24
---

# Capability operations in the inspected source

Use this section for capability operations in the inspected source; [workbench-capabilities](workbench-capabilities.md) provides the surrounding context.

## Capability operations in the inspected source

These entries explain current command families and later extensions that the historical delivery articles do not describe together. **Later development** means implemented in the inspected source after the established historical baseline, with no first published version established by this catalog. It does not mean released in v3.2.2. The manifest still names v3.2.1, while the source contains newer work; Workbench_Template's installed baseline must be checked separately. Current source/test links below are pinned to live integration `d4ff0fbcbed68af69082c4b71e70691510d8da0f`; introduction commits name earlier source history.

Commands are discoverability pointers. Follow the room's Runbook for the applicable inputs, authority, verification and recovery procedure.

### Setup and room operation

Read [Setup and room operation](workbench-capabilities--capability-operations-in-the-inspected-source--setup-and-room-operation.md#setup-and-room-operation) when working on this topic.

### Map, plan and execute

Read [Map, plan and execute](workbench-capabilities--capability-operations-in-the-inspected-source--map-plan-and-execute.md#map-plan-and-execute) when working on this topic.

### Review, approval, delivery and cleanup

Read [Review, approval, delivery and cleanup](workbench-capabilities--capability-operations-in-the-inspected-source--review-approval-delivery-and-cleanup.md#review-approval-delivery-and-cleanup) when working on this topic.

### Alignment, decisions, landmarks and local review

| Capability | What it does and why | Version evidence | Evidence |
|---|---|---|---|
| Evidence preparation for Blueprint questions | `project-evidence.mjs prepare` transforms named project sources into provisional questions with source identity, exclusions and uncertainty. It prepares an interview without inventing the owner’s answers. | v3.2.1 candidate generation; first committed 2026-09-09. | [source](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/workbench/tools/project-evidence.mjs); [checks](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/test-project-evidence.mjs); [project evidence preparation](https://github.com/KaydenClark/LLM_Workbench/commit/e935ac36938eb03099c2d84c419f43ef5f3a3e16) |
| Architecture and destination decision records | `adr.mjs` supports `new`, `validate`, `normalize`, `register`, `list`, `show`/`get`, `search`, `history`, `inspect`, `accept`, `supersede`, `deprecate` and `migrate-folders`. `--kind adr\|ddr` separates architectural decisions from destination decisions while preserving lifecycle, rationale and source routes. | ADR tool: v3.1.0 candidate (2026-09-04); folder lifecycle: later development, 2026-09-18; DDR creation, lifecycle and retrieval: 2026-10-03. | [source](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/workbench/tools/adr.mjs); [checks](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/test-adr.mjs); [ADR tool](https://github.com/KaydenClark/LLM_Workbench/commit/3f0b560f312c0a527b046d45a6d85490914d6c05); [folder lifecycle](https://github.com/KaydenClark/LLM_Workbench/commit/256b62f7e80c29056df2706c1ebb57a98ca1350b); [DDR creation](https://github.com/KaydenClark/LLM_Workbench/commit/7d0cf5831c97aba365723a15f8c2d59348147b98); [DDR lifecycle](https://github.com/KaydenClark/LLM_Workbench/commit/cbb7a44a9965742e1ed38ceabb635623da5eba70); [retrieval](https://github.com/KaydenClark/LLM_Workbench/commit/068e5746d790d1b6812839199e6227bdbb5eb23a) |
| Destination Question Cards and Tracker projections | `landmark-tracker.mjs capture`, `add-landmark`, `revise`, `link`, `relate`, `rebuild` and `show` retain questions, confirmed answers, corrections, evidence and overlapping relationships. Claim-level reconciliation identifies which documentation claims changed, while step distributions preserve true counts. | Later development; first committed 2026-09-26 (first published version unestablished). | [source](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/workbench/tools/landmark-tracker.mjs); [checks](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/test-landmark-tracker.mjs); [DQC and Tracker runtime](https://github.com/KaydenClark/LLM_Workbench/commit/2592f2848dd4ed91fe1bf90c276bb29fefeb2a50) |
| LANDMARK.md delivery artifacts | A landmark provides direction and success criteria one size above a Spec, can contain child Specs or directly owned Tasks, and participates in reports, verdicts, verification, approval and retirement. This gives related capabilities a shared delivery destination. | Later development; landmark artifact declaration/validation first committed 2026-10-05; nested execution and retirement: 2026-10-06 (first published version unestablished). | [source](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/workbench/tools/landmark-artifact.mjs); [checks](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/test-lifecycle-directory-links.mjs); [landmark artifact](https://github.com/KaydenClark/LLM_Workbench/commit/a94e94fb5f50238c4c0cc62e283334c3947ada32); [directly owned Task execution](https://github.com/KaydenClark/LLM_Workbench/commit/fa8a2b545c64e14d3e272fa035d97d8646d81ad2); [landmark retirement](https://github.com/KaydenClark/LLM_Workbench/commit/dfee2450c7d35607a11dbb38f5c2b413cbffe3fc) |
| Landmark article checking | `landmark-wiki.mjs validate ARTICLE.md` checks identity references for artifact name and context, alongside supported article boundaries. It keeps a synthesis readable to people who do not already know every identifier. | Later development; current validator first observed in the source-history recovery commit of 2026-09-29 (first published version unestablished). | [source](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/workbench/tools/landmark-wiki.mjs); [checks](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/test-landmark-wiki.mjs); [validator recovery](https://github.com/KaydenClark/LLM_Workbench/commit/8faf09ada475b710427617c5be22238115f13f54) |
| Exact-commit GitHub coordination inspection | `github-coordination.mjs inspect --project ROOT --revision SHA` reads only the committed room identity and explicit repository binding. It lets a reader inspect the declaration without confusing it with verified access or assignment authority. | Later development; read-only binding inspection first committed 2026-09-30 (first published version unestablished). | [source](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/workbench/tools/github-coordination.mjs); [checks](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/test-github-coordination.mjs); [binding inspection](https://github.com/KaydenClark/LLM_Workbench/commit/7e893fce8bcecc377935c8adadc42548e56b9957) |

### Dashboard and optional project review surface

Read [Dashboard and optional project review surface](workbench-capabilities--capability-operations-in-the-inspected-source--dashboard-and-optional-project-review-surface.md#dashboard-and-optional-project-review-surface) when working on this topic.

### Wiki knowledge and continuity

Read [Wiki knowledge and continuity](workbench-capabilities--capability-operations-in-the-inspected-source--wiki-knowledge-and-continuity.md#wiki-knowledge-and-continuity) when working on this topic.
