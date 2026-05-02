import { BlogHiddenFeesInTelehealthWeightLossHowToSpot } from "../../../components/blog-hidden-fees-in-telehealth-weight-loss-how-to-spot.jsx";

export const metadata = {
  title: "Hidden Fees in Telehealth Weight Loss: How to Spot Them (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of hidden fees in telehealth weight loss: how to spot them (2026 clinical guide).",
  openGraph: {
    title: "Hidden Fees in Telehealth Weight Loss: How to Spot Them (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of hidden fees in telehealth weight loss: how to spot them (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/ozempic-featured.png",
        width: 1200,
        height: 630,
        alt: "Hidden Fees in Telehealth Weight Loss: How to Spot Them (2026 Clinical Guide)",
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
        "@id": "https://telehealthfx.com/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot/#article",
        "headline": "Hidden Fees in Telehealth Weight Loss: How to Spot Them (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of hidden fees in telehealth weight loss: how to spot them (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/ozempic-featured.png",
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
          "@id": "https://telehealthfx.com/blog/hidden-fees-in-telehealth-weight-loss-how-to-spot/"
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
      <BlogHiddenFeesInTelehealthWeightLossHowToSpot />
    </>
  );
}
