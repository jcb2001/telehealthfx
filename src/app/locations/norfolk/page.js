import { LocationNorfolk } from "../../../components/location-norfolk";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Norfolk | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Virginia-licensed physicians in Norfolk. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Norfolk | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Norfolk, Virginia residents. Virginia-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/norfolk",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/norfolk/'
  }
};
export default function NorfolkPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/norfolk#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Norfolk", "item": "https://telehealthfx.com/locations/norfolk"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/norfolk#webpage", "url": "https://telehealthfx.com/locations/norfolk", "name": "GLP-1 Weight Loss in Norfolk | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Virginia-licensed physicians in Norfolk. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/norfolk#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/norfolk#clinic", "name": "Telehealth FX - Norfolk", "url": "https://telehealthfx.com/locations/norfolk", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Norfolk", "containedInPlace": {"@type": "State", "name": "Virginia"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 36.8508, "longitude": -76.2859}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/norfolk#service", "name": "GLP-1 Weight Loss Program - Norfolk", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Norfolk, Virginia residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/norfolk#clinic"}, "areaServed": {"@type": "City", "name": "Norfolk", "containedInPlace": {"@type": "State", "name": "Virginia"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/norfolk#faq", "mainEntity": [{"@type": "Question", "name": "I'm active duty. Will this affect my record?", "acceptedAnswer": {"@type": "Answer", "text": "Telehealth FX is completely independent of TRICARE and your military medical record."}}, {"@type": "Question", "name": "Do you deliver to Chesapeake, Portsmouth, and Hampton?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Hampton Roads addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationNorfolk />
    </>
  );
}
