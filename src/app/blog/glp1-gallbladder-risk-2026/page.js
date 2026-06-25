import { BlogGLP1GallbladderRisk } from "../../../components/blog-glp1-gallbladder-risk-2026.jsx";
export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp1-gallbladder-risk-2026/',
  }, title: "GLP-1 and Gallbladder Problems: Gallstones, Cholecystitis, and Risk Reduction (2026)", description: "GLP-1 gallbladder risk explained. Why rapid weight loss causes gallstones, the actual incidence rate, and 5 evidence-based prevention strategies.", openGraph: { title: "GLP-1 and Gallbladder Risk: What You Need to Know", description: "1.6% incidence rate. Why it happens and how to prevent it.", images: [{ url: "https://telehealthfx.com/assets/glp1-gallbladder-risk-featured.png", width: 1200, height: 630 }] } };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "MedicalWebPage", "headline": "GLP-1 and Gallbladder Problems", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Can I take GLP-1 after gallbladder removal?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Post-cholecystectomy patients have zero gallstone risk. GLP-1 is safe." } }] }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1GallbladderRisk /></>);
}
