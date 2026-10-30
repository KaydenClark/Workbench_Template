# Current Verified State (part 1)

[Record](SPEC.md#current-verified-state)

<!-- workbench-record-body:start context=0 format=2 -->

Genesis produced this room from LLM Workbench v3.1.2 at commit
`18ffc0d295722e8437a13399b3a1b67369248314`:

- `workbench-layout.mjs init --provenance genesis` wrote a schema 2 manifest
  declaring six lanes, seven collections, the `project` wiki profile, the
  sixteen-skill policy, and `git.defaultBranch` / `git.integrationBranch`.
- `workbench-tools.mjs install` wrote eleven managed runtime tools into
  `workbench/tools/` with a receipt naming release `v3.1.2`, the same commit,
  and a hash per file.
- `tour.mjs` enumerates twenty-three places across three zones. `PLACES` is the
  only enumeration of the room's structure; the terminal output and the tests
  read the same array.
- `tests/tour.test.mjs` passes nine cases. Two of them were confirmed to fail
  on real drift rather than only to pass on a good tree: adding an undeclared
  file to the tools lane, and adding a lane to the manifest without describing
  it, each exit 1 and name the offending path.

`node tour.mjs --lifecycle` then closed that gap: it reads `provenance` and the
tools receipt out of the room and prints how the room came to exist, followed
by the five-step route to a newer harness version. Twelve cases now pass.

The room is published at `https://github.com/KaydenClark/Example_Workbench`, so
it is reachable by clone and no longer depends on one machine.

<!-- workbench-record-body:end -->
