import React from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const getCommunityById = async (id) => {
  const res = await fetch(`http://localhost:8080/communities/${id}`, {
    method: "GET",
  });
  const communities = await res.json();
  return communities;
  // console.log(jobs);
};

const QuestionForm = () => {
  const [communities, setCommunities] = useState(null);
  const params = useParams();

  useEffect(() => {
    getCommunityById(params.id)
      .then((data) => {
        setCommunities(data);
      })
      .catch((err) => {})
      .finally(() => {});
  }, [params]);

  const [questions, setQuestions] = useState([
    {
      questions: "The component below uses Material UI Datagrid Premium to display a list of scholarships, and if students have applied for the scholarship, they are grouped by scholarshipName and ex",
      subQ: "The component below uses Material UI Datagrid Premium to display a list of scholarships, and if students have applied for the scholarship, they are grouped by scholarshipName and ex",
    },
  ]);

  return (
    <>
      <div className={`${styles["questions-container"]}`}>
        <div className={`${styles["questions-box"]}`}>
          <div>
            
          </div>
          {questions.map((question) => (
            <div>
              <p>{question.questions}</p>
              <p>{question.subQ}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>{`Welcome to ${communities?.name}`}</h1>
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
