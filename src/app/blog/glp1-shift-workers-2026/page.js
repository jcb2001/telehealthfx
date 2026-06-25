import { BlogGLP1ShiftWorkers } from "../../../components/blog-glp1-shift-workers-2026.jsx";
export const metadata = {
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp1-shift-workers-2026/',
  }, title: "GLP-1 for Nurses, Teachers & Shift Workers: Managing Medication on Irregular Schedules", description: "Shift workers have 29% higher obesity rates. GLP-1 telehealth solves the schedule problem: once-weekly injection, no appointments, no meal timing restrictions.", openGraph: { title: "GLP-1 for Nurses, Teachers & Shift Workers", description: "Irregular schedule? Once-weekly injection. No appointments. Telehealth." } };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage", "headline": "GLP-1 for Shift Workers", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1ShiftWorkers /></>);
}
