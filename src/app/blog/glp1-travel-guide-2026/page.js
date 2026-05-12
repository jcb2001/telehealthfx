import { BlogGLP1TravelGuide } from "../../../components/blog-glp1-travel-guide-2026.jsx";

export const metadata = {
  alternates: { canonical: 'https://telehealthfx.com/blog/glp1-travel-guide-2026/' },
  title: "Traveling with GLP-1: Flying, Storage & Staying on Protocol Abroad",
  description: "Complete guide to traveling with semaglutide and tirzepatide — TSA rules, temperature storage, international travel, and essential travel kit checklist.",
  openGraph: {
    title: "Traveling with GLP-1: The Complete Guide to Flying & Storage",
    description: "TSA rules, temperature storage, international travel, and essential travel kit checklist for GLP-1 patients.",
    images: [{ url: "https://telehealthfx.com/assets/glp1-travel-guide-featured.png", width: 1200, height: 630, alt: "GLP-1 Travel Guide" }],
  },
};

export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "MedicalWebPage", "@id": "https://telehealthfx.com/blog/glp1-travel-guide-2026/#article", "headline": "Traveling with GLP-1: The Complete Guide to Flying, Storage, and Staying on Protocol Abroad", "description": "Complete guide to traveling with semaglutide and tirzepatide — TSA rules, temperature storage, international travel, and essential travel kit.", "image": "https://telehealthfx.com/assets/glp1-travel-guide-featured.png", "datePublished": "2026-05-11", "dateModified": "2026-05-11", "wordCount": 2900, "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about", "jobTitle": "Lead Bio-Systems Analyst" }, "publisher": { "@id": "https://telehealthfx.com/#organization" }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/glp1-travel-guide-2026/" } },
    { "@type": "Article", "@id": "https://telehealthfx.com/blog/glp1-travel-guide-2026/#newsarticle", "headline": "Traveling with GLP-1: Flying, Storage & Staying on Protocol Abroad", "image": "https://telehealthfx.com/assets/glp1-travel-guide-featured.png", "datePublished": "2026-05-11", "dateModified": "2026-05-11", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@id": "https://telehealthfx.com/#organization" } },
    { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/glp1-travel-guide-2026/#faq", "mainEntity": [
      { "@type": "Question", "name": "Can I inject on the airplane?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. There is no rule against injecting medication on an aircraft. Choose the lavatory for privacy and hygiene. Dispose of needles in your travel sharps container — never in the airplane trash." } },
      { "@type": "Question", "name": "What if my medication gets warm during travel?", "acceptedAnswer": { "@type": "Answer", "text": "In-use semaglutide pens can tolerate up to 86°F for up to 56 days. Brief exposure above this threshold may not destroy the medication, but repeated or prolonged heat exposure reduces potency." } },
      { "@type": "Question", "name": "Can I shift my injection day for travel?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Semaglutide and tirzepatide have long half-lives. You can safely shift your injection day by 1–2 days in either direction without affecting efficacy." } }
    ]},
    { "@type": "Product", "name": "TelehealthFX GLP-1 Weight Loss Program", "description": "Clinician-guided GLP-1 protocol with nationwide shipping and early refill options for travel.", "brand": { "@type": "Brand", "name": "TelehealthFX" }, "url": "https://go.telehealthfx.com/start", "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png", "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2847", "bestRating": "5", "worstRating": "1" }, "review": [ { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Christina L." }, "reviewBody": "Requested an early refill before my Europe trip. Shipped in 2 days with cold packaging. Seamless." }, { "@type": "Review", "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "author": { "@type": "Person", "name": "Mark D." }, "reviewBody": "Traveled internationally for 3 weeks with no issues. The travel storage guidance was incredibly helpful." } ], "offers": { "@type": "Offer", "price": "199", "priceCurrency": "USD", "priceValidUntil": "2026-12-31", "availability": "https://schema.org/InStock", "url": "https://go.telehealthfx.com/start" } },
    { "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://telehealthfx.com/" }, { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://telehealthfx.com/blog/" }, { "@type": "ListItem", "position": 3, "name": "GLP-1 Travel Guide", "item": "https://telehealthfx.com/blog/glp1-travel-guide-2026/" } ] },
    { "@type": "MedicalOrganization", "@id": "https://telehealthfx.com/#organization", "name": "Telehealth FX", "url": "https://telehealthfx.com", "logo": { "@type": "ImageObject", "url": "https://telehealthfx.com/assets/Site%20Icon-modified.png" }, "sameAs": ["https://www.youtube.com/@TelehealthFX"], "contactPoint": { "@type": "ContactPoint", "contactType": "customer service", "url": "https://go.telehealthfx.com/start" }, "medicalSpecialty": "Endocrine" }
  ]};
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1TravelGuide /></>);
}
