import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import "./index.css"
import App from './App.jsx'
import { Analytics } from "@vercel/analytics/react"
import React from 'react'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
)
