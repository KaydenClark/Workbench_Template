# Cross-skill invocation

For an instruction to execute another skill, write “call the Skill tool for
`NAME`”, with its trigger and source link when useful. Use the same wording
in handoffs' Suggested skills section. A name in a catalog, historical account
or ownership statement remains a reference; it does not execute the skill.

Use the host's Skill tool when it can select the exact intended source. When
personal and room skills share a name, do not assume precedence: use the
explicit manifest-resolved path. If the host exposes no unambiguous Skill tool,
load that `SKILL.md` from the resolved lane and follow it using available tools;
report any missing capability. Never invent a tool call or claim native
invocation from a file read. Respect the host's invocation restrictions and
the caller's scope. Calling a helper grants no new authority.

This is an authoring convention, not evidence of a measured invocation success
rate or a guarantee that hosts expose identical tools.
