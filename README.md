# ExampleIQ - Ride Booking Form

A Next.js 16 + TypeScript + Tailwind CSS project that implements a ride/transportation booking form UI, recreated to match a provided design mockup.

Live demo: run locally — see [How to run](#how-to-run-the-project-after-cloning) below.

---

## What I built

A single-page booking form for a fictional ride service called **ExampleIQ**, replicating a UI screenshot the client provided.

### Form features

1. **Branded header** — purple `ExampleIQ` logo with a custom SVG speedometer icon.
2. **Trip-type toggle** — two joined pill buttons:
   - `One-way` (with arrow-circle icon)
   - `Hourly` (with hourglass icon)
   - Active option is highlighted gold (`#c9a227`) with a light-yellow fill.
3. **Pickup section**
   - Date field (with nested bordered input + gold calendar icon)
   - Time field (with gold clock icon)
   - Location / Airport sub-toggle pills
   - Floating-label dropdown for the address (with gold map-pin icon and chevron)
   - `+ Add a stop` link
4. **Drop off section** — Location/Airport toggle and address dropdown (same pattern as pickup).
5. **Contact Information**
   - Phone field with an inline **SVG US flag** (red/white stripes + blue canton with stars — works on Windows where the 🇺🇸 emoji doesn't render)
   - Purple validation message
   - `First name` and `Last name` floating-label inputs (with user icon)
   - `Email` floating-label input (with @ icon)
6. **Passenger count** — small `# Passengers` numeric input with floating label.
7. **Continue button** — full-width gold submit button.

All form fields use React `useState` for controlled inputs, and the form has an `onSubmit` handler with a simple alert (placeholder for real submission logic).

---

## How I made it

### Tech stack

| Tool | Version / Notes |
|---|---|
| **Next.js** | 16.2.7 (App Router) |
| **React** | 19 (canary built into Next.js App Router) |
| **TypeScript** | latest |
| **Tailwind CSS** | v4 |
| **Package manager** | npm |

### Steps I followed

1. **Scaffolded the project**
   ```bash
   npx create-next-app@latest exampleiq-form --typescript --tailwind --app --no-src-dir --no-turbopack --no-eslint --import-alias "@/*" --use-npm
   ```

2. **Replaced the default `layout.tsx`** — removed Geist fonts, set page metadata to `ExampleIQ - Book your ride`, and applied a clean white background.

3. **Wrote `app/globals.css`** — defined the color palette as CSS variables:
   - Gold: `#c9a227`
   - Gold background tint: `#fdf6e3`
   - Purple: `#5a3fa0`
   - Purple-dark: `#2a1f5c`
   - Built reusable classes:
     - `.mfield` — Material-style outlined floating-label field
     - `.pill-group` — joined-pill toggle group with gold active state

4. **Built `app/page.tsx`** as a single client component (`"use client"`) containing:
   - All form state via `useState`
   - The full JSX tree for the form
   - 11 custom inline SVG icon components (logo, arrow-circle, hourglass, calendar, clock, map-pin, chevron-down, user, at-symbol, hash, US flag)

5. **Verified locally** — started `npm run dev` and confirmed the page rendered without errors on `http://localhost:3000`.

### File structure

```
exampleiq-form/
├── app/
│   ├── globals.css      # Tailwind import + CSS variables + .mfield / .pill-group utilities
│   ├── layout.tsx       # Root layout, html/body, metadata
│   └── page.tsx         # The booking form (client component) + all icons
├── public/              # Static assets (default Next.js)
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## How to run the project after cloning

### Prerequisites

- **Node.js** 18.17 or newer (Node 20+ recommended)
- **npm** (comes with Node) — or yarn / pnpm if you prefer

### 1. Clone the repository

```bash
git clone https://github.com/AbdulHaye/booking-form.git
cd booking-form
```

### 2. Install dependencies

```bash
npm install
```

This installs Next.js, React, Tailwind, TypeScript, and all dev dependencies (~1 min on a fresh machine).

### 3. Start the dev server

```bash
npm run dev
```

You'll see:

```
▲ Next.js 16.2.7 (Turbopack)
- Local:   http://localhost:3000
✓ Ready in ~5s
```

### 4. Open in your browser

Go to **http://localhost:3000** — the booking form will be live with hot reload.

Edit `app/page.tsx` to change the form; the page updates automatically.

### 5. Build for production (optional)

```bash
npm run build      # creates an optimized production build
npm start          # serves the built app at http://localhost:3000
```

---

## Available scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Build the production bundle |
| `npm start` | Run the production server (after `build`) |

---

## Customizing the form

| Want to change... | Edit... |
|---|---|
| Colors (gold / purple / muted) | CSS variables at the top of `app/globals.css` |
| Form fields, labels, layout | The JSX inside the `<form>` in `app/page.tsx` |
| Icons | Replace any of the icon components at the bottom of `app/page.tsx` |
| Submit behavior | The `handleSubmit` function in `app/page.tsx` (currently shows an `alert`) |
| Page title / tab name | `metadata` export in `app/layout.tsx` |

---

## Notes

- The form uses an **inline SVG US flag** instead of the 🇺🇸 emoji because Windows doesn't render regional indicator emojis as actual flags.
- All field icons are inline SVGs — no icon library dependency.
- The project uses Next.js 16's App Router (folder = route, `page.tsx` = the page).

---

## License

Project provided for the client. All rights reserved by the project owner.
