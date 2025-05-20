import React, { useEffect, useState } from 'react'
import NavBar from './Componenets/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './Componenets/Home/Home'
import Footer from './Componenets/Footer/Footer'
import About from './Componenets/About/About'
import Projects from './Componenets/Project/Projects'
import ResumeNew from './Componenets/Resume/ResumeNew'
import Contact from './Componenets/Contact/ContactForm'
import Loader from './Loader'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  if(isLoading){
    return <Loader />
  }
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/resume" element={<ResumeNew />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
