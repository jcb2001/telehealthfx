import About from '../../components/about.jsx';

export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/about/',
  },
  title: 'About TelehealthFX | Clinical Leadership & Mission',
  description: 'Meet Julian Mercer, Lead Bio-Systems Analyst, and learn about TelehealthFX\'s mission to provide safe, transparent, quality-verified clinical weight loss interventions.',
  openGraph: {
    title: 'About TelehealthFX | Clinical Leadership',
    description: 'Learn about TelehealthFX\'s mission to provide safe, transparent, quality-verified clinical weight loss interventions.',
  }
};

export default function Page() {
  return <About />;
}
