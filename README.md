# Orientis Digital - Official Website

Welcome to the repository for the **Orientis Digital** web application built with React, Vite, and Tailwind CSS. 

Orientis Digital is Eastern Visayas' premier technology partner based in Tacloban City, Leyte, Philippines. We deliver custom software development (web and mobile), BIR-compliant SaaS tools, and managed IT infrastructure solutions for MSMEs, enterprises, and government agencies.

---

## 🚀 Technology Stack

- **Frontend Core**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) with PostCSS & Autoprefixer
- **Linting**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)
- **Deployment & Hosting**: [Cloudflare Pages](https://pages.cloudflare.com/) via Wrangler

---

## 🛠️ Key Features & Pages

- **Home (`/`)**: Main landing page highlighting core technology pillars, flagship SaaS products, custom services, and company values.
- **Products (`/products`)**: Showcase of software products and BIR-compliant SaaS platforms.
- **Solutions (`/solutions`)**: Overview of enterprise software development, IT infrastructure, cloud migration, and tech consulting.
- **About (`/about`)**: Story, mission, vision, leadership, and regional impact of Orientis Digital.
- **Contact (`/contact`)**: Interactive inquiry and project onboarding contact form.
- **Legal (`/privacy`, `/terms`)**: Privacy policy and terms of service.
- **Error Pages (`/404`, `/500`, `/403`)**: Custom branded error handling routes and fallbacks.

---

## 📁 Project Structure

```text
website-react/
├── public/                # Static assets (images, logos, favicon)
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── ContactForm.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── PageTransition.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Typewriter.jsx
│   ├── pages/             # Page views & route components
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── Solutions.jsx
│   │   ├── company/       # About & Contact pages
│   │   ├── legal/         # Privacy & Terms of Service
│   │   └── error/         # 404, 500, and 403 error pages
│   ├── App.jsx            # Top-level router & application layout
│   ├── index.css          # Tailwind CSS directives & custom design system
│   └── main.jsx           # React DOM rendering entry point
├── .oxlintrc.json         # Oxlint configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS theme & plugin setup
├── vite.config.js         # Vite configuration
├── wrangler.json          # Cloudflare Pages deployment configuration
└── package.json           # Node dependencies & npm scripts
```

---

## 💻 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/orientis-digital/website-react.git
   cd website-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

---

## 📜 Available Scripts

In the project directory, you can run:

- **`npm run dev`**  
  Starts the local development server with Vite HMR at `http://localhost:5173`.

- **`npm run build`**  
  Bundles and optimizes the app for production in the `./dist` folder.

- **`npm run preview`**  
  Locally previews the production build.

- **`npm run lint`**  
  Runs Oxlint to check code quality and syntax errors across the project.

---

## ☁️ Deployment

This site is configured for deployment to **Cloudflare Pages** via Wrangler.

### Build Configuration

- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Configuration file**: `wrangler.json`

To deploy manually using Wrangler CLI:
```bash
npx wrangler pages deploy dist --project-name=orientis-digital-website
```

---

## 📄 License

Copyright © 2026 Orientis Digital. All rights reserved.

