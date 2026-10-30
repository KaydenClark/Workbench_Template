
# Evidence And Continuation Practices

Use this section for evidence and continuation practices; [TEMPLATE_OPERATIONS](TEMPLATE_OPERATIONS.md) provides the surrounding context.

## Evidence And Continuation Practices

Size a ticket so a fresh context can recover its inputs, exercise one useful
behavior at its public seam and finish named verification. There is no accepted
universal byte or token threshold. Unknown consequential product choices belong
in a decision slice of the already assigned spec before dependent implementation;
this does not authorize creating a task from an unassigned finding.

Saving context or authoring a requested handoff does not terminate a session.
Continue to the authorized endpoint. Preserve the complete original question
inventory and stable IDs/statuses/corrections; a compact view routes to retained
sources rather than replacing them. Multiple objective-linked notes are allowed,
with an unambiguous active resume route. Stale migrated discovery paths belong
in the existing ownership/migration assignment.

When partitioning evidence, preserve previously published rows byte-for-byte and
link successor work from its owner; do not rewrite an old result to match newer
truth. Name which immutable tree each claim reads. A generated projection names
its sources and freshness limits; no cached observer service is implied.

The claim-age diagnostic compares UTC calendar date stamps and reports a claim
older than one calendar day (strictly greater than 86,400,000 milliseconds).
The old prose saying working day was inaccurate. Historical project-local
day-boundary and reference-deduplication rules remain scoped to their original
projects, not an automatically imported Workbench algorithm.

Author small ADRs for independently changing consequential decisions with real
alternatives or reversal cost. Binding rules stay in current owners. A semantic
review checks agreement; text presence alone cannot establish fidelity.
Portable record parsing treats LF, CRLF and CR as syntax variations; read-only
validation never normalizes files as a side effect.

Keep setup human-readable and staged through the documented Genesis, adoption
and explicit-upgrade routes. Verify every consumed source lane before mutation,
then installed behavior in the actual room. Project-owned schemas/templates and
promoted Wiki knowledge travel in project Git; optional private session transport
handles live working context separately. A clean upstream test is not downstream
acceptance. Recheck actual destination refs and preserve unknown remote state.

When an assigned evidence record needs partitioning, first pin the source commit
and preserve the original published file. Keep each distinct introduction and
its provenance with the material it introduces; never merge those boundaries
into a new narrative. In the existing owning spec, record each successor part's
stable path, source range or entry IDs, count and content hash, plus total source
and resulting counts. Verify that the parts account for all selected material
exactly once, with exclusions explicitly named, and read back their bytes against
the pinned source. Append a route from the existing owner to the parts; leave
published rows and prior citations intact. No automatic size cap or routine
partition is required. Never weaken validators or discard evidence to fit a cap.


### Workbench connection identity

`workbench/manifest.json` stores `workbenchId`, a `WB-` identifier containing
128 random bits encoded in the shared base-62 alphabet. New Genesis/adoption
initialization assigns a new identity. Clone, worktree, rename, relocation and
maintenance preserve the manifest's identity; visible artifact IDs retain their
existing room scope. No path, credential or remote configuration enters this
field. Global uniqueness is probabilistic; transport must check its selected
namespace inventory before association.

For an existing room without the field, explicitly assign it once:

```bash
node workbench/tools/workbench-layout.mjs identify --project .
```

Commit that manifest before cloning the legacy room. Repeated assignment reads
back the existing value without rewriting it. Read-only validation never assigns
identity; ordinary legacy local work remains available without transport.
Migration assigns missing identity and preserves existing valid identity.
Malformed identity is refused, never silently regenerated. Independent projects
use fresh initialization rather than copying another project's manifest.

Local assignment uses an exclusive `workbench/.identity.lock`. A busy result
preserves the existing writer's lock; after interruption, verify that writer is
inactive before deliberately removing its stale lock. This is local writer
serialization, not a cross-clone transaction or a crash-recovery claim.

### Configured-host capability checks

The minimum is writable declared lanes (relative, home-relative and absolute),
native skill discovery and invocation, Node execution of managed tools, the
selected directory adapter, and checkout record syntax. Evidence is scoped to
the actual host/application/configuration. Missing capabilities affect dependent
operations only; unavailable checks stay unverified. Capability does not prove
enforcement or agent reliability. Remote transport is optional.

From the pinned producer checkout, run `node tools/configured-host.mjs --probe
CONFIG.json`. The explicitly supplied JSON names `root` (producer checkout),
`sourceCommit` (the expected full 40-character producer commit),
`sourceRepository` (the expected producer `origin` URL),
`cwd` (authorized temporary adapter location), `home`, nonempty `lanes` (existing
writable directories), `skill` (a declared SKILL.md path), and optional `node`
(runtime executable). The command creates and removes private temporary probes
only in those locations. Before executing managed doctor, it verifies that
`root` is the named Git checkout root at the expected commit and origin, with
clean manifest, managed-tool, and ADR inputs. It executes managed doctor and parses actual ADRs;
line-ending variants are structural evidence. Its exit code fails on a failed
operation; zero may include unverified checks and is not blanket compatibility.
Native discovery/invocation always needs a separate provider trace. Record the
provider, model if reported, configuration, OS, exact source and operations;
explicit skill-path invocation alone does not prove automatic discovery.

Keep an empty tracked `.gitkeep` in required empty collections, including
`workbench/sessions/recovery/`, so a clean Git clone contains the tour paths.
Recovery contents remain ignored; the marker contains no operational data.
