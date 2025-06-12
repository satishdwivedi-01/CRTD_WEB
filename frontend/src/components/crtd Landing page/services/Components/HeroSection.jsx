import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
        <section className="crtd-hero-container">
            <div className="crtd-hero-main-content">
                <h1 className="crtd-hero-main-title">
                    Building Future-Ready <span className="crtd-hero-blue-highlight">Teams</span><br />
                    <span className="crtd-hero-gradient-highlight"> & Talent</span>
                </h1>
                <p className="crtd-hero-description-text">
                    From mass hiring solutions to specialized fresher programs, CRTD Technologies <br />
                    delivers comprehensive recruitment solutions that connect organizations with <br />
                    exceptional talent at every level.
                </p>
                <div className="crtd-hero-button-group">
                    <button className="crtd-hero-primary-btn">Explore Services →</button>
                    <button className="crtd-hero-secondary-btn">Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;