import React from "react";
import "./FooterSection.css";

const testimonials = [
  {
    quote: `“CRTD Technologies helped me land my dream job at TCS right after graduation. Their interview preparation resources were invaluable and helped me a lot!”`,
    role: "Software Developer – TCS",
    name: "Amit Singh",
  },
  {
    quote: `“Reliable Hiring Partner”\nI hired 30 freshers through CRTD in just two months! Their team handled end-to-end screening, saving us time.`,
    role: "HR Lead – FinTech Firm",
    name: "Rahul Mehta",
  },
  {
    quote: `“As a fresher with no industry experience, I was struggling to get interviews. CRTD not only got me interviews but helped me prepare for them too.”`,
    role: "UX Designer – Adobe",
    name: "Priya Sharma",
  },
];

const FooterSection = () => {
  return (
    <div className="testimonials-wrapper">
      <div className="testimonial-header">
        <h4>Testimonials</h4>
        <h2>Success Stories</h2>
        <h3>Our Stars Who Shine Bright</h3>
      </div>

      <div className="testimonial-carousel">
        <button className="arrow-btn">❮</button>

        {testimonials.map((item, idx) => (
          <div className="testimonial-card" key={idx}>
            <p className="testimonial-quote">{item.quote}</p>
            <p className="testimonial-role">{item.role}</p>
            <p className="testimonial-name">{item.name}</p>
          </div>
        ))}
        <button className="arrow-btn">❯</button>
      </div>
    </div>
  );
};

export default FooterSection;
