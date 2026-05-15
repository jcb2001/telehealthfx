import { LocationBaltimore } from "../../../components/location-baltimore";
export const metadata = {
  title: "GLP-1 Weight Loss in Baltimore | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Unknown-licensed physicians in Baltimore. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Baltimore | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Baltimore, Unknown residents. Unknown-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/baltimore",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/baltimore"
  }
};
export default function BaltimorePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/baltimore#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Baltimore", "item": "https://telehealthfx.com/locations/baltimore"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/baltimore#webpage", "url": "https://telehealthfx.com/locations/baltimore", "name": "GLP-1 Weight Loss in Baltimore | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Unknown-licensed physicians in Baltimore. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/baltimore#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/baltimore#clinic", "name": "Telehealth FX - Baltimore", "url": "https://telehealthfx.com/locations/baltimore", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Baltimore", "containedInPlace": {"@type": "State", "name": "Unknown"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo"}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/baltimore#service", "name": "GLP-1 Weight Loss Program - Baltimore", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Baltimore, Unknown residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/baltimore#clinic"}, "areaServed": {"@type": "City", "name": "Baltimore", "containedInPlace": {"@type": "State", "name": "Unknown"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationBaltimore />
    </>
  );
}
