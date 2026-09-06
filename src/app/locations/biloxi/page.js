import { LocationBiloxi } from "../../../components/location-biloxi";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Biloxi | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Mississippi-licensed physicians in Biloxi. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Biloxi | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Biloxi, Mississippi residents. Mississippi-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/biloxi/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/biloxi/'
  }
};
export default function BiloxiPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/biloxi#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Biloxi", "item": "https://telehealthfx.com/locations/biloxi"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/biloxi#webpage", "url": "https://telehealthfx.com/locations/biloxi", "name": "GLP-1 Weight Loss in Biloxi | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Mississippi-licensed physicians in Biloxi. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/biloxi#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/biloxi#clinic", "name": "Telehealth FX - Biloxi", "url": "https://telehealthfx.com/locations/biloxi", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Biloxi", "containedInPlace": {"@type": "State", "name": "Mississippi"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 30.396, "longitude": -88.8853}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/biloxi#service", "name": "GLP-1 Weight Loss Program - Biloxi", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Biloxi, Mississippi residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/biloxi#clinic"}, "areaServed": {"@type": "City", "name": "Biloxi", "containedInPlace": {"@type": "State", "name": "Mississippi"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/biloxi#faq", "mainEntity": [{"@type": "Question", "name": "I work in a SCIF. Is this secure?", "acceptedAnswer": {"@type": "Answer", "text": "Telehealth FX is completely separate from your military or security clearance records."}}, {"@type": "Question", "name": "Do you deliver to Ocean Springs, Gulfport, and D'Iberville?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Harrison and Jackson County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationBiloxi />
    </>
  );
}
