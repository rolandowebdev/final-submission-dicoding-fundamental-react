import { useContext } from 'react'
import { LanguageContext } from '../context/LanguageProvider'

export const useLanguage = () => {
  const theme = useContext(LanguageContext)

  if (!theme) throw new Error('useLanguage must be used within a ThemeProvider')

  return theme
}
