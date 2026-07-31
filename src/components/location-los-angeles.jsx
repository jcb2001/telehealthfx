"use client";
import React from 'react';
import { HeroVariationA, ClinicalDeepDive, PatientArchetype, InsuranceBreakdown, LocalTransitPain, StateLegalFramework, DeliveryGridMap, FinalCTA } from './location-modules.jsx';

export function LocationLosAngeles() {
  return (
    <div style={{ background: '#FBF8F3', overflow: 'hidden' }}>
      
      <HeroVariationA 
        stateName="California"
        cityName="Los Angeles"
        headline="Clinical GLP-1 Weight Loss in <br/> <span style='color: #2ECC71'>Los Angeles</span>"
        subheadline="Bypass the gridlock on the 405 and the extreme markups of Beverly Hills concierge clinics. Access quality-verified compounded Semaglutide, delivered directly to your home anywhere in Southern California."
        ctaText="Check California Eligibility"
      />

      <ClinicalDeepDive 
        title="The Southern California Metabolic Reality"
        paragraphs={[
          "Los Angeles presents a profound contradiction when it comes to metabolic health. The region is the global epicenter of 'wellness culture,' saturated with Erewhon smoothies, boutique pilates studios, and biohacking clinics. Yet, the underlying infrastructure of the city actively works against baseline physiological health.",
          "The extreme car dependency of Greater Los Angeles forces residents into severe daily sedentary behavior. Spending two to three hours a day commuting on the 10, the 101, or the 405 isn't just a loss of time—it triggers chronic, sustained cortisol release due to road rage and traffic anxiety. This prolonged cortisol exposure directly signals the body to store visceral fat and induces systemic insulin resistance.",
          "Furthermore, the intense pressure of the entertainment and media industries often leads to erratic, 14-hour production schedules where reliance on high-glycemic 'craft services' or late-night takeout becomes inevitable. When insulin signaling breaks down under these conditions, attempting to out-exercise the problem at a West Hollywood gym is biochemically futile. Clinical intervention via GLP-1 receptor agonists is required to repair the underlying metabolic dysfunction."
        ]}
        citations={[
          "Los Angeles County Department of Public Health. (2025). <em>Impact of Commute-Driven Sedentary Behavior on Metabolic Syndrome</em>.",
          "UCLA Health. (2024). <em>Cortisol Dysregulation and Visceral Adiposity in High-Stress Los Angeles Populations</em>."
        ]}
      />

      <PatientArchetype 
        archetype="The Studio City Production Manager"
        quote="I tried everything. The intermittent fasting, the juice cleanses, the 5 AM trainers. But working 14-hour days on set with craft services right there completely ruined my insulin response. Telehealth FX fixed the biology."
        details="<strong>Patient Profile:</strong> David, 42, Line Producer living in Studio City.<br/><br/><strong>The Challenge:</strong> David's erratic schedule made traditional healthcare impossible. Driving to a metabolic clinic in Beverly Hills meant losing three hours of his day. Worse, his industry health plan flatly denied coverage for Wegovy, categorizing his BMI of 32 as a 'lifestyle' issue rather than a clinical disease.<br/><br/><strong>The Intervention:</strong> Using Telehealth FX, David completed his clinical intake at 11 PM after wrapping a shoot. A California-licensed physician reviewed his profile asynchronously, and his compounded medication was cold-shipped to his home in the Valley, completely bypassing the Westside traffic."
      />

      <InsuranceBreakdown 
        title="Navigating California Insurance Denials"
        text="Despite California leading the nation in many healthcare initiatives, securing coverage for GLP-1 weight loss medications through major local networks is exceptionally difficult."
        employers={[
          { name: "Entertainment Industry Guild Plans", detail: "Many prominent union and guild plans (like certain SAG-AFTRA or WGA health funds) have tightened their formularies, frequently denying prior authorizations for preventative weight loss to control fund spending." },
          { name: "HMO Gridlock (Kaiser Permanente)", detail: "Patients within massive HMO networks like Kaiser often face months-long waitlists just to see a specialist who can write the prescription, only to find the medication is out of stock at the network pharmacy." }
        ]}
      />

      <LocalTransitPain 
        title="Bypass The 405 & Cedars-Sinai Waitlists"
        transitText="Spending two hours fighting traffic on the 405 just to sit in a Beverly Hills waiting room for a 5-minute prescription refill is a fundamentally broken model for Los Angeles professionals."
        hospitalText="Even if you secure an appointment at renowned metabolic centers like <strong>Cedars-Sinai</strong> or <strong>UCLA Health</strong>, the reality at local Ralphs, CVS, or Walgreens pharmacies is bleak: branded medications are on indefinite national backorder. Our decentralized 503A pharmacy network bypasses this supply chain failure entirely."
      />

      <StateLegalFramework 
        stateName="California"
        boardName="Medical Board of California"
        text="Telehealth FX operates in strict compliance with the <strong>Medical Board of California's</strong> telehealth guidelines. Under current California law, a valid physician-patient relationship can be established via asynchronous, store-and-forward technology without the need for a mandatory in-person physical examination or live video consultation, provided the standard of care is met. This allows our CA-licensed physicians to legally and safely evaluate your metabolic health profile and prescribe compounded GLP-1 medications entirely online."
      />

      <DeliveryGridMap 
        cityName="Los Angeles"
        mapQuery="Los Angeles, CA"
        coordinates="34.0522° N, 118.2437° W"
        counties="Los Angeles County, Orange County, Ventura County, Riverside County, San Bernardino County"
        neighborhoods={['West Hollywood', 'Beverly Hills', 'Santa Monica', 'Studio City', 'Sherman Oaks', 'Downtown LA', 'Silver Lake', 'Pasadena']}
      />

      <FinalCTA stateName="California" />

    </div>
  );
}
