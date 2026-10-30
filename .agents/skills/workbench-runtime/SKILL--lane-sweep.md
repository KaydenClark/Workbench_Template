
# Lane Sweep

Use this section for lane sweep; [SKILL](SKILL.md) provides the surrounding context.

## Lane Sweep

Lane Sweep is a read-only report. It counts the live local branches,
remote-tracking branches, worktrees and open PRs, classifies each against its
owning Spec and reports lane drift. Run it from the room root or any of its
worktrees:

```bash
node workbench/tools/lane-sweep.mjs            # human report
node workbench/tools/lane-sweep.mjs --json     # the same report as JSON
node workbench/tools/lane-sweep.mjs --root PATH --prs FILE
```

The output reads from the top:

- **Spec records read at** names the commit whose Spec and Task records the
  sweep classified against. It also says whether that commit equals the
  declared integration ref (the remote-tracking `origin/<integration>` when
  present, else the local branch). A checkout behind integration reads older
  records, so sweep from an up-to-date checkout before acting on a finding.
- **Live counts** are counted on each run. Remote-tracking refs are read as
  last fetched. The command never fetches, so fetch with prune first when the
  remote counts matter. `open PRs unavailable` means the `gh pr list` read
  failed. The reason is under Limitations, and branches and worktrees are
  still reported.
- **Classified** gives one class for each lane. A Spec or Task identifier in
  the branch name, or in a PR's head branch or title, makes the lane `owned`.
  Any width or case of the identifier resolves to the stored record, and a
  Task resolves through its Task record. A worktree is classified through
  its branch, and a detached worktree through the branches at its HEAD. The
  other classes are `unknown-id` (no record carries the identifier),
  `ambiguous-id` (a legacy Task label several Specs share), `unowned`, and
  `integration-lane` or `default-lane` for the manifest-declared
  `git.integrationBranch` and `git.defaultBranch`. Each lane also says whether
  its tip is in integration.
- **Drift** lists the findings, three kinds:
  - `Spec says planned, but a candidate exists`: an owned branch tip is not
    in integration, or an owned PR is open, while the owning Spec's `Status`
    is `planned`.
  - `Merged into an assembly branch, not into integration`: a branch tip
    outside integration that another branch holds, named under
    `contained in`. The lanes, the branch's own local or remote-tracking
    twin and branches at the same commit do not count. A branch stacked under
    another (a Task branch cut from a Spec branch) shows the same way.
  - `Idle merged worktree, safe to delete with git branch -d`: a linked
    worktree whose branch integration contains, with no staged, unstaged or
    untracked change, not locked and not mid-merge, rebase, cherry-pick,
    revert or bisect. Its `cleanup` line is the manual sequence: `git
    worktree remove PATH`, `git branch --set-upstream-to=<integration ref>
    BRANCH` when the branch's upstream does not hold it, then `git branch -d
    BRANCH`. A `warning` counts ignored entries, which `git worktree remove`
    deletes without asking; check them first. Never use `-D`.

  Each finding names its owning Spec, its `SPEC.md` path and status and the
  lane, or says `no owning Spec; no jot target`.

### Route a finding

Each owned finding carries a `jot:` command for the owning Spec's Wiki page:
every page whose frontmatter `source_paths` cites the Spec's `SPEC.md` or
folder (shared, with the page revision read during the sweep), else the
Spec folder's jot topic (the [`jot` skill](../jot/SKILL.md)'s private topic
capture). The content is the finding itself. When a mid-sweep observation is
worth keeping, replace `AGENT` with your agent name, add your observation to
the content if it says more, and run the command from the room root. A
refused stale revision saved nothing: read the page, then retry with the new
revision. Fixing the drift stays the owning Spec's ordinary work.

`--prs FILE` reads the open PRs from a JSON array shaped like `gh pr list
--json number,title,headRefName,baseRefName,isDraft,url` instead of running
`gh`. Exit 0 means the report ran, with or without drift; the sweep is not a
gate, no `doctor` finding and no precondition of `next`, `claim` or `close`.
Exit 2 means an invalid invocation, an unreadable PR file or a root that is
not a Workbench repository.

The sweep writes no file and deletes, merges, pushes, fetches, checks out or
rewrites nothing; it runs neither a cleanup nor a jot command. A finding is a report row and changes no record by itself.
Correct the owning Spec or Task record, or the lane, through that owner's
ordinary work.
