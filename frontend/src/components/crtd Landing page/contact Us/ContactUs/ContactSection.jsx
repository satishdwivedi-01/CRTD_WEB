import React from 'react';
import './ContactSection.css';
import mail from '../../../../assets/ContactUs/wpf_message-outline.png'
import career from '../../../../assets/ContactUs/vaadin_academy-cap.png'
import job from '../../../../assets/ContactUs/uim_bag.png'
const ContactSection = () => {
    return (
        <div className="contact-section">
            <div className="contact-container">
                <h1 className="heading">
                    Get <span className="bold">in </span>
                    <span className="highlight">Touch </span>
                    <span className="bold">with Us</span>
                </h1>
                <p className="subtitle">We're here to support students, professional, and businesses</p>

                <div className="card-wrapper">
                    <div className="contact-card">
                        <div className="icon"><img src={mail} alt="mail" /></div>
                        <h3>Support</h3>
                        <p className="email">support@crtd.in</p>
                    </div>

                    <div className="contact-card">
                        <div className="icon"><img src={career} alt="mail" /></div>
                        <h3>For students / Careers</h3>
                        <p className="email">careers@crtd.in</p>
                    </div>

                    <div className="contact-card">
                        <div className="icon"><img src={job} alt="" /></div>
                        <h3>Business Hiring</h3>
                        <p className="email">business@crtd.in</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
