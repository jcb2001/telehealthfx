import { LocationClarksville } from "../../../components/location-clarksville";
export const metadata = {
  title: "GLP-1 Weight Loss in Clarksville | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Tennessee-licensed physicians in Clarksville. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Clarksville | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Clarksville, Tennessee residents. Tennessee-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/clarksville",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/clarksville/'
  }
};
export default function ClarksvillePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/clarksville#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Clarksville", "item": "https://telehealthfx.com/locations/clarksville"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/clarksville#webpage", "url": "https://telehealthfx.com/locations/clarksville", "name": "GLP-1 Weight Loss in Clarksville | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Tennessee-licensed physicians in Clarksville. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/clarksville#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/clarksville#clinic", "name": "Telehealth FX - Clarksville", "url": "https://telehealthfx.com/locations/clarksville", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Clarksville", "containedInPlace": {"@type": "State", "name": "Tennessee"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 36.5298, "longitude": -87.3595}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/clarksville#service", "name": "GLP-1 Weight Loss Program - Clarksville", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Clarksville, Tennessee residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/clarksville#clinic"}, "areaServed": {"@type": "City", "name": "Clarksville", "containedInPlace": {"@type": "State", "name": "Tennessee"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/clarksville#faq", "mainEntity": [{"@type": "Question", "name": "I'm a Gold Star spouse. Do I still have TRICARE?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. And Telehealth FX is completely independent of TRICARE."}}, {"@type": "Question", "name": "Do you deliver to Fort Campbell and Oak Grove KY?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Montgomery County TN and Christian County KY addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationClarksville />
    </>
  );
}
