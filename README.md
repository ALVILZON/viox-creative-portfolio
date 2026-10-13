# VIOX Creative Portfolio V1.3

## VIOX Brand Identity V2.0 — Official Master design system

- **Brand meaning:** V = Visual; IO = 10 (I = 1, O = 0); X = Roman numeral 10. Visual 10/10.
- **Tagline:** Visuals Worth a 10.
- **Philosophy:** Every visual deserves a perfect score.
- **Primary wordmark:** clean standalone VIOX with angular X. The monogram must NEVER be appended to or integrated into the primary wordmark.
- **Separate icon:** symmetrical interwoven V + X monogram.
- **Colors:** Midnight Black `#0B0B0D`, Champagne Gold `#D9BE8A`, Warm Ivory `#F5F1E8`, Pure White `#FFFFFF`, Charcoal Gray `#2A2A2C`.
- **Typography:** Montserrat headings, Inter body (Google Fonts, with system fallbacks).
- **Gold:** flat champagne gold for website/production; metallic gold reserved for premium presentation.

## Important logo note
The included SVG wordmark and monogram are **temporary geometric approximations**, NOT pixel-exact exports from the approved master board. Replace `assets/viox-wordmark.svg`, `assets/viox-monogram.svg` and `assets/favicon.svg` with actual official exported artwork when available, preserving separate wordmark and monogram roles.

## Edit content
Edit `profile` and `projects` in `script.js`. Put your real project images in `assets/` and reference their paths in project entries. Add your actual PDF to `resume/resume.pdf`; résumé links only appear when a valid PDF is served. Never add secrets to static JavaScript.

## Deploy (Cloudflare Pages)
Upload the *contents* of this ZIP to the root of your existing GitHub repository (`main` branch). Keep the existing Cloudflare Pages project with framework **None**, no build command, output directory `/`. Cloudflare Pages should automatically redeploy.

## Features
Responsive layout, filterable gallery, project detail dialog, configurable social links, résumé links, scroll reveals with reduced-motion support, accessible keyboard navigation. No paid dependencies or build tools.
