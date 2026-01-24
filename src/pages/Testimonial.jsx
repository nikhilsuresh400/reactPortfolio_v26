import React, { useState } from 'react'
import { LuChevronLeft, LuChevronRight, LuQuote } from 'react-icons/lu'

const testimonials = [
    {
        quote:
            "Nikhil's expertise in ReactJS helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
        author: "Sarah Chen",
        role: "CTO , Tech Innovators Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",

    },
    {
        quote:
            "Working with Nikhil was a game-changer for our project. He delivered ahead of schedule with awesome code quality.",
        author: "David Kim",
        role: "Project Mangaer, Startup Labs",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
        quote:
            "Not only is Nikhil technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
        author: "Rohit VV",
        role: "Full Stack Dev - TCS",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
]

const Testimonial = () => {

    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    };

    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section
            id='experience'
            className='py-32 relative overflow-hidden bg-[#0c0c0c] border border-divider'
        >

            {/* BACKGROUND GLOW */}
            <div className='absolute top-1/2 left-1/2 w-200 h-200 bg-accentBlue/5 rounded-full blur-3xl
                -translate-x-1/2 -translate-y-1/2' />

            <div className='container mx-auto px-6 relative z-10'>
                {/* SECTION HEADER */}
                <div className='text-center max-w-3xl mx-auto mb-16'>
                    <span
                        className='text-accentBlue text-sm font-medium tracking-wider uppercase animate-fade-in'>What people say
                    </span>
                    <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-accentBlue'>
                        Kind words from <span className='font-heading italic font-normal text-whitePrimary'>amazing people.</span>
                    </h2>
                </div>

                {/* TESTIMONIAL CAROUSEL */}
                <div className='max-w-4xl mx-auto'>
                    <div className='relative'>
                        {/* MAIN TESTIMONIAL */}
                        <div className='glass p-8 rounded-3xl md:p-12 glow-borderanimate-fade-in animate-delay-200'>
                            <div className='absolute -top-4 left-8 w-12 h-12 rounded-full bg-accentBlue
                                flex items-center justify-center'>
                                <LuQuote className='w-6 h-6 text-whitePrmary' />
                            </div>
                            <blockquote className='text-xl md:text-xl font-medium leading-relaxed mb-8 pt-4'>
                                "{testimonials[activeIdx].quote}"
                            </blockquote>
                            <div className='flex items-center gap-4'>
                                <img
                                    src={testimonials[activeIdx].avatar}
                                    alt={testimonials[activeIdx].author}
                                    className='w-14 h-14 rounded-full object-cover ring-2 ring-accentBlue/20' />
                                <div className='space-y-1'>
                                    <div className='font-semibold'>{testimonials[activeIdx].author}</div>
                                    <div className='text-sm text-whiteSecondary'>
                                        {testimonials[activeIdx].role}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TESTIMONIALS NAVIGATION */}
                        <div className='flex items-center justify-center gap-4 mt-8'>
                            <button className='p-3 rounded-full glass hover:bg-accentBlue/10 hover:text-whitePrimary transition-all'>
                                <LuChevronLeft onClick={previous} />
                            </button>
                            <div className='flex gap-2'>
                                {testimonials.map((_, idx) => (
                                    <button onClick={() => setActiveIdx(idx)} 
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-accentBlue" : "bg-whiteSecondary/30 hover:bg-whiteSecondary/50"}`} />
                                ))}
                            </div>
                            <button className='p-3 rounded-full glass hover:bg-accentBlue/10 hover:text-whitePrimary transition-all'>
                                <LuChevronRight onClick={next} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial
