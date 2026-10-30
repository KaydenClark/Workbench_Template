# S-001 - Self-Explaining Room

> Generated from LLM Workbench v3.1.2. This path is stable; never move it
> between status folders.

**Spec ID:** S-001
**Status:** active
**Priority:** 2
**Owner:** Kayden Clark
**Stance:** Builder
**Updated:** 2026-09-06
**Catalog description:** A room that prints an accurate, test-checked account of what a workbench is and why each part is where it is.
**Blockers:** none
**Latest event:** TK-003 unblocked by owner direction and closed; the room is published and clonable.
**Next gate:** None; every slice is closed and the capability is published.

## Outcome

Someone who has never seen an LLM Workbench can clone this room, run one
command, and come away knowing what every part of a room is for and why it is
kept apart from the others - and can then run a second command that proves the
answer is still true of the room they are looking at.

## Why It Matters

The structure of a room is documented upstream in `templates/`, which is by
design generic and bracketed. A newcomer reading it sees the shape of the
answer but never a filled example, and nothing checks that the templates still
describe what the tools actually produce.

A filled room closes both gaps at once. It is a real installation, so it cannot
describe a shape the tools do not produce; and because its own description is
asserted by tests, it cannot quietly fall out of date the way a `STRUCTURE.md`
would. It also gives the harness a rehearsal target: genesis and upgrade can be
exercised here, on a room whose loss costs nothing, instead of on a room that
carries real work.

## Current Verified State

<!-- workbench-record-section max=15000 -->
- [Part 1](SPEC.md.part-current-verified-state-001.24c0848bb037e3c164f96d089812bb363a29a6b6b2148531277d3761275e5fd6.md)
<!-- /workbench-record-section -->

## Desired Behavior

1. `node tour.mjs` prints every place in the room, grouped by zone, each with
   what it owns and why it is separate. No argument required.
2. `node tour.mjs --json` emits the same data for machine consumers.
3. `node tests/tour.test.mjs` fails whenever the room and the tour disagree -
   specifically when a described path is missing, when a manifest-declared lane
   or collection is undescribed, when a lane or collection is mislabelled, when
   the root-controls zone is not exactly the seven controls, when the Claude
   bridge carries anything but `@AGENTS.md`, when the tools receipt disagrees
   with the manifest, or when the tools lane holds a file the receipt does not
   account for.
4. The room additionally explains its own lifecycle: how it was created, and
   what the route to a newer harness version is (TK-002).

## Decisions And Contracts

- **`PLACES` in `tour.mjs` is the single enumeration of the room's structure.**
  Prose elsewhere may explain one part; nothing else lists all of them. A second
  list would be a second thing to keep true.
- **Every manifest-declared lane and collection must be described.** This is
  asserted, not encouraged. Adding a lane without a `why` is a red test.
- **A place must state a reason, not only a purpose.** The `why` field carries
  why the truth is kept apart from every other truth; a place that cannot answer
  that does not belong in the room.
- **The room holds no secrets and acquires none.** It exists to be copied, read,
  and discarded.
- **`workbench/tools/` is never hand-edited here.** The room follows the same
  explicit-update rule it teaches.

## Non-Goals

- Becoming a template. `templates/` upstream stays generic and bracketed; this
  room is deliberately filled and is not a substitute for it.
- Teaching how to design a product. It explains the shape of a room, not what to
  build inside one.
- Replacing the upstream tool suites. This room is a rehearsal target, not a
  test harness for `workbench-layout.mjs` and friends.

## Dependencies And Blockers

- none

## Vertical Implementation Slices

<!-- workbench-record-section max=15000 -->
**Stance:** Builder
**Stance:** Builder
<a id="tk-002---done"></a> [TK-002 - Done](SPEC.md.part-vertical-implementation-slices-001.c5badb1b08a56f4718da990cf839bdbf39b4f8e420abcb5b9b1a7a9bb0d0dc11.md#tk-002---done)
<a id="tk-003---done"></a> [TK-003 - Done](SPEC.md.part-vertical-implementation-slices-001.c5badb1b08a56f4718da990cf839bdbf39b4f8e420abcb5b9b1a7a9bb0d0dc11.md#tk-003---done)
- [Part 1](SPEC.md.part-vertical-implementation-slices-001.c5badb1b08a56f4718da990cf839bdbf39b4f8e420abcb5b9b1a7a9bb0d0dc11.md)
<!-- /workbench-record-section -->

## Acceptance Criteria

- [x] `node tour.mjs` names every root control, every manifest-declared lane and
      collection, and the product, each with what it owns and why.
- [x] `node tests/tour.test.mjs` exits 1 when a manifest-declared lane is not
      described, and exits 1 when the tools lane holds an unmanaged file.
- [x] `workbench-layout.mjs validate --project .` reports the room current.
- [x] A reader can learn from the room itself how it was created and how it
      would reach a newer harness version (TK-002).
- [x] The room is reachable by clone rather than by copy (TK-003).

## Testing Seams

- `PLACES` exported from `tour.mjs`, read by both the renderer and the tests, so
  a claim cannot be true in one and false in the other.
- `workbench/manifest.json` lanes and collections, compared against `PLACES`.
- `workbench/tools/.workbench-tools.json`, compared against the manifest version
  and against the actual contents of the tools lane.
- `lifecycle()` and `ROUTE` exported from `tour.mjs`: the first is checked field
  by field against the manifest and receipt it claims to read, the second
  against the tools actually installed in this room.

## Verification Procedure

```bash
node --check tour.mjs
node tour.mjs --lifecycle
node tests/tour.test.mjs
node workbench/tools/workbench-layout.mjs validate --project .
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
```

## Documentation Impact

- `BLUEPRINT.md` product map, pillars, invariants, and non-goals: filled from
  this spec's Outcome and Decisions.
- `LEXICON.md` Project Terms: `Room`, `Tour`, `Place`, `Zone`, `Drift` added.
- `RUNBOOK.md`: install/run/test/verify filled with commands actually run;
  environment, data, and deployment sections recorded as not applicable with
  the reason rather than left bracketed.
- `workbench/wiki/MEMORY.md`: routes to these controls.

## Append-Only Evidence And Execution Log

<!-- workbench-record-section max=15000 -->
- [Part 1](SPEC.md.part-append-only-evidence-and-execution-log-001.420fc9d62a310e0b34530c682ca90899eab167980f650d3f3ad265d47bba1455.md)
<!-- /workbench-record-section -->

## Completion Result

All three slices are closed. `node tour.mjs` names every place in the room with
what it owns and why; `node tour.mjs --lifecycle` reads the room's own
provenance and receipt and states the upgrade route measured by rehearsal; and
`node tests/tour.test.mjs` passes twelve cases that fail whenever the room and
its own account of itself disagree. The room is published and clonable.

What it does not establish: that genesis produces the same result on another
platform or from another agent. One room on one machine cannot prove
portability; the harness's own portability suites own that claim.

## Remaining Limitations Or Follow-Up Specs

<!-- workbench-record-section max=15000 -->
- [Part 1](SPEC.md.part-remaining-limitations-or-follow-up-specs-001.36c5112abc85f0a8d6d6c4cd38b26a5b48819c3e3f882429b295fa6e3b15abff.md)
<!-- /workbench-record-section -->

## Supersession

- Supersedes: none
- Superseded by: none
