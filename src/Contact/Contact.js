import React, { useEffect, useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add( faGithub, faFacebook)

const Contact = props => {
  console.log(props);
  return (
    <div className="contact">
      <div className="contactBody">
        <h1>Send me a Message</h1>

        <div className="contactBodyMain">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Subject" />
        </div>
        <input type="email" placeholder="Email" />

        <textarea className="message" type="text" placeholder="Message" />
      </div>
      <div className="contactInfo">
        <h1>Contact Info</h1>
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
          <a><FontAwesomeIcon color="black" size="2x" icon={faFacebook} /></a>
          <a><FontAwesomeIcon color="black" size="2x" icon={faInstagram} /></a>
          <a><FontAwesomeIcon color="black" size="2x" icon={faGithub} /></a>
          <a><FontAwesomeIcon color="black" size="2x" icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
