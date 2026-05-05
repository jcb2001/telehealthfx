import { LocationLasVegas } from '../../../components/location-las-vegas';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/las-vegas/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Las Vegas | Telehealth FX",
  description: "Bypass the I-15 traffic and waitlists at UMC. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Nevada-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Las Vegas | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in the Las Vegas Valley.",
    url: 'https://telehealthfx.com/locations/las-vegas',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function LasVegasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/las-vegas#clinic",
        "name": "Telehealth FX - Las Vegas GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/las-vegas",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Nevada-licensed physician evaluations and GLP-1 prescriptions for residents of Clark County and the Las Vegas Valley.",
        "areaServed": {
          "@type": "City",
          "name": "Las Vegas",
          "containedInPlace": {
            "@type": "State",
            "name": "Nevada"
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
            "name": "Do I need to visit a physical clinic in Las Vegas to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Nevada State Board of Medical Examiners telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Nevada-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home anywhere in Clark County."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in Nevada?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the Nevada State Board of Medical Examiners, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all Nevada addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at UMC or Sunrise Hospital?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Smith's pharmacies and the multi-month waitlists typical of major hospital metabolic centers in the Las Vegas Valley."
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
      <LocationLasVegas />
    </>
  );
}
