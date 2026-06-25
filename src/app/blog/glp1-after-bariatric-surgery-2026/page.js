import { BlogGLP1AfterBariatric } from "../../../components/blog-glp1-after-bariatric-surgery-2026.jsx";
export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp1-after-bariatric-surgery-2026/',
  }, title: "GLP-1 After Bariatric Surgery: Semaglutide for Post-Sleeve and Post-Bypass Weight Regain (2026)", description: "20-30% of bariatric patients regain weight within 5 years. GLP-1 therapy addresses the hormonal forces surgery cannot. Evidence, safety, and eligibility guide.", openGraph: { title: "GLP-1 After Bariatric Surgery: Weight Regain Solution", description: "Surgery changed your anatomy. GLP-1 addresses the hormones. Complete guide.", images: [{ url: "https://telehealthfx.com/assets/glp1-after-bariatric-surgery-featured.png", width: 1200, height: 630 }] } };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "MedicalWebPage", "headline": "GLP-1 After Bariatric Surgery", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can I use semaglutide after gastric sleeve?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Injectable GLP-1 bypasses the GI tract. Post-bariatric patients with weight regain see 8-12% additional weight loss." } }] }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1AfterBariatric /></>);
}
