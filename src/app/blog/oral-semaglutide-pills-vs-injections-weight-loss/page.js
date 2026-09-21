import { BlogOralSemaglutidePillsVsInjections } from "../../../components/blog-oral-semaglutide-pills-vs-injections.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/oral-semaglutide-pills-vs-injections-weight-loss/',
  },
  title: "Oral Semaglutide vs Injections: Dosing & Results Guide",
  description: "Compare oral semaglutide pills vs subcutaneous injections. Analyze bioabsorption rates, clinical weight loss outcomes, and transparent $99/mo direct pricing.",
  openGraph: {
    title: "Oral Semaglutide vs Injections: Dosing & Results Guide",
    description: "Compare oral semaglutide pills vs subcutaneous injections. Analyze bioabsorption rates, clinical weight loss outcomes, and transparent $99/mo direct pricing.",
    url: "https://telehealthfx.com/blog/oral-semaglutide-pills-vs-injections-weight-loss/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/oral-vs-injectable-semaglutide-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Oral Semaglutide Pills vs Subcutaneous Weekly Injections",
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
        "@id": "https://telehealthfx.com/blog/oral-semaglutide-pills-vs-injections-weight-loss/#webpage",
        "url": "https://telehealthfx.com/blog/oral-semaglutide-pills-vs-injections-weight-loss/",
        "name": "Oral Semaglutide vs Injections: Dosing & Results Guide",
        "description": "Compare oral semaglutide pills vs subcutaneous injections. Analyze bioabsorption rates, clinical weight loss outcomes, and transparent $99/mo direct pricing.",
        "isPartOf": {
          "@id": "https://telehealthfx.com/#website"
        },
        "inLanguage": "en-US",
        "lastReviewed": "2026-09-20",
        "reviewedBy": {
          "@type": "Organization",
          "name": "Telehealth FX Pharmacotherapy Review Board"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/oral-semaglutide-pills-vs-injections-weight-loss/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is oral semaglutide less effective than subcutaneous injections?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Semaglutide is a peptide that gets broken down by stomach acid and digestive enzymes. Even with chemical absorption enhancers like SNAC, oral bioavailability remains under 1%, whereas subcutaneous injections provide roughly 89% bioavailability."
            }
          },
          {
            "@type": "Question",
            "name": "How much weight do patients lose on injections vs oral pills?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clinical trials (STEP-1) show an average of 14.9% to 16.9% body weight reduction with weekly subcutaneous semaglutide injections, compared to 8% to 10% weight loss with maximum-dose oral tablets."
            }
          },
          {
            "@type": "Question",
            "name": "How much does injectable semaglutide cost with Telehealth FX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Injectable compounded semaglutide is available for an introductory $99 promotional price for your first month, and a flat $146/month across all subsequent doses with zero membership dues."
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
      <BlogOralSemaglutidePillsVsInjections />
    </>
  );
}
