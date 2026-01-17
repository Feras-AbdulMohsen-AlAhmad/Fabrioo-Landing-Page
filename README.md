# Fabrioo — Smart Clothing Landing Page 👕✨

<p align="center">
  <img src="__images/Logo.svg__" alt="Fabrioo Logo" width="200">
</p>

<p align="center">
  <strong>A responsive landing page for Fabrioo</strong><br>
  Smart clothing designed for everyday comfort, wellbeing, and performance
</p>

<p align="center">
  <a href="https://fabrioo.netlify.app/" target="_blank">🌐 Live Demo</a>
</p>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Preview](#-preview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Design System](#-design-system)
- [Custom Font](#-custom-font)
- [Sections](#-sections)
- [Deployment](#-deployment)
- [License](#-license)

---

## 🎯 Overview

Fabrioo is a **training/practice project** built to enhance front-end development skills with a focus on:

- Clean, modern UI design
- Responsive mobile-first layout
- Consistent branding and design system
- Production-ready code structure

This landing page showcases a smart clothing brand experience, complete with product features, gallery, FAQ section, and newsletter integration.

---

## 📸 Preview

<p align="center">
  <img src="__images/mobile.png__" alt="Mobile Preview" width="300">
</p>

<p align="center">
  <img src="__images/PhoneMokups.png__" alt="Product Mockups" width="600">
</p>

---

## ✨ Features

- ✅ **Fully Responsive Design** — Mobile-first approach using Bootstrap 5
- ✅ **Modern Navigation** — Bootstrap Navbar with smooth scrolling
- ✅ **Design Tokens** — CSS custom properties for consistent theming
- ✅ **Interactive Gallery** — Bootstrap Carousel for app screen showcase
- ✅ **FAQ Section** — Bootstrap Accordion for easy content expansion
- ✅ **Form Validation** — Newsletter signup with Bootstrap validation + JavaScript
- ✅ **Custom Typography** — "CoconÆ Next Arabic" font via `@font-face`
- ✅ **Social Integration** — Footer with social media links
- ✅ **App Store Badges** — Quick download links for iOS and Android

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup structure |
| **CSS3** | Styling with custom properties |
| **JavaScript** | Form validation and interactivity |
| **Bootstrap 5** | Responsive grid and components |
| **Font Awesome** | Icon library |

### Documentation Links

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Font Awesome Icons](https://fontawesome.com/)

---

## 📁 Project Structure

```
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── index.js
├── __images/
│   ├── Logo.svg
│   ├── mobile.png
│   ├── PhoneMokups.png
│   ├── HeroSec.svg
│   ├── FAQBG.svg
│   ├── slider/
│   └── icons/
└── fonts/
    ├── CoconAE-Next-Arabic.woff2
    └── CoconAE-Next-Arabic.woff
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Code editor (VS Code recommended)

### Installation & Running

#### Option 1: Direct Open

1. Download or clone the repository:
   ```bash
   git clone https://github.com/yourusername/fabrioo.git
   ```

2. Navigate to the project folder

3. Open `index.html` in your browser

#### Option 2: Local Server (Recommended)

**Using VS Code:**

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension

2. Right-click on `index.html`

3. Select **"Open with Live Server"**

**Using Node.js:**

```bash
npx serve
```

Then open `http://localhost:3000` in your browser

---

## 🎨 Design System

All branding colors are defined in `css/style.css` using CSS custom properties under `:root`:

```css
:root {
  --primary-color: /* Turquoise */
  --secondary-color: /* Navy */
  --accent-color: /* Orange */
  --neutral-100: /* Light Grey */
  --neutral-900: /* Dark Grey */
}
```

### Color Palette

- **Primary (Turquoise)** — Brand identity, CTAs, highlights
- **Secondary (Navy)** — Headers, important text
- **Accent (Orange)** — Action buttons, emphasis
- **Neutrals (Greys)** — Backgrounds, borders, body text

This token-based approach ensures:
- Consistent styling across all components
- Easy theme modifications
- Scalable design system

---

## 🖋 Custom Font

The project uses **"CoconÆ Next Arabic"** as the global typeface for a unique, modern look.

### Font Files Location

```
fonts/
├── CoconAE-Next-Arabic.woff2
└── CoconAE-Next-Arabic.woff
```

The font is loaded via `@font-face` in `style.css` and applied globally to the entire page for consistent typography.

---

## 🧩 Sections

The landing page includes the following sections:

1. **Hero Section**
   - Eye-catching introduction
   - App Store and Google Play download badges
   - Hero illustration

2. **Features Section**
   - Highlighting key product benefits
   - Icon-based feature cards

3. **Products Section**
   - Showcase of smart clothing items
   - Product mockups and descriptions

4. **Gallery Section**
   - Bootstrap Carousel
   - App screen previews and user experience

5. **FAQ Section**
   - Bootstrap Accordion
   - Common questions and answers

6. **Footer**
   - Social media links
   - Newsletter subscription form
   - Brand information

---

## 📦 Deployment

This site is deployed on **Netlify**: [https://fabrioo.netlify.app/](https://fabrioo.netlify.app/)

### Deploy Your Own Version

1. Push your code to GitHub

2. Sign up for [Netlify](https://www.netlify.com/)

3. Connect your GitHub repository

4. Configure deployment:
   - **Build command:** Leave empty (static site)
   - **Publish directory:** `/` (root)

5. Click **Deploy**

Your site will be live in minutes with automatic HTTPS!

---

## 📄 License

This is a **training/practice project** created for educational purposes.

**Important:** If you plan to reuse or publish this project commercially, ensure that all assets (icons, fonts, images) are properly licensed and that you have the necessary rights to use them.

---

<p align="center">
  Made with ❤️ for learning and growth
</p>

<p align="center">
  <a href="https://fabrioo.netlify.app/">View Live Demo</a>
</p>