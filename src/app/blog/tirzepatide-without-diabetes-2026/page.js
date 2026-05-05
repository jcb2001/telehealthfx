import { BlogTirzepatideWithoutDiabetes } from "../../../components/blog-tirzepatide-without-diabetes-2026.jsx";

export const metadata = {
  title: "Can I Get Tirzepatide Without a Diabetes Diagnosis? (2026 Eligibility Guide)",
  description: "Yes — tirzepatide is available for weight loss without diabetes via Zepbound or compounded options. Full eligibility criteria, BMI requirements, and access pathways explained.",
  openGraph: {
    title: "Tirzepatide Without Diabetes: 2026 Eligibility Guide",
    description: "Full eligibility criteria, BMI requirements, and every pathway to access tirzepatide for weight loss.",
    images: [{ url: "https://telehealthfx.com/assets/tirzepatide-without-diabetes-featured.png", width: 1200, height: 630, alt: "Tirzepatide Eligibility" }],
  },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage", "@id": "https://telehealthfx.com/blog/tirzepatide-without-diabetes-2026/#article", "headline": "Can I Get Tirzepatide Without a Diabetes Diagnosis?", "image": "https://telehealthfx.com/assets/tirzepatide-without-diabetes-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/tirzepatide-without-diabetes-2026/" } },
    { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/tirzepatide-without-diabetes-2026/#faq", "mainEntity": [
      { "@type": "Question", "name": "Do I need to be diabetic to get Mounjaro?", "acceptedAnswer": { "@type": "Answer", "text": "Mounjaro requires a T2D diagnosis. Zepbound (same molecule) is approved for weight loss without diabetes. Compounded tirzepatide can also be prescribed for weight loss." } },
      { "@type": "Question", "name": "What BMI do I need for tirzepatide?", "acceptedAnswer": { "@type": "Answer", "text": "BMI ≥30 or BMI ≥27 with at least one weight-related comorbidity for branded Zepbound." } },
      { "@type": "Question", "name": "Is tirzepatide stronger than semaglutide?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Clinical trials show ~22.5% body weight loss with tirzepatide vs ~14.9% with semaglutide." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogTirzepatideWithoutDiabetes /></>);
}
