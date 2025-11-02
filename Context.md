React Hooks Used in Your Project
1. react-template/src/context/ThemeContext.jsx
useContext - Creates and consumes the ThemeContext for theme management
useEffect (2 instances):
Loads saved theme from localStorage on component mount
Updates DOM classes when theme changes (adds/removes 'dark' class)
useSelector - Gets theme state from Redux store
useDispatch - Dispatches theme actions to Redux store
2. react-template/src/components/Navbar.jsx
useState - Manages mobile menu open/close state (isMobileMenuOpen)
useSelector (2 instances):
Gets theme state (isDarkMode)
Gets authentication state (isAuthenticated, user)
useDispatch - Dispatches logout and theme toggle actions
3. react-template/src/pages/Form.jsx
useState (5 instances):
formData - Manages appointment form data
success - Handles success messages
error - Handles error messages
loading - Manages loading state during form submission
selectedDoctor - Stores selected doctor information
4. react-template/src/pages/Login.jsx
useState (2 instances):
formData - Manages login form data (email, password)
error - Handles login error messages
useDispatch - Dispatches login action
useNavigate - Programmatic navigation after successful login
5. react-template/src/pages/Register.jsx
useState (3 instances):
formData - Manages registration form data
error - Handles registration error messages
success - Handles success messages
useDispatch - Dispatches register action
useNavigate - Programmatic navigation after successful registration
Hook Summary by Type:
useState: 11 instances - Form data, UI state, error/success messages
useEffect: 2 instances - Theme persistence and DOM manipulation
useContext: 1 instance - Theme context consumption
useSelector: 4 instances - Redux state access
useDispatch: 4 instances - Redux action dispatching
useNavigate: 2 instances - Programmatic routing
The hooks are primarily used for state management (local and global), side effects (theme persistence), and navigation in your medical appointment booking application.