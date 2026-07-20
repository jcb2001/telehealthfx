import { LocationPittsburgh } from "../../../components/location-pittsburgh";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Pittsburgh | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Pennsylvania-licensed physicians in Pittsburgh. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Pittsburgh | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Pittsburgh, Pennsylvania residents. Pennsylvania-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/pittsburgh",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/pittsburgh/'
  }
};
export default function PittsburghPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/pittsburgh#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Pittsburgh", "item": "https://telehealthfx.com/locations/pittsburgh"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/pittsburgh#webpage", "url": "https://telehealthfx.com/locations/pittsburgh", "name": "GLP-1 Weight Loss in Pittsburgh | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Pennsylvania-licensed physicians in Pittsburgh. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/pittsburgh#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/pittsburgh#clinic", "name": "Telehealth FX - Pittsburgh", "url": "https://telehealthfx.com/locations/pittsburgh", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Pittsburgh", "containedInPlace": {"@type": "State", "name": "Pennsylvania"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 40.4406, "longitude": -79.9959}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/pittsburgh#service", "name": "GLP-1 Weight Loss Program - Pittsburgh", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Pittsburgh, Pennsylvania residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/pittsburgh#clinic"}, "areaServed": {"@type": "City", "name": "Pittsburgh", "containedInPlace": {"@type": "State", "name": "Pennsylvania"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationPittsburgh />
    </>
  );
}
