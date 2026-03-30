# Pragati Invest

Business website for `pragatiinvest.com`.

## What this site is

This is a Next.js landing site for a lean two-founder automation studio focused on:

- workflow automation
- internal tools
- AI-assisted operations
- system integration for business teams

The messaging is positioned around the meaning of **Pragati**: progress.

## Local development

Run:

```bash
cd /Users/apple/pragati-frontend
npm install
npm run dev
```

If port `3000` is already occupied, Next.js will choose the next available port.

## Production build

Run:

```bash
cd /Users/apple/pragati-frontend
npm run build
```

This project builds successfully with:

```bash
next build --webpack
```

Webpack is used here because Turbopack was unstable in this environment.

## Deploy on Vercel

Recommended hosting target: **Vercel**

### Vercel settings

- Framework preset: `Next.js`
- Root directory: `pragati-frontend` if this project lives inside a larger repo
- Build command: `npm run build`
- Install command: `npm install`

### Domain setup

Add:

- `pragatiinvest.com`
- `www.pragatiinvest.com`

inside the Vercel project domain settings, then update your registrar DNS as Vercel instructs.

## SEO included

The site includes:

- title and description metadata
- Open Graph metadata
- Twitter metadata
- canonical URL
- JSON-LD structured data
- `robots.txt`
- `sitemap.xml`

## Contact flow

The site currently includes a lightweight discovery form that:

- collects lead details
- validates required fields
- opens a prefilled email to `pragatii.invest@gmail.com`

This is suitable for MVP launch. A backend submission endpoint can be added later.
