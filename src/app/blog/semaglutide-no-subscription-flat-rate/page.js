import { BlogSemaglutideNoSubscription } from "../../../components/blog-semaglutide-no-subscription-flat-rate.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Semaglutide No Subscription: Pure Flat-Rate Care in 2026",
  description: "Buy semaglutide online with no subscription dues. Get compounded semaglutide from $99 first month promo, then $190/mo with doctor care and free shipping.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/semaglutide-no-subscription-flat-rate/',
  },
  openGraph: {
    title: "Semaglutide No Subscription: Pure Flat-Rate Care in 2026",
    description: "Buy semaglutide online with no subscription dues. Get compounded semaglutide from $99 first month promo, then $190/mo with doctor care and free shipping.",
    url: 'https://telehealthfx.com/blog/semaglutide-no-subscription-flat-rate/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/semaglutide_no_subscription.jpg",
        width: 1200,
        height: 675,
        alt: "Semaglutide No Subscription Flat-Rate Telehealth Care",
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
        "@id": "https://telehealthfx.com/blog/semaglutide-no-subscription-flat-rate/#webpage",
        "url": "https://telehealthfx.com/blog/semaglutide-no-subscription-flat-rate/",
        "headline": "Semaglutide No Subscription: Pure Flat-Rate Care in 2026",
        "description": "Buy semaglutide online with no subscription dues. Get compounded semaglutide from $99 first month promo, then $190/mo with doctor care and free shipping.",
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
        "@id": "https://telehealthfx.com/blog/semaglutide-no-subscription-flat-rate/#faq",
        "mainEntity": [
        {
                "@type": "Question",
                "name": "Can I buy semaglutide without an ongoing subscription?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Telehealth FX offers flexible month-to-month care where you only pay for your medication refills with zero recurring membership club dues or lock-in contracts."
                }
        },
        {
                "@type": "Question",
                "name": "What happens if I need to pause my treatment?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "You can pause or stop refills at any time with a single message to your care team without incurring cancellation penalties or administrative fees."
                }
        },
        {
                "@type": "Question",
                "name": "Are doctor consultations included without subscription fees?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Initial physician evaluations and ongoing clinical messaging are 100% bundled into the transparent $99 promo and $190–$199/month medication price."
                }
        },
        {
                "@type": "Question",
                "name": "How does Telehealth FX keep prices so low without subscriptions?",
                "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We operate lean, direct partnerships with high-volume accredited 503A compounding pharmacies, eliminating venture-capital advertising overhead and passing savings directly to patients."
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
      <BlogSemaglutideNoSubscription />
    </>
  );
}
