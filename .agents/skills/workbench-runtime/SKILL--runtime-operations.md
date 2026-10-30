# Full procedure

[Workbench Runtime entry](SKILL.md). Use the sections relevant to the assigned operation.



## Purpose

Operate the Workbench runtime tools the room has installed in its
manifest-declared tools lane (`workbench/tools/`): read what a finding means and
what it blocks, repair the installed state the harness wrote, allocate visible
identifiers, keep the room's connection identity, check what a configured host
can do, and add a room-local skill to the `.agents/skills` lane. Each
section below carries one operation's procedure.

## Method

Resolve every lane and collection through `workbench/manifest.json`, run the
command the operation's section names from the room root (or from the pinned
release checkout where the section says so), and read its actual output before
acting on it.

## Obligations

A tool reports without manufacturing authority. Act on a finding's registered
blocking effect, never on a guess about it, and do not invent a command, a
finding code or an effect the installed runtime does not have. Repair only with
the command a section names, within the current assignment; read-only
validation never repairs. For decision records (the ADR collection in
`workbench/docs/adr/` and its destination sibling), call the Skill tool for `to-docs`.

## Completion

The operation is complete when its command ran, its output was read, and any
change it made is committed through the assigned work's normal route; a finding
left unrepaired stays visible with its reason.

## Diagnostics And Blocking Effects

Read [Diagnostics And Blocking Effects](SKILL--diagnostics-and-blocking-effects.md#diagnostics-and-blocking-effects) when working on this topic.

## Wiki Validation

Read [Wiki Validation](SKILL--wiki-validation.md#wiki-validation) when working on this topic.

## Installed State The Harness Wrote

Two classes of installed state are repaired by a command the room runs itself;
neither blocks. Both findings are emitted by `doctor` itself, not by the Wiki
validator (see Wiki Validation above); the checks
themselves live in `workbench-layout.mjs`, which owns seeding and provenance.

```bash
node workbench/tools/workbench-layout.mjs seed-documents --project /absolute/project
node workbench/tools/workbench-layout.mjs record-source --project /absolute/project
node workbench/tools/workbench-layout.mjs retire-lexicon --project /absolute/project
```

`retire-lexicon` is the explicit operator step that deletes a room's archived
`LEXICON.md`: `migrate` and Adoption never delete it, they report it
`archived` once every line has landed (owner decision, PR431 comment
6270358739). The command reruns that report, requires `wiki.mjs validate` to
report no error, backs the file up in the recovery collection, removes it and
reports `retired`; any finding reports `refused` and changes nothing. The
[update-harness skill](../update-harness/SKILL.md) carries the procedure.

`seed-documents` copies the seeded lane documents this release carries
(currently `workbench/feedback/REPORT_FORMAT.md`) and records the generation of
each one in `workbench/.workbench-seed.json` beside the manifest - a release per
document, never a byte hash in the tools receipt, whose drift finding blocks
everything and would turn a deliberate local adjustment into a failure. It
writes a document only when it is absent, or when the installed bytes still
match the hash the command recorded when it last wrote that document; a copy
byte-identical to the release is recorded as current, and a copy the room
changed is retained untouched and reported by name. `stale-seed` (attention,
scope `feedback`) then reports a document whose recorded release is not the
manifest `workbenchVersion`. A document with no recorded generation names no
generation and is silent, exactly as an unstamped wiki file is.

`record-source` records verified source identity in `provenance.source` for a
room that already exists, under the same clean-release-checkout verification
`init` carries: a relocated partial copy refuses with `invalid-source-identity`
and writes nothing, and nothing else in the manifest changes.
`unverified-provenance` (attention, scope `manifest`) reports a manifest with no
`provenance.source`, a commit that is not a full 40-character SHA, an empty
repository, or a `release` that disagrees with `workbenchVersion`.

## Spec Discovery

List Spec records with `node workbench/tools/spec-workbench.mjs list`.
`--all` includes retired records; `--status STATUS`, `--count` and `--json`
narrow the output. This reads recorded state; delivery needs source and Git
proof. Maintained capability knowledge belongs in the existing Wiki Feature
catalog articles.

## Visible Identifiers

Read [Visible Identifiers](SKILL--visible-identifiers.md#visible-identifiers) when working on this topic.

## Workbench Connection Identity

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

## Configured-Host Capability Checks

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

## Room-Local Skills

The core skills live in this room's `.agents/skills` lane, laid down from
the LLM Workbench release with a receipt (`.workbench-skills.json`) naming the
source release, commit and a hash per skill. The tracked `.agents/skills`
(Codex) and `.claude/skills` (Claude Code) links resolve into the lane, so a
fresh clone discovers every core skill with no provider home. Check the lane
from the release checkout with `node tools/workbench-skills.mjs verify
--project PATH`; `doctor` reports `skill-lane-missing`, `skill-lane-unreadable`,
`skill-adapter-missing`, `skill-adapter-broken` and `project-local-skills`
without repairing them, and `skill-pointer-dangling` for an `AGENTS.md`
Skill Map entry that names a skill the lane lacks.

For an authorized room-specific extension, keep its sole source in the lane at
`.agents/skills/NAME/SKILL.md`. Choose a name absent from required core;
preserve any collision for explicit reconciliation. The tracked
`.agents/skills` and `.claude/skills` adapters already resolve into the lane,
so both hosts discover the extension without a second copy or a per-skill
link; `workbench-skills.mjs verify` lists it under `roomLocal` and never
replaces or removes it. On Windows, confirm the host checked the adapter links
out as links; inability to do so leaves that discovery gate open. Do not
duplicate implementation bytes, add a root `skills/`, or add `.codex/skills`.
Invoke the extension in the actual configured application: file presence and
a resolving adapter alone do not prove native discovery or callability.

Laying the lane down does not publish room-local source into a personal catalog.
That acceptance is a separately authorized operation, and a personal catalog
is never on the room's critical path. Doctor inspects the lane
and its adapters from the room tree, plus personal discovery roots read-only. A new
room needs no local extension and no
personal catalog for core save/promote/notepad operation. Genesis's prohibition
on a root `skills/` core shadow does not prohibit this room-owned source route.

## Lane Sweep

Read [Lane Sweep](SKILL--lane-sweep.md#lane-sweep) when working on this topic.

## Personal discovery conflicts

Each skill name has one owning scope. A name in the room lane must not also
appear in `~/.agents/skills`, `~/.claude/skills`, `~/.codex/skills`,
`~/.gemini/skills` or `~/.copilot/skills`, including links. Doctor reports
`personal-skill-shadow` as attention with no blocking effect and names the
paths and host consequences. Missing personal roots are normal; an unreadable
root is `personal-skill-inspection-unavailable`, not proof of a clean catalog.

Before authorized cleanup, preserve the full personal catalog, Git index,
local changes and link targets outside scanned roots. Verify backup hashes,
move only conflicting entries, and verify unrelated files and the index did
not change. Never replace a personal conflict with a link into one room.
Backups belong in unscanned storage or Git history and remotes. The personal
catalog may publish names not owned by the room; `core-skill-installer.mjs`
refuses personal core install and update. Legacy rollback remains an explicit
recovery operation and can restore a conflict; rerun doctor afterwards.

Doctor also reports `nested-skill-file`, `skill-file-link` and
`lane-plugin-manifest` for discovery hazards. Keep exactly the two existing
repository adapters. After cleanup start a fresh host catalog and verify its
source paths. A current session may retain an earlier catalog.

<a id="route-a-finding"></a>
