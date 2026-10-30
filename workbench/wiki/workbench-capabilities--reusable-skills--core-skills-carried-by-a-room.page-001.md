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
<!-- workbench-generated-page: workbench-capabilities--reusable-skills--core-skills-carried-by-a-room.md -->
# workbench-capabilities--reusable-skills--core-skills-carried-by-a-room (continued)

[First page](workbench-capabilities--reusable-skills--core-skills-carried-by-a-room.md) · [Previous page](workbench-capabilities--reusable-skills--core-skills-carried-by-a-room.md)

| Skill | What it does and why | First version or later development | Evidence |
|---|---|---|---|
| `writing-for-agents` | Write concise predictable agent controls, skill entrypoints and references with word budgets, good pointers and exhaustive checkable completion conditions. Preserve requirements and authority while removing repetition. | 2026-10-06 ([`8925425c`](https://github.com/KaydenClark/LLM_Workbench/commit/8925425cdb13ec161698a5adfa99ad4126b67578)); numbered release unassigned | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/writing-for-agents/SKILL.md) |
| `retro` | On explicit user request, inspect the selected session and propose severity-ranked environment improvements, preferring deterministic checks for mechanical errors and retaining evidence and ownership. | 2026-10-06 ([`8925425c`](https://github.com/KaydenClark/LLM_Workbench/commit/8925425cdb13ec161698a5adfa99ad4126b67578)); numbered release unassigned | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/retro/SKILL.md) |
| `director` | Coordinates project-wide integration and cross-Spec dependencies, preserving independent review and owner closure boundaries. | Later development; first committed 2026-09-29 (first published version unestablished). | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/director/SKILL.md); [skill introduction](https://github.com/KaydenClark/LLM_Workbench/commit/c952d7b204727bf6b70fb172b1f7fcf1ef009af9) |
| `dispatcher` | Owns one Spec and its branch: plans work, dispatches Workers, monitors results and verifies the assembled capability. | Later development; first committed 2026-09-29 (first published version unestablished). | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/dispatcher/SKILL.md); [skill introduction](https://github.com/KaydenClark/LLM_Workbench/commit/c2098e8346f93b9789f5868f850690d5e6b564b1) |
| `spec-planner` | Prepares the smallest coherent Task plan from current Actuality, splitting only for independently checkable outcomes, dependencies, writers or context size; activation requires implementation approval. | Later development; first committed 2026-09-29 (first published version unestablished). | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/spec-planner/SKILL.md); [skill introduction](https://github.com/KaydenClark/LLM_Workbench/commit/7c9f675e77a2fe2cd80a4d8cea48f1f5d4daff07) |
| `spec-manager` | Dispatches ready non-conflicting Tasks, assesses hand-backs and presents the assembled candidate. | Later development; first committed 2026-09-29 (first published version unestablished). | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/spec-manager/SKILL.md); [skill introduction](https://github.com/KaydenClark/LLM_Workbench/commit/c8cb2cacf03ad6f302952a95dc5e72586cec297f) |
| `builder` | Delivers the assigned result with useful checks and truthful maintained documentation. | v3.1.1 portable stance (2026-09-04); later revisions are present in the inspected source. | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/builder/SKILL.md); [portable stance origin](https://github.com/KaydenClark/LLM_Workbench/commit/bfae8c0d731d1a799a487b0848f2e39af25c68d5) |
| `auditor` | Determines whether named claims hold on a specified target and evidence. | v3.1.1 portable stance (2026-09-04); later revisions are present in the inspected source. | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/auditor/SKILL.md); [portable stance origin](https://github.com/KaydenClark/LLM_Workbench/commit/bfae8c0d731d1a799a487b0848f2e39af25c68d5) |
| `reviewer` | Challenges candidate correctness, downstream impact and consequential claims. | v3.1.1 portable stance (2026-09-04); later revisions are present in the inspected source. | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/reviewer/SKILL.md); [portable stance origin](https://github.com/KaydenClark/LLM_Workbench/commit/bfae8c0d731d1a799a487b0848f2e39af25c68d5) |
| `reconciler` | Aligns achieved work with its durable owners and proof so another context can continue accurately. | v3.1.1 portable stance (2026-09-04); later revisions are present in the inspected source. | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/reconciler/SKILL.md); [portable stance origin](https://github.com/KaydenClark/LLM_Workbench/commit/bfae8c0d731d1a799a487b0848f2e39af25c68d5) |
