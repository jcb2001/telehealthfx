import { BlogGLP1Longevity } from "../../../components/blog-glp1-longevity-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true }, title: "GLP-1 and Longevity: Why Semaglutide May Be the Most Important Anti-Aging Drug (2026)", description: "GLP-1 addresses 6 of 9 hallmarks of aging: inflammation, metabolic dysfunction, cardiovascular disease, insulin resistance, and more. The longevity evidence." ,
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp1-longevity-2026/'
  }
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage", "headline": "GLP-1 and Longevity", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1Longevity /></>);
}
