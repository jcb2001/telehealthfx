import { LocationTallahassee } from "../../../components/location-tallahassee";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Tallahassee | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Florida-licensed physicians in Tallahassee. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Tallahassee | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Tallahassee, Florida residents. Florida-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/tallahassee/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/tallahassee/'
  }
};
export default function TallahasseePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/tallahassee#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Tallahassee", "item": "https://telehealthfx.com/locations/tallahassee"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/tallahassee#webpage", "url": "https://telehealthfx.com/locations/tallahassee", "name": "GLP-1 Weight Loss in Tallahassee | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Florida-licensed physicians in Tallahassee. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/tallahassee#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/tallahassee#clinic", "name": "Telehealth FX - Tallahassee", "url": "https://telehealthfx.com/locations/tallahassee", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Tallahassee", "containedInPlace": {"@type": "State", "name": "Florida"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 30.4383, "longitude": -84.2807}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/tallahassee#service", "name": "GLP-1 Weight Loss Program - Tallahassee", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Tallahassee, Florida residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/tallahassee#clinic"}, "areaServed": {"@type": "City", "name": "Tallahassee", "containedInPlace": {"@type": "State", "name": "Florida"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/tallahassee#faq", "mainEntity": [{"@type": "Question", "name": "I'm a state employee. Can I use this?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Telehealth FX is private, self-pay, completely independent of the State of Florida employee plan."}}, {"@type": "Question", "name": "Do you deliver to Crawfordville and Quincy?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Leon, Wakulla, and Gadsden County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationTallahassee />
    </>
  );
}
