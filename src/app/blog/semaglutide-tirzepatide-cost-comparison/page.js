import { BlogSemaglutideCostComparison } from "../../../components/blog-semaglutide-tirzepatide-cost-comparison.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Semaglutide Cost Comparison: Total Out of Pocket Breakdown",
  description: "Complete semaglutide cost comparison across retail, insurance, and telehealth. See how $99/mo promo and transparent cash rates save thousands over brand names.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/semaglutide-tirzepatide-cost-comparison/',
  },
  openGraph: {
    title: "Semaglutide Cost Comparison: Total Out of Pocket Breakdown",
    description: "Complete semaglutide cost comparison across retail, insurance, and telehealth. See how $99/mo promo and transparent cash rates save thousands over brand names.",
    url: 'https://telehealthfx.com/blog/semaglutide-tirzepatide-cost-comparison/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/semaglutide_cost_comparison.jpg",
        width: 1200,
        height: 675,
        alt: "Semaglutide Cost Comparison: Total Out of Pocket Breakdown",
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
        "@id": "https://telehealthfx.com/blog/semaglutide-tirzepatide-cost-comparison/#webpage",
        "url": "https://telehealthfx.com/blog/semaglutide-tirzepatide-cost-comparison/",
        "headline": "Semaglutide Cost Comparison: Total Out of Pocket Breakdown",
        "description": "Complete semaglutide cost comparison across retail, insurance, and telehealth. See how $99/mo promo and transparent cash rates save thousands over brand names.",
        "datePublished": "2026-09-16",
        "dateModified": "2026-09-16",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst",
          "url": "https://telehealthfx.com/about/"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".direct-answer-snippet", "h1"]
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "url": "https://telehealthfx.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/semaglutide-tirzepatide-cost-comparison/#faq",
        "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the price difference between compounded semaglutide and tirzepatide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Telehealth FX, both injectable medications start at a $99 first month promotional rate. For ongoing maintenance, semaglutide is $190 to $199 per month, while dual-agonist tirzepatide is $214 to $299 per month."
          }
        },
        {
          "@type": "Question",
          "name": "Why does tirzepatide cost slightly more than semaglutide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Tirzepatide is a dual GIP and GLP-1 receptor co-agonist with a more complex 39-amino-acid peptide sequence, which requires advanced synthesis protocols while producing higher mean weight loss (up to 20.9% vs 14.9%)."
          }
        },
        {
          "@type": "Question",
          "name": "Do prices increase when I move to higher doses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Competitor platforms often double prices at maximum doses. Telehealth FX guarantees consistent flat-rate pricing regardless of whether you are on starter doses or maximum maintenance doses."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the monthly cost at Telehealth FX?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every order includes your physician consultation, valid prescription, medication vial, sterile 31G insulin syringes, alcohol swabs, and temperature-controlled 2-day shipping."
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
      <BlogSemaglutideCostComparison />
    </>
  );
}
