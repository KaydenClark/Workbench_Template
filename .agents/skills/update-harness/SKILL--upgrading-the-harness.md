
# Upgrading The Harness

Use this section for upgrading the harness; [SKILL](SKILL.md) provides the surrounding context.

## Upgrading The Harness

A room's control docs were generated from a specific LLM Workbench version, recorded
in the `Generated from LLM Workbench v[HARNESS_VERSION]` stamp at the top of each
doc. That stamp lets you tell when the project is running an older harness than
the current one.

Check the clean LLM Workbench release checkout's releases/changelog for what
changed since the stamped version, then follow the one procedure for the room's
starting point. It lives in
[section 3](SKILL.md#3-reconcile-the-new-ownership-model) and is not repeated here, so
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
[Workbench self-drift boundary](SKILL.md#workbench-self-drift-boundary) above.
