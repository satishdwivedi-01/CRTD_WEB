import React from 'react'
import '../styles/Hero.css';
import frame from '../../../../assets/Images/Frame.png';
import frame1 from '../../../../assets/Images/Frame (1).png';
import frame2 from '../../../../assets/Images/Frame (2).png';
import frame3 from '../../../../assets/Images/Frame (3).png';
const Hero = () => {
  return (
      <div className="hero-container mt-[5vh] ">
          <h1>
              CRTD Technologies – <br />
              <span className="highlight">Fresher Hiring </span>
              Solutions
          </h1>
          <p className="subtitle">
              Empowering your workforce with the best fresh talent across India
          </p>
          <div className="hero-buttons">
              <button className="btn primary">View Pricing</button>
              <button className="btn secondary">Contact Us</button>
          </div>
          <div className="features">
              <div className="feature-card">
                  <div className="icon"><img src={frame} alt="one" /></div>
                  <h3>Fresher Focus</h3>
                  <p>100% dedicated to fresher hiring, no internships or experienced profiles</p>
              </div>
              <div className="feature-card">
                  <div className="icon"><img src={frame1} alt="two" /></div>
                  <h3>PAN-India Reach</h3>
                  <p>Access to talent from across India, with virtual and onsite campus drives</p>
              </div>
              <div className="feature-card">
                  <div className="icon"><img src={frame2} alt="three" /></div>
                  <h3>Fast Turnaround</h3>
                  <p>Quick hiring process without compromising on candidate quality</p>
              </div>
              <div className="feature-card">
                  <div className="icon"><img src={frame3} alt="four" /></div>
                  <h3>Quality Assurance</h3>
                  <p>Rigorous screening process to ensure top-quality candidates</p>
              </div>
          </div>
      </div>
  )
}

export default Hero;
