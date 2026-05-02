import { BlogOralSemaglutideIsHereIsTheGlp1PillAsGood } from "../../../components/blog-oral-semaglutide-is-here-is-the-glp-1-pill-as-good.jsx";

export const metadata = {
  title: "Oral Semaglutide Is Here: Is the GLP-1 Pill as Good as the Injection?",
  description: "We compare oral semaglutide to the weekly injection, analyzing SNAC absorption technology, the OASIS 4 trial, and the brutal daily fasting requirements.",
  openGraph: {
    title: "Oral Semaglutide Is Here: Is the GLP-1 Pill as Good as the Injection?",
    description: "We compare oral semaglutide to the weekly injection, analyzing SNAC absorption technology, the OASIS 4 trial, and the brutal daily fasting requirements.",
    images: [
      {
        url: "https://telehealthfx.com/assets/oral_vs_injectable_featured.png",
        width: 1024,
        height: 1024,
        alt: "Oral Semaglutide vs Injectable",
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
        "@id": "https://telehealthfx.com/blog/oral-semaglutide-is-here-is-the-glp-1-pill-as-good/#article",
        "headline": "Oral Semaglutide Is Here: Is the GLP-1 Pill as Good as the Injection?",
        "description": "We compare oral semaglutide to the weekly injection, analyzing SNAC absorption technology, the OASIS 4 trial, and the brutal daily fasting requirements.",
        "image": "https://telehealthfx.com/assets/oral_vs_injectable_featured.png",
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
          "@id": "https://telehealthfx.com/blog/oral-semaglutide-is-here-is-the-glp-1-pill-as-good/"
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
      <BlogOralSemaglutideIsHereIsTheGlp1PillAsGood />
    </>
  );
}
