import { BlogSemaglutideHairLoss } from "../../../components/blog-semaglutide-hair-loss-thinning-2026.jsx";

export const metadata = {
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
        "@type": "MedicalWebPage", "@id": "https://telehealthfx.com/blog/semaglutide-hair-loss-thinning-2026/#article",
        "headline": "Semaglutide and Hair Loss: Is Your GLP-1 Causing Thinning? What the Data Says",
        "image": "https://telehealthfx.com/assets/semaglutide-hair-loss-featured.png",
        "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" },
        "publisher": { "@type": "Organization", "name": "Telehealth FX", "logo": { "@type": "ImageObject", "url": "https://telehealthfx.com/assets/logo.png" } },
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/semaglutide-hair-loss-thinning-2026/" }
      },
      {
        "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/semaglutide-hair-loss-thinning-2026/#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Does semaglutide directly cause hair loss?", "acceptedAnswer": { "@type": "Answer", "text": "No. The thinning is caused by telogen effluvium—a stress response triggered by rapid weight loss, not the drug itself." } },
          { "@type": "Question", "name": "Will my hair grow back after GLP-1 hair loss?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Telogen effluvium is almost always temporary. Regrowth typically begins 3–6 months after shedding peaks." } },
          { "@type": "Question", "name": "Is tirzepatide more likely to cause hair loss than semaglutide?", "acceptedAnswer": { "@type": "Answer", "text": "Clinical trials reported higher rates with tirzepatide (~5.7%) vs semaglutide (~3%), correlating with greater weight loss." } }
        ]
      }
    ]
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogSemaglutideHairLoss /></>);
}
