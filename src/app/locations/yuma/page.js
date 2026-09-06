import { LocationYuma } from "../../../components/location-yuma";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Yuma | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Arizona-licensed physicians in Yuma. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Yuma | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Yuma, Arizona residents. Arizona-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/yuma/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/yuma/'
  }
};
export default function YumaPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/yuma#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Yuma", "item": "https://telehealthfx.com/locations/yuma"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/yuma#webpage", "url": "https://telehealthfx.com/locations/yuma", "name": "GLP-1 Weight Loss in Yuma | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Arizona-licensed physicians in Yuma. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/yuma#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/yuma#clinic", "name": "Telehealth FX - Yuma", "url": "https://telehealthfx.com/locations/yuma", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Yuma", "containedInPlace": {"@type": "State", "name": "Arizona"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 32.6927, "longitude": -114.6277}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/yuma#service", "name": "GLP-1 Weight Loss Program - Yuma", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Yuma, Arizona residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/yuma#clinic"}, "areaServed": {"@type": "City", "name": "Yuma", "containedInPlace": {"@type": "State", "name": "Arizona"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/yuma#faq", "mainEntity": [{"@type": "Question", "name": "I test weapons at YPG. Is this confidential?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Completely independent of your federal employer and FEHB."}}, {"@type": "Question", "name": "Do you deliver to San Luis, Somerton, and Wellton?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Yuma County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationYuma />
    </>
  );
}
