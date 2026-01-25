import React from 'react'

const experiences = [
    {
        period: "2022 - Present",
        role: "Frontend Engineer",
        company: "Fenopix Solutions",
        description:
            "Built and maintained multiple React applications for enterprise clients. Introduced automated testing practices that improved code coverage to 85%.",
        technologies: ["React", "Javascript", "GraphQL"],
        current: true,
    },
    {
        period: "2021 - 2022",
        role: "Freelance Developer",
        company: "Self Employed",
        description:
            "Delivered custom web solutions for small businesses and startups. Built 5+ websites and applications, handling everything from design to deployment.",
        technologies: ["React", "Javascript", "Wordpress", "MySQL"],
        current: false,
    },
]

const Experience = () => {
    return (
        <section
            id='experience'
            className='py-32 relative overflow-hidden 
                bg-blackPrimary-light text-whitePrimary-light dark:bg-blackPrimary dark:text-whitePrimary'
        >
            {/* BACKGROUND GLOW */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-accentBlue/5 rounded-full blur-3xl" />
            <div className='container mx-auto px-6 relative z-10'>
                {/* SECTION HEADER */}
                <div className='max-w-3xl mb-16'>
                    <span className='text-accentBlue text-sm font-medium tracking-wider uppercase animate-fade-in'>Career Journey</span>
                    <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-accentBlue'>
                        Expeience that <span className='font-heading italic font-normal text-whitePrimary-light dark:text-whitePrimary'>speaks volumes.</span></h2>
                    <p className='text-whiteSecondary-light dark:text-whiteSecondary animate-fade-in animate-delay-200'>
                        A timeline of my professional growth, from curious beginner to building products at larger scale.
                    </p>
                </div>

                {/* TIMELINE */}
                <div className='relative'>
                    {/* VERTICAL LINE */}
                    <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b
                        from-accentBlue/70 via-accentBlue/30 to-transparent md:translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]' />
                    
                    {/* EXPERIENCE ITEMS */}
                    <div className='space-y-12'>
                        {experiences.map((exp, idx) => (
                            <div key={idx} className='relative grid md:grid-cols-2 gap-8 animate-fade-in'
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}>
                                
                                {/* TIMELINE DOT */}
                                <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-accentBlue rounded-full -translate-x-1/2
                                    ring-4 ring-blackPrimary-light dark:ring-blackPrimary z-10'>
                                {exp.current && <span className='absolute inset-0 rounded-full bg-accentBlue animate-ping opacity-75' />}
                                </div>
                                
                                {/* CONTENT */}
                                <div className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-accentBlue/30 hover:border-accentBlue/50 bg-blackSecondary-light dark:bg-blackSecondary/40 transition-all duration-300`}>
                                        
                                        <span className='text-sm text-accentBlue font-medium'>{exp.period}</span>
                                        <h3 className='text-xl font-semibold mt-2 text-whitePrimary-light dark:text-whitePrimary'>{exp.role}</h3>
                                        <p className='text-whiteSecondary-light dark:text-whiteSecondary'>{exp.company}</p>
                                        <p className='text-sm text-whiteSecondary-light dark:text-whiteSecondary mt-4'>{exp.description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""}`}>
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span key={techIdx} className='px-3 py-1 bg-blackSecondary-light dark:bg-blackSecondary text-xs rounded-full 
                                                    text-whiteSecondary-light dark:text-whiteSecondary border border-divider/50 dark:border-divider'>{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
