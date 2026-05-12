import { LocationTucson } from "../../../components/location-tucson";
export const metadata = {
  title: "GLP-1 Weight Loss in Tucson | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Arizona-licensed physicians in Tucson. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Tucson | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Tucson, Arizona residents. Arizona-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/tucson",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/tucson"
  }
};
export default function TucsonPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/tucson#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Tucson", "item": "https://telehealthfx.com/locations/tucson"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/tucson#webpage", "url": "https://telehealthfx.com/locations/tucson", "name": "GLP-1 Weight Loss in Tucson | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Arizona-licensed physicians in Tucson. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/tucson#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/tucson#clinic", "name": "Telehealth FX - Tucson", "url": "https://telehealthfx.com/locations/tucson", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Tucson", "containedInPlace": {"@type": "State", "name": "Arizona"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 32.2226, "longitude": -110.9747}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/tucson#service", "name": "GLP-1 Weight Loss Program - Tucson", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Tucson, Arizona residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/tucson#clinic"}, "areaServed": {"@type": "City", "name": "Tucson", "containedInPlace": {"@type": "State", "name": "Arizona"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationTucson />
    </>
  );
}
