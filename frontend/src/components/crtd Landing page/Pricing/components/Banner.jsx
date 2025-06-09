import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className="cta-section">
            <div className="cta-content">
                <h2>Ready to transform your hiring <br />
                process?</h2>
                <p>
                    Join hundreds of companies that trust CRTD Technologies for their fresher <br />
                    recruitment needs.
                </p>
                <div className="cta-buttons">
                    <button className="contact-btn">Contact Us Today</button>
                    <button className="pricing-btn">View Pricing</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;