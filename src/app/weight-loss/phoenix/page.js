import React from 'react';
import { WeightLossPhoenix } from '../../../components/weight-loss-phoenix.jsx';

export const metadata = {
  title: "Medical Weight Loss Clinic Phoenix | Semaglutide & GLP-1 | Telehealth FX",
  description: "Looking for a medical weight loss clinic in Phoenix? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
  openGraph: {
    title: "Medical Weight Loss Clinic Phoenix | Semaglutide & GLP-1",
    description: "Looking for a medical weight loss clinic in Phoenix? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
    url: 'https://telehealthfx.com/weight-loss/phoenix',
    type: 'article',
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Telehealth FX - Phoenix Weight Loss Hub",
    "url": "https://telehealthfx.com/weight-loss/phoenix",
    "description": "Premium telehealth weight loss clinic providing compounded Semaglutide and Tirzepatide to Phoenix, Arizona residents.",
    "areaServed": {
      "@type": "City",
      "name": "Phoenix",
      "sameAs": "https://en.wikipedia.org/wiki/Phoenix"
    },
    "medicalSpecialty": "Weight Loss",
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "GLP-1 Telehealth Prescriptions"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
        <WeightLossPhoenix />
      
    </>
  );
}
