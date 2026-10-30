import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { loadBudgets, budgetFor, budgetFailure, characterCount } from '../tools/artifact-budgets.mjs';
const root = new URL('../', import.meta.url).pathname;
const policy = loadBudgets(root);
for (const file of ['AGENTS.md', 'templates/AGENTS.md', 'BLUEPRINT.md', 'ARCHITECTURE.md', 'RUNBOOK.md', 'workbench/specs/example/SPEC.md', 'templates/LANDMARK.md', 'workbench/specs/example/tasks/x/TASK.md', 'workbench/skills/example/SKILL.md']) {
  const max = budgetFor(policy, file).maxCharacters;
  assert.equal(budgetFailure(policy, file, 'x'.repeat(max)), null);
  assert.match(budgetFailure(policy, file, 'x'.repeat(max + 1)), /characters; maximum/);
}
assert.equal(characterCount('a\r\nb\rc😀'), 6);
assert.equal(budgetFor(policy, 'SPEC.md').maxCharacters, 8000);
assert.deepEqual(budgetFor(policy, '.agents/skills/example/SKILL.md'), { targetCharacters: [900, 900], maxCharacters: 8000 });
assert.equal(budgetFor(policy, '.agents/skills/example/reference.md').maxCharacters, 15000);
assert.equal(budgetFor(policy, 'ARCHITECTURE.md').maxCharacters, 3000);
assert.deepEqual(Object.keys(policy).sort(), ['artifacts', 'defaultMaxCharacters', 'schemaVersion', 'tiers', 'unit']);
assert.deepEqual(policy.tiers, [900, 1500, 3000, 5000, 8000, 15000]);
assert.deepEqual(Object.keys(policy.artifacts).sort(), ['AGENTS.md', 'ARCHITECTURE.md', 'BLUEPRINT.md', 'LANDMARK.md', 'RUNBOOK.md', 'SKILL.md', 'SPEC.md', 'TASK.md', 'TASKS.md']);
for (const name of ['AGENTS.md', 'ARCHITECTURE.md', 'BLUEPRINT.md', 'RUNBOOK.md']) assert.deepEqual(budgetFor(policy, name), { targetCharacters: [900, 1500], maxCharacters: 3000 });
for (const name of ['LANDMARK.md', 'SPEC.md', 'TASK.md', 'TASKS.md']) assert.deepEqual(budgetFor(policy, name), { maxCharacters: 8000 });
for (const name of ['notes.md', '.agents/skills/example/procedure.md', 'workbench/docs/procedure.md']) assert.deepEqual(budgetFor(policy, name), { maxCharacters: 15000 }, 'unlisted documents have only the safety ceiling');
assert.equal(budgetFailure(policy, '.agents/skills/example/SKILL.md', 'x'.repeat(901)), null, 'skill target is advisory');

assert.equal(budgetFailure(policy, 'AGENTS.md', 'short'), null, 'target is advisory, not a minimum');
assert.ok(budgetFailure(policy, 'AGENTS.md', '```\n' + 'x'.repeat(3000) + '\n```'));
console.log('artifact budgets: PASS');

const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'artifact-budget-test-'));
try {
  fs.mkdirSync(path.join(temp, 'workbench'));
  fs.writeFileSync(path.join(temp, 'workbench/artifact-budgets.json'), JSON.stringify(policy));
  const run = () => spawnSync(process.execPath, [path.join(root, 'tools/check-artifact-budgets.mjs'), '--root', temp, '--files', 'SPEC.md'], { encoding: 'utf8' });
  fs.writeFileSync(path.join(temp, 'SPEC.md'), '😀'.repeat(8000));
  assert.equal(run().status, 0);
  fs.appendFileSync(path.join(temp, 'SPEC.md'), 'x');
  assert.equal(run().status, 1);
  assert.match(run().stderr, /8001 characters; maximum 8000/);
  const git = (...args) => spawnSync('git', ['-C', temp, ...args], { encoding: 'utf8' });
  assert.equal(git('init', '-q').status, 0);
  fs.writeFileSync(path.join(temp, 'SPEC.md'), 'small');
  fs.writeFileSync(path.join(temp, 'workbench/manifest.json'), JSON.stringify({ lanes: { skills: '.agents/skills' } }));
  fs.mkdirSync(path.join(temp, '.agents/skills/example'), { recursive: true });
  fs.writeFileSync(path.join(temp, '.agents/skills/example/SKILL.md'), 'x'.repeat(8001));
  const inventory = spawnSync(process.execPath, [path.join(root, 'tools/check-artifact-budgets.mjs'), '--root', temp], { encoding: 'utf8' });
  assert.equal(inventory.status, 1, 'a manifest-declared hidden skills lane is scanned');
  assert.match(inventory.stderr, /\.agents\/skills\/example\/SKILL\.md: 8001 characters; maximum 8000/);
  const small = path.join(temp, 'small.md');
  fs.writeFileSync(small, 'Small content must not be opened.');
  const guard = path.join(temp, 'deny-small-read.mjs');
  fs.writeFileSync(guard, `import fs from 'node:fs';\nconst read = fs.readFileSync;\nfs.readFileSync = function(file, ...args) { if (String(file) === ${JSON.stringify(small)}) throw new Error('small body read forbidden'); return read.call(this, file, ...args); };\n`);
  const bounded = spawnSync(process.execPath, ['--import', guard, path.join(root, 'tools/check-artifact-budgets.mjs'), '--root', temp, '--files', 'small.md'], { encoding: 'utf8' });
  assert.equal(bounded.status, 0, `UTF-8 byte bound proves a small artifact within budget without reading its body: ${bounded.stderr}`);
  fs.writeFileSync(path.join(temp, 'workbench/artifact-budgets.json'), '{}');
  assert.equal(run().status, 2);
} finally { fs.rmSync(temp, { recursive: true, force: true }); }
