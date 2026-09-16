import Link from "next/link";
import locationData from "../../data/locations-directory.json";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Clinical GLP-1 Locations Directory | 156+ US Cities | Telehealth FX",
  description: "Find physician-guided GLP-1 weight loss in your city. Compounded Semaglutide and Tirzepatide prescribed by state-licensed physicians with cold-pack delivery across 156+ metropolitan areas.",
  openGraph: {
    title: "Clinical GLP-1 Locations Directory | Telehealth FX",
    description: "Find physician-guided GLP-1 weight loss in your city. State-licensed physicians and cold-chain delivery across 156+ US metropolitan areas.",
    url: "https://telehealthfx.com/locations/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/locations/"
  }
};

export default function LocationsPage() {
  const allCities = locationData.flatMap(s => s.cities);
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://telehealthfx.com/locations#webpage",
        "url": "https://telehealthfx.com/locations/",
        "name": "Clinical GLP-1 Locations Directory | Telehealth FX",
        "description": "Comprehensive directory of 156+ US cities serviced by Telehealth FX for clinical GLP-1 weight management.",
        "isPartOf": { "@id": "https://telehealthfx.com/#website" },
        "breadcrumb": { "@id": "https://telehealthfx.com/locations#breadcrumb" },
        "inLanguage": "en-US",
        "hasPart": allCities.map(c => ({
          "@type": "MedicalWebPage",
          "name": `GLP-1 Weight Loss in ${c.city}, ${c.state}`,
          "url": `https://telehealthfx.com/locations/${c.slug}/`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/locations#breadcrumb",
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
            "name": "Locations",
            "item": "https://telehealthfx.com/locations/"
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
          National Telehealth Network
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1, marginBottom: 24, fontWeight: 400 }}>
          Clinical GLP-1 Weight Loss Across <span style={{ fontStyle: "italic", color: "var(--brand)" }}>156+ US Metros</span>
        </h1>
        <p style={{ fontSize: 18, color: "var(--ink-2)", maxWidth: 760, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Board-certified physicians, 503A quality-verified compounded Semaglutide &amp; Tirzepatide, and guaranteed cold-chain express delivery. Select your city below to review localized medical board regulations, regional pricing, and delivery timelines.
        </p>

        {/* Highlight Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 900, margin: "40px auto 0" }}>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>156+</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>Metropolitan Cities</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>44</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>States Licensed</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>100%</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>Cold-Chain Express Delivery</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>&lt; 24h</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>Physician Intake SLA</div>
          </div>
        </div>
      </section>

      {/* Quick Navigation State Anchor Bar */}
      <section style={{ maxWidth: 1200, margin: "0 auto 40px", padding: "0 24px" }}>
        <div style={{ background: "#FFFFFF", padding: "16px 20px", borderRadius: 12, border: "1px solid var(--line-soft)", display: "flex", flexWrap: "wrap", gap: "8px 12px", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Jump to State:</span>
          {locationData.map(s => (
            <a
              key={s.state}
              href={`#state-${s.state.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              style={{ fontSize: 13, color: "var(--brand)", textDecoration: "none", fontWeight: 500, padding: "2px 6px", borderRadius: 4, transition: "background 0.2s" }}
            >
              {s.state}
            </a>
          ))}
        </div>
      </section>

      {/* State by State Directory Grid */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {locationData.map(s => (
            <div
              key={s.state}
              id={`state-${s.state.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              style={{ background: "#FFFFFF", padding: "32px", borderRadius: 20, border: "1px solid var(--line-soft)", boxShadow: "0 4px 16px rgba(0,0,0,0.02)" }}
            >
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: "1px solid var(--line-soft)", paddingBottom: 16, marginBottom: 24 }}>
                <h2 className="serif" style={{ fontSize: 28, margin: 0, color: "var(--ink)" }}>
                  {s.state}
                </h2>
                <span style={{ fontSize: 14, color: "var(--ink-3)", fontWeight: 500 }}>
                  {s.cities.length} {s.cities.length === 1 ? "City" : "Cities"} Serviced
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
                {s.cities.map(c => (
                  <Link
                    key={c.slug}
                    href={`/locations/${c.slug}/`}
                    style={{
                      display: "block",
                      padding: "12px 16px",
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
                      <span>{c.city}</span>
                      <span style={{ color: "var(--brand)", fontSize: 16 }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clinical Telehealth Standards Footer Section */}
      <section style={{ background: "#FFFFFF", borderTop: "1px solid var(--line-soft)", padding: "64px 24px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h3 className="serif" style={{ fontSize: 32, marginBottom: 20, textAlign: "center" }}>
            The Telehealth FX National Clinical Standard
          </h3>
          <p style={{ fontSize: 16, color: "var(--ink-2)", lineHeight: 1.7, marginBottom: 24 }}>
            Telehealth FX operates pursuant to applicable state medical practice acts, telehealth parity legislation, and pharmacy compounding laws in all 44 serviced jurisdictions. All clinical evaluations are performed by physicians with active, unrestricted medical licenses within the patient&apos;s state of residence.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 32 }}>
            <div style={{ padding: 24, borderRadius: 12, background: "#FBF8F3", border: "1px solid var(--line-soft)" }}>
              <h4 style={{ fontSize: 18, marginBottom: 8, color: "var(--brand)" }}>503A Quality Verification</h4>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6 }}>
                All compounded Semaglutide and Tirzepatide are formulated by state-licensed 503A compounding pharmacies adhering to USP &lt;797&gt; sterile compounding standards, with third-party potency and sterility testing.
              </p>
            </div>
            <div style={{ padding: 24, borderRadius: 12, background: "#FBF8F3", border: "1px solid var(--line-soft)" }}>
              <h4 style={{ fontSize: 18, marginBottom: 8, color: "var(--brand)" }}>Continuous Cold-Chain Protocol</h4>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6 }}>
                Medications are packed in medical-grade insulated thermal shippers with conditioned phase-change gel packs, maintaining 36°F to 46°F (2°C to 8°C) until delivery at your doorstep.
              </p>
            </div>
            <div style={{ padding: 24, borderRadius: 12, background: "#FBF8F3", border: "1px solid var(--line-soft)" }}>
              <h4 style={{ fontSize: 18, marginBottom: 8, color: "var(--brand)" }}>Transparent Flat Pricing</h4>
              <p style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.6 }}>
                Introductory promo from $99/month. Includes medical evaluation, prescription, medication, injection supplies, and free express cold-pack shipping with no hidden clinic or subscription fees.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
