import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import { useUser, UserButton } from '@clerk/clerk-react';

const createCommunityQuestionForm = async (questionForm) => {
  const token = await window.Clerk.session.getToken();

  const res = await fetch("http://localhost:8080/comunityQuestions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //saying we are passing a json
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(questionForm),
  });
};

const Questions = () => {
  const params = useParams();
  const { user } = useUser();
  const userId = user?.id;
  const userImageUrl = user?.imageUrl;
  const userName = user ? `${user.firstName || ''} ${user.lastName || ''}`.trim() : 'Anonymous';
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    topic: "",
    questions: " ",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    createCommunityQuestionForm({
      userId,
      userName, 
      topic: formData.topic,
      questions: formData.questions,
      userImageUrl,
      community: params.id,
      
    });
    
    navigate(`/kuppigroups-communities/${userId}`)
  };
  return (
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
  );
};

export default Questions;
