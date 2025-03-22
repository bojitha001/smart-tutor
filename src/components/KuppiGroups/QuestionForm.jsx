import React from "react";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import { useUser } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Questions from "./Questions";
import { Link } from "react-router";

const getCommunityById = async (id) => {
  

  const res = await fetch(`http://localhost:8080/communities/${id}`, {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${token}`,
    },
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
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

const timeAgo = (dateString) => {
  if (!dateString) return "Unknown time";

  const date = new Date(dateString);

  // Check if date is valid
  if (isNaN(date.getTime())) return "Invalid date";

  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  // Less than a minute
  if (seconds < 60) {
    return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
  }

  // Less than an hour
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  }

  // Less than a day
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  }

  // Less than a week
  const days = Math.floor(hours / 24);
  if (days < 7) {
    return days === 1 ? "1 day ago" : `${days} days ago`;
  }

  // Less than a month
  const weeks = Math.floor(days / 7);
  if (weeks < 4) {
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  }

  // Less than a year
  const months = Math.floor(days / 30);
  if (months < 12) {
    return months === 1 ? "1 month ago" : `${months} months ago`;
  }

  // More than a year
  const years = Math.floor(days / 365);
  return years === 1 ? "1 year ago" : `${years} years ago`;
};

const QuestionForm = () => {
  const [communities, setCommunities] = useState(null);
  const [questionForm, setQuestionForm] = useState([]);
  const params = useParams();
  
  const { user } = useUser();
  // const { isLoaded, isSignedIn, user } = useUser();

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
        <div >
          <h1>Disscussion Area</h1>
          <Link to={`/kuppigroups-communities/${params.id}/questionform`}>
            <button className={`${styles["question-button"]}`}>
              Add a Question
            </button>
          </Link>
        </div>
        <div className={`${styles["questions-box"]}`}>
          {questionForm.length === 0 ? (
            <div className={styles.noQuestions}>No questions yet</div>
          ) : (
            [...questionForm].reverse().map((question) => (
              <Link
                className={`${styles["main-questions-container"]}`}
                to={`/kuppigroups-communities/${params.id}/questionform/${question._id}`}
                key={question._id}
              >
                <div>
                  <div className={styles.questionHeader}>
                    <p className={styles.questionTopic}>{question.topic}</p>

                    
                    <span className={styles.timeAgo}>
                      {timeAgo(question.createdAt)}
                    </span>
                  </div>

                  <div className={styles.userInfoContainer}>
                    <img
                      className={styles.userImageUrl}
                      src={
                        question.userImageUrl ||
                        "https://via.placeholder.com/40"
                      }
                      alt="User avatar"
                    />
                    <span className={styles.userName}>
                      {question.userName || "Anonymous"}
                    </span>
                  </div>

                  <p className={styles.questionText}>
                    {expandedQuestions[question._id]
                      ? question.questions
                      : truncateText(question.questions)}
                  </p>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
