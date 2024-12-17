import { NavLink } from "react-router-dom";

import logo from "../imgs/home-namer3.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-image" />
        <h1 className="logo-text">ZLD</h1>
      </div>
      <div className="links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        <NavLink to="/product" className={({ isActive }) => (isActive ? "active" : "")}>Product</NavLink>
        <NavLink to="/water-pollution-control" className={({ isActive }) => (isActive ? "active" : "")}>Water Pollution Control</NavLink>
        <NavLink to="/application" className={({ isActive }) => (isActive ? "active" : "")}>Application</NavLink>
        <NavLink to="/contact-us" className={({ isActive }) => (isActive ? "active" : "")}>Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
