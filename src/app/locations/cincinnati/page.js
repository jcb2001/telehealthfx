import { LocationCincinnati } from "../../../components/location-cincinnati";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Cincinnati | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Ohio-licensed physicians in Cincinnati. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Cincinnati | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Cincinnati, Ohio residents. Ohio-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/cincinnati",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/cincinnati/'
  }
};
export default function CincinnatiPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/cincinnati#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Cincinnati", "item": "https://telehealthfx.com/locations/cincinnati"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/cincinnati#webpage", "url": "https://telehealthfx.com/locations/cincinnati", "name": "GLP-1 Weight Loss in Cincinnati | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Ohio-licensed physicians in Cincinnati. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/cincinnati#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/cincinnati#clinic", "name": "Telehealth FX - Cincinnati", "url": "https://telehealthfx.com/locations/cincinnati", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Cincinnati", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 39.1031, "longitude": -84.512}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/cincinnati#service", "name": "GLP-1 Weight Loss Program - Cincinnati", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Cincinnati, Ohio residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/cincinnati#clinic"}, "areaServed": {"@type": "City", "name": "Cincinnati", "containedInPlace": {"@type": "State", "name": "Ohio"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationCincinnati />
    </>
  );
}
