import { LocationFresno } from "../../../components/location-fresno";
export const metadata = {
  title: "GLP-1 Weight Loss in Fresno | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by California-licensed physicians in Fresno. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Fresno | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Fresno, California residents. California-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/fresno",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/fresno"
  }
};
export default function FresnoPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/fresno#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Fresno", "item": "https://telehealthfx.com/locations/fresno"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/fresno#webpage", "url": "https://telehealthfx.com/locations/fresno", "name": "GLP-1 Weight Loss in Fresno | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by California-licensed physicians in Fresno. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/fresno#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/fresno#clinic", "name": "Telehealth FX - Fresno", "url": "https://telehealthfx.com/locations/fresno", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Fresno", "containedInPlace": {"@type": "State", "name": "California"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 36.7378, "longitude": -119.7871}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/fresno#service", "name": "GLP-1 Weight Loss Program - Fresno", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Fresno, California residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/fresno#clinic"}, "areaServed": {"@type": "City", "name": "Fresno", "containedInPlace": {"@type": "State", "name": "California"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationFresno />
    </>
  );
}
