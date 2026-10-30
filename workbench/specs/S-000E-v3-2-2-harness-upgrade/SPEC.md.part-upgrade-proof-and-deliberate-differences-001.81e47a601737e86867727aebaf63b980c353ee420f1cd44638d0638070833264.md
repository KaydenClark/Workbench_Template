# Upgrade Proof And Deliberate Differences (part 1)

[Record](SPEC.md#upgrade-proof-and-deliberate-differences)

<!-- workbench-record-body:start context=0 format=2 -->

[Preservation inventory](preservation.json) lists every baseline and
candidate tracked path with its before/after hash and decision.
[Lexicon disposition](lexicon-disposition.json) records the 69 Lexicon lines
the pinned `413e7039` tool reported unlanded after the successors were filled,
and where each one's meaning now lives (the first `8f08f111` run reported 78;
the repaired joined-line check verifies the moved paragraph at lines 73-81).

Reinstall from `413e7039` (commit `6f04d01`): the repaired source changed 6
runtime tools and the `implement` and `update-harness` skills; inventory deltas
are listed under `reinstall_changed` in the preservation inventory.

Inventory: 165 baseline and 195 candidate tracked paths at installation commit
`1bf6d2a`; 72 kept byte-for-byte, 20 moved unchanged and 35 moved and updated
by the lane relocation and skills update, 16 other managed updates plus 4
managed manifest/attribute/link/seed changes, 35 additions (installed
successors, vocabulary articles, seeded documents, 4 new runtime tools, 2
optional skills, DDR projection and this Spec), and the reconciled controls,
product and docs listed with a decision each. No room-owned file was deleted;
`workbenchId` and genesis/layout provenance are unchanged.

Managed bytes (rechecked against `a58466ad`): from the pinned source, `workbench-tools.mjs verify` and
`workbench-skills.mjs verify` both report `valid` with no update available;
all 35 runtime files and all 33 core skill trees equal the source bytes; the
optional skills equal `workbench/optional-skills/diagnose-and-propose`
(content hash `36d49dad...febf`) and `.agents/skills/grill-with-docs`
(`df30d301...ec88`) at the source and are reported `roomLocal`.

Control fidelity (pinned source report): AGENTS keeps 10 room-worded lines and
replaces two newer template lines with room equivalents (its own edit scope and
its checked-delivery review line); the template's agent main-promotion line is
deliberately not adopted. GLOSSARY and ARCHITECTURE differ from the template
only by filled room content.

Recovery: the whole-room recovery point is the baseline commit `2f162c46`.
The current managed backups come from the `a58466ad` reinstall, run with
`--home /private/tmp/tk00b7-home3`, and the receipts record them as
`~/.workbench-tools-backup-dDE7Ac` and `~/.workbench-skills-backup-ELYoF6`.
That home is a volatile temporary directory on the installing machine, so
component rollback from a fresh clone or another machine is not available.
Earlier installs left their own backup entries (absolute paths under
`/private/tmp/tk00b7-home` and `~/` paths under `/private/tmp/tk00b7-home2`),
which are equally volatile. In a disposable `git clone --no-hardlinks` copy,
`workbench-tools.mjs rollback` and `workbench-skills.mjs rollback` with the
receipts' `~/NAME` form and `--home /private/tmp/tk00b7-home3` restored the
previous candidate's bytes. Reapplying both updates returned every file to the
candidate bytes, with only receipt backup metadata differing, and both
`verify` runs report `valid`. Managed rollback leaves the optional skills,
controls, Glossary/Architecture and lane relocation in place, so backups alone
are not whole-room recovery. In a separate copy (first install),
`skills-lane-rollback` returned the lane to `workbench/skills`, and a rerun
`migrate` relocated it again to a tree identical to the candidate.

Gate reinstall from `8b914257` (LLM_Workbench PR #642, S-006J TK-00BR;
2026-10-29): baseline suite green at Template integration `b995aecb`. From the
merged source, `migrate` reported `current`. The `workbench-tools` and
`workbench-skills` updates and both optional-skill installs reported
`current`, and both `verify` runs reported `valid`. The source changed no
managed byte since `a58466ad`, so the receipts keep `a58466ad`. The only
template changes since `a58466ad` are the AGENTS gate and autonomy lines, the
`.claude/settings.json` `UserPromptSubmit` gate-reminder hook and its
`.claude/README.md` paragraph. Each was reconciled by hand into the room
copy, following update-harness section 3.

- The AGENTS gate line now matches the template.
- The room's own autonomy line ("Do not add approval gates or treat a question
  as authorization") is deliberately replaced by the template line ("add no
  other gates"): it contradicted the two gates.
- The room README names the hook's consistency test as the producer's test.

Control fidelity: AGENTS moves from 15 to 17 unchanged lines (changed 11 to 9).
`.claude/settings.json` goes from 5 dropped lines to fully unchanged (60
unchanged). Other controls are unchanged from the earlier reconciliation.

Corrections and decisions after review of the gate reinstall (2026-10-28 local
time; the evidence row above dated 2026-10-29 used UTC):

- The settings count above is wrong. At base `b995aecb`, the pinned-source
  report counts 12 dropped `.claude/settings.json` lines: 7 trivial brace or
  bracket lines and 5 labelled newer-template. The labelled five are
  `"hooks": {`, `"UserPromptSubmit": [`, `"hooks": [`, `"type": "command",`
  and the command line. The report's summary prints this as "dropped 5 (7
  trivial)". `--previous-templates` set to the templates at `a58466ad` gives
  the same numbers. After the reinstall, nothing is dropped and all 60 lines are
  unchanged. Reproduce with `node tools/control-fidelity.mjs report --project
  ROOM --control .claude/settings.json` from the `8b914257` checkout; add
  `--previous-templates TEMPLATES_AT_a58466ad`, or read `counts` in the JSON
  output. AGENTS counts at base are unchanged 15, changed 11, dropped 3; after
  the reinstall they are unchanged 17, changed 9, dropped 3.
- Decision on the dropped clause "or treat a question as authorization" (from
  the room's own autonomy line). The producer template dropped its
  counterpart, "questions grant no authority", in LLM_Workbench S-006J TK-00BR.
  Two reasons: the entry brief's 500-word budget, and the new gate line, which
  requires an explicit owner confirmation of a readback before any file change.
  No room line now states the clause directly. It is covered only by
  implication:
  - "no request confirms itself", together with the requirement to confirm a
    readback explicitly before changing files, means a question cannot
    authorize a change;
  - the Claude Code hook says approval wording inside a request is not
    confirmation.

  Neither says in words that a question is not authorization. Installed
  scenario 9a (a "What would that involve?" question) made no edits under the
  new wording. The room accepts this coverage by implication and does not
  restore the clause.
- `.claude/README.md` no longer claims a producer test keeps the room's hook
  consistent. Nothing in this room checks the installed hook against the
  `AGENTS.md` gate line, so the two are kept in step by hand.

Capped gate fix reinstall from `95023de5` (LLM_Workbench PR #646, S-006J
TK-00B4 fix round under owner direction JOT-c6b4d000; 2026-10-28 local time):

- Baseline at Template integration `38085384`: the suite passed (9 commands,
  all exit 0) and 196 paths were inventoried. There are no ignored files
  under `workbench/`.
- From the release checkout: `migrate` reported `current` and
  `workbench-tools update` reported `current`, so the tools receipt stays at
  `a58466ad` with unchanged bytes. `workbench-skills update` changed only
  `update-harness` (it gained the bullet on carrying a changed `hooks` block
  into the room's settings). The skills receipt now names `95023de5` and
  records the backup as `~/.workbench-skills-backup-BEGXhy` under the volatile
  install home `/private/tmp/tk00b4-fix/home-t2`. Both optional skills report
  `current`; tools and skills `verify` report `valid`.
- Reconciled by hand under update-harness section 3:
  - The `.claude/settings.json` hook command now matches the template, and
    the room's permissions are kept. The hook asks for the two judgments
    separately, ends a request only to map or plan at prepared work, and
    keeps an ordinary in-scope fix approved.
  - `.claude/README.md` now says right after its title paragraph that it only
    explains `.claude/settings.json`, and that notes, history and rationale
    go in the Wiki (owner instruction JOT-0601d3aa). The installed-trials
    sentence is removed, and the hook paragraph matches the template. Its one
    remaining difference from the template is the room's earlier
    authorship-lanes wording.
  - AGENTS already matched the template gate and autonomy lines; it is
    unchanged.
- Control fidelity from `95023de5`: settings has 60 unchanged lines (the hook
  command was 1 changed line before reconciliation); AGENTS counts are
  unchanged at 17 unchanged, 9 changed, 3 dropped.

<!-- workbench-record-body:end -->
