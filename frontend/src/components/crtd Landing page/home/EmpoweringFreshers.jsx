import React from 'react'

const EmpoweringFreshers = () => {
    return (
        <section className="text-center bg-white">
            <div className='relative h-[90vh] overflow-hidden'>
                <img src="officeDiscussion.jpg" alt="Office Discussion" className='h-full w-full object-cover ' />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-70 z-10"></div>

                {/* Text Content */}
                <div className='absolute top-[25%] left-[25%] text-center text-white px-4 z-20 '>
                    <h1 className="text-4xl md:text-6xl font-bold mb-12 leading-[4.5rem] ">Empowering Freshers. <br /> Connecting Futures.</h1>
                    <p className="text-2xl mb-12 tracking-wide">Join 12,000+ successful candidates. Register now for exclusive <br /> access to job opportunities across 1000+ global companies.</p>
                    <button className="bg-blue-600 text-lg  px-8 py-3 rounded font-bold">Explore Jobs</button>
                </div>
            </div>


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

            <div className="overflow-hidden bg-white py-16">
                <div
                    className="flex gap-16 ml-2 animate-scroll-left"
                    style={{
                        animation: 'scroll-left 5s linear infinite',
                        width: 'max-content',
                    }}
                >
                    <img src="reliance.png" alt="reliance" className="h-16" />
                    <img src="tcs.png" alt="TCS" className="h-16" />
                    <img src="hdfc.png" alt="HDFC Bank" className="h-16" />
                    <img src="infosys.png" alt="Infosys" className="h-16" />
                    <img src="icici.png" alt="ICICI Bank" className="h-16" />
                    <img src="airtel.png" alt="Airtel" className="h-16" />
                    {/* Duplicate logos to create seamless scroll */}
                    <img src="reliance.png" alt="reliance" className="h-16" />
                    <img src="tcs.png" alt="TCS" className="h-16" />
                    <img src="hdfc.png" alt="HDFC Bank" className="h-16" />
                    <img src="infosys.png" alt="Infosys" className="h-16" />
                    <img src="icici.png" alt="ICICI Bank" className="h-16" />
                    <img src="airtel.png" alt="Airtel" className="h-16" />
                </div>
            </div>


        </section>

    )
}

export default EmpoweringFreshers
