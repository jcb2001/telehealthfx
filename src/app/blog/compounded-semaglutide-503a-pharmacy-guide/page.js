import { BlogCompoundedSemaglutide503aPharmacyGuide } from "../../../components/blog-compounded-semaglutide-503a-pharmacy-guide.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Compounded Semaglutide 503A Pharmacy Guide: Purity & Safety Standards (2026)",
  description: "Complete clinical guide to Section 503A compounding pharmacies for semaglutide. Learn about USP <797> sterile standards, base vs salt purity, and transparent $79/mo care.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/compounded-semaglutide-503a-pharmacy-guide/',
  },
  openGraph: {
    title: "Compounded Semaglutide 503A Pharmacy Guide: Purity & Safety Standards (2026)",
    description: "Complete clinical guide to Section 503A compounding pharmacies for semaglutide. Learn about USP <797> sterile standards, base vs salt purity, and transparent $79/mo care.",
    url: 'https://telehealthfx.com/blog/compounded-semaglutide-503a-pharmacy-guide/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/compounded-semaglutide-safety-fda-featured.png",
        width: 1200,
        height: 675,
        alt: "Compounded Semaglutide 503A Pharmacy Guide",
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
        "@id": "https://telehealthfx.com/blog/compounded-semaglutide-503a-pharmacy-guide/#webpage",
        "url": "https://telehealthfx.com/blog/compounded-semaglutide-503a-pharmacy-guide/",
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
            "name": "Compounded Semaglutide"
          },
          {
            "@type": "MedicalTherapy",
            "name": "GLP-1 Medical Weight Loss"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Compounded Semaglutide 503A Protocol",
        "brand": {
          "@type": "Brand",
          "name": "Telehealth FX"
        },
        "offers": {
          "@type": "Offer",
          "price": "79.00",
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
            "name": "What is a 503A compounding pharmacy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Section 503A compounding pharmacy is a state-board-regulated facility authorized under the Federal Food, Drug, and Cosmetic Act to prepare patient-specific prescription medications adhering to strict USP <795> and USP <797> sterile compounding regulations."
            }
          },
          {
            "@type": "Question",
            "name": "Is compounded semaglutide made from semaglutide salt or base?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Legitimate accredited 503A pharmacies exclusively use pure pharmaceutical-grade Semaglutide Base. The FDA warns against unapproved semaglutide sodium and acetate salts frequently sold by unauthorized research chemical suppliers."
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
      <BlogCompoundedSemaglutide503aPharmacyGuide />
    </>
  );
}
