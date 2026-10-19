// Read-only skills-lane inspection (S-00V). The core skills ship inside the
// room at the manifest-declared skills lane, and the declared discovery roots
// (`.agents/skills`, `.claude/skills`) are tracked adapters into it. Doctor
// reads the project tree only: it never reads the provider home and never
// writes. Discovery is filesystem evidence, never proof that a configured
// application can invoke a skill.
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { finding } from './diagnostics.mjs';

// One hash over a skill directory's ordinary files, in stable order. The
// managed marker a personal-catalog install writes beside the files is
// excluded so the hash describes the skill, not its installation.
export function skillContentHash(directory) {
  const hash = crypto.createHash('sha256');
  function walk(current, relative = '') {
    for (const name of fs.readdirSync(current).sort((a, b) => a.localeCompare(b))) {
      if (name === '.workbench-skill.json') continue;
      const target = path.join(current, name), child = path.posix.join(relative, name);
      const stat = fs.lstatSync(target);
      if (stat.isDirectory()) walk(target, child);
      else if (stat.isFile() && stat.nlink === 1) hash.update(`${child}\0`).update(fs.readFileSync(target)).update('\0');
      else throw new Error('Core content must contain ordinary unshared files and directories');
    }
  }
  walk(directory);
  return hash.digest('hex');
}

// The earliest room release the personal-catalog installer's marker may
// claim compatibility from; the lane itself carries a receipt, not markers.
export const CORE_COMPATIBILITY_MINIMUM = 'v3.1.4';

function lstatOrNull(target) {
  try { return fs.lstatSync(target); } catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

function realpathOrNull(target) {
  try { return fs.realpathSync(target); } catch { return null; }
}

// Git records a symlink with mode 120000. Only then does a plain file holding
// the link target mean the checkout wrote it as text; an untracked or regular
// tracked file keeps the ordinary install remedy.
function indexedAsSymlink(root, relative) {
  const result = spawnSync('git', ['-C', root, 'ls-files', '-s', '--', relative], { encoding: 'utf8' });
  return result.status === 0 && result.stdout.startsWith('120000 ');
}

// The declared discovery roots are the only ones a Codex or Claude host reads
// at the project root; a policy naming anything else is not one this room's
// tools can reason about.
const SUPPORTED_DISCOVERY = ['.agents/skills', '.claude/skills'];

export function inspectSkills(manifest, project) {
  if (manifest?.schemaVersion !== 2) return [];
  const required = manifest.skillPolicy?.required, discovery = manifest.skillPolicy?.discovery;
  if (!Array.isArray(required) || !Array.isArray(discovery) ||
      required.some(name => typeof name !== 'string' || !/^[a-z][a-z0-9-]*$/.test(name)) ||
      discovery.some(root => !SUPPORTED_DISCOVERY.includes(root))) {
    return [finding('invalid-skill-policy', 'Core inspection requires safe declared skill names and supported discovery roots.')];
  }
  const root = path.resolve(project);
  const findings = [];
  const shadow = lstatOrNull(path.join(root, 'skills'));
  if (shadow) findings.push(finding('project-local-skills', 'a root skills/ directory shadows the skills lane; move its contents into the lane or remove it', { path: 'skills' }));
  const laneRelative = manifest.lanes?.skills;
  if (typeof laneRelative !== 'string' || !laneRelative.startsWith('workbench/') || laneRelative.includes('..')) {
    findings.push(finding('skill-lane-missing', 'the manifest declares no skills lane under workbench/; run workbench-layout.mjs migrate --project PATH once', { lane: laneRelative ?? null }));
    return findings;
  }
  const lane = path.join(root, laneRelative);
  const laneEntry = lstatOrNull(lane);
  if (!laneEntry) {
    findings.push(finding('skill-lane-missing', `${laneRelative} is absent; run workbench-skills.mjs install from the release checkout`, { lane: laneRelative }));
    return findings;
  }
  if (laneEntry.isSymbolicLink() || !laneEntry.isDirectory()) {
    findings.push(finding('skill-lane-unreadable', `${laneRelative} must be an ordinary directory`, { lane: laneRelative }));
    return findings;
  }
  // Each adapter is judged once: a discovery root that is absent, or that
  // resolves outside the lane, is reported by root rather than per skill.
  const adapters = {};
  for (const discoveryRoot of discovery) {
    const adapter = path.join(root, discoveryRoot);
    const entry = lstatOrNull(adapter);
    if (!entry) {
      findings.push(finding('skill-adapter-missing', `${discoveryRoot} is absent, so that host cannot discover ${laneRelative}; run workbench-skills.mjs install from the release checkout`, { root: discoveryRoot }));
      adapters[discoveryRoot] = null;
      continue;
    }
    const resolved = realpathOrNull(adapter);
    if (!resolved || !fs.statSync(resolved).isDirectory()) {
      // S-005U: with core.symlinks=false Git checks the adapter symlink out as
      // a plain file holding its link target; name that cause and the restore.
      let checkedOutAsText = false;
      try { checkedOutAsText = entry.isFile() && entry.size < 256 && fs.readFileSync(adapter, 'utf8').trim() === path.relative(path.dirname(adapter), lane).split(path.sep).join('/') && indexedAsSymlink(root, discoveryRoot); }
      catch { /* an unreadable adapter keeps the ordinary finding */ }
      const message = checkedOutAsText
        ? `${discoveryRoot} is a plain file holding its link target, so Git checked the symlink out as text because core.symlinks is false on this host; enable symlinks (on Windows, Developer Mode or an elevated shell), run \`git config core.symlinks true\`, then restore it with \`git checkout -- ${discoveryRoot}\``
        : `${discoveryRoot} does not resolve to a directory`;
      findings.push(finding('skill-adapter-broken', message, { root: discoveryRoot }));
      adapters[discoveryRoot] = null;
      continue;
    }
    adapters[discoveryRoot] = resolved;
  }
  const laneReal = fs.realpathSync(lane);
  // A lane holding none of the required skills is one condition (it was
  // never installed), not one finding per skill.
  if (required.every((skill) => !lstatOrNull(path.join(lane, skill, 'SKILL.md')))) {
    findings.push(finding('skill-lane-missing', `${laneRelative} holds none of the ${required.length} required core skills; run workbench-skills.mjs install --project PATH from the release checkout`, { lane: laneRelative }));
    return findings;
  }
  for (const skill of required) {
    const skillDir = path.join(lane, skill);
    const skillEntry = lstatOrNull(skillDir);
    const skillFile = lstatOrNull(path.join(skillDir, 'SKILL.md'));
    if (!skillEntry || !skillFile) {
      findings.push(finding('skill-lane-missing', `${laneRelative}/${skill}/SKILL.md is missing; run workbench-skills.mjs update --project PATH --explicit-update from the release checkout`, { skill, lane: laneRelative }));
      continue;
    }
    if (skillEntry.isSymbolicLink() || !skillEntry.isDirectory() || !skillFile.isFile() || skillFile.isSymbolicLink() || skillFile.nlink !== 1) {
      findings.push(finding('skill-lane-unreadable', `${laneRelative}/${skill} must be an ordinary directory holding an ordinary, unshared SKILL.md`, { skill, lane: laneRelative }));
      continue;
    }
    for (const discoveryRoot of discovery) {
      if (adapters[discoveryRoot] === null) continue;
      const resolved = realpathOrNull(path.join(root, discoveryRoot, skill, 'SKILL.md'));
      if (resolved !== path.join(laneReal, skill, 'SKILL.md')) {
        findings.push(finding('skill-adapter-broken', `${discoveryRoot}/${skill} does not resolve into ${laneRelative}/${skill}`, { skill, root: discoveryRoot }));
      }
    }
    const extra = lstatOrNull(path.join(root, '.codex', 'skills', skill));
    if (extra) findings.push(finding('skill-duplicate-discovery', `.codex/skills/${skill} adds a second Codex discovery entry; preserve and reconcile it explicitly.`, { skill, root: '.codex/skills' }));
  }
  for (const pointer of resolveSkillPointers(manifest, root).dangling) {
    findings.push(finding('skill-pointer-dangling', `AGENTS.md Skill Map entry "${pointer.operation}" names ${pointer.pointer}, but ${laneRelative}/${pointer.skill}/SKILL.md is missing; restore the skill in the lane or re-point the entry`, { skill: pointer.skill, operation: pointer.operation, pointer: pointer.pointer }));
  }
  return findings;
}

// S-004C TK-005E (ADR-000W), moved by S-005K TK-009T (DDR-001C): authority
// flows through the pointer, and the one place a pointer declares which skill
// binds is the `### Skill Map` section of the room's AGENTS.md. Each bullet is
// one operation family: the text before its first colon names the family, and
// every skill it names after the colon, as a code-span name (`save`) or a link
// into the lane, binds for that family; an indented line continues the bullet
// above it. Every other ordinary lane skill, including one the room
// added or one only a Runbook or another file names, is `teaching`; an
// entry naming a skill the lane lacks is `dangling`. Only the map and the lane
// copy are read: a discovery root, a provider home or any other installed copy
// never decides what binds, and the reported hash is the lane copy's. Never
// writes.
const MAP_HEADING = /^#{2,3}\s+Skill Map\s*$/;
const SKILL_NAME = /^[a-z][a-z0-9-]*$/;

function mapEntries(text) {
  const lines = text.split('\n');
  const start = lines.findIndex((line) => MAP_HEADING.test(line));
  if (start === -1) return null;
  const entries = [];
  for (const line of lines.slice(start + 1)) {
    if (/^#{1,6}\s/.test(line)) break;
    const bullet = line.match(/^[-*]\s+(.*)$/);
    if (bullet) {
      const colon = bullet[1].indexOf(':');
      const operation = (colon === -1 ? bullet[1] : bullet[1].slice(0, colon)).replace(/[*_`]/g, '').trim();
      entries.push({ operation, pointer: bullet[1] });
    } else if (/^\s+\S/.test(line) && entries.length) {
      entries[entries.length - 1].pointer += ` ${line.trim()}`;
    } else if (line.trim()) {
      if (entries.length) break;
    }
  }
  return entries;
}

function laneSkillName(target, laneRelative) {
  if (!target || /^[a-z][a-z0-9+.-]*:/i.test(target)) return null;
  let decoded;
  try { decoded = decodeURIComponent(target.split('#')[0]); } catch { return null; }
  if (!decoded) return null;
  const normalized = path.posix.normalize(decoded).replace(/^\.\//, '');
  if (!normalized.startsWith(`${laneRelative}/`)) return null;
  const name = normalized.slice(laneRelative.length + 1).split('/')[0];
  return SKILL_NAME.test(name) ? { name, pointer: normalized } : null;
}

function ordinarySkill(lane, name) {
  const directory = lstatOrNull(path.join(lane, name));
  const file = lstatOrNull(path.join(lane, name, 'SKILL.md'));
  return Boolean(directory?.isDirectory() && !directory.isSymbolicLink() && file?.isFile() && !file.isSymbolicLink());
}

export function resolveSkillPointers(manifest, project) {
  const root = path.resolve(project);
  const laneRelative = manifest?.lanes?.skills;
  const empty = { index: null, lane: laneRelative ?? null, pointed: [], unpointed: [], dangling: [] };
  if (typeof laneRelative !== 'string' || !laneRelative.startsWith('workbench/') || laneRelative.includes('..')) return empty;
  const lane = path.join(root, laneRelative);
  const laneEntry = lstatOrNull(lane);
  const laneSkills = laneEntry?.isDirectory() && !laneEntry.isSymbolicLink()
    ? fs.readdirSync(lane).filter((name) => SKILL_NAME.test(name) && ordinarySkill(lane, name)).sort((a, b) => a.localeCompare(b))
    : [];
  const describeSkill = (skill, authority) => ({ skill, authority, path: `${laneRelative}/${skill}/SKILL.md`, contentHash: skillContentHash(path.join(lane, skill)) });
  const agents = lstatOrNull(path.join(root, 'AGENTS.md'));
  const rows = agents?.isFile() && !agents.isSymbolicLink() ? mapEntries(fs.readFileSync(path.join(root, 'AGENTS.md'), 'utf8')) : null;
  if (rows === null) return { ...empty, unpointed: laneSkills.map((skill) => describeSkill(skill, 'teaching')) };
  const operations = new Map();
  const dangling = [];
  const LINK = /\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g;
  for (const row of rows) {
    const unlinked = row.pointer.replace(LINK, '');
    const named = [...unlinked.slice(unlinked.indexOf(':') + 1).matchAll(/`([^`]+)`/g)]
      .filter((match) => SKILL_NAME.test(match[1])).map((match) => ({ name: match[1], pointer: `${laneRelative}/${match[1]}/SKILL.md` }));
    const linked = [...row.pointer.matchAll(LINK)].map((match) => laneSkillName(match[1], laneRelative)).filter(Boolean);
    for (const target of [...linked, ...named]) {
      if (laneSkills.includes(target.name)) {
        if (!operations.has(target.name)) operations.set(target.name, []);
        if (!operations.get(target.name).includes(row.operation)) operations.get(target.name).push(row.operation);
      } else {
        dangling.push({ skill: target.name, operation: row.operation, pointer: target.pointer });
      }
    }
  }
  return {
    index: 'AGENTS.md#skill-map',
    lane: laneRelative,
    pointed: laneSkills.filter((skill) => operations.has(skill)).map((skill) => ({ ...describeSkill(skill, 'binding'), operations: operations.get(skill) })),
    unpointed: laneSkills.filter((skill) => !operations.has(skill)).map((skill) => describeSkill(skill, 'teaching')),
    dangling
  };
}
