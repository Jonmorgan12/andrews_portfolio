import React from "react";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import "./Contact.css";

export default function Contact() {
  const history = useHistory();

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
        // alert("Your message has been sent!");
      })
      .catch((error) => console.log(error));

    history.push("/home");
  };

  return (
    <div className="form-container">
      <h1 className="form-title">CONTACT FORM</h1>
      <h2 className="form-sub-title">
        Send me an email, I look forward to do buisness with you.
      </h2>
      <form onSubmit={sendEmail}>
        <input
          className="input-box"
          type="text"
          name="fullName"
          placeholder="Name"
        />
        <input
          className="input-box"
          type="text"
          name="user_email"
          placeholder="Email Adress"
        />
        <input
          className="input-box"
          type="text"
          name="subject"
          placeholder="Subject"
        />
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
