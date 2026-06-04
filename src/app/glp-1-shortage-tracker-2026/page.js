import React from 'react';
import { Glp1ShortageTracker2026 } from '../../components/glp-1-shortage-tracker-2026.jsx';

export const metadata = {
  title: "2026 GLP-1 Shortage Tracker: Ozempic, Wegovy, Mounjaro Updates | Telehealth FX",
  description: "Live 2026 updates on the GLP-1 Ghost Shortage. Why the FDA says Semaglutide is resolved but your pharmacy is still out of stock, and how to get compounded alternatives legally.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalWebPage", "FAQPage"],
    "name": "2026 GLP-1 Shortage Tracker: Ozempic, Wegovy, Mounjaro Updates",
    "description": "Live 2026 updates on the GLP-1 Ghost Shortage. Why the FDA says Semaglutide is resolved but your pharmacy is still out of stock, and how to get compounded alternatives legally.",
    "publisher": {
      "@type": "Organization",
      "name": "Telehealth FX",
      "logo": {
        "@type": "ImageObject",
        "url": "https://telehealthfx.com/logo.png"
      }
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the FDA Semaglutide shortage actually resolved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Officially, yes. The FDA removed Semaglutide (Wegovy and Ozempic) from the national drug shortage list due to abundant API supply. However, regional supply chain issues and backorders at local pharmacies persist due to the auto-injector pen manufacturing bottleneck, making the drug practically unavailable for many patients."
        }
      },
      {
        "@type": "Question",
        "name": "Are compounded GLP-1s illegal now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. While bulk-manufacturing 503B facilities are facing strict regulatory clampdowns, 503A compounding pharmacies can still legally formulate patient-specific prescriptions. By adding beneficial ingredients like Vitamin B12 to reduce nausea, the medication becomes distinct from the commercial brand and remains legally compliant."
        }
      },
      {
        "@type": "Question",
        "name": "How will Medicare coverage affect the shortage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Starting July 1, 2026, Medicare's expansion of coverage for weight-loss drugs will drastically increase demand. Supply chain experts predict this will exacerbate the Ghost Shortage at local pharmacies, particularly for injectable starter doses, as millions of new patients gain access to prescriptions."
        }
      },
      {
        "@type": "Question",
        "name": "Are the new oral GLP-1s easier to find?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oral options like the Wegovy pill and Eli Lilly's Foundayo bypass the auto-injector bottleneck, making their manufacturing process faster. However, early demand in 2026 has been so high that they are currently experiencing intermittent, regional stockouts similar to the injectables."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Glp1ShortageTracker2026 />
    </>
  );
}
