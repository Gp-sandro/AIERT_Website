# AIERT — Website

One-pager landing site for AIERT, an AI automation agency based in Tbilisi, Georgia.

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4**
- **Framer Motion** — scroll-triggered animations
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build & Deploy

```bash
npm run build
```

Static output goes to `dist/`. Deploy to Vercel, Netlify, or any static host.

### Vercel (recommended)

```bash
npx vercel deploy dist --prod
```

Or connect the GitHub repo — Vercel auto-deploys on push.

## Email Collection

The contact form sends leads to Google Sheets via Apps Script.

### Setup

1. Open the target Google Sheet
2. Go to **Extensions > Apps Script**
3. Paste the code from `google-apps-script.js`
4. Deploy as **Web app** (Execute as: Me, Access: Anyone)
5. Copy the deployment URL into `src/config.js`:

```js
export const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_ID/exec'
```

Leads are written to a **"Leads"** tab with columns: Email, Name, Source, Date, Status.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      — Fixed nav, mobile menu
│   ├── Hero.jsx        — Headline, CTAs, stats
│   ├── About.jsx       — Product section, Telegram chat mock
│   ├── Services.jsx    — Service cards grid
│   ├── Process.jsx     — 3-step flow
│   ├── CTA.jsx         — Email collection form
│   └── Footer.jsx      — Contact links
├── config.js           — Google Script URL
├── index.css           — Tailwind theme
├── main.jsx            — Entry point
└── App.jsx             — Root component
```

## Contact

sandro@aiert.xyz
