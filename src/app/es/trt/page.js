import Link from "next/link";

export const metadata = {
  robots: { index: true, follow: true },
  title: "Terapia de Reemplazo de Testosterona (TRT) en Línea | Desde $79/mes | Telehealth FX",
  description: "Terapia clínica de testosterona supervisada por médicos certificados en EE. UU. Panel de análisis de sangre diagnóstico ($95), cipionato de testosterona y envío discreto a domicilio.",
  openGraph: {
    title: "Terapia de Reemplazo de Testosterona (TRT) en Línea | Telehealth FX",
    description: "Terapia de testosterona recetada por médicos en línea desde $79/mes. Precios transparentes, monitoreo de laboratorio y entrega discreta.",
    url: "https://telehealthfx.com/es/trt/",
    siteName: "Telehealth FX",
    type: "website"
  },
  alternates: {
    canonical: "https://telehealthfx.com/es/trt/",
    languages: {
      'en-US': 'https://telehealthfx.com/trt/',
      'es-US': 'https://telehealthfx.com/es/trt/',
      'x-default': 'https://telehealthfx.com/trt/',
    },
  }
};

export default function TRTHubPageEs() {
  const trtCities = [
    { "slug": "austin", "city": "Austin", "state": "Texas" },
    { "slug": "charlotte", "city": "Charlotte", "state": "Carolina del Norte" },
    { "slug": "chicago", "city": "Chicago", "state": "Illinois" },
    { "slug": "columbus-oh", "city": "Columbus", "state": "Ohio" },
    { "slug": "dallas", "city": "Dallas", "state": "Texas" },
    { "slug": "denver", "city": "Denver", "state": "Colorado" },
    { "slug": "detroit", "city": "Detroit", "state": "Michigan" },
    { "slug": "houston", "city": "Houston", "state": "Texas" },
    { "slug": "indianapolis", "city": "Indianápolis", "state": "Indiana" },
    { "slug": "jacksonville", "city": "Jacksonville", "state": "Florida" },
    { "slug": "los-angeles", "city": "Los Ángeles", "state": "California" },
    { "slug": "miami", "city": "Miami", "state": "Florida" },
    { "slug": "milwaukee", "city": "Milwaukee", "state": "Wisconsin" },
    { "slug": "nashville", "city": "Nashville", "state": "Tennessee" },
    { "slug": "new-york", "city": "Nueva York", "state": "Nueva York" },
    { "slug": "philadelphia", "city": "Filadelfia", "state": "Pensilvania" },
    { "slug": "phoenix", "city": "Phoenix", "state": "Arizona" },
    { "slug": "san-antonio", "city": "San Antonio", "state": "Texas" },
    { "slug": "san-diego", "city": "San Diego", "state": "California" },
    { "slug": "san-francisco", "city": "San Francisco", "state": "California" },
    { "slug": "seattle", "city": "Seattle", "state": "Washington" }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/es/trt/#webpage",
        "url": "https://telehealthfx.com/es/trt/",
        "name": "Centro Clínico de Terapia de Reemplazo de Testosterona (TRT) | Telehealth FX",
        "description": "Guía completa sobre la terapia clínica de reemplazo de testosterona, protocolos de diagnóstico de laboratorio y centros regionales de telesalud.",
        "isPartOf": { "@id": "https://telehealthfx.com/#website" },
        "inLanguage": "es-US",
        "about": {
          "@type": "MedicalTherapy",
          "name": "Terapia de Reemplazo de Testosterona",
          "drug": {
            "@type": "Substance",
            "name": "Cipionato de Testosterona",
            "nonProprietaryName": "Cipionato de Testosterona"
          }
        }
      }
    ]
  };

  const CTA_URL = "https://go.telehealthfx.com/coreage-trt?sub3=es&sub4=thfx";

  return (
    <div style={{ background: "#FBF8F3", minHeight: "100vh", color: "var(--ink)", paddingTop: 100 }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section style={{ padding: "80px 24px 48px", maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--brand)", fontWeight: 600, fontSize: 13 }}>
          Optimización Hormonal Masculina
        </div>
        <h1 className="serif" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.1, marginBottom: 24, fontWeight: 400 }}>
          TRT Clínica y Terapia de Testosterona, <span style={{ fontStyle: "italic", color: "var(--brand)" }}>Entregada en Casa.</span>
        </h1>
        <p style={{ fontSize: 18, color: "var(--ink-2)", maxWidth: 760, margin: "0 auto 32px", lineHeight: 1.6 }}>
          Terapia de testosterona basada en evidencia recetada por médicos certificados en EE. UU. Panel de diagnóstico de sangre completo, ajuste gradual de dosis y monitoreo continuo de seguridad desde $79/mes.
        </p>

        {/* Highlight Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20, maxWidth: 900, margin: "40px auto 0" }}>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>$79/mes</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>Tarifa Plana Transparente</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>$95</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>Panel de Laboratorio Completo</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>50 Estados</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>Médicos con Licencia Estatal</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "24px 20px", borderRadius: 16, border: "1px solid var(--line-soft)", boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: 32, fontWeight: 700, color: "var(--brand)", marginBottom: 4 }}>48 Horas</div>
            <div style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 500 }}>Envío Discreto a Domicilio</div>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <a href={CTA_URL} className="btn btn-primary" style={{ padding: "16px 36px", fontSize: 17, textDecoration: "none" }}>
            Comenzar Evaluación de Testosterona →
          </a>
        </div>
      </section>

      {/* Protocols Section */}
      <section style={{ padding: "64px 24px", maxWidth: 1000, margin: "0 auto" }}>
        <h2 className="serif" style={{ fontSize: 36, textAlign: "center", marginBottom: 16 }}>
          Protocolos Clínicos de Tratamiento
        </h2>
        <p style={{ textAlign: "center", color: "var(--ink-2)", fontSize: 16, maxWidth: 640, margin: "0 auto 48px" }}>
          Nuestros médicos diseñan protocolos personalizados según sus niveles hormonales, síntomas clínicos y metas de fertilidad.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {/* Protocol 1: TRT */}
          <div style={{ background: "#FFFFFF", borderRadius: 20, padding: 32, border: "1px solid var(--line-soft)", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "inline-block", background: "rgba(46,74,59,0.1)", color: "var(--brand)", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 6, textTransform: "uppercase", marginBottom: 16 }}>
              Inyectable Clásico
            </div>
            <h3 className="serif" style={{ fontSize: 26, margin: "0 0 12px" }}>Cipionato de Testosterona</h3>
            <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6, marginBottom: 20 }}>
              Bioidéntico administrado semanalmente o cada dos semanas. Restaura niveles fisiológicos óptimos para aumentar masa muscular, energía y concentración.
            </p>
            <div style={{ fontSize: 28, fontWeight: 800, color: "var(--brand)", marginBottom: 8 }}>
              $79 <span style={{ fontSize: 15, fontWeight: 500, color: "var(--ink-3)" }}>/ mes</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 24 }}>Suministros estériles y ajustes médicos incluidos</div>
            <a href={CTA_URL} className="btn btn-primary" style={{ width: "100%", textAlign: "center", display: "block", textDecoration: "none" }}>
              Elegir Protocolo TRT →
            </a>
          </div>

          {/* Protocol 2: Enclomiphene */}
          <div style={{ background: "#FFFFFF", borderRadius: 20, padding: 32, border: "1px solid var(--line-soft)", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
            <div style={{ display: "inline-block", background: "rgba(59,130,246,0.1)", color: "#2563EB", fontSize: 12, fontWeight: 700, padding: "4px 12px", borderRadius: 6, textTransform: "uppercase", marginBottom: 16 }}>
              Oral Sin Agujas
            </div>
            <h3 className="serif" style={{ fontSize: 26, margin: "0 0 12px" }}>Enclomifeno Oral Diario</h3>
            <p style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6, marginBottom: 20 }}>
              Estimula la producción natural de testosterona por el eje hipofisario-gonadal sin suprimir la fertilidad natural ni reducir el volumen testicular.
            </p>
            <div style={{ fontSize: 28, fontWeight: 800, color: "var(--brand)", marginBottom: 8 }}>
              $89 <span style={{ fontSize: 15, fontWeight: 500, color: "var(--ink-3)" }}>/ mes</span>
            </div>
            <div style={{ fontSize: 13, color: "var(--ink-3)", marginBottom: 24 }}>Cápsula oral diaria · Preserva la fertilidad</div>
            <a href={CTA_URL} className="btn btn-outline" style={{ width: "100%", textAlign: "center", display: "block", textDecoration: "none" }}>
              Elegir Enclomifeno Oral →
            </a>
          </div>
        </div>
      </section>

      {/* Regional Metro Links */}
      <section style={{ padding: "64px 24px 80px", maxWidth: 1000, margin: "0 auto", borderTop: "1px solid var(--line-soft)" }}>
        <h2 className="serif" style={{ fontSize: 28, textAlign: "center", marginBottom: 12 }}>
          Atención de Telesalud TRT en Principales Áreas Metropolitanas
        </h2>
        <p style={{ textAlign: "center", color: "var(--ink-2)", fontSize: 15, marginBottom: 32 }}>
          Nuestros médicos certificados atienden a pacientes en las principales ciudades de EE. UU.:
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 12 }}>
          {trtCities.map((c) => (
            <div key={c.slug} style={{ background: "#FFFFFF", padding: "12px 16px", borderRadius: 10, border: "1px solid var(--line-soft)", fontSize: 14 }}>
              <strong>{c.city}</strong>, {c.state}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
