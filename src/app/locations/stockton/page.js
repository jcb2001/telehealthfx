import { LocationStockton } from "../../../components/location-stockton";
export const metadata = {
  title: "GLP-1 Weight Loss in Stockton | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by California-licensed physicians in Stockton. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Stockton | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Stockton, California residents. California-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/stockton",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/stockton/'
  }
};
export default function StocktonPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/stockton#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Stockton", "item": "https://telehealthfx.com/locations/stockton"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/stockton#webpage", "url": "https://telehealthfx.com/locations/stockton", "name": "GLP-1 Weight Loss in Stockton | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by California-licensed physicians in Stockton. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/stockton#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/stockton#clinic", "name": "Telehealth FX - Stockton", "url": "https://telehealthfx.com/locations/stockton", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Stockton", "containedInPlace": {"@type": "State", "name": "California"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 37.9577, "longitude": -121.2908}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/stockton#service", "name": "GLP-1 Weight Loss Program - Stockton", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Stockton, California residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/stockton#clinic"}, "areaServed": {"@type": "City", "name": "Stockton", "containedInPlace": {"@type": "State", "name": "California"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationStockton />
    </>
  );
}
