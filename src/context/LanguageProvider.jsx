import PropTypes from 'prop-types'
import { createContext, useEffect, useMemo, useState } from 'react'

export const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() =>
    localStorage.getItem('language'),
  )

  useEffect(() => {
    switch (language) {
      case 'en':
        localStorage.setItem('language', 'en')
        break
      case 'id':
        localStorage.setItem('language', 'id')
        break
      default:
        localStorage.setItem('language', 'en')
        break
    }
  }, [language])

  const values = useMemo(() => ({ language, setLanguage }), [language])

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  )
}

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
