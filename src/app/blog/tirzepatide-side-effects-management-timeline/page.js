import { BlogTirzepatideSideEffectsTimeline } from "../../../components/blog-tirzepatide-side-effects-timeline.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/tirzepatide-side-effects-management-timeline/',
  },
  title: "Tirzepatide Side Effects: Clinical Timeline & Relief",
  description: "Complete clinical guide to tirzepatide side effects, week-by-week timeline, nausea relief protocols, and sulfur burp mitigation from board-certified MDs.",
  openGraph: {
    title: "Tirzepatide Side Effects: Clinical Timeline & Relief",
    description: "Complete clinical guide to tirzepatide side effects, week-by-week timeline, nausea relief protocols, and sulfur burp mitigation from board-certified MDs.",
    url: "https://telehealthfx.com/blog/tirzepatide-side-effects-management-timeline/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/tirzepatide-side-effects-relief-featured.jpg",
        width: 1200,
        height: 675,
        alt: "Tirzepatide Side Effects Week by Week Timeline and Clinical Relief Protocols",
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
        "url": "https://telehealthfx.com/blog/tirzepatide-side-effects-management-timeline/",
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
            "name": "How long do tirzepatide side effects usually last?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For most patients, mild gastrointestinal side effects like nausea or diarrhea peak 24 to 48 hours after dose escalation and resolve within 2 to 4 weeks as the digestive tract acclimates to the incretin receptors."
            }
          },
          {
            "@type": "Question",
            "name": "What causes sulfur burps on tirzepatide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sulfur burps are caused by delayed gastric emptying. As digestion slows, sulfur-containing foods ferment in the stomach and produce hydrogen sulfide gas. Reducing portion sizes and avoiding high-sulfur foods temporarily cures the symptom."
            }
          },
          {
            "@type": "Question",
            "name": "Can I take nausea medication with tirzepatide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Board-certified physicians frequently prescribe non-drowsy anti-nausea medications like ondansetron (Zofran) to help patients tolerate introductory titration smoothly."
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
      <BlogTirzepatideSideEffectsTimeline />
    </>
  );
}
