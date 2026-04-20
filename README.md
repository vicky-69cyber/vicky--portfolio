# Vicky Portfolio — React + Tailwind CSS

Migrated from HTML/CSS/JS to **React 18 + Tailwind CSS v3 + Vite**.

## Stack
- **React 18** — component architecture
- **Tailwind CSS v3** — utility-first styling (replaces full custom CSS)
- **Lucide React** — inline SVG icons (replaces Font Awesome CDN ~500KB)
- **EmailJS browser** — contact form (npm package, not CDN)
- **Vite 5** — build tool with code splitting

## Lighthouse Score Improvements

| Metric         | Before | After (expected) |
|----------------|--------|-----------------|
| Performance    | 75     | 95–99           |
| Accessibility  | 90     | 98–100          |
| Best Practices | 77     | 98–100          |
| SEO            | 100    | 100             |

### Why scores improve
- ✅ Font Awesome CDN (~500KB) → Lucide React (inline SVGs, tree-shaken)
- ✅ EmailJS CDN script → npm package (1.47KB gzipped)
- ✅ Clean Vite code splitting (vendor / app / email chunks)
- ✅ No console errors, no deprecated APIs
- ✅ Proper ARIA labels, focus management, skip link
- ✅ All images: correct width/height, fetchpriority="high" on LCP
- ✅ Aggressive cache headers via vercel.json

## Setup

```bash
npm install
npm run dev        # localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Add Your Images

Copy your images to the `public/` folder:

```
public/
  Profile.jpeg     ← your photo
  maison-hero.png  ← e-commerce project screenshot
  favicon.svg      ← your favicon
  favicon.ico      ← fallback favicon
  og-image.png     ← 1200×630 social share image
```

## Deploy to Vercel

```bash
# Option 1: Vercel CLI
npx vercel

# Option 2: Push to GitHub → connect repo in vercel.com
# Build command: npm run build
# Output directory: dist
```

## EmailJS Keys

Your keys are already configured in `src/components/Contact.jsx`:
- SERVICE_ID:  `service_7feuo7c`
- TEMPLATE_ID: `template_6wwxd9r`
- PUBLIC_KEY:  `gBDaE-KCAGRA4YFjY`

Update them there if they ever change.

## Project Structure

```
src/
  App.jsx                 ← root, wires everything
  main.jsx                ← React entry point
  index.css               ← Tailwind directives + minimal custom CSS
  components/
    Cursor.jsx            ← desktop custom cursor
    ProgressBar.jsx       ← scroll progress bar
    Nav.jsx               ← sticky nav + mobile drawer
    Hero.jsx              ← hero section + typewriter
    Strip.jsx             ← marquee tech strip
    Proof.jsx             ← animated stat counters
    Work.jsx              ← project cards + tilt effect
    Process.jsx           ← 4-step process (dark bg)
    Ticker.jsx            ← live info ticker
    Stack.jsx             ← tech stack pills
    About.jsx             ← about + photo
    Services.jsx          ← 4 service cards
    Contact.jsx           ← EmailJS contact form
    CTABand.jsx           ← bottom CTA
    Footer.jsx            ← footer links
    BackToTop.jsx         ← back to top button
  hooks/
    useReveal.js          ← IntersectionObserver scroll reveal
    useTypewriter.js      ← typewriter animation
    useCounter.js         ← animated number counter
```
