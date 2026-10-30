
# 2. Save it when you learn it, not at closeout

Use this section for 2. save it when you learn it, not at closeout; [SKILL](SKILL.md) provides the surrounding context.

## 2. Save it when you learn it, not at closeout

Write during the work. Token exhaustion or the owner pressing Stop can end the
conversation before another write, and a note that exists only in your plan
preserves nothing. This obligation covers conversation continuity, not machine
failure: an immediate interruption can still preempt an unsaved write.

Append the material whose loss would cost the next reader real work - an owner
directive, a source-backed finding, a decision and what it rules out, a
verification result, a blocker, and above all a correction:

```bash
node workbench/tools/notepads.mjs append --note NOTE --revision N \
  --kind finding --topic TOPIC --content "WHAT YOU FOUND" \
  --source-file PATH --interpretation "WHAT IT MEANS HERE"
```

Every write names the revision you read. A missing or mismatched supplied
revision is refused as `stale-revision`, naming the current one. The refusal
does not prove a change or identify a writer: an omitted revision is refused
on an unchanged fresh note, and your own older revision is refused too. Read
the current note, supply its revision, and re-apply. The check catches a
sequential change while you were working, and the runtime also refuses an
overlapping one: each write publishes only if the note still holds exactly what
you read, so of two writers that read the same revision one lands and the other
is refused `stale-revision`. No write is reported as landed unless it is in the
note. Writes still stay one writer at a time, because a refused writer has to
reread and re-apply. That rule bounds overlapping writes, not which chat may
own or resume the note. Every free-text field you supply is privacy-scanned before it can
reach the file; record a safe reference rather than a secret, credential, or
raw private data.

Correct in place by linking, never by rewriting history:

```bash
node workbench/tools/notepads.mjs append --note NOTE --revision N \
  --kind correction --topic TOPIC --corrects ENTRY_ID --content "WHAT WAS WRONG AND WHAT HOLDS NOW"
```

The superseded entry stays. A reader who retrieves it gets the correction with
it, which is the whole point of keeping both. On resume the correction holds
and the original is history, but both record only what was believed when they
were written: recheck live state before relying on either.

Keep pending meaning apart from confirmed meaning. When a design inquiry saves
an owner answer before its readback is confirmed (as `grilling` does), append it
as `--kind source_record` with the owner's words as the content and the
readback as `--interpretation`, adding `--question-id ID` when the inquiry keeps
stable question IDs, and list the pending readback in `current.unresolved`.
Saving is not acceptance. A revised readback is a `correction` of that entry.
Once confirmed, only a `decision` entry records the owner's answer; append it
and clear the item from `current.unresolved`. The composing skill owns the
question map and its statuses; this is the whole convention, with no other kind
or status for pending meaning.

Keep the resumption view current whenever the state or the next action moves:

```bash
node workbench/tools/notepads.mjs current --note NOTE --revision N \
  --state "WHERE THIS STANDS" --next-action "THE NEXT EXECUTABLE STEP" \
  --unresolved "WHAT IS STILL OPEN"
```

After each material directive, finding, decision, correction, verification or
blocker, confirm append/current returned success and the new revision before
continuing dependent work. A failed write has saved nothing. Before voluntary
pause, validate and read back the note: state, unresolved items and next action
must match actual results. These are workflow obligations using the runtime's
revision/privacy/dependency checks, not a claim of host-native interception.
