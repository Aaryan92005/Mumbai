import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../store/themeSlice'
import { logout } from '../store/authSlice'
import { Sun, Moon, LogOut, User, Menu, X, Heart } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
    const dispatch = useDispatch()
    const isDarkMode = useSelector((state) => state.theme.isDarkMode)
    const { isAuthenticated, user } = useSelector((state) => state.auth)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleLogout = () => {
        dispatch(logout())
        setIsMobileMenuOpen(false)
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const navLinks = [
        { to: '/', label: 'Home' },
        { to: '/form', label: 'Book Appointment' },
        { to: '/about', label: 'About Us' }
    ]

    return (
        <nav className="bg-white dark:bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-8">
                        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                            <Heart className="h-6 w-6 mr-2 text-red-500" />
                            MediCare Plus
                        </Link>
                        <div className="hidden md:flex space-x-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 px-3 py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={() => {
                                console.log('Theme toggle clicked, current isDarkMode:', isDarkMode)
                                dispatch(toggleTheme())
                            }}
                            className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                        >
                            {isDarkMode ? (
                                <Sun className="h-5 w-5" />
                            ) : (
                                <Moon className="h-5 w-5" />
                            )}
                        </button>

                        {/* Desktop Auth Section */}
                        <div className="hidden md:flex items-center space-x-4">
                            {isAuthenticated ? (
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                                        <User className="h-4 w-4" />
                                        <span className="text-sm">Welcome, {user?.email}</span>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="group bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                                    >
                                        <LogOut className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="flex items-center space-x-2">
                                    <Link
                                        to="/login"
                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMobileMenu}
                            className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                            {isAuthenticated ? (
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 px-3 py-2">
                                        <User className="h-4 w-4" />
                                        <span className="text-sm">{user?.email}</span>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full text-left bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2"
                                    >
                                        <LogOut className="h-4 w-4" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-2">
                                    <Link
                                        to="/login"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-blue-50 dark:hover:bg-gray-700"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/register"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-3 py-2 rounded-lg transition-all duration-300 text-center"
                                    >
                                        Register
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar