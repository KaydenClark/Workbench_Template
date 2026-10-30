# Existing v3 room — step 7

Follow this branch of [ownership reconciliation](SKILL--3-reconcile-the-new-ownership-model.md); preserve its preceding baseline, authority and source prerequisites.

  7. Once the section 4 render is done, commit the updated room on a `claude/`
     task branch before the after inventory and the rollback exercise, because
     that commit is the local recovery point they need and it clears the
     `untracked-controls` finding (publishing the branch is [section
     6](SKILL.md#6-publish-through-the-targets-workflow)). Then take the after
     inventory and account for every changed path: only
     managed files, the manifest stamp, seeded documents, the intended
     control sections, a room-added skill moved into the lane under step 4 and
     every addition `migrate` reports in its output, the additive layout output (new collection folders
     with their `.gitkeep` files, and the `collections` entries it appended to
     the manifest, with any Wiki file it seeds such as
     `workbench/wiki/features/README.md`; for a room stamped before the skills lane, also
     `lanes.skills`, the `skillPolicy` `normalSetup` and `updates` values and
     `.agents/skills/.gitkeep`; for a current-schema room with no
     `workbenchId`, the `workbenchId` it assigns to the manifest; for a room
     on an older layout, the notepad, template and recovery folders, the
     `workbench/sessions/.gitignore` block, the seeded lane documents and the
     moved legacy lanes it reports under `moved`) and the untracked
     `workbench/wiki/.gitignore` in any of those cases, whether `migrate`
     reports it as `wiki.private-ignore` or writes it without reporting; that
     file is committed with the upgrade. The skills lane with its adapters
     from `install` may also differ.
     Name the rollback: the before Git SHA is the whole-room recovery point.
     The recorded backups restore through each tool's `rollback --project PATH
     --backup DIR` (plus the update's `--home`), but `workbench-skills.mjs rollback` restores only the core
     skills that existed and were backed up, and does not remove a skill the
     update added because the target release's core set holds it and the room's
     did not, and backups alone are not whole-room recovery. When the
     update changed the core set (it added a skill) or ran a first skills
     `install`, which leaves no skills backup, only the pre-update Git commit
     undoes it; the manual alternative is to delete each added core skill
     directory yourself after the rollback, which rewrites the receipt
     without it. Exercise a rollback once when the upgrade's recovery proof
     has not already been established, on a disposable recovery copy and
     never on the room: `git clone --no-hardlinks ROOM COPY` into a scratch
     directory outside the room, then run `rollback --project COPY --backup
     DIR` with a backup the committed receipts record, reapply with `update
     --project COPY --home HOME --explicit-update`, and run both `verify`
     commands against the copy. The rollback and the reapply rewrite the
     receipt with fresh backup metadata, so doing them in the room would
     leave the committed state different from the verified one. Delete the
     copy afterwards. Record the result in the upgrade Spec. If the exercise
     was run in the room anyway, repeat the after inventory and the commit
     before publishing.
