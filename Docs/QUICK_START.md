# Colors Mood Website - Quick Start Guide

## Installation

\`\`\`bash
# 1. Clone or download the project
git clone <repository-url>
cd colors-mood

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env.local

# 4. Start development server
npm run dev
\`\`\`

Open http://localhost:3000 in your browser.

## Key Features to Test

### 1. Language Switching
- Click "EN" or "ع" in the header
- Page content switches instantly
- Layout direction changes for Arabic (RTL)

### 2. Dark Mode
- Click the moon/sun icon in header
- Background and text colors change
- Preference persists on page reload

### 3. Navigation
- Click nav items to smooth scroll
- Active section highlighted in header
- Mobile menu on small screens

### 4. Contact Form
- Scroll to bottom or click Contact in nav
- Fill form with valid email
- Submit and see success message
- Language-specific messages

### 5. Portfolio Gallery
- Scroll to Portfolio section
- Click "View Project" on any card
- Modal shows full project details
- Close with X button or click outside

## Project Structure

\`\`\`
colors-mood/
├── app/
│   ├── api/contact/route.ts       # Contact form API
│   ├── layout.tsx                 # Root layout
│   ├── globals.css                # Global styles
│   └── page.tsx                   # Main page
├── components/
│   ├── header.tsx                 # Navigation header
│   ├── hero-section.tsx           # Hero banner
│   ├── about-section.tsx          # About company
│   ├── services-section.tsx       # Services overview
│   ├── vehicle-section.tsx        # Vehicle branding
│   ├── capabilities-section.tsx   # Production capabilities
│   ├── pricing-section.tsx        # Pricing table
│   ├── portfolio-section.tsx      # Project gallery
│   ├── contact-section.tsx        # Contact form
│   ├── footer.tsx                 # Footer
│   └── accessibility-widget.tsx   # A11y settings
├── hooks/
│   ├── use-language.ts            # Language hook
│   └── use-theme.ts               # Dark mode hook
├── lib/
│   └── i18n.ts                    # Translation utilities
├── locales/
│   ├── en.json                    # English translations
│   └── ar.json                    # Arabic translations
├── public/
│   └── *.jpg                      # Project images
├── __tests__/
│   ├── contact-api.test.ts        # API tests
│   └── api.test.ts                # Integration tests
└── scripts/
    └── validate-site.ts           # Validation script
\`\`\`

## Common Tasks

### Update Content

Edit translation files:
- `locales/en.json` - English content
- `locales/ar.json` - Arabic content

### Add Image to Portfolio

1. Add image to `/public/` folder
2. Update image path in `components/portfolio-section.tsx`
3. Restart dev server

### Change Brand Colors

Edit CSS variables in `app/globals.css`:
\`\`\`css
--color-brand-gold: #d4af37;
--color-brand-dark: #1a1a1a;
\`\`\`

### Add New Section

1. Create component in `components/`
2. Import in `app/page.tsx`
3. Add translation keys to locales
4. Add navigation link if needed

## Troubleshooting

### Language not switching?
- Check browser localStorage not disabled
- Clear cache and try again
- Check console for errors (F12)

### Dark mode not working?
- Refresh page after toggling
- Check if system dark mode is enabled
- Verify CSS variables loading

### Images not loading?
- Check image path correct in public/
- Verify image format (JPG, PNG, WebP)
- Check file permissions

### Form not submitting?
- Verify email format is correct
- Check browser console for errors
- Ensure dev server running

## Deployment

### To Vercel

\`\`\`bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Go to vercel.com
# 3. Click "New Project"
# 4. Select GitHub repository
# 5. Click "Deploy"
# 6. Add environment variables if needed
\`\`\`

### Environment Variables for Production

\`\`\`env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@colorsmood.com
TO_EMAIL=Sales.dept@colorsmood.com.sa
\`\`\`

## Building for Production

\`\`\`bash
# Build
npm run build

# Start production server
npm start

# Or test production build locally
npm run build && npm start
\`\`\`

## Validation

\`\`\`bash
# Validate site configuration
npm run validate

# Run tests
npm test

# Test contact API
npm run test:api
\`\`\`

## Getting Help

- Check README.md for detailed documentation
- Review DEPLOYMENT.md for deployment instructions
- Check FEATURES.md for feature descriptions
- See __tests__/ for API test examples

## Next Steps

1. Customize content in translation files
2. Add your own images to portfolio
3. Update contact email address
4. Deploy to production
5. Set up email forwarding
6. Add analytics (optional)
7. Monitor performance

Enjoy! 🎉
