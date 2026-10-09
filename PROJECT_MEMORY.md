# Telehealth FX — Project Memory & Master Blueprint

> **Last Updated:** October 2026  
> **Production Domain:** [https://telehealthfx.com](https://telehealthfx.com) · [https://www.telehealthfx.com](https://www.telehealthfx.com)  
> **Platform & Hosting:** Cloudflare Pages (`telehealthfx` project)  
> **Codebase:** Next.js 14+ (App Router, Static HTML Export `output: 'export'`)  
> **Primary Git Repository:** `git@github.com:jcb2001/telehealthfx.git` (Remote `telehealthfx`, branch `telehealthfx-main`, tracking `main`)  
> **Tracking & Domain Routing:** Switchy.io (`go.telehealthfx.com`)  
> **Affiliate Network:** Katalys / RevOffers (Offer ID `1632`, Affiliate ID `12322`)  

---

## 1. Executive Summary & Purpose

**Telehealth FX** is a high-converting, programmatic digital health and longevity publication and lead generation engine. The site ranks for high-intent commercial keywords across medical weight loss (GLP-1/GIP), peptide therapies, hormone optimization (TRT & HRT), clinical dermatology, and anti-aging compounds, converting visitors through verified telehealth fulfillment partners.

The flagship conversion partner is **CoreAge Rx** (`app.coreagerx.com`), an accredited US telehealth provider offering flat-rate compounded GLP-1 medications, hormone therapies, anti-aging peptides, and custom clinical skincare compounds with board-certified clinician review and licensed 503A US pharmacy fulfillment.

---

## 2. Infrastructure, Build & Deployment Protocols

### 2.1 Technical Stack
- **Framework:** Next.js 14+ (App Router)
- **Export Mode:** Pure Static HTML export (`output: 'export'` in `next.config.mjs`)
- **Output Directory:** `Telehealth FX Site/out/`
- **Hosting:** Cloudflare Pages (Project Name: `telehealthfx`)
- **404 & Redirects:** Managed via custom `src/app/not-found.js` exporting to `404.html` with client-side routing fallback (avoiding infinite server redirect loops).

### 2.2 Production Build & Deployment Pipeline
Always execute builds from within `Telehealth FX Site/`:

```bash
cd "Telehealth FX Site"

# 1. Clean & Webpack Production Build
npm run build --webpack

# 2. Deploy Direct to Cloudflare Pages Production (CRITICAL: MUST INCLUDE --branch=main)
npx wrangler pages deploy out --project-name=telehealthfx --branch=main

# 3. Commit & Push to GitHub Remote
git add .
git commit -m "feat/fix: <description of change>"
git push telehealthfx telehealthfx-main:main && git push telehealthfx telehealthfx-main
```

> [!IMPORTANT]
> **Cloudflare Pages Production Flag**: Always pass `--branch=main` to `wrangler pages deploy`. Deploying without this flag defaults to a `Preview` deployment on `telehealthfx-main.telehealthfx.pages.dev`, which will **not** update the live production domains (`telehealthfx.com` and `www.telehealthfx.com`).

---

## 3. Partner, API & Affiliate Routing Architecture

### 3.1 Katalys Network Details
- **Affiliate Network:** Katalys (formerly RevOffers / `track.revoffers.com`)
- **Affiliate ID:** `12322`
- **Primary Offer:** `1632` (CoreAge Rx)
- **Intake Flow Base URL:** `https://track.revoffers.com/aff_c?offer_id=1632&aff_id=12322`
- **API Key:** `kapi-3da5c02c19c94add84874f7486a48b6f@5eb226f8-236a-4e22-83f4-3f2c545b13c4`
- **Parameter Handling:** Preserves `transaction_id`, sub-affiliates (`aff_sub`, `aff_sub2`), and standard UTM parameters (`utm_source`, `utm_medium`, `utm_campaign`).

### 3.2 Switchy.io Tracking Links (`go.telehealthfx.com`)
- **Custom Tracking Domain:** `go.telehealthfx.com`
- **API Key:** `c641dca8-e3c4-40db-baa5-9d72ac78a2b3`
- All affiliate links across Telehealth FX route through `go.telehealthfx.com/<slug>` to provide cloaking, click tracking, dynamic retargeting pixels, and UTM pass-through.

### 3.3 CoreAge Rx Product & Switchy Mapping Table
All CoreAge products are mapped to verified Katalys Offer 1632 destination `url_id` parameters:

| Product Name | Category | Switchy Link | Katalys Offer / URL ID | CoreAge Destination Landing Page | Live Audited Price |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Compounded Semaglutide** | GLP-1 Weight Loss | `go.telehealthfx.com/coreage-glp1` | Offer 1632 (Base) | `app.coreagerx.com/go/k` | **$79/mo flat rate** (all doses) |
| **Compounded Tirzepatide** | Dual GIP/GLP-1 | `go.telehealthfx.com/coreage-glp1` | Offer 1632 (Base) | `app.coreagerx.com/go/k` | **$129/mo flat rate** (all doses) |
| **NAD+ Therapy** | Longevity & Peptides | `go.telehealthfx.com/nad` | Offer 1632 · `url_id=12688` | `app.coreagerx.com/go/k/nad` | **From $99/mo** (Flat $99/mo) |
| **Sermorelin Peptide** | Longevity & Peptides | `go.telehealthfx.com/sermorelin` | Offer 1632 · `url_id=12689` | `app.coreagerx.com/go/k/sermorelin` | **Flat $99/mo** |
| **Testosterone (TRT)** | Men's Hormone | `go.telehealthfx.com/coreage-trt` | Offer 1632 · `url_id=12692` | `app.coreagerx.com/go/k/trt` | **From $93/mo** ($93/mo annual / $99 standard) |
| **4Play ED Compound** | Sexual Wellness | `go.telehealthfx.com/coreage-ed` | Offer 1632 · `url_id=12693` | `app.coreagerx.com/go/k/4play` | **From $18/dose** |
| **Bounce Back Copper Peptide** | Longevity / Derma | `go.telehealthfx.com/copper-peptide` | Offer 1632 · `url_id=12694` | `app.coreagerx.com/go/k/bounce-back` | **From $64.99/mo** ($80 one-time) |
| **Pore Favor Minimizer** | Clinical Derma | `go.telehealthfx.com/pore-favor` | Offer 1632 · `url_id=12695` | `app.coreagerx.com/go/k/pore-favor` | **From $42/mo** ($70 one-time) |
| **Smooth Move Retinoid** | Clinical Derma | `go.telehealthfx.com/retinoid` | Offer 1632 · `url_id=12697` | `app.coreagerx.com/go/k/smooth-move` | **From $42/mo** ($70 one-time) |
| **Spot On Dark Spot** | Clinical Derma | `go.telehealthfx.com/spot-on` | Offer 1632 · `url_id=12698` | `app.coreagerx.com/go/k/spot-on` | **From $54.99/mo** ($70 one-time) |
| **Time Out Peptide Serum** | Clinical Derma | `go.telehealthfx.com/time-out` | Offer 1632 · `url_id=12699` | `app.coreagerx.com/go/k/time-out` | **From $48/mo** ($75 one-time) |
| **Bioidentical Estrogen HRT** | Women's Hormone | `go.telehealthfx.com/estrogen` | Offer 1632 · `url_id=12690` | `app.coreagerx.com/go/k/estrogen` | **From $42/mo** |
| **Progesterone Oral HRT** | Women's Hormone | `go.telehealthfx.com/progesterone`| Offer 1632 · `url_id=12696` | `app.coreagerx.com/go/k/progesterone`| **From $64.99/mo** |
| **Thyroid Optimization** | Hormone / Thyroid | `go.telehealthfx.com/thyroid` | Offer 1632 · `url_id=12691` | `app.coreagerx.com/go/k/thyroid` | **From $42/mo** |

### 3.4 Non-CoreAge Partner Tracking Invariants
> [!WARNING]
> **Preserve Non-CoreAge Tracking Links**: Under **no circumstances** should existing non-CoreAge partner links be altered, overwritten, or pointed to CoreAge. CoreAge does not offer these products or deals:
> - **SkinnyRx / Oral Tablets**: `https://go.telehealthfx.com/skinnyrx`, `https://go.telehealthfx.com/tablets`
> - **Maximus Tribe / Enclomiphene Oral TRT**: `https://go.telehealthfx.com/enclomiphene`
> - **Hair Loss (Finasteride/Minoxidil)**: `https://go.telehealthfx.com/hair`
> - **Metformin for Longevity**: `https://go.telehealthfx.com/metformin`
> - **Berberine Transdermal Patches**: `https://go.telehealthfx.com/berberine`
> - **Branded GLP-1 Pens (Wegovy, Ozempic, Mounjaro, Zepbound)**: Maintain designated pharmacy & concierge consultation links.

---

## 4. Complete 25-Product Directory & Standalone Pages

Every product featured on Telehealth FX has a full standalone route under `/medications/<slug>/` with dedicated clinician review schema, pricing, FAQs, and conversion buttons:

| # | Product Name | Slug Route | Component File | Starting Price | Provider / Fulfillment |
|---|:---|:---|:---|:---|:---|
| 1 | Compounded Semaglutide | `/medications/semaglutide/` | `medicine-semaglutide.jsx` | $79/mo flat | CoreAge Rx (503A) |
| 2 | Compounded Tirzepatide | `/medications/tirzepatide/` | `medicine-tirzepatide.jsx` | $129/mo flat | CoreAge Rx (503A) |
| 3 | NAD+ Cellular Therapy | `/medications/nad/` | `medicine-nad.jsx` | From $99/mo | CoreAge Rx (503A) |
| 4 | Sermorelin Peptide | `/medications/sermorelin/` | `medicine-sermorelin.jsx` | Flat $99/mo | CoreAge Rx (503A) |
| 5 | Testosterone (TRT) | `/medications/testosterone/` | `medicine-testosterone.jsx` | From $93/mo | CoreAge Rx (503A) |
| 6 | 4Play Custom Compound ED | `/medications/ed/` | `medicine-ed.jsx` | From $18/dose | CoreAge Rx (503A) |
| 7 | Bounce Back Copper Peptide | `/medications/copper-peptide/` | `medicine-copper-peptide.jsx` | From $64.99/mo | CoreAge Rx (503A) |
| 8 | Pore Favor Minimizer | `/medications/pore-favor/` | `medicine-pore-favor.jsx` | From $42/mo | CoreAge Rx (503A) |
| 9 | Smooth Move Retinoid | `/medications/smooth-move/` | `medicine-smooth-move.jsx` | From $42/mo | CoreAge Rx (503A) |
| 10 | Spot On Dark Spot Eraser | `/medications/spot-on/` | `medicine-spot-on.jsx` | From $54.99/mo | CoreAge Rx (503A) |
| 11 | Time Out Peptide Serum | `/medications/time-out/` | `medicine-time-out.jsx` | From $48/mo | CoreAge Rx (503A) |
| 12 | Bioidentical Estrogen HRT | `/medications/estrogen/` | `medicine-estrogen.jsx` | From $42/mo | CoreAge Rx (503A) |
| 13 | Progesterone Oral HRT | `/medications/progesterone/` | `medicine-progesterone.jsx` | From $64.99/mo | CoreAge Rx (503A) |
| 14 | Thyroid Optimization (T3/T4) | `/medications/thyroid/` | `medicine-thyroid.jsx` | From $42/mo | CoreAge Rx (503A) |
| 15 | Semaglutide Dissolving Tablets | `/medications/semaglutide-tablets/` | `medicine-semaglutide-tablets.jsx` | $149/mo (Promo) | Partner Telehealth |
| 16 | Sublingual Semaglutide Drops | `/medications/sublingual-semaglutide/` | `medicine-sublingual-semaglutide.jsx` | $149/mo | Partner Telehealth |
| 17 | Tirzepatide Dissolving Tablets | `/medications/tirzepatide-tablets/` | `medicine-tirzepatide-tablets.jsx` | $199/mo (Promo) | Partner Telehealth |
| 18 | Wegovy® (Semaglutide 2.4mg) | `/medications/wegovy/` | `medicine-wegovy.jsx` | $899/mo ($100 off 1st mo) | Licensed US Pharmacy |
| 19 | Ozempic® (Semaglutide) | `/medications/ozempic/` | `medicine-ozempic.jsx` | $1,199/mo ($100 off 1st mo) | Licensed US Pharmacy |
| 20 | Mounjaro® (Tirzepatide) | `/medications/mounjaro/` | `medicine-mounjaro.jsx` | $1,399/mo ($100 off 1st mo) | Licensed US Pharmacy |
| 21 | Zepbound® (Tirzepatide) | `/medications/zepbound/` | `medicine-zepbound.jsx` | $1,199/mo ($100 off 1st mo) | Licensed US Pharmacy |
| 22 | Enclomiphene (Oral TRT) | `/medications/enclomiphene/` | `medicine-enclomiphene.jsx` | $89/mo | Maximus Tribe |
| 23 | Hair Loss (Finasteride/Minoxidil)| `/medications/hair-loss/` | `medicine-hair.jsx` | $29/mo | Partner Telehealth |
| 24 | Metformin for Longevity | `/medications/metformin/` | `medicine-metformin.jsx` | $39/mo | Partner Telehealth |
| 25 | Berberine Transdermal Patches | `/medications/berberine/` | `medicine-berberine.jsx` | $30/mo | Clinical Grade Partner |

---

## 5. UI Layout, CRO & Navigation Invariants

1. **Top Announcement Bar (`announcement-bar.jsx`)**:
   - Displays animated shimmer banner: *"Doctor-Prescribed GLP-1 Care: Semaglutide $79 · Tirzepatide $129 — Same Price on All Doses!"*
   - Links directly to CoreAge intake start: `https://go.telehealthfx.com/coreage-glp1`.
   - Hidden automatically on TRT-specific routes via `TRT_ROUTES` matching.
2. **Homepage Product Showcase (`sections-1.jsx`)**:
   - Displays all 25 products.
   - CoreAge products are grouped at the top directly under Semaglutide & Tirzepatide.
   - Every card contains a dual-CTA: Primary *"Get Started"* / *"Claim Offer"* button pointing to the outbound tracking URL, and a secondary *"Learn More"* link pointing to `/medications/<slug>/`.
3. **Master Medications Directory (`/medications/`)**:
   - Filterable directory component (`medications-directory.jsx`) organized by therapeutic category:
     - Weight Loss & GLP-1s
     - Longevity & Peptides
     - Hormone Optimization
     - Clinical Dermatology
     - Men's & Sexual Health

---

## 6. SEO, Schema.org & GEO Architecture

### 6.1 Structured Data Standards
All medication and blog pages embed comprehensive JSON-LD `@graph` structures:
- `MedicalWebPage`: Validates `medicalAudience`, `about` substances, `drugClass`, `mechanismOfAction`, and `publisher`.
- `Product`: Includes `name`, `sku`, `brand`, `aggregateRating` (4.7–4.9 range with authentic date-published reviews), and `offers`.
- `Offer`: Exact destination price, `priceCurrency: "USD"`, `availability: "InStock"`, `url` pointing to tracking CTA.
- `FAQPage`: Structured Q&A targeting Google Featured Snippets and LLM passage citations.
- `BreadcrumbList`: Strict schema breadcrumb paths.

### 6.2 URL & Canonical Conventions
- All routes must enforce trailing slashes (`https://telehealthfx.com/medications/<slug>/`).
- Meta titles calibrated to **50–60 characters**.
- Meta descriptions calibrated to **145–160 characters**.

---

## 7. Key Contacts, Credentials & Services Reference

- **Cloudflare Pages Account:** Project `telehealthfx`
- **Domain Registrar / DNS:** Cloudflare Managed DNS
- **Katalys Affiliate Portal:** Offer 1632, Affiliate 12322
- **Switchy Dashboard:** Domain `go.telehealthfx.com`
- **Google Search Console / Indexing:** Service Account API configured with instant IndexNow and Google Search Indexing engine scripts in `scripts/`.
