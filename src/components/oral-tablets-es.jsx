"use client";
import React from 'react';
import { Icon } from './common.jsx';
import { PatientReviewsSection } from './patient-reviews-section.jsx';

const CTA_URL = "https://go.telehealthfx.com/skinnyrx-tablets?sub3=es&sub4=thfx";

export function OralTabletsPageEs() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/es/oral-tablets/#webpage",
        "url": "https://telehealthfx.com/es/oral-tablets/",
        "name": "Tabletas Orales Disolubles GLP-1 | Telehealth FX",
        "description": "Obtén tabletas sublinguales de semaglutida ($149/mes) y tirzepatida ($199/mes) sin agujas. Rápida absorción sublingual, evaluación médica en 24 horas y envío exprés gratuito.",
        "about": {
          "@type": "Substance",
          "name": "Tabletas Sublinguales de Semaglutida y Tirzepatida",
          "drugClass": "Agonista del receptor GLP-1 / GIP",
          "administrationRoute": "Vía sublingual (tableta soluble debajo de la lengua)"
        },
        "publisher": { "@type": "MedicalOrganization", "name": "Telehealth FX" }
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/es/oral-tablets/#product",
        "name": "Programa de Tabletas Sublinguales GLP-1",
        "brand": { "@type": "Brand", "name": "Telehealth FX" },
        "description": "Tratamiento de pérdida de peso con tabletas sublinguales sin inyecciones semanales.",
        "offers": {
          "@type": "Offer",
          "price": "149.00",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": CTA_URL
        }
      }
    ]
  };

  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container" style={{ maxWidth: 880 }}>
        
        {/* Eyebrow badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#ECFDF5', border: '1px solid #A7F3D0', padding: '6px 16px', borderRadius: 9999, fontSize: 13, fontWeight: 600, color: '#065F46', marginBottom: 20 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10B981' }}></span>
          Alternativa 100% Sin Agujas · Tabletas Sublinguales de Disolución Diaria
        </div>

        <h1 className="serif" style={{ fontSize: 48, marginBottom: 24, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Tabletas Orales GLP-1 Disolubles: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Semaglutida y Tirzepatida Sin Inyecciones</span>
        </h1>

        <p style={{ fontSize: 19, lineHeight: 1.65, color: 'var(--ink-2)', marginBottom: 36 }}>
          Experimente la misma eficacia metabólica de los agonistas GLP-1 de grado clínico sin la ansiedad ni las molestias de las inyecciones semanales. Nuestras tabletas sublinguales se disuelven bajo la lengua en menos de 60 segundos, absorbiéndose directamente en la circulación venosa.
        </p>

        {/* Pricing Comparison Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24, marginBottom: 48 }}>
          
          {/* Card 1: Semaglutide Tablets */}
          <div style={{ background: '#FFFFFF', border: '2px solid var(--brand)', borderRadius: 20, padding: '32px 28px', boxShadow: '0 8px 24px rgba(0,0,0,0.05)', position: 'relative' }}>
            <div style={{ display: 'inline-block', background: 'var(--brand)', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 6, textTransform: 'uppercase', marginBottom: 16 }}>
              Más Popular
            </div>
            <h3 className="serif" style={{ fontSize: 26, margin: '0 0 8px' }}>Semaglutida Sublingual</h3>
            <p style={{ fontSize: 14, color: 'var(--ink-3)', margin: '0 0 20px' }}>Tableta disoluble diaria · Agonista del receptor GLP-1</p>
            <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--ink)', marginBottom: 6 }}>
              $149 <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink-3)' }}>/ mes</span>
            </div>
            <div style={{ fontSize: 13, color: '#16A34A', fontWeight: 600, marginBottom: 24 }}>Tarifa plana · Sin tarifas de membresía</div>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8 }}>
              <li>✓ Cero inyecciones ni jeringas semanales</li>
              <li>✓ Absorción rápida por mucosa vascular</li>
              <li>✓ Consulta con médico certificado incluida</li>
              <li>✓ Envío exprés a domicilio gratuito</li>
            </ul>

            <a href={CTA_URL} className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block', textDecoration: 'none' }}>
              Comenzar Semaglutida Oral →
            </a>
          </div>

          {/* Card 2: Tirzepatide Tablets */}
          <div style={{ background: '#FFFFFF', border: '1px solid var(--line-soft)', borderRadius: 20, padding: '32px 28px', boxShadow: '0 8px 24px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'inline-block', background: '#3B82F6', color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 6, textTransform: 'uppercase', marginBottom: 16 }}>
              Acción Dual Avanzada
            </div>
            <h3 className="serif" style={{ fontSize: 26, margin: '0 0 8px' }}>Tirzepatida Sublingual</h3>
            <p style={{ fontSize: 14, color: 'var(--ink-3)', margin: '0 0 20px' }}>Tableta disoluble diaria · Agonista dual GLP-1 + GIP</p>
            <div style={{ fontSize: 36, fontWeight: 800, color: 'var(--ink)', marginBottom: 6 }}>
              $199 <span style={{ fontSize: 16, fontWeight: 500, color: 'var(--ink-3)' }}>/ mes</span>
            </div>
            <div style={{ fontSize: 13, color: '#16A34A', fontWeight: 600, marginBottom: 24 }}>Tarifa plana · Máxima supresión de apetito</div>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.8 }}>
              <li>✓ Acción combinada en receptores GLP-1 y GIP</li>
              <li>✓ Reducción superior del apetito y antojos</li>
              <li>✓ Acompañamiento médico continuo</li>
              <li>✓ Envío exprés con discreción médica</li>
            </ul>

            <a href={CTA_URL} className="btn btn-outline" style={{ width: '100%', textAlign: 'center', display: 'block', textDecoration: 'none' }}>
              Comenzar Tirzepatida Oral →
            </a>
          </div>

        </div>

        {/* Clinical Mechanism of Sublingual Absorption */}
        <div style={{ background: '#FAF8F5', borderRadius: 20, padding: '36px 32px', marginBottom: 48, border: '1px solid var(--line-soft)' }}>
          <h2 className="serif" style={{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}>
            ¿Cómo Funciona la Absorción Sublingual?
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
            A diferencia de las cápsulas estándar que deben pasar por el estómago y el hígado sufriendo una degradación enzimática de hasta el 99%, las tabletas disolubles se colocan bajo la lengua. La rica red de capilares bajo la mucosa oral permite que el péptido activo pase directamente al torrente sanguíneo, maximizando la biodisponibilidad y evitando molestias gastrointestinales gástricas.
          </p>
        </div>

        {/* Reviews */}
        <PatientReviewsSection />

      </div>
    </section>
  );
}
