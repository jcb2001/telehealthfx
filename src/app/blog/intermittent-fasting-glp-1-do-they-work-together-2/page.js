import { BlogIntermittentFastingGlp1DoTheyWorkTogether2 } from "../../../components/blog-intermittent-fasting-glp-1-do-they-work-together-2.jsx";

export const metadata = {
  title: "Intermittent Fasting + GLP-1: Do They Work Together? (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of intermittent fasting + glp-1: do they work together? (2026 clinical guide).",
  openGraph: {
    title: "Intermittent Fasting + GLP-1: Do They Work Together? (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of intermittent fasting + glp-1: do they work together? (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/nad-therapy-featured.png",
        width: 1200,
        height: 630,
        alt: "Intermittent Fasting + GLP-1: Do They Work Together? (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/intermittent-fasting-glp-1-do-they-work-together-2/#article",
        "headline": "Intermittent Fasting + GLP-1: Do They Work Together? (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of intermittent fasting + glp-1: do they work together? (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/nad-therapy-featured.png",
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
          "@id": "https://telehealthfx.com/blog/intermittent-fasting-glp-1-do-they-work-together-2/"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogIntermittentFastingGlp1DoTheyWorkTogether2 />
    </>
  );
}
