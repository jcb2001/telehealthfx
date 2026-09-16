import Link from "next/link";

export const metadata = {
  robots: { index: true, follow: true },
  title: "TRT & Testosterone Replacement Therapy Online | From $79/mo | Telehealth FX",
  description: "Clinical Testosterone Replacement Therapy (TRT) prescribed by licensed physicians. Comprehensive $95 diagnostic bloodwork, Testosterone Cypionate, and discreet delivery across 21 metropolitan areas.",
  openGraph: {
    title: "TRT & Testosterone Replacement Therapy Online | Telehealth FX",
    description: "Doctor-prescribed Testosterone Replacement Therapy online from $79/mo. Transparent pricing, lab monitoring, and discreet shipping.",
    url: "https://telehealthfx.com/trt/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/trt/"
  }
};

export default function TRTHubPage() {
  const trtCities = [
  {
    "slug": "austin",
    "city": "Austin",
    "state": "Texas"
  },
  {
    "slug": "charlotte",
    "city": "Charlotte",
    "state": "North Carolina"
  },
  {
    "slug": "chicago",
    "city": "Chicago",
    "state": "Illinois"
  },
  {
    "slug": "columbus-oh",
    "city": "Columbus",
    "state": "Ohio"
  },
  {
    "slug": "dallas",
    "city": "Dallas",
    "state": "Texas"
  },
  {
    "slug": "denver",
    "city": "Denver",
    "state": "Colorado"
  },
  {
    "slug": "detroit",
    "city": "Detroit",
    "state": "Michigan"
  },
  {
    "slug": "houston",
    "city": "Houston",
    "state": "Texas"
  },
  {
    "slug": "indianapolis",
    "city": "Indianapolis",
    "state": "Indiana"
  },
  {
    "slug": "jacksonville",
    "city": "Jacksonville",
    "state": "Florida"
  },
  {
    "slug": "los-angeles",
    "city": "Los Angeles",
    "state": "California"
  },
  {
    "slug": "miami",
    "city": "Miami",
    "state": "Florida"
  },
  {
    "slug": "milwaukee",
    "city": "Milwaukee",
    "state": "Wisconsin"
  },
  {
    "slug": "nashville",
    "city": "Nashville",
    "state": "Tennessee"
  },
  {
    "slug": "new-york",
    "city": "New York",
    "state": "New York"
  },
  {
    "slug": "philadelphia",
    "city": "Philadelphia",
    "state": "Pennsylvania"
  },
  {
    "slug": "phoenix",
    "city": "Phoenix",
    "state": "Arizona"
  },
  {
    "slug": "san-antonio",
    "city": "San Antonio",
    "state": "Texas"
  },
  {
    "slug": "san-diego",
    "city": "San Diego",
    "state": "California"
  },
  {
    "slug": "san-francisco",
    "city": "San Francisco",
    "state": "California"
  },
  {
    "slug": "seattle",
    "city": "Seattle",
    "state": "Washington"
  }
];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/trt/#webpage",
        "url": "https://telehealthfx.com/trt/",
        "name": "Testosterone Replacement Therapy (TRT) Clinical Hub | Telehealth FX",
        "description": "Comprehensive guide to clinical Testosterone Replacement Therapy, lab diagnosis protocols, and regional clinic hubs.",
        "isPartOf": { "@id": "https://telehealthfx.com/#website" },
        "breadcrumb": { "@id": "https://telehealthfx.com/trt/#breadcrumb" },
        "inLanguage": "en-US",
        "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
        "about": {
          "@type": "MedicalTherapy",
          "name": "Testosterone Replacement Therapy",
          "drug": {
            "@type": "Substance",
            "name": "Testosterone Cypionate",
            "nonProprietaryName": "Testosterone Cypionate"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/trt/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://telehealthfx.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "TRT",
            "item": "https://telehealthfx.com/trt/"
          }
        ]
      }
    ]
  };

  return (
    <div style={{ background: "#FBF8F3", minHeight: "100vh", color: "var(--ink)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section style={{ padding: "80px 24px 48px", maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brand)", fontWeight: 600, fontSize: 13 }}>
          Men&apos;s Hormone Optimization
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1, marginBottom: 24, fontWeight: 400 }}>
          Clinical TRT &amp; Testosterone Therapy, <span style={{ fontStyle: "italic", color: "var(--brand)" }}>Delivered.</span>
        </h1>
        <p style={{ fontSize: 18, color: "var(--ink-2)", maxWidth: 760, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Evidence-based testosterone therapy prescribed by state-licensed physicians. Comprehensive diagnostic bloodwork, clinical titration, and continuous hematocrit &amp; PSA safety monitoring from $79/month.
        </p>

        {/* Highlight Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 900, margin: "40px auto 0" }}>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>$79/mo</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>Transparent Flat Rate</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>$95</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>Comprehensive Blood Panel</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>100%</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>Physician Guided &amp; Monitored</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>Free</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>Discreet Doorstep Delivery</div>
          </div>
        </div>
      </section>

      {/* Clinical Foundation Section */}
      <section style={{ maxWidth: 1000, margin: "0 auto 64px", padding: "0 24px" }}>
        <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: 20, border: "1px solid var(--line-soft)", boxShadow: "0 4px 16px rgba(0,0,0,0.02)" }}>
          <h2 className="serif" style={{ fontSize: 32, marginBottom: 20, color: "var(--ink)" }}>
            The Clinical TRT Standard of Care
          </h2>
          <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 20 }}>
            Testosterone Replacement Therapy is not a lifestyle shortcut—it is a medically indicated endocrine treatment for hypogonadism. Low testosterone (clinically defined as total testosterone below 300 ng/dL paired with symptomatic presentation) contributes to chronic fatigue, severe loss of lean muscle, depression, erectile dysfunction, and visceral metabolic disease.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 28 }}>
            <div style={{ background: "#FBF8F3", padding: "20px", borderRadius: 12, border: "1px solid var(--line-soft)" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--brand)", marginBottom: 8 }}>1. Diagnostic Bloodwork</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6, margin: 0 }}>
                A full diagnostic panel is required before any prescription: Total Testosterone, Free Testosterone, Sensitive Estradiol, Complete Blood Count (Hematocrit/Hemoglobin), Comprehensive Metabolic Panel (Liver &amp; Kidney), and Prostate-Specific Antigen (PSA).
              </p>
            </div>
            <div style={{ background: "#FBF8F3", padding: "20px", borderRadius: 12, border: "1px solid var(--line-soft)" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--brand)", marginBottom: 8 }}>2. Customized Protocols</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6, margin: 0 }}>
                Patients receive physician-directed protocols utilizing pharmaceutical-grade Testosterone Cypionate (subcutaneous or intramuscular injections), topical formulations, or oral enclomiphene to preserve testicular function.
              </p>
            </div>
            <div style={{ background: "#FBF8F3", padding: "20px", borderRadius: 12, border: "1px solid var(--line-soft)" }}>
              <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--brand)", marginBottom: 8 }}>3. Ongoing Surveillance</h3>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6, margin: 0 }}>
                Follow-up bloodwork is performed at 8–12 weeks to monitor androgen response, hematocrit levels (preventing erythrocytosis), estrogen balance, and cardiovascular markers to maintain optimal physiological safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Metro TRT Clinics */}
      <section style={{ maxWidth: 1000, margin: "0 auto 80px", padding: "0 24px" }}>
        <div style={{ background: "#FFFFFF", padding: "40px", borderRadius: 20, border: "1px solid var(--line-soft)", boxShadow: "0 4px 16px rgba(0,0,0,0.02)" }}>
          <div style={{ borderBottom: "1px solid var(--line-soft)", paddingBottom: 16, marginBottom: 28 }}>
            <h2 className="serif" style={{ fontSize: 28, margin: 0, color: "var(--ink)" }}>
              Regional TRT Telehealth Clinics (21 Metros)
            </h2>
            <p style={{ fontSize: 15, color: "var(--ink-2)", margin: "8px 0 0" }}>
              Select your city to review local medical licensing regulations, in-person lab draw partner locations (LabCorp / Quest Diagnostics), and localized treatment guides:
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
            {trtCities.map(c => (
              <Link
                key={c.slug}
                href={`/trt/${c.slug}/`}
                style={{
                  display: "block",
                  padding: "14px 16px",
                  borderRadius: 10,
                  background: "var(--bg-alt, #F9F9FB)",
                  border: "1px solid var(--line-soft, #EAEAEA)",
                  color: "var(--ink)",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 500,
                  transition: "all 0.2s ease"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span>{c.city}, {c.state}</span>
                  <span style={{ color: "var(--brand)", fontSize: 16 }}>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
