# Template system design

Supporting design for [Blueprint](../../BLUEPRINT.md#integrated-system-design).

## Integrated System Design

Eight root controls separate behavior, destination, language, ownership, procedures, projection and orientation. The manifest owns support paths; Specs own bounded requirements/evidence, active ADRs architectural decisions, and history views retired decisions. Architecture routes to records and Wiki. Runtime operates locally. Managed skills and source receipts live in `.agents/skills`; `.claude/skills` links there. Clones recover them without provider-home installation; host invocation needs separate proof.

[Ownership and continuity](adr/0001-template-ownership-and-continuity.md) holds cross-cutting decisions. The tour enumerates every manifest lane/collection using Node >=20 and built-in tests, without dependencies.
