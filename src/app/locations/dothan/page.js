import { LocationDothan } from "../../../components/location-dothan";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in Dothan | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by Alabama-licensed physicians in Dothan. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in Dothan | Telehealth FX",
    description: "Clinical GLP-1 telehealth for Dothan, Alabama residents. Alabama-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/dothan/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/dothan/'
  }
};
export default function DothanPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/dothan#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "Dothan", "item": "https://telehealthfx.com/locations/dothan"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/dothan#webpage", "url": "https://telehealthfx.com/locations/dothan", "name": "GLP-1 Weight Loss in Dothan | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by Alabama-licensed physicians in Dothan. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/dothan#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/dothan#clinic", "name": "Telehealth FX - Dothan", "url": "https://telehealthfx.com/locations/dothan", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "Dothan", "containedInPlace": {"@type": "State", "name": "Alabama"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 31.2232, "longitude": -85.3905}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/dothan#service", "name": "GLP-1 Weight Loss Program - Dothan", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to Dothan, Alabama residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/dothan#clinic"}, "areaServed": {"@type": "City", "name": "Dothan", "containedInPlace": {"@type": "State", "name": "Alabama"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/dothan#faq", "mainEntity": [{"@type": "Question", "name": "Will GLP-1 affect my flight physical?", "acceptedAnswer": {"@type": "Answer", "text": "Consult your flight surgeon. Telehealth FX is independent of military medical records."}}, {"@type": "Question", "name": "Do you deliver to Daleville, Enterprise, and Ozark?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All Houston, Dale, and Coffee County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationDothan />
    </>
  );
}
