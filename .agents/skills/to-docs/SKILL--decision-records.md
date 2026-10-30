
# Decision records

Use this section for decision records; [SKILL](SKILL.md) provides the surrounding context.

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

Both kinds answer the five read words the glossary defines, and reads never
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
