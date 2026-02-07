<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

## KeHomes — AI-powered Kenyan real estate demo

KeHomes is a Vite + React + TypeScript web app for browsing Kenyan rental listings, with an AI assistant (“KeBot”) powered by Gemini.

View your app in AI Studio: https://ai.studio/apps/drive/19bwFo2gR57CKHa0jPgv4ZiQROqVzBxWL

### Features

- Browse listings in grid or map view
- Filter by town, price range, bedrooms, and property type
- Property details modal + inquiry form
- Navbar actions: Sign In / List Property / Verified Agents (modal-based)
- AI:
  - Neighborhood insights for selected towns
  - Floating chat assistant (KeBot)

### Tech

- React + TypeScript
- Vite (dev server defaults to port 3000)
- Tailwind utility classes (class-based styling)
- Gemini via `@google/genai`

## Run locally

**Prerequisites:** Node.js (LTS recommended)

### 1) Install dependencies

```bash
npm install
```

### 2) Configure Gemini API key (optional but recommended)

Create a file named `.env.local` in the project root:

```env
GEMINI_API_KEY=your_key_here
```

Notes:

- The app reads `GEMINI_API_KEY` via Vite env loading (see `vite.config.ts`).
- If the key is missing/invalid, AI features fall back to safe placeholder responses.

### 3) Start the dev server

```bash
npm run dev
```

Then open the URL Vite prints in the terminal.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build

