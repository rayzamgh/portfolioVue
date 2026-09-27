# Rayza Mahendra's portfolio

A Nuxt 2 portfolio with an editorial design, current experience, projects, education, and recognition drawn from Rayza's CV.

## Run locally

```powershell
npm ci
$env:NODE_OPTIONS = '--openssl-legacy-provider'
npm run dev
```

Open <http://localhost:3333>. The legacy OpenSSL flag is needed when building this Nuxt 2 project with newer Node.js versions.

## Project map

- `pages/index.vue`: portfolio overview
- `pages/profile.vue`: detailed experience, projects, education, and skills
- `data/portfolio.js`: shared CV content
- `assets/site.css`: typography, colors, layouts, and responsive styles
- `components/SiteHeader.vue` and `components/SiteFooter.vue`: shared navigation and contact
- `assets/editorial-*.webp`: editorial artwork made for this portfolio

The site uses self-hosted Source Serif 4 and Bodoni Moda through Fontsource. The GitHub Actions workflow generates the static site and publishes it to GitHub Pages after pushes to `master`.
