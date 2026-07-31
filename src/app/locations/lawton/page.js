import { LocationLawton } from "../../../components/location-lawton";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Lawton | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Oklahoma-licensed physicians in Lawton. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Lawton | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Lawton, Oklahoma residents. Oklahoma-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/lawton",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/lawton/'
  }
};
export default function LawtonPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/lawton#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Lawton", "item": "https://telehealthfx.com/locations/lawton"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/lawton#webpage", "url": "https://telehealthfx.com/locations/lawton", "name": "GLP-1 Weight Loss in Lawton | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Oklahoma-licensed physicians in Lawton. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/lawton#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/lawton#clinic", "name": "Telehealth FX - Lawton", "url": "https://telehealthfx.com/locations/lawton", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Lawton", "containedInPlace": {"@type": "State", "name": "Oklahoma"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 34.6036, "longitude": -98.3959}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/lawton#service", "name": "GLP-1 Weight Loss Program - Lawton", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Lawton, Oklahoma residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/lawton#clinic"}, "areaServed": {"@type": "City", "name": "Lawton", "containedInPlace": {"@type": "State", "name": "Oklahoma"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/lawton#faq", "mainEntity": [{"@type": "Question", "name": "I'm a drill sergeant. Can I do this between cycles?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Fully asynchronous—complete on your schedule."}}, {"@type": "Question", "name": "Do you deliver on post and to Elgin?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Fort Sill, Lawton, and Comanche County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationLawton />
    </>
  );
}
