import React from 'react';
import { WeightLossSanFrancisco } from '../../../components/weight-loss-san-francisco.jsx';

export const metadata = {
  title: "Medical Weight Loss Clinic San Francisco | Semaglutide & GLP-1 | Telehealth FX",
  description: "Looking for a medical weight loss clinic in San Francisco? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
  openGraph: {
    title: "Medical Weight Loss Clinic San Francisco | Semaglutide & GLP-1",
    description: "Looking for a medical weight loss clinic in San Francisco? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
    url: 'https://telehealthfx.com/weight-loss/san-francisco',
    type: 'article',
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Telehealth FX - San Francisco Weight Loss Hub",
    "url": "https://telehealthfx.com/weight-loss/san-francisco",
    "description": "Premium telehealth weight loss clinic providing compounded Semaglutide and Tirzepatide to San Francisco, California residents.",
    "areaServed": {
      "@type": "City",
      "name": "San Francisco",
      "sameAs": "https://en.wikipedia.org/wiki/San_Francisco"
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
      
        <WeightLossSanFrancisco />
      
    </>
  );
}
