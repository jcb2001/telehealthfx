import { LocationBirmingham } from "../../../components/location-birmingham";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Birmingham | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Alabama-licensed physicians in Birmingham. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Birmingham | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Birmingham, Alabama residents. Alabama-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/birmingham",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/birmingham/'
  }
};
export default function BirminghamPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/birmingham#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Birmingham", "item": "https://telehealthfx.com/locations/birmingham"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/birmingham#webpage", "url": "https://telehealthfx.com/locations/birmingham", "name": "GLP-1 Weight Loss in Birmingham | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Alabama-licensed physicians in Birmingham. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/birmingham#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/birmingham#clinic", "name": "Telehealth FX - Birmingham", "url": "https://telehealthfx.com/locations/birmingham", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Birmingham", "containedInPlace": {"@type": "State", "name": "Alabama"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 33.5186, "longitude": -86.8104}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/birmingham#service", "name": "GLP-1 Weight Loss Program - Birmingham", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Birmingham, Alabama residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/birmingham#clinic"}, "areaServed": {"@type": "City", "name": "Birmingham", "containedInPlace": {"@type": "State", "name": "Alabama"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/birmingham#faq", "mainEntity": [{"@type": "Question", "name": "I work at UAB. Is this a conflict?", "acceptedAnswer": {"@type": "Answer", "text": "No. Telehealth FX is independent. Your use is a private healthcare decision."}}, {"@type": "Question", "name": "Do you deliver to Hoover, Vestavia, and Trussville?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Jefferson and Shelby County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationBirmingham />
    </>
  );
}
