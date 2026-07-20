import { LocationTulsa } from "../../../components/location-tulsa";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Tulsa | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Oklahoma-licensed physicians in Tulsa. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Tulsa | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Tulsa, Oklahoma residents. Oklahoma-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/tulsa",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/tulsa/'
  }
};
export default function TulsaPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/tulsa#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Tulsa", "item": "https://telehealthfx.com/locations/tulsa"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/tulsa#webpage", "url": "https://telehealthfx.com/locations/tulsa", "name": "GLP-1 Weight Loss in Tulsa | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Oklahoma-licensed physicians in Tulsa. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/tulsa#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/tulsa#clinic", "name": "Telehealth FX - Tulsa", "url": "https://telehealthfx.com/locations/tulsa", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Tulsa", "containedInPlace": {"@type": "State", "name": "Oklahoma"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 36.154, "longitude": -95.9928}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/tulsa#service", "name": "GLP-1 Weight Loss Program - Tulsa", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Tulsa, Oklahoma residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/tulsa#clinic"}, "areaServed": {"@type": "City", "name": "Tulsa", "containedInPlace": {"@type": "State", "name": "Oklahoma"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationTulsa />
    </>
  );
}
