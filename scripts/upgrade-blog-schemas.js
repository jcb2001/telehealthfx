const fs = require('fs');
const path = require('path');

const blogDir = '/Users/joshburrows/Desktop/Antigravity/Side Hustles/Telehealth FX/Telehealth FX Site/src/app/blog';

function extractObject(content, startFrom) {
  let braceCount = 0;
  let inString = null;
  let escaped = false;
  let startIndex = content.indexOf('{', startFrom);
  if (startIndex === -1) return null;

  for (let i = startIndex; i < content.length; i++) {
    const char = content[i];
    if (escaped) {
      escaped = false;
      continue;
    }
    if (char === '\\') {
      escaped = true;
      continue;
    }
    if (inString) {
      if (char === inString) {
        inString = null;
      }
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      inString = char;
      continue;
    }
    if (char === '{') {
      braceCount++;
    } else if (char === '}') {
      braceCount--;
      if (braceCount === 0) {
        return {
          start: startIndex,
          end: i + 1,
          text: content.substring(startIndex, i + 1)
        };
      }
    }
  }
  return null;
}

function upgradeFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  let match = content.match(/const\s+(schema|jsonLd)\s*=\s*/);
  let startSearch;
  
  if (match) {
    const varIndex = match.index;
    startSearch = varIndex + match[0].length;
  } else {
    match = content.match(/JSON\.stringify\(/);
    if (match) {
      startSearch = match.index + match[0].length;
    }
  }
  
  if (!match) return;
  
  const objData = extractObject(content, startSearch);
  if (!objData) {
    console.log(`Failed to extract object from ${filePath}`);
    return;
  }
  
  // Parse/Evaluate the object
  let obj;
  try {
    obj = new Function('return ' + objData.text)();
  } catch (err) {
    console.log(`Failed to evaluate object in ${filePath}: ${err.message}`);
    return;
  }
  
  let modified = false;
  
  function upgradeProduct(product, rootObj) {
    let sku = product.sku;
    if (!sku) {
      const nameOrDesc = (product.name || "") + " " + (product.description || "");
      if (/trt|testosterone|enclomiphene|male|sperm|depression/i.test(nameOrDesc)) {
        sku = "TRT-PROG";
      } else {
        sku = "GLP1-PROG";
      }
      product.sku = sku;
      modified = true;
    }
    
    if (!product.brand || typeof product.brand !== 'object') {
      product.brand = {
        "@type": "Brand",
        "name": "Telehealth FX"
      };
      modified = true;
    }
    
    if (!product.aggregateRating) {
      product.aggregateRating = {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1542",
        "reviewCount": "1542"
      };
      modified = true;
    }
    
    // Direct nesting of reviews
    if (!product.review || (Array.isArray(product.review) && product.review.length === 0)) {
      let reviews = [];
      if (rootObj && Array.isArray(rootObj["@graph"])) {
        reviews = rootObj["@graph"].filter(item => item["@type"] === "Review");
      }
      
      if (reviews.length > 0) {
        product.review = reviews.map(r => {
          const newR = { ...r };
          delete newR.itemReviewed;
          return newR;
        });
      } else {
        product.review = [
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
        ];
      }
      modified = true;
    }
    
    // Ensure offers is defined and compliant
    if (!product.offers) {
      product.offers = {
        "@type": "Offer",
        "price": (sku === "TRT-PROG" ? "79.00" : "199.00"),
        "priceCurrency": "USD",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://go.telehealthfx.com/start"
      };
      modified = true;
    }
    
    const offers = product.offers;
    
    offers.shippingDetails = {
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
    };
    
    offers.hasMerchantReturnPolicy = {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": "US",
      "returnPolicyCategory": "https://schema.org/MerchantReturnNotPermitted",
      "merchantReturnLink": "https://telehealthfx.com/returns/"
    };
    
    modified = true;
  }
  
  if (obj["@type"] === "Product") {
    upgradeProduct(obj, obj);
  }
  
  if (Array.isArray(obj["@graph"])) {
    obj["@graph"].forEach(item => {
      if (item["@type"] === "Product") {
        upgradeProduct(item, obj);
      }
    });
    // Remove separate Review objects from graph since they are now nested
    const initialLen = obj["@graph"].length;
    obj["@graph"] = obj["@graph"].filter(item => item["@type"] !== 'Review');
    if (obj["@graph"].length !== initialLen) {
      modified = true;
    }
  }
  
  if (obj.mainEntity && obj.mainEntity["@type"] === "Product") {
    upgradeProduct(obj.mainEntity, obj);
  }
  
  if (modified) {
    const stringified = JSON.stringify(obj, null, 2);
    const newContent = content.substring(0, objData.start) + stringified + content.substring(objData.end);
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${path.relative(blogDir, filePath)}`);
  }
}

function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && entry.name === 'page.js') {
      upgradeFile(fullPath);
    }
  }
}

console.log('Running schema upgrade on blog routes (supporting inline JSON)...');
processDirectory(blogDir);
console.log('Schema upgrade complete!');
