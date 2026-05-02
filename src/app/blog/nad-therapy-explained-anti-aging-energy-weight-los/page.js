import { BlogNadTherapyExplainedAntiAgingEnergyWeightLos } from "../../../components/blog-nad-therapy-explained-anti-aging-energy-weight-los.jsx";

export const metadata = {
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
