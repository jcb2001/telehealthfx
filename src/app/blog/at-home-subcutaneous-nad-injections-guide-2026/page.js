import { BlogNadSubcutaneousInjections } from "../../../components/blog-nad-subcutaneous-injections.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  title: "At-Home Subcutaneous NAD+ Injections: Clinical Protocol & Cost (2026)",
  description: "Complete guide to at-home subcutaneous NAD+ injections. Learn dosing protocols, cellular bioavailability vs IV infusions, and how to get prescribed NAD+ online for $99/mo.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/at-home-subcutaneous-nad-injections-guide-2026/',
  },
  openGraph: {
    title: "At-Home Subcutaneous NAD+ Injections: Clinical Protocol & Cost (2026)",
    description: "Complete guide to at-home subcutaneous NAD+ injections. Learn dosing protocols, cellular bioavailability vs IV infusions, and how to get prescribed NAD+ online for $99/mo.",
    url: 'https://telehealthfx.com/blog/at-home-subcutaneous-nad-injections-guide-2026/',
    siteName: 'Telehealth FX',
    images: [
      {
        url: "https://telehealthfx.com/assets/nad-subcutaneous-injections-featured.jpg",
        width: 1200,
        height: 675,
        alt: "At-Home Subcutaneous NAD+ Injections Clinical Guide and Protocol",
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
        "@id": "https://telehealthfx.com/blog/at-home-subcutaneous-nad-injections-guide-2026/#webpage",
        "url": "https://telehealthfx.com/blog/at-home-subcutaneous-nad-injections-guide-2026/",
        "headline": "At-Home Subcutaneous NAD+ Injections: Clinical Protocol & Cost (2026)",
        "description": "Complete guide to at-home subcutaneous NAD+ injections. Learn dosing protocols, cellular bioavailability vs IV infusions, and how to get prescribed NAD+ online for $99/mo.",
        "datePublished": "2026-10-11",
        "dateModified": "2026-10-11",
        "image": "https://telehealthfx.com/assets/nad-subcutaneous-injections-featured.jpg",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst",
          "url": "https://telehealthfx.com/about/"
        },
        "reviewedBy": {
          "@type": "Person",
          "name": "Marcus Vance, M.D.",
          "jobTitle": "Board-Certified Medical Director"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "url": "https://telehealthfx.com"
        },
        "about": [
          {
            "@type": "Drug",
            "name": "Nicotinamide Adenine Dinucleotide",
            "sameAs": "https://www.wikidata.org/wiki/Q188177"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/at-home-subcutaneous-nad-injections-guide-2026/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Are subcutaneous NAD+ injections as effective as IV drips?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Subcutaneous injections offer over 95% bioavailability by entering systemic microcapillary beds directly, bypassing gastrointestinal destruction without the severe chest tightness or prolonged 3-hour time commitment of IV drip infusions."
            }
          },
          {
            "@type": "Question",
            "name": "Why don't oral NAD+ supplements work as well as injections?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oral NAD+ and precursor molecules are extensively degraded in the digestive tract by CD38 and intestinal mucosal enzymes into basic nicotinamide before reaching systemic blood circulation."
            }
          },
          {
            "@type": "Question",
            "name": "How much do at-home NAD+ injections cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Through Telehealth FX, pharmaceutical-grade compounded NAD+ injection kits start at $99 to $149 per month, which includes medical evaluation, medication vials, injection supplies, and free overnight delivery."
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
      <BlogNadSubcutaneousInjections />
    </>
  );
}
