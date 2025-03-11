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

const createCommunityQuestionForm = async (questionForm) => {
  const res = await fetch("http://localhost:8080/comunityQuestions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //saying we are passing a json
    },
    body: JSON.stringify(questionForm),
  });
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

  const [questions, setQuestions] = useState([
    {
      questions:
        "The component below uses Material UI Datagrid Premium to display a list of scholarships, and if students have applied for the scholarship, they are grouped by scholarshipName and ex",
      subQ: "The component below uses Material UI Datagrid Premium to display a list of scholarships, and if students have applied for the scholarship, they are grouped by scholarshipName and ex",
    },
  ]);

  const [formData, setFormData] = useState({
    topic: "",
    questions: " ",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    createCommunityQuestionForm({
      userId: "123",
      topic: formData.topic,
      questions: formData.questions,
      community: params.id,
    });
  };

  return (
    <>
      <div className={`${styles["questions-container"]}`}>
        <div className={`${styles["questions-box"]}`}>
          {questionForm.map((question) => (
            <div key={question.id}>
              <p>{question.topic}</p>
              <p>{question.questions}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>{`Welcome to ${communities?.name}`}</h1>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className={styles.questionInput}>
          <input
            type="text"
            placeholder="Enter your topic here"
            className={styles.topicInput}
            required
            value={formData.topic}
            onChange={(event) =>
              setFormData({ ...formData, topic: event.target.value })
            }
          />
          <textarea
            placeholder="Describe your question here"
            className={styles.questionTextarea}
            required
            value={formData.questions}
            onChange={(event) =>
              setFormData({ ...formData, questions: event.target.value })
            }
          ></textarea>
          <button className={styles.postQuestionButton}>Post Question</button>
        </div>
      </form>
    </>
  );
};

export default QuestionForm;
