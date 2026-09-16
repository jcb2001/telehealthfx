import { BlogPillsLikeOzempic } from "../../../components/blog-glp-1-pills-vs-injections-weight-loss.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Pills Like Ozempic Online: Oral Semaglutide vs Shots",
  description: "Explore pills like Ozempic online. Learn how oral semaglutide compares to weekly subcutaneous injections regarding bioavailability, absorption, and weight loss.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp-1-pills-vs-injections-weight-loss/',
  },
  openGraph: {
    title: "Pills Like Ozempic Online: Oral Semaglutide vs Shots",
    description: "Explore pills like Ozempic online. Learn how oral semaglutide compares to weekly subcutaneous injections regarding bioavailability, absorption, and weight loss.",
    url: 'https://telehealthfx.com/blog/glp-1-pills-vs-injections-weight-loss/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/pills_like_ozempic.jpg",
        width: 1200,
        height: 675,
        alt: "Pills Like Ozempic Online: Oral Semaglutide vs Shots",
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
        "@id": "https://telehealthfx.com/blog/glp-1-pills-vs-injections-weight-loss/#webpage",
        "url": "https://telehealthfx.com/blog/glp-1-pills-vs-injections-weight-loss/",
        "headline": "Pills Like Ozempic Online: Oral Semaglutide vs Shots",
        "description": "Explore pills like Ozempic online. Learn how oral semaglutide compares to weekly subcutaneous injections regarding bioavailability, absorption, and weight loss.",
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
        "@id": "https://telehealthfx.com/blog/glp-1-pills-vs-injections-weight-loss/#faq",
        "mainEntity": [
        {
          "@type": "Question",
          "name": "Do oral GLP-1 pills work as well as weekly injections?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Swallowed oral semaglutide suffers from extensive stomach acid degradation (less than 1% oral absorption). However, modern sublingual oral dissolving tablets bypass stomach enzymes via mucosal absorption, offering strong appetite suppression without needles."
          }
        },
        {
          "@type": "Question",
          "name": "What is the pricing for oral dissolving tablets versus injectable shots?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At Telehealth FX, oral dissolvable Semaglutide tablets start at a $149 first month promotional rate (then $217–$249/mo), while injectable Semaglutide starts at a $99 first month promo (then $190/mo)."
          }
        },
        {
          "@type": "Question",
          "name": "Can I switch from oral tablets to injectable shots later if I want?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Many patients start on oral tablets to overcome initial needle hesitation and subsequently switch to weekly subcutaneous injections for enhanced metabolic efficacy."
          }
        },
        {
          "@type": "Question",
          "name": "Do oral GLP-1 pills require fasting when taken?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional oral tablets require taking them with 4 oz of water 30 minutes before any food or other medications. Sublingual dissolving tablets are placed under the tongue until dissolved."
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
      <BlogPillsLikeOzempic />
    </>
  );
}
