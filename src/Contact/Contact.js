import React, { useEffect, useState } from "react";
import * as emailjs from "emailjs-com";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  faGithub,
  faFacebook,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

library.add(faGithub, faFacebook);

const Contact = props => {
  const [values, setValues] = useState({
    // reply_to: "moelshabshiri14@gmail.com",
    // from_name: "from_name_value",
    // to_name: "to_name_value",
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const service_id = "gmail";
  const template_id = "template_t5WRnrzD";

  const handleChange = evt => {
    const value = evt.target.value;
    setValues({
      ...values,
      [evt.target.name]: value
    });
  };

  const handleSubmit = () => {
    console.log("hc");
    emailjs.send(service_id, template_id, values, "user_rjGspJLl39oURBAZpTJLU");
  };

  return (
    <div className="contact" id="contactPage">
      <div className="contactBody">
        <form onSubmit={handleSubmit}>
          <h1 className="pageTitle">Send me a Message</h1>

          <div className="contactBodyMain">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Phone Number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
            />
          </div>
          <input
            required
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />

          <textarea
            className="message"
            type="text"
            name="message"
            placeholder="Message"
            value={values.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="contactButton">
            SEND
          </button>
        </form>
      </div>
      <div className="contactInfo">
        <h1 className="pageTitle">Contact Info</h1>
        <div className="cIdiv">
          <FontAwesomeIcon color="black" size="2x" icon={faEnvelope} />
          <h2>Email</h2>
        </div>
        <h3>elshabshiri@aucegypt.edu</h3>
        <div className="cIdiv">
          <FontAwesomeIcon color="black" size="2x" icon={faPhone} />
          <h2>Number</h2>
        </div>
        <h3>+201097503396</h3>

        <div className="socialmedia">
          <a
            href="https://www.facebook.com/mohamed.elshabshiri"
            target="_blank"
          >
            <FontAwesomeIcon color="black" size="2x" icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/mo.elshabshiri/" target="_blank">
            <FontAwesomeIcon color="black" size="2x" icon={faInstagram} />
          </a>
          <a href="https://github.com/moelshabshiri" target="_blank">
            <FontAwesomeIcon color="black" size="2x" icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-elshabshiri/"
            target="_blank"
          >
            <FontAwesomeIcon color="black" size="2x" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
