import { LocationColumbus } from '../../../components/location-columbus';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/columbus/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Columbus | Telehealth FX",
  description: "Bypass the I-270 traffic and waitlists at OSU Wexner. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Ohio-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Columbus | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in Columbus.",
    url: 'https://telehealthfx.com/locations/columbus',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function ColumbusPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/columbus#clinic",
        "name": "Telehealth FX - Columbus GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/columbus",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Ohio-licensed physician evaluations and GLP-1 prescriptions for residents of Franklin County, Delaware County.",
        "areaServed": {
          "@type": "City",
          "name": "Columbus",
          "containedInPlace": {
            "@type": "State",
            "name": "Ohio"
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
            "name": "Do I need to visit a physical clinic in Columbus to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under State Medical Board of Ohio telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Ohio-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home in Columbus."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Ohio?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the State Medical Board of Ohio, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all OH addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at Ohio State Wexner Medical Center?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Kroger Pharmacy pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the area."
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
      <LocationColumbus />
    </>
  );
}
