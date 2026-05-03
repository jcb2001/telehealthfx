import { BlogWeightLossForWomenOver40HowGlp1CanHelp2 } from "../../../components/blog-weight-loss-for-women-over-40-how-glp-1-can-help-2.jsx";

export const metadata = {
  title: "Weight Loss for Women Over 40: How GLP-1 Changes the Game",
  description: "Discover why 'eat less, move more' stops working after 40, and how modern GLP-1 therapy addresses the biological drivers of midlife weight gain.",
  openGraph: {
    title: "Weight Loss for Women Over 40: How GLP-1 Changes the Game",
    description: "Discover why 'eat less, move more' stops working after 40, and how modern GLP-1 therapy addresses the biological drivers of midlife weight gain.",
    images: [
      {
        url: "https://telehealthfx.com/assets/women_over_40_featured.png",
        width: 1024,
        height: 1024,
        alt: "Women Over 40 GLP-1 Weight Loss",
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
        "@id": "https://telehealthfx.com/blog/weight-loss-for-women-over-40-how-glp-1-can-help-2/#article",
        "headline": "Weight Loss for Women Over 40: How GLP-1 Changes the Game",
        "description": "Discover why 'eat less, move more' stops working after 40, and how modern GLP-1 therapy addresses the biological drivers of midlife weight gain.",
        "image": "https://telehealthfx.com/assets/women_over_40_featured.png",
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
          "@id": "https://telehealthfx.com/blog/weight-loss-for-women-over-40-how-glp-1-can-help-2/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/weight-loss-for-women-over-40-how-glp-1-can-help-2/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the main clinical takeaway regarding Weight Loss for Women Over 40: How GLP-1 Changes the Game?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "This article provides a comprehensive clinical breakdown of Weight Loss for Women Over 40: How GLP-1 Changes the Game, detailing the exact mechanisms, safety protocols, and evidence-based research required for optimal metabolic health."
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
      <BlogWeightLossForWomenOver40HowGlp1CanHelp2 />
    </>
  );
}
