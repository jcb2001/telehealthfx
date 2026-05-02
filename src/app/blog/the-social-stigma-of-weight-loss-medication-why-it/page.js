import { BlogTheSocialStigmaOfWeightLossMedicationWhyIt } from "../../../components/blog-the-social-stigma-of-weight-loss-medication-why-it.jsx";

export const metadata = {
  title: "The Social Stigma of Weight Loss Medication: Why It's Nobody's Business (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of the social stigma of weight loss medication: why it's nobody's business (2026 clinical guide).",
  openGraph: {
    title: "The Social Stigma of Weight Loss Medication: Why It's Nobody's Business (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of the social stigma of weight loss medication: why it's nobody's business (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/tirzepatide-semaglutide-featured.png",
        width: 1200,
        height: 630,
        alt: "The Social Stigma of Weight Loss Medication: Why It's Nobody's Business (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/the-social-stigma-of-weight-loss-medication-why-it/#article",
        "headline": "The Social Stigma of Weight Loss Medication: Why It's Nobody's Business (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of the social stigma of weight loss medication: why it's nobody's business (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/tirzepatide-semaglutide-featured.png",
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
          "@id": "https://telehealthfx.com/blog/the-social-stigma-of-weight-loss-medication-why-it/"
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
      <BlogTheSocialStigmaOfWeightLossMedicationWhyIt />
    </>
  );
}
