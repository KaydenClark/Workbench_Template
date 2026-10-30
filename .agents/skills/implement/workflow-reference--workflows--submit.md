
# Submit

Use this section for submit; [workflow-reference--workflows](workflow-reference--workflows.md) provides the surrounding context.

### Submit

Defined in the [Glossary](../../../GLOSSARY.md) term **Submit**.

**Steps:** record the `receipt`, then commit and push the candidate ->
`close S-### --agent NAME`, `render` and `doctor`, and push that evidence
([implement](SKILL.md#worker-selection-implementation-and-hand-back))
-> open the merge request into the parent branch (today `integration`) with
the two [merge answers](SKILL.md#4-review-at-the-relevant-boundary).

**Loop:** the Dispatcher, Director or next agent in the Spec validates the
answers against the diff and merges when they hold and the merge is green;
otherwise the current run fixes its assignment or hands the remaining gap to
the Spec's orchestrator for a new single-run Task, after
[reconciliation](../to-tasks/sizing.md). Several validated Task PRs land one at a time through the merge train
in [Branch completion](../implement/SKILL.md#branch-completion):
each is brought onto the integration tip at its turn without a force-push,
its diff checked unchanged and its suite run on that head before it merges. A
rebased or updated Task runs its Journey again and never gets a Review of its
own.
