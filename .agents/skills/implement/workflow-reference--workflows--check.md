
# Check

Use this section for check; [workflow-reference--workflows](workflow-reference--workflows.md) provides the surrounding context.

### Check

Defined in the [Glossary](../../../GLOSSARY.md) term **Check**.

**Steps:** Choose checks for the changed behavior and the claim -> run them -> read failures -> [Implement](workflow-reference.md#implement) the correction -> rerun the affected checks
([implement](SKILL.md#engineering-and-verification)).
For records and wording, check structure, links, status and source fidelity.
For behavior, run targeted red/green tests and the full applicable integration
gate; this room's full suite is `[FULL_TEST_COMMAND]`.
When the room has an `origin` remote, run
`git fetch --prune origin '+refs/heads/*:refs/remotes/origin/*'` before `doctor`, so
its `remote-id-collision` finding sees every remote branch tip; `doctor` itself
stays offline, and without the integration ref that check does nothing. A
Review finding seen twice becomes a new check through
[improve-harness](../improve-harness/SKILL.md#repeated-review-findings).

**Loop:** A failure stays in the same Task when fixing it serves the same outcome. Preserve partial progress in a PR with failed or missing checks stated; landing waits for its required checks. Reuse evidence only for the candidate and dependencies it covers.
