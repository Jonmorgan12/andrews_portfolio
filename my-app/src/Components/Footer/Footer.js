import React from "react";
import "./Footer.css";
import { AiFillPhone as Phone, AiFillMail as Mail } from "react-icons/ai";
import { IoLocationSharp as Location } from "react-icons/io5";

function Footer() {
  return (
    <>
      <hr className="lineBreak" />
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-row">
            <div className="footer-column">
              <h4>Contact Information</h4>
              <ul className="footer-list">
                <li>
                  <Phone /> Phone: <b>+1 (805) 717-3806</b>
                </li>
                <li>
                  <Mail /> Email:{" "}
                  <a
                    style={{ color: "blue" }}
                    href="mailto:andrewncobb33@gmail.com?"
                    subject="HTML link"
                  >
                    andrewncobb33@gmail.com
                  </a>
                </li>
                <li>
                  <Location /> Location: <b>San Luis Obispo, CA</b>
                </li>
              </ul>
            </div>
            {/* Column2 */}
            {/* <div className="footer-column">
              <h4>Column2</h4>
              <ul className="footer-list">
                <li>(phone number)</li>
                <li>(location)</li>
                <li>(adress)</li>
              </ul>
            </div> */}
            {/* Column3 */}
            {/* <div className="footer-column">
              <h4>Column3</h4>
              <ul className="footer-list">
                <li>(phone number)</li>
                <li>(location)</li>
                <li>(adress)</li>
              </ul>
            </div> */}
          </div>
          <div className="footer-privacy">
            <p className="">
              <b>
                {new Date().getFullYear()} Jon-morgan Cobb | All Rights Reserved
              </b>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
