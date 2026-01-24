import React from 'react'
import { GiWarBonnet } from 'react-icons/gi';
import { LuGithub, LuInstagram, LuLinkedin } from 'react-icons/lu'

const socialLinks = [
    {
        icon: LuGithub,
        href: "#",
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
        <footer className='py-12 border-t border-divider'>
            <div className='container mx-auto px-6'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-8'>

                    {/* LOGO & COPYRIGHT */}
                    <div className='text-center md:text-left'>
                        <a href="#" className='text-4xl text-whiteSecondary hover:text-whitePrimary 
                    transition-colors duration-[0.16s] ease-in-out'><GiWarBonnet /></a>
                        <p
                            className='text-sm text-whiteSecondary mt-2'>
                            © {currentYear} Nikhil Suresh. All rights reserved.</p>
                    </div>

                    {/* LINKS */}
                    <nav className='flex flex-wrap justify-center gap-12'>
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className='text-sm text-whiteSecondary hover:text-whitePrimary transition-colors'
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
                                className='p-2 rounded-full glass hover:bg-accentBlue/10 hover:text-whitePrimary transform-all'
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
