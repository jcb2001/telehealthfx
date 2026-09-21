import { CompareTelehealthFxVsHenryMeds } from "../../../components/compare-telehealth-fx-vs-henry-meds.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/compare/telehealth-fx-vs-henry-meds-cost/',
  },
  title: "Telehealth FX vs Henry Meds: 2026 GLP-1 Price Audit",
  description: "Compare Telehealth FX vs Henry Meds pricing. Save up to $191/month on compounded Tirzepatide with flat $258 pricing, zero consult fees, and free shipping.",
  openGraph: {
    title: "Telehealth FX vs Henry Meds: 2026 GLP-1 Price Audit",
    description: "Compare Telehealth FX vs Henry Meds pricing. Save up to $191/month on compounded Tirzepatide with flat $258 pricing, zero consult fees, and free shipping.",
    url: "https://telehealthfx.com/compare/telehealth-fx-vs-henry-meds-cost/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/telehealthfx-vs-henry-meds-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Telehealth FX vs Henry Meds GLP-1 Price Comparison",
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
        "name": metadata.title,
        "description": metadata.description,
        "url": "https://telehealthfx.com/compare/telehealth-fx-vs-henry-meds-cost/",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Clinical Healthcare Economics Lead"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "url": "https://telehealthfx.com"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does Henry Meds charge for tirzepatide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Henry Meds charges $449 per month for injectable compounded tirzepatide. In contrast, Telehealth FX offers identical 503A compounded tirzepatide for a flat $258 per month across all doses, saving patients $191 each month."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX compounded semaglutide the same quality as Henry Meds?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Both Telehealth FX and Henry Meds work with state-licensed 503A compounding pharmacies that source pure active pharmaceutical ingredient (API) powder meeting United States Pharmacopeia (USP) standards."
            }
          },
          {
            "@type": "Question",
            "name": "Can I transfer my prescription from Henry Meds to Telehealth FX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Telehealth FX provides seamless prescription dose matching. Upload your existing Henry Meds vial or prescription details during online checkout, and our licensed providers will match your active maintenance dose."
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
      <CompareTelehealthFxVsHenryMeds />
    </>
  );
}
