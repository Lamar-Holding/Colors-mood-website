# GitHub & Vercel Deployment Guide

## Step 1: Push to GitHub

### 1.1 Create a GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click the **+** icon in the top right and select **New repository**
3. Name it: `colors-mood-website`
4. Add description: "Colors Mood Printing Solutions - Professional Website"
5. Choose **Public** or **Private** (your preference)
6. **Do NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **Create repository**

### 1.2 Push Your Code to GitHub

Run these commands in your terminal (PowerShell):

```powershell
cd "c:\Users\LENOVO\Desktop\Colors mood website"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Colors Mood website with bilingual support"

# Add remote repository (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/colors-mood-website.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### 1.3 Verify on GitHub
- Go to your repository URL: `https://github.com/YOUR_USERNAME/colors-mood-website`
- You should see all your files uploaded

---

## Step 2: Deploy to Vercel

### 2.1 Connect Vercel to GitHub

1. Go to [Vercel.com](https://vercel.com)
2. Sign up or log in with your GitHub account
3. Click **Add New...** → **Project**
4. Select **Import Git Repository**
5. Search for `colors-mood-website` and click **Import**

### 2.2 Configure Project Settings

1. **Project Name**: `colors-mood` (or your preferred name)
2. **Framework Preset**: Select **Next.js**
3. **Root Directory**: Leave as `.` (default)
4. **Build Command**: Leave as default
5. **Output Directory**: Leave as default
6. **Environment Variables**: Leave empty (unless you have any)
7. Click **Deploy**

### 2.3 Wait for Deployment

- Vercel will automatically build and deploy your site
- You'll see a progress indicator
- Once complete, you'll get a live URL like: `https://colors-mood.vercel.app`

---

## Step 3: Continuous Deployment

After the initial setup, every time you push to GitHub:

```powershell
# Make your changes locally
# Then:

git add .
git commit -m "Your commit message"
git push origin main
```

Vercel will **automatically rebuild and redeploy** your site!

---

## Step 4: Custom Domain (Optional)

1. Go to your Vercel project dashboard
2. Click **Settings** → **Domains**
3. Add your custom domain (e.g., `colorsmood.com`)
4. Follow the DNS configuration instructions
5. Point your domain registrar to Vercel's nameservers

---

## Troubleshooting

### Build Fails on Vercel
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `npm install` locally and test: `npm run build`

### PDF Files Not Downloading
- ✅ Already fixed! PDFs are now in the `/public` folder
- Vercel will serve them automatically

### Environment Variables
If you need environment variables:
1. Go to Vercel project → **Settings** → **Environment Variables**
2. Add your variables
3. Redeploy

---

## Quick Reference Commands

```powershell
# Check git status
git status

# View commit history
git log --oneline

# Make changes and push
git add .
git commit -m "Your message"
git push origin main

# Pull latest changes
git pull origin main
```

---

## Files Included in Deployment

✅ All source code
✅ Configuration files (next.config.mjs, tsconfig.json, etc.)
✅ Public assets (images, PDFs)
✅ Localization files (en.json, ar.json)
✅ Styles and components

❌ Excluded (via .gitignore):
- `node_modules/` (Vercel installs these)
- `.next/` (Vercel builds this)
- `.env` files (use Vercel's environment variables)
- IDE settings (.vscode/, .idea/)

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Docs**: https://docs.github.com
