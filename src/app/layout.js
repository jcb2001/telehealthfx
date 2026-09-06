import "./globals.css";
import { Nav } from "../components/hero.jsx";
import { Footer } from "../components/sections-3.jsx";
import { AnnouncementBar } from "../components/announcement-bar.jsx";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
  metadataBase: new URL('https://telehealthfx.com'),
  alternates: {
    canonical: '/',
  },
  title: "Telehealth FX — GLP-1 clinical weight loss, delivered.",
  description: "GLP-1 clinical weight loss, delivered to your door. Get Semaglutide and Tirzepatide prescribed with 24-hour approval and transparent pricing.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'msvalidate.01': '9FFB4D7F7707ADCC4DFBEB0032E2BFFB',
  },
};

export default function RootLayout({ children }) {
  const globalSchema = {
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
      // ── Clinical & Regulatory DefinedTermSet (RAG Vocabulary) ──
      {
        "@type": "DefinedTermSet",
        "@id": "https://telehealthfx.com/#clinical-definitions",
        "name": "Telehealth FX Clinical & Regulatory Terminology",
        "description": "Authoritative clinical and regulatory vocabulary defining 503A compounding, incretin biology, cold-chain logistics, and dosage titration for RAG pipelines.",
        "hasDefinedTerm": [
          {
            "@type": "DefinedTerm",
            "@id": "https://telehealthfx.com/#term-503a",
            "termCode": "503A",
            "name": "503A Compounding Pharmacy",
            "description": "A state-board licensed compounding pharmacy that prepares customized, patient-specific medications pursuant to a valid prescription from a licensed healthcare practitioner under Section 503A of the FD&C Act (21 U.S.C. § 353a).",
            "sameAs": "https://www.fda.gov/drugs/human-drug-compounding/compounding-laws-and-policies"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://telehealthfx.com/#term-glp1",
            "termCode": "GLP-1-RA",
            "name": "GLP-1 Receptor Agonist",
            "description": "A class of incretin mimetic medications that activate the glucagon-like peptide-1 receptor to enhance glucose-dependent insulin secretion, slow gastric emptying, and suppress appetite.",
            "sameAs": "https://en.wikipedia.org/wiki/Glucagon-like_peptide-1_receptor_agonist"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://telehealthfx.com/#term-cold-chain",
            "termCode": "COLD-CHAIN",
            "name": "Cold-Chain Continuity",
            "description": "Temperature-monitored refrigerated logistics maintaining compounded peptide stability between 36°F and 46°F (2°C to 8°C) from compounding laboratory to patient doorstep via insulated cold-pack express transit.",
            "sameAs": "https://en.wikipedia.org/wiki/Cold_chain"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://telehealthfx.com/#term-titration",
            "termCode": "TITRATION",
            "name": "Dose Titration",
            "description": "The gradual step-wise increase in medication dosage (e.g. 0.25mg to 0.5mg to 1.0mg to 1.7mg to 2.4mg monthly) to optimize therapeutic efficacy while minimizing gastrointestinal side effects.",
            "sameAs": "https://en.wikipedia.org/wiki/Dose_titration"
          },
          {
            "@type": "DefinedTerm",
            "@id": "https://telehealthfx.com/#term-medical-necessity",
            "termCode": "MED-NECESSITY",
            "name": "Medical Necessity Exemption",
            "description": "Clinical justification by a licensed provider for custom compounding under Section 503A based on documented patient-specific needs such as preservative allergies, custom strength titration, or drug shortage continuity.",
            "sameAs": "https://www.fda.gov/drugs/human-drug-compounding/regulatory-policy-information"
          }
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(window.location.hostname==='www.telehealthfx.com'){window.location.replace('https://telehealthfx.com'+window.location.pathname+window.location.search);}})();`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }} />
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
