import React, { useEffect, useState } from 'react'
import { GiWarBonnet } from 'react-icons/gi'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { LuMoon, LuSun, LuX } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
];

const Navbar = ({ toggleTheme, theme }) => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            }
            else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 ring-transparent ring-offset-0 transition-all duration-[0.16s] outline-none focus:outline-none
            ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5"} z-50`}
            style={{ outline: 'none' }}>
            <nav className='container mx-auto px-6 flex items-center justify-between'>
                {/* LOGO */}
                <a href='#' className='text-4xl text-whiteSecondary hover:text-whitePrimary 
                    transition-colors duration-[0.16s] ease-in-out'><GiWarBonnet /></a>

                {/* NAVLINKS (Desktop) */}
                <div className='hidden md:flex items-center gap-1'>
                    <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
                        {navLinks.map((link, index) => (
                            <a href={link.href}
                                key={index}
                                className='px-4 py-2 text-sm text-whiteSecondary hover:text-whitePrimary rounded-full hover:bg-white/4'
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className='flex items-center gap-4 md:gap-12'>

                    {/* THEME TOGGLE BUTTON */}
                    <div  
                        onClick={toggleTheme} 
                        className='transition-all group p-3 rounded-full cursor-pointer'>
                        
                        {theme === "dark" 
                        ? 
                        <LuSun className='text-xl text-whiteSecondary group-hover:text-whitePrimary transition-all
                        group-hover:rotate-45'/> 
                        : 
                        <LuMoon className='text-xl text-whiteSecondary group-hover:text-whitePrimary transition-all
                        group-hover:rotate-45'/>}
                    </div>

                    {/* CONTACT BUTTON */}
                    <div className='hidden md:block'>
                        <a href="#contact"
                            className='relative overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 cursor-pointer
                                focus-visible:ring-whitePrimary bg-whitePrimary text-blackPrimary hover:shadow-lg shadow-whiteSecondary/25
                                    transition-all duration-[0.16s] ease-in-out px-6 py-3 text-sm'>
                            Get in Touch
                        </a>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button className='md:hidden p-2 text-whiteSecondary cursor-pointer'
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    >
                        {isMobileMenuOpen ? <LuX className='text-2xl' /> : <HiOutlineMenuAlt3 className='text-2xl' />}
                    </button>
                </div>

            </nav>

            {/* NAVLINKS (Mobile) */}
            {isMobileMenuOpen && (
                <div className='md:hidden glass-strong mx-6 mt-4 animate-fade-in'>
                    <div className='container mx-auto px-6 py-6 flex flex-col items-center gap-4'>
                        {navLinks.map((link, index) => (
                            <a
                                href={link.href}
                                key={index}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className='text-sm text-whiteSecondary hover:text-whitePrimary py-2'
                            >
                                {link.label}
                            </a>
                        ))}

                        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}
                            className='relative overflow-hidden rounded-full focus:outline-none focus-visible:ring-2 
                            focus-visible:ring-whitePrimary bg-whitePrimary hover:bg-whitePrimary/90 text-blackPrimary
                                w-full px-4 py-3 text-sm text-center'>
                            Contact Me
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar
