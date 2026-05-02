import { BlogGlp1AndAlcoholWhatYouNeedToKnow2026Clini } from "../../../components/blog-glp-1-and-alcohol-what-you-need-to-know-2026-clini.jsx";

export const metadata = {
  title: "GLP-1 and Alcohol: The Hidden Interactions You Need to Know",
  description: "A comprehensive clinical guide explaining why GLP-1 therapy eliminates alcohol cravings, and the 4 critical physiological dangers of mixing the two.",
  openGraph: {
    title: "GLP-1 and Alcohol: The Hidden Interactions You Need to Know",
    description: "A comprehensive clinical guide explaining why GLP-1 therapy eliminates alcohol cravings, and the 4 critical physiological dangers of mixing the two.",
    images: [
      {
        url: "https://telehealthfx.com/assets/glp1_alcohol_featured.png",
        width: 1024,
        height: 1024,
        alt: "GLP-1 and Alcohol Safety",
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
        "@id": "https://telehealthfx.com/blog/glp-1-and-alcohol-what-you-need-to-know-2026-clini/#article",
        "headline": "GLP-1 and Alcohol: The Hidden Interactions You Need to Know",
        "description": "A comprehensive clinical guide explaining why GLP-1 therapy eliminates alcohol cravings, and the 4 critical physiological dangers of mixing the two.",
        "image": "https://telehealthfx.com/assets/glp1_alcohol_featured.png",
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
          "@id": "https://telehealthfx.com/blog/glp-1-and-alcohol-what-you-need-to-know-2026-clini/"
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
      <BlogGlp1AndAlcoholWhatYouNeedToKnow2026Clini />
    </>
  );
}
