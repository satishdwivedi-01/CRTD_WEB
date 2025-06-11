import React from 'react';
import './BusinessConnectForm.css';
import call from '../../../../assets/ContactUs/mingcute_phone-fill.png'
import msg from '../../../../assets/Images/wpf_message-outline.png'
import location from '../../../../assets/ContactUs/basil_location-solid.png'
const BusinessConnectForm = () => {
    return (
        <div className="business-connect-section">
            <div className="top-info">
                <h2>Let's Get in Touch</h2>
                <p>We appreciate your interest in CRTD</p>
                <div className="contact-icons">
                    <div className="icon-card">
                        <span role="img" aria-label="phone">
                            <div className='circle'>
                                <img src={call} alt="call" />
                            </div>
                        </span>
                        <div>
                            <strong>Customer Support</strong><br />
                            +91 98765 43210
                        </div>
                    </div>
                    <div className="icon-card">
                        <span role="img" aria-label="email">
                            <div className='circle'>
                                <img src={msg} alt="msg" />
                            </div>
                        </span>
                        <div>
                            <strong>Email</strong><br />
                            contact@crtdtech.com
                        </div>
                    </div>
                    <div className="icon-card">
                        <span role="img" aria-label="location">
                            <div className='circle'>
                                <img src={location} alt="location" />
                            </div>
                        </span>
                        <div>
                            <strong>Address</strong><br />
                            Bangalore, India
                        </div>
                    </div>
                </div>
            </div>

            <div className="form-container">
                <h3>Business Connect Form</h3>
                <form>
                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" placeholder="Full Name" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="businessEmail">Business Email</label>
                            <input type="email" id="businessEmail" placeholder="Business Email" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="companyName">Company Name</label>
                            <input type="text" id="companyName" placeholder="Company Name" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-group">
                            <label htmlFor="services">Services Interested In</label>
                            <select id="services">
                                <option>Select a service</option>
                                <option>Web Development</option>
                                <option>App Development</option>
                                <option>UI/UX Design</option>
                            </select>
                        </div>
                        <div className="input-group">
                            <label htmlFor="officeAddress">Office Address</label>
                            <input type="text" id="officeAddress" placeholder="Office Address" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="developersNeeded">Number of Developers Needed</label>
                            <input type="number" id="developersNeeded" placeholder="Number of Developers Needed" />
                        </div>
                    </div>

                    <div className="form-row full-width">
                        <div className="input-group">
                            <label htmlFor="message">Subject or Message</label>
                            <textarea id="message" placeholder="Subject or Message"></textarea>
                        </div>
                    </div>

                    <button type="submit">Submit Request</button>
                </form>
            </div>
        </div>
    );
};

export default BusinessConnectForm;