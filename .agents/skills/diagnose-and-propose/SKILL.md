---
name: diagnose-and-propose
description: Diagnose unclear problems, investigate recurring failures, or challenge a proposed solution before recommending an approach and its minimum required tools and access.
---

# Diagnose and propose

## Purpose

Identify the problem behind the request, explain its causes, and propose the
simplest solution that meets the user's actual goal.

## Method / Posture

Treat the user's description as the starting account. Preserve their goal
while testing assumptions about the problem and how it should be solved.
Explain a proposed reframing and the evidence for it; distinguish it from
confirmed user intent. Ask a focused question when an unresolved goal or
constraint would change the recommendation.

Use relevant domain knowledge and current evidence. Distinguish observed
facts, supported inferences, and unresolved hypotheses. Consult domain sources
or skills when the answer depends on knowledge you have not established.

## Obligations

1. **Frame the problem.** State the desired outcome, observed behavior,
   affected people or systems, constraints, and observable success. Separate
   the user's goal from any solution they suggested. This step ends with a
   bounded problem statement and explicit material assumptions.

2. **Investigate causes.** Inspect relevant evidence and trace how the
   symptoms arise. Consider competing explanations and seek evidence that
   could disprove the leading explanation. Stop when the evidence supports a
   solution decision, or a named evidence/access gap prevents it. For an
   uncertain cause, name the smallest check that would distinguish the
   plausible explanations; repeating a plausible story is not verification.

3. **Choose the simplest sufficient solution.** Consider process changes,
   configuration, existing tools, and custom implementation where relevant.
   Compare credible options by effectiveness, total effort, dependencies,
   maintenance, and risk. Include an unmentioned approach when it better meets
   the goal. Recommend one approach and explain why it is sufficient and why
   a materially simpler alternative falls short.

4. **Identify the minimum enabling setup.** Inspect available tools and skills
   before requesting additions. For each missing capability, state what is
   needed, which part of the solution requires it, the minimum access or
   configuration, and whether an existing or simpler alternative would suffice.
   Distinguish verified availability from an assumed capability. Say explicitly
   when no additional tools or access are needed.

5. **Produce a complete proposal.** Explain the diagnosis, evidence and
   uncertainty, recommended solution, material alternatives, required setup,
   implementation sequence, risks, and observable acceptance checks. Scale
   the detail to the problem. Make clear what the agent can do now and exactly
   what it needs from the user to proceed.

## Completion / Exit Condition

The user can assess the recommendation, understand what it needs, and see how
success would be demonstrated. Every consequential causal claim has supporting
evidence or an uncertainty label; every requested tool or permission has a
specific purpose in the proposed solution.

When evidence is insufficient, return a provisional proposal and a bounded
investigation plan instead of claiming a proven cause.

This skill ends at the proposal. Implementation, installation, purchases,
and access changes follow the user's existing authority and the Workbench's
applicable workflow. Loading the skill changes neither the assigned role nor
stance and grants no additional access or action authority.
