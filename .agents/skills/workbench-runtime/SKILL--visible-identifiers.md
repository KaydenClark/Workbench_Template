
# Visible Identifiers

Use this section for visible identifiers; [SKILL](SKILL.md) provides the surrounding context.

## Visible Identifiers

```bash
node workbench/tools/spec-workbench.mjs next-id --prefix S --json
node workbench/tools/spec-workbench.mjs next-id S-### --prefix TK --json
node workbench/tools/adr.mjs new --title "Decision title"
node workbench/tools/notepads.mjs allocate --prefix N --objective OBJECTIVE_KEY --title "TITLE"
node workbench/tools/spec-workbench.mjs widen-id S-###
node workbench/tools/spec-workbench.mjs widen-id TK-### --spec S-###
```

`next-id` is a read-only proposal, not a reservation or permission to create work.
Task proposals require the assigned spec and reserve labels from all specs in
the Workbench. Both proposals also reserve retired and discarded labels and
every Spec and Task ID held at a remote-tracking tip, so fetch first. Write the
returned label only during authorized planning, then render and run doctor
before requesting another. ADR `new` (and `new --kind ddr` for a DDR) writes a
proposed record through the existing exclusive-publication path and also
reserves that kind's labels held at every remote-tracking tip. Notepad `allocate` creates the note its returned ID names.

Specs, Tasks, ADRs and notepads share one artifact policy: a new label's suffix
uses uppercase `0-9A-Z`, has minimum width four and contains at least one
letter (`S-000A`, `TK-000A`, `ADR-000C`, `N-000A`), so it cannot reuse a
historical decimal ID that is no longer present. Width grows without truncation
or recycling. Every spelling of one identity is reserved: suffixes compare
case-folded with leading zeros removed (the collision key), so a legacy short
`S-00Q`, its widened `S-000Q` and a lowercase `S-00q` are one identity and are
never allocated twice. Sorting removes leading zeros, then orders by suffix
length and then by `0-9`, `A-Z` and legacy `a-z`, independent of locale; it is
label ordering, not creation chronology. Letter-bearing task labels are unique
across the room; legacy numeric task references retain their existing
spec-qualified scope and are not claimed globally unique.

Existing records keep their stored IDs, paths and bytes; allocation never
renames them. Public Spec and Task commands (`show`, `claim`, `close`,
`move-spec`, `move-task`, blockers, the `next-id` parent and the other
selectors) accept any spelling that shares the stored record's collision key
and act on that one record, reporting its stored ID and path. Task selectors
stay Spec-qualified. Two stored records behind one key, including an active
record and a retired one, refuse by name rather than choosing a winner.
Notepad `--id` resolves the same way, and ADRs or notes whose records alias
one identity refuse allocation.

`widen-id` is the explicit identity-only touch. An agent starting substantive
work on a planned, active or blocked Spec, or on an open Task record under one,
runs it once from a clean tree to widen that record to the width-four spelling
of its own collision key (`S-00Q` to `S-000Q`, numeric `TK-001` to `TK-0001`;
`--spec` names the parent when a numeric Task label is ambiguous). It renames
the record directory, rewrites the ID field and title, keeps the previous
spelling in one `**Former ID:**` field directly under the ID field, and repairs
live links with the lifecycle moves' reference rewrite. Evidence rows stay
byte-identical; their links to the old path are counted as historical and
doctor reports them as attention-only broken links. The former spelling keeps
resolving. It never changes status, a repeat run is a no-op, and it refuses
complete, reviewed, done and retired records, a dirty tree, an occupied
destination or alias and an unsafe record path before writing anything. Like
`move-spec` it stages the change and commits nothing; commit it as its own
candidate. Never bulk-widen: a read-only inventory at QA/verify time finds open
records still short.

Spec parsing, selection, blockers, claim/close, rendering, Genesis readiness,
ADR registers, Wiki copied-task-state checks, guardrail contradiction checks and
citation-anchor coverage accept the new syntax. Existing numeric, short and
mixed-case syntax remains readable. Socket/team registry IDs and internal entry
sequence IDs keep their existing formats; these commands do not allocate those
artifact types. Workbench connection identities (`WB-` plus 22 characters)
keep their separate base-62 alphabet; the artifact policy does not apply to
them.
