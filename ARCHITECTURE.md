# Workbench Template - Architecture

> Generated from LLM Workbench v3.2.2.

**Last reviewed:** 2026-10-28
**Status:** active

This file names owners, routes and invariants. As a routing
artifact, never a Contract file, it binds nothing. It is revisited a few times a year,
or when an owner, lane or invariant changes. Terms are defined in
[`GLOSSARY.md`](GLOSSARY.md); the Wiki explains them.

## Bird's-Eye View

The Workbench Template is a copyable reference installation of LLM Workbench: a legible starting structure for a new project and a real installed room in which harness maintainers verify an explicit update.

The room is a Git repository with root files on top, Workbench lanes
declared by `workbench/manifest.json` underneath, and the project's own source
beside them. Every kind of truth has one maintained owner; an agent enters at
`AGENTS.md`, follows a route below to the smallest owner that answers its
question, and writes a change back to that owner.

## Codemap

[Full codemap](ARCHITECTURE--codemap.md#codemap).

## Ownership

[Full ownership](ARCHITECTURE--ownership.md#ownership).

## Routes

[Full routes](ARCHITECTURE--routes.md#routes).

## Invariants And Boundaries

[Full invariants and boundaries](ARCHITECTURE--invariants-and-boundaries.md#invariants-and-boundaries).
