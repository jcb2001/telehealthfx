import { BlogGLP1PlateauProtocol } from "../../../components/blog-glp1-plateau-protocol-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true }, title: "GLP-1 Plateau: Why Weight Loss Stalls and 7 Strategies to Break Through (2026)", description: "Weight loss stalled on semaglutide or tirzepatide? The 7-strategy plateau-breaking protocol: dose optimization, protein audit, NEAT, resistance training, and medication switching." ,
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp1-plateau-protocol-2026/'
  }
};
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage",
    "description": metadata.description, "headline": "GLP-1 Plateau Protocol", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1PlateauProtocol /></>);
}
