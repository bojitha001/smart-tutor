import React from 'react'
import { useState } from 'react'
import styles from "../../.ExternalCss/QuestionForm.module.css";
import question from "../../assets/images/Thoughts-rafiki.png"

const QuestionForm = () => {
    const [subject, setSubject] = useState('')
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.logo}>
                    <span className={styles.smart}>SMART</span>
                    <span className={styles.tutor}>TUTOR</span>
                </h1>
            </div>

            <div className={styles.formSection}>
                <h2 className={styles.title}>Your Question</h2>

                <div className={styles.formContainer}>
                    <input
                        type="text"
                        placeholder="Enter your topic here"
                        className={styles.topicInput}
                    />

                    <textarea
                        placeholder="Describe your question here"
                        className={styles.questionInput}
                    />

                    <div className={styles.attachmentSection}>
                        <span className={styles.attachIcon}>📎</span>
                        <span className={styles.attachText}>Attach your images or files here</span>
                    </div>

                    <select
                        className={styles.subjectSelect}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    >
                        <option value="">Select Subject</option>
                        <option value="math">Mathematics</option>
                        <option value="science">Science</option>
                        <option value="english">English</option>
                        <option value="history">History</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                    </select>
                </div>
            </div>

            <div className={styles.footer}>
                <h2 className={styles.slogan}>Learn Together, Grow Together !</h2>
            </div>

            {/* Image Container */}
            <div className={styles.imageContainer}>
                <img src={question} alt="Thinking Illustration" className={styles.image} />
            </div>
        </div>
    )
}

export default QuestionForm