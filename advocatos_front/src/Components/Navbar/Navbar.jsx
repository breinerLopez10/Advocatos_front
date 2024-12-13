import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de crear este archivo para estilos

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Advocatus</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="navbar-item">Home</Link></li>
        <li><Link to="/about" className="navbar-item">Us</Link></li>
        <li><Link to="/contact" className="navbar-item">Contact</Link></li>
        <li><Link to="/login" className="navbar-item">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
