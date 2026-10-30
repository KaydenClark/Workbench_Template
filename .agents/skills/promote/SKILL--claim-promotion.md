# Full procedure

[Promote entry](SKILL.md). Use the sections relevant to the assigned operation.

## Purpose



Inherit both mandatory owner judgments under [authority and continuation](../implement/execution-authority.md): explicit confirmation before leaving Explore and explicit execution approval before leaving Prepare. Reuse their sources within scope; delegation and this skill grant neither.

Promote only selected material whose authority and evidence already exist.
This primitive works with sourced Wiki claims or preserved legacy notes;
`carry` can compose it before implementation. It does not start an
interview, implement tasks, grant permission or infer invocation from a
passing mention. Read the Contract, manifest and assigned owner first.

Explicitly confirmed vocabulary is written during modeling or grilling through
[domain-modeling](../domain-modeling/SKILL.md#update-glossarymd-on-confirmation).
That scoped write needs no separate invocation of this skill. Other Canon
changes retain their selected promotion endpoint.

1. Resolve the named source and exact selection. Read its compact current
   claims, sources and linked corrections by calling the Skill tool for `jot`; call the Skill tool for `notepad` for a
   legacy source and its current view/dependencies.
   Follow pagination and inspect related rulings that could supersede it.
   A locked label is neither proof nor authority. Preserve open, tentative,
   withdrawn and superseded status; promote only the supported current claim
   under existing authorization. If ordering is unclear, preserve the source
   and report the ambiguity rather than choose a convenient interpretation.
   For Wiki claims, preserve kind/state; confirmed intent is not implementation
   or Canon. For legacy sources, read pending meaning the way `notepad` records it: a `source_record` whose
   readback is still listed in `current.unresolved` is pending, not supported,
   however settled it sounds, and only a `decision` entry records a confirmed
   owner answer. A mixed note promotes its confirmed claims and leaves the rest.
2. Call the Skill tool for `to-docs` to choose exactly one durable owner for each accepted claim;
   when another owner needs it, link to it rather than copy it. Requirements
   and proof belong to the assigned spec, operating rules to their owning control,
   durable knowledge to the manifest Wiki. Decision rationale belongs in
   `workbench/docs/adr/`, with active accepted decision claims as architectural Canon and
   `canonicalized_in` naming operational owners. Create a needed owner only through its authorized normal workflow.
   File type and location do not assign a Governance Plane or grant scope.
3. For Wiki claims, reconcile the selected supported result directly into its
   existing authorized owner through `to-docs`, preserving source/history and
   access, then continue at step 5. A private source does not authorize tracked
   exposure. For a legacy JSON source, author a separate, ignored Markdown draft inside the project containing
   the complete proposed owner bytes, for example under
   `workbench/sessions/recovery/`; the command refuses a draft outside the
   project, and a tracked path would dirty the tree. The draft is disposable
   authored text, not a note or evidence. Distill the supported result
   faithfully; never copy the notepad wholesale or cite an ignored note as durable proof.
   Preserve existing unrelated owner content, source anchors and append-only
   evidence. Read the destination bytes and compute their SHA-256.
   When the owner text carries an owner-confirmed readback, record that
   readback first, verbatim, as a shared jot: after the `jot` exposure review,
   `jot.mjs add --page WIKI_PAGE --visibility shared --kind intent --state
   confirmed`, sourced to the owner's confirmation. Then wrap the promoted
   text in a `<!-- readback: WIKI_PAGE#JOT-ID -->` line and a
   `<!-- /readback -->` line, each alone on its line, and commit the Wiki page
   with the owner. Plain `doctor` reports `readback-mismatch` until the
   region says what the entry says; re-wrapping a paragraph is allowed.
4. Use the project's installed public seam, with the source revision just read:

```bash
node workbench/tools/sessions.mjs promote --from NOTE --revision N \
  --entries finding-001,correction-001 --to OWNER.md --expected SHA256 \
  --content AUTHORED_DRAFT.md
```

The command reference below owns flags, privacy/path checks, owner validation
and recovery.
The command returns the expanded selection and hashes; verify actual owner
read-back and run its normal checks. Tool success does not prove semantic
fidelity. A blocked, partial or recovery-residue result preserves the source;
inspect the named recovery material before any retry or cleanup. One writer
per note and owner is required; revision/hash checks are not concurrent locks.

5. Record the result in the proper owner and update the source append-only,
   naming the durable destination. Keep unresolved work and correction or
   transfer dependencies.
   Leave each pending entry and its `current.unresolved` item in place:
   promotion does not confirm it. Preserve Wiki claim history and add a linked
   correction or destination reference through `jot`. For legacy cleanup, use
   the `notepad` trim/delete public seam
   only once that material is reconciled and no retained context still needs it. Existing
   frozen checkpoints remain unchanged; no routine archive or copy is created.
6. Call the Skill tool for `save` for the achieved changes under the same scope. Pass the
   already-promoted result so save does not promote it again. Report the
   destination, verified selection and hashes, checks, remaining source context
   and actual recovery boundary. Stop after promotion/persistence unless the
   caller already authorized further work.

## Standing rules

Promote only supported claims, under existing authorization, directly into their
proper durable owners. Cite those owners, never an ignored live path as durable
evidence. Retain unresolved material in the live notes. Once reconciliation into
durable owners leaves no important information or active handoff that still
depends on the record, normal cleanup may flush or delete it. A retained note
may instead be trimmed of promoted material, preserving any context and
correction links still needed by its remaining work. No routine archive is
required. No autonomous task or handoff creation follows.

## Command reference

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
the root `GLOSSARY.md`, specs, ADRs, Wiki and docs/feedback Markdown owners are
supported; create new owners through their ordinary authorized workflow first.
A glossary promotion selects only `decision` entries, so a pending
`source_record` or `proposal` stays in the notepad; no capture path writes the
glossary.

Spec checks reuse lifecycle diagnostics and preserve existing append-only rows;
ADR and Wiki checks reuse their validators. Controls receive heading and
placeholder checks, and the glossary also keeps its `## Language` section;
other documents receive a heading check. These are not semantic policy audits.
Run the owner's normal checks too. Successful output names source selection/context, old/new hashes and
verified destination bytes. Reconcile remaining source dependencies before a
separate notepad trim; unchanged source and draft do not prove cleanup is safe.

Use one writer. Revision/hash checks are sequential guards, not filesystem locks
or concurrent-write protection. A recoverable publication/read-back failure
restores original bytes. If the filesystem also refuses restoration, the command
returns `partial`, exits nonzero and retains the named original backup for
recovery; do not retry or trim blindly. A leftover `recoveryResidue` names a
backup whose cleanup failed. No crash-proof or machine-loss guarantee is claimed.
Legacy checkpoint creation is retired; existing checkpoint history remains available.
