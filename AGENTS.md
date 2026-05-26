<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Infrastructure & Hosting
*   **Platform:** Cloudflare Pages
*   **Build Output:** Static HTML export (`output: 'export'`)
*   **Routing & 404 redirects:** Managed via the `public/_redirects` file (`/* / 302` to redirect non-existent routes back to the home page).
