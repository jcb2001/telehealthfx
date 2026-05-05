import { BlogNadTherapyExplainedAntiAgingEnergyWeightLos } from "../../../components/blog-nad-therapy-explained-anti-aging-energy-weight-los.jsx";

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/blog/nad-therapy-explained-anti-aging-energy-weight-los/',
  },
  title: "NAD+ Therapy Explained: Anti-Aging, Energy & Weight Loss",
  description: "Discover how NAD+ powers your 'longevity genes' (sirtuins) and why it's the ultimate cellular complement to combat the fatigue of GLP-1 weight loss.",
  openGraph: {
    title: "NAD+ Therapy Explained: Anti-Aging, Energy & Weight Loss",
    description: "Discover how NAD+ powers your 'longevity genes' (sirtuins) and why it's the ultimate cellular complement to combat the fatigue of GLP-1 weight loss.",
    images: [
      {
        url: "https://telehealthfx.com/assets/nad_therapy_featured.png",
        width: 1024,
        height: 1024,
        alt: "NAD+ Therapy and Anti-Aging",
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
        "@id": "https://telehealthfx.com/blog/nad-therapy-explained-anti-aging-energy-weight-los/#article",
        "headline": "NAD+ Therapy Explained: Anti-Aging, Energy & Weight Loss",
        "description": "Discover how NAD+ powers your 'longevity genes' (sirtuins) and why it's the ultimate cellular complement to combat the fatigue of GLP-1 weight loss.",
        "image": "https://telehealthfx.com/assets/nad_therapy_featured.png",
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
          "@id": "https://telehealthfx.com/blog/nad-therapy-explained-anti-aging-energy-weight-los/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/nad-therapy-explained-anti-aging-energy-weight-los/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the main clinical takeaway regarding NAD+ Therapy Explained: Anti-Aging, Energy & Weight Loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This article provides a comprehensive clinical breakdown of NAD+ Therapy Explained: Anti-Aging, Energy & Weight Loss, detailing the exact mechanisms, safety protocols, and evidence-based research required for optimal metabolic health."
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
      <BlogNadTherapyExplainedAntiAgingEnergyWeightLos />
    </>
  );
}
