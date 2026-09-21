import { CompareTelehealthFxVsRoHims } from "../../../components/compare-telehealth-fx-vs-ro-hims.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/compare/telehealth-fx-vs-ro-hims-glp1-cost/',
  },
  title: "Telehealth FX vs Ro and Hims: GLP-1 Cost Comparison 2026",
  description: "Compare GLP-1 weight loss costs across Telehealth FX, Ro, and Hims. Flat $146 semaglutide and $258 tirzepatide with zero membership fees save $1,800/year.",
  openGraph: {
    title: "Telehealth FX vs Ro and Hims: GLP-1 Cost Comparison 2026",
    description: "Compare GLP-1 weight loss costs across Telehealth FX, Ro, and Hims. Flat $146 semaglutide and $258 tirzepatide with zero membership fees save $1,800/year.",
    url: "https://telehealthfx.com/compare/telehealth-fx-vs-ro-hims-glp1-cost/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/telehealthfx-vs-ro-hims-cost-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Telehealth FX vs Ro and Hims GLP-1 Weight Loss Cost Comparison",
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
        "url": "https://telehealthfx.com/compare/telehealth-fx-vs-ro-hims-glp1-cost/",
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
            "name": "Does Telehealth FX charge a monthly membership fee like Ro?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Telehealth FX charges exactly $0 in monthly membership fees. Consultations, clinical support, and doctor messaging are completely free. You pay only for the medication prescribed ($146/mo for Semaglutide or $258/mo for Tirzepatide)."
            }
          },
          {
            "@type": "Question",
            "name": "Can I transfer my GLP-1 prescription from Ro or Hims without restarting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Telehealth FX offers a seamless dose-matching transfer protocol. Simply upload a picture of your current vial or prescription label during intake, and our licensed clinicians will match your active maintenance dose."
            }
          },
          {
            "@type": "Question",
            "name": "Does Telehealth FX increase medication prices at higher titration doses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Telehealth FX provides an absolute Price Freeze Guarantee. Compounded Semaglutide is flat $146/month and Tirzepatide is flat $258/month across all doses, from starting doses up to maximum therapeutic maintenance levels."
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
      <CompareTelehealthFxVsRoHims />
    </>
  );
}
