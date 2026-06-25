import { LocationMobile } from "../../../components/location-mobile";
export const metadata = {
  title: "GLP-1 Weight Loss in Mobile | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Alabama-licensed physicians in Mobile. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Mobile | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Mobile, Alabama residents. Alabama-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/mobile",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/mobile/'
  }
};
export default function MobilePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/mobile#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Mobile", "item": "https://telehealthfx.com/locations/mobile"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/mobile#webpage", "url": "https://telehealthfx.com/locations/mobile", "name": "GLP-1 Weight Loss in Mobile | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Alabama-licensed physicians in Mobile. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/mobile#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/mobile#clinic", "name": "Telehealth FX - Mobile", "url": "https://telehealthfx.com/locations/mobile", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Mobile", "containedInPlace": {"@type": "State", "name": "Alabama"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 30.6954, "longitude": -88.0399}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/mobile#service", "name": "GLP-1 Weight Loss Program - Mobile", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Mobile, Alabama residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/mobile#clinic"}, "areaServed": {"@type": "City", "name": "Mobile", "containedInPlace": {"@type": "State", "name": "Alabama"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/mobile#faq", "mainEntity": [{"@type": "Question", "name": "I work at Airbus. When do I do the intake?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous."}}, {"@type": "Question", "name": "Do you deliver to Daphne, Fairhope, and Saraland?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Mobile and Baldwin County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationMobile />
    </>
  );
}
