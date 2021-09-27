import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <h1 className="navbar-title">
        <Link to="/home">ANDREW COBB</Link>
      </h1>
      <nav>
        <ul className="navbar-links">
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
        </ul>
      </nav>
      <Link className="contact-button" to="/contact">
        <button>Contact</button>
      </Link>
    </header>
  );
}

export default Navbar;
