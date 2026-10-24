import { CompareTelehealthFxVsMochi } from "../../../components/compare-telehealth-fx-vs-mochi.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/compare/telehealth-fx-vs-mochi-health-cost/',
    languages: {
      'en-US': 'https://telehealthfx.com/compare/telehealth-fx-vs-mochi-health-cost/',
      'es-US': 'https://telehealthfx.com/es/compare/telehealth-fx-vs-mochi-health-cost/',
      'x-default': 'https://telehealthfx.com/compare/telehealth-fx-vs-mochi-health-cost/',
    },
  },
  title: "Telehealth FX vs Mochi Health: 2026 GLP-1 Cost Comparison",
  description: "Compare GLP-1 costs between Telehealth FX and Mochi Health. Learn how zero membership fees and promo rates from $69/mo semaglutide save patients up to $1,800+ annually.",
  openGraph: {
    title: "Telehealth FX vs Mochi Health: 2026 GLP-1 Cost Comparison",
    description: "Compare GLP-1 costs between Telehealth FX and Mochi Health. Learn how zero membership fees and promo rates from $69/mo semaglutide save patients up to $1,800+ annually.",
    url: "https://telehealthfx.com/compare/telehealth-fx-vs-mochi-health-cost/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/telehealthfx-vs-mochi-cost-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Telehealth FX vs Mochi Health Cost Comparison and Membership Audit",
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
        "url": "https://telehealthfx.com/compare/telehealth-fx-vs-mochi-health-cost/",
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
            "name": "Does Mochi Health charge a separate membership fee?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Mochi Health requires an obligatory $79 per month subscription fee in addition to medication costs ($175/mo for semaglutide, $275/mo for tirzepatide), adding $948 per year in overhead."
            }
          },
          {
            "@type": "Question",
            "name": "How does Telehealth FX compare on tirzepatide pricing vs Mochi?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Telehealth FX offers compounded tirzepatide starting from $119/month promo with zero membership fees and $0 consults. In contrast, Mochi charges $275 for medication plus a mandatory $79 subscription, totaling $354/month ($235/month more during month 1)."
            }
          },
          {
            "@type": "Question",
            "name": "Can I transfer my active prescription from Mochi Health?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Simply upload a photo of your current Mochi prescription label or medication vial during online intake, and our licensed clinicians will match your active dose without restarting titration."
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
      <CompareTelehealthFxVsMochi />
    </>
  );
}
