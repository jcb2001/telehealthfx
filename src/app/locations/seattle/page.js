import { LocationSeattle } from '../../../components/location-seattle';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/seattle/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Seattle | Telehealth FX",
  description: "Bypass the I-5 traffic and waitlists at UW Medicine. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Washington-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Seattle | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Seattle.",
    url: 'https://telehealthfx.com/locations/seattle',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function SeattlePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/seattle#clinic",
        "name": "Telehealth FX - Seattle GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/seattle",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Washington-licensed physician evaluations and GLP-1 prescriptions for residents of King County, Snohomish County, Pierce County.",
        "areaServed": {
          "@type": "City",
          "name": "Seattle",
          "containedInPlace": {
            "@type": "State",
            "name": "Washington"
          }
        },
        "availableService": [
          {
            "@type": "MedicalTest",
            "name": "Asynchronous Metabolic Health Intake"
          },
          {
            "@type": "MedicalTherapy",
            "name": "GLP-1 Agonist Prescription"
          }
        ],
        "medicalSpecialty": "Endocrine",
        "isAcceptingNewPatients": true
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do I need to visit a physical clinic in Seattle to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Washington Medical Commission telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Washington-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Seattle."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Washington?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Washington Medical Commission, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all WA addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at UW Medicine and Swedish Health Services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Fred Meyer and Bartell Drugs pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the area."
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
      <LocationSeattle />
    </>
  );
}
