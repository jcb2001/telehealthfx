import { LocationSaltLakeCity } from "../../../components/location-salt-lake-city";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Salt Lake City | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Utah-licensed physicians in Salt Lake City. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Salt Lake City | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Salt Lake City, Utah residents. Utah-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/salt-lake-city/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/salt-lake-city/'
  }
};
export default function SaltLakeCityPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/salt-lake-city#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Salt Lake City", "item": "https://telehealthfx.com/locations/salt-lake-city"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/salt-lake-city#webpage", "url": "https://telehealthfx.com/locations/salt-lake-city", "name": "GLP-1 Weight Loss in Salt Lake City | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Utah-licensed physicians in Salt Lake City. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/salt-lake-city#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/salt-lake-city#clinic", "name": "Telehealth FX - Salt Lake City", "url": "https://telehealthfx.com/locations/salt-lake-city", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Salt Lake City", "containedInPlace": {"@type": "State", "name": "Utah"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 40.7608, "longitude": -111.891}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/salt-lake-city#service", "name": "GLP-1 Weight Loss Program - Salt Lake City", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Salt Lake City, Utah residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/salt-lake-city#clinic"}, "areaServed": {"@type": "City", "name": "Salt Lake City", "containedInPlace": {"@type": "State", "name": "Utah"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationSaltLakeCity />
    </>
  );
}
