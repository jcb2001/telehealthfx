import { BlogWegovyFdaLabel } from "../../../components/blog-wegovy-fda-label.jsx";

export const metadata = {
  title: "Wegovy FDA Label Decoded: Criteria & Off-Label Access | Telehealth FX",
  description: "We break down the exact Wegovy FDA label criteria for weight loss, the clinical trial data, and how to access compounded semaglutide if your insurance denies you.",
};

export default function Page() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://telehealthfx.com/blog/wegovy-fda-label/#article",
      "headline": "Wegovy FDA Label Decoded: Criteria & Off-Label Access",
      "description": "We break down the exact Wegovy FDA label criteria for weight loss, the clinical trial data, and how to access compounded semaglutide if your insurance denies you.",
      "image": "https://telehealthfx.com/assets/wegovy-featured.png",
      "author": {
        "@type": "Person",
        "name": "Julian Mercer, M.S.",
          "url": "https://telehealthfx.com/about",
        "jobTitle": "Lead Bio-Systems Analyst"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Telehealth FX",
        "logo": {
          "@type": "ImageObject",
          "url": "https://telehealthfx.com/assets/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://telehealthfx.com/blog/wegovy-fda-label/"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://telehealthfx.com/blog/wegovy-fda-label/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the difference between the Wegovy label and the Ozempic label?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "They are the exact same drug (semaglutide). Ozempic is FDA-approved only for Type 2 Diabetes, with a maximum dose of 2.0mg. Wegovy is FDA-approved for chronic weight management, with a maximum therapeutic dose of 2.4mg. Insurance will almost never cover Ozempic for weight loss, and will only cover Wegovy if you meet the strict BMI criteria."
          }
        },
        {
          "@type": "Question",
          "name": "Can a doctor prescribe Wegovy if my BMI is under 27?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A doctor can prescribe the branded drug \"off-label\", but your insurance will 100% deny the claim, leaving you with the $1,300 bill. This is why patients with lower BMIs who need metabolic intervention utilize compounded semaglutide through telehealth providers."
          }
        },
        {
          "@type": "Question",
          "name": "Is compounded semaglutide FDA approved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No compounded medication is FDA approved, because the FDA only approves manufactured drugs, not individually mixed compounds. However, the compounding process and the pharmacies themselves are strictly regulated by the FDA and state pharmacy boards, ensuring the safety and sterility of the medication."
          }
        },
        {
          "@type": "Question",
          "name": "Does the FDA label say I have to take it forever?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The FDA label indicates Wegovy for \"chronic weight management.\" Clinical data shows that if you stop the medication without making permanent, drastic changes to your diet and lifestyle, the appetite returns and the weight is typically regained. It is a tool to fix the metabolism while you build sustainable habits."
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