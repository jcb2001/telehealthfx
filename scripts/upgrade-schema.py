#!/usr/bin/env python3
"""
Upgrade all location page.js files with comprehensive JSON-LD schema:
- MedicalClinic
- MedicalWebPage
- FAQPage (extracted from component)
- BreadcrumbList
- Organization
- Service / Offer
"""

import os
import re
import json
from pathlib import Path

SITE_ROOT = Path(__file__).parent.parent
COMPONENTS_DIR = SITE_ROOT / "src" / "components"
LOCATIONS_DIR = SITE_ROOT / "src" / "app" / "locations"

def extract_component_data(slug):
    """Parse a location component file to extract city, state, FAQs."""
    comp_file = COMPONENTS_DIR / f"location-{slug}.jsx"
    if not comp_file.exists():
        return None

    content = comp_file.read_text()

    # Extract component export name
    export_match = re.search(r'export function (Location\w+)', content)
    if not export_match:
        return None
    component_name = export_match.group(1)

    # Extract stateName
    state_match = re.search(r'stateName="([^"]+)"', content)
    state_name = state_match.group(1) if state_match else "Unknown"

    # Extract cityName
    city_match = re.search(r'cityName="([^"]+)"', content)
    city_name = city_match.group(1) if city_match else slug.replace("-", " ").title()

    # Extract FAQ questions and answers
    faqs = []
    # Match patterns like {q:"...",a:"..."}
    faq_pattern = re.findall(r'\{q:"([^"]+)",a:"([^"]+)"\}', content)
    if not faq_pattern:
        # Try single quotes or escaped
        faq_pattern = re.findall(r"\{q:\"([^\"]+)\",a:\"([^\"]+)\"\}", content)
    if not faq_pattern:
        # Try with spaces around colons
        faq_pattern = re.findall(r'\{q:\s*"([^"]+)"\s*,\s*a:\s*"([^"]+)"\s*\}', content)

    for q, a in faq_pattern:
        # Strip any HTML from answers for schema
        clean_a = re.sub(r'<[^>]+>', '', a)
        faqs.append({"question": q, "answer": clean_a})

    # Extract archetype name for description enrichment
    archetype_match = re.search(r'archetype="([^"]+)"', content)
    archetype = archetype_match.group(1) if archetype_match else None

    # Extract coordinates
    coords_match = re.search(r'coordinates="([^"]+)"', content)
    coordinates = coords_match.group(1) if coords_match else None

    # Parse lat/lng from coordinates string like "35.9940° N, 78.8986° W"
    lat, lng = None, None
    if coordinates:
        coord_parts = re.findall(r'([\d.]+)°\s*([NSEW])', coordinates)
        if len(coord_parts) >= 2:
            lat = float(coord_parts[0][0])
            if coord_parts[0][1] == 'S':
                lat = -lat
            lng = float(coord_parts[1][0])
            if coord_parts[1][1] == 'W':
                lng = -lng

    # Extract counties
    counties_match = re.search(r'counties="([^"]+)"', content)
    counties = counties_match.group(1) if counties_match else None

    return {
        "slug": slug,
        "component_name": component_name,
        "city_name": city_name,
        "state_name": state_name,
        "faqs": faqs,
        "archetype": archetype,
        "lat": lat,
        "lng": lng,
        "counties": counties,
    }


def generate_page_js(data):
    """Generate a comprehensive page.js with full schema graph."""

    slug = data["slug"]
    component = data["component_name"]
    city = data["city_name"]
    state = data["state_name"]
    faqs = data["faqs"]
    lat = data["lat"]
    lng = data["lng"]
    page_fn = component.replace("Location", "")

    url = f"https://telehealthfx.com/locations/{slug}"

    # Build the JSON-LD graph
    graph = []

    # 1. Organization (parent)
    graph.append({
        "@type": "Organization",
        "@id": "https://telehealthfx.com/#organization",
        "name": "Telehealth FX",
        "url": "https://telehealthfx.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://telehealthfx.com/logo.png"
        },
        "sameAs": []
    })

    # 2. WebSite
    graph.append({
        "@type": "WebSite",
        "@id": "https://telehealthfx.com/#website",
        "url": "https://telehealthfx.com",
        "name": "Telehealth FX",
        "publisher": {"@id": "https://telehealthfx.com/#organization"}
    })

    # 3. BreadcrumbList
    graph.append({
        "@type": "BreadcrumbList",
        "@id": f"{url}#breadcrumb",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://telehealthfx.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Locations",
                "item": "https://telehealthfx.com/locations"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": city,
                "item": url
            }
        ]
    })

    # 4. MedicalWebPage
    graph.append({
        "@type": "MedicalWebPage",
        "@id": f"{url}#webpage",
        "url": url,
        "name": f"GLP-1 Weight Loss in {city} | Telehealth FX",
        "description": f"FDA-compliant compounded Semaglutide and Tirzepatide prescribed by {state}-licensed physicians in {city}. From $146/mo with overnight delivery.",
        "isPartOf": {"@id": "https://telehealthfx.com/#website"},
        "breadcrumb": {"@id": f"{url}#breadcrumb"},
        "inLanguage": "en-US",
        "medicalAudience": {
            "@type": "MedicalAudience",
            "audienceType": "Patient"
        },
        "lastReviewed": "2026-05-01",
        "reviewedBy": {
            "@type": "Organization",
            "name": "Telehealth FX Clinical Team"
        }
    })

    # 5. MedicalClinic
    clinic = {
        "@type": "MedicalClinic",
        "@id": f"{url}#clinic",
        "name": f"Telehealth FX - {city}",
        "url": url,
        "telephone": "+1-800-TELEHEALTH",
        "areaServed": {
            "@type": "City",
            "name": city,
            "containedInPlace": {
                "@type": "State",
                "name": state
            }
        },
        "medicalSpecialty": "Endocrine",
        "isAcceptingNewPatients": True,
        "availableService": {
            "@type": "MedicalTherapy",
            "name": "GLP-1 Receptor Agonist Therapy",
            "alternateName": "Compounded Semaglutide / Tirzepatide",
            "medicineSystem": "WesternConventional",
            "relevantSpecialty": "Endocrine"
        },
        "currenciesAccepted": "USD",
        "paymentAccepted": "Credit Card, HSA, FSA",
        "priceRange": "$146-$349/mo"
    }

    if lat and lng:
        clinic["geo"] = {
            "@type": "GeoCoordinates",
            "latitude": lat,
            "longitude": lng
        }

    graph.append(clinic)

    # 6. Service with Offer
    graph.append({
        "@type": "Service",
        "@id": f"{url}#service",
        "name": f"GLP-1 Weight Loss Program - {city}",
        "description": f"Clinical telehealth weight loss program delivering compounded Semaglutide and Tirzepatide to {city}, {state} residents. Includes physician evaluation, prescription, and cold-shipped medication.",
        "provider": {"@id": f"{url}#clinic"},
        "areaServed": {
            "@type": "City",
            "name": city,
            "containedInPlace": {"@type": "State", "name": state}
        },
        "serviceType": "Telehealth Weight Management",
        "offers": {
            "@type": "Offer",
            "price": "146",
            "priceCurrency": "USD",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://go.telehealthfx.com/start",
            "description": "Monthly compounded GLP-1 program with physician oversight"
        }
    })

    # 7. FAQPage (if FAQs extracted)
    if faqs:
        faq_entities = []
        for faq in faqs:
            faq_entities.append({
                "@type": "Question",
                "name": faq["question"],
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq["answer"]
                }
            })
        graph.append({
            "@type": "FAQPage",
            "@id": f"{url}#faq",
            "mainEntity": faq_entities
        })

    json_ld = {"@context": "https://schema.org", "@graph": graph}

    # Escape for JS template
    json_str = json.dumps(json_ld, ensure_ascii=False)
    # Escape backticks and ${} for JS template literal safety
    json_str_escaped = json_str.replace("\\", "\\\\").replace("`", "\\`")

    # Build the page.js content
    page_content = f'''import {{ {component} }} from "../../../components/location-{slug}";
export const metadata = {{
  title: "GLP-1 Weight Loss in {city} | Telehealth FX",
  description: "FDA-compliant compounded Semaglutide prescribed by {state}-licensed physicians in {city}. From $146/mo with overnight cold-pack delivery.",
  openGraph: {{
    title: "GLP-1 Weight Loss in {city} | Telehealth FX",
    description: "Clinical GLP-1 telehealth for {city}, {state} residents. {state}-licensed physicians. From $146/mo.",
    url: "{url}",
    siteName: "Telehealth FX",
    type: "website"
  }},
  alternates: {{
    canonical: "{url}"
  }}
}};
export default function {page_fn}Page() {{
  const jsonLd = {json_str};
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{{{ __html: JSON.stringify(jsonLd) }}}} />
      <{component} />
    </>
  );
}}
'''
    return page_content


def main():
    # Get all location slugs
    slugs = sorted([
        d.name for d in LOCATIONS_DIR.iterdir()
        if d.is_dir() and (d / "page.js").exists()
    ])

    print(f"Found {len(slugs)} location pages to upgrade.")

    success = 0
    failed = []

    for slug in slugs:
        data = extract_component_data(slug)
        if not data:
            print(f"  SKIP: {slug} (no component or export found)")
            failed.append(slug)
            continue

        page_content = generate_page_js(data)
        page_file = LOCATIONS_DIR / slug / "page.js"
        page_file.write_text(page_content)

        faq_count = len(data["faqs"])
        geo = "✓" if data["lat"] else "✗"
        print(f"  ✓ {slug}: {data['city_name']}, {data['state_name']} | FAQs: {faq_count} | Geo: {geo}")
        success += 1

    print(f"\nDone! Upgraded {success}/{len(slugs)} pages.")
    if failed:
        print(f"Failed: {', '.join(failed)}")

    # Schema count summary
    print(f"\nSchema types per page:")
    print(f"  1. Organization")
    print(f"  2. WebSite")
    print(f"  3. BreadcrumbList")
    print(f"  4. MedicalWebPage")
    print(f"  5. MedicalClinic (with GeoCoordinates + MedicalTherapy)")
    print(f"  6. Service (with Offer @ $146)")
    print(f"  7. FAQPage (city-specific Q&As)")
    print(f"  Total: 7 schema types per page")


if __name__ == "__main__":
    main()
