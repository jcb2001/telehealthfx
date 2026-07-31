import { LocationSanBernardino } from "../../../components/location-san-bernardino";
export const metadata = {
  robots: { index: true, follow: true },
  title: "GLP-1 Weight Loss in San Bernardino | Telehealth FX",
  description: "quality-verified compounded Semaglutide prescribed by California-licensed physicians in San Bernardino. From $146/mo with overnight cold-pack delivery.",
  openGraph: {
    title: "GLP-1 Weight Loss in San Bernardino | Telehealth FX",
    description: "Clinical GLP-1 telehealth for San Bernardino, California residents. California-licensed physicians. From $146/mo.",
    url: "https://telehealthfx.com/locations/san-bernardino",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: 'https://telehealthfx.com/locations/san-bernardino/'
  }
};
export default function SanBernardinoPage() {
  const jsonLd = {"@context": "https://schema.org", "@graph": [{"@type": "Organization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": {"@type": "ImageObject", "url": "https://telehealthfx.com/logo.png"}, "sameAs": []}, {"@type": "WebSite", "@id": "https://telehealthfx.com/#website", "url": "https://telehealthfx.com", "name": "Telehealth FX", "publisher": {"@id": "https://telehealthfx.com/#organization"}}, {"@type": "BreadcrumbList", "@id": "https://telehealthfx.com/locations/san-bernardino#breadcrumb", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com"}, {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://telehealthfx.com/locations"}, {"@type": "ListItem", "position": 3, "name": "San Bernardino", "item": "https://telehealthfx.com/locations/san-bernardino"}]}, {"@type": "MedicalWebPage", "@id": "https://telehealthfx.com/locations/san-bernardino#webpage", "url": "https://telehealthfx.com/locations/san-bernardino", "name": "GLP-1 Weight Loss in San Bernardino | Telehealth FX", "description": "quality-verified compounded Semaglutide and Tirzepatide prescribed by California-licensed physicians in San Bernardino. From $146/mo with overnight delivery.", "isPartOf": {"@id": "https://telehealthfx.com/#website"}, "breadcrumb": {"@id": "https://telehealthfx.com/locations/san-bernardino#breadcrumb"}, "inLanguage": "en-US", "medicalAudience": {"@type": "MedicalAudience", "audienceType": "Patient"}, "lastReviewed": "2026-05-01", "reviewedBy": {"@type": "Organization", "name": "Telehealth FX Clinical Team"}}, {"@type": "MedicalClinic", "@id": "https://telehealthfx.com/locations/san-bernardino#clinic", "name": "Telehealth FX - San Bernardino", "url": "https://telehealthfx.com/locations/san-bernardino", "telephone": "+1-800-TELEHEALTH", "areaServed": {"@type": "City", "name": "San Bernardino", "containedInPlace": {"@type": "State", "name": "California"}}, "medicalSpecialty": "Endocrine", "isAcceptingNewPatients": true, "availableService": {"@type": "MedicalTherapy", "name": "GLP-1 Receptor Agonist Therapy", "alternateName": "Compounded Semaglutide / Tirzepatide", "medicineSystem": "WesternConventional", "relevantSpecialty": "Endocrine"}, "currenciesAccepted": "USD", "paymentAccepted": "Credit Card, HSA, FSA", "priceRange": "$146-$349/mo", "geo": {"@type": "GeoCoordinates", "latitude": 34.1083, "longitude": -117.2898}}, {"@type": "Service", "@id": "https://telehealthfx.com/locations/san-bernardino#service", "name": "GLP-1 Weight Loss Program - San Bernardino", "description": "Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to San Bernardino, California residents. Includes physician evaluation, prescription, and cold-shipped medication.", "provider": {"@id": "https://telehealthfx.com/locations/san-bernardino#clinic"}, "areaServed": {"@type": "City", "name": "San Bernardino", "containedInPlace": {"@type": "State", "name": "California"}}, "serviceType": "Telehealth Weight Management", "offers": {"@type": "Offer", "price": "146", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start", "description": "Monthly compounded GLP-1 program with physician oversight"}}, {"@type": "FAQPage", "@id": "https://telehealthfx.com/locations/san-bernardino#faq", "mainEntity": [{"@type": "Question", "name": "I work warehouse shifts. When do I do the intake?", "acceptedAnswer": {"@type": "Answer", "text": "Anytime. Fully asynchronous—no appointment needed."}}, {"@type": "Question", "name": "Do you deliver to Riverside, Ontario, and Moreno Valley?", "acceptedAnswer": {"@type": "Answer", "text": "Yes. All San Bernardino and Riverside County addresses."}}]}]};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LocationSanBernardino />
    </>
  );
}
