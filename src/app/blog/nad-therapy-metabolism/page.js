import { BlogNadTherapy } from "../../../components/blog-nad-therapy.jsx";

export const metadata = {
  title: "NAD Therapy Metabolism: Reversing Cellular Aging | Telehealth FX",
  description: "Discover the truth about NAD therapy metabolism. Learn why subcutaneous injections outperform oral supplements for restoring mitochondrial energy and reversing cellular aging.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/nad-therapy-metabolism/#article",
        "headline": "NAD Therapy Metabolism: Reversing Cellular Aging",
        "description": "Discover the truth about NAD therapy metabolism. Learn why subcutaneous injections outperform oral supplements for restoring mitochondrial energy and reversing cellular aging.",
        "image": "https://telehealthfx.com/assets/nad-therapy-featured.png",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "url": "https://telehealthfx.com/about",
          "jobTitle": "Lead Bio-Systems Analyst"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Telehealth FX",
          "logo": {
            "@type": "ImageObject",
            "url": "https://telehealthfx.com/assets/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://telehealthfx.com/blog/nad-therapy-metabolism/"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://telehealthfx.com/blog/nad-therapy-metabolism/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does NAD+ therapy cause weight loss?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NAD+ is not a dedicated weight loss drug like Semaglutide. However, by repairing mitochondrial function, it heavily upregulates your baseline metabolic rate. Many patients report that as their cellular energy returns, they naturally engage in more physical activity, which leads to organic fat loss."
            }
          },
          {
            "@type": "Question",
            "name": "What does an NAD+ injection feel like?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unlike the sudden, jittery spike of caffeine, NAD+ therapy feels like a 'clean' restoration of your natural baseline. Patients typically report a lifting of brain fog, sustained physical stamina, and deeper, more restorative sleep within the first few weeks of therapy."
            }
          },
          {
            "@type": "Question",
            "name": "Is this the same as an IV drip?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "NAD+ IV drips are excellent, but they require sitting in a clinic for 2-4 hours and can cost upwards of $500 per session. Subcutaneous injections offer the same systemic bioavailability but can be self-administered at home in 30 seconds for a fraction of the cost, ensuring consistent, daily cellular optimization."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogNadTherapy />
    </>
  );
}
