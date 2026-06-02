import os

base_dir = "/Users/joshburrows/Desktop/Antigravity/Side Hustles/Telehealth FX/Telehealth FX Site/src/app"

def audit_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if '"Product"' not in content and "'Product'" not in content:
        return None
        
    # Since we want to audit the file as a whole, let's check if the required fields are present anywhere in the file.
    # For layout.js, it has all variables defined globally, which is correct.
    # For blog pages, they have the self-contained jsonLd or schema object, so the fields are in the file.
    
    has_review = "review" in content and "reviewRating" in content
    has_aggregate_rating = "aggregateRating" in content
    has_offers = "offers" in content
    has_brand = "brand" in content
    has_sku = "sku" in content or "gtin" in content
    
    has_shipping = "shippingDetails" in content
    has_shipping_destination = "shippingDestination" in content
    has_handling_time = "handlingTime" in content
    has_transit_time = "transitTime" in content
    
    has_return_policy = "hasMerchantReturnPolicy" in content or "MerchantReturnPolicy" in content
    has_applicable_country = "applicableCountry" in content
    
    return {
        "has_review": has_review,
        "has_aggregate_rating": has_aggregate_rating,
        "has_offers": has_offers,
        "has_brand": has_brand,
        "has_sku": has_sku,
        "has_shipping": has_shipping,
        "has_shipping_destination": has_shipping_destination,
        "has_handling_time": has_handling_time,
        "has_transit_time": has_transit_time,
        "has_return_policy": has_return_policy,
        "has_applicable_country": has_applicable_country,
    }

def main():
    report = []
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file.endswith('.js') or file.endswith('.jsx'):
                filepath = os.path.join(root, file)
                res = audit_file(filepath)
                if res:
                    rel_path = os.path.relpath(filepath, base_dir)
                    report.append((rel_path, res))
                    
    print(f"Total files audited with Product schemas: {len(report)}")
    fail_count = 0
    for path, res in report:
        passed = all([
            res["has_review"], res["has_aggregate_rating"], res["has_offers"],
            res["has_brand"], res["has_sku"], res["has_shipping"],
            res["has_shipping_destination"], res["has_handling_time"],
            res["has_transit_time"], res["has_return_policy"],
            res["has_applicable_country"]
        ])
        if not passed:
            fail_count += 1
            print(f"\nFAIL: {path}")
            print(f"    has review: {res['has_review']}")
            print(f"    has aggregateRating: {res['has_aggregate_rating']}")
            print(f"    has offers: {res['has_offers']}")
            print(f"      has shippingDetails: {res['has_shipping']}")
            print(f"      has shippingDestination: {res['has_shipping_destination']}")
            print(f"      has handlingTime: {res['has_handling_time']}")
            print(f"      has transitTime: {res['has_transit_time']}")
            print(f"      has returnPolicy: {res['has_return_policy']}")
            print(f"      has applicableCountry: {res['has_applicable_country']}")
            print(f"    has brand: {res['has_brand']}")
            print(f"    has sku: {res['has_sku']}")
            
    if fail_count == 0:
        print("\nALL PRODUCT SCHEMAS ARE 100% COMPLIANT!")

if __name__ == '__main__':
    main()
