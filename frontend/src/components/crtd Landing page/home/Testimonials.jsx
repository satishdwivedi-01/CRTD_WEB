import React from 'react';

const testimonials = [
  {
    name: "Amit Singh",
    role: "Software Developer - TCS",
    review: "CRTD Technologies helped me land my dream job at TCS right after graduation. Their interview preparation resources were invaluable and helped me a lot !"
  },
  {
    name: "Rahul Mehta",
    role: "HR Lead - FinTech Firm",
    review: "Reliable Hiring Partner” I hired 30 freshers through CRTD in just two months! Their team handled end-to-end screening, saving us time."
  },
  {
    name: "Priya Sharma",
    role: "UX Designer - Adobe",
    review: "As a fresher with no industry experience , I was struggling to get interviews. CRTD not only got me interviews but helped me prepare for them too."
  },
  {
    name: "Ananya Verma",
    role: "Business Analyst – Infosys",
    review: "CRTD’s mock interviews and resume building workshops were game changers. I felt confident and prepared. Their team genuinely cares about every student’s success."
  }
];

const TestimonialCard = ({ name, role, review }) => (
  <div className="relative bg-white p-6 rounded-xl shadow-md w-full">
    <div className="absolute left-0 top-0 bottom-0 w-2 rounded-l-xl bg-blue-800"></div>
    <p className="text-sm text-gray-800 mb-4">“{review}”</p>
    <p className="text-sm text-blue-800 font-semibold">{role}</p>
    <p className="text-base text-blue-900 font-bold">{name}</p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-white py-16 text-center">
      <p className="text-gray-700 font-semibold mb-2">Testimonials</p>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Success Stories</h2>
      <p className="text-xl font-semibold text-blue-800 mb-10">Our Stars Who Shine Bright</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-20">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} {...t} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
