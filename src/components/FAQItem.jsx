import React from "react";
import styles from "../.ExternalCss/FAQ.module.css";

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`${styles["faq-container"]}`}>
      <div className={`${styles["faq-wrapper"]}`}>
        <div
          className={`${styles["faq-question-box"]} ${
            isOpen ? styles["active"] : ""
          }`}
          onClick={onClick}
        >
          <span>{question}</span>
          <span className={`${styles["arrow"]}`}>{isOpen ? "▼" : "▶"}</span>
        </div>
        {isOpen && <div className={`${styles["faq-answer"]}`}>{answer}</div>}
      </div>
    </div>
  );
}

export default FAQItem;
