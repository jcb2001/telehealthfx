"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/coreage-semaglutide?sub3=es&sub4=thfx";

export function SemaglutidePageEs() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/es/medications/semaglutide/#webpage",
        "name": "Programa de Semaglutida Compuesta para Pérdida de Peso | Telehealth FX",
        "description": "Obtén semaglutida compuesta (agonista del receptor GLP-1) por una tarifa plana de $79/mes en todas las dosis. Aprobación médica en 24 horas, sin tarifas ocultas, envío refrigerado exprés en 2 días.",
        "url": "https://telehealthfx.com/es/medications/semaglutide/",
        "about": {
          "@type": "Substance",
          "name": "Semaglutida",
          "nonProprietaryName": "Semaglutida",
          "drugClass": "Agonista del receptor GLP-1",
          "mechanismOfAction": "Imita la hormona GLP-1 para regular el apetito, retrasar el vaciamiento gástrico y mejorar la sensibilidad a la insulina",
          "administrationRoute": "Inyección subcutánea"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/es/medications/semaglutide/#product",
        "name": "Programa de Semaglutida Compuesta",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Programa integral de salud metabólica con consultas médicas y semaglutida compuesta para el control del peso. Tarifa plana de $79/mes en todas las dosificaciones.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "SEM-01-ES",
        "url": "https://telehealthfx.com/es/medications/semaglutide/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "218",
          "ratingCount": "218"
        },
        "offers": {
          "@type": "Offer",
          "price": "79.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "validFrom": "2026-01-01",
          "priceValidUntil": "2027-12-31",
          "url": CTA_URL
        }
      }
    ]
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 840 }}>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: 80 }}>
          <div className="pill pill-brand" style={{ marginBottom: 20, display: 'inline-flex' }}>
            <span className="pill-dot" /> GLP-1 Más Popular · $79/mes Tarifa Plana
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Semaglutida<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>$79/mes tarifa plana.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
            Formulación agonista del receptor GLP-1 preparada por farmacias de formulación magistral 503A con licencia en EE. UU. Tarifa plana de $79/mes en todas las dosis: sin aumentos de precio al subir la dosis, cero cuotas de membresía y envío refrigerado exprés en 2 días.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            Aprovechar Tarifa de $79/mes <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: '24h', label: 'Aprobación Médica' },
            { num: '$79', label: 'Tarifa Plana Mensual' },
            { num: '2 Días', label: 'Envío Refrigerado UPS' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>¿Qué es la Semaglutida?</h2>
          <p>La semaglutida es un <strong>agonista del receptor GLP-1</strong>, una versión bioidéntica sintética de la hormona intestinal natural péptido similar al glucagón-1 (GLP-1). Es el principio activo presente en medicamentos comerciales como <strong>Ozempic®</strong> (aprobado para Diabetes Tipo 2) y <strong>Wegovy®</strong> (aprobado para el control crónico del peso).</p>
          <p>A diferencia del GLP-1 endógeno que el organismo degrada en cuestión de minutos, la semaglutida está diseñada para resistir la degradación enzimática de la DPP-4. Esto permite que una única inyección semanal proporcione <strong>regulación continua del apetito, reducción del ruido mental por la comida y mayor sensibilidad a la insulina</strong> durante 7 días continuos.</p>
          <p>En ensayos clínicos fundamentales (programa STEP), los pacientes que recibieron semaglutida 2.4 mg perdieron un promedio de <strong>14.9% de su peso corporal</strong> en 68 semanas, frente al 2.4% con placebo. Para una persona de 220 libras, esto representa aproximadamente <strong>33 libras de pérdida de peso clínicamente significativa</strong>.</p>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Cómo Funciona en tu Organismo</h2>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>Supresión del Apetito:</strong> Actúa sobre los centros de saciedad en el hipotálamo para disminuir drásticamente el hambre y silenciar los antojos constantes.</li>
            <li style={{ marginBottom: 12 }}><strong>Vaciado Gástrico Prolongado:</strong> Retrasa la salida de los alimentos del estómago, prolongando la sensación de satisfacción después de comer con porciones naturalmente más pequeñas.</li>
            <li style={{ marginBottom: 12 }}><strong>Regulación de la Glucosa:</strong> Estimula la secreción de insulina dependiente de glucosa y suprime el glucagón, mejorando el control glucémico.</li>
            <li style={{ marginBottom: 12 }}><strong>Protección Cardiovascular:</strong> El ensayo clínico SELECT demostró una reducción del 20% en eventos cardiovasculares adversos mayores en adultos con sobrepeso u obesidad.</li>
            <li style={{ marginBottom: 12 }}><strong>Reinicio Metabólico:</strong> Facilita el descenso del punto de ajuste metabólico (set point), protegiendo contra el rebote de peso.</li>
          </ul>

          {/* CTA 1 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>¿Listo para comenzar con Semaglutida?</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Completa una breve evaluación médica en línea. Un médico certificado revisará tu historial clínico y puede aprobar tu receta en menos de 24 horas.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Verificar Elegibilidad Médica <Icon.Arrow />
            </a>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>Esquema de Dosificación y Titulación</h2>
          <p>La semaglutida se administra mediante una <strong>inyección subcutánea semanal</strong>. El protocolo de titulación gradual incrementa la dosis progresivamente para minimizar molestias digestivas:</p>

          <div style={{ margin: '32px 0', overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--ink)', color: '#fff' }}>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Semanas</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Dosis</th>
                  <th style={{ padding: '16px', fontWeight: 500, fontSize: 14 }}>Objetivo Clínico</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1–4', '0.25 mg', 'Fase inicial de tolerancia metabólica'],
                  ['5–8', '0.5 mg', 'Acumulación de niveles terapéuticos'],
                  ['9–12', '1.0 mg', 'Inicio de dosis terapéutica efectiva'],
                  ['13–16', '1.7 mg', 'Fase intensificada de pérdida de peso'],
                  ['17+', '2.4 mg', 'Dosis completa de mantenimiento continuo'],
                ].map(([weeks, dose, purpose], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--line-soft)', background: i % 2 ? 'transparent' : '#FAFAFA' }}>
                    <td style={{ padding: '16px', fontWeight: 500 }}>{weeks}</td>
                    <td style={{ padding: '16px', color: 'var(--brand)', fontWeight: 500 }}>{dose}</td>
                    <td style={{ padding: '16px' }}>{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="serif" style={{ fontSize: 40, marginTop: 64, marginBottom: 24, color: 'var(--ink)' }}>¿Qué es la Semaglutida Compuesta?</h2>
          <p>La semaglutida compuesta contiene el principio farmacéutico activo idéntico y es formulada en <strong>farmacias de formulación magistral 503A reguladas por las juntas de farmacia estatales</strong> en los Estados Unidos. Estas instalaciones siguen rigurosos estándares de control de calidad y buenas prácticas de fabricación (cGMP).</p>
          <p>La ventaja decisiva es la <strong>accesibilidad económica</strong>. Mientras las marcas comerciales pueden costar más de $1,300 al mes sin cobertura de seguro, en Telehealth FX la semaglutida compuesta tiene una tarifa plana transparente de <strong>$79 al mes en todas las dosis</strong>.</p>

          {/* CTA 2 */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Semaglutida Compuesta. Sin Sorpresas de Precio.</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Tarifa plana de $79/mes en todas las dosis. Médicos certificados en EE. UU., entrega refrigerada directa, sin necesidad de seguro médico.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Comenzar Evaluación Médica <Icon.Arrow />
            </a>
          </div>

        </div>

        <PatientReviewsSection compoundName="Semaglutide" />
      </div>
    </section>
  );
}
