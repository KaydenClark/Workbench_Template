---
type: project
status: partial
sensitivity: normal
knowledge_role: curated
provenance:
  - /jot capture; each claim names its source and date
source_paths: []
last_verified: 2026-10-22
---

# auto-merge

Captured context. Claim labels preserve intent and uncertainty; capture alone supplies neither Canon nor implementation proof. The date above checks this page's capture format, not every claim.

<!-- jot-entry -->
### JOT-5bcbc2d4-0c39-4240-9b46-4a942666f8f0
Kind: intent
State: confirmed
Recorded: 2026-10-22T15:26:47.476Z
Author: Kayden
Source: owner:01a16432-076c-7bb1-85c0-44519f22e141
Topic: auto-merge
Supersedes: none

Set up auto-merge into integration and implementation/feature branches after required CI and separate-agent review. No human reviewer is required. Main requires explicit owner approval. Agents share the owner GitHub account; status evidence cannot cryptographically prove separate context.
<!-- /jot-entry -->

<!-- jot-entry -->
### JOT-911ec7fa-d5c4-4189-aecb-4fd94a3c2d0e
Kind: intent
State: confirmed
Recorded: 2026-10-22T15:28:29.282Z
Author: Kayden
Source: owner:01a16432-076c-7bb1-85c0-44519f22e141
Topic: auto-merge
Supersedes: none

Implementation and feature describe branches where Specs and Tasks are worked, not literal branch prefixes. Configure integration and existing codex/** and claude/** namespaces; exclude main, recovery and version-history branches from automated delivery.
<!-- /jot-entry -->

<!-- jot-entry -->
### JOT-09808030-bf94-40e0-9f6a-1d5bca8fd3dd
Kind: intent
State: confirmed
Recorded: 2026-10-22T22:44:36.579Z
Author: Kayden
Source: owner:01a16432-076c-7bb1-85c0-44519f22e141
Topic: auto-merge
Supersedes: JOT-5bcbc2d4-0c39-4240-9b46-4a942666f8f0

Owner requested applying the CI repair proposal and confirmed: Repair all three repositories. Ordinary work branches must accept development pushes. Integration and main require PRs, current successful verify, and force-push/deletion protection. Remove hand-posted agent-review and owner-approval statuses. Keep Task self-check and merge answers, independent assembled-Spec review, and one explicit owner promotion/release decision. A minimal CI-only main bootstrap is in scope; pending integration product work and actual release qualification are not.
<!-- /jot-entry -->
