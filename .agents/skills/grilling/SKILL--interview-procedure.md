# Full procedure

[Grilling entry](SKILL.md). Use the sections relevant to the assigned operation.

## Purpose


Inherit both mandatory owner judgments under [authority and continuation](../implement/execution-authority.md): explicit confirmation before leaving Explore and explicit execution approval before leaving Prepare. Reuse their sources within scope; delegation and this skill grant neither.

This is the core interview primitive. It asks, investigates, challenges and
synthesizes until we share one understanding, then stops. Pending answers never
enter canonical files during the interview. For explicitly confirmed vocabulary, call the Skill tool for [domain-modeling](../domain-modeling/SKILL.md#update-glossarymd-on-confirmation)
to write it to the vocabulary owner in the same session. Core `promote` owns
other reconciliation after the user selects that endpoint; execution is separate.

Grill the user relentlessly about every aspect of this until we reach a shared
understanding. Walk down each branch of the decision tree, resolving dependencies
between decisions one-by-one. For each question, provide your recommended answer.

Ask the questions one at a time, waiting for feedback on each question before
continuing. Asking multiple questions at once is bewildering.

If a fact can be found by exploring the environment (filesystem, tools, etc.),
look it up rather than asking me. The decisions, though, are mine — put each one
to me and wait for my answer.

## Each decision, in order

1. **Ask.** Put the most consequential question on the ready frontier to me as
   Question / Recommended answer / Why / Impact: what is being decided, what
   you recommend, your reasoning, and what choosing it would change. Look up
   available facts first.
2. **Wait for my answer.** Silence never confirms a recommendation, and a
   recommendation I did not choose is never recorded as my answer. My meaning
   wins where it differs from yours.
3. **Read it back, pending.** Restate my actual answer as
   Question / Answer / Why / Impact and say it is pending until I confirm it.
   Keep my stated reason separate from anything you inferred. A pending
   readback asks no new design question; clarifying this decision is fine.
4. **Confirm or correct.** When I correct the readback, give a revised readback
   and wait again. Only my explicit confirmation, in ordinary words, locks the
   decision; there is no special command to learn.
5. **Lock, update the map, continue.** After confirmation, lock the decision,
   update the decision map, write any explicitly confirmed vocabulary through
   `domain-modeling`, and only then ask the next question.

A batch of answers gets the same readback. When I answer several questions at
once, read every answer back as pending in one reply and lock none of them
until I confirm. An agent recommendation is intent too: my "yes" confirms it as
written, and anything you add to it is new intent that needs its own readback.
The rule is the same outside an interview: confirmation is what moves a claim
from Intent into Enduring Context, so read a claim back before any change puts
it on that plane or above. A review surface whose items carry their own Confirm
control is the one exception: pressing Confirm is the confirmation, and a
correction or a note sends the item around again until it is confirmed.

## The decision map

Keep a working map of the major branches, their prerequisites, open
assumptions and the ready frontier: the decisions whose prerequisites are
already locked. It is a provisional map that grows and prunes, not a
questionnaire written up front. After each lock, recompute the frontier, drop
branches the answer made irrelevant, and show me the compact change when it
matters.

Reopen a locked decision only for a named changed premise, new contradictory
evidence or my correction. Name what changed, reopen only the dependent
decisions it affects, and keep every unaffected locked answer as it is.

At a branch boundary or a material change, explain how the locked decisions fit
together as one account, not a transcript.

## Finishing honestly

An empty frontier is not proof of a shared concept. Before any transition to
specification or execution, give a final concept readback in the same
Question / Answer / Why / Impact form covering: the problem, the intended user
and experience, scope and exclusions, the important concepts and boundaries,
the consequential tradeoffs, and one concrete scenario. Name any unresolved
choice or missing evidence that could still change the concept. Do not act on it until I confirm we have reached a shared understanding, and do
keep other canonical changes at their selected endpoint; confirmed vocabulary
follows the narrow glossary-write rule above.

The vocabulary owner `ARCHITECTURE.md` routes to supplies accepted meanings, and
the `domain-modeling` and `wayfinder` skills may challenge a concept or narrow
an oversized inquiry, all within the caller's authorization. Explicit confirmation of a definition authorizes its vocabulary write, not
implementation, other Canon changes or publication.

## Saved context (composed, not built in)

Call the Skill tool for [`jot`](../jot/SKILL.md) when losing meaningful interview context would
impair continuation, following AGENTS Session Records. Resolve the Wiki lane through
`workbench/manifest.json`. Capture a small sourced
claim in the existing Wiki topic while it is fresh, then continue. New project
context uses shared capture by default, with source and exposure review before
capture and inclusion in authorized integration publication. Explicit private
capture stays local; legacy sources retain their access boundary.

Preserve stable question IDs and the decision map. Statuses remain `open`,
`tentative` and `locked`; dependencies can branch with IDs such as `2A` and
`2B`. Pending owner answers and readbacks are `intent` / `unresolved`. Append
linked corrections; on explicit confirmation record sourced `intent` /
`confirmed`, linking the pending claim. A locked label alone proves nothing.
Keep owner reasons distinct from agent inferences and preserve the next action.

Read the topic revision before writing, verify success, and use the new revision
for the next update. At voluntary exit check completeness and source fidelity;
this complements timely capture. Wiki knowledge establishes neither Canon nor
implementation and grants no permission.

### Existing structured adapters

The following project-evidence/genesis route still uses the legacy JSON schema
and `notepad` compatibility operations. Existing structured inquiries and the
Board answer store retain their originals, question statuses and private access.
They do not force ordinary fresh Wiki capture back into a separate store.

For a project-informed Blueprint grilling, prepare the note through the
project's installed evidence seam instead of copying source text into chat or
hand-authoring provenance:

```bash
node workbench/tools/project-evidence.mjs prepare \
  --project-root PROJECT --input REQUEST.json --note TOPIC-YYYY-MM-DD
```

The disposable `project-evidence-request-1` JSON request names the project and
objective, then carries explicit `evidence` items with stable IDs, project-relative
source paths, optional line ranges, `fact` or `uncertainty` classifications and
the caller's statement. Its `questions` carry stable IDs, question text, a
recommendation and the evidence IDs that prompted them. Do not supply answers
or statuses: the tool refuses them and creates every question `open`. It checks
ordinary in-project source files, hashes the observed bytes, privacy-scans all
new material and atomically creates one `PROVISIONAL` grilling note. The stored
fact/uncertainty labels remain caller assertions; the source path and hash prove
which bytes were observed, not that a statement's meaning is true. Read the
returned note and revision before questioning. The prepared note replaces the
create step and seeds the initial map; continue through the same runtime.

## Resuming after a compaction or model switch

After compaction, token exhaustion, Stop, or a model switch, read the relevant Wiki claims and linked corrections (or the referenced legacy
notepad), verify the current Contract and relevant live state, and continue from
the ready frontier. An unresolved Wiki intent or legacy answer still pending in `current.unresolved` resumes
with its readback, not with the next question. Never re-ask a `locked` question. File availability alone does
not prove successful recovery.

## Exits

An explicit user direction to pause, preserve, promote, specify, hand off or
execute ends or changes the interview; no magic slash command is required.
A passing mention does not. Never continue questioning after Stop.

- Preserve or pause: call the Skill tool for `jot`; keep open questions and next action.
- Promote settled claims only: call the Skill tool for `promote` within that endpoint.
- Promote a confirmed decision in the LLM Workbench: after the session's final
  confirmed readback, call the Skill tool for `promote-decision` with its source, ID and confirmed revision, reached through the room's `AGENTS.md` Skill Map. Run each decision
  separately; its nearer endpoint stays narrow and pending answers stay pending.
  This maintainer operation is available only where the manifest declares it.
- Create specifications only: call the Skill tool for `to-spec` within that endpoint, after the
  confirmed final concept readback.
- Prepare another agent's continuation: call the Skill tool for `handoff` as Markdown, with
  the exact requested job and retained correction context.
- Build the agreed scope: call the Skill tool for `carry` only within the
  execution actually authorized by the user.

Before a voluntary exit from a saved session, validate and read back the
current note, checking that locked answers, pending readbacks, corrections,
unresolved work and next action are faithful. Never depend on another write
after an immediate interruption. Successful capture is a confirmed runtime
result; a planned write is not saved context.
