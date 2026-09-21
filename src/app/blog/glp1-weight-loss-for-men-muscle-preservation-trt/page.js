import { BlogGlp1MenTrtPreservation } from "../../../components/blog-glp1-men-trt-preservation.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp1-weight-loss-for-men-muscle-preservation-trt/',
  },
  title: "GLP-1 for Men: Stop Muscle Loss with Dual TRT Therapy",
  description: "Complete guide to GLP-1 weight loss for men. Discover how combining semaglutide or tirzepatide with TRT preserves lean muscle and boosts fat loss outcomes.",
  openGraph: {
    title: "GLP-1 for Men: Stop Muscle Loss with Dual TRT Therapy",
    description: "Complete guide to GLP-1 weight loss for men. Discover how combining semaglutide or tirzepatide with TRT preserves lean muscle and boosts fat loss outcomes.",
    url: "https://telehealthfx.com/blog/glp1-weight-loss-for-men-muscle-preservation-trt/",
    siteName: "Telehealth FX",
    images: [
      {
        url: "https://telehealthfx.com/assets/glp1-men-trt-preservation-featured.jpg",
        width: 1200,
        height: 675,
        alt: "GLP-1 Weight Loss for Men and TRT Muscle Preservation Therapy",
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
        "@id": "https://telehealthfx.com/blog/glp1-weight-loss-for-men-muscle-preservation-trt/#webpage",
        "url": "https://telehealthfx.com/blog/glp1-weight-loss-for-men-muscle-preservation-trt/",
        "name": "GLP-1 for Men: Stop Muscle Loss with Dual TRT Therapy",
        "description": "Complete guide to GLP-1 weight loss for men. Discover how combining semaglutide or tirzepatide with TRT preserves lean muscle and boosts fat loss outcomes.",
        "isPartOf": {
          "@id": "https://telehealthfx.com/#website"
        },
        "inLanguage": "en-US",
        "lastReviewed": "2026-09-20",
        "reviewedBy": {
          "@type": "Organization",
          "name": "Telehealth FX Men's Health Division"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/glp1-weight-loss-for-men-muscle-preservation-trt/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can men take Testosterone Replacement Therapy (TRT) and GLP-1 together?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. In fact, clinical evidence strongly favors combining them. While GLP-1 agonists accelerate adipose tissue loss, TRT activates muscle protein synthesis to prevent lean muscle and metabolic rate deterioration."
            }
          },
          {
            "@type": "Question",
            "name": "How much muscle do men typically lose on Ozempic or Tirzepatide alone?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Without hormonal protection or heavy resistance training, DEXA body composition studies show that 25% to 40% of the weight lost on GLP-1 medications can be lean body mass rather than fat."
            }
          },
          {
            "@type": "Question",
            "name": "How much does dual GLP-1 and TRT therapy cost at Telehealth FX?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Telehealth FX offers compounded GLP-1s starting at an introductory promotional price of $99 for your first month ($146/mo flat after for Semaglutide or $258/mo flat after for Tirzepatide), paired with TRT for a flat $79/month with lab monitoring and zero membership fees."
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
      <BlogGlp1MenTrtPreservation />
    </>
  );
}
