import { LocationFargo } from "../../../components/location-fargo";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Fargo | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by North Dakota-licensed physicians in Fargo. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Fargo | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Fargo, North Dakota residents. North Dakota-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/fargo/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/fargo/'
  }
};
export default function FargoPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/fargo#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Fargo", "item": "https://telehealthfx.com/locations/fargo"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/fargo#webpage", "url": "https://telehealthfx.com/locations/fargo", "name": "GLP-1 Weight Loss in Fargo | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by North Dakota-licensed physicians in Fargo. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/fargo#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/fargo#clinic", "name": "Telehealth FX - Fargo", "url": "https://telehealthfx.com/locations/fargo", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Fargo", "containedInPlace": {"@type": "State", "name": "North Dakota"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 46.8772, "longitude": -96.7898}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/fargo#service", "name": "GLP-1 Weight Loss Program - Fargo", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Fargo, North Dakota residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/fargo#clinic"}, "areaServed": {"@type": "City", "name": "Fargo", "containedInPlace": {"@type": "State", "name": "North Dakota"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/fargo#faq", "mainEntity": [{"@type": "Question", "name": "It's January. How fast is delivery?", "acceptedAnswer": {"@type": "Answer", "text": "USPS Priority Mail. Winter weather may add 1-2 days during severe events."}}, {"@type": "Question", "name": "Do you deliver to Moorhead MN and West Fargo?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Cass County ND and Clay County MN addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationFargo />
    </>
  );
}
