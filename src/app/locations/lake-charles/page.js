import { LocationLakeCharles } from "../../../components/location-lake-charles";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Lake Charles | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Louisiana-licensed physicians in Lake Charles. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Lake Charles | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Lake Charles, Louisiana residents. Louisiana-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/lake-charles",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/lake-charles/'
  }
};
export default function LakeCharlesPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/lake-charles#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Lake Charles", "item": "https://telehealthfx.com/locations/lake-charles"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/lake-charles#webpage", "url": "https://telehealthfx.com/locations/lake-charles", "name": "GLP-1 Weight Loss in Lake Charles | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Louisiana-licensed physicians in Lake Charles. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/lake-charles#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/lake-charles#clinic", "name": "Telehealth FX - Lake Charles", "url": "https://telehealthfx.com/locations/lake-charles", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Lake Charles", "containedInPlace": {"@type": "State", "name": "Louisiana"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 30.2266, "longitude": -93.2174}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/lake-charles#service", "name": "GLP-1 Weight Loss Program - Lake Charles", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Lake Charles, Louisiana residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/lake-charles#clinic"}, "areaServed": {"@type": "City", "name": "Lake Charles", "containedInPlace": {"@type": "State", "name": "Louisiana"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/lake-charles#faq", "mainEntity": [{"@type": "Question", "name": "I work rotating 12s at the LNG terminal. When?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous—complete between shifts."}}, {"@type": "Question", "name": "Do you deliver to Sulphur, Moss Bluff, and DeQuincy?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Calcasieu and Cameron Parish addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationLakeCharles />
    </>
  );
}
