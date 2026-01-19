import React from 'react'
import { GiWarBonnet } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='fixed top-0 left-0 right-0 bg-transparent py-5'>
            <nav className='container mx-auto px-6 flex items-center justify-between'>
                {/* LOGO */}
                <Link to='/' className='text-4xl hover:text-accentBlue 
                    transition-colors duration-[0.16s] ease-in-out'><GiWarBonnet /></Link>

                {/* NAVLINKS */}
                <div>
                    <Link to='/about'>About</Link>
                    <Link to='/projects'>Projects</Link>
                    <Link to='/experience'>Experience</Link>
                    <Link to='/testimonials'>Testimonials</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
