import React from 'react';
import { BlogShortageTracker } from '../../components/blog-shortage-tracker-2026.jsx';

export const metadata = {
  title: "GLP-1 Shortage & Compounding Ban Tracker: Current Status (2026) | Telehealth FX",
  description: "As of mid-2026, no GLP-1 medications are in shortage. Semaglutide and tirzepatide are available. See the current FDA status, why compounded GLP-1 access tightened, and what your options are now.",
  alternates: {
    canonical: "https://telehealthfx.com/glp-1-shortage-tracker-2026/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "GLP-1 Shortage & Compounding Ban Tracker: Current Status (2026)",
    description: "As of mid-2026, no GLP-1 medications are in shortage. See the current FDA status, why compounded GLP-1 access tightened, and what your options are now.",
    images: [{ url: "https://telehealthfx.com/assets/shortage-tracker-hero.png", width: 1200, height: 630, alt: "GLP-1 shortage tracker 2026" }],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/glp-1-shortage-tracker-2026/#article",
        "headline": "GLP-1 Shortage & Compounding Ban Tracker: Current Status (2026)",
        "description": "As of mid-2026, no GLP-1 medications are in shortage. Semaglutide and tirzepatide are available. See the current FDA status, why compounded GLP-1 access tightened, and what your options are now.",
        "image": "https://telehealthfx.com/assets/shortage-tracker-hero.png",
        "datePublished": "2026-06-05",
        "dateModified": "2026-06-05",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "url": "https://telehealthfx.com/about",
          "jobTitle": "Lead Bio-Systems Analyst"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "logo": {
            "@type": "ImageObject",
            "url": "https://telehealthfx.com/assets/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://telehealthfx.com/glp-1-shortage-tracker-2026/"
        },
        "about": [
          { "@type": "Drug", "name": "Semaglutide (Ozempic / Wegovy)" },
          { "@type": "Drug", "name": "Tirzepatide (Mounjaro / Zepbound)" }
        ],
        "audience": {
          "@type": "MedicalAudience",
          "audienceType": "Patient"
        },
        "lastReviewed": "2026-06-05"
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/glp-1-shortage-tracker-2026/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is there still an Ozempic shortage in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Semaglutide, the active ingredient in Ozempic and Wegovy, is no longer on the FDA drug shortage list. Individual pharmacies may occasionally be out of a specific dose, but there is no national shortage."
            }
          },
          {
            "@type": "Question",
            "name": "Is there still a Wegovy shortage in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Wegovy's active ingredient, semaglutide, is listed as available. The shortage that affected it in 2023 and 2024 resolved in early 2025."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a Zepbound or Mounjaro shortage in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Tirzepatide, the active ingredient in both, came off the FDA shortage list in late 2024 and remains available."
            }
          },
          {
            "@type": "Question",
            "name": "Why can't I get compounded semaglutide anymore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compounded versions were widely available only because of the official shortage. Once semaglutide came off the shortage list in 2025, the exemption that allowed large-scale compounding expired, and routine compounding of it is no longer permitted."
            }
          },
          {
            "@type": "Question",
            "name": "Is compounded tirzepatide banned?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "There was no single ban. Once tirzepatide's shortage resolved, the legal basis for compounding it at scale ended. Limited, prescriber-driven compounding for a documented individual clinical need can still exist, but mass-market compounded tirzepatide is no longer permitted."
            }
          },
          {
            "@type": "Question",
            "name": "Is Hims shutting down?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Hims & Hers is not closing. What changed is that, after the shortage ended, the company and others across the industry had to curtail their compounded GLP-1 offerings, and Novo Nordisk ended a partnership with the company in 2025."
            }
          },
          {
            "@type": "Question",
            "name": "Are compounded GLP-1 medications FDA-approved?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Compounded medications are not FDA-approved, and the FDA does not evaluate them for safety, effectiveness, or quality."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogShortageTracker />
    </>
  );
}
