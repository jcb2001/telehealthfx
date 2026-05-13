import { LocationMidland } from "../../../components/location-midland";
export const metadata = {
  title: "GLP-1 Weight Loss in Midland | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Texas-licensed physicians in Midland. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Midland | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Midland, Texas residents. Texas-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/midland",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/midland"
  }
};
export default function MidlandPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/midland#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Midland", "item": "https://telehealthfx.com/locations/midland"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/midland#webpage", "url": "https://telehealthfx.com/locations/midland", "name": "GLP-1 Weight Loss in Midland | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Texas-licensed physicians in Midland. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/midland#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/midland#clinic", "name": "Telehealth FX - Midland", "url": "https://telehealthfx.com/locations/midland", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Midland", "containedInPlace": {"@type": "State", "name": "Texas"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 31.9973, "longitude": -102.0779}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/midland#service", "name": "GLP-1 Weight Loss Program - Midland", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Midland, Texas residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/midland#clinic"}, "areaServed": {"@type": "City", "name": "Midland", "containedInPlace": {"@type": "State", "name": "Texas"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/midland#faq", "mainEntity": [{"@type": "Question", "name": "I earn six figures. Why can't I get a specialist?", "acceptedAnswer": {"@type": "Answer", "text": "Income ≠ access. Midland's specialist-per-capita ratio is among the lowest in Texas. We bypass the local shortage entirely."}}, {"@type": "Question", "name": "Do you deliver to Odessa, Andrews, and Big Spring?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Midland, Ector, Andrews, and Howard County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationMidland />
    </>
  );
}
