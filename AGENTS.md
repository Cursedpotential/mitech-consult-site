# AGENTS.md — MITECH Consulting Site

> _Byline: Codex · GPT-5 · 2026-08-27; Cloudflare deployment update 2026-08-29._

This repository is the independent MITECH consulting website: an Astro 5 site styled with
Tailwind CSS 4 and managed with npm. Read `AGENT_MEMORY.md` after this file.

## Git boundary

Before staging or committing, run `git rev-parse --show-toplevel` from the target file's
directory and require the result to be exactly
`E:/AI_Workspace/Projects/mitech-consult-site`. Stage only an explicit file allowlist owned by
this repository. Never use `git add .`, `git add -A`, or stage a parent or sibling repository.

## Commands

Run commands from this repository root:

| Task | Command |
|---|---|
| Development server | `npm run dev` |
| Production build | `npm run build` |
| Deploy the production Cloudflare Worker | `npm run deploy:cloudflare` |
| Preview build | `npm run preview` |
| Astro CLI | `npm run astro -- <args>` |

## Source map

- `src/pages/` — file-based routes.
- `src/layouts/` — shared Astro layouts.
- `src/styles/` — global styles and Tailwind theme definitions.
- `src/assets/` — source-managed images and other bundled assets.
- `public/` — static files copied as-is.
- `astro.config.mjs`, `tsconfig.json`, and `package.json` — build, TypeScript, and dependency
  contracts.
- `wrangler.jsonc` — the production Cloudflare Worker/static-assets deployment contract. Run
  Wrangler from this repository root so it cannot select another project's configuration.

## Deployment boundary

The production site is deployed as the Cloudflare Worker named `mitech-consult-site`; the apex and
`www` hostnames route through Cloudflare. Vercel is no longer the production host. A successful
local Astro build or a `pages.dev` preview is not production proof: after deployment, verify both
public hostnames and persist the deployed version/receipt.

The root `README.md` is still generic Astro starter text. It is stale and non-authoritative;
verify behavior against the current manifests, configuration, and source.

## Safety and progressive disclosure

Never commit credentials, tokens, private keys, customer data, or populated environment files.
If a file must be removed, move it to this repository's `to_be_deleted/` directory; only the
owner permanently deletes from that directory. Preserve unrelated and concurrent work. A nested
`AGENTS.md` overrides this file only for its own subtree.
