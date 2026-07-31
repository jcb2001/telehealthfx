import { LocationSpringfield } from "../../../components/location-springfield";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Springfield | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Missouri-licensed physicians in Springfield. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Springfield | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Springfield, Missouri residents. Missouri-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/springfield",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/springfield/'
  }
};
export default function SpringfieldPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/springfield#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Springfield", "item": "https://telehealthfx.com/locations/springfield"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/springfield#webpage", "url": "https://telehealthfx.com/locations/springfield", "name": "GLP-1 Weight Loss in Springfield | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Missouri-licensed physicians in Springfield. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/springfield#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/springfield#clinic", "name": "Telehealth FX - Springfield", "url": "https://telehealthfx.com/locations/springfield", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Springfield", "containedInPlace": {"@type": "State", "name": "Missouri"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 37.209, "longitude": -93.2923}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/springfield#service", "name": "GLP-1 Weight Loss Program - Springfield", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Springfield, Missouri residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/springfield#clinic"}, "areaServed": {"@type": "City", "name": "Springfield", "containedInPlace": {"@type": "State", "name": "Missouri"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/springfield#faq", "mainEntity": [{"@type": "Question", "name": "I work at Bass Pro. Warehouse shifts. When?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous."}}, {"@type": "Question", "name": "Do you deliver to Nixa, Ozark, and Branson?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Greene, Christian, and Taney County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationSpringfield />
    </>
  );
}
