import React from 'react';
import '../../styles/ProfileStatus.css';
import logo1 from '../../../../../Assets/Logos/Frame 1984082424.svg';
import logo2 from '../../../../../Assets/Images/Group 1261157565.png';
import logo3 from '../../../../../Assets/Images/Group 1261157709.png';

const ProfileStatus = () => {
    return (
        <div>
            <main className="main-content">
                <div className="alert-box">
                    <p>Your profile is incomplete </p>
                    <p className='spl'> Please complete your profile to access all features.</p>
                </div>

                <h1 className="welcome-text">Welcome to CRTD, John!</h1>

                <section className="profile-status">
                    <div className="profile-container">
                        <div className="profile-header">
                            <div className="icon-alert"><img src={logo1} alt="alert" /></div>
                            <div>
                                <h2 className="status-title">Profile Status : Incomplete</h2>
                                <p className="status-subtitle">Complete your profile to unlock exciting job opportunities</p>
                            </div>
                        </div>

                        <div className="progress-section">
                            <p className="progress-title">Profile Completion</p>
                            <span className="progress-percentage">0%</span>
                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: '0%' }}></div>
                            </div>
                        </div>

                        <div className="card-container">
                            <div className="info-card">
                                <div className="icon-container"><img src={logo3} alt="" /></div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3 className="card-title">Personal Details</h3>
                                        <span className="status-badge">Pending</span>
                                    </div>
                                    <p className="card-subtitle">Basic information and contact details</p>
                                    <ul>
                                        <li> Provide accurate contact details</li>
                                        <li> Keep address information current</li>
                                    </ul>
                                    <button className="complete-btn">Complete Now &gt;</button>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="icon-container"><img src={logo2} alt="" /></div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3 className="card-title">Educational Information</h3>
                                        <span className="status-badge">Pending</span>
                                    </div>
                                    <p className="card-subtitle">Academic background and skills</p>
                                    <ul>
                                        <li> Include all relevant qualifications</li>
                                        <li> List your key skills</li>
                                        <li> Upload your updated resume</li>
                                    </ul>
                                    <button className="complete-btn">Complete Now &gt;</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="info-grid">
                        <div className="info-card tips">
                            <div className="card-content">
                                <h4>Profile Tips</h4>
                                <ul>
                                    <li> → Keep your information up to date</li>
                                    <li> → Provide accurate contact details</li>
                                    <li> → List relevant skills</li>
                                </ul>
                            </div>
                        </div>
                        <div className="info-card benefits">
                            <div className="card-content">
                                <h4>Benefits</h4>
                                <ul>
                                    <li> → Access to premium job listings</li>
                                    <li> → Career guidance sessions</li>
                                    <li> → Resume building support</li>
                                </ul>
                            </div>
                        </div>
                        <div className="info-card steps">
                            <div className="card-content">
                                <h4>Next Steps</h4>
                                <ul>
                                    <li> → Complete your profile</li>
                                    <li> → Make registration payments</li>
                                    <li> → Start applying for jobs</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="support-box">
                        <h3>Need Help?</h3>
                        <p>Our support team is available to assist you with completing your profile and answering any questions.</p>
                        <div className="support-buttons">
                            <button className="support-btn">Contact Support</button>
                            <button className="support-btn secondary">View FAQ</button>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <p>© 2025 CRTD Technologies. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ProfileStatus;