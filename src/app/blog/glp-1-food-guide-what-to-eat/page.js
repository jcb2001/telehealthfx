import { BlogGLP1FoodGuide } from "../../../components/blog-glp-1-food-guide-what-to-eat.jsx";

export const metadata = {
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://telehealthfx.com/blog/glp-1-food-guide-what-to-eat/',
  },
  title: "The Complete GLP-1 Food Guide: What to Eat (and Avoid) on Semaglutide and Tirzepatide",
  description: "Evidence-based nutrition guide for GLP-1 therapy. Best foods, protein targets, GI-friendly meals, foods to avoid, and meal frameworks for semaglutide and tirzepatide patients.",
  openGraph: {
    title: "The Complete GLP-1 Food Guide: What to Eat on Semaglutide and Tirzepatide",
    description: "Best foods, protein targets, and meal frameworks for GLP-1 patients. Minimize side effects and maximize weight loss results.",
    images: [{ url: "https://telehealthfx.com/assets/glp1-food-guide-featured.png", width: 1200, height: 630, alt: "GLP-1 Food Guide" }],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "MedicalWebPage",
    "description": metadata.description, "@id": "https://telehealthfx.com/blog/glp-1-food-guide-what-to-eat/#article", "headline": "The Complete GLP-1 Food Guide: What to Eat (and Avoid) on Semaglutide and Tirzepatide", "image": "https://telehealthfx.com/assets/glp1-food-guide-featured.png", "author": { "@type": "Person", "name": "Julian Mercer, M.S.", "url": "https://telehealthfx.com/about" }, "publisher": { "@type": "Organization", "name": "Telehealth FX", "logo": { "@type": "ImageObject", "url": "https://telehealthfx.com/assets/logo.png" } }, "mainEntityOfPage": { "@type": "WebPage", "@id": "https://telehealthfx.com/blog/glp-1-food-guide-what-to-eat/" } },
      { "@type": "FAQPage", "@id": "https://telehealthfx.com/blog/glp-1-food-guide-what-to-eat/#faq", "mainEntity": [
        { "@type": "Question", "name": "How many calories should I eat on semaglutide?", "acceptedAnswer": { "@type": "Answer", "text": "Most patients naturally consume 1,000–1,400 calories per day. Do not restrict below 1,000 calories. Focus on nutrient density." } },
        { "@type": "Question", "name": "Can I drink coffee on GLP-1 medication?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Black coffee is well-tolerated. Avoid sugary coffee drinks. Caffeine may amplify nausea during the first few weeks." } },
        { "@type": "Question", "name": "What supplements should I take on GLP-1?", "acceptedAnswer": { "@type": "Answer", "text": "A daily multivitamin, protein supplement, vitamin D3, magnesium, and omega-3s are commonly recommended." } }
      ]}
    ]
  };
  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BlogGLP1FoodGuide /></>);
}
