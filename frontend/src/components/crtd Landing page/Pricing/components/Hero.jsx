import React from 'react'
import '../styles/Hero.css';
import frame from '../../../../assets/Images/Frame.png';
import frame1 from '../../../../assets/Images/Frame (1).png';
import frame2 from '../../../../assets/Images/Frame (2).png';
import frame3 from '../../../../assets/Images/Frame (3).png';

const Hero = () => {
    return (
        <div className="crtd-hero-main-container">
            <h1 className="crtd-hero-main-heading">
                CRTD Technologies – <br />
                <span className="crtd-hero-highlight">Fresher Hiring </span>
                Solutions
            </h1>
            <p className="crtd-hero-subtitle">
                Empowering your workforce with the best fresh talent across India
            </p>
            <div className="crtd-hero-button-group">
                <button className="crtd-btn crtd-btn-primary">View Pricing</button>
                <button className="crtd-btn crtd-btn-secondary">Contact Us</button>
            </div>
            <div className="crtd-hero-features-container">
                <div className="crtd-feature-card">
                    <div className="crtd-feature-icon"><img src={frame} alt="Fresher Focus" /></div>
                    <h3 className="crtd-feature-title">Fresher Focus</h3>
                    <p className="crtd-feature-description">100% dedicated to fresher hiring, no internships or experienced profiles</p>
                </div>
                <div className="crtd-feature-card">
                    <div className="crtd-feature-icon"><img src={frame1} alt="PAN-India Reach" /></div>
                    <h3 className="crtd-feature-title">PAN-India Reach</h3>
                    <p className="crtd-feature-description">Access to talent from across India, with virtual and onsite campus drives</p>
                </div>
                <div className="crtd-feature-card">
                    <div className="crtd-feature-icon"><img src={frame2} alt="Fast Turnaround" /></div>
                    <h3 className="crtd-feature-title">Fast Turnaround</h3>
                    <p className="crtd-feature-description">Quick hiring process without compromising on candidate quality</p>
                </div>
                <div className="crtd-feature-card">
                    <div className="crtd-feature-icon"><img src={frame3} alt="Quality Assurance" /></div>
                    <h3 className="crtd-feature-title">Quality Assurance</h3>
                    <p className="crtd-feature-description">Rigorous screening process to ensure top-quality candidates</p>
                </div>
            </div>
        </div>
    )
}

export default Hero;