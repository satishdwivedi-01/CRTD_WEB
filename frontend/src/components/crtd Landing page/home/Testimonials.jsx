
import React from 'react'

const Testimonials = () => {
  const TestimonialCard = ({ name, review }) => (
  <div className="bg-white p-6 rounded shadow-md">
    <p className="text-gray-700 mb-4">“{review}”</p>
    <h4 className="font-bold text-blue-600">{name}</h4>
  </div>
);
  return (
    <section className="bg-gray-100 py-12 text-center">
    <h2 className="text-xl font-bold mb-6">Success Stories</h2>
    <p className="mb-8">Our Stars Who Shine Bright</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20">
      <TestimonialCard name="Priya Sharma" review="CRTD helped me land my first job..." />
      <TestimonialCard name="Amit Patel" review="The support was amazing and the hiring was fast!" />
      <TestimonialCard name="Sneha Verma" review="Highly recommend for any fresher..." />
    </div>
  </section>
  )
}

export default Testimonials