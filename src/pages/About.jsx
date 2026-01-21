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
        <section id='about' className='py-32 relative overflow-hidden'>
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
                            <span className='text-whitePrimary font-heading italic font-normal'> one component at a time.</span>
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
