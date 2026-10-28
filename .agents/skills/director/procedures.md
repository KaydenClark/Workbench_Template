# Director procedures

Read only the procedure for the current operation.

## Project coordination and delivery

Use this when starting or monitoring cross-Spec assignments, recording coordination, selecting a review route or handing work back to the owner.

Start from current controls and integration state. Resolve each assigned `SPEC.md` through `workbench/manifest.json`; inspect the Taskboard, ADR collection and Wiki router for accepted decisions and open gates. A local chat, private memory or unmerged branch must not be the sole source of state another agent needs to continue.

Record coordination decisions in their existing owner as they are made, not at closeout. Route Spec changes to that Spec's single writer, or record them in the coordination owner the project names. Keep a documented decision, an unmerged candidate and an integration-delivered capability distinct; only a reviewed merge into integration delivers. Name one writer for each shared artifact, including projections, controls and routers, and record cross-Spec dependencies and landing order in a tracked integration owner.

Monitor Dispatcher reports and resolve coordination within the project assignment. Record a permission refusal or unsupported host capability in the owning Spec; do not route around it or act on a Worker's behalf. Escalate only a genuine owner choice, with options, a recommendation and its cost, recorded in its owner; do not reopen a settled question.

Arrange separate-context review of each immutable assembled candidate and coordinate its merge request into the integration branch. For an unchanged assembled content digest, reuse the review and rerun affected dependency checks. Changed content needs fresh review. A room's Task-PR exemption is selected only after checking its release owner; the Task is judged by its merge answers without a separate-context review. Never infer that exception from a branch shape.

Keep accepted decisions, progress, branch/candidate references and remaining gates in tracked owners on integration through reviewed changes. Allocate IDs only when the record using them is committed. Route implementation and corrections through the assigned Dispatcher to its Workers. Connected coordination stages may share one Director context; prior involvement still bars independent review. Keep PRs awaiting required review open. Main delivery requires the owner's explicit authority for that specific work and its required checks; out-of-scope work remains unassigned.

Before exit, follow the shared [workspace closeout procedure](../implement/workflow-reference.md#workspace-closeout) for the coordination workspace and its retained work.

At exit, record each Spec's endpoint in its owner: PR, merged SHA, review verdict and remaining gates, or the blocker. Report what landed, what remains and each open owner choice. This report does not claim owner approval.

## Role and stance coordination

Roles scope assignments; stances supply their job. Follow the `GLOSSARY.md` role and stance definitions and the `ARCHITECTURE.md` ownership routes before
assigning Director (project/integration), Dispatcher (one Spec/branch) or Worker
(one Task). The owner remains the human above the Director, and occupying the
integration branch adds no authority. Each Worker carries one assigned Task for
one attempt and hands back to its Dispatcher. Changing stance alone creates no
handoff and never makes a prior participant independent. At flight launch, assign Spec Planner to plan small Tasks and safe
parallel groups from current Actuality; planning Workers may assist. Assign
Spec Manager to dispatch and monitor execution. Keep one writer for shared
Spec/projection state. Coordinate cross-Spec dependencies with the Director
when present; otherwise delegate only necessary directly connected prerequisite
Tasks to Workers, preserving original ownership, claims and proof. Connected
stages may be performed in one context within the assigned role. Dispatchers
orchestrate; Workers implement all changes and corrections. Missing Workers
leave a recoverable blocker, never a Director or Dispatcher implementation fallback.

Use Reviewer or Auditor stance for the named verification job. Apply the
existing independent-review eligibility rules to the actual agent/context;
changing stance does not clear prior involvement. Normally Workers hand back
merge requests to the Dispatcher branch and the Dispatcher presents the
assembled candidate for review and merge into integration. Inspect the current
release owner for any bootstrap exception before selecting a target.

Reconcile accepted decisions, current progress, off-integration candidate
references and remaining gates into their existing tracked owners through
reviewed changes. Distinguish a documented decision, an unmerged candidate and
a delivered capability. Create no Tasks for a newly planned Spec until launch;
preserve already-authored Tasks and their evidence.

## Owner closure and reconciliation

The closure sequence is reviewed delivery on integration -> owner approval -> verification on main -> `complete`.
Owner Human QA timing and findings follow `AGENTS.md` [Git Rules](../../../AGENTS.md#pr-instructions); the approval is
content-bound, recorded with `approve S-### --candidate SHA --owner NAME`
only for the owner's actual approval of delivered integration content.
`approve` with `--finding TEXT` follows the same rule (each finding names
`continue TK-###:` or `new Task:`); with
`--destination-change TEXT` it records the return to Align without inventing
Tasks. A failed Human QA finding returns to the appropriate scope of Align,
design-concept and delivery work; it does not imply every defect changes design.

Promotion from integration to main requires explicit owner authorization for the specific work. After that promotion, refresh the
default-branch ref (`git fetch origin main` in the declared room) before `complete S-###`:
the command requires all Tasks done, checked acceptance, a Completion Result,
current passed review and owner approval, and verifies the approved content
is contained unchanged on the observed `origin/main`. A merge alone closes
neither Task nor Spec. Run `render` and `doctor` after completion to remove
the Spec from the hot board and keep outstanding diagnostics visible.

After `complete`, capture current capability knowledge in the manifest-declared
features collection before retirement or discard. Update the existing owning
Wiki feature article and retain each contributing Spec's historical route; this is ordinary
documentation work, not a capture CLI command. `uncaptured-complete` reports
missing capture while the Spec remains complete. Reconcile surviving claims
into their durable owners before `retire-spec S-### --wiki PATH`; use the
link-safe folder operations, never manual moves. Discard only retired records
after main containment, capture and the current-reference checks permit it;
retain needed origins, corrections and recovery evidence. A later gap against
delivered work becomes a new Spec under its landmark or the Blueprint, never a
revived Spec and never a correction anchored to a Wiki claim; the Wiki is
evidence for that Spec's direction and plan, not its destination, and the
corrective commands refuse a complete, superseded or retired Spec. The exact
retirement, discard and recovery procedures are in
[Documentation: feature capture, retirement and recovery](#documentation-feature-capture-retirement-and-recovery) below.

Before proposing removal as clutter, distinguish documentation drift,
duplication and an intended lifecycle whose implementation has not caught up.
Trace consumers, unresolved obligations and retained knowledge, then apply the
existing retirement, discard and recovery conditions to the supported diagnosis.

## Owner: Human QA and main-before-complete

Examples name S-001/TK-001; substitute the actual IDs and quoted values.
Bracketed values such as `[SHA]`, `[DIGEST]` and `[INTEGRATION SHA]` denote
values captured from the inspected report and delivered commit; replace them
with actual values, never pass these labels literally.

Approve is the last step of Judge: the owner's Human Reviewed Work after a
passed Review and integration Verify of the same content. It grants no
delivery; the owner's Ship it does. A post-delivery Task cannot be claimed until
a passed verdict and this approval bind the current content, and its
bookkeeping keeps them current.

The owner chooses useful milestones, accumulated work, valued Specs, exhausted
Specs or Director escalations for Human QA; version cadence is a default, not a
mandatory sole trigger. An ongoing or failed review remains its corrective
cycle, not a request to start QA again. Monitoring, findings, a merge and a green
suite do not approve anything. The runtime records approval per Spec and binds
it to the delivered integration content; it has no batch/version approval verb.

Only record the owner's actual decision. Finding and destination-change examples
are alternatives to explicit approval, not approval with optional decorations:

```bash
node workbench/tools/spec-workbench.mjs approve S-001 --candidate "[INTEGRATION SHA]" --owner "[WHO]" \
  --finding "[FINDINGS]"
node workbench/tools/spec-workbench.mjs approve S-001 --candidate "[INTEGRATION SHA]" --owner "[WHO]" \
  --destination-change "[TEXT]"
node workbench/tools/spec-workbench.mjs approve S-001 --candidate "[INTEGRATION SHA]" --owner "[WHO]"
```

A finding follows the same disposition rule (`continue TK-###: ...` or
`new Task: ...`); a destination change records return to Align
without inventing Tasks. Return at the implicated scope: a defect need not
change the design concept. Keep failed required-capability findings visible
as real downstream dependencies until resolved. After correction, repeat
assembly/review/delivery and obtain the owner's actual approval of that content.

After the explicitly owner-authorized content lands on main, fetch the declared
default branch (`main` in these examples; use the declared default branch), then close the Spec:

```bash
git fetch origin main
node workbench/tools/spec-workbench.mjs complete S-001
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
```

`complete` requires all Tasks done, including every post-delivery Deliver and
Cleanup Task with its proof, checked acceptance, a real Completion Result,
evidence, current passed review and owner approval. It verifies the approved
candidate and unchanged assembled content on observed `origin/main`; a local
main branch or integration merge is insufficient. Refusals leave state untouched.
Completion records the observed ref/SHA and preserves administrative approval;
substantive changes invalidate it. Render removes complete Specs from the hot
board; outstanding diagnostics remain visible.

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

## Landmark lifecycle

A landmark is a `LANDMARK.md` artifact one size above a Spec
(the room's landmark decision record, if it has one):
its folder `workbench/landmarks/LMK-###-slug/` holds `LANDMARK.md`, its child
Specs in its `specs` folder and its direct Tasks in `tasks/`, each with a
`retired/` lifecycle folder. Copy `templates/LANDMARK.md`; `doctor` reports a broken
artifact as `malformed-landmark` and a misnamed folder as `unstable-path`.
Examples name LMK-001, S-001 and TK-001; substitute the actual IDs and quoted
values. The room's Wiki article on landmarks, if it has one,
explains the model.

```bash
node workbench/tools/spec-workbench.mjs next-id --prefix LMK --json
node workbench/tools/spec-workbench.mjs move-spec S-001 --landmark LMK-001
node workbench/tools/spec-workbench.mjs move-spec S-001 --landmark none
node workbench/tools/spec-workbench.mjs claim LMK-001 --agent NAME
node workbench/tools/spec-workbench.mjs show LMK-001
node workbench/tools/spec-workbench.mjs receipt LMK-001 --task TK-001 --tests "..." --docs "..." --remaining-gap "..."
node workbench/tools/spec-workbench.mjs close LMK-001 --agent NAME --proof "..." --docs "..." --remaining-gap "..."
node workbench/tools/spec-workbench.mjs gate --task TK-001 --landmark LMK-001
node workbench/tools/spec-workbench.mjs move-task LMK-001 --task TK-001 --to retired
node workbench/tools/spec-workbench.mjs report LMK-001 --candidate SHA
node workbench/tools/spec-workbench.mjs verify LMK-001
node workbench/tools/spec-workbench.mjs verdict LMK-001 --candidate SHA --digest DIGEST --result pass|fail --findings "..." --reviewer "..."
node workbench/tools/spec-workbench.mjs approve LMK-001 --candidate INTEGRATION_SHA --digest DIGEST --owner "..."
node workbench/tools/spec-workbench.mjs retire-landmark LMK-001 --wiki workbench/wiki/design-concepts/landmark-[slug].md
```

- `move-spec --landmark LMK-###|none` moves an active-roster Spec into a
  landmark, between landmarks or back to the manifest-declared `specs` lane through the
  link-safe move: every live reference is rewritten, historical ones counted,
  and the moved record's links to unmoved files recomputed. It never combines
  with `--to`, and it does not edit the landmark's Child Specs list.
- A Task directly under a landmark names `**Landmark ID:**` in place of
  `**Spec ID:**`. `next` and `claim LMK-###` offer it only while the landmark is
  `active` and its Owner is not `unassigned`; `close` appends to the landmark's
  evidence log, and `gate --task --landmark` reports its Task PR under the same
  exemption a Spec's Task PR uses.
- `report`, `verify` and `verdict` on a landmark are the whole-landmark review:
  `verify` refuses while a child Spec is neither complete nor retired or a
  direct Task is not done; `verdict` refuses a reviewer who took part in the
  landmark, including every agent a direct or child Task record lists under
  `Claimed by` (each `claim` appends its agent there and refuses an agent name
  with a comma or line break), answers a fail with corrective Tasks under the landmark without
  touching a child Spec's gate, and sets the landmark `reached` on a pass with
  every child closed and every reached check ticked.
- `approve LMK-###` records only the owner's actual approval, bound to the
  landmark's committed content; it records no owner finding.
- `retire-landmark LMK-### --wiki PAGE` refuses by name until the landmark is
  reached with no open child, a current pass verdict, a clean tree, the owner's
  approval and a Landmark Wiki page in the Wiki lane whose `source_paths` names
  the historical `LANDMARK.md` route; then it moves the whole folder to
  `workbench/landmarks/retired/`, staged and uncommitted.

A landmark-direct Task executes only under an assigned landmark until the
Instruction Authority list in `AGENTS.md` names an assigned landmark.
