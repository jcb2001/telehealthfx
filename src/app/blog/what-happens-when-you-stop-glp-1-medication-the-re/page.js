import { BlogWhatHappensWhenYouStopGlp1MedicationTheRe } from "../../../components/blog-what-happens-when-you-stop-glp-1-medication-the-re.jsx";

export const metadata = {
  title: "What Happens When You Stop GLP-1 Medication? The Rebound Effect",
  description: "Explore the biological mechanisms of the GLP-1 rebound effect, the return of food noise, and the clinical playbook for long-term weight maintenance.",
  openGraph: {
    title: "What Happens When You Stop GLP-1 Medication? The Rebound Effect",
    description: "Explore the biological mechanisms of the GLP-1 rebound effect, the return of food noise, and the clinical playbook for long-term weight maintenance.",
    images: [
      {
        url: "https://telehealthfx.com/assets/glp1_rebound_effect_featured.png",
        width: 1024,
        height: 1024,
        alt: "The GLP-1 Rebound Effect",
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
        "@id": "https://telehealthfx.com/blog/what-happens-when-you-stop-glp-1-medication-the-re/#article",
        "headline": "What Happens When You Stop GLP-1 Medication? The Rebound Effect Explained",
        "description": "Explore the biological mechanisms of the GLP-1 rebound effect, the return of food noise, and the clinical playbook for long-term weight maintenance.",
        "image": "https://telehealthfx.com/assets/glp1_rebound_effect_featured.png",
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
          "@id": "https://telehealthfx.com/blog/what-happens-when-you-stop-glp-1-medication-the-re/"
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
      <BlogWhatHappensWhenYouStopGlp1MedicationTheRe />
    </>
  );
}
