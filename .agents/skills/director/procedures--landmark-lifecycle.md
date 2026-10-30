
# Landmark lifecycle

Use this section for landmark lifecycle; [procedures](procedures.md) provides the surrounding context.

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
