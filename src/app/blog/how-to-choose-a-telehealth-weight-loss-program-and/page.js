import { BlogHowToChooseATelehealthWeightLossProgramAnd } from "../../../components/blog-how-to-choose-a-telehealth-weight-loss-program-and.jsx";

export const metadata = {
  title: "How to Choose a Telehealth Weight Loss Program (And Avoid the Scams) (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of how to choose a telehealth weight loss program (and avoid the scams) (2026 clinical guide).",
  openGraph: {
    title: "How to Choose a Telehealth Weight Loss Program (And Avoid the Scams) (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of how to choose a telehealth weight loss program (and avoid the scams) (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/glp1-ultimate-guide.png",
        width: 1200,
        height: 630,
        alt: "How to Choose a Telehealth Weight Loss Program (And Avoid the Scams) (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/how-to-choose-a-telehealth-weight-loss-program-and/#article",
        "headline": "How to Choose a Telehealth Weight Loss Program (And Avoid the Scams) (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of how to choose a telehealth weight loss program (and avoid the scams) (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/glp1-ultimate-guide.png",
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
          "@id": "https://telehealthfx.com/blog/how-to-choose-a-telehealth-weight-loss-program-and/"
        }
      }
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/-lgh0elFd3I/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/-lgh0elFd3I",
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
      <BlogHowToChooseATelehealthWeightLossProgramAnd />
    </>
  );
}
