import { BlogGLP1BMI2730 } from "../../../components/blog-glp-1-bmi-27-30-eligibility-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp-1-bmi-27-30-eligibility-2026/',
  },
  title: "GLP-1 for BMI 27–30: Do You Qualify If You're Not Clinically Obese? (2026)",
  description: "Can you get semaglutide or tirzepatide with a BMI between 27 and 30? Full eligibility guide, qualifying comorbidities, and why BMI alone doesn't tell the whole story.",
  openGraph: { title: "GLP-1 for BMI 27–30: Do You Qualify?", description: "Eligibility criteria, qualifying comorbidities, and metabolic health assessment guide.", images: [{ url: "https://telehealthfx.com/assets/glp1-bmi-27-30-featured.png", width: 1200, height: 630, alt: "GLP-1 BMI 27-30" }] },
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage", "@id": "https://telehealthfx.com/blog/glp-1-bmi-27-30-eligibility-2026/#article", "headline": "GLP-1 for BMI 27–30: Do You Qualify?", "image": "https://telehealthfx.com/assets/glp1-bmi-27-30-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } },
    { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/glp-1-bmi-27-30-eligibility-2026/#faq", "mainEntity": [
      { "@type": "Question", "name": "Can I get Ozempic with a BMI of 28?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, with at least one weight-related comorbidity such as hypertension, prediabetes, high cholesterol, sleep apnea, or PCOS." } },
      { "@type": "Question", "name": "Is GLP-1 worth it for only 20-30 pounds?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. A 10-15% weight reduction produces clinically significant improvements in blood pressure, blood sugar, cholesterol, and cardiovascular risk." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1BMI2730 /></>);
}
