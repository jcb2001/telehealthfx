import { LocationColumbusGA } from "../../../components/location-columbus-ga";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Columbus | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Georgia-licensed physicians in Columbus. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Columbus | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Columbus, Georgia residents. Georgia-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/columbus-ga",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/columbus-ga/'
  }
};
export default function ColumbusGAPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/columbus-ga#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Columbus", "item": "https://telehealthfx.com/locations/columbus-ga"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/columbus-ga#webpage", "url": "https://telehealthfx.com/locations/columbus-ga", "name": "GLP-1 Weight Loss in Columbus | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Georgia-licensed physicians in Columbus. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/columbus-ga#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/columbus-ga#clinic", "name": "Telehealth FX - Columbus", "url": "https://telehealthfx.com/locations/columbus-ga", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "State", "name": "Georgia"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 32.461, "longitude": -84.9877}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/columbus-ga#service", "name": "GLP-1 Weight Loss Program - Columbus", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Columbus, Georgia residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/columbus-ga#clinic"}, "areaServed": {"@type": "City", "name": "Columbus", "containedInPlace": {"@type": "State", "name": "Georgia"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/columbus-ga#faq", "mainEntity": [{"@type": "Question", "name": "I'm an RI. Will this affect my Ranger tab status?", "acceptedAnswer": {"@type": "Answer", "text": "Consult your unit surgeon. Telehealth FX is independent of military medical records."}}, {"@type": "Question", "name": "Do you deliver to Phenix City and Fort Moore?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Muscogee, Russell (AL), and Harris County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationColumbusGA />
    </>
  );
}
