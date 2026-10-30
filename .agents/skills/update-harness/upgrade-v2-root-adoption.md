# v2-root adoption

Follow this branch of [ownership reconciliation](SKILL--3-reconcile-the-new-ownership-model.md); preserve its preceding baseline, authority and source prerequisites.

- **A v2-root room, whether it was adopted earlier or not**: it has a root
  `specs/` directory and no `workbench/` support root, so it cannot yet declare
  a lane. Before the route, settle what its own checks cannot see:

  - **Ignored legacy records.** The route's clean check uses `git status
    --porcelain`, which omits ignored files, yet Adoption moves the legacy
    lanes whole (`specs`, `Wiki`, `feedback`, `grilling diary`, `handoffs`, a
    root `MEMORY.md`, a root `WORKBENCH_FEEDBACK.md` or `HARNESS_FEEDBACK.md`,
    and a root `skills`), ignored records included, and resetting to the
    pre-migration commit recreates tracked files only. List the ignored files
    under those paths from the project root:

    ```bash
    git ls-files -o -i --exclude-standard -z -- specs Wiki feedback 'grilling diary' handoffs MEMORY.md WORKBENCH_FEEDBACK.md HARNESS_FEEDBACK.md skills
    ```

    When it lists anything (drop `-z` to read it), pipe the same output into
    `tar --null -T - -cf ARCHIVE` run from the project root, store the archive
    outside the project directory, record the archive's path in the upgrade
    Spec and keep it until the update is verified.
  - **Preconditions Adoption enforces.** The root controls exist as ordinary
    files with no `[BRACKETED]` placeholder: `AGENTS.md`, `BLUEPRINT.md`,
    `RUNBOOK.md`, `TASKBOARD.md`, `CLAUDE.md` and `README.md`, plus
    `GLOSSARY.md` and `ARCHITECTURE.md` in a migrated room; a legacy room
    that still holds `LEXICON.md` as its ordinary room-root file is not
    refused for lacking those two, which `migrate` installs from the
    Template (step 3). The default branch resolves from `origin/HEAD`, else
    `main` or `master`; the route takes no branch flags. The refusals are
    handled in [Refusals and room states](SKILL.md#refusals-and-room-states).

  Then run the layout route from the checked-out Workbench against the clean,
  committed target:

  ```bash
  node tools/workbench-upgrade.mjs upgrade \
    --project [ABSOLUTE_PROJECT_PATH] \
    --home [USER_HOME] \
    --version [TARGET_VERSION] \
    --layout-only
  ```

  It refuses a dirty or uncommitted target, migrates the legacy lanes once
  through the Adoption seam, installs the receipt-backed runtime tools and the
  receipt-backed core skills lane with its adapters, records
  `provenance.lifecycle: upgrade` with the exact source commit, and writes
  `workbench/sessions/recovery/upgrade-recovery.json` with
  `skills: "lane-install"`, the pre-migration Git SHA and tracked-path
  inventory, and both receipts. It never touches a provider-home discovery
  root. A layout failure reports partial completion and names that
  pre-migration SHA in its `preMigration.gitSha`, a recovery point for tracked
  files only (the ignored records come back from the archive above); the
  recovery record itself is written only on success. Only after it completes
  do you reconcile specs through the manifest the route just declared
  (`workbench/manifest.json`). Never rerun Adoption for an already-adopted
  room; a second `adoption` record contradicts its first.

  Then restore the room's own skills. The route moved a project-owned root
  `skills/` whole into `workbench/sessions/recovery/adoption-legacy-skills`
  and installed only the core skills, so none of those room skills is
  discoverable yet. For each real directory in the archive, apply the rules
  of the v3 route's step 4 below: check its name against the `coreSkills`
  list for a core-name collision, compare same-named copies across the
  archive, `.claude/skills`, `.agents/skills` and the lane for duplicates,
  and rename, merge or retire as that step says. Then move it into
  `.agents/skills/<name>` with its resolved name (`git mv` when the
  archive is tracked, otherwise a plain move followed by `git add`), so the
  lane and its adapters discover it. A file in the archive that is not a
  skill moves to a project-owned place and is recorded, never deleted.
  Record every move, rename and retirement in the upgrade Spec, and run
  `node tools/workbench-skills.mjs verify --project PATH` afterwards; it
  must list each restored skill under `roomLocal`.
