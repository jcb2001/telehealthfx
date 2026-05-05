import { LocationAlbuquerque } from '../../../components/location-albuquerque';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/locations/albuquerque/',
  },
  title: "GLP-1 Weight Loss Prescriptions in Albuquerque | Telehealth FX",
  description: "Bypass the Big I traffic and waitlists at UNM Hospital. Access FDA-compliant compounded Semaglutide and Tirzepatide prescribed by NM-licensed physicians.",
  openGraph: {
    title: "GLP-1 Weight Loss Prescriptions in Albuquerque | Telehealth FX",
    description: "Access U.S.-licensed compounded Semaglutide, delivered directly to your home in the Duke City.",
    url: 'https://telehealthfx.com/locations/albuquerque',
    siteName: 'Telehealth FX',
    type: 'website',
  }
};

export default function AlbuquerquePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/albuquerque#clinic",
        "name": "Telehealth FX - Albuquerque GLP-1 Prescribing",
        "url": "https://telehealthfx.com/locations/albuquerque",
        "logo": "https://telehealthfx.com/logo.png",
        "description": "Asynchronous medical weight loss clinic providing New Mexico-licensed physician evaluations and GLP-1 prescriptions for residents of Bernalillo County and the Greater Albuquerque area.",
        "areaServed": {
          "@type": "City",
          "name": "Albuquerque",
          "containedInPlace": {
            "@type": "State",
            "name": "New Mexico"
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
            "name": "Do I need to visit a physical clinic in Albuquerque to get a prescription?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Under New Mexico Medical Board telehealth regulations, you can complete your entire medical intake asynchronously online. If approved by a New Mexico-licensed physician, your compounded Semaglutide or Tirzepatide is shipped directly to your home anywhere in Greater Albuquerque."
            }
          },
          {
            "@type": "Question",
            "name": "Is Telehealth FX legally authorized to operate in New Mexico?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We partner exclusively with physicians licensed by the New Mexico Medical Board, and our network utilizes FDA-registered 503A/503B pharmacies authorized to ship to all New Mexico addresses."
            }
          },
          {
            "@type": "Question",
            "name": "Are there waitlists like at UNM Hospital or Presbyterian?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. By utilizing 503A compounding pharmacies, we completely bypass the retail shortages affecting local Smith's pharmacies and the multi-month waitlists typical of major hospital metabolic centers in the Duke City."
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
      <LocationAlbuquerque />
    </>
  );
}
