import { BlogSameDaySemaglutide } from "../../../components/blog-same-day-semaglutide-prescription-online.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Same Day Semaglutide Prescription: Fast Online Doctors",
  description: "Get a same day semaglutide prescription online. Connect with telehealth doctors quickly, qualify digitally, and rush medication fulfillment to your door.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/same-day-semaglutide-prescription-online/',
  },
  openGraph: {
    title: "Same Day Semaglutide Prescription: Fast Online Doctors",
    description: "Get a same day semaglutide prescription online. Connect with telehealth doctors quickly, qualify digitally, and rush medication fulfillment to your door.",
    url: 'https://telehealthfx.com/blog/same-day-semaglutide-prescription-online/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/same_day_semaglutide.jpg",
        width: 1200,
        height: 675,
        alt: "Same Day Semaglutide Prescription Online Fast Doctors",
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
        "@id": "https://telehealthfx.com/blog/same-day-semaglutide-prescription-online/#webpage",
        "url": "https://telehealthfx.com/blog/same-day-semaglutide-prescription-online/",
        "headline": "Same Day Semaglutide Prescription: Fast Online Doctors",
        "description": "Get a same day semaglutide prescription online. Connect with telehealth doctors quickly, qualify digitally, and rush medication fulfillment to your door.",
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
        "@id": "https://telehealthfx.com/blog/same-day-semaglutide-prescription-online/#faq",
        "mainEntity": [
        {
                "@type": "Question",
                "name": "How quickly can a telehealth doctor prescribe semaglutide?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "At Telehealth FX, our board-certified physicians review submitted health profiles asynchronously and issue qualifying prescriptions within 24 hours."
                }
        },
        {
                "@type": "Question",
                "name": "Do I need to schedule a live video call to get prescribed?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "In most states, asynchronous questionnaire intake is legally permitted and medically validated, allowing you to complete your consult anytime without scheduling calls."
                }
        },
        {
                "@type": "Question",
                "name": "Are there extra charges for fast physician review?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Telehealth FX provides expedited 24-hour medical review at zero additional charge\u2014all care is included in the $99 first-month promo and $190\u2013$199/month regular rate."
                }
        },
        {
                "@type": "Question",
                "name": "Can I get starter doses immediately without backorders?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Our 503A compounding pharmacy partners maintain robust inventory of 0.25mg and 0.5mg starter doses, avoiding retail brand pharmacy backorders."
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
      <BlogSameDaySemaglutide />
    </>
  );
}
