import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  AiOutlineInstagram as Instagram,
  AiFillLinkedin as LinkedIn,
} from "react-icons/ai";
import { GiHamburgerMenu as ToggleButton } from "react-icons/gi";

window.onload = function () {
  console.log("clicked");
  const toggleButton = document.getElementsByClassName("toggle-button")[0];
  const navbarLinks = document.getElementsByClassName("navbar-links")[0];

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });
};

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">ANDREW COBB</div>
      <ToggleButton className="toggle-button" style={{ color: "#333" }} />
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
      <div className="navbar-links">
        <ul>
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
      </div>
      <Link className="contact-button" to="/contact">
        <button>Contact</button>
      </Link>
    </nav>
  );
}

export default Navbar;
