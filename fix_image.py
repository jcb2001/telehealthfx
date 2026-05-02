import os
import re

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
        continue
        
    with open(page_js_path, "r") as f:
        page_content = f.read()

    # Find the correct component
    component_file_name = None
    for f_name in os.listdir(components_dir):
        if f_name.endswith(".jsx") and slug in f_name:
            component_file_name = f_name
            break
            
    if not component_file_name:
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

    if component_file_name:
        comp_path = os.path.join(components_dir, component_file_name)
        with open(comp_path, "r") as f:
            comp_content = f.read()
            
        # extract all images
        images = re.findall(r'<img src="([^"]+)"', comp_content)
        featured_image = None
        for img in images:
            if "jm-profile" not in img:
                featured_image = "https://telehealthfx.com" + img
                break
                
        if featured_image:
            new_content = page_content.replace('"https://telehealthfx.com/assets/jm-profile.jpg"', f'"{featured_image}"')
            with open(page_js_path, "w") as f:
                f.write(new_content)
            print(f"Fixed image for {slug}: {featured_image}")

