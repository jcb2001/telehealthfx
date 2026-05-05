import { LocationWashingtonDC } from '../../../components/location-washington-dc';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/washington-dc/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Washington D.C. | Telehealth FX",
  description: "Bypass the Beltway traffic and waitlists at MedStar Health. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Washington D.C. | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Washington D.C..",
    url: 'https://telehealthfx.com/locations/washington-dc',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function WashingtonDCPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/washington-dc#clinic",
        "name": "Telehealth FX - Washington D.C. GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/washington-dc",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing District of Columbia-licensed physician evaluations and GLP-1 prescriptions for residents of District of Columbia, Arlington County, Fairfax County.",
        "areaServed": {
          "@type": "City",
          "name": "Washington D.C.",
          "containedInPlace": {
            "@type": "State",
            "name": "District of Columbia"
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
            "name": "Do I need to visit a physical clinic in Washington D.C. to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under DC Board of Medicine telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a District of Columbia-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Washington D.C.."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in District of Columbia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the DC Board of Medicine, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all DC addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at MedStar Health and Johns Hopkins?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local CVS and Giant Pharmacy pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the area."
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
      <LocationWashingtonDC />
    </>
  );
}
