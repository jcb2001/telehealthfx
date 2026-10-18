"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/embody?sub3=es&sub4=thfx";

export function TirzepatidePageEs() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/es/medications/tirzepatide/#webpage",
        "name": "Programa de Tirzepatida Compuesta para Pérdida de Peso | Telehealth FX",
        "description": "Terapia de doble agonista GIP/GLP-1 tirzepatida compuesta desde $119/mes en tarifa promocional. Máxima pérdida de peso metabólica, aprobación clínica en 24 horas y envío refrigerado incluido.",
        "url": "https://telehealthfx.com/es/medications/tirzepatide/",
        "about": {
          "@type": "Substance",
          "name": "Tirzepatida",
          "drugClass": "Doble agonista de receptores GIP y GLP-1",
          "administrationRoute": "Inyección subcutánea"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/es/medications/tirzepatide/#product",
        "name": "Programa de Tirzepatida Compuesta",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Programa de agonista dual de receptores GIP/GLP-1 que incluye consultas médicas y tirzepatida compuesta para una pérdida de peso superior. Tarifa plana de $129/mes en todas las dosis.",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "sku": "TIR-01-ES",
        "url": "https://telehealthfx.com/es/medications/tirzepatide/",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "worstRating": "1",
          "reviewCount": "142",
          "ratingCount": "142"
        },
        "review": [
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "James L." },
            "datePublished": "2026-03-22",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "Cambié de semaglutida a tirzepatida y los resultados se aceleraron notablemente. Bajé 41 libras en 4 meses casi sin apetito. Me cambió la vida."
          },
          {
            "@type": "Review",
            "author": { "@type": "Person", "name": "Amanda P." },
            "datePublished": "2026-04-10",
            "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
            "reviewBody": "El mecanismo de doble acción realmente funciona. Mi nivel de azúcar en sangre está mejor que en años y he perdido 35 libras. El proceso de telesalud hizo todo muy sencillo."
          }
        ],
        "offers": {
          "@type": "Offer",
          "price": "119.00",
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
            <span className="pill-dot" /> Doble Agonista GIP/GLP-1 · Desde $119/mes Promo
          </div>
          <h1 className="serif" style={{ fontSize: 72, marginBottom: 28, lineHeight: 0.95 }}>
            Tirzepatida<br/><span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>desde $119/mes.</span>
          </h1>
          <p style={{ fontSize: 20, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', lineHeight: 1.6 }}>
            El tratamiento de doble acción GIP y GLP-1 de mayor potencia metabólica. Formulado por farmacias 503A con licencia en EE. UU. desde $119/mes tarifa promocional, con consulta médica y envío refrigerado incluidos.
          </p>
          <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex' }}>
            Aprovechar Promo de $119/mes <Icon.Arrow />
          </a>
        </div>

        {/* Trust Strip */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {[
            { num: '20-22%', label: 'Pérdida de Peso Promedio' },
            { num: '$119', label: 'Tarifa Promocional Mensual' },
            { num: '2 Días', label: 'Envío Refrigerado Exprés' },
          ].map((s, i) => (
            <div key={i} className="card" style={{ padding: 28, textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 36, color: 'var(--brand)', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="blog-content" style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          <h2 className="serif" style={{ fontSize: 40, marginTop: 0, marginBottom: 24, color: 'var(--ink)' }}>¿Qué es la Tirzepatida y por qué supera a los GLP-1 tradicionales?</h2>
          <p>La tirzepatida representa la última generación en medicina metabólica. A diferencia de la semaglutida, que actúa exclusivamente sobre los receptores de GLP-1, la tirzepatida es un <strong>agonista dual</strong> que activa simultáneamente dos receptores hormonales complementarios:</p>
          <ul style={{ marginBottom: 24, paddingLeft: 20 }}>
            <li style={{ marginBottom: 12 }}><strong>GLP-1 (Péptido Similar al Glucagón-1):</strong> Controla el apetito, reduce el vaciado gástrico y estabiliza los niveles de azúcar en la sangre.</li>
            <li style={{ marginBottom: 12 }}><strong>GIP (Polipéptido Insulinotrópico Dependiente de Glucosa):</strong> Estimula el metabolismo de los lípidos, favorece la oxidación de grasa profunda y mejora notablemente la tolerancia digestiva.</li>
          </ul>
          <p>En el histórico ensayo clínico SURMOUNT-1 publicado en el <em>New England Journal of Medicine</em>, los pacientes que tomaron la dosis terapéutica más alta perdieron un impresionante <strong>20.9% a 22.5% de su peso corporal total</strong> en 72 semanas.</p>

          {/* CTA */}
          <div className="card" style={{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}>
            <h3 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>Tirzepatida Compuesta por $129/mes</h3>
            <p style={{ marginBottom: 24, fontSize: 16 }}>Mismo precio sin importar la dosis. Aprobación por médicos certificados en EE. UU., envío refrigerado directo y sin cuotas de membresía.</p>
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{ display: 'inline-flex', justifyContent: 'center' }}>
              Comenzar Evaluación Médica <Icon.Arrow />
            </a>
          </div>
        </div>

        <PatientReviewsSection
          productName="Tirzepatida Compuesta"
          aggregateRating={{ ratingValue: "4.8", reviewCount: "142" }}
          reviews={[
            {
              author: { name: "James L." },
              datePublished: "2026-03-22",
              reviewRating: { ratingValue: "5" },
              reviewBody: "Cambié de semaglutida a tirzepatida y los resultados se aceleraron notablemente. Bajé 41 libras en 4 meses casi sin apetito. Me cambió la vida."
            },
            {
              author: { name: "Amanda P." },
              datePublished: "2026-04-10",
              reviewRating: { ratingValue: "5" },
              reviewBody: "El mecanismo de doble acción realmente funciona. Mi nivel de azúcar en sangre está mejor que en años y he perdido 35 libras. El proceso de telesalud hizo todo muy sencillo."
            }
          ]}
        />
      </div>
    </section>
  );
}
