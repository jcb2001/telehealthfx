import { BlogGlp1AndInflammationArthritisSleepApneaChron } from "../../../components/blog-glp-1-and-inflammation-arthritis-sleep-apnea-chron.jsx";

export const metadata = {
  title: "GLP-1 and Inflammation: Arthritis, Sleep Apnea & Chronic Pain (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of glp-1 and inflammation: arthritis, sleep apnea & chronic pain (2026 clinical guide).",
  openGraph: {
    title: "GLP-1 and Inflammation: Arthritis, Sleep Apnea & Chronic Pain (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of glp-1 and inflammation: arthritis, sleep apnea & chronic pain (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/sermorelin-peptide-featured.png",
        width: 1200,
        height: 630,
        alt: "GLP-1 and Inflammation: Arthritis, Sleep Apnea & Chronic Pain (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/glp-1-and-inflammation-arthritis-sleep-apnea-chron/#article",
        "headline": "GLP-1 and Inflammation: Arthritis, Sleep Apnea & Chronic Pain (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of glp-1 and inflammation: arthritis, sleep apnea & chronic pain (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/sermorelin-peptide-featured.png",
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
          "@id": "https://telehealthfx.com/blog/glp-1-and-inflammation-arthritis-sleep-apnea-chron/"
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
      <BlogGlp1AndInflammationArthritisSleepApneaChron />
    </>
  );
}
