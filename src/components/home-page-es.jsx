"use client";
import React, { useState } from 'react';
import { Icon } from './common.jsx';

const CTA_URL = "https://go.telehealthfx.com/coreage-glp1?sub3=es&sub4=thfx";

export function HomePageEs() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: '¿Es segura la semaglutida o tirzepatida compuesta?',
      a: 'Nuestros medicamentos son preparados exclusivamente por farmacias de formulación magistral reguladas y con licencia 503A en los Estados Unidos. Todas las formulaciones son supervisadas por farmacéuticos licenciados, evaluadas rigurosamente en cuanto a pureza y potencia, y dispensadas únicamente con receta emitida por un médico certificado en EE. UU.'
    },
    {
      q: '¿Quién es elegible para el programa de pérdida de peso?',
      a: 'La mayoría de los adultos de 18 años o más con un IMC de 27 o superior, o 25 o más con alguna condición relacionada con el peso (como hipertensión o prediabetes), son elegibles. Un médico revisará tu historial clínico completo para determinar si la terapia con GLP-1 es adecuada para ti.'
    },
    {
      q: '¿Cuánto peso puedo esperar perder?',
      a: 'Los resultados individuales varían. En estudios clínicos fundamentales, los pacientes tratados con tirzepatida perdieron en promedio hasta el 21% de su peso corporal a las 72 semanas, y los pacientes con semaglutida perdieron un promedio del 15% a las 68 semanas.'
    },
    {
      q: '¿Cuáles son los efectos secundarios más comunes?',
      a: 'Los efectos secundarios más habituales son náuseas leves, estreñimiento y saciedad rápida, especialmente durante las primeras semanas de adaptación. Estos síntomas generalmente disminuyen a medida que el cuerpo se acostumbra. Tu médico aumentará gradualmente la dosis para maximizar tu tolerancia y confort.'
    },
    {
      q: '¿Puedo cancelar o pausar mi tratamiento en cualquier momento?',
      a: 'Sí, absolutamente. Puedes pausar o cancelar tu suscripción en cualquier momento antes de que se procese tu siguiente envío mensual, sin contratos forzosos, sin penalizaciones y sin preguntas.'
    },
    {
      q: '¿Se requiere seguro médico para acceder a este precio?',
      a: 'No. Nuestro programa funciona con pago directo transparente en efectivo o tarjeta (incluyendo cuentas de salud HSA y FSA). Esto nos permite eliminar las barreras de preautorizaciones de seguros y garantizar una tarifa plana fija sin sorpresas.'
    },
    {
      q: '¿Cuál medicamento es mejor para mí: Semaglutida o Tirzepatida?',
      a: 'Durante tu evaluación clínica en línea, el médico evaluará tu historial médico, objetivos de peso y experiencias previas para recomendarte la opción ideal. También puedes indicar tu preferencia personal durante el cuestionario.'
    }
  ];

  return (
    <div style={{ paddingTop: 60, paddingBottom: 100 }}>
      {/* ── HERO ── */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container grid-2-hero">
          <div>
            <div className="pill pill-dot pill-brand fade-in" style={{ marginBottom: 28, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span className="pill-dot" /> Aprobación Médica en 24h · Tarifa Plana Sin Sorpresas
            </div>
            <h1 className="serif fade-in" style={{ fontSize: 68, lineHeight: 1.05, marginBottom: 24, color: 'var(--ink)' }}>
              Pérdida de peso médica con GLP-1, <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>entregada a tu puerta.</span>
            </h1>
            <p className="fade-in" style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 540, marginBottom: 36, lineHeight: 1.6 }}>
              Tratamientos médicos de vanguardia con Semaglutida y Tirzepatida compuesta formuladas en farmacias 503A reguladas en EE. UU. Precios con tarifa plana en todas las dosis, médicos certificados y entrega refrigerada exprés en 2 días por UPS.
            </p>
            <div className="flex-row stack-mobile" style={{ gap: 14, marginBottom: 40 }}>
              <a className="btn btn-primary btn-lg" href={CTA_URL} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                Verificar Elegibilidad Médica <Icon.Arrow />
              </a>
              <a className="btn btn-secondary btn-lg" href="#precios" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                Ver Tarifas Planas
              </a>
            </div>

            {/* Trust row */}
            <div className="flex-row hero-trust-row" style={{ gap: 32, paddingTop: 28, borderTop: '1px solid var(--line-soft)' }}>
              <div>
                <div className="serif" style={{ fontSize: 32, fontWeight: 700, color: 'var(--brand)' }}>94%</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>pierde peso en 90 días</div>
              </div>
              <div>
                <div className="serif" style={{ fontSize: 32, fontWeight: 700, color: 'var(--brand)' }}>15–20%</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>reducción promedio de peso</div>
              </div>
              <div>
                <div className="serif" style={{ fontSize: 32, fontWeight: 700, color: 'var(--brand)' }}>4.9★</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>+12,400 valoraciones reales</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="card" style={{ padding: 36, background: '#FFFDF9', borderColor: 'var(--brand)', borderRadius: 24, boxShadow: '0 20px 40px rgba(0,0,0,0.04)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                <span className="pill" style={{ background: 'rgba(199, 125, 92, 0.12)', color: 'var(--brand)', fontWeight: 700, fontSize: 12 }}>
                  TARIFA PLANA GARANTIZADA
                </span>
                <span style={{ fontSize: 13, color: 'var(--ink-3)', fontWeight: 600 }}>Cadena de Frío UPS</span>
              </div>
              <div style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 14, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Semaglutida Compuesta</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
                  <span className="serif" style={{ fontSize: 48, fontWeight: 700, color: 'var(--ink)' }}>$79</span>
                  <span style={{ fontSize: 16, color: 'var(--ink-3)' }}>/mes tarifa fija en todas las dosis</span>
                </div>
              </div>
              <div style={{ marginBottom: 28, paddingTop: 20, borderTop: '1px solid var(--line-soft)' }}>
                <div style={{ fontSize: 14, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tirzepatida Compuesta (Dual GIP/GLP-1)</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
                  <span className="serif" style={{ fontSize: 48, fontWeight: 700, color: 'var(--brand)' }}>$129</span>
                  <span style={{ fontSize: 16, color: 'var(--ink-3)' }}>/mes tarifa fija en todas las dosis</span>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--brand)' }}>✓</span> Sin aumentos de precio al subir la dosis
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--brand)' }}>✓</span> Consulta y evaluación médica en línea incluida
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--brand)' }}>✓</span> Envío refrigerado con control térmico gratuito
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ color: 'var(--brand)' }}>✓</span> Sin tarifas mensuales de membresía ni contratos
                </li>
              </ul>
              <a href={CTA_URL} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                Comenzar Mi Evaluación Médica
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section id="how" style={{ padding: '80px 0', background: 'var(--bg-alt)', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px' }}>
            <div className="pill pill-brand" style={{ marginBottom: 14, display: 'inline-flex' }}>
              PROCESO SIMPLE EN 3 PASOS
            </div>
            <h2 className="serif" style={{ fontSize: 44, color: 'var(--ink)', marginBottom: 16 }}>
              Cómo Funciona el Programa
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.6 }}>
              Atención médica de nivel clínico sin salas de espera ni visitas en persona. Desde tu evaluación hasta tu medicamento en casa en menos de 48 horas.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            <div className="card" style={{ padding: 36 }}>
              <div className="mono" style={{ fontSize: 13, color: 'var(--brand)', fontWeight: 700, marginBottom: 16 }}>PASO 01</div>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 12, color: 'var(--ink)' }}>Evaluación Médica en Línea</h3>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Responde un cuestionario médico seguro de 5 minutos sobre tu salud, índice de masa corporal y metas de peso.
              </p>
            </div>
            <div className="card" style={{ padding: 36 }}>
              <div className="mono" style={{ fontSize: 13, color: 'var(--brand)', fontWeight: 700, marginBottom: 16 }}>PASO 02</div>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 12, color: 'var(--ink)' }}>Aprobación Médica en 24h</h3>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Un médico certificado revisa tu perfil y receta la dosis óptima de Semaglutida o Tirzepatida según tu necesidad.
              </p>
            </div>
            <div className="card" style={{ padding: 36 }}>
              <div className="mono" style={{ fontSize: 13, color: 'var(--brand)', fontWeight: 700, marginBottom: 16 }}>PASO 03</div>
              <h3 className="serif" style={{ fontSize: 24, marginBottom: 12, color: 'var(--ink)' }}>Envío Refrigerado Exprés</h3>
              <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Tu medicamento formulado en farmacia 503A se empaca en frío y se envía por UPS express directo a tu puerta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEDICAMENTOS ── */}
      <section id="medications" style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 60px' }}>
            <div className="pill pill-brand" style={{ marginBottom: 14, display: 'inline-flex' }}>
              MEDICAMENTOS GLP-1 &amp; GIP
            </div>
            <h2 className="serif" style={{ fontSize: 44, color: 'var(--ink)', marginBottom: 16 }}>
              Elige tu Protocolo de Tratamiento
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.6 }}>
              Formulaciones de alta pureza preparadas por farmacias de formulación magistral con licencia en EE. UU.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32 }}>
            {/* Semaglutide Card */}
            <div className="card" style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span className="pill" style={{ background: 'rgba(15, 23, 42, 0.06)', color: 'var(--ink)', fontWeight: 700, fontSize: 12 }}>
                    AGONISTA RECEPTOR GLP-1
                  </span>
                  <span className="serif" style={{ fontSize: 32, fontWeight: 700, color: 'var(--brand)' }}>$79/mes</span>
                </div>
                <h3 className="serif" style={{ fontSize: 32, marginBottom: 12, color: 'var(--ink)' }}>Semaglutida Compuesta</h3>
                <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 20 }}>
                  El principio activo presente en medicamentos como Ozempic® y Wegovy®. Imita la hormona intestinal GLP-1 para regular el centro de saciedad en el cerebro, silenciar el ruido constante de la comida y retrasar el vaciamiento gástrico.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: 'var(--ink-2)' }}>
                  <li>✓ Tarifa plana de $79/mes en todas las dosis</li>
                  <li>✓ 15% de reducción promedio de peso en estudios clínicos</li>
                  <li>✓ Inyección subcutánea sencilla una vez por semana</li>
                  <li>✓ Incluye jeringas, agujas y toallitas con alcohol</li>
                </ul>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href={CTA_URL} className="btn btn-primary" style={{ justifyContent: 'center', display: 'flex' }}>
                  Comenzar Semaglutida ($79/mes) <Icon.Arrow />
                </a>
                <a href="/es/medications/semaglutide/" style={{ textAlign: 'center', fontSize: 14, color: 'var(--brand)', textDecoration: 'none', fontWeight: 600, padding: 8 }}>
                  Ver detalles clínicos de Semaglutida →
                </a>
              </div>
            </div>

            {/* Tirzepatide Card */}
            <div className="card" style={{ padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: 'var(--brand)', background: '#FFFDF9' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span className="pill" style={{ background: 'rgba(199, 125, 92, 0.15)', color: 'var(--brand)', fontWeight: 700, fontSize: 12 }}>
                    AGONISTA DUAL GIP + GLP-1
                  </span>
                  <span className="serif" style={{ fontSize: 32, fontWeight: 700, color: 'var(--brand)' }}>$129/mes</span>
                </div>
                <h3 className="serif" style={{ fontSize: 32, marginBottom: 12, color: 'var(--ink)' }}>Tirzepatida Compuesta</h3>
                <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 20 }}>
                  El principio activo presente en medicamentos como Mounjaro® y Zepbound®. Actúa sobre los receptores duales GLP-1 y GIP para potenciar el metabolismo de grasas, reducir la resistencia a la insulina y lograr la máxima eficacia clínica observada.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 14, color: 'var(--ink-2)' }}>
                  <li>✓ Tarifa plana de $129/mes en todas las dosis</li>
                  <li>✓ Hasta 21% de reducción promedio de peso en estudios SURMOUNT</li>
                  <li>✓ Acción metabólica dual de última generación</li>
                  <li>✓ Envío refrigerado directo con control de temperatura</li>
                </ul>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href={CTA_URL} className="btn btn-primary" style={{ justifyContent: 'center', display: 'flex' }}>
                  Comenzar Tirzepatida ($129/mes) <Icon.Arrow />
                </a>
                <a href="/es/medications/tirzepatide/" style={{ textAlign: 'center', fontSize: 14, color: 'var(--brand)', textDecoration: 'none', fontWeight: 600, padding: 8 }}>
                  Ver detalles clínicos de Tirzepatida →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRECIOS & COMPARACIÓN ── */}
      <section id="pricing" style={{ padding: '80px 0', background: 'var(--bg-alt)', borderTop: '1px solid var(--line-soft)', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 60px' }}>
            <div className="pill pill-brand" style={{ marginBottom: 14, display: 'inline-flex' }}>
              COMPARATIVA DE PRECIOS EN EE. UU.
            </div>
            <h2 className="serif" style={{ fontSize: 44, color: 'var(--ink)', marginBottom: 16 }}>
              Ahorra Miles Frente a Otras Clínicas
            </h2>
            <p style={{ fontSize: 17, color: 'var(--ink-2)', lineHeight: 1.6 }}>
              Sin tarifas ocultas de membresía, sin cargos de consulta y sin aumentos sorpresa al incrementar la dosis.
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '18px 24px', fontWeight: 600 }}>Proveedor / Programa</th>
                  <th style={{ padding: '18px 24px', fontWeight: 600 }}>Semaglutida</th>
                  <th style={{ padding: '18px 24px', fontWeight: 600 }}>Tirzepatida</th>
                  <th style={{ padding: '18px 24px', fontWeight: 600 }}>Tarifa Membresía</th>
                  <th style={{ padding: '18px 24px', fontWeight: 600 }}>Aumento al Subir Dosis</th>
                </tr>
              </thead>
              <tbody style={{ fontSize: 15, color: 'var(--ink-2)' }}>
                <tr style={{ background: 'rgba(199, 125, 92, 0.08)', fontWeight: 700 }}>
                  <td style={{ padding: '20px 24px', color: 'var(--ink)' }}>Telehealth FX (CoreAge Rx)</td>
                  <td style={{ padding: '20px 24px', color: 'var(--brand)' }}>$79/mes fijo</td>
                  <td style={{ padding: '20px 24px', color: 'var(--brand)' }}>$129/mes fijo</td>
                  <td style={{ padding: '20px 24px', color: '#16A34A' }}>$0 (Sin membresía)</td>
                  <td style={{ padding: '20px 24px', color: '#16A34A' }}>$0 (Precio fijo)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '18px 24px' }}>Ro Body Program</td>
                  <td style={{ padding: '18px 24px' }}>$299/mes</td>
                  <td style={{ padding: '18px 24px' }}>$449/mes</td>
                  <td style={{ padding: '18px 24px', color: '#DC2626' }}>$145/mes adicional</td>
                  <td style={{ padding: '18px 24px', color: '#DC2626' }}>Sí (Sube de precio)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '18px 24px' }}>Hims &amp; Hers</td>
                  <td style={{ padding: '18px 24px' }}>$199/mes</td>
                  <td style={{ padding: '18px 24px' }}>No disponible</td>
                  <td style={{ padding: '18px 24px' }}>Incluida en el costo</td>
                  <td style={{ padding: '18px 24px', color: '#DC2626' }}>Sí</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                  <td style={{ padding: '18px 24px' }}>Henry Meds</td>
                  <td style={{ padding: '18px 24px' }}>$297/mes</td>
                  <td style={{ padding: '18px 24px' }}>$449/mes</td>
                  <td style={{ padding: '18px 24px' }}>Incluida</td>
                  <td style={{ padding: '18px 24px', color: '#DC2626' }}>+$100/mes dosis alta</td>
                </tr>
                <tr>
                  <td style={{ padding: '18px 24px' }}>Marcas Comerciales (Ozempic/Wegovy)</td>
                  <td style={{ padding: '18px 24px' }}>$1,349/mes</td>
                  <td style={{ padding: '18px 24px' }}>$1,050/mes</td>
                  <td style={{ padding: '18px 24px' }}>N/A (Farmacia retail)</td>
                  <td style={{ padding: '18px 24px' }}>Varía por farmacia</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: 840 }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div className="pill pill-brand" style={{ marginBottom: 14, display: 'inline-flex' }}>
              PREGUNTAS FRECUENTES
            </div>
            <h2 className="serif" style={{ fontSize: 44, color: 'var(--ink)' }}>
              Todo lo que Necesitas Saber
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="card"
                style={{ padding: 24, cursor: 'pointer', transition: 'all .2s ease' }}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 className="serif" style={{ fontSize: 20, color: 'var(--ink)', margin: 0 }}>{faq.q}</h3>
                  <span style={{ fontSize: 22, color: 'var(--brand)', fontWeight: 700 }}>
                    {openFaq === idx ? '−' : '+'}
                  </span>
                </div>
                {openFaq === idx && (
                  <p style={{ marginTop: 14, marginBottom: 0, fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 60 }}>
            <a href={CTA_URL} className="btn btn-primary btn-lg" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              Comenzar Mi Evaluación Médica en Línea <Icon.Arrow />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
