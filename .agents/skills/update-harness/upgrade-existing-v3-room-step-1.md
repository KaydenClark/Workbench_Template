# Existing v3 room — step 1

Follow this branch of [ownership reconciliation](SKILL--3-reconcile-the-new-ownership-model.md); preserve its preceding baseline, authority and source prerequisites.

  1. Record the before state: the target's Git SHA and a hash inventory of
     every tracked file, classified as project-owned (controls, product code,
     active specs, completed evidence, Wiki content, room-added skills) or
     Workbench-managed (the receipted files in the tools and skills lanes).
     Run `node tools/workbench-tools.mjs verify --project PATH` and
     `node tools/workbench-skills.mjs verify --project PATH` and keep their
     findings; drift found here is reported, not silently absorbed.
     A room whose manifest is schema 1 (the v3.0 five-lane layout, which
     `migrate` converts in one step) has its two legacy session lanes moved into
     `workbench/sessions/` (the `legacyLanes` map in `workbench-layout.mjs`).
     Its clean check cannot see ignored files either, and a reset to the before
     commit recreates tracked files only, so before step 2 list every ignored
     file under the lane root from the room root:

     ```bash
     git ls-files -o -i --exclude-standard -z -- workbench
     ```

     When it lists anything, pipe the same output into `tar --null -T -
     -cf ARCHIVE` from the room root, store the archive outside the room,
     record its path in the upgrade Spec and keep it until the update is
     verified.
