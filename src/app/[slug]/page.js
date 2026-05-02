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
    'how': { title: 'How It Works | Telehealth FX', desc: 'Discover how Telehealth FX delivers clinical weight loss medications directly to your door.' },
    'medications': { title: 'Medications | Telehealth FX', desc: 'Explore our metabolic health medications prescribed by licensed providers.' },
    'results': { title: 'Real Results | Telehealth FX', desc: 'See real weight loss results and clinical outcomes from our members.' },
    'science': { title: 'The Science | Telehealth FX', desc: 'Read the clinical data and scientific research backing our metabolic health protocols.' },
    'pricing': { title: 'Pricing | Telehealth FX', desc: 'Transparent, flat-rate pricing for clinical weight loss. No hidden fees.' },
    'faq': { title: 'FAQ | Telehealth FX', desc: 'Frequently asked questions about our clinical weight loss programs.' }
  };

  const pageData = PAGE_CONTENT ? PAGE_CONTENT[slug] : null;
  const seoData = seoMap[slug] || (pageData ? { title: `${pageData.title} | Telehealth FX`, desc: pageData.title } : { title: 'Telehealth FX', desc: 'Telehealth FX' });

  return {
    title: seoData.title,
    description: seoData.desc
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
