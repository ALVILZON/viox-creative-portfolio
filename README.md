# VIOX Creative Portfolio V1.1

Minimalist static portfolio: HTML, CSS, JavaScript. No npm, paid services, database, or build step required.

## What's new
- Responsive, filterable project gallery and accessible project detail dialogs, including support for your own image galleries and external project links.
- Social profiles and contact email configurable in `script.js` (hidden until real values are entered).
- Résumé download links appear **only after** a real PDF exists at `resume/resume.pdf` and is served with a PDF content type.
- Editable About copy, specialties, subtle scroll reveals and hover interactions with reduced-motion support.
- Improved small-screen typography, spacing, keyboard focus and accessibility.

## Personalize the site
1. Edit `profile.email`, `profile.about`, `profile.availability`, and `profile.socials` near the top of `script.js`.
2. Edit the `projects` array in `script.js`: `title`, `category` (`ai`, `design`, `digital`), `type`, `year`, `description`, `role`, `tools`, `art`, `color`, and optional `link`.
3. Place your project image files in `assets/`, for example `assets/fashion-editorial.webp`. Set `image:'assets/fashion-editorial.webp'`. Add optional `images:['assets/look-2.webp','assets/look-3.webp']` for the detail gallery. Without images, the existing gradient tiles display automatically. Use optimized JPG/WebP files for speed.
4. Add your **real** résumé PDF at `resume/resume.pdf`. This release does **not** include a fabricated résumé.
5. Edit the specialties in `index.html` if needed. Replace illustrative project descriptions with your actual work before sharing publicly.
6. Test the gallery filters, project dialogs, social URLs, PDF download and mobile layout after making changes.

## Deploy to your existing GitHub + Cloudflare Pages
1. **Extract the ZIP**. Open the `viox-creative-portfolio-v1.1` folder and select its contents (`index.html`, `styles.css`, `script.js`, `README.md`, plus any assets and resume files).
2. In the existing `ALVILZON/viox-creative-portfolio` repository, upload these files **directly to the repository root** on branch `main`, replacing the old files. Do not upload the ZIP or create a nested website folder.
3. Commit. Cloudflare Pages should deploy the new `main` commit automatically.
4. Keep your existing Cloudflare Pages static site configuration: framework None, no build command, output directory `/` (root).
5. Check the deployment status, then hard-refresh your existing `pages.dev` URL.

## Local preview
Run `python -m http.server 8000` from this folder and open `http://localhost:8000`. The PDF presence check requires an HTTP server; opening `index.html` directly as a file may hide the résumé link even if a PDF exists.

## Notes
The website and starter content are templates. Social URLs, email, resume and project photos are deliberately **not invented**. Google Fonts is optional and falls back to local system fonts when offline. No user analytics or tracking is included.
