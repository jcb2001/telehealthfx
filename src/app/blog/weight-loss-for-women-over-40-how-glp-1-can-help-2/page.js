import { BlogWeightLossForWomenOver40HowGlp1CanHelp2 } from "../../../components/blog-weight-loss-for-women-over-40-how-glp-1-can-help-2.jsx";

export const metadata = {
  title: "Weight Loss for Women Over 40: How GLP-1 Can Help (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of weight loss for women over 40: how glp-1 can help (2026 clinical guide).",
  openGraph: {
    title: "Weight Loss for Women Over 40: How GLP-1 Can Help (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of weight loss for women over 40: how glp-1 can help (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/nad-therapy-featured.png",
        width: 1200,
        height: 630,
        alt: "Weight Loss for Women Over 40: How GLP-1 Can Help (2026 Clinical Guide)",
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
        "headline": "Weight Loss for Women Over 40: How GLP-1 Can Help (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of weight loss for women over 40: how glp-1 can help (2026 clinical guide).",
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
          "@id": "https://telehealthfx.com/blog/weight-loss-for-women-over-40-how-glp-1-can-help-2/"
        }
      }
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/WeL9Z100zSI/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/WeL9Z100zSI",
        "publisher": {
          "@type": "Organization",
          "name": "TelehealthFX",
          "logo": {
            "@type": "ImageObject",
            "url": "https://telehealthfx.com/assets/logo.png"
          }
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
      <BlogWeightLossForWomenOver40HowGlp1CanHelp2 />
    </>
  );
}
