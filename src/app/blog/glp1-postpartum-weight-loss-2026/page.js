import { BlogGlp1PostpartumWeightLoss2026 } from '../../../components/glp1-postpartum-weight-loss-2026';

export const metadata = {
  title: "GLP-1s for Postpartum Weight Loss: Timelines and Safety",
  description: "When is it safe to start a GLP-1 after giving birth? A guide to postpartum metabolic recovery and medication safety.",
};

export default function Page() {
  const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": "https://telehealthfx.com/blog/glp1-postpartum-weight-loss-2026/#webpage",
      "url": "https://telehealthfx.com/blog/glp1-postpartum-weight-loss-2026/",
      "name": "GLP-1s for Postpartum Weight Loss: Timelines and Safety",
      "description": "When is it safe to start a GLP-1 after giving birth? A guide to postpartum metabolic recovery and medication safety.",
      "publisher": {
        "@id": "https://telehealthfx.com/#organization"
      },
      "inLanguage": "en-US",
      "audience": {
        "@type": "MedicalAudience",
        "audienceType": "Patients"
      }
    },
    {
      "@type": "Article",
      "@id": "https://telehealthfx.com/blog/glp1-postpartum-weight-loss-2026/#article",
      "isPartOf": {
        "@id": "https://telehealthfx.com/blog/glp1-postpartum-weight-loss-2026/#webpage"
      },
      "headline": "GLP-1s for Postpartum Weight Loss: Timelines and Safety",
      "datePublished": "2026-05-14T11:14:03.715Z",
      "dateModified": "2026-05-14T11:14:03.715Z",
      "mainEntityOfPage": {
        "@id": "https://telehealthfx.com/blog/glp1-postpartum-weight-loss-2026/#webpage"
      },
      "author": {
        "@type": "Organization",
        "name": "Telehealth FX Clinical Team",
        "url": "https://telehealthfx.com/"
      },
      "image": "https://telehealthfx.com/assets/glp1-postpartum-weight-loss-2026-featured.png"
    },
    {
      "@type": "FAQPage",
      "@id": "https://telehealthfx.com/blog/glp1-postpartum-weight-loss-2026/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do GLP-1 medications affect this condition?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "GLP-1 medications target the underlying metabolic pathways, reducing inflammation and improving cellular insulin sensitivity."
          }
        }
      ]
    },
    {
      "@type": "Product",
      "@id": "https://telehealthfx.com/blog/glp1-postpartum-weight-loss-2026/#product",
      "name": "Telehealth FX Clinical Weight Loss Program",
      "description": "Comprehensive medical weight loss protocol utilizing compounded GLP-1 medications with ongoing clinical support.",
      "brand": {
        "@type": "Brand",
        "name": "Telehealth FX"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "1542"
      },
      "sku": "GLP1-PROG",
      "review": [
        {
          "@type": "Review",
          "@id": "https://telehealthfx.com/blog/glp1-postpartum-weight-loss-2026/#review",
          "author": {
            "@type": "Person",
            "name": "Verified Patient"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "Telehealth FX provided an incredibly seamless experience with outstanding clinical oversight."
        }
      ],
      "offers": {
        "@type": "Offer",
        "price": "199.00",
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://go.telehealthfx.com/start",
        "shippingDetails": {
          "@type": "OfferShippingDetails",
          "shippingRate": {
            "@type": "MonetaryAmount",
            "value": "0.00",
            "currency": "USD"
          },
          "shippingDestination": {
            "@type": "DefinedRegion",
            "addressCountry": "US"
          },
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "handlingTime": {
              "@type": "QuantitativeValue",
              "minValue": 0,
              "maxValue": 1,
              "unitCode": "d"
            },
            "transitTime": {
              "@type": "QuantitativeValue",
              "minValue": 1,
              "maxValue": 3,
              "unitCode": "d"
            }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "applicableCountry": "US",
          "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
          "merchantReturnLink": "https://telehealthfx.com/returns/"
        }
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://telehealthfx.com/blog/glp1-postpartum-weight-loss-2026/#breadcrumb",
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
          "name": "Blog",
          "item": "https://telehealthfx.com/blog/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "GLP-1s for Postpartum Weight Loss",
          "item": "https://telehealthfx.com/blog/glp1-postpartum-weight-loss-2026/"
        }
      ]
    },
    {
      "@type": "MedicalOrganization",
      "@id": "https://telehealthfx.com/#organization",
      "name": "Telehealth FX",
      "url": "https://telehealthfx.com/",
      "logo": "https://telehealthfx.com/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English"
      }
    }
  ]
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogGlp1PostpartumWeightLoss2026 />
    </>
  );
}
