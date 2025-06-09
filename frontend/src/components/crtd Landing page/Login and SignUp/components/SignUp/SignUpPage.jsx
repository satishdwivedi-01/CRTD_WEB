
import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaClipboardList } from "react-icons/fa";
import "./SignUp.css";


const SignUpPage = () => {
    return (
        <div>
            <header className="header">
                <div className="logo"><img src="crtdLogo.png" alt="CRTD Logo" /> CRTD Technologies</div>
            </header>
            <div className="signup-wrapper">

                <div className="signup-left">
                    <div className="signup-form-card">

                        <div className="signup-icon">
                            <img src='crtdLogo.png' alt="logo" />
                        </div>
                        <h2>Create Account</h2>
                        <p className="subtext">Join our community of tech professionals</p>

                        <div className="input-group">
                            <FaUser className="icon" />
                            <input type="text" placeholder="Enter your full name" />
                        </div>

                        <div className="input-group">
                            <FaEnvelope className="icon" />
                            <input type="email" placeholder="Enter your email" />
                        </div>

                        <div className="input-group">
                            <FaPhone className="icon" />
                            <input type="tel" placeholder="Enter your phone number" />
                        </div>

                        <div className="input-group">
                            <FaLock className="icon" />
                            <input type="password" placeholder="Enter your password" />
                        </div>

                        <div className="input-group">
                            <FaLock className="icon" />
                            <input type="password" placeholder="Confirm your password" />
                        </div>

                        <div className="checkbox-group">
                            <input type="checkbox" />
                            <span>I agree to the <a href="#">Terms and Conditions</a></span>
                        </div>

                        <button className="signup-btn">Create Account</button>

                        <p className="switch-login">Already have an account? <a href="/login">Sign in instead</a></p>
                    </div>
                </div>

                <div className="signup-right">
                    <div className="signup-info-box">
                        <h2>Join Our Tech Community</h2>
                        <div className="info-item">
                            <div className="LogoCont">
                                <img src="./S1.svg" alt="Illustration 1" className="info-icon" />
                            </div>

                            <div>
                                <strong>Exclusive Job Opportunities</strong>
                                <p>Access to premium tech positions from top companies</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="LogoCont2">
                                <img src="./S2.svg" alt="Illustration 1" className="info-icon" />
                            </div>
                            <div>
                                <strong>Career Growth</strong>
                                <p>Professional development and learning resources</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="LogoCont">
                                <img src="./S1.svg" alt="Illustration 1" className="info-icon" />
                            </div>
                            <div>
                                <strong>Verified Companies</strong>
                                <p>All employers are thoroughly vetted for quality</p>
                            </div>
                        </div>
                        <div className="signup-stats">
                            <div className="stat-card">
                                <h3>5000+</h3>
                                <p>Tech Jobs</p>
                            </div>
                            <div className="stat-card">
                                <h3>100+</h3>
                                <p>Partner Companies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage