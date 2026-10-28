# Single-run assignments and continuing Specs

The [Task decision](https://github.com/KaydenClark/LLM_Workbench/blob/36b7a0c4ca8febdfd2d81964e2307e1d3555c692/workbench/docs/ddr/002B-a-task-is-one-implementor-run-and-the-spec-owns-continuing-work.md)
makes the Spec the orchestration and comparison owner across runs. A Task is
the implementor's assignment for one run, including its checks and hand-back.
Use a new bounded assignment for later work against the same Spec.

Before dispatch, name the selected Spec acceptance, exact useful result,
available inputs, file/writer lane, verification and hand-back. Plan independent
assignments together when they can run concurrently. Shared output owners have
one writer and an explicit reconciliation point. Concurrency is bounded by the
actual available agents and isolation; the wording never starts agents by itself.

At hand-back the orchestrator compares the actual result with the Spec, records
the achieved candidate, checks, defects and remaining gap in the Spec and
maintained product/documentation, then writes the next assignment if needed.
A run can complete its bounded assignment while the Spec still has work left.
Passing a run's checks does not mark a missing capability complete.

Once reconciled, TASK.md is disposable scaffolding rather than the sole source
of requirements, evidence or continuation. Preserve existing historical evidence
and update every live dependency/reference before removing or replacing a record.
The current runtime still retains Task status, dependency IDs and checksum-chained
Receipts, and its `close` refuses unmet Task acceptance. This writing change adds
no incomplete-run closure, per-run discard or dependency-rewrite command. Keep
existing records until a supported lifecycle operation can reconcile them;
never fake completion or manually delete them to claim the migration happened.

An unexpected interruption preserves recoverable progress and the exact blocker.
Single-run sizing is not an early-exit rule: finish the assigned endpoint unless
a real blocker or the owner stops the run.
Ordinary incomplete work is a sizing finding: make the next assignment smaller,
under the same Spec, without dropping its outstanding requirements. A Task's
check/fix loop can continue within its current run; continuing the destination
in another implementor run is the Spec's job.
