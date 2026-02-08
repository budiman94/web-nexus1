# 🚀 Deployment Guide - Nexus Web Application

## Quick Start

### Prerequisites
- **Node.js LTS** - Download from https://nodejs.org/
- **Git** - Already configured

### Step 1: Install Node.js
1. Download Node.js LTS from https://nodejs.org/
2. Run the installer and follow instructions
3. **Important**: Restart PowerShell/Command Prompt after installation

### Step 2: Build the Application

**Option A: Using build.bat (Windows)**
```powershell
cd "d:\Data Adeku\My Blogger\Web-nexus1\web-nexus1"
.\build.bat
```

**Option B: Manual build**
```powershell
cd "d:\Data Adeku\My Blogger\Web-nexus1\web-nexus1"
npm install
npm run build
```

✅ This will create:
- `dist/` folder with all built files
- Ready for deployment to GitHub Pages

### Step 3: Test Locally (Optional)
```powershell
npm run preview
```
Then open http://localhost:4173 in your browser

### Step 4: Push to GitHub
```powershell
git add .
git commit -m "Build application for deployment"
git push origin main
```

✅ GitHub Actions will automatically:
1. Pull your changes
2. Install dependencies
3. Build the application
4. Deploy to GitHub Pages

### Step 5: Verify Deployment
- Check GitHub Actions tab in your repository
- Wait ~5-10 minutes for deployment to complete
- Visit https://budiman94.github.io/web-nexus1/ 

---

## Troubleshooting

### npm: not found
- Node.js is not installed or PATH not updated
- **Solution**: Install Node.js and restart terminal

### Build fails with error
- Missing dependencies or TypeScript errors
- **Solution**: Run `npm install` again

### Still not showing on GitHub Pages
1. Go to repository Settings > Pages
2. Verify "Deploy from a branch" is set to `gh-pages` branch
3. Or check GitHub Actions tab for build errors

---

## Environment Variables
For Gemini API to work, add `GEMINI_API_KEY` to GitHub Secrets:
1. Go to Repository Settings > Secrets and variables > Actions
2. Click "New repository secret"
3. Name: `GEMINI_API_KEY`
4. Value: Your Gemini API key
5. Click "Add secret"

---

## What's Deployed
- ✅ React application built with Vite
- ✅ All components and pages
- ✅ Optimized for GitHub Pages at `/web-nexus1/` path
