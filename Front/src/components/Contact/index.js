import React from 'react';

import './contact.scss';

const Contact = (props) => {
  console.log(props)
  return (
  <div className="container">

    <h1 className="contact">Get in touch</h1>
    <form className="contact-form row" />
    <div className="form-field col x-50">
      <input id="name" className="input-text js-input" type="text" placeholder="Name" required />
    </div>
    <div className="form-field col x-100">
      <input id="email" className="input-text js-input" type="text" placeholder="Email" required />

    </div>
    <div className="form-field col x-100 ">
      <textarea id="message" className="input-text js-input message" type="text" rows="6" cols="40" placeholder="Message" required />

    </div>

    <div className="form-field col x-100 align-center">
      <button className="submit-btn" type="submit" value="Submit">Envoyer</button>
    </div>

  </div>

);
  };

export default Contact;
