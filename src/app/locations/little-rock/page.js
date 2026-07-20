import { LocationLittleRock } from "../../../components/location-little-rock";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Little Rock | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Arkansas-licensed physicians in Little Rock. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Little Rock | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Little Rock, Arkansas residents. Arkansas-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/little-rock",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/little-rock/'
  }
};
export default function LittleRockPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/little-rock#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Little Rock", "item": "https://telehealthfx.com/locations/little-rock"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/little-rock#webpage", "url": "https://telehealthfx.com/locations/little-rock", "name": "GLP-1 Weight Loss in Little Rock | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Arkansas-licensed physicians in Little Rock. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/little-rock#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/little-rock#clinic", "name": "Telehealth FX - Little Rock", "url": "https://telehealthfx.com/locations/little-rock", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Little Rock", "containedInPlace": {"@type": "State", "name": "Arkansas"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 34.7465, "longitude": -92.2896}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/little-rock#service", "name": "GLP-1 Weight Loss Program - Little Rock", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Little Rock, Arkansas residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/little-rock#clinic"}, "areaServed": {"@type": "City", "name": "Little Rock", "containedInPlace": {"@type": "State", "name": "Arkansas"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/little-rock#faq", "mainEntity": [{"@type": "Question", "name": "I'm a state employee. Can I use this alongside my plan?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Telehealth FX is private, self-pay, independent of state benefits."}}, {"@type": "Question", "name": "Do you deliver to North Little Rock and Conway?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Pulaski, Faulkner, and Saline County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationLittleRock />
    </>
  );
}
