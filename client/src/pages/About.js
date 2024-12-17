import React from 'react';
import aboutImg1 from '../imgs/about-img1.jfif'; 
import aboutImg2 from '../imgs/about-img2.jpg'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h3>Our Vision:</h3>
        <p>
          Pioneering new, sustainable, and effective solutions for industrial wastewater treatment, supporting the Zero Liquid Discharge (ZLD) strategy to safeguard water resources and push worldwide environmental sustainability in accordance with Saudi Arabia's Vision 2030.
        </p>
        <img src={aboutImg1} alt="Vision" className="about-image" />
      </div>
      <div className="about-section">
        <h3>Our Mission:</h3>
        <p>
          The goal is to develop and apply advanced magnetic polymer technologies that can remove heavy metals and dangerous colors from industrial wastewater simultaneously. In order to help industries achieve regulatory compliance and promote a cleaner, safer environment, our system seeks to provide affordable, scalable, and environmentally friendly solutions by matching industry demands.
        </p>
        <img src={aboutImg2} alt="Mission" className="about-image" />
      </div>
    </div>
  );
};

export default About;