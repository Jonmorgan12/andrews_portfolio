import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="form-container">
      <h1 className="form-title">CONTACT FORM</h1>
      <h2 className="form-title">
        Send me an email, I look forward to do buisness with you.
      </h2>
      <form>
        {/* <label>Name</label> */}
        <input
          className="input-box"
          type="text"
          name="fullName"
          placeholder="Name"
        />
        {/* <label>Email Adress</label> */}
        <input
          className="input-box"
          type="text"
          name="email"
          placeholder="Email Adress"
        />
        {/* <label>Subject</label> */}
        <input
          className="input-box"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        {/* <label>Message</label> */}
        <textarea
          className="large-text-box"
          type="text"
          name="message"
          placeholder="Message to Andrew..."
        />
      </form>
      <div style={{ overflow: "auto" }}>
        <button className="send-message">Send Message</button>
      </div>
    </div>
  );
}
