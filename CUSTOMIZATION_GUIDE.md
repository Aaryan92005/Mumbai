# Customization Guide

This guide will help you quickly adapt this template for your specific project or case study.

## 🎯 Quick Start Customization

### 1. Update Site Information

Edit `src/config/content.js`:

```javascript
export const siteConfig = {
  siteName: "Your Project Name",
  siteDescription: "Your project description",
  heroTitle: "Your Hero Title",
  heroSubtitle: "Your hero subtitle and description",
  // ... other settings
}
```

### 2. Customize Features Section

In the same file, update the features array:

```javascript
features: [
  {
    title: "Your Feature 1",
    description: "Description of your first feature"
  },
  {
    title: "Your Feature 2", 
    description: "Description of your second feature"
  },
  // Add more features as needed
]
```

### 3. Modify Form Fields

Update the form configuration:

```javascript
formConfig: {
  title: "Your Form Title",
  description: "Your form description",
  categories: [
    { value: "category1", label: "Category 1" },
    { value: "category2", label: "Category 2" },
    // Add your categories
  ]
}
```

### 4. Update User Roles

Customize user roles for registration:

```javascript
userRoles: [
  { value: "admin", label: "Administrator" },
  { value: "user", label: "Regular User" },
  // Add your roles
]
```

## 🎨 Styling Customization

### Colors

Update `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
        // Add your color palette
      }
    }
  }
}
```

### Fonts

Add custom fonts in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    font-family: 'Your Font', sans-serif;
  }
}
```

## 📄 Adding New Pages

1. Create a new component in `src/pages/`:

```javascript
// src/pages/NewPage.jsx
const NewPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          New Page
        </h1>
        {/* Your content */}
      </div>
    </div>
  )
}

export default NewPage
```

2. Add the route in `src/App.jsx`:

```javascript
import NewPage from './pages/NewPage'

// In the Routes component:
<Route path="/new-page" element={<NewPage />} />
```

3. Add navigation link in `src/components/Navbar.jsx`:

```javascript
<Link
  to="/new-page"
  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md"
>
  New Page
</Link>
```

## 🔧 Form Customization

### Adding New Form Fields

In `src/pages/Form.jsx`, add new fields to the state and JSX:

```javascript
const [formData, setFormData] = useState({
  // existing fields...
  newField: '',
})

// In the JSX:
<div>
  <label htmlFor="newField" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
    New Field Label
  </label>
  <input
    type="text"
    id="newField"
    name="newField"
    value={formData.newField}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500"
  />
</div>
```

### Custom Validation

Add validation logic in the form submit handler:

```javascript
const handleSubmit = (e) => {
  e.preventDefault()
  
  // Custom validation
  if (!formData.newField) {
    setError('New field is required')
    return
  }
  
  // Rest of submit logic...
}
```

## 🔐 Authentication Customization

### Adding New User Fields

Update the registration form in `src/pages/Register.jsx`:

```javascript
const [formData, setFormData] = useState({
  email: '',
  password: '',
  confirmPassword: '',
  role: 'User Role 1',
  firstName: '',  // New field
  lastName: '',   // New field
})
```

### Custom Authentication Logic

Modify `src/store/authSlice.js` to add custom authentication behavior:

```javascript
// Add new actions
extraActions: {
  updateProfile: (state, action) => {
    state.user = { ...state.user, ...action.payload }
    localStorage.setItem('user', JSON.stringify(state.user))
  }
}
```

## 📱 Responsive Design

The template uses Tailwind's responsive prefixes:
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

Example:
```javascript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Responsive grid */}
</div>
```

## 🌙 Theme Customization

### Adding New Theme Colors

Update `src/store/themeSlice.js` to support more themes:

```javascript
const initialState = {
  theme: localStorage.getItem('theme') || 'light', // 'light', 'dark', 'blue'
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
      localStorage.setItem('theme', action.payload)
    }
  }
})
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Build the project
2. Upload the `dist` folder to Netlify
3. Set up redirects for SPA routing

### Deploy to Vercel

1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

## 💡 Tips

1. **Keep it Simple**: Start with basic customizations and add complexity gradually
2. **Test Responsiveness**: Always test on different screen sizes
3. **Dark Mode**: Remember to test both light and dark themes
4. **Performance**: Use React DevTools to monitor component re-renders
5. **Accessibility**: Maintain proper ARIA labels and keyboard navigation

## 🆘 Common Issues

### Tailwind Classes Not Working
- Make sure the file is included in `tailwind.config.js` content array
- Check for typos in class names
- Restart the development server

### State Not Persisting
- Check localStorage in browser DevTools
- Verify Redux store configuration
- Ensure proper action dispatching

### Routing Issues
- Verify React Router setup in `main.jsx`
- Check route paths in `App.jsx`
- Ensure proper Link components usage