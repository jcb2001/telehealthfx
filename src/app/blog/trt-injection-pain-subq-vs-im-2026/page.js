import { BlogTrtInjectionPainSubqVsIm2026 } from '@/components/blog-trt-injection-pain-subq-vs-im-2026';

export const metadata = {
  title: "TRT Needle Anxiety: Pain-Free SubQ vs. IM Injections | Telehealth FX",
  description: "Overcome needle anxiety with modern clinical TRT protocols. Learn why Subcutaneous (SubQ) micro-injections are replacing deep Intramuscular (IM) shots.",
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "TRT Needle Anxiety: Pain-Free SubQ vs. IM Injections",
    "description": "Overcome needle anxiety with modern clinical TRT protocols. Learn why Subcutaneous (SubQ) micro-injections are replacing deep Intramuscular (IM) shots.",
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
      "image": "https://telehealthfx.com/assets/trt_injection_pain.png",
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
          "deliveryTime": {
            "@type": "ShippingDeliveryTime",
            "businessDays": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
            }
          }
        },
        "hasMerchantReturnPolicy": {
          "@type": "MerchantReturnPolicy",
          "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
          "merchantReturnLink": "https://telehealthfx.com/terms"
        }
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogTrtInjectionPainSubqVsIm2026 />
    </>
  );
}
