import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import "./App.css"
const App = () => {
const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 500);
    };
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    return () => window.removeEventListener('load', handleLoad);
  }, []);
  return (
    <>
    {loading ? (
        <div className="loader-wrapper">
          <div className="loader-text">Loading Excellence</div>
          <div className="loader-bar"></div>
        </div>
      ) : (
        <div className="app-content fade-in">
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
  </div>
      )}
    </>
  )
}


export default App
