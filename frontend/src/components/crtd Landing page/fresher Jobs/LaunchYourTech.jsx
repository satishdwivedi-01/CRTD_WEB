import React from 'react';
import { Building2, Globe, Users, UserPlus } from "lucide-react";
import './LAunchYourTech.css';

const LAunchYourTech = () => {
  return (
    <div className='launch-tech-container'>
      <div className='flex justify-center pt-12'>
        <div className='badge'>
          <p>#1 Fresher Hiring Platform</p>
        </div>
      </div>

      <div className='heading-container'>
        <h1 className='main-heading'>Launch Your Tech Career</h1>
        <h1 className='main-heading mt-2'>3000+ Immediate Openings</h1>
        <p className='sub-heading'>
          Direct placement opportunities with top tech companies. No experience needed!
        </p>
      </div>

      <div className="features-container">
        <div className="feature-badge">
          <Building2 size={24} className="feature-icon" />
          <p>100+ Client Companies</p>
        </div>

        <div className="feature-badge">
          <Globe size={24} className="feature-icon" />
          <p>Pan India Opportunities</p>
        </div>

        <div className="feature-badge">
          <UserPlus size={24} className="feature-icon" />
          <p>Immediate Joining</p>
        </div>

        <div className="feature-badge">
          <Users size={24} className="feature-icon" />
          <p>Zero Placement Fee</p>
        </div>
      </div>

      <div className='job-cards-container'>
        <div className="job-card">
          <div>
            <div className="job-header">
              <span className="job-icon">&lt;/&gt;</span>
              <div>
                <h3 className="job-title">Frontend Developer</h3>
                <p className="job-subtitle">Frontend Developer</p>
              </div>
            </div>

            <div className="job-details">
              <div className="detail-row">
                <span>Openings</span>
                <span className="detail-value">1000+</span>
              </div>
              <div className="detail-row">
                <span>Client Companies</span>
                <span className="detail-value">25+</span>
              </div>
              <div className="detail-row">
                <span>Location</span>
                <span className="detail-value">Pan India</span>
              </div>
              <div className="detail-row">
                <span>Package</span>
                <span className="detail-value">3.5–6.0 LPA</span>
              </div>
            </div>

            <div className="skills-container">
              <p className="skills-title">Required Skills:</p>
              <div className="skills-list">
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">React</span>
              </div>
            </div>
          </div>

          <button className="apply-button">
            Apply Now →
          </button>
        </div>

        {/* Backend Developer Card */}
        <div className="job-card">
          <div>
            <div className="job-header">
              <span className="job-icon">
                <img className='h-10 w-10 object-center' src="https://www.i-bee.net/wp-content/uploads/2020/04/hub.svg" alt="Backend icon" />
              </span>
              <div>
                <h3 className="job-title">Backend Developer</h3>
                <p className="job-subtitle">Backend Development</p>
              </div>
            </div>

            <div className="job-details">
              <div className="detail-row">
                <span>Openings</span>
                <span className="detail-value">800+</span>
              </div>
              <div className="detail-row">
                <span>Client Companies</span>
                <span className="detail-value">20+</span>
              </div>
              <div className="detail-row">
                <span>Location</span>
                <span className="detail-value">Pan India</span>
              </div>
              <div className="detail-row">
                <span>Package</span>
                <span className="detail-value">4.0–7.0 LPA</span>
              </div>
            </div>

            <div className="skills-container">
              <p className="skills-title">Required Skills:</p>
              <div className="skills-list">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>
          </div>

          <button className="apply-button">
            Apply Now →
          </button>
        </div>

        {/* Mobile App Developer Card */}
        <div className="job-card">
          <div>
            <div className="job-header">
              <span className="job-icon">
                <img className='h-8 w-8' src="https://cdn.prod.website-files.com/5d9a902248623ef932d0da66/5f8aee6cc66732ae4894f662_mobile-friendly.svg" alt="Mobile icon" />
              </span>
              <div>
                <h3 className="job-title">Mobile App Developer</h3>
                <p className="job-subtitle">Mobile Developement</p>
              </div>
            </div>

            <div className="job-details">
              <div className="detail-row">
                <span>Openings</span>
                <span className="detail-value">500+</span>
              </div>
              <div className="detail-row">
                <span>Client Companies</span>
                <span className="detail-value">15+</span>
              </div>
              <div className="detail-row">
                <span>Location</span>
                <span className="detail-value">Pan India</span>
              </div>
              <div className="detail-row">
                <span>Package</span>
                <span className="detail-value">4.0–6.5 LPA</span>
              </div>
            </div>

            <div className="skills-container">
              <p className="skills-title">Required Skills:</p>
              <div className="skills-list">
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">Flutter</span>
                <span className="skill-tag">Andriod</span>
                <span className="skill-tag">iOS</span>
              </div>
            </div>
          </div>

          <button className="apply-button">
            Apply Now →
          </button>
        </div>

        {/* Full Stack Developer Card */}
        <div className="job-card">
          <div>
            <div className="job-header">
              <span className="job-icon">
                <img className='h-5 w-5 pr-1' src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSagPecc8YU0KMsIy8_a9_fsCSqhaXoRIBCGLXtRJP9l4LAY8wn" alt="Full stack icon" />
              </span>
              <div>
                <h3 className="job-title">Full Stack Developer</h3>
                <p className="job-subtitle">Full Stack Developer</p>
              </div>
            </div>

            <div className="job-details">
              <div className="detail-row">
                <span>Openings</span>
                <span className="detail-value">750+</span>
              </div>
              <div className="detail-row">
                <span>Client Companies</span>
                <span className="detail-value">30+</span>
              </div>
              <div className="detail-row">
                <span>Location</span>
                <span className="detail-value">Pan India</span>
              </div>
              <div className="detail-row">
                <span>Package</span>
                <span className="detail-value">5.0–8.0 LPA</span>
              </div>
            </div>

            <div className="skills-container">
              <p className="skills-title">Required Skills:</p>
              <div className="skills-list">
                <span className="skill-tag">MernStack</span>
                <span className="skill-tag">DevOps</span>
                <span className="skill-tag">Cloud</span>
                <span className="skill-tag">Database</span>
              </div>
            </div>
          </div>

          <button className="apply-button">
            Apply Now →
          </button>
        </div>
      </div>
    </div>
  );
};

export default LAunchYourTech;