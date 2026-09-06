import { LocationAlbuquerque } from "../../../components/location-albuquerque";

export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss Clinic in Albuquerque, NM | Telehealth FX",
  description: "Quality compounded Semaglutide prescribed by New Mexico-licensed physicians in Albuquerque. 24-hour approval and cold-pack delivery starting from $146/mo.",
  openGraph: {
    title: "GLP-1 Weight Loss Clinic in Albuquerque, NM | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Albuquerque, New Mexico residents. New Mexico-licensed physicians. Overnight cold-pack shipping from $146/mo.",
    url: "https://telehealthfx.com/locations/albuquerque/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/albuquerque/'
  }
};

export default function AlbuquerquePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://telehealthfx.com/#organization",
        "name": "Telehealth FX",
        "url": "https://telehealthfx.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://telehealthfx.com/logo.png"
        },
        "sameAs": []
      },
      {
        "@type": "WebSite",
        "@id": "https://telehealthfx.com/#website",
        "url": "https://telehealthfx.com",
        "name": "Telehealth FX",
        "publisher": {
          "@id": "https://telehealthfx.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/locations/albuquerque#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://telehealthfx.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Locations",
            "item": "https://telehealthfx.com/locations"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Albuquerque",
            "item": "https://telehealthfx.com/locations/albuquerque"
          }
        ]
      },
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/locations/albuquerque#webpage",
        "url": "https://telehealthfx.com/locations/albuquerque/",
        "name": "GLP-1 Weight Loss Clinic in Albuquerque, NM | Telehealth FX",
        "description": "Quality compounded Semaglutide prescribed by New Mexico-licensed physicians in Albuquerque. 24-hour approval and cold-pack delivery starting from $146/mo.",
        "isPartOf": {
          "@id": "https://telehealthfx.com/#website"
        },
        "breadcrumb": {
          "@id": "https://telehealthfx.com/locations/albuquerque#breadcrumb"
        },
        "inLanguage": "en-US",
        "medicalAudience": {
          "@type": "MedicalAudience",
          "audienceType": "Patient"
        },
        "lastReviewed": "2026-05-01",
        "reviewedBy": {
          "@type": "Organization",
          "name": "Telehealth FX Clinical Team"
        }
      },
      {
        "@type": "MedicalClinic",
        "@id": "https://telehealthfx.com/locations/albuquerque#clinic",
        "name": "Telehealth FX - Albuquerque",
        "url": "https://telehealthfx.com/locations/albuquerque/",
        "telephone": "+1-800-TELEHEALTH",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Albuquerque",
          "addressRegion": "NM",
          "postalCode": "87102",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 35.0844,
          "longitude": -106.6504
        },
        "areaServed": {
          "@type": "City",
          "name": "Albuquerque",
          "containedInPlace": {
            "@type": "State",
            "name": "New Mexico"
          }
        },
        "medicalSpecialty": "Endocrine",
        "isAcceptingNewPatients": true,
        "availableService": {
          "@type": "MedicalTherapy",
          "name": "GLP-1 Receptor Agonist Therapy",
          "alternateName": "Compounded Semaglutide / Tirzepatide",
          "medicineSystem": "WesternConventional",
          "relevantSpecialty": "Endocrine"
        },
        "currenciesAccepted": "USD",
        "paymentAccepted": "Credit Card, HSA, FSA",
        "priceRange": "$146-$349/mo"
      },
      {
        "@type": "Service",
        "@id": "https://telehealthfx.com/locations/albuquerque#service",
        "name": "GLP-1 Weight Loss Program - Albuquerque",
        "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Albuquerque, New Mexico residents. Regulated under New Mexico Medical Board standards with physician evaluation, prescription, and cold-shipped medication.",
        "provider": {
          "@id": "https://telehealthfx.com/locations/albuquerque#clinic"
        },
        "areaServed": {
          "@type": "City",
          "name": "Albuquerque",
          "containedInPlace": {
            "@type": "State",
            "name": "New Mexico"
          }
        },
        "serviceType": "Telehealth Weight Management",
        "offers": {
          "@type": "Offer",
          "price": "146",
          "priceCurrency": "USD",
          "priceValidUntil": "2026-12-31",
          "availability": "https://schema.org/InStock",
          "url": "https://go.telehealthfx.com/start",
          "description": "Monthly compounded GLP-1 program with physician oversight"
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationAlbuquerque />
    </>
  );
}
