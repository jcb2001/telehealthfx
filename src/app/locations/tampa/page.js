import { LocationTampa } from "../../../components/location-tampa";
export const metadata = {
  title: "GLP-1 Weight Loss in Tampa | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Florida-licensed physicians in Tampa. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Tampa | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Tampa, Florida residents. Florida-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/tampa",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/tampa/'
  }
};
export default function TampaPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/tampa#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Tampa", "item": "https://telehealthfx.com/locations/tampa"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/tampa#webpage", "url": "https://telehealthfx.com/locations/tampa", "name": "GLP-1 Weight Loss in Tampa | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Florida-licensed physicians in Tampa. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/tampa#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/tampa#clinic", "name": "Telehealth FX - Tampa", "url": "https://telehealthfx.com/locations/tampa", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Tampa", "containedInPlace": {"@type": "State", "name": "Florida"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 27.9506, "longitude": -82.4572}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/tampa#service", "name": "GLP-1 Weight Loss Program - Tampa", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Tampa, Florida residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/tampa#clinic"}, "areaServed": {"@type": "City", "name": "Tampa", "containedInPlace": {"@type": "State", "name": "Florida"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationTampa />
    </>
  );
}
