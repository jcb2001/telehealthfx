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

### 3.1 Katalys Network Details & Active Offer Portfolio
- **Affiliate Network:** Katalys (formerly RevOffers / `track.revoffers.com`)
- **Affiliate ID:** `12322`
- **Active Programs & Performance Hierarchy (Audited October 2026):**
  1. **Embody (Offer ID: `1548`)** — Flagship Injectables & Primary Quiz Destination
     - *Performance:* 8.70% CR, $13.05 EPC, $150 CPA
     - *Pricing:* $69/mo flat Semaglutide promo, $119/mo flat Tirzepatide promo
     - *Switchy Slugs:* `go.telehealthfx.com/embody`, `go.telehealthfx.com/coreage-glp1`, `go.telehealthfx.com/discount`, `go.telehealthfx.com/yt`, `go.telehealthfx.com/weight-loss`
     - *Destination:* `https://track.revoffers.com/aff_c?offer_id=1548&aff_id=12322`
     - *Use Case:* Flagship GLP-1 offer and primary destination for BMI intake quizzes on Losing Weight RX and Get Skinny Online (via `aff_sub=lwr_qualify_*` and `gso_qualify_*`)
  2. **Peter MD (Offer ID: `1344`)** — Flagship TRT & Men's Hormone Optimization
     - *Performance:* 1.44% CR, $2.77 EPC, $192 CPA
     - *Pricing:* From $89/mo on 6-month protocol ($534 upfront) or $99/mo standard billing · $129 Diagnostic Labs
     - *Switchy Slugs:* `go.telehealthfx.com/petermd`, `go.telehealthfx.com/coreage-trt`, `go.telehealthfx.com/trt`, `go.telehealthfx.com/enclomiphene`
     - *Destination:* `https://track.revoffers.com/aff_c?offer_id=1344&aff_id=12322`
     - *Use Case:* Primary conversion partner for all TRT hubs, Peter MD comparison guides, enclomiphene pages, and men's health traffic
  3. **Gala Health (Offer ID: `1576`)** — Secondary Intake Quiz Bridge
     - *Performance:* 2.08% CR, $3.74 true EPC, $180 CPA
     - *Offer Details:* 100% money-back guarantee, dedicated multi-step quiz flow
     - *Switchy Slug:* `go.telehealthfx.com/gala`
     - *Destination:* `https://track.revoffers.com/aff_c?offer_id=1576&aff_id=12322`
  4. **Willow (Offer ID: `1325`)** — Needle-Free Oral Tablets & Sublingual Drops
     - *Performance:* 0.70% CR, $1.47 EPC, $315 CPA
     - *Pricing:* $149/mo all-inclusive
     - *Switchy Slugs:* `go.telehealthfx.com/willow`, `go.telehealthfx.com/semaglutide-tablets`, `go.telehealthfx.com/tirzepatide-tablets`, `go.telehealthfx.com/sublingual-semaglutide`, `go.telehealthfx.com/skinnyrx`
     - *Destination:* `https://track.revoffers.com/aff_c?offer_id=1325&aff_id=12322`
  5. **CoreAge Rx (Offer ID: `1632`)** — Longevity, Peptides & Skincare
     - *Products:* NAD+ ($99/mo), Sermorelin ($99/mo), 4Play ED, Topical Peptides

### 3.2 Switchy.io Tracking Links (`go.telehealthfx.com`)
- **Custom Tracking Domain:** `go.telehealthfx.com`
- **API Key:** `c641dca8-e3c4-40db-baa5-9d72ac78a2b3`
- All affiliate links across Telehealth FX, Losing Weight RX, and Get Skinny Online route through `go.telehealthfx.com/<slug>` to provide cloaking, click tracking, dynamic retargeting pixels, and UTM pass-through.
- Legacy `coreage-glp1` and `weight-loss` slugs are mapped in Switchy to Embody (Offer 1548) for 100% backlink safety.
- Legacy `coreage-trt`, `trt`, and `enclomiphene` slugs are mapped in Switchy to Peter MD (Offer 1344).
- Automated health check script `scripts/check_offer_telemetry.js` validates all 12 routes in real-time.

### 3.3 Active Product & Switchy Mapping Table
| Product Name | Category | Primary Switchy Link | Katalys Offer | Destination Landing Page | Live Promotional Price |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Compounded Semaglutide** | GLP-1 Weight Loss | `go.telehealthfx.com/embody` | Offer 1548 (Embody) | `embodywellness.com` | **$69/mo promo rate** |
| **Compounded Tirzepatide** | Dual GIP/GLP-1 | `go.telehealthfx.com/embody` | Offer 1548 (Embody) | `embodywellness.com` | **$119/mo promo rate** |
| **Testosterone Therapy (TRT)**| Men's Hormone | `go.telehealthfx.com/petermd` | Offer 1344 (Peter MD) | `petermd.com` | **$89/mo (6-mo protocol) / $99/mo standard** |
| **Enclomiphene / Oral TRT** | Men's Hormone | `go.telehealthfx.com/enclomiphene` | Offer 1344 (Peter MD) | `petermd.com` | **From $89/mo** |
| **Intake / Qualification Quiz** | Intake Assessment | `go.telehealthfx.com/embody` | Offer 1548 (Embody) | `embodywellness.com` | **From $69/mo** |
| **Oral Semaglutide Tablets** | Needle-Free GLP-1 | `go.telehealthfx.com/semaglutide-tablets` | Offer 1325 (Willow) | `willow.com` | **$149/mo flat rate** |
| **Oral Tirzepatide Tablets** | Needle-Free Dual | `go.telehealthfx.com/tirzepatide-tablets` | Offer 1325 (Willow) | `willow.com` | **$199/mo flat rate** |
| **Sublingual Semaglutide Drops**| Liquid Sublingual | `go.telehealthfx.com/sublingual-semaglutide` | Offer 1325 (Willow) | `willow.com` | **$149/mo flat rate** |
| **NAD+ Therapy** | Longevity & Peptides | `go.telehealthfx.com/nad` | Offer 1632 · `url_id=12688` | `app.coreagerx.com/go/k/nad` | **From $99/mo** |
| **Sermorelin Peptide** | Longevity & Peptides | `go.telehealthfx.com/sermorelin` | Offer 1632 · `url_id=12689` | `app.coreagerx.com/go/k/sermorelin` | **Flat $99/mo** |
| **4Play ED Compound** | Sexual Wellness | `go.telehealthfx.com/coreage-ed` | Offer 1632 · `url_id=12693` | `app.coreagerx.com/go/k/4play` | **From $18/dose** |
| **The Spot Cream (Melasma/Dark Spots)**| Clinical Derma | `go.telehealthfx.com/spot-cream` | Musely (Impact Radius) | `musely.com` | **Hydroquinone 12% + Kojic** |
| **The Anti-Aging Cream (Tretinoin)** | Clinical Derma | `go.telehealthfx.com/anti-aging-cream`| Musely (Impact Radius) | `musely.com` | **Prescription Retinoid + Niacinamide** |
| **The Aging Repair Cream (Estriol)**| Clinical Derma | `go.telehealthfx.com/aging-repair-cream`| Musely (Impact Radius) | `musely.com` | **Estrogen Menopause Cream** |
| **Pore & Acne Care (Red Rescue)** | Clinical Derma | `go.telehealthfx.com/pore-favor` | Musely (Impact Radius) | `musely.com` | **Metronidazole / Ivermectin** |
| **Cellular Youth Formula** | Clinical Derma | `go.telehealthfx.com/copper-peptide` | Musely (Impact Radius) | `musely.com` | **Clinical Anti-Aging** |
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
| 1 | Compounded Semaglutide | `/medications/semaglutide/` | `medicine-semaglutide.jsx` | $69/mo promo | Embody GLP-1 (Offer 1548) |
| 2 | Compounded Tirzepatide | `/medications/tirzepatide/` | `medicine-tirzepatide.jsx` | $119/mo promo | Embody GLP-1 (Offer 1548) |
| 3 | NAD+ Cellular Therapy | `/medications/nad/` | `medicine-nad.jsx` | From $99/mo | CoreAge Rx (503A) |
| 4 | Sermorelin Peptide | `/medications/sermorelin/` | `medicine-sermorelin.jsx` | Flat $99/mo | CoreAge Rx (503A) |
| 5 | Testosterone (TRT) | `/medications/testosterone/` | `medicine-testosterone.jsx` | From $89/mo | Peter MD (Offer 1344) |
| 6 | 4Play Custom Compound ED | `/medications/ed/` | `medicine-ed.jsx` | From $18/dose | CoreAge Rx (503A) |
| 7 | Cellular Youth Peptide | `/medications/copper-peptide/` | `medicine-copper-peptide.jsx` | Clinical Anti-Aging | Musely (Impact Radius) |
| 8 | Pore & Redness Care | `/medications/pore-favor/` | `medicine-pore-favor.jsx` | Metronidazole/Ivermectin | Musely (Impact Radius) |
| 9 | The Anti-Aging Cream (Tretinoin)| `/medications/smooth-move/` | `medicine-smooth-move.jsx` | Custom Retinoid Rx | Musely (Impact Radius) |
| 10 | The Spot Cream (Hydroquinone) | `/medications/spot-on/` | `medicine-spot-on.jsx` | 12% HQ + Kojic Acid | Musely (Impact Radius) |
| 11 | The Aging Repair Cream (Estriol)| `/medications/time-out/` | `medicine-time-out.jsx` | Clinical Estriol Rx | Musely (Impact Radius) |
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
- **FeedHive Workspace:** Telehealth FX (`Telehealth FX`)
  - **API Key:** `fh_dcbd10b1f8dbcdc40f71c7e9a627012e4815becb55dcf5ca`
  - **Connected Channels & Destination Mapping:**
    - **Set 1 (Telehealth FX)**:
      - YouTube: Telehealth FX (`08e483da-1454-4b3d-9abf-e99cc1a52996`)
      - Facebook: Telehealth FX (`d1b37bb5-5580-4a5f-9d7b-044b5ecf756e`)
      - Destination: `https://telehealthfx.com` (Intake: `https://go.telehealthfx.com/coreage-glp1`)
    - **Set 2 (Losing Weight RX)**:
      - YouTube: Quiz Select profile (`71510b60-03e9-4a38-bb8e-0fd0007440c0`)
      - Facebook: Quiz Select profile (`ad553e6d-f293-4be4-9fe6-771b3b0ecc03`)
      - Destination: `https://losingweightrx.com` (Intake: `https://losingweightrx.com/do-i-qualify.html`)
    - **Set 3 (Get Skinny Online)**:
      - YouTube: Healthy Lifestyle Podcast profile (`d6dfbb19-ddca-4b70-b204-58de7095f38c`)
      - Facebook: Luxury Old Money profile (`874a304e-21a0-4c42-af12-03767ccb26f5`)
      - Destination: `https://getskinnyonline.com` (Intake: `https://getskinnyonline.com/do-i-qualify.html`)

---

## 8. FeedHive Multi-Workspace Architecture & Isolation Guardrails

> [!CAUTION]
> **CRITICAL MULTI-WORKSPACE ISOLATION GUARDRAIL**:
> The operator manages multiple distinct businesses and FeedHive accounts in Antigravity (e.g., **Telehealth FX**, **Schell Insurance**). Cross-posting content or uploading assets to the wrong workspace causes severe brand contamination and privacy breaches.

### 8.1 Multi-Workspace Identity Matrix
| Business / Brand | Antigravity Directory | FeedHive Workspace | Active API Key |
| :--- | :--- | :--- | :--- |
| **Telehealth FX** | `Side Hustles/Telehealth FX` | `Telehealth FX` | `fh_dcbd10b1f8dbcdc40f71c7e9a627012e4815becb55dcf5ca` |
| **Schell Insurance** | `Clients/Schell Insurance` | `Schell Insurance` | `fh_4f54b0a240164db80ae57231d45add7b90fbeaaa7b1597d0` |

### 8.2 Mandatory Pre-Flight Verification Protocol
Before any agent or script performs a mutating action in FeedHive (creating posts, updating drafts, deleting items, uploading images/videos, scheduling slots):
1. **Workspace Verification**: Call `feedhive_status` or execute `node scripts/feedhive_cli.js status`.
2. **Assert Workspace Identity**: Confirm that the returned username is strictly `"Telehealth FX"`.
3. **Hard Stop on Mismatch**: If the returned identity does not match `"Telehealth FX"`, or if authentication fails, **HALT ALL OPERATIONS IMMEDIATELY**. Do not attempt fallback posting or generic uploading. Output an alert indicating the workspace mismatch.
4. **Channel Targeting Whitelist**: Verify that target social platforms use verified channel IDs:
   - **Set 1 (Telehealth FX)**: YouTube `08e483da-1454-4b3d-9abf-e99cc1a52996`, Facebook `d1b37bb5-5580-4a5f-9d7b-044b5ecf756e`
   - **Set 2 (Losing Weight RX)**: YouTube `71510b60-03e9-4a38-bb8e-0fd0007440c0`, Facebook `ad553e6d-f293-4be4-9fe6-771b3b0ecc03`
   - **Set 3 (Get Skinny Online)**: YouTube `d6dfbb19-ddca-4b70-b204-58de7095f38c`, Facebook `874a304e-21a0-4c42-af12-03767ccb26f5`

### 8.3 Built-In Programmatic Enforcement
The project CLI at `scripts/feedhive_cli.js` includes automated pre-flight assertion logic. Any mutating command automatically verifies the workspace identity against `"Telehealth FX"` before dispatching the request.

---

## 9. PressRanger Syndication & Media Guardrails (CRITICAL)

> [!CAUTION]
> **STRICT PHOTO CAPTION & METADATA GUARDRAILS (ZERO PROMPT COPY)**:
> Under NO circumstances should any photo caption or picture title contain image-generation prompt descriptions, art direction notes, or physical/aesthetic object descriptions. Captions must NEVER describe the scene geometry, lighting, materials, or visual composition.

### 9.1 Mandatory Rules for All Photo Captions
1. **Brand & Article Grounding**: Every caption must explicitly begin with or prominently feature **Telehealth FX** and directly connect to the press release headline and clinical topic.
2. **Journalistic Patient & Clinical Benefit**: Captions must read like an editorial photo caption in a national news publication, describing the real-world clinical service, medication access program, or patient health outcome.
3. **Strict Banned Lexicon (Negative Filter)**:
   - 🚫 NEVER USE: `still-life`, `composition`, `pedestal`, `symbolizing`, `minimalist`, `photograph of`, `close-up of`, `presentation demonstrating`, `rendering`, `aesthetic`, `artistic`, `amber vial resting on`, `visual metaphor`.
4. **API Technical Invariant**: In PressRanger's API (`update-press-release`), photo captions (`primary_photo_caption` and `secondary_photo_caption`) are **only saved if their corresponding photo URLs (`primary_photo_url` and `secondary_photo_url`) are explicitly passed in the same payload**. Omitting the URL causes PressRanger to retain the previous caption.
5. **Programmatic Assertion Requirement**: Every PR batch generation script must include automated assertions verifying:
   - `caption.startswith("Telehealth FX")`
   - Zero occurrences of banned prompt words. Any violation MUST throw an exception and halt submission.

### 9.2 Caption Examples: Anti-Patterns vs. Required Standard
| ❌ STRICTLY FORBIDDEN (Prompt / Aesthetic Description) | ✅ REQUIRED STANDARD (Telehealth FX Journalistic Copy) |
| :--- | :--- |
| *"Balanced medical still-life composition symbolizing long-term metabolic homeostasis and sustainable weight maintenance."* | *"Telehealth FX introduces structured compounded tirzepatide maintenance schedules to defend against metabolic adaptation and prevent weight regain."* |
| *"Sterile pharmaceutical vials on minimalist stone pedestals illustrating transparent flat-rate compounded medication delivery."* | *"Telehealth FX guarantees a flat rate of $129 per month for compounded tirzepatide across all dosage levels, protecting patients from dose-escalation price surges."* |
| *"Minimalist architectural glass presentation demonstrating direct-pay transparency and pharmaceutical affordability."* | *"Telehealth FX publishes clinical cost data showing patients save over $12,000 annually by choosing 503A compounded tirzepatide over commercial retail brand prices."* |
| *"Modern clinical workspace illustrating rapid digital health intake and physician chart review workflows."* | *"Telehealth FX connects patients to licensed healthcare providers for comprehensive asynchronous metabolic evaluations completed within 24 hours."* |

### 9.3 Image Generation Negative Constraints
Strictly **NO people**, **NO human hands or body parts**, **NO visible text/letters/numbers**, and **NO logos/labels** in any generated image.

### 9.4 Content, Pricing & Routing Invariants
- **Pricing**: Compounded Semaglutide is strictly **$79/mo flat rate across all doses**; Compounded Tirzepatide is strictly **$129/mo flat rate across all doses** (zero titration fee increases).
- **Affiliate Route**: Primary conversion outbound is strictly **`https://go.telehealthfx.com/coreage-glp1`** (CoreAge Rx / Katalys Offer 1632, Affiliate 12322) — 1x per article.
- **Internal Canonical**: 2x links to `https://telehealthfx.com/medications/<compound>/`. Exactly 3 links total per article.
- **Word Count**: Strictly between **1,000 and 1,200 words** per article.
- **Rapid URL Indexer**: Removed from automated workflows (handled manually by the operator).

---

## 10. Multi-Format Short-Form Video Generation Architecture & Creative Protocols

To diversify social reach, eliminate ad fatigue, and optimize algorithmic delivery across YouTube Shorts, Facebook Reels, TikTok, and Pinterest, Telehealth FX deploys **4 distinct short-form video creative formats** driven by deterministic HTML/CSS motion rendering (Playwright + ffmpeg) and FeedHive scheduling:

### 10.1 Video Format Matrix & Storyboard Architectures

| Format Code | Format Name | Core Mechanism | Psychology & Engagement Driver | Primary Conversion Angle |
| :--- | :--- | :--- | :--- | :--- |
| **Format B** | **Quiz & Ring Timer** | 3-Option Question with 3-2-1 timer ring and stat reveal | Curiosity, active participation & knowledge testing | "Test your metabolic baseline with our free quiz" |
| **Format C** | **"3 Signs" Self-Check** | 3 sequential tactile symptom cards (`SIGN 1`, `2`, `3`) + tally prompt | Personal symptom identification & foot-in-the-door calibration | "If 2+ apply, check clinical eligibility for flat-rate GLP-1" |
| **Format A & F** | **Myth vs. Fact Teardown** | Crimson Myth ❌ vs Emerald Fact ✅ + 15s scientific mechanism | Cognitive disruption, myth-busting & clinical authority | "Stop overpaying for brand markups: 503A flat rate $79/$129" |
| **Format D & E** | **Save-This Checklist & Mini-Challenge** | 4-row glass checklist or 10-second interactive timer challenge | High saves/bookmarks (Pinterest #1 factor) & viral comment debates | "Save this titration protocol / check your food noise score" |

---

### 10.2 Format Specifications & Storyboard Blueprints

#### 1. Format C: "3 Signs" Self-Check Motion Format
- **Core Concept**: 3 visual symptom cards appear one by one. Viewers are prompted to count how many apply to their body/routine.
- **Storyboard Flow**:
  1. **Scene 1 (0.0s–3.2s) — Problem Hook**: Glass chip (e.g., `METABOLIC RESET AUDIT`) + 3-line uppercase headline with yellow highlight marker (`*WORD*`) and agitation sub-line (*"3 signs your GLP-1 dose hit a metabolic wall"* or *"3 signs your metabolism is stuck in starvation mode"*).
  2. **Scene 2 (3.2s–7.8s) — 3 Sequential Symptom Cards**:
     - Three glass cards slide in sequentially with red/amber gradient badges (`SIGN 1`, `SIGN 2`, `SIGN 3`) and animated tactile checkmarks.
     - On-screen self-tally indicator at bottom: *"How many did you count? (1, 2, or all 3?)"*.
  3. **Scene 3 (7.8s–11.2s) — Diagnostic Threshold Reveal**:
     - Giant high-impact threshold header: `IF 2+ APPLY`.
     - Clinical diagnosis line + yellow metric badge (e.g., `85% RECEPTOR ADAPTATION RATE` or `CHRONIC CORTISOL SPIKE`).
     - **Mandatory on-screen peer-reviewed citation**: (e.g., *Source: New England Journal of Medicine* / *ADA Clinical Guidelines*).
  4. **Scene 4 (11.2s–15.0s / 25.0s) — Multi-Platform CTA**:
     - Platform-tailored pulsing action button with directional arrows, helper copy, and Telehealth FX brandmark.

#### 2. Format A & F: "Myth vs. Fact & Mechanism Teardown" Format
- **Core Concept**: High-contrast cognitive disruption exposing costly pharmaceutical misconceptions, followed by an emerald scientific fact and a 15-second physiological mechanism teardown.
- **Storyboard Flow**:
  1. **Scene 1 (0.0s–3.5s) — The Myth Shock**: High-contrast Crimson card (`MYTH ❌`) exposing widespread misconceptions:
     - *"MYTH: Compounded GLP-1s are less potent or lower grade than $1,300 commercial retail pens ❌"*
     - *"MYTH: Dose escalation is required every 4 weeks to keep burning stubborn fat ❌"*
     - *"MYTH: Weight regain after stopping GLP-1 therapy is purely a lack of willpower ❌"*
  2. **Scene 2 (3.5s–8.0s) — The Clinical Fact**: Slide-in Emerald card (`FACT ✅`) revealing published scientific reality:
     - *"FACT: Licensed 503A compounding pharmacies utilize identical pure active pharmaceutical ingredients (APIs) tested for ≥99% analytical potency ✅"*
     - Cites peer-reviewed on-screen authority (FDA 503A Guidance, STEP-1 / SURPASS-2 trials, Columbia PNAS).
  3. **Scene 3 (8.0s–11.5s) — Mechanism Teardown**: Visual clinical explanation of the biological mechanism (delayed gastric emptying, hypothalamic pro-opiomelanocortin activation, GIP/GLP-1 dual receptor synergy, or metabolic adaptation prevention).
  4. **Scene 4 (11.5s–15.0s / 25.0s) — Value CTA**: Directs viewer to claim physician-supervised flat-rate compounded care ($79/mo Semaglutide or $129/mo Tirzepatide) via `go.telehealthfx.com/coreage-glp1`.

#### 3. Format D & E: "Save-This Checklist & 10-Second Mini-Challenge" Format
- **Core Concept**: High-utility actionable protocols and interactive on-screen micro-tests designed to maximize bookmarking/saves on Pinterest and heated comment interactions on TikTok and Facebook.
- **Storyboard Flow**:
  - **Format D (Actionable Checklist / Protocol)**:
    - Sleek 4-row glass checklist with animated checkmark badges and countdown pacing:
      - *"Save this 4-step GLP-1 nausea defense protocol before your next dose"*
      - *"5 crucial lab markers to verify before starting Testosterone Replacement Therapy"*
      - *"The 4-step morning oral microbiome restoration routine"*
  - **Format E (10-Second Micro-Challenge)**:
    - Interactive on-screen test with a 10-second timer challenge bar:
      - *"10-Second Satiety Reflex Challenge: How many hours after breakfast does food noise return?"*
      - *"Retail Markup vs Flat Rate Challenge: Can you spot why retail GLP-1s charge $1,349 while 503A is $129 flat?"*
  - **Final Scene**: Platform-tailored CTA directing viewers to save/pin the reference guide and access the free clinical intake evaluation.

---

### 10.3 Platform-Differentiated Durations & Delivery Specifications

| Platform | Duration | Audio Fade-Out | CTA Button Copy | Placement Rule |
| :--- | :--- | :--- | :--- | :--- |
| **TikTok** | **15.00 s** | 13.0s → 15.0s | `CHECK LINK IN BIO TO QUALIFY` | **Zero URLs anywhere.** End caption with `👉 Link in bio to check clinical eligibility!` |
| **Pinterest** | **15.00 s** | N/A (Static Pin) | `CLICK HERE TO VIEW CARE OPTIONS` | **Static 9:16 Image Pin Only** (1080×1920). Never attach video reels (Pinterest API v5 rejects videos without native cover uploads). |
| **Facebook Reels** | **25.00–30.00 s** | 23.0s → 25.0s | `CHECK FIRST COMMENT FOR LINK` | Post starts `👇 Check the first comment for doctor intake…`; tracking link pinned in comment #1. |
| **YouTube Shorts**| **25.00–30.00 s** | 23.0s → 25.0s | `LINK IN DESCRIPTION TO QUALIFY` | Description Line 1 = `👉 [Switchy URL]`; followed by up to 5,000 chars of clinical SEO copy. |

---

### 10.4 Strict Compliance, Safety & Visual Invariants

1. **Negative Visual Constraints**: Strictly **zero people**, **zero human hands or body parts**, **zero visible text/letters/numbers**, and **zero logos/labels** in all AI-generated background video plates (cinematic low-key medical/biological abstract lighting).
2. **Authority Citations Mandatory**: Every fact, metric, and diagnostic threshold must be verifiable against published scientific literature (NEJM, JAMA, ADA, FDA, CDC, Endocrine Society) and cited visibly on screen.
3. **Zero Medical Guarantees**: Never use prohibited phrases (`cure`, `melt fat overnight`, `guaranteed 30 lbs in 30 days`, `bypass your doctor`). Telehealth FX sells access to independent licensed medical consultations and 503A compounding pharmacy delivery.
4. **Mandatory Pricing Standard**:
   - Compounded Semaglutide: Strictly **$79/mo flat rate** across all doses.
   - Compounded Tirzepatide: Strictly **$129/mo flat rate** across all doses.
5. **Channel Routing Whitelist (FeedHive)**:
   - **Telehealth FX Channel Set**: YouTube `08e483da-1454-4b3d-9abf-e99cc1a52996`, Facebook `d1b37bb5-5580-4a5f-9d7b-044b5ecf756e` → Destination: `https://go.telehealthfx.com/coreage-glp1`.
   - **Losing Weight RX Set**: YouTube `71510b60-03e9-4a38-bb8e-0fd0007440c0`, Facebook `ad553e6d-f293-4be4-9fe6-771b3b0ecc03` → Destination: `https://losingweightrx.com`.
   - **Get Skinny Online Set**: YouTube `d6dfbb19-ddca-4b70-b204-58de7095f38c`, Facebook `874a304e-21a0-4c42-af12-03767ccb26f5` → Destination: `https://getskinnyonline.com`.

---

## 11. Programmatic SEO Indexing & Rapid URL Indexer Registry

### 11.1 Indexing Architecture & State Management
- **Indexing Engine Script**: [`scripts/automate_batch_indexing.js`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/scripts/automate_batch_indexing.js)
- **Registry File**: [`data/indexed_urls_registry.json`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/data/indexed_urls_registry.json)
- **API Provider**: Rapid URL Indexer API (`https://rapidurlindexer.com/wp-json/api/v1`)
- **Sitemap Verification**: Live at `https://telehealthfx.com/sitemap.xml` (722 programmatic URLs: 257 locations, 269 blogs, 28 medications, 23 TRT guides, 108 comparisons).

### 11.2 Batch 1 Execution Summary (October 11, 2026)
- **Project ID**: `1247167` ("Telehealth FX - Priority Metros & Clinical Hubs (2026-10-11)")
- **Submitted Volume**: Exactly **90 priority URLs**
  - **11 Core Medication & Pricing Pillars**: `/medications/semaglutide/`, `/medications/tirzepatide/`, `/medications/retatrutide/`, `/medications/nad/`, `/medications/sermorelin/`, `/medications/trt/`, `/medications/enclomiphene/`, `/medications/ed/`, `/medications/skincare/`, `/pricing/`, `/glp-1-shortage-tracker-2026/`.
  - **14 High-Intent Clinical Guides**: Top weight-loss injections near me, titration safety, stopping GLP-1, hidden fees, and side effect management.
  - **64 Tier 1 Metro Locations**: Highest-population metros (Atlanta, Austin, Dallas, Houston, Phoenix, Miami, Tampa, Orlando, Chicago, Denver, Charlotte, Nashville, Las Vegas, LA, San Diego, SF, Seattle, etc.).
  - **1 Secondary City Location**: `/locations/abilene/`.
- **Remaining Balance**: 31 credits preserved (above 30-credit threshold).
- **Next Batch (Tier 2)**: 60 remaining secondary cities queued in [`data/indexed_urls_registry.json`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/data/indexed_urls_registry.json) ready for submission when credits are replenished.

### 11.3 Batch 2 Execution Summary (October 11, 2026)
- **Project ID**: `1247191` ("Telehealth FX - Priority Metros & Clinical Hubs (2026-10-11)")
- **Submitted Volume**: Exactly **31 secondary city location URLs** (Akron, Albuquerque, Amarillo, Anchorage, Augusta, Bakersfield, Baton Rouge, Beaumont, Billings, Biloxi, Birmingham, Boise, Brownsville, Buffalo, Charleston, Chattanooga, Cincinnati, Clarksville, Cleveland, Clovis, College Station, Colorado Springs, Columbia, Columbus, Corpus Christi, Dayton, Des Moines, Detroit, Dothan, Duluth, Durham).
- **Total Lifetime Indexed URLs**: **121 verified URLs** registered.

### 11.4 Batch 6 Execution Summary (October 12, 2026)
- **Universal IndexNow Network (Bing, Yandex, Seznam, Naver)**:
  - Submitted all **727 sitemap URLs** via [`Telehealth FX Site/scripts/instant_index_indexnow.mjs --all`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/Telehealth%20FX%20Site/scripts/instant_index_indexnow.mjs).
  - HTTP 200 confirmed by `www.bing.com/indexnow` for immediate propagation across all partner engines.
- **Google Instant Indexing API (Service Account `telehealthfx-indexing`)**:
  - Submitted **200 priority URLs** (100% daily Googlebot quota) via [`Telehealth FX Site/scripts/instant_index_google.mjs --batch=6`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/Telehealth%20FX%20Site/scripts/instant_index_google.mjs).
  - Curated in [`Telehealth FX Site/src/data/priority-200-urls-batch6.json`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/Telehealth%20FX%20Site/src/data/priority-200-urls-batch6.json):
    - 5 New High-CPC Clinical Blogs (Sermorelin vs CJC-1295, Enclomiphene oral TRT, SubQ NAD+, Oral GLP-1 tablets, Prescription Tretinoin).
    - 59 Native Spanish Routes (`/es/`, `/es/medications/semaglutide/`, `/es/medications/tirzepatide/`, `/es/compare/`, `/es/oral-tablets/`, `/es/trt/`, 50 Spanish state hubs).
    - 36 Core English Medication Pillars, Pricing, and Comparison Showdowns.
    - 50 US State GLP-1 Care Center Hubs and Top Metropolitan Centers.
  - Results: **200 successful, 0 failed (100% submission rate)**.

---

## 12. High-Value Clinical SEO Blog Content Engine (October 2026)

Targeting premium commercial CPC keywords ($8 to $29+ CPC) across GLP-1, Secretagogues, Longevity, and TRT. Every article adheres strictly to brand visual invariants (zero people, zero human hands, zero text/letters/numbers, and zero logos/labels) using clinical macro still-life photography.

### 12.1 Published Articles & Live Routes

| # | Article Title & Live URL | Primary Target Keywords | Dedicated Visual Asset (Zero People) | Partner & Flat Price |
| :--- | :--- | :--- | :--- | :--- |
| **1** | [Sermorelin vs CJC-1295 Clinical Guide](https://telehealthfx.com/blog/sermorelin-vs-cjc-1295-clinical-guide-2026/) | `sermorelin vs cjc 1295`<br>`sermorelin injection` ($10.43)<br>`sermorelin cost` | `/assets/sermorelin-vs-cjc-1295-featured.jpg`<br>Amber peptide vial on Carrara marble plinth | **CoreAge Rx Sermorelin**<br>Flat $99/mo |
| **2** | [Enclomiphene Citrate Oral TRT Guide](https://telehealthfx.com/blog/enclomiphene-citrate-oral-trt-fertility-guide-2026/) | `enclomiphene citrate`<br>`oral trt` ($8.36)<br>`buy enclomiphene online` ($11.31) | `/assets/enclomiphene-oral-trt-featured.jpg`<br>Frosted dropper bottle on charcoal slate | **Peter MD / Maximus**<br>From $89/mo |
| **3** | [At-Home Subcutaneous NAD+ Injections](https://telehealthfx.com/blog/at-home-subcutaneous-nad-injections-guide-2026/) | `nad injections at home` ($22.73)<br>`subcutaneous nad injection`<br>`nad therapy near me` | `/assets/nad-subcutaneous-injections-featured.jpg`<br>Amber vial & micro-syringe on basalt | **CoreAge Rx NAD+**<br>Flat $99/mo |
| **4** | [Oral GLP-1 Sublingual Tablets vs Injections](https://telehealthfx.com/blog/oral-glp-1-sublingual-tablets-vs-injections-2026/) | `glp 1 pills` ($27.10, 201k vol)<br>`semaglutide tablets` ($27.27)<br>`semaglutide pill` ($29.41) | `/assets/oral-glp1-tablets-featured.jpg`<br>White sublingual tablets on travertine | **SkinnyRx Tablets**<br>Flat $149/mo |
| **5** | [Prescription Tretinoin Online Telehealth Guide](https://telehealthfx.com/blog/prescription-tretinoin-online-telehealth-retinoid-guide-2026/) | `prescription tretinoin online` ($16.01)<br>`tretinoin telehealth`<br>`tretinoin cost without insurance` | `/assets/prescription-tretinoin-featured.jpg`<br>Golden retinoid swirl on black granite | **CoreAge Smooth Move**<br>Flat $42/mo |

### 12.2 Technical Invariants Enforced
- **E-E-A-T Schema**: Full `@graph` containing `MedicalWebPage`, `Article`, `FAQPage`, and `Drug` entities.
- **Conversion Sub-IDs**: All conversion CTAs explicitly pass `aff_sub_1=seo_blog_<slug>` to resolve analytics attribution gaps.
- **Internal Linking**: Each article links to 2 location pages, 1 core medication pillar page, and 1 sibling comparison guide.
- **Production Edge**: Deployed directly to Cloudflare Pages production (`--branch=main`). HTTP 200 OK verified across all 5 routes.

---

## 13. Sister Sites (Losing Weight RX & Get Skinny Online) High-CPC Blog Engine (October 2026)

To capture search demand from our 11,269-keyword master dataset without cannibalizing Telehealth FX, dedicated blog architectures and distinct brand positioning were deployed across both sister properties:

### 13.1 Brand & Persona Allocation
1. **Losing Weight RX (`losingweightrx.com`)**:
   - **Positioning**: *The Clinical Incretin Authority & Healthcare Cost Demystifier*
   - **Focus**: Titration schedules, syringe unit conversions, drug cross-switching protocols, prior authorizations, and competitor hidden subscription fee audits.
   - **Conversion Flow**: Intake Quiz at `/do-i-qualify.html` routing to CoreAge $79/$129 flat rates.
2. **Get Skinny Online (`getskinnyonline.com`)**:
   - **Positioning**: *The Lifestyle Transformation & Fast-Track Telehealth Hub*
   - **Focus**: 24-hour asynchronous online prescriptions without video calls, realistic 1/3/6-month weight loss proof, needle-free dissolving tablets, food noise elimination, and aesthetic preservation.
   - **Conversion Flow**: Intake Quiz at `/do-i-qualify.html` routing to CoreAge $79/$129 flat rates.

### 13.2 Published Commercial Articles (Full 10-Article Portfolio)

| Property | Article Title & Slug | Primary Keywords & Search Economics | Intent & Angle |
| :--- | :--- | :--- | :--- |
| **Get Skinny Online** | `/blog/how-to-get-semaglutide-prescribed-online-24-hours` | `semaglutide prescription online` ($64.62 CPC)<br>`semaglutide online` ($49.30 CPC, 3.6k vol) | Highest dataset CPC; 24-hr doctor approval without video calls. |
| **Get Skinny Online** | `/blog/how-to-get-tirzepatide-online-prescription-guide` | `get tirzepatide online` ($57.63 CPC)<br>`tirzepatide online` ($37.94 CPC, 14.8k vol) | High commercial buyer; dual GIP/GLP-1 503A cold-chain delivery. |
| **Get Skinny Online** | `/blog/tirzepatide-weight-loss-timeline-month-by-month-results` | `tirzepatide for weight loss` (40.5k vol, $24.13 CPC)<br>`tirzepatide weight loss` (27.1k vol) | Massive traffic proof; month-by-month SURMOUNT-1 milestones. |
| **Get Skinny Online** | `/blog/semaglutide-for-weight-loss-realistic-results-timeline` | `semaglutide for weight loss` (49.5k vol, $28.16 CPC)<br>`semaglutide weight loss` (14.8k vol) | Massive volume proof; STEP-1 monthly weight loss expectations. |
| **Get Skinny Online** | `/blog/oral-glp1-tablets-needle-free-weight-loss-guide` | `tirzepatide pill` (27.1k vol)<br>`semaglutide oral` (12.1k vol, $29.41 CPC) | Needle-phobic lifestyle patients; sublingual bioavailability guide. |
| **Losing Weight RX** | `/blog/tirzepatide-dosage-chart-units-titration-guide` | `tirzepatide dosage chart` (33.1k vol, $5.48 CPC)<br>`tirzepatide dosing for weight loss in units` (12.1k vol) | Massive clinical reference; U-100 syringe units to mg conversion. |
| **Losing Weight RX** | `/blog/glp1-telehealth-no-membership-fees-pricing-guide` | `semaglutide without membership fees` ($48.42 CPC)<br>`tirzepatide no membership` ($38.15 CPC) | High-intent buyer; exposing Ro/Hims/Mochi $99-$145/mo fees. |
| **Losing Weight RX** | `/blog/switching-semaglutide-to-tirzepatide-dose-conversion` | `semaglutide to tirzepatide dose conversion` ($13.42 CPC)<br>`tirzepatide vs semaglutide` (49.5k vol) | High-intent patient switcher; overcoming plateaus with dual incretin. |
| **Losing Weight RX** | `/blog/semaglutide-cost-without-insurance-cash-pay-guide` | `semaglutide cost without insurance` ($26.33 CPC, 5.4k vol)<br>`semaglutide cost` (27.1k vol) | Financial breakdown; $968-$1,349 retail vs $79/mo 503A compounding. |
| **Losing Weight RX** | `/blog/what-is-compounded-semaglutide-503a-safety-guide` | `compounded semaglutide` (33.1k vol, $23.72 CPC)<br>`tirzepatide compound` (27.1k vol, $21.91 CPC) | Regulatory authority; Section 503A, USP <797>, HPLC purity, base vs salt. |

### 13.3 Technical Standards Enforced
- Complete Schema.org JSON-LD graph (`MedicalOrganization`, `Person`, `MedicalWebPage`, `Product`, `Offer` [$79 / $129], `FAQPage`, `BreadcrumbList`).
- Interactive vanilla JS FAQ accordions with zero layout shift.
- Responsive clinical and pricing comparison tables.
- Updated `blog/index.html` grids with custom badges, reading times, and editorial meta.
- Updated `sitemap.xml` files with priority 0.85 and weekly change frequency.
- Git commits executed in both repositories (`Get Skinny Online` and `Losing Weight RX`).

---

## 14. Short-Form Video Performance Autopsy & Conversion Taskforce Charter (October 2026)

### 14.1 FeedHive Telemetry Audit (100 Posts Analyzed)
- **Total Published Posts Audited**: 100 posts across 6 social channels via `scripts/feedhive_video_analytics.json`.
- **Facebook Reels Performance**: 51 posts total, 51 zero-view posts (**100% zero-distribution rate** across Telehealth FX, Quiz Select, and Luxury Old Money).
- **YouTube Shorts Performance**: 49 posts total, 609 total views (average 12.4 views/post), 14 likes, 0 comments.
- **Top Performing Post**: 59 views (*"Why Your Brain Keeps Shouting for Snacks"* on Telehealth FX YouTube).
- **Primary Root Causes Diagnosed**:
  1. *Zero TTS / Spoken Audio*: Audio pool strictly rotated Deals Direct Daily music tracks with zero spoken dialogue. Over 85% of mobile short-form users swipe away within 1.0s without voiceover.
  2. *Faceless Academic Cards*: Playwright text slideshows lack human authority (doctors) or emotional peer empathy (patients).
  3. *Unclickable Links*: YouTube mobile Shorts permanently disabled clickable links in descriptions and comments. Facebook first-comment isolation received zero reach due to 0 views.
  4. *Account Identity Mismatch*: Facebook page titled "Luxury Old Money" posting medical weight loss content caused severe algorithmic spam flags and zero seed impressions.

### 14.2 Conversion Video Taskforce Charter
- **Chief** (`Chief`): Executive Orchestrator.
- **ShortFormViralScientist** (`.agents/agents/short-form-viral-scientist.md`): Short-form algorithmic retention & 3-second hook survival lead.
- **Glp1ConversionCopywriter** (`.agents/agents/glp1-conversion-copywriter.md`): Direct-response GLP-1 scriptwriting director ($79/$129 pricing expose, food noise relief, habit teardowns).
- **UgcCreativeDirector** (`.agents/agents/ugc-creative-director.md`): AI avatar (ElevenLabs + HeyGen/Hedra), UGC creator, and kinetic subtitle production director.
- **DataEmailCro** / **SocialMedia**: Funnel CRO, channel re-branding, and comment-to-DM quiz lead capture architecture.

### 14.3 251-Post Keyword & Brand Positioning Remediation Rollout (October 18, 2026)
- **Remediation Engine**: [`scripts/remediate_keywords_and_positioning.js`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/scripts/remediate_keywords_and_positioning.js)
- **Live Queue Remediated**: 251/251 posts (250 scheduled + 1 previously failed Facebook post `8f9534ed-eb3f-45f2-bbb2-b4db279b901c` rescheduled to `2026-10-31T22:45:00.000Z`).
- **YouTube Shorts (126 Scheduled)**:
  - 100% of titles ($\le 95$ chars, zero HTML entity encoding artifacts) now explicitly include **`GLP-1`**, **`Semaglutide`**, **`Tirzepatide`**, and **`Weight Loss`**.
  - Descriptions start with the direct qualification URL (`https://go.telehealthfx.com/coreage-glp1`, `https://losingweightrx.com/do-i-qualify.html`, `https://getskinnyonline.com/do-i-qualify.html`), include the brand-specific **"About / What We Do"** block (`Compounded Semaglutide $79/mo flat`, `Compounded Tirzepatide $129/mo flat`), and include `#GLP1 #Semaglutide #Tirzepatide #WeightLoss #MedicalWeightLoss`.
- **Facebook Reels (125 Scheduled)**:
  - 100% of main post captions include a zero-URL/zero-domain **"What We Do"** positioning block featuring `GLP-1 Medical Weight Loss`, `Compounded Semaglutide ($79/mo flat)`, and `Compounded Tirzepatide ($129/mo flat)` + downward pointer CTA (`👉 Check if you qualify for GLP-1 Weight Loss (Semaglutide $79/mo • Tirzepatide $129/mo) with a licensed physician!`).
  - 100% of pinned first comments (`subposts[0]`) updated with the $79/$129 Semaglutide & Tirzepatide positioning and direct qualification URLs.
- **On-Screen Video Templates Upgraded**:
  - Added persistent top `.brand-header-pill` (`GLP-1 WEIGHT LOSS • SEMAGLUTIDE $79/MO • TIRZEPATIDE $129/MO`) and updated default CTA/disclaimer text across [`telehealth-reel.html`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/templates/reels/telehealth-reel.html), [`telehealth-myth-fact.html`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/templates/reels/telehealth-myth-fact.html), [`telehealth-three-signs.html`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/templates/reels/telehealth-three-signs.html), [`telehealth-checklist.html`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/templates/reels/telehealth-checklist.html), and [`scripts/render_telehealth_reels.py`](file:///Users/joshburrows/Desktop/Antigravity/Side%20Hustles/Telehealth%20FX/scripts/render_telehealth_reels.py).

---

## 15. Multi-Property Conversion Overhaul & Musely Rollout (October 18, 2026)

### 15.1 Core Partner Realignment
- **Flagship GLP-1**: Pivoted away from dormant CoreAge Rx (0 conversions / 266 clicks) to **Embody GLP-1 (Offer 1548)** ($69/mo intro, 8.70% network CR, $13.05 EPC) and **Gala Health (Offer 1576)** (2.08% CR, $6.98 EPC).
- **Flagship TRT**: Peter MD (Offer 1344) mapped across `go.telehealthfx.com/petermd`, `coreage-trt`, `trt`, and `enclomiphene` with transparent $89/mo multi-month billing and lab disclosures.
- **Clinical Skincare**: Musely accepted all properties (Telehealth FX, Deals Direct Daily, Losing Weight RX, Get Skinny Online). 100% routed through cloaked Switchy URLs (`go.telehealthfx.com/musely*`, `/spot-cream`, `/anti-aging-cream`, `/aging-repair-cream`) targeting verified Impact Radius partner link (`https://musely.pxf.io/m4B7KZ`) with dynamic `subId1` preservation.
- **HealthRX (Offer 1630) Evaluation**: Evaluated HealthRX ($99/mo intro). Due to lack of network-wide conversion/EPC data in Katalys, traffic remains prioritized on proven high-EPC winners (Embody, Peter MD, Musely).

### 15.2 Deployment & Verification Status
- **Switchy Link Architecture**: 21/21 routes audited and passing 100% telemetry verification with full query parameter forwarding (`check_offer_telemetry.js`).
- **Deals Direct Daily**: 864 HTML files (1,680 link instances) updated across 31 skincare quizzes and deal pages across English and all 11 international languages (`sv/`, `es/`, `de/`, `fr/`, `it/`, `nl/`, `no/`, `pl/`, `pt/`, `ja/`). Rebuilt 3,298-URL sitemap, deployed to Cloudflare Pages (`8bec2186.deals-direct-daily.pages.dev`), pushed to `origin/main` (`65f1bd9`), and dispatched to Universal IndexNow.
- **Telehealth FX Site**: Tretinoin blog, product components, and hero search updated to Musely. Deployed to Cloudflare Pages (`0cca228a.telehealthfx.pages.dev`) and pushed to `origin/main` (`d9b6f7f`).
- **Losing Weight RX**: Clinical skincare cards on `pricing.html` and `es/pricing.html` updated to Musely The Anti-Aging Cream & The Spot Cream. Deployed to Cloudflare Pages (`239db24d.losing-weight-rx.pages.dev`) and pushed to `origin/main` (`e1c461e`).
- **Get Skinny Online**: Clinical skincare cards on `pricing.html` and `es/pricing.html` updated to Musely. Deployed to Cloudflare Pages (`1442ad0d.getskinnyonline.pages.dev`).
