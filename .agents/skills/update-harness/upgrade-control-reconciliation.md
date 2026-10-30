# Control reconciliation

Follow this branch of [ownership reconciliation](SKILL--3-reconcile-the-new-ownership-model.md); preserve its preceding baseline, authority and source prerequisites.

For the v3 spec-centered Workbench:

- keep `AGENTS.md` small and operational;
- keep cross-cutting product truth in `BLUEPRINT.md`;
- create `workbench/specs/S-###-slug/SPEC.md` capability packets in the lane
  the manifest declares; lifecycle is folder location, and a record moves only
  through `move-spec` or `move-task`;
- make `TASKBOARD.md` a generated hot projection;
- keep `RUNBOOK.md` the operating manual: cold-start context gathering guided
  by the initial prompt, then the relevant work. Link detailed workflows to
  their owning skills and keep the room's exact commands and recovery;
- keep `CLAUDE.md` as the thin `@AGENTS.md` bridge;
- carry a changed template `hooks` block into the room's filled
  `.claude/settings.json`, keeping the room's permissions; control fidelity
  counts brace-only lines as trivial, so compare the whole block;
- preserve public setup in `README.md` and harness friction in
  `WORKBENCH_FEEDBACK.md` (legacy `HARNESS_FEEDBACK.md`);
- refresh the Workbench-managed runtime tools in `workbench/tools/` only
  through the release checkout's
  `node tools/workbench-tools.mjs update --project PATH --home HOME --explicit-update`,
  which backs up changed files and records a rollback path; never hand-copy a
  runtime tool;
- refresh the Workbench-managed core skills in `.agents/skills/` only
  through the release checkout's
  `node tools/workbench-skills.mjs update --project PATH --home HOME --explicit-update`,
  which replaces only changed core skills, backs the previous directories up,
  records a rollback path and leaves room-added skills alone; never hand-copy
  a core skill and never touch the provider home to update a room.

A room whose `AGENTS.md` and `RUNBOOK.md` still hold the earlier long shape
reconciles them to the current templates this way:

1. Update the core skills first (`workbench-skills.mjs update --explicit-update`,
   or `install` for a room without the lane). If the room's `AGENTS.md` still
   carries a `Skill Map` section (the current template brief has none), an
   entry that names a skill the room's lane does not hold binds nothing, and
   `doctor` reports it as `skill-pointer-dangling`, so land that map only after
   the skills it names are in the lane.
2. Bring in the template's compact `AGENTS.md` brief, which links `RUNBOOK.md`
   for cold-start orientation, the Wiki router, the manifest and the lane skills, and keep the
   room's own lines: its scope, Git rules, verification commands, safety rules
   and every divergence it recorded. Follow
   [TASKBOARD continuation and legacy retirement](../save/taskboard-continuation.md#retire-a-legacy-continuation-control-during-an-update):
   preserve the old STARTUP.md recovery point, reconcile its meaningful contents
   into existing owners, regenerate TASKBOARD, then remove it after readback.
   Never recreate that retired control. Bring
   `RUNBOOK.md` to the template's operating manual and its prompt-guided
   cold-start flow, keeping the room's
   own rows, sections, exact commands and recovery; a long procedure the room
   copied from an earlier template and a lane skill now owns becomes the
   manual link that points at the skill. Never replace a room-owned line
   silently; a line the room deliberately changed is restored or recorded as a
   decision, as section 5 says.
3. Bring the other templated controls and the Wiki router to the current
   templates the same way, keeping what the room owns. `BLUEPRINT.md`,
   `README.md`, `GLOSSARY.md` and `ARCHITECTURE.md` are the room's filled
   documents: take from the template only the sections it changed (the
   report's generation-labeled lines) and keep the room's filled values and
   its own content. A room not yet migrated has `LEXICON.md` in place of the
   last two; do not recreate a Lexicon in a migrated room, and never treat an
   archived one as a current control to reconcile: it is retired only through
   `retire-lexicon` (step 3 of the migrate step). `TASKBOARD.md`
   is a generated projection: regenerate it with `render` (section 4) instead
   of editing it. The Wiki router `workbench/wiki/MEMORY.md` is a room copy:
   compare it with `templates/wiki/MEMORY.project.md` (`MEMORY.root.md` for a
   deployment profile) and keep the room's own routes. Confirm each of them
   with the control fidelity report below.
4. Run the control fidelity report (`node tools/control-fidelity.mjs report
   --project PATH` from the release checkout) with the room's earlier template
   generation: `--previous-templates PATH`, or nothing when the room manifest's
   recorded source commit is in the release checkout. A line labeled a
   generation difference (`earlier-template`, `newer-template` or
   `template-changed`) is the template's change, reconciled to the new shape;
   an unlabeled `added`, `dropped` or `changed` line is the room's own.
5. A skill the room added to its lane is not pointed to by the shipped index
   and teaches only; pointing a row of the room's own at it is the room's
   decision.

The one-time v2 route, `tools/workbench-upgrade.mjs upgrade --explicit-update`
(or its `--layout-only` mode; the two are exclusive), lays the skills lane and
its adapters down through Adoption's migration and records the pre-migration
Git SHA, inventory and both receipts in the same recovery record; it never
reads, compares or replaces skills in a provider home.

Map capabilities, not every historical task. Create completed specs only for
durable current capabilities whose acceptance and proof are already real. Move
the actual active dependency chain into active/planned specs. Preserve the old
queue and proof ledger in a dated cold archive; never rewrite historical proof
into cleaner claims.

Update `.claude/settings.json` or equivalent mechanical scope enforcement when
new `specs/` or harness-tool paths become writable.

Completion criterion: every live rule and active work item has one owner, old
history remains reachable, and the target has no competing active queue.
