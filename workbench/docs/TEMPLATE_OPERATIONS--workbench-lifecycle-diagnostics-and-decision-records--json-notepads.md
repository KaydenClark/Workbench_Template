
# JSON Notepads

Use this section for json notepads; [TEMPLATE_OPERATIONS--workbench-lifecycle-diagnostics-and-decision-records](TEMPLATE_OPERATIONS--workbench-lifecycle-diagnostics-and-decision-records.md) provides the surrounding context.

### JSON Notepads

Visible note identifiers can be allocated without changing existing note paths:

```bash
node workbench/tools/notepads.mjs allocate --prefix N --objective OBJECTIVE_KEY --title "TITLE"
node workbench/tools/notepads.mjs read --id RETURNED_ID --view current
```

Choose the artifact type prefix explicitly (for example N for objective notes);
it is the prefix in the visible ID, not another identity field. Markdown
handoffs do not use the JSON-notepad ID allocator.
New note labels follow the same uppercase, width-four, letter-bearing artifact
policy in the [identifier procedure](../../.agents/skills/workbench-runtime/SKILL.md#visible-identifiers).
Allocation chooses the first unoccupied label, not a timestamp. Legacy numeric
and mixed-case labels remain readable; case-folded and leading-zero variants
reserve the same identity. No existing note is renamed by allocation.

`--id` resolves through the local inventory, including legacy records whose
filenames differ from their IDs. It refuses unmatched or ambiguous identifiers.
`--note` retains its original filename/path behavior; never combine the selectors.
Allocation skips occupied destination names even when their stored IDs differ.
Unreadable records or ambiguous IDs refuse identifier operations until their
inventory is reconciled; they are preserved. Ordinary `create --note NAME`
remains available for legacy named context. Allocation assumes one writer and
checks current records; it supplies neither a distributed lock nor an eternal
registry of deleted local notes. Active handoff retention still prevents source
cleanup. Durable spec/ticket/ADR behavior is described above.

New notepads are JSON. `workbench/tools/notepads.mjs` owns structural checks
and updates. A new layout declares `sessions/notepads/`: bare names create
`notepads/work/NAME.json`; explicit project-relative paths select another local
type folder. Handoffs are authored as Markdown (`.md`) in the declared
`handoffs` collection; they are readable continuation instructions, not JSON
notepads and not `notepads.mjs` records. The tracked `notepad-templates`
subcollection carries `notepad.schema.json` plus work and grilling JSON examples;
the portable Markdown handoff shape is bundled as `assets/HANDOFF.md` in the installed `handoff` skill; producer source also exposes `templates/HANDOFF.md`.
The schema describes new `notepad-1` interchange, while the runtime additionally
checks unique entry IDs, links and revision safety. Legacy `scope-1` reading and
migration remain supported without moving or regenerating source history.

Existing schema 2 rooms remain valid. From the clean release checkout run
`workbench-layout.mjs migrate --project PATH --version VERSION` to add the two
collections and seed examples with recorded hashes. This moves no old note,
preserves earlier provenance and the room version, and reports the layout source
separately. Existing adjusted examples are retained and reported by the seeded
document mechanism. Repeated migration reports `current`; use `seed-documents`
to refresh untouched seeded examples. Seeding verifies the clean release and
ordinary source, destination and receipt paths before writing or recording. An
asserted version must match the source checkout. Validation checks effective Git
ignore rules and already tracked live files in Git worktrees; outside Git its
`ignoreVerification` says `not-a-git-worktree`, and no tracking guarantee follows.
On a room without the new declaration,
bare note names still use the legacy grilling collection. Never rewrite legacy
Markdown merely to change its extension.

```bash
node workbench/tools/notepads.mjs list --objective KEY
node workbench/tools/notepads.mjs create --note NAME --objective KEY --title "TITLE" --focus "FOCUS"
node workbench/tools/notepads.mjs read --note NOTE --view current
node workbench/tools/notepads.mjs read --note NOTE --topic TOPIC --limit N --cursor N
node workbench/tools/notepads.mjs append --note NOTE --revision N --kind KIND --topic TOPIC --content "TEXT"
node workbench/tools/notepads.mjs current --note NOTE --revision N --state "STATE" --next-action "NEXT" --view-field NAME=VALUE
node workbench/tools/notepads.mjs trim --note NOTE --revision N --entry ENTRY_ID
node workbench/tools/notepads.mjs validate --note NOTE
node workbench/tools/notepads.mjs migrate --note NOTE
node workbench/tools/notepads.mjs delete --note NOTE --revision N
```

Only `--note` and the revision a write checks are always required. `list`
takes `--objective` or no filter at all; `read` takes `--topic`, `--entry`,
`--kind`, `--limit` and `--cursor`; `append` takes `--corrects`,
`--depends-on`, `--interpretation` and `--source-file`; `current` takes
`--unresolved` once per open item and `--view-field` for a field this workflow
keeps in the current view; `trim` takes `--durable-owner` to record
where the removed material now lives.

Kinds are `directive`, `source_record`, `finding`, `proposal`, `decision`,
`correction`, `verification`, and `blocker`. A kind names what a record is for
a reader; it never grants authority or verifies a claim.

1. Resolve the explicit objective or note first; related records share objective
   context. If no stronger signal exists, inspect the newest-created local note
   or handoff and check relevance before using it.
2. Preserve a compact current view (objective, state, unresolved work, next action)
   and ordered entries containing meaningful source text, findings, uncertainty,
   and corrections. Save important context as it becomes available, before
   continuing work that would leave it only in the conversation. Token exhaustion
   or Stop may prevent another write; do not wait for closeout. JSON strings may
   contain full prose. A workflow may keep its own field in the current view;
   `current` preserves it across an update.
3. After interruption, load relevant context and verify current controls and
   actual project state. File availability alone proves neither freshness nor
   successful recovery. Preserve significant work while it is underway.
4. For an owner-requested handoff, author a destination-specific Markdown
   compaction from the selected material in `sessions/handoffs/`. State the job,
   verified facts, exact resume action, boundaries, and source paths in plain
   language. Include needed corrections and dependencies. Carry the selected
   content when the destination cannot read the local note.
5. Before cleanup, verify that promoted material is present in its durable
   owner and that retained work can still be understood and resumed. Trim only
   reconciled material from a retained note; preserve unresolved context,
   corrections, and active handoff dependencies. Flush or delete the whole
   record only when all important material is reconciled and nothing still
   depends on it. No routine archive or extra approval is needed for this normal
   cleanup. Preserve legacy sources and existing checkpoints under their current
   retention rules.

`read --view current` returns the resumption view and the revision to write
against without putting entry history into the response. A topic read carries
the corrections and declared dependencies of what it selected, each entry
marked `match` or `context`, and reports `page.matched`, `page.returned`,
`page.has_more`, and `page.next_cursor`: a bounded read never truncates
silently, so never report a slice as the whole record.

Every write names the revision it read. A mismatch is refused as
`stale-revision` naming the current one, `create` refuses an existing name and
`append` an existing entry id as `duplicate-identity`, and a correction or
dependency naming material the note does not hold is refused too. New material
is privacy-scanned before it can reach the file; preserved history is not
rescanned, because an old record may legitimately quote a matching string.
A refused or failed write leaves the previous valid record unchanged.

An id is never reused. `append` remembers the highest number each id prefix has
reached in `extensions.entry_sequence`, and `trim` records the mark for what it
removes, so an id already cited in a durable owner cannot come back naming
different material after the entry that proved the number is gone.

`trim` removes named reconciled entries and refuses with `retained-dependency`
rather than breaking a link in either direction: removing material a retained
entry still depends on is refused, and so is removing a correction while
keeping the claim it corrects, which would leave the record asserting a fact
already known to be wrong with nothing marking it superseded. Trim both halves
together once the correction has landed in its durable owner.

A subcommand refuses any flag it does not recognise, naming the ones it does.
A dropped `--corects` would otherwise report a correction appended and write
an entry with no link at all. A workflow that keeps its own field in the
current view writes it with `--view-field name=value`, JSON when the value
parses as JSON and the raw string otherwise; `current` preserves it from then
on, and `state`, `unresolved` and `next_action` keep their own flags.

An interim `scope-1` record reads as it is and migrates once, preserving its
recorded text and timestamps, before it can be written to.

`sessions.mjs` keeps `scan`; legacy `checkpoint` invocation refuses new copies. Do not send a
JSON note through that copier and call its `.md` output a notepad operation.
Skill prose and human-readable projections may remain Markdown.
