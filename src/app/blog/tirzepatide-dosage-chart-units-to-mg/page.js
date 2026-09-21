import { BlogTirzepatideDosageChartUnits } from "../../../components/blog-tirzepatide-dosage-chart-units.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/tirzepatide-dosage-chart-units-to-mg/',
  },
  title: "Tirzepatide Dosage Chart: Units, Milligrams & Schedule",
  description: "Complete tirzepatide dosage chart detailing titration schedules from 2.5mg to 15mg in syringe units. Learn injection timing and flat $258/month pricing.",
  openGraph: {
    title: "Tirzepatide Dosage Chart: Units, Milligrams & Schedule",
    description: "Complete tirzepatide dosage chart detailing titration schedules from 2.5mg to 15mg in syringe units. Learn injection timing and flat $258/month pricing.",
    url: "https://telehealthfx.com/blog/tirzepatide-dosage-chart-units-to-mg/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/tirzepatide-dosage-chart-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Tirzepatide Dosage Chart Units Milligrams and Titration Schedule",
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
        "url": "https://telehealthfx.com/blog/tirzepatide-dosage-chart-units-to-mg/",
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
            "name": "What is the standard starting dose for tirzepatide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The standard clinical initiation dose is 2.5 mg injected subcutaneously once weekly for the first 4 weeks to allow the digestive system to acclimate before escalating to the 5.0 mg therapeutic dose."
            }
          },
          {
            "@type": "Question",
            "name": "How many units is 5mg of tirzepatide on an insulin syringe?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "On a standard 10mg/mL concentration vial, a 5.0mg dose equals exactly 50 units (0.50 mL) on a U-100 syringe. If using a 20mg/mL vial, 5.0mg equals 25 units (0.25 mL)."
            }
          },
          {
            "@type": "Question",
            "name": "Where is the best place to inject tirzepatide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The recommended subcutaneous injection sites are the abdomen (at least 2 inches away from the belly button), the front of the thighs, or the back of the upper arms, rotating sites weekly."
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
      <BlogTirzepatideDosageChartUnits />
    </>
  );
}
