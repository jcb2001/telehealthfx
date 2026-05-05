import { BlogGlp1AndMentalHealthAnxietyDepressionFoodNo } from "../../../components/blog-glp-1-and-mental-health-anxiety-depression-food-no.jsx";

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp-1-and-mental-health-anxiety-depression-food-no/',
  },
  title: "GLP-1 and Mental Health: Anxiety, Depression & Food Noise",
  description: "Explore the bidirectional link between obesity and depression, and how silencing 'food noise' creates profound shifts in psychological wellness.",
  openGraph: {
    title: "GLP-1 and Mental Health: Anxiety, Depression & Food Noise",
    description: "Explore the bidirectional link between obesity and depression, and how silencing 'food noise' creates profound shifts in psychological wellness.",
    images: [
      {
        url: "https://telehealthfx.com/assets/mental_health_featured.png",
        width: 1024,
        height: 1024,
        alt: "GLP-1 and Mental Health",
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
        "@id": "https://telehealthfx.com/blog/glp-1-and-mental-health-anxiety-depression-food-no/#article",
        "headline": "GLP-1 and Mental Health: Anxiety, Depression & Food Noise",
        "description": "Explore the bidirectional link between obesity and depression, and how silencing 'food noise' creates profound shifts in psychological wellness.",
        "image": "https://telehealthfx.com/assets/mental_health_featured.png",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "url": "https://telehealthfx.com/about",
          "jobTitle": "Lead Bio-Systems Analyst"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "logo": {
            "@type": "ImageObject",
            "url": "https://telehealthfx.com/assets/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://telehealthfx.com/blog/glp-1-and-mental-health-anxiety-depression-food-no/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/glp-1-and-mental-health-anxiety-depression-food-no/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the main clinical takeaway regarding GLP-1 and Mental Health: Anxiety, Depression & Food Noise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This article provides a comprehensive clinical breakdown of GLP-1 and Mental Health: Anxiety, Depression & Food Noise, detailing the exact mechanisms, safety protocols, and evidence-based research required for optimal metabolic health."
            }
          },
          {
            "@type": "Question",
            "name": "Are the treatments discussed in this guide safe and FDA-approved?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While specific FDA labels vary (e.g., Wegovy is approved for weight loss while Ozempic is for Type 2 Diabetes), all compounded medications discussed must be prescribed by a licensed healthcare provider and sourced from compliant 503A or 503B facilities."
            }
          },
          {
            "@type": "Question",
            "name": "How can I start a clinical protocol based on this research?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can begin your metabolic health journey by undergoing a comprehensive telehealth evaluation with a U.S.-licensed provider to determine if GLP-1 therapy or targeted botanical treatments are clinically appropriate for your unique physiology."
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
      <BlogGlp1AndMentalHealthAnxietyDepressionFoodNo />
    </>
  );
}
