import os
import re

components_dir = "/Users/joshburrows/Desktop/Antigravity/Side Hustles/Telehealth FX/Telehealth FX Site/src/components"

def analyze_medicine_components():
    for file in sorted(os.listdir(components_dir)):
        if file.startswith("medicine-") and file.endswith(".jsx"):
            filepath = os.path.join(components_dir, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find the schema declaration
            schema_match = re.search(r'const schema\s*=\s*(\{[\s\S]+?\});', content)
            if schema_match:
                schema_text = schema_match.group(1)
                has_product = '"Product"' in schema_text or "'Product'" in schema_text
                has_offer = '"Offer"' in schema_text or "'Offer'" in schema_text
                print(f"{file}: has_product={has_product}, has_offer={has_offer}")
            else:
                print(f"{file}: No schema found")

if __name__ == '__main__':
    analyze_medicine_components()
