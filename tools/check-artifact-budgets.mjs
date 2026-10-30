#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { loadBudgets, budgetFor, budgetFailure } from './artifact-budgets.mjs';

try {
  let root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
  let files;
  const args = process.argv.slice(2);
  while (args.length) {
    const arg = args.shift();
    if (arg === '--root' && args.length) root = path.resolve(args.shift());
    else if (arg === '--files' && args.length) files = args.shift().split(',');
    else throw new Error('Usage: node tools/check-artifact-budgets.mjs [--root DIR] [--files A.md,B.md]');
  }
  const policy = loadBudgets(root);
  const realRoot = fs.realpathSync(root);
  // Manifest-declared lanes remain in scope when installed outside workbench/,
  // including the hidden .agents/skills source lane.
  const manifestFile = path.join(root, 'workbench/manifest.json');
  const declaredLanes = fs.existsSync(manifestFile)
    ? Object.values(JSON.parse(fs.readFileSync(manifestFile, 'utf8')).lanes ?? {}) : [];
  for (const lane of declaredLanes) {
    if (typeof lane !== 'string' || path.isAbsolute(lane) || lane.split(/[\\/]/).some(part => part === '..')) throw new Error('Invalid manifest lane for artifact scan');
  }
  const inScope = file => !file.includes('/') || /^(templates|workbench|tools|evals|outcomes|benchmarks|team templates|research templates)\//.test(file)
    || declaredLanes.some(lane => file.startsWith(lane.replace(/\/$/, '') + '/'));
  // Git supplies project-owned files without traversing private/ignored directories.
  const explicitFiles = files !== undefined;
  files ??= execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', '-z'], { cwd: root, encoding: 'utf8' }).split('\0')
    .filter(file => file.endsWith('.md') && inScope(file));
  const failures = [];
  for (const file of new Set(files)) {
    const full = path.resolve(root, file);
    // Deletions no longer consume context. Explicit missing inputs remain errors.
    if (!fs.existsSync(full)) {
      if (explicitFiles) failures.push(`${file}: missing artifact`);
      continue;
    }
    const real = fs.realpathSync(full);
    if (!real.startsWith(realRoot + path.sep)) throw new Error(`${file}: escapes project root`);
    const stat = fs.statSync(full);
    if (!stat.isFile()) throw new Error(`${file}: not an ordinary artifact file`);
    // UTF-8 bytes bound code points from above; newline normalization cannot
    // increase the count. Small artifacts need no body read to prove compliance.
    if (stat.size <= budgetFor(policy, file).maxCharacters) continue;
    const failure = budgetFailure(policy, file, fs.readFileSync(full, 'utf8'));
    if (failure) failures.push(failure);
  }
  for (const failure of failures) console.error(failure);
  console.log(`Artifact budgets: ${new Set(files).size} checked, ${failures.length} over limit or missing.`);
  process.exitCode = failures.length ? 1 : 0;
} catch (error) {
  console.error(error.message);
  process.exitCode = 2;
}
