
# 4. Stamp, render, and diagnose

Use this section for 4. stamp, render, and diagnose; [SKILL](SKILL.md) provides the surrounding context.

## 4. Stamp, render, and diagnose

The manifest `workbenchVersion` carries the verified target version (section 3,
step 3). A control's `Generated from LLM Workbench` stamp says its body was
reconciled to that release, so stamp only a control whose body you reconciled
in this update. Leave an unreconciled control at its earlier stamp and record
it in the upgrade Spec as pending reconciliation, with the reason; the control
fidelity report compares bodies, not stamps, and shows which controls still
differ from the templates. `seed-documents` refreshes only the seeded lane
documents (`workbench/feedback/REPORT_FORMAT.md` and the notepad templates). It
does not touch the Wiki contract files (`workbench/wiki/SCHEMA.md`,
`workbench/wiki/AGENTS.md` and `workbench/wiki/design-concepts/README.md`) or
the router, which are room copies: compare each with `templates/wiki/`
(the fidelity report covers them), re-copy only what changed while keeping the
room's edits, then stamp it. One you leave alone keeps its earlier stamp, and
`doctor` reports it as a `stale-stamp` attention finding that blocks nothing;
record it as pending reconciliation or an accepted decision. Remove template
placeholders and stale version/path/routing language. Run the current lifecycle
commands from the target root, normally:

```bash
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
node workbench/tools/spec-workbench.mjs next --json
```

Inspect the rendered Blueprint catalog and Taskboard projection. Confirm `next`
returns the genuinely eligible active slice or `null` for a real dependency or
owner gate. Do not manipulate status merely to make `next` return work.

Completion criterion: render is deterministic, doctor reports no blocking
finding, links resolve, spec paths match their lifecycle folders, and selection
matches the project's real gate.

### Workbench self-drift boundary

The target project's drift check is not the canonical Workbench's self-drift
check, and the second is not part of an ordinary room update: updating a room
changes the room, whose drift check is its own `doctor`, `validate` and control
fidelity report, so a room update records no pre/post self-drift receipt.
Whenever the source Workbench itself is being changed or updated (its own
maintenance or release, not a room that consumes it), run a
read-only self-drift review before and after the source change. Inspect the
source controls, Specs and projections, manifest, ADR/Wiki routes, update and
review procedures, templates, managed tools/skills and receipts, seeded
artifacts, and readable continuity metadata. Reconcile current-facing statuses,
blockers, versions, paths, owners and latest events against their owners.

A passing target-project check, render, doctor or test suite does not establish
semantic freshness. If a current-facing artifact still presents completed work
as pending, carries a resolved blocker, points at a retired route, or has stale
version/provenance information that could misroute a cold-start agent, the
Workbench update is not complete. In the source checkout located in step 1,
run `node workbench/tools/self-drift.mjs --phase pre --json` before the change
and `--phase post --json` afterward. Record both receipts and the bounded
manual semantic check with its unresolved findings; no-machine-finding output
is not a clean-update verdict. Preserve
explicit historical and append-only evidence.
