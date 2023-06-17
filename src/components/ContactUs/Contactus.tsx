import React from "react";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import "./contact-us.css";

const Contactus = () => {
  return (
    <section id="contact-us" className="contact-us">
      <div>
        <h1>Contact Us</h1>
        <article>
          Still Got Questions?
          <br />
          Clarify your queries by emailing us
          <br />
          on address below
          <br />
          <a href="mailto: nanomacrotech.solutions@gmail.com">
            nanomacrotech.solutions@gmail.com
          </a>
        </article>
      </div>
      <section className="get-in-touch">
        <h3>Get in touch</h3>
        <span>Lets collaborate to expand your business</span>
        <div className="name-group">
          <TextField label="Full Name" required />
          <TextField label="Business Email" required />
        </div>
        <div className="phone-group">
          <TextField label="Country" required />
          <TextField label="Phone" />
        </div>
        <TextField
          label="Tell us about your application needs"
          height="6rem"
          placeholder="Tell us about your application needs"
          variant="textarea"
        />
        <div className="data-security">We never share your data.</div>
        <Button label="Contact us" width="100%" height="2.5rem" />
      </section>
    </section>
  );
};

export default Contactus;
