# Workbench Template

> Generated from LLM Workbench v3.2.2.

Canonical vocabulary for Workbench Template. Read the [full definitions](workbench/wiki/glossary-details-index.md) for operational distinctions and preserved project meaning.

## Language

### Destination and direction

**Destination Question Card (DQC)**:
A sourced, evolving synthesis of related grilling questions, understanding and evidence.

**Landmark**:
A `LANDMARK.md` destination below Blueprint and above Spec, defining direction and success.

**Landmark Tracker**:
The view tracing intent to delivered decisions and proof.

**Landmark Wiki page**:
The evolving synthesis of a landmark’s question cards, updated when a card changes.

**Expected result**:
The durable change or knowledge sought, with its destination.

**Design concept**:
The project understanding shared by its participants.

**Traverse, don't search**:
Reach task-relevant context by following known entry routes to its owners.

**Map**:
Direction at landmark/Spec scale; writes requirements, boundaries, acceptance and sources.

**Decisions so far**:
The Map’s concise index of conclusions, linked to current owners and evidence.

**Fog**:
Destination work awaiting a precise decision question.

**Frontier**:
Unblocked, unclaimed Tasks at the Map’s edge.

### Workflow verbs

**Align**:
Inquiry establishing the owner’s shared design concept.

**Workflow**:
Defined verbs composed for an authorized endpoint, with six named workflow stages.

**Workflow verb**:
A defined action used in ordinary language and composed into workflows.

**Promote**:
Record and publish one confirmed decision in its durable owners.

**Record**:
Preserve intent, context, decisions, state and evidence in their owners, retaining status and history.

**Publish**:
Checked integration landing, verified containment and read-back of changed owners.

**Prepare**:
Map and Plan; exit needs scoped owner execution approval, distinct from Approve.

**Ship**:
The owner’s permission to deliver named work to main after checks, not a stage.

**Explore**:
Idea, Align and Confirm; exit needs explicit owner confirmation of readback and scope.

**Judge**:
Independent Review, integration Verify and owner Approve of assembled pre-delivery work.

**Complete**:
After Judge: Deliver, then Cleanup, preserving knowledge before clearing scaffolding.

**Idea**:
The owner’s starting thought, recorded before alignment.

**Confirm**:
Human Verified Intent: shared meaning and endpoint, granting no execution or completion.

**Prototype**:
An optional rough build answering a question; needs no Map and creates no enduring context.

**Plan**:
Divide a Map into the smallest coherent Tasks with provable outcomes.

**Jot**:
A small sourced Wiki-topic capture, retaining claim status, uncertainty and corrections.

**Implement**:
Change the source of truth or the project’s working product.

**Check**:
The builder’s deterministic Task tests, builds, lints and diagnostics.

**QA**:
The builder’s judgment that its Task works beyond what deterministic Check proves.

**Submit**:
Return a Task by merge request, answering merge safety and completion or further work.

**Review**:
A non-builder judges the completed destination against its Map and need for another Journey.

**Verify**:
Confirm reviewed work after its integration merge.

**Journey**:
Implement, Check, QA and Submit; follows Map/Plan and precedes Review.

**Approve**:
Human Reviewed Work after Review/Verify; grants no delivery and differs from execution approval.

**Delivered**:
The authorized result reached its destination; checked main in this workflow, not a stage.

**Deliver**:
Under Ship it, carry approved work to its destination and verify unchanged arrival.

**Clean Up**:
Clear scaffolding after preserving knowledge; Cleanup follows Deliver.

### Workbench, room and artifacts

**Context Map**:
`ARCHITECTURE.md` routes to concepts, records and evidence.

**Workbench**:
An agentic system aligning project ideas and proving designs.

**Project**:
The product or body of work the Workbench exists to deliver.

**Owner**:
The person whose ideas the project realizes, who confirms, approves, unblocks and authorizes main.

**Room**:
A project as a workplace; its Workbench supplies what agents need to work on it.

**Scaffolding**:
Transient destination artifacts—landmarks, Specs, Tasks, handoffs and notepads—cleared after knowledge capture.

**Contract artifact**:
AGENTS.md and its host adapter: every-turn obligations applying universally.

**Routing artifact**:
A durable on-demand route to detail, such as Blueprint, Architecture, Runbook or README.

**Architecture artifact**:
Transient destination scaffolding, cleared after its knowledge is kept.

**Control**:
A one-action tool; open its record for verification, audit, debugging, absence or disagreement.
_Avoid_: root controls

**Portable Workbench**:
A Git-packaged system supporting authorized work and recovery across hosts and agents.

**Host portability**:
Equivalent behavior across configured case rules, Windows/POSIX paths and symlinked invocation.

**Ownership origin model**:
Tracks upstream/project-local ownership and preserves deliberate differences through updates.

**Workbench self-drift check**:
Read-only before/after comparison of the canonical Workbench’s current-facing update artifacts.

**Lane Sweep**:
A recurring read-only branch/worktree/PR classification against Specs, reporting drift.

**Blueprint**:
The room’s what, audience, promised outcomes and non-goals.

**README**:
Human orientation to contents, purpose, getting started, documentation, support and terms.

### Specs and Tasks

**Spec**:
A scoped destination owning requirements, decisions, acceptance and proof across implementor runs.

**Task**:
One implementor-run assignment toward a Spec, self-checked and handed back for reconciliation.
_Avoid_: ticket

**Packet**:
The bounded Task entry material: TASK.md, the active Spec acceptance lines it satisfies, cited source/test paths and the Contract. A Scoped handoff and objective notepad join only when they exist.

**Assembled-Spec review**:
Whole-Spec QA by Dispatcher and independent review of its immutable candidate by Director.

**Human QA**:
Owner evaluation at chosen useful milestones, with failed findings visible until resolved.

**Retired**:
Reconciled Spec/Task scaffolding outside ordinary pickup, retaining reachable needed history.

**Archive**:
Permanent, reachable ADR/DDR supersession/deprecation history with original bodies preserved.

### Chats and roles

**Chat**:
One owner-visible Conversation context; it completes at most one Task, cleans up and ends.

**Conversation**:
The human-agent exchange within a Chat.

**Thread**:
A connected series or tree of Chats.

**Role**:
An agent’s assigned scope at a scale: Captain, Director, Dispatcher or Worker.

**Director**:
Accepted destination: landmark-lane coordination of Dispatchers and landmark review.

**Dispatcher**:
One Spec/branch role coordinating Tasks and owning assembled-Spec verification.

**Worker**:
One Task/attempt role producing a self-checked result and hand-back.

**Coordination hand-back**:
Owner intervention supplying an already-settled answer, available finding or authorized step.

### Priority and value

**Priority**:
P1 Interrupt, P2 Committed, P3 Secondary, P4 Backlog: attention timing, separate from Value.

**Value**:
V1 Quick Win, V2 Strategic Value, V3 Fill-In, V4 Defer / Eliminate: return versus investment.

### Feedback disposition

**Feedback disposition**:
Each finding’s single outcome, recorded in its owning Spec from the closed set below.

**`diagnostic`**:
A finding became a stable registered doctor code with remediation.

**`test`**:
A finding became a check at a stable testing seam.

**`repaired`**:
A direct code/config/docs fix named by commit, without becoming a diagnostic or stable-seam test.

**`declined`**:
Not pursued, with the reason recorded.

**`accepted-open`**:
Accepted but unscheduled, naming its owning Spec or explicitly reporting the missing owner.

### Workbench meanings of AI coding terms

**Automated review**:
A judgment by an agent other than the builder; it can miss what a check would catch.

**Grilling**:
A design-concept interview settling one decision at a time with a recommended answer.

### Continuity terms

**Notepad**:
Preserved revision-checked objective JSON for compatibility and structured consumers.

**Scoped handoff**:
A recipient-specific Markdown job/endpoint and readable map to preserved context and sources.

**WBID**:
An artifact’s visible type prefix and replacement value.

### Stance terms

**Stance**:
The job, method and obligations within an assigned role scope.

**Spec Planner**:
Plans small Tasks and parallel vertical slices for one Spec at launch.

**Spec Manager**:
Dispatches and monitors one Spec’s planned Task groups.

**Builder**:
Delivers scoped verified work and maintains its documentation.

**Auditor**:
Checks named claims against pinned evidence and returns a bounded verdict.

**Reviewer**:
Challenges an immutable candidate’s correctness, impact and evidence.

**Reconciler**:
Reconciles claims with evidence and owning continuation state.

### Governance core

These terms are shared by every Workbench.

**Governance Plane**:
A claim’s role: Intent, Enduring Context, Grounding, Canon, Actuality or Projection.

**Workbench Contract**:
AGENTS, assigned Spec requirements and the routed lane skill’s requirements during its operation.

**Instruction authority**:
Owner request → AGENTS/platform safety → bounded assigned Spec → other Contract carriers.

**State resolution**:
Newer Canon: implementation gap; newer verified Actuality: doc drift; unclear ordering: investigate.

**No-governance-tax rule**:
Only Contract and verification are prerequisites; owner-required coordination belongs to Contract.

**Diagnostic**:
A registered code with severity error/attention, scope, and blocking effect all/selection/selected-slice/none.

**Support lane**:
Seven manifest slots: six under `workbench/`, plus skills at `.agents/skills`.

**Skills lane**:
Receipt-stamped Core source at `.agents/skills`, updated by Workbench and linked from `.claude/skills`.
_Avoid_: same-name personal copies, backups in scanned roots

**Collection**:
A manifest-declared machine-used directory within a lane.

**ADR**:
An architectural choice with alternatives, consequences, provenance and operational owners.

**Decision Record**:
One consequential architectural (ADR) or destination (DDR) choice and its rationale.

**DDR**:
A consequential product-destination choice and rationale, with ADR-style layout/lifecycle.

**Read words**:
list (inventory), show/get (whole), search (matches), history (changes), inspect (field/range).

**Checkpoint**:
A retained historical tracked `sessions/checkpoints/` copy; new creation is retired.

**Operational recovery**:
Ignored `sessions/recovery/` rollback receipts and backups.

**Design Concept article**:
A durable Wiki model/synthesis with Evidence and Sources and History.

**Wiki profile**:
Project Wiki shape, or deployment shape adding owner/machine/project pointers.

**Managed runtime tool**:
A release-installed runtime file with source release, commit and hash receipt.

**Declared integration branch**:
The branch, named by exact case in `workbench/manifest.json` `git.integrationBranch`, which receives Task PRs after their self-check, merge answers and CI and stages assembled Spec work for its independent review; `git.defaultBranch` names the branch it is created from.

### Continuity and evidence boundaries

**Workbench connection identity**:
Manifest `workbenchId`, the stable namespace for optional private session transport.

**Private session transport**:
Explicit synchronization of selected live working records.

**Direct promotion**:
Reconcile selected claims with privacy/validity checks and verified recovery before cleanup.

**Configured-host capability**:
An operation exercised on the actual configured host.

**Core compatibility**:
The supported range between a selected installed global Core release and room versions.

### Project terms

These terms belong to this reference room; [Project terms explained](workbench/wiki/vocabulary-project-terms.md) gives each distinction and how this room reads the shared **Room** entry.

**Feature article**:
A readable Wiki explanation of a completed Spec's delivered capability, captured at closure.

**Tour**:
The ordered list of places in `tour.mjs`, each naming a real path with what it owns and why it is kept apart.

**Place**:
One entry in the tour: a path, its zone, the truth it owns, and the reason that truth is not kept somewhere else.

**Zone**:
One of the three groupings a place belongs to: `Root controls`, `The support root`, `The product`.

**Drift**:
The condition where the room's structure and the tour's description of it disagree.
