import React from 'react';
import { WeightLossSanAntonio } from '../../../components/weight-loss-san-antonio.jsx';
import { GenericPage } from '../../../components/generic-page.jsx';

export const metadata = {
  title: "Medical Weight Loss Clinic San Antonio | Semaglutide & GLP-1 | Telehealth FX",
  description: "Looking for a medical weight loss clinic in San Antonio? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
  openGraph: {
    title: "Medical Weight Loss Clinic San Antonio | Semaglutide & GLP-1",
    description: "Looking for a medical weight loss clinic in San Antonio? Skip the traffic and 300% medspa markups. Get Semaglutide delivered overnight via Telehealth FX.",
    url: 'https://telehealthfx.com/weight-loss/san-antonio',
    type: 'article',
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Telehealth FX - San Antonio Weight Loss Hub",
    "url": "https://telehealthfx.com/weight-loss/san-antonio",
    "description": "Premium telehealth weight loss clinic providing compounded Semaglutide and Tirzepatide to San Antonio, Texas residents.",
    "areaServed": {
      "@type": "City",
      "name": "San Antonio",
      "sameAs": "https://en.wikipedia.org/wiki/San_Antonio"
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
        <WeightLossSanAntonio />
      </GenericPage>
    </>
  );
}
