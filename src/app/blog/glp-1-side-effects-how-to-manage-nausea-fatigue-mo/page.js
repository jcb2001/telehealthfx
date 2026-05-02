import { BlogGlp1SideEffectsHowToManageNauseaFatigueMo } from "../../../components/blog-glp-1-side-effects-how-to-manage-nausea-fatigue-mo.jsx";

export const metadata = {
  title: "GLP-1 Side Effects: How to Manage Nausea, Fatigue & More",
  description: "The definitive clinical playbook for surviving the adaptation phase. Learn the 'Go Low and Slow' protocol, how to mitigate GI distress, and combat fatigue.",
  openGraph: {
    title: "GLP-1 Side Effects: How to Manage Nausea, Fatigue & More",
    description: "The definitive clinical playbook for surviving the adaptation phase. Learn the 'Go Low and Slow' protocol, how to mitigate GI distress, and combat fatigue.",
    images: [
      {
        url: "https://telehealthfx.com/assets/glp1_side_effects_featured.png",
        width: 1024,
        height: 1024,
        alt: "GLP-1 Side Effects Management",
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
        "@id": "https://telehealthfx.com/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo/#article",
        "headline": "GLP-1 Side Effects: How to Manage Nausea, Fatigue & More",
        "description": "The definitive clinical playbook for surviving the adaptation phase. Learn the 'Go Low and Slow' protocol, how to mitigate GI distress, and combat fatigue.",
        "image": "https://telehealthfx.com/assets/glp1_side_effects_featured.png",
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
          "@id": "https://telehealthfx.com/blog/glp-1-side-effects-how-to-manage-nausea-fatigue-mo/"
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
      <BlogGlp1SideEffectsHowToManageNauseaFatigueMo />
    </>
  );
}
