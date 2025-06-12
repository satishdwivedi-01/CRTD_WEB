import React from 'react';
import '../styles/ContactForm.css';
import logo1 from '../../../../assets/Logos/cont/Frame (1).png';
import logo2 from '../../../../assets/Logos/cont/Frame (2).png';
import logo3 from '../../../../assets/Logos/cont/Frame (3).png';
import logo4 from '../../../../assets/Logos/cont/Frame (4).png';
import fb from '../../../../assets/Social-links/Frame 1984082342.png'
import twitter from '../../../../assets/Social-links/Frame 1984082343.png'
import linked from '../../../../assets/Social-links/Frame 1984082344.png'
import insta from '../../../../assets/Social-links/Frame 1984082345.png'
const ContactForm = () => {
    return (
        <div className="crtd-contact-main-container">
            <div className="crtd-contact-header-section">
                <h1 className="crtd-contact-main-heading">Ready to Hire Fresh Talent at <br />Scale?</h1>
                <p className="crtd-contact-intro-text">Get in touch with our recruitment specialists to discuss your hiring needs</p>
            </div>

            <div className="crtd-contact-content-wrapper">
                <div className="crtd-contact-info-card">
                    <h2 className="crtd-contact-info-title">Contact Information</h2>

                    <div className="crtd-contact-info-item">
                        <h3 className="crtd-contact-info-label"> <img src={logo1} alt="Address icon" />Office Address</h3>
                        <p className="crtd-contact-info-detail">CRTD Technologies, IT Park, Bengaluru, India</p>
                    </div>

                    <div className="crtd-contact-info-item">
                        <h3 className="crtd-contact-info-label"><img src={logo2} alt="Email icon" />Email Us</h3>
                        <p className="crtd-contact-info-detail">fresherhiring@crtdtechnologies.com</p>
                    </div>

                    <div className="crtd-contact-info-item">
                        <h3 className="crtd-contact-info-label"><img src={logo3} alt="Phone icon" />Call Us</h3>
                        <p className="crtd-contact-info-detail">+91 1234567890</p>
                    </div>

                    <div className="crtd-contact-info-item">
                        <h3 className="crtd-contact-info-label"><img src={logo4} alt="Clock icon" />Business Hours</h3>
                        <p className="crtd-contact-info-detail">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>

                    <div className="crtd-contact-social-section">
                        <h3 className="crtd-contact-social-title">Follow Us</h3>
                        <div className='soc-links'>
                            <img src={fb} alt="" />
                            <img src={twitter} alt="" />
                            <img src={linked} alt="" />
                            <img src={insta} alt="" />
                        </div>
                    </div>
                </div>

                <div className="crtd-contact-form-card">
                    <h2 className="crtd-contact-form-title">Send Us a Message</h2>

                    <form className="crtd-contact-form">
                        <div className="crtd-form-row">
                            <div className="crtd-form-group">
                                <label htmlFor="fullName" className="crtd-form-label">Full Name *</label>
                                <input type="text" id="fullName" placeholder="Your name" className="crtd-form-input" />
                            </div>

                            <div className="crtd-form-group">
                                <label htmlFor="email" className="crtd-form-label">Business Email *</label>
                                <input type="email" id="email" placeholder="Your email" className="crtd-form-input" />
                            </div>
                        </div>

                        <div className="crtd-form-row">
                            <div className="crtd-form-group">
                                <label htmlFor="company" className="crtd-form-label">Company Name *</label>
                                <input type="text" id="company" placeholder="Your company" className="crtd-form-input" />
                            </div>

                            <div className="crtd-form-group">
                                <label htmlFor="services" className="crtd-form-label">Services Interested in *</label>
                                <div className="crtd-select-wrapper">
                                    <select id="services" className="crtd-form-select">
                                        <option value="">Services</option>
                                    </select>
                                    <span className="crtd-select-arrow">✔</span>
                                </div>
                            </div>
                        </div>

                        <div className="crtd-form-row">
                            <div className="crtd-form-group">
                                <label htmlFor="address" className="crtd-form-label">Office Address *</label>
                                <input type="text" id="address" placeholder="Address" className="crtd-form-input" />
                            </div>

                            <div className="crtd-form-group">
                                <label htmlFor="developers" className="crtd-form-label">Number of Developers Needed *</label>
                                <input type="number" id="developers" placeholder="Enter the numbers" className="crtd-form-input" />
                            </div>
                        </div>

                        <div className="crtd-form-group">
                            <label htmlFor="message" className="crtd-form-label">Subject or Message</label>
                            <textarea id="message" rows="4" className="crtd-form-textarea"></textarea>
                        </div>

                        <button type="submit" className="crtd-form-submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;