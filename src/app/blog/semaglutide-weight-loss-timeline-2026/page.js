import { BlogSemaglutideWeightLossTimeline } from "../../../components/blog-semaglutide-weight-loss-timeline-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/semaglutide-weight-loss-timeline-2026/',
  }, title: "How Much Weight Will I Lose on Semaglutide? Realistic Results by Month (2026)", description: "Month-by-month semaglutide weight loss data from STEP trials. Realistic expectations, plateau guidance, and factors that accelerate results.", openGraph: { title: "Semaglutide Weight Loss: Month-by-Month Results", description: "Clinical trial data: 14.9% average at 12 months. See the full timeline.", images: [{ url: "https://telehealthfx.com/assets/semaglutide-weight-loss-timeline-featured.png", width: 1200, height: 630, alt: "Semaglutide Weight Loss Timeline" }] } };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage",
    "description": metadata.description, "headline": "How Much Weight Will I Lose on Semaglutide?", "image": "https://telehealthfx.com/assets/semaglutide-weight-loss-timeline-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "How much weight will I lose in the first month?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 5-7 lbs (2-3% body weight) during titration. Weight loss accelerates in months 2-4." } },
      { "@type": "Question", "name": "Can I lose 50 pounds on semaglutide?", "acceptedAnswer": { "@type": "Answer", "text": "If starting weight supports it, yes. A 280lb patient averaging 15% loss would lose ~42 lbs. Structured lifestyle changes can exceed trial averages." } }
    ]}
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogSemaglutideWeightLossTimeline /></>);
}
