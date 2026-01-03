# MEDTR.DE Danışmamlık Website

A modern, professional corporate website for a consultancy specializing in recruiting and integrating internationally qualified nurses into the German healthcare system.

## Features

- **Modern React.js** - Built with React 18 and React Router
- **Multilingual Support** - English, Turkish (Türkçe), and German (Deutsch) language support
- **Scroll Animations** - Smooth fade-in animations as you scroll through the content
- **Responsive Design** - Fully responsive across all devices
- **Static Site** - No backend required, ready for static hosting
- **Professional UI** - Clean, trustworthy design with smooth animations
- **Multiple Pages** - Home, About, Services, Process, and Contact pages

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The static files will be generated in the `dist` directory, ready for deployment to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
nurse_agency/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── LanguageSwitcher.jsx
│   │   ├── LanguageSwitcher.css
│   │   ├── AnimatedSection.jsx
│   │   └── AnimatedSection.css
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── Process.jsx
│   │   ├── Process.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── contexts/
│   │   └── LanguageContext.jsx
│   ├── hooks/
│   │   ├── useTranslation.js
│   │   └── useScrollAnimation.js
│   ├── translations/
│   │   ├── index.js
│   │   ├── en.js
│   │   ├── tr.js
│   │   └── de.js
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern CSS features
- **Intersection Observer API** - For scroll animations
- **Context API** - For language state management

## Deployment

This is a static website that can be deployed to:

- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your repository
- **GitHub Pages** - Use GitHub Actions
- **AWS S3** - Upload the `dist` folder
- Any static hosting service

## Customization

To customize the website:

1. Update contact information in `src/components/Footer.jsx` and `src/pages/Contact.jsx`
2. Modify content in the translation files (`src/translations/en.js`, `tr.js`, `de.js`)
3. Adjust colors in `src/index.css` CSS variables
4. Update company name in translation files (search for `companyName`)

## Language Support

The website supports three languages:
- **English (en)** - Default language
- **Turkish (tr)** - Türkçe
- **German (de)** - Deutsch

Users can switch languages using the language switcher in the header. The selected language is saved in localStorage.

## License

This project is proprietary and confidential.
