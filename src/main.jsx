import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import './fonts/gabarito-bold.ttf'
import './fonts/gabarito-regular.ttf'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>,
)
