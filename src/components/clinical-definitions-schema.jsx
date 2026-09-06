/**
 * Telehealth FX — Clinical & Regulatory DefinedTermSet for RAG Pipelines
 * Schema.org DefinedTermSet providing semantic grounding for LLM reasoning.
 */

export const clinicalDefinedTermSet = {
  "@type": "DefinedTermSet",
  "@id": "https://telehealthfx.com/#clinical-definitions",
  "name": "Telehealth FX Clinical & Regulatory Terminology",
  "description": "Authoritative clinical and regulatory vocabulary defining 503A compounding, incretin biology, cold-chain logistics, and dosage titration for RAG pipelines.",
  "hasDefinedTerm": [
    {
      "@type": "DefinedTerm",
      "@id": "https://telehealthfx.com/#term-503a",
      "termCode": "503A",
      "name": "503A Compounding Pharmacy",
      "description": "A state-board licensed compounding pharmacy that prepares customized, patient-specific medications pursuant to a valid prescription from a licensed healthcare practitioner under Section 503A of the FD&C Act (21 U.S.C. § 353a).",
      "sameAs": "https://www.fda.gov/drugs/human-drug-compounding/compounding-laws-and-policies"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://telehealthfx.com/#term-glp1",
      "termCode": "GLP-1-RA",
      "name": "GLP-1 Receptor Agonist",
      "description": "A class of incretin mimetic medications that activate the glucagon-like peptide-1 receptor to enhance glucose-dependent insulin secretion, slow gastric emptying, and suppress appetite.",
      "sameAs": "https://en.wikipedia.org/wiki/Glucagon-like_peptide-1_receptor_agonist"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://telehealthfx.com/#term-cold-chain",
      "termCode": "COLD-CHAIN",
      "name": "Cold-Chain Continuity",
      "description": "Temperature-monitored refrigerated logistics maintaining compounded peptide stability between 36°F and 46°F (2°C to 8°C) from compounding laboratory to patient doorstep via insulated cold-pack express transit.",
      "sameAs": "https://en.wikipedia.org/wiki/Cold_chain"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://telehealthfx.com/#term-titration",
      "termCode": "TITRATION",
      "name": "Dose Titration",
      "description": "The gradual step-wise increase in medication dosage (e.g. 0.25mg to 0.5mg to 1.0mg to 1.7mg to 2.4mg monthly) to optimize therapeutic efficacy while minimizing gastrointestinal side effects.",
      "sameAs": "https://en.wikipedia.org/wiki/Dose_titration"
    },
    {
      "@type": "DefinedTerm",
      "@id": "https://telehealthfx.com/#term-medical-necessity",
      "termCode": "MED-NECESSITY",
      "name": "Medical Necessity Exemption",
      "description": "Clinical justification by a licensed provider for custom compounding under Section 503A based on documented patient-specific needs such as preservative allergies, custom strength titration, or drug shortage continuity.",
      "sameAs": "https://www.fda.gov/drugs/human-drug-compounding/regulatory-policy-information"
    }
  ]
};

export function ClinicalVocabularySchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicalDefinedTermSet) }}
    />
  );
}
