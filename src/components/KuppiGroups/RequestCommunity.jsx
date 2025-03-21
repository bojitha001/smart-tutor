import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../../.ExternalCss/requestCommunity.module.css'; 

const RequestCommunity = () => {
  const form = useRef();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('ajZrfxBXfcgsfilAE');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zx59o4k', 'template_0dijfu9', form.current)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        form.current.reset(); // Clear the form
      }, (error) => {
        console.log('Failed to send email:', error.text);
      });
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="form">
      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <input type="text" name="message" id="message" required />
      </div> 
      <input type="submit" id="button" value="Send Email" className="submit-button" />
    </form>
  );
};

export default RequestCommunity;