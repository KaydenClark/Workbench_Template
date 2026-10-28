---
name: domain-modeling
description: Build and sharpen a room's domain model while choices are still upstream - challenge conflicting and overloaded terms, probe boundaries with concrete scenarios, check claims against source, and trace what a proposed name, boundary or relationship would touch before it settles. Captures labeled pending meaning in the topic Wiki and writes confirmed vocabulary into the glossary during the session; offers an ADR or DDR only when it qualifies. Use when reworking terminology or a concept, often beside grilling.
---

# Domain Modeling

Actively build and sharpen the project's domain model as you design. This is
the *active* discipline: challenging terms, inventing edge-case scenarios,
tracing what a choice will touch while it is still cheap to change, and
writing confirmed glossary definitions as they crystallise. (Merely *reading* the
vocabulary is not this skill: that's a one-line habit any skill can do. This
skill is for when you're changing the model, not just consuming it.)

It is a companion, not a dependency. The owner or a caller invokes it, often
beside [grilling](../grilling/SKILL.md) when something is being reworked;
grilling and the destination question-card flow complete without it.

## Where vocabulary lives

Read `GLOSSARY.md` when it exists, otherwise the room's current `LEXICON.md`:
until the glossary migration reaches a room, the Lexicon is its vocabulary
owner, and nothing here pretends otherwise. Glossary entries follow the
format in [GLOSSARY-FORMAT.md](GLOSSARY-FORMAT.md); a Lexicon keeps its own
row form until it migrates. Capability-local meaning and
acceptance live in the assigned Spec, richer explanation and examples in a Wiki
article routed from the Wiki's `MEMORY.md`, and decision rationale in the
decision-record collections `workbench/manifest.json` declares.

A single-context room keeps one root glossary. If a `GLOSSARY-MAP.md` already
exists, read it to find the context the topic belongs to, and ask when that is
unclear. Never infer or create a map, a per-context glossary or a new
decision-record collection: an apparent second context is a question for the
owner. Create no second glossary, terminology file or local decision-record
directory beside these owners.

## During the session

Ask one question at a time. When grilling owns the conversation, fold each
challenge into its question and pending-readback rhythm instead of stacking
questions.

### Challenge against the glossary

When the user uses a term that conflicts with the existing language in the
vocabulary owner, call it out immediately, quoting the definition and its file.
"Your glossary defines 'cancellation' as X, but you seem to mean Y. Which is
it?"

### Sharpen fuzzy language

When the user uses vague or overloaded terms, propose a precise canonical term.
"You're saying 'account': do you mean the Customer or the User? Those are
different things."

### Discuss concrete scenarios

When domain relationships are being discussed, stress-test them with specific
scenarios. Invent scenarios that probe edge cases and force the user to be
precise about the boundaries between concepts.

### Cross-reference with code

When the user states how something works, check whether the code agrees, and
read its tests as well. If you find a contradiction, surface it with the file
behind it: "Your code cancels entire Orders, but you just said partial
cancellation is possible. Which is right?" Name what you found in the
`AGENTS.md` State Resolution terms instead of letting either side win:

- **Agreement**: the accepted meaning and verified source say the same thing.
- **Documentation drift**: verified source is newer than the accepted text;
  the owning document needs correcting.
- **Implementation gap**: accepted Canon is newer than the source; the gap
  belongs in the owning Spec, not in a documentation edit that matches the code.
- **Unresolved contradiction**: the ordering is unclear (State Resolution's
  ambiguity), or the proposal differs from both. Say what each source claims
  and leave the choice with the owner.

### Trace consequences upstream

Before a proposed name, boundary or relationship settles, follow it to the
owners that would read it: the current vocabulary definition in `GLOSSARY.md`
or `LEXICON.md`, Specs and their acceptance lines, decision records, Wiki
pages, source identifiers and tests. For each, note what it would have to
change, or what it would silently mean instead. Put the few consequences that
could change the choice in front of the owner, with the file or line behind
each, while changing course is still cheap. Name each owner you list by its
path, and a test by its file and test name: "both test files" or "the tests"
names nothing. A Spec, decision record or Wiki page needs its path as much as a
source file does, because a title alone is nothing to open. Lead each listed
owner's line with its path, then its title or label. Do this in every trace,
including a later one that lists owners an earlier turn already named. This is
a bounded trace of the owners the choice reaches, not an audit of the whole
room.

### Update GLOSSARY.md on confirmation

Before confirmation, call the Skill tool for `jot` to keep pending
interpretations, proposed terms and linked corrections in the topic Wiki
([capture procedure](../jot/SKILL.md)).
Don't batch these up: capture them as they happen. Saving is not settling:
only the owner's explicit confirmation settles a meaning. An agent's
recommendation, silence or an unresolved contradiction is not confirmation.

When the owner explicitly confirms a term's definition, update `GLOSSARY.md`
right there, using [GLOSSARY-FORMAT.md](GLOSSARY-FORMAT.md).
Do not ask for a separate promotion approval or wait for the interview to end. This scoped glossary write is authorized by
confirmation of that definition. Confirmation of a different claim does not
settle a term the agent inferred from it.

Read the current vocabulary owner before editing; preserve unrelated entries
and concurrent changes. In an unmigrated room without a glossary, update its
existing `LEXICON.md` vocabulary owner in its current format rather than create
a competing glossary. Read back the saved entry and check its format and
relevant links. Keep the sourced confirmation and superseded wording in Jot;
private capture stays ignored and private source content needs specific
exposure approval before a shared write. If the write fails, retain the
confirmed claim and report the unsaved entry instead of claiming success.

This writes vocabulary only. Confirmation does not authorize implementation,
a Spec requirement change, a control change, acceptance of a decision record,
publication or a merge. Those follow their own scoped procedures, including
[`promote`](../promote/SKILL.md) and [`to-docs`](../to-docs/SKILL.md).

`GLOSSARY.md` should be totally devoid of implementation details. Do not treat
`GLOSSARY.md` as a spec, a scratch pad, or a repository for implementation
decisions. It is a glossary and nothing else.

### Offer decision records sparingly

Only offer a decision record when all three are true:

1. **Hard to reverse**: the cost of changing your mind later is meaningful
2. **Surprising without context**: a future reader will wonder "why did they
   do it this way?"
3. **The result of a real trade-off**: there were genuine alternatives and you
   picked one for specific reasons

If any of the three is missing, skip the record and say which test failed.

Choose the kind by the scope test: would the choice still hold if the
architecture were rebuilt differently? Yes selects a DDR, a destination choice
about what the product must be or do; no selects an ADR, an architectural
choice. Offering is not writing. For an accepted offer at Map, call the Skill tool for `to-docs`
to write it with the manifest-aware `adr.mjs` (the
[decision-record procedure](../to-docs/SKILL.md#decision-records)) in the
`adr` or `ddr` collection `workbench/manifest.json` declares (by default
`workbench/docs/adr` and `workbench/docs/ddr`).

## Workbench adapters

Each change from the upstream source, and why:

- **Description and trigger** rewritten around changing the model beside
  grilling, dropping upstream's "writing or editing a GLOSSARY.md, or recording
  or editing an ADR" trigger, because this skill writes explicitly confirmed vocabulary during modeling
  and offers decision records through the room’s existing procedure.
- **Upstream consequence trace** added, in the opening and its own section,
  because the owner's use of this skill is to see the downstream impact of a
  name or boundary while still upstream.
- **Capture in the Wiki and confirmed glossary writes** qualify upstream's
  inline update, because the owner requires explicit confirmation before a
  definition enters Canon. Pending meaning and corrections are captured as
  they happen; the confirmed definition is written during the same session,
  without a second promotion approval.
- **Vocabulary owner routing** replaces upstream's file-structure trees: it
  reads `GLOSSARY.md` when present and the current `LEXICON.md` otherwise, and
  names the Spec, Wiki and decision-record owners, because the glossary
  migration reaches rooms separately and a missing glossary must not be
  invented. For the same reason the opening reads "the vocabulary" and the
  glossary challenge reads "the vocabulary owner" where upstream names
  `GLOSSARY.md`, and the link to the glossary format moves into this section.
- **No lazy file creation**: upstream's rule to create a glossary or ADR
  directory when first needed is dropped, because an unmigrated room already has a vocabulary owner; this skill
  updates that owner rather than create a glossary beside it.
- **One question at a time inside grilling's rhythm** added, because stacked
  challenges break the question and pending-readback rhythm the owner answers
  in.
- **Quoting the definition and its file** when challenging a term, and naming
  the file behind a code contradiction, because the owner checks a challenge
  against its source rather than a paraphrase.
- **Reading tests as well as code** in the cross-check, because tests state
  behavior too, and a contradiction there is as real as one in source.
- **State Resolution classes** name the code cross-check results, because the
  room already classifies source-versus-Canon disagreements that way.
- **ADR or DDR by the scope test, through `to-docs` and the manifest
  collections**, replaces upstream ADR files and their format (so "Offer ADRs
  sparingly" becomes "Offer decision records sparingly"), because the room
  keeps two decision-record kinds in declared collections with one writing
  procedure.
- **Saying which test failed** when a record is skipped, because the owner can
  then see why a choice did not earn a record and challenge that judgement.
- **A companion, not a dependency**, because grilling and the question-card flow
  must complete without it.
- **One vocabulary owner**: no second glossary, inferred context map or local
  decision-record tree, because a parallel store splits the room's meaning.
- **Form**: lines are rewrapped, and this section and Source and credit are
  added, because every room that installs the skill must see each change and
  its credit beside the method; the remaining wording is upstream's.

## Source and credit

Adapted from Matt Pocock's `domain-modeling` skill in `mattpocock/skills`
(MIT), at revision `d81f3a183412e71a5b1e84ca21bc1a35eea03a60`
(`skills/engineering/domain-modeling/SKILL.md` and `GLOSSARY-FORMAT.md`). The
glossary format is kept verbatim in [GLOSSARY-FORMAT.md](GLOSSARY-FORMAT.md);
the upstream decision-record format is not carried because `to-docs` owns it.
[NOTICE.md](NOTICE.md) in this directory carries the upstream copyright and
MIT permission notice, and travels with the skill into every room.
