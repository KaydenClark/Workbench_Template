---
name: update-harness
description: Update a project to the current canonical LLM Workbench harness without losing project-specific controls, work state, or proof.
---

# Update Harness

Inherit both mandatory owner judgments under [authority and continuation](../implement/execution-authority.md): explicit confirmation before leaving Explore and explicit execution approval before leaving Prepare. Reuse their sources within scope; delegation and this skill grant neither.

Migrate one existing project to the current canonical LLM Workbench contract.
Reconcile; do not overwrite. The target project's verified truth survives the
template change.

## Invocation

Use `/update-harness [project path]`. If the path is omitted, use the current
repository. Treat an explicitly requested version as the target only after the
canonical source confirms it exists.

Locate the checked-out LLM Workbench repository that supplies the target
version before reading its templates or lifecycle tooling. This public product
is self-contained and does not require a private machine path or external skill
catalog.

## Route selection

Choose the route from the target's starting point before running anything:

- **A v2-root room** (root `specs/`, no `workbench/` support root) takes the
  one-time `tools/workbench-upgrade.mjs upgrade` route. It has two exclusive
  mode flags, `--layout-only` and `--explicit-update`; pass exactly one, because
  passing neither is refused with `explicit-update-required`. Both do the same work:
  they lay the core skills lane and its discovery adapters down inside the
  room from the release checkout. `--layout-only` is the name to use for an
  already-adopted room; `--explicit-update` is the name every one-time upgrade
  historically required.
- **A room already on a v3 support root** takes the maintenance route: the
  additive layout migration, then explicit receipt-backed updates of the
  managed runtime tools and core skills. The one-time route refuses such a
  room with `support-root-exists`.

Neither route reads, compares, marks, backs up or replaces a skill in the
provider home; `--home` only names where a later backup is written. A
same-named skill in a user-scoped provider root is not a room concern, so do
not propose inventorying, backing up or replacing one to make either route run.
Publishing skills to a personal catalog is a separate operation with its own
authorization.

Keep setup human-readable and staged through the documented Genesis, adoption
and explicit-upgrade routes. Verify every consumed source lane before mutation,
then installed behavior in the actual room. Project-owned schemas/templates and
promoted Wiki knowledge travel in project Git; optional private session transport
handles live working context separately. A clean upstream test is not downstream
acceptance. Recheck actual destination refs and preserve unknown remote state.

## 1. Establish authority and source truth

1. Read the applicable root and project-local `AGENTS.md` files completely.
2. Verify the target repository root, branch, remote, upstream, worktrees, and
   dirty state.
3. Verify the canonical Workbench path, branch, remote, dirty state, and current
   version from its `workbench/manifest.json` `workbenchVersion`; this is the
   verified target version used throughout, and a `README.md` restatement is
   only a cross-check.
4. Read the canonical `templates/ADOPTION.md`, the current control templates,
   the upgrade section an older target `RUNBOOK.md` still carries, and this
   skill's [Upgrading The Harness](#upgrading-the-harness).

If the active checkout is dirty or belongs to another work lane, preserve it and
create a separate worktree from the target's verified staging/default branch.
Never stash, discard, or absorb unrelated work merely to make the migration
convenient.

Completion criterion: both source and target are verified live, the migration
base is explicit, and no unrelated dirty state is at risk.

## 2. Inventory and baseline

List every file that steers agents or humans, including root controls,
`CLAUDE.md`, `.claude/`, roadmaps/gameplans, policy/checklist files, taskboards,
specs, and harness feedback. Classify each:

- **Port**: project truth that belongs in a current control file or spec.
- **Fold**: live rules that should move into the current `AGENTS.md` contract.
- **Keep**: project-local design, research, or operations material the harness
  should reference rather than absorb.
- **Retire**: a competing old control or queue that must become a cold archive.

Run the target's documented full verification suite before editing. Read named
PASS/FAIL markers and test totals; do not trust a zero process code when the tool
can print load or parse errors and still exit zero.

If the baseline cannot be taken at all - the suite cannot run for a reason this
change did not cause and cannot repair - record it in the owning spec's
`**Baseline:**` field as `unavailable` with one reason from the closed set
`host-restricted`, `product-broken-as-found`, or `owner-declined-on-boundary`,
the evidence for that reason, and the statement that the requested change is
not implicated. A reason outside that set is refused. The change then proceeds
against that record, and every later completion criterion compares against the
recorded state instead of a green run and says so. A red baseline is not
unavailable: it still stops unless the owner explicitly expands the task, and
`unavailable` never relabels a failing suite.

Completion criterion: every steering file is classified and a reproducible,
green pre-migration baseline is recorded, or the baseline is recorded
`unavailable` with its reason and evidence. If the baseline is red, record the
existing failure and stop unless the user explicitly expands the task to fix it.

## 3. Reconcile the new ownership model

Compare the target's current harness with the canonical templates. Copy only
the changed contract; preserve filled project-specific scope, Git rules,
verification commands, product boundaries, and safety rules.

Settle the target's starting point first:

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
    handled in [Refusals and room states](#refusals-and-room-states).

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
- **A room already on a v3 support root**: never rerun Adoption or the
  one-time route. From the release checkout, in order:
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
  3. Stamp the manifest `workbenchVersion` with the verified target version
     and set its `skillPolicy` to the one in the release checkout's manifest;
     no command writes either for a current-schema room, and a stamped
     manifest validates only with the target release's policy. A manifest from
     an older schema-2 release can also have no `git` block: `validate`
     accepts that, `migrate` never adds the `git` block, and `doctor` then
     reports `integration-branch-undeclared`. From the room root, `node -e
     "console.log(JSON.parse(require('node:fs').readFileSync('workbench/manifest.json','utf8')).git === undefined ? 'no git block' : 'git block present')"`
     tells which. When it prints `no git block`, add by hand in the same edit
     `"git": {"defaultBranch": NAME, "integrationBranch": NAME}`, because no
     command writes it for a current-schema room, with the names derived the
     way the tool derives them for a new room: the default branch from
     `origin/HEAD`, else `main` or `master`, else the checked-out branch, and
     the integration branch by listing every local branch and every
     remote-tracking branch of any remote (`git branch --all`), taking a
     branch named exactly `integration` if one exists, else one that matches
     `integration` ignoring case, and recording that existing spelling
     (`Integration` stays `Integration`). Record the lowercase `integration`
     only when no case-variant branch exists: recording it beside an
     existing `Integration` would create and publish a second branch. The two
     names must differ ignoring case. Record both names in the upgrade Spec;
     section 6 requires the integration branch on the remote. Confirm with
     `node workbench/tools/workbench-layout.mjs validate --project PATH`. The manifest's
     `provenance.source` and lifecycle stay historical; a release mismatch
     reported as `unverified-provenance` alone is not authority to run
     `record-source`. `migrate` runs before this stamp, so a collection file it
     creates carries the room's earlier version stamp, for example
     `workbench/wiki/features/README.md` in a room that predates the `features`
     collection, and `doctor` then reports `stale-stamp`. After the stamp,
     bring each such file to the target version: re-copy it from the release's
     `templates/wiki/` (filling `[HARNESS_VERSION]` with the target number and
     the other placeholders) or, because it holds no room edit yet, set its
     `Generated from LLM Workbench` line to the target version. Then run
     `node workbench/tools/workbench-layout.mjs seed-documents --project PATH
     --version [TARGET_VERSION]` to refresh eligible seeded documents; a copy
     the room changed is retained and reported. It walks only the target
     release's seeded list, so a document the earlier release seeded and this
     one no longer does (the notepad `handoff.example.json` is the observed
     case) is neither written nor listed under `retained`: the room keeps its
     copy and its old seed-record entry, and `doctor` then reports `stale-seed`
     (the table row below says to record it). Always pass `--version`, and
     never run `seed-documents` before the stamp: without it the command reads
     the room's earlier manifest version and stops with
     `invalid-source-identity` against the release checkout. Then rerun
     `migrate` until it reports `current`.

     A room that still holds `LEXICON.md` receives `GLOSSARY.md` and
     `ARCHITECTURE.md` from the Template through `migrate`, which never
     deletes the Lexicon (owner decision, PR431 comment 6270358739): once
     every line has landed it reports the file `archived` in place with a
     `lexicon-archived` attention finding, and otherwise keeps it and
     names the unlanded lines in a `lexicon-unlanded` finding. Deleting
     the archived Lexicon is a separate operator step after a clean
     report: `node workbench/tools/workbench-layout.mjs retire-lexicon
     --project /absolute/room` (same `--version` and source flags as
     `migrate`), which reruns the report, runs the installed Wiki
     validation (`wiki.mjs validate` must report no error; a term article
     whose declared casing differs from its glossary entry or that breaks
     the note schema refuses with `lexicon-wiki-invalid`), backs the file
     up in the recovery collection and only then removes it, reporting
     `retired`; anything else reports `refused` with the finding and
     changes nothing. A page under the Wiki archive collection and a
     blockquote of a claim are never landing evidence, and an ignored
     Wiki router routes nothing. Each generic line uses its pinned
     successor evidence; matching the current Template as a whole does not
     prove an older line survived. A term's definition must survive under
     that entry or its linked explanation, and its distinction in that
     explanation. Both successor controls and Wiki pages pass one public
     ordinary-file admission check before their text is read for landing
     or readiness. Private captures, ignored paths and uncertain Git
     policy provide no deletion evidence. Nonignored untracked files and
     genuine non-Git rooms remain supported; the update never force-adds
     or exposes an ignored successor. Before retirement can complete,
     finish the installed controls: draft the `ARCHITECTURE.md`
     description and codemap from project evidence for grilling to
     confirm, set its status, and replace `GLOSSARY.md`'s description and
     empty project-term slot. Unfilled fields preserve the Lexicon and
     leave migration `partial` with `unfilled-control`; a retained Wiki
     router that does not yet link the installed vocabulary articles
     leaves it `partial` with `lexicon-unrouted` (add the Template
     router's Vocabulary section); rerun `migrate` after reconciliation.
     `migrate` and `retire-lexicon` run only from the verified clean
     release checkout at the requested `--version`, refusing with
     `invalid-source-identity` otherwise. Move each other unlanded line
     into its home, confirmed by grilling, remove each landed row from the
     room's `LEXICON.md`, rerun `migrate` until it reports the Lexicon
     `archived`, then run `retire-lexicon`.
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
     `~/NAME`, so `rollback` takes the same `--home`. The skills `update` has one route with no backup: when
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
  5. Once step 4 has installed or updated the skills lane, inventory and hash
     the project-owned controls, product code, active specs, completed evidence
     and Wiki content, then reconcile only the intended template sections
     through the existing manifest, preserving filled project-specific content,
     as the control reconciliation below describes (it also brings in
     `STARTUP.md`). That procedure requires the skills first: a brief's `Skill
     Map` entry for a skill the lane does not hold is reported as
     `skill-pointer-dangling`, so never reconcile controls before step 4.
  6. Verify managed bytes: rerun both `verify` commands; each must report no
     receipt drift, and every installed managed hash must equal the release
     checkout's bytes.
  7. Once the section 4 render is done, commit the updated room on a `claude/`
     task branch before the after inventory and the rollback exercise, because
     that commit is the local recovery point they need and it clears the
     `untracked-controls` finding (publishing the branch is [section
     6](#6-publish-through-the-targets-workflow)). Then take the after
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
   and every divergence it recorded. Copy `STARTUP.md` from `templates/STARTUP.md`
   when the room has none and name its reconciliation writer; reconcile an
   existing one from current owners instead of overwriting it. Bring
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

### Refusals and room states

Every command above refuses with a code in its JSON `error.code` (or a
`status` of `invalid`, `blocked` or `partial`). A refusal changes nothing
unless it says otherwise, so fix the named cause and rerun the same command;
never work around one by hand-copying a managed file, hand-editing a receipt or
skipping a gate. Use the Git commit recorded in the before state as the
recovery point whenever a response below says so.

| Result | Meaning and response |
|---|---|
| `explicit-update-required`, `invalid-invocation` | A flag is missing, duplicated or the wrong mode: the one-time route needs exactly one of `--layout-only` and `--explicit-update`, every installer needs `--project`, and `update` needs `--explicit-update`. A `--home` directory that does not exist is refused here too, with an ENOENT message from creating the backup directory inside it. Fix the command; nothing ran. |
| `invalid-project`, `missing-git-recovery-point`, `git-status-failed`, `inventory-failed`, `dirty-project` | The one-time route needs an ordinary project directory, a Git work tree with at least one commit and a clean status. Commit the room's own work on its branch (never stash or discard it) and rerun. |
| `support-root-exists` | The room already has `workbench/`: take the v3 maintenance sequence. A stray `workbench/` left by an abandoned attempt is handled under `partial`. |
| `invalid-source-identity`, `invalid-source`, `invalid-bundled-core`, `invalid-maintainer-skills` | The release checkout is at fault, not the room. It must be the checkout root with an `origin` URL and a 40-character HEAD, clean under `workbench/tools`, `.agents/skills` and `templates`, its skills lane must hold exactly the core skills, and `--version` must equal its manifest `workbenchVersion`. Correct the checkout (not the room) and rerun. The same code comes from `migrate`, `seed-documents`, `install` and `update`. |
| `partial` with `upgrade-failed` or `migration-failed` | The one-time route wraps Adoption's report, so read `error.message`; Adoption's own refusals arrive as that message without their code. If no `workbench/` directory exists, nothing moved (the route may have created the local `integration` branch ref, which stays). If `workbench/` exists the room is partly migrated: recover from `preMigration.gitSha` in a fresh worktree (or reset the room only after saving the partial output elsewhere), restore the ignored archive there, fix the cause and rerun. Causes follow. |
| `unreconciled-controls` | Named root controls are missing, are links, or still hold `[BRACKETED]` placeholders. Author each from the room's own code, tests and steering docs on a branch, commit, rerun; never copy a template over an existing control. |
| `partial` with `unfilled-control` or `lexicon-unrouted`; `lexicon-unlanded` | From `migrate` or Adoption on a room that still holds `LEXICON.md`. `unfilled-control`: `GLOSSARY.md` or `ARCHITECTURE.md` is missing, still carries placeholders, breaks its pinned format, or is not the ordinary room-root file (a link or a shared hard link). `lexicon-unrouted`: the Wiki router does not yet link the installed vocabulary articles; add the Template router's Vocabulary section. `lexicon-unlanded` (attention, not a refusal): the named Lexicon lines have no home in their designated owner. Reconcile as step 3 says, keep `LEXICON.md` until `migrate` reports it `archived` (`lexicon-archived`, attention), and rerun; the update never deletes it. |
| `refused` with `lexicon-wiki-invalid`, `lane-collision` or a report finding | From `retire-lexicon`, the explicit operator step. `lexicon-wiki-invalid`: `wiki.mjs validate` reports an error (a term article's declared casing or note schema, say); repair it, confirm the article still holds its explanation, rerun. A report finding means `migrate` would not report `archived` either; reconcile as step 3 says. Nothing was deleted or written. |
| `legacy-path-collision`, `wiki-collision`, `wiki-memory-collision`, `feedback-collision`, `lane-collision` | A legacy lane is a link or file, both root `MEMORY.md` and `Wiki/MEMORY.md` exist, both root feedback names exist, or one sits beside `feedback/WORKBENCH_FEEDBACK.md`. Merge each pair into one ordinary file or directory by hand, commit, rerun. |
| `integration-branch-missing`, `default-branch-missing`, `invalid-branch`, `integration-branch-not-distinct` | The route takes no branch flags: it declares the default branch from `origin/HEAD`, else `main` or `master`, else the checked-out branch, and uses an existing `integration` branch or creates it. Make `origin/HEAD` resolve (`git remote set-head origin --auto`) or create the default branch, rerun, then read `git.defaultBranch` and `git.integrationBranch` in the manifest. |
| `layout-initialization-failed` with `attributes-ignored`, `attributes-flagged`, `attributes-unreadable` | `.gitattributes` is ignored by Git, marked skip-worktree or assume-unchanged, unmerged or unreadable, so the line-ending block could not be written. Follow the message's own repair (remove the ignore rule or `git add -f`, clear the flags, finish the merge, fix the permissions) and rerun; the Upgrading The Harness section lists the same conditions. |
| `upgrade-required` | The manifest is schema 1 (the v3.0 five-lane layout). Archive its ignored files first: run the step 1 listing of every ignored file under `workbench/`, which covers the two legacy session lanes `migrate` moves, then run `migrate` once: it converts the layout in one step, stamps `--version` and the current `skillPolicy`, and may itself return `partial`, which means recover from the before commit. Then continue at step 3's `seed-documents`, and expect `tools-receipt-missing` at step 4. |
| `invalid-manifest`, `invalid-version`, `invalid-provenance`, `invalid-wiki-profile`, `invalid-workbench-identity`, `invalid-lane`, `invalid-collection` | The manifest is damaged or hand-edited. Restore it from the before commit or repair it to the shape the release writes (`--version` and `workbenchVersion` are `vMAJOR.MINOR.PATCH`; the lanes are the seven the release declares, or the six declared before the skills lane). Never regenerate `workbenchId` to clear `invalid-workbench-identity`: reconcile the identity. `invalid-lane` from an installer for the skills or tools lane means the lane is undeclared: run `migrate`. |
| `invalid-skill-policy` | The manifest `skillPolicy` is not one the manifest's version accepts, or names a discovery root the installer does not support. Copy the release manifest's `skillPolicy` as step 3 does; if `migrate` in step 2 hits it because the room's version has no frozen policy, do step 3's stamp first and then rerun `migrate`. |
| `unsafe-lane`, `lane-collision`, `unsafe-tool`, `invalid-receipt` | A link, a file or a multiply linked file sits where a lane directory or managed file belongs, an undeclared `workbench/sessions/recovery` holds material, or a receipt names an unknown managed file. Move the colliding path aside preserving its bytes and target, record it in the upgrade Spec, restore a damaged receipt from the before commit, and retry. |
| `missing-collection` | From `validate` or `migrate`: a declared collection or Tracker directory is absent (Git stores no empty directory). Create it with a `.gitkeep`. After the additive steps, `migrate` returning it with `missing` templates is the expected interim state of step 2. |
| `sessions-not-ignored` | Live session files are tracked (`published` or `leaked` paths) or a reusable template is ignored (`hidden`). Run `git rm --cached` on each tracked live path (the file stays on disk), restore the `workbench/sessions/.gitignore` rules the message names, remove any rule that hides a template, commit, and rerun. |
| `identity-busy`, `identity-write-failed` | Another layout command holds `workbench/.identity.lock`, or a crashed run left it. Confirm no Workbench command is running, delete `workbench/.identity.lock`, and rerun; for `identity-write-failed` fix the path or permission the message names. |
| `tools-receipt-missing`, `tools-collision`, `tools-installed` | `update` finds no tools receipt (a schema 1 room, or a lane that predates receipts): run `node tools/workbench-tools.mjs install --project PATH` after the layout migration. The before-state `verify` of step 1, run from a newer release against a room whose receipt predates some tools, also reports `tools-receipt-missing` with the `unaccounted` tools, because the release manages tools the room does not have yet: that is expected, it hides a hand edit that only the room's `doctor` shows, and `update` resolves it. `tools-collision`: runtime tool files already sit in the lane without a receipt; hash and move them aside, record them, then install. `tools-installed`: a receipt exists, so use `update`. The coverage cases `verify` reports for a receipt are repaired in Upgrading The Harness below. |
| `tools-receipt-drift`, `skills-receipt-drift` | `verify` found a managed file or core skill that differs from its receipt; its `drift` entries give the reason. Before the update, copy any hand edit the room wants to keep into the upgrade Spec or a room-added skill under another name: `update` backs the edit up and replaces it. For skills the reasons are `unaccounted` (the receipt lacks a core skill, which `update` records), `missing` or `unsafe` (`update` restores it), `modified` (as above) and `adapter` (a discovery root that does not resolve into the lane: `update` lays a missing link, and a real directory is `adapter-collision`). |
| `skills-receipt-missing`, `skills-installed`, `skills-collision`, `adapter-collision` | Step 4 covers these: `install` when no receipt exists, `update` when one does, the same-name and duplicate resolution before the move. An unreadable skills receipt reads as missing: restore it from the before commit, never write one by hand. |
| `invalid-backup`, `rollback-conflict`, `rollback-mismatch` | `--backup` must be a directory the lane's current receipt records, with a receipt the tool can restore; `rollback-conflict` means a managed file changed after the update, and `rollback-mismatch` that restored bytes differ. Stop, never force: record the refusal and use the before Git commit as the recovery point. |
| `skills-relocation-collision`, `skills-rollback-unavailable`, `skill-lane-legacy`, `retired-skills-lane-link`, `room-skill-duplicate` | `skills-relocation-collision`: `migrate` or `skills-lane-rollback` found a real directory or a foreign link at `.agents/skills`, `.claude/skills` or `workbench/skills` and wrote nothing; move those skills into the lane under step 4, then rerun. `skills-rollback-unavailable`: the room is not on the `.agents/skills` lane, so there is nothing to roll back. `skill-lane-legacy` is doctor's attention finding for a room still on the retired `workbench/skills` lane: run `migrate`. `retired-skills-lane-link` is doctor's attention finding for a room doc whose relative link still resolves into the retired lane: point it at the named `replacement`. `room-skill-duplicate` fails doctor while one skill name has more than one copy inside the room (for example a leftover `workbench/skills/<name>` or a real `.claude/skills`): keep the `.agents/skills` copy, compare the others byte for byte, and remove or rename them as step 4 describes. |
| `project-local-skills`, `skill-lane-missing`, `skill-adapter-broken`, `skill-pointer-dangling`, `stale-seed` | Findings the room's `doctor` reports after the update. A root `skills/` directory shadows the lane: move its skills into the lane under unused names or remove it once its bytes are in Git. `skill-lane-missing` and `skill-adapter-broken`: run the step 4 `install` or `update`. `skill-pointer-dangling`: restore the skill or re-point the entry in step 5. `stale-seed` for a document the release no longer seeds (such as `handoff.example.json`) has no repair command: record it in the upgrade Spec. |
| `stale-stamp` | A doctor attention finding: a Wiki contract file or the router is stamped with a version other than the manifest's. `migrate` ran before the stamp, so a collection file it created (such as `workbench/wiki/features/README.md`) carries the earlier one, and `seed-documents` does not refresh the Wiki contract files. Bring each to the target version as step 3 and section 4 say, or record it as pending reconciliation. |
| `unverified-provenance` | A doctor attention finding: `provenance.source` is missing, is not a full 40-character commit, names no repository or records a release other than `workbenchVersion` (after the step 3 stamp it still names the earlier release). The source stays historical, so a release mismatch alone is not authority to run `record-source`: record the finding as accepted in the upgrade Spec. A missing or malformed source is re-recorded from a clean release checkout with `node workbench/tools/workbench-layout.mjs record-source --project PATH`, which writes only `provenance.source`. |
| `legibility-undeclared`, `legibility-unconfirmed` | Doctor attention findings: the manifest declares no runtime surface for some of `run`, `operate`, `inspect`, `errors`, `journey` and `measure`, or declares a draft still awaiting confirmation. Nothing blocks and the update does not need it. Name each entry from the room's real commands, paths or pointers with `node workbench/tools/workbench-layout.mjs declare-legibility --project PATH --run CMD --operate CMD --inspect CMD --errors CMD --journey CMD --measure CMD` (all six are required; a bracketed placeholder such as `[RUN_COMMAND]` keeps a gap visible and `--pending` marks a draft), or record the finding in the upgrade Spec as accepted and pending. Never invent a command. |
| `untracked-controls` | A doctor attention finding: the update's new files are untracked under the root controls, the ADR collection or the spec lane. Commit the updated room on the task branch (step 7) and rerun `doctor`. |
| `integration-branch-undeclared` | The manifest has no `git` block, as an older schema-2 manifest can lack. `validate` passes and `migrate` never adds it, so `doctor` reports this error (it blocks nothing) and the Genesis readiness check refuses it. Add the `git` block with `defaultBranch` and `integrationBranch` as step 3 says, validate, and publish per section 6; `integration-branch-missing` follows until that branch exists. |

A `seed-documents` result lists each document it `retained` and why (the room
changed it after seeding, or it matches no generation the command can verify).
That is not a refusal: record each retained document and its reason in the
upgrade Spec, since the command will not refresh it.

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

## 5. Re-verify and prove the migration

Run the same full project suite as the baseline, plus harness-specific checks:

- the canonical Workbench evaluator when available, run from the release
  checkout as `node tools/evaluate-workbench.mjs --path /absolute/project` (it
  takes `--path`; `--project` is refused as an unknown argument), recorded as a
  diagnostic rather than product-outcome proof;
- managed-byte verification: `node tools/workbench-tools.mjs verify --project
  PATH` and `node tools/workbench-skills.mjs verify --project PATH` from the
  release checkout report no receipt drift;
- for an already-v3 room, a before/after byte inventory proving that controls,
  product code, active work, completed evidence, Wiki content and room-added
  skills changed only where the owning upgrade spec intended, plus the
  managed tool and skill receipts, the backups an update recorded (a first
  skills `install` records none) or an exercised rollback;
- placeholder and stale-version search;
- retired control-name and duplicate-queue search;
- control-file stamps and mechanical scope alignment;
- diff review for lost project-specific rules or accidental product changes,
  backed by the control fidelity report run from the release checkout:

  ```bash
  node tools/control-fidelity.mjs report --project /absolute/project
  ```

  Every `dropped` or `changed` line it lists for `AGENTS.md` is either restored
  or recorded as a decision in the upgrade spec or an ADR under
  `workbench/docs/adr/`, except a line labeled a generation difference, which
  is the template's own change and is reconciled to the current shape; the
  report labels a checkout-versus-manifest version mismatch and never blocks.
- feedback harvest: append observed harness friction to the manifest-declared
  feedback lane, or record `none observed` with the reason in the upgrade spec.

Record evaluator score and missing-evidence diagnostics, but do not pad the
control plane merely to satisfy keyword heuristics. Native behavior proof,
doctor, and truthful selection state remain the completion gates.

Record the upgrade in a dedicated spec. Close it only when its acceptance
criteria, proof, documentation impact, and completion result are complete. Then
render and doctor again so the completed migration leaves the hot board.

Completion criterion: project results match or improve on baseline - or, where
the baseline was recorded `unavailable`, the result compares against that record
and says so instead of implying a green baseline was taken - harness checks are
green, and the migration spec contains the exact evidence.

## 6. Publish through the target's workflow

Review the final diff and status. Follow the target's branch and integration
rules. When authorized by those controls, commit and push the migration branch;
open the normal review PR into its staging/default branch. Never promote to an
owner-only final branch or merge a review-held PR without explicit approval.

Report:

1. What changed.
2. Why it changed.
3. Risks or side effects.
4. Pre/post verification and lifecycle results.
5. Branch, commit, push, and PR state.
6. The exact remaining owner gate, if any.

A room with no remote cannot meet either box below: a local commit is partial,
never remote recovery (see the `implement` skill's close and recover step).
Commit the update on the prefixed task branch as the local recovery point (the
before Git SHA stays the whole-room recovery point), record the missing remote
as the publication blocker in the upgrade Spec, report the update
`in-progress` and stop there. Adding the remote and pushing the branch and the
integration ref is the owner's call; never invent a remote or mark the Spec
done.

Completion criterion: the verified migration is recoverable remotely or the
specific publication blocker is stated without claiming completion. The
update is `done` only when both boxes hold:

- [ ] The upgrade exists as a commit on a prefixed task branch pushed to the
      default remote; migration output left untracked is `in-progress`, not
      `done`.
- [ ] The declared integration branch (`git.integrationBranch` in
      `workbench/manifest.json`, which the migration declares) exists on the
      default remote at the migration commit and is distinct from the default
      branch. Create it from the default branch when absent, push it and verify
      the remote ref. A creation or publication blocker leaves the upgrade incomplete.

## Upgrading The Harness

A room's control docs were generated from a specific LLM Workbench version, recorded
in the `Generated from LLM Workbench v[HARNESS_VERSION]` stamp at the top of each
doc. That stamp lets you tell when the project is running an older harness than
the current one.

Check the clean LLM Workbench release checkout's releases/changelog for what
changed since the stamped version, then follow the one procedure for the room's
starting point. It lives in
[section 3](#3-reconcile-the-new-ownership-model) and is not repeated here, so
that no gate can drift between two copies:

- A room already on a v3 support root takes the v3 maintenance sequence there:
  before state, additive layout migration, manifest stamp and `skillPolicy`,
  validation and seed refresh, the catalog check and the receipt-backed tools
  and skills updates (with the skills `install` fallback), then control
  reconciliation (managed lanes first and controls after), both `verify`
  commands, the after inventory and the rollback exercise. Sections 4 and 5
  then stamp the reconciled controls, render, re-verify and record the upgrade.
- A v2-root room takes the one-time layout route (`workbench-upgrade.mjs
  upgrade`) in the same section.

Re-copy only the changed template sections and keep this project's filled-in
specifics; never let `[BRACKETED]` placeholders leak back into filled docs, and
do not rewrite the room manifest's historical adoption source to impersonate
the newly installed component generation.

The runtime tools in `workbench/tools/` are Workbench-managed: their receipt
(`.workbench-tools.json`) records the exact source release, commit, and file
hashes. Verify them with `node /PATH/TO/LLM_WORKBENCH/tools/workbench-tools.mjs verify --project .`
and replace them only through `update --explicit-update`, which backs up the
previous files and records a rollback path. Never hand-edit a managed tool.

This project's own `node workbench/tools/spec-workbench.mjs doctor` runs the
same receipt hash check from the tools this project carries, so a hand-edited
managed tool fails the check here with no release checkout present. It fails at
the `all` effect, which also makes `next` and `claim` refuse until the runtime
is repaired. The check runs only when `workbench/tools/` carries a receipt; a
receipt that cannot be read, records no file hashes, names a file outside that
lane, or does not account for every managed tool is reported as
`tools-receipt-missing` rather than switching the check off. That last one
matters because the drift report names the file it found: deleting that key
would otherwise switch the check off for exactly the hand-edited tool. The
authoritative list of what is managed ships inside the installed tools
themselves, so a receipt is checked against that list and not against whatever
the lane happens to hold - a managed tool deleted along with its key is still
named. Dotted entries are skipped.

The two coverage conditions have different repairs. A managed tool the receipt
does not account for is refreshed with `update --explicit-update` from the
release checkout, which rewrites the lost key and restores a deleted managed
file. A file the managed runtime does not include has to be moved out of the
lane instead: `update` cannot adopt it and reports `current`, and `install`
refuses a lane that already carries a receipt.

Without a release checkout `doctor` cannot say whether the receipt went stale
or the bytes were changed - it reports every drifted file as
`source-unavailable` - so run `verify` from the release checkout to classify
it. The exception is a file that differs only by CRLF line endings: doctor
reports it `line-endings` in the room itself. The doctor remedy, printed once
under the finding in plain `doctor` and under `drift[].remedy` in `doctor
--json`, is two steps, each a call into the release checkout's own tested function, run from
the room root (keep the quotes around `/path/to/release`); each refuses with its
reason and changes nothing it cannot finish safely, and doctor itself only
diagnoses. First commit the Workbench block as the last lines of `.gitattributes`:
a room that already has a manifest cannot run `workbench-layout.mjs init` again,
so append it with the `ensureRoomLineEndingPolicy` step, which refuses a
directory that is not a Workbench room root (no `workbench/manifest.json`), a
symlinked or multiply linked `.gitattributes`, one marked skip-worktree or
assume-unchanged (a sparse checkout that leaves it out sets skip-worktree; the
index would hide the change, so the commit would omit the policy), and one that
Git ignores while untracked (remove the ignore rule, or force-add an
existing `.gitattributes` with `git add --force .gitattributes`; the command
fails when no such file exists), and prints what it did; or
copy the block from the `.gitattributes` that `init` writes in a fresh scratch
project. Then, with no unstaged change under `workbench/`, rewrite the tracked
files with the `rewriteRoomLaneCheckout` step (or make a fresh clone). It
regenerates each file from the Git index the way a fresh checkout would and
deletes nothing: the files are staged by `git checkout-index` into a scratch
directory and renamed over their targets one at a time, so a failure partway
leaves every tracked file either as it was or rewritten, and running the step
again finishes the job. It prints how many files it rewrote, and refuses before
changing anything for a directory that is not a room root or Git work tree, a
tracked gitlink (submodule) or any entry that is not a plain file or symlink, a
file marked skip-worktree or assume-unchanged (`git ls-files -v -- workbench`
lists those as `S`, `h`, or `s` for both; sparse-checkout sets `S`), an
unmerged file, an unstaged edit (staged changes survive), and a repository where
the line-endings policy is not in force (the rewrite would write CRLF back).
Untracked and ignored files are never touched. A deleted receipt is the readiness gate's finding, not this check's. A
deleted managed tool that another managed tool imports stops `doctor` from
loading at all, so what appears is a loader stack trace rather than a finding.

The source checkout must have a concrete `origin` and 40-character `HEAD`, and
its managed source lane must be clean; otherwise install/update refuses before
creating a receipt or backup.

Managed-tool updates and rollbacks reject symlinked lane ancestors, linked or
nonregular managed files, and unsafe backup entries before copying or creating
backups. Resolve the path collision while preserving its target, then retry the
explicit operation. Ordinary drift in a regular managed file still receives a
backup and can be restored.

Layout initialization and schema migration preserve existing session ignore
rules and reject linked destination paths before writes. ADR creation, register
rendering and direct owner promotion also reject unsafe destination chains and
use private temporary files; direct promotion refuses a `--from` source
outside the repository root, or one reached through a symbolic link, with
`invalid-note` and writes nothing. Legacy Wiki adoption moves existing
knowledge before seeding only the missing contract files.

Treat a harness upgrade like any other change: smallest correct diff, verified,
with proof. If a downstream lesson should flow *back* to the harness, capture it
per the project's `WORKBENCH_FEEDBACK` convention.

The canonical Workbench's own self-drift check before and after its change is the
[Workbench self-drift boundary](#workbench-self-drift-boundary) above.
