# Abhi Constructions

A modern, production-ready Next.js 14 website for Abhi Constructions - a premier construction company.

## Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Tailwind CSS** with custom design tokens
- 🌓 **Dark/Light Theme** support with next-themes
- 📱 **Fully Responsive** design
- ♿ **Accessible** with ARIA labels and keyboard navigation
- 🎭 **Framer Motion** animations
- 📝 **React Hook Form** with Zod validation
- 🎨 **shadcn/ui** components
- 🔍 **SEO Optimized** with metadata and sitemap
- 🎯 **TypeScript** for type safety

## Design Tokens

- **Royal Blue**: `#0A4DAD`
- **Steel Gray**: `#4F4F4F`
- **Gold**: `#D4AF37`
- **White**: `#FFFFFF`
- **Background**: `#F8FAFC`

## Fonts

- **Poppins** - Used for headings
- **Inter** - Used for body text

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── services/         # Services page
│   ├── projects/         # Projects page
│   ├── contact/          # Contact page
│   ├── api/              # API routes
│   │   └── contact/      # Contact form API
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── sitemap.ts        # Sitemap generation
│   └── robots.ts         # Robots.txt
├── components/           # React components
│   ├── ui/               # shadcn/ui components
│   ├── navbar.tsx        # Navigation component
│   ├── footer.tsx        # Footer component
│   ├── hero.tsx          # Hero section
│   ├── services-grid.tsx # Services grid
│   ├── projects-gallery.tsx # Projects gallery with filters
│   ├── stats.tsx         # Statistics section
│   ├── testimonials.tsx  # Testimonials carousel
│   ├── cta.tsx           # Call-to-action section
│   ├── contact-form.tsx  # Contact form
│   ├── theme-toggle.tsx  # Theme switcher
│   └── theme-provider.tsx # Theme provider
└── lib/                  # Utility functions
    └── utils.ts          # Utility functions
```

## Pages

- `/` - Home page with hero, services, stats, projects, testimonials, and CTA
- `/about` - About page with company story, values, and mission
- `/services` - Detailed services page
- `/projects` - Projects gallery with filtering
- `/contact` - Contact page with form and contact information

## Components

### Navbar
- Sticky header with no overlap (uses scroll-padding-top)
- Responsive mobile menu
- Theme toggle
- Accessible navigation

### Footer
- Company information
- Quick links
- Services links
- Contact information
- Social media links

### ProjectsGallery
- Client-side filtering by category
- Smooth animations
- Responsive grid layout

### ContactForm
- Form validation with Zod
- React Hook Form integration
- API integration
- Success/error states

## API Routes

### `/api/contact`
POST endpoint for contact form submissions. Currently logs the data and returns success. Integrate with your email service or database as needed.

## SEO

- Metadata configured for all pages
- Sitemap generation (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)
- Open Graph images
- Twitter Card support

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Screen reader friendly

## UX Features

- Sticky header with scroll padding to prevent overlap
- Smooth scroll behavior
- Theme persistence
- Loading states
- Error handling
- Form validation feedback

## Build

```bash
npm run build
```

## Production

```bash
npm start
```

## License

Private - Abhi Constructions

