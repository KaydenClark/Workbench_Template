# Full procedure

[To Docs entry](SKILL.md). Use the sections relevant to the assigned operation.

## Purpose



Persist an already-settled conversation. Do not start a new interview. First
state the proposed destinations, then update only owners whose durable truth
changed.

For `promote-decision`, record the assigned decision's source, confirmed
meaning, rationale, corrections and status, then publish within its endpoint.
This does not start Map, Plan or Journey. The selected claims primitive remains
[`promote`](../promote/SKILL.md); standalone `to-docs` keeps its requested
endpoint. Record may preserve proposals and partial progress without making
them Canon or complete.

For a v3 project, first read `workbench/manifest.json`. It declares the support
lanes; do not create a root `specs/`, project-local `skills/` core shadow, or parallel
truth store. Authorized room-local extensions follow the
[`workbench-runtime` skill](../workbench-runtime/SKILL.md#room-local-skills).

- explicitly confirmed definitions are written during modeling or grilling through
  [domain-modeling](../domain-modeling/SKILL.md#update-glossarymd-on-confirmation),
  without another promotion approval; other accepted shared definitions -> `GLOSSARY.md`, with fuller explanation in
  its Wiki lexicon article; which artifact owns a kind of truth, its routes
  and invariants -> `ARCHITECTURE.md`;
- what the product is, who it serves, its promised outcomes and its
  non-goals (the Blueprint's four parts) -> `BLUEPRINT.md`;
- capability requirements, decisions, acceptance, proof, or completion -> the
  assigned `SPEC.md`;
- active assignment, blocker, event, or next gate -> update the owning spec,
  then run `node workbench/tools/spec-workbench.mjs render` for `TASKBOARD.md`;
- workflow lookup -> `RUNBOOK.md`; detailed procedures -> the existing owning
  skill; room setup -> `README.md`; executable room commands -> manifest legibility;
- human-facing orientation and setup -> `README.md`;
- agent authority, scope, safety, or required behavior -> `AGENTS.md`;
- durable knowledge, reference explanations, and stable personal, project, or
  machine memory -> the canonical wiki owner (`workbench/wiki/`, per its
  `SCHEMA.md`), routed from `workbench/wiki/MEMORY.md`, never a copied live
  queue, task row or Spec evidence;
- rationale, alternatives, and consequences of a consequential decision -> an
  ADR in the manifest `adr` collection (`workbench/docs/adr/`) whose
  `canonicalized_in` names operational owners. Active accepted decision claims
  are architectural Canon; do not duplicate the rule merely to make it bind.
- a consequential destination choice, what the finished product must be or do
  and why (it would still hold if the architecture were rebuilt) -> a
  Destination Decision Record written into the `ddr` collection's `proposed/`
  folder with `node workbench/tools/adr.mjs new --kind ddr --title "..."`. Its
  `canonicalized_in` names the owners that carry it, `BLUEPRINT.md` when it
  changes or contradicts the Blueprint, and never the Wiki. One decision that
  needs both records gets both, linked rather than merged.

For capability knowledge, read the existing Feature catalog article under the
manifest-declared `features` collection and reconcile new understanding there.
Several Specs can contribute to one maintained article. A Spec closure, chat,
report or correction does not justify another article for the same subject.
Keep history, progress explanations and lessons in that article with dated
sources, while live assignments and proof retain their owners. List Specs on
demand; do not save a parallel roster or copy its rows into the Wiki.

Route each claim once. Split a mixed finding into its claims and give each
exactly one owner by its job: a procedure step to its operational owner, a
definition to the glossary, a requirement or proof to the Spec, an explanation
to the Wiki. When another owner needs the claim, link to the owner that holds
it rather than copy it; a Wiki reference article explains why and links the
procedure instead of restating its steps. Never paste the whole finding into
every owner it touches.

Route only supported claims. Wiki jots retain labeled intent, proposals and
unresolved questions with source and correction history; a confirmed intent
is not implementation proof or Canon. Keep pending or disputed meaning labeled
in its topic Wiki. For legacy JSON sources, a `source_record` whose readback
is still listed in `current.unresolved` remains pending; only a `decision`
entry records a confirmed owner answer. Cite durable owners and exact commits as evidence, never an ignored
live path such as a note, handoff or recovery file. Update Spec state at
meaningful transitions and append evidence rows; do not copy conversation,
working notes or superseded interim states into permanent Spec history.

If capability truth needs a new spec and none is assigned, call the Skill tool for `to-spec`.
Do not create an ad hoc document or another truth store. Preserve append-only
evidence and completed spec history.

Read each changed owner back and confirm each claim appears once, where its
job belongs. Run the owning documentation checks (for the Wiki,
`node workbench/tools/wiki.mjs validate` and the [Wiki lint](#wiki-lint) of the
touched pages). For a spec-backed change, finish with
`node workbench/tools/spec-workbench.mjs render` and
`node workbench/tools/spec-workbench.mjs doctor`. If no owner changed, report exactly
`Docs checked; no update needed` with the reason.

## Finding the owner of a question

1. Use [ARCHITECTURE -> Ownership](../../../ARCHITECTURE.md#ownership)
   to identify the job: permission, meaning, destination, work state, proof,
   procedure, recovery or another listed responsibility.
2. Follow the named owner and resolve installed paths through the manifest.
   Consult only the relevant section and its linked sources. For a work-state
   question, follow the Taskboard row to the owning Spec before editing.
3. Separate the answer's status: accepted requirement, verified observation,
   proposal, unresolved question or historical claim. Apply AGENTS State
   Resolution if sources disagree; file location alone does not settle it.
4. When authorized work changes the answer, update its owner and refresh any
   derived view. If the route is missing, use bounded search and repair that
   route in scope. An unresolved decision stays in the existing work owner or
   objective note; a missing answer does not authorize a new task.

For example, a failed test has several owners: the Spec defines the expected
behavior, the source implements it, the result records the failure, and the
Spec records any resulting blocker. A Wiki explanation may clarify the cause;
it does not redefine acceptance. After interruption, the
[`implement` skill](../implement/SKILL.md#recovery-and-rollback) supplies the
recovery procedure while the Spec, source and saved context supply what to
recover. Execution and recovery therefore remain separate jobs.

## Citation anchors

The room's `AGENTS.md`
[Documentation Ownership And Proof](../../../AGENTS.md#dev-environment-tips)
keeps the rule that a citation into a file that changes must say which tree it
reads at; this is how to anchor one.

Every merge into the integration branch moves line numbers, so a bare
`path:line` written against a branch tip points at unrelated content once that
branch lands. Either anchor the citation itself with `git show <sha>:path`,
which is absolute and never needs re-anchoring, or declare the spec's anchors
once near the top:

> **Citation anchors.** pre=`<sha>` post=`<sha>`.

A label immediately before a citation names its tree and wins: "shipped `:M`"
reads at `post`, "base `:N`" at the sha of the `git show` anchor that introduced
the path. Unlabelled, a citation reads at `pre` in Outcome, Why It Matters,
Current Verified State, Desired Behavior and Documentation Impact - all written
before the change - and at `post` in every other live section. The shorthand
`` `:N` `` reads against the nearest path already in scope; a shorthand without
a scoped path is invalid. Evidence rows read at the commit each row names and
are never re-anchored, because they are append-only.

## Decision records

Read [Decision records](SKILL--decision-records.md#decision-records) when working on this topic.

## Wiki lint

Lint is a reading job an agent performs; no command does it, and
`node workbench/tools/wiki.mjs validate` (the
[`workbench-runtime` skill's Wiki Validation](../workbench-runtime/SKILL.md#wiki-validation))
keeps running on every change without replacing it. The obligation and its two
cadences are owned by [`AGENTS.md`](../../../AGENTS.md#dev-environment-tips)
and [`workbench/wiki/SCHEMA.md`](../../../workbench/wiki/SCHEMA.md#lint); this section
is the checklist, not a second statement of them.

**Small lint, at the end of every Wiki update, on the pages it touched:**

1. Run `wiki.mjs validate`. The touched pages add no finding: properties,
   collection shape, relative links and sources are the validator's, not the
   reader's.
2. Read each touched page against the pages it links to and the pages that
   link to it. It contradicts none of them.
3. Every claim still has its source. A claim checked in this operation is
   stated plainly; an inferred claim says `Inference:`; a dated one says its
   date. `last_verified` moved only for facts actually checked
   ([SCHEMA Update](../../../workbench/wiki/SCHEMA.md#update)).
4. The router `workbench/wiki/MEMORY.md` links the page with a one-line
   summary, and the summary still says what the page now says.
5. Every identifier on the page carries the artifact's name and a little
   context. Add what is missing; never strip an identifier.
6. Each truth lives once: the page links to its owner (Spec, decision record,
   `GLOSSARY.md`, `ARCHITECTURE.md`, Runbook) instead of restating it, and copies no live task state.
7. Project vocabulary has its canonical `GLOSSARY.md` entry and richer Wiki explanation when needed; general reference concepts may remain Wiki-only. Ownership and navigation follow `ARCHITECTURE.md`.
8. An article in `design-concepts/` or `features/` has its `History` line for
   this operation, and a design concept's `authorized_by` names it.

Repair what the update itself can fix on the same branch. A necessary correction remains in the current Task; a new outcome needs scope
authority. Record unresolved findings in the existing owner.

**At assembled Spec review:** run whole-Wiki structural validation and read
changed pages plus their affected inbound routes against the current controls.
Broaden semantic review where the changed contract affects more pages; ordinary
wording does not require rereading every article. Check source coverage,
current status, router summaries and contradictions within that affected set.
A green validator is not semantic proof. Keep necessary corrections in the
same Task and retain unrelated findings in their owners without inventing work.
