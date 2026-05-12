import { LocationLincoln } from "../../../components/location-lincoln";
export const metadata = {
  title: "GLP-1 Weight Loss in Lincoln | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Nebraska-licensed physicians in Lincoln. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Lincoln | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Lincoln, Nebraska residents. Nebraska-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/lincoln",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/lincoln"
  }
};
export default function LincolnPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/lincoln#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Lincoln", "item": "https://telehealthfx.com/locations/lincoln"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/lincoln#webpage", "url": "https://telehealthfx.com/locations/lincoln", "name": "GLP-1 Weight Loss in Lincoln | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Nebraska-licensed physicians in Lincoln. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/lincoln#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/lincoln#clinic", "name": "Telehealth FX - Lincoln", "url": "https://telehealthfx.com/locations/lincoln", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Lincoln", "containedInPlace": {"@type": "State", "name": "Nebraska"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 40.8136, "longitude": -96.7026}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/lincoln#service", "name": "GLP-1 Weight Loss Program - Lincoln", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Lincoln, Nebraska residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/lincoln#clinic"}, "areaServed": {"@type": "City", "name": "Lincoln", "containedInPlace": {"@type": "State", "name": "Nebraska"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationLincoln />
    </>
  );
}
