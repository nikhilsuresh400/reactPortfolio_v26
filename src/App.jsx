import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Testimonial from './pages/Testimonial'
import Footer from './layout/Footer'
import Hero from './layout/Hero'
import Contact from './pages/Contact'
import { Analytics } from '@vercel/analytics/react'

const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme)
  }

  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <div className={theme}>

      <Analytics/>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Project />
      <Experience />
      <Testimonial />
      <Contact />
      <Footer />

    </div>
  )
}

export default App
