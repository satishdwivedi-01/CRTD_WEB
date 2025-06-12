import React from 'react';
import './Simple.css'; // Import the CSS file

const Simple = () => {
  return (
    <div className='main'>
      <div className='card0'>
        <h1 className='card-title1'>Simple & Transparent Registration </h1>

        <div className='box-one'>
          <img className='box-icon' src="/crtd icon.png" alt="CRT Icon" />
          <h3 className='box-text'>One-time registration fee valid for 1 full year</h3>
        </div>

        <div className='box-one'>
          <img className='box-icon' src="/crtd icon.png" alt="CRT Icon" />
          <h3 className='box-text'>Zero placements charges- we bill companies,not candidates</h3>
        </div>

        <div className='box-one'>
          <img className='box-icon' src="/crtd icon.png" alt="CRT Icon" />
          <h3 className='box-text'>Free career guidance throughout your journey</h3>
        </div>
      </div>
    </div>
  );
}

export default Simple;