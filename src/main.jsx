import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import App from './App'

import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from './context/ThemeProvider'
import './fonts/gabarito-bold.ttf'
import './fonts/gabarito-regular.ttf'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToastContainer />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
