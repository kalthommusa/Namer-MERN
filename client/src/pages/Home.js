import React from "react";

import logo from "../imgs/home-namer3.jpeg";

import productImage from "../imgs/product.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to</h1>
        <img src={logo} alt="Logo" className="home-logo" />
      </div>
      <img src={productImage} alt="Product" className="home-product" />
    </div>
  );
};

export default Home;
