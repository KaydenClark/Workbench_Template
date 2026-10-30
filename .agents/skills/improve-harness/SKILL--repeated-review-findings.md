
# Repeated Review findings

Use this section for repeated review findings; [SKILL](SKILL.md) provides the surrounding context.

## Repeated Review findings

A failed Review verdict's finding is jotted the first time it appears, and a
finding seen twice enters this loop with a deterministic check as its
intervention. The [`jot` skill](../jot/SKILL.md) carries capture and
retrieval; this section adds the convention that makes a repeat visible.

1. Name the finding's class as a short slug, such as `id-collision`. Search for
   it before jotting:

   ```bash
   node workbench/tools/jot.mjs search --query review-finding:<class-slug> --limit 8 --max-chars 6000
   ```

2. Read every match. While the result reports `omitted` or
   `truncated_chars` above zero, raise `--limit` and `--max-chars`, or read
   the named entries with `--id`, until nothing is omitted or truncated.
3. Read the current `entries`. The finding is a **repeat** when they hold an
   earlier `observation` whose content starts with exactly
   `review-finding:<class-slug>` followed by a space; a longer slug such as
   `id-collision-in-landmarks` is a different class. An entry seen only as
   superseded history in `correction_context` never counts, and neither does
   one corrected by a `verification` entry.
4. Jot this occurrence on the relevant topic Wiki page, after the `jot`
   skill's exposure review, as a shared `observation` with state `current`.
   Start its content with the tag, name the verdict's source (the Spec
   evidence row or review record) and say what failed. When a finding is later
   shown wrong, correct its entry with a `verification` entry rather than
   another `observation`.
5. On a repeat, run this loop with the jotted occurrences as the baseline
   evidence. The intervention is a test in the room's full suite or a
   `doctor` finding registered in `workbench/tools/diagnostics.mjs`, so the
   failure is caught at Check instead of at Review. The result record names
   both occurrences and the check.

The first route through it turned the repeated ID collision into the
`remote-id-collision` `doctor` finding: an ID new on the candidate that another
remote branch tip holds for a different record. `doctor` reads remote-tracking
refs and never fetches, so in a room with an `origin` remote run
`git fetch --prune origin '+refs/heads/*:refs/remotes/origin/*'` before it; the full refspec
reaches every branch even from a single-branch clone.
