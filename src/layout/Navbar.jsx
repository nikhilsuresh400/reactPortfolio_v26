import React, { useState } from 'react'
import { GiWarBonnet } from 'react-icons/gi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { LuX } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className='fixed top-0 left-0 right-0 bg-transparent py-5 z-50'>
            <nav className='container mx-auto px-6 flex items-center justify-between'>
                {/* LOGO */}
                <Link to='/' className='text-4xl text-whiteSecondary hover:text-whitePrimary 
                    transition-colors duration-[0.16s] ease-in-out'><GiWarBonnet /></Link>

                {/* NAVLINKS (Desktop) */}
                <div className='hidden md:flex items-center gap-1'>
                    <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
                        <Link to='/about'
                            className='px-4 py-2 text-sm text-whiteSecondary hover:text-whitePrimary rounded-full hover:bg-white/4'>
                            About</Link>
                        <Link to='/projects'
                            className='px-4 py-2 text-sm text-whiteSecondary hover:text-whitePrimary rounded-full hover:bg-white/4'>
                            Projects</Link>
                        <Link to='/experience'
                            className='px-4 py-2 text-sm text-whiteSecondary hover:text-whitePrimary rounded-full hover:bg-white/4'>
                            Experience</Link>
                        <Link to='/testimonials'
                            className='px-4 py-2 text-sm text-whiteSecondary hover:text-whitePrimary rounded-full hover:bg-white/4'>
                            Testimonials</Link>
                    </div>
                </div>

                {/* CONTACT BUTTON */}
                <div className='hidden md:block'>
                    <button
                        className='relative overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 cursor-pointer
                            focus-visible:ring-whitePrimary bg-whitePrimary text-blackPrimary hover:shadow-lg shadow-whiteSecondary/25
                                transition-all duration-[0.16s] ease-in-out px-6 py-2 text-sm'>
                        Get in Touch
                    </button>
                </div>

                {/* MOBILE MENU BUTTON */}
                <button className='md:hidden p-2 text-whiteSecondary cursor-pointer' 
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <LuX className='text-2xl' /> : <HiOutlineMenuAlt3 className='text-2xl' />}
                </button>
            </nav>

            {/* NAVLINKS (Mobile) */}
            {isMobileMenuOpen && (
                <div className='md:hidden glass-strong mx-6 mt-4 animate-fade-in'>
                    <div className='container mx-auto px-6 py-6 flex flex-col items-center gap-4'>
                        <Link to='/about'
                            className='text-sm text-whiteSecondary hover:text-whitePrimary py-2'>
                            About</Link>
                        <Link to='/projects'
                            className='text-sm text-whiteSecondary hover:text-whitePrimary py-2'>
                            Projects</Link>
                        <Link to='/experience'
                            className='text-sm text-whiteSecondary hover:text-whitePrimary py-2'>
                            Experience</Link>
                        <Link to='/testimonials'
                            className='text-sm text-whiteSecondary hover:text-whitePrimary py-2'>
                            Testimonials</Link>

                        <button
                            className='relative overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 
                            focus-visible:ring-whitePrimary bg-whitePrimary hover:bg-whitePrimary/90 text-blackPrimary
                                w-full px-4 py-2 text-sm mt-2'>
                            Contact Me
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
