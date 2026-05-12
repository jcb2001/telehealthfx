import { LocationSpringfieldIL } from "../../../components/location-springfield-il";
export const metadata = {
  title: "GLP-1 Weight Loss in Springfield | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Illinois-licensed physicians in Springfield. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Springfield | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Springfield, Illinois residents. Illinois-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/springfield-il",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/springfield-il"
  }
};
export default function SpringfieldILPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/springfield-il#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Springfield", "item": "https://telehealthfx.com/locations/springfield-il"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/springfield-il#webpage", "url": "https://telehealthfx.com/locations/springfield-il", "name": "GLP-1 Weight Loss in Springfield | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Illinois-licensed physicians in Springfield. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/springfield-il#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/springfield-il#clinic", "name": "Telehealth FX - Springfield", "url": "https://telehealthfx.com/locations/springfield-il", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Springfield", "containedInPlace": {"@type": "State", "name": "Illinois"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 39.7817, "longitude": -89.6501}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/springfield-il#service", "name": "GLP-1 Weight Loss Program - Springfield", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Springfield, Illinois residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/springfield-il#clinic"}, "areaServed": {"@type": "City", "name": "Springfield", "containedInPlace": {"@type": "State", "name": "Illinois"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/springfield-il#faq", "mainEntity": [{"@type": "Question", "name": "I'm a state employee. Is this separate?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Completely independent of your state employee benefits."}}, {"@type": "Question", "name": "Do you deliver to Chatham, Rochester, and Jacksonville?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Sangamon and Morgan County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationSpringfieldIL />
    </>
  );
}
