import { BlogTirzepatideReconstitutionCalculator } from "../../../components/blog-tirzepatide-reconstitution-calculator.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/tirzepatide-reconstitution-calculator/',
  },
  title: "Tirzepatide Reconstitution Calculator: Units to Mg Dosing",
  description: "Calculate exact tirzepatide reconstitution units, bacteriostatic water ratios, and syringe marks. Or get sterile, pre-mixed compounded tirzepatide for $258/mo.",
  openGraph: {
    title: "Tirzepatide Reconstitution Calculator: Units to Mg Dosing",
    description: "Calculate exact tirzepatide reconstitution units, bacteriostatic water ratios, and syringe marks. Or get sterile, pre-mixed compounded tirzepatide for $258/mo.",
    url: "https://telehealthfx.com/blog/tirzepatide-reconstitution-calculator/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/tirzepatide-reconstitution-calc-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Tirzepatide Reconstitution Calculator and Precision Dosing Guide",
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
        "url": "https://telehealthfx.com/blog/tirzepatide-reconstitution-calculator/",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst"
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
            "name": "Tirzepatide",
            "sameAs": "https://www.wikidata.org/wiki/Q107121759"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How many units of tirzepatide is 2.5 mg?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For a standard 10mg vial reconstituted with 2mL of bacteriostatic water (concentration of 5mg/mL), a 2.5mg starting dose equals exactly 50 units (0.5 mL) on a standard U-100 insulin syringe."
            }
          },
          {
            "@type": "Question",
            "name": "Can you use sterile water instead of bacteriostatic water for tirzepatide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Bacteriostatic water contains 0.9% benzyl alcohol which preserves multi-dose vials for up to 28 days refrigerated. Plain sterile water has no antimicrobial preservative and must be discarded within 4 hours."
            }
          },
          {
            "@type": "Question",
            "name": "How long does reconstituted tirzepatide last in the fridge?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Reconstituted tirzepatide mixed with bacteriostatic water remains stable and sterile for up to 28 days when kept refrigerated at 36°F to 46°F (2°C to 8°C)."
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
      <BlogTirzepatideReconstitutionCalculator />
    </>
  );
}
