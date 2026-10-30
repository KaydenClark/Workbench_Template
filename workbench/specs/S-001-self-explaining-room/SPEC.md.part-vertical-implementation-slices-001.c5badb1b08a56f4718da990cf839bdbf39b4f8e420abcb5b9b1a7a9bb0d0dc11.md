# Vertical Implementation Slices (part 1)

[Record](SPEC.md#vertical-implementation-slices)

<!-- workbench-record-body:start context=0 format=2 -->

Tickets are temporary tracer bullets within this stable capability record.

| Ticket | Slice | Status | Blockers | Proof |
|---|---|---|---|---|
| TK-001 | Print the annotated map and make drift a test failure | done | none | `node tests/tour.test.mjs` 9/9; two drift cases confirmed red at exit 1 |
| TK-002 | Explain the room's lifecycle: how it was created and how it reaches a newer harness version | done | none | `node tour.mjs --lifecycle`; `node tests/tour.test.mjs` 12/12 |
| TK-003 | Publish the room so it can be cloned rather than copied | done | none | `git clone https://github.com/KaydenClark/Example_Workbench` |

### TK-002 - Done

**Stance:** Builder

`lifecycle()` reads `provenance.lifecycle`, `provenance.source`,
`workbenchVersion`, and the tools receipt out of the room; nothing in the
account is written by hand except `ROUTE`, and a case asserts every `.mjs` the
route names is installed in this room's lane. `--lifecycle` renders it.

The route is stated carefully because the obvious guess is wrong:
`workbench-upgrade.mjs upgrade` is the one-time v2 to v3 migration and refuses
an existing support root. For a room already on v3 the route is
`workbench-tools.mjs update --explicit-update`, then `record-source`, then a
hand stamp of `workbenchVersion`, then a hand re-stamp of the documents that
name a version. The last two steps are hand edits because no command performs
them - established by rehearsal, not assumption (see the evidence log).

### TK-003 - Done

**Stance:** Builder

The owner directed publication on 2026-09-06 and created
`KaydenClark/Example_Workbench` as a public repository. The room was pushed
there. Before the first push its one absolute home path was removed from
`BLUEPRINT.md`, on the same rule the checkpoint promoter enforces: a home path
is not published, even in a room that holds no secrets.

<!-- workbench-record-body:end -->
