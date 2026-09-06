import { BlogGLP1WomenOver40 } from "../../../components/blog-glp1-women-over-40-menopause-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp1-women-over-40-menopause-2026/',
  }, title: "GLP-1 for Women Over 40: Menopause, Hormones & Why Semaglutide Works Differently (2026)", description: "Menopause changes your metabolism. GLP-1 addresses those exact changes. Estrogen decline, insulin resistance, visceral fat, and why semaglutide works for women over 40.", openGraph: { title: "GLP-1 for Women Over 40: Menopause & Weight Loss", description: "Your hormones changed. Your weight loss strategy should too. Complete guide.", images: [{ url: "https://telehealthfx.com/assets/glp1-women-over-40-featured.png", width: 1200, height: 630 }] } };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "MedicalWebPage",
    "description": metadata.description, "headline": "GLP-1 for Women Over 40: Menopause and Weight Loss", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "Is semaglutide safe during perimenopause?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. There are no known contraindications. STEP clinical trials included women across age ranges with consistent safety." } }] }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1WomenOver40 /></>);
}
