# FactuDTE Landing Page

Modern, minimalistic landing page for FactuDTE - the simplest way to create and manage electronic invoices in El Salvador.

## Features

- Clean, modern design with Tailwind CSS
- Fully responsive (mobile, tablet, desktop)
- Optimized performance with React + Vite
- Sections:
  - Hero with strong value proposition ("From Zero to DTE Ready in Under an Hour")
  - Features showcase (6 key features)
  - Early adopter pricing (first 50 users at $20/month for 2 years)
  - Screenshot placeholders (ready for real screenshots)
  - Call-to-action
  - Footer

## Getting Started

### Prerequisites

- Node.js 18+ or npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Adding Screenshots

To add actual screenshots of the PWA:

1. Take screenshots of the app (Dashboard, Invoice Creation, History, Reports)
2. Place images in `src/assets/` folder (e.g., `dashboard.png`, `invoice-creation.png`, etc.)
3. Import and replace the placeholder divs in `src/App.tsx`

Example:
```tsx
import dashboardImg from './assets/dashboard.png'

// Replace the placeholder div with:
<img src={dashboardImg} alt="Dashboard" className="w-full h-full object-cover" />
```

## Customization

### Colors

Brand colors are defined in `tailwind.config.js`:
- Primary blue: `#2563eb` (matches FactuDTE brand from the PWA)

You can modify the color palette in the `tailwind.config.js` file.

### Content

All content is in `src/App.tsx` and can be easily modified:
- Hero section headline and description
- Feature cards (6 features)
- Pricing details
- Footer links

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Heroicons (SVG icons)

## Project Structure

```
FactuDTE/
├── src/
│   ├── App.tsx          # Main landing page component
│   ├── index.css        # Tailwind CSS imports
│   └── main.tsx         # React entry point
├── public/              # Static assets
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies
```

## Key Messaging

The landing page emphasizes:
- **Simplicity**: "Simple. Practical. Powerful."
- **Speed**: "From Zero to DTE Ready in Under an Hour"
- **Compliance**: "100% Compliant" with El Salvador's DTE requirements
- **Accessibility**: Works on any device, even offline
- **Value**: Early adopter special pricing

## License

All rights reserved.
