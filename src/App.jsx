import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
