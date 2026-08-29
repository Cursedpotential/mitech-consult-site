# MITECH Repository Boundary Reconciliation

> _Byline: Codex · GPT-5 · 2026-08-28._

STATUS: CHILD RECONCILED; PARENT POINTER CONVERSION RECORDED SEPARATELY

## Purpose

MITECH is an independent product repository. The parent `E:/AI_Workspace` repository previously
tracked a duplicate ordinary tree, creating two competing owners for the same product paths. This
reconciliation makes the child repository the sole product authoring surface.

## Child reconciliation

- Preserved the coherent content-driven Astro rewrite already present in the live child worktree.
- Removed the malicious install-time hook in dedicated child commit `e2c6422` before handling the
  wider redesign.
- Quarantined superseded legacy pages locally instead of permanently deleting them.
- Quarantined the unused parent-only `mitech-consult-theme.json` rather than publishing it as product
  configuration.
- Preserved original project photographs locally and committed metadata-sanitized copies without
  embedded EXIF GPS or capture-time fields.
- Excluded `.claude/`, dependency directories, generated build output, and `to_be_deleted/`.
- Set the Astro canonical site to `https://mitechconsult.com`.

## Verification contract

Before the parent pointer conversion, the child must have:

1. an explicit source-only staged allowlist;
2. no committed local-agent or quarantine material;
3. a successful production build;
4. no missing generated internal links;
5. no readable EXIF properties in the committed public photographs;
6. a clean worktree after commit; and
7. exact local, tracking, and remote default-branch agreement.

The parent-side receipt records the final child commit, raw-gitlink proof, parent conversion commit,
and residual history risks.

## Verified results

- `npm ls --depth=0`: passed using the existing dependency installation.
- `npm run build`: passed; Astro generated 13 pages and 58 optimized images.
- Canonical and Open Graph URLs: all normal pages use `https://mitechconsult.com`; no localhost
  references remain.
- Generated internal links: zero missing targets.
- Active source photographs: 20 of 20 readable, with no EXIF headers, GPS fields, or GPS markers.
- Generated image assets: no EXIF or GPS markers.
- Active malware search: no `preinstall.js`, package hook, loader address, or decoded-loader signature.
- Quarantine and local agent state are ignored and excluded from the product commit.
- `npm audit --omit=dev`: 14 findings (12 high, 1 moderate, 1 low, 0 critical) across the current
  lockfile; recorded for a separate dependency-upgrade lane.

## Residual risks

- Historical commits still contain the malicious installer and original GPS-bearing photographs.
  Removing those objects requires a separately approved history rewrite and coordinated force-push.
- Dependency audit findings require a separate reviewed upgrade; they are not silently mixed into
  repository-boundary reconciliation.
