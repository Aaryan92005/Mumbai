# React Project Template

A flexible and customizable React template built with Vite, Tailwind CSS, and Redux Toolkit. Perfect for any case study or project that needs a solid foundation with modern web development practices.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, Redux Toolkit
- **Dark/Light Theme**: Toggle between themes with persistence
- **Authentication**: JWT simulation using localStorage
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Handling**: Generic form with localStorage persistence
- **Easy Customization**: Centralized configuration for content updates

## 📦 Installation

1. Clone or download this template
2. Navigate to the project directory:
   ```bash
   cd react-template
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠️ Customization

### Content Updates

Edit the `src/config/content.js` file to customize:
- Site name and description
- Hero section content
- Feature cards
- Form fields and options
- Contact information

### Styling

- Modify Tailwind classes in components
- Update `tailwind.config.js` for custom colors/themes
- Add custom CSS in `src/index.css`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Form.jsx
│   └── About.jsx
├── store/              # Redux store and slices
│   ├── store.js
│   ├── themeSlice.js
│   └── authSlice.js
├── context/            # React context providers
│   └── ThemeContext.jsx
├── config/             # Configuration files
│   └── content.js
└── main.jsx           # App entry point
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Theme System

The template includes a complete dark/light theme system:
- Redux store manages theme state
- Context API provides theme access
- Tailwind CSS handles styling
- localStorage persists user preference

## 🔐 Authentication

JWT authentication simulation includes:
- User registration with role selection
- Login with credential validation
- Session management via localStorage
- Protected routes (can be extended)

## 📝 Form System

Generic form template features:
- Customizable field labels
- Form validation
- localStorage persistence
- Easy field addition/removal

## 🚀 Deployment

Build the project:
```bash
npm run build
```

The `dist` folder contains the production-ready files that can be deployed to any static hosting service.

## 📄 License

This template is free to use for any project, commercial or personal.

## 🤝 Contributing

Feel free to customize and extend this template for your specific needs. The modular structure makes it easy to add new features and modify existing ones.