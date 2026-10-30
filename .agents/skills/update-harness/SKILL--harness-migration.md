# Full procedure

[Update Harness entry](SKILL.md). Use the sections relevant to the assigned operation.

## Purpose



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

Read [3. Reconcile the new ownership model](SKILL--3-reconcile-the-new-ownership-model.md#3-reconcile-the-new-ownership-model) when working on this topic.

## 4. Stamp, render, and diagnose

Read [4. Stamp, render, and diagnose](SKILL--4-stamp-render-and-diagnose.md#4-stamp-render-and-diagnose) when working on this topic.

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

Read [Upgrading The Harness](SKILL--upgrading-the-harness.md#upgrading-the-harness) when working on this topic.

## Retired composition skill

The current core replaces retired make-it-so with Orchestrate and default Carry
ownership. Explicit skills update backs up a receipt-owned, unchanged make-it-so
before removing it from discovery. A locally modified or unowned copy refuses
retirement before mutation; preserve and reconcile that content within its
owner's authorization rather than deleting it. A pre-existing room-owned
Orchestrate is also a collision, not permission to replace local work. The
recorded rollback restores retired bytes and the prior receipt; edited newly
added core skills refuse removal. A successful source change alone does not
prove an installed update or a host's discovery choice.

<a id="refusals-and-room-states"></a>
<a id="workbench-self-drift-boundary"></a>
