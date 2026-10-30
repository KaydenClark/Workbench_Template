
# Branch completion

Use this section for branch completion; [SKILL](SKILL.md) provides the surrounding context.

## Branch completion

A task is not finished at the push. A pushed branch is recoverable, not
delivered. When the Task's merge answers are validated, or the assembled
candidate's Verify review passes, open the PR into the declared integration
branch, merge it, and confirm that branch
contains the work. Do not stall on an approved candidate or leave a
passed PR waiting for the owner. Promotion to the owner-controlled default
branch (`main` here) requires explicit owner authorization for the specific work;
routine checked integration merging of already-authorized work needs no second
approval. Spec and landmark acceptance remain separate owner judgments. "Never merge a PR left open for
review" means a PR whose review is still pending, not one that already passed.

When several validated Task PRs wait on the declared integration branch, land
them one at a time with a merge train, as the decision record "A merge train
lands validated Task PRs one at a time" (DDR-001V) settles. Queue each PR with
the full head commit whose merge answers were validated; the train merges only
that commit or the update of it the train made itself. At its turn, a PR whose
head does not contain the current integration tip is brought onto it without
force-pushing: merge the tip into the Task in a throwaway checkout (never
rebase and force-push a shared branch), check that the Task's changed lines are
unchanged, run the room's full suite on that exact updated head, push it to
the Task branch as a plain fast-forward, then merge with the expected head
pinned and prove containment. A conflict, a changed diff, a red suite or a
refused push stops the train at that PR with later PRs untouched, and the
Task goes back to its own Journey. The update reruns the Task's Check and its
unchanged diff keeps its QA, so it gets no separate-context review; a PR whose
review is still pending is never merged, and the train deletes no branch.
Each step uses the room's own commands, which its Runbook names; where the
room has no command for the queue, run the same steps by hand, one PR at a
time.

After containment, reconcile the existing owning Spec's current continuation.
Record the landed candidate and observed integration commit, and replace the
finished merge instruction with the actual next action or blocker. Preserve
failed Human QA, unchecked acceptance and all earlier evidence. When Human QA
is ongoing or failed, name its unresolved finding and next corrective action;
a green test or merge never resets it to "awaiting owner approval". A merge does
not infer owner approval, completion or another assignment. Use the room's
`record-landing` command after a fresh fetch, then render its projection.
Publish these administrative owner records through the existing record-only
path and read the changed owner and projection back from fetched integration
before reporting Publish complete. Code containment alone does not prove that
the next agent can recover the updated continuation. A record-only follow-up
keeps the next substantive gate; do not make another "merge these records"
instruction the permanent next gate or recursively record each record merge.

Delete the branch once the declared integration branch contains it and nothing
is lost, unless its owner defers cleanup. Prove containment of the immutable
reviewed commit before any deletion, then check the actual local and remote
branch tips too. Use `git branch -d` for local deletion and an expected-tip
guard for remote deletion. A tracking upstream alone is not proof of
integration containment; never force it with `-D` to clear a branch. Stacked
branches whose commits are already ancestors of the merged tip need no separate
merge. A branch still holding unmerged work is removed only with owner approval.

For the Spec QA runtime, run the assembled review gate before merging. Record
the owner's actual content-bound approval after integration, naming the
inspected commit whose Spec and live/retired Task content matches the local
assembled digest. Completion still requires that approval; administrative
completion preserves it for retirement, while substantive changes require fresh
review and approval.

Run merge and containment verification as a fail-fast sequence. Pin the reviewed
commit and reject a changed candidate. Merge must not delete branches before
containment is verified. A linked worktree holding the target must not block
verification. Only run cleanup when the owner has not deferred it; verify each
local and remote tip is contained, tolerate absent branches, and use an atomic
expected-tip guard on remote deletion so concurrent pushes are preserved.

The room's closeout recipe runs as one subshell. The subshell stops on any
failure without closing the caller's shell. Merge never requests branch
deletion. Containment uses the immutable reviewed SHA, so it remains checkable
if GitHub already removed the source branch. Cleanup checks local and remote
tips separately; a missing branch is already clean. The deletion lease is a
compare-and-delete guard, not permission to rewrite history. Never use `-D` or
an unconditional force push to bypass failed checks. If a worktree still holds
the task branch, local deletion fails and cleanup stops. When cleanup is
deferred, both branches and the checkout stay intact.

When cleanup is owner-deferred, the declared integration branch contains the
reviewed work and the branches remain available for later cleanup. Disposable
review clones and linked worktrees live outside the canonical checkout, under
the host temporary directory; `git worktree prune` drops the registrations of
removed ones, and a finished review checkout is removed once its review is
recorded. None is a durable owner.
