import React from 'react'
import { LuCodeXml, LuLightbulb, LuRocket, LuUsers } from 'react-icons/lu'

const highlights = [
    {
        icon: LuCodeXml,
        title: "Clean Code",
        description:
            "Writing maintanable, scalable code that stands the test of time.",
    },
    {
        icon: LuRocket,
        title: "Performance",
        description:
            "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: LuUsers,
        title: "Collaboration",
        description:
            "Working closely with teams to bring ideas to life.",
    },
    {
        icon: LuLightbulb,
        title: "Innovation",
        description:
            "Staying ahead with latest technologies and best practices.",
    }, 
]

const About = () => {
    return (
        <section id='about' className='py-32 relative overflow-hidden bg-blackPrimary-light text-whitePrimary-light dark:bg-blackPrimary'>
            <div className='container mx-auto px-6 relative z-10'>
                <div className='grid lg:grid-cols-2 gap-16 items-center'>
                    {/* LEFT COLUMN */}
                    <div className='space-y-8 '>
                        <div className='animate-fade-in'>
                            <span className='text-accentBlue text-sm font-medium tracking-wider uppercase'>
                                About Me
                            </span>
                        </div>

                        <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in animate-delay-100 text-accentBlue'>
                            Building the future,
                            <span className='text-whitePrimary-light dark:text-whitePrimary font-heading italic font-normal'> one component at a time.</span>
                        </h2>
                        <div className='space-y-4 text-whiteSecondary-light dark:text-whiteSecondary animate-fade-in animate-delay-200'>
                            <p>
                                Hello! I'm a Frontend developer with over 3 years of experience 
                                crafting digital products that make a difference.
                            </p>
                            <p>
                                I specialize in React, Javascript and Tailwind CSS. I build things on the web that usually work as intended.
                                My approach combines technical excellence whit a keen eye fir design and user experience.
                            </p>
                            <p>
                                When I'm not developing, you'll find me learning, breaking things on purpose,
                                and slowly turning confusion into features.
                            </p>
                        </div>
                        <div className='glass glow-border rounded-2xl p-6 animate-fade-in animate-delay-200 bg-blackSecondary-light dark:bg-blackSecondary'>
                            <p className='text-md font-medium italic text-whitePrimary-light dark:text-whitePrimary'>
                                "My mission is to create digital experiences that are not just functional, but truly delightful -
                                products that users love to use and developers love to mantain."
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - HIGHLIGHTS */}
                    <div className='grid sm:grid-cols-2 gap-6'>
                        {highlights.map((item, index) => (
                            <div
                                key={index}
                                className='glass p-6 rounded-2xl animate-fade-in'
                                style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                                <div
                                    className='w-12 h-12 rounded-xl bg-accentBlue/8 flex items-center justify-center mb-4
                                        hover:bg-accentBlue/20'>
                                    <item.icon className='w-5 h-5 text-accentBlue' />
                                </div>
                                <h3 className='font-semibold mb-2 dark:text-blackPrimary-light'>{item.title}</h3>
                                <p className='text-sm text-whiteSecondary-light dark:text-whiteSecondary'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
