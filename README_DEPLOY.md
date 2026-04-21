Deployment Guide (summary)

1) Production build (static):
   - Run `npm run build` locally — this produces a `dist/` folder with static assets.
   - You can serve it with `npm run start` (runs `server.js`) or use `vite preview` for quick checks.

2) Files to upload to GitHub:
   - All source files (everything in the repo) except files ignored by `.gitignore`.
   - You do NOT need to upload `node_modules` or `dist` (CI/build platforms will build it).
   - If you prefer to upload an already-built site, include the `dist/` folder.

3) Environment variables:
   - Client variables: prefix with `VITE_` (e.g. `VITE_API_URL`) and put them in the host's environment settings.
   - Server variables: keep without `VITE_` and do NOT commit them (use the platform's secret settings).
   - See `.env.example` for the minimal set.

4) Platform-specific notes:
   - Vercel: It detects Vite; set build command `npm run build` and output `dist` (vercel.json provided).
   - Netlify: Build command `npm run build`, publish directory `dist` (netlify.toml provided).
   - Static hosts (GitHub Pages, S3+CloudFront): Upload `dist/` contents directly.
   - Node hosting (Heroku, Render): `start` script uses `server.js` to serve `dist`.

5) Useful scripts (already in `package.json`):
   - `npm run dev` — run Vite dev server
   - `npm run build` — create production `dist/` build
   - `npm run preview` — local preview of build
   - `npm start` — runs the Node static server (for Node hosts)

6) Optional optimizations:
   - Add CI which runs `npm ci && npm run build` on push to `main`.
   - Use Brotli/Gzip compression at CDN level.
   - Use image optimization plugins or external image CDN.

If you want, I can add a simple `Dockerfile` or CI (GitHub Actions) next.