import React from 'react';
import Glp1ShortageTracker2026 from '../../components/glp-1-shortage-tracker-2026.jsx';

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
        "name": "Is the FDA Semaglutide shortage resolved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Officially, the FDA removed Semaglutide (Wegovy and Ozempic) from the national drug shortage list in late 2025/early 2026. However, regional supply chain issues and backorders at local pharmacies persist, making the drug practically unavailable for many patients."
        }
      },
      {
        "@type": "Question",
        "name": "Are compounded GLP-1s illegal now?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. While pharmacies can no longer mass-produce exact copies of commercial GLP-1s under the shortage exemption, 503A compounding pharmacies can still legally formulate patient-specific prescriptions. These often include beneficial additions like Vitamin B12 to reduce nausea, making them distinct from the commercial brand and legally compliant."
        }
      },
      {
        "@type": "Question",
        "name": "When will local pharmacies have Zepbound and Wegovy consistently in stock?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Industry analysts predict that the auto-injector pen bottleneck will not be fully resolved until new manufacturing facilities come online in late 2026 or early 2027. Until then, local availability will remain highly unpredictable."
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
