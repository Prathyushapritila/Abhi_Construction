# Deploying Abhi Constructions to Vercel

## Method 1: Deploy via GitHub (Recommended)

### Step 1: Initialize Git and Push to GitHub

1. **Initialize Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Abhi Constructions website"
   ```

2. **Create a new repository on GitHub:**
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it: `abhi-constructions` (or any name you prefer)
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Connect and push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/abhi-constructions.git
   git branch -M main
   git push -u origin main
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

### Step 2: Deploy to Vercel

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login (you can use your GitHub account)

2. **Import Project:**
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Find and select your `abhi-constructions` repository
   - Click "Import"

3. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (auto-filled)
   - **Output Directory:** `.next` (auto-filled)
   - **Install Command:** `npm install` (auto-filled)

4. **Environment Variables (if needed):**
   - If you add email service later, add variables here
   - For now, you can skip this

5. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://abhi-constructions.vercel.app`

### Step 3: Update URLs (After Deployment)

After deployment, update these files with your actual Vercel URL:

1. **Update `src/app/layout.tsx`:**
   ```typescript
   metadataBase: new URL("https://your-project.vercel.app"),
   ```

2. **Update `src/app/sitemap.ts`:**
   ```typescript
   const baseUrl = "https://your-project.vercel.app";
   ```

3. **Update `src/app/robots.ts`:**
   ```typescript
   sitemap: "https://your-project.vercel.app/sitemap.xml",
   ```

4. **Commit and push changes:**
   ```bash
   git add .
   git commit -m "Update URLs for production"
   git push
   ```
   Vercel will automatically redeploy!

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No**
- Project name? `abhi-constructions` (or press Enter for default)
- Directory? `./` (press Enter)
- Override settings? **No**

### Step 4: Deploy to Production
```bash
vercel --prod
```

---

## Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `abhiconstructions.com`)
4. Follow DNS configuration instructions
5. Update URLs in code with your custom domain

---

## Automatic Deployments

Once connected to GitHub:
- **Every push to `main` branch** = Automatic production deployment
- **Pull requests** = Preview deployments
- **All deployments** are available in Vercel dashboard

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18+ by default)

### Environment Variables
- Add in Vercel dashboard: Settings → Environment Variables
- Available in both development and production

### Need Help?
- Vercel Docs: https://vercel.com/docs
- Support: https://vercel.com/support

