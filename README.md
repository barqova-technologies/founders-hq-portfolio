# Founder's HQ - Portfolio

Marketing site for **Founder's HQ**, a new working community of operators and outliers - starting in Lucknow with a founding cohort, regular founder meetups and a hand-picked mentor bench. Cohort 01 applications are open.

Built with the Next.js App Router, TypeScript, Tailwind CSS, GSAP and Framer Motion.

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **Motion:** Framer Motion + GSAP
- **Icons:** lucide-react
- **Fonts:** Inter, Space Grotesk (via `next/font/google`)

## Project structure

```
app/                  # App Router pages and layout
  layout.tsx          # Root layout, fonts, navbar/footer
  page.tsx            # Home
  about/              # /about
  ecosystem/          # /ecosystem
  join/               # /join
  not-found.tsx       # 404
  globals.css         # Tailwind + design tokens
components/
  home/               # Home sections (Hero, Manifesto, etc.)
  about/              # About page sections
  ecosystem/          # Ecosystem page sections
  join/               # Join page sections
  layout/             # Navbar, Footer, Preloader, PageTransition
  ui/                 # Reusable primitives (MagneticButton, SplitText, etc.)
lib/
  data.ts             # Static content/data for the site
public/               # Static assets
```

## Getting started

Requires Node.js 18.17+ (Next.js 14 minimum).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Available scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build locally |
| `npm run lint` | Lint with ESLint (`next/core-web-vitals`) |
| `npm run typecheck` | Type-check with `tsc --noEmit` |

## Notes

- All routes are statically prerendered (`○ Static` in the build output) - no runtime server logic is required.
- The Join page form posts to a no-backend form service. Set `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local` (see `.env.example`) to your Formspree/Web3Forms/Getform form URL. Without it, the form shows a "not connected yet" message.
- `next-env.d.ts` and `*.tsbuildinfo` are intentionally git-ignored; Next.js regenerates them.
