import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ToastContainer } from 'react-toastify'
import { LanguageProvider } from './context/LanguageProvider'
import { ThemeProvider } from './context/ThemeProvider'

import 'react-toastify/dist/ReactToastify.css'
import '@fontsource-variable/gabarito'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <ToastContainer />
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
