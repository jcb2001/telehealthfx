import { BlogCompoundedAfterHimsRo } from "../../../components/blog-compounded-semaglutide-after-hims-ro-2026.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Compounded Semaglutide After Hims & Ro: 2026 Guide",
  description: "Hims and Ro discontinued compounded semaglutide. Learn 503A pharmacy rules, legal access, and how to switch care today without restarting titration.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026/',
  },
  openGraph: {
    title: "Compounded Semaglutide After Hims & Ro: 2026 Guide",
    description: "Hims and Ro discontinued compounded semaglutide. Learn 503A pharmacy rules, legal access, and how to switch care today without restarting titration.",
    url: 'https://telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/compounded-semaglutide-after-hims-ro-featured.png",
        width: 1200,
        height: 630,
        alt: "Compounded Semaglutide After Hims & Ro Stopped",
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
        "@id": "https://telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026/#webpage",
        "url": "https://telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026/",
        "headline": "Compounded Semaglutide After Hims & Ro: 2026 Guide",
        "description": "Hims and Ro discontinued compounded semaglutide. Learn 503A pharmacy rules, legal access, and how to switch care today without restarting titration.",
        "datePublished": "2026-05-07",
        "dateModified": "2026-05-07",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst",
          "url": "https://telehealthfx.com/about/"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".ai-extractive-answer", "[data-extractive-answer]", "h1"]
        },
        "about": [
          {
            "@type": "Drug",
            "name": "Semaglutide",
            "nonProprietaryName": "Semaglutide",
            "drugClass": {
              "@type": "DrugClass",
              "name": "GLP-1 Receptor Agonist"
            },
            "code": {
              "@type": "MedicalCode",
              "code": "1991302",
              "codingSystem": "RxNorm"
            },
            "sameAs": "https://mor.nlm.nih.gov/RxNav/search?searchBy=RXCUI&searchTerm=1991302"
          },
          {
            "@type": "MedicalCondition",
            "name": "Obesity",
            "code": {
              "@type": "MedicalCode",
              "code": "E66.9",
              "codingSystem": "ICD-10"
            },
            "sameAs": "https://icd.who.int/browse10/2019/en#/E66.9"
          }
        ],
        "mentions": [
          {
            "@type": "Legislation",
            "name": "Section 503A of the Federal Food, Drug, and Cosmetic Act",
            "legislationIdentifier": "21 U.S.C. § 353a",
            "sameAs": "https://www.fda.gov/drugs/human-drug-compounding/regulatory-policy-information"
          },
          {
            "@type": "MedicalOrganization",
            "name": "U.S. Food and Drug Administration (FDA)",
            "sameAs": "https://www.fda.gov"
          }
        ],
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX"
        }
      },
      {
        "@type": "SpeakableSpecification",
        "cssSelector": [".ai-extractive-answer", "[data-extractive-answer]", "h1"]
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/compounded-semaglutide-after-hims-ro-2026/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can you still get compounded semaglutide after Hims and Ro stopped?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. While Hims and Ro phased out bulk 503B compounding, state-licensed 503A compounding pharmacies continue to legally dispense customized, patient-specific semaglutide prescriptions nationwide under Section 503A of the FD&C Act."
            }
          },
          {
            "@type": "Question",
            "name": "Why did Hims and Ro stop offering compounded semaglutide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Hims and Ro relied primarily on mass-manufactured 503B outsourcing batches. When the FDA resolved the official semaglutide shortage list, 503B bulk exemptions expired, forcing these mass-market platforms to pivot toward expensive brand-name medications."
            }
          },
          {
            "@type": "Question",
            "name": "Will I have to restart my dose from 0.25mg if I switch from Ro or Hims?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Telehealth FX clinicians verify your documented prescription history and seamlessly match your current maintenance dose (such as 0.5mg, 1.0mg, 1.7mg, or 2.4mg) without requiring you to restart titration."
            }
          },
          {
            "@type": "Question",
            "name": "How much does compounded semaglutide cost after switching?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Compounded semaglutide through Telehealth FX starts at $146 per month all-inclusive, covering physician consultations, medication, injection supplies, and cold-pack home shipping with zero hidden membership fees."
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
      <BlogCompoundedAfterHimsRo />
    </>
  );
}
