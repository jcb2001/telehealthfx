import { LocationFortWayne } from "../../../components/location-fort-wayne";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Fort Wayne | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Indiana-licensed physicians in Fort Wayne. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Fort Wayne | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Fort Wayne, Indiana residents. Indiana-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/fort-wayne",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/fort-wayne/'
  }
};
export default function FortWaynePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/fort-wayne#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Fort Wayne", "item": "https://telehealthfx.com/locations/fort-wayne"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/fort-wayne#webpage", "url": "https://telehealthfx.com/locations/fort-wayne", "name": "GLP-1 Weight Loss in Fort Wayne | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Indiana-licensed physicians in Fort Wayne. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/fort-wayne#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/fort-wayne#clinic", "name": "Telehealth FX - Fort Wayne", "url": "https://telehealthfx.com/locations/fort-wayne", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Fort Wayne", "containedInPlace": {"@type": "State", "name": "Indiana"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 41.0793, "longitude": -85.1394}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/fort-wayne#service", "name": "GLP-1 Weight Loss Program - Fort Wayne", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Fort Wayne, Indiana residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/fort-wayne#clinic"}, "areaServed": {"@type": "City", "name": "Fort Wayne", "containedInPlace": {"@type": "State", "name": "Indiana"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/fort-wayne#faq", "mainEntity": [{"@type": "Question", "name": "I work rotating shifts at GM. When do I do the intake?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous."}}, {"@type": "Question", "name": "Do you deliver to New Haven and Huntington?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Allen, Whitley, and Huntington County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationFortWayne />
    </>
  );
}
