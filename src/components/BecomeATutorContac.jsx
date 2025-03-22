import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "../.ExternalCss/ContactUs.module.css";

const ContactForm = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';
    
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        setStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully. We will get back to you shortly.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setLoading(false);
      })
      .catch((error) => {
        setStatus({
          submitted: true,
          success: false,
          message: 'Oops! Something went wrong. Please try again later.'
        });
        console.error('Error sending email:', error);
        setLoading(false);
      });
  };

  return (
    <div className={styles["contact-us-main"]}>
      <div className={styles["contact-us-container"]}>
        <h1 className={styles["contact-us-title"]}>Contact Us</h1>
        <p className={styles["contact-us-subtitle"]}>
          Have questions or need assistance? Reach out to our team and we'll get back to you shortly!
        </p>
        
        {status.submitted ? (
          <div className={`${styles["status-message"]} ${status.success ? styles["success"] : styles["error"]}`}>
            {status.message}
          </div>
        ) : null}
        
        <div className={styles["contact-form-container"]}>
          <form ref={formRef} onSubmit={handleSubmit} className={styles["contact-form"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="name" className={styles["form-label"]}>Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles["form-input"]}
                required
              />
            </div>
            
            <div className={styles["form-group"]}>
              <label htmlFor="email" className={styles["form-label"]}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles["form-input"]}
                required
              />
            </div>
            
            <div className={styles["form-group"]}>
              <label htmlFor="subject" className={styles["form-label"]}>Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles["form-input"]}
                required
              />
            </div>
            
            <div className={styles["form-group"]}>
              <label htmlFor="message" className={styles["form-label"]}>Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={styles["form-textarea"]}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className={styles["submit-button"]}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          <div className={styles["contact-info"]}>
            <div className={styles["info-section"]}>
              <h3>Our Address</h3>
              <p>123 Education Lane, Learning City</p>
            </div>
            
            <div className={styles["info-section"]}>
              <h3>Email Us</h3>
              <p>support@smarttutor.com</p>
            </div>
            
            <div className={styles["info-section"]}>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;