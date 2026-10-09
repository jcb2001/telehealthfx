"use client";
import React from 'react';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/coreage-glp1?sub3=es&sub4=thfx";

export function CompareTelehealthFxVsRoHimsEs() {
  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 880 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Auditoría de Transparencia de Precios de Telesalud 2026</div>
        <h1 className="serif" style={{ fontSize: 48, marginBottom: 24, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Telehealth FX vs Ro y Hims: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>Comparación de Costos de GLP-1 y Tarifas Ocultas</span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand)', overflow: 'hidden' }}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer, M.S." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Julian Mercer, M.S. · Economía Clínica de la Salud</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Inteligencia de Precios de Mercado · Actualizado en 2026 · 14 min de lectura</div>
          </div>
        </div>

        {/* Featured Still Life Image */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', marginBottom: 40, border: '1px solid var(--line-soft)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
          <img 
            src="/assets/telehealthfx-vs-ro-hims-cost-featured.jpg" 
            alt="Frasco de vidrio de telemedicina moderno y empaque farmacéutico con receta médica" 
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
            Telehealth FX ofrece semaglutida compuesta por una tarifa plana de $79/mes y tirzepatida por $129/mes en todas las dosis terapéuticas con $0 tarifas de membresía. En contraste, Ro cobra tarifas de membresía mensuales obligatorias de $99 a $145 adicionales al costo del medicamento, mientras que Hims escala sus precios hasta $299–$399/mes en dosis elevadas. Los pacientes de Telehealth FX ahorran entre $1,400 y $2,400 al año con envío refrigerado gratuito incluido.
          </p>
        </div>

        {/* True Cost Breakdown Comparison Table */}
        <h2 className="serif" style={{ fontSize: 32, marginTop: 40, marginBottom: 20, color: 'var(--ink)' }}>
          Matriz de Costo Real: Comparación de Desembolso en 6 Meses
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          Muchas plataformas de telemedicina anuncian tarifas iniciales reducidas para el primer mes, pero ocultan membresías mensuales obligatorias y aumentos automáticos en cuanto el paciente incrementa la dosis. La siguiente tabla desglosa el costo real de bolsillo:
        </p>

        <div style={{ overflowX: 'auto', margin: '32px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#111827', color: '#fff' }}>
                <th style={{ padding: '16px 20px', borderRadius: '8px 0 0 0' }}>Característica</th>
                <th style={{ padding: '16px 20px', background: 'var(--brand)' }}>Telehealth FX</th>
                <th style={{ padding: '16px 20px' }}>Ro (Ro Body)</th>
                <th style={{ padding: '16px 20px', borderRadius: '0 8px 0 0' }}>Hims &amp; Hers</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Semaglutida (Dosis Inicial)</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$79/mes</td>
                <td style={{ padding: '16px 20px' }}>$145/mes</td>
                <td style={{ padding: '16px 20px' }}>$199/mes</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Semaglutida (Mantenimiento 2.4mg)</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$79/mes (Fija)</td>
                <td style={{ padding: '16px 20px' }}>$299/mes + $99 cuota</td>
                <td style={{ padding: '16px 20px' }}>$299–$399/mes</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Tirzepatida (Cualquier Dosis)</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$129/mes (Fija)</td>
                <td style={{ padding: '16px 20px' }}>No disponible en compuestas</td>
                <td style={{ padding: '16px 20px' }}>No disponible en compuestas</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Cuota Mensual de Membresía</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$0 (Nunca)</td>
                <td style={{ padding: '16px 20px', color: '#DC2626' }}>$99–$145/mes obligatorio</td>
                <td style={{ padding: '16px 20px' }}>Incluida en precio inflado</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Envío Refrigerado en 2 Días</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>Gratis</td>
                <td style={{ padding: '16px 20px' }}>Gratis con membresía</td>
                <td style={{ padding: '16px 20px' }}>Gratis</td>
              </tr>
              <tr style={{ background: '#F8FAFC', fontWeight: 700 }}>
                <td style={{ padding: '16px 20px' }}>Desembolso Total en 6 Meses</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontSize: 18 }}>$474 (Semaglutida)</td>
                <td style={{ padding: '16px 20px', color: '#DC2626' }}>$1,864 – $2,388</td>
                <td style={{ padding: '16px 20px', color: '#DC2626' }}>$1,494 – $2,194</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Clinical Superiority Narrative */}
        <h2 className="serif" style={{ fontSize: 32, marginTop: 48, marginBottom: 20, color: 'var(--ink)' }}>
          Por Qué la Tarifa Plana Protege Su Tratamiento Clínico
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          En los ensayos clínicos STEP y SURMOUNT, los pacientes alcanzaron su máxima pérdida de peso (15% a 20.9% del peso corporal) tras alcanzar las dosis terapéuticas de mantenimiento. Cuando los proveedores de telesalud duplican o triplican los precios al aumentar la dosis, muchos pacientes se ven obligados a interrumpir el tratamiento por motivos financieros, lo que suele provocar un rebote del apetito y recuperación del peso.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          La política de tarifa plana de Telehealth FX garantiza que su dosis de mantenimiento cueste exactamente lo mismo que su dosis inicial: <strong>$79/mes para Semaglutida</strong> y <strong>$129/mes para Tirzepatida</strong>.
        </p>

        {/* CTA Card */}
        <div style={{ background: 'var(--brand-surface)', borderRadius: 24, padding: '40px 32px', textAlign: 'center', margin: '48px 0', border: '1px solid var(--line-soft)' }}>
          <h3 className="serif" style={{ fontSize: 32, marginBottom: 16 }}>Comience su Evaluación Médica en Línea</h3>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 560, margin: '0 auto 28px', lineHeight: 1.6 }}>
            Sin tarifas de membresía, sin compromisos forzados. Evaluación clínica con médico certificado en EE. UU. y envío refrigerado incluido.
          </p>
          <a href={START_URL} className="btn btn-primary" style={{ padding: '16px 36px', fontSize: 17, textDecoration: 'none' }}>
            Comenzar Evaluación Médica →
          </a>
        </div>

      </div>
    </section>
  );
}
