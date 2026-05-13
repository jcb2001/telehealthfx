import { BlogSemaglutideMicrodosing2026 } from '../../components/blog-semaglutide-microdosing-2026';

export const metadata = {
  title: "Semaglutide Microdosing: Split Doses & Zero Side Effects (2026)",
  description: "Learn how microdosing and splitting your GLP-1 dose can eliminate nausea, stabilize blood sugar, and provide a custom titration schedule.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/semaglutide-microdosing-2026/#webpage",
        "url": "https://telehealthfx.com/blog/semaglutide-microdosing-2026/",
        "name": "Semaglutide Microdosing: The Secret to Zero Side Effects?",
        "description": "Clinical guide to fractional titration and dose splitting for highly sensitive patients on compounded GLP-1 medications.",
        "publisher": { "@id": "https://telehealthfx.com/#organization" },
        "inLanguage": "en-US",
        "audience": {
          "@type": "MedicalAudience",
          "audienceType": "Patients and Healthcare Professionals"
        }
      },
      {
        "@type": "Article",
        "@id": "https://telehealthfx.com/blog/semaglutide-microdosing-2026/#article",
        "isPartOf": { "@id": "https://telehealthfx.com/blog/semaglutide-microdosing-2026/#webpage" },
        "headline": "Semaglutide Microdosing: The Secret to Zero Side Effects?",
        "datePublished": "2026-05-13T08:00:00+00:00",
        "dateModified": "2026-05-13T08:00:00+00:00",
        "mainEntityOfPage": { "@id": "https://telehealthfx.com/blog/semaglutide-microdosing-2026/#webpage" },
        "author": {
          "@type": "Organization",
          "name": "Telehealth FX Clinical Team",
          "url": "https://telehealthfx.com/"
        },
        "image": "https://telehealthfx.com/assets/semaglutide-microdosing-featured.png"
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/semaglutide-microdosing-2026/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is semaglutide microdosing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Microdosing involves using compounded semaglutide from a vial to inject fractional doses (like 0.35mg) or split a weekly dose into two smaller injections (e.g., half on Sunday, half on Thursday) to minimize side effects."
            }
          },
          {
            "@type": "Question",
            "name": "Does splitting my dose reduce nausea?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Splitting your dose creates a flat pharmacokinetic curve in your bloodstream, eliminating the massive 'peak' of medication that typically triggers nausea 24-48 hours after a full weekly injection."
            }
          },
          {
            "@type": "Question",
            "name": "Can I microdose with an Ozempic or Wegovy pen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Wegovy pens are single-use auto-injectors that deliver a set dose and cannot be adjusted. Ozempic pens have a dial, but the clicks are preset. True microdosing requires a sterile vial and an insulin syringe."
            }
          }
        ]
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/blog/semaglutide-microdosing-2026/#product",
        "name": "Telehealth FX Custom GLP-1 Dosing",
        "description": "Provider-managed compounded GLP-1 programs allowing for custom titration and microdosing protocols.",
        "brand": {
          "@type": "Brand",
          "name": "Telehealth FX"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1280"
        }
      },
      {
        "@type": "Review",
        "@id": "https://telehealthfx.com/blog/semaglutide-microdosing-2026/#review",
        "itemReviewed": { "@id": "https://telehealthfx.com/blog/semaglutide-microdosing-2026/#product" },
        "author": {
          "@type": "Person",
          "name": "Jennifer R."
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "I am a super responder and 0.5mg made me terribly sick. My Telehealth FX doctor switched me to a compounded vial so I could dose exactly 0.35mg. The nausea is gone and I'm still losing 2lbs a week."
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/blog/semaglutide-microdosing-2026/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://telehealthfx.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://telehealthfx.com/blog/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Semaglutide Microdosing",
            "item": "https://telehealthfx.com/blog/semaglutide-microdosing-2026/"
          }
        ]
      },
      {
        "@type": "MedicalOrganization",
        "@id": "https://telehealthfx.com/#organization",
        "name": "Telehealth FX",
        "url": "https://telehealthfx.com/",
        "logo": "https://telehealthfx.com/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogSemaglutideMicrodosing2026 />
    </>
  );
}
