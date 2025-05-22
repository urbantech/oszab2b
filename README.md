# Osaz B2B Platform

A modern B2B e-commerce solution built with Next.js, TypeScript, and Tailwind CSS. This platform provides a robust foundation for building scalable B2B applications with a focus on performance, developer experience, and maintainability.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13+-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## ✨ Features

- ⚡ **Next.js 13+** with App Router for optimized performance
- 🎨 **Tailwind CSS** with JIT compiler for rapid UI development
- 🛠 **TypeScript** for type safety and better developer experience
- ♿ **Accessible** UI components built with Radix UI
- 📱 **Fully responsive** design that works on all devices
- 🌓 **Dark mode** support out of the box
- 🚀 **Optimized** for production with best practices
- 🔐 **Authentication** ready (to be implemented)
- 📊 **Analytics** integration points (to be implemented)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0.0 or later
- npm (v9+) or yarn (v1.22+)
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/urbantech/oszab2b.git
   cd oszab2b
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   - Development: [http://localhost:3000](http://localhost:3000)

### Building for Production

1. **Create a production build**
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Start the production server**
   ```bash
   npm start
   # or
   yarn start
   ```

## 🛠 Scripts

- `dev`: Start development server
- `build`: Create production build
- `start`: Start production server
- `lint`: Run ESLint
- `format`: Format code with Prettier
- `type-check`: Run TypeScript type checking

## 📂 Project Structure

```
.
├── app/                    # App Router directory
│   ├── about/              # About page
│   ├── dashboard/          # Dashboard pages
│   ├── demo/               # Demo pages
│   └── ...
├── components/            # Reusable components
│   ├── home/              # Home page components
│   ├── layout/            # Layout components
│   └── ui/                # UI components
├── lib/                   # Utility functions and constants
├── public/                # Static files
└── styles/                # Global styles
```

## 🎨 Theming & Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) with a custom theme configuration. The theme can be found in `tailwind.config.ts`.

### Color Palette

- **Primary**: `#0066CC`
- **Secondary**: `#4A90E2`
- **Accent**: `#00C4CC`
- **Dark**: `#1A1A2E`
- **Light**: `#F8F9FA`

### Dark Mode

Dark mode is automatically detected based on system preferences. You can also implement a theme toggle using the `next-themes` package.

## 🧪 Testing

To run tests:

```bash
npm test
# or
yarn test
```

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Furbantech%2Foszab2b)

1. Push your code to a GitHub repository
2. Import the project on Vercel
3. Vercel will automatically detect the Next.js project and set up the deployment

### Self-Hosting

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Commit Message Guidelines

We use [Conventional Commits](https://www.conventionalcommits.org/):
- `feat:` A new feature
- `fix:` A bug fix
- `docs:` Documentation only changes
- `style:` Changes that don't affect the meaning of the code
- `refactor:` A code change that neither fixes a bug nor adds a feature
- `perf:` A code change that improves performance
- `test:` Adding missing tests or correcting existing tests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [shadcn/ui](https://ui.shadcn.com/) for component inspiration
