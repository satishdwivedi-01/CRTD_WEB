import React from 'react'

const Impacts = () => {

    return (
        <section className="py-12 pt-6 text-center">
            <h2 className="text-gray-700 text-2xl font-semibold mb-2">MAKING A DIFFERENCE</h2>
            <h2 className="text-blue-900 text-4xl font-bold my-3">Our Impact So Far</h2>
            <p className="mb-10 text-2xl text-gray-700 my-6 font-semibold">We’re proud of the difference we’ve made in the lives <br /> of freshers and the value we’ve added to businesses.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-8 mt-16  md:px-20">
                <div className="bg-white p-7 py-9 shadow-2xl rounded-2xl text-left text-blue-900 text-4xl font-bold border-l-[2rem] border-blue-900">
                    <h3 >12,000+</h3>
                    <p className='font-semibold mt-7'>Candidates <br /> placed</p>
                </div>
                <div className="bg-white p-7 py-9 shadow-2xl rounded-2xl text-left text-blue-900 text-4xl font-bold border-l-[2rem] border-blue-900">
                    <h3 >1000+</h3>
                    <p className='font-semibold mt-7'>Hiring <br /> Companies</p>
                </div>
                <div className="bg-white p-7 py-9 shadow-2xl rounded-2xl text-left text-blue-900 text-4xl font-bold border-l-[2rem] border-blue-900">
                    <h3 >100%</h3>
                    <p className='font-semibold mt-7'>Fresher-Specific <br /> Openings</p>
                </div>
            </div>
        </section>
    )
}

export default Impacts