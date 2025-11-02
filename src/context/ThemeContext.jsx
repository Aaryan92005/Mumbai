import { createContext, useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTheme, toggleTheme as toggleThemeAction } from '../store/themeSlice'

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch()
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      dispatch(setTheme(savedTheme === 'dark'))
    }
  }, [dispatch])

  useEffect(() => {
    console.log('Theme changed:', isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      console.log('Added dark class')
    } else {
      document.documentElement.classList.remove('dark')
      console.log('Removed dark class')
    }
    console.log('Current classes:', document.documentElement.className)
  }, [isDarkMode])

  const toggleTheme = () => {
    dispatch(toggleThemeAction())
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}