import { BlogGlp1AndType2DiabetesBeyondWeightLoss2026 } from "../../../components/blog-glp-1-and-type-2-diabetes-beyond-weight-loss-2026.jsx";

export const metadata = {
  title: "GLP-1 and Type 2 Diabetes: Beyond Weight Loss (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of glp-1 and type 2 diabetes: beyond weight loss (2026 clinical guide).",
  openGraph: {
    title: "GLP-1 and Type 2 Diabetes: Beyond Weight Loss (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of glp-1 and type 2 diabetes: beyond weight loss (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/ozempic-featured.png",
        width: 1200,
        height: 630,
        alt: "GLP-1 and Type 2 Diabetes: Beyond Weight Loss (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/glp-1-and-type-2-diabetes-beyond-weight-loss-2026/#article",
        "headline": "GLP-1 and Type 2 Diabetes: Beyond Weight Loss (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of glp-1 and type 2 diabetes: beyond weight loss (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/ozempic-featured.png",
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
          "@id": "https://telehealthfx.com/blog/glp-1-and-type-2-diabetes-beyond-weight-loss-2026/"
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
      <BlogGlp1AndType2DiabetesBeyondWeightLoss2026 />
    </>
  );
}
