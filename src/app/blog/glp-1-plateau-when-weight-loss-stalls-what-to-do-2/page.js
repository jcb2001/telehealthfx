import { BlogGlp1PlateauWhenWeightLossStallsWhatToDo2 } from "../../../components/blog-glp-1-plateau-when-weight-loss-stalls-what-to-do-2.jsx";

export const metadata = {
  title: "The GLP-1 Plateau: When Weight Loss Stalls & What to Do",
  description: "Break through your weight loss stall with a rigid 7-strategy framework targeting metabolic adaptation and behavioral drift.",
  openGraph: {
    title: "The GLP-1 Plateau: When Weight Loss Stalls & What to Do",
    description: "Break through your weight loss stall with a rigid 7-strategy framework targeting metabolic adaptation and behavioral drift.",
    images: [
      {
        url: "https://telehealthfx.com/assets/glp1_plateau_featured.png",
        width: 1024,
        height: 1024,
        alt: "Breaking the GLP-1 Plateau",
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
        "@id": "https://telehealthfx.com/blog/glp-1-plateau-when-weight-loss-stalls-what-to-do-2/#article",
        "headline": "The GLP-1 Plateau: When Weight Loss Stalls & What to Do",
        "description": "Break through your weight loss stall with a rigid 7-strategy framework targeting metabolic adaptation and behavioral drift.",
        "image": "https://telehealthfx.com/assets/glp1_plateau_featured.png",
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
          "@id": "https://telehealthfx.com/blog/glp-1-plateau-when-weight-loss-stalls-what-to-do-2/"
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
      <BlogGlp1PlateauWhenWeightLossStallsWhatToDo2 />
    </>
  );
}
