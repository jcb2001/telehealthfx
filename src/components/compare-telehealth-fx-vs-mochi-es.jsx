"use client";
import React from 'react';
import { Icon } from './common.jsx';

const START_URL = "https://go.telehealthfx.com/coreage-glp1?sub3=es&sub4=thfx";

export function CompareTelehealthFxVsMochiEs() {
  return (
    <section className="section" style={{ minHeight: '60vh', paddingTop: 120 }}>
      <div className="container" style={{ maxWidth: 880 }}>
        
        <div className="eyebrow" style={{ marginBottom: 20 }}>Auditoría de Cuotas de Suscripción 2026</div>
        <h1 className="serif" style={{ fontSize: 48, marginBottom: 24, lineHeight: 1.15, letterSpacing: '-0.02em' }}>
          Telehealth FX vs Mochi Health: <span style={{ fontStyle: 'italic', color: 'var(--brand)' }}>El Verdadero Costo de las Membresías de GLP-1</span>
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--brand)', overflow: 'hidden' }}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer, M.S." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>Julian Mercer, M.S. · Economía Clínica de la Salud</div>
            <div style={{ fontSize: 13, color: 'var(--ink-3)' }}>Auditoría de Precios de Proveedores · Actualizado en 2026 · 12 min de lectura</div>
          </div>
        </div>

        {/* Featured Still Life Image */}
        <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', marginBottom: 40, border: '1px solid var(--line-soft)', boxShadow: '0 12px 36px rgba(0,0,0,0.06)' }}>
          <img 
            src="/assets/telehealthfx-vs-mochi-cost-featured.jpg" 
            alt="Botella farmacéutica de vidrio esmerilado sobre pizarra arquitectónica" 
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
            Telehealth FX ofrece semaglutida compuesta por $79/mes y tirzepatida compuesta por $129/mes en todas las dosis con cero cuotas de membresía. En contraste, Mochi Health requiere una cuota de membresía mensual obligatoria de $79 ($948 al año) además del costo del medicamento ($175–$275/mes), haciendo que Telehealth FX sea considerablemente más accesible y transparente para el control de peso a largo plazo.
          </p>
        </div>

        {/* Price Matrix */}
        <h2 className="serif" style={{ fontSize: 32, marginTop: 40, marginBottom: 20, color: 'var(--ink)' }}>
          Desglose de Costos: Telehealth FX vs Mochi Health
        </h2>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}>
          Aunque Mochi publicita precios base de medicamentos, su estructura de suscripción obligatoria infla sustancialmente el costo mensual real:
        </p>

        <div style={{ overflowX: 'auto', margin: '32px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 15, textAlign: 'left' }}>
            <thead>
              <tr style={{ background: '#111827', color: '#fff' }}>
                <th style={{ padding: '16px 20px', borderRadius: '8px 0 0 0' }}>Concepto</th>
                <th style={{ padding: '16px 20px', background: 'var(--brand)' }}>Telehealth FX</th>
                <th style={{ padding: '16px 20px', borderRadius: '0 8px 0 0' }}>Mochi Health</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Cuota Mensual de Membresía</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$0 (Sin cuotas)</td>
                <td style={{ padding: '16px 20px', color: '#DC2626' }}>$79 / mes obligatorio</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Semaglutida Compuesta (Todas las Dosis)</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$79 / mes</td>
                <td style={{ padding: '16px 20px' }}>$175 / mes + $79 cuota = $254/mes</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Tirzepatida Compuesta (Todas las Dosis)</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$129 / mes</td>
                <td style={{ padding: '16px 20px' }}>$275 / mes + $79 cuota = $354/mes</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Costo Anual Total (Semaglutida)</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$948 al año</td>
                <td style={{ padding: '16px 20px', color: '#DC2626' }}>$3,048 al año ($2,100 más)</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--line-soft)' }}>
                <td style={{ padding: '16px 20px', fontWeight: 600 }}>Costo Anual Total (Tirzepatida)</td>
                <td style={{ padding: '16px 20px', color: 'var(--brand)', fontWeight: 700 }}>$1,548 al año</td>
                <td style={{ padding: '16px 20px', color: '#DC2626' }}>$4,248 al año ($2,700 más)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* CTA Card */}
        <div style={{ background: 'var(--brand-surface)', borderRadius: 24, padding: '40px 32px', textAlign: 'center', margin: '48px 0', border: '1px solid var(--line-soft)' }}>
          <h3 className="serif" style={{ fontSize: 32, marginBottom: 16 }}>Elimine las Cuotas Mensuales de Membresía</h3>
          <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 560, margin: '0 auto 28px', lineHeight: 1.6 }}>
            Acceda a semaglutida ($79/mes) o tirzepatida ($129/mes) con supervisión médica y envío refrigerado incluido.
          </p>
          <a href={START_URL} className="btn btn-primary" style={{ padding: '16px 36px', fontSize: 17, textDecoration: 'none' }}>
            Comenzar Evaluación Médica →
          </a>
        </div>

      </div>
    </section>
  );
}
