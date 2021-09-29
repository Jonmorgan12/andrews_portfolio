import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram as Instagram,
  AiFillLinkedin as LinkedIn,
} from "react-icons/ai";

function Navbar() {
  return (
    <header>
      <h1 className="navbar-title">ANDREW COBB</h1>
      <div className="social-media-icons">
        <span className="icons">
          <a href="https://www.instagram.com/countrycobb/" target="_blank">
            <Instagram style={{ height: "1.5rem", width: "1.5rem" }} />
          </a>
        </span>
        <span className="icons">
          <a
            href="https://www.linkedin.com/in/andrew-cobb-96b9b61ba/"
            target="_blank"
          >
            <LinkedIn style={{ height: "1.5rem", width: "1.5rem" }} />
          </a>
        </span>
      </div>
      <nav>
        <ul className="navbar-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
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
