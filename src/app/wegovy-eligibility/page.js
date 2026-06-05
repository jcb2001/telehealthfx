import { BlogWegovyEligibility } from "../../components/blog-wegovy-eligibility.jsx";

export const metadata = {
  title: "Do You Qualify for Wegovy? 2026 BMI & Comorbidity Requirements",
  description: "Wegovy is FDA-approved for adults with a BMI of 30+, or 27+ with one weight-related condition. See the complete 2026 eligibility criteria, the full comorbidity list, pediatric rules, and how to check if you're a candidate.",
  alternates: {
    canonical: "https://telehealthfx.com/wegovy-eligibility",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Do You Qualify for Wegovy? 2026 BMI & Comorbidity Requirements",
    description: "Wegovy is FDA-approved for adults with a BMI of 30+, or 27+ with one weight-related condition. See the complete 2026 eligibility criteria, the full comorbidity list, pediatric rules, and how to check if you're a candidate.",
  }
};

export default function Page() {
  const medicalWebPageLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Do You Qualify for Wegovy? The Complete 2026 Eligibility Guide",
    "url": "https://telehealthfx.com/wegovy-eligibility",
    "lastReviewed": "2026-06-05",
    "reviewedBy": {
      "@type": "Person",
      "name": "Julian Mercer, MD"
    },
    "about": {
      "@type": "Drug",
      "name": "Wegovy (semaglutide)"
    },
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    },
    "citation": [
      "https://doi.org/10.1056/NEJMoa2032183",
      "https://doi.org/10.1056/NEJMoa2208601",
      "https://doi.org/10.1056/NEJMoa2307563",
      "https://doi.org/10.1056/NEJMoa2413258"
    ]
  };

  const faqPageLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What BMI do you need to qualify for Wegovy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You generally need a BMI of 30 or higher, or a BMI of 27 or higher if you also have at least one weight-related condition such as high blood pressure, type 2 diabetes, or high cholesterol."
        }
      },
      {
        "@type": "Question",
        "name": "Can you get Wegovy with a BMI of 27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but only if you also have a weight-related comorbidity. A BMI between 27 and 29.9 on its own does not meet the FDA criteria for adults."
        }
      },
      {
        "@type": "Question",
        "name": "What is the FDA indication for Wegovy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wegovy is FDA-approved for chronic weight management in adults with obesity (BMI 30 or higher) or overweight (BMI 27 or higher) with at least one weight-related condition, for adolescents aged 12 and older with obesity, and to reduce cardiovascular risk in certain adults with established cardiovascular disease plus obesity or overweight."
        }
      },
      {
        "@type": "Question",
        "name": "What conditions qualify you for Wegovy at a BMI of 27?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Commonly cited qualifying conditions include high blood pressure, type 2 diabetes, high cholesterol or triglycerides, obstructive sleep apnea, and cardiovascular disease. A licensed provider confirms whether a specific diagnosis qualifies."
        }
      },
      {
        "@type": "Question",
        "name": "Is there an age requirement for Wegovy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wegovy is approved for adults and for children aged 12 and older who have obesity, defined as a BMI at or above the 95th percentile for their age and sex."
        }
      },
      {
        "@type": "Question",
        "name": "Who should not take Wegovy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wegovy is generally not appropriate for people with a personal or family history of medullary thyroid carcinoma or MEN 2, a serious allergy to semaglutide, or who are pregnant or breastfeeding. A provider reviews your history before prescribing."
        }
      },
      {
        "@type": "Question",
        "name": "Is compounded semaglutide the same as Wegovy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Wegovy is a brand-name, FDA-approved product. Compounded semaglutide is a custom preparation made by compounding pharmacies and is not FDA-approved."
        }
      },
      {
        "@type": "Question",
        "name": "How do I find out if I qualify for Wegovy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Complete a short online eligibility check to be connected with a licensed provider who can review your BMI and health history and determine whether treatment is appropriate."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }} />
      <BlogWegovyEligibility />
    </>
  );
}
