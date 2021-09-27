import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <h1 className="navbar-title">ANDREW COBB</h1>
      <nav>
        <ul className="navbar-links">
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
        </ul>
      </nav>
      <a className="contact-button" href="#">
        <button>Contact</button>
      </a>
    </header>
  );
}

export default Navbar;
