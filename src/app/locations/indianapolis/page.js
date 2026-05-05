import { LocationIndianapolis } from '../../../components/location-indianapolis';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/indianapolis/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Indianapolis | Telehealth FX",
  description: "Bypass the I-465 traffic and waitlists at IU Health. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Indiana-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Indianapolis | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Indianapolis.",
    url: 'https://telehealthfx.com/locations/indianapolis',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function IndianapolisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/indianapolis#clinic",
        "name": "Telehealth FX - Indianapolis GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/indianapolis",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Indiana-licensed physician evaluations and GLP-1 prescriptions for residents of Marion County, Hamilton County, Boone County.",
        "areaServed": {
          "@type": "City",
          "name": "Indianapolis",
          "containedInPlace": {
            "@type": "State",
            "name": "Indiana"
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
            "name": "Do I need to visit a physical clinic in Indianapolis to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Medical Licensing Board of Indiana telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Indiana-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Indianapolis."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Indiana?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Medical Licensing Board of Indiana, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all IN addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at IU Health and Ascension St. Vincent?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Meijer and Kroger pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the area."
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
      <LocationIndianapolis />
    </>
  );
}
