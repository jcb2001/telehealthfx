import os
import re

blog_dir = "/Users/joshburrows/Desktop/Antigravity/Side Hustles/Telehealth FX/Telehealth FX Site/src/app/blog"

def analyze_schemas():
    stats = {}
    for root, dirs, files in os.walk(blog_dir):
        for file in files:
            if file.name == 'page.js' if hasattr(file, 'name') else file == 'page.js':
                filepath = os.path.join(root, file)
                rel_path = os.path.relpath(filepath, blog_dir)
                
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                has_product = '"Product"' in content or "'Product'" in content
                if not has_product:
                    stats[rel_path] = "No Product schema"
                    continue
                
                # Check for "mainEntity" vs "@graph" style
                if "mainEntity" in content and '"Product"' in content:
                    # Look at fields
                    has_shipping = "shippingDetails" in content
                    has_return = "hasMerchantReturnPolicy" in content
                    has_reviews = "review" in content and "reviewRating" in content
                    stats[rel_path] = f"mainEntity style | has_shipping: {has_shipping} | has_return: {has_return} | has_reviews: {has_reviews}"
                elif "@graph" in content:
                    has_offers = "offers" in content
                    has_shipping = "shippingDetails" in content
                    has_return = "hasMerchantReturnPolicy" in content
                    has_reviews = "review" in content and "reviewRating" in content
                    stats[rel_path] = f"@graph style | has_offers: {has_offers} | has_shipping: {has_shipping} | has_return: {has_return} | has_reviews: {has_reviews}"
                else:
                    stats[rel_path] = "Other Product style"
                    
    for path, stat in sorted(stats.items()):
        print(f"{path}: {stat}")

if __name__ == '__main__':
    analyze_schemas()
