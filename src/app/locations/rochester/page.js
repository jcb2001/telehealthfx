import { LocationRochester } from "../../../components/location-rochester";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Rochester | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by New York-licensed physicians in Rochester. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Rochester | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Rochester, New York residents. New York-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/rochester",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/rochester/'
  }
};
export default function RochesterPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/rochester#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Rochester", "item": "https://telehealthfx.com/locations/rochester"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/rochester#webpage", "url": "https://telehealthfx.com/locations/rochester", "name": "GLP-1 Weight Loss in Rochester | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by New York-licensed physicians in Rochester. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/rochester#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/rochester#clinic", "name": "Telehealth FX - Rochester", "url": "https://telehealthfx.com/locations/rochester", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Rochester", "containedInPlace": {"@type": "State", "name": "New York"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 43.1566, "longitude": -77.6088}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/rochester#service", "name": "GLP-1 Weight Loss Program - Rochester", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Rochester, New York residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/rochester#clinic"}, "areaServed": {"@type": "City", "name": "Rochester", "containedInPlace": {"@type": "State", "name": "New York"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/rochester#faq", "mainEntity": [{"@type": "Question", "name": "I work night shifts. When do I do the intake?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous—complete it after your shift, before sleep, or on a day off."}}, {"@type": "Question", "name": "Do you deliver to Pittsford, Victor, and Greece?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Monroe, Ontario, and Wayne County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationRochester />
    </>
  );
}
