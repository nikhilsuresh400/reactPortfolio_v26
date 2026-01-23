import React from 'react'
import Hero from '../layout/Hero'
import About from './About'
import Project from './Project'
import Experience from './Experience'
import Testimonial from './Testimonial'
import Contact from './Contact'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Project />
            <Experience />
            <Testimonial />
            <Contact />
        </div>
    )
}

export default Home
