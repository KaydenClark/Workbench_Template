
# Workbench Lifecycle, Diagnostics, And Decision Records

Use this section for workbench lifecycle, diagnostics, and decision records; [TEMPLATE_OPERATIONS](TEMPLATE_OPERATIONS.md) provides the surrounding context.

## Workbench Lifecycle, Diagnostics, And Decision Records

The project runs its own installed runtime tools from the manifest-declared
tools lane:

```bash
node workbench/tools/spec-workbench.mjs next --json
node workbench/tools/spec-workbench.mjs show S-###
node workbench/tools/spec-workbench.mjs claim S-### --agent NAME
node workbench/tools/spec-workbench.mjs close S-### --proof "..." --docs "..." --remaining-gap "..."
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
node workbench/tools/adr.mjs new --title "Decision title"
node workbench/tools/adr.mjs validate
node workbench/tools/adr.mjs register
```

`doctor` prints every registered finding with its severity and blocking
effect and exits non-zero only for `all` or `selection` findings; a
`selected-slice` finding is excluded by `next` and refused by `claim`, and an
`attention` finding stays visible without blocking. The current
[`workbench-runtime` diagnostics route](../../.agents/skills/workbench-runtime/SKILL.md#diagnostics-and-blocking-effects)
checks the tracked `.agents/skills/` lane and its `.claude/skills` link. The
retired `doctor --home` option is ignored; doctor does not inspect a provider
home. Filesystem discovery remains distinct from configured-host invocation.
`doctor` also reports
`integration-branch-undeclared` and `integration-branch-missing` (scope
`git`, effect `none`) until `workbench/manifest.json` `git.integrationBranch`
names a branch that resolves locally or on a remote; the Genesis readiness
gate fails closed on the same two conditions. When that branch resolves and
the spec `next` would select is already complete there, `doctor` reports
`complete-on-integration` (attention) without hiding the work. Decision records live in
`workbench/docs/adr/`; an accepted record names the control that carries its
operational owners in `canonicalized_in`. Active accepted decision claims are
architectural Canon. `register` derives active `REGISTER.md` and complete
`HISTORY.md`; supersession uses one whole-record `superseded_by` filename and
deprecation requires `deprecation_reason`. Historical bodies remain unchanged.

`permission-scope-drift` is reported when `.claude/settings.json` exists and
withholds a manifest-declared authorship lane (no covering `Edit` `allow` rule,
a `deny` or `ask` rule covers it, or a restrictive pattern is uncertain), or
grants `workbench/tools/` in `allow` without a covering `ask` holding the whole
lane; an intersecting tools deny also remains visible. It names each lane,
never blocks, and never edits the file. Claude Code applies `Edit` rules to every built-in
file-editing tool. Resolve the finding by adding the
`Edit(./workbench/<lane>/**)` rules, holding `workbench/tools/**` in `ask`,
simplifying an uncertain restriction, or recording the deliberate restriction
in `AGENTS.md`. The Genesis readiness check fails closed on the same finding;
a room without the file is unaffected.

The wiki lane raises `room-brain-unrouted` (attention) when a root control does
not route back to the room brain: `AGENTS.md` must reference `workbench/wiki/`
and `README.md` must reference `MEMORY.md`; the finding names the control that
lacks the route, and a room whose manifest declares a different wiki lane path
sees it until its controls name that lane. It raises `stale-stamp` (attention)
when a wiki contract file or the room brain carries a `Generated from LLM
Workbench` stamp naming a version other than `workbench/manifest.json`; refresh
the stamp when the harness is upgraded (`validate --genesis` fails the same
files with `version-mismatch`).

### Visible Identifiers

```bash
node workbench/tools/spec-workbench.mjs next-id --prefix S --json
node workbench/tools/spec-workbench.mjs next-id S-### --prefix TK --json
node workbench/tools/adr.mjs new --title "Decision title"
```

`next-id` is a read-only proposal, not a reservation or permission to create work.
Ticket proposals require the assigned spec and reserve labels from all specs in
the Workbench. Write the returned label only during authorized planning, then
render and run doctor before requesting another. ADR `new` writes a proposed
record through the existing exclusive-publication path. Existing paths stay fixed.

New Spec, Task, ADR and notepad artifact labels use uppercase `0-9A-Z`, minimum
width four and at least one letter (`S-000A`, `TK-000A`, `ADR-000C`, `N-000A`).
Width grows without truncation. Existing numeric and mixed-case labels remain
readable and keep their stored bytes and paths; case-folded and leading-zero
spellings reserve one identity. Letter-bearing Task labels are unique across
the room; legacy numeric Task references remain Spec-qualified. The installed
[`workbench-runtime` identifier procedure](../../.agents/skills/workbench-runtime/SKILL.md#visible-identifiers)
owns allocation, remote reservation, collision and widening rules. The
`WB-` connection identity keeps its separate base-62 alphabet.

Spec parsing, selection, blockers, claim/close, rendering, Genesis readiness,
ADR registers, Wiki copied-task-state checks, guardrail contradiction checks and
citation-anchor coverage accept the new syntax. Existing numeric syntax remains
readable. Socket/team registry IDs and internal entry sequence IDs keep their
existing formats; these commands do not allocate those artifact types.

### JSON Notepads

Read [JSON Notepads](TEMPLATE_OPERATIONS--workbench-lifecycle-diagnostics-and-decision-records--json-notepads.md#json-notepads) when working on this topic.

### Frozen History And Operational Recovery

Existing `sessions/checkpoints/` files and citations remain unchanged.
The legacy `sessions.mjs checkpoint` command refuses new copies. New selected
claims follow direct owner promotion below. Operational receipts and backups
use the ignored `sessions/recovery/` collection declared by the manifest;
notepad discovery excludes it. Preserve old recovery references, and restore
from the recorded Git SHA or explicit backup with byte read-back before claiming
recovery. Do not treat local operational recovery as durable provenance.

### Optional Private Session Transport

Read [Optional Private Session Transport](TEMPLATE_OPERATIONS--workbench-lifecycle-diagnostics-and-decision-records--optional-private-session-transport.md#optional-private-session-transport) when working on this topic.

### Portable Save, Promote And Room-Local Skills

[`save`](../../.agents/skills/save/SKILL.md) preserves already-authorized work in its
existing owners, uses source-linked Wiki [`jot`](../../.agents/skills/jot/SKILL.md) for
fresh continuation, and reports the recovery boundary actually verified.
Legacy JSON notes remain readable through `notepad`; save does not create a
new JSON continuation record by default. `promote` reconciles selected supported
material into its existing owner, then may compose save for the result. Neither
starts implementation or grants broader scope. Mention is not invocation.

The installed core catalog is `coreSkills` in the layout runtime. The v3.2.2
receipt and lane contain 33 managed skills, and the v3.2.2 manifest policy
lists the same 33 required names. The lane also holds the optional
`diagnose-and-propose` and `grill-with-docs` skills this reference room selected;
they are room-local, outside the core receipt, and installed only by explicit
selection. The earlier v3.2.1 candidate's 21-name transition policy remains
readable history in this file at Template integration
[`2f162c46`](https://github.com/KaydenClark/Workbench_Template/blob/2f162c46afed6488862d2c3963b07bb0d905cabd/workbench/docs/TEMPLATE_OPERATIONS.md#portable-save-promote-and-room-local-skills)
and in the v3.2.1 manifest at that revision.

For an authorized room-specific extension, keep its sole tracked source at
`.agents/skills/NAME/SKILL.md`, with a name outside the managed core. Follow
the installed [`workbench-runtime` room-local skill procedure](../../.agents/skills/workbench-runtime/SKILL.md#room-local-skills)
for collision checks, adapters and host invocation. `.agents/skills` is the lane
itself and `.claude/skills` is one relative link into it, not an authoring
location; their presence alone does not prove native discovery or callability.

The room's managed update does not publish room-local source into a personal
catalog. Doctor inspects this room's skill lane and adapters, not a provider
home. A new room needs no local extension or personal catalog for the installed
core operations. Do not add a root `skills/` shadow.

### Direct Owner Promotion

Reconcile selected claims into an existing owner; keep their corrections and
unfinished context in the working note. The author selects the proper owner,
checks current authorization and distills faithful candidate text. A note label,
ID or tool result grants no authority. This command neither commits nor cleans
up the source.

```bash
node workbench/tools/sessions.mjs promote --from NOTE --revision N \
  --entries finding-001,correction-001 --to OWNER.md --expected SHA256 \
  --content AUTHORED_DRAFT.md
```

`--expected` is the SHA-256 of the destination bytes just read. The source must
be a valid local JSON note. The separate authored draft and existing destination
must be ordinary, singly linked files inside the project. Drafts are temporary
authored documents, not new notepad records; keep them ignored until deliberately
reconciled. The command requires every selected entry, carries its corrections
and dependencies, refuses private material, stale inputs and ignored-note
citations, and validates the proposed owner before writing. Existing controls,
specs, ADRs, Wiki and docs/feedback Markdown owners are supported; create new
owners through their ordinary authorized workflow first.

Spec checks reuse lifecycle diagnostics and preserve existing append-only rows;
ADR and Wiki checks reuse their validators. Controls receive heading and placeholder checks; other documents receive a
heading check. These are not semantic policy audits. Run the owner's normal
checks too. Successful output names source selection/context, old/new hashes and
verified destination bytes. Reconcile remaining source dependencies before a
separate notepad trim; unchanged source and draft do not prove cleanup is safe.

Use one writer. Revision/hash checks are sequential guards, not filesystem locks
or concurrent-write protection. A recoverable publication/read-back failure
restores original bytes. If the filesystem also refuses restoration, the command
returns `partial`, exits nonzero and retains the named original backup for
recovery; do not retry or trim blindly. A leftover `recoveryResidue` names a
backup whose cleanup failed. No crash-proof or machine-loss guarantee is claimed.
Legacy checkpoint creation is retired; existing checkpoint history remains available.
