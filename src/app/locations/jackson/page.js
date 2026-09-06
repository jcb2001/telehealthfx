import { LocationJackson } from "../../../components/location-jackson";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Jackson | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Mississippi-licensed physicians in Jackson. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Jackson | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Jackson, Mississippi residents. Mississippi-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/jackson/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/jackson/'
  }
};
export default function JacksonPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/jackson#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Jackson", "item": "https://telehealthfx.com/locations/jackson"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/jackson#webpage", "url": "https://telehealthfx.com/locations/jackson", "name": "GLP-1 Weight Loss in Jackson | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Mississippi-licensed physicians in Jackson. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/jackson#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/jackson#clinic", "name": "Telehealth FX - Jackson", "url": "https://telehealthfx.com/locations/jackson", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Jackson", "containedInPlace": {"@type": "State", "name": "Mississippi"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 32.2988, "longitude": -90.1848}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/jackson#service", "name": "GLP-1 Weight Loss Program - Jackson", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Jackson, Mississippi residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/jackson#clinic"}, "areaServed": {"@type": "City", "name": "Jackson", "containedInPlace": {"@type": "State", "name": "Mississippi"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/jackson#faq", "mainEntity": [{"@type": "Question", "name": "I'm a state employee. Can I use this?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Telehealth FX is private, self-pay, independent of state benefits."}}, {"@type": "Question", "name": "Do you deliver to Ridgeland, Madison, and Brandon?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Hinds, Madison, and Rankin County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationJackson />
    </>
  );
}
