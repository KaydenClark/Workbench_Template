
# Upgrading The Harness

Use this section for upgrading the harness; [TEMPLATE_OPERATIONS](TEMPLATE_OPERATIONS.md) provides the surrounding context.

## Upgrading The Harness

These control docs were generated from a specific LLM Workbench version, recorded
in the `Generated from LLM Workbench v3.2.2` stamp at the top of each
doc. That stamp lets you tell when the project is running an older harness than
the current one.

To upgrade:

1. Check the clean LLM Workbench release checkout's releases/changelog for what changed since
   `v3.2.2`.
2. Re-copy only the changed template sections; keep this project's filled-in
   specifics. Never let `[BRACKETED]` placeholders leak back into filled docs.
3. For this existing v3 room, use the pinned source layout migration for any
   additive collections and reconcile `workbenchVersion` to the new version;
   a `current` layout result alone does not advance that stamp. Preserve
   historical genesis and layout provenance. Update managed runtime tools only with that checkout's
   `node tools/workbench-tools.mjs update --project PATH --home HOME --explicit-update`
   and the core skills with its
   `node tools/workbench-skills.mjs update --project PATH --home HOME --explicit-update`;
   keep their receipts and backups as component recovery points. Install each
   optional skill the release selects for this room with
   `node tools/workbench-optional-skills.mjs install --project PATH --skill NAME`.
   A room still on the retired `workbench/skills` lane is relocated to
   `.agents/skills` by the first `migrate`; `skills-lane-rollback` reverses it.
4. Update each doc's version stamp to the new version. Do not rewrite the room
   manifest's historical adoption source to impersonate the newly installed
   component generation.
5. Re-run the full verification suite and record the upgrade in its owning spec.

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
it. A deleted receipt is the readiness gate's finding, not this check's. A
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
