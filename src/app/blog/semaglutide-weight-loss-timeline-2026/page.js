import { BlogSemaglutideWeightLossTimeline } from "../../../components/blog-semaglutide-weight-loss-timeline-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/semaglutide-weight-loss-timeline-2026/',
  }, title: "How Much Weight Will I Lose on Semaglutide? Realistic Results by Month (2026)", description: "Month-by-month semaglutide weight loss data from STEP trials. Realistic expectations, plateau guidance, and factors that accelerate results.", openGraph: { title: "Semaglutide Weight Loss: Month-by-Month Results", description: "Clinical trial data: 14.9% average at 12 months. See the full timeline.", images: [{ url: "https://telehealthfx.com/assets/semaglutide-weight-loss-timeline-featured.png", width: 1200, height: 630, alt: "Semaglutide Weight Loss Timeline" }] } };
export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "description": metadata.description,
        "headline": "How Much Weight Will I Lose on Semaglutide? Month-by-Month Results",
        "image": "https://telehealthfx.com/assets/semaglutide-weight-loss-timeline-featured.png",
        "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "jobTitle": "Lead Bio-Systems Analyst" },
        "publisher": { "@type": "Organization", "name": "Telehealth FX", "url": "https://telehealthfx.com" },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#direct-answer-summary", ".key-takeaways-grid"]
        },
        "about": [
          {
            "@type": "MedicalEntity",
            "name": "Semaglutide",
            "sameAs": "https://en.wikipedia.org/wiki/Semaglutide",
            "code": {
              "@type": "MedicalCode",
              "code": "1991302",
              "codingSystem": "RxNorm"
            }
          },
          {
            "@type": "MedicalCondition",
            "name": "Obesity",
            "sameAs": "https://en.wikipedia.org/wiki/Obesity",
            "code": {
              "@type": "MedicalCode",
              "code": "E66.9",
              "codingSystem": "ICD-10-CM"
            }
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much weight will I lose in 1 month on semaglutide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In month 1, patients on the 0.25 mg titration dose typically lose 2–3% of baseline body weight (approximately 4–7 lbs for a 200–230 lb individual), primarily driven by initial caloric reduction and early satiety."
            }
          },
          {
            "@type": "Question",
            "name": "What are realistic semaglutide weight loss results after 3 months and 6 months?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By month 3 at 1.0 mg, average cumulative weight loss reaches 5–7% (11–16 lbs). By month 6 at full maintenance dosing (2.4 mg), patients in the STEP 1 trial achieved 10–12% mean weight reduction (23–28 lbs)."
            }
          },
          {
            "@type": "Question",
            "name": "Why am I not seeing any weight loss results during the first month?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The initial 0.25 mg and 0.50 mg doses are sub-therapeutic titration steps designed to acclimate gastrointestinal GLP-1 receptors and prevent nausea. Therapeutic fat loss accelerates once patients reach 1.0 mg and above."
            }
          },
          {
            "@type": "Question",
            "name": "Can I lose 50 pounds on semaglutide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Patients starting at 250–300+ lbs who achieve the clinical trial average of 15–17% weight loss combined with protein-prioritized nutrition regularly lose 45–55+ lbs over 12 to 16 months."
            }
          }
        ]
      }
    ]
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogSemaglutideWeightLossTimeline />
    </>
  );
}
