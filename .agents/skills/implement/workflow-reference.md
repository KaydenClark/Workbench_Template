# Workflow reference

Read only the named operation needed by your assignment. Return to the assigned work owner after following its procedure. Definitions remain in the room Glossary.

## Workflows

Read [Workflows](workflow-reference--workflows.md#workflows) when working on this topic.

## Workspace closeout

Use this at Publish, pause, blocked publication, handoff and end-of-assignment,
and recheck the selected work before main delivery. It accounts for the current
assignment even when its code cannot land. It does not complete a Spec or grant
removal, publication or main authority.

1. At the claimed assignment's start, resolve the existing Spec/Task and private
   recovery collection through the manifest. Capture the starting inventory:

   ```bash
   node workbench/tools/workspace-closeout.mjs snapshot --project . --spec S-### --task TK-### --owner NAME --ignored RELATIVE_PRIVATE_PATH > "$CLOSEOUT_START"
   ```

   Repeat `--ignored` for relevant ignored evidence. Keep the snapshot in approved
   private recovery outside any checkout selected for removal; it contains local
   paths and hashes. Record its returned `digest` as `Workspace baseline
   sha256:DIGEST` in the existing Task Receipt, commit that owner record and retain
   its immutable commit as `CLOSEOUT_BASE`. The snapshot is evidence from its
   observer, not authenticated history. A missing starting inventory leaves the
   pre-existing boundary unverified; do not reconstruct it as a fresh start.

2. Compare ending state with that inventory. Preserve inherited work. Give every
   owned path, staged version, ref and stash a disposition in the existing
   work owner: integrated; pushed pending with a routed continuation; private
   local-only recovery; or blocked with its retained bytes and reason. Reconcile
   useful intent and knowledge through `jot` and `to-docs`. Review privacy before
   publishing; snapshots and raw private recovery stay private.

3. Put the corresponding check inputs in an ordinary local JSON artifact,
   `{ "schemaVersion": 1, "items": [...] }`. Entries name `kind` (`path`, `index`,
   `ref`, `stash` or `worktree`), `path` or source identity, and `state`. Integrated/pending
   entries name the exact `commit` and pending `ref` (`refs/heads/...`); a ref or
   stash entry uses `source` for its original ref or stash commit. A local-only
   path names an independent `copy` outside the removable checkout and a
   `reason`; blocked paths name their reason. An added or changed foreign
   worktree needs a retained disposition with its actual `expectedHead` and
   purpose; the checker preserves its activity boundary. These inputs declare claims;
   the checker compares actual bytes, modes, objects and live remote tips.

4. Fetch the required existing refs through the room's Git procedure, then run:

   ```bash
   node workbench/tools/workspace-closeout.mjs check --project . --baseline "$CLOSEOUT_START" --baseline-commit "$CLOSEOUT_BASE" --dispositions "$CLOSEOUT_DISPOSITIONS"
   ```

   Pending work needs exact remote bytes plus an integration-published route
   from the ordinary entry to its owner, with candidate/ref, checks, authority
   and next action. Publish that safe owner record independently of failing
   code. Git records executable/link mode, not arbitrary filesystem permissions;
   regular modes other than 0644/0755 need private recovery and remain local-only.
   Links use the local host default (observed 0755 on macOS); native Windows
   permission behavior remains unverified. Staged-only local
   copy claims stay unsupported until verified through a named Git candidate.
   Unchanged inherited bytes are retained, not remotely recoverable, unless their
   exact object is in verified remote history. The same holds, changed or not,
   for index entries, stashes, every ref (tags and remote-tracking included), a
   detached HEAD and other registered checkouts, which must be clean with a
   remote HEAD. Verified remote history is one set for every kind: integration,
   declared candidates and each advertised origin tip of a local ref.
   Local-only, missing, changed,
   unexplained or unavailable evidence stays incomplete. Correct the cause and rerun; never weaken the check or discard
   evidence. Record the result and limits in the existing Spec/Task.

5. Keep accounting, remote recovery and workspace release distinct. The checker
   observes Git state, leaves host activity unverified and never removes work.
   Obtain the current named-writer handback and inspect the owning host's active
   use before release. Unknown or active use retains the checkout. Preserve all
   necessary ignored bytes first. Use the app lifecycle for managed worktrees;
   for project worktrees use Git worktree operations. Retain unmerged recovery
   branches, recheck expected tips before any allowed merged-branch deletion,
   and verify actual removal separately. Main permission remains unchanged.

<a id="align"></a>
<a id="approve"></a>
<a id="check"></a>
<a id="cleanup"></a>
<a id="complete"></a>
<a id="confirm"></a>
<a id="deliver"></a>
<a id="explore"></a>
<a id="idea"></a>
<a id="implement"></a>
<a id="jot"></a>
<a id="journey"></a>
<a id="judge"></a>
<a id="lane-sweep"></a>
<a id="map"></a>
<a id="plan"></a>
<a id="prepare"></a>
<a id="promote"></a>
<a id="prototype"></a>
<a id="publish"></a>
<a id="qa"></a>
<a id="record"></a>
<a id="review"></a>
<a id="submit"></a>
<a id="verify"></a>
