import { LocationKnoxville } from "../../../components/location-knoxville";
export const metadata = {
  title: "GLP-1 Weight Loss in Knoxville | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by Tennessee-licensed physicians in Knoxville. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Knoxville | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Knoxville, Tennessee residents. Tennessee-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/knoxville",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/knoxville"
  }
};
export default function KnoxvillePage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/knoxville#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Knoxville", "item": "https://telehealthfx.com/locations/knoxville"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/knoxville#webpage", "url": "https://telehealthfx.com/locations/knoxville", "name": "GLP-1 Weight Loss in Knoxville | Telehealth FX", "description": "FDA-compliant compounded Semaglutide and Tirzepatide prescribed by Tennessee-licensed physicians in Knoxville. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/knoxville#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/knoxville#clinic", "name": "Telehealth FX - Knoxville", "url": "https://telehealthfx.com/locations/knoxville", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Knoxville", "containedInPlace": {"@type": "State", "name": "Tennessee"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 35.9606, "longitude": -83.9207}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/knoxville#service", "name": "GLP-1 Weight Loss Program - Knoxville", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Knoxville, Tennessee residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/knoxville#clinic"}, "areaServed": {"@type": "City", "name": "Knoxville", "containedInPlace": {"@type": "State", "name": "Tennessee"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/knoxville#faq", "mainEntity": [{"@type": "Question", "name": "I work at ORNL. Is this separate from my federal benefits?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. Telehealth FX is independent of FEHB and your DOE employment."}}, {"@type": "Question", "name": "Do you deliver to Oak Ridge, Farragut, and Maryville?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Knox, Anderson, Blount, and Loudon County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationKnoxville />
    </>
  );
}
