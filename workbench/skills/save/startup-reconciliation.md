# Reconcile startup and recover

STARTUP is a bounded, manually reconciled view of existing source owners. It is
not a second queue, claim mechanism, permission source or automatic generator.
Keep one named integration writer; the configured coordinator hands that role
over explicitly. A Worker changes its owned source and proposes a summary in
its existing PR, never competes to overwrite the shared view.

## At a meaningful transition

Before checkpoint, handoff or yield, the writer:

1. Reads current source records for every affected lane, including other lanes'
   newly landed changes. Resolve assignments through the manifest and retain
   current claims, blockers, corrections, source links and next actions there.
2. Fetches the configured integration ref when available and records its exact
   commit as `Fetched integration basis`. A failed fetch leaves the prior basis
   explicitly stale; do not replace it with a local tip and call that fetched.
3. Updates the small Sources table: lane and next action, linked owner path,
   fingerprint, publication state and evidence. Retain other active lanes. A
   changed fingerprint demands rereading the owner; never refresh hashes blindly.
4. Rechecks every cited source immediately before committing. If another source
   advanced, reread and reconcile again. Merge conflicts require combining
   current owners, not choosing the last STARTUP writer's whole file. Publish
   source and summary together where possible; separately landed sources make
   the old summary stale until reconciled. Prune completed summaries only after
   durable owners preserve their consequential context.

Use SHA-256 over UTF-8 source text with CRLF normalized to LF. This makes a fresh
clone independent of checkout newline settings. Never fingerprint STARTUP or its
own commit; no self-referential revision is required. The following read-only
command prints a fingerprint; replace `PATH` with each cited owner path:

```bash
node --input-type=module -e "import fs from 'node:fs'; import crypto from 'node:crypto'; console.log(crypto.createHash('sha256').update(fs.readFileSync(process.argv[1], 'utf8').replaceAll('\r\n', '\n')).digest('hex'))" PATH
```

Compare that output to the row, then inspect any changed owner and its Git diff.
The producer's optional `node tools/check-startup.mjs` checks fingerprints and
record shape; it does not ship as a room prerequisite. Missing/unknown fields in
a new scaffold mean unreconciled. A missing or stale view never prevents a
reader from following current authorized owners; report the mismatch to its
writer. Timestamp alone cannot establish freshness. Source selection and the
meaning of a correction still require judgment.

## Publication and interruption

- `local-only`: work exists only in this checkout. Name that limit; an interrupted
  unpushed change is unavailable remotely. A fresh clone follows the last
  remotely available owners and does not fabricate the missing work.
- `pushed-pending`: fetch the candidate branch and prove exact commit containment;
  retain the candidate URL and exact checked SHA in its existing owner. A PR's
  existence alone does not prove its latest source changes were pushed. Resume
  from that candidate; integration remains pending.
- `integrated-fetched`: after authorized merge, fetch integration and prove
  `git merge-base --is-ancestor COMMIT REMOTE/INTEGRATION`. Record
  `commit:FULL_SHA ref:REMOTE/INTEGRATION observed:YYYY-MM-DD` in the evidence
  cell. This records an observation, not a durable promise about a moving ref.
  Another machine verifies its own fresh fetch and containment before treating
  those changes as received. If landing happened but fetch failed, retain the
  last verified state and name the unverified landing in the existing owner.

A helper can validate evidence shape but cannot certify network observations,
publication, authority or completeness. Keep scope approval and acceptance at
existing owners, with their source and correction history. Follow the save
[publication procedure](SKILL.md#publication) for the required review/merge gates;
return to the assigned Spec/Task for the next action. Never transfer private
notes into STARTUP merely to make continuation easier.
