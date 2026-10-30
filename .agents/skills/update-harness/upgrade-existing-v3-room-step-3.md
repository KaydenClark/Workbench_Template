# Existing v3 room — step 3

Follow this branch of [ownership reconciliation](SKILL--3-reconcile-the-new-ownership-model.md); preserve its preceding baseline, authority and source prerequisites.

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
