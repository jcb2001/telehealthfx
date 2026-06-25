import { LocationModesto } from "../../../components/location-modesto";
export const metadata = {
  title: "GLP-1 Weight Loss in Modesto | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by California-licensed physicians in Modesto. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Modesto | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Modesto, California residents. California-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/modesto",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/modesto/'
  }
};
export default function ModestoPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/modesto#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Modesto", "item": "https://telehealthfx.com/locations/modesto"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/modesto#webpage", "url": "https://telehealthfx.com/locations/modesto", "name": "GLP-1 Weight Loss in Modesto | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by California-licensed physicians in Modesto. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/modesto#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/modesto#clinic", "name": "Telehealth FX - Modesto", "url": "https://telehealthfx.com/locations/modesto", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Modesto", "containedInPlace": {"@type": "State", "name": "California"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 37.6391, "longitude": -120.9969}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/modesto#service", "name": "GLP-1 Weight Loss Program - Modesto", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Modesto, California residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/modesto#clinic"}, "areaServed": {"@type": "City", "name": "Modesto", "containedInPlace": {"@type": "State", "name": "California"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/modesto#faq", "mainEntity": [{"@type": "Question", "name": "Kaiser told me to go to Sacramento. Is there a local option?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Telehealth FX is fully remote. Your medication ships directly to your Modesto address."}}, {"@type": "Question", "name": "Do you deliver to Ceres, Turlock, and Patterson?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Stanislaus County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationModesto />
    </>
  );
}
