import { LocationAugusta } from "../../../components/location-augusta";
export const metadata = {
  title: "GLP-1 Weight Loss in Augusta | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Georgia-licensed physicians in Augusta. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Augusta | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Augusta, Georgia residents. Georgia-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/augusta",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/augusta/'
  }
};
export default function AugustaPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/augusta#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Augusta", "item": "https://telehealthfx.com/locations/augusta"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/augusta#webpage", "url": "https://telehealthfx.com/locations/augusta", "name": "GLP-1 Weight Loss in Augusta | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Georgia-licensed physicians in Augusta. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/augusta#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/augusta#clinic", "name": "Telehealth FX - Augusta", "url": "https://telehealthfx.com/locations/augusta", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Augusta", "containedInPlace": {"@type": "State", "name": "Georgia"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 33.4735, "longitude": -82.0105}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/augusta#service", "name": "GLP-1 Weight Loss Program - Augusta", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Augusta, Georgia residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/augusta#clinic"}, "areaServed": {"@type": "City", "name": "Augusta", "containedInPlace": {"@type": "State", "name": "Georgia"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/augusta#faq", "mainEntity": [{"@type": "Question", "name": "Will this affect my security clearance?", "acceptedAnswer": {"@type": "Answer", "text": "No. GLP-1 medications are not controlled substances."}}, {"@type": "Question", "name": "Do you deliver to Evans, Martinez, and Aiken (SC)?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Richmond, Columbia, and Aiken (SC) County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationAugusta />
    </>
  );
}
