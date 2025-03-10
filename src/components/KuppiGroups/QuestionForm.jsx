import React from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import { useState,useEffect } from "react";
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

  return (
    <>
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
