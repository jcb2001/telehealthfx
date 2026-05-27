<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Infrastructure & Hosting
*   **Platform:** Cloudflare Pages
*   **Build Output:** Static HTML export (`output: 'export'`)
*   **Routing & 404 redirects:** Managed via the custom `src/app/not-found.js` file which builds to `404.html` on static export. Cloudflare Pages serves this file automatically on 404 errors, and client-side JavaScript performs the redirect back to `/` (avoiding server-side redirect loops on `_redirects`).

