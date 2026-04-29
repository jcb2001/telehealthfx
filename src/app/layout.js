import "./globals.css";
import { Nav } from "../components/hero.jsx";
import { Footer } from "../components/sections-3.jsx";

export const metadata = {
  title: "Telehealth FX — Clinical weight loss, delivered.",
  description: "Clinical weight loss, delivered to your door. Get the GLP-1 medications you need without the hassle.",
};

export default function RootLayout({ children }) {
  const masterSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalOrganization", "Organization"],
        "@id": "https://telehealthfx.com/#organization",
        "name": "Telehealth FX",
        "url": "https://telehealthfx.com",
        "logo": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "image": "https://telehealthfx.com/assets/Site%20Icon-modified.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support"
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "United States"
          }
        ],
        "medicalSpecialty": [
          "https://en.wikipedia.org/wiki/Weight_loss",
          "https://en.wikipedia.org/wiki/Bariatrics",
          "https://en.wikipedia.org/wiki/Telehealth"
        ],
        "alternateName": [
          "TelehealthFX",
          "Telehealth FX Online Clinic",
          "GLP-1 Telehealth Provider",
          "Weight Loss Clinic Online"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://telehealthfx.com/#website",
        "url": "https://telehealthfx.com",
        "name": "Telehealth FX",
        "publisher": {
          "@id": "https://telehealthfx.com/#organization"
        }
      },
      {
        "@type": "Person",
        "@id": "https://telehealthfx.com/#julianmercer",
        "name": "Julian Mercer",
        "jobTitle": "Lead Bio-Systems Analyst",
        "worksFor": {
          "@id": "https://telehealthfx.com/#organization"
        },
        "description": "Lead Bio-Systems Analyst at Telehealth FX specializing in metabolic data modeling and pharmacokinetic protocols."
      },
      {
        "@type": "MedicalService",
        "@id": "https://telehealthfx.com/#service",
        "name": "Telehealth Weight Loss & GLP-1 Program - Telehealth FX",
        "provider": {
          "@id": "https://telehealthfx.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "serviceType": "Medical Weight Management"
      },
      {
        "@type": "Product",
        "@id": "https://telehealthfx.com/#product",
        "name": "Clinical Weight Loss Program & Medication",
        "brand": {
          "@id": "https://telehealthfx.com/#organization"
        },
        "description": "Comprehensive metabolic health program including clinician consults and compounded GLP-1 medications.",
        "hasVariant": [
          {
            "@type": "Product",
            "name": "Compounded Semaglutide Program"
          },
          {
            "@type": "Product",
            "name": "Compounded Tirzepatide Program"
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://telehealthfx.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://telehealthfx.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Metabolic Health Articles",
            "item": "https://telehealthfx.com/blog"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/png" href="/favicon.png?v=3" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(masterSchema) }} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
