import React, { useEffect, useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Footer from './Components/Footer/Footer'
import About from './Components/About/About'
import Projects from './Components/Project/Projects'
import ResumeNew from './Components/Resume/ResumeNew'
import Contact from './Components/Contact/ContactForm'
import Loader from './Loader'

import Navbar from './Components/Navbar/Navbar'

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
      <Navbar />
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
