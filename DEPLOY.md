# Deploy to Vercel

## Option 1: Vercel CLI (fastest)

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# From the project folder:
cd jere-simulator
vercel

# Follow prompts — it detects Next.js automatically.
# Your site will be live at https://your-project.vercel.app
```

## Option 2: GitHub + Vercel Dashboard

1. Push this folder to a GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/jere-simulator.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo

3. Vercel auto-detects Next.js. Click **Deploy**. Done!

## PWA Notes
- PWA features (installable, offline) activate automatically in production
- Service worker is disabled in development mode (by design)
- Test PWA install by opening the deployed URL on mobile — you'll see an "Add to Home Screen" prompt

## Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```
