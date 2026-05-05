import { LocationDallas } from '../../../components/location-dallas';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/dallas/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Dallas | Telehealth FX",
  description: "Bypass the US-75 traffic and waitlists at UT Southwestern. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Texas-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Dallas | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Dallas.",
    url: 'https://telehealthfx.com/locations/dallas',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function DallasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/dallas#clinic",
        "name": "Telehealth FX - Dallas GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/dallas",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Texas-licensed physician evaluations and GLP-1 prescriptions for residents of Dallas County, Collin County, and the DFW Metroplex.",
        "areaServed": {
          "@type": "City",
          "name": "Dallas",
          "containedInPlace": {
            "@type": "State",
            "name": "Texas"
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
            "name": "Do I need to visit a physical clinic in Dallas to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Texas Medical Board telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Texas-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Dallas."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Texas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Texas Medical Board, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Texas addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at UT Southwestern or Baylor Scott & White?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Tom Thumb pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the Metroplex."
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
      <LocationDallas />
    </>
  );
}
