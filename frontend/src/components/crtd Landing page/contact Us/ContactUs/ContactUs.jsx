import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="connect-container">
      <div className="top-cards">
        <div className="card">
          <i className="icon">📧</i>
          <p className="card-title">For students / Careers</p>
          <span className="card-email">Careers@crtd.in</span>
        </div>
        <div className="card">
          <i className="icon">🎓</i>
          <p className="card-title">For students / Careers</p>
          <span className="card-email">Careers@crtd.in</span>
        </div>
        <div className="card">
          <i className="icon">💼</i>
          <p className="card-title">For students / Careers</p>
          <span className="card-email">Careers@crtd.in</span>
        </div>
      </div>


      {/* Form Section */}
      <form className="connect-form" onSubmit={handleSubmit}>
        <h2>Business Connect Form</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Business Email" required />
        <input type="text" placeholder="Company Name" required />
        <input type="text" placeholder="Office Address" required />
        <input type="number" placeholder="Number of Developers Needed" required />
        <textarea placeholder="Subject or Message" required></textarea>
        <button type="submit">Submit Request</button>

        {submitted && (
          <p className="success-message">
            Thanks for reaching out! We'll get back to you shortly
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
