import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram as Instagram,
  AiOutlineFacebook as Facebook,
  AiOutlineTwitter as Twitter,
} from "react-icons/ai";

function Navbar() {
  return (
    <header>
      <h1 className="navbar-title">ANDREW COBB</h1>
      <div className="social-media-icons">
        <span className="icons">
          <Instagram style={{ height: "1.5rem", width: "1.5rem" }} />
        </span>
        <span className="icons">
          <Facebook style={{ height: "1.5rem", width: "1.5rem" }} />
        </span>
        <span className="icons">
          {" "}
          <Twitter style={{ height: "1.5rem", width: "1.5rem" }} />
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
