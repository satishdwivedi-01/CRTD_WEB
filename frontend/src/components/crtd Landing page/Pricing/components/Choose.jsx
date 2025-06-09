import React from 'react'
import '../styles/Choose.css';  
import frame from '../../../../assets/Images/Frame (1).png'
import frame6 from '../../../../assets/Images/Frame (6).png'
import frame2 from '../../../../assets/Images/Frame (2).png'
import frame7 from '../../../../assets/Images/Frame (7).png'
import framee from '../../../../assets/Images/Frame.png';
const Choose = () => {
    return (
        <div>
            <div className='heading'>
                <div className="mini">
                    <h1>Why Choose CRTD Technologies</h1>
                    <p >Our specialized approach to fresher hiring delivers reliable results for businesses
                        <br />of all sizes</p>
                </div>
                <div className='mini-card' >
                    <div className='cards'>
                        <div className="icon"><img src={frame6} alt="" /></div>
                        <h2>
                            100% Focus on Fresher Hiring
                        </h2>
                        <p>We exclusively specialize in fresher recruitment, making us experts in identifying and nurturing new talent.</p>
                    </div>
                    <div className='cards'>
                        <div className="icon"><img src={frame} alt="" /></div>
                        <h2>
                            PAN-India Talent Sourcing
                        </h2>
                        <p>Access candidates from across India with our extensive network and campus connections.</p>
                    </div>
                    <div className='cards'>
                        <div className="icon"><img src={frame2} alt="" /></div>
                        <h2>
                            Fast Turnaround Time
                        </h2>
                        <p>Expedited recruitment process without compromising on the quality of candidates.</p>
                    </div>
                    <div className='cards'>
                        <div className="icon"><img src={frame7} alt="" /></div>
                        <h2>
                            Real-Time Progress Tracking
                        </h2>
                        <p>Transparent reporting and analytics to keep you informed at every stage.</p>
                    </div>
                    <div className='cards'>
                        <div className="icon"><img src={framee} alt="" /></div>
                        <h2>
                            Dedicated Support Team
                        </h2>
                        <p>Personalized assistance from our recruitment experts throughout the hiring process.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose
