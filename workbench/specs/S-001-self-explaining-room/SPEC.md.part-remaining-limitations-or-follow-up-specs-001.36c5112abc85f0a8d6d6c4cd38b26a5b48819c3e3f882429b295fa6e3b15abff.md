# Remaining Limitations Or Follow-Up Specs (part 1)

[Record](SPEC.md#remaining-limitations-or-follow-up-specs)

<!-- workbench-record-body:start context=0 format=2 -->

- **The room's provenance pins one commit of the harness.** `provenance.source`
  names LLM Workbench `18ffc0d`. When the harness releases again, this room is
  a v3.1.2 room until someone runs the upgrade route it documents. That is
  correct rather than stale, but it means the room does not automatically
  demonstrate the newest release.
- **No separate-context review ran on TK-002.** This room's `AGENTS.md` requires
  an independent reviewer before a branch combines into `integration`, and no
  second context was assigned to this room. The branch was merged anyway, and
  that deviation is recorded here rather than left unstated. It is the same
  class of gap the upstream harness hit during v3.1.2, which is why naming it
  matters more than tidying it away.
- **One room cannot prove portability.** This room was created on macOS by
  Claude. Nothing here establishes that genesis produces the same result on
  another platform or from another agent; the upstream portability suites own
  that claim, not this room.

<!-- workbench-record-body:end -->
