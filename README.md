# IEEE SMVITM Website

React + Vite + TypeScript + Tailwind + shadcn/ui

### Prerequisites
- Node.js 18+ and npm

### Getting started
```powershell
cd "Website IEEE"
npm install
npm run dev
```
The dev server prints the URL (e.g., http://localhost:5173 or http://localhost:8081). Press Ctrl+C to stop.

### Build
```bash
npm run build
npm run preview
```

### Project structure
- `src/pages/` route pages (e.g., `Home.tsx`, `About.tsx`, `Team.tsx`, `Login.tsx`)
- `src/components/` shared UI (`Header`, `Footer`, `ui/*`)
- `public/` static assets served as-is

### Routing
Configured in `src/App.tsx` using `react-router-dom`.
- Add routes in the `<Routes>` block
- Header links are defined in `src/components/Header.tsx`

### Login page
- File: `src/pages/Login.tsx`
- Simple email/password form with shadcn/ui components
- On submit, it currently redirects to `/` (placeholder). Wire this to your auth API as needed.

### Team data (dynamic)
- Data file: `public/team.json`
- Page: `src/pages/Team.tsx` fetches `/team.json` at runtime
- If `team.json` is missing or invalid, the page shows a fallback set

Schema (example):
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

Add photos under `public/photos/` and reference with `/photos/<file>`.

### Styling
- Tailwind CSS configured via `tailwind.config.ts`
- shadcn/ui components in `src/components/ui/*`

### Linting
```bash
npm run lint
```

### Environment variables
Vite uses `import.meta.env`. Create a `.env` if needed (e.g., API base URL):
```env
VITE_API_BASE_URL=https://api.example.com
```

### Deployment
Any static host supporting Vite build output (e.g., Netlify, Vercel, GitHub Pages):
1. `npm run build`
2. Deploy `dist/`

### Contributions
- Open a PR for changes
- Keep types strict and avoid `any`
- Match existing formatting and component patterns
