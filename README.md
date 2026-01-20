# Next.js Optimization Study

A comprehensive study project exploring Next.js optimization techniques including dynamic imports, hydration strategies, and bundle analysis.

## 🚀 Features

- **Dynamic Imports**: Code splitting examples with `next/dynamic`
- **Hydration Strategies**: SSR and Suspense patterns
- **Bundle Analysis**: Integrated with `@next/bundle-analyzer`
- **Material-UI Integration**: Charts and components with proper SSR handling
- **TypeScript**: Full type safety throughout the project

## 📦 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **React**: 19.2.3
- **Styling**: Tailwind CSS 4
- **UI Library**: Material-UI 7.3.7
- **Charts**: MUI X Charts 8.25.0
- **Language**: TypeScript 5

## 🛠️ Getting Started

### Prerequisites

- Node.js 20 or higher
- npm, yarn, pnpm, or bun

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Build with Bundle Analysis

```bash
npm run build
```

The bundle analyzer will automatically open in your browser showing detailed bundle sizes and dependencies.

### Production

```bash
npm run start
```

## 📁 Project Structure

```text
├── app/
│   ├── dynamic-imports/     # Dynamic import examples
│   │   ├── chart/           # Chart with code splitting
│   │   └── tabs/            # Tab components with lazy loading
│   ├── hydration/           # Hydration examples
│   │   ├── ssr/             # Server-side rendering patterns
│   │   └── suspense/        # React Suspense patterns
│   └── ui/                  # UI components
├── components/              # Reusable components
│   ├── chart/               # Chart component (Material-UI)
│   ├── server/              # Server components
│   └── ...
├── lib/                     # Utilities and server actions
│   └── actions/             # Server actions
└── next.config.ts           # Next.js configuration
```

## 🎯 Key Concepts Demonstrated

### Dynamic Imports

Learn how to use `next/dynamic` for code splitting:

- **When to use `ssr: false`**: For components that depend on browser APIs
- **When to use `ssr: true`**: For SEO-critical components
- **Loading states**: Proper fallback UI during code loading

### Hydration Strategies

Explore different hydration approaches:

- **SSR**: Server-side rendering with data fetching
- **Suspense**: Streaming with React Suspense boundaries
- **Loading states**: Proper loading UI patterns

### Bundle Optimization

- Bundle analysis with `@next/bundle-analyzer`
- Code splitting strategies
- Reducing initial bundle size

## 📝 Available Routes

- `/` - Home page
- `/dynamic-imports/chart` - Dynamic chart import example
- `/dynamic-imports/tabs` - Dynamic tabs example
- `/hydration/ssr` - SSR hydration example
- `/hydration/suspense` - Suspense hydration example

## 🔧 Configuration

### Bundle Analyzer

The project includes `@next/bundle-analyzer` configured in `next.config.ts`. Run `npm run build` to see bundle analysis.

### Image Optimization

Remote image patterns are configured for `randomuser.me` in `next.config.ts`.

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Dynamic Imports](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading)
- [React Suspense](https://react.dev/reference/react/Suspense)
- [Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

## 📄 License

This project is for educational purposes.
