import React from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Questions from "./Questions";
import { Link } from "react-router";



const getCommunityById = async (id) => {
  const res = await fetch(`http://localhost:8080/communities/${id}`, {
    method: "GET",
  });
  const communities = await res.json();
  return communities;
  // console.log(jobs);
};

export const getCommunityQuestionForm = async (id) => {
  const res = await fetch(
    `http://localhost:8080/comunityQuestions?communityId=${id}`,
    {
      method: "GET",
    }
  );
  const data = await res.json();
  return data;
};

const QuestionForm = () => {
  const [communities, setCommunities] = useState(null);
  const [questionForm, setQuestionForm] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCommunityById(params.id)
      .then((data) => {
        setCommunities(data);
      })
      .catch((err) => {})
      .finally(() => {});

    getCommunityQuestionForm(params.id)
      .then((data) => {
        setQuestionForm(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params, setQuestionForm]);

  

  const [expandedQuestions, setExpandedQuestions] = useState({});

  const truncateText = (text, maxLength = 400) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  return (
    <>
      <div className={`${styles["questions-container"]}`}>
        <div className={`${styles["questions-box"]}`}>
          {questionForm.map((question) => (
            <Link
              className={`${styles["main-questions-container"]}`}
              to={`/kuppigroups-communities/${params.id}/questionform/${question._id}`}
            >
              <div key={question.id}>
                <p className={styles.questionTopic}>{question.topic}</p>
                <p className={styles.questionText}>
                  {expandedQuestions[question.id]
                    ? question.questions
                    : truncateText(question.questions)}
                  {/* {question.questions.length > 100 &&
                  !expandedQuestions[question.id] && (
                    <span className={styles.readMore}>Read more</span>
                  )} */}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h1>{`Welcome to ${communities?.name}`}</h1>
      </div>
      <Link to={`/kuppigroups-communities/${params.id}/questionform`}>
        <button className={`${styles["question-button"]}`}>
          Add a Question
        </button>
      </Link>
    </>
  );
};

export default QuestionForm;
