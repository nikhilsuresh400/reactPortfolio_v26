import React from 'react'
import { GiWarBonnet } from 'react-icons/gi';
import { LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu'

const socialLinks = [
    {
        icon: LuGithub,
        href: "https://github.com/nikhilsuresh400",
        label: "Github",
    },
    {
        icon: LuLinkedin,
        href: "#",
        label: "LinkedIn",
    },
    {
        icon: LuInstagram,
        href: "#",
        label: "Instagram",
    },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
]

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='py-12 border-t border-divider bg-blackPrimary-light text-whitePrimary-light dark:bg-blackPrimary dark:text-whitePrimary'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-8'>

                    {/* LOGO & COPYRIGHT */}
                    <div className='flex flex-col place-items-center md:flex-row md:gap-4 md:text-left '>
                        <a href="#" className='text-4xl text-whiteSecondary-light hover:text-whitePrimary-light dark:text-whiteSecondary dark:hover:text-whitePrimary 
                    transition-colors duration-[0.16s] ease-in-out w-fit'><GiWarBonnet /></a>
                        <p
                            className='text-sm text-whiteSecondary-light dark:text-whiteSecondary mt-2'>
                            © {currentYear} Nikhil Suresh. All rights reserved.</p>
                    </div>

                    {/* LINKS */}
                    <nav className='flex flex-wrap justify-center gap-12'>
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className='text-sm text-whiteSecondary-light hover:text-whitePrimary-light 
                                    dark:text-whiteSecondary dark:hover:text-whitePrimary transition-colors'
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* SOCIAL LINKS */}
                    <div className='flex items-center gap-8'>
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                target='_blank' noopener noreferrer 
                                className='p-2 rounded-full glass hover:bg-accentBlue/10 hover:text-whitePrimary-light dark:hover:text-whitePrimary transform-all'
                            >
                                <social.icon className='w-5 h-5' />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer
