---
scope: E:/AI_Workspace/Projects/mitech-consult-site
status: current
verified_at: 2026-08-28
superseded_by: null
authority:
  - AGENTS.md
  - package.json
  - astro.config.mjs
  - tsconfig.json
watches:
  - package.json
  - "src/**"
  - README.md
  - docs/security/**
contains_secrets: false
---

# MITECH Consulting Site Memory Router

> _Byline: Codex · GPT-5 · 2026-08-27; security and boundary refresh 2026-08-28._

- This is an independent Git repository; its required commit root is the directory named in
  `scope` above.
- The current stack is Astro 5, Tailwind CSS 4, and npm with `package-lock.json`.
- Routes live in `src/pages/`; shared layout, styles, and bundled assets live in their matching
  `src/` directories.
- `README.md` remains generic starter content and is not project authority.
- Treat this file as a context router, not as authority over current source or manifests. Add
  narrower `.agent-memory/<target>.md` files only when a specific target needs durable context.
- Keep all memory files free of secrets and personal or customer data.
- Never restore the removed `preinstall.js` hook from history. See
  `docs/security/2026-08-28-preinstall-malware.md` before dependency or history work.
- Public project photographs must be metadata-sanitized copies. Original files remain local under
  `to_be_deleted/`; do not publish or commit quarantined originals.

<!-- freshness
watches_hash: e817c27
last_verified: 2026-08-27
watches:
  - package.json
  - astro.config.mjs
  - tsconfig.json
  - src/**
  - README.md
-->
