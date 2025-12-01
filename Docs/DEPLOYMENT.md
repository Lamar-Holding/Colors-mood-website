# Colors Mood - Deployment Guide

This guide covers deploying the Colors Mood website to production on Vercel.

## Prerequisites

- GitHub account with the repository pushed
- Vercel account (free tier available)
- Environment variables configured

## Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Vercel will auto-detect Next.js configuration

## Step 2: Configure Environment Variables

In the Vercel dashboard, add the following environment variables:

### Email Configuration (Optional)

For real email sending via nodemailer:

\`\`\`
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
FROM_EMAIL=noreply@colorsmood.com
TO_EMAIL=Sales.dept@colorsmood.com.sa
\`\`\`

### Analytics (Optional)

\`\`\`
NEXT_PUBLIC_GA_ID=your-google-analytics-id
\`\`\`

## Step 3: Deploy

Click "Deploy" and Vercel will:

1. Build the Next.js project
2. Run optimizations
3. Deploy to global CDN
4. Provide a production URL

## Step 4: Custom Domain

1. In Vercel dashboard → Settings → Domains
2. Add your domain (e.g., colorsmood.com)
3. Update DNS records as per Vercel instructions
4. Vercel auto-provisions SSL certificate

## Step 5: Verify Deployment

- Visit your production URL
- Test language switching (EN/AR)
- Test dark/light mode toggle
- Submit test contact form
- Check that images load correctly

## Continuous Deployment

After initial setup:

1. Push changes to main branch
2. Vercel automatically builds and deploys
3. Preview deployments created for pull requests
4. Production updates go live after merge to main

## Performance Optimization

Vercel includes:

- Automatic image optimization
- Code splitting and minification
- Edge caching for static content
- Serverless function optimization

## Monitoring

In Vercel dashboard:

1. **Analytics**: View usage statistics
2. **Logs**: Check function and build logs
3. **Metrics**: Monitor performance and errors
4. **Deployments**: Track deployment history

## Rollback

If issues occur:

1. Go to Deployments tab
2. Find previous successful deployment
3. Click "Promote to Production"
4. Deployment rolls back instantly

## SSL/TLS

- Automatic HTTPS enabled
- Free SSL certificate via Let's Encrypt
- Renewal automatic
- No configuration needed

## Database Integration (Optional)

For adding a database (Supabase, Neon, etc.):

1. Add database URL to environment variables
2. Update API routes to use database
3. Deploy changes
4. Test database connectivity

## Email Setup with Nodemailer

To enable real email sending:

1. Install nodemailer: `npm install nodemailer`
2. Uncomment email code in `/app/api/contact/route.ts`
3. Add SMTP environment variables
4. Test with contact form

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies in package.json
- Verify environment variables set

### Images Not Loading
- Check image paths are relative to public folder
- Ensure images are in `/public` directory
- Verify image formats supported (JPG, PNG, WebP)

### Language/Theme Not Persisting
- Clear browser cache and localStorage
- Check browser console for errors
- Verify localStorage not disabled

### Contact Form Not Working
- Check API route logs
- Verify environment variables for email
- Test with curl: `curl -X POST https://your-site.com/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com"}'`

## Performance Tips

1. **Images**: Use Next.js Image component for optimization
2. **Fonts**: Cairo and Poppins loaded via Google Fonts
3. **Code**: Tree-shaking removes unused code
4. **Cache**: Configure cache headers for static content
5. **CDN**: Vercel automatically uses global CDN

## Security

1. **HTTPS**: Automatic, always enabled
2. **Headers**: Security headers configured
3. **CORS**: Set up as needed
4. **Environment Variables**: Never commit to git
5. **Contact Form**: Server-side validation prevents injection

## Contact Support

For Vercel deployment support:
- Email: support@vercel.com
- Docs: https://vercel.com/docs

For Colors Mood website issues:
- Email: Sales.dept@colorsmood.com.sa
- Phone: +966544927409
