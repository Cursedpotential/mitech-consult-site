# Cloudflare Cutover Receipt — 2026-08-29

> Byline: Codex · GPT-5 · 2026-08-29.

## Outcome

- Deployed the existing `dist/` artifact to the `mitech-consult-site` Cloudflare Worker using the repository-local `wrangler.jsonc`.
- Attached `mitechconsult.com` and `www.mitechconsult.com` as Worker custom domains.
- Cloudflare deployment version: `acc97c11-1521-40a0-8335-1bcc8a055934`.
- Removed only the two Vercel web-routing records: the apex `A` record and the `www` `CNAME`.
- Removed the two stale apex `NS` records for `ns85.worldnic.com` and `ns86.worldnic.com` from the Cloudflare zone.

## Verification

- Both HTTPS hostnames returned `200 OK`, `Server: cloudflare`, and the title `Matthew Salem — Projects, Systems & Field Notes`.
- Google DNS-over-HTTPS returned Cloudflare anycast addresses for both web hostnames.
- Cloudflare's authoritative nameservers each returned only `daphne.ns.cloudflare.com` and `rocco.ns.cloudflare.com` after cleanup.
- Verisign RDAP confirmed that the `.com` registry delegates the domain only to those two Cloudflare nameservers.
- SpaceMail MX, SPF, DKIM, autodiscover, and unrelated service records remained present. Public MX lookup returned `mx1.spacemail.com` and `mx2.spacemail.com`.
- The temporary direct-upload Pages project `mitech-consult-site.pages.dev` was deleted after the
  Worker custom domains were proven. The unrelated `field-review` Pages project was untouched.
- Post-cleanup checks returned `200 OK`, `Server: cloudflare`, and a Cloudflare Ray ID on both apex
  and `www`; neither hostname returned an `x-vercel-id` header.

## Remaining provider cleanup

- The custom domain no longer routes through Vercel or Deno.
- The repository still has Vercel and Deno Deploy GitHub App connections capable of building their
  provider-specific URLs after pushes. Neither matching provider account was authenticated in this
  session, so those projects were not deleted or disconnected.
- The deployed Worker version was produced while a separate content-edit lane had uncommitted source
  changes. Hosting cutover is proven; exact live-content-to-Git reconciliation remains owned by that
  content lane and must not be inferred from this receipt.

## Propagation note

Recursive resolvers that cached the former four-name NS response may continue showing the removed WorldNIC nameservers until the previous 21,600-second TTL expires. The authoritative zone and registry delegation are already clean.
