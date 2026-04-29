
# E-Cell SRM Ramapuram Landing

Landing page for E-Cell SRM Ramapuram. It is a single-page brochure-style experience built with Next.js App Router and styled via global CSS.

## Tech Stack

- Framework: Next.js (App Router)
- Styling: Global CSS with Tailwind CSS v4 base import
- Fonts: `next/font/google` (Barlow Condensed, Bebas Neue, Crimson Pro, Geist)
- Runtime: React 18

## Project Structure

```
app/
  layout.tsx
  page.tsx
  globals.css
  component/
    background/
    bento/
    panels/
    providers/
    ui/
public/
docs/
```

Notes:
- The brochure layout and content live in app/page.tsx.
- Global styling for the landing layout is in app/globals.css.
- The app/component/ folders are reserved for reusable UI and layout pieces.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint

## Content Updates

Edit the landing content directly in app/page.tsx. Update global visuals, typography, and layout styles in app/globals.css.

## Deployment

Build with `npm run build` and run with `npm run start` on your target host. For hosted deployments, configure your platform to use the standard Next.js build and start commands.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for workflow, expectations, and UI review notes.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE).
