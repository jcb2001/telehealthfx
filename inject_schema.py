import os
import re
import json

base_dir = "/Users/joshburrows/Desktop/Antigravity/Side Hustles/Telehealth FX/Telehealth FX Site/src"
blog_dir = os.path.join(base_dir, "app/blog")
components_dir = os.path.join(base_dir, "components")

slugs = [
    "72-hour-berberine-patch",
    "berberine-oral-bioavailability",
    "berberine-pcos-weight-loss",
    "berberine-transdermal-patch",
    "berberine-vs-ozempic",
    "dihydroberberine-vs-berberine",
    "ozempic-insulin-resistance",
    "transdermal-drug-delivery-systems",
    "transdermal-vs-oral",
    "wegovy-fda-label",
    "what-is-a-glp-1-medication"
]

for slug in slugs:
    page_js_path = os.path.join(blog_dir, slug, "page.js")
    
    if not os.path.exists(page_js_path):
        print(f"Skipping {slug}, page.js not found.")
        continue
        
    with open(page_js_path, "r") as f:
        page_content = f.read()
        
    if "application/ld+json" in page_content:
        print(f"Skipping {slug}, schema already injected.")
        continue

    # Extract component name
    component_match = re.search(r'import { ([^}]+) } from', page_content)
    if not component_match:
        print(f"Could not find component in {slug}")
        continue
    component_name = component_match.group(1).strip()
    
    # Extract metadata
    title_match = re.search(r'title:\s*"([^"]+)"', page_content)
    desc_match = re.search(r'description:\s*"([^"]+)"', page_content)
    title = title_match.group(1) if title_match else "Telehealth FX Blog"
    desc = desc_match.group(1) if desc_match else ""
    
    # Read component file to find FAQs and Image
    component_file_name = None
    for f_name in os.listdir(components_dir):
        if f_name.endswith(".jsx") and slug in f_name:
            component_file_name = f_name
            break
            
    if not component_file_name:
        # fallback exact match mapping
        if slug == "transdermal-vs-oral":
            component_file_name = "blog-transdermal-vs-oral.jsx"
        elif slug == "berberine-vs-ozempic":
            component_file_name = "blog-berberine-vs-ozempic.jsx"
        elif slug == "what-is-a-glp-1-medication":
            component_file_name = "blog-what-is-glp1.jsx"
        elif slug == "ozempic-insulin-resistance":
            component_file_name = "blog-ozempic-insulin-resistance.jsx"
        elif slug == "wegovy-fda-label":
            component_file_name = "blog-wegovy-fda-label.jsx"
        elif slug == "berberine-pcos-weight-loss":
            component_file_name = "blog-berberine-pcos.jsx"
        elif slug == "berberine-transdermal-patch":
            component_file_name = "blog-berberine-transdermal-patch.jsx"
        elif slug == "berberine-oral-bioavailability":
            component_file_name = "blog-berberine-oral-bioavailability.jsx"
        elif slug == "dihydroberberine-vs-berberine":
            component_file_name = "blog-dihydroberberine.jsx"
        elif slug == "72-hour-berberine-patch":
            component_file_name = "blog-72-hour-berberine.jsx"
        elif slug == "transdermal-drug-delivery-systems":
            component_file_name = "blog-transdermal-delivery.jsx"
            
    if not component_file_name:
        print(f"Could not map component file for {slug}")
        continue
        
    component_path = os.path.join(components_dir, component_file_name)
    with open(component_path, "r") as f:
        comp_content = f.read()
        
    # Extract image
    img_match = re.search(r'<img src="([^"]+)"', comp_content)
    image_url = "https://telehealthfx.com" + img_match.group(1) if img_match else "https://telehealthfx.com/assets/logo.png"
    
    # Extract FAQs
    faqs = []
    # Match <h4 ...>Question?</h4>\s*<p ...>Answer</p>
    matches = re.finditer(r'<h4[^>]*>([^<]+)</h4>\s*<p[^>]*>(.*?)</p>', comp_content, re.DOTALL)
    for m in matches:
        question = m.group(1).strip()
        answer = m.group(2).strip()
        answer = re.sub(r'<[^>]+>', '', answer) # strip HTML tags from answer
        if question.endswith('?'):
            faqs.append({
                "@type": "Question",
                "name": question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": answer
                }
            })
            
    # Build schema
    schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "@id": f"https://telehealthfx.com/blog/{slug}/#article",
                "headline": title.split(" | ")[0],
                "description": desc,
                "image": image_url,
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
                    "@id": f"https://telehealthfx.com/blog/{slug}/"
                }
            }
        ]
    }
    
    if faqs:
        schema["@graph"].append({
            "@type": "FAQPage",
            "@id": f"https://telehealthfx.com/blog/{slug}/#faq",
            "mainEntity": faqs
        })
        
    schema_json = json.dumps(schema, indent=2)
    
    # Replace default export
    new_export = f"""export default function Page() {{
  const jsonLd = {schema_json};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify(jsonLd) }}}}
      />
      <{component_name} />
    </>
  );
}}"""

    new_page_content = re.sub(r'export default function Page\(\) \{[\s\S]*', new_export, page_content)
    
    with open(page_js_path, "w") as f:
        f.write(new_page_content)
        
    print(f"Successfully injected schema into {slug} with {len(faqs)} FAQs.")

