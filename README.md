# Lathish — Portfolio & ErrorZero Licensing Site

Single-page, static marketing site. Plain HTML/CSS/JS — no build step, no backend.

## Structure

```
index.html          Page markup (all sections, real SEO/OG meta tags)
css/styles.css       All styling (CSS variables for brand colors/type)
js/main.js           Mobile nav toggle + footer year
assets/img/          Logo, favicon, OG image, real ErrorZero screenshots
robots.txt           Allows indexing, points to sitemap
sitemap.xml          Single-URL sitemap
vercel.json          Clean URLs + long-cache headers for /assets
```

## Before you deploy

1. **Replace the placeholder domain.** `index.html` and `sitemap.xml`/`robots.txt` use
   `https://lathish.dev/` as a placeholder canonical/OG URL — swap in your real domain
   once you know it (or your `*.vercel.app` URL).
2. **Swap screenshots if the product UI changes.** The Featured Work gallery uses
   `assets/img/screenshot-dashboard-real.png` (Overview dashboard), `screenshot-buglist-real.png`
   (Bug Triage), and `screenshot-newbug-real.png` (Report New Issue). Replace these files
   (keep the filenames, or update the `src`/`width`/`height` attributes in the
   "Featured Work" section of `index.html`) whenever the app's UI is updated. Keep the
   "browser chrome" wrapper markup; just swap the `<img>` inside it. Note the dashboard
   shot is light-theme while the other two are dark-theme — intentional per the site owner's
   choice; swap all three to the same theme if that inconsistency becomes a concern later.
3. **Add a real profile photo** if you want one — none is included currently.
4. **Regenerate the OG image** if you change the headline/colors: edit
   `assets/img/og-image.svg` then re-export with Inkscape (or any SVG-to-PNG tool):
   ```
   inkscape assets/img/og-image.svg --export-type=png \
     --export-filename=assets/img/og-image.png --export-width=1200 --export-height=630
   ```

## Local preview

Any static file server works, e.g.:
```
npx serve .
```

## Deploy to Vercel

```
npm i -g vercel   # if not already installed
vercel             # first deploy, follow prompts (framework: "Other")
vercel --prod
```
No environment variables or build command needed — it's a static export.

## Notes

- Pricing buttons and the contact link use `mailto:` links with pre-filled subject
  lines — no payment gateway or form backend.
- Colors, spacing, and type live as CSS variables at the top of `css/styles.css`
  if you need to retune the brand.
- `code.html` / `screen.png` / `DESIGN.md` in this folder are the original Stitch
  design export used as a visual reference — not part of the deployed site.
