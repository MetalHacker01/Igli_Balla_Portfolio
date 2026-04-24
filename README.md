# Igli Balla, portfolio

Personal portfolio site. Next.js App Router, Tailwind CSS, hosted on Vercel.

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

1. Push this folder to a new GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Accept the defaults. Next.js is auto-detected, no env vars required.
4. Click Deploy. Done.

Vercel will give you a free `*.vercel.app` domain. You can attach a custom
domain (for example `igliballa.com`) under Project Settings, Domains.

## Project structure

```
app/
  layout.tsx            Root layout, fonts, metadata
  page.tsx              Composes the single-page portfolio
  globals.css           Tailwind base + small keyframes
  components/
    Nav.tsx             Sticky top nav
    Hero.tsx            Hero section with name and lead image
    Marquee.tsx         Kinetic band under the hero
    Work.tsx            Bento grid of six projects
    About.tsx           Bio + tools + languages
    Interests.tsx       Games, animation, designers I follow
    Footer.tsx          Contact + elsewhere
public/
  cv/Igli_Balla_CV.pdf  The downloadable CV
  favicon.svg
```

## Project imagery

Tiles in `Work.tsx` reference self-hosted files under `public/work/`:

```
public/work/
  te-lako/          01.png ... 10.png   (pulled from behance.net/gallery/248142499)
  cloudpage-maestro/ hero.png + 01.png, 02.png, 03.png
  illustrator/      01.png ... 08.png   (pulled from behance.net/gallery/248164411)
  photoshop/        01.png ... 10.png   (pulled from behance.net/gallery/248168941)
```

To add or swap a project piece:

1. Drop the image in the matching subfolder of `public/work/`.
2. Open `app/components/Work.tsx`.
3. Edit the `hero` or `thumbs` fields on the relevant project entry.
4. Aspect: heroes are `aspect-[4/5]` for Te Lako / Illustrator / Photoshop
   and `aspect-square` for CloudPage Maestro (a centred mark). Thumbs are
   always square. Adjust `heroRatio` on the project if needed.

For CloudPage Maestro specifically, the hero uses `heroBg: bg-[#1E88FF]`
and `heroObjectFit: contain` so the logo sits centred on a Salesforce-blue
field. Thumbs use `bg-white` for the same reason.

## Colors and fonts

Palette lives in `tailwind.config.ts`.

- `paper`   `#FAF6ED`  warm background
- `ink`     `#151310`  primary text
- `accent`  `#C5402C`  single accent, terracotta
- `sage`    `#8FA688`  sparingly, status dot
- `lilac`   `#B5A7CD`  sparingly, decoration

Display font is **Fraunces**, body is **Geist Sans**, mono is **Geist Mono**.
All are loaded via `next/font/google`, which handles font optimization
and eliminates layout shift.

## Scripts

```bash
npm run dev      Start the dev server on :3000
npm run build    Production build
npm run start    Run the production build locally
npm run lint     Lint with Next.js ESLint defaults
```

## License

All rights reserved on the design, copy, and photography used in this repo.
Placeholder images come from [picsum.photos](https://picsum.photos) and are
licensed per their terms.
