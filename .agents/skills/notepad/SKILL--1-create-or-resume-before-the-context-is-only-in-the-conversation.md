
# 1. Create or resume before the context is only in the conversation

Use this section for 1. create or resume before the context is only in the conversation; [SKILL](SKILL.md) provides the surrounding context.

## 1. Create or resume before the context is only in the conversation

Meaningful objective work needs a note; trivial conversation does not. The test
is survival value: would losing this impair continuation or a focused handoff?

Resume by the strongest available signal - an explicit note the owner named,
then the objective key, then the most recently created local note - and check
relevance before using it:

```bash
node workbench/tools/notepads.mjs list --objective OBJECTIVE_KEY
node workbench/tools/notepads.mjs read --note NOTE --view current
```

`--view current` returns the compact resumption view and the revision to write
against, without putting the entry history into your response. Start there.
A note belongs to its objective, not to the chat, model or host that created
it:
resume the objective's note even when another context created it, and expect
entries you did not write. Create only when no reachable note already serves
this purpose for the objective; a purpose-distinct note, such as a grilling
record beside a work note, is linked through `related_notes`. If the
objective's note is unreachable from this host, continue from its Markdown
handoff and keep a local note under the same objective key that names it as
related, for later reconciliation:

```bash
node workbench/tools/notepads.mjs create --note NAME --objective OBJECTIVE_KEY \
  --title "TITLE" --focus "WHAT THIS NOTE IS FOR"
```

Live notes stay local and untracked, in a live collection `workbench/manifest.json`
declares. Bare names use `notepads/work/` on the new layout, or the legacy
grilling collection when that room has not migrated. Explicit relative paths
select other local JSON-notepad type folders. Handoffs are not JSON records:
write them as Markdown in `sessions/handoffs/`. Schema and examples under
`notepads/templates/` are tracked and cannot be live
notes. Never
commit one, and never cite one as durable evidence.

For a new visible identity, use `notepads.mjs allocate --prefix N` with the
same objective/title fields. The returned ID is the visible label and filename;
no second identity is added. New labels follow the shared artifact policy:
uppercase `0-9A-Z`, minimum width four, with at least one letter (`N-000A`).
Read an allocated or legacy visible ID through `--id ID`, even when its
existing filename differs; any spelling of the same identity (legacy `N-00A`,
`N-000a`) resolves to that one note, and legacy notes are never renamed.
Use `--note` for the original filename/path lookup. Use one writer, preserve
existing paths, and reconcile unreadable or ambiguous inventory before
allocating. The [`workbench-runtime` skill](../workbench-runtime/SKILL.md#visible-identifiers)
owns the full alphabet, width and collision rules;
neither an ID nor allocation grants authority.

Before dependent work, name the active note and returned revision in local
execution state, verify relevant Actuality, and correct any stale current view.
The current view carries no entries and no corrections: before relying on a
saved claim, read its topic (section 3) so any correction travels with it.
An unavailable runtime blocks the dependent capture operation; report it and
continue only independent work whose context can safely be preserved.
