---
name: to-spec
description: Turn an already-settled conversation into Workbench capability specs, one Spec per capability, without restarting the interview.
---

# To Spec

Inherit both mandatory owner judgments under [authority and continuation](../implement/execution-authority.md): explicit confirmation before leaving Explore and explicit execution approval before leaving Prepare. Reuse their sources within scope; delegation and this skill grant neither.

Synthesize the current already-settled conversation into capability records
at the `specs` lane declared by `workbench/manifest.json` (normally
`workbench/specs/S-###-slug/SPEC.md`): one Spec per capability. When the
conversation settles several capabilities, such as a rebuild of each skill,
author or reuse one Spec for each; keep their ownership distinct without inventing a Spec for every verb or file.
Do not restart grilling or implement the capability. When capability preparation is assigned, read the recorded decision owners
and preserve the Map for publication before planning relies on its integration state. Standalone
`to-spec` retains its specification-only endpoint.

1. Verify the project root, nearest controls, existing specs, and relevant source
   or tests. Reuse an existing owning spec when the capability already has one;
   otherwise obtain a read-only proposal with `spec-workbench.mjs next-id --prefix S --json` and write the returned visible ID only within the authorized planning scope. An
   existing Spec's path changes only through `move-spec`.
2. Before drafting when a handoff or existing working record supplies context, call the Skill tool for `jot`
   for Wiki context or call the Skill tool for `notepad` for a legacy source. Read its entries with correction context and compare them
   with live owners; a legacy record also retains its compact current view.
   Append linked corrections through the appropriate revision-checked runtime
   before using stale claims or advancing their continuation state; a correct
   handoff does not excuse leaving contradictory continuation state behind.
3. Separate confirmed decisions from assumptions and unresolved owner choices.
   Record unresolved choices as blockers instead of inventing answers.
4. Capture the outcome, why it matters, verified current state, desired behavior,
   decisions/contracts, non-goals, dependencies, acceptance, test seams,
   documentation impact, and append-only evidence structure.
5. Author a new Spec at status `planned` with no owner claim, and set the
   normal stance in the SPEC during authorized planning, usually Builder for
   implementation; do not make arriving agents select or record their own
   stance. Specifying is not starting: do not `claim`, activate or implement
   the Spec, and record no implementation or verification evidence for work
   that has not happened.
6. A new Spec enters Backlog as `planned`, with `tasks/.gitkeep` preserving
   its empty tracked `tasks/` directory and no Task row. Map alone creates no Tasks. If the request also authorizes Plan, call the Skill tool for `to-tasks`,
   which may prepare Task records without activation.
   Only implementation approval permits `convert-tasks --activate` and Journey.
   Reuse existing records and preserve every requested requirement as acceptance
   or an explicit dependency, never an unapproved Non-Goal.

7. Preserve project vocabulary from `GLOSSARY.md` and cross-cutting boundaries
   from `BLUEPRINT.md`. A spec owns one capability; it replaces neither.
8. Run `node workbench/tools/spec-workbench.mjs render` and
   `node workbench/tools/spec-workbench.mjs doctor`. When the Map is published,
   its record (the PR body) states what the final tree adds against
   integration in one line: `Map counts: N Specs, M Tasks, K empty tasks/`.
   Commit the final tree, run `git fetch origin` (`doctor` never fetches, and
   a stale `origin/integration` inflates the counts), save the record to a
   file and run `node workbench/tools/spec-workbench.mjs doctor --map RECORD` (add
   `--base REF` when the PR targets another branch); publish only once it
   exits 0. Then report the spec path, open owner
   gates, and next eligible action. Before the voluntary exit, update and read
   back the source working record with the authored spec, remaining open choices
   and exact next action. Confirm the returned revision; preserve originals and
   corrections and retain any active handoff dependency until reconciled.

Do not publish a parallel tracker record, create a transient requirements file,
or claim verification that did not run.
