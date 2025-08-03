# Multi-Theme Switcher App

🔗 **Live Demo:** [multi-theme-switcher-react-app.vercel.app](https://multi-theme-switcher-react-app.vercel.app/)

A dynamic, theme-aware React (Next.js + TypeScript) based web application that allows users to toggle between **three distinctly styled themes**. This project demonstrates responsive design, persistent theming, and component-level adaptation using **Context API** and **Tailwind CSS**.

---

## 📌 Objective

To build a React-based application featuring:

- A theme switcher with **3 unique layouts**
- **Persistent** theme using `localStorage`
- Responsive design with distinct typography, spacing, and component styles per theme
- Data fetching via a public API
- Navigation using **React Router**

---

## 🚀 Features

- 🌗 **Theme Switching**:
  - **Theme 1** (Minimalist): Light layout, simple sans-serif font, clean spacing
  - **Theme 2** (Dark): Sidebar layout, bold serif font, darker palette
  - **Theme 3** (Colorful): Grid layout, vibrant colors, playful Pacifico font

- 🧠 **State Management**: React Context API
- 📦 **Data API**: Product cards fetched from [`https://fakestoreapi.com/products`](https://fakestoreapi.com/products)
- 💾 **Theme Persistence**: Theme saved in `localStorage` across reloads
- 📱 **Responsive Design**: Adapts to all screen sizes
- ✨ **Animations**: Smooth transitions when switching themes
- 🔐 **Secure by Design**: No unsafe eval, XSS, or uncontrolled input rendering
- ⚙️ **Built with**: React, Next.js, TypeScript, Tailwind CSS

---

## 📁 Folder Structure

```
.
src/
├── app/                            # App directory
│   ├── about/                      # About page route
│   │   └── page.tsx                # About page component
│   ├── contact/                    # Contact page route
│   │   └── page.tsx                # Contact page component
│   ├── favicon.ico                 # App favicon
│   ├── globals.css                 # Global styles for the application
│   ├── layout.tsx                  # Root layout wrapper (used by all pages)
│   └── page.tsx                    # Home page component
├── components/                     # Reusable UI components
│   ├── ClientLayout.tsx            # Layout component to manage client-side rendering and theme
│   ├── Header.tsx                  # Top header with app name and theme dropdown
│   └── SideBar.tsx                 # Sidebar navigation (visible in dark mode or specific themes)
├── context/                        # React Contexts
│   └── ThemeContext.tsx            # Theme context for managing and persisting current theme
```

---

## 🖼️ UI Overview

| Theme              | Preview Highlights                           |
| ------------------ | -------------------------------------------- |
| Theme 1 (Light)    | Minimal layout, sans-serif font, header-only |
| Theme 2 (Dark)     | Sidebar layout, serif font, dark background  |
| Theme 3 (Colorful) | Card grid, vibrant colors, Pacifico font     |

> _Each theme visibly alters layout, typography, spacing, and UI behavior._

---

## 🔧 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/multi-theme-switcher.git
cd multi-theme-switcher
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

---

## 🤝 Contributing

Feel free to fork this repo and enhance the theming logic, add animation, or improve accessibility. PRs are welcome!

---

## 📜 License

MIT License © 2025 [Vedant Sharma]
