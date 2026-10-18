import { BlogOralGlp1Tablets } from "../../../components/blog-oral-glp1-tablets.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Oral GLP-1 Dissolving Tablets vs Injections: 2026 Clinical Guide",
  description: "Complete guide to sublingual GLP-1 dissolving tablets. Compare oral semaglutide pills vs weekly injections, weight loss efficacy, and $149/mo flat pricing.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/oral-glp-1-sublingual-tablets-vs-injections-2026/',
  },
  openGraph: {
    title: "Oral GLP-1 Dissolving Tablets vs Injections: 2026 Clinical Guide",
    description: "Complete guide to sublingual GLP-1 dissolving tablets. Compare oral semaglutide pills vs weekly injections, weight loss efficacy, and $149/mo flat pricing.",
    url: 'https://telehealthfx.com/blog/oral-glp-1-sublingual-tablets-vs-injections-2026/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/oral-glp1-tablets-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Oral GLP-1 Sublingual Dissolving Tablets Clinical Comparison Guide",
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
        "@id": "https://telehealthfx.com/blog/oral-glp-1-sublingual-tablets-vs-injections-2026/#webpage",
        "url": "https://telehealthfx.com/blog/oral-glp-1-sublingual-tablets-vs-injections-2026/",
        "headline": "Oral GLP-1 Dissolving Tablets vs Injections: 2026 Clinical Guide",
        "description": "Complete guide to sublingual GLP-1 dissolving tablets. Compare oral semaglutide pills vs weekly injections, weight loss efficacy, and $149/mo flat pricing.",
        "datePublished": "2026-10-11",
        "dateModified": "2026-10-11",
        "image": "https://telehealthfx.com/assets/oral-glp1-tablets-featured.jpg",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst",
          "url": "https://telehealthfx.com/about/"
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
            "name": "Semaglutide",
            "sameAs": "https://www.wikidata.org/wiki/Q423082"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/oral-glp-1-sublingual-tablets-vs-injections-2026/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do sublingual GLP-1 tablets work as well as Ozempic injections?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Sublingual dissolving tablets deliver active semaglutide directly into the bloodstream through the sublingual mucosal capillaries, achieving 12% to 15% average body weight loss with steady daily levels and significantly fewer nausea peaks."
            }
          },
          {
            "@type": "Question",
            "name": "Do oral GLP-1 dissolving tablets require refrigeration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Unlike injectable semaglutide, compounded sublingual tablets are room-temperature stable, making them ideal for traveling and patients who do not want refrigerated medication in their home."
            }
          },
          {
            "@type": "Question",
            "name": "How much do sublingual semaglutide tablets cost per month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sublingual semaglutide tablets are available through Telehealth FX for a flat rate of $149 per month, which includes all doctor telehealth evaluations, prescriptions, and free home shipping."
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
      <BlogOralGlp1Tablets />
    </>
  );
}
