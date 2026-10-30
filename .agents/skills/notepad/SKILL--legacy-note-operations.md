# Full procedure

[Notepad entry](SKILL.md). Use the sections relevant to the assigned operation.

## Purpose


For ordinary fresh capture and focused cold starts, call the Skill tool for [`jot`](../jot/SKILL.md).
The procedures below apply only to preserved legacy records or a domain adapter
that still requires their schema. Preserve originals and access; this compatibility
route does not authorize private-to-tracked migration or routine source deletion.

A legacy notepad is the working context of one objective: what the owner directed,
what you found and where, what you corrected, what is still unresolved, and
what you would do next. It exists so that a fresh reader - you after a
compaction, another agent, another provider - can continue without the owner
reconstructing the conversation.

It is not evidence and not authority. A note never proves a claim, never
authorizes an action, and never overrides the Contract. On resume, obey the
current controls and verify live state; the note tells you what to look at, not
what is true.

`workbench/tools/notepads.mjs` owns the structure - schema, safe revision-checked
writes, discovery, bounded retrieval, dependency-preserving cleanup. This skill
owns the judgment: what is worth saving, and when it is safe to remove.

## 1. Create or resume before the context is only in the conversation

Read [1. Create or resume before the context is only in the conversation](SKILL--1-create-or-resume-before-the-context-is-only-in-the-conversation.md#1-create-or-resume-before-the-context-is-only-in-the-conversation) when working on this topic.

## 2. Save it when you learn it, not at closeout

Read [2. Save it when you learn it, not at closeout](SKILL--2-save-it-when-you-learn-it-not-at-closeout.md#2-save-it-when-you-learn-it-not-at-closeout) when working on this topic.

## 3. Retrieve the slice you need, not the whole history

Read one topic. The response carries the matched entries plus the corrections
and declared dependencies they cannot be read safely without, each marked
`match` or `context`:

```bash
node workbench/tools/notepads.mjs read --note NOTE --topic TOPIC --limit 20
```

`page` reports what matched, what was returned, and `next_cursor`. When
`has_more` is true, material was left behind deliberately - continue from the
cursor or say plainly that you read a slice. A bounded read never truncates
silently, so never report a partial read as the whole record.

## 4. Reconcile before cleanup, and preserve what is still needed

Call the Skill tool for `promote` for selected supported claims and call the Skill tool for `save` for their
actual persistence boundary. Promote into durable owners under existing
authorization - the assigned spec, a decision record in `workbench/docs/adr`,
the Wiki, a root control - and cite those owners, never the note. Then remove
only what has actually landed:

```bash
node workbench/tools/notepads.mjs trim --note NOTE --revision N \
  --entry ENTRY_ID --durable-owner workbench/specs/S-###-slug/SPEC.md
```

The link binds in both directions, and a trim that would break it either way is
refused as `retained-dependency`. Removing something a retained entry still
depends on is refused. So is removing a correction while keeping the claim it
corrects: that would leave the note as the only local record of a fact you
already knew was wrong, with nothing marking it superseded. Trim both halves
together once the correction has landed in its durable owner, or keep both.
That refusal is the mechanism doing its job; do not work around it.

For a requested handoff, call the Skill tool for `handoff`; author its Markdown
separately in `workbench/sessions/handoffs/` using the bundled `assets/HANDOFF.md`. It must be plain
English another agent can follow or the owner can paste into a new chat: name
the job, verified facts, one resume point, boundaries, and exact source paths.
Confirm destination access and retain source context until the needed material
is durable or otherwise safely available. Existing JSON handoffs are legacy
sources; do not create another one.

Declare active Markdown transfer dependencies through `current --view-field
'active_handoffs=["workbench/sessions/handoffs/NAME.md"]'` with the current
revision. Trim and delete refuse while this list is nonempty, even if the file
is missing; a missing destination cannot prove safe release. After verifying
that the transfer no longer depends on this note, explicitly clear the list
with `--view-field 'active_handoffs=[]'`. Undeclared prose dependencies remain
agent judgment; the tool does not infer them from Markdown.

Delete the whole record only when everything important is reconciled and no
unfinished work or active handoff still depends on it. After verified partial
trim, set `--status RECONCILED --unresolved "" --next-action ""` through `current`,
then run `notepads.mjs delete --note NOTE --revision N`. It refuses remaining
entries or active declared retainers. Named unreadable live records also refuse
cleanup until their dependencies can be established; preserve them while
reconciling the issue. This is normal cleanup -
no archive and no extra approval. Legacy Markdown sources and existing
checkpoints keep their own retention rules; do not rewrite one merely to change
its extension.

An interim `scope-1` record reads as it is and migrates once, carrying its
recorded text, timestamps, and every field its current view holds, before it can
be written to:

```bash
node workbench/tools/notepads.mjs migrate --note NOTE
```

## 5. Handoffs are authored, not exported

A handoff is a destination-specific compaction the owner requests. Author it
from the selected material, include the corrections and dependencies the
destination needs, and carry the content itself when the destination cannot
read the local note. Creating a handoff does not create work, a task, or a
follow-up assignment.

## Completion

The notepad is doing its job when a fresh reader can state the objective, the
current state, the unresolved work, and the next executable action from it -
and when everything it no longer holds is findable in a durable owner it names.

## Standing rules

Create or resume a local JSON notepad when meaningful objective work produces
context whose loss would impair continuation or a focused handoff. Trivial
conversation needs none. Preserve source fidelity, uncertainty, and corrections;
maintain a compact current view and an append-oriented work record. Templates
are examples, not a universal checklist. Notes neither authorize work nor prove
claims. On resume obey the current Contract and verify relevant live state.
Save important context promptly as work proceeds, before token exhaustion or
an owner pressing Stop can interrupt the conversation. Do not defer capture to
closeout or rely on a final write after Stop. This obligation covers saved local
context for conversation continuation, not computer crashes or device loss;
an interruption can still preempt an unsaved write.

Notepads, including grilling records, use JSON, including when older workflow
examples say Markdown. A note belongs to its objective, not to the chat that
created it: every context that can reach it resumes and appends to it, one
writer at a time (ADR-000L). Handoffs are separate human-readable Markdown (`.md`)
files: they give a receiving agent or a new chat plain-language instructions
for continuing one objective. Do not serialize a handoff as a JSON notepad.
The shared runtime is `workbench/tools/notepads.mjs`; its interchange schema
and reusable examples live in the manifest-declared `notepad-templates`
collection. The `notepad` skill owns judgment. New live records use typed
folders in the `notepads` collection; Markdown handoffs use `handoffs`.
Preserve legacy Markdown and JSON paths, but create no new JSON handoffs. Live
notes and handoffs stay untracked in project Git; explicitly configured private
synchronization may transport selected live collections under the accepted
continuity contract. Local operation remains independent of transport. Do not record secrets,
credentials, authentication/recovery material, raw private financial, medical,
or personal data, or unsafe tool output; retain only safe recovery references.

## Working context and the Landmark Tracker

When the Landmark Tracker capability is available, workflow activity maintains
current pre-delivery understanding in DQCs and landmark records, preserving
what changed, why, affected claims and evidence. The generated Tracker reflects
those sources. Grilling notepads remain useful historical and handoff-like
context; do not discard needed origins or corrections merely because a card
exists. Until that capability is delivered, preserve working context through
the existing notepad runtime. Confirmation of understanding never grants
implementation or promotion authority. The grilling primitive remains unaware
of Tracker machinery; workflow composition performs the record maintenance.
Wiki creation and updates are ordinary authorized delivery and reconciliation,
not a separate publishing ceremony. Apply claim-level ownership and the current
request throughout; no record or projection can manufacture authority.

### Landmark Tracker: accepted design and available operations

The Landmark Tracker distinguishes evolving concept understanding from delivery
state. DQCs and landmarks maintain the former; the generated Tracker displays
it; Specs and Tasks carry implementation and Taskboard projects their state.
The intended root is `workbench/landmark-tracker/`, containing generated
`TRACKER.json` and flat `destination-questions/` and `landmarks/` JSON records.
These paths are a delivery contract, not evidence of installed collections or
commands. Resolve availability from the actual manifest and verified runtime;
do not invent a Tracker invocation or use an existing command as its substitute.

Once implemented, workflow transitions and ongoing alignment maintain source
records with what changed, why and evidence. Keep original grilling questions
and corrections reachable. DQCs may precede a landmark, Spec, Task or known Wiki
destination; an answered question records Expected result, while Result records
achieved delivery. Assess the actual durable content before claiming Verified;
Task completion, article existence and structural validation alone are insufficient.
Keep live links current through supported move operations and retain immutable
citations for historical proof. Ignored notes require their own retention or
safe transfer until reconciliation; tracked Git history does not recover them.

A Landmark Wiki page is the landmark's evolving synthesis, updated whenever
one of its question cards changes. Identifiers on it, as on every Wiki page,
carry the artifact's name and context; the structured records keep
identity-bearing provenance and delivery evidence.
Ordinary feature explanations and cross-cutting design models retain their
respective Wiki purposes. Collection/schema support must be delivered and
verified before claiming those article types are available. Routine Wiki work
within an authorized assignment adds no independent publishing ceremony.

## Runtime reference

Read [Runtime reference](SKILL--runtime-reference.md#runtime-reference) when working on this topic.

## Continuing after a save or handoff

Saving context or authoring a requested handoff does not terminate a session.
Continue to the authorized endpoint. Preserve the complete original question
inventory and stable IDs/statuses/corrections; a compact view routes to retained
sources rather than replacing them. Multiple objective-linked notes are allowed,
with an unambiguous active resume route. Stale migrated discovery paths belong
in the existing ownership/migration assignment.
