# GOV.UK Template UI

A React application built with Vite, TypeScript, and the GOV.UK Design System. This template provides a foundation for building accessible, user-friendly government services that follow the GOV.UK Design System standards.

## Features

- ⚡️ **Vite** for fast development and building
- ⚛️ **React 18** with TypeScript
- 🎨 **GOV.UK Frontend** design system components
- 🧭 **React Router** for client-side routing
- 📱 **Accessible** components following GOV.UK patterns
- 🚀 **GitHub Pages** deployment via GitHub Actions
- 🔍 **ESLint** for code quality
- 📦 **Optimized** production builds

## Components

The application includes reusable GOV.UK styled components:

- **Header** - GOV.UK header with logo and navigation
- **Navigation** - Service navigation component
- **Breadcrumb** - Breadcrumb navigation component
- **Footer** - GOV.UK footer component

## Pages

- **Home** (`/`) - Welcome page
- **About** (`/about`) - About page with application information

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Install Dependencies

```bash
npm install
```

This will automatically copy GOV.UK CSS files as part of the postinstall script.

### Development Server

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Deployment

The application is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select **GitHub Actions**
4. Save

The workflow will automatically deploy on every push to the `main` branch.

### Deployment URL

Once deployed, your application will be available at:
`https://nichom01.github.io/gov-ui/`

## Project Structure

```
template-ui/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── assets/                 # Static assets (fonts, images)
├── src/
│   ├── components/
│   │   ├── Breadcrumb.tsx     # Breadcrumb navigation component
│   │   ├── Footer.tsx          # Footer component
│   │   ├── Footer2.tsx         # Alternative footer component
│   │   ├── Header.tsx          # Header component
│   │   └── Navigation.tsx      # Service navigation component
│   ├── pages/
│   │   ├── Home.tsx            # Home page
│   │   └── About.tsx           # About page
│   ├── App.tsx                 # Main App component with routing
│   ├── App.css                 # App styles
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── scripts/
│   └── copy-govuk-css.js      # Script to copy GOV.UK CSS files
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## Technologies

- [React](https://react.dev) - UI library
- [Vite](https://vitejs.dev) - Build tool and dev server
- [TypeScript](https://www.typescriptlang.org) - Type safety
- [React Router](https://reactrouter.com) - Client-side routing
- [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) - Design system

## License

This project is private and proprietary.
