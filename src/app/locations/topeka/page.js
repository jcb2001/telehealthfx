import { LocationTopeka } from "../../../components/location-topeka";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Topeka | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Kansas-licensed physicians in Topeka. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Topeka | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Topeka, Kansas residents. Kansas-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/topeka",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/topeka/'
  }
};
export default function TopekaPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/topeka#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Topeka", "item": "https://telehealthfx.com/locations/topeka"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/topeka#webpage", "url": "https://telehealthfx.com/locations/topeka", "name": "GLP-1 Weight Loss in Topeka | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Kansas-licensed physicians in Topeka. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/topeka#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/topeka#clinic", "name": "Telehealth FX - Topeka", "url": "https://telehealthfx.com/locations/topeka", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Topeka", "containedInPlace": {"@type": "State", "name": "Kansas"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 39.0473, "longitude": -95.6752}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/topeka#service", "name": "GLP-1 Weight Loss Program - Topeka", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Topeka, Kansas residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/topeka#clinic"}, "areaServed": {"@type": "City", "name": "Topeka", "containedInPlace": {"@type": "State", "name": "Kansas"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/topeka#faq", "mainEntity": [{"@type": "Question", "name": "I work at the VA. Is this separate from FEHB?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Completely independent of your federal benefits."}}, {"@type": "Question", "name": "Do you deliver to Lawrence and Manhattan?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Shawnee, Douglas, and Riley County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationTopeka />
    </>
  );
}
