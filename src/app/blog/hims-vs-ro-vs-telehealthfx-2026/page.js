import { BlogHimsVsRoVsTelehealthFX } from "../../../components/blog-hims-vs-ro-vs-telehealthfx-2026.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Hims vs Ro vs TelehealthFX: 2026 GLP-1 Provider Review",
  description: "Hims and Ro discontinued compounded semaglutide. Side-by-side comparison of 2026 pricing, 503A compounding access, clinician consultations, and delivery speed.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/hims-vs-ro-vs-telehealthfx-2026/',
  },
  openGraph: {
    title: "Hims vs Ro vs TelehealthFX: 2026 GLP-1 Provider Review",
    description: "Hims and Ro discontinued compounded semaglutide. Side-by-side comparison of 2026 pricing, 503A compounding access, clinician consultations, and delivery speed.",
    url: 'https://telehealthfx.com/blog/hims-vs-ro-vs-telehealthfx-2026/',
    siteName: 'Telehealth FX',
    images: [{ url: "https://telehealthfx.com/assets/hims-vs-ro-vs-telehealthfx-featured.png", width: 1200, height: 630, alt: "Hims vs Ro vs TelehealthFX Comparison" }],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/hims-vs-ro-vs-telehealthfx-2026/#webpage",
        "url": "https://telehealthfx.com/blog/hims-vs-ro-vs-telehealthfx-2026/",
        "headline": "Hims vs Ro vs TelehealthFX: 2026 GLP-1 Provider Review",
        "description": "Hims and Ro discontinued compounded semaglutide. Side-by-side comparison of 2026 pricing, 503A compounding access, clinician consultations, and delivery speed.",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst",
          "url": "https://telehealthfx.com/about"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/hims-vs-ro-vs-telehealthfx-2026/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which telehealth provider is best for GLP-1 weight loss: Hims, Ro, or Telehealth FX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Telehealth FX offers the lowest all-inclusive price starting at $146/month with 503A compounded semaglutide, zero monthly membership fees, and included cold-chain shipping, whereas Hims and Ro charge separate monthly membership dues ($99-$145) plus high brand-name prescription costs."
            }
          },
          {
            "@type": "Question",
            "name": "Can I transfer my Hims or Ro prescription to TelehealthFX without restarting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Telehealth FX clinicians review your prior prescription history and transition you directly to your current maintenance dose (e.g. 0.5mg, 1.0mg, 1.7mg, 2.4mg) within 24 hours, avoiding any gap in therapy or titration reset."
            }
          },
          {
            "@type": "Question",
            "name": "Do Hims and Ro still sell compounded semaglutide in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Both Hims and Ro discontinued their compounded GLP-1 programs following FDA regulatory enforcement on 503B mass compounding, shifting patients to brand-name Wegovy and Zepbound navigation."
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
      <BlogHimsVsRoVsTelehealthFX />
    </>
  );
}
