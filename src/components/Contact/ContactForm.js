import { useRef } from "react";
import emailjs from "@emailjs/browser";

// styles
import "./ContactForm.scss";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      // Make sure .env file exists with all of the following 'REACT_APP_EMAILJS...' values!
      `${process.env.REACT_APP_EMAILJS_SERVICE_ID}`,
      `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
      form.current,
      `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`)
      .then(
        (result) => {
          console.log(result.text);
          console.log('Message sent successfully!')
          e.target.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset()
  };

  return (
    <div>
      <div className="container-form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="name" />
          <label>E-mail Address</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};
