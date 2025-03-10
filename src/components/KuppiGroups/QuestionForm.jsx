import React from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";

const QuestionForm = () => {
  return (
    <>
      <div>
        
      </div>
      <div className={styles.questionInput}>
        <input
          type="text"
          placeholder="Enter your topic here"
          className={styles.topicInput}
          // value={newTopic}
          // onChange={(e) => setNewTopic(e.target.value)}
        />
        <textarea
          placeholder="Describe your question here"
          className={styles.questionTextarea}
          // value={newQuestion}
          // onChange={(e) => setNewQuestion(e.target.value)}
        ></textarea>

        <button
          className={styles.postQuestionButton}
          // onClick={handlePostQuestion}
          // disabled={!newTopic  !newQuestion  !selectedCommunityForPost}
        >
          Post Question
        </button>
      </div>
    </>
  );
};

export default QuestionForm;
