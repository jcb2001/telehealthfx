import { BlogBestCompoundedSemaglutideTelehealthProviders } from "../../../components/blog-best-compounded-semaglutide-telehealth-providers.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Best Compounded Semaglutide Telehealth Providers (2026 Ranked & Reviewed)",
  description: "Comprehensive 2026 review of the best online compounded semaglutide telehealth providers. Compare pricing, 503A pharmacy quality, and zero-fee flat-rate care.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/best-compounded-semaglutide-telehealth-providers/',
  },
  openGraph: {
    title: "Best Compounded Semaglutide Telehealth Providers (2026 Ranked & Reviewed)",
    description: "Comprehensive 2026 review of the best online compounded semaglutide telehealth providers. Compare pricing, 503A pharmacy quality, and zero-fee flat-rate care.",
    url: 'https://telehealthfx.com/blog/best-compounded-semaglutide-telehealth-providers/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/best-semaglutide-providers-2026-featured.png",
        width: 1200,
        height: 675,
        alt: "Best Compounded Semaglutide Telehealth Providers 2026",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://telehealthfx.com/#organization",
        "name": "Telehealth FX",
        "url": "https://telehealthfx.com",
        "logo": "https://telehealthfx.com/assets/logo.png"
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/best-compounded-semaglutide-telehealth-providers/#webpage",
        "url": "https://telehealthfx.com/blog/best-compounded-semaglutide-telehealth-providers/",
        "headline": metadata.title,
        "description": metadata.description,
        "datePublished": "2026-10-20",
        "dateModified": "2026-10-20",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst",
          "url": "https://telehealthfx.com/about/"
        },
        "publisher": {
          "@id": "https://telehealthfx.com/#organization"
        },
        "about": [
          {
            "@type": "MedicalTherapy",
            "name": "Compounded Semaglutide Telehealth"
          }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Top Compounded Semaglutide Telehealth Providers 2026",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Telehealth FX (Best Overall & Flat Rate Value)"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Henry Meds"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Ro Body"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Mochi Health"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Ivim Health"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which online semaglutide provider is cheapest overall?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Telehealth FX offers the lowest true all-inclusive cost at $79 per month flat across all dosage strengths, with zero monthly membership dues, zero doctor fees, and free cold-chain home shipping."
            }
          },
          {
            "@type": "Question",
            "name": "Can I switch semaglutide providers without restarting my starter dose?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Telehealth FX provides seamless dose matching, allowing patients to maintain their current maintenance dosage level by submitting proof of their existing active prescription."
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
      <BlogBestCompoundedSemaglutideTelehealthProviders />
    </>
  );
}
