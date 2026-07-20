import React from 'react';
import { WeightLossMiami } from '../../../components/weight-loss-miami.jsx';

export const metadata = {
  title: "Medical Weight Loss Clinic Miami | Semaglutide & GLP-1 | Telehealth FX",
  description: "Looking for a medical weight loss clinic in Miami? Skip the Brickell traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
  openGraph: {
    title: "Medical Weight Loss Clinic Miami | Semaglutide & GLP-1",
    description: "Looking for a medical weight loss clinic in Miami? Skip the Brickell traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
    url: 'https://telehealthfx.com/weight-loss/miami',
    type: 'article',
  }
,
  alternates: {
    canonical: 'https://telehealthfx.com/weight-loss/miami/'
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Telehealth FX - Miami Weight Loss Hub",
    "url": "https://telehealthfx.com/weight-loss/miami",
    "description": "Premium telehealth weight loss clinic providing compounded Semaglutide and Tirzepatide to Miami, FL residents.",
    "areaServed": {
      "@type": "City",
      "name": "Miami",
      "sameAs": "https://en.wikipedia.org/wiki/Miami"
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
      
        <WeightLossMiami />
      
    </>
  );
}
