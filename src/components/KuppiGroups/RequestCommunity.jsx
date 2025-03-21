import React, { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import '../../.ExternalCss/requestCommunity.module.css'; 
import styles from '../../.ExternalCss/requestCommunity.module.css'; 
import win from '../../assets/images/win.jpg'

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
    <div className={styles.container}>
    <div className={styles.formWrapper}>
      
      <div className={styles.imageContainer}>
        <img src={win} alt="Community" className={styles.image} />
      </div>

      
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Request a Community!</h2>
        <form ref={form} onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input type="text" name="name" id="name" required className={styles.input} />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" name="email" id="email" required className={styles.input} />
          </div>
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea name="message" id="message" required className={styles.textarea}></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Email</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default RequestCommunity;