import Link from "next/link";
import { notFound } from "next/navigation";
import statesData from "../../../../data/us-states-glp1-directory.json";

const START_URL = "https://go.telehealthfx.com/start";

export async function generateStaticParams() {
  return statesData.map((s) => ({
    state: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { state: stateSlug } = await params;
  const state = statesData.find((s) => s.slug === stateSlug);
  if (!state) return {};

  const title = `${state.name} GLP-1 Weight Loss Online: Tirzepatide & Semaglutide`;
  const description = `Doctor-prescribed compounded Semaglutide & Tirzepatide in ${state.name}. $99 first month promo, flat $146/mo or $258/mo, $0 doctor fees, 2-day cold shipping.`;

  return {
    robots: { index: true, follow: true },
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://telehealthfx.com/locations/${state.slug}/glp-1/`,
      siteName: "Telehealth FX",
      type: "website",
    },
    alternates: {
      canonical: `https://telehealthfx.com/locations/${state.slug}/glp-1/`,
    },
  };
}

export default async function StateGlp1Page({ params }) {
  const { state: stateSlug } = await params;
  const state = statesData.find((s) => s.slug === stateSlug);
  if (!state) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://telehealthfx.com/locations/${state.slug}/glp-1/#webpage`,
        "url": `https://telehealthfx.com/locations/${state.slug}/glp-1/`,
        "name": `${state.name} GLP-1 Online Telehealth: Compounded Tirzepatide & Semaglutide`,
        "description": `State-licensed clinical telehealth delivery of compounded GLP-1 medications across ${state.name}. From $99 first month promo with zero membership fees.`,
        "inLanguage": "en-US",
        "lastReviewed": "2026-09-20",
        "reviewedBy": {
          "@type": "Organization",
          "name": "Telehealth FX Clinical Advisory Board"
        }
      },
      {
        "@type": "MedicalClinic",
        "@id": `https://telehealthfx.com/locations/${state.slug}/glp-1/#clinic`,
        "name": `Telehealth FX - ${state.name} Telemedicine Network`,
        "url": `https://telehealthfx.com/locations/${state.slug}/glp-1/`,
        "telephone": "+1-800-TELEHEALTH",
        "areaServed": {
          "@type": "State",
          "name": state.name
        },
        "medicalSpecialty": "Endocrine",
        "priceRange": "$99 - $258/month",
        "currenciesAccepted": "USD"
      },
      {
        "@type": "FAQPage",
        "@id": `https://telehealthfx.com/locations/${state.slug}/glp-1/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `Are Telehealth FX doctors licensed to practice medicine in ${state.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes. Every Telehealth FX patient in ${state.name} is evaluated and managed exclusively by board-certified physicians credentialed by the ${state.medicalBoard}.`
            }
          },
          {
            "@type": "Question",
            "name": `How much does compounded semaglutide and tirzepatide cost in ${state.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Both Compounded Semaglutide and Compounded Tirzepatide start at an introductory $99 promotional price for Month 1. After month 1, semaglutide is a flat $146/month and tirzepatide is a flat $258/month across all doses with zero membership fees and $0 doctor consult charges.`
            }
          },
          {
            "@type": "Question",
            "name": `How is medication delivered to ${state.name} residents?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Medications are compounded by licensed 503A US compounding pharmacies and dispatched via ${state.transit} with temperature-controlled cold packs, alcohol swabs, and sterile syringes directly to your door.`
            }
          }
        ]
      }
    ]
  };

  return (
    <div style={{ background: '#FBFBFB', color: '#111827', minHeight: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section style={{ padding: '80px 20px 48px', maxWidth: '1080px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '6px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: 600, color: '#065F46', marginBottom: '24px' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></span>
          {state.medicalBoard} Compliant · Direct Delivery Across {state.name}
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#0F172A', marginBottom: '20px' }}>
          Doctor-Prescribed GLP-1 Weight Loss in <span style={{ color: '#0D9488' }}>{state.name}</span>
        </h1>

        <p style={{ fontSize: 'clamp(17px, 2.5vw, 21px)', color: '#475569', maxWidth: '780px', margin: '0 auto 36px', lineHeight: 1.6 }}>
          Direct-to-door compounded Semaglutide and Tirzepatide from licensed 503A US pharmacies. No insurance prior authorizations, zero monthly membership dues, and physician consultation included.
        </p>

        {/* Pricing Anchor Card */}
        <div style={{ background: '#FFFFFF', border: '2px solid #0D9488', borderRadius: '16px', padding: '32px 24px', maxWidth: '720px', margin: '0 auto 40px', boxShadow: '0 20px 25px -5px rgba(13, 148, 136, 0.08)' }}>
          <div style={{ display: 'inline-block', background: '#0D9488', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, padding: '4px 12px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
            New Patient Incentive
          </div>
          <div style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
            $99 First Month Promo
          </div>
          <p style={{ color: '#64748B', fontSize: '16px', margin: '0 0 24px' }}>
            Available for both <strong>Compounded Semaglutide</strong> (then flat $146/mo) and <strong>Compounded Tirzepatide</strong> (then flat $258/mo). Price frozen at all doses.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={START_URL}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#0D9488', color: '#FFFFFF', fontWeight: 700, fontSize: '17px', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 4px 6px -1px rgba(13, 148, 136, 0.3)' }}
            >
              Claim $99 First Month in {state.abbrev} →
            </a>
          </div>
        </div>

        {/* Value Badges */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', maxWidth: '920px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}>⚖️</div>
            <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '15px' }}>Zero Membership Fees</div>
            <div style={{ color: '#64748B', fontSize: '13px', marginTop: '4px' }}>Save $948/year compared to Mochi and Ro subscription fees.</div>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}>❄️</div>
            <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '15px' }}>Cold-Chain Express</div>
            <div style={{ color: '#64748B', fontSize: '13px', marginTop: '4px' }}>{state.transit} with temperature logging and free supplies.</div>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}>🩺</div>
            <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '15px' }}>Licensed MD Evaluation</div>
            <div style={{ color: '#64748B', fontSize: '13px', marginTop: '4px' }}>Reviewed by physicians licensed by the {state.medicalBoard}.</div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{ maxWidth: '860px', margin: '0 auto 60px', padding: '0 20px' }}>
        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '36px 28px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '8px' }}>
            Telehealth FX vs. Typical {state.name} Med-Spas
          </h2>
          <p style={{ color: '#64748B', textAlign: 'center', fontSize: '15px', marginBottom: '28px' }}>
            Local clinics in {state.name} frequently markup compounded peptides by 300% to cover physical clinic overhead.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '15px' }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                  <th style={{ padding: '14px 16px', color: '#475569', fontWeight: 700 }}>Feature / Service</th>
                  <th style={{ padding: '14px 16px', color: '#0D9488', fontWeight: 800 }}>Telehealth FX ({state.name})</th>
                  <th style={{ padding: '14px 16px', color: '#64748B', fontWeight: 700 }}>Local {state.abbrev} Med-Spas</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>Starter Price</td>
                  <td style={{ padding: '14px 16px', color: '#059669', fontWeight: 800 }}>$99 Month 1 Promo</td>
                  <td style={{ padding: '14px 16px', color: '#DC2626' }}>$350 – $500 Intake Fee</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>Ongoing Semaglutide</td>
                  <td style={{ padding: '14px 16px', color: '#059669', fontWeight: 800 }}>Flat $146/mo (All Doses)</td>
                  <td style={{ padding: '14px 16px', color: '#DC2626' }}>{state.avgMedSpa}</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>Ongoing Tirzepatide</td>
                  <td style={{ padding: '14px 16px', color: '#059669', fontWeight: 800 }}>Flat $258/mo (All Doses)</td>
                  <td style={{ padding: '14px 16px', color: '#DC2626' }}>$650 – $950/mo</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #F1F5F9' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>Monthly Membership Fees</td>
                  <td style={{ padding: '14px 16px', color: '#059669', fontWeight: 800 }}>$0 (No Subscriptions)</td>
                  <td style={{ padding: '14px 16px', color: '#DC2626' }}>$75 – $150/mo retainer</td>
                </tr>
                <tr>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>Delivery Method</td>
                  <td style={{ padding: '14px 16px', color: '#059669', fontWeight: 800 }}>{state.transit} to Door</td>
                  <td style={{ padding: '14px 16px', color: '#64748B' }}>In-person weekly office visits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Local Metropolitan Hubs in this State */}
      {state.cities && state.cities.length > 0 && (
        <section style={{ maxWidth: '860px', margin: '0 auto 60px', padding: '0 20px' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '32px 28px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', marginBottom: '16px' }}>
              Metropolitan Care Centers in {state.name}
            </h3>
            <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '20px' }}>
              We service all zip codes and counties across {state.name}. Explore dedicated metropolitan hubs:
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {state.cities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/locations/${c.slug}/`}
                  style={{ background: '#F1F5F9', color: '#334155', padding: '8px 14px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}
                >
                  {c.city}, {state.abbrev} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section style={{ maxWidth: '860px', margin: '0 auto 80px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '32px' }}>
          Frequently Asked Questions in {state.name}
        </h2>

        <div style={{ display: 'grid', gap: '16px' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
              How does the $99 first-month promotion work?
            </h3>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              New patients in {state.name} receive their first month of Compounded Semaglutide or Compounded Tirzepatide for just $99. This includes your clinical assessment, prescription, cold-chain medication shipment, and injection supplies. After Month 1, your rate is locked at flat $146/mo (Semaglutide) or $258/mo (Tirzepatide) across all titration doses with zero membership dues.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
              Do I need existing lab work or doctor referrals?
            </h3>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              No referral is required. If you have recent metabolic panel results from the past 12 months, you can upload them directly during online intake. If not, our board-certified clinical team evaluates your medical history, contraindications, and BMI online to determine eligibility safely.
            </p>
          </div>

          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
              What if I am already taking brand Ozempic, Wegovy, or Mounjaro?
            </h3>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Our clinicians offer seamless dose matching. Simply submit a photo of your existing prescription label or medication box, and our physicians will match your current therapeutic maintenance dose so you don't have to restart titration from the beginning.
            </p>
          </div>
        </div>

        {/* Final CTA Strip */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <a
            href={START_URL}
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#0D9488', color: '#FFFFFF', fontWeight: 700, fontSize: '18px', padding: '18px 42px', borderRadius: '12px', textDecoration: 'none', boxShadow: '0 10px 15px -3px rgba(13, 148, 136, 0.3)' }}
          >
            Start {state.name} Consultation ($99 Mo 1) →
          </a>
        </div>
      </section>
    </div>
  );
}
