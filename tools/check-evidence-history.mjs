#!/usr/bin/env node
// Preserve existing Spec evidence and Task receipts across the CI event range.
import { spawnSync } from 'node:child_process';

function git(...args) {
  const result = spawnSync('git', args, { encoding: 'utf8', maxBuffer: 32 * 1024 * 1024 });
  if (result.status !== 0) throw new Error(`git ${args[0]} failed: ${result.stderr.trim()}`);
  return result.stdout;
}

function rows(text, heading) {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex(line => line === `## ${heading}`);
  if (start < 0) return [];
  let end = lines.findIndex((line, index) => index > start && /^#{1,2} /.test(line));
  if (end < 0) end = lines.length;
  const section = lines.slice(start + 1, end);
  const separator = line => /^\s*\|(?:\s*:?-+:?\s*\|)+\s*$/.test(line);
  return section.filter((line, index) => /^\s*\|/.test(line)
    && !separator(line) && !separator(section[index + 1] ?? ''));
}

try {
  const base = process.argv[2] ?? process.env.WORKBENCH_VERIFY_BASE ?? '';
  if (!/^[a-f0-9]{40,64}$/.test(base)) throw new Error('An immutable base commit ID is required.');
  git('cat-file', '-e', `${base}^{commit}`);
  git('merge-base', '--is-ancestor', base, 'HEAD');
  // Follow only renames Git can identify; unknown relocation still fails closed.
  const changes = git('diff', '--name-status', '-M', '-z', base, 'HEAD', '--').split('\0');
  const renames = new Map();
  for (let index = 0; index < changes.length - 1;) {
    const status = changes[index++];
    const source = changes[index++];
    if (/^[RC]/.test(status)) {
      const destination = changes[index++];
      if (/^R/.test(status)) renames.set(source, destination);
    }
  }
  const files = git('ls-tree', '-r', '--name-only', '-z', base, '--', 'workbench/specs').split('\0')
    .filter(file => /\/(SPEC|TASK)\.md$/.test(file));
  let sections = 0;
  for (const file of files) {
    const heading = file.endsWith('/TASK.md') ? 'Receipt' : 'Append-Only Evidence And Execution Log';
    const oldRows = rows(git('show', `${base}:${file}`), heading);
    if (!oldRows.length) continue;
    let candidate;
    const destination = renames.get(file) ?? file;
    try { candidate = git('show', `HEAD:${destination}`); }
    catch { throw new Error(`${file}: evidence-bearing file missing or moved.`); }
    const newRows = rows(candidate, heading);
    if (oldRows.some((row, index) => row !== newRows[index])) {
      throw new Error(`${file}: existing rows changed or removed from ${heading}. Append new evidence instead.`);
    }
    sections += 1;
  }
  console.log(`Evidence history preserved: ${sections} evidence sections checked against ${base}.`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
