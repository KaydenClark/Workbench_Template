
# 4. Review at the relevant boundary

Use this section for 4. review at the relevant boundary; [SKILL](SKILL.md) provides the surrounding context.

## 4. Review at the relevant boundary

Use review and verification practices to challenge the work before calling it
done. Earlier review is support, not a mandatory independent ceremony per
task. Self-review can find issues while Builder work continues. Worker self-check
compares the scoped diff, acceptance, test results, documentation and receipt
claims, fixes authorized defects and hands that proof to the Dispatcher (or
the assigned owner). Normal Task handback does not require separate Task
approval. It does not authorize a Worker to approve the assembled Spec, record
owner Human QA, or merge a candidate still awaiting review. A draft-only endpoint
stops with the immutable candidate and pending gates named.

A Task's Journey is Implement, Check, QA and Submit. **Check** runs the
deterministic verifications in the environment: tests, builds, lints and
diagnostics. **QA** is your self-judgement of the work: does it actually do
what the Task asked, beyond what Check can prove; say what you judged and what
you could not. **Submit** is the merge request that carries the Task into its
parent branch with the two merge answers below. Review comes after the Journey,
on the assembled whole, never on a Task.

The Task's own verify step is two answers the Worker writes into the Task's
merge request description, whatever the target branch (today `integration`,
including under a release's Task-PR exemption, where `gate --task TK-### --spec
S-###` reports the Task-PR form):

1. **Can this merge into the branch it targets?** Name the target branch, the
   exact `BASE_SHA` and `HEAD_SHA`, the checks run and their results, conflict
   or rebase state, and what was not verified.
2. **Did this complete the Task, or is more needed?** Start with `Complete`
   or `New Task is needed: GAP`, naming achieved work and unmet requirements.
   `Task continues` names only repair within the current run. A later
   implementor run gets a new bounded Task from the Spec's orchestrator after
   [reconciliation](../to-tasks/sizing.md). Never call incomplete acceptance done.

The Dispatcher, Director or next agent working in the Spec validates those
answers against the diff and the merge checks, and merges when they hold and the
merge is green. No separate-context review runs on a Task merge, and the Worker
does not request one. A rebased Task reruns affected checks for changed content or dependencies;
unchanged evidence remains valid for the content it covers. It needs a fix only
when Check or QA raises an issue, and never a separate Task Review.
Separate-context review belongs to the assembled whole: at the declared
integration branch (`git.integrationBranch` in `workbench/manifest.json`), the
Spec at its Verify step, obtained with `report S-### --candidate <sha>`, bound to
its content digest and recorded with `verdict`, by a fresh context of the session's own agent
provider (another provider only when the owner tells you, in the current
request, exactly what to do with it). Review decides whether another Journey is
needed: a failed Review goes back to Map, Plan and Journey under the still-open
Spec. Repair only authorized findings, create a new truthful checkpoint, and
the next assembled candidate gets one fresh review. Do not call an intermediate checkpoint, a Task
merge or a green self-review a Verify PASS.
