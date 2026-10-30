
# Worker: selection, implementation and hand-back

Use this section for worker: selection, implementation and hand-back; [SKILL](SKILL.md) provides the surrounding context.

## Worker: selection, implementation and hand-back

Examples name S-001/TK-001; substitute the actual IDs and quoted values.

Ordinary entry follows RUNBOOK through relevant context and TASKBOARD to current owners;
use `ARCHITECTURE.md` Routes and `GLOSSARY.md` meanings when needed.
Verify root, branch, remote, upstream and dirty state first.
Preserve unrelated work and obey the assigned stance/file lane.

For a setup-only Round One assignment, a fresh agent follows that route, checks
the manifest, relevant Wiki and ADRs, and runs read-only configuration checks.
Return the result in chat only: no feedback report, handoff, checkpoint,
self-created task, or other delivered prose artifact. Internal JSON capture
follows the meaningful-work rule and is reconciled at closeout; it does not
turn a chat-only setup check into a reporting assignment. Round One precedes
feedback testing.

For ordinary pickup run these read-only commands before claiming:

```bash
node workbench/tools/spec-workbench.mjs doctor
node workbench/tools/spec-workbench.mjs next --json
node workbench/tools/spec-workbench.mjs show S-001
```

Read the returned TASK.md, destination, blockers and acceptance. `next` offers
ready eligible work; an existing in-progress assignment resumes from its record
and `show`, not a second claim. `claim` takes a Spec ID and selects one eligible
Task; it does not take a TASK.md path. Plain Spec blockers require complete or
superseded; plain Task blockers require done. `S-001:delivered` instead requires
all prerequisite Tasks done, checked acceptance and a content-bound PASS whose
candidate and committed Spec/Task content are contained in integration. Fetch
integration before relying on that local-ref check. `owner:<decision>` is never
automatically satisfied; remove it only after the authorized decision resolves
it. Investigate `blocked-without-blocker` and `unknown-blocker-qualifier` rather
than bypassing them.

`next --review --json` is a separate read-only review offering. Its `review`
array contains eligible Spec and Task cards; `excluded` keeps dependency,
capability, competing-claim and child-gate exclusions visible. It uses the
source-qualified identity, so legacy numeric Task labels remain Spec-scoped.
Default `next` still offers only eligible To-do work. Neither review visibility
nor eligibility records a verdict, independent approval or owner Human QA.
`--review` is accepted only by `next`; it never turns `claim` into a review action.

A minimal Backlog Spec needs its matching title (which may carry the one-sentence
intent), `Spec ID`, and explicit `Status: planned`. Other metadata and the
Task set may be absent. Unknown priority remains null and sorts after known
priorities in JSON; missing people/dates are not invented. Existing pre-cut
Tasks are preserved. Before activation, expand the packet to the full active
Spec contract and supply executable Tasks. The default Markdown board remains
in use; `render --format json` still writes only `TASKBOARD.preview.json`.

For an active table-backed Spec, this one-shot migration precedes its first
record-backed claim. Omit conversion when `tasks/` already exists. It converts
unfinished rows, retaining done rows as history; a second conversion refuses.
A planned Spec needs `--activate` only after its accepted plan is executable.
These migration alternatives are not steps to repeat on an already claimed Spec:

```bash
node workbench/tools/spec-workbench.mjs convert-tasks S-001
node workbench/tools/spec-workbench.mjs convert-tasks S-001 --activate
```

Commit the ready packet before the coordinated claim. From a clean Task branch,
claim publishes its record/projection commit to the configured remote. `--local`
is an explicit local-only alternative, not remote recovery proof.

```bash
node workbench/tools/spec-workbench.mjs claim S-001 --agent codex
```

Implement red/green at the product seam; preserve failed-attempt proof and
unmerged results. Record meaningful checks while the Task is in progress:

```bash
node workbench/tools/spec-workbench.mjs receipt S-001 --task TK-001 \
  --tests "[TESTS RUN AND RESULT]" --docs "[DOCS TOUCHED OR none]" --remaining-gap "[GAP OR none]"
```

Self-check acceptance, actual behavior, documentation and remaining gaps; hand
those results to the Dispatcher, and put the two merge answers (section 4) in
the merge request description. Normal Task hand-back has no separate Task
approval ceremony. Commit and push the verified candidate and Receipt before
close; compare local HEAD to the actual remote branch tip. `close` refuses dirty
or unpushed work unless `--git-state-reason` records the truthful exception; it
closes the first in-progress Task, appends its final Receipt and Spec evidence,
and never selects a ready Task or completes the Spec. One writer must confirm
which record will close. A Receipt records Git/test facts, not approval.

```bash
node workbench/tools/spec-workbench.mjs close S-001 --agent codex \
  --proof "[NAMED VERIFICATION]" \
  --docs "[DOCS UPDATED OR Docs checked; no update needed + reason]" \
  --remaining-gap "[GAP OR none]"
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
```

`close` reads repository state before it writes anything and refuses a claim
the repository contradicts, naming what it found: `dirty-tree` lists anything
`git status --porcelain` shows, untracked files included, and `unpushed` means
no remote-tracking ref contains HEAD, naming the upstream distance or the
missing upstream, gone upstream, detached HEAD or absent remote. The refusal
names its own remediation: commit and push, or rerun with
`--git-state-reason "<why>"` (one line) when the state is a truthful
exception. The observed state and the reason are then appended to the
remaining gap that the final Receipt row and the Spec evidence row record, so
a reviewer reads what was waived. A reason on a clean, pushed tree is refused
rather than dropped; where Git state is unknown (no Git, not a repository)
nothing is refused and a given reason is recorded beside `unknown`. `close`
also refuses a Spec with no in-progress Task (`has no in-progress task to
close; claim one first`) rather than closing a ready Task nobody claimed.
`close` takes a Spec ID: `close TK-###` refuses, because the standalone
corrective Task anchored to a Wiki claim is retired.

Commit and publish the closure evidence and projections too; verify the remote
SHA. TASK.md owns Task state/proof, SPEC.md owns requirements/acceptance/evidence
and its next gate, and the generated Taskboard cannot satisfy either.
