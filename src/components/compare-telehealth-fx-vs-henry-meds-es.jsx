"use client";
import React from 'react';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/coreage-glp1?sub3=es&sub4=thfx";

export function CompareTelehealthFxVsHenryMedsEs() {
  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 880 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Auditoría de Precios y Análisis Clínico 2026</div>
        <h1 className="serif" style={{ fontSize: 48, marginBottom: 24, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Telehealth FX vs Henry Meds: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Comparación de Costos de GLP-1 Compuesto</span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand)', overflow: 'hidden' }}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer, M.S." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Julian Mercer, M.S. · Economía Clínica de la Salud</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Evaluación de Mercado Independiente · Actualizado en 2026 · 11 min de lectura</div>
          </div>
        </div>

        {/* Featured Still Life Image */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', marginBottom: 40, border: '1px solid var(--line-soft)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
          <img 
            src="/assets/telehealthfx-vs-henry-meds-featured.jpg" 
            alt="Frascos de formulación farmacéutica de color ámbar en un entorno clínico elegante" 
            style={{ width: '100%', height: 'auto', display: 'block' }} 
          />
          <div style={{ position: 'absolute', bottom: 12, right: 16, background: 'rgba(0,0,0,0.65)', color: '#fff', fontSize: 11, padding: '4px 10px', borderRadius: 6, backdropFilter: 'blur(4px)' }}>
            Estándar Editorial de Fotografía Clínica
          </div>
        </div>

        {/* Direct Answer Micro-Snippet */}
        <div style={{ background: '#FAF8F5', borderLeft: '4px solid var(--brand)', padding: '24px 28px', borderRadius: '0 12px 12px 0', marginBottom: 48 }}>
          <div style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: 12, letterSpacing: '0.08em', color: 'var(--brand)', marginBottom: 8 }}>
            Resolución Comparativa Directa
          </div>
          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'var(--ink)', margin: 0, fontWeight: 500 }}>
            Henry Meds cobra $297 al mes por semaglutida compuesta y $449 al mes por tirzepatida compuesta. En comparación, Telehealth FX ofrece exactamente la misma calidad clínica de farmacias 503A por una tarifa plana de $79/mes para semaglutida y $129/mes para tirzepatida en todas las dosis, ahorrando a los pacientes entre $2,600 y $3,800 al año sin contratos de permanencia.
          </p>
        </div>

        {/* Price Matrix */}
        <h2 className="serif" style={{ fontSize: 32, marginTop: 40, marginBottom: 20, color: 'var(--ink)' }}>
          Comparación de Desembolso Mensual: Telehealth FX vs Henry Meds
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          Ambas plataformas colaboran con farmacias de formulación magistral 503A con licencia estatal, pero sus modelos comerciales generan diferencias sustanciales de costo:
        </p>

        <div style={{ overflowX: 'auto', margin: '32px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#111827', color: '#fff' }}>
                <th style={{ padding: '16px 20px', borderRadius: '8px 0 0 0' }}>Tratamiento</th>
                <th style={{ padding: '16px 20px', background: 'var(--brand)' }}>Telehealth FX</th>
                <th style={{ padding: '16px 20px', borderRadius: '0 8px 0 0' }}>Henry Meds</th>
                <th style={{ padding: '16px 20px' }}>Ahorro Anual</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Semaglutida Compuesta (Todas las Dosis)</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$79 / mes</td>
                <td style={{ padding: '16px 20px', color: '#DC2626' }}>$297 / mes</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>Ahorra $2,616 / año</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Tirzepatida Compuesta (Todas las Dosis)</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$129 / mes</td>
                <td style={{ padding: '16px 20px', color: '#DC2626' }}>$449 / mes</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>Ahorra $3,840 / año</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Tarifa Mensual de Membresía</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$0</td>
                <td style={{ padding: '16px 20px' }}>Incluida en precio</td>
                <td style={{ padding: '16px 20px' }}>—</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Envío Refrigerado y Suministros</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>Incluido gratis</td>
                <td style={{ padding: '16px 20px' }}>Incluido</td>
                <td style={{ padding: '16px 20px' }}>—</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA Card */}
        <div style={{ background: 'var(--brand-surface)', borderRadius: 24, padding: '40px 32px', textAlign: 'center', margin: '48px 0', border: '1px solid var(--line-soft)' }}>
          <h3 className="serif" style={{ fontSize: 32, marginBottom: 16 }}>Ahorre Hasta $3,840 al Año en su Tratamiento GLP-1</h3>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 560, margin: '0 auto 28px', lineHeight: 1.6 }}>
            Acceda a medicamentos GLP-1 de alta pureza médica con médicos certificados en EE. UU. y tarifa plana garantizada.
          </p>
          <a href={START_URL} className="btn btn-primary" style={{ padding: '16px 36px', fontSize: 17, textDecoration: 'none' }}>
            Comenzar Evaluación Médica →
          </a>
        </div>

      </div>
    </section>
  );
}
