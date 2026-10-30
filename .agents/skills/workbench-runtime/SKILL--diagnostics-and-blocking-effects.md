
# Diagnostics And Blocking Effects

Use this section for diagnostics and blocking effects; [SKILL](SKILL.md) provides the surrounding context.

## Diagnostics And Blocking Effects

Every finding a runtime tool emits is registered in
`workbench/tools/diagnostics.mjs` with a severity (`error` or `attention`), a
scope, and a blocking effect. The consuming command enforces the effect; no
spec, manifest, or projection can choose whether its own finding blocks.

| Effect | Consumer behavior | Codes |
|---|---|---|
| `all` | `doctor` exits 1; `next` and `claim` refuse to read the layout | `invalid-manifest`, `upgrade-required`, `invalid-lane`, `unsafe-lane`, `invalid-collection`, `missing-collection`, `invalid-skill-policy`, `invalid-wiki-profile`, `sessions-not-ignored`, `tools-receipt-missing`, `tools-receipt-drift`, and the Genesis readiness codes |
| `selection` | `doctor` exits 1 until repaired; selection is unsafe | `malformed-spec`, `duplicate-id`, `invalid-state`, `contradictory-state`, `unstable-path`, `missing-evidence`, `render-drift`, `broken-render-target`, `row-record-collision`, `receipt-corrupt` |
| `selected-slice` | `doctor` reports it and exits 0; `next` excludes the slice; `claim` refuses it by name | `blocked-slice` |
| `none` (attention) | reported, exit 0, never hides work | `stale-claim`, `broken-link`, `complete-on-integration`, `stale-register`, `retired-owner-unverified`, `stale-note`, `stale-skill`, `skill-generation-unknown`, `room-brain-unrouted`, `stale-stamp`, `stale-seed`, `unverified-provenance`, `legibility-undeclared` and `legibility-unconfirmed` (scope `manifest`), `detached-head` and `untracked-controls` (scope `git`), and the ADR and wiki findings until their tools ship |

`legibility-undeclared` names missing, empty or bracketed-placeholder entries
in the manifest's runtime surface. `legibility-unconfirmed` reports its
`confirmation: "pending"` marker. Both are advisory. After confirming how to
run, operate, inspect, see errors, exercise the journey and measure the product,
use `workbench-layout.mjs declare-legibility` with all six entries and without
`--pending`. A declared command is a pointer, not authority to execute it.
| `none` (error) | reported, exit 0, never hides work; setup refuses unresolved branch creation or identical branch names | `integration-branch-undeclared`, `integration-branch-missing`, `integration-branch-not-distinct`, `default-branch-missing` (scope `git`), and the error-severity ADR and wiki findings |

The two attention codes in scope `git` surface the repository state a
completion claim can hide. `detached-head` reports a detached HEAD, a
legitimate inspection state that blocks nothing; switch to a branch before
committing work you intend to deliver. `untracked-controls` names untracked
files under the root controls, the ADR collection or the spec lane (ten by
name, then a count); commit or remove them before claiming the work done. A
room that has never been committed carries it until its first commit.
Neither is reported when Git state is unknown, and neither changes `doctor`'s
exit code or `next`'s selection: the false claim itself is refused at `close`
(see the `implement` skill's
[Worker: selection, implementation and hand-back](../implement/SKILL.md#worker-selection-implementation-and-hand-back)).

`doctor --json` prints the findings with their `severity`, `scope`, and
`blocks` fields. The plain output groups them by that effect and is read from
the top: `blocking (N)` first (effects `all` and `selection`), then
`selected slice (N)`, then `informational (N)` for everything registered
`none`. Each header carries its count and its consequence, each row reads
`code [blocks EFFECT, SEVERITY]: message`, and the output ends with an
`ok - no blocking finding` line when only attention or slice findings remain.
Grouping is presentation: an `error` under `informational` is still an `error`
in the registry and in `--json`; it simply stops nothing.

The `skills` scope reads the room's `.agents/skills` lane and its
`.agents/skills` and `.claude/skills` adapters. Doctor reads personal discovery
roots for conflicts without writing; `--home PATH` selects an alternate home
for that read-only check.
`skill-lane-missing` and `skill-lane-unreadable` are errors with effect
`none` (repair them with the release checkout's `workbench-skills.mjs install`
or `update --explicit-update`; the Genesis readiness gate fails closed on
them), `skill-adapter-missing` and `skill-adapter-broken` are attention
findings (a host that checked an adapter out as a plain file instead of a
link reports `skill-adapter-broken`), and a root `skills/` directory is
`project-local-skills`, which blocks everything because it shadows the lane.
An `AGENTS.md` Skill Map entry that names a skill the lane lacks is the
attention finding `skill-pointer-dangling`; doctor reads only the map and the
lane copy to decide which skill binds. Filesystem discovery is distinct
from configured-host invocation.

`doctor` also reports `integration-branch-undeclared` and
`integration-branch-missing` (scope `git`, effect `none`) until
`workbench/manifest.json` `git.integrationBranch` names a branch that
resolves locally or on a remote; the Genesis readiness gate fails closed on
the same two conditions. Setup also refuses `integration-branch-not-distinct`
when the default and integration names match, and `default-branch-missing`
when creating integration has no resolved default ref to start from. Those
registered Git errors retain effect `none`; the setup command itself refuses
completion. When that branch resolves and the spec `next` would
select is already complete there, `doctor` reports `complete-on-integration`
(attention) without hiding the work. `doctor`
reports `detached-head` and `untracked-controls` (scope `git`, attention,
effect `none`) for a detached HEAD and for untracked files under the root
controls, the ADR collection or the spec lane; neither blocks, because `close`
refuses the false completion claim itself.

`permission-scope-drift` (severity `error`, scope `controls`, effect `none`)
is reported when `.claude/settings.json` exists and withholds a
manifest-declared authorship lane (`docs`, `specs`, `wiki`, `sessions`, or
`feedback` lacks a covering `Edit` `allow` rule, or a `deny` or
`ask` rule covers it, since both override `allow` and an asked lane prompts on
every write), or when the `tools` lane is granted in `allow` without a covering
`ask` rule holding the whole lane. A `deny` that covers or intersects an allowed
tools lane remains visible. The finding names each withheld lane with its
reason; it never edits the file, and a room may deny a lane deliberately and
record why in `AGENTS.md`. The matcher is conservative: it recognises
bare `Edit`, the documented `path`, `./path`, and `/path` project-relative
forms, `//path` absolute paths, and `~/path` home-relative paths. A restrictive
pattern it cannot safely interpret and an unreadable file
are reported rather than treated as clear. `validate --genesis`
fails closed on the same condition; a room without the file is unaffected.
Resolve it by adding the `Edit(./workbench/<lane>/**)` rules from the release
checkout's `templates/.claude/settings.json` and moving `workbench/tools/**` to `ask`,
or by simplifying an uncertain restriction. Claude Code applies `Edit` rules
to every built-in file-editing tool.

The claim-age diagnostic compares UTC calendar date stamps and reports a claim
older than one calendar day (strictly greater than 86,400,000 milliseconds).
The old prose saying working day was inaccurate. Historical project-local
day-boundary and reference-deduplication rules remain scoped to their original
projects, not an automatically imported Workbench algorithm.
