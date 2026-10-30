
# Ordinary Entry

Use this section for ordinary entry; [TEMPLATE_OPERATIONS](TEMPLATE_OPERATIONS.md) provides the surrounding context.

## Ordinary Entry

Follow [AGENTS](../../AGENTS.md) and the [RUNBOOK cold-start flow](../../RUNBOOK.md#get-oriented) through relevant context to
[TASKBOARD](../../TASKBOARD.md), then its current work owners through the [manifest](../manifest.json). Use the
[Runbook's Find, claim and resume route](../../RUNBOOK.md#find-claim-and-resume)
for selection or resumption; consult [Architecture Routes](../../ARCHITECTURE.md#routes)
and the [Glossary](../../GLOSSARY.md) when needed. Inspect the root, branch, upstream and dirty state; run the project-local spec doctor and
load the explicitly assigned spec. For owner-directed pickup, use `next --json`
and `show` to resolve that assignment. The spec and ticket set the normal
stance. Investigate within the task; do not invent a next task when blocked.
Load other Runbook sections only for the operation being performed.

For a setup-only Round One assignment, a fresh agent follows that route, checks
the manifest, relevant Wiki and ADRs, and runs read-only configuration checks.
Return the result in chat only: no feedback report, handoff, checkpoint,
self-created task, or other delivered prose artifact. Internal JSON capture
follows the meaningful-work rule and is reconciled at closeout; it does not
turn a chat-only setup check into a reporting assignment. Round One precedes
feedback testing.

### Behavior Selection

After resolving the requested scope, compose the smallest behavior already
authorized by ordinary language; do not wait for a second skill invocation.

| User intent | Behavior and endpoint |
|---|---|
| Decide or stress-test an idea | `grilling` with `notepad`; save answers/corrections before continuing |
| Preserve or resume meaningful project context | `jot` in the topic Wiki; verify source, correction history and live state. Read legacy private `notepad` records when relevant. |
| Reconcile agreed claims | `promote` with `to-docs` and `save`; no implied implementation |
| Write specifications only | `to-spec` and needed `to-tasks`; stop at the specified endpoint |
| Deliver assigned work | `carry` with `implement`, verification, independent integration review and `save` |
| Prepare another agent's continuation | core `handoff`; readable Markdown with inherited scope |
| Review a candidate or readiness | `code-review`; report only, no implementation or main merge |

Every helper inherits the caller's narrower endpoint. Mention is not invocation
and invocation is not new authority. Optional routers and historical extension
skills are not prerequisites. For new project context, use the installed `jot`
skill before the first dependent output. Its shared Wiki claim carries source,
speaker and linked correction history. Read relevant legacy JSON notes within
their existing access; validate/read back before voluntary pause or handoff.
Runtime revision, privacy and dependency checks enforce those operations;
host-native interception of arbitrary agent actions is not claimed.
