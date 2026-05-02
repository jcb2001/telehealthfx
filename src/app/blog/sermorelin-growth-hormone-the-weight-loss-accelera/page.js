import { BlogSermorelinGrowthHormoneTheWeightLossAccelera } from "../../../components/blog-sermorelin-growth-hormone-the-weight-loss-accelera.jsx";

export const metadata = {
  title: "Sermorelin & Growth Hormone: The Weight Loss Accelerator (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of sermorelin & growth hormone: the weight loss accelerator (2026 clinical guide).",
  openGraph: {
    title: "Sermorelin & Growth Hormone: The Weight Loss Accelerator (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of sermorelin & growth hormone: the weight loss accelerator (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/wegovy-label-featured.png",
        width: 1200,
        height: 630,
        alt: "Sermorelin & Growth Hormone: The Weight Loss Accelerator (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/sermorelin-growth-hormone-the-weight-loss-accelera/#article",
        "headline": "Sermorelin & Growth Hormone: The Weight Loss Accelerator (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of sermorelin & growth hormone: the weight loss accelerator (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/wegovy-label-featured.png",
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
          "@id": "https://telehealthfx.com/blog/sermorelin-growth-hormone-the-weight-loss-accelera/"
        }
      }
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/gSn7DEsJWOQ/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/gSn7DEsJWOQ",
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
      <BlogSermorelinGrowthHormoneTheWeightLossAccelera />
    </>
  );
}
