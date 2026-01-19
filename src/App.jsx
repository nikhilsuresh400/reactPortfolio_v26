import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Project from './pages/Project'
import Experience from './pages/Experience'
import Testimonial from './pages/Testimonial'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Project />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/testimonials' element={<Testimonial />} />
      </Routes>
    </div>
  )
}

export default App
