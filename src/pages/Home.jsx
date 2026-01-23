import React from 'react'
import Hero from '../layout/Hero'
import About from './About'
import Project from './Project'
import Experience from './Experience'
import Testimonial from './Testimonial'

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Project />
            <Experience />
            <Testimonial />
        </div>
    )
}

export default Home
