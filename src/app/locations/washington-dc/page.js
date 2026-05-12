import { LocationWashingtonDC } from "../../../components/location-washington-dc";
export const metadata = {
  title: "GLP-1 Weight Loss in Washington, D.C. | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Washington, D.C.-licensed physicians in Washington, D.C.. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Washington, D.C. | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Washington, D.C., Washington, D.C. residents. Washington, D.C.-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/washington-dc",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/washington-dc"
  }
};
export default function WashingtonDCPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/washington-dc#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Washington, D.C.", "item": "https://telehealthfx.com/locations/washington-dc"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/washington-dc#webpage", "url": "https://telehealthfx.com/locations/washington-dc", "name": "GLP-1 Weight Loss in Washington, D.C. | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Washington, D.C.-licensed physicians in Washington, D.C.. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/washington-dc#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/washington-dc#clinic", "name": "Telehealth FX - Washington, D.C.", "url": "https://telehealthfx.com/locations/washington-dc", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Washington, D.C.", "containedInPlace": {"@type": "State", "name": "Washington, D.C."}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 38.9072, "longitude": -77.0369}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/washington-dc#service", "name": "GLP-1 Weight Loss Program - Washington, D.C.", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Washington, D.C., Washington, D.C. residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/washington-dc#clinic"}, "areaServed": {"@type": "City", "name": "Washington, D.C.", "containedInPlace": {"@type": "State", "name": "Washington, D.C."}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationWashingtonDC />
    </>
  );
}
