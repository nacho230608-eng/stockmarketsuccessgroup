# Stock Market Success Group — Website

This is a ready-to-deploy React + Tailwind site (built with Vite).

## Run locally
1. Install Node.js (v18+ recommended).
2. In this folder, run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the local URL that appears.

## Build
```bash
npm run build
npm run preview
```

## Deploy (free options)

### 1) Vercel (free, simplest)
- Push this folder to a new GitHub repo.
- Create a Vercel account and **Import Project** from GitHub.
- Framework Preset: **Vite**. Build command: `npm run build`. Output: `dist`.
- Deploy. Add a custom domain later if you want.

### 2) Netlify (free)
- New Site > Import from Git.
- Build command: `npm run build`, Publish directory: `dist`.
- Deploy.

### 3) GitHub Pages (free)
- Run `npm run build` locally. Commit the `dist` folder to `gh-pages` branch.
- Enable Pages for that branch. (You can also use `vite-plugin-gh-pages` if you like.)

### 4) Cloudflare Pages (free)
- New Project > Connect to Git.
- Build command: `npm run build`, Output: `dist`.

## Customize
- Edit text/content in `src/App.jsx`.
- Add images/logos to `public/` (create it) and reference them in your components.
- To connect the Join form, replace the `<form>` with a Google Form embed or add an endpoint service like Formspree.
