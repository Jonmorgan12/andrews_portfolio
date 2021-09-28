import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

function Navbar() {
  return (
    <header>
      <h1 className="navbar-title">ANDREW COBB</h1>
      {/* <AiOutlineInstagram style={{ marginRight: "27vw" }} /> */}
      {/* <AiOutlineFacebook /> */}
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
