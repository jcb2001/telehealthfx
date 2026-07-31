import { LocationDesMoines } from "../../../components/location-des-moines";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Des Moines | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Iowa-licensed physicians in Des Moines. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Des Moines | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Des Moines, Iowa residents. Iowa-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/des-moines",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/des-moines/'
  }
};
export default function DesMoinesPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/des-moines#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Des Moines", "item": "https://telehealthfx.com/locations/des-moines"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/des-moines#webpage", "url": "https://telehealthfx.com/locations/des-moines", "name": "GLP-1 Weight Loss in Des Moines | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Iowa-licensed physicians in Des Moines. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/des-moines#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/des-moines#clinic", "name": "Telehealth FX - Des Moines", "url": "https://telehealthfx.com/locations/des-moines", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Des Moines", "containedInPlace": {"@type": "State", "name": "Iowa"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 41.5868, "longitude": -93.625}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/des-moines#service", "name": "GLP-1 Weight Loss Program - Des Moines", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Des Moines, Iowa residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/des-moines#clinic"}, "areaServed": {"@type": "City", "name": "Des Moines", "containedInPlace": {"@type": "State", "name": "Iowa"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/des-moines#faq", "mainEntity": [{"@type": "Question", "name": "I work in insurance. Is this a conflict?", "acceptedAnswer": {"@type": "Answer", "text": "No. Telehealth FX is independent. Your use is a private healthcare decision."}}, {"@type": "Question", "name": "Do you deliver to Ankeny and Waukee?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Polk, Dallas, and Warren County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationDesMoines />
    </>
  );
}
