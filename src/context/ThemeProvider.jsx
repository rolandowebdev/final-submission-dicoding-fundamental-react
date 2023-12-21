import { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext('dark')

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme'))
  const element = document.documentElement

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break
      case 'light':
        element.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        break
      default:
        element.classList.add('dark')
        localStorage.setItem('theme', 'dark')
        break
    }

    return () => localStorage.removeItem('theme')
  }, [theme])

  const values = useMemo(() => ({ theme, setTheme }), [theme])

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  )
}
