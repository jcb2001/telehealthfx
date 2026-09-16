import { BlogStartWeightLossShotsToday } from "../../../components/blog-start-weight-loss-shots-today-online.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Start Weight Loss Shots Today: Fast Online GLP-1 Care",
  description: "Start weight loss shots today online. Complete a simple 3-minute medical intake, receive physician approval, and get your starter kit delivered in days.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/start-weight-loss-shots-today-online/',
  },
  openGraph: {
    title: "Start Weight Loss Shots Today: Fast Online GLP-1 Care",
    description: "Start weight loss shots today online. Complete a simple 3-minute medical intake, receive physician approval, and get your starter kit delivered in days.",
    url: 'https://telehealthfx.com/blog/start-weight-loss-shots-today-online/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/start_shots_today.jpg",
        width: 1200,
        height: 675,
        alt: "Start Weight Loss Shots Today Online Fast GLP-1 Care",
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
        "@id": "https://telehealthfx.com/blog/start-weight-loss-shots-today-online/#webpage",
        "url": "https://telehealthfx.com/blog/start-weight-loss-shots-today-online/",
        "headline": "Start Weight Loss Shots Today: Fast Online GLP-1 Care",
        "description": "Start weight loss shots today online. Complete a simple 3-minute medical intake, receive physician approval, and get your starter kit delivered in days.",
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
        "@id": "https://telehealthfx.com/blog/start-weight-loss-shots-today-online/#faq",
        "mainEntity": [
        {
                "@type": "Question",
                "name": "What do I need to start weight loss shots today?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You just need 3 minutes to complete our online clinical health intake, entering your height, weight, medical history, and weight management goals."
                }
        },
        {
                "@type": "Question",
                "name": "How soon will I receive my medication after ordering?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Once approved by our physician (usually within 24 hours), your medication is compounded and shipped via 2-day express cold-chain courier to your door."
                }
        },
        {
                "@type": "Question",
                "name": "How does semaglutide curb appetite from day one?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Semaglutide mimics endogenous GLP-1 hormones, binding to hypothalamic POMC neurons to turn down hunger signaling and slowing gastric emptying."
                }
        },
        {
                "@type": "Question",
                "name": "Are the injections painful to administer?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. Our patients use ultra-fine 31-gauge insulin syringes that are just 5/16 inch long, creating a virtually painless subcutaneous injection experience."
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
      <BlogStartWeightLossShotsToday />
    </>
  );
}
