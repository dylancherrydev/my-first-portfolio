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
          <div className="div-form">
            <label>
              <span>Name</span>
              <input type="text" name="name" />
            </label>
          </div>
          <div className="div-form">
            <label>
              <span>E-mail Address</span>
              <input type="email" name="email" />
            </label>
          </div>
          <div className="div-form">
            <label>
              <span>Message</span>
              <textarea name="message" />
            </label>
            <div className="div-form">
              <input type="submit" value="Send" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
