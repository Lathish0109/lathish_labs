# LK Systems — Website

Single-page static site for LK Systems (ErrorZero and QAPipeX). Plain HTML, CSS, and JavaScript. No build step.

## Structure

```
index.html                 Page content and layout
css/styles.css             All styling (colors and type are CSS variables at the top)
js/main.js                 Mobile menu and footer year
assets/img/                Logo, favicon, OG image
assets/screenshots/        Product screenshots (see below)
robots.txt, sitemap.xml    SEO
vercel.json                Clean URLs and caching
```

## Adding screenshots

Save images with these names. Empty slots show a placeholder until a file exists.

- ErrorZero: `assets/screenshots/errorzero/1.png` to `6.png`
- QAPipeX: `assets/screenshots/qapipex/1.png` to `4.png`

Use PNG or JPG, around 1500 px wide. To add more slots, copy an existing `<figure class="shot">` block in `index.html`.

## Contact and pricing links

All email buttons open Gmail's compose window in a new tab, addressed to `lathish0109@gmail.com`, with a prefilled subject. Edit the `href` values in `index.html` to change them.

## Local preview

```
npx serve .
```

## Deploy (Vercel)

```
npx vercel --prod
```

Production: https://lk-systems-lk-project09.vercel.app/
Deployment protection is off so visitors can open the site. Turn it back on with `vercel project protection enable lk-systems --sso`.

## Notes

- Pricing: ₹1,000 for a 3-day trial and ₹10,000 for a full license, for both products.
- Licenses are non-exclusive (buyer may use and rebrand, not resell or redistribute).
- `DESIGN.md`, `code.html`, and `screen.png` are the original design reference and are not part of the site.
