import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../.ExternalCss/requestCommunity.module.css";
import win from "../../assets/images/win.jpg";

const RequestCommunity = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Track window size for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("ajZrfxBXfcgsfilAE");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ type: "", text: "" });

    emailjs.sendForm("service_zx59o4k", "template_0dijfu9", form.current).then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        form.current.reset(); // Clear the form
        setSubmitMessage({
          type: "success",
          text: "Your request has been sent successfully!",
        });
        setIsSubmitting(false);
      },
      (error) => {
        console.log("Failed to send email:", error.text);
        setSubmitMessage({
          type: "error",
          text: "Failed to send your request. Please try again.",
        });
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.imageContainer}>
          <img
            src={win}
            alt="Community"
            className={styles.image}
            loading="lazy"
          />
        </div>

        <div className={styles.formContainer}>
          <h2 className={styles.heading}>Request a Community!</h2>

          {submitMessage.text && (
            <div
              style={{
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "5px",
                backgroundColor:
                  submitMessage.type === "success" ? "#d4edda" : "#f8d7da",
                color: submitMessage.type === "success" ? "#155724" : "#721c24",
                textAlign: "center",
              }}
            >
              {submitMessage.text}
            </div>
          )}

          <form ref={form} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.label}>
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className={styles.input}
                placeholder="Enter your name"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className={styles.input}
                placeholder="Enter your email address"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className={styles.textarea}
                placeholder="Describe the community you'd like to request"
              ></textarea>
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Request"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestCommunity;
