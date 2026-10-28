---
name: to-docs
description: Route settled conversation truth into existing Workbench documentation owners without restarting discovery or creating another store.
---

# To Docs

Persist an already-settled conversation. Do not start a new interview. First
state the proposed destinations, then update only owners whose durable truth
changed.

For `promote-decision`, record the assigned decision's source, confirmed
meaning, rationale, corrections and status, then publish within its endpoint.
This does not start Map, Plan or Journey. The selected claims primitive remains
[`promote`](../promote/SKILL.md); standalone `to-docs` keeps its requested
endpoint. Record may preserve proposals and partial progress without making
them Canon or complete.

For a v3 project, first read `workbench/manifest.json`. It declares the support
lanes; do not create a root `specs/`, project-local `skills/` core shadow, or parallel
truth store. Authorized room-local extensions follow the
[`workbench-runtime` skill](../workbench-runtime/SKILL.md#room-local-skills).

- accepted shared definitions -> `LEXICON.md`;
- what the product is, who it serves, its promised outcomes and its
  non-goals (the Blueprint's four parts) -> `BLUEPRINT.md`;
- capability requirements, decisions, acceptance, proof, or completion -> the
  assigned `SPEC.md`;
- active assignment, blocker, event, or next gate -> update the owning spec,
  then run `node workbench/tools/spec-workbench.mjs render` for `TASKBOARD.md`;
- workflow lookup -> `RUNBOOK.md`; detailed procedures -> the existing owning
  skill; room setup -> `README.md`; executable room commands -> manifest legibility;
- human-facing orientation and setup -> `README.md`;
- agent authority, scope, safety, or required behavior -> `AGENTS.md`;
- durable knowledge, reference explanations, and stable personal, project, or
  machine memory -> the canonical wiki owner (`workbench/wiki/`, per its
  `SCHEMA.md`), routed from `workbench/wiki/MEMORY.md`, never a copied live
  queue, task row or Spec evidence;
- rationale, alternatives, and consequences of a consequential decision -> an
  ADR in the manifest `adr` collection (`workbench/docs/adr/`) whose
  `canonicalized_in` names operational owners. Active accepted decision claims
  are architectural Canon; do not duplicate the rule merely to make it bind.
- a consequential destination choice, what the finished product must be or do
  and why (it would still hold if the architecture were rebuilt) -> a
  Destination Decision Record written into the `ddr` collection's `proposed/`
  folder with `node workbench/tools/adr.mjs new --kind ddr --title "..."`. Its
  `canonicalized_in` names the owners that carry it, `BLUEPRINT.md` when it
  changes or contradicts the Blueprint, and never the Wiki. One decision that
  needs both records gets both, linked rather than merged.

Route each claim once. Split a mixed finding into its claims and give each
exactly one owner by its job: a procedure step to its operational owner, a
definition to the Lexicon, a requirement or proof to the Spec, an explanation
to the Wiki. When another owner needs the claim, link to the owner that holds
it rather than copy it; a Wiki reference article explains why and links the
procedure instead of restating its steps. Never paste the whole finding into
every owner it touches.

Route only supported claims. Wiki jots retain labeled intent, proposals and
unresolved questions with source and correction history; a confirmed intent
is not implementation proof or Canon. Keep pending or disputed meaning labeled
in its topic Wiki. For legacy JSON sources, a `source_record` whose readback
is still listed in `current.unresolved` remains pending; only a `decision`
entry records a confirmed owner answer. Cite durable owners and exact commits as evidence, never an ignored
live path such as a note, handoff or recovery file. Update Spec state at
meaningful transitions and append evidence rows; do not copy conversation,
working notes or superseded interim states into permanent Spec history.

If capability truth needs a new spec and none is assigned, route to `/to-spec`.
Do not create an ad hoc document or another truth store. Preserve append-only
evidence and completed spec history.

Read each changed owner back and confirm each claim appears once, where its
job belongs. Run the owning documentation checks (for the Wiki,
`node workbench/tools/wiki.mjs validate` and the [Wiki lint](#wiki-lint) of the
touched pages). For a spec-backed change, finish with
`node workbench/tools/spec-workbench.mjs render` and
`node workbench/tools/spec-workbench.mjs doctor`. If no owner changed, report exactly
`Docs checked; no update needed` with the reason.

## Finding the owner of a question

1. Use [LEXICON -> Artifact Ownership Schema](../../../LEXICON.md#artifact-ownership-schema)
   to identify the job: permission, meaning, destination, work state, proof,
   procedure, recovery or another listed responsibility.
2. Follow the named owner and resolve installed paths through the manifest.
   Consult only the relevant section and its linked sources. For a work-state
   question, follow the Taskboard row to the owning Spec before editing.
3. Separate the answer's status: accepted requirement, verified observation,
   proposal, unresolved question or historical claim. Apply AGENTS State
   Resolution if sources disagree; file location alone does not settle it.
4. When authorized work changes the answer, update its owner and refresh any
   derived view. If the route is missing, use bounded search and repair that
   route in scope. An unresolved decision stays in the existing work owner or
   objective note; a missing answer does not authorize a new task.

For example, a failed test has several owners: the Spec defines the expected
behavior, the source implements it, the result records the failure, and the
Spec records any resulting blocker. A Wiki explanation may clarify the cause;
it does not redefine acceptance. After interruption, the
[`implement` skill](../implement/SKILL.md#recovery-and-rollback) supplies the
recovery procedure while the Spec, source and saved context supply what to
recover. Execution and recovery therefore remain separate jobs.

## Citation anchors

The room's `AGENTS.md`
[Documentation Ownership And Proof](../../../AGENTS.md#dev-environment-tips)
keeps the rule that a citation into a file that changes must say which tree it
reads at; this is how to anchor one.

Every merge into the integration branch moves line numbers, so a bare
`path:line` written against a branch tip points at unrelated content once that
branch lands. Either anchor the citation itself with `git show <sha>:path`,
which is absolute and never needs re-anchoring, or declare the spec's anchors
once near the top:

> **Citation anchors.** pre=`<sha>` post=`<sha>`.

A label immediately before a citation names its tree and wins: "shipped `:M`"
reads at `post`, "base `:N`" at the sha of the `git show` anchor that introduced
the path. Unlabelled, a citation reads at `pre` in Outcome, Why It Matters,
Current Verified State, Desired Behavior and Documentation Impact - all written
before the change - and at `post` in every other live section. The shorthand
`` `:N` `` reads against the nearest path already in scope; a shorthand without
a scoped path is invalid. Evidence rows read at the commit each row names and
are never re-anchored, because they are append-only.

## Decision records

Decision records live in the manifest-declared `docs/adr` collection
(`workbench/docs/adr/`). An active accepted ADR decision is architectural Canon; rationale and history
remain distinct. `canonicalized_in` names operational owners, which must exist.
Whole-record supersession names one valid successor filename, resolved by
record name across the lifecycle folders; deprecated records require a durable
`deprecation_reason`. Lifecycle is the record's folder: the top level is the
active accepted roster, `proposed/` holds records not yet Canon, and the
permanent `archive/` holds superseded and deprecated records with bodies
untouched; a leftover `status` key is accepted only when it agrees with the
folder and otherwise reported as `disagreeing-status`. Default `REGISTER.md`
shows active accepted decisions, and `HISTORY.md` preserves all lifecycle
states. Register regenerates
both projections without rewriting decision bodies.

A confirmed readback settles meaning. With authority to record the decision,
author it faithfully in its existing owner, preserving whether it is a
proposal or accepted decision. Confirmation or publication alone never changes
that status. Reconcile corrections before accepting a proposed record; the
owner's approval may authorize both recording and implementation, but record
those judgments separately. Acceptance and implementation remain distinct;
retain any implementation gap in its work owner.

```bash
node workbench/tools/adr.mjs new --title "Decision title"
node workbench/tools/adr.mjs new --kind ddr --title "Destination decision title"
node workbench/tools/adr.mjs validate [--kind adr|ddr]
node workbench/tools/adr.mjs normalize [--kind adr|ddr] [--date YYYY-MM-DD]
node workbench/tools/adr.mjs register [--kind adr|ddr]
node workbench/tools/adr.mjs accept DDR-####
node workbench/tools/adr.mjs supersede ADR-#### --by ADR-####
node workbench/tools/adr.mjs deprecate DDR-#### --reason "Why it ends"
node workbench/tools/adr.mjs list [--kind adr|ddr] [--status STATUS] [--json]
node workbench/tools/adr.mjs show DDR-#### [--json]
node workbench/tools/adr.mjs search "query" [--kind adr|ddr] [--json]
node workbench/tools/adr.mjs history ADR-#### [--json]
node workbench/tools/adr.mjs inspect DDR-#### --field canonicalized_in | --lines 1:12 [--json]
node workbench/tools/adr.mjs migrate-folders
```

The lifecycle moves work for both kinds; the identifier's `ADR-` or `DDR-`
prefix selects the collection and resolves case-folded across its folders.
`accept` moves a `proposed/` record to the top level once its corrections are
reconciled, and refuses a record that would be invalid as accepted (no date or
title, no or a nonexistent `canonicalized_in` owner, or a DDR naming the Wiki).
`supersede` archives an accepted top-level record under exactly one accepted
top-level successor of the same kind: the replaced record gains
`superseded_by`, the successor's `supersedes` list gains the replaced record,
and zero or several successors, a proposed or archived successor, a successor
of the other kind, or the record itself are refused. `deprecate` archives an
accepted top-level record with a one-line `deprecation_reason` and refuses an
empty reason. Each move drops a leftover `status` key (the folder is the
lifecycle), refuses a dirty Git tree so the candidate shows only the move,
records the move as a `git mv` rename (a plain rename outside Git), rewrites
live Markdown links to the moved record across the root controls, Wiki, skills,
team templates, Grill Board README, both decision-record collections and every
Spec and Task record. When the record's directory changes, its outgoing relative
links are rebased too, including links to an unmoved `GLOSSARY.md`, Spec or Wiki
page; query strings, fragments and URI encoding are preserved. Root reference
repair includes `GLOSSARY.md` when present and `LEXICON.md` in unmigrated rooms.
Each move leaves and counts references inside append-only evidence
sections, regenerates both registers and stages the result. A refused move
writes nothing. No separate approval ceremony is added.

Both kinds answer the five read words the Lexicon defines, and reads never
write. `list` gives the records that exist (both kinds unless `--kind` narrows
it, optionally one `--status`), one tab-separated line each with identifier,
status, date, title, path and, for a superseded record, its successor.
`show` prints one whole record; `get` is its synonym. `search` finds records
by a case-insensitive literal query over the whole file and prints each hit
with its status and matching lines; a superseded hit names the successor that
replaced it, and nothing else is attached. `history` gives how a record
changed: its lifecycle chain (`supersedes`, `superseded_by`,
`deprecation_reason`) and every Git commit that touched its file, followed
across lifecycle moves; outside Git it reports the chain and says Git is
unavailable. `inspect` gives part of a record: one `--field` (a frontmatter key,
or `id`, `kind`, `status`, `folder`, `title`, `path`) or a 1-based inclusive
`--lines` range, and refuses an unknown field or a span outside the record.
Every read takes `--json`; an unknown identifier fails visibly.

Destination Decision Records (DDRs) are the ADR's sibling for destination
choices, what the finished product must be or do.
The same tool serves both: `--kind ddr` selects the manifest-declared `ddr`
collection (`workbench/docs/ddr/`), the `DDR` visible identifier and the
destination template, and the layout and folder lifecycle are the ADR's.
`new --kind ddr` writes `<id>-<slug>.md` into `ddr/proposed/` with the keys
`date`, `supersedes` and `canonicalized_in` (default `BLUEPRINT.md`) and no
`status`, and refuses a room whose manifest does not declare the collection
(gain it with `workbench-layout.mjs migrate`). A DDR's `canonicalized_in` never
names the Wiki, at any lifecycle; validation reports that, and each ADR rule
described below applied to a DDR, as `invalid-ddr`. A DDR that changes or contradicts the
Blueprint names `BLUEPRINT.md` in `canonicalized_in` so the Blueprint is
updated with it; the validator cannot detect a contradiction, so that stays the
author's obligation. `validate`, `normalize` and `register` without `--kind`
act on every decision-record collection present; `register` then prints the
ADR result with the DDR result under `ddr`. Doctor carries DDR findings beside
the ADR ones, and the Spec and Task moves regenerate both registers.
`workbench-layout.mjs init` creates it; for a room stamped before it,
`workbench-layout.mjs migrate --project PATH` from the release checkout appends
each missing additive collection (`features`, then `ddr`) and changes no ADR
record or other manifest key.

`new` allocates the next number by scanning the collection and its lifecycle
folders and writes the record into `proposed/` with the standard sections and
no `status` key. `migrate-folders` is one-shot: on a clean tree it moves every
record whose frontmatter status implies a folder, strips the key, rewrites
every live Markdown link to a moved record across the repository and reports
the append-only references it left; it refuses a dirty tree and a second run. `validate` reports
`invalid-adr` for a missing frontmatter, an unknown status, a missing date or
title, an accepted record with no or a nonexistent `canonicalized_in`
target, a superseded record without `superseded_by`, or a duplicated number;
`untracked-provenance` for a link into the untracked `sessions/grilling` or
`sessions/handoffs` collections; and `stale-register` when the derived
`REGISTER.md` differs from the collection. `register` rewrites that derived
table. Doctor carries these findings for schema 2 projects; none blocks
selection, and the `adr validate` command itself exits 1 only on error
findings.

`normalize` is the explicit repair for a hand-authored record: it inserts only
the date a record is missing (lifecycle is the folder, so it never writes a
`status` key), never runs as a side effect of `validate`, never edits a body,
and lists every file it changed with the keys it inserted. It preserves the file's own
line terminator, so a record on a CRLF clone does not gain LF-terminated keys.
An accepted record still needs a `canonicalized_in` owner only its author can
name; normalize leaves that record unchanged and `validate` keeps failing it.

Correct or expand the existing ADR
when refining the same architectural
decision; preserve its identity, rationale and consequential alternatives.
Create a new ADR only when it adds a valuable distinct architectural lens or
layer, with the reasons for that decision and real alternatives or reversal
cost. Binding rules stay in current owners. A semantic
review checks agreement; text presence alone cannot establish fidelity.
Portable record parsing treats LF, CRLF and CR as syntax variations; read-only
validation never normalizes files as a side effect.

## Wiki lint

Lint is a reading job an agent performs; no command does it, and
`node workbench/tools/wiki.mjs validate` (the
[`workbench-runtime` skill's Wiki Validation](../workbench-runtime/SKILL.md#wiki-validation))
keeps running on every change without replacing it. The obligation and its two
cadences are owned by [`AGENTS.md`](../../../AGENTS.md#dev-environment-tips)
and [`workbench/wiki/SCHEMA.md`](../../wiki/SCHEMA.md#lint); this section
is the checklist, not a second statement of them.

**Small lint, at the end of every Wiki update, on the pages it touched:**

1. Run `wiki.mjs validate`. The touched pages add no finding: properties,
   collection shape, relative links and sources are the validator's, not the
   reader's.
2. Read each touched page against the pages it links to and the pages that
   link to it. It contradicts none of them.
3. Every claim still has its source. A claim checked in this operation is
   stated plainly; an inferred claim says `Inference:`; a dated one says its
   date. `last_verified` moved only for facts actually checked
   ([SCHEMA Update](../../wiki/SCHEMA.md#update)).
4. The router `workbench/wiki/MEMORY.md` links the page with a one-line
   summary, and the summary still says what the page now says.
5. Every identifier on the page carries the artifact's name and a little
   context. Add what is missing; never strip an identifier.
6. Each truth lives once: the page links to its owner (Spec, decision record,
   Lexicon, Runbook) instead of restating it, and copies no live task state.
7. No concept the page mentions lacks a page or a Lexicon row it should have.
8. An article in `design-concepts/` or `features/` has its `History` line for
   this operation, and a design concept's `authorized_by` names it.

Repair what the update itself can fix on the same branch. A necessary correction remains in the current Task; a new outcome needs scope
authority. Record unresolved findings in the existing owner.

**At assembled Spec review:** run whole-Wiki structural validation and read
changed pages plus their affected inbound routes against the current controls.
Broaden semantic review where the changed contract affects more pages; ordinary
wording does not require rereading every article. Check source coverage,
current status, router summaries and contradictions within that affected set.
A green validator is not semantic proof. Keep necessary corrections in the
same Task and retain unrelated findings in their owners without inventing work.
