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

# Reusable skills

Use this section for reusable skills; [workbench-capabilities](workbench-capabilities.md) provides the surrounding context.

## Reusable skills

The inspected core catalog declares **33 skills**. These are the available methods and roles in the source lane, not evidence that every method's current rewrite shipped under the manifest's old version label. A skill inherits the caller's authority and endpoint; loading one neither assigns unrelated work nor spawns an agent. Original release evidence is listed where established below; otherwise the current revision is later development with no first published version established.

### Core skills carried by a room

Read [Core skills carried by a room](workbench-capabilities--reusable-skills--core-skills-carried-by-a-room.md#core-skills-carried-by-a-room) when working on this topic.

### Producer maintainer skills

These seven source entries are declared separately from the core bundle. They are not installed through ordinary core distribution, counted in the 33 skills or required for ordinary project work. The v3.2.2 package separately requires installed Template availability of grill-with-docs; that target does not change its membership by inference. Since S-006K TK-00B6 the optional catalog offers it by explicit selection from this lane copy, so it remains a maintainer skill here and never joins the core.

| Skill | What it does and why | First version or later development | Evidence |
|---|---|---|---|
| `workbench-release` | Cuts and proves releases: version identity, reference Template installation, composed round trip, portability, cross-provider resume and derivation from recorded decisions. | Later development; declared maintainer skill first committed 2026-10-04 (first published version unestablished); underlying procedures have earlier origins. | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/workbench-release/SKILL.md); [maintainer skill extraction](https://github.com/KaydenClark/LLM_Workbench/commit/a861653e0ee060661b0170c28f7588e1689c0d0a) |
| `workbench-room-checks` | Checks producer layout/install/adoption/upgrade routes, control fidelity, self-drift, carrier line landing, GitHub binding and optional socket contracts. | Later development; declared maintainer skill first committed 2026-10-04 (first published version unestablished); underlying procedures have earlier origins. | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/workbench-room-checks/SKILL.md); [maintainer skill extraction](https://github.com/KaydenClark/LLM_Workbench/commit/a861653e0ee060661b0170c28f7588e1689c0d0a) |
| `workbench-evaluation` | Designs and runs evaluation, feedback intake, independent automated gate decisions and normalized run outcomes. | Later development; declared maintainer skill first committed 2026-10-04 (first published version unestablished); underlying procedures have earlier origins. | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/workbench-evaluation/SKILL.md); [maintainer skill extraction](https://github.com/KaydenClark/LLM_Workbench/commit/a861653e0ee060661b0170c28f7588e1689c0d0a) |
| `implement-spec` | Owner-invoked orchestration of a sliced Spec through Workers and assembled proof; stops with its PR ready for integration review. | Later development; producer-only assembly skill first committed 2026-10-06 (first published version unestablished). | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/implement-spec/SKILL.md); [implement-spec introduction](https://github.com/KaydenClark/LLM_Workbench/commit/becf23e3c4c08e2181eb87d2ebec9ab68cc70f9e) |
| `promote-decision` | Producer-only coordinator for one confirmed decision: Record supported claims through existing owners, Check source fidelity and Publish to checked integration, then stop. Map and Plan occur only when separately authorized. | 2026-10-07 ([`9353fb32`](https://github.com/KaydenClark/LLM_Workbench/commit/9353fb32f1dc32ee62b69c64ebb37980848935cf)); numbered release unassigned | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/promote-decision/SKILL.md) |
| `readback` | Producer-only first delivery that restates the owner’s intent, reasons, constraints and requested endpoint for explicit confirmation or correction, preserving pending assumptions and separating meaning from permission. | 2026-10-08 ([`ffa94190`](https://github.com/KaydenClark/LLM_Workbench/commit/ffa941905c0667c92065d58894f78f35302b31be)); numbered release unassigned | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/readback/SKILL.md) |
| `grill-with-docs` | Owner-invoked producer companion that composes grilling and domain-modeling while they sharpen a plan and develop supported glossary and decision-record material. It remains a maintainer skill here; since S-006K TK-00B6 a room receives it only by explicit optional selection (`workbench-optional-skills.mjs install --skill grill-with-docs`), which v3.2.2 selects for Template. | 2026-10-22 ([`af27f425`](https://github.com/KaydenClark/LLM_Workbench/commit/af27f425d9c0378c9c207625af80205b7b9e64da)); numbered release unassigned | [skill](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.agents/skills/grill-with-docs/SKILL.md) |

### Staged and optional skill surfaces

The [Worker role candidate](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/workbench/specs/S-002E-worker-role/candidate/worker/SKILL.md) bounds one assigned Task attempt and its hand-back to a Dispatcher. It is explicitly loaded for candidate evaluation and is not part of managed discovery. [The Worker article](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/workbench/wiki/skill-worker-role.md) records that boundary.

Sources in `skills-pending/`, draft articles and optional-skill alignment Specs remain inputs for future adaptation; their presence does not make them installed Workbench features. Domain Modeling is now a required core skill and is described in the core table above.
