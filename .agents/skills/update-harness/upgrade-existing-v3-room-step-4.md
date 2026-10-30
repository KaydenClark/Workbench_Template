# Existing v3 room — step 4

Follow this branch of [ownership reconciliation](SKILL--3-reconcile-the-new-ownership-model.md); preserve its preceding baseline, authority and source prerequisites.

  4. Check the skills catalog, then update the managed lanes. The skills
     receipt, `.agents/skills/.workbench-skills.json`, decides the route.
     **No skills receipt** (a room stamped before the skills lane existed,
     which `migrate` declared but did not fill) means there is nothing to
     retire, so skip the comparison below, go to the collision and duplicate
     checks that follow it, and then run the first `install`. A room with a
     receipt compares the before skills receipt with the target `coreSkills`
     first, in both directions, and runs `update`. This prints the skills the
     receipt lists that the target catalog no longer holds (run it from the
     release checkout, with the absolute room path as the argument; with no
     receipt it prints that there is nothing to retire instead of failing):

     ```bash
     node --input-type=module -e "import fs from 'node:fs'; import { coreSkills } from './workbench/tools/workbench-layout.mjs'; const file = process.argv[1] + '/.agents/skills/.workbench-skills.json'; if (!fs.existsSync(file)) { console.log('no skills receipt: no core skills to retire'); } else { const receipt = JSON.parse(fs.readFileSync(file, 'utf8')); console.log(Object.keys(receipt.skills).filter((skill) => !coreSkills.includes(skill)).join(' ')); }" /absolute/room
     ```

     A skill the release removed or renamed is skipped by `workbench-skills.mjs
     update`, which walks only the target `coreSkills`: its directory and
     receipt entry stay, and `verify` afterwards reports the directory under
     `roomLocal` as if the room had added it. Record an explicit preserve,
     rename or remove decision for each in the upgrade Spec. Preserve and
     rename both end with the skill under a non-core identity: `git mv` the
     directory and edit its `name:` front matter to a name that neither the
     target catalog nor the lane uses. A preserved skill must never stay under
     its retired name. The receipt entry stays, `update` carries every receipt
     entry forward, and if a later release brings that name back, `update`
     treats a lane directory with that name and a receipt entry as managed and
     replaces it (after copying it to the backup). Renaming closes that route:
     no directory holds the old name, so a returning core skill is laid down
     fresh and the room's skill is untouched. Nothing else is needed on the
     receipt: no command prunes its entry, `verify` and `update` read only
     the target `coreSkills` names so the entry stays inert, and the receipt is
     never hand-edited. Remove is `git rm -r`, with the note that its bytes
     stay in Git.
     `workbench-skills.mjs rollback` also refuses with `invalid-backup` any
     backup whose receipt names a skill that is no longer in the core set, so
     the pre-update Git commit is the recovery point. Verification is not
     complete until each decision is recorded. Check the reverse too: a lane
     directory that has a target `coreSkills` name but no receipt entry is a
     room skill, and `update` would replace it (after copying it to the
     backup), so resolve it as the same-named collision below before running
     `update`. Also treat a Skill Map entry in `AGENTS.md` that names a removed
     or renamed skill as step 5 work (`skill-pointer-dangling`).

     Before the skills `install` or `update`, check each room-added skill's
     name against the core catalog: the `coreSkills` list exported by the
     release checkout's `workbench/tools/workbench-layout.mjs`, which is the
     exact set `install` copies (print it from the release checkout with `node -e
     "import('./workbench/tools/workbench-layout.mjs').then(m=>console.log(m.coreSkills.join('\n')))"`).
     A room skill that has the same name as a core skill stops `install` with
     `skills-collision` once it sits in `.agents/skills/<name>`, and the core
     copy must never silently replace it. Resolve each such skill before the
     move, keeping its content: rename its directory and its `name:` front
     matter to a name the catalog does not use, or merge the room-specific
     content into a room-added skill that has a different name, or record the
     decision to retire it in the upgrade Spec after preserving its bytes in
     Git. Next inventory the room-added skills across both
     `.claude/skills` and `.agents/skills` (the lane itself) by name: list the
     real directories in each root (an entry that is a link into the other
     root is the same skill, not a second copy). A name found in more than one place is a duplicate,
     and the second `git mv` would collide. Compare the copies byte for byte
     (`git diff --no-index --quiet COPY_A COPY_B` exits 0 when they are
     identical). Identical copies: keep one, move it into the lane and
     `git rm -r` the others. Copies that differ are merged into one directory
     or renamed (directory and `name:` front matter) to names that neither the
     catalog nor the lane uses, with the choice recorded in the upgrade Spec.
     A file in an adapter directory that is not a skill moves to a
     project-owned place and is recorded, never deleted. Then move each
     room-added skill that lives in a real `.claude/skills/<name>` directory
     into `.agents/skills/<name>` (`git mv`, using the resolved name) and
     remove the emptied `.claude/skills` directory, along with a
     `.claude/skills` link that does not resolve into the lane; otherwise
     `install` and `update` stop with `adapter-collision`. Doctor fails with
     `room-skill-duplicate` while any name still has two copies in the room. The managed installer never moves, copies, replaces
     or removes a room-added skill, so the operator checks and moves it, and
     the whole-room inventories above still hash it.

     Then update the managed lanes. `--home` names an existing directory (create
     it first; the default is the user's home); an `update` creates its backup
     directory inside it (`.workbench-tools-backup-*`, and
     `.workbench-skills-backup-*` for skills), prints the path as `backup` on
     stdout and records it in the lane receipt's `backups` as a hostless
     `~/NAME`, so `rollback` takes the same `--home` and accepts either that
     recorded `~/NAME` (quoted) or the full path. The skills `update` has one route with no backup: when
     every core skill hash already matches but the `.claude/skills` link is
     missing, it lays the link,
     returns `current` and creates no backup directory, so for that adapter-only
     result the pre-update Git commit is the recovery point. Retain each
     receipt and its backup path, because `rollback --backup DIR` needs it.
     Run `node tools/workbench-tools.mjs
     update --project PATH --home HOME --explicit-update` for the runtime
     tools. For the core skills, a room with no skills receipt runs `install`
     (`workbench-skills.mjs update` there returns `skills-receipt-missing`):
     `node tools/workbench-skills.mjs install --project PATH`, after the
     layout migration declared the lane. It lays the `.agents/skills` lane and
     its `.claude/skills` link down, writes no backup and
     does not use `--home`. A room with a receipt runs `node
     tools/workbench-skills.mjs update --project PATH --home HOME
     --explicit-update` for the core skills in `.agents/skills`.
