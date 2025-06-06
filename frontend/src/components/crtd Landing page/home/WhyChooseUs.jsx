import React from 'react'

const WhyChooseUs = () => {

    return (
        <section className="bg-blue-900  text-white py-12 pb-20 text-center">
            <h2 className="text-4xl font-bold mb-6">Why Choose CRTD?</h2>
            <p className="mb-10 text-2xl">We’ve designed our platform with freshers in mind,<br /> addressing the unique challenges you face.</p>

            <div className='px-[13%] flex flex-wrap gap-12 justify-center'>
                <div className="bg-white text-black rounded-2xl shadow-lg w-[30%] h-[35vh] hover:shadow-2xl hover:scale-[107%] hover:transition-all hover:duration-500">
                    <div className='h-[75%] overflow-hidden rounded-2xl'>
                        <img src='girlPosing.jpg' alt='fresher' className=" w-full  object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">EXCLUSIVELY FOR FRESHERS</h3>
                        <p className='text-[16px]'>No experienced roles, no internships</p>
                    </div>
                </div>
                <div className="bg-white text-black rounded-2xl shadow-lg w-[30%] h-[35vh] hover:shadow-2xl hover:scale-[107%] hover:transition-all hover:duration-500">
                    <div className='h-[75%] overflow-hidden rounded-2xl'>
                        <img src='consult.jpg' alt='CONSULTATION' className=" w-full  object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">FREE CAREER CONSULTATION</h3>
                        <p className='text-[16px]'>Resume, Interview & Career Help</p>
                    </div>
                </div>
                <div className="bg-white text-black rounded-2xl shadow-lg w-[30%] h-[35vh] hover:shadow-2xl hover:scale-[107%] hover:transition-all hover:duration-500">
                    <div className='h-[75%] overflow-hidden rounded-2xl'>
                        <img src='interview.jpg' alt='INTERVIEW' className=" w-full  object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">DIRECT COMPANY INTERVIEW</h3>
                        <p className='text-[16px]'>No third-party delays</p>
                    </div>
                </div>
                <div className="bg-white text-black rounded-2xl shadow-lg w-[30%] h-[35vh] hover:shadow-2xl hover:scale-[107%] hover:transition-all hover:duration-500">
                    <div className='h-[75%] overflow-hidden rounded-2xl'>
                        <img src='network.jpg' alt='NETWORK' className=" w-full  object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">GLOBAL COMPANY NETWORK</h3>
                        <p className='text-[16px]'>Openings from MNCs & Startups</p>
                    </div>
                </div>
                <div className="bg-white text-black rounded-2xl shadow-lg w-[30%] h-[35vh] hover:shadow-2xl hover:scale-[107%] hover:transition-all hover:duration-500">
                    <div className='h-[75%] overflow-hidden rounded-2xl'>
                        <img src='manHolding.jpg' alt='VALIDITY' className=" w-full  object-cover" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">1-YEAR VALIDITY</h3>
                        <p className='text-[16px]'>Stay updated and apply anytime</p>
                    </div>
                </div>

            </div>
        </section>
    );

}

export default WhyChooseUs