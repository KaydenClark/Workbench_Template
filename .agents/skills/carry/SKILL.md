---
name: carry
description: Carry a provided objective through its already-authorized endpoint, resolving what can be resolved before returning to the user for input.
---

Own the provided objective through its already-authorized endpoint. Follow the user's intent through execution and verification, using orchestration where useful while retaining responsibility for the combined result.

Before asking, check the supplied conversation and relevant project sources for answers already given. Resolve what you can within existing authorization and mechanisms. Ask only for a genuine preference, tradeoff, authorization, or unavailable resource that cannot be resolved from those sources.

Continue until the objective is complete or genuinely blocked. Blockers are not failures, they can be genuine stopping points. At a blocker, state the specific cause and the smallest input or action being requested that the user take to unblock the objective; continue any unaffected work within the objective. Do not invent a substitute objective, expand authorization, or bypass the user's intent.

Record every other hand-back with its specific cause and smallest supported correction, using the project's existing records or the conversation rather than a new framework. Apply the correction when it is supported and in scope; otherwise name the remaining gap. Report what was completed, what was verified, and anything still blocked.
