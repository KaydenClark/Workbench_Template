
# Evaluation Procedures

Use this section for evaluation procedures; [SKILL](SKILL.md) provides the surrounding context.

## Evaluation Procedures

Use these procedures to prove whether the workbench or project process is
improving. The goal is evidence, not taste. One harnessed job improves through
the loop above; a comparative claim needs the claims, design and trials below.
When the change affects a relevant measure or claims improvement, call the
Skill tool for `implement` for baseline and after-measurement using its
[benchmark-driven improvement](../implement/SKILL.md#benchmark-driven-improvement).

### Claims To Test

The harness or process is only worth calling better when it can support at least
one of these claims:

1. Better than no project instructions.
2. Better than a representative generic instruction file.
3. Better than the prior version on the same task suite.

### Evaluation Design

Use controlled conditions:

| Condition | What the agent gets | Purpose |
|---|---|---|
| `c0_none` | no project instructions | baseline |
| `c1_generic` | a generic `AGENTS.md` / `CLAUDE.md` style file | common alternative |
| `c2_current` | current project or template docs | current candidate |
| `c3_candidate` | proposed branch or changed docs | improvement test |

Score task outcomes, not how good the docs feel. Useful dimensions:

| Dimension | What it measures |
|---|---|
| Correctness | hidden or independent acceptance check passes |
| Scope adherence | changed files stay inside the task allowlist |
| Verification honesty | final claims match independently rerun checks |
| Docs upkeep | stale docs were updated or explicitly marked unchanged |

Run multiple trials per condition when using stochastic agents. Report effect
size and confidence interval when possible. Do not claim broad proof from one
run.

Real comparison runs may spend API budget. Size the run first and record the
model, conditions, task suite, trial count, and result path before making claims.

### Harness Feedback Loop

This project's `WORKBENCH_FEEDBACK.md` is the return channel to the upstream
harness. Lessons logged there feed harness changes, which must clear the same
bar as any other "better" claim: a proposed template change is `c3_candidate`
above, tested against the current docs on the same task suite before it ships.
Feedback flows out; validated improvements flow back in as a harness upgrade
([Upgrading The Harness](../update-harness/SKILL.md#upgrading-the-harness) in
the `update-harness` skill). Taste alone never closes the loop; evidence does.
