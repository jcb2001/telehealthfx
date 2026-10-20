import { BlogFlatRateSemaglutideNoDosageIncreaseFees } from "../../../components/blog-flat-rate-semaglutide-no-dosage-increase-fees.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Flat-Rate Semaglutide: Why You Should Never Pay Dosage Escalation Fees (2026)",
  description: "Stop getting penalized for increasing your GLP-1 dose. Compare clinic escalation markups against Telehealth FX flat $79/mo semaglutide across all doses.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/flat-rate-semaglutide-no-dosage-increase-fees/',
  },
  openGraph: {
    title: "Flat-Rate Semaglutide: Why You Should Never Pay Dosage Escalation Fees (2026)",
    description: "Stop getting penalized for increasing your GLP-1 dose. Compare clinic escalation markups against Telehealth FX flat $79/mo semaglutide across all doses.",
    url: 'https://telehealthfx.com/blog/flat-rate-semaglutide-no-dosage-increase-fees/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/direct_pay_semaglutide.jpg",
        width: 1200,
        height: 675,
        alt: "Flat-Rate Semaglutide Care with Zero Dosage Escalation Fees",
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
        "@id": "https://telehealthfx.com/blog/flat-rate-semaglutide-no-dosage-increase-fees/#webpage",
        "url": "https://telehealthfx.com/blog/flat-rate-semaglutide-no-dosage-increase-fees/",
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
            "@type": "PriceSpecification",
            "price": "79.00",
            "priceCurrency": "USD"
          }
        ]
      },
      {
        "@type": "Product",
        "name": "Flat-Rate Semaglutide Telehealth Program",
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
            "name": "Does the price of semaglutide increase as my dose goes up?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "At Telehealth FX, no. The price is strictly $79 per month flat across all dosage strengths, including starter doses (0.25mg) and maximum therapeutic maintenance doses (2.4mg)."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any hidden doctor consultation or membership fees?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Telehealth FX charges exactly $0 in monthly membership fees and $0 for doctor consultations. Your $79/mo covers clinical review, medication, supplies, and free cold-chain home delivery."
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
      <BlogFlatRateSemaglutideNoDosageIncreaseFees />
    </>
  );
}
