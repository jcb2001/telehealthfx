import "./globals.css";
import { Nav } from "../components/hero.jsx";
import { Footer } from "../components/sections-3.jsx";
import { AnnouncementBar } from "../components/announcement-bar.jsx";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  title: "Telehealth FX — GLP-1 clinical weight loss, delivered.",
  description: "GLP-1 clinical weight loss, delivered to your door. Get Semaglutide and Tirzepatide prescribed with 24-hour approval and transparent pricing.",
};

export default function RootLayout({ children }) {
  const shippingDetails = {
    "@type": "OfferShippingDetails",
    "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
    "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" },
    "deliveryTime": {
      "@type": "ShippingDeliveryTime",
      "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "d" },
      "transitTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 2, "unitCode": "d" }
    }
  };
  const returnPolicy = {
    "@type": "MerchantReturnPolicy",
    "applicableCountry": "US",
    "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted"
  };

  const masterSchema = {
    "@context": "https://schema.org",
    "@graph": [
      // ── Organization ──
      {
        "@type": ["MedicalOrganization", "Organization"],
        "@id": "https://telehealthfx.com/#organization",
        "name": "Telehealth FX",
        "url": "https://telehealthfx.com",
        "logo": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "contactPoint": { "@type": "ContactPoint", "contactType": "customer support" },
        "areaServed": [{ "@type": "Country", "name": "United States" }],
        "medicalSpecialty": [
          "http://schema.org/DietNutrition",
          "http://schema.org/Endocrine",
          "http://schema.org/Urologic",
          "http://schema.org/Dermatology",
          "http://schema.org/PrimaryCare"
        ],
        "alternateName": [
          "TelehealthFX",
          "Telehealth FX Online Clinic",
          "GLP-1 Telehealth Provider",
          "Weight Loss Clinic Online",
          "Online TRT Clinic",
          "Men's Health Telehealth"
        ]
      },
      // ── WebSite ──
      {
        "@type": "WebSite",
        "@id": "https://telehealthfx.com/#website",
        "url": "https://telehealthfx.com",
        "name": "Telehealth FX",
        "publisher": { "@id": "https://telehealthfx.com/#organization" }
      },
      // ── Person ──
      {
        "@type": "Person",
        "@id": "https://telehealthfx.com/#julianmercer",
        "name": "Julian Mercer",
        "jobTitle": "Lead Bio-Systems Analyst",
        "worksFor": { "@id": "https://telehealthfx.com/#organization" },
        "description": "Lead Bio-Systems Analyst at Telehealth FX specializing in metabolic data modeling and pharmacokinetic protocols."
      },
      // ── Service ──
      {
        "@type": "Service",
        "@id": "https://telehealthfx.com/#service",
        "name": "Telehealth Weight Loss & Men's Health Programs — Telehealth FX",
        "provider": { "@id": "https://telehealthfx.com/#organization" },
        "areaServed": { "@type": "Country", "name": "United States" },
        "serviceType": "Telehealth Medical Services"
      },
      // ── Product: Semaglutide ──
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/#product-semaglutide",
        "name": "Compounded Semaglutide Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Comprehensive metabolic health program including clinician consults and compounded Semaglutide medication for weight loss.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "SEM-01",
        "url": "https://telehealthfx.com/medications/semaglutide",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "worstRating": "1", "reviewCount": "218", "ratingCount": "218" },
        "review": [
          { "@type": "Review", "author": { "@type": "Person", "name": "Michael T." }, "datePublished": "2026-03-15", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Lost 32 lbs in 3 months. The online process was seamless — approved in under 24 hours and my medication arrived in 2 days. No side effects beyond mild nausea the first week." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Sarah K." }, "datePublished": "2026-02-28", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Finally a program that actually works. My clinician adjusted my dose perfectly and the results have been incredible. Down 28 lbs and my A1C dropped from 6.1 to 5.4." },
          { "@type": "Review", "author": { "@type": "Person", "name": "David R." }, "datePublished": "2026-04-02", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "The pricing transparency sold me. No hidden fees, free shipping, and the medication quality is excellent. Better than my previous provider at half the cost." }
        ],
        "offers": { "@type": "Offer", "price": "146.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://telehealthfx.com/medications/semaglutide", shippingDetails, "hasMerchantReturnPolicy": returnPolicy }
      },
      // ── Product: Tirzepatide ──
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/#product-tirzepatide",
        "name": "Compounded Tirzepatide Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Dual GIP/GLP-1 receptor agonist program including clinician consults and compounded Tirzepatide medication for enhanced weight loss.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "TIR-01",
        "url": "https://telehealthfx.com",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "bestRating": "5", "worstRating": "1", "reviewCount": "142", "ratingCount": "142" },
        "review": [
          { "@type": "Review", "author": { "@type": "Person", "name": "James L." }, "datePublished": "2026-03-22", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Switched from Semaglutide to Tirzepatide and the results accelerated dramatically. Down 41 lbs in 4 months with virtually no appetite. Life-changing." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Amanda P." }, "datePublished": "2026-04-10", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "The dual-action mechanism really works. My blood sugar is better than it's been in years and I've lost 35 lbs. The telehealth process made everything easy." }
        ],
        "offers": { "@type": "Offer", "price": "258.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://telehealthfx.com", shippingDetails, "hasMerchantReturnPolicy": returnPolicy }
      },
      // ── Product: Testosterone (TRT) ──
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/#product-testosterone",
        "name": "Testosterone Replacement Therapy (TRT) Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Personalized TRT prescribed by licensed clinicians — injectable, oral, or topical options with free discreet shipping and clinician oversight.",
        "image": "https://telehealthfx.com/assets/trt-hero.png",
        "sku": "TRT-01",
        "url": "https://telehealthfx.com/medications/testosterone",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "worstRating": "1", "reviewCount": "187", "ratingCount": "187" },
        "review": [
          { "@type": "Review", "author": { "@type": "Person", "name": "Chris M." }, "datePublished": "2026-03-08", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Energy levels completely transformed within 6 weeks. I'm sleeping better, thinking clearer, and my gym performance is back to where it was in my 20s. The online process was incredibly easy." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Robert H." }, "datePublished": "2026-04-18", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "After years of feeling exhausted and unmotivated, TRT gave me my life back. My levels went from 280 to 850 ng/dL. The clinician support has been outstanding." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Derek W." }, "datePublished": "2026-02-14", "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" }, "reviewBody": "Great program and responsive clinicians. Took about 8 weeks to dial in my dose perfectly but the results are worth it. Mood, energy, and body composition all improved significantly." }
        ],
        "offers": { "@type": "Offer", "price": "79.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://telehealthfx.com/medications/testosterone", shippingDetails, "hasMerchantReturnPolicy": returnPolicy }
      },
      // ── Product: Enclomiphene ──
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/#product-enclomiphene",
        "name": "Enclomiphene Oral TRT Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Oral testosterone optimization that boosts your body's own production up to 2.5x while preserving fertility — no injections, no creams.",
        "image": "https://telehealthfx.com/assets/enclomiphene-hero.png",
        "sku": "ENC-01",
        "url": "https://telehealthfx.com/medications/enclomiphene",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "bestRating": "5", "worstRating": "1", "reviewCount": "94", "ratingCount": "94" },
        "review": [
          { "@type": "Review", "author": { "@type": "Person", "name": "Tyler B." }, "datePublished": "2026-03-29", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Wanted to boost my T without injections since my wife and I are trying to conceive. Enclomiphene was perfect — my levels went from 340 to 780 and my fertility stayed intact. Game changer." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Marcus J." }, "datePublished": "2026-04-22", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Just take a pill daily — no needles, no messy creams. My testosterone nearly doubled in 8 weeks. Energy, libido, and gym performance all way up." }
        ],
        "offers": { "@type": "Offer", "price": "89.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://telehealthfx.com/medications/enclomiphene", shippingDetails, "hasMerchantReturnPolicy": returnPolicy }
      },
      // ── Product: ED Treatment ──
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/#product-ed",
        "name": "Erectile Dysfunction Treatment Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Discreet, affordable ED medication — Sildenafil, Tadalafil, and custom compounds prescribed online and shipped in plain packaging.",
        "image": "https://telehealthfx.com/assets/ed-hero.png",
        "sku": "ED-01",
        "url": "https://telehealthfx.com/medications/ed",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "bestRating": "5", "worstRating": "1", "reviewCount": "263", "ratingCount": "263" },
        "review": [
          { "@type": "Review", "author": { "@type": "Person", "name": "Kevin S." }, "datePublished": "2026-04-05", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Discreet from start to finish. Approved same day, medication arrived in plain packaging 2 days later. Works exactly as described — confidence restored." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Brian C." }, "datePublished": "2026-03-18", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Tried the daily low-dose Tadalafil and it's been incredible. No more planning around a pill — just consistent, reliable performance. The price is way better than my local pharmacy." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Anthony G." }, "datePublished": "2026-02-22", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Was embarrassed to talk to my doctor about this. The online assessment made it easy and judgment-free. Medication works perfectly with minimal side effects." }
        ],
        "offers": { "@type": "Offer", "price": "19.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://telehealthfx.com/medications/ed", shippingDetails, "hasMerchantReturnPolicy": returnPolicy }
      },
      // ── Product: Hair Loss ──
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/#product-hair",
        "name": "Hair Loss Treatment Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Clinician-prescribed Finasteride, Minoxidil, and custom compounded formulas to slow, stop, and reverse hair loss — shipped discreetly.",
        "image": "https://telehealthfx.com/assets/hair-hero.png",
        "sku": "HAIR-01",
        "url": "https://telehealthfx.com/medications/hair-loss",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "bestRating": "5", "worstRating": "1", "reviewCount": "156", "ratingCount": "156" },
        "review": [
          { "@type": "Review", "author": { "@type": "Person", "name": "Jason P." }, "datePublished": "2026-03-12", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Started noticing my hairline filling in around month 4. Now at 8 months and the difference is dramatic. Wish I'd started sooner — the combo of Finasteride and Minoxidil really works." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Ryan D." }, "datePublished": "2026-04-15", "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" }, "reviewBody": "Shedding stopped within the first month which was a huge relief. Starting to see some regrowth at the crown. The online process was easy and the medication arrives monthly like clockwork." }
        ],
        "offers": { "@type": "Offer", "price": "29.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://telehealthfx.com/medications/hair-loss", shippingDetails, "hasMerchantReturnPolicy": returnPolicy }
      },
      // ── Product: Metformin ──
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/#product-metformin",
        "name": "Metformin Longevity Program",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Physician-guided Metformin 500mg for metabolic optimization, insulin sensitivity, and longevity — the world's most studied anti-aging medication.",
        "image": "https://telehealthfx.com/assets/metformin-hero.png",
        "sku": "MET-01",
        "url": "https://telehealthfx.com/medications/metformin",
        "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "bestRating": "5", "worstRating": "1", "reviewCount": "108", "ratingCount": "108" },
        "review": [
          { "@type": "Review", "author": { "@type": "Person", "name": "Andrew L." }, "datePublished": "2026-04-08", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Taking Metformin as part of my longevity stack. Fasting glucose dropped from 102 to 87 in 6 weeks. The physician oversight gives me confidence I'm doing this safely." },
          { "@type": "Review", "author": { "@type": "Person", "name": "Patricia M." }, "datePublished": "2026-03-25", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "My doctor mentioned Metformin for metabolic health but getting an appointment took months. Telehealth FX had me approved and receiving medication within a week. Excellent service." }
        ],
        "offers": { "@type": "Offer", "price": "39.00", "priceCurrency": "USD", "availability": "https://schema.org/InStock", "url": "https://telehealthfx.com/medications/metformin", shippingDetails, "hasMerchantReturnPolicy": returnPolicy }
      },
      // ── BreadcrumbList ──
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com/" },
          { "@type": "ListItem", "position": 2, "name": "Treatments", "item": "https://telehealthfx.com/#treatments" },
          { "@type": "ListItem", "position": 3, "name": "Testosterone Therapy", "item": "https://telehealthfx.com/medications/testosterone" },
          { "@type": "ListItem", "position": 4, "name": "Enclomiphene", "item": "https://telehealthfx.com/medications/enclomiphene" },
          { "@type": "ListItem", "position": 5, "name": "ED Treatment", "item": "https://telehealthfx.com/medications/ed" },
          { "@type": "ListItem", "position": 6, "name": "Hair Loss", "item": "https://telehealthfx.com/medications/hair-loss" },
          { "@type": "ListItem", "position": 7, "name": "Metformin", "item": "https://telehealthfx.com/medications/metformin" },
          { "@type": "ListItem", "position": 8, "name": "Health Articles", "item": "https://telehealthfx.com/blog" }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon.png?v=3" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(masterSchema) }} />
      </head>
      <body>
        <GoogleAnalytics gaId="G-Z7XPF8WRQ8" />
        <div id="root-header" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
          <AnnouncementBar />
          <Nav />
        </div>
        <div id="root-header-spacer" style={{ height: 112 }} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
