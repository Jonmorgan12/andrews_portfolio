import React from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

export default function Contact() {
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_cukia6t",
        "template_59wbey8",
        event.target,
        "user_wsCNxCbHxNqvn7lKi40MW"
      )
      .then((response) => {
        console.log(response);
        alert("Your message has been sent!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="form-container">
      <h1 className="form-title">CONTACT FORM</h1>
      <h2 className="form-sub-title">
        Send me an email, I look forward to do buisness with you.
      </h2>
      <form onSubmit={sendEmail}>
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
          name="user_email"
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
        <input
          type="submit"
          value="Send Message"
          className="send-message"
          style={{ overflow: "auto" }}
        />
      </form>
    </div>
  );
}
