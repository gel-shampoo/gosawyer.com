# Sawyer Nelson — website files

Complete static website: HTML, CSS, JavaScript, and the supplied PDF. No build step, package installation, database, or application server is required.

## Publish to Netlify

1. Extract this ZIP.
2. Deploy the entire `gosawyer-website/` folder to your existing Netlify site. `index.html`, `_redirects`, and `sawyer-nelson-resume.pdf` must be at the published root. Upload all files, including `_redirects`.
3. Keep the directory structure and filenames intact. Links use both relative and root-relative paths.
4. After deployment, check `/resume/`, the homepage résumé link, and the document résumé link. Confirm `/resume-text/` returns HTTP 301 with a Location pointing to `/resume/`.

The exported files do not require ChatGPT hosting or authentication. On a public static host, the PDF is available directly at `/sawyer-nelson-resume.pdf`. The header link opens that exact supplied file in a new tab.

## Files

- `index.html` — homepage
- `styles.css` — shared typography, colors, homepage layout, and theme-toggle appearance
- `theme.js` — yellow-circle interaction and blue color scheme
- `resume/index.html` — current text-first résumé; canonical URL https://gosawyer.com/resume/
- `resume/resume-text.css` — résumé styling
- `sawyer-nelson-resume.pdf` — supplied PDF, copied unchanged
- `_redirects` — permanent redirects from `/resume-text`, `/resume-text/`, and `/resume-text/index.html` to `/resume/`

The old document-style HTML résumé has been removed. There is no separate `/resume-text/` page.

## Redirects

The `_redirects` file configures Netlify's HTTP 301 responses. A host that does not support this file needs equivalent permanent redirects in its own configuration. A basic local file server does not apply these rules. The live response and public PDF access must be checked after uploading to the production host.

## Fonts

The pages retain the existing Adobe Fonts stylesheet: https://use.typekit.net/wab1pwx.css. Freight Text Pro font binaries are served by Adobe and are not bundled. Visitors need internet access to load them; CSS includes serif fallbacks. Keep the Adobe Fonts web project active. No Adobe API token is included or needed in this package.

## Preview locally

From this folder, run `python3 -m http.server 8000`, then open `http://localhost:8000/`. Stop with Ctrl+C. This previews the pages and PDF but does not test the Netlify redirects.

## Editing

Edit the HTML for wording and links, and CSS for appearance. Keep shared `styles.css` and `theme.js` alongside the root `index.html`.
