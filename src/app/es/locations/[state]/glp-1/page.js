import Link from "next/link";
import { notFound } from "next/navigation";
import statesData from "@/data/us-states-glp1-directory.json";

const START_URL = "https://go.telehealthfx.com/coreage-glp1?sub3=es&sub4=thfx";

export async function generateStaticParams() {
  return statesData.map((s) => ({
    state: s.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { state: stateSlug } = await params;
  const state = statesData.find((s) => s.slug === stateSlug);
  if (!state) return {};

  const title = `${state.name}: Medicamentos GLP-1 en Línea (Semaglutida y Tirzepatida) | Telehealth FX`;
  const description = `Semaglutida ($79/mes) y Tirzepatida ($129/mes) compuestas en ${state.name}. Médicos certificados, tarifa plana en todas las dosis, $0 cuotas de membresía y envío refrigerado exprés.`;

  return {
    robots: { index: true, follow: true },
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://telehealthfx.com/es/locations/${state.slug}/glp-1/`,
      siteName: "Telehealth FX",
      type: "website",
    },
    alternates: {
      canonical: `https://telehealthfx.com/es/locations/${state.slug}/glp-1/`,
      languages: {
        'en-US': `https://telehealthfx.com/locations/${state.slug}/glp-1/`,
        'es-US': `https://telehealthfx.com/es/locations/${state.slug}/glp-1/`,
        'x-default': `https://telehealthfx.com/locations/${state.slug}/glp-1/`,
      },
    },
  };
}

export default async function StateGlp1PageEs({ params }) {
  const { state: stateSlug } = await params;
  const state = statesData.find((s) => s.slug === stateSlug);
  if (!state) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `https://telehealthfx.com/es/locations/${state.slug}/glp-1/#webpage`,
        "url": `https://telehealthfx.com/es/locations/${state.slug}/glp-1/`,
        "name": `${state.name} Telesalud GLP-1 en Línea: Tirzepatida y Semaglutida Compuestas`,
        "description": `Servicio clínico de telesalud autorizado para la entrega de medicamentos GLP-1 compuestos en ${state.name}. Tarifa plana de $79 y $129/mes sin tarifas de membresía.`,
        "inLanguage": "es-US",
        "lastReviewed": "2026-10-09",
        "reviewedBy": {
          "@type": "Organization",
          "name": "Comité Médico Asesor de Telehealth FX"
        }
      },
      {
        "@type": "MedicalClinic",
        "@id": `https://telehealthfx.com/es/locations/${state.slug}/glp-1/#clinic`,
        "name": `Telehealth FX - Red de Telemedicina de ${state.name}`,
        "url": `https://telehealthfx.com/es/locations/${state.slug}/glp-1/`,
        "telephone": "+1-800-TELEHEALTH",
        "areaServed": {
          "@type": "State",
          "name": state.name
        },
        "medicalSpecialty": "Endocrine",
        "priceRange": "$79 - $129/mes",
        "currenciesAccepted": "USD"
      },
      {
        "@type": "FAQPage",
        "@id": `https://telehealthfx.com/es/locations/${state.slug}/glp-1/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `¿Los médicos de Telehealth FX cuentan con licencia médica en ${state.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Sí. Cada paciente de Telehealth FX en ${state.name} es evaluado y atendido exclusivamente por médicos certificados con credenciales vigentes otorgadas por la junta médica estatal (${state.medicalBoard}).`
            }
          },
          {
            "@type": "Question",
            "name": `¿Cuánto cuestan la semaglutida y la tirzepatida en ${state.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `La Semaglutida compuesta cuesta $79/mes tarifa plana fija y la Tirzepatida compuesta cuesta $129/mes tarifa plana fija en todas las dosis, con $0 en tarifas de membresía y consultas médicas incluidas.`
            }
          },
          {
            "@type": "Question",
            "name": `¿Cómo se entregan los medicamentos a los residentes de ${state.name}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Los medicamentos son preparados por farmacias de formulación magistral 503A con licencia estadounidense y se envían mediante entrega refrigerada con control de temperatura, incluyendo toallitas con alcohol y jeringas estériles directo a su puerta.`
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
          Conforme a las Regulaciones de {state.medicalBoard} · Entrega Directa en {state.name}
        </div>

        <h1 style={{ fontSize: 'clamp(32px, 5vw, 54px)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.02em', color: '#0F172A', marginBottom: '20px' }}>
          Pérdida de Peso Médica con GLP-1 en <span style={{ color: '#0D9488' }}>{state.name}</span>
        </h1>

        <p style={{ fontSize: 'clamp(17px, 2.5vw, 21px)', color: '#475569', maxWidth: '780px', margin: '0 auto 36px', lineHeight: 1.6 }}>
          Semaglutida y Tirzepatida compuestas entregadas directo a su puerta desde farmacias 503A acreditadas en EE. UU. Sin autorizaciones de seguro médico, $0 tarifas de membresía y consulta médica en línea incluida.
        </p>

        {/* Pricing Anchor Card */}
        <div style={{ background: '#FFFFFF', border: '2px solid #0D9488', borderRadius: '16px', padding: '32px 24px', maxWidth: '720px', margin: '0 auto 40px', boxShadow: '0 20px 25px -5px rgba(13, 148, 136, 0.08)' }}>
          <div style={{ display: 'inline-block', background: '#0D9488', color: '#FFFFFF', fontSize: '13px', fontWeight: 700, padding: '4px 12px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
            Tarifas Transparentes
          </div>
          <div style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
            Semaglutida $79/mes · Tirzepatida $129/mes
          </div>
          <p style={{ color: '#64748B', fontSize: '16px', margin: '0 0 24px' }}>
            Tarifa plana garantizada en todas las dosis y titulaciones de mantenimiento. Sin cargos sorpresa.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href={START_URL}
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: '#0D9488', color: '#FFFFFF', fontWeight: 700, fontSize: '17px', padding: '16px 36px', borderRadius: '10px', textDecoration: 'none', boxShadow: '0 4px 6px -1px rgba(13, 148, 136, 0.3)' }}
            >
              Comenzar Evaluación en {state.abbrev} →
            </a>
          </div>
        </div>

        {/* Value Badges */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', maxWidth: '920px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}>⚖️</div>
            <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '15px' }}>Cero Cuotas de Membresía</div>
            <div style={{ color: '#64748B', fontSize: '13px', marginTop: '4px' }}>Ahorre hasta $948 al año frente a las cuotas mensuales de Ro y Mochi.</div>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}>❄️</div>
            <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '15px' }}>Envío Refrigerado Exprés</div>
            <div style={{ color: '#64748B', fontSize: '13px', marginTop: '4px' }}>Control de temperatura estricto y suministros completos gratuitos.</div>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontSize: '20px', marginBottom: '6px' }}>🩺</div>
            <div style={{ fontWeight: 700, color: '#0F172A', fontSize: '15px' }}>Médicos Certificados en {state.abbrev}</div>
            <div style={{ color: '#64748B', fontSize: '13px', marginTop: '4px' }}>Evaluación por médicos acreditados ante {state.medicalBoard}.</div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section style={{ maxWidth: '860px', margin: '0 auto 60px', padding: '0 20px' }}>
        <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '16px', padding: '36px 28px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '8px' }}>
            Telehealth FX vs. Clínicas Locales en {state.name}
          </h2>
          <p style={{ color: '#64748B', textAlign: 'center', fontSize: '15px', marginBottom: '28px' }}>
            Las clínicas locales en {state.name} frecuentemente cobran hasta un 300% más para cubrir costos de consultorios físicos.
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '2px solid #E2E8F0' }}>
                  <th style={{ padding: '14px 16px', color: '#475569' }}>Criterio</th>
                  <th style={{ padding: '14px 16px', color: '#0D9488', fontWeight: 700 }}>Telehealth FX</th>
                  <th style={{ padding: '14px 16px', color: '#64748B' }}>Clínicas Físicas en {state.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>Semaglutida Compuesta</td>
                  <td style={{ padding: '14px 16px', color: '#0D9488', fontWeight: 700 }}>$79 / mes</td>
                  <td style={{ padding: '14px 16px', color: '#DC2626' }}>$300 – $500 / mes</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>Tirzepatida Compuesta</td>
                  <td style={{ padding: '14px 16px', color: '#0D9488', fontWeight: 700 }}>$129 / mes</td>
                  <td style={{ padding: '14px 16px', color: '#DC2626' }}>$500 – $800 / mes</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>Visitas al Consultorio</td>
                  <td style={{ padding: '14px 16px', color: '#0D9488', fontWeight: 700 }}>0 (100% en línea)</td>
                  <td style={{ padding: '14px 16px' }}>Visitas mensuales obligatorias</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #E2E8F0' }}>
                  <td style={{ padding: '14px 16px', fontWeight: 600 }}>Entrega</td>
                  <td style={{ padding: '14px 16px', color: '#0D9488', fontWeight: 700 }}>Envío refrigerado gratis</td>
                  <td style={{ padding: '14px 16px' }}>Retiro en persona</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ maxWidth: '860px', margin: '0 auto 80px', padding: '0 20px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', textAlign: 'center', marginBottom: '32px' }}>
          Preguntas Frecuentes en {state.name}
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
              ¿Los médicos de Telehealth FX tienen licencia en {state.name}?
            </h3>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Sí. Cada paciente en {state.name} es atendido por médicos certificados registrados ante {state.medicalBoard}.
            </p>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
              ¿Cómo se asegura la cadena de frío durante el envío a {state.name}?
            </h3>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              Los medicamentos se empaquetan en recipientes térmicos aislados con paquetes de gel refrigerante de grado médico para mantener la temperatura óptima entre 2°C y 8°C hasta su llegada.
            </p>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', padding: '24px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
              ¿Se requiere seguro médico?
            </h3>
            <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.6, margin: 0 }}>
              No. Ofrecemos precios de tarifa plana directos al paciente ($79/mes Semaglutida, $129/mes Tirzepatida) sin necesidad de autorizaciones previas ni copagos de seguros.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ background: '#0F172A', color: '#FFFFFF', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 36px)', fontWeight: 800, marginBottom: '16px' }}>
          Comience su Transformación Metabólica en {state.name}
        </h2>
        <p style={{ color: '#94A3B8', fontSize: '17px', maxWidth: '600px', margin: '0 auto 32px' }}>
          Complete su evaluación en línea en menos de 5 minutos y reciba su medicamento directamente en casa.
        </p>
        <a
          href={START_URL}
          style={{ display: 'inline-block', background: '#0D9488', color: '#FFFFFF', fontWeight: 700, fontSize: '17px', padding: '16px 40px', borderRadius: '10px', textDecoration: 'none' }}
        >
          Iniciar Evaluación Médica Ahora →
        </a>
      </section>
    </div>
  );
}
