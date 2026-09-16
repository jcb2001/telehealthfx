import { BlogWegovyStarterDose } from "../../../components/blog-wegovy-starter-dose-titration-schedule.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Wegovy Starter Dose in Stock: Titration & Dosing Matrix",
  description: "Find Wegovy starter doses in stock online. Review standard 0.25mg titration schedules, how to avoid severe GI side effects, and transition to maintenance doses.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/wegovy-starter-dose-titration-schedule/',
  },
  openGraph: {
    title: "Wegovy Starter Dose in Stock: Titration & Dosing Matrix",
    description: "Find Wegovy starter doses in stock online. Review standard 0.25mg titration schedules, how to avoid severe GI side effects, and transition to maintenance doses.",
    url: 'https://telehealthfx.com/blog/wegovy-starter-dose-titration-schedule/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/wegovy_starter_dose.jpg",
        width: 1200,
        height: 675,
        alt: "Wegovy Starter Dose in Stock: Titration & Dosing Matrix",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/wegovy-starter-dose-titration-schedule/#webpage",
        "url": "https://telehealthfx.com/blog/wegovy-starter-dose-titration-schedule/",
        "headline": "Wegovy Starter Dose in Stock: Titration & Dosing Matrix",
        "description": "Find Wegovy starter doses in stock online. Review standard 0.25mg titration schedules, how to avoid severe GI side effects, and transition to maintenance doses.",
        "datePublished": "2026-09-16",
        "dateModified": "2026-09-16",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst",
          "url": "https://telehealthfx.com/about/"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".direct-answer-snippet", "h1"]
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "url": "https://telehealthfx.com"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/wegovy-starter-dose-titration-schedule/#faq",
        "mainEntity": [
        {
          "@type": "Question",
          "name": "Why are 0.25mg and 0.5mg starter doses always out of stock at retail pharmacies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Commercial manufacturers prioritize higher maintenance doses for established patients, creating chronic national supply shortages for introductory doses required by new patients."
          }
        },
        {
          "@type": "Question",
          "name": "What is the standard clinical titration schedule for semaglutide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Patients begin at 0.25mg weekly for Month 1, advance to 0.5mg for Month 2, 1.0mg for Month 3, 1.7mg for Month 4, and reach the 2.4mg maximum maintenance dose by Month 5."
          }
        },
        {
          "@type": "Question",
          "name": "Why is gradual titration essential when starting GLP-1 medications?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gradual dose escalation allows the gastrointestinal tract and central nervous system to adapt to delayed gastric emptying, minimizing nausea and digestive discomfort."
          }
        },
        {
          "@type": "Question",
          "name": "How quickly can I get a starter dose kit from Telehealth FX?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our digital medical intake takes 3 minutes. A US-licensed doctor reviews your file within 24 hours, and your starter kit is delivered to your door in 2 business days."
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
      <BlogWegovyStarterDose />
    </>
  );
}
