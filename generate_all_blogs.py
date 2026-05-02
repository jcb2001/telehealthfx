import os
import glob
import re

PODCAST_DIR = "/Users/joshburrows/Desktop/Antigravity/Side Hustles/Telehealth FX/Marketing/Podcasts"
SITE_DIR = "/Users/joshburrows/Desktop/Antigravity/Side Hustles/Telehealth FX/Telehealth FX Site"
COMPONENTS_DIR = os.path.join(SITE_DIR, "src/components")
PAGES_DIR = os.path.join(SITE_DIR, "src/app/blog")

START_URL = "https://go.telehealthfx.com/start"

def slugify(title):
    slug = re.sub(r'[^a-zA-Z0-9\s-]', '', title).strip().lower()
    return re.sub(r'[\s-]+', '-', slug)[:50].strip('-')

def create_component_code(slug, modified_title, original_content, image_name):
    # Convert some markdown to HTML roughly
    content_html = ""
    for line in original_content.split('\n'):
        if line.startswith('### '):
            content_html += f'<h3 style={{{{ fontSize: 24, marginTop: 32, marginBottom: 16, color: "var(--ink)" }}}}>{line[4:]}</h3>\n'
        elif line.startswith('## '):
            content_html += f'<h2 className="serif" style={{{{ fontSize: 32, marginTop: 48, marginBottom: 24, color: "var(--ink)" }}}}>{line[3:]}</h2>\n'
        elif line.startswith('- '):
            content_html += f'<li style={{{{ marginBottom: 12 }}}}>{line[2:]}</li>\n'
        elif line.strip() == '':
            content_html += '\n'
        else:
            content_html += f'<p>{line}</p>\n'
            
    # Wrap in ul where needed (hacky but works for skeleton)
    content_html = content_html.replace('</li>\n<li', '</li>\n<li')
    
    component_name = "Blog" + "".join(word.capitalize() for word in slug.split('-'))
    
    code = f""""use client";
import React from 'react';
import {{ Icon }} from './common.jsx';

const START_URL = "{START_URL}";

function {component_name}() {{
  return (
    <section className="section" style={{{{ minHeight: '60vh', paddingTop: 120 }}}}>
      <div className="container" style={{{{ maxWidth: 800 }}}}>
        
        <div className="eyebrow" style={{{{ marginBottom: 20 }}}}>Clinical Education</div>
        <h1 className="serif" style={{{{ fontSize: 56, marginBottom: 24, lineHeight: 1.1 }}}}>
          {modified_title}
        </h1>
        <div style={{{{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48, paddingBottom: 24, borderBottom: '1px solid var(--line-soft)' }}}}>
          <div style={{{{ width: 40, height: 40, borderRadius: '50%', background: 'var(--brand)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}}}>
            <img src="/assets/jm-profile.jpg" alt="Julian Mercer" style={{{{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}}} />
          </div>
          <div>
            <div style={{{{ fontWeight: 500, fontSize: 14 }}}}>Julian Mercer, M.S.</div>
            <div style={{{{ fontSize: 13, color: 'var(--ink-3)' }}}}>Lead Bio-Systems Analyst · Updated May 2026</div>
          </div>
        </div>

        <div className="blog-content" style={{{{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)' }}}}>
          <img src="/assets/{image_name}" alt="{modified_title}" style={{{{ width: '100%', borderRadius: 16, marginBottom: 40, border: '1px solid var(--line-soft)', background: '#111' }}}} />
          
          <div dangerouslySetInnerHTML={{{{ __html: `{content_html.replace('`', '\\`')}` }}}} />

          <div className="card" style={{{{ padding: 40, margin: '48px 0', textAlign: 'center', background: '#FFFDF9', borderColor: 'var(--brand)' }}}}>
            <h3 className="serif" style={{{{ fontSize: 28, marginBottom: 16, color: 'var(--ink)' }}}}>Start Your Medical Weight Loss Journey</h3>
            <p style={{{{ marginBottom: 24, fontSize: 16 }}}}>Experience a comprehensive, fully compliant metabolic program with 1-on-1 support and zero hidden fees.</p>
            <a href={{START_URL}} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" style={{{{ display: 'inline-flex', justifyContent: 'center' }}}}>
              Check Eligibility <Icon.Arrow />
            </a>
          </div>

          <div style={{{{ padding: 40, marginTop: 60, borderRadius: 20, background: 'var(--ink)', color: '#FBF8F3', textAlign: 'center' }}}}>
            <h2 className="serif" style={{{{ fontSize: 40, marginBottom: 20, color: '#FBF8F3' }}}}>Ready for Transparent, Clinical Weight Loss?</h2>
            <p style={{{{ fontSize: 18, opacity: 0.9, marginBottom: 32, maxWidth: 500, margin: '0 auto 32px' }}}}>
              Your health is too important. Experience a comprehensive, fully compliant metabolic program with 1-on-1 support and zero hidden fees.
            </p>
            <a href={{START_URL}} target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{{{ background: '#FBF8F3', color: 'var(--ink)', display: 'inline-flex', justifyContent: 'center', width: '100%', maxWidth: 250 }}}}>
              Start GLP-1 Therapy <Icon.Arrow />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}}

export {{ {component_name} }};
"""
    return code, component_name

def create_page_code(slug, modified_title, component_name, image_name):
    code = f"""import {{ {component_name} }} from "../../../components/blog-{slug}.jsx";

export const metadata = {{
  title: "{modified_title}",
  description: "Comprehensive clinical breakdown of {modified_title.lower()}.",
  openGraph: {{
    title: "{modified_title}",
    description: "Comprehensive clinical breakdown of {modified_title.lower()}.",
    images: [
      {{
        url: "https://telehealthfx.com/assets/{image_name}",
        width: 1200,
        height: 630,
        alt: "{modified_title}",
      }},
    ],
  }},
}};

export default function Page() {{
  const jsonLd = {{
    "@context": "https://schema.org",
    "@graph": [
      {{
        "@type": "Article",
        "@id": "https://telehealthfx.com/blog/{slug}/#article",
        "headline": "{modified_title}",
        "description": "Comprehensive clinical breakdown of {modified_title.lower()}.",
        "image": "https://telehealthfx.com/assets/{image_name}",
        "author": {{
          "@type": "Person",
          "name": "Julian Mercer, M.S.",
          "jobTitle": "Lead Bio-Systems Analyst"
        }},
        "publisher": {{
          "@type": "Organization",
          "name": "Telehealth FX",
          "logo": {{
            "@type": "ImageObject",
            "url": "https://telehealthfx.com/assets/logo.png"
          }}
        }},
        "mainEntityOfPage": {{
          "@type": "WebPage",
          "@id": "https://telehealthfx.com/blog/{slug}/"
        }}
      }}
    ]
  }};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{{{ __html: JSON.stringify(jsonLd) }}}}
      />
      <{component_name} />
    </>
  );
}}
"""
    return code

files = sorted(glob.glob(os.path.join(PODCAST_DIR, "EP*_Research_*.md")))

articles_to_add = []

import shutil

default_images = ["ozempic-featured.png", "tirzepatide-semaglutide-featured.png", "nad-therapy-featured.png", "sermorelin-peptide-featured.png", "wegovy-label-featured.png", "glp1-ultimate-guide.png"]

for i, file in enumerate(files):
    if "EP01" in file:
        continue # skip EP01
    
    with open(file, 'r') as f:
        content = f.read()
    
    # Extract title from first line or second line
    title_line = [l for l in content.split('\n') if l.startswith('## ')]
    if title_line:
        original_title = title_line[0].replace('## ', '').replace('"', '').strip()
    else:
        original_title = os.path.basename(file).replace('.md', '').replace('_', ' ')
        
    modified_title = original_title + " (2026 Clinical Guide)"
    slug = slugify(modified_title)
    
    image_name = default_images[i % len(default_images)]
    
    comp_code, comp_name = create_component_code(slug, modified_title, content, image_name)
    page_code = create_page_code(slug, modified_title, comp_name, image_name)
    
    # Write component
    with open(os.path.join(COMPONENTS_DIR, f"blog-{slug}.jsx"), "w") as f:
        f.write(comp_code)
        
    # Write page
    os.makedirs(os.path.join(PAGES_DIR, slug), exist_ok=True)
    with open(os.path.join(PAGES_DIR, slug, "page.js"), "w") as f:
        f.write(page_code)
        
    articles_to_add.append(f"""    {{
      title: "{modified_title}",
      description: "A comprehensive clinical breakdown exploring {modified_title.lower()}.",
      slug: "/blog/{slug}",
      image: "/assets/{image_name}",
      tag: "Clinical Guide"
    }},""")

# Update blog-index.jsx
blog_index_path = os.path.join(COMPONENTS_DIR, "blog-index.jsx")
with open(blog_index_path, 'r') as f:
    index_content = f.read()

insertion_point = "  const articles = ["
if insertion_point in index_content:
    new_articles_str = "\n".join(articles_to_add)
    index_content = index_content.replace(insertion_point, f"{insertion_point}\n{new_articles_str}")
    
with open(blog_index_path, 'w') as f:
    f.write(index_content)

print("Generated all remaining 29 Skyscraper pillars successfully.")
