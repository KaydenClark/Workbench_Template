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
<!-- workbench-generated-page: workbench-capabilities--producer-utilities-evaluation-and-release-proof.md -->
# workbench-capabilities--producer-utilities-evaluation-and-release-proof (continued)

[First page](workbench-capabilities--producer-utilities-evaluation-and-release-proof.md) · [Previous page](workbench-capabilities--producer-utilities-evaluation-and-release-proof.md)

| Capability | What it does and why | First version or later development | Evidence |
|---|---|---|---|
| Clean immutable-candidate verification | `verify.mjs --candidate COMMIT` runs that commit’s own suite in a detached temporary worktree and removes it on pass, failure, error or interrupt. The working checkout can stay dirty because verification reads a named candidate rather than the caller’s mutable files. **Limits:** Introduced specifically at defff23adf68ef07275a926bb80e15b30f56e621 on 2026-10-13; candidate must be a commit holding its own runner. | 2026-10-13; behavior introduced at [`defff23a`](https://github.com/KaydenClark/LLM_Workbench/commit/defff23adf68ef07275a926bb80e15b30f56e621). Release version not yet established. | [source](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/verify.mjs); [checks](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/test-verify-candidate.mjs) |
| Conservative change-aware hosted CI | `verify-change.mjs` selects focused record checks only for a narrow known context/generated-index lane; substantive, unknown, dirty, missing-base or main changes retain full verification. GitHub Actions emits an event receipt binding PR, exact head, exact base and tested merge SHA. **Limits:** Classification chooses checks, never grants approval or permission to merge. Main always requires full verification. Actions use pinned dependencies, read-only permissions and no persisted checkout credentials. | 2026-10-11; source introduced at [`bce37ff8`](https://github.com/KaydenClark/LLM_Workbench/commit/bce37ff867a01e3b143ac0feb9c9e518407b25d1). Release version not yet established. | [source](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/verify-change.mjs); [checks](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/test-verify-change.mjs) |
| Staged-byte pre-commit checks | `setup-pre-commit.mjs [--repo PATH] [--update]` installs a reviewed hook snapshot. The hook checks staged whitespace and the exact staged JavaScript syntax using staged package-mode context, exposing accidental syntax errors before commit without running the full suite. **Limits:** Fast/offline producer hook; no application execution, complete behavioral verification or auto-approval. Explicit setup/update is separate from merely tracking .githooks. | 2026-10-08; source introduced at [`ffa94190`](https://github.com/KaydenClark/LLM_Workbench/commit/ffa941905c0667c92065d58894f78f35302b31be). Release version not yet established. | [source](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/.githooks/pre-commit.mjs); [checks](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/test-pre-commit.mjs) |
| Validated Task PR merge train | `merge-train.mjs --pr NUMBER:SHA` lands an ordered queue of already-validated Task PRs. It checks exact head and target, answers, reviews, current trusted hosted verification, records the proof, merges with a head guard and proves integration containment. First refusal stops later PRs. **Limits:** Producer maintainer tool; it does not validate the correctness of merge answers or delete branches. A behind head is updated in a throwaway worktree, diff-preserved and fast-forward pushed, then processing stops for fresh hosted CI and refreshed answers; no forced history. | 2026-10-13; source introduced at [`d85cf690`](https://github.com/KaydenClark/LLM_Workbench/commit/d85cf69047ac1bbc9ebc6582ac47c9f5c01adad0). Release version not yet established. | [source](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/merge-train.mjs); [checks](https://github.com/KaydenClark/LLM_Workbench/blob/d4ff0fbcbed68af69082c4b71e70691510d8da0f/tools/test-merge-train.mjs) |
