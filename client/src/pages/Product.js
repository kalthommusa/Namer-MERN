import React from "react";
import productDetails from "../imgs/product-details.jpg";

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-section">
        <h2 className="product-title">Zero Liquid Discharge Plant (ZLD):</h2>
        <p className="product-text">
          The proposed industrial wastewater treatment system, employing zero liquid discharge (ZLD) technology, desires to cleanse and filter impure water, turning toxins into safe materials and reusable water. 
          <br />
          The system leverages advanced adsorption technology recognized for its proven efficiency and eco-friendly results. One of the technologies used is *“simultaneous magnetic adsorption”*, ensuring accurate separation of pollutants, such as dyes and heavy metals, without harming the environment.
        </p>
        <img src={productDetails} alt="Zero Liquid Discharge Plant (ZLD)" className="product-image" />
      </div>
    </div>
  );
};

export default Product;
