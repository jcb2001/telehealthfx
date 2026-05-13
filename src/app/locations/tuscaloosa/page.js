import { LocationTuscaloosa } from "../../../components/location-tuscaloosa";
export const metadata = {
  title: "GLP-1 Weight Loss in Tuscaloosa | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Alabama-licensed physicians in Tuscaloosa. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Tuscaloosa | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Tuscaloosa, Alabama residents. Alabama-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/tuscaloosa",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/tuscaloosa"
  }
};
export default function TuscaloosaPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/tuscaloosa#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Tuscaloosa", "item": "https://telehealthfx.com/locations/tuscaloosa"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/tuscaloosa#webpage", "url": "https://telehealthfx.com/locations/tuscaloosa", "name": "GLP-1 Weight Loss in Tuscaloosa | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Alabama-licensed physicians in Tuscaloosa. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/tuscaloosa#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/tuscaloosa#clinic", "name": "Telehealth FX - Tuscaloosa", "url": "https://telehealthfx.com/locations/tuscaloosa", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Tuscaloosa", "containedInPlace": {"@type": "State", "name": "Alabama"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 33.2098, "longitude": -87.5692}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/tuscaloosa#service", "name": "GLP-1 Weight Loss Program - Tuscaloosa", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Tuscaloosa, Alabama residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/tuscaloosa#clinic"}, "areaServed": {"@type": "City", "name": "Tuscaloosa", "containedInPlace": {"@type": "State", "name": "Alabama"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/tuscaloosa#faq", "mainEntity": [{"@type": "Question", "name": "I work 6-day weeks during vehicle launch. When?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous—complete in 10 minutes on your phone."}}, {"@type": "Question", "name": "Do you deliver to Northport, Vance, and Moundville?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Tuscaloosa County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationTuscaloosa />
    </>
  );
}
