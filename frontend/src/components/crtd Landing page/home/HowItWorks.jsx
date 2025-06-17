import React from 'react'

const HowItWorks = () => {
    return (
        <section className="bg-blue-800 text-white py-12 pb-20 md:pb-28 mt-6">
            <div className="flex justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-20 text-center">How It Works</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-14 px-4 sm:px-6 md:px-12 lg:px-28">
                {/* Card 1 - Register */}
                <div className="rounded-2xl shadow flex flex-col gap-4 md:gap-7 px-4 md:px-6 py-8 md:py-14 border-4 border-white">
                    <div className='flex justify-between'>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">01</h3>
                        <div className='bg-gray-300 overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 p-2'>
                            <img src="addUser.png" alt="add" className='object-cover' />
                        </div>
                    </div>
                    <p className='text-left text-xl md:text-2xl lg:text-[26px] font-semibold'>Register</p>
                </div>

                {/* Card 2 - Registration Fee */}
                <div className="group rounded-2xl shadow flex flex-col gap-4 md:gap-7 px-4 md:px-6 py-8 md:py-14 border-4 border-white relative hover:py-4 md:hover:py-6 hover:transition-all hover:duration-500 hover:bg-white hover:text-blue-900 hover:gap-2 md:hover:gap-3">
                    <div className='flex justify-between'>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">02</h3>
                        <div className='bg-gray-300 overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 p-2 group-hover:border-2 group-hover:border-blue-900'>
                            <img src="cash.png" alt="add" className='object-cover' />
                        </div>
                    </div>

                    <p className='text-left text-xl md:text-2xl lg:text-[26px] font-semibold'>Registration Fee</p>

                    {/* Background overlay for smooth bottom-to-top transition */}
                    <ol className="list-decimal hidden absolute inset-0 w-full bg-white text-blue-900 scale-0 origin-bottom group-hover:duration-500 group-hover:scale-y-[44%] group-hover:scale-x-100 rounded p-4 md:p-6 z-10 text-left pl-8 md:pl-10 group-hover:flex group-hover:flex-col group-hover:justify-around font-semibold text-sm md:text-base lg:text-xl">
                        <li>Pay 1,000 Only</li>
                        <li>One-Time Payment</li>
                        <li>Valid For 1 Year</li>
                    </ol>
                </div>

                {/* Card 3 - Career Support */}
                <div className="group rounded-2xl shadow flex flex-col gap-4 md:gap-7 px-4 md:px-6 py-8 md:py-14 border-4 border-white relative hover:py-4 md:hover:py-6 hover:transition-all hover:duration-500 hover:bg-white hover:text-blue-900 hover:gap-2 md:hover:gap-3">
                    <div className='flex justify-between'>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">03</h3>
                        <div className='bg-gray-300 overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 p-2'>
                            <img src="support.png" alt="add" className='object-cover' />
                        </div>
                    </div>
                    <p className='text-left text-xl md:text-2xl lg:text-[26px] font-semibold'>Career Support</p>

                    {/* Background overlay for smooth bottom-to-top transition */}
                    <ol className="list-decimal hidden absolute inset-0 w-full bg-white text-blue-900 scale-0 origin-bottom group-hover:duration-500 group-hover:scale-y-[44%] group-hover:scale-x-100 rounded p-4 md:p-6 z-10 text-left pl-8 md:pl-10 group-hover:flex group-hover:flex-col group-hover:justify-around font-semibold text-sm md:text-base lg:text-[18px]">
                        <li>Career Guidance</li>
                        <li>Resume Building</li>
                        <li>Interview Preperation</li>
                    </ol>
                </div>

                {/* Card 4 - Job Alerts */}
                <div className="group rounded-2xl shadow flex flex-col gap-4 md:gap-7 px-4 md:px-6 py-8 md:py-14 border-4 border-white relative hover:py-4 md:hover:py-6 hover:transition-all hover:duration-500 hover:bg-white hover:text-blue-900 hover:gap-2 md:hover:gap-3">
                    <div className='flex justify-between'>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">04</h3>
                        <div className='bg-gray-300 overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 p-2'>
                            <img src="job.png" alt="add" className='object-cover' />
                        </div>
                    </div>
                    <p className='text-left text-xl md:text-2xl lg:text-[26px] font-semibold'>Job Alerts</p>

                    {/* Background overlay for smooth bottom-to-top transition */}
                    <ol className="list-decimal hidden absolute inset-0 w-full bg-white text-blue-900 scale-0 origin-bottom group-hover:duration-500 group-hover:scale-y-[44%] group-hover:scale-x-100 rounded p-4 md:p-6 z-10 text-left pl-8 md:pl-10 group-hover:flex group-hover:flex-col group-hover:justify-around font-semibold text-sm md:text-base lg:text-[16px]">
                        <li>Instant Job Alerts</li>
                        <li>Direct Interview Access</li>
                        <li>Apply Faster, No Waiting</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks