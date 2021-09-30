import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="form-container">
      <h1 className="form-title">Contact Form</h1>
      <form>
        <label>Full Name</label>
        <input className="input-box" type="text" name="fullName" />
        <label>Email</label>
        <input className="input-box" type="text" name="email" />
        <label>Subject</label>
        <input className="input-box" type="text" name="subject" />
        <label>Message</label>
        <textarea className="large-text-box" type="text" name="message" />
      </form>
      <div>
        <button className="send-message">Send Message</button>
      </div>
    </div>
  );
}
