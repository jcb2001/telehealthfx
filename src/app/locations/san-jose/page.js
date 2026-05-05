import { LocationSanJose } from '../../../components/location-san-jose';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/san-jose/',
  },
  title: "GLP-1 Weight Loss Prescriptions in San Jose | Telehealth FX",
  description: "Bypass the Highway 101 traffic and waitlists at Stanford Health. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by California-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in San Jose | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in San Jose.",
    url: 'https://telehealthfx.com/locations/san-jose',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function SanJosePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/san-jose#clinic",
        "name": "Telehealth FX - San Jose GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/san-jose",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing California-licensed physician evaluations and GLP-1 prescriptions for residents of Santa Clara County, San Mateo County.",
        "areaServed": {
          "@type": "City",
          "name": "San Jose",
          "containedInPlace": {
            "@type": "State",
            "name": "California"
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
            "name": "Do I need to visit a physical clinic in San Jose to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Medical Board of California telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a California-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in San Jose."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in California?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Medical Board of California, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all CA addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Stanford Health Care and Kaiser Permanente?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Safeway and Walgreens pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the area."
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
      <LocationSanJose />
    </>
  );
}
