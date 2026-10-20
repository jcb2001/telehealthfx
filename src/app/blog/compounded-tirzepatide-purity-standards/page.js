import { BlogCompoundedTirzepatidePurityStandards } from "../../../components/blog-compounded-tirzepatide-purity-standards.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Compounded Tirzepatide Purity Standards: HPLC Testing & Sterility (2026)",
  description: "Learn how compounded tirzepatide is synthesized and tested for purity. Explore USP <797> sterile protocols, HPLC assays, and transparent $129/mo flat care.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/compounded-tirzepatide-purity-standards/',
  },
  openGraph: {
    title: "Compounded Tirzepatide Purity Standards: HPLC Testing & Sterility (2026)",
    description: "Learn how compounded tirzepatide is synthesized and tested for purity. Explore USP <797> sterile protocols, HPLC assays, and transparent $129/mo flat care.",
    url: 'https://telehealthfx.com/blog/compounded-tirzepatide-purity-standards/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/compounded-tirzepatide-legality-featured.png",
        width: 1200,
        height: 675,
        alt: "Compounded Tirzepatide Purity and Sterility Standards",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://telehealthfx.com/#organization",
        "name": "Telehealth FX",
        "url": "https://telehealthfx.com",
        "logo": "https://telehealthfx.com/assets/logo.png"
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/compounded-tirzepatide-purity-standards/#webpage",
        "url": "https://telehealthfx.com/blog/compounded-tirzepatide-purity-standards/",
        "headline": metadata.title,
        "description": metadata.description,
        "datePublished": "2026-10-20",
        "dateModified": "2026-10-20",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst",
          "url": "https://telehealthfx.com/about/"
        },
        "publisher": {
          "@id": "https://telehealthfx.com/#organization"
        },
        "about": [
          {
            "@type": "Substance",
            "name": "Compounded Tirzepatide"
          },
          {
            "@type": "DrugClass",
            "name": "Dual GIP/GLP-1 Receptor Agonist"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Compounded Tirzepatide Protocol",
        "brand": {
          "@type": "Brand",
          "name": "Telehealth FX"
        },
        "offers": {
          "@type": "Offer",
          "price": "129.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://go.telehealthfx.com/coreage-glp1"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How is compounded tirzepatide verified for chemical purity?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Every batch undergoes High-Performance Liquid Chromatography (HPLC) mass spectrometry analysis to assert a purity level of at least 99.0% active peptide base, free of truncated sequence impurities."
            }
          },
          {
            "@type": "Question",
            "name": "What is the flat rate cost of compounded tirzepatide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Telehealth FX offers compounded tirzepatide for a flat rate of $129 per month across all dosage strengths (2.5mg up to 15.0mg), with zero membership fees and free cold-chain home shipping."
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
      <BlogCompoundedTirzepatidePurityStandards />
    </>
  );
}
