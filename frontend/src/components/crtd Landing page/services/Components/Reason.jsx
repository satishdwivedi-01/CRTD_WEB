// Reason.js
import React from 'react';
import '../styles/reason.css';
import { reasonContent } from './reasonData'; 
import logo from '../../../../assets/logos/Service-Ready-to-Elevate-Icon.png'

const Reason = () => {
  return (
    <section className="crtd-section">
      <h2 className="section-title">{reasonContent.title}</h2>
      <p className="section-subtitle">{reasonContent.subtitle}</p>

      <div className="card-container">
        {reasonContent.cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div className="info-card" key={index}>
              <Icon className="card-icon" />
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          );
        })}
      </div>

      <div className="cta-box">
        <img src={logo} alt="circle" />
        <div className="cta-content">
          <h3 className="cta-heading">{reasonContent.cta.heading}</h3>
          <p className="cta-description">{reasonContent.cta.description}</p>
          <button className="cta-button bg-white">{reasonContent.cta.buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default Reason;
