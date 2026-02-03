import React from 'react'
import { LuArrowUpRight, LuDownload, LuGithub, LuMoveRight } from 'react-icons/lu'
import project1 from '../assets/resumeanalyser-project.png'
import project2 from '../assets/projectmanagment-project.webp'
import project3 from '../assets/cryptotracker-project.webp'
import project4 from '../assets/writingassistant-project.webp'

const projects = [
    {
        title: "AI Resume Analyser",
        description: "An intelligent resume analyser powered by gpt-4, helping users create better resumes.",
        image: project1,
        tags: ["Reactjs", "Tailwindcss", "Puter.ai"],
        link: "https://resume-analyser-aipowered.vercel.app/",
        github: "https://github.com/nikhilsuresh400/resume-analyser",
    },
    {
        title: "Project Managment Tool",
        description: "A collaborative workspace for teams with real-time updates, task tracking and integrations",
        image: project2,
        tags: ["Reactjs", "Tailwindcss", "PostgreSQL", "MongoDB"],
        link: "#",
        github: "#",
    },
    {
        title: "Crypto Tracker",
        description: "A real-time crypto price tracker with live market data, trends, and a clean, responsive interface.",
        image: project3,
        tags: ["Reactjs", "Tailwindcss", "PostgreSQL"],
        link: "#",
        github: "#",
    },
    {
        title: "AI Writing Assiatant",
        description: "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
        image: project4,
        tags: ["Reactjs", "OpenAI", "FastAPI"],
        link: "#",
        github: "#",
    },
]

const Project = () => {
    return (
        <section id='projects' className='py-32 relative overflow-hidden
            bg-blackPrimary-light dark:bg-blackPrimary text-whitePrimary-light dark:text-whitePrimary'>

            {/* BACKGROUND GLOWS */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-accentBlue/5 rounded-full blur-3xl" />
            <div className='container mx-auto px-6 relative z-10'>
                {/* SECTION HEADER */}
                <div className='text-center mx-auto max-w-3xl mb-16'>
                    <span className='text-accentBlue text-sm font-medium tracking-wider uppercase animate-fade-in'>
                        Featured Work
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-accentBlue'>Projects that
                        <span className='font-heading italic font-normal text-whitePrimary-light dark:text-whitePrimary'> make an impact.</span></h2>
                    <p className='text-whiteSecondary-light dark:text-whiteSecondary animate-fade-in animate-delay-200'>
                        A selection of my recent work, from complex web applications to innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* PROJECTS GRID */}
                <div className='grid md:grid-cols-2 gap-8'>
                    {projects.map((project, idx) => (
                        <div key={idx} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1 
                            bg-blackSecondary-light dark:bg-blackSecondary/40'
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                            {/* IMAGE */}
                            <div className='aspect-video relative overflow-hidden'>
                                <img src={project.image} alt={project.title}
                                    className='w-full h-full object- object-center transition-transform duration-600
                                        scale-101 group-hover:scale-105'/>
                                <div
                                    className='absolute inset-0 bg-linear-to-t from-accentBlue via-accentBlue/50
                                        to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 ease-out'
                                />

                                {/* OVERLAY LINKS */}
                                <div className='absolute inset-0 flex items-center justify-center gap-4 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <a href={project.link} target='_blank' noopener noreferrer className='p-3 glass rounded-full hover:bg-accentBlue transition-all'>
                                        <LuArrowUpRight className='w-5 h-5' />
                                    </a>
                                    <a href={project.link} target='_blank' noopener noreferrer className='p-3 glass rounded-full hover:bg-accentBlue transition-all'>
                                        <LuGithub className='w-5 h-5' />
                                    </a>
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className='p-6 space-y-4'>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-lg font-semibold group-hover:text-accentBlue transition-colors'>{project.title}</h3>
                                    <LuArrowUpRight
                                        className='w-5 h-5 text-whiteSecondary group-hover:text-whitePrimary
                                            group-hover:translate-x-1 group-hover:-translate-y-1 transition-all' />
                                </div>
                                <p className='text-whiteSecondary-light dark:text-whiteSecondary text-sm'>{project.description}</p>
                                <div className='flex flex-wrap gap-2'>{project.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx}
                                        className='px-4 py-1.5 rounded-full bg-blackPrimary-light dark:bg-blackSecondary text-xs font-medium hover:text-accentBlue/80
                                        border border-divider/50 dark:border-divider text-whiteSecondary-light dark:text-whiteSecondary hover:border-accentBlue/40
                                        transition-all duration-300 cursor-default'>{tag}</span>
                                ))}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* VIEW ALL PROJECTS BUTTON */}
                <div className='place-items-center mt-12 animate-fade-in animate-delay-500'>
                    

                    <button className='relative bg-transparent border border-divider text-whitePrimary-light dark:text-whitePrimary hover:border-whitePrimary-light/16 dark:hover:border-whitePrimary/25
                                                    transition-all duration-[0.16s] focus:outline-none focus-visible:ring-2 focus-visible:ring-whitePrimary
                                                    focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group px-6 py-3 text-sm 
                                                    rounded-full overflow-visible flex items-center justify-center gap-2 cursor-pointer min-w-45 
                                                    animated-border'>
                        All Projects <LuMoveRight />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Project
