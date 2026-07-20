import { BlogGLP1TaxDeduction } from "../../../components/blog-glp1-tax-deduction-2026.jsx";
export const metadata = {
  robots: { index: true, follow: true }, title: "Is Weight Loss Medication Tax Deductible? GLP-1 Costs, HSA, FSA & Deductions (2026)", description: "Reduce your GLP-1 cost by 20-37% through HSA/FSA, medical expense deductions, and self-employed health deductions. Complete financial guide for GLP-1." };
export default function Page() {
  const jsonLd = { "@context": "https://schema.org", "@type": "MedicalWebPage", "headline": "GLP-1 Tax Deductions Guide", "author": { "@type": "Person", "name": "Julian Mercer, M.S." }, "publisher": { "@type": "Organization", "name": "Telehealth FX" } };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1TaxDeduction /></>);
}
