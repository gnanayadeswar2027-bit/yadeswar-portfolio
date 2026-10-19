# Gnana Yadeswar — Personal Portfolio

A personal portfolio built with React, TypeScript, Framer Motion, Lucide React, Tailwind CSS, and Vite. The design uses the supplied reference's dark palette, Kanit typography, gradient headings, magnetic artwork, scroll reveals, rounded sections, and stacking project cards, adapted to the personal content brief.

## Local development

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Deploy the generated `dist` directory to a static host when hosting is requested. No backend, account, API keys, or environment variables are required.

## Content

Project descriptions, links, experience, and tools are in `src/content.ts`. The introduction, about, education, and contact sections are in `src/App.tsx`. Styles and responsive rules are in `src/styles.css`.

The hero uses the approved 3D boy character with both earrings removed, a magnetic mouse-following effect, and fade-in. The approved image is bundled locally at `public/images/boy-no-earrings.png`. About, Education, the toolkit, and Contact include animated orbital forms and glass cubes; project artwork includes gentle motion. Its source is https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png. Project artwork is abstract CSS illustration, not a screenshot of a live product. No sample client work, testimonials, invented achievements, or GitHub statistics are included. Project results are attributed to the teams.

## Research PDF

The PropTech presentation is described in the project details, but its link is deliberately omitted because the PDF has not been supplied. Once available, place the exact file `Where-is-value-and-momentum-moving-in-Indias-PropTech-ecosystem.pdf` in `public/` and add its local link to the PropTech project. Do not guess an external URL.

## Accessibility and motion

The page includes semantic sections, keyboard focus indicators, a skip link, accessible detail toggles, and reduced-motion support. Desktop cards stack; mobile cards use regular flow so content remains reachable. The magnetic artwork responds only to a fine pointer. Kanit is loaded from Google Fonts, with a sans-serif fallback.

## Hosting

Configured for Vercel with `vercel.json`. The build command is `npm run build` and the published directory is `dist`. The source repository is https://github.com/gnanayadeswar2027-bit/yadeswar-portfolio.

Responsive checks at 320, 375, 414, and 768 CSS pixels verify that the page has no horizontal overflow, all five projects are present, the portrait loads, and phone project cards use regular document flow.
