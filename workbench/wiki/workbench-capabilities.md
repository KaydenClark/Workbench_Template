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

# Workbench Capability Overview

LLM Workbench gives an agent project a shared operating contract, a path from ideas to checked delivery, and durable knowledge that survives a conversation. This reference explains the offered capabilities, what each does, why it exists, its availability and limits, and the earliest introduction history supported by source evidence. It covers portable room features, optional components and producer-only tools.

Current capability descriptions read integration [`d4ff0fbc`](https://github.com/KaydenClark/LLM_Workbench/tree/d4ff0fbcbed68af69082c4b71e70691510d8da0f). The retained feature captures read main [`afc68e62`](https://github.com/KaydenClark/LLM_Workbench/tree/afc68e62b1f58174a20c354034e141a766ace89d) as bounded historical explanations. This catalog is **prepared for v3.2.2**; the source manifest still carries v3.2.1 while newer capabilities are integrated. A version stamp, copied page or source file does not establish a published release or an installed consumer package.

To check availability in a particular room, read its `workbench/manifest.json`, managed receipts, Runbook and actual tool entrypoints. Workbench_Template retains its own installed identity and upgrade evidence; this reference is shared product knowledge, not an installation receipt.

The maintained [Feature catalog](features/README.md) owns the capability
articles. This overview retains cross-capability explanations and pinned
introduction evidence; reconcile changed capability knowledge into its existing
feature article before changing this overview. A new Spec does not need a
parallel article or another maintained Spec roster.

## Reading The Overview

Each entry gives **what it does and why**, **version or introduction evidence**, and immutable **source/check links**. A source introduction date records when the file or named behavior entered reachable history; later refinements may have different dates. “Later development” or “numbered release unassigned” means source availability is evidenced but the first published numbered package is not established. Historical generations, candidate stamps, main containment and installed release proof remain distinct.

`MEMORY.md` remains the Wiki's single router. This page is a substantive reference, while individual feature articles retain their detailed explanations and historical limits. Read only the section needed for the current question. Tables group capabilities for discovery; they do not introduce another work tracker.

Portable features use the public setup and update routes. Producer tools under upstream `tools/`, the full local Dashboard and maintainer skills are marked separately. Optional project Board deployment, private transport, team and Foundry utilities require their own setup; ordinary local work does not depend on them.

## How The Capabilities Fit Together

The current entry follows the RUNBOOK cold-start flow through relevant context and TASKBOARD to current owners and the needed procedure. `GLOSSARY.md` defines terms; `ARCHITECTURE.md` routes information ownership; the Wiki explains concepts and captures source-linked working context through Jot. The compact Runbook points to maintained workflow steps and failure loops.

Explore uses Idea, Align and Confirm. Authorized decision publication uses Record and Publish; capability preparation uses Map and Plan. The Task Journey uses Implement, Check, QA and Submit. Assembled Review and Verify judge the result; actual owner review and scoped main authority remain separate facts. Jot supports continuation throughout. Failures return to the affected existing work, and durable explanations survive cleanup of temporary delivery scaffolding.

The [v3.2.2 release owner](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/workbench/specs/S-006K-workbench-v3-2-2/SPEC.md) specifies a further correction: Judge includes Approve, and Complete is Deliver → Cleanup, with Confirmed meaning Human Verified Intent and Approved meaning Human Reviewed Work. The producer source now carries those definitions and an executable pre-delivery/post-delivery contract: Tasks marked `post-delivery` and `Post-delivery acceptance` lines do not hold the Spec gate, Review or owner approval, and `complete` waits for them. This catalog does not claim that correction is installed in this Template until its installed version evidence records it.

## Version Evidence

Read [Version Evidence](workbench-capabilities--version-evidence.md#version-evidence) when working on this topic.

## Capability operations in the inspected source

Read [Capability operations in the inspected source](workbench-capabilities--capability-operations-in-the-inspected-source.md#capability-operations-in-the-inspected-source) when working on this topic.

## Reusable skills

Read [Reusable skills](workbench-capabilities--reusable-skills.md#reusable-skills) when working on this topic.

## Producer utilities, evaluation and release proof

Read [Producer utilities, evaluation and release proof](workbench-capabilities--producer-utilities-evaluation-and-release-proof.md#producer-utilities-evaluation-and-release-proof) when working on this topic.

## v3.2.2 Package And Delivery Boundary

The existing [Workbench v3.2.2 release owner](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/workbench/specs/S-006K-workbench-v3-2-2/SPEC.md) owns the assembled package and its qualification. Its selected package includes Glossary, Architecture, Jot, Domain Modeling, installed grill-with-docs, explicitly selected optional diagnose-and-propose, pr, writing-for-agents, retro and update-harness. Source membership alone does not prove installed Template availability. At this snapshot grill-with-docs was a maintainer entry with no distribution route and diagnose-and-propose had separate packaging work; S-006K TK-00B6 later offers both through the optional catalog by explicit selection.

The release distinguishes a pinned source and installed Template candidate, supported upgrade/preservation/recovery, whole-installed-Workbench fitness, required repair retests, receiving Audit adoption, actual owner approval and checked main delivery. An introduction commit or this catalog's documentation delivery satisfies none of those gates by itself. Use the release owner for current work state and evidence rather than copying its Task or acceptance state here.

## Catalog Coverage And Source Artifacts

| Catalog section | Entries | Source artifacts covered |
|---|---:|---|
| Retained feature captures | 51 | Completed-capability explanations and generation evidence at the bounded main snapshot. |
| Current operation families and review surfaces | 52 | Root controls and templates; manifest/layout; lifecycle, decision, Wiki, Jot, Tracker, landmark and session tools; local Dashboard and optional project Board. |
| Core skills | 33 | Exact required skill entries in the inspected source manifest and core catalog. |
| Producer maintainer skills | 7 | Exact separately declared maintainer entries; ordinary core installation excludes them. |
| Producer utilities and verification | 18 | Evaluation, feedback, drift, release/portability, context/research/team/socket tools, verification runner, hooks, CI and merge train. |

These counts describe catalog entries, not a claim that overlapping historical and current explanations are distinct product features. Internal parsing helpers and individual tests are evidence, not separate features. Staged Worker and pending optional sources are described with their availability limits rather than counted as installed skills.

The reusable artifact is `templates/wiki/workbench-capabilities.md`; the producer and consuming room publish it at `workbench/wiki/workbench-capabilities.md` and route it from their existing `MEMORY.md`. The three copies should carry the same source snapshot and product facts. Room manifests, managed receipts, feature captures and release owners remain their independent truth owners.

## Maintaining And Reusing This Reference

The owner of a capability change updates its existing explanation and this
reference in the same delivery. Preserve the distinction between an original
capability and a later amendment. Refresh `last_verified` only after checking
the claims that changed, and add a dated History entry naming the authorizing
operation. Do not replace an unknown introduction with the manifest's current
version merely to fill the cell.

Use this entry format for a new row in the relevant section:

```text
Capability: the user-visible name, not just an internal filename or Spec ID.
What and why: observable behavior and the problem it solves.
Availability and limits: portable, optional, producer-only, preview or planned;
  prerequisites, important exclusions and any difference from older installs.
Introduced: earliest evidenced generation or release; for later development,
  say the release is unassigned and cite its introduction commit/date.
Evidence: immutable upstream source/test links and the owning explanation.
```

Retain the Wiki's existing frontmatter and flat-note conventions. Completed
Specs still get their own `features/` capture at the closure point, using that
collection's template; a catalog row never marks a Spec complete or substitutes
for its acceptance or proof. Keep old captures intact when adding a later
amendment. A room's local features collection describes its own delivered
product capabilities, which need not be Workbench capabilities.

The reusable filled reference lives at upstream
`templates/wiki/workbench-capabilities.md`. It contains upstream product
knowledge, with no consumer identity or local paths to fill. For this
documentation slice, copy it explicitly to the room's
`workbench/wiki/workbench-capabilities.md`, add a summarized link to the existing
`MEMORY.md`, and run `node workbench/tools/wiki.mjs validate`. Do not replace the
router, schema, existing articles, manifest, managed runtime or skill receipts.
The current layout seeder does not install arbitrary flat template notes;
copying this file is an explicit step, not an automatic update claim.

When the source snapshot advances, audit runtime entry points, required and
maintainer skill inventories, retained feature captures, optional utilities and
accepted-but-unimplemented destinations again. Check every pinned path, compare
the source/template/installed copies, lint the touched pages against neighboring
claims and run the repository's documented verification. Complete release
readiness still needs its separate installed Template upgrade and owner gates.

## History

- 2026-10-24 — Created under the owner's request to catalog every Workbench feature and capability, explain purpose and introduction history, and prepare the reference for Workbench_Template in v3.2.2. Audited the current fetched integration snapshot, preserved 51 bounded historical captures, reconciled current skill membership and Jot/vocabulary/startup routes, and separated source availability, candidate stamps, optional installation and release qualification.
- 2026-10-28 — S-006K TK-00B6: recorded the v3.2.2 source stamp and grill-with-docs optional distribution route; other snapshot rows are unchanged.

<a id="retained-feature-captures"></a>
<a id="setup-and-room-operation"></a>
<a id="map-plan-and-execute"></a>
<a id="review-approval-delivery-and-cleanup"></a>
<a id="alignment-decisions-landmarks-and-local-review"></a>
<a id="dashboard-and-optional-project-review-surface"></a>
<a id="wiki-knowledge-and-continuity"></a>
<a id="core-skills-carried-by-a-room"></a>
<a id="producer-maintainer-skills"></a>
<a id="staged-and-optional-skill-surfaces"></a>
