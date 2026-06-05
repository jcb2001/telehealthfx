import React from 'react';
import { WeightLossChicago } from '../../../components/weight-loss-chicago.jsx';
import { GenericPage } from '../../../components/generic-page.jsx';

export const metadata = {
  title: "Medical Weight Loss Clinic Chicago | Semaglutide & GLP-1 | Telehealth FX",
  description: "Looking for a medical weight loss clinic in Chicago? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
  openGraph: {
    title: "Medical Weight Loss Clinic Chicago | Semaglutide & GLP-1",
    description: "Looking for a medical weight loss clinic in Chicago? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
    url: 'https://telehealthfx.com/weight-loss/chicago',
    type: 'article',
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Telehealth FX - Chicago Weight Loss Hub",
    "url": "https://telehealthfx.com/weight-loss/chicago",
    "description": "Premium telehealth weight loss clinic providing compounded Semaglutide and Tirzepatide to Chicago, Illinois residents.",
    "areaServed": {
      "@type": "City",
      "name": "Chicago",
      "sameAs": "https://en.wikipedia.org/wiki/Chicago"
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
      <GenericPage hideHero={true}>
        <WeightLossChicago />
      </GenericPage>
    </>
  );
}
