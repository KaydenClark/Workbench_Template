import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const checker = fileURLToPath(new URL('../tools/check-evidence-history.mjs', import.meta.url));
const spec = 'workbench/specs/S-001-demo/SPEC.md';
const task = 'workbench/specs/S-001-demo/tasks/TK-001/TASK.md';
const evidence = '# Spec\n\n## Append-Only Evidence And Execution Log\n\n| Date | Proof |\n|---|---|\n| 2026-10-22 | passed |\n\n## Result\nPending.\n';
const receipt = '# Task\n\n## Receipt\n\n| Run | Tests |\n|---|---|\n| 1 | passed |\n';
function fixture(t) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'evidence-history-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));
  const git = (...args) => {
    const result = spawnSync('git', args, { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 0, result.stderr);
    return result.stdout.trim();
  };
  git('init', '-q'); git('config', 'user.email', 'fixture@example.invalid'); git('config', 'user.name', 'Fixture');
  const write = (name, content) => { fs.mkdirSync(path.dirname(path.join(root, name)), { recursive: true }); fs.writeFileSync(path.join(root, name), content); };
  write(spec, evidence); write(task, receipt);
  git('add', '.'); git('commit', '-qm', 'base');
  const base = git('rev-parse', 'HEAD');
  return { root, write, git, base, run: (value = base) => spawnSync(process.execPath, [checker, value], { cwd: root, encoding: 'utf8' }), commit: () => { git('add', '-A'); git('commit', '-qm', 'candidate'); } };
}
test('preserves old evidence and receipts while allowing appended rows', t => {
  const f = fixture(t);
  f.write(spec, evidence.replace('\n## Result', '| 2026-10-23 | new proof |\n\n## Result'));
  f.write(task, receipt + '| 2 | passed again |\n'); f.commit();
  const result = f.run(); assert.equal(result.status, 0, result.stderr); assert.match(result.stdout, /2 evidence sections/);
});
test('rejects modification of an existing evidence row', t => {
  const f = fixture(t); f.write(spec, evidence.replace('passed', 'failed')); f.commit();
  const result = f.run(); assert.equal(result.status, 1); assert.match(result.stderr, /existing rows changed/);
});
test('rejects deletion of an existing receipt row', t => {
  const f = fixture(t); f.write(task, receipt.replace('| 1 | passed |\n', '')); f.commit();
  assert.equal(f.run().status, 1);
});
test('rejects deletion of an evidence-bearing governed file', t => {
  const f = fixture(t); fs.unlinkSync(path.join(f.root, spec)); f.commit();
  const result = f.run(); assert.equal(result.status, 1); assert.match(result.stderr, /missing or moved/);
});
test('allows a Git-detected rename that preserves all evidence', t => {
  const f = fixture(t); f.git('mv', spec, 'workbench/specs/S-001-demo/OLD.md'); f.commit();
  assert.match(f.git('diff', '--name-status', '-M', f.base, 'HEAD'), /^R100/m);
  const result = f.run(); assert.equal(result.status, 0, result.stderr);
});
test('rejects changed evidence after a Git-detected rename', t => {
  const f = fixture(t); const moved = 'workbench/specs/S-001-demo/OLD.md';
  f.git('mv', spec, moved); f.write(moved, evidence.replace('passed', 'failed')); f.commit();
  assert.match(f.git('diff', '--name-status', '-M', f.base, 'HEAD'), /^R\d+/m);
  const result = f.run(); assert.equal(result.status, 1); assert.match(result.stderr, /existing rows changed/);
});
test('allows unrelated prose changes without changing old proof', t => {
  const f = fixture(t); f.write(spec, evidence.replace('Pending.', 'Done.')); f.commit();
  assert.equal(f.run().status, 0);
});
test('rejects a mutable or unavailable base instead of skipping checks', t => {
  const f = fixture(t); assert.equal(f.run('HEAD~1').status, 1); assert.equal(f.run('a'.repeat(40)).status, 1);
});
test('checks committed candidate bytes, not uncommitted replacements', t => {
  const f = fixture(t); f.write(spec, evidence.replace('passed', 'failed')); f.commit(); f.write(spec, evidence);
  assert.equal(f.run().status, 1);
});
