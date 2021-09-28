import React from "react";
import "./Footer.css";
import {
  AiOutlineInstagram as Instagram,
  AiOutlineFacebook as Facebook,
  AiOutlineTwitter as Twitter,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-row">
          {/* Column1 */}
          <div className="footer-column">
            <h4>Contact Information</h4>
            <ul className="footer-list">
              <li>Phone: +1 (805) 717-3806</li>
              <li>
                Email:{" "}
                <a
                  style={{ color: "blue" }}
                  href="mailto:jonmorgan.cobb@gmail.com?"
                  subject="HTML link"
                >
                  jonmorgan.cobb@gmail.com
                </a>
              </li>
              <li>Location: San Luis Obispo, CA</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="footer-column">
            <h4>Column2</h4>
            <ul className="footer-list">
              <li>(phone number)</li>
              <li>(location)</li>
              <li>(adress)</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="footer-column">
            <h4>Column3</h4>
            <ul className="footer-list">
              <li>(phone number)</li>
              <li>(location)</li>
              <li>(adress)</li>
            </ul>
          </div>
        </div>
        <div className="social-media-icons">
          <Instagram style={{ height: "1.5rem", width: "1.5rem" }} />
          <Facebook style={{ height: "1.5rem", width: "1.5rem" }} />
          <Twitter style={{ height: "1.5rem", width: "1.5rem" }} />
        </div>
        <div className="footer-privacy">
          <p className="">
            {new Date().getFullYear()} Jon-morgan Cobb | All Rights Reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
