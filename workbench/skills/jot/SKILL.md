---
name: jot
description: Capture meaningful fresh knowledge, intent, uncertainty or corrections in the topic Wiki, and retrieve relevant context for continuation or a cold start.
---

# Jot

Save a small source-linked claim as soon as a useful discovery, owner
confirmation, approval or correction arrives, before the next dependent action.
Preserve what a cold agent needs to continue. Verify the write succeeded, then
continue authorized work. Use the existing topic Wiki page when
suitable; a new topic uses a flat `context-TOPIC.md` page. A final
completeness check complements capture while the context is fresh.

Before the first dependent output, jot a source-backed discovery that could
change its answer or next action; a report or synthesis is a dependent output.
When the owner corrects a claim, append a linked correction before revising the
output. Label intent `confirmed` only after explicit owner confirmation. A cold
reader carries the latest confirmed state with its source and keeps superseded
history; ask the owner again only when evidence conflicts or remains unresolved.

## Capture

Resolve the Wiki lane through `workbench/manifest.json`. Choose the smallest
useful claim, its source and author. `intent`, `observation`, `inference`,
`proposal`, `question` and `verification` describe its kind; `current`,
`confirmed`, `unresolved` and `experimental` describe what is known about it.
Confirmed owner intent records the owner's choice. Preserve the actual words,
source and scope of a confirmation or approval, including exclusions. State
whether the owner confirmed meaning or authorized specified work; one does not
imply the other. An approval record preserves permission already given, while
capture grants no authority of its own. Capture establishes neither Canon nor
implementation proof.

Keep a useful finding and its next relevant action small. For an owner correction,
preserve the corrected intent, safe source and actual confirmation state;
append linked supersession when a prior claim exists, rather than rewriting it.
Link the existing work or decision owner so the next agent can continue there.

```bash
node workbench/tools/jot.mjs add --topic TOPIC --kind intent --state unresolved \
  --source SAFE_SOURCE_REFERENCE --author AUTHOR --content "Meaningful claim and next relevant question"
```

New project context defaults to shared capture: an existing topic page or
`context-TOPIC.md` in the Wiki lane, eligible for project Git. Review the new
material and sources before capture. Secrets, raw transcripts and unrelated
personal context never belong in a jot. Use a safe source reference when source
contents cannot be shared. Explicit `--visibility private` keeps a permitted
local claim in ignored `.jot-private-TOPIC.md`; existing private sources and
legacy ignored notes remain private.

Read an existing page before writing and pass its returned SHA-256 revision.
Reading a private page requires `--include-private` within unchanged local
access. Match its returned visibility: an existing private page requires
`--visibility private`; it cannot become shared by omitting that option.
Shared pages use the default (or explicit `--visibility shared`):

```bash
node workbench/tools/jot.mjs read --page WIKI_PAGE
node workbench/tools/jot.mjs add --page WIKI_PAGE --visibility shared --revision SHA256 --kind observation \
  --state current --source SAFE_SOURCE_REFERENCE --author AUTHOR --content "Observed result and limits"
node workbench/tools/jot.mjs correct --page WIKI_PAGE --visibility shared --revision SHA256 --supersedes ENTRY_ID \
  --kind intent --state confirmed --source SAFE_SOURCE_REFERENCE --author AUTHOR --content "Corrected sourced claim"
```

For a design-concept page, add `--operation` naming the current authorized
operation; its existing `authorized_by` and History remain the article route.
Retain prior claims and append linked corrections. Verify success and use the
new revision before another write; a refusal saved nothing. Route a shared
page from the relevant existing Wiki router entry when it adds a missing
continuation route. Keep the claim in its topic owner rather than a giant inbox.

## Publish shared context

Include shared context and its relevant router link in the current authorized
publication through [`save`](../save/SKILL.md#publication). Capture is immediate;
Git publication follows the existing checked workflow, not a PR per jot. Publish
confirmations and approvals as scoped records even when implementation remains
unfinished; keep actual state and next action in their existing work owners.
After landing, read the changed pages and routes from freshly fetched integration
and prove containment. A local write or branch push alone is not integration
publication. If blocked, preserve the candidate and state the pending boundary.

## Retrieve and continue

Follow `AGENTS.md` -> Lexicon -> assigned Spec and Wiki `MEMORY.md`, then read
only the relevant linked page and source. If the route lacks the needed local
context, search that topic; use `--include-private` only within unchanged local
access. Read omitted relevant entries explicitly.

```bash
node workbench/tools/jot.mjs search --query TOPIC --limit 8 --max-chars 6000
node workbench/tools/jot.mjs search --query TOPIC --include-private --limit 8 --max-chars 6000
node workbench/tools/jot.mjs read --page WIKI_PAGE --limit 8 --max-chars 6000
```

Read the kind, state, sources and supersession together. Recheck current
controls and live state before relying on a claim. Load focused context rather
than the Wiki corpus. Requirements, work state, accepted definitions and
architectural decisions retain their established owners; compose `to-docs`
for a supported change to those owners. At closeout reconcile important
unrecorded context, changed claims and current source fidelity; preserve history.

## Legacy compatibility

Old JSON notes remain available through `legacy-list` (metadata only) and
`legacy-read --note NOTE` or the [`notepad` compatibility skill](../notepad/SKILL.md).
`import-legacy --note NOTE --topic TOPIC` preserves original bytes and histories
and writes only private ignored Wiki context. Inventory metadata before any
live migration, preserve originals, and keep access unchanged. Shared migration
proof uses synthetic fixtures. Private-to-tracked transfer requires specific
exposure approval; the import tool provides no such transfer.

The Board's structured private answers and legacy project-evidence adapters
retain their domain store and schema. They are separate from ordinary capture.
