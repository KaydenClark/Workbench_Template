
# Wiki Validation

Use this section for wiki validation; [SKILL](SKILL.md) provides the surrounding context.

## Wiki Validation

The wiki lane is validated by its own runtime tool; doctor carries the same
findings for schema 2 projects, none of which blocks selection. That tool
reports wiki facts only. The two installed-state findings described under
Installed State The Harness Wrote below - `stale-seed` and
`unverified-provenance` - are not wiki facts and are emitted by `doctor`
itself, not by this validator; both are repaired with `workbench-layout.mjs`,
not with anything in the wiki lane:

```bash
node workbench/tools/wiki.mjs validate
node workbench/tools/wiki.mjs normalize [--date YYYY-MM-DD]
node workbench/tools/wiki.mjs move-note NOTE --to COLLECTION [--name BASENAME] [--retype TYPE] [--dry-run] [--json]
```

`invalid-note` covers a missing router, a missing required collection, absent
frontmatter, a retired `authority` property, an enum outside `type`,
`status`, `sensitivity`, or `knowledge_role`, a non-ISO `last_verified`, an
absolute or traversing `source_paths` entry, a duplicated note basename, and a
`design-concepts/` article that lacks `type: design-concept`,
`authorized_by`, `parent`, or its `Evidence and Sources` and `History`
sections, and a lexicon article (a note declaring `glossary_term:`) whose term
is not a `**Term**:` entry in the root `GLOSSARY.md`, that does not link that
file, or that sits in a room with no `GLOSSARY.md`; a page declaring no term
needs no glossary entry. `copied-task-state` flags generated-region markers or task rows
copied into a note; `secret-like-content` flags key blocks, tokens,
credential assignments, absolute home paths, host temp handoff lanes, and
email addresses in a `normal` note (the shared `workbench/tools/privacy.mjs`
patterns). `stale-note` is attention only. `room-brain-unrouted` (attention)
reports a root control that does not route back to the room brain: `AGENTS.md`
must reference the wiki lane path and `README.md` must reference `MEMORY.md`;
the message names the control lacking the route, and a room whose manifest
declares a different wiki lane path sees it until its controls name that lane.
`stale-stamp` (attention)
reports a wiki contract file (`SCHEMA.md`, `AGENTS.md`,
`design-concepts/README.md`) or the room brain whose `Generated from LLM
Workbench` stamp names a version other than the manifest's; the check is
version equality, not content freshness (that stays with `stale-note`), and a
file without a stamp names no version. `validate --genesis` fails the same
files with `version-mismatch`. Wiki contract files and the room brain carry the
stamp, so refresh the stamp when the harness is upgraded. An Obsidian vault
configuration is ignored when
present and never required.

`normalize` is the explicit repair for a note whose required properties are
missing. It inserts only what is absent, never edits a body, never overwrites a
declared value, keeps the file's own line terminator, skips `archive/`, and
lists every note it changed. Inserted values are the least-claiming the schema
allows: `status: partial` (completed mechanically, not verified),
`knowledge_role: derived`, a `provenance` line naming the normalization, the
note's own path as its `source_paths`, and `last_verified` set to the day
normalize ran. `type` is inferred from where the note lives (`MEMORY.md` ->
`memory`, `guidebooks/` -> `guidebook`, `design-concepts/` -> `design-concept`,
otherwise `meta`). Correct the inferred values by hand afterwards; a
design-concept article still needs its `authorized_by`, `parent`, and sections,
which normalize never invents.

`move-note` is the only way a note changes collection; never move one by
hand, because a hand move leaves every link to it dangling. `NOTE` is the
note's project-relative path inside the wiki lane and `--to` names a declared
collection (`design-concepts`, `features`, `guidebooks` or `archive`).
`--name` renames the note (a plain basename, no `.md`), and `--retype` changes
its `type` in the same move, which is how a per-Spec design-concept article
becomes a `feature` article. Run it first with `--dry-run`: it prints the plan
and writes nothing. The move rewrites every live Markdown link to the note,
recomputes the moved note's own outgoing links only where their text would no
longer resolve, and covers the root controls, the Wiki, the skills lane,
decision records, every Spec and Task record and the landmark records and
question cards. A reference inside a Spec's Append-Only Evidence And Execution
Log is history and is left as written, counted under `historicalReferencesLeft`
beside `referencesRewritten`. It refuses, and writes nothing, when the
destination collection does not accept the (re)typed note (`design-concepts`
holds `design-concept`, `features` holds `feature`, `guidebooks` holds
`guidebook`, `archive` holds any type), when the destination or its basename
is taken anywhere in the wiki, when the note is the router, a collection
`README.md` or contract file, has no frontmatter, or when a rename would
orphan an Obsidian `[[wikilink]]`. In a Git room a tracked note moves with
`git mv` and exactly the changed files are staged, so the candidate reads as
one rename with its link repairs. The move does not edit the note's body or
History; add the move to its History and, after a retype, the sections the new
type requires, then run `validate`. Plain-text path mentions that are not
Markdown links (a JSON inventory, a generated tracker) are not rewritten.
