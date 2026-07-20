import { LocationRaleigh } from "../../../components/location-raleigh";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Raleigh | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by North Carolina-licensed physicians in Raleigh. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Raleigh | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Raleigh, North Carolina residents. North Carolina-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/raleigh",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/raleigh/'
  }
};
export default function RaleighPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/raleigh#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Raleigh", "item": "https://telehealthfx.com/locations/raleigh"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/raleigh#webpage", "url": "https://telehealthfx.com/locations/raleigh", "name": "GLP-1 Weight Loss in Raleigh | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by North Carolina-licensed physicians in Raleigh. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/raleigh#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/raleigh#clinic", "name": "Telehealth FX - Raleigh", "url": "https://telehealthfx.com/locations/raleigh", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Raleigh", "containedInPlace": {"@type": "State", "name": "North Carolina"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 35.7796, "longitude": -78.6382}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/raleigh#service", "name": "GLP-1 Weight Loss Program - Raleigh", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Raleigh, North Carolina residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/raleigh#clinic"}, "areaServed": {"@type": "City", "name": "Raleigh", "containedInPlace": {"@type": "State", "name": "North Carolina"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationRaleigh />
    </>
  );
}
