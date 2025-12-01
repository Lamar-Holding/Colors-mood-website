# Colors Mood Website - Features & Implementation

## Core Features

### 1. Bilingual Support (English & Arabic)
- **Implementation**: Custom i18n system with `/locales/en.json` and `/locales/ar.json`
- **Language Toggle**: Quick EN/ع button in header
- **RTL Support**: Automatic direction (RTL) for Arabic, layout mirroring
- **Persistent**: Language choice saved in localStorage
- **Sections**: All UI text, forms, and content translated

### 2. Dark/Light Mode
- **Implementation**: Custom `useTheme` hook with localStorage persistence
- **Toggle Button**: Moon/Sun icon in header
- **Colors**: Optimized color palette for both modes
- **Smooth Transitions**: Seamless switching with CSS transitions
- **Default**: Respects system preference

### 3. Responsive Design
- **Mobile First**: Designed for mobile, enhanced for desktop
- **Breakpoints**: Tailwind responsive prefixes (sm, md, lg)
- **Navigation**: Hamburger menu on mobile, full nav on desktop
- **Images**: Lazy loading with responsive sizing
- **Touch Friendly**: Larger touch targets on mobile

### 4. Smooth Animations
- **Fade In/Up**: Sections fade in as user scrolls
- **Slide Transitions**: Navigation smooth scrolling
- **Hover Effects**: Interactive button and card animations
- **Scroll Indicator**: Animated arrow in hero section
- **Performance**: Hardware-accelerated CSS animations

### 5. Contact Form
- **Validation**: Client-side and server-side validation
- **Fields**: Name, Email, Message (optional)
- **Error Handling**: Real-time validation feedback
- **Success Message**: Confirmation in user's language
- **Privacy**: Clear privacy notice included

### 6. Portfolio Gallery
- **Grid Layout**: Responsive 3-column grid
- **Lightbox Modal**: Click to view full project details
- **Project Info**: Title, description, tags, PDF page references
- **High Quality Images**: 6 showcase projects with real images
- **Citations**: Each project cites PDF source

### 7. Accessibility
- **WCAG Compliant**: Semantic HTML, proper landmarks
- **Keyboard Navigation**: Full keyboard support
- **ARIA Labels**: Proper labels for interactive elements
- **Focus Indicators**: Clear focus states with gold borders
- **Accessibility Widget**: Font size adjustment and high contrast mode
- **Screen Reader Ready**: Proper heading hierarchy

### 8. SEO Optimized
- **Meta Tags**: Title, description, OG tags
- **Canonical URLs**: Proper canonical tag setup
- **Sitemap Ready**: Structure supports sitemap generation
- **Language Tags**: Proper lang attributes for bilingual support
- **Structured Data**: Ready for schema.org markup

### 9. Performance
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting per route
- **Caching**: Static content caching configured
- **Fast Hydration**: Optimized client-side hydration
- **Lighthouse Score**: Optimized for 90+ scores

## Page Sections

### Header
- Logo with brand colors
- Sticky positioning with scroll shadow
- Language toggle (EN/ع)
- Theme toggle (light/dark)
- Active section highlighting
- Mobile hamburger menu

### Hero
- Large background with gradient overlay
- Animated decorative elements
- Call-to-action buttons
- Company tagline
- Scroll indicator animation

### About
- Company profile and year
- Mission and Vision cards
- "Why Choose Us" highlights
- Location information
- Brand value proposition

### Services
- 6 service categories with icons
- Expandable accordion cards
- Detailed descriptions
- Service categorization
- Easy-to-scan format

### Vehicle & Signage
- Vehicle types gallery (buses, transport, corporate)
- Hover image zoom effects
- Commercial signage showcase
- Feature list for each service type
- Professional project examples

### Capabilities
- 5 production capability cards
- Quality assurance section
- Material specifications
- Process timeline ready
- Trust-building content

### Pricing
- Comparison table format
- Service tiers and materials
- Warranty information
- Starting prices in SAR
- Discount notes for bulk orders

### Portfolio
- 6 project showcase items
- Grid layout with lazy loading
- Project tags and categories
- Lightbox modal for details
- PDF page citations
- Client information

### Contact
- Contact information (phone, email, location)
- Working contact form
- Validation feedback
- Success/error messages
- Privacy notice
- Multi-language support

### Footer
- Quick links
- Contact information
- Company branding
- Copyright notice
- PDF source attribution

## Technical Implementation

### Architecture
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 with custom theme
- **Forms**: Controlled components with validation
- **State**: React hooks (useState, useEffect)
- **i18n**: Custom lightweight solution
- **Fonts**: Cairo (Arabic) + Poppins (English)

### API Routes
- **POST /api/contact**: Submit contact form
- **GET /api/contact**: Retrieve submissions (admin)
- **Validation**: Server-side email and content validation
- **Error Handling**: Graceful error responses

### Hooks
- `useLanguage`: Language switching and persistence
- `useTheme`: Dark mode toggling
- `useTranslation`: Translation lookup

### Components
- **Reusable**: Header, Footer, sections
- **Client Components**: Interactive features
- **Server Components**: Static content
- **Props Typed**: TypeScript interfaces for all props

### Styling
- **Design Tokens**: Custom color variables
- **Responsive**: Mobile-first approach
- **Dark Mode**: CSS custom properties
- **Animations**: Keyframe animations
- **Tailwind**: Utility-first CSS framework

## Content Structure

All content sourced from:
- Company profile PDF (2024-2025)
- Official company information
- Project portfolio and case studies
- Service descriptions and pricing

## Localization

### English (en.json)
- 100+ translation keys
- All UI strings
- Form labels and messages
- Section content

### Arabic (ar.json)
- 100+ translation keys matching English
- Right-to-left layout support
- Arabic fonts (Cairo)
- RTL-aware navigation

## Security Features

- **HTTPS**: Automatic via Vercel
- **Input Validation**: Client and server-side
- **CORS**: Configured for production domain
- **Environment Variables**: Never exposed
- **NoSQL Injection**: Protected via validation

## Performance Metrics

- **Lighthouse**: Optimized for 90+ scores
- **Core Web Vitals**: LCP, FID, CLS optimized
- **Build Size**: Optimized with tree-shaking
- **Runtime**: Efficient client-side rendering

## Deployment

- **Hosting**: Vercel (recommended)
- **CI/CD**: Automatic deployment on push
- **Domains**: Custom domain support
- **SSL**: Automatic HTTPS
- **CDN**: Global CDN included

## Future Enhancements

- Database integration (Supabase/Neon)
- Real email sending (nodemailer)
- Admin dashboard for content management
- Blog section
- Testimonials section
- Team page
- Booking system
- Analytics integration
- Multi-currency support
