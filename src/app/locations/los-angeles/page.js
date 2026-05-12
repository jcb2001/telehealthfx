import { LocationLosAngeles } from "../../../components/location-los-angeles";
export const metadata = {
  title: "GLP-1 Weight Loss in Los Angeles | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by California-licensed physicians in Los Angeles. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Los Angeles | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Los Angeles, California residents. California-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/los-angeles",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/los-angeles"
  }
};
export default function LosAngelesPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/los-angeles#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Los Angeles", "item": "https://telehealthfx.com/locations/los-angeles"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/los-angeles#webpage", "url": "https://telehealthfx.com/locations/los-angeles", "name": "GLP-1 Weight Loss in Los Angeles | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by California-licensed physicians in Los Angeles. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/los-angeles#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/los-angeles#clinic", "name": "Telehealth FX - Los Angeles", "url": "https://telehealthfx.com/locations/los-angeles", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Los Angeles", "containedInPlace": {"@type": "State", "name": "California"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 34.0522, "longitude": -118.2437}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/los-angeles#service", "name": "GLP-1 Weight Loss Program - Los Angeles", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Los Angeles, California residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/los-angeles#clinic"}, "areaServed": {"@type": "City", "name": "Los Angeles", "containedInPlace": {"@type": "State", "name": "California"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationLosAngeles />
    </>
  );
}
