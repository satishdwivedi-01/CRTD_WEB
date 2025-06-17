import React from 'react'

const EmpoweringFreshers = () => {
    return (
        <section className="text-center bg-white">
            {/* Hero Section */}
            <div className='relative h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden'>
                <img src="officeDiscussion.jpg" alt="Office Discussion" className='h-full w-full object-cover' />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

                {/* Text Content */}
                <div className='absolute top-[15%] sm:top-[20%] md:top-[25%] left-1/2 transform -translate-x-1/2 w-full px-4 sm:px-6 text-center text-white z-20'>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 md:mb-12 leading-[2.5rem] sm:leading-[3.5rem] md:leading-[4.5rem]">
                        Empowering Freshers. <br /> Connecting Futures.
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-12 tracking-wide px-2 sm:px-0">
                        Join 12,000+ successful candidates. Register now for exclusive <br className="hidden sm:block" /> access to job opportunities across 1000+ global companies.
                    </p>
                    <button className="bg-blue-600 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded font-bold">
                        Explore Jobs
                    </button>
                </div>
            </div>

            {/* Logo Marquee */}
            <style>
                {`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                `}
            </style>

            <div className="overflow-hidden bg-white py-8 sm:py-12 md:py-16">
                <div
                    className="flex gap-8 sm:gap-12 md:gap-16 animate-scroll-left"
                    style={{
                        animation: 'scroll-left 5s linear infinite',
                        width: 'max-content',
                    }}
                >
                    <img src="reliance.png" alt="reliance" className="h-10 sm:h-12 md:h-16" />
                    <img src="tcs.png" alt="TCS" className="h-10 sm:h-12 md:h-16" />
                    <img src="hdfc.png" alt="HDFC Bank" className="h-10 sm:h-12 md:h-16" />
                    <img src="infosys.png" alt="Infosys" className="h-10 sm:h-12 md:h-16" />
                    <img src="icici.png" alt="ICICI Bank" className="h-10 sm:h-12 md:h-16" />
                    <img src="airtel.png" alt="Airtel" className="h-10 sm:h-12 md:h-16" />
                    {/* Duplicate logos to create seamless scroll */}
                    <img src="reliance.png" alt="reliance" className="h-10 sm:h-12 md:h-16" />
                    <img src="tcs.png" alt="TCS" className="h-10 sm:h-12 md:h-16" />
                    <img src="hdfc.png" alt="HDFC Bank" className="h-10 sm:h-12 md:h-16" />
                    <img src="infosys.png" alt="Infosys" className="h-10 sm:h-12 md:h-16" />
                    <img src="icici.png" alt="ICICI Bank" className="h-10 sm:h-12 md:h-16" />
                    <img src="airtel.png" alt="Airtel" className="h-10 sm:h-12 md:h-16" />
                </div>
            </div>
        </section>
    )
}

export default EmpoweringFreshers