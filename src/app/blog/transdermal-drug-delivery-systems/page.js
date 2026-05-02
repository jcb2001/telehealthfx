import { BlogTransdermalSystems } from "../../../components/blog-transdermal-drug-delivery-systems.jsx";

export const metadata = {
  title: "Transdermal Drug Delivery Systems: Academic Overview | Telehealth FX",
  description: "A complete academic overview of transdermal drug delivery systems (TDDS), explaining formulation, permeation enhancers, and matrix patch technology.",
};

export default function Page() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://telehealthfx.com/blog/transdermal-drug-delivery-systems/#article",
      "headline": "Transdermal Drug Delivery Systems: Academic Overview",
      "description": "A complete academic overview of transdermal drug delivery systems (TDDS), explaining formulation, permeation enhancers, and matrix patch technology.",
      "image": "https://telehealthfx.com/assets/transdermal-systems-featured.png",
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
        "@id": "https://telehealthfx.com/blog/transdermal-drug-delivery-systems/"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://telehealthfx.com/blog/transdermal-drug-delivery-systems/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can any drug be put into a transdermal patch?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Currently, the drug must have a low molecular weight and require a low daily dose. This is why we can put potent hormones (like estrogen or testosterone) and concentrated alkaloids (like dihydroberberine) into patches, but we cannot put large peptides like Semaglutide into a standard passive matrix patch (they require micro-needles or injections)."
          }
        },
        {
          "@type": "Question",
          "name": "Why do transdermal patches sometimes irritate the skin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Skin irritation (contact dermatitis) is usually caused by the chemical permeation enhancers or the acrylic adhesive, not the active drug. Moving the patch to a new location daily (rotation) gives the stratum corneum time to rebuild its lipid barrier and prevents localized irritation."
          }
        },
        {
          "@type": "Question",
          "name": "Is transdermal delivery the same as liposomal delivery?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Liposomal delivery involves wrapping an oral supplement in a fat bubble to help it cross the intestines. However, a liposomal oral supplement still travels to the liver and suffers from first-pass metabolism. Transdermal delivery goes straight through the skin into the blood."
          }
        },
        {
          "@type": "Question",
          "name": "How long do transdermal patches actually last?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While many supplement companies claim their matrix patches last 72 hours, pharmacokinetic data shows that the active compound is almost entirely depleted within 18 to 24 hours. We break down the mathematics of this in our expose on the 72-hour patch myth."
          }
        }
      ]
    }
  ]
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogTransdermalSystems />
    </>
  );
}