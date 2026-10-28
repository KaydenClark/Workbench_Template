---
name: handoff
description: Prepare a short, scoped Markdown handoff for another agent or session.
---

Write one handoff tailored to the next session's focus, using the bundled
[shape](assets/HANDOFF.md). Save it in the manifest-declared `handoffs`
collection as Markdown.

Reference existing specs, plans, decision records (`workbench/docs/adr/`), issues,
commits and diffs instead of copying them. Include the exact job, authorized
endpoint, verified state, both owner judgments with sources, and one next action. Preserve corrections
and evidence limits. Redact secrets and private data; include only context the
recipient may access.

Include Suggested skills: name each needed skill and when to call the Skill
tool for it, or write “None”. If the host has no Skill tool, load its `SKILL.md`
and follow it. Suggestions grant no new authority.

## Transfer procedure

When saved context matters, call the Skill tool for `jot`; for legacy notes,
call the Skill tool for `notepad`. Keep source owners current and follow
[STARTUP reconciliation](../../../STARTUP.md#reconcile). Read the document as its recipient;
check sources, scope and next action. Return its path and the authorized next step.

Follow [workspace closeout](../implement/workflow-reference.md#workspace-closeout) before handing back.

## Author, recipient and shared context

Authorship does not authorize execution, sending, task creation or cleanup.
