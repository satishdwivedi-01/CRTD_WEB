// Reason.js
import React from 'react';
import '../styles/reason.css';
import { reasonContent } from './reasonData';
import logo from '../../../../assets/logos/Service-Ready-to-Elevate-Icon.png'

const Reason = () => {
  return (
    <section className="crtd-reasons-section">
      <h2 className="crtd-reasons-title">{reasonContent.title}</h2>
      <p className="crtd-reasons-subtitle">{reasonContent.subtitle}</p>

      <div className="crtd-reasons-card-container">
        {reasonContent.cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div className="crtd-reasons-card" key={index}>
              <Icon className="crtd-reasons-card-icon" />
              <h3 className="crtd-reasons-card-title">{card.title}</h3>
              <p className="crtd-reasons-card-desc">{card.description}</p>
            </div>
          );
        })}
      </div>

      <div className="crtd-reasons-cta-box">
        <img src={logo} alt="circle" className="crtd-reasons-cta-logo" />
        <div className="crtd-reasons-cta-content">
          <h3 className="crtd-reasons-cta-heading">{reasonContent.cta.heading}</h3>
          <p className="crtd-reasons-cta-text">{reasonContent.cta.description}</p>
          <button className="crtd-reasons-cta-btn bg-white">{reasonContent.cta.buttonText}</button>
        </div>
      </div>
    </section>
  );
};

export default Reason;