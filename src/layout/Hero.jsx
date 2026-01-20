import React from 'react'

const Hero = () => {
    return (
        <section className='relative min-h-screen flex items-center overflow-hidden
            bg-blackPrimary'>
            
            {/* PARTICLES */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {[...Array(30)].map((_, i) => (

                    <div className='absolute w-0.5 h-0.5 rounded-full opacity-60'

                    style={{
                        backgroundColor: "#ffffff",
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}/>
                ))}
            </div>
        </section>
    )
}

export default Hero
