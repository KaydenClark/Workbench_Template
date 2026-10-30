# Existing v3 room — step 2

Follow this branch of [ownership reconciliation](SKILL--3-reconcile-the-new-ownership-model.md); preserve its preceding baseline, authority and source prerequisites.

  2. Run `node workbench/tools/workbench-layout.mjs migrate --project PATH
     --version [TARGET_VERSION]` for additive declared collections. It stops
     after each additive step (first declaring the skills lane, then appending
     each missing collection), so rerun it until it reports `current` or
     `missing-collection`. It preserves old
     note paths and reports its exact layout source. Seeded schema/examples
     retain adjusted room copies. A room stamped before the skills lane gains
     `lanes.skills`, an empty `.agents/skills/.gitkeep`, the current Workbench line-ending block in `.gitattributes` when its block predates the lane (reported as `line-endings`; relocation adds it the same way), the lane's
     `skillPolicy` `normalSetup` and `updates` values (never `required`, which
     step 3 sets) and an untracked `workbench/wiki/.gitignore` that this step
     writes without reporting (when that file is the only addition, `migrate`
     reports it as `wiki.private-ignore`). A room on the retired
     `workbench/skills` lane (a room laid out before this move, with a skills receipt) has its
     lane relocated by the first `migrate`: it renames `workbench/skills` to
     `.agents/skills` in place, replaces the `.claude/skills` link with
     `../.agents/skills`, sets `lanes.skills` to `.agents/skills` and reports
     `relocated`. It lists room links still pointing into the retired lane in
     `retiredLaneLinks`, each with its `.agents/skills` `replacement`; repair
     live docs and leave frozen evidence, since doctor keeps reporting them as
     `retired-skills-lane-link`. It never copies a skill, and it refuses with
     `skills-relocation-collision` before any write when `.agents/skills` or
     `.claude/skills` is a real directory or a link outside the lane; move such
     skills into the lane first as step 4 describes. Stage the whole rename
     with `git add -A workbench/skills .agents .claude workbench/manifest.json`
     so Git records one move. To return a relocated room to the lane layout,
     run `node workbench/tools/workbench-layout.mjs skills-lane-rollback
     --project PATH`, or reset to the before commit. Once every additive step is done, a room that lacks a
     current notepad session template makes `migrate` return
     `missing-collection` with the missing templates in `missing`. That is the
     expected interim state, not a failure and not a reason to rerun
     `migrate`: continue to step 3, which stamps the version and seeds the
     templates, and finish the `migrate` reruns there.
