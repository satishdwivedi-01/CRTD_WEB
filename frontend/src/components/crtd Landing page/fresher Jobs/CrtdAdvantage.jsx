import React from 'react';
import './CrtdAdvantage.css';
import flight from '../../../assets/CRDTADV/Vector (3).png'
import  building from '../../../assets/CRDTADV/Vector (4).png'
import location from '../../../assets/CRDTADV/Vector (5).png'
import folder from '../../../assets/CRDTADV/Vector (6).png'

const CrtdAdvantage = () => {
  return (
    <div className='crtd-advantage'>
      <h1 className='crtd-advantage__title'>Why Choose CRTD for Your First Job?</h1>

      <div className='crtd-advantage__cards'>
        <div className="crtd-advantage__card">
          <div className="crtd-advantage__card-icon-container">
            <span className="crtd-advantage__card-icon"><img src={flight} alt="" /></span>
          </div>
          <h3 className="crtd-advantage__card-title">Immediate Joining</h3>
          <p className="crtd-advantage__card-description">
            Start your career right away with leading tech companies
          </p>
        </div>

        <div className="crtd-advantage__card">
          <div className="crtd-advantage__card-icon-container">
            <img
              className='crtd-advantage__card-icon-img'
              src={building}
              alt="Top Companies"
            />
          </div>
          <h3 className="crtd-advantage__card-title">Top Companies</h3>
          <p className="crtd-advantage__card-description">
            Work with industry leaders and Fortune 500 companies
          </p>
        </div>

        <div className="crtd-advantage__card">
          <div className="crtd-advantage__card-icon-container">
            <img
              className='crtd-advantage__card-icon-img'
              src={location}
              alt="Location Flexibility"
            />
          </div>
          <h3 className="crtd-advantage__card-title">Location Flexibility</h3>
          <p className="crtd-advantage__card-description">
            Choose from multiple office locations or work remotely.
          </p>
        </div>

        <div className="crtd-advantage__card">
          <div className="crtd-advantage__card-icon-container">
            <img
              className='crtd-advantage__card-icon-img--small'
              src={folder}
              alt="1-year Access"
            />
          </div>
          <h3 className="crtd-advantage__card-title">1-year Access</h3>
          <p className="crtd-advantage__card-description">
            Apply to all openings for one full year with single registration
          </p>
        </div>
      </div>

      <div className="crtd-advantage__benefits">
        <h2 className="crtd-advantage__benefits-title">CRTD Advantage</h2>

        <div className="crtd-advantage__benefits-grid">
          <div className="crtd-advantage__benefit-item">
            <p>One-time registration <br />fee for 1-year access</p>
          </div>
          <div className="crtd-advantage__benefit-item">
            <p>Free career <br /> guidance</p>
          </div>
          <div className="crtd-advantage__benefit-item">
            <p>Multiple interview <br />opportunities</p>
          </div>
          <div className="crtd-advantage__benefit-item">
            <p>Career growth <br /> opportunities</p>
          </div>
          <div className="crtd-advantage__benefit-item">
            <p>Work from home <br />options available</p>
          </div>
          <div className="crtd-advantage__benefit-item">
            <p>Zero placement <br />charges</p>
          </div>
          <div className="crtd-advantage__benefit-item">
            <p>Pan India job <br />locations</p>
          </div>
          <div className="crtd-advantage__benefit-item">
            <p>Regular hiring <br />updates</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrtdAdvantage;