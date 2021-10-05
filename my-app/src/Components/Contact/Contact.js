import React from "react";
import { useHistory } from "react-router-dom";
import { sendForm, init } from "emailjs-com";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
init("user_wsCNxCbHxNqvn7lKi40MW");

export default function Contact() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const successMessage = () => toast.success("Your email has been sent!");
  const errorMessage = () => toast.error("Message failed to send.");
  const history = useHistory();

  const sendEmail = (data) => {
    console.log("this is our data", data);
    data.preventDefault();
    sendForm(
      "service_cukia6t",
      "template_59wbey8",
      data.target,
      "user_wsCNxCbHxNqvn7lKi40MW"
    )
      .then((response) => {
        console.log("this is our response", response);
        successMessage();
        history.push("/home");
      })
      .catch((error) => {
        console.log("this is our error", error);
        errorMessage();
      });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">CONTACT FORM</h1>
      <h2 className="form-sub-title">
        Send me an email, I look forward to do buisness with you.
      </h2>
      <form
        id="contact-form"
        onSubmit={(data) => handleSubmit(sendEmail(data))}
      >
        <input
          className="input-box"
          type="text"
          name="fullName"
          placeholder="Name"
          {...register("fullName", { required: true })}
        />
        {errors.password && <p>Name is invalid</p>}
        <input
          className="input-box"
          type="text"
          name="user_email"
          placeholder="Email Adress"
          {...register("user_email", { required: true })}
        />

        <input
          className="input-box"
          type="text"
          name="subject"
          placeholder="Subject"
          {...register("subject", { required: true })}
        />

        <textarea
          className="large-text-box"
          type="text"
          name="message"
          placeholder="Message to Andrew..."
          {...register("message", { required: true })}
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
