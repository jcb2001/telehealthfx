import { BlogGetSemaglutideOnline } from "../../../components/blog-get-semaglutide-online-2026.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/get-semaglutide-online-2026/',
  },
  title: "How to Get Semaglutide Online Without Seeing a Doctor in Person (2026 Guide)",
  description: "Step-by-step guide to getting semaglutide online in 2026. Telehealth process, red flags to avoid, branded vs compounded options, and how to start GLP-1 therapy from home.",
  openGraph: {
    title: "How to Get Semaglutide Online Without an In-Person Visit (2026)",
    description: "Step-by-step: telehealth evaluation, prescription, and direct-to-door GLP-1 delivery.",
    images: [{ url: "https://telehealthfx.com/assets/get-semaglutide-online-featured.png", width: 1200, height: 630, alt: "Get Semaglutide Online" }],
  },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage", "@id": "https://telehealthfx.com/blog/get-semaglutide-online-2026/#article", "headline": "How to Get Semaglutide Online Without Seeing a Doctor in Person (2026)", "image": "https://telehealthfx.com/assets/get-semaglutide-online-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/get-semaglutide-online-2026/" } },
    { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/get-semaglutide-online-2026/#faq", "mainEntity": [
      { "@type": "Question", "name": "Is it legal to get semaglutide online without an in-person visit?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Telehealth regulations allow licensed prescribers to evaluate and prescribe non-controlled medications via telehealth." } },
      { "@type": "Question", "name": "How fast can I get semaglutide after signing up?", "acceptedAnswer": { "@type": "Answer", "text": "Most providers complete evaluations within 24–48 hours. Total time from signup to first injection: typically 5–10 days." } },
      { "@type": "Question", "name": "Do I need a BMI of 30 to qualify?", "acceptedAnswer": { "@type": "Answer", "text": "For branded Wegovy, BMI ≥30 or ≥27 with comorbidity. For compounded semaglutide, clinicians may use clinical judgment." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGetSemaglutideOnline /></>);
}
