# Quixta Frontend Assignment

## Project Overview

This is a modern web application built by transforming a Figma design into a fully functional Next.js application. The project demonstrates pixel-perfect implementation of the design with a focus on performance, accessibility, and maintainable code architecture.

**Key Highlights:**
- Responsive design optimized for all screen sizes
- Component-based architecture with TypeScript for type safety
- Modern UI/UX following design system principles
- Optimized performance with Next.js features
- Accessibility-first approach with semantic HTML

---

## 🛠 Tech Stack

### Core Technologies
- **[Next.js 14](https://nextjs.org/)** – React framework with App Router for server-side rendering and static generation
- **[TypeScript](https://www.typescriptlang.org/)** – Strongly typed JavaScript for enhanced developer experience and code reliability
- **[React 18](https://react.dev/)** – Component-based UI library with latest features
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework for rapid UI development

### Development & Deployment
- **[ESLint](https://eslint.org/)** – Code linting and formatting
- **[PostCSS](https://postcss.org/)** – CSS processing and optimization
- **[Vercel](https://vercel.com/)** – Deployment and hosting platform
- **[Git](https://git-scm.com/)** – Version control system

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quixta-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

---

##  Folder Structure

```
quixta-assignment/
├── public/                # Images, icons, videos, and other static files
├── src/
│   ├── app/               # Next.js App Router pages and global styles
│   ├── components/        # Reusable UI components
│   ├── constants/         # App-wide constants
│   ├── context/           # React Context for global state
│   ├── data/              # Static data (navigation, news, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript types and interfaces
│   └── utils/             # Helper functions
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS setup
├── package.json           # Dependencies and scripts
└── Other config files     # ESLint, PostCSS, TypeScript, README

```

### Component Architecture

- **`components/`** - Houses all reusable UI components
- **`hooks/`** - Custom React hooks for shared logic
- **`types/`** - TypeScript interfaces and type definitions
- **`data/`** - Static data, configurations, and mock data
- **`context/`** - React Context for state management
- **`utils/`** - Helper functions and utilities

---

##  Features

### Design & UI
-  Pixel-perfect implementation of Figma design
-  Fully responsive layout (desktop, tablet, mobile)

### Performance
-  **Next.js App Router** - Server-side rendering and automatic code splitting
-  **Next.js Image Optimization** - Used throughout components with `priority={false}` for lazy loading
-  **React Memoization** - `React.memo()` on components (`LogoCard`, `HeroText`, `GradientLines`, etc.)
-  **Hook Optimizations** - `useMemo` and `useCallback` for expensive computations and event handlers
-  **Custom Performance Hooks** - `useFadeOut` hook with configurable delays
-  **Efficient Re-renders** - Memoized title splitting and filtered data computations
-  **Optimized Video Loading** - Custom `VideoBackground` component with error handling and smooth loading 

### Accessibility
-  Semantic HTML structure
-  Keyboard navigation support

### Development
-  TypeScript for type safety
-  Component-based architecture
-  Reusable hooks and utilities
-  Clean code structure and organization

---

##  Deployment Instructions

### Vercel Deployment (Recommended)

This project is optimized for deployment on **Vercel**, which provides seamless integration with Next.js.

### Live Demo

**Production URL:** [https://serene-pariat-assignment.vercel.app/](https://serene-pariat-assignment.vercel.app/)

---

**Built with using Next.js and TypeScript**