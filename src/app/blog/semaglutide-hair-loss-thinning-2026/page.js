import { BlogSemaglutideHairLoss } from "../../../components/blog-semaglutide-hair-loss-thinning-2026.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/semaglutide-hair-loss-thinning-2026/',
  },
  title: "Semaglutide and Hair Loss: Is Your GLP-1 Causing Thinning? What the Data Says",
  description: "Is semaglutide causing your hair to thin? Learn about telogen effluvium, nutritional deficiencies during GLP-1 therapy, and a 7-point protocol to protect your hair during weight loss.",
  openGraph: {
    title: "Semaglutide and Hair Loss: Is Your GLP-1 Causing Thinning?",
    description: "Learn about telogen effluvium, nutritional deficiencies during GLP-1 therapy, and how to protect your hair during weight loss.",
    images: [{ url: "https://telehealthfx.com/assets/semaglutide-hair-loss-featured.png", width: 1200, height: 630, alt: "Semaglutide Hair Loss" }],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/semaglutide-hair-loss-thinning-2026/#article",
        "description": metadata.description,
        "headline": "Semaglutide and Hair Loss: Is Your GLP-1 Causing Thinning? What the Data Says",
        "image": "https://telehealthfx.com/assets/semaglutide-hair-loss-featured.png",
        "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "jobTitle": "Lead Bio-Systems Analyst", "url": "https://telehealthfx.com/about" },
        "publisher": { "@type": "Organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": { "@type": "ImageObject", "url": "https://telehealthfx.com/assets/logo.png" } },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/semaglutide-hair-loss-thinning-2026/" },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#direct-answer-summary", ".key-takeaways-grid"]
        },
        "about": [
          {
            "@type": "MedicalCondition",
            "name": "Telogen effluvium",
            "sameAs": "https://en.wikipedia.org/wiki/Telogen_effluvium",
            "code": {
              "@type": "MedicalCode",
              "code": "L65.0",
              "codingSystem": "ICD-10-CM"
            }
          },
          {
            "@type": "MedicalEntity",
            "name": "Semaglutide",
            "sameAs": "https://en.wikipedia.org/wiki/Semaglutide",
            "code": {
              "@type": "MedicalCode",
              "code": "1991302",
              "codingSystem": "RxNorm"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/semaglutide-hair-loss-thinning-2026/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does semaglutide directly cause hair loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Semaglutide does not directly damage hair follicles. The thinning is acute telogen effluvium—a physiological stress response triggered by rapid caloric restriction and metabolic changes during weight loss."
            }
          },
          {
            "@type": "Question",
            "name": "Will hair grow back after GLP-1 related hair loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Telogen effluvium is completely reversible. Regrowth typically begins within 3 to 6 months once metabolic stabilization and adequate protein intake (1.2–1.6 g/kg) are achieved."
            }
          },
          {
            "@type": "Question",
            "name": "Why is hair thinning more common with tirzepatide than semaglutide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Clinical trials reported higher rates of alopecia with tirzepatide (~5.7% in SURMOUNT-1) compared to semaglutide (~3.0% in STEP 1) because tirzepatide produces greater mean total weight loss (up to 22.5% vs 14.9%), creating greater acute metabolic demand."
            }
          },
          {
            "@type": "Question",
            "name": "How can I prevent hair loss while losing weight on semaglutide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Prioritize consuming 80–100 grams of daily dietary protein (or 1.2–1.6 g/kg of target body weight), monitor serum ferritin and zinc levels, avoid crash deficits under 1,200 calories/day, and supplement with methylated B-complex vitamins."
            }
          }
        ]
      }
    ]
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogSemaglutideHairLoss /></>);
}
