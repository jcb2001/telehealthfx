import { LocationIndianapolis } from "../../../components/location-indianapolis";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Indianapolis | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Indiana-licensed physicians in Indianapolis. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Indianapolis | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Indianapolis, Indiana residents. Indiana-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/indianapolis",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/indianapolis/'
  }
};
export default function IndianapolisPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/indianapolis#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Indianapolis", "item": "https://telehealthfx.com/locations/indianapolis"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/indianapolis#webpage", "url": "https://telehealthfx.com/locations/indianapolis", "name": "GLP-1 Weight Loss in Indianapolis | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Indiana-licensed physicians in Indianapolis. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/indianapolis#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/indianapolis#clinic", "name": "Telehealth FX - Indianapolis", "url": "https://telehealthfx.com/locations/indianapolis", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Indianapolis", "containedInPlace": {"@type": "State", "name": "Indiana"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 39.7684, "longitude": -86.1581}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/indianapolis#service", "name": "GLP-1 Weight Loss Program - Indianapolis", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Indianapolis, Indiana residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/indianapolis#clinic"}, "areaServed": {"@type": "City", "name": "Indianapolis", "containedInPlace": {"@type": "State", "name": "Indiana"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationIndianapolis />
    </>
  );
}
