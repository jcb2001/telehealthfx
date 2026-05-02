import { BlogWhatIsAGlp1Medication } from "../../../components/blog-what-is-a-glp-1-medication.jsx";

export const metadata = {
  title: "What is a GLP-1 Medication? The Ultimate Guide | Telehealth FX",
  description: "What is a GLP-1 medication? Discover how Semaglutide and Tirzepatide work, the clinical science behind them, and how to access affordable compounding.",
};

export default function Page() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://telehealthfx.com/blog/what-is-a-glp-1-medication/#article",
      "headline": "What is a GLP-1 Medication? The Ultimate Guide",
      "description": "What is a GLP-1 medication? Discover how Semaglutide and Tirzepatide work, the clinical science behind them, and how to access affordable compounding.",
      "image": "https://telehealthfx.com/assets/glp1-featured.png",
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
        "@id": "https://telehealthfx.com/blog/what-is-a-glp-1-medication/"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://telehealthfx.com/blog/what-is-a-glp-1-medication/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are GLP-1 medications safe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, they have been rigorously tested. Semaglutide has been on the market for Type 2 Diabetes since 2017. However, they are serious medical interventions. They carry a black box warning for Thyroid C-cell Tumors (in rodents) and are contraindicated for anyone with a history of Medullary Thyroid Carcinoma."
          }
        },
        {
          "@type": "Question",
          "name": "Will I lose muscle mass?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Any rapid weight loss will result in some lean tissue loss. Because GLP-1s suppress your appetite so severely, it is critical that you prioritize high-protein meals and engage in resistance training to preserve your muscle mass while the drug melts away the visceral fat."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if I stop taking it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GLP-1 medications do not permanently change your DNA. If you use the drug to lose 50 pounds, but fail to change your underlying relationship with food, the \"food noise\" will return when you stop the medication, and you will likely regain the weight. It is a powerful tool to enforce a deficit while you build permanent, healthy habits."
          }
        },
        {
          "@type": "Question",
          "name": "Is Berberine really \"Nature's Ozempic\"?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Berberine works via AMPK activation, not the GLP-1 receptor. It does not crush your appetite or slow gastric emptying. It is a phenomenal supplement for mild insulin resistance, but it is not in the same universe as Semaglutide. We compare them directly in our Berberine vs Ozempic clinical guide."
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
      <BlogWhatIsAGlp1Medication />
    </>
  );
}