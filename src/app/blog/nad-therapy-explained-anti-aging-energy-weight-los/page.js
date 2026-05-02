import { BlogNadTherapyExplainedAntiAgingEnergyWeightLos } from "../../../components/blog-nad-therapy-explained-anti-aging-energy-weight-los.jsx";

export const metadata = {
  title: "NAD+ Therapy Explained: Anti-Aging, Energy & Weight Loss (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of nad+ therapy explained: anti-aging, energy & weight loss (2026 clinical guide).",
  openGraph: {
    title: "NAD+ Therapy Explained: Anti-Aging, Energy & Weight Loss (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of nad+ therapy explained: anti-aging, energy & weight loss (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/tirzepatide-semaglutide-featured.png",
        width: 1200,
        height: 630,
        alt: "NAD+ Therapy Explained: Anti-Aging, Energy & Weight Loss (2026 Clinical Guide)",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://telehealthfx.com/blog/nad-therapy-explained-anti-aging-energy-weight-los/#article",
        "headline": "NAD+ Therapy Explained: Anti-Aging, Energy & Weight Loss (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of nad+ therapy explained: anti-aging, energy & weight loss (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/tirzepatide-semaglutide-featured.png",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
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
