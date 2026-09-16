import { BlogDirectPaySemaglutide } from "../../../components/blog-direct-pay-semaglutide-pricing-breakdown.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Direct Pay Semaglutide: Transparent Pricing & Fee Audit",
  description: "Understand direct pay semaglutide. Review complete transparent pricing, zero hidden consultation fees, and simple cash-pay checkout for medical weight loss.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/direct-pay-semaglutide-pricing-breakdown/',
  },
  openGraph: {
    title: "Direct Pay Semaglutide: Transparent Pricing & Fee Audit",
    description: "Understand direct pay semaglutide. Review complete transparent pricing, zero hidden consultation fees, and simple cash-pay checkout for medical weight loss.",
    url: 'https://telehealthfx.com/blog/direct-pay-semaglutide-pricing-breakdown/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/direct_pay_semaglutide.jpg",
        width: 1200,
        height: 675,
        alt: "Direct Pay Semaglutide: Transparent Pricing & Fee Audit",
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
        "@id": "https://telehealthfx.com/blog/direct-pay-semaglutide-pricing-breakdown/#webpage",
        "url": "https://telehealthfx.com/blog/direct-pay-semaglutide-pricing-breakdown/",
        "headline": "Direct Pay Semaglutide: Transparent Pricing & Fee Audit",
        "description": "Understand direct pay semaglutide. Review complete transparent pricing, zero hidden consultation fees, and simple cash-pay checkout for medical weight loss.",
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
        "@id": "https://telehealthfx.com/blog/direct-pay-semaglutide-pricing-breakdown/#faq",
        "mainEntity": [
        {
          "@type": "Question",
          "name": "What does direct-pay healthcare mean for GLP-1 weight loss?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Direct pay means you pay a transparent, all-inclusive cash price directly to the telehealth provider. You bypass insurance prior authorization denials, co-pays, and deductible requirements entirely."
          }
        },
        {
          "@type": "Question",
          "name": "Are there recurring membership or platform subscription fees?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Telehealth FX charges zero monthly subscription dues. You only pay for your medication refills when you need them."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use HSA or FSA funds to pay for direct-pay semaglutide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Because compounded semaglutide is prescribed by licensed doctors for medically supervised weight loss and obesity management, it is typically eligible for HSA/FSA reimbursement."
          }
        },
        {
          "@type": "Question",
          "name": "What happens if my medical history is not approved by the physician?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If the board-certified doctor determines that GLP-1 therapy is medically contraindicated for you, your payment is 100% refunded immediately."
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
      <BlogDirectPaySemaglutide />
    </>
  );
}
