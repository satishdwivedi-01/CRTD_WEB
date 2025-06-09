import React from 'react';
import './CompanyDetails.css';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const CompanyDetails = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-col company-info">
            <div className="Company"><img src="./Logo.svg" className="image"></img>
          <h3>CRTD Technologies</h3></div>
            
          
          <p>Connecting fresh talent with leading tech companies. Your gateway to a successful tech career.</p>
          <ul>
            <li><FiMail className="icon" /> contact@crtdtech.com</li>
            <li><FiPhone className="icon" /> +91 98765 43210</li>
            <li><FiMapPin className="icon" /> Bangalore, India</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>→ Home</li>
            <li>→ About Us</li>
            <li>→ Services</li>
            <li>→ Fresher Jobs</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Services</h4>
          <ul>
            <li>→ Campus Recruitment</li>
            <li>→ Bulk Hiring</li>
            <li>→ Career Guidance</li>
            <li>→ Skill Development</li>
            <li>→ Job Placement</li>
          </ul>
        </div>
        <div className="footer-col subscribe">
          <h4>Stay Updated</h4>
          <p>Subscribe to our newsletter for the latest job opportunities and career tips.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe →</button>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 CRTD Technologies. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default CompanyDetails;
