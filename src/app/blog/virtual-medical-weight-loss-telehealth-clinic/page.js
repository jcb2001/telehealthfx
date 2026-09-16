import { BlogVirtualWeightLossClinic } from "../../../components/blog-virtual-medical-weight-loss-telehealth-clinic.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Online Clinic for Weight Loss Shots: Top Virtual Care",
  description: "Choose the best online clinic for weight loss shots. Compare licensed telehealth platforms, physician qualifications, flat-rate pricing, and ongoing support.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/virtual-medical-weight-loss-telehealth-clinic/',
  },
  openGraph: {
    title: "Online Clinic for Weight Loss Shots: Top Virtual Care",
    description: "Choose the best online clinic for weight loss shots. Compare licensed telehealth platforms, physician qualifications, flat-rate pricing, and ongoing support.",
    url: 'https://telehealthfx.com/blog/virtual-medical-weight-loss-telehealth-clinic/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/online_clinic_weight_loss.jpg",
        width: 1200,
        height: 675,
        alt: "Online Clinic for Weight Loss Shots: Top Virtual Care",
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
        "@id": "https://telehealthfx.com/blog/virtual-medical-weight-loss-telehealth-clinic/#webpage",
        "url": "https://telehealthfx.com/blog/virtual-medical-weight-loss-telehealth-clinic/",
        "headline": "Online Clinic for Weight Loss Shots: Top Virtual Care",
        "description": "Choose the best online clinic for weight loss shots. Compare licensed telehealth platforms, physician qualifications, flat-rate pricing, and ongoing support.",
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
        "@id": "https://telehealthfx.com/blog/virtual-medical-weight-loss-telehealth-clinic/#faq",
        "mainEntity": [
        {
          "@type": "Question",
          "name": "Are online weight loss doctors legally licensed to prescribe in my state?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Telehealth FX works exclusively with US-licensed, board-certified medical doctors credentialed across all 50 states who review your medical history and BMI digitally."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to schedule an awkward live video call to get prescribed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Telehealth FX utilizes asynchronous digital health evaluations. You complete a clinical intake questionnaire in 3 minutes on your phone, which our physicians review within 24 hours."
          }
        },
        {
          "@type": "Question",
          "name": "How does Telehealth FX compare to big-telehealth brands like Ro or Hims?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike platforms that bill recurring $99 monthly membership dues on top of medication costs, Telehealth FX charges zero membership dues, includes all doctor visits, and provides flat-rate pricing across all dose tiers."
          }
        },
        {
          "@type": "Question",
          "name": "Can I message my physician if I have questions during my treatment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Continuous digital clinical messaging with your medical team is included at no additional charge throughout your weight loss journey."
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
      <BlogVirtualWeightLossClinic />
    </>
  );
}
