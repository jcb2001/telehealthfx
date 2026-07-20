import { LocationJacksonville } from "../../../components/location-jacksonville";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Jacksonville | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Florida-licensed physicians in Jacksonville. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Jacksonville | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Jacksonville, Florida residents. Florida-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/jacksonville",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/jacksonville/'
  }
};
export default function JacksonvillePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/jacksonville#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Jacksonville", "item": "https://telehealthfx.com/locations/jacksonville"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/jacksonville#webpage", "url": "https://telehealthfx.com/locations/jacksonville", "name": "GLP-1 Weight Loss in Jacksonville | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Florida-licensed physicians in Jacksonville. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/jacksonville#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/jacksonville#clinic", "name": "Telehealth FX - Jacksonville", "url": "https://telehealthfx.com/locations/jacksonville", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Jacksonville", "containedInPlace": {"@type": "State", "name": "Florida"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 30.3322, "longitude": -81.6557}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/jacksonville#service", "name": "GLP-1 Weight Loss Program - Jacksonville", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Jacksonville, Florida residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/jacksonville#clinic"}, "areaServed": {"@type": "City", "name": "Jacksonville", "containedInPlace": {"@type": "State", "name": "Florida"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationJacksonville />
    </>
  );
}
