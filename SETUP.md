# Setup Guide

## Initial Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Important Notes

### Open Graph Image
- Place your Open Graph image at `/public/og-image.jpg`
- Recommended size: 1200x630px
- This image is used for social media sharing previews

### Contact Form API
The contact form API route (`/api/contact`) currently logs submissions and returns success. To make it functional:

1. **Email Integration**: Add an email service (e.g., SendGrid, Resend, Nodemailer)
2. **Database**: Store submissions in a database (e.g., PostgreSQL, MongoDB)
3. **CRM Integration**: Connect to your CRM system

Example integration in `src/app/api/contact/route.ts`:
```typescript
// Add email sending
import { sendEmail } from '@/lib/email';

// In the POST handler:
await sendEmail({
  to: 'info@abhiconstructions.com',
  subject: `New Contact: ${validatedData.subject}`,
  body: `Name: ${validatedData.name}\nEmail: ${validatedData.email}\n...`
});
```

### Google Verification
Update the Google verification code in `src/app/layout.tsx`:
```typescript
verification: {
  google: "your-actual-google-verification-code",
},
```

### Environment Variables
Create a `.env.local` file for any API keys or secrets:
```
EMAIL_API_KEY=your_key_here
DATABASE_URL=your_database_url
```

## Customization

### Colors
Update design tokens in:
- `tailwind.config.ts` - Tailwind configuration
- `src/app/globals.css` - CSS variables

### Content
- Update company information in `src/components/footer.tsx`
- Modify services in `src/components/services-grid.tsx` and `src/app/services/page.tsx`
- Update projects in `src/components/projects-gallery.tsx`
- Edit testimonials in `src/components/testimonials.tsx`

### SEO
- Update metadata in `src/app/layout.tsx`
- Modify sitemap in `src/app/sitemap.ts`
- Update robots.txt in `src/app/robots.ts`

## Build for Production

```bash
npm run build
npm start
```

## Deployment

The project is ready to deploy to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

Make sure to:
1. Set environment variables in your hosting platform
2. Update the base URL in `sitemap.ts` and `robots.ts`
3. Add your Open Graph image
4. Configure your contact form API endpoint

