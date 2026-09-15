import { BlogWegovyFdaLabel } from "../../../components/blog-wegovy-fda-label.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Wegovy FDA Label: Official BMI Criteria & Indications (2026)",
  description: "Official FDA Wegovy prescribing criteria: BMI 30+ or BMI 27+ with comorbidity. Read clinical indications, boxed warnings, and affordable compounded options from $99/mo promo.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/wegovy-fda-label/',
  },
  openGraph: {
    title: "Wegovy FDA Label: Official BMI Criteria & Indications (2026)",
    description: "Official FDA Wegovy prescribing criteria: BMI 30+ or BMI 27+ with comorbidity. Read clinical indications, boxed warnings, and affordable compounded options from $99/mo promo.",
    url: 'https://telehealthfx.com/blog/wegovy-fda-label/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/wegovy-featured.png",
        width: 1200,
        height: 630,
        alt: "Wegovy FDA Label Prescribing Information Guide",
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
        "@id": "https://telehealthfx.com/blog/wegovy-fda-label/#article",
        "headline": "The Wegovy FDA Label Decoded: Criteria, Clinical Data, and Compounded Access",
        "description": "We break down the exact Wegovy FDA label criteria for weight loss, the clinical trial data, and what to know about alternative treatment options.",
        "image": "https://telehealthfx.com/assets/wegovy-featured.png",
        "datePublished": "2026-05-09",
        "dateModified": "2026-05-09",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "url": "https://telehealthfx.com/about/",
          "jobTitle": "Lead Bio-Systems Analyst"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "url": "https://telehealthfx.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://telehealthfx.com/assets/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://telehealthfx.com/blog/wegovy-fda-label/"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["#direct-answer-summary", ".ai-extractive-answer", ".key-takeaways-grid"]
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
            "@type": "MedicalEntity",
            "name": "Tirzepatide",
            "sameAs": "https://en.wikipedia.org/wiki/Tirzepatide",
            "code": {
              "@type": "MedicalCode",
              "code": "2601723",
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
        "@type": "OfferCatalog",
        "name": "SkinnyRx Verified Medical Weight Loss Plans",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "SkinnyRx Compounded Semaglutide (Injectable)",
            "price": "99.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2027-12-31",
            "description": "Doctor-prescribed compounded semaglutide weekly injections from 503A pharmacy with free cold-chain delivery. First month promo from $99.",
            "url": "https://telehealthfx.com/skinnyrx/"
          },
          {
            "@type": "Offer",
            "name": "SkinnyRx Compounded Tirzepatide (Injectable)",
            "price": "99.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2027-12-31",
            "description": "Dual GLP-1 and GIP receptor agonist compounded weekly injections from 503A pharmacy with free cold-chain delivery. First month promo from $99.",
            "url": "https://telehealthfx.com/skinnyrx/"
          },
          {
            "@type": "Offer",
            "name": "SkinnyRx Compounded Semaglutide Tablets",
            "price": "149.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "priceValidUntil": "2027-12-31",
            "description": "Needle-free daily oral dissolving sublingual semaglutide tablets from licensed 503A pharmacy. First month promo from $149.",
            "url": "https://telehealthfx.com/skinnyrx/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/wegovy-fda-label/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the difference between the Wegovy label and the Ozempic label?",
            "url": "https://telehealthfx.com/blog/wegovy-fda-label/#faq-difference",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "They are the exact same drug (semaglutide). Ozempic is FDA-approved only for Type 2 Diabetes, with a maximum dose of 2.0mg. Wegovy is FDA-approved for chronic weight management, with a maximum therapeutic dose of 2.4mg. Insurance will almost never cover Ozempic for weight loss, and will only cover Wegovy if you meet the strict BMI criteria."
            }
          },
          {
            "@type": "Question",
            "name": "Can a doctor prescribe Wegovy if my BMI is under 27?",
            "url": "https://telehealthfx.com/blog/wegovy-fda-label/#faq-off-label",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A doctor can prescribe the branded drug \"off-label\", but commercial insurance typically denies the claim, leaving patients with the $1,349 monthly retail bill. This is why patients requiring metabolic intervention utilize compounded semaglutide through SkinnyRx from $99 for the first month."
            }
          },
          {
            "@type": "Question",
            "name": "Is compounded semaglutide FDA approved?",
            "url": "https://telehealthfx.com/blog/wegovy-fda-label/#faq-compounding-status",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No compounded medication is FDA approved, because the FDA approves mass-manufactured pharmaceutical drugs, not individually customized preparations. However, patient-specific compounding through 503A pharmacies is authorized under Section 503A of the FD&C Act (21 U.S.C. § 353a) and subject to state pharmacy boards and USP <797> sterile compounding regulations."
            }
          },
          {
            "@type": "Question",
            "name": "Does the FDA label say I have to take it forever?",
            "url": "https://telehealthfx.com/blog/wegovy-fda-label/#faq-duration",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The FDA label indicates Wegovy for \"chronic weight management.\" Clinical data shows that if you stop the medication without making permanent, drastic changes to your diet and lifestyle, appetite returns. Telehealth FX pairs GLP-1 therapy with structured nutrition and muscle preservation counseling."
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
      <BlogWegovyFdaLabel />
    </>
  );
}