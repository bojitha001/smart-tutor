import React, { useEffect, useState } from "react";
import { data, useParams, useNavigate } from "react-router-dom";
import styles from "../../.ExternalCss/KuppiGroups.module.css";
import { useUser } from "@clerk/clerk-react";
import QuestionForm from "./QuestionForm";

const getCommunityQuestionFormById = async (id) => {
  const res = await fetch(`http://www.smarttutor.lk/comunityQuestions/${id}`, {
    method: "GET",
  });
  const communityForm = await res.json();
  return communityForm;
};

const addAnswer = async (answers) => {
  const res = await fetch("http://www.smarttutor.lk/answers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", //saying we are passing a json
    },
    body: JSON.stringify(answers),
  });
};

const getAnswerByQuestionId = async (id) => {
  //   console.log(id)
  const res = await fetch(`http://www.smarttutor.lk/answers?questionId=${id}`, {
    method: "GET",
  });
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

const FullQuestion = () => {
  const params = useParams();
  const { user } = useUser();
  const userId = user?.id;
  const userImageUrl = user?.imageUrl;
  const userName = user
    ? `${user.firstName || ""} ${user.lastName || ""}`.trim()
    : "Anonymous";
  const userEmail = user?.emailAddresses?.[0]?.emailAddress || "Anonymous";
  //   console.log(params);
  const [questionForm, setQuestionForm] = useState(null);
  const [answer, setAnswer] = useState([]);
  const navigate = useNavigate();
  const [communityId, setCommunityId] = useState(null);

  const [formData, setFormData] = useState({
    answer: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // console.log(params.id)
    addAnswer({
      userId,
      userName,
      userImageUrl,
      userEmail,
      answers: formData.answer,
      question: params.id,
    });
    console.log(answer);

    navigate(`/kuppigroups-communities/${communityId}`);
  };

  useEffect(() => {
    getCommunityQuestionFormById(params.id)
      .then((data) => {
        setQuestionForm(data);
        if (data && data.community) {
          setCommunityId(data.community);
        }
      })
      .catch((err) => {})
      .finally(() => {});

    getAnswerByQuestionId(params.id)
      .then((data) => {
        setAnswer(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params, setAnswer]);

  return (
    <>
      <div></div>{" "}
      <div className={styles.fullQuestion}>
        <div className={styles.questoinBox}>
          <p className={styles.questionTopic}>{questionForm?.topic}</p>
          <p className={styles.questionDes}>{questionForm?.questions}</p>
        </div>

        <div className={styles.answerBoxMain}>
          <p className={styles.answerBoxTopic}>General Disscusions</p>
          <div className={styles.answerBoxSection1}>
            {answer && answer.length > 0 ? (
              answer.map((ans, index) => (
                <div className={styles.answerBox} key={ans._id || index}>
                  <img
                    className={styles.userImageUrl}
                    src={ans.userImageUrl || "https://via.placeholder.com/40"}
                    alt="User avatar"
                  />
                  <span className={styles.userName}>
                    {ans.userName || "Anonymous"}
                  </span>
                  <span className={styles.userName}>
                    {ans.userEmail || "Anonymous"}
                  </span>
                  <span className={styles.timeAgo}>
                    {timeAgo(ans.createdAt)}
                  </span>
                  <p>{ans.answers}</p>
                </div>
              ))
            ) : (
              <p>No answers yet</p>
            )}
          </div>
          <div className={styles.formContainer}>
            <form action="" onSubmit={handleSubmit}>
              <div className={styles.textareaWrapper}>
                <div className={styles.textareaContainer}>
                  <textarea
                    className={styles.textarea}
                    required
                    name=""
                    value={formData.answer}
                    onChange={(event) =>
                      setFormData({ ...formData, answer: event.target.value })
                    }
                  ></textarea>
                  <div className={styles.characterCounter}>
                    {formData.answer.length}/500
                  </div>
                </div>
                
                  <button className={styles.submitButton}>Submit</button>
                
              </div>

              {formData.answer.trim().length === 0 && (
                <p className={styles.tipText}>
                  Start typing to enable submission
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default FullQuestion;
