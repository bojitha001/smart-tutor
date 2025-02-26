import React from 'react'

function FAQItem({ question, answer, isOpen, onClick }) {
    return (
      <div className="faq-wrapper">
        <div
          className={`faq-question-box ${isOpen ? "active" : ""}`}
          onClick={onClick}
        >
          <span>{question}</span>
          <span className="arrow">{isOpen ? "▼" : "▶"}</span>
        </div>
        {isOpen && <div className="faq-answer">{answer}</div>}
      </div>
    );
  }


export default FAQItem