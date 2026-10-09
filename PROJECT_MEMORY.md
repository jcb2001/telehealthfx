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
- **FeedHive Workspace:** Telehealth FX (`Telehealth FX`)
  - **API Key:** `fh_dcbd10b1f8dbcdc40f71c7e9a627012e4815becb55dcf5ca`
  - **Connected Channels:**
    - YouTube: Telehealth FX (`08e483da-1454-4b3d-9abf-e99cc1a52996`)
    - Facebook: Telehealth FX (`d1b37bb5-5580-4a5f-9d7b-044b5ecf756e`)
    - YouTube: Healthy Lifestyle Podcast (`d6dfbb19-ddca-4b70-b204-58de7095f38c`)
    - Facebook: Luxury Old Money (`874a304e-21a0-4c42-af12-03767ccb26f5`)
    - YouTube: Quiz Select (`71510b60-03e9-4a38-bb8e-0fd0007440c0`)
    - Facebook: Quiz Select (`ad553e6d-f293-4be4-9fe6-771b3b0ecc03`)

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
4. **Channel Targeting Whitelist**: Verify that target social platforms use verified Telehealth FX channel IDs:
   - **Telehealth FX YouTube**: `08e483da-1454-4b3d-9abf-e99cc1a52996`
   - **Telehealth FX Facebook**: `d1b37bb5-5580-4a5f-9d7b-044b5ecf756e`

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

