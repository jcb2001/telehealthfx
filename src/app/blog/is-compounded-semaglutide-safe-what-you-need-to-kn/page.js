import { BlogIsCompoundedSemaglutideSafeWhatYouNeedToKn } from "../../../components/blog-is-compounded-semaglutide-safe-what-you-need-to-kn.jsx";

export const metadata = {
  title: "Is Compounded Semaglutide Safe? What You Need to Know",
  description: "A clinical review of the FDA regulations on compounding pharmacies. Understand the severe risks of unverified 'salt forms' and research peptides.",
  openGraph: {
    title: "Is Compounded Semaglutide Safe? What You Need to Know",
    description: "A clinical review of the FDA regulations on compounding pharmacies. Understand the severe risks of unverified 'salt forms' and research peptides.",
    images: [
      {
        url: "https://telehealthfx.com/assets/compounded_safety_featured.png",
        width: 1024,
        height: 1024,
        alt: "Compounded Semaglutide Safety",
      },
    ],
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": "https://telehealthfx.com/blog/is-compounded-semaglutide-safe-what-you-need-to-kn/#article",
        "headline": "Is Compounded Semaglutide Safe? What You Need to Know",
        "description": "A clinical review of the FDA regulations on compounding pharmacies. Understand the severe risks of unverified 'salt forms' and research peptides.",
        "image": "https://telehealthfx.com/assets/compounded_safety_featured.png",
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
          "@id": "https://telehealthfx.com/blog/is-compounded-semaglutide-safe-what-you-need-to-kn/"
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
      <BlogIsCompoundedSemaglutideSafeWhatYouNeedToKn />
    </>
  );
}
