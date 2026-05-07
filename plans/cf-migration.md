# FactuDTE → Cloudflare Pages Migration Plan

> **Status:** Pending — execute after FacturacionSV CF migration cutover (target: May 10, 2026)

## Context

FactuDTE is the marketing website for potential customers at `factudte.com`. Currently deployed manually to S3 (`factudte.com` bucket) behind CloudFront distribution `E22OR5BSF1YG47`.

The `factudte.com` DNS zone is already on Cloudflare (migrated in FacturacionSV Phase 1), so this migration is primarily about swapping the hosting backend and adding CI/CD.

The site is a pure static React 19 + Vite 7 + Tailwind CSS 4 SPA — no environment variables, no API calls, hash-based navigation. Ideal for Cloudflare Pages.

**Credentials:** Reuses the same `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` already configured in the FacturacionSV GitHub repo.

**See also (FacturacionSV):**
- `wiki/cloudflare-migration-plan.md` — full phase-by-phase migration plan
- `wiki/project_cloudflare_migration.md` — project context and status

---

## Phase 1 — Add Wrangler & Update Deploy Script

```bash
cd /path/to/FactuDTE
npm install --save-dev wrangler
```

Update `package.json` scripts:
```json
"deploy": "npm run build && wrangler pages deploy dist --project-name=factudte-marketing",
"deploy:prod": "npm run build && wrangler pages deploy dist --project-name=factudte-marketing --branch=main"
```

---

## Phase 2 — Create Cloudflare Pages Project (one-time)

```bash
wrangler pages project create factudte-marketing --production-branch=main
```

No `wrangler.toml` needed — pure static Pages deployment, project name passed as CLI flag.

---

## Phase 3 — Add GitHub Actions CI/CD

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main, develop]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '24'

      - run: npm ci

      - run: npm run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy dist --project-name=factudte-marketing --branch=${{ github.ref_name }}
```

**GitHub secrets needed** (same values as FacturacionSV):
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Branch behavior:
- `main` → production → serves `factudte.com`
- `develop` → preview at `develop.factudte-marketing.pages.dev`

---

## Phase 4 — Assign Custom Domain (Cloudflare Dashboard, one-time)

In Pages dashboard → `factudte-marketing` → Custom Domains → Add `factudte.com`.  
DNS record auto-created (zone already on Cloudflare). SSL auto-provisions.

---

## Phase 5 — Verify & Decommission AWS

1. Confirm `factudte.com` loads from Cloudflare Pages
2. Delete CloudFront distribution `E22OR5BSF1YG47`
3. Empty and delete S3 bucket `factudte.com`

---

## Verification Checklist

- [ ] `factudte.com` loads over HTTPS from Cloudflare Pages
- [ ] Hash navigation works: `#features`, `#pricing`, `#screenshots`
- [ ] All PNG screenshot assets render
- [ ] `develop` branch preview URL works
- [ ] CloudFront distribution deleted
- [ ] S3 bucket emptied and deleted
