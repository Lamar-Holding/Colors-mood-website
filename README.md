# Colors Mood Website

A modern, responsive Next.js website for Colors Mood Printing Solutions (Saudi Arabia), focused on vehicle wraps, advertising printing, and commercial branding.

## Highlights

- 🌍 Bilingual English/Arabic experience with automatic RTL support
- 🌓 Light/dark theme toggle with persisted preference
- 🖼️ Portfolio grid with modal gallery and image carousel
- ✉️ Contact form backed by a Next.js API route (in-memory store by default)
- ♿ Accessibility touches (skip link, ARIA labels)
- 💡 Pricing section exists but is currently disabled in the UI (commented out in `app/page.tsx` and `components/header.tsx`)

## Tech Stack

- ⚛️ Next.js 16 (App Router)
- 🧩 React 19 + TypeScript
- 🎨 Tailwind CSS v4
- 🧱 Radix UI primitives (in `components/ui`)
- ✅ Jest for tests

## Requirements

- 🧰 Node.js 18+
- 📦 npm, pnpm, or yarn

## Quick Start

```bash
git clone <(https://github.com/Lamar-Holding/Colors-mood-website)>
cd colors-mood-website
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- ▶️ `npm run dev` - start the development server
- 🏗️ `npm run build` - build for production
- 🚀 `npm run start` - run the production server
- 🧹 `npm run lint` - run ESLint
- 🧪 `npm run test` - run Jest tests
- 🧪 `npm run test:api` - run API tests only
- 🔍 `npm run validate` - run site validation script

## Environment Variables

The contact API works without external services. If you want real email sending, set these variables and enable the nodemailer block in `app/api/contact/route.ts`.

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@colorsmood.com
TO_EMAIL=Sales.dept@colorsmood.com.sa
```

## Project Structure

```
colors-mood-website/
├── app/
│   ├── api/contact/route.ts     # Contact form API
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout and fonts
│   └── page.tsx                 # Main page sections
├── components/
│   ├── about-section.tsx
│   ├── accessibility-widget.tsx
│   ├── animation-wrapper.tsx
│   ├── capabilities-section.tsx
│   ├── contact-section.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero-section.tsx
│   ├── portfolio-section.tsx
│   ├── pricing-section.tsx      # Present but disabled in UI
│   ├── scroll-indicator.tsx
│   ├── services-section.tsx
│   ├── theme-provider.tsx
│   ├── vehicle-section.tsx
│   └── ui/                      # Reusable UI primitives (Radix-based)
├── hooks/
│   ├── use-language.tsx
│   ├── use-mobile.ts
│   ├── use-theme.ts
│   └── use-toast.ts
├── lib/
│   ├── i18n.ts                   # Translation utilities
│   └── utils.ts
├── locales/
│   ├── en.json                   # English strings
│   └── ar.json                   # Arabic strings
├── public/                       # Static images, logos, PDFs
├── scripts/
│   └── validate-site.ts
├── styles/
│   └── globals.css               # Additional Tailwind theme tokens
├── Docs/                         # Delivery, deployment, and feature docs
├── __tests__/                    # Jest tests
├── next.config.mjs
├── package.json
└── tsconfig.json
```

## Updating Content

- 📝 Text and labels: `locales/en.json` and `locales/ar.json`
- 🖼️ Portfolio items: `components/portfolio-section.tsx`
- 🧩 Section layouts: files in `components/`
- 🎛️ Global styles: `app/globals.css`

## API

### POST `/api/contact`

Accepts contact form submissions.

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd like a quote for...",
  "lang": "en"
}
```

### GET `/api/contact`

Returns in-memory submissions for review.

```json
{
  "ok": true,
  "messages": [],
  "count": 0
}
```

## Testing

```bash
npm run test
npm run test:api
npm run validate
```

## Deployment

Vercel is recommended. See `Docs/DEPLOYMENT.md` or `Docs/GITHUB_VERCEL_DEPLOYMENT.md` for step-by-step instructions.

## Support

- 📧 Email: Sales.dept@colorsmood.com.sa
- 📞 Phone: +966544927409
- 📍 Location: AlUla, Madinah Region, Saudi Arabia
