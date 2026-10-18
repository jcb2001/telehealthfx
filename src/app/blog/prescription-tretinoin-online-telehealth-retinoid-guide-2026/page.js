import { BlogPrescriptionTretinoin } from "../../../components/blog-prescription-tretinoin.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Prescription Tretinoin Online: Telehealth Guide & Cost (2026)",
  description: "Learn how to get prescription tretinoin online via telehealth. Compare compounded retinoic acid vs OTC retinol, dosage titration, and $42/mo flat pricing.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/prescription-tretinoin-online-telehealth-retinoid-guide-2026/',
  },
  openGraph: {
    title: "Prescription Tretinoin Online: Telehealth Guide & Cost (2026)",
    description: "Learn how to get prescription tretinoin online via telehealth. Compare compounded retinoic acid vs OTC retinol, dosage titration, and $42/mo flat pricing.",
    url: 'https://telehealthfx.com/blog/prescription-tretinoin-online-telehealth-retinoid-guide-2026/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/prescription-tretinoin-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Prescription Tretinoin Online Telehealth Dermatologist Guide",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/prescription-tretinoin-online-telehealth-retinoid-guide-2026/#webpage",
        "url": "https://telehealthfx.com/blog/prescription-tretinoin-online-telehealth-retinoid-guide-2026/",
        "headline": "Prescription Tretinoin Online: Telehealth Guide & Cost (2026)",
        "description": "Learn how to get prescription tretinoin online via telehealth. Compare compounded retinoic acid vs OTC retinol, dosage titration, and $42/mo flat pricing.",
        "datePublished": "2026-10-11",
        "dateModified": "2026-10-11",
        "image": "https://telehealthfx.com/assets/prescription-tretinoin-featured.jpg",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst",
          "url": "https://telehealthfx.com/about/"
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Marcus Vance, M.D.",
          "jobTitle": "Board-Certified Medical Director"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "url": "https://telehealthfx.com"
        },
        "about": [
          {
            "@type": "Drug",
            "name": "Tretinoin",
            "sameAs": "https://www.wikidata.org/wiki/Q387474"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/prescription-tretinoin-online-telehealth-retinoid-guide-2026/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you buy genuine prescription tretinoin online without a doctor visit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tretinoin requires a medical prescription. Through telehealth platforms like Telehealth FX, you complete a rapid online medical evaluation reviewed by a US-licensed doctor who issues the prescription directly to a partner compounding pharmacy."
            }
          },
          {
            "@type": "Question",
            "name": "Why is prescription tretinoin better than over-the-counter retinol?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Prescription tretinoin is pure all-trans retinoic acid that binds directly to skin cell receptors, making it approximately 20 times more potent than OTC retinol, which must undergo two enzymatic conversion steps in the skin."
            }
          },
          {
            "@type": "Question",
            "name": "How much does compounded tretinoin cost per month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Through Telehealth FX, custom compounded tretinoin formulated with soothing niacinamide and hyaluronic acid is available for $42 per month, which includes the physician consultation and free delivery."
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
      <BlogPrescriptionTretinoin />
    </>
  );
}
