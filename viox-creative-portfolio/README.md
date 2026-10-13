# VIOX Creative Portfolio

A free-first static portfolio built with HTML, CSS and JavaScript. No build tools or paid services required.

## Preview locally
Open `index.html` in a browser, or run `python -m http.server 8000` in this folder and visit http://localhost:8000.

## Customize before publishing
1. In `script.js`, replace the placeholder projects with real descriptions and your own project visuals. Current thumbnails are CSS gradients, not actual portfolio images.
2. Replace `hello@example.com` in `script.js` with your real contact email.
3. Add your real social links to `profile.socials` in `script.js`.
4. Add your own PDF file at `resume/resume.pdf` to activate the two resume download links. Until then, the links will return 404.
5. Update the About text in `index.html` to reflect your experience.
6. Check the website on mobile and desktop before publishing.

## Free deployment on Cloudflare Pages
1. Create a GitHub repository and upload this site's files.
2. In Cloudflare dashboard choose Workers & Pages > Create > Pages > Connect to Git.
3. Select the repository, set production branch `main`, build command `exit 0`, and output directory `/` (or the repository root as required by the interface).
4. Deploy. Cloudflare will issue a `*.pages.dev` URL after successful deployment.

No live site has been deployed from this package.
