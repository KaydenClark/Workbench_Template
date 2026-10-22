# Checked Delivery

## Branches And CI

Ordinary Spec and Task branches, including `codex/**` and `claude/**`, allow
normal development pushes. Run local targeted checks while developing. A branch's
role determines any separately agreed shared-assembly protection; an agent prefix
alone does not. This policy supersedes the earlier blanket work-branch gates.

`integration` and `main` require a PR, successful `verify` from GitHub Actions,
an up-to-date branch, and protection against force-push and deletion. The workflow
runs on PRs targeting both branches and on pushes to both landed branches. It has
no path filters, one Ubuntu job, pinned actions, read-only permissions and
concurrency cancellation. The Template suite is small, so every run uses all
checks in [Test And Build](../../RUNBOOK.md#test-and-build), including main PRs
and landed main commits. No Markdown path is treated as proof of low impact. Common checks include
whitespace, doctor, Wiki and decision-record validation, and preservation of
existing Spec evidence and Task receipt rows across the event range. The history
check follows Git-detected moves within the Spec/Task lane that retain the same
record kind, so future runs keep scanning them. Missing or rewritten old rows
and moves outside that coverage fail.

PR checks test the proposed merge with its destination. Postmerge checks test the
actual landed state. A new head or base needs current passing checks. Missing,
stale or failed required checks block merging. Keep deterministic tests in CI;
model trials and cross-device demonstrations belong to scoped acceptance work.

## Review And Queue

A Task author self-checks the diff, tests and evidence, then includes the two
[merge answers](../skills/implement/SKILL.md#4-review-at-the-relevant-boundary):
can it merge into the named current destination, and did it complete the Task?
Administrative PRs do not require an extra independent review ceremony. Review
an assembled Spec once in a separate eligible context against its pinned candidate,
requirements, findings and verification. A changed reviewed candidate needs review
of the change; existing holds remain binding. Preserve the review in its native
record. Do not publish `independent-agent-review` or `explicit-owner-approval`
statuses; they do not prove separate agent identity or owner intent on a shared account.

When integration delivery is authorized, pin the head and queue the PR:

```bash
gh pr view "$PR" --repo "$REPO" --json headRefOid,baseRefName,statusCheckRollup
gh pr merge "$PR" --repo "$REPO" --auto --merge --match-head-commit "$HEAD_SHA"
gh pr view "$PR" --repo "$REPO" --json state,autoMergeRequest,mergeCommit
```

Never use `--admin`. After merging, fetch the target, prove head containment and
inspect landed CI. Queueing is per PR, not blanket approval of open work. PRs into
ordinary work branches use Task self-check and the relevant assembly review
boundary; a child PR is not required merely to push a correction.

## Main And Release Authority

Before a main PR, reconcile the exact promotion scope, open findings and existing
Spec reviews, then obtain the owner's explicit approval for that promotion.
Required full CI supplies automated proof, not approval. Perform the scoped merge
once authorized, then verify landed main without asking for a second approval of
the same promotion. Do not queue main through routine auto-merge.

A versioned release needs a pinned qualification candidate, full verification,
real installed Template upgrade and preservation proof, managed-file hashes,
fresh-clone checks and the release's product-delivery proof. Verify version,
provenance and that qualification evidence when tagging. Reuse one qualifying run
for overlapping requirements it actually satisfies. Source CI alone cannot prove
an installed upgrade or a model trial. Owner release approval may cover main
promotion only when it explicitly includes both. No release qualification or
release approval is established by this CI repair.

These changes configure this named repository. They do not update managed core
skills or the upstream generic templates. Shared credentials make review
independence and owner approval process obligations, not machine identity proofs.
