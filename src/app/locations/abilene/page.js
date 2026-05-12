import { LocationAbilene } from "../../../components/location-abilene";
export const metadata = {
  title: "GLP-1 Weight Loss in Abilene | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Texas-licensed physicians in Abilene. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Abilene | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Abilene, Texas residents. Texas-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/abilene",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/abilene"
  }
};
export default function AbilenePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/abilene#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Abilene", "item": "https://telehealthfx.com/locations/abilene"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/abilene#webpage", "url": "https://telehealthfx.com/locations/abilene", "name": "GLP-1 Weight Loss in Abilene | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Texas-licensed physicians in Abilene. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/abilene#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/abilene#clinic", "name": "Telehealth FX - Abilene", "url": "https://telehealthfx.com/locations/abilene", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Abilene", "containedInPlace": {"@type": "State", "name": "Texas"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 32.4487, "longitude": -99.7331}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/abilene#service", "name": "GLP-1 Weight Loss Program - Abilene", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Abilene, Texas residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/abilene#clinic"}, "areaServed": {"@type": "City", "name": "Abilene", "containedInPlace": {"@type": "State", "name": "Texas"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/abilene#faq", "mainEntity": [{"@type": "Question", "name": "Will this affect my flight status?", "acceptedAnswer": {"@type": "Answer", "text": "Consult your flight surgeon. Telehealth FX is independent of military medical records."}}, {"@type": "Question", "name": "Do you deliver to Dyess AFB and Buffalo Gap?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Taylor and Jones County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationAbilene />
    </>
  );
}
