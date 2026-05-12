import { LocationSyracuse } from "../../../components/location-syracuse";
export const metadata = {
  title: "GLP-1 Weight Loss in Syracuse | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by New York-licensed physicians in Syracuse. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Syracuse | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Syracuse, New York residents. New York-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/syracuse",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/syracuse"
  }
};
export default function SyracusePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/syracuse#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Syracuse", "item": "https://telehealthfx.com/locations/syracuse"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/syracuse#webpage", "url": "https://telehealthfx.com/locations/syracuse", "name": "GLP-1 Weight Loss in Syracuse | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by New York-licensed physicians in Syracuse. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/syracuse#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/syracuse#clinic", "name": "Telehealth FX - Syracuse", "url": "https://telehealthfx.com/locations/syracuse", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Syracuse", "containedInPlace": {"@type": "State", "name": "New York"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 43.0481, "longitude": -76.1474}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/syracuse#service", "name": "GLP-1 Weight Loss Program - Syracuse", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Syracuse, New York residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/syracuse#clinic"}, "areaServed": {"@type": "City", "name": "Syracuse", "containedInPlace": {"@type": "State", "name": "New York"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/syracuse#faq", "mainEntity": [{"@type": "Question", "name": "Will Micron's arrival make the specialist shortage worse?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Telehealth FX provides access now—before 50,000 new residents compete for the same specialist appointments."}}, {"@type": "Question", "name": "Do you deliver to Manlius, Baldwinsville, and Utica?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Onondaga, Madison, and Oneida County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationSyracuse />
    </>
  );
}
