import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">
                    Building Future-Ready <span className="highlight">Teams</span><br />
                    <span className="highlight2"> & Talent</span>
                </h1>
                <p className="hero-subtitle">
                    From mass hiring solutions to specialized fresher programs, CRTD Technologies
                    delivers comprehensive recruitment solutions that connect organizations with
                    exceptional talent at every level.
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">Explore Services →</button>
                    <button className="btn-secondary">Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
