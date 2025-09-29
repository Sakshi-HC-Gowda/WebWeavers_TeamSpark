# IEEE SMVITM Website

A modern website built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [npm](https://www.npmjs.com/)

## Getting Started

```bash
cd "Website IEEE"
npm install
npm run dev
```

- The dev server will print a local URL (e.g., `http://localhost:5173`).  
- Press <kbd>Ctrl</kbd>+<kbd>C</kbd> to stop.

## Build & Preview

```bash
npm run build
npm run preview
```

## Project Structure

- `src/pages/` — Route pages (`Home.tsx`, `About.tsx`, `Team.tsx`, `Login.tsx`)
- `src/components/` — Shared UI (`Header.tsx`, `Footer.tsx`, `ui/*`)
- `public/` — Static assets

## Routing

- Configured in [`src/App.tsx`](src/App.tsx) using [react-router-dom](https://reactrouter.com/).
- Add routes in the `<Routes>` block.
- Header links are defined in [`src/components/Header.tsx`](src/components/Header.tsx).

## Login Page

- File: [`src/pages/Login.tsx`](src/pages/Login.tsx)
- Simple email/password form using shadcn/ui components.
- On submit, currently redirects to `/` (placeholder).
- Wire this to your auth API as needed.

## Team Data (Dynamic)

- Data: [`public/team.json`](public/team.json)
- Page: [`src/pages/Team.tsx`](src/pages/Team.tsx) fetches `/team.json` at runtime.
- If `team.json` is missing or invalid, a fallback set is shown.

Example schema:
```json
{
  "year": "2024-25",
  "executiveBoard": [
    {
      "name": "Student Name",
      "position": "Chairperson",
      "year": "Final Year",
      "branch": "Electronics & Communication",
      "email": "name@smvitm.ac.in",
      "linkedin": "https://www.linkedin.com/in/username",
      "achievements": ["Award 1", "Award 2"],
      "photo": "/photos/name.jpg"
    }
  ],
  "coordinators": [
    {
      "name": "Faculty Name",
      "position": "Faculty Advisor",
      "department": "ECE Department",
      "email": "name@smvitm.ac.in",
      "expertise": "Signal Processing, IoT",
      "photo": "/photos/faculty.jpg"
    }
  ],
  "committees": [
    {
      "name": "Technical Committee",
      "focus": "Organizing technical workshops and seminars",
      "members": ["Member A", "Member B"]
    }
  ]
}
```

- Add photos under `public/photos/` and reference them as `/photos/<file>`.

## Styling

- Tailwind CSS configured via [`tailwind.config.ts`](tailwind.config.ts).
- shadcn/ui components in `src/components/ui/*`.

## Linting

```bash
npm run lint
```

## Environment Variables

- Vite uses `import.meta.env`.
- Create a `.env` file if needed (e.g., API base URL):

  ```env
  VITE_API_BASE_URL=https://api.example.com
  ```

## Deployment

- Deploy the `dist/` folder to any static host (Netlify, Vercel, GitHub Pages, etc):

  ```bash
  npm run build
  ```

## Contributions

- Open a PR for changes.
- Keep types strict and avoid `any`.
- Match existing formatting and component patterns.
