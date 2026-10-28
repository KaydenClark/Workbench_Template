---
name: grill-me
description: Start a saved design inquiry, keeping sourced answers, pending readbacks and corrections in the topic Wiki while running the grilling interview. The endpoint remains what the owner authorized.
disable-model-invocation: true
---

Call the Skill tool for [`grilling`](../grilling/SKILL.md) for the interview and
call the Skill tool for [`jot`](../jot/SKILL.md) for continuity. Read both before asking the first
question. This entry adds no authority or new knowledge store.

## Bind the topic

Read `workbench/manifest.json` and the relevant Wiki route, then retrieve the topic's existing
claims and corrections. For missing local context, bounded `jot search` may
include private jots only within the same approved local access. Read a
referenced legacy JSON note through the `notepad` compatibility route. A new
ordinary inquiry uses its shared Wiki topic by default, with source review and
authorized integration publication. Explicit private capture stays local.

Retain stable question IDs and the smallest useful decision map. Distinguish
`open`, `tentative` and `locked` questions; a locked label alone proves nothing.
Capture the ready question, relevant sources and resume action before their loss
would impair continuation, without creating a second inbox or copying controls.

## Ask, read back, capture

Follow grilling's Each decision, in order. Preserve the owner's answer and the
pending readback promptly as sourced `intent` with `state: unresolved`, retaining
its question ID. A linked correction appends through `jot correct --supersedes ID`;
keep the revised readback pending until the owner confirms it.

On explicit confirmation, append the sourced confirmed intent and its rationale,
linking the pending claim it supersedes. Update the question map and next
relevant action, then continue. Capture does not settle an answer; confirmed
intent neither implements it nor makes it Canon. Confirm the write succeeded
and use its returned revision before another write.

## Resume and exit

On cold start or interruption, read the relevant topic claims, supersession and
sources, then verify current controls and live state. Resume a pending readback
before asking the next question; do not re-ask a sourced locked answer.

The endpoint is the exit the owner names: preserve, promote, specify, hand off
or execute. Before voluntary exit, check completeness: owner answers, pending
readbacks, corrections, unresolved questions and next action match what happened.
This final check complements timely capture.

For authorized decision publication in LLM Workbench, use the confirmed
settled-decision readback and the owner's publication request. Preserve each
decision's question ID, exact source, revision, rationale, corrections and
endpoint in its Wiki topic. The assigned agent may call the Skill tool for
`promote-decision` once per decision directly or delegate using those pointers
and the project root through the `AGENTS.md` Skill Map route. It stops after
Record and checked integration publication. Prepare a capability through Map
and Plan only when that separate endpoint is requested; start Journey only
with implementation approval. Preserve partial progress in a PR with its
unfinished status clear. Keep unfinished questions in the inquiry. Other rooms
retain the core compositions; the maintainer operation is available only where
the manifest declares it.

## Compatibility

Existing JSON inquiries and project-evidence/genesis adapters retain their
schema, stable question IDs and safe reader/writer operations through `notepad`.
The Board's structured private answers retain their domain datastore. Preserve
original sources, history and access; this route never copies private contents
into tracked Wiki or changes installed personal skills.
