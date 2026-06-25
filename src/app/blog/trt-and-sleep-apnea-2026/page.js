import { BlogTrtAndSleepApnea2026 } from '@/components/blog-trt-and-sleep-apnea-2026';

export const metadata = {
  title: "TRT and Sleep Apnea: Risk, Management, and Evidence | Telehealth FX",
  description: "Does TRT cause sleep apnea? Discover the modern clinical evidence, how weight loss on TRT can improve OSA, and safe management protocols.",
  alternates: {
    canonical: 'https://telehealthfx.com/blog/trt-and-sleep-apnea-2026/',
  },
};

export default function Page() {
  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "TRT and Sleep Apnea: Risk, Management, and Evidence",
  "description": "Does TRT cause sleep apnea? Discover the modern clinical evidence, how weight loss on TRT can improve OSA, and safe management protocols.",
  "publisher": {
    "@type": "Organization",
    "name": "Telehealth FX",
    "logo": {
      "@type": "ImageObject",
      "url": "https://telehealthfx.com/logo.png"
    }
  },
  "about": {
    "@type": "MedicalCondition",
    "name": "Hypogonadism"
  },
  "mainEntity": {
    "@type": "Product",
    "name": "Telehealth FX — TRT Program",
    "description": "Comprehensive, physician-managed testosterone replacement therapy including labs, medications, and ongoing clinical monitoring.",
    "image": "https://telehealthfx.com/assets/trt_sleep_apnea.png",
    "offers": {
      "@type": "Offer",
      "url": "https://go.telehealthfx.com/testosterone",
      "priceCurrency": "USD",
      "price": "79.00",
      "availability": "https://schema.org/InStock",
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
    },
    "sku": "TRT-PROG",
    "brand": {
      "@type": "Brand",
      "name": "Telehealth FX"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "1542",
      "reviewCount": "1542"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Verified Patient"
        },
        "datePublished": "2026-05-14",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5",
          "worstRating": "1"
        },
        "reviewBody": "Telehealth FX provided an incredibly seamless experience with outstanding clinical oversight."
      }
    ]
  }
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogTrtAndSleepApnea2026 />
    </>
  );
}
