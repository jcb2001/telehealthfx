import { BlogFirstWeekSemaglutide } from "../../../components/blog-first-week-semaglutide-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/first-week-semaglutide-2026/',
  }, title: "Your First Week on Semaglutide: Day-by-Day Guide (What Actually Happens)", description: "Day 1 through Day 7 on semaglutide. What to expect, side effects timeline, injection tips, food rules, and mistakes to avoid. From real patient timelines.", openGraph: { title: "First Week on Semaglutide: Day-by-Day Guide", description: "Injection day to day 7. What actually happens, what to eat, and what to avoid.", images: [{ url: "https://telehealthfx.com/assets/first-week-semaglutide-featured.png", width: 1200, height: 630 }] } };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [{ "@type": "MedicalWebPage", "headline": "Your First Week on Semaglutide", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } }, { "@type": "FAQPage", "mainEntity": [{ "@type": "Question", "name": "How much weight will I lose in the first week?", "acceptedAnswer": { "@type": "Answer", "text": "At 0.25mg, expect 0-2 lbs in week 1. Significant weight loss begins at 0.5-1.0mg, typically weeks 5-8." } }] }] };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogFirstWeekSemaglutide /></>);
}
