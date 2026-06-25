import { LocationPhiladelphia } from "../../../components/location-philadelphia";
export const metadata = {
  title: "GLP-1 Weight Loss in Philadelphia | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Pennsylvania-licensed physicians in Philadelphia. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Philadelphia | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Philadelphia, Pennsylvania residents. Pennsylvania-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/philadelphia",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/philadelphia/'
  }
};
export default function PhiladelphiaPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/philadelphia#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Philadelphia", "item": "https://telehealthfx.com/locations/philadelphia"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/philadelphia#webpage", "url": "https://telehealthfx.com/locations/philadelphia", "name": "GLP-1 Weight Loss in Philadelphia | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Pennsylvania-licensed physicians in Philadelphia. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/philadelphia#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/philadelphia#clinic", "name": "Telehealth FX - Philadelphia", "url": "https://telehealthfx.com/locations/philadelphia", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Philadelphia", "containedInPlace": {"@type": "State", "name": "Pennsylvania"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 39.9526, "longitude": -75.1652}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/philadelphia#service", "name": "GLP-1 Weight Loss Program - Philadelphia", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Philadelphia, Pennsylvania residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/philadelphia#clinic"}, "areaServed": {"@type": "City", "name": "Philadelphia", "containedInPlace": {"@type": "State", "name": "Pennsylvania"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationPhiladelphia />
    </>
  );
}
