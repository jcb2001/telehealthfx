import { LocationElPaso } from '../../../components/location-el-paso';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/el-paso/',
  },
  title: "GLP-1 Weight Loss Prescriptions in El Paso | Telehealth FX",
  description: "Bypass the I-10 traffic and waitlists at University Medical Center. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Texas-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in El Paso | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in the Sun City.",
    url: 'https://telehealthfx.com/locations/el-paso',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function ElPasoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/el-paso#clinic",
        "name": "Telehealth FX - El Paso GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/el-paso",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing Texas-licensed physician evaluations and GLP-1 prescriptions for residents of El Paso County and the Borderplex region.",
        "areaServed": {
          "@type": "City",
          "name": "El Paso",
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
            "name": "Do I need to visit a physical clinic in El Paso to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under Texas Medical Board telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a Texas-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home anywhere in El Paso County."
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
            "name": "Are there waitlists like at The Hospitals of Providence?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local pharmacies and the 6-month waitlists typical of major hospital metabolic centers in the Sun City."
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
      <LocationElPaso />
    </>
  );
}
