# Colors Mood - Creative Printing & Vehicle Wrapping Solutions

A modern, responsive Next.js website for Colors Mood Printing Solutions, a Saudi Arabian company specializing in vehicle wraps, advertising printing, and commercial branding.

## Features

✨ **Bilingual Support**: Full English & Arabic (RTL) support with persistent language toggle
🌙 **Dark Mode**: Complete dark/light theme support with local persistence
📱 **Responsive Design**: Mobile-first responsive design for all devices
🎨 **Modern UI**: Clean, professional design with smooth animations
📧 **Contact Form**: Functional contact form with server-side validation
🖼️ **Portfolio Gallery**: Showcase of past projects with lightbox modals
💰 **Pricing Table**: Clear pricing information for services
♿ **Accessible**: WCAG compliant with semantic HTML and ARIA labels

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Fonts**: Cairo (Arabic), Poppins (English)
- **Hosting**: Vercel (recommended)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd colors-mood

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Environment Variables

Create a `.env.local` file with:

\`\`\`env
# Optional: For email functionality
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@colorsmood.com
TO_EMAIL=Sales.dept@colorsmood.com.sa
\`\`\`

## Project Structure

\`\`\`
colors-mood/
├── app/
│   ├── api/contact/route.ts       # Contact form API endpoint
│   ├── layout.tsx                 # Root layout
│   ├── globals.css                # Global styles
│   └── page.tsx                   # Main page
├── components/
│   ├── header.tsx                 # Sticky header with navigation
│   ├── hero-section.tsx           # Hero banner
│   ├── about-section.tsx          # About company
│   ├── services-section.tsx       # Services overview
│   ├── vehicle-section.tsx        # Vehicle branding section
│   ├── capabilities-section.tsx   # Production capabilities
│   ├── pricing-section.tsx        # Pricing table
│   ├── portfolio-section.tsx      # Project gallery
│   ├── contact-section.tsx        # Contact form
│   └── footer.tsx                 # Footer
├── hooks/
│   ├── use-language.ts            # Language switcher hook
│   └── use-theme.ts               # Dark mode hook
├── lib/
│   └── i18n.ts                    # Translation utilities
├── locales/
│   ├── en.json                    # English translations
│   └── ar.json                    # Arabic translations
└── public/
    └── placeholder.svg            # Placeholder images
\`\`\`

## Key Features

### Bilingual Support
- Seamless language switching between English and Arabic
- RTL layout automatically applied for Arabic
- Persisted language preference in localStorage

### Dark Mode
- Toggle between light and dark themes
- Persisted theme preference
- Smooth transitions between themes

### Responsive Navigation
- Sticky header with active section highlighting
- Mobile hamburger menu
- Smooth scroll to sections

### Contact Form
- Client-side and server-side validation
- Email address validation
- Success/error feedback messages
- In-memory message storage (ready for database integration)

### Portfolio Gallery
- Grid layout with hover effects
- Lightbox modal for project details
- Project tags and categorization
- PDF page references for each project

## Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Deployment

### Deploy to Vercel

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
\`\`\`

Environment variables to set in Vercel:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `FROM_EMAIL`
- `TO_EMAIL`

## API Routes

### POST /api/contact
Handles contact form submissions.

**Request:**
\`\`\`json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'd like a quote for...",
  "lang": "en"
}
\`\`\`

**Response:**
\`\`\`json
{
  "ok": true,
  "message": "Message received"
}
\`\`\`

### GET /api/contact
Retrieves all contact submissions (for admin review).

**Response:**
\`\`\`json
{
  "ok": true,
  "messages": [...],
  "count": 5
}
\`\`\`

## Customization

### Updating Content

Edit translation files to update text:
- `locales/en.json` - English content
- `locales/ar.json` - Arabic content

### Changing Colors

Edit color variables in `app/globals.css`:
\`\`\`css
--color-primary: #1a1a1a;
--color-accent: #d4af37;
\`\`\`

### Updating Images

Replace placeholder images in components with your actual images or images from the PDF:

\`\`\`tsx
<img
  src="/images/your-image.jpg"
  alt="Description"
  className="w-full h-full object-cover"
/>
\`\`\`

## Testing

### Manual Testing
- Test language switching (EN/AR)
- Verify dark/light mode persistence
- Test responsive design on mobile/tablet/desktop
- Submit contact form and verify validation

### Contact Form API Test
\`\`\`bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message","lang":"en"}'
\`\`\`

## Email Setup (Optional)

To enable real email sending, install nodemailer:

\`\`\`bash
npm install nodemailer
\`\`\`

Then uncomment the email code in `/app/api/contact/route.ts` and configure SMTP variables.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- ⚡ Optimized images with Next.js Image component
- 🚀 Server-side rendering for SEO
- 📦 Efficient code splitting
- 🎯 Lighthouse score optimization

## SEO

- Meta tags for title and description
- Lang attributes for bilingual support
- Semantic HTML structure
- Structured data ready for schema.org

## License

© 2025 Colors Mood Printing Solutions. All rights reserved.

## Support

For issues or questions:
- Email: Sales.dept@colorsmood.com.sa
- Phone: +966544927409
- Location: AlUla, Madinah Region, Saudi Arabia

## Source Attribution

- Company profile: Colors Mood - Profile Arabic (2024-2025)
- Content and images sourced from official company documentation
