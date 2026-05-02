import { BlogGlp1AndMentalHealthAnxietyDepressionFoodNo } from "../../../components/blog-glp-1-and-mental-health-anxiety-depression-food-no.jsx";

export const metadata = {
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
