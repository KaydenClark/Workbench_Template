
# Documentation: feature capture, retirement and recovery

Use this section for documentation: feature capture, retirement and recovery; [procedures](procedures.md) provides the surrounding context.

## Documentation: feature capture, retirement and recovery

Read and update the existing capability article in the manifest-declared
`features` collection when work changes its knowledge. After complete, author capability knowledge in that existing `features` article before retirement;
create an article only when none owns the capability. Route it from Wiki
MEMORY.md and validate it with the Wiki schema.
There is no capture CLI. A feature article uses `type: feature`, active status,
provenance and source_paths naming the Spec's eventual retired route; it explains
What It Does, Why It Matters, Limits, and Evidence and Sources without copying
active Task state. Follow [features](../../../workbench/wiki/features/README.md) and
[Wiki schema](../../../workbench/wiki/SCHEMA.md). `uncaptured-complete` is attention while
the Spec stays complete; missing, invalid or unrouted capture blocks retirement
and Task/Spec discard. Reconcile surviving claims into their existing owners.

Move records only with the link-safe operations. Task retirement is optional
for a done record with proof/Receipt; it rewrites live links, preserves and counts
historical references, and retains the complete Task directory. `move-spec` is
a folder-only alternative for an already complete Spec, not reconciliation or
a bypass of capture. The normal closure route is complete -> feature capture -> `retire-spec`, which
moves the whole Spec and its Tasks together. An individual Task move is a
separate optional operation; its path participates in the review digest and
invalidates earlier content-bound approval. Do not describe it as transparent
normal cleanup or move normal cleanup before closure to avoid that limit.
Use `retire-spec` after validated feature capture;
it checks closure/approval/capture, appends evidence, moves the complete directory,
regenerates ADR/board projections, cleans contained lane branches and lists
unmerged results without deleting them. Do not run both Spec moves sequentially:

```bash
node workbench/tools/spec-workbench.mjs move-task S-001 --task TK-001 --to retired
node workbench/tools/spec-workbench.mjs move-spec S-001 --to retired
node workbench/tools/spec-workbench.mjs retire-spec S-001 --wiki workbench/wiki/features/greeting.md
```

Collision identity recovery is an exceptional `move-task` mode for an already
published done Task in an open Spec. First fetch all remote tips and obtain the
Director disposition naming the earlier identity and centrally reserved replacement.
Freeze the clean candidate and unchanged original Task bytes. Supply the exact
reviewed commit revisions and SHA256 of the source Task:

Use `move-task` with the assigned Spec selector, `--task`, `--replacement`,
`--expected-head`, `--task-hash`, `--source-revision`, `--collision-spec`,
`--collision-revision`, `--collision-path`, and `--reason` from that disposition.
Add `--dry-run --json` for the reviewed plan.

`--dry-run` validates collision recovery and reports without writes. An empty
replacement is refused. Ordinary retirement and other verbs refuse `--dry-run`
before any mutation. After independent review of the
mechanism and plan, repeat the identical command without `--dry-run`; it stages
one guarded move and its live Markdown references/projections, without a commit.
The original Receipt bytes, done status and append-only Spec rows stay intact;
qualified immutable provenance replaces a colliding Former ID alias. Reference
reservations are allowed, but current/retired records, aliases and discard entries
at observed remote tips refuse an occupied replacement. Pending close evidence,
linked paths, dirty state, mismatched inputs and unsupported JSON path references
refuse before writes. Git environment overrides must be removed; GIT_PAGER is
allowed. Missing Git objects are not fetched by this operation.

A process or I/O failure restores touched files and the original Git index. A
rollback failure reports its pinned recovery commit and leaves the tree for
inspection. This does not guarantee recovery after power loss or coordinate
concurrent writers. Commit and independently review the actual repaired assembly;
identity repair transfers no review, acceptance or owner approval. Ordinary
retirement keeps using `--to retired` with no replacement options.

Commit and preserve the retirement result. Its latest incarnation and entire
current directory must reach the declared default branch, observed by a fresh
fetch, before discard. Discard alternatives are separate operations:

```bash
node workbench/tools/spec-workbench.mjs discard S-001 --task TK-001
node workbench/tools/spec-workbench.mjs discard S-001
```

Discard refuses active records, dirty state, unfinished work, missing/invalid
capture, unverified current directory on main and current references. It never
clears the permanent ADR archive. After a Task discard the parent directory has
changed; publish/verify that latest directory on main before Spec discard.
Operational references still block even in the feature owner. Historical links
in its Evidence and Sources become immutable git-show citations. Successful
removal writes DISCARDS.md with the historical route, retiring/discard-parent
commits and exact `git checkout SHA -- DIRECTORY` recovery command; exercise it
in a disposable clone and compare all recovered bytes, including sibling proof,
assets and Receipt runs. The final Task leaves `tasks/.gitkeep` so fresh clones
retain record-backed interpretation. Recovery is for inspection, not new work.

A later gap against delivered work becomes a new Spec under its landmark or the
Blueprint. It never revives a discarded Spec and is never a correction anchored
to a Wiki claim. The new Spec names the delivered work it builds on and may cite
Wiki pages as evidence for its direction and plan, but no Task takes a Wiki
claim as its destination for corrective work. `verdict --result fail`,
`approve --finding` and `createCorrectiveTasks` refuse a Spec that is complete,
superseded or retired, and refuse any `wikiClaim`, each naming this route.
`next` never selects a standalone corrective record an earlier release wrote,
and `claim` and `close` refuse it, though it still occupies its identifier. The
receipt CLI remains Spec-bound and refuses a standalone Task ID. A different
destination needs a new assigned Spec.

An optional JSON preview reports existing records without changing canonical
selection or board format:

```bash
node workbench/tools/spec-workbench.mjs render --format json
```

Its output is `TASKBOARD.preview.json`; default render still generates Markdown
and the catalog. Editing a preview never changes a source record.

`render --format json` regenerates only `TASKBOARD.preview.json` from existing
Spec/Task records. Its six lanes retain readable source links, source-owned
metadata and derived child progress and cleanup state. Unknown metadata stays
`null`; ordering is priority, title, then WBID. Editing a card never changes
its source, and the next render restores the source-derived value. Invalid
source, ambiguous flat identities, symlinked sources or linked outputs refuse before
replacing the previous preview. Normalized duplicate field names anywhere in
a record also refuse, using the same whole-document extraction, case
sensitivity and key/value trimming as
the existing source parsers. This validation applies only to the preview.
Legacy numeric Task labels remain Spec-scoped in their owners: if two labels
collide as flat JSON keys, the refusal names both sources without changing
them. Reconcile that boundary before the later
canonical board switch.
