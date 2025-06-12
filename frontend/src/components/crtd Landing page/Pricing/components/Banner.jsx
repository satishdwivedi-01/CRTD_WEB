import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
    return (
        <div className="crtd-banner-container">
            <div className="crtd-banner-content-wrapper">
                <h2 className="crtd-banner-heading">Ready to transform your hiring <br />
                    process?</h2>
                <p className="crtd-banner-description">
                    Join hundreds of companies that trust CRTD Technologies for their fresher <br />
                    recruitment needs.
                </p>
                <div className="crtd-banner-button-group">
                    <button className="crtd-banner-primary-btn">Contact Us Today</button>
                    <button className="crtd-banner-secondary-btn">View Pricing</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;