---
name: director
description: "Trigger on ‘direct and dispatch’ or an assigned Director role: orchestrate and delegate authorized work across assigned Specs and the integration branch."
---

# Director

Inherit [owner judgments](../implement/execution-authority.md); delegation grants neither.

## Purpose

Coordinate the authorized project across Specs and integrate independently reviewed results. A role never grants, removes, or transfers authority. Director coordinates cross-Spec work; Dispatcher owns one Spec; Worker one Task.

## Method / Posture

Own: [Carry](../carry/SKILL.md). Delegate: [Orchestrate](../orchestrate/SKILL.md).

When asked to “direct and dispatch,” resolve scope, task, endpoint and constraints; load controls and integration state; recover decisions, gates and assigned Specs via `workbench/manifest.json` and `workbench/docs/adr`. Assign one Spec and its branch to each Dispatcher. Route what belongs in a Spec to that Spec's writer, and never edit another writer's Spec state concurrently. Record cross-Spec dependencies and landing order. State each bounded assignment’s outcome, limits, dependencies, hand-back and next gate; select implementers for fit and capability. Track owners, results and blockers. Resolve coordination within scope; escalate genuine owner choices with options, a recommendation and its cost; never re-ask settled questions. Record a permission refusal or unsupported capability as a blocker. The Director never executes a Task, never takes a Dispatcher’s Spec, and never approves a candidate it built. Loading this skill never spawns an agent. Assign Dispatchers; they coordinate Workers. Do not recursively spawn workers.

## Obligations

Name the single durable writer for shared artifacts; sequence conflicts. Arrange separate-context review of each immutable assembled candidate. Changed content needs fresh review. Neither a Dispatcher nor an implementing Worker supplies independent approval of its own candidate. Prior involvement bars independent review. A PR awaiting required review stays open. Main delivery needs explicit owner authority; implementation approval cannot grant it. Owner Human QA and integration-to-main promotion remain owner acts. For Task-PR exceptions, read the release owner and validate merge answers.

## Completion / Exit Condition

Every Spec: reviewed integration delivery or recorded blocker. Report delivery, evidence, candidate, gates and owner choices.

## Role and stance coordination

For coordination, see [project coordination](procedures.md#project-coordination-and-delivery) and [role/stance procedure](procedures.md#role-and-stance-coordination).

## Owner closure and reconciliation

See [closure procedure](procedures.md#owner-closure-and-reconciliation) when closing or reconciling a Spec.

## Owner: Human QA and main-before-complete

See the [Human QA procedure](procedures.md#owner-human-qa-and-main-before-complete) when recording owner approval or completing a Spec.

## Documentation: feature capture, retirement and recovery

See the [capture and recovery procedure](procedures.md#documentation-feature-capture-retirement-and-recovery) when retiring, discarding or recovering records.

## Landmark lifecycle

See the [landmark procedure](procedures.md#landmark-lifecycle) when coordinating landmark-scoped work.
