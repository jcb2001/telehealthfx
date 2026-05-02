import { BlogYourFirst90DaysOnGlp1WeekByWeekWhatToE } from "../../../components/blog-your-first-90-days-on-glp-1-week-by-week-what-to-e.jsx";

export const metadata = {
  title: "Your First 90 Days on GLP-1: Week-by-Week What to Expect (2026 Clinical Guide)",
  description: "Comprehensive clinical breakdown of your first 90 days on glp-1: week-by-week what to expect (2026 clinical guide).",
  openGraph: {
    title: "Your First 90 Days on GLP-1: Week-by-Week What to Expect (2026 Clinical Guide)",
    description: "Comprehensive clinical breakdown of your first 90 days on glp-1: week-by-week what to expect (2026 clinical guide).",
    images: [
      {
        url: "https://telehealthfx.com/assets/wegovy-label-featured.png",
        width: 1200,
        height: 630,
        alt: "Your First 90 Days on GLP-1: Week-by-Week What to Expect (2026 Clinical Guide)",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://telehealthfx.com/blog/your-first-90-days-on-glp-1-week-by-week-what-to-e/#article",
        "headline": "Your First 90 Days on GLP-1: Week-by-Week What to Expect (2026 Clinical Guide)",
        "description": "Comprehensive clinical breakdown of your first 90 days on glp-1: week-by-week what to expect (2026 clinical guide).",
        "image": "https://telehealthfx.com/assets/wegovy-label-featured.png",
        "author": {
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
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
          "@id": "https://telehealthfx.com/blog/your-first-90-days-on-glp-1-week-by-week-what-to-e/"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogYourFirst90DaysOnGlp1WeekByWeekWhatToE />
    </>
  );
}
