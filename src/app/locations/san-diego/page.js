import { LocationSanDiego } from '../../../components/location-san-diego';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/san-diego/',
  },
  title: "GLP-1 Weight Loss Prescriptions in San Diego | Telehealth FX",
  description: "Bypass the I-5 traffic and waitlists at Scripps Health. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by California-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in San Diego | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in San Diego.",
    url: 'https://telehealthfx.com/locations/san-diego',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function SanDiegoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/san-diego#clinic",
        "name": "Telehealth FX - San Diego GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/san-diego",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing California-licensed physician evaluations and GLP-1 prescriptions for residents of San Diego County and Southern California.",
        "areaServed": {
          "@type": "City",
          "name": "San Diego",
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
            "name": "Do I need to visit a physical clinic in San Diego to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Medical Board of California telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a California-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in San Diego."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in California?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Medical Board of California, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all California addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at UC San Diego Health or Scripps?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Ralphs pharmacies and the 6-month waitlists typical of major hospital metabolic centers in San Diego."
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
      <LocationSanDiego />
    </>
  );
}
