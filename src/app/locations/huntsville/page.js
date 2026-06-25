import { LocationHuntsville } from "../../../components/location-huntsville";
export const metadata = {
  title: "GLP-1 Weight Loss in Huntsville | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Alabama-licensed physicians in Huntsville. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Huntsville | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Huntsville, Alabama residents. Alabama-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/huntsville",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/huntsville/'
  }
};
export default function HuntsvillePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/huntsville#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Huntsville", "item": "https://telehealthfx.com/locations/huntsville"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/huntsville#webpage", "url": "https://telehealthfx.com/locations/huntsville", "name": "GLP-1 Weight Loss in Huntsville | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Alabama-licensed physicians in Huntsville. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/huntsville#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/huntsville#clinic", "name": "Telehealth FX - Huntsville", "url": "https://telehealthfx.com/locations/huntsville", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Huntsville", "containedInPlace": {"@type": "State", "name": "Alabama"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 34.7304, "longitude": -86.5861}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/huntsville#service", "name": "GLP-1 Weight Loss Program - Huntsville", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Huntsville, Alabama residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/huntsville#clinic"}, "areaServed": {"@type": "City", "name": "Huntsville", "containedInPlace": {"@type": "State", "name": "Alabama"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/huntsville#faq", "mainEntity": [{"@type": "Question", "name": "Will this affect my security clearance?", "acceptedAnswer": {"@type": "Answer", "text": "No. GLP-1 medications are not controlled substances and have no security clearance implications."}}, {"@type": "Question", "name": "Do you deliver to Madison and Decatur?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Madison, Limestone, and Morgan County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationHuntsville />
    </>
  );
}
