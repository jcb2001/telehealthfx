import { BlogOralVsInjectableGlp1RybelsusOralWegovyOrfo } from "../../../components/blog-oral-vs-injectable-glp-1-rybelsus-oral-wegovy-orfo.jsx";

export const metadata = {
  title: "Oral vs. Injectable GLP-1: Rybelsus, Oral Wegovy, Orforglipron & What's Coming (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of oral vs. injectable glp-1: rybelsus, oral wegovy, orforglipron & what's coming (2026 clinical guide).",
  openGraph: {
    title: "Oral vs. Injectable GLP-1: Rybelsus, Oral Wegovy, Orforglipron & What's Coming (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of oral vs. injectable glp-1: rybelsus, oral wegovy, orforglipron & what's coming (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/sermorelin-peptide-featured.png",
        width: 1200,
        height: 630,
        alt: "Oral vs. Injectable GLP-1: Rybelsus, Oral Wegovy, Orforglipron & What's Coming (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/oral-vs-injectable-glp-1-rybelsus-oral-wegovy-orfo/#article",
        "headline": "Oral vs. Injectable GLP-1: Rybelsus, Oral Wegovy, Orforglipron & What's Coming (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of oral vs. injectable glp-1: rybelsus, oral wegovy, orforglipron & what's coming (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/sermorelin-peptide-featured.png",
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
          "@id": "https://telehealthfx.com/blog/oral-vs-injectable-glp-1-rybelsus-oral-wegovy-orfo/"
        }
      }
        ,{
        "@type": "VideoObject",
        "name": "TelehealthFX Medical Overview",
        "description": "Clinical overview and deep dive into metabolic health, GLP-1 medications, and weight loss science.",
        "thumbnailUrl": "https://img.youtube.com/vi/bl7yObb0AWI/maxresdefault.jpg",
        "uploadDate": "2026-05-01T08:00:00+08:00",
        "embedUrl": "https://www.youtube.com/embed/bl7yObb0AWI",
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
      <BlogOralVsInjectableGlp1RybelsusOralWegovyOrfo />
    </>
  );
}
