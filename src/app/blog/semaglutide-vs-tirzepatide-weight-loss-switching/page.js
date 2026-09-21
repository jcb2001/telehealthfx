import { BlogSemaglutideVsTirzepatideSwitching } from "../../../components/blog-semaglutide-vs-tirzepatide-switching.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/semaglutide-vs-tirzepatide-weight-loss-switching/',
  },
  title: "Semaglutide vs Tirzepatide: Weight Loss & Switching Guide",
  description: "Compare semaglutide and tirzepatide for weight loss, clinical trial efficacy, side effects, and cost. Learn how to switch safely with Telehealth FX pricing.",
  openGraph: {
    title: "Semaglutide vs Tirzepatide: Weight Loss & Switching Guide",
    description: "Compare semaglutide and tirzepatide for weight loss, clinical trial efficacy, side effects, and cost. Learn how to switch safely with Telehealth FX pricing.",
    url: "https://telehealthfx.com/blog/semaglutide-vs-tirzepatide-weight-loss-switching/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/semaglutide-vs-tirzepatide-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Semaglutide vs Tirzepatide Clinical Weight Loss Comparison and Switching Guide",
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
        "url": "https://telehealthfx.com/blog/semaglutide-vs-tirzepatide-weight-loss-switching/",
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
            "name": "Semaglutide",
            "sameAs": "https://www.wikidata.org/wiki/Q423082"
          },
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
            "name": "Is tirzepatide more effective for weight loss than semaglutide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. In clinical trials, patients taking 15mg tirzepatide achieved an average of 20.9% body weight reduction (SURMOUNT-1), compared to 14.9% with 2.4mg semaglutide (STEP-1), due to tirzepatide's dual GLP-1 and GIP receptor agonism."
            }
          },
          {
            "@type": "Question",
            "name": "Can you switch from semaglutide to tirzepatide if you hit a plateau?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Many patients switch to tirzepatide after hitting a weight loss plateau on semaglutide. A medical provider will cross-titrate your dose (typically starting at 2.5mg or 5.0mg tirzepatide depending on your current semaglutide dose) to maintain progress without digestive distress."
            }
          },
          {
            "@type": "Question",
            "name": "Does tirzepatide have worse side effects than semaglutide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clinical trials indicate tirzepatide often has comparable or slightly lower rates of nausea and vomiting than semaglutide, as GIP receptor activation appears to modulate central nausea signaling while enhancing metabolic satiety."
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
      <BlogSemaglutideVsTirzepatideSwitching />
    </>
  );
}
