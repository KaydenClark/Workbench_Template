# Director procedures

Read only the procedure for the current operation.

## Project coordination and delivery

Use this when starting or monitoring cross-Spec assignments, recording coordination, selecting a review route or handing work back to the owner.

Start from current controls and integration state. Resolve each assigned `SPEC.md` through `workbench/manifest.json`; inspect the Taskboard, ADR collection and Wiki router for accepted decisions and open gates. A local chat, private memory or unmerged branch must not be the sole source of state another agent needs to continue.

Record coordination decisions in their existing owner as they are made, not at closeout. Route Spec changes to that Spec's single writer, or record them in the coordination owner the project names. Keep a documented decision, an unmerged candidate and an integration-delivered capability distinct; only a reviewed merge into integration delivers. Name one writer for each shared artifact, including projections, controls and routers, and record cross-Spec dependencies and landing order in a tracked integration owner.

Monitor Dispatcher reports and resolve coordination within the project assignment. Record a permission refusal or unsupported host capability in the owning Spec; do not route around it or act on a Worker's behalf. Escalate only a genuine owner choice, with options, a recommendation and its cost, recorded in its owner; do not reopen a settled question.

Arrange separate-context review of each immutable assembled candidate and coordinate its merge request into the integration branch. For an unchanged assembled content digest, reuse the review and rerun affected dependency checks. Changed content needs fresh review. A room's Task-PR exemption is selected only after checking its release owner; the Task is judged by its merge answers without a separate-context review. Never infer that exception from a branch shape.

Keep accepted decisions, progress, branch/candidate references and remaining gates in tracked owners on integration through reviewed changes. Allocate IDs only when the record using them is committed. Route implementation and corrections through the assigned Dispatcher to its Workers. Connected coordination stages may share one Director context; prior involvement still bars independent review. Keep PRs awaiting required review open. Main delivery requires the owner's explicit authority for that specific work and its required checks; out-of-scope work remains unassigned.

Before exit, follow the shared [workspace closeout procedure](../implement/workflow-reference.md#workspace-closeout) for the coordination workspace and its retained work.

At exit, record each Spec's endpoint in its owner: PR, merged SHA, review verdict and remaining gates, or the blocker. Report what landed, what remains and each open owner choice. This report does not claim owner approval.

## Role and stance coordination

Roles scope assignments; stances supply their job. Follow the `GLOSSARY.md` role and stance definitions and the `ARCHITECTURE.md` ownership routes before
assigning Director (project/integration), Dispatcher (one Spec/branch) or Worker
(one Task). The owner remains the human above the Director, and occupying the
integration branch adds no authority. Each Worker carries one assigned Task for
one attempt and hands back to its Dispatcher. Changing stance alone creates no
handoff and never makes a prior participant independent. At flight launch, assign Spec Planner to plan small Tasks and safe
parallel groups from current Actuality; planning Workers may assist. Assign
Spec Manager to dispatch and monitor execution. Keep one writer for shared
Spec/projection state. Coordinate cross-Spec dependencies with the Director
when present; otherwise delegate only necessary directly connected prerequisite
Tasks to Workers, preserving original ownership, claims and proof. Connected
stages may be performed in one context within the assigned role. Dispatchers
orchestrate; Workers implement all changes and corrections. Missing Workers
leave a recoverable blocker, never a Director or Dispatcher implementation fallback.

Use Reviewer or Auditor stance for the named verification job. Apply the
existing independent-review eligibility rules to the actual agent/context;
changing stance does not clear prior involvement. Normally Workers hand back
merge requests to the Dispatcher branch and the Dispatcher presents the
assembled candidate for review and merge into integration. Inspect the current
release owner for any bootstrap exception before selecting a target.

Reconcile accepted decisions, current progress, off-integration candidate
references and remaining gates into their existing tracked owners through
reviewed changes. Distinguish a documented decision, an unmerged candidate and
a delivered capability. Create no Tasks for a newly planned Spec until launch;
preserve already-authored Tasks and their evidence.

## Owner closure and reconciliation

The closure sequence is reviewed delivery on integration -> owner approval -> verification on main -> `complete`.
Owner Human QA timing and findings follow `AGENTS.md` [Git Rules](../../../AGENTS.md#pr-instructions); the approval is
content-bound, recorded with `approve S-### --candidate SHA --owner NAME`
only for the owner's actual approval of delivered integration content.
`approve` with `--finding TEXT` follows the same rule (each finding names
`continue TK-###:` or `new Task:`); with
`--destination-change TEXT` it records the return to Align without inventing
Tasks. A failed Human QA finding returns to the appropriate scope of Align,
design-concept and delivery work; it does not imply every defect changes design.

Promotion from integration to main requires explicit owner authorization for the specific work. After that promotion, refresh the
default-branch ref (`git fetch origin main` in the declared room) before `complete S-###`:
the command requires all Tasks done, checked acceptance, a Completion Result,
current passed review and owner approval, and verifies the approved content
is contained unchanged on the observed `origin/main`. A merge alone closes
neither Task nor Spec. Run `render` and `doctor` after completion to remove
the Spec from the hot board and keep outstanding diagnostics visible.

After `complete`, capture current capability knowledge in the manifest-declared
features collection before retirement or discard. Update the existing owning
Wiki feature article and retain each contributing Spec's historical route; this is ordinary
documentation work, not a capture CLI command. `uncaptured-complete` reports
missing capture while the Spec remains complete. Reconcile surviving claims
into their durable owners before `retire-spec S-### --wiki PATH`; use the
link-safe folder operations, never manual moves. Discard only retired records
after main containment, capture and the current-reference checks permit it;
retain needed origins, corrections and recovery evidence. A later gap against
delivered work becomes a new Spec under its landmark or the Blueprint, never a
revived Spec and never a correction anchored to a Wiki claim; the Wiki is
evidence for that Spec's direction and plan, not its destination, and the
corrective commands refuse a complete, superseded or retired Spec. The exact
retirement, discard and recovery procedures are in
[Documentation: feature capture, retirement and recovery](#documentation-feature-capture-retirement-and-recovery) below.

Before proposing removal as clutter, distinguish documentation drift,
duplication and an intended lifecycle whose implementation has not caught up.
Trace consumers, unresolved obligations and retained knowledge, then apply the
existing retirement, discard and recovery conditions to the supported diagnosis.

## Owner: Human QA and main-before-complete

Examples name S-001/TK-001; substitute the actual IDs and quoted values.
Bracketed values such as `[SHA]`, `[DIGEST]` and `[INTEGRATION SHA]` denote
values captured from the inspected report and delivered commit; replace them
with actual values, never pass these labels literally.

Approve is the last step of Judge: the owner's Human Reviewed Work after a
passed Review and integration Verify of the same content. It grants no
delivery; the owner's Ship it does. A post-delivery Task cannot be claimed until
a passed verdict and this approval bind the current content, and its
bookkeeping keeps them current.

The owner chooses useful milestones, accumulated work, valued Specs, exhausted
Specs or Director escalations for Human QA; version cadence is a default, not a
mandatory sole trigger. An ongoing or failed review remains its corrective
cycle, not a request to start QA again. Monitoring, findings, a merge and a green
suite do not approve anything. The runtime records approval per Spec and binds
it to the delivered integration content; it has no batch/version approval verb.

Only record the owner's actual decision. Finding and destination-change examples
are alternatives to explicit approval, not approval with optional decorations:

```bash
node workbench/tools/spec-workbench.mjs approve S-001 --candidate "[INTEGRATION SHA]" --owner "[WHO]" \
  --finding "[FINDINGS]"
node workbench/tools/spec-workbench.mjs approve S-001 --candidate "[INTEGRATION SHA]" --owner "[WHO]" \
  --destination-change "[TEXT]"
node workbench/tools/spec-workbench.mjs approve S-001 --candidate "[INTEGRATION SHA]" --owner "[WHO]"
```

A finding follows the same disposition rule (`continue TK-###: ...` or
`new Task: ...`); a destination change records return to Align
without inventing Tasks. Return at the implicated scope: a defect need not
change the design concept. Keep failed required-capability findings visible
as real downstream dependencies until resolved. After correction, repeat
assembly/review/delivery and obtain the owner's actual approval of that content.

After the explicitly owner-authorized content lands on main, fetch the declared
default branch (`main` in these examples; use the declared default branch), then close the Spec:

```bash
git fetch origin main
node workbench/tools/spec-workbench.mjs complete S-001
node workbench/tools/spec-workbench.mjs render
node workbench/tools/spec-workbench.mjs doctor
```

`complete` requires all Tasks done, including every post-delivery Deliver and
Cleanup Task with its proof, checked acceptance, a real Completion Result,
evidence, current passed review and owner approval. It verifies the approved
candidate and unchanged assembled content on observed `origin/main`; a local
main branch or integration merge is insufficient. Refusals leave state untouched.
Completion records the observed ref/SHA and preserves administrative approval;
substantive changes invalidate it. Render removes complete Specs from the hot
board; outstanding diagnostics remain visible.

## Documentation: feature capture, retirement and recovery

Read [Documentation: feature capture, retirement and recovery](procedures--documentation-feature-capture-retirement-and-recovery.md#documentation-feature-capture-retirement-and-recovery) when working on this topic.

## Landmark lifecycle

Read [Landmark lifecycle](procedures--landmark-lifecycle.md#landmark-lifecycle) when working on this topic.
