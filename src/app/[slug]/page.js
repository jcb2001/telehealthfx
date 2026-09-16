import { GenericPage } from "../../components/generic-page.jsx";
import { PAGE_CONTENT } from "../../components/page-content.jsx";

const genericPages = ['how', 'medications', 'results', 'science', 'pricing', 'faq'];

const contentPages = [
  'affiliate-disclosure', 'privacy', 'terms', 'telehealth-consent', 'hipaa',
  'accessibility', 'about', 'careers', 'press', 'partners', 'contact',
  'help-center', 'shipping', 'returns', 'insurance', 'status'
];

export function generateStaticParams() {
  return [...genericPages, ...contentPages].map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  
  const seoMap = {
    'how': { title: 'How It Works | Telehealth FX', desc: 'Discover how Telehealth FX delivers clinical weight loss medications directly to your door with 24-hour physician evaluation.' },
    'medications': { title: 'Medications | Telehealth FX', desc: 'Explore our metabolic health medications prescribed by licensed providers, including compounded Semaglutide and Tirzepatide.' },
    'results': { title: 'Real Results | Telehealth FX', desc: 'See real weight loss results, clinical milestone data, and metabolic transformation outcomes from our members.' },
    'science': { title: 'The Science | Telehealth FX', desc: 'Read the clinical trial data, incretin biology research, and pharmacokinetic evidence backing our metabolic health protocols.' },
    'pricing': { title: 'Pricing | Telehealth FX', desc: 'Transparent, flat-rate pricing for clinical weight loss. Introductory promo from $99/month with zero hidden membership fees.' },
    'faq': { title: 'FAQ & Clinical Knowledge Base | Telehealth FX', desc: 'Frequently asked questions about clinical GLP-1 weight loss, doctor consultations, 503A compounding pharmacy sourcing, and dosing.' },
    'about': { title: 'About Us | Telehealth FX', desc: 'Learn about the Telehealth FX mission to democratize clinical metabolic health, incretin therapy, and evidence-grounded care.' },
    'careers': { title: 'Careers & Opportunities | Telehealth FX', desc: 'Join the distributed team revolutionizing metabolic health and telemedicine. Explore open opportunities across engineering, editorial, and patient care.' },
    'press': { title: 'Press & Media Center | Telehealth FX', desc: 'Media resources, press releases, company background, and clinical commentary on GLP-1 compounding and telehealth regulation.' },
    'partners': { title: 'Pharmacy & Provider Partnerships | Telehealth FX', desc: 'Learn about our rigorous standards for state-licensed 503A/503B compounding pharmacies and licensed medical provider networks.' },
    'contact': { title: 'Contact Us | Telehealth FX', desc: 'Get in touch with the Telehealth FX team for general inquiries, editorial feedback, and platform support.' },
    'help-center': { title: 'Help Center & Patient Support | Telehealth FX', desc: 'Find answers to common questions regarding telehealth consultations, cold-chain medication shipping, dosage schedules, and account management.' },
    'shipping': { title: 'Shipping & Cold-Chain Delivery Policy | Telehealth FX', desc: 'Learn about our temperature-monitored cold-chain express delivery standards, insulated medical packaging, and delivery timelines across all 50 states.' },
    'returns': { title: 'Returns & Refund Policy | Telehealth FX', desc: 'Review our FDA-compliant prescription return policy, 100% money-back guarantee for clinical ineligibility, and flexible subscription terms.' },
    'insurance': { title: 'Insurance, HSA & FSA Guide | Telehealth FX', desc: 'Understand why direct-pay telehealth lowers total costs compared to commercial insurance prior-authorization delays. HSA and FSA cards accepted.' },
    'status': { title: 'System Status & Operational Health | Telehealth FX', desc: 'Real-time operational status of Telehealth FX intake systems, physician review network, and 503A pharmacy dispensing pipelines.' },
    'privacy': { title: 'Privacy Policy | Telehealth FX', desc: 'Read how Telehealth FX collects, protects, and handles your personal information in compliance with modern privacy standards.' },
    'terms': { title: 'Terms of Service | Telehealth FX', desc: 'Review the terms, conditions, and user agreements governing access to the Telehealth FX website and digital resources.' },
    'telehealth-consent': { title: 'Telehealth Informed Consent | Telehealth FX', desc: 'Informed consent disclosures for telemedicine consultations, asynchronous evaluations, and clinical care delivery.' },
    'hipaa': { title: 'HIPAA & Health Privacy Notice | Telehealth FX', desc: 'Overview of health data privacy, secure partner environments, and compliance protocols across Telehealth FX platforms.' },
    'accessibility': { title: 'Accessibility Statement | Telehealth FX', desc: 'Our ongoing commitment to digital accessibility, WCAG 2.1 Level AA conformance, and inclusive web standards.' },
    'affiliate-disclosure': { title: 'Affiliate Disclosure | Telehealth FX', desc: 'FTC-compliant affiliate relationship disclosure detailing our editorial independence and partnership compensation models.' }
  };

  const pageData = PAGE_CONTENT ? PAGE_CONTENT[slug] : null;
  const seoData = seoMap[slug] || (pageData ? { title: `${pageData.title} | Telehealth FX`, desc: `${pageData.title} on Telehealth FX.` } : { title: 'Telehealth FX', desc: 'Clinical telehealth weight loss and metabolic health.' });

  return {
    title: seoData.title,
    description: seoData.desc,
    alternates: {
      canonical: `https://telehealthfx.com/${slug}/`,
    }
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  return (
    <div style={{ paddingTop: '100px' }}>
      <GenericPage pageSlug={slug} />
    </div>
  );
}
