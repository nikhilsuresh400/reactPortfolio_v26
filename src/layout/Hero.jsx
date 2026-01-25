import React from 'react'
import { LuChevronDown, LuDownload, LuGithub, LuInstagram, LuLinkedin, LuMoveRight } from 'react-icons/lu'
import profileImg from '../assets/myphoto.webp';

const skills = [
    "React",
    "Javascript",
    "Node.js",
    "MongoDB",
    "Express",
    "jQuery",
    "Tailwind CSS",
    "Git",
    "Github Actions",
    "Vercel",
    "Figma",
];

const Hero = () => {
    return (
        <section
            id='hero'
            className='relative min-h-screen flex items-center overflow-hidden bg-blackPrimary-light text-whitePrimary-light dark:bg-blackPrimary'>
            {/* PARTICLES */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {[...Array(30)].map((_, i) => (
                    <div key={i} className='absolute w-0.5 h-0.5 rounded-full opacity-60 bg-whitePrimary-light dark:bg-blackPrimary'
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }} />
                ))}
            </div>

            {/* CONTENT */}
            <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-12 items-center'>

                    {/* LEFT COLUMN - TEXT CONTENT */}
                    <div className='space-y-8'>
                        <div className='animate-fade-in'>
                            <span className='glass inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs bg-blackSecondary-light
                                dark:bg-blackSecondary dark:text-whitePrimary'>
                                <span className='bg-green-500 w-2 h-2 rounded-full animate-pulse' />
                                Nikhil Suresh — Analyst @ Accenture
                            </span>
                        </div>

                        {/* HEADLINE */}
                        <div className='space-y-4'>
                            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-200 dark:text-whitePrimary'>
                                Crafting <span className='text-accentBlue glow-text'>digital</span>
                                <br />
                                experiences with
                                <br />
                                <span className='font-heading italic font-normal text-normal'>precision.</span>
                            </h1>
                            <p className='text-lg text-whiteSecondary-light dark:text-whiteSecondary max-w-lg animate-fade-in animate-delay-300'>
                                Building clean , responsive interfaces that load fast, look sharp and don't fight the user.
                            </p>
                        </div>

                        {/* CTAs */}
                        <div className='flex items-center gap-4'>
                            <a href='#contact' className='relative flex items-center justify-center gap-2 overflow-hidden rounded-full 
                                focus:outline-none focus-visible:ring-2 cursor-pointerfocus-visible:ring-whitePrimary 
                                bg-whitePrimary-light text-blackPrimary-light dark:bg-whitePrimary dark:text-blackPrimary hover:shadow-lg shadow-whiteSecondary-light/25 dark:shadow-whiteSecondary/25 
                                transition-all duration-[0.16s] ease-in-out px-6 py-3 text-sm min-w-45'>
                                Contact<LuMoveRight /></a>

                            <button className='relative bg-transparent border border-divider text-whitePrimary-light dark:text-whitePrimary hover:border-whitePrimary-light/60 dark:hover:border-whitePrimary/25
                                transition-all duration-[0.16s] focus:outline-none focus-visible:ring-2 focus-visible:ring-whitePrimary
                                focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-6 py-3 text-sm 
                                rounded-full overflow-visible flex items-center justify-center gap-2 cursor-pointer min-w-45 
                                animated-border'>
                                <LuDownload />Download CV
                            </button>
                        </div>

                        {/* SOCIALS */}
                        <div className='text-lg text-whiteSecondary-light dark:text-whiteSecondary flex items-center gap-4 w-fit'>
                            <div className='p-4 rounded-full bg-blackSecondary-light dark:bg-blackSecondary hover:bg-accentBlue/2 hover:text-accentBlue 
                                transition-all duration-[0.16s] cursor-pointer border border-divider bg'>
                                <LuGithub />
                            </div>
                            <div className='p-4 rounded-full bg-blackSecondary-light dark:bg-blackSecondary hover:bg-accentBlue/2 hover:text-accentBlue 
                                transition-all duration-[0.16s] cursor-pointer border border-divider bg'>
                                <LuLinkedin />
                            </div>
                            <div className='p-4 rounded-full bg-blackSecondary-light dark:bg-blackSecondary hover:bg-accentBlue/2 hover:text-accentBlue 
                                transition-all duration-[0.16s] cursor-pointer border border-divider bg'>
                                <LuInstagram />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - PROFILE IMAGE */}
                    <div className='relative animate-fade-in animate-delay-400'>
                        {/* PROFILE IMAGE */}
                        <div className='relative max-w-md mx-auto'>
                            <div className='absolute inset-0 rounded-3xl
                            bg-linear-to-br from-accentBlue/30 via-transparent to-accentBlue/10
                            blur-2xl animate-pulse' />
                            <div className='relative glass rounded-3xl p-2 glow-border'>

                                <img src={profileImg} alt="Nikhil Suresh"
                                    className='w-full aspect-4/5 object-cover rounded-2xl'
                                />

                                {/* FLOATING BADGE */}
                                <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float'>
                                    <div className='flex items-center gap-3'>
                                        <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse' />
                                        <span className='text-sm font-medium text-whitePrimary-light dark:text-whitePrimary'>Available for work</span>
                                    </div>
                                </div>
                                {/* STATS BADGE */}
                                <div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
                                    <div className='text-2xl font-bold text-accentBlue'>3+</div>
                                    <div className='text-xs text-whitePrimary-light dark:text-whitePrimary'>Years Exp.</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* SKILLS SECTION */}
                <div className='mt-20 animate-fade-in animation-delay-600'>
                    <p className='text-sm text-whiteSecondary-light dark:text-whiteSecondary text-center'>Technologies I work with</p>
                    <div className='relative overflow-hidden'>
                        <div className='absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-blackPrimary-light dark:from-blackPrimary to-transparent z-10' />
                        <div className='absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-blackPrimary-light dark:from-blackPrimary to-transparent z-10' />
                        <div className='flex animate-marquee'>
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className='shrink-0 px-8 py-4'>
                                    <span className='text-whiteSecondary-light/70 hover:text-whiteSecondary-light dark:text-whiteSecondary/50 dark:hover:text-whiteSecondary transition-colors cursor-default'>
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800'>
                <a href="#" className='text-whiteSecondary-light hover:text-whitePrimary-light dark:text-whiteSecondary dark:hover:text-whitePrimary'>
                    <LuChevronDown className='w-5 h-5 animate-bounce' />
                </a>
            </div>
        </section>
    )
}

export default Hero
