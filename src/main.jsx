import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './router.jsx'
import './index.css'
import { ThemeProvider } from './utils/context/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <Router/>
    </ThemeProvider>
  </React.StrictMode>,
)
