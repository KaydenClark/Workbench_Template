# Artifact budgets

[The policy](../artifact-budgets.json) owns character tiers, targets and hard
limits. Count characters, including spaces and Markdown source.

Only the listed filenames have specific budgets: root controls target 900–1,500
and allow 3,000; Landmarks, Specs and Tasks allow 8,000. `SKILL.md` targets 900 or
fewer and allows 8,000. Unlisted Markdown, including skill support documents,
has no writing target and must stay within the 15,000-character safety ceiling.

Targets guide writing; only maxima fail validation. Rules match artifact
filenames, including templates and nested records. Unclassified Markdown
artifacts use the policy's default maximum. This is a ceiling, not a suggested
length. Split oversized artifacts by responsibility and preserve evidence.

Counts include all Markdown source: spaces, links, headings, frontmatter and
code blocks. Unicode code points count once; CRLF and CR normalize to LF.

Run `node tools/check-artifact-budgets.mjs` to check tracked and nonignored
Markdown in root controls, permitted Workbench directories and manifest-declared
lanes (including `.agents/skills`), including
historical records. Ignored files and other project directories are not scanned.
The command reports existing debt without editing files and fails on excess.
Use `--files PATH,PATH` for a bounded check and `--root DIR` for another checkout.

The repository CI runs this check. Missing or malformed policy fails validation.

## Installed policy and supporting documents

From a clean pinned release checkout, run
`node workbench/tools/workbench-layout.mjs seed-documents --project PATH`.
The native seeder carries `templates/artifact-budgets.json` to the policy owner
and follows the closed companion registry only when its named owner is already
installed or selected. Seed receipts identify source and content; existing
project-owned bytes are preserved. Policy installation and a managed runtime
update are distinct operations and retain their authorization boundaries.

Producer checks and installed generators share
[`artifact-budgets.mjs`](../tools/artifact-budgets.mjs). A UTF-8 byte size at or
below the maximum proves the artifact fits without reading its body; larger
files receive the complete normalized code-point count. Both paths validate
containment. Linked record pages and ordinary supporting prose count separately
and must each fit their applicable limit.
