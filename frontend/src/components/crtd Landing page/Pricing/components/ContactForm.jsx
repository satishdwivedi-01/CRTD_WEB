import React from 'react';
import '../styles/ContactForm.css';
import logo1 from '../../../../assets/Logos/cont/Frame (1).png';
import logo2 from '../../../../assets/Logos/cont/Frame (2).png';
import logo3 from '../../../../assets/Logos/cont/Frame (3).png';
import logo4 from '../../../../assets/Logos/cont/Frame (4).png';
import logo5 from '../../../../assets/Logos/cont/Frame 1984082346.png';
const ContactForm = () => {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Ready to Hire Fresh Talent at <br />Scale?</h1>
                <p>Get in touch with our recruitment specialists to discuss your hiring needs</p>
            </div>

            <div className="contact-content">
                <div className="contact-info">
                    <h2>Contact Information</h2>

                    <div className="info-item">
                        <h3> <img src={logo1} alt="" />Office Address</h3>
                        <p>CRTD Technologies, IT Park, Bengaluru, India</p>
                    </div>

                    <div className="info-item">
                        <h3><img src={logo2} alt="" />Email Us</h3>
                        <p>fresherhiring@crtdtechnologies.com</p>
                    </div>

                    <div className="info-item">
                        <h3><img src={logo3} alt="" />Call Us</h3>
                        <p>+91 1234567890</p>
                    </div>

                    <div className="info-item">
                        <h3><img src={logo4} alt="" />Business Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>

                    <div className="social-links">
                        <h3>Follow Us</h3>
                        <img src={logo5} alt="img" className='imge' />
                    </div>
                </div>

                <div className="contact-form">
                    <h2>Send Us a Message</h2>

                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name *</label>
                                <input type="text" id="fullName" placeholder="Your name" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Business Email *</label>
                                <input type="email" id="email" placeholder="Your email" />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="company">Company Name *</label>
                                <input type="text" id="company" placeholder="Your company" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="services">Services Interested in *</label>
                                <div className="select-wrapper">
                                    <select id="services">
                                        <option value="">Services</option>
                                        {/* Add more options as needed */}
                                    </select>
                                    <span className="dropdown-icon">✔</span>
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="address">Office Address *</label>
                                <input type="text" id="address" placeholder="Address" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="developers">Number of Developers Needed *</label>
                                <input type="number" id="developers" placeholder="Enter the numbers" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Subject or Message</label>
                            <textarea id="message" rows="4"></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;