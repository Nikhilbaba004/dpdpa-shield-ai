# DPDPA Shield AI

DPDPA Shield AI is a polished React + Vite + Tailwind frontend MVP for Indian privacy compliance workflows.

## Features
- Premium SaaS dashboard layout
- Consent management, rights requests, breach response, AI privacy notice, checklist, data inventory, audit timeline, reports, settings
- Local sample data and simulated AI responses
- Fully client-side; no backend or OpenAI API required

## Run locally
```bash
npm install
npm run dev
```

Open `http://localhost:5173/`.

## GitHub setup
1. Create a new GitHub repository.
2. In this folder, run:
```bash
git init
git add .
git commit -m "Initial DPDPA Shield AI frontend MVP"
git branch -M main
git remote add origin https://github.com/<your-user>/<your-repo>.git
git push -u origin main
```

## Vercel deployment
1. Log in to Vercel and import the GitHub repository.
2. Set build command to:
```bash
npm run build
```
3. Set output directory to:
```bash
dist
```
4. Add any environment variables in Vercel if you need API keys later.

## Notes
- Keep secret API credentials out of source control.
- Use `.env` locally for development values and configure Vercel env vars for production.
